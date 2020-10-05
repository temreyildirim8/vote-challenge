import { createSlice } from "@reduxjs/toolkit";

export const ToastSlice = createSlice({
  name: "toast",
  initialState: {
    linkName: "",
    removedOrAdded: true
  },
  reducers: {
    setToastState: (state, action) => {
      state.linkName = action.payload.linkName;
      state.removedOrAdded = action.payload.removedOrAdded;
    }
  }
});
export const { setToastState } = ToastSlice.actions;

export const setToastStateAsync = action => dispatch => {
  dispatch(
    setToastState({
      linkName: action.linkName,
      removedOrAdded: action.removedOrAdded
    })
  );
  setTimeout(() => {
    dispatch(setToastState({ linkName: "", removedOrAdded: true }));
  }, action.duration);
};

export const selectToastState = state => ({
  linkName: state.toast.linkName,
  removedOrAdded: state.toast.removedOrAdded
});

export default ToastSlice.reducer;
