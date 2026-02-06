
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
        deep: {
          900: '#0A0E1A', // Primary background
          800: '#151b2e', // Slightly lighter background
        },
        hotPink: {
          DEFAULT: '#ff0066', // Main hot pink
          hover: '#E61D6D',
          light: '#ff4da6',
        },
        cyan: {
          DEFAULT: '#00ffff', // Cyberpunk cyan
          hover: '#00ffff',
          50: '#00ffff',
          100: '#00ffff',
          200: '#00ffff',
          300: '#00ffff',
          400: '#00ffff',
          500: '#00ffff',
        },
        lavender: {
          DEFAULT: '#E6E6FF',
          muted: 'rgba(230, 230, 255, 0.6)',
          faint: 'rgba(230, 230, 255, 0.1)',
        },
        purple: {
          deep: '#2A1E5C',
          glass: 'rgba(42, 30, 92, 0.7)',
          dark: '#1a0033',
        },
        gray: {
          light: '#cccccc',
          medium: '#888888',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
