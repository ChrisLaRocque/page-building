import { defineField, defineType } from "sanity";

export const splitType = defineType({
  name: "split",
  type: "object",
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
});
