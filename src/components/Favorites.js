import React from "react";
import List from "./forListBox/List";

const Favorites = (props) => {
  const favoritesListArr = Object.entries(props.state.favorites.favoritesList)//вызывается второй раз, причем с props=undefined

  return (
    <div className={"favorites_box"}>
      {favoritesListArr.map((item) => {
          return (
            item[0] === "countFavorites" ? <h2>в избранном {item[1]} элемент(а/ов)</h2> : <>
              <span>{item[0].name}</span>
              <List listEl={item[1]}/>
            </>
          )
        }
      )
      }
    < /div>
  );
}

export default Favorites;
// if (item[0] === "countFavorites") {
//   return (
//     <h2>в избранном {item[1]} элемент(а/ов)</h2>
//   )
// } else {
//   return (
//     <>
//       <span>{item[0].name}</span>
//       <List listEl={item[1]}/>
//     </>
//   )
// }