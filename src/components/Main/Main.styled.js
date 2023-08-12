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

export const Sektor = styled.section``;

export const SektorTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;

  line-height: 54.64px;
  text-align: center;
`;

export const Principles = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  /* height: 100px; */
  margin: 70px auto 0;
`;

export const Principle = styled.div``;

export const PrincipleIcon = styled.div`
  /* display: flex; */
  /* justify-content: center; */

  margin: 0 auto 50px;
  border-radius: 20px;
  background-color: #9672ff;

  > img {
    width: 90px;
    height: 90px;
  }
`;
