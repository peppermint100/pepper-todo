import React, { useEffect, useContext } from "react";
import Todo from "./Todo";
import Triggercontext from "./Triggercontext";
const List = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const trigger = useContext(Triggercontext);
  // useEffect(() => {
  //   localStorage.setItem(
  //     "todos",
  //     JSON.stringify([
  //       { id: 1, data: "gym" },
  //       { id: 2, data: "laundry" }
  //     ])
  //   );
  // });
  useEffect(() => {}, [trigger]);
  return (
    <ul className="list">
      <Todo todos={todos} />
    </ul>
  );
};

export default List;
