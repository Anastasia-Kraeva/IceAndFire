import {CHANGE_CURRENT_SECTION} from "./types";

export const changeSection = (newURL) => ({
    type: CHANGE_CURRENT_SECTION,
    urlSection: newURL,
});