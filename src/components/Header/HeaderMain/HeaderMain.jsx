import PropTypes from "prop-types";

import css from "./HeaderMain.module.css";
import { ReactComponent as FacebookLogo } from "assets/facebook.svg";
import { ReactComponent as TwitterLogo } from "assets/twitter.svg";
import { ReactComponent as LinkedInLogo } from "assets/linkedin.svg";

import headerImage from "assets/headerImage.jpg";

import { Partners } from "components/Header/HeaderMain/Partners/Partners";

export const HeaderMain = ({ partners }) => {
  return (
    <div className={css.headerMain}>
      <div className={css.headerHeroInfo}>
        <div>
          <p className={css.headerHeroTitle}>RESIDENTIAL & OFFICE SPACES</p>
          <h1 className={css.headerHeroLabel}>
            Smart Living Style for Smart People
          </h1>
          <p className={css.headerHeroDesc}>
            Much did had call new drew that kept. Limits expect wonder law she.
            Now has you views woman noisy match money rooms.
          </p>
          <div>
            {" "}
            <input
              className={css.headerInput}
              placeholder="Enter Zipcode to search properties"
            ></input>
            <button className={css.headerButton}>Search Now!</button>
          </div>
        </div>
      </div>
      <img className={css.headerMainImage} src={headerImage} alt="" />

      <div className={css.socials}>
        {" "}
        <FacebookLogo />
        <TwitterLogo />
        <LinkedInLogo />
      </div>
      <Partners partners={partners} />
    </div>
  );
};

HeaderMain.propTypes = { partners: PropTypes.array.isRequired };
