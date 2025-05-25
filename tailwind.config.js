/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['bg-gradient-radial'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f8ff',
          100: '#e8f1ff',
          200: '#d1e3ff',
          300: '#a6c8ff',
          400: '#7aadff',
          500: '#4d91ff',
          600: '#2775ff',
          700: '#1a5ee6',
          800: '#1550cc',
          900: '#1244b3',
        },
        secondary: {
          50: '#fff5f9',
          100: '#ffe6f0',
          200: '#ffd1e3',
          300: '#ffadc9',
          400: '#ff7aa7',
          500: '#ff4785',
          600: '#ff1463',
          700: '#e60c52',
          800: '#cc0a49',
          900: '#b30940',
        },
        accent: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe499',
          300: '#ffd766',
          400: '#ffc933',
          500: '#ffbb00',
          600: '#e6a800',
          700: '#cc9500',
          800: '#b38200',
          900: '#996f00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};