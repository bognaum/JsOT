import JsOT from "../../src-esm/JsOT.js";

const API = JsOT;

const 
	attempts = [
		"window.jsot = API;",
		"module.exports = API;",
	],
	errors = [];

for (let att of attempts) {
	try {
		eval(att);
		break;
	} catch (err) {
		errors.push(err);
	}
}

if (errors.length == attempts.length) {
	console.error(`(!) - JsOT.`, `Can't connect distributive. All ways of connection were unsuccessful and resulted in the following errors:`);
	attempts.forEach((v, i) => {
		console.error(i + 1, attempts[i], errors[i]);
	});
}


/* 

// fallback in a case of incorrect minification

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
 */
