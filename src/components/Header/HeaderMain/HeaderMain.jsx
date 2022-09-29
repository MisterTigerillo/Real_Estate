import styles from "./HeaderMain.module.css";
import { ReactComponent as FacebookLogo } from "../../../assets/facebook.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/twitter.svg";
import { ReactComponent as LinkedInLogo } from "../../../assets/linkedin.svg";
import { ReactComponent as Buzz } from "../../../assets/buzz.svg";
import { ReactComponent as Chase } from "../../../assets/chase.svg";
import { ReactComponent as Microsoft } from "../../../assets/microsoft.svg";
import { ReactComponent as Gucc } from "../../../assets/gucc.svg";
import { ReactComponent as Airbnb } from "../../../assets/airbnb.svg";
import { ReactComponent as Uber } from "../../../assets/uber.svg";
import headerImage from "../../../assets/headerImage.jpg";

export const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerHeroInfo}>
        <div>
          <p className={styles.headerHeroTitle}>RESIDENTIAL & OFFICE SPACES</p>
          <h1 className={styles.headerHeroLabel}>
            Smart Living Style for Smart People
          </h1>
          <p className={styles.headerHeroDesc}>
            Much did had call new drew that kept. Limits expect wonder law she.
            Now has you views woman noisy match money rooms.
          </p>
          <div>
            {" "}
            <input
              className={styles.headerInput}
              placeholder="Enter Zipcode to search properties"
            ></input>
            <button className={styles.headerButton}>Search Now!</button>
          </div>
        </div>
      </div>
      <img className={styles.headerMainImage} src={headerImage} alt="" />

      <div className={styles.socials}>
        {" "}
        <FacebookLogo />
        <TwitterLogo />
        <LinkedInLogo />
      </div>
      <div className={styles.partners}>
        <p>Our Amazing Parnters</p>
        <Buzz />
        <Chase />
        <Microsoft />
        <Gucc />
        <Airbnb />
        <Uber />
      </div>
    </div>
  );
};
