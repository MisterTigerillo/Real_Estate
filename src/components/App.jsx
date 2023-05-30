import { Header } from "components/Header_Footer/Header/Header";
import { RealEstate } from "components/Main/RealEstate";
import { Footer } from "components/Header_Footer/Footer/Footer";

import { Container } from "components/Container";

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <RealEstate />
        <Footer />
      </Container>
    </>
  );
}
