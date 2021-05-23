module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        orangeMaya: '#FF916A',
        whiteMaya: '#FFFFFF',
        blackMaya: '#000000',
        redMaya: '#F97168',
        greenMaya: {
          DEFAULT: '#008B92',
          light: '#B3DDCF',
          dark: '#317885',
          lighter: '#A8DFCE',
        },
        blueMaya: {
          DEFAULT: '#4EA8B5',
          light: '#45A4C7',
          dark: '#252464',
        },
        greymaya: {
          DEFAULT: '#999999',
          light: '#CCCCCC',
          dark: '#6C6C6C',
        },
        yellowMaya: '#FFC960',
      },
    },
  },
};
