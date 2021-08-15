import "./app.css";
import React, { Component } from "react";
import Habits from "./components/Habits";
import Navbar from "./components/Navbar";
import GreenBtn from "./components/GreenBtn";

class App extends Component {
  state = {
    habits: [
      { id: 0, name: "Reading", count: 3 },
      { id: 1, name: "Running", count: 2 },
      { id: 2, name: "Coding", count: 0 },
    ],
    text: "",
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits });

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // if (habits[index].count > 0) {
    //   habits[index].count--;
    // } else {
    //   habits[index].count = 0;
    // }
    // this.setState({ habits });

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    let habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
    //const habits = habits.filter(item => item.id!==habit.id)
  };

  onSubmit = (event) => {
    event.preventDefault();
    let habits = [
      ...this.state.habits,
      {
        id: Date.now(),
        name: this.state.text,
        count: 0,
      },
    ];
    this.setState({
      habits,
    });
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onClick = (event) => {
    let habits = [...this.state.habits];
    habits.map((habit) => (habit.count = 0));
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar habits={this.state.habits} />
        <form ref={this.formRef} className="m-3" onSubmit={this.onSubmit}>
          <input
            className="border-2 border-grey h-10 w-auto text-3xl"
            onChange={this.handleChange}
            type="text"
            placeholder="Habit"
          />
          <GreenBtn>Add</GreenBtn>
        </form>
        <GreenBtn onClick={this.onClick}>Reset All</GreenBtn>
        <Habits
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          habits={this.state.habits}
        />
      </>
    );
  }
}

export default App;
