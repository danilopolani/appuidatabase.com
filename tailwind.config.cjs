/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'pastel-green': 'rgb(183, 212, 218)',
				'pastel-yellow': 'rgb(254, 227, 198)',
				'pastel-red': 'rgb(243, 196, 205)',
				'pastel-purple': 'rgb(200, 190, 253)',
				'pastel-black': 'rgb(20, 21, 32)',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
