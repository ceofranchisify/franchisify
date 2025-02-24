/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure Tailwind scans all relevant files
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"], // ✅ Add Poppins to Tailwind
        },
      },
    },
    plugins: [],
  };
  