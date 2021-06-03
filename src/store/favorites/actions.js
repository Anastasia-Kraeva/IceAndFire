import {ADD_IN_FAVORITES} from "./types";
import {DELETE_FROM_FAVORITES} from "./types";

export const addItemInFavorites = (needList, newElem) => ({
  type: ADD_IN_FAVORITES,
  payload: newElem,
  needList: needList,
});

export const deleteItemFromFavorites = (needList, Elem) => ({
  type: DELETE_FROM_FAVORITES,
  payload: Elem,
  needList: needList,
});