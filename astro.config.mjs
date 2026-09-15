// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'My Docs',
          customCss: [
            // Path to your Tailwind base styles:
            './src/styles/global.css',
            ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
                { slug: 'getting-started' },
                { slug: 'docker-deployment' },
                { slug: 'local-deployment' },
              {
                  label: 'Advanced configuration',
                  items: [{ autogenerate: { directory: 'config' } }],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});