/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "Rose-White": "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        "Light-Grey": "hsl(30, 18%, 87%)",
        "Wenge-Brown": "hsl(30, 10%, 34%)",
        "Dark-Charcoal": "hsl(24, 5%, 18%)",

        Nutmeg: "hsl(14, 45%, 36%)",
        "Dark-Raspberry": "hsl(332, 51%, 32%)",
      },
      fontFamily: {
        outfit: ["outfit", "sans"],
        "young-serif": ["youngserif", "serif"],
      },
      fontWeight: {
        outfit: {
          light: 400,
          regular: 600,
          bold: 800,
        },
        "young-serif": {
          light: 400,
        },
      },
    },
  },
  plugins: [],
};
