import React from "react";
import { useSelector } from "react-redux";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import SliderItem from "./SliderItem";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = () => {
  const themeInfo = useSelector((state) => state.themeInfo);
  const Responsive = {
    0: {
      items: 1.5,
      margin: 5,
    },
    768: {
      items: 2.5,
      margin: 10,
    },
    1024: {
      items: 3,
      margin: 20,
    },
  };

  return (
    <OwlCarousel
      responsive={Responsive}
      loop={false}
      className="owl-theme mb-3"
      dots={false}
      nav
    >
      {themeInfo?.slider?.map((sliderItem) => (
        <SliderItem
          key={sliderItem?.id}
          src={sliderItem?.thumb}
          alt="slider"
          buttonName={sliderItem?.name}
          id={sliderItem?.id}
        />
      ))}
    </OwlCarousel>
  );
};

export default Slider;
