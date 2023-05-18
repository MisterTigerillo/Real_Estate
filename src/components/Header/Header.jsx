import PropTypes from "prop-types";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { HeaderMain } from "components/Header/HeaderMain/HeaderMain";

import { Container } from "components/Container";

import css from "./Header.module.css";

export const Header = ({ partners }) => (
  <header className={css.header}>
    <Container>
      <Logo />
      <Navigation />
      <HeaderMain partners={partners} />
    </Container>
  </header>
);

Header.propTypes = { partners: PropTypes.array.isRequired };
