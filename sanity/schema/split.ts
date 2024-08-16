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
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "style",
          type: "string",
          description: "Default is rounded",
          options: {
            list: ["rounded", "square"],
          },
        }),
      ],
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    // defineField({
    //   name: "styles",
    //   type: "object",
    //   fields: [
    //     defineField({
    //       name: "backgroundColor",
    //       type: "string",
    //       description: "Default is transparent",
    //       options: {
    //         list: ["transparent", "gray"],
    //       },
    //     }),
    //   ],
    // }),
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
