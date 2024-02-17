/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'lsc': {
          'primary': '#feb307',
          'primary-focus': '#f7c500',
          'primary-content': '#ffffff',
          'secondary': '#f7c500',
          'secondary-focus': '#f7c500',
          'secondary-content': '#ffffff',
          'accent': '#f7c500',
          'accent-focus': '#f7c500',
          'accent-content': '#ffffff',
          'neutral': '#f7c500',
          'neutral-focus': '#f7c500',
          'neutral-content': '#ffffff',
          'base-100': '#1f1e2a',
          'base-200': '#111827',
          'base-300': '#f7c500',
          'base-content': '#ffffff',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        }
      },
      'dark',
    ],
  },
}
