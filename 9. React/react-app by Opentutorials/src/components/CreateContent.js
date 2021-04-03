import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    //js 최신 스팩상 class 안의 함수는 function 생략 가능
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            //e 객체 내의 title과 desc를 가져와서 매개변수로 넣어준다
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
