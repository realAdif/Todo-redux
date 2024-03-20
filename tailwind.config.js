/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
      },
      fontFamily: {
        sans: ['Josefin Sans'],
      },
    },
  },
  plugins: [],
};
