import { defineField, defineType } from "sanity";
import { BsLayoutSplit } from "react-icons/bs";

export const splitType = defineType({
  name: "split",
  type: "object",
  icon: BsLayoutSplit,
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "headline",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Split",
        media,
      };
    },
  },
});
