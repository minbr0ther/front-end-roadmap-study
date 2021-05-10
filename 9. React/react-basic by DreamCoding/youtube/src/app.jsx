import React, { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [videos, setVideos] = useState([]); //변수와 업데이트 가능한 함수가 할당
  const [name, setName] = useState("ellie");

  useEffect(() => {
    //컴포넌트 마운트, 업데이트 될때마다 호출
    const requestOptions = {
      method: "GET",
      redirect: "follow", //리퀘스트를 할 때 옵션을 전달
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDs0m8QEfN7ipIBJt_RhYK0GtsKmT0Lles",
      requestOptions
    )
      .then((response) => response.json()) //text보다는 json이 개발자 도구에서 보기 좋음
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); //[]를 비워 놓으면 마운트가 되었을 때만 이 부분이 호출됨

  return <h1>Hello React</h1>;
}

export default App;
