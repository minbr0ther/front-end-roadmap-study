import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const totalCnt = this.props.habits.reduce((a, b) => a + b.count, 0);

    return (
      <nav className="flex space-x-4">
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="title">Habit Tracker</span>
        <span className="habit-count">{totalCnt}</span>
      </nav>
    );
  }
}

export default Navbar;
