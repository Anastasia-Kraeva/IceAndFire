import {ADD_IN_RECENTLY_VIEWED} from "./types"

const initialState = {
  // recentlyViewed: {}
  recentlyViewed: {
    "978-0553103540": {
      url: "https://www.anapioficeandfire.com/api/books/1",
      name: "A Game of Thrones",
      isbn: "978-0553103540",
      authors: Array(1),
      numberOfPages: 694,
    },
    "978-0553108033": {
      url: "https://www.anapioficeandfire.com/api/books/2",
      name: "A Clash of Kings",
      isbn: "978-0553108033",
      authors: Array(1),
      numberOfPages: 768,
    },
  },
}

export const recentlyViewedReducer = (state = initialState, action) => {
  // const newRecentlyViewed = [...state.recentlyViewed]
  //
  // if (recentlyViewed.length > 5) {
  //   const recentlyViewedArr = Object.keys(recentlyViewed)
  //   const keyFirstEl = recentlyViewedArr[0]
  //   delete newRecentlyViewed[keyFirstEl]
  // }
  // newRecentlyViewed[action.payload.name] = action.payload

  switch (action.type) {
    case ADD_IN_RECENTLY_VIEWED: {
      return {
        ...state,
        recentlyViewed: {
          ...state.recentlyViewed,
        }
      }
    }
    default:
      return state;
  }
}