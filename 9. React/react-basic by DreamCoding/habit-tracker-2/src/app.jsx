import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
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
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    //state에 있는 habits에서 현 상태의 habit을 제외한 나머지만 살린다
    //즉 현 상태만 삭제하고 나머지만 남긴다
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
          //habits에서 각각의 habit안의 count가 0이상인 애들의 개수
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncreament}
          onDecrement={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
