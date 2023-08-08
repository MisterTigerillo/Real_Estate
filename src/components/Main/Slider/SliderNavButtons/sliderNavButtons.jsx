import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import {
  NavButtons,
  PrevButton,
  NextButton,
} from "./SliderNavButtons.styled.js";

export const SliderNavButtons = ({ refPrev, refNext }) => {
  console.log({ refPrev });
  return (
    <NavButtons>
      <PrevButton ref={refPrev}>
        <BsChevronLeft />
      </PrevButton>
      <NextButton ref={refNext}>
        <BsChevronRight />
      </NextButton>
    </NavButtons>
  );
};
