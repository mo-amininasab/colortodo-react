import { createSlice } from "@reduxjs/toolkit";

const COLORS = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const initialTodoState = {
  todos: [],
  tempText: "",
  lastId: 0,
  lastColor: "blue",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    initializeHandler(state) {
      const existingTodos = JSON.parse(localStorage.getItem("todos"));
      const existingLastColor = localStorage.getItem("lastColor");
      const existingLastId = +localStorage.getItem("lastId");

      if (existingTodos) {
        state.todos = existingTodos;
        state.lastColor = existingLastColor;
        state.lastId = existingLastId;
      }
    },

    deleteHandler(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    doneHandler(state, action) {
      const existingItem = state.todos.find(
        (todo) => todo.id === action.payload
      );
      existingItem.isDone = true;

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
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

      localStorage.setItem("todos", JSON.stringify(state.todos));
      localStorage.setItem("lastId", JSON.stringify(state.lastId));
      localStorage.setItem("lastColor", JSON.stringify(state.lastColor));
    },
    changeTitleHandler(state, action) {
      state.tempText = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
