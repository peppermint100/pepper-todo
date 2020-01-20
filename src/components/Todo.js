import React, { useState, useEffect, useContext } from "react";
import { loadTodos } from "./customs/loadTodos";
import { saveTodos } from "./customs/saveTodos";
import Triggercontext from "./Triggercontext";

const Todo = ({ todos, triggerHandler }) => {
  const trigger = useContext(Triggercontext);
  useEffect(() => {
    console.log("re-rendered");
  }, [trigger]);

  const deleteTodo = e => {
    const data = e.target.value;
    const currentTodos = loadTodos();
    const remainingTodos = currentTodos.filter(todo => data !== todo.data);
    saveTodos(remainingTodos);
    triggerHandler();
  };

  return (
    <div className="todo">
      {todos
        ? todos.map(todo => (
            <button
              onClick={deleteTodo}
              key={todo.id}
              style={{ display: "block" }}
              value={todo.data}
            >
              {todo.data}
            </button>
          ))
        : ""}
    </div>
  );
};
export default Todo;
