import { Swiper, SwiperSlide } from "swiper/react";
import { SliderNavButtons } from "components/Main/Slide/SliderNavButtons/sliderNavButtons";

import { Navigation } from "swiper/modules";

import { slides } from "components/Main/Slide/slides";

import "../../../../node_modules/swiper/swiper.css";
// import "../../../../node_modules/swiper/modules/effect-coverflow.css";
// import "../../../../node_modules/swiper/modules/navigation.css";

// import { EffectoCoverFlow, Navigation } from "swiper/react";

import css from "components/Main/Slide/Slide.module.css";
import navi from "components/Main/Slide/SliderNavButtons/sliderNavButtons.module.css";

// import Image from "assets/Image.jpg";
// import { slides } from "components/Main/Slide/slides";
// import css from "components/Main/Slide/Slide.module.css";

export const Slider = () => {
  return (
    <div className={css.slider}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `${navi.arrowRight}`,
          // prevEl: {nav},
          disabledClass: "swiper-button-disabled",
        }}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
      >
        {slides.map(slide => (
          <SwiperSlide className={css.slide} key={slide.name}>
            <img className={css.img} src={slide.comp} alt={slide.name} />
          </SwiperSlide>
        ))}
        <SliderNavButtons />
      </Swiper>
    </div>
  );
};
