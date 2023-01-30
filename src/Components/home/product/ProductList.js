import { Row } from "react-bootstrap";
import { PulseLoader } from "react-spinners";
import ProductCard from "./ProductCard";
import { useProductContext } from "../../../hooks/useProductContext";
import { useFilterContext } from "../../../hooks/useFilterContext";
function ProductList() {
  const { products } = useProductContext();
  const { loading } = useFilterContext();
  return (
    <>
      {(!products || loading) && (
        <div style={{ margin: "100px 47%", width: "50%", height: "100vh" }}>
          <PulseLoader size={20} />
        </div>
      )}
      <div className="productlist" style={{ width: "99%", margin: "0 auto" }}>
        <Row className="mt-3 rowPro">
          {products &&
            products.map((item) => {
              return (
                <ProductCard
                  key={item._id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  id={item._id}
                />
              );
            })}
        </Row>
      </div>
    </>
  );
}

export default ProductList;
