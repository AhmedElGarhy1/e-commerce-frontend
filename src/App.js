import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components";
import {
  Home,
  Signin,
  Signup,
  Error404,
  ProductDetails,
  Search,
} from "./pages";
import { useProductContext } from "./hooks/useProductContext";
import "./css/App.css";

// import ParentAccount from "./Components/Account/parentAccount";
// import { useAuthContext } from "./hooks/useAuthContext";
import { useAlertContext } from "./hooks/useAlertContext";
import { getAllProducts, getAllCategories } from "./middleware/get-api";

import In from "./pages/logUser/In";
import "../src/css/Alert.css";
import Cart from "./layout/cart";
import Alert from "./layout/Alert";
// import { ListGroup } from "react-bootstrap";

// ?new

import list from "./data/accountListItems";
import List_group from "./Components/Account/listGroup";
import AccountListLayout from "./layout/AcountListLayout";
import MobilMenu from "./Components/Account/MobilMenu";
// ?new

function App() {
  const { setMessage } = useAlertContext();
  const { dispatch } = useProductContext();
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", payload: res.data });
      })
      .catch((err) => {
        setMessage(err);
      });
    getAllCategories().then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Cart />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/in" element={<In />} />
          <Route path="/search" element={<Search />} />
          {list.map((item) => (
            <Route
              path={item.path}
              key={item.id}
              element={
                <>
                  <AccountListLayout />
                  <MobilMenu element={item.element} />
                </>
              }
            />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
