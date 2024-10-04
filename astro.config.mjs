import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), auth(), db()],
  adapter: vercel()
});