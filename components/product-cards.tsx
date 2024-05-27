import { type ProductCards } from "@/sanity/types";
import SanityImage from "./sanity-image";

export default function ProductCards({ cards }: ProductCards) {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {cards &&
          cards.map(
            ({ _key, images, callout, name, productCategory, price }) => {
              return (
                <div key={_key}>
                  <div className="flex items-center justify-center overflow-hidden lg:size-72 xl:size-96">
                    {images && <SanityImage image={images[0]} />}
                  </div>
                  <div className="py-4">
                    {callout && (
                      <strong className="block text-sm text-red-800">
                        {callout}
                      </strong>
                    )}
                    {name && <strong className="block">{name}</strong>}
                    {productCategory && (
                      <p className="text-sm">{productCategory}</p>
                    )}
                    {price && <p className="mt-2">{`$${price}`}</p>}
                  </div>
                </div>
              );
            },
          )}
      </div>
    </section>
  );
}
