// import PropTypes from "prop-types";
import { Page } from "./Main.styled.js";
import { Hero } from "./Hero";
import { Hows } from "./Hows";
import { BestDeals } from "components/Main/BestDeals";

export const Main = () => {
  return (
    <Page>
      <Hero />
      <Hows />
      <BestDeals />
      {/* <FourthSection /> */}
      {/* <FifthSection /> */}
      {/* <SixthSection/> */}
    </Page>
  );
};
