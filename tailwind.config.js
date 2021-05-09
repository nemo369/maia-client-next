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
			},
			
			textColor: theme => theme('colors'),
			textColor: {
				

			},

			backgroundColor: theme => ({
				...theme('colors'),
				'mainOrange': '#FB9773',
				
			}),

			fontSize: {
				'topBarFontSize': '25px',
				

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
