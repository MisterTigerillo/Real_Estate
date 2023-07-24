import { useSwiper } from "swiper/react";

import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

import css from "components/Main/Slide/SliderNavButtons/sliderNavButtons.module.css";

export const SliderNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={css.sliderNavButtons}>
      <div className={css.sliderPrevButton} onClick={() => swiper.slidePrev()}>
        <BsChevronLeft className={css.leftArrow} />
      </div>
      <div className={css.sliderNextButton} onClick={() => swiper.slideNext()}>
        <BsChevronRight className={css.rightArrow} />
      </div>
    </div>
  );
};
