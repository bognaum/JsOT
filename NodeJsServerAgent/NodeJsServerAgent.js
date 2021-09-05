import util from "./../util.js";
import parseTree from "./../parse-tree.js";

export default class ServerAgent {
	constructor(options = {}) {
		const o = Object.assign(
			{
				name: "rootNode",
				ob  : global,
				t   : {},
			},
			options,
		);
		o.portHost = Object.assign(
			[3333, "127.0.0.1"],
			o.portHost,
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

	const __filename = url$.fileURLToPath(import.meta.url), // 'import.meta.url' is precompiled with WebPack
		__dirname = path$.dirname(__filename),
		serverRoot = path$.resolve(__dirname, "../");

	var server = new http$.Server(function (req, res) {
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
			var theUrl = `http://${o.portHost[1]}:${o.portHost[0]}`;
			console.log(`__dirname >>`, __dirname);
			console.log(`path$.resolve(__dirname, "./agent-page.html") >>`, path$.resolve(__dirname, "./agent-page.html"));
			res.end(
				getTemplateFile(
					path$.resolve(__dirname, "./agent-page.html"),
					{
						name: o.name,
						theUrl,
					},
					fs$
				)
			);

			// console.log("↓ OK\n\n");
		} else {
			const filePN = serverRoot + req.url;;
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
	server.listen(...o.portHost);
	// server.listen(3000, "127.0.0.1");
	console.log(
		"JsOT",
		o.name,
		":",
		"http://" + o.portHost[1] + ":" + o.portHost[0],
		"\n",
		o.ob
	);

	// setInterval(() => {}, 60000);
}


function getTemplateFile(pathname, substituts, fs$) {
	let text = fs$.readFileSync(pathname).toString();
	return text.replace(/{{\s*([\w\d]+)\s*}}/g, (m, name) => substituts[name]);
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
