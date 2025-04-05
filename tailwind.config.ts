import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{vue,css,ts}', 'index.html'],
  plugins: [],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
} satisfies Config
