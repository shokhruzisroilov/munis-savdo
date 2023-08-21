/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5F4DEE',
				primaryBlue: '#4338CA'
			},
			fontFamily: {},
			boxShadow: {
				headerShadow:
					'0px 4px 25px 0px rgba(0, 0, 0, 0.05), 0px 2px 3px 0px rgba(0, 0, 0, 0.05)',
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
}
