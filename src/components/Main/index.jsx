// import PropTypes from "prop-types";
import { Container } from "components/Container";
import { Slider } from "components/Main/Slider";

// import { Search } from "../Main/";
import Search from "../../assets/principles/search.svg";
import Hand from "../../assets/principles/hand.svg";
import Brick from "../../assets/principles/brick.svg";

import { IconBlock } from "components/Main/IconBlock";

import { BsHouseHeart } from "react-icons/bs";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import {
//   FaFacebookF,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";

import css from "./main.module.css";

export const Main = () => {
  return (
    <main className={css.page}>
      <section className={css.mainBlock}>
        <Container className={css.mainBlockContainer}>
          <div className={css.blockHead}>
            {/* CONTENT */}
            <div className={css.blockContent}>
              <div className={css.blockInfo}>
                <p className={css.blockTitle}>RESIDENTIAL & OFFICE SPACES</p>
                <h1 className={css.blockLabel}>
                  Smart Living Style for Smart People
                </h1>
                <p className={css.blockDesc}>
                  Much did had call new drew that kept. Limits expect wonder law
                  she. Now has you views woman noisy match money rooms.
                </p>
              </div>
              <form className={css.blockSearch}>
                <input
                  type="text"
                  className={css.blockInput}
                  placeholder="Enter Zipcode to search properties"
                ></input>
                <BsHouseHeart className={css.blockSearchIcon} />
                <button type="submit" className={css.blockButton}>
                  Search Now!
                </button>
              </form>
            </div>

            <Slider />

            {/* BLOCKHEAD */}
          </div>
          <div>
            <p className={css.partners}>Our Amazing Partners</p>

            <IconBlock />
          </div>
        </Container>
      </section>
      {/* <div className={css.socialsBlock}>
        {" "}
        <FaFacebookF size={21} />
        <FaLinkedin size={21} />
        <FaTwitter size={21} />
        <FaInstagram size={21} />
      </div> */}
      <section className={css.thumb}>
        <h2 className={css.thumbTitle}>How it works?</h2>
        <div className={css.principles}>
          <div className={css.principle}>
            <div className={css.principleIcon}>
              <img src={Search} alt="search" />
            </div>
            <h3>Research Suburbs</h3>
            <p>
              Wonder twenty hunted and put income set desire expect. Am cottage
              calling.
            </p>
          </div>
          <div className={css.principle}>
            <div className={css.principleIcon}>
              <img src={Hand} alt="hand" />
            </div>
            <h3>Instant Valuation</h3>
            <p>
              Conveying or northward offending admitting perfectly my. Colonel
              gravit and moonlight.
            </p>
          </div>
          <div className={css.principle}>
            <div className={css.principleIcon}>
              <img src={Brick} alt="brick" />
            </div>
            <h3>Track Property</h3>
            <p>
              Moderate children at of outweigh it. Unsatiable it considered
              invitation he travelling insensible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

// HeaderMain.propTypes = { icons: PropTypes.array.isRequired };
