import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo";
import todoListSlice from "./todoListSlice";
import editTodoFormSlice from "./editTooFormSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    todoList: todoListSlice.reducer,
    editTodoForm: editTodoFormSlice.reducer,
  },
});

export default store;
