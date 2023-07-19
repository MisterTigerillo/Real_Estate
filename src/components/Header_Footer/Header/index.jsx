// import PropTypes from "prop-types";
import { Container } from "components/Container";
import { Logo } from "components/Header_Footer/Logo/Logo";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";

import css from "./Header.module.css";
import styles from "components/Container/Container.module.css";

export const Header = () => (
  <header className={css.header}>
    <Container className={styles.additionalCont}>
      <Logo />
      <Navigation />
    </Container>
  </header>
);

// Header.propTypes = { icons: PropTypes.array.isRequired };
