import { Options } from '$fresh/plugins/twind.ts';

export default {
  selfURL: import.meta.url,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-das': '#0B0D21',
        'esmerald-300': '#6EE7B7',
        'teal-300': '#5EEAD4',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Montserrat:wght@400;600;700&display=swap')'`,
  },
} as Options;
