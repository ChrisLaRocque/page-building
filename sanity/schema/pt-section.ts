import { defineField, defineType } from "sanity";
import { CiTextAlignLeft } from "react-icons/ci";

export const ptSectionType = defineType({
  name: "portableTextSection",
  type: "object",
  icon: CiTextAlignLeft,
  fields: [
    defineField({
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
        { type: "frequentlyAskedQuestions" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "body[0].children[0].text",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Portable text",
      };
    },
  },
});
