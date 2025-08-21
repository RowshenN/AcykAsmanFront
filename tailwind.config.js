/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fill-250': 'repeat(auto-fill,minmax(250px,1fr))',
				'news-cards': 'repeat(auto-fit,minmax(375px,1fr))',
				'taslama-cards': 'repeat(auto-fit,minmax(350px,1fr))',
			},
			colors: {
				primary: '#1E3A8A', // dark
				secondary: '#F59E0B', // amber
				accent: '#10B981', // green
				light: '#F3F4F6', // light gray
				dark: '#111827',
				border: '#DBDBDB',
				borderDark: '#797979',
				blue: '#008DD2',
				dark: '#161618',
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
				'gradient-light': 'linear-gradient(110deg, #F2FBFF 0%, #FFFFFF 100%)',
				'gradient-dark': 'linear-gradient(110deg, #161618 0%, #161618 100%)',
			},
			spacing: {
				84: '84px',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				marquee: 'marquee 15s linear infinite',
			},
		},
	},
	plugins: [],
}
