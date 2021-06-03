import {INCREASE_PAGE} from "./types";
import {REDUCE_PAGE} from "./types";

export const increasePage = () => ({
  type: INCREASE_PAGE,
});
export const reducePage = () => ({
  type: REDUCE_PAGE,
});