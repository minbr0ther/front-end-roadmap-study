import React, { Component, useState, useEffect } from "react";
import "./App.css";
import List from "./List.jsx";

const App = () => {
  const [todos, setTodos] = useState(["js공부"]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value); //value값을 setNewTodo에 업로드
  };

  const addTodo = (e) => {
    e.preventDefault(); //폼 전송 막기
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log(`새로운 내용 ${todos}가 추가됐네요`);
  }, [todos]);

  return (
    <>
      <h1>todo 애플리케이션</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>

      <List todos={todos} />
    </>
  );
};

export default App;
