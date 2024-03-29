import util from "./../util.js";
import parseTree from "./../parse-tree.js";
import agentPage from "./agent-page.html.js";

export default class ServerAgent {
	constructor(options = {}) {
		const o = {
			name: "rootNode",
			ob  : global,
			t   : {},
			hostname: "localhost",
			ports   : "3000-6000",

			... options,
		}
		
		return startServer(o);
	}

}

async function startServer (o) {
	const 
		http$ = await import("http"),
		fs$   = await import("fs"),
		path$ = await import("path"),
		url$  = await import("url");

	const server = new http$.Server(function (req, res) {
		// console.log("\n↑ GO");

		req.on("error", (err) => console.error(err));
		res.on("error", (err) => console.error(err));

		const [reqPath, reqQuery] = req.url.split("?"),
			mimeType = getMIME(reqPath);

		res.setHeader("Access-Control-Allow-Origin", "*");

		if (req.url == "/parse") {
			res.setHeader("Content-Type", 'text/plain; Charset="UTF-8"');
			res.setHeader("Cash-Control", "no-store");

			var reqBody = "";
			req.on("data", (dataBuf) => (reqBody += dataBuf.toString()));

			req.on("end", (e) => {
				var dataArr = reqBody.split("&");
				var dataDict = dataArr.reduce((acc, v) => {
					if (!v) return acc;

					var k_v = v.split("=");
					acc[k_v[0]] = decodeURIComponent(k_v[1]);

					return acc;
				}, {});
				var inJson = dataDict.template;
				var t = inJson ? util.getFromJson(inJson) : {};
				var getted = parseTree(o.ob, o.name, t);
				res.end(util.getJson(getted));

				// console.log("↓ OK\n\n");
			});
		} else if (req.url == "/") {
			res.setHeader("Content-Type", "text/html; Charset=UTF-8");
			res.setHeader("Cash-Control", "no-store");
			res.end(
				substitute(
					agentPage,
					{
						name: o.name,
						theUrl,
						__basename: path$.basename(__filename),
					}
				)
			);

			// console.log("↓ OK\n\n");
		} else {
			const filePN = __dirname + req.url;
			// const filePN = serverRoot + req.url;
			// console.log(`filePN >>`, filePN);
			if (fs$.existsSync(filePN)) {
				res.setHeader("Content-Type", `${mimeType}; Charset="UTF-8"`);
				res.setHeader("Cash-Control", "no-store");
				res.end(fs$.readFileSync(filePN));
				// console.log("↓ OK\n\n");
			} else {
				res.end("JsOT - 404.");

				// console.log("↓ OK\n\n");
			}
		}
	});

	const 
		portGenerator = getPortGen(o.ports),
		{theUrl, thePort} = await takeFreePort(server, o.hostname, portGenerator, o.name, o.ports);

	// setInterval(() => {}, 60000);
	return {
		options: o,
		url: theUrl,
		port: thePort,
	};
}


function substitute(htmlTemplate, substituts) {
	return htmlTemplate.replace(/{{\s*([\w\d]+)\s*}}/g, (m, name) => substituts[name]);
}

const MIME = {
	"text/html": ["html"],
	"text/css": ["css", "scss", "css.map"],
	"application/javascript": ["js", "ejs", "cjs"],
};

function getMIME(fileName) {
	const parts = fileName.split(".");
	let ext = parts.pop();
	if (ext == "map") ext = parts.pop() + "." + ext;
	for (let i in MIME) if (MIME[i].includes(ext)) return i;
	return "text/plain";
}

async function takeFreePort(server, hostname, portGenerator, obName, ports) {
	const 
		thePort = await recur(server, hostname, portGenerator),
		theUrl = `http://${hostname}:${thePort}`;

	if (thePort) {
		console.log("Connection with", `'${obName}'`, ":", theUrl);
	} else {
		console.log("Can't find a free port of", hostname, "with options", ports);
	}

	return {theUrl, thePort};

	async function recur(server, hostname, portGenerator) {
		const port = portGenerator.next().value;

		if (port) {
			const testResult = await Promise.race([
				new Promise((rsl, rj) => {
					server.once("error", (err) => {
						if (err.code === "EADDRINUSE") {
							rsl(false);
						} else {
							rj(err);
						}
					})
				}),
				new Promise((rsl) => {
					server.listen(port, () => {
						rsl(true);
					});
				})
			]);

			if (testResult) {
				return port;
			} else {
				return await recur(server, hostname, portGenerator);
			}
		} else {
			return false;
		}
	}
}

function * getPortGen(portRanges) {
	if (typeof portRanges == "number") {
		const port = portRanges;
		yield (port);
	} else if (typeof portRanges == "string") {
		const portRangesList = portRanges.split(",");
		for (const portRange of portRangesList) {
			const [firstPort, lastPort] = portRange.split("-").map((v) => parseInt(v));

			if (! lastPort) {
				yield parseInt(firstPort);
			} else {
				const increment = Math.sign(lastPort - firstPort);
				for (let port = firstPort; port != lastPort; port += increment) {
					yield port;
				}
			}
		}
	} else {
		throw new Error("(!) invalid 'portRanges'. 'portRanges' =", portRanges);
	}
}