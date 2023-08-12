import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
  /* position: relative; */
  min-width: 0px;
  flex: 0 1 50%;
  padding: 0;
  /* outline: 1px solid yellowgreen; */

  overflow: hidden;
  z-index: 1;
`;

export const Slide = styled(SwiperSlide)`
  position: relative;
  padding-bottom: 95%;

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
