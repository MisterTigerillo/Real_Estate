import styled from "styled-components";

export const Page = styled.main`
  position: relative;
  width: 100%;

  flex: 1 1 auto;
  flex-wrap: wrap;
`;

export const EnchancedSection = styled.section`
  padding-top: 110px;
  padding-bottom: 110px;
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
