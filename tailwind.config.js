/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Euclid_re: ['Euclid_re'],
            Euclid_li: ['Euclid_li'],
            Raleway_re: ['raleway_re'],
            Noto_JP: ['Noto_JP'],
            PlaywriteEN: ['PlaywriteEN'],
            Montserrat_Black: ['Montserrat_Black'],
            PlaywriteIN_re: ['PlaywriteIN_re'],


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
});
