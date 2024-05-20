import { defineType, defineField } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
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
  ],
});
