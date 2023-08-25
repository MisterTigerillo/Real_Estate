import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { NavButtons, PrevButton, NextButton } from "./SliderNavButtons.styled";

export const SliderNavButtons = ({ prev, next }) => {
  return (
    <NavButtons>
      <PrevButton className={prev}>
        <BsChevronLeft />
      </PrevButton>
      <NextButton>
        <BsChevronRight className={next} />
      </NextButton>
    </NavButtons>
  );
};
