import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";

import {sectionReducer} from "./section/reducer";
import {navReducer} from "./nav/reducer";
import {favoritesReducer} from "./favorites/reducer";
import {paginationReducer} from "./pagination/reducer";
import {recentlyViewedReducer} from "./recentlyViewed/reducer";
//import { myMiddleware } from "../components/messageMiddleware";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  section: sectionReducer,
  nav: navReducer,
  favorites: favoritesReducer,
  pagination: paginationReducer,
  recentlyViewed: recentlyViewedReducer,
})

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
        // ... other middlewares ...
      ),
    ),
  )

  return store
}
