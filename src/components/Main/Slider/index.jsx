import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "../../../../node_modules/swiper/swiper.css";
import { slides } from "components/Main/Slider/slides";

import css from "components/Main/Slider/Slider.module.css";
import { SliderWrapper } from "./Slider.styled";
import { SliderNavButtons } from "components/Main/Slider/SliderNavButtons";

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
        className={css.slider}
      >
        {slides.map(slide => (
          <SwiperSlide className={css.slide} key={slide.name}>
            <img src={slide.comp} alt={slide.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavButtons prev={prev} next={next} />
    </SliderWrapper>
  );
};
