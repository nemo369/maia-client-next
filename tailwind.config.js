module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js',
	],
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer')
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],

	theme: {
		extend: {
			spacing: {
				bbc: '1920px',
				nav_height: '124px',
				section2_body_width: '1128px',
				section6_height: '567px',
				sec3_rightwidth: '740px',
				md: '16px',
				lg: '24px',
				xl: '48px'
			},
			textColor: theme => theme('colors'),
			textColor: {
				'primary': '#3490dc',
				'secondary': '#ffed4a',
				'danger': '#e3342f',
				'mainTurquoise': '#3C91A0',
				'mainOrange': '#FB9773',
				'mainWhite': '#FFFFFF',
				'topBarGrey': '#999999',
				'landingpage_section3darkgrey': '#343434',
				'lp_sec4_left_darkgrey': '#6C6C6C'

			},

			backgroundColor: theme => ({
				...theme('colors'),
				'mainOrange': '#FB9773',
				'topBarColor': '#FFFFFF',
				'lp_section4': '#FAFAFA'

			}),

			fontSize: {
				'topBarFontSize': '25px',
				'landingPageTitle': '72px',
				'landingpage_section3sm_text': '32px'

			}






			//  height: {
			//   sm: '8px',
			//   md: '16px',
			//   lg: '24px',
			//   xl: '100px',
			//  }
		}
	}
};
