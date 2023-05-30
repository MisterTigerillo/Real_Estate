import { Logo } from "components/Logo/Logo";
// import { Container } from "components/Container";
import { Navigation } from "../Header_Footer/Header/Navigation/Navigation";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Navigation />
    </footer>
  );
};
