import util       from "./util.js";
import parseTree  from "./parse-tree.js";

export default class ServerAgent {
	constructor (_={}) {
		_.name = _.name || "rootNode";
		_.ob = _.ob || global;
		_.t = _.t || {};
		_.portHost = _.portHost || [];
		_.portHost[0] = _.portHost[0] || 3333;
		// _.portHost[1] = _.portHost[1] || "127.0.0.1";
		_.portHost[1] = _.portHost[1] || "localhost";

		Promise.all([
			import("http"),
			import("fs"),
			import("path"),
		])
		.then(([http, fs, path]) => {
			const 
				__urlOb    = new URL(import.meta.url),
				__pathname = process.platform.match(/^win/) ? __urlOb.pathname.slice(1)
					: __urlOb.pathname,
				__dirname  = path.dirname(__pathname);
			console.log(`__dirname`, __dirname);
			var server = new http.Server(function (req, res) {
				// console.log("\n↑ GO");

				req.on("error", (err) => console.error(err));
				res.on("error", (err) => console.error(err));

				console.log(`req.url`, req.url);

				
				res.setHeader('Access-Control-Allow-Origin', '*');

				var gFUrl;

				if (req.url == "/") {
					res.setHeader('Content-Type', 'text/html; Charset=UTF-8');
					res.setHeader('Cash-Control', 'no-store');
					var theUrl = `http://${_.portHost[1]}:${_.portHost[0]}`;
					res.end(`
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<link rel="stylesheet" type="text/css"       href="/JsOT.css">
							<!-- <script                type="text/javascript" src="/JsOT.js" ></script> -->
							<title>${_.name} - JsOT</title>
							<style>
								body {
									margin: 0;
								}
								body>a:nth-child(1) {
									text-align: center;
									display: block;
									font-style: italic;
									font-weight: bold;
									background-color: #333;
									color: #eee;
									padding: 10px;
								}
								h1 {
									text-align: center;
								}
								.pre-wr {
									text-align: center;
								}
								pre {
									margin: 20px;
									display: inline-block;
									margin-bottom: 200px;
									text-align: left;
								}
							</style>
						</head>
						<body>
							<a target="_blank" href="${theUrl}">${theUrl}</a>
							<h1>${_.name}</h1>
							<div class="pre-wr">
								<pre id="explorer" class="jsot"></pre>
								<!-- <br><br><br><br><br><br><br><br><br><br> -->
							</div>
							<script type="module">
								import jsot from "/JsOT.js";
								new jsot.Explorer(explorer, {ajaxReqUrl : "/parse"});
							</script>
						</body>
						</html>
					`);

					// console.log("↓ OK\n\n");
				} else if (["/jsot.js"].includes(req.url.toLowerCase())) {
					res.setHeader('Content-Type', 'application/javascript; Charset="UTF-8"');
					res.setHeader('Cash-Control', 'no-store');
					res.end(fs.readFileSync(__dirname+req.url));

					// console.log("Download", req.url);
					// console.log("↓ OK\n\n");
				} else if ([
					"/jsot.css",
					"/jsot.css.map",
					"/jsot.scss",
				].includes(req.url.toLowerCase())) {
					res.setHeader('Content-Type', 'text/css; Charset="UTF-8"');
					res.setHeader('Cash-Control', 'no-store');
					res.end(fs.readFileSync(__dirname+req.url));
					// console.log("Download", req.url);
					// console.log("↓ OK\n\n");
				} else if ([
					"/util.js",
					"/parse-tree.js",
					"/render-tree.js",
					"/Explorer.js",
					"/NodeJsServerAgent.js",
					"/HeaderCode.js",
				].includes(req.url/*.toLowerCase()*/)) {
					res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
					res.setHeader('Cash-Control', 'no-store');
					res.end(fs.readFileSync(__dirname+req.url));
					// console.log("Download", req.url);
					// console.log("↓ OK\n\n");
				} else if (req.url == "/parse") {
					res.setHeader('Content-Type', 'text/plain; Charset="UTF-8"');
					res.setHeader('Cash-Control', 'no-store');

					var reqBody = ""
					req.on("data", (dataBuf) => reqBody += dataBuf.toString());

					req.on("end", (e) => {
						// console.log(`reqBody.length`, reqBody.length);
						var dataArr = reqBody.split("&");
						var dataDict = dataArr.reduce((acc,v) => {
								if (!v)
									return acc;

								var k_v = v.split("=");
								acc[k_v[0]] = decodeURIComponent(k_v[1]);

								return acc;
							}, {});
						var inJson = dataDict.template;
						// console.log(`inJson.length`, inJson.length);
						var t = inJson ? util.getFromJson(inJson) : {};
						var getted = parseTree(_.ob, _.name, t);
						res.end(util.getJson(getted));

						// console.log("↓ OK\n\n");
					});
				} else {
					res.end("JsOT - 404.");

					// console.log("↓ OK\n\n");
				}
			});
			server.listen(..._.portHost);
			// server.listen(3000, "127.0.0.1");
			console.log("JsOT",_.name, ":", "http://"+_.portHost[1]+":"+_.portHost[0], "\n", _.ob);
		});

		// setInterval(() => {}, 60000);

		
	}
	
}
