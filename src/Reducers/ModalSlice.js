import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    link: {}
  },
  reducers: {
    setModalLink: (state, action) => {
      state.link = action.payload;
    }
  }
});

export const { setModalLink } = ModalSlice.actions;

export const selectModalLink = state => state.modal.link;

export default ModalSlice.reducer;
