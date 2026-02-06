
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
          DEFAULT: '#FF2079',
          hover: '#E61D6D',
        },
        cyan: {
          DEFAULT: '#00ffff', // Cyberpunk cyan
          hover: '#00DDEB',
          50: '#00ffff',
          100: '#00ffff',
          200: '#00ffff',
          300: '#00ffff',
          400: '#00ffff',
          500: '#00ffff',
          600: '#00DDEB',
          700: '#00C4D1',
          800: '#00A8B3',
          900: '#008B94',
        },
        lavender: {
          DEFAULT: '#E6E6FF',
          muted: 'rgba(230, 230, 255, 0.6)',
          faint: 'rgba(230, 230, 255, 0.1)',
        },
        purple: {
          deep: '#2A1E5C',
          glass: 'rgba(42, 30, 92, 0.7)',
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
