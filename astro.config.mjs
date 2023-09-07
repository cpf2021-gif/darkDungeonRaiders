import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from "@astrojs/netlify/functions";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Doc',
    social: {
      github: 'https://github.com/cpf2021-gif'
    },
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    sidebar: [{
      label: '介绍',
      autogenerate: {
        directory: 'about'
      }
    }],
    lastUpdated: true,
    pagination: true
  })],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  adapter: [
    netlify(),
    vercel(),
  ],
});