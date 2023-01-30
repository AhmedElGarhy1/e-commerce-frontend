import React, { useState } from "react";
import "../css/cart.css";
import img from "../images/shopping-bag.png";
import { useCartContext } from "../hooks/useCartContext";
import CartProduct from "../Components/cart/CartProduct";
import { deleteAllCartProducts } from "../middleware/get-api";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAlertContext } from "../hooks/useAlertContext";
import { PulseLoader } from "react-spinners";

const Cart = () => {
  const { isOpenedCart, cartProducts, dispatch, setIsOpenedCart } =
    useCartContext();
  const [Load, setLoad] = useState(false);
  const { user } = useAuthContext();
  const { setMessage } = useAlertContext();
  const closeCart = () => {
    setIsOpenedCart(false);
  };
  const clearAll = async () => {
    setLoad(true);
    await deleteAllCartProducts(user.token).then((res) => {
      setLoad(false);
      console.log(res);
      setMessage(res.msg);
      if (res.ok) {
        dispatch({ type: "DELETE_CART_PRODUCTS" });
      }
    }).catch(
      (err) => {
        setLoad(false);
        console.log(err);
      }
    )
  };

  return (
    <>
      <div className={isOpenedCart ? "cart active" : "cart"}>
        {Load && <div className='DeletingProduct'>  <PulseLoader size={10} /></div>} 
        <div className="top-cart">
          <i className="fa-regular fa-x icon" onClick={closeCart}></i>
          <h2 className="ms-4">My Cart</h2>
        </div>
        {cartProducts.length === 0 ? (
          <div className="center-cart">
            <img src={img} alt="cartDImage" />
            <p>Your Shopping card is empty</p>
          </div>
        ) : (
          <div>
            <div className="All-products">
              {cartProducts.map((product) => (
                <CartProduct key={product._id} product={product} />
              ))}
            </div>

            <div className="last-btns">
              <button className="bt" onClick={clearAll}>
                Clear All
              </button>
              <button className="bt">Purchase</button>
            </div>
          </div>
        )}
      </div>
      {isOpenedCart && <div onClick={closeCart} className="black-blank"></div>}
    </>
  );
};
export default Cart;
