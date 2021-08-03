import { createSlice } from "@reduxjs/toolkit";

const COLORS = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const initialTodoState = {
  todos: [],
  tempText: "",
  lastId: 0,
  lastColor: COLORS[Math.floor(Math.random() * COLORS.length)],
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
      // set text
      let text = "";
      if (state.tempText.trim() === "") {
        return;
      } else {
        text = state.tempText.trim();
      }

      // set color
      let index = COLORS.lastIndexOf(state.lastColor);
      let color;
      if (index + 1 > 6) {
        color = "red";
      } else {
        color = COLORS[index + 1];
      }

      state.todos.push({
        id: state.lastId + 1,
        text: text,
        color: color,
        isDone: false,
      });

      state.lastId++;
      state.lastColor = color;
      state.tempText = "";
    },
    changeTitleHandler(state, action) {
      state.tempText = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
