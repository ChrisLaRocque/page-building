/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { locate } from "./sanity/presentation/locate";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";
import { documentInternationalization } from "@sanity/document-internationalization";
import { assist } from "@sanity/assist";

const supportedLanguages = [
  { id: "es", title: "Spanish" },
  { id: "en", title: "English" },
  { id: "de", title: "German" },
];

export default defineConfig({
  basePath: "/studio",
  title: dataset.charAt(0).toUpperCase() + dataset.slice(1),
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  "media.tag",
                  "assist.instruction.context",
                  "translation.metadata",
                ].includes(listItem.getId()),
            ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    unsplashImageAsset(),
    media(),
    documentInternationalization({
      // Required configuration
      supportedLanguages,
      schemaTypes: ["page"],
    }),
    assist({
      translate: {
        document: {
          // The name of the field that holds the current language
          // in the form of a language code e.g. 'en', 'fr', 'nb_NO'.
          // Required
          languageField: "language",
          // Optional extra filter for document types.
          // If not set, translation is enabled for all documents
          // that has a field with the name defined above.
          documentTypes: ["page"],
        },
      },
    }),
  ],
});
