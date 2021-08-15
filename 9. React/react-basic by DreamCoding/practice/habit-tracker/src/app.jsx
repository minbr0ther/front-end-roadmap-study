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

  handleIncrement = (habit) => {
    const habits = [...this.state.habits]; //habits 라는 배열로 복사
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits }); //새로 정의한 habits로 업데이트
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]; //habits 라는 배열로 복사
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; //count가 0미만으로 안가게
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    //현재의 선택된 id가 다른 애들만 살린다 (즉 현상태의 것은 걸러져서 삭제된 것 처럼 보임)
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
