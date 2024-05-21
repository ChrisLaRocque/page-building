import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./page";
import { carouselHeroType } from "./carousel-hero";
import { heroType } from "./hero";
import { splitType } from "./split";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, carouselHeroType, heroType, splitType],
};
