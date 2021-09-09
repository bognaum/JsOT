import util from "./../util.js";
import parseTree from "./../parse-tree.js";
import agentPage from "./agent-page.html.js";

export default class ServerAgent {
	constructor(options = {}) {
		const o = Object.assign(
			{
				name: "rootNode",
				ob  : global,
				t   : {},
				hostname: "localhost",
				ports   : "3000-6000",
			},
			options,
		);
		
		startServer(o);
	}

}

const servers = [];
servers.log = function(theServer) {
	// console.log("servers length:", this.length);
	for (const [i, serv] of this.entries()) 
		console.log(i, serv, serv.address()?.port, theServer === serv? "<": "");
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

		if (req.url == "/port-test") {
			res.end("Port test is OK.");
		} else if (req.url == "/parse") {
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
						theUrl: o.netOpts?.host,
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

	servers.push(server);

	server.on("error", function(err) {
		// console.log(`server.on error - err >>`, err);
		// servers.log(server);
		if (err.code === "EADDRINUSE") {
			// console.log(`err.name === "EADDRINUSE"`);
			listenPort(server, o.hostname, portGenerator, o);
		}
	});
	// server.listen(...o.portHost);
	const portGenerator = getPortGen(o.ports);
	listenPort(server, o.hostname, portGenerator, o);

	// setInterval(() => {}, 60000);
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

function listenPort(server, hostame, portGenerator, o) {
	const port = portGenerator.next().value;
	if (port)
		server.listen(port, hostame, () => {
			console.log("Connection with", `'${o.name}'`, ":", `http://${hostame}:${port}`);
		});
}

function * getPortGen(portRanges) {
	const portRangesList = portRanges.split(",");
	for (const portRange of portRangesList) {
		const [firstPort, lastPort] = portRange.split("-").map((v) => parseInt(v));
		for (let port = firstPort; port < lastPort; port ++) {
			yield port;
		}
	}
}