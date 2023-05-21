import PropTypes from "prop-types";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { HeaderMain } from "components/Header/HeaderMain/HeaderMain";

import { Container } from "components/Container";

import css from "./Header.module.css";

export const Header = ({ icons }) => (
  <header className={css.header}>
    <Container>
      <Logo />
      <Navigation />
      <HeaderMain icons={icons} />
    </Container>
  </header>
);

Header.propTypes = { icons: PropTypes.array.isRequired };
