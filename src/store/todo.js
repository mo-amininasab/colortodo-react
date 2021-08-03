import { createSlice } from "@reduxjs/toolkit";

const COLORS = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const initialTodoState = {
  id: 0,
  title: "",
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  //   isDeleted: false,
  isDone: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    // deleteHandler(state) {
    //   state.isDeleted = true;
    // },
    // doneHandler(state) {
    //   state.isDone = true;
    // },
    addTodoHandler(state) {
      // set color
      let index = Math.floor(Math.random() * COLORS.length);
      if (state.color === COLORS[index]) {
        state.color = COLORS[index - 1] || COLORS[index + 1];
      } else {
        state.color = COLORS[index];
      }

      // set ID
      state.id++;

      // set title
      if (state.title.trim() === "") {
        return;
      } else {
        state.title = state.title.trim();
      }

      // store data in local storage
      localStorage.setItem(
        `todo${state.id}`,
        JSON.stringify({ id: state.id, color: state.color, title: state.title })
      );
    },
    changeTitleHandler(state, action) {
      state.title = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
