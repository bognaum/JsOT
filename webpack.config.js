import "./esm-src/CSS/watch.js";
import "./esm-src/NodeJsServerAgent/watch.js";

export default {
	// entry: "./src/JsOT.js",
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /package\.json$/,
				type: "asset/resource",
				generator: {
					filename: '[name][ext]',
				}
			},
		],
	},
	mode: 'development', 
	// devtool: "eval",
	devtool: "eval-source-map",
	// devtool: "inline-source-map",
	// devtool: "source-map",
	target: "node", // To don't compile a native node modules.
	watch: true,
};