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

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IN_FAVORITES: {
      return {
        ...state,
        favoritesList: {
            ...state.favoritesList,
            [action.needList]: {
              ...(state.favoritesList[action.needList]),
              [action.payload.isbn]:action.payload,
            }
        }
      }
    }
    case DELETE_FROM_FAVORITES: {
      const stateFavoritesList = {...state.favoritesList[action.needList]};
      delete stateFavoritesList[action.payload.isbn]

      return {
        ...state,
        favoritesList: {
          ...state.favoritesList,
          [action.needList]: {
            ...stateFavoritesList
          }
        }
      }
    }
    default:
      return state;
  }
}