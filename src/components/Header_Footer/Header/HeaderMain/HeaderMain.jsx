// import PropTypes from "prop-types";
import { BsHouseHeart } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IconBlock } from "components/Header_Footer/Header/HeaderMain/IconBlock/IconBlock";

import css from "./HeaderMain.module.css";

import headerImage from "assets/headerImage.jpg";

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
            <BsHouseHeart className={css.searchIcon} />
            <button className={css.headerButton}>Search Now!</button>
          </div>
        </div>
        <img className={css.headerMainImage} src={headerImage} alt="" />
        <p className={css.partners}>Our Amazing Partners</p>
        <IconBlock />
      </div>
      <div className={css.socialsBlock}>
        {" "}
        <FaFacebookF size={21} />
        <FaLinkedin size={21} />
        <FaTwitter size={21} />
        <FaInstagram size={21} />
      </div>
    </div>
  );
};

// HeaderMain.propTypes = { icons: PropTypes.array.isRequired };
