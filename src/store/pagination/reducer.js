import {INCREASE_PAGE} from "./types"
import {REDUCE_PAGE} from "./types"

const initialState = {
  currentPage: 1,
}

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PAGE: {
      return {
        ...state,
        currentPage: ++state.currentPage,
      }
    }
    case REDUCE_PAGE: {
      return {
        ...state,
        currentPage: --state.currentPage,
      }
    }
    default:
      return state
  }
}