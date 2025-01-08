import React, { useEffect, useState } from "react";
import "./todoApp.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoDate from "./todoDate";
import {
  getLocalStorageData,
  setLocalStorageTodoData,
} from "./todoLocalStorage";

const TodoAppMain = () => {
  const [task, setTask] = useState(() => getLocalStorageData());
  const handleSubmitForm = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [{ id, content, checked }, ...prevTask]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    // console.log(curTask);
    const updateTask = task.filter((curr) => curr.content !== value);
    setTask(updateTask);
  };

  const handleCheckTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  const handleDeleteAllTodo = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleSubmitForm} />
      <section className="myUnOrderList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckTodo={handleCheckTodo}
              />
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

export default TodoAppMain;
