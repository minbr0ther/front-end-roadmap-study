class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDs0m8QEfN7ipIBJt_RhYK0GtsKmT0Lles",
      this.getRequestOptions
    )
      .then((response) => response.json()) //text보다는 json이 개발자 도구에서 보기 좋음
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=AIzaSyDs0m8QEfN7ipIBJt_RhYK0GtsKmT0Lles`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({
          ...item,
          id: item.id.videoId, //id만 object의 videoId로 덮어줌
        }))
      );
  }
}

export default Youtube;
