/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear':
          'linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
      colors: {
        //primary colors
        'bright-blue': 'hsl(220, 98%, 61%)',
        //light theme
        'light-gray': 'hsl(0, 0%, 98%)',
        'lavender-web': 'hsl(236, 33%, 92%)',
        'french-gray': 'hsl(233, 11%, 84%)',
        'cool-gray': ' hsl(236, 9%, 61%)',
        'dark-grayish-blue': 'hsl(235, 19%, 35%)',
        // dark theme
        'very-dark-blue-dark': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-gray-dark': 'hsl(234, 39%, 85%)',
        'very-dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-dark': 'hsl(233, 14%, 35%)',
        'desaturated-blue': 'hsl(237, 14%, 26%)',
      },
      fontFamily: {
        sans: ['Josefin Sans'],
      },
    },
  },
  plugins: [],
};
