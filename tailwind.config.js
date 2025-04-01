
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'volt': {
          50: '#f4f9fb',
          100: '#e9f3f7',
          200: '#d3e7ee',
          300: '#b2d6e3',
          400: '#87bfd2',
          500: '#5ea8c2',
          600: '#3d8daa',
          700: '#33748c',
          800: '#2d6275',
          900: '#295263',
          950: '#1a3640',
        },
        'energy': {
          50: '#f2fbf4',
          100: '#e0f7e6',
          200: '#c3eece',
          300: '#96e0a8',
          400: '#64cb7b',
          500: '#40b156',
          600: '#2e9243',
          700: '#267238',
          800: '#245b30',
          900: '#1f4c2b',
          950: '#0f2a17',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'volt': '0 4px 14px 0 rgba(45, 98, 117, 0.08)',
        'volt-lg': '0 10px 25px -3px rgba(45, 98, 117, 0.08)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
  