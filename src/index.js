import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.js";
import "regenerator-runtime/runtime.js";

ReactDOM.render(<App/>, document.getElementById("root"));

document.addEventListener('click', function (event) {// реализовала смену класса здесь т.к. в SvgStar не приходит event
  const classSVG = event.target.className.baseVal;
  const choiceCriterion = (classSVG === "star") || (classSVG === "star activeSVG");

  if (choiceCriterion) {
    event.target.classList.toggle("activeSVG")
  } else {
    // console.log("false", event.target)
  }
});
