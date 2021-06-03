import {
  GET_SECTION_REQUEST,
  GET_SECTION_SUCCESS,
  GET_SECTION_FAILURE,
} from "./types";

const initialState = {
  sections: [
    {name: "Главная", url: "/"},
    {name: "Книги", url: "/books"},
    {name: "Персонажи", url: "/characters"},
    {name: "Дома", url: "/houses"},
    {name: "Избранное", url: "/favorites"},
  ],
  request: {
    isLoaded: false,
    error: null,
  },
  dataAPI: [],
};

export const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SECTION_REQUEST: {
      return {
        ...state,
        request: {
          error: null,
          isLoaded: true,
        },
      };
    }
    case GET_SECTION_SUCCESS: {
      return {
        ...state,
        dataAPI: action.section,
        request: {
          error: null,
          isLoaded: false,
        },
      };
    }
    case GET_SECTION_FAILURE: {
      return {
        ...state,
        request: {
          error: action.error,
          isLoaded: false,
        },
      };
    }
    default:
      return state;
  }
};