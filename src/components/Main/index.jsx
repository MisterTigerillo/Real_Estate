// import PropTypes from "prop-types";
import { Slider } from "components/Main/Slider";

import {
  Page,
  MainBlock,
  MainBlockContainer,
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
  Partners,
  // SocialsBlock,
  Sektor,
  SektorTitle,
  Principles,
  Principle,
  PrincipleIcon,
} from "./Main.styled";

import Search from "../../assets/principles/search.svg";
import Hand from "../../assets/principles/hand.svg";
import Brick from "../../assets/principles/brick.svg";

import { IconBlock } from "components/Main/IconBlock";
import { AdvancedContainer } from "components/Container/Container.styled";

// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import {
//   FaFacebookF,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";

export const Main = () => {
  return (
    <Page>
      <MainBlock>
        <MainBlockContainer>
          {/* BLOCKHEAD */}
          <BlockHead>
            {/* BLOCKCONTENT */}
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
            {/* BLOCKCONTENT */}

            <Slider />
            {/* BLOCKHEAD */}
          </BlockHead>
          <div>
            <Partners>Our Amazing Partners</Partners>
            <IconBlock />
          </div>
        </MainBlockContainer>
      </MainBlock>
      {/* <SocialsBlock className={css.socialsBlock}>
        {" "}
        <FaFacebookF size={21} />
        <FaLinkedin size={21} />
        <FaTwitter size={21} />
        <FaInstagram size={21} />
      </SocialsBlock> */}
      <Sektor>
        <AdvancedContainer>
          <SektorTitle>How it works?</SektorTitle>
          <Principles>
            <Principle>
              <PrincipleIcon>
                <img src={Search} alt="search" />
              </PrincipleIcon>
              <h3>Research Suburbs</h3>
              <p>
                Wonder twenty hunted and put income set desire expect. Am
                cottage calling.
              </p>
            </Principle>
            <Principle>
              <PrincipleIcon>
                <img src={Hand} alt="hand" />
              </PrincipleIcon>
              <h3>Instant Valuation</h3>
              <p>
                Conveying or northward offending admitting perfectly my. Colonel
                gravit and moonlight.
              </p>
            </Principle>
            <Principle>
              <PrincipleIcon>
                <img src={Brick} alt="brick" />
              </PrincipleIcon>
              <h3>Track Property</h3>
              <p>
                Moderate children at of outweigh it. Unsatiable it considered
                invitation he travelling insensible.
              </p>
            </Principle>
          </Principles>
        </AdvancedContainer>
      </Sektor>
    </Page>
  );
};

// HeaderMain.propTypes = { icons: PropTypes.array.isRequired };
