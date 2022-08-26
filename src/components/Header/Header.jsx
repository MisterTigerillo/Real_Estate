import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { Container } from "components/Container";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};
