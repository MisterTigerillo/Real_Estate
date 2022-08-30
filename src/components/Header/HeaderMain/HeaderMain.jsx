import styles from "./HeaderMain.module.css";
import { ReactComponent as FacebookLogo } from "../../../assets/facebook.svg";
import headerImage from "../../../assets/headerImage.jpg";

export const HeaderMain = () => {
  return (
    <div className="headerMain">
      <h1>RESIDENTIAL AND OFFICE SPACES</h1>
      <p>Smart Living Style for Smart People</p>
      <p>
        Much did had call new drew that kept. Limits expect wonder law she. Now
        has you views woman noisy match money rooms.
      </p>
      <img className={styles.headerMainImage} src={headerImage} alt="" />
      <FacebookLogo />
    </div>
  );
};
