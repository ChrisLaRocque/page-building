import { defineField, defineType } from "sanity";
import { MdOutlinePercent } from "react-icons/md";

export const statsType = defineType({
  name: "stats",
  type: "object",
  icon: MdOutlinePercent,
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "number",
              type: "string",
            }),
            defineField({
              name: "subhead",
              type: "string",
            }),
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
        subtitle: "Stats",
      };
    },
  },
});
