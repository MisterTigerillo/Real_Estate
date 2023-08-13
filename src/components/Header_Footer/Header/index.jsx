// import PropTypes from "prop-types";
import { Header } from "./Header.styled";
import { FlexContainer } from "components/Container/Container.styled";
import { Logo } from "components/Header_Footer/Logo/Logo.styled";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";

export const HeaderWrapper = () => {
  return (
    <Header>
      <FlexContainer>
        <Logo href="/">SmartSpace</Logo>
        <Navigation />
      </FlexContainer>
    </Header>
  );
};

// Header.propTypes = { icons: PropTypes.array.isRequired };
