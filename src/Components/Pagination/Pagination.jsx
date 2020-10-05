import React from "react";
import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { selectPageCount } from "../../Reducers/LinksSlice";
import {
  incrementPage,
  decrementPage,
  setPage,
  selectPage,
} from "../../Reducers/PaginationSlice";

function Pagination(props) {
  const dispatch = useDispatch();
  let activePage = useSelector(selectPage);
  let pageCount = useSelector(selectPageCount);

  let pages = [...Array(pageCount)].map((_, index) => (
    <button
      key={index}
      className={
        "pageButton" +
        (index + 1 === activePage ? " Pagination-activePage" : "")
      }
      onClick={() =>
        dispatch(setPage({ newPage: index + 1, pageCount: pageCount }))
      }
    >
      {index + 1}
    </button>
  ));
  return (
    <div className="pagination">
      <button className="pageButton" onClick={() => dispatch(decrementPage())}>
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
      {pages}
      <button
        className="pageButton"
        onClick={() => dispatch(incrementPage(pageCount))}
      >
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export default React.memo(Pagination);
