import React from "react";

const Todo = ({ todos }) => {
  return (
    <div className="todo">
      {todos.map(todo => (
        <li key={todo.id}>{todo.data}</li>
      ))}
    </div>
  );
};
export default Todo;
