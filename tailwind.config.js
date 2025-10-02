import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          contrast: "#fff",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
