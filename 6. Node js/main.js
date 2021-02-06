var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){ //home으로 갔는가
      if(queryData.id === undefined){ //home view
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = template.list(filelist);
          var html = template.HTML(title, list,
            `<h2>${title}</h2><p>${description}</p>`,
            `<a href="/create">create</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      } else {
        fs.readdir('./data', function(error, filelist){
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.HTML(title, list,
              `<h2>${title}</h2><p>${description}</p>`,
             `<a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>`
           );
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    } else if(pathname === '/create') {
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create ';
        var description = 'Hello, Node.js';
        var list = template.list(filelist);
        var html = template.HTML(title, list, `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `, '');
        response.writeHead(200);
        response.end(html);
      });
    } else if(pathname === '/create_process') {
      var body = '';
      request.on('data', function(data) { //data를 조각조각 받아온다
        body += data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        //타이틀과 내용을 보여줄 수 있다
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
      });
    } else if(pathname === '/update'){ //update 관련 form
      fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = template.list(filelist);
          var html = template.HTML(title, list,
            //input에서는 value에 title, textarea에서는 태그 사이에 description
            //hidden기능으로 id를 숨겨놓는다 왜냐하면 title변경시 원래 정보를 모르기 때문이다
            `
            <form action="/update_process" method="post">
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
          response.writeHead(200);
          response.end(html);
        });
      });
    } else if(pathname === '/update_process'){
      var body = '';
      request.on('data', function(data) { //data를 조각조각 받아온다
        body += data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        //id값도 새로 받음
        var id = post.id;
        var title = post.title;
        var description = post.description;
        //id값을 title로 바꾼다
        fs.rename(`data/${id}`, `data/${title}`, function(error){
          //타이틀과 내용을 다시 write 한다
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          });
        });
      });
    } else if(pathname === '/delete_process'){
      var body = '';
      request.on('data', function(data) { //data를 조각조각 받아온다
        body += data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        //id값도 새로 받음
        var id = post.id;
        //id값을 title로 바꾼다
        var filteredId = path.parse(id).base;
        fs.unlink(`data/${filteredId}`, function(err){
            //redirection to home
            response.writeHead(302, {Location: `/`});
            response.end();
        });
      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
