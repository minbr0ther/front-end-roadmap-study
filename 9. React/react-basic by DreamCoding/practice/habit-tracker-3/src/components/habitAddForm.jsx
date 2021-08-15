import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  //PureComponent와 비슷 변동사항이 없으면 내부의 함수가 호출되지 않는다
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //name이 비어있지 않다면 뒤에 항목 실행
    formRef.current.reset(); //입력 후 입력 칸 비워주기
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
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
