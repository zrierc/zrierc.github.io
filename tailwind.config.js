const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'mono': ['Oxygen Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
