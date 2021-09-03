import "./CSS/watch.js";

export default {
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
	devtool: "source-map",
	target: "node",
	watch: true,
};