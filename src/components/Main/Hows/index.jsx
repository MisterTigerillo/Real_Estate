import { AdvancedContainer } from "components/Container/Container.styled";
import { EnchancedSection } from "components/Main/Main.styled";

import {
  HowsTitle,
  Principles,
  Principle,
  PrincipleIcon,
  PrincipleTitle,
  PrincipleText,
} from "./Hows.styled";

import Search from "assets/principles/search.svg";
import Hand from "assets/principles/hand.svg";
import Brick from "assets/principles/brick.svg";
// import Hand from "../../assets/principles/hand.svg";
// import Brick from "../../assets/principles/brick.svg";

export const Hows = () => {
  return (
    <EnchancedSection>
      <AdvancedContainer>
        <HowsTitle>How it works?</HowsTitle>
        <Principles>
          <Principle line={true}>
            <PrincipleIcon modifier="purple">
              <img src={Search} alt="search" />
            </PrincipleIcon>
            <PrincipleTitle>Research Suburbs</PrincipleTitle>
            <PrincipleText>
              Wonder twenty hunted and put income set desire expect. Am cottage
              calling.
            </PrincipleText>
          </Principle>
          <Principle line={true} rotation={true}>
            <PrincipleIcon modifier="blue">
              <img src={Hand} alt="hand" />
            </PrincipleIcon>
            <PrincipleTitle>Instant Valuation</PrincipleTitle>
            <PrincipleText>
              Conveying or northward offending admitting perfectly my. Colonel
              gravit and moonlight.
            </PrincipleText>
          </Principle>
          <Principle>
            <PrincipleIcon modifier="pink">
              <img src={Brick} alt="brick" />
            </PrincipleIcon>
            <PrincipleTitle>Track Property</PrincipleTitle>
            <PrincipleText>
              Moderate children at of outweigh it. Unsatiable it considered
              invitation he travelling insensible.
            </PrincipleText>
          </Principle>
        </Principles>
      </AdvancedContainer>
    </EnchancedSection>
  );
};
