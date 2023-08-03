/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'pastel-green': '#bafda2',
				'pastel-yellow': '#fcfd96',
				'pastel-red': '#ff7a5c',
				'pastel-purple': '#c5a1ff',
				'pastel-blue': '#436FD6',
				'pastel-gray': '#646E68',
				'pastel-black': 'rgb(20, 21, 32)',
			},
			fontFamily: {
				heading: 'Lexend Mega, sans-serif',
				body: 'Public Sans, sans-serif',
			}
		},
	},
	plugins: [],
}
