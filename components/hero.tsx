import { href } from "@/sanity/lib/href";
import { urlForImage } from "@/sanity/lib/image";
import { type Hero } from "@/sanity/types";
import Link from "next/link";

export default function Hero({ eyebrow, headline, image, button }: Hero) {
  const bgColor = image?.palette?.dominant?.background;

  return (
    <div
      style={image ? { backgroundImage: `url(${urlForImage(image)})` } : {}} // no way this is the only option, right?
      className="relative flex h-[30rem] flex-col  bg-cover bg-center bg-no-repeat md:h-[calc(100vh-212px)]"
    >
      <div
        style={{
          background: `linear-gradient(10deg, ${bgColor} 0%, rgba(0,0,0,0) 66%)`,
        }}
        className="absolute inset-0 z-10 h-full w-full"
      />
      <div className="z-20 mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
        {eyebrow && <span className="block text-sm text-white">{eyebrow}</span>}
        {headline && (
          <span className="block text-2xl text-white md:text-4xl">
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
