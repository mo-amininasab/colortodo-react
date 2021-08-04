import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo";
import { todoListSliceActions } from "../store/todoListSlice";
import { editTodoFormSliceActions } from "../store/editTooFormSlice";

function Todo(props) {
  const isShowTodoList = useSelector((state) => state.todoList.isShow);
  const dispatch = useDispatch();

  const deleteTodoHandler = (event) => {
    dispatch(todoActions.deleteHandler(props.data.id));
  };

  const doneHandler = (event) => {
    dispatch(todoActions.doneHandler(props.data.id));
  };

  const isShowTodoListHandler = (event) => {
    dispatch(todoListSliceActions.isShowHandler());
    dispatch(
      editTodoFormSliceActions.isShowHandler({
        text: props.data.text,
        id: props.data.id,
      })
    );
  };

  const classes = () => {
    return `flex justify-between px-3 py-3 mx-4 mb-3 items-center bg-gradient-to-r from-${props.data.color}-500 to-${props.data.color}-700 rounded-md border-2 border-${props.data.color}-600`;
  } 

  return (
    isShowTodoList && (
      <div
        className={classes()}
      >
        <h1 className="text-white" onClick={isShowTodoListHandler}>
          {props.data.text}
        </h1>
        <span className="flex">
          <svg
            className="w-7 h-7 text-gray-200 mr-2 cursor-pointer"
            onClick={deleteTodoHandler}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="w-7 h-7 text-gray-200 cursor-pointer"
            onClick={doneHandler}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
        </span>
      </div>
    )
  );
}

export default Todo;
