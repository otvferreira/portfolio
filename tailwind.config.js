/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        '4FC3F7': '#4FC3F7',
        'FFFFFF': '#FFFFFF',
        'C1C1C1': '#C1C1C1',
        '1A1A1A': '#1A1A1A',
        'azul'  : '#004953',
        '000000': '#000000'
      },
      spacing: {
        '2.875': '11.5px',
        '6.625': '26.5px',
      },
    },
  },
  plugins: [],
}

