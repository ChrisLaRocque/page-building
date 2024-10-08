import { QueryParams, groq } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { AllPageQueryResult, PageQueryResult } from "@/sanity/types";
import SectionResolver from "@/components/section-resolver";

const allPageRouteQuery = groq`*[_type == "page"]`;
const pageQuery = groq`*[_type == "page" && slug.current == $slug && language == $language][0]{

  sections[]{
    _key,
    _type,
    _type == "carouselHero" => {
      items[]{
        headline,
        eyebrow,
        image{
          ...,
          "palette": asset->metadata.palette
        },
        _key,
        button{
          to->,
          text
        }
      }
    },
    _type == "hero" => {
      headline,
      eyebrow,
      image {
        ...,
        "palette": asset->metadata.palette
      },
      button{
        to->,
        text
      }
    },
    _type == "split" => {
      headline,
      body,
      image,
      styles
    },
    _type == "frequentlyAskedQuestions" => {
      heading,
      body,
      questions,
    },
    _type == "iconCards" => {
      heading,
      cards,
    },
    _type == "cards" => {
      headline,
      subHeading,
      ctaText,
      cards[]{
        _key,
        headline,
        badge,
        body,
        featured,
        cta{
          ctaText,
          to->
        },
        image {
          ...,
          "palette": asset->metadata.palette
        }
      },
    },
    _type == "productCards" => {
      cards[]{
        name,
        images,
        price,
        productCategory,
        callout,
        _key
      }
    },
    _type == "portableTextSection" => {
      body
    },
    _type == "stats" => {
      heading,
      stats
    }
  }
}`;

export async function generateStaticParams() {
  const posts = await sanityFetch<AllPageQueryResult>({
    query: allPageRouteQuery,
    perspective: "published",
    stega: false,
  });

  return posts.map((page) => ({
    slug: page?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const page = await sanityFetch<PageQueryResult>({ query: pageQuery, params });
  if (!page) {
    return notFound();
  }
  const { sections } = page;
  return (
    <div>
      {sections &&
        sections.map((section) => {
          return <SectionResolver key={section._key} section={section} />;
        })}
    </div>
  );
}
