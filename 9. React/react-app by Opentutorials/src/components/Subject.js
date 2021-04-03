import React, { Component } from "react";

class Subject extends Component {
  render() {
    //js 최신 스팩상 class 안의 함수는 function 생략 가능
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
