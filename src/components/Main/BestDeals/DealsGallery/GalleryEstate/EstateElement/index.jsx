import {
  Estate,
  EstateOptions,
  // EstateOption,
  EstateImage,
  Image,
} from "./EstateElement.styled";

// const options = [{ one: "Featured", two: "3D" }];

export const EstateElement = props => {
  // console.log(props);
  return (
    <Estate>
      <EstateOptions>
        {/* <EstateOption>{options[0].one}</EstateOption>
        <EstateOption>{options[0].two}</EstateOption> */}
      </EstateOptions>
      <EstateImage>
        <Image src={props.img}></Image>
      </EstateImage>
    </Estate>
  );
};
