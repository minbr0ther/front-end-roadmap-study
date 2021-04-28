import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    //component가 ui상에 등록이 되었을때
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    //component가 ui상에서 지워지기 전에
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  handleIncreament = () => {
    //state 오브젝트 안에 인ㅆ는 count를 증가 한뒤 state를 업데이트 해야 함
    //this.setState({ count: this.state.count + 1 });
    this.props.onIncrement(this.props.habit);
  };

  handleDecreament = () => {
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    //count가 0이하면 0을 출력하고 아니면 count 출력
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    //const name = this.props.habit.name;
    //const count = this.props.habit.count;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
