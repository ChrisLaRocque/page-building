import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./page";
import { carouselHeroType } from "./carousel-hero";
import { heroType } from "./hero";
import { splitType } from "./split";
import { cardsType } from "./cards";
import { faqType } from "./frequently-asked-questions";
import { iconCardType } from "./icon-cards";
import { productCardsType } from "./product-cards";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    carouselHeroType,
    heroType,
    splitType,
    cardsType,
    faqType,
    iconCardType,
    productCardsType,
  ],
};
