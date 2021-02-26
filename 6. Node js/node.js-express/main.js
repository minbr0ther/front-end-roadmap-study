var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var qs = require("querystring");
var bodyParser = require("body-parser");
var sanitizeHtml = require("sanitize-html");
var compression = require("compression");
var template = require("./lib/template.js");

app.use(express.static("public"));
// public 파일 안에서 static 파일을 찾는다 (이미지)

app.use(bodyParser.urlencoded({ extended: false }));
// bodyParser 미들웨어
// 모든 데이터를 만든 다음에 콜백 함수를 호출한다
// 첫 번째 인자로 req에 body라는 프로퍼티를 호출 할 수 있다

app.use(compression());
// 압축하는 미들웨어

app.get("*", function (request, response, next) {
  // 파일 목록을 가져올때만 이 코드가 실행되게 한다
  // * 은 전체에 해당함을 말함
  fs.readdir("./data", function (error, filelist) {
    request.list = filelist;
    next();
    // 그 다음에 실행되어야 할 미들 웨어를 실행할지 실행 안할지를
    // 그 미들웨어의 이전 미들웨어가 결정하도록 한다
  });
});

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get("/", function (request, response) {
  var title = "Welcome";
  var description = "Hello, Node.js";
  var list = template.list(request.list);
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:100vh; display:block; margin: 5px;">
    `,
    `<a href="/topic/create">create</a>`
  );
  response.send(html);
});

app.get("/topic/create", function (request, response) {
  var title = "WEB - create";
  var list = template.list(request.list);
  var html = template.HTML(
    title,
    list,
    `
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `,
    ""
  );
  response.send(html);
});

app.post("/topic/create_process", function (request, response) {
  var post = request.body; //bodyParser를 활용해서 코드를 간결하게 만듬
  var title = post.title;
  var title = post.title;
  var description = post.description;
  fs.writeFile(`data/${title}`, description, "utf8", function (err) {
    response.writeHead(302, { Location: `/?id=${title}` });
    response.end();
  });
});

app.get("/topic/update/:pageId", function (request, response) {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    var title = request.params.pageId;
    var list = template.list(request.list);
    var html = template.HTML(
      title,
      list,
      `
        <form action="/topic/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
      `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
    );
    response.send(html);
  });
});

app.post("/topic/update_process", function (request, response) {
  var post = request.body; //bodyParser를 활용해서 코드를 간결하게 만듬
  var title = post.title;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (error) {
    fs.writeFile(`data/${title}`, description, "utf8", function (err) {
      response.redirect(`/topic/${title}`);
    });
  });
});

app.get("/topic/:pageId", function (request, response, next) {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    if (err) {
      next(err);
      // next 안에 뭔가 오면 그것은 err를 던지는 것이다
    } else {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ["h1"],
      });
      var list = template.list(request.list);
      var html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/topic/create">create</a>
            <a href="/topic/update/${sanitizedTitle}">update</a>
            <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>`
      );
      response.send(html);
    }
  });
});

app.post("/delete_process", function (request, response) {
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function (error) {
    response.redirect("/");
  });
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
  // 404 미들웨어
  // 왜 끝에다가 했는가? - 더이상 실행하지 못하고 아래까지 오면 보여준다
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
