import uuid from "react-uuid";

export const addTodo = (data, currentTodos) => {
  const todo = {
    id: uuid(),
    data
  };
  currentTodos.push(todo);

  return currentTodos;
};
