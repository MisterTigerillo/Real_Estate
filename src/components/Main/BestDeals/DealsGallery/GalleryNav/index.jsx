import { Navigation, Button } from "./GalleryNav.styled";

const buttonObject = [
  { id: "id-1", name: "Residential Property" },
  { id: "id-2", name: "Commercial Property" },
  { id: "id-3", name: "Agriculture Property" },
  { id: "id-4", name: "Industrial Property" },
];

export const GalleryNav = () => {
  return (
    <Navigation>
      {buttonObject.map(buttonName => (
        <Button key={buttonName.id}>{buttonName.name}</Button>
      ))}
    </Navigation>
  );
};
