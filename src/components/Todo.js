import React, { useRef, useEffect, useContext } from "react";
import { loadTodos } from "./customs/loadTodos";
import { saveTodos } from "./customs/saveTodos";
import Triggercontext from "./Triggercontext";
import "./styles/todo.scss";

const Todo = ({ todos, triggerHandler }) => {
  const trigger = useContext(Triggercontext);

  useEffect(() => {}, [trigger]);

  const deleteTodo = e => {
    const data = e.target.value;
    const currentTodos = loadTodos();
    const remainingTodos = currentTodos.filter(todo => data !== todo.data);
    saveTodos(remainingTodos);
    triggerHandler();
  };

  const todoRef = useRef();

  return (
    <div className="todo">
      {todos
        ? todos.map(todo => (
            <button
              className="todo-button"
              onClick={deleteTodo}
              key={todo.id}
              value={todo.data}
              ref={todoRef}
            >
              {todo.data}
            </button>
          ))
        : ""}
    </div>
  );
};
export default Todo;
