import React from "react";
import Item from "../ListItem/Item";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "../../Reducers/PaginationSlice";
import {
  selectLinks,
  selectSortOptions,
  selectPageCount,
} from "../../Reducers/LinksSlice";
import { SortByProperty } from "../../Helpers/SortByProperty";
import { SliceByPage } from "../../Helpers/SliceByPage";

function ListView(props) {
  const page = useSelector(selectPage);
  const links = useSelector(selectLinks);
  const sortOptions = useSelector(selectSortOptions);
  const pageCount = useSelector(selectPageCount);
  const dispatch = useDispatch();
  if (page > pageCount && page > 1) {
    dispatch(
      setPage({
        newPage: page - 1,
        pageCount: pageCount,
      })
    );
    return null;
  }
  const items = SliceByPage(SortByProperty(links, sortOptions), page).map(
    (link) => {
      return <Item key={link.id} id={link.id} />;
    }
  );

  return <div>{items}</div>;
}

export default React.memo(ListView);
