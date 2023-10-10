import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 10px;
  /* width: 200px; */
  /* background-color: teal; */
  margin-bottom: 60px;
`;

export const Button = styled.button`
  position: relative;
  font-size: 19px;
  line-height: 26px;
  background-color: transparent;
  transition: color 0.3s ease 0s;

  :after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #f85a47;

    transition: width 0.3s ease 0s;
  }
  :hover {
    color: #f85a47;
  }
  :hover:after {
    width: 100%;
  }
`;
