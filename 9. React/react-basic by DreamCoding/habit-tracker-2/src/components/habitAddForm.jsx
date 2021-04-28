import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  //PureComponent는 props와 state안에 들어있는 데이터가
  //최상위에 있는 데이터가 변하지 않으면 render가 호출되지 않음
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); //refresh reject
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //name이 비어있지 않다면 onAdd에 name을 전달한다
    formRef.current.reset();
  };

  return (
    <form ref={formRef} action="" className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
