import React, { createContext, useState, useReducer } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { getCartProducts } from "../middleware/get-api";
export const CartContext = createContext();

export const cartReducer = (state, action) => {
  const { cartProducts } = state;
  const { payload, type } = action;
  switch (type) {
    case "SET_CART_PRODUCTS": {
      return { cartProducts: payload };
    }
    case "ADD_CART_PRODUCT": {
      return { cartProducts: [payload, ...cartProducts] };
    }
    case "UPDATE_CART_PRODUCT": {
      cartProducts = cartProducts.map((product) => {
        if (product._id === payload) {
          product.quantity = payload;
          return product;
        }
        return product;
      });
      return { cartProducts };
    }
    case "DELETE_CART_PRODUCT": {
      return {
        cartProducts: cartProducts.filter((product) => product._id !== payload),
      };
    }
    case "DELETE_CART_PRODUCTS": {
      return { cartProducts: [] };
    }
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartProducts: [],
  });
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const { user } = useAuthContext();
  useEffect(() => {
    if (user) {
      getCartProducts(user.token)
        .then((res) => {
          if (!res.ok) throw Error(res.msg);
          dispatch({ type: "SET_CART_PRODUCTS", payload: res.data.products });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
        isOpenedCart,
        setIsOpenedCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
