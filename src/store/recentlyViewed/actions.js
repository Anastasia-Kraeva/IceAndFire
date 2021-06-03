import {ADD_IN_RECENTLY_VIEWED} from "./types";

export const addInRecentlyViewed = (newElem) => ({
    type: ADD_IN_RECENTLY_VIEWED,
    payload: newElem,
});