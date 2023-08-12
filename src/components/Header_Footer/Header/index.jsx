// import PropTypes from "prop-types";
import { Header } from "./Header.styled";
import { AdvancedContainer } from "components/Container/Container.styled";
import { Logo } from "components/Header_Footer/Logo/Logo.styled";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";

export const HeaderWrapper = () => {
  return (
    <Header>
      <AdvancedContainer>
        <Logo href="/">SmartSpace</Logo>
        <Navigation />
      </AdvancedContainer>
    </Header>
  );
};

// Header.propTypes = { icons: PropTypes.array.isRequired };
