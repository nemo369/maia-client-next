module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./wp-content/themes/canaan/**/*.{vue,js,ts,jsx,tsx,php,svg}'],
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        orange: '#FF916A',
        white: '#FFFFFF',
        red: '#F97168',
        green: {
          DEFAULT: '#008B92',
          light: '#B3DDCF',
          dark: '#317885',
          lighter: '#A8DFCE',
          500: '#41C2C4',
        },
        blue: {
          DEFAULT: '#4EA8B5',
          light: '#45A4C7',
          dark: '#252464',
        },
        grey: {
          DEFAULT: '#999999',
          light: '#CCCCCC',
          dark: '#6C6C6C',
        },
        black: '#333333',
        yellow: '#FFC960',
      },
      spacing: {
        bbc: '1920px',
        fifteen: '15px',
        fifty: '50px',
        sixty: '60px',
        ten: '10px',
        hundred: '100px',
        twrnety: '20px',
        thirty: '30px',
        twentyFive: '25px',
        twohundred: '200px',
        onehundredandtenP: '110%',
        onehundredandtwentyFifeP: '125%',
        registercontainer_Width: '1061px',
        registercontainer_Heigth: '577px',
        registerPageInputWidth: '364px',
        registerPageInputHeight: '50px',
        ninetyPercent: '90%',
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
        registerPageSubtitle: '#333333',
        regiterPageDarkBottomTextcolor: '#434343',
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

      fontSize: {
        topBarFontSize: '25px',
        registerPageTitle: '45px',
        registerPageSubTitle_fontsize: '30px',
        registerPageSubSubTitle_fontsize: '21px',
        regiterPageSmallGreyText: '17px',
        regiterPageDarkBottomText: '18px',
      },
      lineHeight: {
        regiterPageTitle: '48px',
        regiterPageSubTitle: '30px',
        regiterPageSubSubTitle: '21px',
        regiterPageSmallGreyText: '17px',
        regiterPageDarkBottomText: '18px',
      },
      opacity: {
        7: '0.7',
        3: '0.3',
        1: '0.1',
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
