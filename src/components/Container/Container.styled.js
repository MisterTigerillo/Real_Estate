import styled from "styled-components";

// const containers = [css.container, css.headerContainer];

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const AdvancedContainer = styled(Container)`
  min-height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
