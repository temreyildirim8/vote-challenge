import { LOCALSTORAGEKEY } from "../Resources/Contstants.js";

export const LoadFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));

export const SaveToLocalStorage = links => {
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(links));
};
