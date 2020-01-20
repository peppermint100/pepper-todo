import React, { useEffect, useContext } from "react";
import Todo from "./Todo";
import Triggercontext from "./Triggercontext";
const List = ({ triggerHandler }) => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const trigger = useContext(Triggercontext);

  useEffect(() => {
    if (!window.localStorage.getItem("todos")) {
      window.localStorage.setItem("todos", JSON.stringify([]));
    }
  }, [trigger]);
  return (
    <div className="list">
      <Todo todos={todos} triggerHandler={triggerHandler} />
    </div>
  );
};

export default List;
