// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
// import { getAllProducts } from "../../middleware/get-api";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../css/BestSlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import { useProductContext } from "../../hooks/useProductContext";
import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";
const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  const { products } = useProductContext();
  useEffect(() => {
    setData(products);
  }, [products]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      {!data && (
        <div style={{ margin: "100px 47%", width: "50%", height: "100vh" }}>
          <PulseLoader size={20} />
        </div>
      )}
      {data && (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mySwiper1 w-75">
          {data.map((d) => (
            <SwiperSlide key={d._id} className="w-100">
              <div className="w-100 slider-items-group">
                <div className="d-flex slider-items row ">
                  <div className="col-lg-6 slider-items-text col-sm-12 col-md-6">
                    <h1>Best Sales</h1>
                    <p className="paragraph-bestSales">{d.name}</p>

                    <p className="p-price">{d.price}$</p>
                  </div>
                  <img
                    className="col-lg-6 col-sm-12 col-md-6 img2"
                    src={d.img}
                    alt={d.name.slice(0, 12)}
                  />
                </div>
                <button className="button btn btn-secondary">
                  <Link to={`/products/${d._id}`}>shop now</Link>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {/* {data &&(
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <div className="w-100 row item">
                  <div className="col-lg-6 col-sm-12 col-md-6">
                    <h1>Best Sales</h1>
                    <p className="paragraph-bestSales">{product.name}</p>
                    <button>shop now</button>
                  </div>
                  <img
                    className="col-lg-6 col-sm-12 col-md-6"
                    src={product.img}
                    alt={product.name.slice(0, 12)}
                  />
                </div>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )} */}
    </>
  );
};
export default ControlledCarousel;
