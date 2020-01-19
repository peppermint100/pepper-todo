import React, { useState, useEffect, useContext } from "react";
import { useInput } from "./hooks/useInput";
import { loadTodos } from "./customs/loadTodos";
import { addTodo } from "./customs/addTodo";
import { saveTodos } from "./customs/saveTodos";
import Triggercontext from "./Triggercontext";
import List from "./List";
import uuid from "react-uuid";

const Input = () => {
  const condition = value => value.length < 10;
  const msg = "A Todo must be less than 24 characters";
  const input = useInput(condition, msg);
  const [trigger, setTrigger] = useState(true);

  const onClick = () => {
    const currentInput = input.value;
    const currentTodos = loadTodos();
    const newTodos = addTodo(currentInput, currentTodos);
    saveTodos(newTodos);
    setTrigger(!trigger);
  };

  return (
    <div className="input">
      <input {...input} />
      <button onClick={onClick}>Add</button>
      <Triggercontext.Provider value={trigger}>
        <List />
      </Triggercontext.Provider>
    </div>
  );
};

export default Input;
