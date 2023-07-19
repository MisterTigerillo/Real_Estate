import Swiper from "swiper";
import "swiper/css";

export const Slider = new Swiper(".blockSlider", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiperButtonPrev",
    prevEl: ".swiperButtonNext",
  },
});
