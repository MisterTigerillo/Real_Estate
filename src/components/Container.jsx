import css from "components/Container.module.css";

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);
