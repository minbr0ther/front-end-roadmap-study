import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    //js 최신 스팩상 class 안의 함수는 function 생략 가능
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;
