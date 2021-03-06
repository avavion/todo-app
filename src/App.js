import React from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item}></TodoItem>
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

// function App() {
//   const todoItems = todosData.map((item) => (
//     <TodoItem key={item.id} item={item}></TodoItem>
//   ));

//   return <div className="todo-list">{todoItems}</div>;
// }

export default App;
