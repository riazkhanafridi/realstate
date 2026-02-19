/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C3D5A ",
        secondary: "#F4A261",
        "deep-blue": "#1C3D5A",
        "warm-orange": "#F4A261",
      },
    },
  },
  plugins: [],
};
