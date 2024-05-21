import Link from "next/link";
import SanityImage from "./sanity-image";
import { type Cards } from "@/sanity/types";
import { href } from "@/sanity/lib/href";
import { urlForImage } from "@/sanity/lib/image";

export default function Cards({ headline, subHeading, cards, ctaText }: Cards) {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        {headline && (
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            {headline}
          </h2>
        )}
        {subHeading && <p className="mt-1 text-gray-600 ">{subHeading}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards &&
          cards.map(({ _key, image, badge, headline, body, featured, cta }) => {
            if (featured) {
              return (
                <Link
                  style={
                    image
                      ? { backgroundImage: `url(${urlForImage(image)})` }
                      : {}
                  }
                  className="group relative flex min-h-60 w-full flex-col rounded-xl  bg-cover bg-center transition hover:shadow-lg"
                  href={href({ _type: cta?.to._type, slug: cta?.to.slug })}
                  key={_key}
                >
                  <div className="flex-auto p-4 md:p-6">
                    {headline && (
                      <h3 className="text-xl text-white/90 group-hover:text-white">
                        {headline}
                      </h3>
                    )}
                  </div>
                  <div className="p-4 pt-0 md:p-6">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                      {cta?.ctaText || ctaText}
                      <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            }
            return (
              <Link
                className="group"
                href={href({ _type: cta?.to._type, slug: cta?.to.slug })}
                key={_key}
              >
                <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
                  {image && (
                    <SanityImage
                      className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      image={image}
                    />
                  )}
                  {badge && (
                    <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white ">
                      {badge}
                    </span>
                  )}
                </div>

                <div className="mt-7">
                  {headline && (
                    <h3 className="e text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                      {headline}
                    </h3>
                  )}
                  {body && <p className="mt-3 text-gray-800 ">{body}</p>}
                  <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline">
                    {cta?.ctaText || ctaText || "Read more"}
                    <svg
                      className="size-4 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
