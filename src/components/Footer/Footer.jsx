import { Logo } from "components/Logo/Logo";
import { Container } from "components/Container";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </footer>
  );
};
