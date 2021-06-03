import React from "react";

import SearchBar from "../components/forListBox/Search";
import List from "../components/forListBox/List";
import Pagination from "../components/forListBox/Pagination";

const ListBox = () => {
  return (
    <main>
      <SearchBar/>
      <List/>
      <Pagination/>
    </main>
  );
};

export default ListBox;
