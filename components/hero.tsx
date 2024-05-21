import { href } from "@/sanity/lib/href";
import { urlForImage } from "@/sanity/lib/image";
import { type Hero } from "@/sanity/types";
import Link from "next/link";

export default function Hero({ eyebrow, headline, image, button }: Hero) {
  const imageUrl = urlForImage(image);

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }} // no way this is the only option, right?
      className="flex h-[30rem]  flex-col  bg-cover bg-center bg-no-repeat md:h-[calc(100vh-212px)]"
    >
      <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
        {eyebrow && <span className="block text-white">{eyebrow}</span>}
        {headline && (
          <span className="block text-xl text-white md:text-3xl">
            {headline}
          </span>
        )}
        {button && (
          <div className="mt-5">
            <Link
              className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
              href={href({ _type: button?.to?._type, slug: button?.to?.slug })}
            >
              {button.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
