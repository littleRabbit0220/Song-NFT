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
      orbitron: ['"Orbitron"', 'sans-serif'],
    },

    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        1: '0px 14px 35px rgba(0, 0, 0, 0.1)',
        login: '12px 16px 24px rgba(0, 0, 0, 0.24)',
        none: 'none',
      },
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
        'MoshDark-7': '#0F0A1A',
        'MoshLight-1': '#E7E7E8',
        'MoshDark-6': '#262131',
        'MoshLight-2': '#D4D3D6',
        'MoshLight-3': '#A8A6AD',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
