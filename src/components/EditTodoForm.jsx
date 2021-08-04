import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodoFormSliceActions } from "../store/editTooFormSlice";
import { todoListSliceActions } from "../store/todoListSlice";
import { todoActions } from "../store/todo";

function EditTodoForm() {
  const isShowEditTodoForm = useSelector((state) => state.editTodoForm.isShow);
  const text = useSelector((state) => state.editTodoForm.text);
  const id = useSelector((state) => state.editTodoForm.id);
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(todoListSliceActions.isShowHandler());
    dispatch(editTodoFormSliceActions.isShowHandler(""));
    dispatch(todoActions.updateTextHandler({text, id}))
  };

  const onChangeInputHandler = (event) => {
    dispatch(editTodoFormSliceActions.changeTextHandler(event.target.value));
  };
  return (
    isShowEditTodoForm && (
      <form onSubmit={onSubmitHandler} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Add a todo"
          className="appearance-none bg-gray-900 text-white text-sm px-3 py-2 w-1/2 rounded-l-md border-2 border-purple-900 focus:outline-none focus:border focus:border-purple-500"
          onChange={onChangeInputHandler}
          value={text}
        />
        <button className="bg-gradient-to-r from-blue-700 to-purple-700 text-sm px-3 py-2 text-white rounded-r-md border-2 border-l-0 border-purple-800">
          Update
        </button>
      </form>
    )
  );
}

export default EditTodoForm;
