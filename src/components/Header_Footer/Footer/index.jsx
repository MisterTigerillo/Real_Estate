import { Footer } from "./Footer.styled";
import { FlexContainer } from "components/Container/Container.styled";
import { Logo } from "components/Header_Footer/Logo/Logo.styled";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";

export const FooterWrapper = () => (
  <Footer>
    <FlexContainer>
      <Logo href="/">SmartSpace</Logo>
      <Navigation />
    </FlexContainer>
  </Footer>
);
