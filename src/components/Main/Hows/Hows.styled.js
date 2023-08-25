import styled, { css } from "styled-components";

import lineIcon from "assets/group.svg";

export const SektorTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;

  line-height: 1.375;
  text-align: center;

  @media (max-width: 767.98px) {
    font-size: 30px;
  }
`;

export const Principles = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, minmax(auto, 260px));
  gap: 30px;
  justify-content: space-between;
  margin: 70px auto 0;

  @media (min-width: 991px) {
    padding: 0 35px;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    margin-top: 35px;
  }
`;

const after = css`
  ::after {
    content: "";
    position: absolute;
    background: url(${lineIcon}) 0 0 no-repeat;
    background-size: contain;

    top: 45px;
    left: 90%;

    width: 210px;
    height: 11px;

    ${p =>
      p.rotation &&
      css`
        transform: rotate(-180deg);
      `};

    @media (max-width: 1199.98px) {
      left: 75%;
      width: 170px;
    }
    @media (max-width: 990.98px) {
      left: 81%;
      width: 110px;
    }
    @media (max-width: 767.98px) {
    }
  }
`;
export const Principle = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  justify-items: center;

  @media (max-width: 767.98px) {
    margin-bottom: 35px;
  }
  @media (min-width: 767.98px) {
    ${p => p.line && after};
  }
`;

export const PrincipleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;

  margin-bottom: 50px;
  border-radius: 20px;

  background-color: ${p => {
    switch (p.modifier) {
      case "purple":
        return "#9672ff";
      case "blue":
        return "#4ddffd";
      case "pink":
        return "#f2b8ec";
      default:
        console.log("Invalid modifier");
    }
  }};
  box-shadow: ${p => {
    switch (p.modifier) {
      case "purple":
        return `0px 100px 80px rgba(150, 114, 255, 0.07),
    0px 64.8148px 46.8519px rgba(150, 114, 255, 0.0531481),
    0px 38.5185px 25.4815px rgba(150, 114, 255, 0.0425185),
    0px 20px 13px rgba(150, 114, 255, 0.035),
    0px 8.14815px 6.51852px rgba(150, 114, 255, 0.0274815),
    0px 1.85185px 3.14815px rgba(150, 114, 255, 0.0168519);`;
      case "blue":
        return `0px 100px 80px rgba(77, 223, 253, 0.07),
    0px 64.8148px 46.8519px rgba(77, 223, 253, 0.0531481),
    0px 38.5185px 25.4815px rgba(77, 223, 253, 0.0425185),
    0px 20px 13px rgba(77, 223, 253, 0.035),
    0px 8.14815px 6.51852px rgba(77, 223, 253, 0.0274815),
    0px 1.85185px 3.14815px rgba(77, 223, 253, 0.0168519);`;
      case "pink":
        return `0px 100px 80px rgba(242, 184, 236, 0.07),
    0px 64.8148px 46.8519px rgba(242, 184, 236, 0.0531481),
    0px 38.5185px 25.4815px rgba(242, 184, 236, 0.0425185),
    0px 20px 13px rgba(242, 184, 236, 0.035),
    0px 8.14815px 6.51852px rgba(242, 184, 236, 0.0274815),
    0px 1.85185px 3.14815px rgba(242, 184, 236, 0.0168519);`;
      default:
        console.log("Invalid modifier");
    }
  }};

  > img {
    display: block;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 35px;
  }
`;

export const PrincipleTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  /* z-index: -10; */
`;
export const PrincipleText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
