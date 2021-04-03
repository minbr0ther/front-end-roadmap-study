import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    //  return 값이 true면 render 호출, false면 render 미호출
    if (this.props.data === newProps.data) {
      return false; //바뀐게 없으면 render하지 않는다
    }
    return true; //바뀐게 있다면 새로 render
  }
  render() {
    //js 최신 스팩상 class 안의 함수는 function 생략 가능
    var lists = [];
    var data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      lists.push(
        //key는 그냥 리액트가 우리에게 원하는 값
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
