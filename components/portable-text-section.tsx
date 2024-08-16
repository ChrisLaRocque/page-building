import { PortableText } from "next-sanity";
import SanityImage from "./sanity-image";
import FAQ from "./faq";

export const components = {
  types: {
    image: ({ value }) => (
      <div className="my-4">
        <SanityImage image={value} />
      </div>
    ),
  },
};
export default function PortableTextSection({ body }) {
  return (
    <section className="p-4">
      <PortableText value={body} components={components} />
    </section>
  );
}
