import JsOT from "../../JsOT.js";

const attempts = [];

try {
	window.jsot = JsOT;
	attempts.push(false);
} catch(err) {
	attempts.push(err);
} 

try {
	module.exports = JsOT;
	attempts.push(false);
} catch(err) {
	attempts.push(err);
} 

if (attempts.every((v) => !! v)) {
	console.error(`(!) - JsOT.`, `Can't connect distributive. All ways of connection were unsuccessful and resulted in the following errors:`);
	attempts.forEach((v) => console.error(v));
}