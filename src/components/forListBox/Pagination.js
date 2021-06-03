import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {increasePage} from "../../store/pagination/actions";
import {reducePage} from "../../store/pagination/actions";

const Pagination = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentPage = state.pagination.currentPage;

  const changePagination = (props) => {
    if (props === "increase") {
      dispatch(increasePage())
    } else {
      dispatch(reducePage())
    }
  }

  return (
    <>
      <button onClick={() => {
        changePagination("reduce")
      }}>назад
      </button>
      <span>{currentPage}</span>
      <button onClick={() => {
        changePagination("increase")
      }}>вперед
      </button>
    </>
  );
};

export default Pagination;
