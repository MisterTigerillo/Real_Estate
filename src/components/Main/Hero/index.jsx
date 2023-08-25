import { HeroContainer } from "components/Container/Container.styled";

import { Slider } from "components/Main/Hero/Slider";
import { Partners } from "components/Main/Hero/Partners";

import {
  Section,
  BlockHead,
  BlockContent,
  BlockInfo,
  BlockTitle,
  BlockLabel,
  BlockDesc,
  BlockSearch,
  BlockInput,
  HouseIcon,
  BlockButton,
} from "./Hero.styled.js";

export const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <BlockHead>
          <BlockContent>
            <BlockInfo>
              <BlockTitle>RESIDENTIAL & OFFICE SPACES</BlockTitle>
              <BlockLabel>Smart Living Style for Smart People</BlockLabel>
              <BlockDesc>
                Much did had call new drew that kept. Limits expect wonder law
                she. Now has you views woman noisy match money rooms.
              </BlockDesc>
            </BlockInfo>
            <BlockSearch>
              <BlockInput
                type="text"
                placeholder="Enter Zipcode to search properties"
              ></BlockInput>
              <HouseIcon />
              <BlockButton type="submit">Search Now!</BlockButton>
            </BlockSearch>
          </BlockContent>

          <Slider />
        </BlockHead>
        <Partners />
      </HeroContainer>
    </Section>
  );
};
