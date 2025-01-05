import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./todoApp.css";

const TodoApp34 = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [currDate, setCurrDate] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  // console.log("Hello");

  //   setInterval(() => {
  //     const now = new Date();
  //     const formatedDate = now.toLocaleDateString();
  //     const formatedTime = now.toLocaleTimeString();
  //     setCurrDate(`${formatedDate} - ${formatedTime}`);
  //   }, 1000);

  //   console.log("Hello");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formatedTime = now.toLocaleTimeString();
      setCurrDate(`${formatedDate} - ${formatedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDeleteTodo = (value) => {
    // console.log(curTask);
    const updateTask = task.filter((curr) => curr !== value);
    setTask(updateTask);
  };

  const handleDeleteAllTodo = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h3>{currDate}</h3>
      </header>
      <section className="form">
        <form onSubmit={handleSubmitForm}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
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
      <section className="myUnOrderList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-items">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="deleteall-btn" onClick={handleDeleteAllTodo}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default TodoApp34;
