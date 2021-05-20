module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      spacing: {
        bbc: '1920px',
        fifteen: '15px',
        registercontainer_Width: '1061px',
        registercontainer_Heigth: '577px',
      },

      padding: {
        fifty: '50px',
        ten: '10px',
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
        lightgreybackground: '#F5F5F5',
        registercontainer_white: '#FFFFFF',
        registercontainer_Input_grey: '#FFFFFF',
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
