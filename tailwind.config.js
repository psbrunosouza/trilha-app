const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: '#E2F0CB',
          200: '#B6DB8F',
          300: '#8CC051',
          400: '#63AB1B',
          500: '#3D8D00'
        },
        contrast: {
          100: '#FFD7D7',
          200: '#FFA6A6',
          300: '#FF7575',
          400: '#FF4545',
          500: '#FF1414'
        },
        highlight: {
          100: '#FFD6A5',
          200: '#FFB56B',
          300: '#FF9C3D',
          400: '#FF8211',
          500: '#FF6800'
        },
        success: {
          100: '#C9E6CA',
          200: '#93D098',
          300: '#5EBA66',
          400: '#299434',
          500: '#007D00'
        },
        danger: {
          100: '#FFD5D6',
          200: '#FFACB0',
          300: '#FF8088',
          400: '#FF5760',
          500: '#FF2E38'
        },
        info: {
          100: '#D4E9FF',
          200: '#A3D2FF',
          300: '#73BAFF',
          400: '#429FFF',
          500: '#1484FF'
        },
        warning: {
          100: '#FFF2CD',
          200: '#FFE299',
          300: '#FFD066',
          400: '#FFBB33',
          500: '#FFA500'
        },
        light: '#FFFFFF',
        dark: '#1E1E1E'
      }
    },
  },
  plugins: [],
};
