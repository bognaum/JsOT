(async function () {
	const jsot = (await import("./../../dist/main.js")).default;
	// const jsot = (await import("./../../JsOT.js")).default;

	console.log(`jsot`, jsot);

	new jsot.NodeJsServerAgent({
		name:     "global",
		ob:       global,
		portHost: [3335],
	});
	setInterval(() => {}, 1000 * 60);
})()