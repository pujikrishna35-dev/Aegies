/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#FBE6E9',
          200: '#F6CCD3',
          300: '#EEA3AF',
          400: '#E26D81',
          500: '#D03C58',
          600: '#B82341',
          700: '#9B1934',
          800: '#8A1538',
          900: '#6C132C',
          950: '#3D0615',
        },
        navy: {
          50: '#F0F4FA',
          100: '#D9E3F3',
          200: '#B0C5E6',
          300: '#7FA3D4',
          400: '#4E7EBF',
          500: '#2A5D9E',
          600: '#1C4378',
          700: '#143159',
          800: '#0E213D',
          900: '#071228',
          950: '#040A17',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FAF6E8',
          200: '#F3E8C5',
          300: '#EBD89E',
          400: '#E2C474',
          500: '#C5A059',
          600: '#A8823B',
          700: '#86642A',
          800: '#64481C',
          900: '#463110',
        },
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F4',
          200: '#F5F0E8',
          300: '#EDE4D5',
        },
        sky: {
          50: '#F2F8FD',
          100: '#E5F1FC',
          200: '#BFE0F7',
          300: '#89C5EF',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(7, 18, 40, 0.12), 0 0 15px rgba(197, 160, 89, 0.08)',
        'gold-glow': '0 0 25px rgba(226, 196, 116, 0.35)',
        'card-elevated': '0 12px 32px -4px rgba(7, 18, 40, 0.08), 0 4px 12px -2px rgba(7, 18, 40, 0.03)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
