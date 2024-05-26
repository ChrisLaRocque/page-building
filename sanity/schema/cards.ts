import { defineField, defineType } from "sanity";
import { TbCards } from "react-icons/tb";

export const cardsType = defineType({
  name: "cards",
  type: "object",
  icon: TbCards,
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "subHeading",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      description: "Shared text for cards. Can be overriden in each card.",
      type: "string",
    }),
    defineField({
      name: "cards",
      type: "array",
      of: [
        {
          name: "card",
          type: "object",
          fields: [
            defineField({
              name: "featured",
              type: "boolean",
            }),
            defineField({
              name: "badge",
              type: "string",
            }),
            defineField({
              name: "headline",
              type: "string",
            }),
            defineField({
              name: "body",
              type: "string",
            }),
            defineField({
              name: "image",
              type: "image",
            }),

            defineField({
              name: "cta",
              title: "CTA",
              type: "object",
              fields: [
                defineField({
                  name: "ctaText",
                  title: "CTA Text",
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
          preview: {
            select: {
              title: "headline",
              type: "featured",
              media: "image",
            },
            prepare({ title, type, media }) {
              return {
                title,
                subtitle: type ? "Featured" : "Default",
                media,
              };
            },
          },
        },
      ],
    }),
  ],
});
