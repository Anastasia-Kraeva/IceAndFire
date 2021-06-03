import {CHANGE_CURRENT_SECTION} from "./types";

const initialState = {
  currentSectionURL: "/",
}

export const navReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_CURRENT_SECTION: {
      return {
        ...state,
        currentSectionURL: action.urlSection,
      };
    }
    default:
      return state;
  }
};
