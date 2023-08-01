import { useSwiper } from "swiper/react";

import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

import css from "components/Main/Slide/SliderNavButtons/sliderNavButtons.module.css";

export const SliderNavButtons = ({ navButtons, classPrev, classNext }) => {
  console.log({ classPrev });
  return (
    <div className={navButtons}>
      <div className={classPrev}>
        <BsChevronLeft />
      </div>
      <div className={classNext}>
        <BsChevronRight />
      </div>
    </div>
  );
};
