// import PropTypes from "prop-types";
import { icons } from "components/Main/IconBlock/icons";

import css from "components/Main/IconBlock/IconBlock.module.css";

export const IconBlock = () => (
  <div className={css.iconBlock}>
    {icons.map(icon => (
      <div className={css.icon} key={icon.name}>
        {icon.comp}
      </div>
    ))}
  </div>
);

// IconBlock.propTypes = { icons: PropTypes.array.isRequired };
