import Hero from "./hero";
import {
  type CarouselHero as CarouselHeroType,
  type Hero as HeroType,
} from "@/sanity/types";

function CarouselItem({ item }: { item: HeroType }) {
  return (
    <div className="hs-carousel-slide">
      <Hero {...item} />
    </div>
  );
}

export default function CarouselHero({ items }: CarouselHeroType) {
  return (
    <section className="px-4 py-10 lg:px-0">
      <div
        data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
        className="relative"
      >
        <div className="hs-carousel relative h-[30rem] w-full overflow-hidden rounded-2xl  bg-gray-100 md:h-[calc(100vh-212px)]">
          <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700">
            {items &&
              items.map((item) => <CarouselItem key={item._key} item={item} />)}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 absolute inset-y-0 start-0 inline-flex h-full w-12 items-center justify-center rounded-s-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-3.5 flex-shrink-0 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 absolute inset-y-0 end-0 inline-flex h-full w-12 items-center justify-center rounded-e-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-3.5 flex-shrink-0 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
