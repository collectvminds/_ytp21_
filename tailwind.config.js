/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffff",
      textGray: "#aeadb3", //#aeadb3
      primaryBg: "#4c5a6c", //#14c1a3
      darkBg: "#404040",  //0b1225
      deepDarkBg: "#121318", //

      liteDarkBg: "#0b1225",
      darkGray: "#292d33",
      mediumGray: "#404040",
      lightGray: "#4c5a6c",
      Mid: "#4D5A6B",
      Dark: "#292D33",
      Yellow: "#ffd700",
      Blue: "#0057b7",
      CollectionGrey: "#27292D"




    },
    extend: {},
    screens: {
      'mobile': '319px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lgDesktop': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("daisyui")],
}


// Heading1 light
// font: roboto
// size: 50
// style: bold
// colour: FFFFFF

// Heading1 dark
// font: roboto
// size: 50
// style: bold
// colour: 404040

// Heading2 light
// font: roboto
// size: 30
// style: regular
// colour: FFFFFF

// Heading2 dark
// font: roboto
// size: 30
// style: regular
// colour: 404040

// Text light
// font: roboto
// size: 20
// style: regular
// colour: FFFFFF

// Text dark
// font: roboto
// size: 20
// style: regular
// colour: 404040
