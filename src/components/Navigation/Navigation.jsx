import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <a href="/" className={styles.navListItem}>
          Home
        </a>
        <a href="/" className={styles.navListItem}>
          About
        </a>
        <a href="/" className={styles.navListItem}>
          Service
        </a>
        <a href="/" className={styles.navListItem}>
          Portfolio
        </a>
        <a href="/" className={styles.navListItem}>
          Blog
        </a>
        <a href="/" className={styles.navLastItem}>
          Contact
        </a>
      </ul>
    </nav>
  );
};
