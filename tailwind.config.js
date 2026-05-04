/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // ← Esto evita que use prefers-color-scheme
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}