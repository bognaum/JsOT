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
			// console.log("port-test");
			res.end("ok");
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
						theUrl: o.addresData?.host,
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
	// server.listen(...o.portHost);
	const addresData = await takeEmptyPort(server, o.hostname, o.ports);
	if (addresData) {
		o.addresData = addresData;
		console.log("Connection with", `'${o.name}'`, ":", `http://${addresData.host}`);
	} else {
		console.log(
			"Can't use an address from range:", 
			"\n hostname:", o.hostname, 
			"\n ports   :", o.ports,
			"\n to input:", `'${o.name}'`
		);
	}

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


async function takeEmptyPort(server, hostname, portRanges) {
	const rangedArr = portRanges.split(",");
	for (let range of rangedArr) {
		const res = await takeEmptyPortFromRange(server, hostname, range);
		if (res) 
			return res;
	}
}

async function takeEmptyPortFromRange(server, hostname, portRange) {
	const [firstPort, lastPort] = portRange.split("-").map((v) => parseInt(v));
	for (let p = firstPort; p < lastPort; p ++) 
		try {
			await testingAPort(server, hostname, p);
			return {
				host: `${hostname}:${p}`, 
				hostname,
				port: p
			};
		} catch (err) {}
		// } catch (err) {console.log(`err >>`, err);}
	return false;
}

async function testingAPort(server, hostname, port) {
	const http$ = await import("http");
	const opts = {
		port, 
		host: hostname,
		path: "/port-test",
	};
	await new Promise((rsl, rj) => {
		server.once("error", rj);
		server.once("request", rsl);
		server.listen(opts, () => {});
		http$.get(opts, () => {})
		// server.listen(opts, (... args) => {console.log(`server.listen args >>`, args);});
		// http$.get(opts, (... args) => {console.log(`http$.get args >>`, args);})
	});
}