import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { HeaderMain } from "./HeaderMain/HeaderMain";
import { Container } from "components/Container";

import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Container>
      <Logo />
      <Navigation />
      <HeaderMain />
    </Container>
  </header>
);
