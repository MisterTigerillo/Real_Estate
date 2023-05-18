import PropTypes from "prop-types";

// import { ReactComponent as Buzz } from "assets/buzz.svg";
// import { ReactComponent as Chase } from "assets/chase.svg";
// import { ReactComponent as Microsoft } from "assets/microsoft.svg";
// import { ReactComponent as Gucc } from "assets/gucc.svg";
// import { ReactComponent as Airbnb } from "assets/airbnb.svg";
// import { ReactComponent as Uber } from "assets/uber.svg";

export const Partners = ({ partners }) => {
  console.log(partners);
  return (
    <div>
      <p>Our Amazing Partners</p>
      {partners.map(partner => (
        <div key={partner.name}>
          {partner.name} {partner.svg}
        </div>
      ))}
      {/* <Buzz />
      <Chase />
      <Microsoft />
      <Gucc />
      <Airbnb />
      <Uber /> */}
    </div>
  );
};

Partners.propTypes = { partners: PropTypes.array.isRequired };
