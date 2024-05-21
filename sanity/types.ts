/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Split = {
  _type: "split";
  headline?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Hero = {
  _type: "hero";
  headline?: string;
  eyebrow?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  button?: {
    text?: string;
    to?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "page";
    };
  };
};

export type CarouselHero = {
  _type: "carouselHero";
  title?: string;
  items?: Array<
    {
      _key: string;
    } & Hero
  >;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  sections?: Array<
    | ({
        _key: string;
      } & CarouselHero)
    | ({
        _key: string;
      } & Hero)
    | ({
        _key: string;
      } & Split)
  >;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./app/(site)/[slug]/page.tsx
// Variable: allPageQuery
// Query: *[_type == "page"]
export type AllPageQueryResult = Array<{
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  sections?: Array<
    | ({
        _key: string;
      } & CarouselHero)
    | ({
        _key: string;
      } & Hero)
    | ({
        _key: string;
      } & Split)
  >;
}>;
// Variable: pageQuery
// Query: *[_type == "page" && slug.current == $slug][0]{  sections[]{    _key,    _type,    _type == "carouselHero" => {      items[]{        headline,        eyebrow,        image,        _key,        button{          to->,          text        }      }    },    _type == "hero" => {      headline,      eyebrow,      image,      button{        to->,        text      }    },    _type == "split" => {      headline,      body,      image,    }  }}
export type PageQueryResult = {
  sections: Array<
    | {
        _key: string;
        _type: "carouselHero";
        items: Array<{
          headline: string | null;
          eyebrow: string | null;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            _type: "image";
          } | null;
          _key: string;
          button: {
            to: {
              _id: string;
              _type: "page";
              _createdAt: string;
              _updatedAt: string;
              _rev: string;
              title?: string;
              slug?: Slug;
              sections?: Array<
                | ({
                    _key: string;
                  } & CarouselHero)
                | ({
                    _key: string;
                  } & Hero)
                | ({
                    _key: string;
                  } & Split)
              >;
            } | null;
            text: string | null;
          } | null;
        }> | null;
      }
    | {
        _key: string;
        _type: "hero";
        headline: string | null;
        eyebrow: string | null;
        image: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        } | null;
        button: {
          to: {
            _id: string;
            _type: "page";
            _createdAt: string;
            _updatedAt: string;
            _rev: string;
            title?: string;
            slug?: Slug;
            sections?: Array<
              | ({
                  _key: string;
                } & CarouselHero)
              | ({
                  _key: string;
                } & Hero)
              | ({
                  _key: string;
                } & Split)
            >;
          } | null;
          text: string | null;
        } | null;
      }
    | {
        _key: string;
        _type: "split";
        headline: string | null;
        body: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?:
            | "blockquote"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }> | null;
        image: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        } | null;
      }
  > | null;
} | null;
