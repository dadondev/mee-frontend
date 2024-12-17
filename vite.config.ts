/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import MillionLint from "@million/lint";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [MillionLint.vite(), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
