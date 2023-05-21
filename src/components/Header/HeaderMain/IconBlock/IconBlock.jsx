import PropTypes from "prop-types";

import css from "components/Header/HeaderMain/IconBlock/IconBlock.module.css";

export const IconBlock = ({ sizeW, sizeH }) => {
  // console.log(icons);
  return (
    <div className={css.iconBlock}>
      {icons.map(icon => (
        <svg
          width={icon.width}
          height={icon.height}
          viewBox={icon.viewBox}
          fill="none"
          xlmns={icon.xlmns}
        >
          <path d={icon.d} fill={icon.fil} />
        </svg>
      ))}
    </div>
  );
};

IconBlock.propTypes = { icons: PropTypes.array.isRequired };
