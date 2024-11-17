/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)", // Usar la variable CSS
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        white: "var(--white-color)",
        gray: "var(--gray-color)",
        whiteAndGray: "var(--quaternary-color)",
      },
    },
  },
  plugins: [],
};
