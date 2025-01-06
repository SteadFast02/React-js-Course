import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: "" });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
            name=""
            id=""
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
