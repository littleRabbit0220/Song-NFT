/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'],
      aril: ['Aril', 'Helvetica', 'Arial', 'sans-serif'],
      kint: 'kint',
    },

    container: {
      center: true,
    },
    extend: {
      gradientColorStops: {
        'orange-transparent': 'rgba(248, 78, 36, 0.501961)',
        'purple-transparent': 'rgba(17, 11, 29, 0.0001)',
      },
      backgroundColor: {
        body: '#110B1D',
      },
      colors: {
        primary: '#F05E25',
        secondary: '#120C1E;',
        sweetDark: '#110B1D',
        sweetTurquoise: '#3CC9B7',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
