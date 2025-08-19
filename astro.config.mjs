// // astro.config.mjs

// // @ts-check
// import { defineConfig } from 'astro/config';

// // This is the correct import for your setup
// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [
//       tailwindcss(),
//     ],
//   },
// });


// astro.config.mjs

// @ts-check
import { defineConfig } from 'astro/config';

// Import TailwindCSS plugin
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
    preview: {
      // ✅ Allow Render host
      allowedHosts: ["pmc-website-2.onrender.com"],
    },
  },
});
