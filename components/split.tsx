import { PortableText } from "next-sanity";
import SanityImage from "./sanity-image";
import { type Split } from "@/sanity/types";

export default function Split({ headline, body, image }: Split) {
  return (
    <section className="group mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div className="overflow-hidden rounded-xl group-odd:order-last">
          <SanityImage height={450} image={image} />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              {headline && (
                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl ">
                  {headline}
                </h2>
              )}
              {body && (
                <PortableText
                  value={body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-gray-500">{children}</p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-inside list-disc">{children}</ul>
                      ),
                    },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
