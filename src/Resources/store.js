import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../Reducers/PaginationSlice";
import linksReducer from "../Reducers/LinksSlice";
import modalReducer from "../Reducers/ModalSlice";
import toastReducer from "../Reducers/ToastSlice";

export default configureStore({
  reducer: {
    pagination: paginationReducer,
    links: linksReducer,
    modal: modalReducer,
    toast: toastReducer
  }
});
