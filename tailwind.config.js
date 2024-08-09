/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        vision: "url('./assets/blob.png')",
        banner: "url('./assets/bannerAlt2.png')",
        bannerlawn: "url('./assets/lawncarebanner.png')",
        aboutbg: "url(./assets/aboutbg.png)",
        gardenbg: "url(./assets/gardenbg.png)",
      },
    },
  },
  plugins: [],
};
