import React from "react";
import {NavLink} from "react-router-dom";
import {changeSection} from "../store/nav/actions";
import {useDispatch} from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();

  const changeCurrentSection = (url) => {
    dispatch(changeSection(url))
  }

  return (
    <nav>
      {props.state?.map((item) => (
        <NavLink
          exact
          to={item.url}
          key={item.name}
          activeStyle={{
            fontWeight: "bold",
          }}
          onClick={() => {
            changeCurrentSection(item.url)
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
