import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncreament = (habit) => {
    //state 오브젝트 안에 인ㅆ는 count를 증가 한뒤 state를 업데이트 해야 함
    //this.setState({ count: this.state.count + 1 });
    //console.log(`handleIncrement ${habit}`);
    const habits = [...this.state.habits]; //spread operator
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits }); //habits:habits => habits으로 생략
  };

  handleDecreament = (habit) => {
    //state 오브젝트 안에 인ㅆ는 count를 증가 한뒤 state를 업데이트 해야 함
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    //count가 0이하면 0을 출력하고 아니면 count 출력
    //console.log(`handleDecrement ${habit}`);
    const habits = [...this.state.habits]; //새로운 habits 선언
    const index = habits.indexOf(habit); //새로운 habits에서 index추출
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits }); //새로운 habits로 업데이트 / habits:habits => habits으로 생략
  };

  handleDelete = (habit) => {
    //console.log(`handleDelete ${habit}`);
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    //state에 있는 habits에서 현 상태의 habit을 제외한 나머지만 살린다
    //즉 현 상태만 삭제하고 나머지만 남긴다
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncreament}
            onDecrement={this.handleDecreament}
            onDelete={this.handleDelete}
          />
          //
        ))}
      </ul>
    );
  }
}

export default Habits;
