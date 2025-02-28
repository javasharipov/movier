import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		// VitePWA({
		// 	registerType: 'autoUpdate',
		// 	devOptions: {
		// 		enabled: false,
		// 	},
		// 	manifest: {
		// 		name: 'BeloTick',
		// 		short_name: 'BeloTick',
		// 		description: 'BeloTick',
		// 		// display: "fullscreen"
		// 		theme_color: '#0001',
		// 		icons: [
		// 			{
		// 				src: '/moviez_192x192.png',
		// 				sizes: '192x192',
		// 				type: 'image/png',
		// 			},
		// 			{
		// 				src: '/moviez.png',
		// 				sizes: '512x512',
		// 				type: 'image/png',
		// 			},
		// 		],
		// 	},
		// }),
	],
})
