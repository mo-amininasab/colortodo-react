import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todo";
import { useEffect } from "react";

import Todo from "./Todo";

function TodoList() {
  const data = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.initializeHandler());
  }, []);

  return (
    <div>
      {data.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
