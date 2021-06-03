import axios from "axios";
import {
  GET_SECTION_REQUEST,
  GET_SECTION_SUCCESS,
  GET_SECTION_FAILURE,
} from "./types";

const getSectionRequest = () => ({
  type: GET_SECTION_REQUEST,
});

const getSectionSuccess = (section) => ({
  type: GET_SECTION_SUCCESS,
  section,
});

const getSectionFailure = (err) => ({
  type: GET_SECTION_FAILURE,
  error: err,
});

export const getSection = (props) => async (dispatch) => {
  let url = `https://www.anapioficeandfire.com/api${props || "/books"}`;

  try {
    dispatch(getSectionRequest());
    const res = await axios.get(url);
    dispatch(getSectionSuccess(res.data));
  } catch (err) {
    dispatch(getSectionFailure(err));
  }
};