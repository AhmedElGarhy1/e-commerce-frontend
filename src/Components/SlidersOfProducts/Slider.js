import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination,scrollbar } from "swiper";
import ProductCard from "../home/product/ProductCard";
import { useProductContext } from "../../hooks/useProductContext";
import { Link } from "react-router-dom";


const SliderPro = () => {
  const { products } = useProductContext();
  return (
    <>
      <div className="TopSide-SeeAll d-flex">
        <h2>The best price offers</h2>
        <button>
          <Link to="/search">
            see all <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </button>
      </div>
      <div className="ParentSwiperPro">
        <Swiper
          // breakpoints={{ ...breakpoints }}
        
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 1.1,
            },
            500: {
              width: 500,
              slidesPerView: 1.7,
            },
            700: {
              width: 700,
              slidesPerView: 2.4,
            },
            900: {
              width: 900,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 3.4,
            },
            1350: {
              width: 1350,
              slidesPerView: 4.5,
            },
          }}
        
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper SwiperPro">
          {products &&
            products.map((item) => {
              return (
                <SwiperSlide key={item._id} className="SwiperItems">
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    id={item._id}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};
export default SliderPro;
