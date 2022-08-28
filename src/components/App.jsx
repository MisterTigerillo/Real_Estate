import { Header } from "./Header/Header";
import { RealEstate } from "./Main/RealEstate";
import { Footer } from "./Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <RealEstate />
        <Footer />
      </div>
    </div>
  );
}
