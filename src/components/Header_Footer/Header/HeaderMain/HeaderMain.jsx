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
    <main className={css.headerMain}>
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
          <form className={css.search}>
            <input
              type="text"
              className={css.headerInput}
              placeholder="Enter Zipcode to search properties"
            ></input>
            <BsHouseHeart className={css.searchIcon} />
            <button type="submit" className={css.headerButton}>
              Search Now!
            </button>
          </form>
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
    </main>
  );
};

// HeaderMain.propTypes = { icons: PropTypes.array.isRequired };
