import { Header } from "components/Header/Header";
import { RealEstate } from "components/Main/RealEstate";
import { Footer } from "components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      {/* <div className="content"> */}
      <Header />
      <RealEstate />
      <Footer />
    </div>
    // </div>
  );
}
