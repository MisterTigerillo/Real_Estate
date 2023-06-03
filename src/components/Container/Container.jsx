import css from "components/Container/Container.module.css";

// const containers = [css.container, css.headerContainer];

export const Container = ({ children, className }) => {
  const classList = `${css.container} ${className}`;
  return <div className={classList}>{children}</div>;
};
