import React from "react";
import List from "./forListBox/List";

const RecentlyViewed = (props) => {
  const recentlyViewedArr = Object.values(props.state.recentlyViewed.recentlyViewed);

  return (
    <>
      <h2>Недавно просмотренное</h2>
      <List listEl={recentlyViewedArr}/>
    </>
  );
};

export default RecentlyViewed;
