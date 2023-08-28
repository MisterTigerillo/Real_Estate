import {
  Estates,
  Estate,
  EstateOptions,
  EstateOption,
  EstateImage,
  Image,
} from "./GalleryEstate.styled";

export const GalleryEstate = () => {
  return (
    <Estates>
      <Estate>
        <EstateOptions>
          <EstateOption>Featured</EstateOption>
        </EstateOptions>
        <EstateImage>
          <Image></Image>
        </EstateImage>
      </Estate>
    </Estates>
  );
};
