import React from "react";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";

const List = (props) => {
  let dataAPI = null;
  const state = useSelector((state) => state);

  if (props.listEl) {
    dataAPI = props.listEl
  } else {
    dataAPI = state.section.dataAPI;
  }

  return (
    <ul>
      {dataAPI?.map((item) => {
          let propsForItems = ({
            "item": item,
            "favoritesList": state.favorites
          })
          return (
            <ListItem props={propsForItems}/>
          )
        }
      )}
    </ul>
  );
};

export default List;
