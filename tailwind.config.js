module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': '80% 20%',
        '2-e':  '20% 80%',
        '2-i': '50% 50%'
      },
      padding: {
        '2/3':'66.66667%'
      }
    },
    minHeight: {
      '80': '80px',
     },
     maxHeight: {
       '100':'100px',
       '200':'200px',
       '250':'250px',
       '300':'300px',
       '500':'500px',
       '600':'600px'
     }
  },
  variants: {
    extend: {
    },
  },
  plugins: [require('daisyui')],
}
