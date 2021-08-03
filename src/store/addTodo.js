import { createSlice } from "@reduxjs/toolkit";

const COLORS = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const initialTodoState = { id: 0, title: "", generatedColor: "blue" };

const addTodoSlice = createSlice({
  name: "addTodo",
  initialState: initialTodoState,
  reducers: {
    changeTitleHandler(state, action) {
      state.title = action.payload;
    },
    generatedColorHandler(state) {
      let index = Math.floor(Math.random() * COLORS.length);
      if (state.generatedColor === COLORS[index]) {
        state.generatedColor = COLORS[index - 1] || COLORS[index + 1];
      } else {
        state.generatedColor = COLORS[index];
      }
    },
    setId(state) {
        state.id++;
    }
  },
});

export const addTodoActions = addTodoSlice.actions;
export default addTodoSlice;
