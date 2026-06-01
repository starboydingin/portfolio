/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#f5f5f0',
        charcoal: '#1a1a1a',
        graphite: '#2a2a2a',
        forest: '#2d5016',
        'forest-mid': '#3a6b1a',
        'forest-light': '#4a8520',
        'forest-hover': '#6aab30',
      },
      fontFamily: {
        playball: ['Playball', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out both',
      },
    },
  },
  plugins: [],
};
