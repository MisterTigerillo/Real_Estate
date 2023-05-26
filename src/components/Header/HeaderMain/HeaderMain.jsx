// import PropTypes from "prop-types";

import css from "./HeaderMain.module.css";

import { ReactComponent as FacebookLogo } from "assets/facebook.svg";
import { ReactComponent as TwitterLogo } from "assets/twitter.svg";
import { ReactComponent as LinkedInLogo } from "assets/linkedin.svg";
import { ReactComponent as InstagramLogo } from "assets/instagram.svg";
import { ReactComponent as HomeLogo } from "assets/Icon.svg";

import headerImage from "assets/headerImage.jpg";

import { IconBlock } from "components/Header/HeaderMain/IconBlock/IconBlock";

export const HeaderMain = () => {
  return (
    <div className={css.headerMain}>
      <div className={css.mainBlock}>
        <div className={css.headerHeroInfo}>
          <p className={css.headerHeroTitle}>RESIDENTIAL & OFFICE SPACES</p>
          <h1 className={css.headerHeroLabel}>
            Smart Living Style for Smart People
          </h1>
          <p className={css.headerHeroDesc}>
            Much did had call new drew that kept. Limits expect wonder law she.
            Now has you views woman noisy match money rooms.
          </p>
          <div className={css.search}>
            <input
              className={css.headerInput}
              placeholder="Enter Zipcode to search properties"
            ></input>
            <HomeLogo className={css.searchIcon} />
            <button className={css.headerButton}>Search Now!</button>
          </div>
        </div>
        <img className={css.headerMainImage} src={headerImage} alt="" />
        <p className={css.partners}>Our Amazing Partners</p>
        <IconBlock />
      </div>
      <div className={css.socialsBlock}>
        {" "}
        <FacebookLogo />
        <TwitterLogo />
        <LinkedInLogo />
        <InstagramLogo />
      </div>
    </div>
  );
};

// HeaderMain.propTypes = { icons: PropTypes.array.isRequired };
