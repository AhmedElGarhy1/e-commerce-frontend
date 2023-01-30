import React, { useState } from "react";
import "../css/FilterPage.css";
import { ProductList } from "../Components";
import ParentFilter from "../Components/filter/ParentFilter";

const Search = () => {
  const [iconFilter, sectionFilter] = useState(false);

  const handleIconFilter = () => {
    sectionFilter(true);
  };
  const handleClick = () => {
    sectionFilter(false);
  };
  return (
    <>
      <div
        className={
          iconFilter
            ? "barFilterLayout   d-lg-none  d-md-none d-sm-none "
            : "barFilterLayout  d-lg-none  d-md-none d-sm-block "
        }>
        <i
          className="fa-solid fa-bars barAccount"
          onClick={handleIconFilter}></i>
      </div>
      <div className="d-lg-flex d-md-flex searchPro" style={{ width: "90%" }}>
        <div
          className={
            iconFilter
              ? "FilterPageLayout  rightPartSearch"
              : "mt-4 rightPartSearch d-lg-inline  d-md-inline d-sm-none"
          }
          style={{ margin: "0% ", width: "340px" }}>
          <i
            className="fa-regular fa-x close-x-menu d-lg-none d-xl-none d-md-none closeFilterLayout"
            style={{ position: "absolute", top: "100px" }}
            onClick={handleClick}></i>
          <ParentFilter />
        </div>
        <div className="leftPartSearch" style={{ width: "95%" }}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Search;
