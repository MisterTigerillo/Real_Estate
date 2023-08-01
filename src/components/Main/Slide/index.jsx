import { Swiper, SwiperSlide } from "swiper/react";
import { SliderNavButtons } from "components/Main/Slide/SliderNavButtons/sliderNavButtons";

import { Navigation } from "swiper/modules";

import { slides } from "components/Main/Slide/slides";

import "../../../../node_modules/swiper/swiper.css";
// import "../../../../node_modules/swiper/modules/effect-coverflow.css";
// import "../../../../node_modules/swiper/modules/navigation.css";

import css from "components/Main/Slide/slide.module.css";
import cssNav from "components/Main/Slide/SliderNavButtons/sliderNavButtons.module.css";

export const Slider = () => {
  const prev = `${cssNav.leftArrow}`;
  const next = `${cssNav.rightArrow}`;
  console.log(next);
  return (
    <div className={css.sliderWrapper}>
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
      <SliderNavButtons
        navButtons={cssNav.sliderNavButtons}
        classPrev={prev}
        classNext={next}
      />
    </div>
  );
};
