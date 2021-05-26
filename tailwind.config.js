module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./wp-content/themes/canaan/**/*.{vue,js,ts,jsx,tsx,php,svg}'],
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F19672',
          active: '#D0886D',
        },
        white: {
          DEFAULT: '#FFFFFF',
          active: ' #F3F3F3',
        },
        black: '#000000',
        red: '#F97168',
        green: {
          DEFAULT: '#FF3344',
          light: '#B3DDCF',
          dark: '#317885',
          lighter: '#A8DFCE',
        },
        blue: {
          DEFAULT: '#3C91A0',
          light: '#45A4C7',
          dark: '#252464',
        },
        grey: {
          DEFAULT: '#6C6C6C',
          light: '#CCCCCC',
          dark: '#4C4C4C',
          lighter: '#EEEEEE',
          disabled: '#E7E7E7',
          text: '#B7B7B7',
          active: '#999999',
        },
        yellow: '#FFC960',
        gradient: {
          1: '#40C2C4',
          2: '#3C91A0',
        },
      },
      spacing: {
        bbc: '1920px',
        fifteen: '15px',
        fifty: '50px',
        twentyFive: '25px',
        sixty: '60px',
        262: '262px',
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
      }),

      fontSize: {
        22: '22px',
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
        23: '23px',
      },
      opacity: {
        7: '.7',
      },
      height: {
        50: '50px',
      },
      width: {
        250: '250px',
        610: '610px',
      },
    },
  },
};
