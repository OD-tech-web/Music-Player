/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
    extend: {
      keyframes: {
        'rotation': {
          'from': {transform: 'rotate(0deg)'},
          'to': {transform: 'rotate(359deg)'},
        },
        'wave': {
          '50%': {height: '20%'/* , background: 'linear-gradient(135deg, #bd2210, #e5550b)' */},
          '100%': {height: '100%'},
        }
      },
      animation: {
        'rotation': 'rotation 8s infinite linear',
        'wave': 'wave 1.4s infinite linear',
      }
    },
  },
  plugins: [],
}

