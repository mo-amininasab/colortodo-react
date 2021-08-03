import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todo";

function TitleForm() {
  const inputtedTodoText = useSelector((state) => state.todo.tempText);
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(todoActions.addTodoHandler());
  };

  const onChangeInputHandler = (event) => {
    dispatch(todoActions.changeTitleHandler(event.target.value));
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Add a todo"
        className="appearance-none bg-gray-900 text-white text-sm px-3 py-2 w-1/2 rounded-l-md border-2 border-purple-900 focus:outline-none focus:border focus:border-purple-500"
        onChange={onChangeInputHandler}
        value={inputtedTodoText}
      />
      <button className="bg-gradient-to-r from-blue-700 to-purple-700 text-sm px-3 py-2 text-white rounded-r-md border-2 border-l-0 border-purple-800">
        Add Todo
      </button>
    </form>
  );
}

export default TitleForm;
