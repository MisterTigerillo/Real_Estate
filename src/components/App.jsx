import { Header } from "components/Header/Header";
import { RealEstate } from "components/Main/RealEstate";
import { Footer } from "components/Footer/Footer";

// import icons from "partners.json";
import icons from "components/icons";
console.log(icons);

export default function App() {
  return (
    <div className="App">
      {/* <div className="content"> */}
      <Header icons={icons} />
      <RealEstate />
      <Footer />
    </div>
    // </div>
  );
}
