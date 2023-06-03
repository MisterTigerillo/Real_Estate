import { NavItem } from "./NavItem/NavItem";
import styles from "./Navigation.module.css";

const NAV_PAGES = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/",
  },
  {
    label: "Service",
    link: "/",
  },
  {
    label: "Portfolio",
    link: "/",
  },
  {
    label: "Blog",
    link: "/",
  },
  {
    label: "Contact",
    link: "/",
  },
];
export const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      {NAV_PAGES.map(({ label, link }) => (
        <NavItem key={label} label={label} link={link} />
      ))}
    </ul>
  </nav>
);
