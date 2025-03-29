// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      boxShadow: {
        '3d': '0 15px 50px rgba(99, 102, 241, 0.4)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.7)'
      },
    },
  },
  plugins: [],
}