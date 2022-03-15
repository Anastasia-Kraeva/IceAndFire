// import React from "react";
// import {Provider} from "react-redux";
//
// import {store} from "../store/store";
// import Section from "../components/Section";
// import "../styles/App.css";
// import "../styles/preloader.css";
//
// const App = () => {
//   return (
//     <Provider store={store}>
//       <Section/>;
//     </Provider>
//   );
// };
//
// export default App;

import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history} from "../store/store";
// import configureStore, {store, history} from "../store/store";
import Section from "../components/Section";
import "../styles/App.css";
import "../styles/preloader.css";

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
        <Section/>;
      </ConnectedRouter>
    </Provider>
  );
};

export default App;