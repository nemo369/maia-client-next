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
      spacing: {
        bbc: '1920px',
      },

      textColor: (theme) => theme('colors'),
      // eslint-disable-next-line no-dupe-keys
      textColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        mainTurquoise: '#3C91A0',
        mainOrange: '#FB9773',
        mainWhite: '#FFFFFF',
        topBarGrey: '#999999',
        landingpage_section3darkgrey: '#343434',
        lp_sec4_left_darkgrey: '#6C6C6C',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        mainOrange: '#FB9773',
      }),

      fontSize: {
        topBarFontSize: '25px',
      },

      //  height: {
      //   sm: '8px',
      //   md: '16px',
      //   lg: '24px',
      //   xl: '100px',
      //  }
    },
  },
};
