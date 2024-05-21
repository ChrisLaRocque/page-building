import { defineType, defineField } from "sanity";
import { RiCarouselView } from "react-icons/ri";

export const carouselHeroType = defineType({
  name: "carouselHero",
  type: "object",
  icon: RiCarouselView,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Used for internal identification",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "hero" }],
    }),
  ],
});
