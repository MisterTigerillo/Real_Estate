import styled from "styled-components";

// const containers = [css.container, css.headerContainer];

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const AdvancedContainer = styled(Container)`
  @media (max-width: 1199.98px) {
    max-width: 970px;
  }
  @media (max-width: 990.98px) {
    max-width: 750px;
  }
  @media (max-width: 767.98px) {
    max-width: none;

    min-height: 0;
    flex-direction: column;

    column-gap: 10px;
    row-gap: 15px;
  }
`;
export const HeroContainer = styled(Container)`
  position: relative;
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

export const FlexContainer = styled(Container)`
  min-height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
