import { createSlice } from "@reduxjs/toolkit";

const initialTodoListState = { isShow: true };

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialTodoListState,
  reducers: {
    isShowHandler(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const todoListSliceActions = todoListSlice.actions;
export default todoListSlice;
