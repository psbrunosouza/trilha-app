const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}')],
  theme: {
    extend: {
      colors: {
        base: {
          100: '#F9FAFB',
          200: '#F5F6F7',
          300: '#F0F1F2',
          400: '#AFBED0',
          500: '#788EAE',
        },
        contrast: {
          100: '#F7F7F9',
          200: '#F1F1F4',
          300: '#E9EAED',
          400: '#AAB1CB',
          500: '#757FAA',
        },
        highlight: {
          100: '#6581FC',
          200: '#3E5FFA',
          300: '#0027F7',
          400: '#001ED4',
          500: '#0016B1',
        },
        success: {
          100: '#C9E6CA',
          200: '#93D098',
          300: '#5EBA66',
          400: '#299434',
          500: '#007D00',
        },
        danger: {
          100: '#FFD5D6',
          200: '#FFACB0',
          300: '#FF8088',
          400: '#FF5760',
          500: '#FF2E38',
        },
        info: {
          100: '#D4E9FF',
          200: '#A3D2FF',
          300: '#73BAFF',
          400: '#429FFF',
          500: '#1484FF',
        },
        warning: {
          100: '#FFF2CD',
          200: '#FFE299',
          300: '#FFD066',
          400: '#FFBB33',
          500: '#FFA500',
        },
        light: '#FFFFFF',
        dark: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
