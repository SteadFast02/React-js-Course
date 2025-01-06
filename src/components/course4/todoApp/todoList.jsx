import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const TodoList = ({
  key,
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckTodo,
}) => {
  return (
    <>
      <li key={key} className="todo-items">
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => onHandleCheckTodo(data)}>
          {checked ? (
            <RxCross2 style={{ color: "#f44336" }} />
          ) : (
            <MdCheck style={{ color: "#4caf50" }} />
          )}
        </button>
        <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};

export default TodoList;
