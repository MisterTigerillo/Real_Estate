// import PropTypes from "prop-types";
import { Container } from "components/Container/Container";
import { Logo } from "components/Header_Footer/Logo/Logo";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";
// import { HeaderMain } from "components/Header_Footer/Header/HeaderMain/HeaderMain";

import css from "./Header.module.css";
import styles from "components/Container/Container.module.css";

export const Header = () => (
  <header className={css.header}>
    <Container className={styles.additionalCont}>
      <Logo />
      <Navigation />
      {/* <HeaderMain /> */}
    </Container>
  </header>
);

// Header.propTypes = { icons: PropTypes.array.isRequired };
