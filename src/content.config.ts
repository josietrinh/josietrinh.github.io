import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// a photo slot: leave src empty and it shows a marked placeholder
const photo = z.object({
  src: z.string().default(''),
  alt: z.string(),
  caption: z.string().optional(),
  ratio: z.string().optional(), // e.g. "1 / 1" for square art; defaults to 4 / 3
});

const point = z.object({
  label: z.string().optional(),
  text: z.string().default(''),
});

// one campaign in the index; instagram links are embedded, anything else is a plain link
const campaign = z.object({
  name: z.string(),
  period: z.string(),
  summary: z.string(),
  assets: z.array(z.object({ href: z.string(), label: z.string() })).default([]),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/case-studies' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dates: z.string(),
    order: z.number(),
    focus: z.string(),
    motif: z.enum(['sparkle', 'waves', 'stars', 'rays', 'ripples', 'dots', 'streaks', 'sunrise']).default('sparkle'),
    cover: photo.optional(),
    glance: z.array(z.object({ label: z.string(), value: z.string() })),
    projects: z.array(
      z.object({
        title: z.string(),
        scope: z.string().optional(),
        problemLabel: z.string().default('the problem'),
        problem: z.string().optional(),
        approachLabel: z.string().default('approach'),
        approach: z.string().optional(),
        pointsLabel: z.string().optional(),
        points: z.array(point).default([]),
        outcome: z.string().optional(),
        link: z.object({ text: z.string(), href: z.string(), note: z.string().optional() }).optional(),
        photos: z.array(photo).default([]),
        contactForMore: z.boolean().default(false), // no visuals shown; points readers to the contact page instead
      }),
    ),
    campaigns: z.array(campaign).default([]),
    skills: z.array(z.string()),
    tools: z.array(z.string()),
  }),
});

// self-initiated mock campaigns: one markdown file each; files starting with _ are skipped
const personalProjects = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: './content/personal-projects' }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    date: z.coerce.date(),
    type: z.enum(['campaign', 'positioning', 'content', 'design']),
    summary: z.string(),
    status: z.enum(['mock', 'in-progress']),
    cover: photo.optional(),
    gallery: z.array(photo).default([]),
    pdf: z.object({ src: z.string(), title: z.string() }).optional(),
  }),
});

// media log: one json file per month
const media = defineCollection({
  loader: glob({ pattern: '*.json', base: './content/media' }),
  schema: z.object({
    month: z.string().regex(/^\d{4}-\d{2}$/),
    items: z.array(
      z.object({
        type: z.enum(['book', 'film', 'show', 'music', 'podcast', 'article']),
        title: z.string(),
        by: z.string().optional(),
        rating: z.number().min(1).max(5).nullable().optional(),
        note: z.string().optional(),
        link: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { caseStudies, personalProjects, media };
