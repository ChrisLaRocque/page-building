import { urlForImage } from "@/sanity/lib/image";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { Image } from "@unpic/react/nextjs";
export default function SanityImage({
  image,
  height,
  className,
}: {
  image: SanityAsset;
  height?: number;
  className?: string;
}) {
  const url = urlForImage(image);
  return (
    <Image
      src={url}
      height={height}
      className={className}
      layout="constrained"
      alt="Shopify product"
    />
  );
}
