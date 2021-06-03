import React from "react";
import {Provider} from "react-redux";

import {store} from "../store/store";
import Section from "../components/Section";
import "../styles/App.css";
import "../styles/preloader.css";

const App = () => {
  return (
    <Provider store={store}>
      <Section/>;
    </Provider>
  );
};

export default App;
