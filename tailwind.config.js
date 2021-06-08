module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      maxHeight: ['focus'],
      borderColor: ['checked'],
    },
  },
  // eslint-disable-next-line global-require
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
    require('tailwind-scrollbar'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F19672',
          active: '#D0886D',
          mainOr: '#FB9773',
        },
        white: {
          DEFAULT: '#FFFFFF',
          active: ' #F3F3F3',
        },
        black: '#000000',
        red: {
          DEFAULT: '#F97168',
          error: '#FFDBDB',
          active: '#FF8282',
        },
        green: {
          DEFAULT: '#FF3344',
          light: '#B3DDCF',
          dark: '#15858E',
          // 999: '#317885',
          // 888: '#15858E',
          lighter: '#A8DFCE',
          500: '#41C2C4',
          success: '#DBFFE6',
          successBorder: '#7AD77F',
        },
        blue: {
          DEFAULT: '#3C91A0',
          light: '#45A4C7',
          dark: '#252464',
          active: '#429FAB',
        },
        grey: {
          DEFAULT: '#6C6C6C',
          light: '#CCCCCC',
          dark: '#4C4C4C',
          lighter: '#EEEEEE',
          disabled: '#E7E7E7',
          text: '#B7B7B7',
          active: '#999999',
          mid: '#333333',
        },
        yellow: '#FFC960',
        gradient: {
          1: '#40C2C4',
          2: '#3C91A0',
        },
      },
      spacing: {
        registerPageInputHeight: '50px',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        mainOrange: '#FB9773',
        lightgreybackground: '#F5F5F5',
        registercontainer_white: '#FFFFFF',
        registercontainer_Input_grey: '#FFFFFF',
        registerPageInputGrey: '#CCCCCC',
        registerPageButtonGrey: '#999999',
      }),
    },
  },
};
