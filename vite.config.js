import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    host: "0.0.0.0", // ✅ ensure Render can bind
    allowedHosts: [
      "pmc-website-2.onrender.com", // your Render domain
    ],
  },
});
