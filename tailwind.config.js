module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dm-sans': 'DM Sans, sans-serif'
    },
    colors: {
      'port-gore': '#1C1939',
      'medium-purple': '#7165E3',
      alabaster: '#F7F7F7',
      alto: '#CECECE'
    },
    boxShadow: {
      'bt-xl': 'rgba(0, 0, 0, 0.08) 0 15px 25px, rgba(0, 0, 0, 0.02) 0 -10px 20px'
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}
