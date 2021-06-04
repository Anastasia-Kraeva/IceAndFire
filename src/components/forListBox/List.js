import React from "react";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";

const List = (props) => {
  let data = null;
  const state = useSelector((state) => state);

  if (props.listEl) {
    data = props.listEl
  } else {
    data = state.section.dataAPI;
  }

  return (
    <ul>
      {data?.map((item) => {
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
