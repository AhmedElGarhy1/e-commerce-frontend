import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAlertContext } from "../../hooks/useAlertContext";
import { useCartContext } from "../../hooks/useCartContext";
import { deleteCartProduct, updateCartProduct } from "../../middleware/get-api";
import { PulseLoader } from "react-spinners";
import FadeLoader from "react-spinners/FadeLoader";

const CartProduct = ({ product }) => {
  const { dispatch } = useCartContext();
  const { user } = useAuthContext();
  const [update, setUpdate] = useState(false);
  const [Load, setLoad] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const { setMessage } = useAlertContext();
  const deleteProduct = async (id) => {
    setLoad(true);
    user &&
      (await deleteCartProduct({ id }, user.token).then((res) => {
        setMessage(res.msg);
        setLoad(false);
      }));
    dispatch({ type: "DELETE_CART_PRODUCT", payload: id });
  };

  const handleUpdate = async () => {
    if (update) {
      setLoad(true);
      await updateCartProduct({ quantity, product_id: product._id }, user.token)
        .then((res) => {
          console.log(res);
          setLoad(false);
          if (!res.ok) {
            return setMessage(res.msg);
          }
          setUpdate(false);
        })
        .catch((err) => {
          console.log(err);
          setLoad(false);
        });
    } else {
      setUpdate(true);
    }
  };
  return (
    <div className="one-row">
      {Load && (
        <div className="DeletingProduct">
          {" "}
          <PulseLoader size={10} />
        </div>
      )}
      <i
        className="fa-regular fa-x close-x"
        onClick={() => deleteProduct(product._id)}></i>
      <div className="row">
        <img className="col-6" src={product.img} alt="proImage" />
        <div className="col-6 mt-3">
          <p className="p">{product.name}</p>
          <h3 className="text-secondary">
            $ <span className="text-black">{product.price}</span>
            {update ? (
              <input
                type="number"
                value={quantity}
                style={{
                  display: "inline-block",
                  width: "50px",
                  marginLeft: "10px",
                  paddingLeft: "5px",
                }}
                onChange={(e) => setQuantity(e.target.value)}
              />
            ) : (
              <span style={{ marginLeft: "20px" }}>{quantity}</span>
            )}
          </h3>
          <div className="d-flex">
            <i className="fa-solid fa-star"></i>
            <p className="numberOfStars"> 4.8</p>
            <p className="numberOfSales text-secondary">(13)</p>
          </div>
          <button className="Update" onClick={handleUpdate}>
            {update ? "Save" : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
