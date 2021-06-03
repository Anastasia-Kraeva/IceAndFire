import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import RecentlyViewed from "./RecentlyViewed";
import DetailedInformation from "./DetailedInformation";
import Favorites from "./Favorites";
import Nav from "./Nav";
import Preloader from "./Preloader";
import ListBox from "../containers/ListBox";
import {getSection} from "../store/section/actions";
import {changeSection} from "../store/nav/actions";

const Section = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const currentSection = state.nav.currentSectionURL;
  const title = state.section.sections.find((item) => item.url === currentSection);
  const urlArr = currentSection.split("/");
  const id = urlArr[urlArr.length - 1];
  const {error, isLoaded} = state.section.request;

  const requestSection = () => {
    dispatch(getSection());
  };

  useEffect(() => {
    requestSection();
    const url = window.location.href.split("http://localhost:8080");
    dispatch(changeSection(url[1]))
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  } else if (isLoaded) {
    return <Preloader/>;
  } else {
    return (
      <>
        <BrowserRouter>
          <header>
            <h1>{title.name}</h1>
          </header>
          <Nav state={state.section.sections}/>
          <Switch>
            <Route exact path="/">
              <RecentlyViewed state={state}/>
            </Route>
            <Route exact path={["/books", "/characters", "/houses"]}>
              <ListBox/>
            </Route>
            <Route
              path={[`/books/${+id}`, `/characters/${+id}`, `/houses/${+id}`]}>
              <DetailedInformation dataAPI={state.section.dataAPI}/>
            </Route>
            <Route exact path="/favorites">
              <Favorites state={state}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};

export default Section;
