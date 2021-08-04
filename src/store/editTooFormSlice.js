import { createSlice } from "@reduxjs/toolkit";

const initialEditTodoFormState = {
  isShow: false,
  text: "",
  id: 0
};

const editTodoFormSlice = createSlice({
  name: "editTodoForm",
  initialState: initialEditTodoFormState,
  reducers: {
    isShowHandler(state, action) {
      state.isShow = !state.isShow;
      state.text = action.payload.text;
      state.id = action.payload.id;
    },
    changeTextHandler(state, action) {
      state.text = action.payload;
    }
  },
});

export const editTodoFormSliceActions = editTodoFormSlice.actions;
export default editTodoFormSlice;
