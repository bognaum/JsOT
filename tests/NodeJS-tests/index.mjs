import jsot from "./../../JsOT.js";

new jsot.NodeJsServerAgent({
	name:     "global",
	ob:       global,
	portHost: [3335],
});