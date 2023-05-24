// import PropTypes from "prop-types";
import { icons } from "components/icons";

import css from "components/Header/HeaderMain/IconBlock/IconBlock.module.css";

export const IconBlock = () => {
  return (
    <div className={css.iconBlock}>
      {icons.map(icon => (
        <div className={css.icon} key={icon.name}>{icon.comp}</div>
      ))}
    </div>
  );
};

// IconBlock.propTypes = { icons: PropTypes.array.isRequired };
