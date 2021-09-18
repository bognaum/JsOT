(async function () {
	const jsot = (await import("./../../dist/main.js")).default;

	// console.log(`jsot`, jsot);
	
	new jsot.NodeJsServerAgent({
		name:     "Math",
		ob:       Math,
		ports: "3333",
	});

	new jsot.NodeJsServerAgent({
		name:     "global",
		ob:       global,
	});

	new jsot.NodeJsServerAgent({
		name:     "global",
		ob:       global,
	});

	new jsot.NodeJsServerAgent({
		name:     "JSON",
		ob:       JSON,
	});

	new jsot.NodeJsServerAgent({
		name:     "console",
		ob:       console,
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

	for (let i = 0; i < 10; i ++) {
		const nsa = await new jsot.NodeJsServerAgent({
			name:     "Math",
			ob:       Math,
			ports: "4000-6000",
		});
		console.log(`nsa >>`, nsa);
	}

	for (let i = 0; i < 5; i ++) {
		const nsa = await new jsot.NodeJsServerAgent({
			name:     "Math",
			ob:       Math,
			ports: "7000-6000",
		});
		// console.log(`nsa >>`, nsa);
	}
	// setInterval(() => {}, 1000 * 60);
})()