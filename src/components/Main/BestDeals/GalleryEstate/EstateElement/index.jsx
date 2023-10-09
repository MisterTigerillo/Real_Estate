import {
  Estate,
  EstateOptions,
  EstateOption,
  EstateImage,
  Image,
} from "./EstateElement.styled";

export const EstateElement = props => {
  // console.log(props);
  return (
    <Estate>
      <EstateOptions>
        <EstateOption>Featured</EstateOption>
      </EstateOptions>
      <EstateImage>
        <Image src={props.img}></Image>
      </EstateImage>
    </Estate>
  );
};
