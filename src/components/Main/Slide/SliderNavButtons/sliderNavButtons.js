import { useSwiper } from "swiper/react";

import css from "components/Main/Slide/SliderNavButtons/sliderNavButtons.module.css";

export const SliderNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={css.sliderNavButtons}>
      <div className={css.sliderPrevButton} onClick={() => swiper.sliderPrev()}>
        Prev
      </div>
      <div className={css.sliderNextButton} onClick={() => swiper.sliderNext()}>
        Next
      </div>
    </div>
  );
};
