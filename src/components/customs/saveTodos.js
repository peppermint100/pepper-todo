export const saveTodos = data => {
  window.localStorage.setItem("todos", JSON.stringify(data));
};
