/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile':
          "url('../public/assets/home/background-home-mobile.jpg')",
        'home-tablet':
          "url('../public/assets/home/background-home-tablet.jpg')",
        'home-desktop':
          "url('../public/assets/home/background-home-desktop.jpg')",
        'dest-mobile':
          "url('../public/assets/destination/background-destination-mobile.jpg')",
        'dest-tablet':
          "url('../public/assets/destination/background-destination-tablet.jpg')",
        'dest-desktop':
          "url('../public/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile':
          "url('../public/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet':
          "url('../public/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop':
          "url('../public/assets/crew/background-crew-desktop.jpg')",
        'tech-mobile':
          "url('../public/assets/technology/background-technology-mobile.jpg')",
        'tech-tablet':
          "url('../public/assets/technology/background-technology-tablet.jpg')",
        'tech-desktop':
          "url('../public/assets/technology/background-technology-desktop.jpg')",
      },
      colors: {
        transparent: 'transparent',
        white: 'white',
        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
      },
      screens: {
        sm: '300px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      fontFamily: {
        condensed: ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
    },
    plugins: [],
  },
};

//   theme: {
//     extend: {
//       fontFamily: {
//         barlow: ['Barlow Condensed', 'sans-serif'],
//         bellefair: ['Bellefair', 'serif'],
//       },
//     },
//     plugins: [],
//   },
// };
