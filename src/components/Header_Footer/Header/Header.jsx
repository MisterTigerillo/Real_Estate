// import PropTypes from "prop-types";
import { Hat } from "components/Header_Footer/Hat/Hat";
import { HeaderMain } from "components/Header_Footer/Header/HeaderMain/HeaderMain";

import css from "./Header.module.css";

export const Header = () => (
  <header className={css.header}>
    <Hat />
    <HeaderMain />
  </header>
);

// Header.propTypes = { icons: PropTypes.array.isRequired };
