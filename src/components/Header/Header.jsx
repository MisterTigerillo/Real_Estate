import { Logo } from "../Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { Container } from "components/Container";

import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Container />
    <Container>
      <Logo />
      <Navigation />
    </Container>
    {/* </Container> */}
  </header>
);
