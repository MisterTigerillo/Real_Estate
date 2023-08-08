import { Swiper, SwiperSlide } from "swiper/react";
// import { SliderNavButtons } from "components/Main/Slider/SliderNavButtons/sliderNavButtons";

import { Navigation } from "swiper/modules";

import { slides } from "components/Main/Slider/slides";

import "../../../../node_modules/swiper/swiper.css";

import css from "components/Main/Slider/Slider.module.css";
import { SliderNavButtons } from "components/Main/Slider/SliderNavButtons/sliderNavButtons";

export const Slider = () => {
  // console.log();
  return (
    <div className={css.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        className={css.slider}
      >
        {slides.map(slide => (
          <SwiperSlide className={css.slide} key={slide.name}>
            <img src={slide.comp} alt={slide.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        style={{ width: "30px", height: "30px" }}
        className="wow"
      ></button>
      <SliderNavButtons />
    </div>
  );
};
