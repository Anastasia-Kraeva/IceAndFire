import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {connect} from 'react-redux';
import {getSection} from "../../store/section/actions";

import {increasePage} from "../../store/pagination/actions";
import {reducePage} from "../../store/pagination/actions";

const Pagination = ({pathname}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentPage = state.pagination.currentPage;
  let url = "";

  const changePagination = (props) => {
    if (props === "increase" && currentPage > 0) {
      dispatch(increasePage())
    } else {
      dispatch(reducePage())
    }
    url = pathname + "?page=" + state.pagination.currentPage;
    dispatch(getSection(url));
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

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(Pagination)