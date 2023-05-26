import { Header } from "components/Header/Header";
import { RealEstate } from "components/Main/RealEstate";
import { Footer } from "components/Footer/Footer";

import { Container } from "components/Container";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <RealEstate />
        <Footer />
      </Container>
    </div>
    // </div>
  );
}
