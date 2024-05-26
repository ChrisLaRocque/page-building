import { defineField, defineType } from "sanity";

export const iconCardType = defineType({
  name: "iconCards",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "cards",
      type: "array",
      of: [
        {
          name: "iconCard",
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              options: {
                list: ["robot", "box", "bolt", "trophy", "people", "thumb"],
              },
            },
            {
              name: "heading",
              type: "string",
            },
            {
              name: "body",
              type: "text",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Icon cards",
      };
    },
  },
});
