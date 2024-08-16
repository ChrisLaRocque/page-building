import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { AllPageQueryResult } from "@/sanity/types";

const allPageQuery = groq`*[_type == "page"]{"slug":slug.current, _updatedAt, language}`;
const baseUrl = "http://localhost:3000/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await client.fetch<AllPageQueryResult>(allPageQuery);

  return pages.map(({ slug, _updatedAt, language }) => {
    return {
      url: `${baseUrl}${language}/${slug}`,
      lastModified: new Date(_updatedAt),
    };
  });
}
