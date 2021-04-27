import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  //PureComponent는 props와 state안에 들어있는 데이터가
  //최상위에 있는 데이터가 변하지 않으면 render가 호출되지 않음
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); //refresh reject
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //name이 비어있지 않다면 onAdd에 name을 전달한다
    this.formRef.current.reset();
  };
  render() {
    return (
      <form
        ref={this.formRef}
        action=""
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
