import React, { useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };
  
  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo }}>
        {children}
      </TodoContext.Provider>
    </main>
  );
}

export default TodoProvider;
