import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAlertContext } from "../../hooks/useAlertContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCartContext } from "../../hooks/useCartContext";
import { addToCart } from "../../middleware/get-api";

const AddToCartButton = ({ product, quantity }) => {
  const { user } = useAuthContext();
  const { setMessage } = useAlertContext();
  const { dispatch, setIsOpenedCart } = useCartContext();
  const [load, setLoad] = useState(false);

  const addProduct = async () => {
    setLoad(true);
    addToCart(
      {
        product_id: product._id,
        quantity,
      },
      user && user.token
    )
      .then((res) => {
        setLoad(false);
        if (!res.ok) throw Error(res.msg);
        setMessage(res.msg);
        console.log(res);
        dispatch({
          type: "ADD_CART_PRODUCT",
          payload: { ...product, quantity },
        });

        setIsOpenedCart(true);
      })
      .catch((err) => {
        setMessage(err.message);
        setLoad(false);
      });
  };
  return (
    <>
      <Button disabled={load} onClick={addProduct} className="buy-button">
        {load ? "Loading..." : "add to cart"}
      </Button>
    </>
  );
};

export default AddToCartButton;
