import { defineType, defineField } from "sanity";
import { RiPagesLine } from "react-icons/ri";
import { RxSection } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5";

export const pageType = defineType({
  name: "page",
  type: "document",
  icon: RiPagesLine,
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "info",
      validation: (rule) => rule.required().min(1).max(80),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "info",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "sections",
      type: "array",
      group: "sections",
      of: [
        { type: "carouselHero" },
        { type: "hero" },
        { type: "split" },
        { type: "cards" },
        { type: "frequentlyAskedQuestions" },
        { type: "iconCards" },
        { type: "productCards" },
        { type: "portableTextSection" },
        { type: "stats" },
      ],
    }),
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
  groups: [
    {
      name: "info",
      icon: IoInformationCircleOutline,
    },
    {
      name: "sections",
      icon: RxSection,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language",
    },
  },
});
