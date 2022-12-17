// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "dojo",
			meta: [{ name: "description", content: "testttt Nuxt 3" }],
		},
	},
	// vuetify
	css: [
		"vuetify/lib/styles/main.sass",
		"@mdi/font/css/materialdesignicons.min.css",
	],
	build: {
		transpile: ["vuetify"],
	},
	// pinia
	modules: ["@pinia/nuxt"],
});
