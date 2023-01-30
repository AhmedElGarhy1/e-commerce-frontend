import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/cardStyle.css";
import star from "../../../images/star 1.png";
import shoppingCart from "../../../images/shopping-cart 1.png";
function ProductCard({ name, price, img, id }) {
  return (
    <>
      <Col className="my-2  lgCard">
        <Link className="text-decoration-none" to={`/product/${id}`}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <div className="card-text">
                <div style={{ display: "flex" }}>
                  <div className="price discount mt-2">{price}$</div>
                  <h3 className="text-success">10%OFF</h3>
                </div>
                <div>
                  <h2>899.99$</h2>
                </div>
                <div className="card-footer">
                  <div className="start">
                    <i className="fa-solid fa-star"></i>
                    <p className="numberOfStars"> 4</p>
                    <p className="numberOfSales">(13)</p>
                  </div>
                  <img src={shoppingCart} alt="shoppingCart" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
}

export default ProductCard;
