import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
  /* position: relative; */
  min-width: 0px;
  flex: 0 1 50%;
  padding: 0;
  /* outline: 1px solid yellowgreen; */

  overflow: hidden;
  z-index: 1;
`;

export const Slider = styled(Swiper)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: 10; */
  }
`;
export const slide = styled(SwiperSlide)`
  position: relative;
  padding-bottom: 95%;
`;
