import "./CSS/watch.js";

export default {
	// entry: "./JsOT.js",
	entry: "./wp-entert-point.js",
	output: {
		library: "JsOT",
		// library: "jsot",
		clean: true,
	},
	mode: 'none', 
	devtool: "source-map",
	target: "node",
	watch: true,
};