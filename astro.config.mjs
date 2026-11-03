// @ts-check
import { defineConfig } from 'astro/config';

// For a user site (repo named "sheptrundle.github.io") base stays "/".
// For a project site (e.g. repo "MyPortfolio") set BASE_PATH=/MyPortfolio in the deploy workflow.
export default defineConfig({
  site: 'https://sheptrundle.github.io',
  base: process.env.BASE_PATH ?? '/',
});
