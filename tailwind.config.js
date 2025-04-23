/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0c4a6e',
          800: '#0c3d5a',
          900: '#0c2d44',
          950: '#0F172A', // Deep navy
        },
        secondary: {
          50: '#fcfbea',
          100: '#f9f7c6',
          200: '#f4ef8e',
          300: '#eee258',
          400: '#e7d22f',
          500: '#dbbe17',
          600: '#EAAA00', // Gold
          700: '#9c7a0c',
          800: '#846711',
          900: '#705613',
          950: '#422f06',
        },
        accent: {
          50: '#fff8f1',
          100: '#feedd8',
          200: '#fbd7b0',
          300: '#f9bc7f',
          400: '#f6964a',
          500: '#f37520',
          600: '#e15a14',
          700: '#bb4213',
          800: '#963516',
          900: '#7a2f17',
          950: '#42150a',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f1f1f1',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4a4a4a',
          950: '#333333',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'amenities-pattern': "linear-gradient(to right bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.6)), url('https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};