import {ADD_IN_FAVORITES} from "./types"
import {DELETE_FROM_FAVORITES} from "./types"

const initialState = {
  favoritesList: {
    countFavorites: 0,
    favoriteBooks: {},
    favoriteCharacters: {},
    favoriteHouses: {},
  },
}

export const favoritesReducer = (state = initialState, action) => {//приходит пустой state
  switch (action.type) {
    case ADD_IN_FAVORITES: {
      return {
        ...state,
        // favoritesList: {
        //     ...state.favoritesList,
        //     [action.needList]: [
        //         ...(state[action.needList]),
        //         action.payload,
        //     ],
        // }
      }
    }
    case DELETE_FROM_FAVORITES: {
      return {
        // ...state,
        // favoritesList: {
        //   ...state.favoritesList,
        //   [action.needList]: [
        //     ...(state[action.needList]),
        //     delete state.favoritesList[action.needList].action.payload.isbn
        //   ],
        // }
      }
    }
    default:
      return state;
  }
}