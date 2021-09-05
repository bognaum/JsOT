import fs$   from "fs";
import path$ from "path";

import {fileURLToPath}  from "url";
const 
	__filename = fileURLToPath(import.meta.url),
	__dirname  = path$.dirname(__filename);

const 
	htmlPathName   = path$.resolve(__dirname, "agent-page.html"),
	outputPathName = htmlPathName + ".js";

const 
	html = fs$.readFileSync(htmlPathName).toString(),
	escaped = html.replaceAll("\\", "\\\\").replaceAll("`", "\`"),
	result = "export default `" + escaped + "`;";

fs$.writeFileSync(outputPathName, result);
console.log("OK");

// setInterval(() => {},1000);