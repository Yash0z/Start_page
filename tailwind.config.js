/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Raleway: ["Raleway"],
        PlayfairDisplay: ["Playfair Display"],
        Poppins: ["Poppins"],
        Questrial: ["Questrial"],
        OpenSans: ["Open Sans"],
      },
      typography: {
        DEFAULT: {
          css: {
            "*": {
              margin: 0,
              padding: 0,
              listStyle: "none",
              boxSizing: "border-box",
              textDecoration: "none",
              fontFamily: "Questrial",
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
