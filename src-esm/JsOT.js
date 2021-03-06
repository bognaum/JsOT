/*
*
* 
* nip     - name in parent
* sym_nip - symbol name in parent
*
* v       - value
* sym_v   - symbol value
* sp_v    - special value
*
* iter    - number of iteration
* sign    - 
* 
* 
 */

import util              from "./util.js";
import parseTree         from "./parse-tree.js";
import renderTree        from "./render-tree.js";
import Explorer          from "./Explorer.js";
import NodeJsServerAgent from "./NodeJsServerAgent/NodeJsServerAgent.js";
import JsonErrHter       from "./json-err-hl/json-err-hl.js";
import JsHter            from "./js-hl/js-hl.js";

const version = "3.0.0-alpha";

export default {
	version,
	Explorer,                       // (inputEl, options)
	NodeJsServerAgent,              // (options)
	renderTextContent,              // (inputEl)
	renderJSON,                     // (inputEl, json)
	renderObject,                   // (inputEl, templ)
	special: {
		util,
		parseTree,                  // (ob, name, oT={}, deep=0)
		renderTree,                 // (inputEl, templ, cBar=null)
		// JsHl,                       // (contentEl, value)
		// JsonHl,                     // (contentEl, value)
		"@@"             : util["@@"],
		"symbolStatProps": util["symbolStatProps"],
	}
};

function renderTextContent(inputEl) {
	const json = inputEl.textContent;
	return renderJSON(inputEl, json)
}

function renderJSON(inputEl, json) {
	const {templ, jsonError, codeField, hter} = _evalJson(json);
	if (templ)
		return renderTree(inputEl, templ);
	else {
		inputEl.innerHTML = "";
		inputEl.prepend(codeField);
		hter.scrollToFirstError(codeField)
		console.error(`(!) `, jsonError);
	}
}

function renderObject(inputEl, templ) {
	return renderTree(inputEl, templ);
}

function _evalJson(json) {
	try {
		return {templ: JSON.parse(json)};
	} catch (jsonError) {
		const jsonHter = new JsonErrHter();
		return {
			jsonError,
			codeField: jsonHter.getHighlighted(json),
			hter: jsonHter,
		};
	}
}