import { Estates } from "./GalleryEstate.styled";
import { EstateElement } from "components/Main/BestDeals/GalleryEstate/EstateElement";

import { v4 as uuidv4 } from "uuid";

import houseOne from "assets/deals/Image.jpg";
import houseTwo from "assets/deals/Image2.jpg";
import houseThree from "assets/deals/Image3.jpg";

const houses = [
  { name: "HouseOne", img: houseOne, alt: "White House" },
  { name: "HouseTwo", img: houseTwo, alt: "Brown House" },
  { name: "HouseThree", img: houseThree, alt: "Green House" },
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
