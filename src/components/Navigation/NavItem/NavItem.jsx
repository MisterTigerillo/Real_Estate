import styles from "./NavItem.module.css";

export const NavItem = ({ label, link }) => {
  console.log(link, label);
  <li>
    <a href={link} className={styles.navListItem}>
      {label}
    </a>
  </li>;
};
