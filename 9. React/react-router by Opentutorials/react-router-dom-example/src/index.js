import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

var contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 1, title: "React", description: "React is ..." },
];

function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title: "Sorry",
    description: "Not Found",
  };
  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  );
}

function Topics() {
  var lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">HTML is ...</Route>
        <Route path="/topics/2">JS is ...</Route>
        <Route path="/topics/3">React is ...</Route>
      </Switch> */}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
