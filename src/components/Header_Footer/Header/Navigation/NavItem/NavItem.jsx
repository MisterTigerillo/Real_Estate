import styles from "./NavItem.module.css";

export const NavItem = ({ label, link }) => {
  // console.log(link, label);
  return (
    <li className={styles.navItem}>
      <a href={link} className={styles.navItemLink}>
        {label}
      </a>
    </li>
  );
};
