import React, {useState} from "react";
import {getSection} from "../../store/section/actions";
import {useDispatch, useSelector} from "react-redux";
// import axios from "axios";

const SearchBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  let url = state.nav.currentSectionURL;

  const valueChange = (event) => {
    setValue(event.target.value);
  };

  const filterList = (event) => {
    const formData = new FormData(event.target);
    const data = {};

    event.preventDefault();

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }

    if (!isNaN(data.Search / 1)) {
      const date = new Date(data.Search);
      url += "?" + data.ReleaseDate + "=" + date.toISOString();
    } else {
      url += "?name=" + data.Search.replace(/\s/g, "%20");
    }
    dispatch(getSection(url));
  };

  return (
    <form onSubmit={filterList}>
      <input
        type="text"
        name="Search"
        placeholder="Search..."
        onChange={valueChange}
      />
      <button type="submit">Поиск</button>
      <br/>
      <span>Год выхода:</span>
      <input
        type="radio"
        name="ReleaseDate"
        id="toReleaseDate"
        value="toReleaseDate"
      />
      <label htmlFor="toReleaseDate">до</label>
      <input
        type="radio"
        name="ReleaseDate"
        id="fromReleaseDate"
        value="fromReleaseDate"
      />
      <label htmlFor="fromReleaseDate">после</label>
    </form>
  );
};

export default SearchBar;
