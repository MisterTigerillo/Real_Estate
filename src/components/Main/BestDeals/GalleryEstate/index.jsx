import { EstateElement } from "components/Main/BestDeals/GalleryEstate/EstateElement";
import { v4 as uuidv4 } from "uuid";

import house1 from "assets/deals/Image.jpg";
import house2 from "assets/deals/Image2.jpg";
import house3 from "assets/deals/Image3.jpg";
import { Estates } from "./GalleryEstate.styled";

const houses = [
  { name: "HouseOne", img: house1 },
  { name: "HouseTwo", img: house2 },
  { id: "id-3", name: "HouseThree", img: house3 },
];

export const GalleryEstate = () => {
  return (
    <Estates>
      {houses.map(house => (
        <EstateElement key={uuidv4()} name={house.name} img={house.img} />
      ))}
    </Estates>
  );
};
