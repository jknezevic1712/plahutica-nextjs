/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "cstm-bg": "#faf7ff",
        "cstm-text": "#3c3c3c",
        "cstm-highlight": "#9acd32",
      },
      fontFamily: {
        "dancing-script": "Dancing Script, cursive",
        "plus-jakarta-sans": "Plus Jakarta Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
