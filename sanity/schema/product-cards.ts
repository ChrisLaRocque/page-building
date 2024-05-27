import { defineField, defineType } from "sanity";
import { MdOutlineShoppingBag } from "react-icons/md";

export const productCardsType = defineType({
  name: "productCards",
  type: "object",
  icon: MdOutlineShoppingBag,
  fields: [
    defineField({
      name: "cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "productCard",
          fields: [
            defineField({
              name: "images",
              type: "array",
              of: [{ type: "image" }],
            }),
            defineField({
              name: "callout",
              type: "string",
            }),
            defineField({
              name: "name",
              type: "string",
            }),
            defineField({
              name: "productCategory",
              type: "string",
              options: {
                list: [
                  "Men's Shoes",
                  "Basketball Shoes",
                  "Men's Road Running Shoes",
                ],
              },
            }),
            defineField({
              name: "price",
              type: "number",
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "images[0].asset",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      cards: "cards",
    },
    prepare({ cards }) {
      return {
        title: "Product cards",
        subtitle: cards.map(({ name }) => name).join(", "),
      };
    },
  },
});
