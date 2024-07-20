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
         colors: {
            background: 'rgba(var(--background))',
            active: 'rgba(var(--active))',
            filled: 'rgba(var(--filled))',
            accent1: 'rgba(var(--accent-1))',
            accent2: 'rgba(var(--accent-2))',
            accent3: 'rgba(var(--accent-3))',
            textclr1: 'rgba(var(--text-clr1))',
            textclr2: 'rgba(var(--text-clr2))',
         },
         typoraphy: {
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
