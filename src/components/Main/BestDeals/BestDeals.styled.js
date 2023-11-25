import styled from "styled-components";

export const Deals = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`;

export const DealsContent = styled.div`
  flex: 1 1 auto;
`;

export const DealsTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const DealsText = styled.p`
  max-width: 470px;
  line-height: 24px;
`;

export const DealsButton = styled.a`
  background-color: #f85a47;
  display: inline-block;
  transition: all 0.3s ease 0s;
  font-size: 17px;
  text-align: center;
  color: #fff;
  line-height: 23px;
  padding: 22px 33px;
  box-shadow: 0px 100px 80px rgba(248, 90, 71, 0.07),
    0px 64.8148px 46.8519px rgba(248, 90, 71, 0.0531481),
    0px 38.5185px 25.4815px rgba(248, 90, 71, 0.0425185),
    0px 20px 13px rgba(248, 90, 71, 0.035),
    0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815),
    0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519);
  border-radius: 5px;

  :hover {
    background-color: #b9473a;
  }
`;
