import { defineType, defineField } from "sanity";
import { CiCircleQuestion } from "react-icons/ci";

export const faqType = defineType({
  name: "frequentlyAskedQuestions",
  type: "object",
  icon: CiCircleQuestion,
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "questions",
      type: "array",
      of: [
        {
          type: "object",
          name: "question",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});
