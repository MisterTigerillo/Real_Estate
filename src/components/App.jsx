import { Header } from "components/Header/Header";
import { RealEstate } from "components/Main/RealEstate";
import { Footer } from "components/Footer/Footer";

import ourPartners from "partners.json";

export default function App() {
  return (
    <div className="App">
      {/* <div className="content"> */}
      <Header partners={ourPartners} />
      <RealEstate />
      <Footer />
    </div>
    // </div>
  );
}
