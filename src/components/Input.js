import React, { useState, useEffect, useContext } from "react";
import { useInput } from "./hooks/useInput";
import { loadTodos } from "./customs/loadTodos";
import { addTodo } from "./customs/addTodo";
import { saveTodos } from "./customs/saveTodos";
import Triggercontext from "./Triggercontext";
import List from "./List";

const Input = () => {
  const maxLen = 10;
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
    const currentTodos = loadTodos();
    const newTodos = addTodo(currentInput, currentTodos);
    saveTodos(newTodos);
    setTrigger(!trigger);
  };

  const pressEnter = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="input">
      <input onKeyPress={pressEnter} className="todo-input" {...input} />
      <button className="add-button" onClick={onClick}>
        Add
      </button>
      <Triggercontext.Provider value={trigger}>
        <List triggerHandler={triggerHandler} />
      </Triggercontext.Provider>
    </div>
  );
};

export default Input;
