import React from "react";
import {getSection} from "../../store/section/actions";
import {addItemInFavorites, deleteItemFromFavorites} from "../../store/favorites/actions";
import {useDispatch, useSelector} from "react-redux";
import SvgStar from "./SvgStar";

const ListItem = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const dataItem = props.props.item;
  const favoritesList = props.props.favoritesList;
  const currentSection = state.nav.currentSectionURL;
  let needList = "";
  let presenceItemInListFav = false;
  let content = () => {//не изменяется в свиче
    return (
      <>
        <span>Название: "{dataItem.name}"</span><br/>
        <span>Авторы: {dataItem.authors}</span>
      </>
    )
  };

  const showMore = (arrFromUrlItem) => {
    const url = currentSection + "/" + arrFromUrlItem[arrFromUrlItem.length - 1]
    dispatch(getSection(url));
  };

  const toggleFavorites = (item) => {
    switch (currentSection) {
      case "/books":
        needList = "favoriteBooks";
        content = () => {
          return (
            <>
              <span>Название: "{dataItem.name}"</span><br/>
              <span>Авторы: {dataItem.authors}</span>
            </>
          )
        }
        break
      case "/characters":
        needList = "favoriteCharacters";
        content = () => {
          return (
            <>
              <span>Имя: {dataItem.name}</span><br/>
              <span>Пол: {dataItem.gender}</span><br/>
              <span>Актер: {dataItem.playedBy}</span>
            </>
          )
        }
        break
      case "/houses":
        needList = "favoriteHouses";
        content = () => {
          return (
            <>
              <span>Название: "{dataItem.name}"</span><br/>
              <span>Герб: {dataItem.coatOfArms}</span>
            </>
          )
        }
        break
    }

    for (const key in favoritesList[needList]) {
      if (key === item.isbn) {
        presenceItemInListFav = true
        break
      }
    }

    if (presenceItemInListFav) {
      dispatch(deleteItemFromFavorites(needList, item))
    } else {
      dispatch(addItemInFavorites(needList, item))
    }
  };

  return (
    <li key={dataItem.isbn} onClick={() => {
      showMore(dataItem.url.split("/"))
    }}>
      {content()}
      <button onClick={(event) => {
        event.stopPropagation()
        toggleFavorites(dataItem)
      }}>
        <SvgStar/>
      </button>
    </li>
  );
}

export default ListItem
