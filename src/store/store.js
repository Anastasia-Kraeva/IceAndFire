import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {sectionReducer} from "./section/reducer";
import {navReducer} from "./nav/reducer";
import {favoritesReducer} from "./favorites/reducer";
import {paginationReducer} from "./pagination/reducer";
import {recentlyViewedReducer} from "./recentlyViewed/reducer";
//import { myMiddleware } from "../components/messageMiddleware";

const persistConfig = {
  key: "messenger",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    section: sectionReducer,
    nav: navReducer,
    favorites: favoritesReducer,
    pagination: paginationReducer,
    recentlyViewed: recentlyViewedReducer,
  })
);
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const middelwares = [thunk, myMiddleware];

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
  //composeEnhancers(applyMiddleware(...middelwares))
);
export const persistor = persistStore(store);
