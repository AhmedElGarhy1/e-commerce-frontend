import React, { useRef, useState } from "react";
import img from "../../images/slider2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../../css/NewSlider.css';
// import required modules
import { Navigation } from "swiper";

export default function Slider2() {
  return (
    <>
      <br />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  mySwiper2">
        <SwiperSlide>
          <img src={img} alt="damaged"  className="img"/>
          <div className="text-img-slider2">
            <h2>Sports must-haves</h2>
            <h6>Back to school essentials</h6>
            <h6> for sports enthusiasts</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="damaged" className="img"/>
          <div className="text-img-slider2">
            <h2>Sports must-haves</h2>
            <h6>Back to school essentials</h6>
            <h6> for sports enthusiasts</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="damaged" className="img"/>
          <div className="text-img-slider2">
            <h2>Sports must-haves</h2>
            <h6>Back to school essentials</h6>
            <h6> for sports enthusiasts</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="damaged" className="img"/>
          <div className="text-img-slider2">
            <h2>Sports must-haves</h2>
            <h6>Back to school essentials</h6>
            <h6> for sports enthusiasts</h6>
          </div>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
    </>
  );
}
