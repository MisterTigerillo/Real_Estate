// import PropTypes from "prop-types";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { HeaderMain } from "components/Header/HeaderMain/HeaderMain";

import css from "./Header.module.css";

export const Header = () => (
  <header className={css.header}>
    <Logo />
    <Navigation />
    <HeaderMain />
  </header>
);

// Header.propTypes = { icons: PropTypes.array.isRequired };
