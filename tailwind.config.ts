import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'deep-900': '#0A0E1A',
        'deep-800': '#1a1a2e',
        lavender: '#E6E6FF',
        'lavender-muted': '#B8B8D4',
        'lavender-faint': 'rgba(230, 230, 255, 0.1)',
        hotPink: '#FF2079',
        'hotPink-hover': '#FF4DA6',
        'purple-deep': '#2A1E5C',
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        heading: ['Quantico', 'Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'Courier New', 'monospace'],
        terminal: ['Share Tech Mono', 'OCR-A', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
