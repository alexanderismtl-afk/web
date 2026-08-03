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
        primary: '#0a66c2',
        'primary-dark': '#054399',
        secondary: '#f0f2f5',
        'secondary-dark': '#e4e6eb',
      },
    },
  },
  plugins: [],
}
export default config
