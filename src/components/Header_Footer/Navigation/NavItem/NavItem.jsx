import styles from "./NavItem.module.css";

export const NavItem = ({ label, link }) => (
  <li className={styles.navItem}>
    <a href={link} className={styles.navItemLink}>
      {label}
    </a>
  </li>
);
