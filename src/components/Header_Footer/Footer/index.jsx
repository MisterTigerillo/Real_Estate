import { Logo } from "components/Header_Footer/Logo/Logo";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";
import { Container } from "components/Container";

import css from "./Footer.module.css";
import styles from "components/Container/Container.module.css";

export const Footer = () => (
  <footer className={css.footer}>
    <Container className={styles.additionalCont}>
      <Logo />
      <Navigation />
    </Container>
  </footer>
);
