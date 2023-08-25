import { Swiper } from "swiper/react";

import { Navigation } from "swiper/modules";

import "../../../../../node_modules/swiper/swiper.css";
import { slides } from "components/Main/Hero/Slider/slides";

import { SliderWrapper, Slide } from "./Slider.styled";
import { SliderNavButtons } from "./SliderNavButtons";

export const Slider = () => {
  const prev = "prev";
  const next = "next";
  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        {slides.map(slide => (
          <Slide key={slide.name}>
            <img src={slide.comp} alt={slide.name} />
          </Slide>
        ))}
      </Swiper>
      <SliderNavButtons prev={prev} next={next} />
    </SliderWrapper>
  );
};
