import React, { Component } from "react";

class HabitAddForm extends Component {
  render() {
    return (
      <form action="" className="add-form">
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
