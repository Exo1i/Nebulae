/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "m3-schemes-on-background": "var(--m3-schemes-on-background)",
      },
    },
  },
  plugins: [],
};
