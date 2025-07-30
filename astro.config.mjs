// astro.config.mjs

// @ts-check
import { defineConfig } from 'astro/config';

// This is the correct import for your setup
import tailwindcss from '@tailwindcss/vite';
// @ts-ignore
// We still need to import daisyUI to use it
import daisyui from 'daisyui';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // We pass our configuration directly into the tailwindcss() function
      // @ts-ignore
      tailwindcss({
        config: {
          // Add the daisyUI plugin here
          plugins: [daisyui],
        },
      }),
    ],
  },
});