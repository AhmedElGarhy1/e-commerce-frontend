import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgOfNavBar from "../../images/add-to-cart.png";
import "../../css/navbar.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCartContext } from "../../hooks/useCartContext";
import { useFilterContext } from "../../hooks/useFilterContext";

function NavBar() {
  const { user } = useAuthContext();
  const { setIsOpenedCart } = useCartContext();
  const { dispatch } = useFilterContext();

  const [query, setQuery] = useState("");

  const search = () => {
    dispatch({ type: "QUERY", payload: query });
  };
  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <div className="box nav-logo">
              <img src={imgOfNavBar} width="25px" alt="Not found" />
              <h1 className="logo">Aroma</h1>
            </div>
          </Link>
          <div className="box search">
            <button onClick={search}>Search</button>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="search "
            />
          </div>
          <div className="box account">
            <i className="fa-regular fa-circle-user"></i>
            <h3>
              {user ? (
                <Link to="/me/account-details">
                  <span style={{ width: "fit-content" }}>{`${
                    user.fname
                  } ${user.lname[0].toUpperCase()}`}</span>
                </Link>
              ) : (
                <Link to="/in">Account</Link>
              )}
            </h3>
          </div>
          <div className="box menu">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-heart active"></i>
            <i
              className="fa-solid fa-cart-arrow-down"
              onClick={() => setIsOpenedCart(true)}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
