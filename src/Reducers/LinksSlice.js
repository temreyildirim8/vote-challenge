import { PAGEITEMSIZE } from "../Resources/Contstants";
import { createSlice } from "@reduxjs/toolkit";
import {
  LoadFromLocalStorage,
  SaveToLocalStorage
} from "../Helpers/LocalStorage";
import { v4 as uuidv4 } from "uuid";

export const LinksSlice = createSlice({
  name: "links",
  initialState: {
    links: LoadFromLocalStorage(),
    sortProperty: "createDate",
    reverseSort: false,
    hoveredLinkId: -1
  },
  reducers: {
    UpVote: (state, action) => {
      let link = state.links.find(link => link.id === action.payload);
      link.vote = link.vote + 1;
      link.lastVoteDate = Date.now();
      SaveToLocalStorage(state.links);
    },
    DownVote: (state, action) => {
      let link = state.links.find(link => link.id === action.payload);
      link.vote = link.vote - 1;
      link.lastVoteDate = Date.now();
      SaveToLocalStorage(state.links);
    },
    SetSortOptions: (state, action) => {
      state.sortProperty = action.payload.sortProperty;
      state.reverseSort = action.payload.reverseSort;
    },
    SetHoveredLinkId: (state, action) => {
      state.hoveredLinkId = action.payload;
    },
    RemoveLink: (state, action) => {
      state.links = state.links.filter(link => link.id !== action.payload);
      SaveToLocalStorage(state.links);
    },
    AddLink: (state, action) => {
      state.links.push({
        id: uuidv4(),
        linkName: action.payload.linkName,
        linkURL: action.payload.linkURL,
        vote: 0,
        createDate: Date.now(),
        lastVoteDate: Date.now()
      });
      SaveToLocalStorage(state.links);
    }
  }
});

export const {
  UpVote,
  DownVote,
  SetSortOptions,
  SetHoveredLinkId,
  RemoveLink,
  AddLink
} = LinksSlice.actions;

export const selectPageCount = state =>
  Math.ceil(state.links.links.length / PAGEITEMSIZE);
export const selectLinks = state => state.links.links;
export const selectLinkInfos = state => {
  return state.links.links.map(link =>
    (({ id, linkName, linkURL, vote }) => ({ id, linkName, linkURL, vote }))(
      link
    )
  );
};
export const selectSortOptions = state => ({
  sortProperty: state.links.sortProperty,
  reverseSort: state.links.reverseSort
});
export const selectHoveredLinkId = state => state.links.hoveredLinkId;

export default LinksSlice.reducer;
