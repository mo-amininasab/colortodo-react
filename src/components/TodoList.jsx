import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

function TodoList() {
  const data = useSelector((state) => state.todo.todos);

  return (
    <>
      {data.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </>
  );
}

export default TodoList;
