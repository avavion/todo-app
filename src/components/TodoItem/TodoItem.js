import React from "react";

import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <label for="">{props.item.name}</label>
      <input type="checkbox" checked={props.item.status}/>
    </div>
  );
}

export default TodoItem;
