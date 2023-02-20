import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout({ setSearchValue, setRatingValue, ratingValue }) {
  return (
    <div>
      <NavBar
        setSearchValue={setSearchValue}
        setRatingValue={setRatingValue}
        ratingValue={ratingValue}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
