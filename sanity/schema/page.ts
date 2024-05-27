import { defineType, defineField } from "sanity";
import { RiPagesLine } from "react-icons/ri";

export const pageType = defineType({
  name: "page",
  type: "document",
  icon: RiPagesLine,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        { type: "carouselHero" },
        { type: "hero" },
        { type: "split" },
        { type: "cards" },
        { type: "frequentlyAskedQuestions" },
        { type: "iconCards" },
        { type: "productCards" },
      ],
    }),
  ],
});
