/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        200: '#E1E1E6',
        300: '#C4C4CC',
        400: '#7C7C8A',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
      },
      green: {
        300: '#00B37E',
        400: '#00875F',
        700: '#015F43',
      },
      red: {
        400: '#F75A68',
        700: '#AA2834',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
