import styled from "styled-components";

export const PartnersTitle = styled.p`
  font-size: 17px;
  margin-bottom: 30px;

  @media (max-width: 1199.98px) {
    margin-bottom: 10px;
  }
  @media (max-width: 990.98px) {
    margin-bottom: 20px;
  }
`;

export const PartnersLogos = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  /* width: 770px; */
  /* justify-content: center; */
  align-items: center;

  @media (max-width: 1199.98px) {
    width: 660px;
  }

  @media (max-width: 990.98px) {
    flex-wrap: wrap;
    row-gap: 10px;
    /* justify-content: center; */
  }
`;

export const Logo = styled.div`
  align-self: baseline;

  &:not(:last-child) {
    margin-right: 50px;
  }
`;
