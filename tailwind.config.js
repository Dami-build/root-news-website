/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8860B',
          light: '#DAA520',
          soft: '#E6C200',
        },
        surface: {
          DEFAULT: '#0A0A0F',
          alt: '#0E0E1E',
          raised: '#1A1A2E',
          card: '#1E1E1E',
        },
        accent: {
          red: '#FF4D6A',
          blue: '#5B6EF5',
          purple: '#9B59E8',
          teal: '#29D9A5',
          amber: '#F5A623',
          sky: '#4FC3F7',
        },
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
