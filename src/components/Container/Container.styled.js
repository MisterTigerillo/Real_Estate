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

export const FlexContainer = styled(Container)`
  min-height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
