import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID ?? "f44b5d0d-6f24-4908-9faf-c0c1ff2464f0", // Get this from tina.io
  token: process.env.TINA_TOKEN ?? "e3d592f4a857ee3f5afd65e155a9b4124f63f93c", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "themes/mytheme/static",
  },
  media: {
    tina: {
      mediaRoot: "/images",
      publicFolder: "themes/mytheme/static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/",
        match: {
          include: "*"
        },
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
