import { AdvancedContainer } from "components/Container/Container.styled";
import { EnchancedSection } from "../Main.styled";

import { GalleryNav } from "./GalleryNav/";
import { GalleryEstate } from "./GalleryEstate/";

import {
  Deals,
  DealsContent,
  DealsTitle,
  DealsText,
  DealsButton,
  DealsGallery,
} from "./BestDeals.styled";

export const BestDeals = () => {
  return (
    <EnchancedSection>
      <AdvancedContainer>
        <Deals>
          <DealsContent>
            <DealsTitle>Best Real Estate Deals</DealsTitle>
            <DealsText>
              Colonel gravity get thought fat smiling add but. Wonder twenty
              hunted and put income set desire expect.
            </DealsText>
          </DealsContent>
          <DealsButton>View All Property</DealsButton>
        </Deals>

        <DealsGallery>
          <GalleryNav />
          <GalleryEstate />
        </DealsGallery>
      </AdvancedContainer>
    </EnchancedSection>
  );
};
