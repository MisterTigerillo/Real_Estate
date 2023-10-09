// import PropTypes from "prop-types";
import { icons } from "components/Main/Hero/Partners/icons";

import { PartnersTitle, PartnersLogos, Logo } from "./Partners.styled.js";

export const Partners = () => (
  <>
    {" "}
    <PartnersTitle>Our Amazing Partners</PartnersTitle>
    <PartnersLogos>
      {icons.map(icon => (
        <Logo key={icon.name}>{icon.comp}</Logo>
      ))}
    </PartnersLogos>
  </>
);

// PartnersLogos.propTypes = { icons: PropTypes.array.isRequired };
