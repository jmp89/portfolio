/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        dvh: "100vh",
      },
      minHeight: {
        dvh: "100vh",
      },
    },
    plugins: [],
  },
};
