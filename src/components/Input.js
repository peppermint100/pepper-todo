import React, { useState, useEffect } from "react";
import { useInput } from "./hooks/useInput";
import { loadTodos } from "./customs/loadTodos";
import { addTodo } from "./customs/addTodo";
import { saveTodos } from "./customs/saveTodos";
import Triggercontext from "./Triggercontext";
import List from "./List";
import "./styles/input.scss";

const Input = () => {
  const maxLen = 24;
  const condition = value => value.length < maxLen;
  const msg = `A Todo must be less than ${maxLen} characters`;
  const [trigger, setTrigger] = useState(true);
  const input = useInput(condition, msg);

  useEffect(() => {
    document.querySelector(".todo-input").value = "";
  }, [trigger]);
  const triggerHandler = () => {
    setTrigger(!trigger);
  };
  const onClick = () => {
    const currentInput = input.value;
    if (input.value === "") {
      alert("Blank!");
      return;
    }
    const currentTodos = loadTodos();
    const newTodos = addTodo(currentInput, currentTodos);
    saveTodos(newTodos);
    setTrigger(!trigger);
  };

  return (
    <div className="input">
      <form className="input-form">
        <input className="todo-input" {...input} autoFocus />
        <button className="add-button" onClick={onClick}>
          <span className="emoji-span">➕</span>
        </button>
      </form>
      <Triggercontext.Provider value={trigger}>
        <List class="todos-container" triggerHandler={triggerHandler} />
      </Triggercontext.Provider>
    </div>
  );
};

export default Input;
