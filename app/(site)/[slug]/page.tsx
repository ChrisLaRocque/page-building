import { QueryParams, SanityDocument, groq } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";

const allPageQuery = groq`*[_type == "page"]`;
const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]`;

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: allPageQuery,
    perspective: "published",
    stega: false,
  });

  return posts.map((page) => ({
    slug: page.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const page = await sanityFetch<SanityDocument>({ query: pageQuery, params });
  if (!page) {
    return notFound();
  }

  return <section>{page.title}</section>;
}
