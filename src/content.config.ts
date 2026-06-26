import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    url: z.string().url().optional(),
    order: z.number().optional().default(0),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
