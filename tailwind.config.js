/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1E3A8A', // dark
				secondary: '#F59E0B', // amber
				accent: '#10B981', // green
				light: '#F3F4F6', // light gray
				dark: '#111827',
				border: '#DBDBDB',
			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			backgroundImage: {
				'gradient-light': 'linear-gradient(135deg, #F2FBFF 0%, #FFFFFF 100%)',
			},
		},
	},
	plugins: [],
}
