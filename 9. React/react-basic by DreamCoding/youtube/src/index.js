import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
//8.8 검색 기능 프로처럼 리팩토링 💡

ReactDOM.render(
  <React.StrictMode>
    <div className="flex justify-center">
      <App youtube={youtube} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
