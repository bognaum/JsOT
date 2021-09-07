(async function () {
	const jsot = (await import("./../../dist/main.js")).default;

	// console.log(`jsot`, jsot);

	new jsot.NodeJsServerAgent({
		name:     "global",
		ob:       global,
	});

	new jsot.NodeJsServerAgent({
		name:     "global",
		ob:       global,
	});

	new jsot.NodeJsServerAgent({
		name:     "Math",
		ob:       Math,
		ports: "3333-4000",
	});

	new jsot.NodeJsServerAgent({
		name:     "Math",
		ob:       Math,
		ports: "3333",
	});
	// setInterval(() => {}, 1000 * 60);
})()