import styled from "styled-components";
import { BsHouseHeart } from "react-icons/bs";

export const Page = styled.main`
  position: relative;
  width: 100%;

  flex: 1 1 auto;
  flex-wrap: wrap;
`;

export const MainBlock = styled.section`
  padding-bottom: 110px;
`;

export const MainBlockContainer = styled.div`
  position: relative;
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 15px;
  padding-top: 183px;

  ::after {
    position: absolute;
    background: #bdccff;
    /* opacity: 60%; */
    content: "";

    top: 0;
    left: 68%;

    width: 200%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 1199.98px) {
    padding-bottom: 30px;

    ::after {
      left: 70%;
    }
  }
  @media (max-width: 990.98px) {
    padding-top: 130px;

    ::after {
      left: 73%;
    }
  }
`;

export const BlockHead = styled.div`
  /* outline: 1px solid blue; */
  display: flex;
  align-items: flex-start;
  margin-bottom: 14px;
  /* overflow: hidden; */
  z-index: -1;

  @media (max-width: 1199.98px) {
    .blockHead {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 990.98px) {
    display: block;
    margin: 0;
  }
`;

export const BlockContent = styled.div`
  padding-top: 40px;
  flex: 0 1 50%;

  @media (max-width: 990.98px) {
    margin-bottom: 50px;
    padding: 0;
  }
`;
export const BlockInfo = styled.div`
  padding-right: 70px;

  @media (max-width: 990.98px) {
    padding-right: 0;
  }
`;
export const BlockTitle = styled.p`
  margin-bottom: 25px;
  font-family: "DM Sans", sans-serif;
  font-size: 22px;
  text-transform: uppercase;

  font-weight: 700;
  line-height: 30px;
  color: #ff9900;

  @media (max-width: 990.98px) {
    margin-bottom: 10px;
    text-align: center;
  }
`;
export const BlockLabel = styled.h1`
  margin-bottom: 25px;
  font-size: 54px;
  font-weight: 800;
  line-height: 70px;

  @media (max-width: 990.98px) {
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
export const BlockDesc = styled.div`
  margin-bottom: 50px;
  font-size: 17px;

  line-height: 25px;
  letter-spacing: 0.01em;
`;

export const BlockSearch = styled.form`
  position: relative;
  display: flex;

  box-shadow: rgba(172, 172, 180, 0.25) 0px 40px 50px -5px,
    rgba(0, 0, 0, 0.1) 0px 1px 1px -1px;

  margin-right: -188px;
  z-index: 2;

  @media (max-width: 990.98px) {
    margin: 0;
  }
`;

export const BlockInput = styled.input`
  padding-left: 75px;
  height: 86px;

  width: 100%;
  border: 1px solid lightgray;
  font-family: inherit;
  font-size: 20px;

  ::placeholder {
    color: #31353b;
  }
`;
export const HouseIcon = styled(BsHouseHeart)`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 33px;
  left: 33px;
`;

export const BlockButton = styled.button`
  flex: 0 0 188px;
  padding: 5px 15px;
  /* width: 188px; */
  height: inherit;

  font-size: 17px;
  font-weight: bold;

  background: #f85a47;
  color: white;
  cursor: pointer;
`;

export const Partners = styled.p`
  font-size: 17px;
  margin-bottom: 30px;

  @media (max-width: 1199.98px) {
    margin-bottom: 10px;
  }
  @media (max-width: 990.98px) {
    margin-bottom: 20px;
  }
`;
export const SocialsBlock = styled.div`
  position: absolute;
  top: 80px;
  right: -80px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 160px;
`;

export const Sektor = styled.section`
  margin-bottom: 110px;
`;

export const SektorTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;

  line-height: 54.64px;
  text-align: center;
`;

export const Principles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 260px));
  gap: 30px;
  justify-content: space-between;
  margin: 70px auto 0;
  padding: 0 35px;
`;

export const Principle = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  justify-items: center;

  ::after {
    content: "";
    position: absolute;
    background-image: url("../../assets/gucc.svg");
    /* background-color: lightcoral; */
    /* opacity: 60%; */

    top: 0;
    left: 100%;

    width: 100%;
    height: 110px;
    /* z-index: 10; */
    /* max-width: 210px; */
  }
`;

export const PrincipleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;

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

  margin-bottom: 50px;
  border-radius: 20px;

  > img {
    display: block;
  }
`;

export const PrincipleTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
`;
export const PrincipleText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
