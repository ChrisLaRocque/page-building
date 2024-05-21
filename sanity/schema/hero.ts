import { defineType, defineField } from "sanity";
import { TbSection } from "react-icons/tb";

export const heroType = defineType({
  name: "hero",
  type: "object",
  icon: TbSection,
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "eyebrow",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          type: "string",
        }),
        defineField({
          name: "to",
          type: "reference",
          to: [{ type: "page" }],
        }),
      ],
    }),
  ],
});
