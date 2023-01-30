import "../../css/productdetails.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { getProduct } from "../../middleware/get-api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAlertContext } from "../../hooks/useAlertContext";
import { useCartContext } from "../../hooks/useCartContext";
import AddToCartButton from "../../Components/cart/AddToCartButton";
const override = {
  display: "block",
  margin: "30px auto",
  borderColor: "red",
};

const ProductDetails = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  let { id } = useParams();
  // const { isLoading: load, isError: err, makeRequest } = useRequest();

  // contexts
  const { user } = useAuthContext();
  const { setMessage } = useAlertContext();
  const { dispatch, setIsOpenedCart } = useCartContext();
  // handle waiting and error
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Local Data
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // makeRequest(getProduct(id, user && user.token), dispatch, true, );
    setIsError(false);
    setIsLoading(true);
    getProduct(id, user && user.token)
      .then((res) => {
        setIsLoading(false);
        if (!res.ok) {
          setIsError(true);
          return setMessage(res.msg);
        }
        setProduct(res.data);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        navigate("/404");
      });
  }, [user]);

  if (isLoading) {
    return <FadeLoader cssOverride={override} size={150} />;
  } else if (isError) {
    return <div>Cant't Find the Product</div>;
  } else if (product) {
    return (
      <div className="productdetails">
        <Container>
          <div className="box">
            <div className="image-details">
              <div className="image">
                <img src={product.img} alt="" />
              </div>
              <div className="details">
                <div className="about my-2">About this item</div>
                <ul className="items">
                  {product.highlights.map((light, index) => {
                    return (
                      <li key={index} className="item">
                        {light}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="properties">
              <div className="product-name">{product.name}</div>
              <div className="category-list">
                <div className="category me-1">Brand:</div>
                <div className="categoryName">{product.category_name}</div>
              </div>
              <div className="price-buy">
                <div className="price">{product.price}$</div>
                <div className="buy">
                  <input
                    className="me-4 w-25"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />

                  <AddToCartButton product={product} quantity={quantity} />
                </div>
              </div>
              <hr />
              <div>
                {product.specifications.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="data d-flex justify-content-between align-content-center">
                      <span className="cate">{ele[0]}</span>
                      <span className="main-cate">{ele[1]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default ProductDetails;

/*
import {
  ClipLoader,
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from "react-spinners";
*/

/*
  <BarLoader />
  <ClipLoader />
  <BeatLoader />
  <BounceLoader />
  <CircleLoader />
  <ClimbingBoxLoader />
  <ClockLoader />
  <DotLoader />
  <FadeLoader />
  <GridLoader />
  <HashLoader />
  <MoonLoader />
  <PacmanLoader />
  <PropagateLoader />
  <PuffLoader />
  <PulseLoader />
  <RingLoader />
  <RiseLoader />
  <RotateLoader />
  <ScaleLoader />
  <SyncLoader />
*/
