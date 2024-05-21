import { urlForImage } from "@/sanity/lib/image";
import { Image } from "@unpic/react/nextjs";
export default function SanityImage({ image, height }) {
  const url = urlForImage(image);
  return (
    <Image
      src={url}
      height={height}
      layout="constrained"
      alt="Shopify product"
    />
  );
}
