/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/package.json":
/*!**************************!*\
  !*** ./src/package.json ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "package.json";

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "./CSS/JsOT.scss.js":
/*!**************************!*\
  !*** ./CSS/JsOT.scss.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStyle)
/* harmony export */ });
function setStyle(clPref="jsot") {

	const cssCode = `@charset "UTF-8";
.jsot .row .header[data-highlighted=true] .name {
  color: #333;
  text-shadow: 0 0 1px #333;
  font-weight: bold;
}
.jsot .row .header .fold-sign[data-fold-state=unfolded]:before {
  content: "";
}
.jsot .row .header .fold-sign[data-fold-state=folded]:before {
  content: " + ";
  border: 1px solid #999;
  margin: -1px;
  margin-right: 5px;
}
.jsot .row .header .fold-sign[data-fold-state=not-folded]:before {
  content: "";
}
.jsot .row .header .sign {
  user-select: none;
  cursor: default;
  text-shadow: 0 0 1px #999;
}
.jsot .row .header .sign b {
  text-shadow: none;
}
.jsot .row .header .name-wr {
  display: inline-block;
  font-style: italic;
}
.jsot .row .header .name-wr .get-set {
  font-style: italic;
  user-select: none;
}
.jsot .row .header .name-wr .get-set:before {
  content: "(";
}
.jsot .row .header .name-wr .get-set:after {
  content: ")";
}
.jsot .row .header .name-wr .get-set .get,
.jsot .row .header .name-wr .get-set .set {
  cursor: default;
}
.jsot .row .header .name-wr .name {
  font-weight: bold;
  font-style: italic;
  color: #789;
}
.jsot .row .header .name-wr .name.iter-name {
  font-style: normal;
  /* &:before {
  	content: "i";
  	color: $bright_color;
  } */
}
.jsot .row .header .name-wr .name.iter-name:before {
  content: "[";
}
.jsot .row .header .name-wr .name.iter-name:after {
  content: "]";
}
.jsot .row .header .name-wr .name.iter-name:before, .jsot .row .header .name-wr .name.iter-name:after {
  font-style: normal;
  color: #333;
}
.jsot .row .header .name-wr .name.nip-name:before, .jsot .row .header .name-wr .name.nip-name:after {
  content: "'";
  color: transparent;
}
.jsot .row .header .name-wr .name.symbol-name:before, .jsot .row .header .name-wr .name.symbol-name:after {
  font-style: normal;
  color: #333;
}
.jsot .row .header .name-wr[data-g-s-call=true]:before {
  content: "(";
}
.jsot .row .header .name-wr[data-g-s-call=true]:after {
  content: ")";
}
.jsot .row .header .name-wr[data-g-s-call=true]:before, .jsot .row .header .name-wr[data-g-s-call=true]:after {
  color: #333;
  font-weight: bold;
}
.jsot .row .header .name-wr[data-g-s-call=true] .get-set {
  font-weight: bold;
  color: #333;
  user-select: none;
}
.jsot .row .header .name-wr[data-g-s-call=true] .get-set:before {
  content: "";
}
.jsot .row .header .name-wr[data-g-s-call=true] .get-set:after {
  content: "";
}
.jsot .row .header .c-bar {
  color: #333;
  white-space: normal;
  margin-top: 19px;
  margin-top: 1.2em;
  position: absolute;
  border: 1px solid #777;
  box-shadow: 0 5px 10px #333;
  padding: 2px 5px;
  background-color: #eee;
  vertical-align: bottom;
  display: inline-block;
  cursor: default;
}
.jsot .row .header .c-bar button {
  cursor: pointer;
  height: 25px;
}
.jsot .row .header .c-bar .loadbar-wrapper {
  display: inline-block;
  text-align: center;
  min-width: 2em;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar {
  display: none;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=loading], .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-l], .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-loading] {
  border: 2px solid #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50px;
  position: relative;
  bottom: -3px;
  margin: -3px 0;
  background-color: #ccc;
  box-shadow: inset 0 0 5px #fff, 0 0 5px #333;
  display: inline-block;
  animation: rotate-loadbar 1s infinite linear;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=loading] .inner, .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-l] .inner, .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-loading] .inner {
  border: 6px solid #333;
  margin: 2px;
  border-right-color: transparent;
  border-left-color: transparent;
  border-radius: 50px;
  animation: rotate-loadbar reverse 0.5s infinite linear;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=ok], .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-ok] {
  display: inline-block;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=ok]:before, .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-ok]:before {
  content: "OK";
  font-weight: bold;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=err], .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-err] {
  display: inline-block;
}
.jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=err]:before, .jsot .row .header .c-bar .loadbar-wrapper .loadbar[data-status=test-err]:before {
  content: "ERR";
  color: #f00;
  font-weight: bold;
}
.jsot .row .header .c-bar .sort-by {
  margin: 3px 0;
}
.jsot .row .header .c-bar .sort-by > .setting-switcher {
  display: inline-block;
  min-width: 100px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0 5px;
  font-size: 0.9em;
  font-family: arial;
  cursor: pointer;
  user-select: none;
  text-align: center;
}
.jsot .row .header .c-bar .sort-by > .setting-switcher[data-setting-name=by_name][data-state="-1"]:after {
  content: "Inherit";
}
.jsot .row .header .c-bar .sort-by > .setting-switcher[data-setting-name=by_name][data-state="0"]:after {
  content: "No";
}
.jsot .row .header .c-bar .sort-by > .setting-switcher[data-setting-name=by_name][data-state="1"]:after {
  content: "Yes";
}
.jsot .row .header .c-bar .sort-by > .setting-switcher[data-setting-name=by_type][data-state="-1"]:after {
  content: "Inherit";
}
.jsot .row .header .c-bar .sort-by > .setting-switcher[data-setting-name=by_type][data-state="0"]:after {
  content: "No";
}
.jsot .row .header .c-bar .sort-by > .setting-switcher[data-setting-name=by_type][data-state="1"]:after {
  content: "Yes";
}
.jsot .row .header .n-v-delim .cevw .descr-property {
  cursor: default;
}
.jsot .row .header .n-v-delim .cevw .descr-property.false {
  font-weight: bold;
}
.jsot .row .header .n-v-delim .cevw .descr-property.false:before {
  content: "̷";
}
.jsot .row .header .n-v-delim .esf {
  cursor: default;
}
.jsot .row .header .n-v-delim .esf .object-option.false:before {
  content: "̸";
}
.jsot .row .header .n-v-delim .esf .object-option.extensible.false, .jsot .row .header .n-v-delim .esf .object-option.frozen.true, .jsot .row .header .n-v-delim .esf .object-option.sealed.true {
  font-weight: bold;
  text-decoration: underline;
}
.jsot .row .header > .value {
  font-style: italic;
}
.jsot .row .header > .value.tof-undefined {
  font-weight: bold;
  font-style: italic;
  color: #777;
}
.jsot .row .header > .value.tof-boolean {
  font-weight: bold;
  color: #449;
}
.jsot .row .header > .value.tof-number {
  font-style: normal;
  color: #963;
}
.jsot .row .header > .value.tof-string {
  font-style: italic;
  color: #3a3;
  white-space: nowrap;
}
.jsot .row .header > .value.tof-string:before, .jsot .row .header > .value.tof-string:after {
  content: '"';
  color: #3a3;
}
.jsot .row .header > .value.tof-object.is-null {
  font-weight: bold;
  color: #777;
}
.jsot .row .header .name .local-reg-num:before,
.jsot .row .header .value .local-reg-num:before {
  content: "-@@-";
}
.jsot .row .header .name .local-reg-num:after,
.jsot .row .header .value .local-reg-num:after {
  content: "-";
}
.jsot .row .header .name .local-reg-num:before, .jsot .row .header .name .local-reg-num:after,
.jsot .row .header .value .local-reg-num:before,
.jsot .row .header .value .local-reg-num:after {
  color: #333;
}
.jsot .row .header .name .symbol-description:before,
.jsot .row .header .value .symbol-description:before {
  content: '"';
}
.jsot .row .header .name .symbol-description:after,
.jsot .row .header .value .symbol-description:after {
  content: '"';
}
.jsot .row .header .name .symbol-description:before, .jsot .row .header .name .symbol-description:after,
.jsot .row .header .value .symbol-description:before,
.jsot .row .header .value .symbol-description:after {
  color: #333;
}
.jsot .row .header .comment {
  font-weight: bold;
  font-style: italic;
  color: #faa;
}
.jsot .row .header .comment:before {
  content: "← ";
  font-style: normal;
}

.jsot {
  font-size: 16px;
  font-family: consolas;
  color: #999;
}
.jsot .row {
  display: block;
  padding-right: 30px;
}
.jsot .row .branch {
  cursor: pointer;
  text-shadow: 0 0 1px #999;
}
.jsot .row .header-ext {
  min-width: 50px;
}
.jsot .row:hover {
  background-color: #eff;
}
.jsot .row:hover .name.nip-name:before, .jsot .row:hover .name.nip-name:after {
  color: #333;
}
.jsot .c-window {
  white-space: normal;
  border: 1px solid #777;
  box-shadow: 0 5px 20px #333;
  margin: 5px;
  padding: 5px;
  background-color: #eee;
}
.jsot .c-window > .c-w-header,
.jsot .c-window > .c-w-footer {
  text-align: right;
}
.jsot .c-window > .c-w-header > .btn-el,
.jsot .c-window > .c-w-footer > .btn-el {
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
}
.jsot .c-window > .c-w-header > .btn-el:hover,
.jsot .c-window > .c-w-footer > .btn-el:hover {
  text-shadow: 0 0 1px #888, 0 0 1px #888, 0 0 1px #888;
}
.jsot .c-window > .c-w-header > .btn-el:active,
.jsot .c-window > .c-w-footer > .btn-el:active {
  text-shadow: 0 0 10px #888, 0 0 10px #888, 0 0 10px #888, 0 0 1px #888, 0 0 1px #888, 0 0 1px #888;
}
.jsot .c-window > .c-w-content-wr {
  margin: 5px 0;
  border: 1px solid #777;
  font-weight: normal;
}
.jsot .c-window > .c-w-content-wr pre.js-hl-c-w-content.jsot-syntax-hl {
  margin: 0;
  display: block;
  padding: 10px 20px;
  max-height: none;
}
.jsot .c-window > .c-w-content-wr pre.js-hl-c-w-content.jsot-syntax-hl[data-max-heigth=true] {
  max-height: 500px;
  overflow-y: scroll;
}
.jsot .c-window .float-cleaner {
  clear: both;
}
.jsot .c-window.dark-skin {
  border: none;
  background-color: #444;
}
.jsot .c-window.dark-skin > .c-w-content-wr {
  border: none;
}

@keyframes rotate-loadbar {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0dpdEh1Yi1teS9Kc09UL0NTUy9faGVhZGVyLnNjc3MiLCJmaWxlOi8vL0Q6L0dpdEh1Yi1teS9Kc09UL0NTUy9Kc09ULnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtJO0VBRUMsT0NOaUI7RURPakI7RUFDQTs7QUFNQTtFQUNDOztBQUlEO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7O0FBSUQ7RUFDQzs7QUFLSDtFQUNDO0VBQ0E7RUFDQTs7QUFDQTtFQUNDOztBQUlGO0VBQ0M7RUFDQTs7QUFDQTtFQUNDO0VBRUE7O0FBRUE7RUFDQzs7QUFFRDtFQUNDOztBQUVEO0FBQUE7RUFFQzs7QUFJRjtFQUNDO0VBQ0E7RUFFQSxPQy9EaUI7O0FEZ0VqQjtFQUNDO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDQzs7QUFFRDtFQUNDOztBQUVEO0VBRUM7RUFDQSxPQ2xGZTs7QUR1RmhCO0VBRUM7RUFDQTs7QUFXRDtFQUVDO0VBQ0EsT0N4R2U7O0FEZ0hsQjtFQUNDOztBQUVEO0VBQ0M7O0FBRUQ7RUFFQyxPQ3hIaUI7RUR5SGpCOztBQUVEO0VBQ0M7RUFDQSxPQzdIaUI7RUQ4SGpCOztBQUNBO0VBQ0M7O0FBRUQ7RUFDQzs7QUFLSDtFQUNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNDO0VBQ0E7O0FBRUQ7RUFDQztFQUNBO0VBQ0E7O0FBRUE7RUFFQzs7QUFFQTtFQUdDO0VBRUE7RUFFQTtFQUdBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQWNBO0VBQ0E7O0FBYkE7RUFDQztFQUNBO0VBR0E7RUFFQTtFQUVBO0VBQ0E7O0FBTUY7RUFFQzs7QUFDQTtFQUNDO0VBQ0E7O0FBSUY7RUFFQzs7QUFDQTtFQUNDO0VBQ0E7RUFDQTs7QUFLSjtFQUNDOztBQUNBO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0M7RUFBMEI7O0FBQzFCO0VBQTBCOztBQUMxQjtFQUEwQjs7QUFHMUI7RUFBMEI7O0FBQzFCO0VBQTBCOztBQUMxQjtFQUEwQjs7QUF3QjVCO0VBQ0M7O0FBQ0E7RUFDQzs7QUFDQTtFQUNDOztBQVFKO0VBQ0M7O0FBSUU7RUFDQzs7QUFNRjtFQUdDO0VBQ0E7O0FBT0o7RUFDQzs7QUFDQTtFQUNDO0VBQ0E7RUFDQSxPQ3ZTaUI7O0FEeVNsQjtFQUNDO0VBQ0EsT0N6U2lCOztBRDJTbEI7RUFFQztFQUNBLE9DalRpQjs7QURtVGxCO0VBQ0M7RUFDQSxPQ3ZUaUI7RUR3VGpCOztBQUNBO0VBRUM7RUFDQSxPQzVUZ0I7O0FEa1VqQjtFQUNDO0VBQ0EsT0NoVWdCOztBRHVVbEI7QUFBQTtFQUNDOztBQUVEO0FBQUE7RUFDQzs7QUFFRDtBQUFBO0FBQUE7RUFFQyxPQzFWaUI7O0FEaVdsQjtBQUFBO0VBQ0M7O0FBRUQ7QUFBQTtFQUNDOztBQUdEO0FBQUE7QUFBQTtFQUVDLE9DMVdpQjs7QUQ4V25CO0VBQ0M7RUFDQTtFQUNBLE9DNVdrQjs7QUQ4V2xCO0VBQ0M7RUFDQTs7O0FDbldMO0VBQ0M7RUFDQTtFQUNBLE9BcEJxQjs7QUFzQnJCO0VBQ0M7RUFDQTs7QUFHQTtFQUVDO0VBQ0E7O0FBRUQ7RUFDQzs7QUFHRjtFQUNDLGtCQXpCb0I7O0FBNEJuQjtFQUVDLE9BM0NrQjs7QUFnRHJCO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0FBQUE7RUFHQzs7QUFDQTtBQUFBO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFDQTtBQUFBO0VBQ0MsYUFDQzs7QUFJRjtBQUFBO0VBQ0MsYUFDQzs7QUFTSjtFQUdDO0VBQ0E7RUFDQTs7QUFHQTtFQUNDO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0M7RUFDQTs7QUFJSDtFQUNDOztBQUlGO0VBQ0M7RUFDQTs7QUFDQTtFQUNDOzs7QUFNSDtFQUNDO0lBQ0M7O0VBRUQ7SUFDQyIsImZpbGUiOiJKc09ULnNjc3MuanMifQ== */`.replaceAll(/\bjsot/g, clPref);

	const styleClassName = `${clPref}__theme-style`;

	const styleAlreadyExists = [].some.call(
		document.querySelectorAll(`style.${styleClassName}`), 
		(v) => v.textContent === cssCode
	);

	if (! styleAlreadyExists) {
		const style = eHTML(`<style class="${styleClassName}"></style>`);
		style.textContent = cssCode;
		document.head.appendChild(style);
	}
}


function eHTML(code, shell=null) {
	const _shell = 
		! shell                  ? document.createElement("div") :
		typeof shell == "string" ? document.createElement(shell) :
		typeof shell == "object" ? shell :
			null;
	_shell.innerHTML = code;
	return _shell.children[0];
}

/***/ }),

/***/ "./Explorer.js":
/*!*********************!*\
  !*** ./Explorer.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Explorer)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./util.js");
/* harmony import */ var _parse_tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-tree.js */ "./parse-tree.js");
/* harmony import */ var _render_tree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-tree.js */ "./render-tree.js");
/* harmony import */ var _JsHter_JsHter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JsHter/JsHter.js */ "./JsHter/JsHter.js");





class Explorer {
	// **********************
	// _ = {
	//     ob               :
	//     t                :
	//     name             :
	//     ajaxReqUrl       :
	//     transact         :
	// }
	// **********************
	constructor (inputEl, _={}) {
		// _.ob = _.ob || window;
		
		this._ = _;
		if (!_.ob) {
			try {
				_.ob = global;
			} catch(err) {} 
			try {
				_.ob = window;
			} catch(err) {} 
		}
		_.t = _.t || {};
		_.name = _.name || "rootNode";

		if (_.ajaxReqUrl) {
			_.transact = _.transact || this._defaultAjaxTransact;
		} else {
			_.transact = _.transact || this._defaultTransact;
		}

		this._createCBar(inputEl, _);
		this._display(inputEl);

	}

	_createCBar (inputEl, _) {
		const cBar = this.cBar = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.eval(`
			<div class="c-bar">
				<button class="expand-node"  >&nbsp;&nbsp; + &nbsp;&nbsp;</button>
				<button class="collapse-node">&nbsp;&nbsp; - &nbsp;&nbsp;</button>
				<button class="recur-expand"  > ↳ + </button>
				<button class="recur-collapse"> ↳ - </button>
				<button class="update"> ↻ </button>
				<button class="get-json">
					<svg 
						version="1.1" 
						xmlns="http://www.w3.org/2000/svg" 
						xmlns:xlink="http://www.w3.org/1999/xlink" 
						x="0px" 
						y="0px"
						width="15px" 
						height="15px"
						viewBox="0 0 532.745 532.745" 
						style="
							vertical-align: bottom;
							enable-background:new 0 0 532.745 532.745;
						" 
						xml:space="preserve"
						>
						<g>
							<g>
								<circle cx="266.373" cy="284.534" r="72.647"/>
								<path d="M121.078,127.132V90.809H36.324v36.324H0v314.804h532.745V127.132H121.078z M266.373,417.721
									c-73.567,0-133.186-59.643-133.186-133.186s59.619-133.186,133.186-133.186s133.186,59.643,133.186,133.186
									S339.94,417.721,266.373,417.721z M472.206,211.887c-13.367,0-24.216-10.824-24.216-24.216s10.849-24.216,24.216-24.216
									c13.367,0,24.216,10.824,24.216,24.216C496.422,201.063,485.573,211.887,472.206,211.887z"/>
							</g>
						</g>
					</svg>
				</button>
				<button class="show-value"> .toString() </button> 
				<button class="get-pathname"> p/n </button> 
				<div class="loadbar-wrapper">
					<div class="loadbar"><div class="inner"></div></div>
				</div>
				<div class="sort-by">
					Sort By: 
					<span 
						class="setting-switcher" 
						data-setting-name="by_name"
						data-state="-1" 
						data-states='[-1,1,0]'>Name - </span>
					<span 
						class="setting-switcher" 
						data-setting-name="by_type"
						data-state="-1" 
						data-states='[-1,1,0]'>Type - </span>
				</div>
			</div>
		`).children[0];

		cBar.querySelectorAll("select").forEach((v) => {
			v.onwheel = (e) => {
				e.preventDefault();
				var 
					i = v.selectedIndex + Math.sign(e.deltaY),
					max = v.options.length - 1;
				i = (max < i)? 0 : (i < 0)? max : i;
				v.selectedIndex = i;
				this._settingsToNode();
			}
		});
		
		cBar.querySelector(".expand-node").onclick = (e) => {
			cBar.m.ch = [];
			this._display(inputEl);
		}
		
		cBar.querySelector(".collapse-node").onclick = (e) => {
			cBar.m.ch = null;
			this._display(inputEl);
		}

		cBar.querySelectorAll(".setting-switcher").forEach((el) => {
			el.onclick = (e) => {
				var 
					states = JSON.parse(el.dataset.states),
					state = Number(el.dataset.state),
					i = states.indexOf(state);
				i ++;
				if (states.length <= i)
					i = 0;
				el.dataset.state = states[i];
				this._settingsToNode();
			}
		});

		cBar.querySelector(".recur-expand").onclick = (e) => {
			recursive(cBar.m, (m) => {
				// !m.ch && m.tof == "object" && m.nip != "__proto__" && (m.ch = []);
				if (!m.ch)
					if (m.tof == "object")
						if (!m.individualDetectedProto)
							m.ch = [];
			});
			this._display(inputEl);
		}

		cBar.querySelector(".recur-collapse").onclick = (e) => {
			recursive(cBar.m, (m) => {
				if (m.ch && m.ch.length)
					if (m.ch.every((v) => !v.ch))
						m.ch = null;
			});
			this._display(inputEl);
		}

		cBar.querySelector(".update").onclick = (e) => {
			this._display(inputEl);
		}

		cBar.querySelector(".get-json").onclick = (e) => {
			var json = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.getJson(cBar.m);

			this.copyToClipboard(json);

			console.groupCollapsed(cBar.m.pathname);
			console.log(cBar.m);
			console.log(json);
			console.groupEnd();
			
		}

		cBar.querySelector(".get-pathname").onclick = (e) => {
			this.copyToClipboard(cBar.m.pathname);
			console.log(`cBar.m.pathname`, cBar.m.pathname);
		}

		cBar.querySelector(".show-value").onclick = async (e) => {
			var m = cBar.m;
			m.valueToString = true;
			var param = await this._getParam();
			delete m.valueToString;
			if (m.tof == "function")
				this._showValue(param, m, true);
			else
				this._showValue(param, m);
			// console.log(m.pathname, "\n"+param);
		}


		function recursive(m, callb) {
			callb(m);
			if (m.ch && m.ch.length)
				for (var ch of m.ch) 
					recursive(ch, callb);
		}

		function show(selector) {
			cBar.querySelector(selector).style.display = "";
		}

		function hide(selector) {
			cBar.querySelector(selector).style.display = "none";
		}

		cBar.init = (m) => {
			this._settingsFromNode(m);
			if (m.ch) {
				hide(".expand-node");
				show(".collapse-node");
			} else {
				show(".expand-node");
				hide(".collapse-node");
			}
		}
	}

	async _defaultTransact (_) {
		return (0,_parse_tree_js__WEBPACK_IMPORTED_MODULE_1__.default)(_.ob, _.name, _.t);
	}

	async _defaultAjaxTransact (_) {
		var 
			opts = {
				method : "POST",
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				},
				mode : "cors",
				cache : "no-store",
				body : "template="+encodeURIComponent(_util_js__WEBPACK_IMPORTED_MODULE_0__.default.getJson(_.t)),
			},
			resp, text, t;

		try {
			resp = await fetch(_.ajaxReqUrl, opts);
			text = await resp.text();
			t    = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.getFromJson(text);
		} catch(e) {
			console.error(e);
			throw e;
		}

		return t;
	}


	async _indicate (pr) {
		var res;
		this.cBar.querySelector(".loadbar").dataset.status = "loading";
		this.cBar.querySelector(".loadbar").title = "Status: Loading ... ";
		await new Promise((ok) => setTimeout(ok));

		try {
			res = await pr;
		} catch(e) {
			this.cBar.querySelector(".loadbar").dataset.status = "err";
			this.cBar.querySelector(".loadbar").title = "Status: "+e.toString();
			console.error(e);
			return e;
		}

		this.cBar.querySelector(".loadbar").dataset.status = "ok";
		this.cBar.querySelector(".loadbar").title = "Status: OK";
		return res;
	}

	async _display (inputEl) {
		var _ = this._;
		_.t = await this._indicate(_.transact(_));
		(0,_render_tree_js__WEBPACK_IMPORTED_MODULE_2__.default)(inputEl, _.t, this.cBar);
	}

	async _getParam () {
		var _ = this._;
		return await this._indicate(_.transact(_));
	}

	_settingsToNode () {
		var 
			m    = this.cBar.m,
			coll = this.cBar.querySelectorAll(".setting-switcher");

		coll.forEach((el) => {
			let k = el.dataset.settingName, v = Number(el.dataset.state);
			if (v < 0) {
				if (m.settings && k in m.settings)
					delete m.settings[k];
			} else {
				m.settings = m.settings || {};
				m.settings[k] = v;
			}
		});
	}

	_settingsFromNode () {
		var 
			m    = this.cBar.m,
			coll = this.cBar.querySelectorAll(".setting-switcher");

		coll.forEach((el) => {
			let 
				k = el.dataset.settingName, 
				v = (m.settings && k in m.settings)? m.settings[k] : "-1";
			el.dataset.state = v;
		});
	}

	_showValue(value, m, highlight=false) {
		var row = m.header.parentElement;
		var cWindow = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.eval(`
			<div class="c-window dark-skin">
				<div class="c-w-header">
					<div class="btn-el scroll-btn"title="scroll">&nbsp;&nbsp;⭿&nbsp;&nbsp;</div>
					<div class="btn-el copy-btn"  title="copy"  >&nbsp;&nbsp;⧉&nbsp;&nbsp;</div>
					<div class="btn-el close-btn" title="close" >&nbsp;&nbsp;✖&nbsp;&nbsp;</div>
				</div>
				<div class="float-cleaner"></div>
				<div class="c-w-content-wr">
					<pre class="js-hl-c-w-content jsot-syntax-hl jsot-js-hl calm-clarified-theme"></pre>
				</div>
				<div class="c-w-footer">
					<div class="btn-el scroll-btn"title="scroll">&nbsp;&nbsp;⭿&nbsp;&nbsp;</div>
					<div class="btn-el copy-btn"  title="copy"  >&nbsp;&nbsp;⧉&nbsp;&nbsp;</div>
					<div class="btn-el close-btn" title="close" >&nbsp;&nbsp;✖&nbsp;&nbsp;</div>
				</div>
				<div class="float-cleaner"></div>
			</div>
		`).children[0];

		row.after(cWindow);
		cWindow.querySelectorAll(".close-btn").forEach((v) => {
			v.onclick = (e) => cWindow.parentElement.removeChild(cWindow);
		})
		cWindow.querySelectorAll(".scroll-btn").forEach((v) => {
			v.onclick = (e) => {
				const el = cWindow.querySelector(".js-hl-c-w-content");
				el.dataset.maxHeigth = !el.dataset.maxHeigth || ""
			};
		})
		cWindow.querySelectorAll(".copy-btn").forEach((v) => {
			v.onclick = (e) => this.copyToClipboard(value);
		})
		var contentEl = cWindow.querySelector(".js-hl-c-w-content");
		if (highlight)
			(new _JsHter_JsHter_js__WEBPACK_IMPORTED_MODULE_3__.default()).highlight(contentEl, value);
			// contentEl.innerHTML = jsot.getHighlightedCode(value);
		else 
			contentEl.textContent = value;
	}

	copyToClipboard(str) {
		const tA = document.createElement("textarea");
		tA.value = str;
		document.body.appendChild(tA);
		tA.select();
		document.execCommand("copy");
		document.body.removeChild(tA);
	}
	
}


/***/ }),

/***/ "./HeaderCode.js":
/*!***********************!*\
  !*** ./HeaderCode.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderCode)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./util.js");


class HeaderCode {
	constructor (m) {
		var _ = this._getContext(m)
		this.code = 
			`<span class="header" `+
				`data-detect-way="${m.dtectWay && m.dtectWay.join(",")}"`+
			`>`+
				`<span class="hover-sensitive">`+
					this._code_foldSign(m, _)+
					this._code_sign    (m, _)+
					`<span class="c-bar-slot"></span>`+
					this._code_nameWr  (m, _)+
				`</span>`+
				this._code_nVDelim (m, _)+
				this._code_value   (m, _)+
				" "+
				this._code_comment (m, _)+
			`</span>`;
	}

	_code_foldSign (m, _) {
		return `<span class="fold-sign " 
					data-fold-state="${m.dtectWay && m.dtectWay.join(",")}"></span>`;
	}

	_code_sign (m, _) {
		return `<span class="sign" 
					title="${_.signTitle}">${this._getSign(m)}</span>`;
	}
	_code_nameWr (m, _) {
		return `<span class="name-wr" 
			data-g-s-call="${m.isGSCall}">`+
			_.getSet+
			`<span 
				class="name ${m.nameType}-name ${_.individualDetectedProto_str}">`+
				_.nameStr+
			`</span>`+
		`</span>`;
	}
	_code_nVDelim (m, _) {
		return ` <span class="n-v-delim"> ${_.cevwStr} ${_.esfStr} </span> `;
	}
	_code_value (m, _) {
		return `<span class="value tof-${m.tof} ${_.isNull}"
					title="${m.tof}">${_.valueStr}</span>`;
	}

	_code_comment (m, _) {
		return ((m.comment)? `<span class="comment">${m.comment}</span>` : "");
	}

	_getContext (m) {
		var _ = {
			individualDetectedProto_str : (m.individualDetectedProto)?
				"individualDetectedProto" : "",
			getSet    : "",
			cevwStr   : "", 
			esfStr    : "", 
			isNull    : (m.v === null)? "is-null" : "",
			foldState : (m.ch && m.ch.length)? "unfolded" : "not-folded",
			signTitle : m.pathname+"\n\ntypeof : "+m.tof,
			nameStr   : (typeof m.name == "symbol")? 
				""+_util_js__WEBPACK_IMPORTED_MODULE_0__.default.getSymbolToHtmlStr(m.name)+"" : m.name,
			valueStr  : 
				(m.sp_v)                 ? m.sp_v : 
				(typeof m.v == "symbol") ? ""+_util_js__WEBPACK_IMPORTED_MODULE_0__.default.getSymbolToHtmlStr(m.v)+"" : 
				(typeof m.v == "string") ? ""+_util_js__WEBPACK_IMPORTED_MODULE_0__.default.toOneSting(m.v)+"" : 
					                       m.v,
		}

		if (m.detectWay)
			_.signTitle += "\ndetectWay : "+m.detectWay.toString();
		if (m.detectValueWay)
			_.signTitle += "\ndetectValueWay : "+m.detectValueWay;
		if (m.ch)
			if (m.ch.length || m.ch.length === 0)
				_.signTitle += "\nchildren : "+m.ch.length;
		if (m.errors)
			if (m.errors.length) 
				_.signTitle += "\nerrors : "+m.errors.map((v) => v.name).join(", ");


		if (m.descriptor) {
			let d = m.descriptor;
			if (d.g || d.s) {
				if (m.isGetter) {
					_.getSet += " get";
				} else if (m.isSetter) {
					_.getSet += " set";
				} else {
					let arr = [];
					if (d.g)
						arr.push(`<span class="get" title="get">G</span>`);
					if (d.s)
						arr.push(`<span class="set">S</span>`);
					_.getSet += `<span class="get-set" title="set">${arr.join("")}</span>`;
				}
			}
			_.cevwStr += `<span class="cevw">`;

			if ("c" in d)
				_.cevwStr += `<span 
					class="descr-property configurable ${(!!d.c).toString()}"
					title="configurable"
					>c</span>`;
				else 
					_.cevwStr += "-";

			if ("e" in d)
				_.cevwStr += `<span 
					class="descr-property enumerable ${(!!d.e).toString()}"
					title="enumerable"
					>e</span>`;
				else 
					_.cevwStr += "-";

			if ("v" in d)
				_.cevwStr += `<span 
					class="descr-property value ${(!!d.v).toString()}"
					title="value"
					>v</span>`;
				else 
					_.cevwStr += "-";

			if ("w" in d)
				_.cevwStr += `<span 
					class="descr-property writable ${(!!d.w).toString()}"
					title="writable"
					>w</span>`;
				else 
					_.cevwStr += "-";

			_.cevwStr += `</span>`;
		} else 
			_.cevwStr = "    ";
			// _.cevwStr = "────";


		if (m.esf) {
			let esf = m.esf;
			_.esfStr += `<span class="esf">`
			if ("e" in esf)
				_.esfStr += `<span 
					class="object-option extensible ${(!!esf.e).toString()}"
					title="Extensible object"
					>E</span>`;
			else 
				_.esfStr += "-";

			if ("s" in esf)
				_.esfStr += `<span 
					class="object-option sealed ${(!!esf.f).toString()}"
					title="Sealed object"
					>S</span>`;
			else 
				_.esfStr += "-";

			if ("f" in esf)
				_.esfStr += `<span 
					class="object-option frozen ${(!!esf.s).toString()}"
					title="Frozen object"
					>F</span>`;
			else 
				_.esfStr += "-";

			_.esfStr += "</span>"
		}

		return _;
	}

	_getSign (m) {

		var d = {
			sim :         "───"         ,
			sip :         "─┬─"         ,
			und :         "───"         ,
			sym : "<b>" + "@@-" + "</b>",
			fg  : "<b>" + "g()" + "</b>",
			af  : "<b>" + "a()" + "</b>",
			f   : "<b>" + "ƒ()" + "</b>",
			iob : "<b>" + "[i]" + "</b>",
			nob : "<b>" + "{×}" + "</b>",
			ob  : "<b>" + "{…}" + "</b>",
			err : "<b>" + "ERR" + "</b>",
			_p_ :         "─┐ ",
			cpr : "<b>(</b>+<b>)</b>",
		};

		if (m.individualDetectedProto) {
			if (m.ch) 
				return d["_p_"];
			else 
				return d["cpr"];
		} else if ( ["boolean", "number", "string"].includes(m.tof) ) {
			if (m.ch && m.ch.length)
				return d["sip"];
			else
				return d["sim"];
		} else if (m.tof == "undefined") {
			return d["und"];
		} else if (m.tof == "symbol") {
			return d["sym"];
		} else if (m.tof == "function") {
			if        (m.isGF) {
				return d["fg"];
			} else if (m.isAF) {
				return d["af"]
			} else {
				return d["f"];
			}
		} else if (m.tof == "object") {
			if (m.v === null) {
				return d["nob"];
			} else {
				if      (m.hasIter === true) {
					return d["iob"];
				} else if (m.hasIter == "err") {
					return d["err"];
				} else {
					return d["ob"];
				}
			} 
		}
	}

}


/***/ }),

/***/ "./JsHter/JsHter.js":
/*!**************************!*\
  !*** ./JsHter/JsHter.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JsHlter)
/* harmony export */ });
/* harmony import */ var _set_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-style.js */ "./JsHter/set-style.js");
/* harmony import */ var _syntax_highlight_framework_syntax_hl_fk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../syntax-highlight-framework/syntax-hl-fk.js */ "./syntax-highlight-framework/syntax-hl-fk.js");



const version = "1.1.3";

const {
	token,
	nToken,
	spToken,
	rule,
	domain,
	seq,
	alter,
	q,
	not,
	spWrap,
	error,
	deb,
} = _syntax_highlight_framework_syntax_hl_fk_js__WEBPACK_IMPORTED_MODULE_1__.default.describeAPI;

const
	d = {
		comment : domain("comment", function(pc) {
			return alter(r.comment_line, r.comment_snippet)(pc);
		}),
		string  : domain("string" , function(pc) {
			return r.string_single(pc) || r.string_dowble(pc) || r.string_slash(pc);
		}),
		re      : domain("re"     , function(pc) {
			return token(/\/(\\\/|[^\/\n])+\/[migy]{0,4}/y)(pc);
		}),
		slashed : domain("slashed", function(pc) {
			return token(/\\[\\ntbu'"`]/y)(pc);
		}),
		keyword : domain("keyword", function(pc) {
			return token(/\bvar\b|\blet\b|\bconst\b|\bclass\b|\bextends\b|\btypeof\b|\binstanceof\b|\bnew\b|\breturn\b|\bif\b|\belse\b|\bfor\b|\bin\b|\bof\b|\bwhile\b|\bbreak\b|\bdo\b|\bcontinue\b|\bswitch\b|\bcase\b|\bthrow\b|\byield\b|\bimport\b|\bexport\b|\bdefault\b|\bfrom\b|\bas\b/y)(pc);
		}),
		string_tag      : domain("string_tag", function(pc) {
			return seq(
				token("${"),
				r.main_inner.q("*"),
				token("}"),
			)(pc);
		}),
		word          : domain("word", function(pc) {
			return token(/\b[a-zA-Z_$][0-9a-zA-Z_$]*\b/y)(pc);
		}),
		operator        : domain("operator", function(pc) {
			return token(/\?\.|\?|=>|!|%|&&|&|\*|-|\+|=|\|\||\||<|>/y)(pc);
		}),
		punctuation     : domain("punctuation", function(pc) {
			return token(/\.|,|:|;/y)(pc);
		}),
		number          : domain("number", function(pc) {
			return token(/\b\d+\.|\.\d+\b|\b\d+\.?\d*\b/y)(pc);
		}),
		bool            : domain("bool", function(pc) {
			return token(/\btrue\b|\bfalse\b/y)(pc);
		}),
		sp_const        : domain("sp_const", function(pc) {
			return token(/\bundefined\b|\bnull\b|\bInfinity\b/y)(pc);
		}),
		paren           : domain("paren", function(pc) {
			return seq(
				token("("),
				r.main_inner.q("*"),
				token(")"),
			)(pc);
		}),
		curly           : domain("curly", function(pc) {
			return seq(
				token("{"),
				r.main_inner.q("*"),
				token("}"),
			)(pc);
		}),
		bracket         : domain("bracket", function(pc) {
			return seq(
				token("["),
				r.main_inner.q("*"),
				token("]"),
			)(pc);
		}),
		f_sign          : domain("f_sign", function(pc) {
			return seq(
				spWrap(d.word.as("f_name")),
				spWrap(d.paren),
			)(pc);
		}),
		f_decl          : domain("f_decl", function(pc) {
			return seq(
				spWrap(token(/\basync\b/y).in("keyword").q("*")),
				spWrap(token(/\bfunction\b/y).in("keyword")),
				spWrap(token("*").in("keyword").q("*")),
				spWrap(d.word.as("f_name")),
				spWrap(d.paren),
				spWrap(d.curly),
			)(pc);
		}),
	},
	r = {
		main            : rule(function(pc) {
			return q( 
				alter(r.main_inner, r.simple), 
			"*" )(pc);
		}),
		main_inner       : rule(function(pc) {
			return alter(
				r.space,
				d.keyword,
				d.operator,
				d.f_decl,
				d.f_sign,
				d.bool,
				d.sp_const,
				d.word,
				d.paren,
				d.curly,
				d.bracket,
				d.number,
				d.punctuation,
				d.comment,
				d.string,
				d.re,
			)(pc);
		}),
		space           : rule(function(pc) {
			return token(/\s+/y)(pc);
		}),
		simple          : rule(function(pc) {
			return token(/./y)(pc);
		}),
		comment_line    : rule(function(pc) {
			return seq(
				token("//"),
				nToken("\n").q("*"),
			)(pc);
		}),
		comment_snippet : rule(function(pc) {
			return seq(
				token("/*"),
				nToken("*/").q("*"),
				token("*/"),
			)(pc);
		}),
		string_single   : rule(function(pc) {
			return seq(
				token("'"),
				alter(d.slashed, nToken("'")).q("*"),
				token("'"),
			)(pc);
		}),
		string_dowble   : rule(function(pc) {
			return seq(
				token('"'),
				alter(d.slashed, nToken('"')).q("*"),
				token('"'),
			)(pc);
		}),
		string_slash    : rule(function(pc) {
			return seq(
				token("`"),
				alter(d.slashed, d.string_tag, nToken("`")).q("*"),
				token("`"),
			)(pc);
		}),
	};

class JsHlter extends _syntax_highlight_framework_syntax_hl_fk_js__WEBPACK_IMPORTED_MODULE_1__.default.Highlighter {
	constructor (clPref="jsot-js-hl") {
		super(r.main, clPref);
		(0,_set_style_js__WEBPACK_IMPORTED_MODULE_0__.default)(clPref);
	}

	get version () { return version; }

	getHighlighted (
		templ, firstLineNum=1, cssClasses="calm-clarified-theme") {
		return super.getHighlighted(templ, firstLineNum, cssClasses);
	}
}


/***/ }),

/***/ "./JsHter/set-style.js":
/*!*****************************!*\
  !*** ./JsHter/set-style.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStyle)
/* harmony export */ });
function setStyle(clPref) {

	const cssCode = `
		.jsot-js-hl.calm-clarified-theme .jsot-js-hl__line .jsot-js-hl__line-number {
		  background-color: #444; }

		.jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text {
		  color: #eee; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .string_v {
		    color: #ddc; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .string_n {
		    color: #78a; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text ._null {
		    color: #98f; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .error {
		    color: #fff;
		    background-color: #e48;
		    box-shadow: inset 0 0 2px #fff; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .f_name {
		    color: #eee;
		    font-weight: bold; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .comment {
		    color: #777; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .string {
		    color: #b98; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .re {
		    color: #78a; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .slashed {
		    color: #fb6; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .number {
		    color: #fb6; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .bool {
		    color: #fb6; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .sp_const {
		    color: #fb6; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .keyword {
		    color: #78a; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .operator {
		    color: #78a; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .punctuation {
		    color: #eee; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .paren {
		    color: #ddc; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .curly {
		    color: #ddc; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .bracket {
		    color: #ddc; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .word {
		    color: #ddc; }
		  .jsot-js-hl.calm-clarified-theme .jsot-js-hl__line-text .string_tag {
		    color: #ddc; }

	`.replaceAll(/jsot-js-hl/g, clPref);

	const styleClassName = `${clPref}__theme-style`;

	const styleAlreadyExists = [].some.call(
		document.querySelectorAll(`style.${styleClassName}`), 
		(v) => v.textContent === cssCode
	);

	if (! styleAlreadyExists) {
		const style = eHTML(`<style class="${styleClassName}"></style>`);
		style.textContent = cssCode;
		document.head.appendChild(style);
	}
}


function eHTML(code, shell=null) {
	const _shell = 
		! shell                  ? document.createElement("div") :
		typeof shell == "string" ? document.createElement(shell) :
		typeof shell == "object" ? shell :
			null;
	_shell.innerHTML = code;
	return _shell.children[0];
}

/***/ }),

/***/ "./JsOT.js":
/*!*****************!*\
  !*** ./JsOT.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./util.js");
/* harmony import */ var _parse_tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-tree.js */ "./parse-tree.js");
/* harmony import */ var _render_tree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-tree.js */ "./render-tree.js");
/* harmony import */ var _Explorer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Explorer.js */ "./Explorer.js");
/* harmony import */ var _NodeJsServerAgent_NodeJsServerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeJsServerAgent/NodeJsServerAgent.js */ "./NodeJsServerAgent/NodeJsServerAgent.js");
/* harmony import */ var _JsonErrHter_JsonErrHter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JsonErrHter/JsonErrHter.js */ "./JsonErrHter/JsonErrHter.js");
/* harmony import */ var _JsHter_JsHter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JsHter/JsHter.js */ "./JsHter/JsHter.js");
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









const version = "2.0.0";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	version,
	Explorer: _Explorer_js__WEBPACK_IMPORTED_MODULE_3__.default,                       // (inputEl, options)
	NodeJsServerAgent: _NodeJsServerAgent_NodeJsServerAgent_js__WEBPACK_IMPORTED_MODULE_4__.default,              // (options)
	ServerAgent: _NodeJsServerAgent_NodeJsServerAgent_js__WEBPACK_IMPORTED_MODULE_4__.default, // (options)
	renderTextContent,              // (inputEl)
	renderJSON,                     // (inputEl, json)
	renderObject,                   // (inputEl, templ)
	special: {
		util: _util_js__WEBPACK_IMPORTED_MODULE_0__.default,
		parseTree: _parse_tree_js__WEBPACK_IMPORTED_MODULE_1__.default,                  // (ob, name, oT={}, deep=0)
		renderTree: _render_tree_js__WEBPACK_IMPORTED_MODULE_2__.default,                 // (inputEl, templ, cBar=null)
		// JsHl,                       // (contentEl, value)
		// JsonHl,                     // (contentEl, value)
		"@@"             : _util_js__WEBPACK_IMPORTED_MODULE_0__.default["@@"],
		"symbolStatProps": _util_js__WEBPACK_IMPORTED_MODULE_0__.default.symbolStatProps,
	}
});

let jsonHter = null; 

function renderTextContent(inputEl) {
	const json = inputEl.textContent;
	return renderJSON(inputEl, json)
}

function renderJSON(inputEl, json) {
	const {templ, jsonError, codeField, hter} = _evalJson(json);
	if (templ)
		return (0,_render_tree_js__WEBPACK_IMPORTED_MODULE_2__.default)(inputEl, templ);
	else {
		inputEl.innerHTML = "";
		inputEl.prepend(codeField);
		jsonHter.scrollToFirstError(codeField)
		console.error(`(!) `, jsonError);
	}
}

function renderObject(inputEl, templ) {
	return (0,_render_tree_js__WEBPACK_IMPORTED_MODULE_2__.default)(inputEl, templ);
}

function _evalJson(json) {
	try {
		return {templ: JSON.parse(json)};
	} catch (jsonError) {
		jsonHter = new _JsonErrHter_JsonErrHter_js__WEBPACK_IMPORTED_MODULE_5__.default();
		return {
			jsonError,
			codeField: jsonHter.getHighlighted(json),
		};
	}
}

/***/ }),

/***/ "./JsonErrHter/JsonErrHter.js":
/*!************************************!*\
  !*** ./JsonErrHter/JsonErrHter.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JsonErrHlter)
/* harmony export */ });
/* harmony import */ var _set_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-style.js */ "./JsonErrHter/set-style.js");
/* harmony import */ var _syntax_highlight_framework_syntax_hl_fk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../syntax-highlight-framework/syntax-hl-fk.js */ "./syntax-highlight-framework/syntax-hl-fk.js");



const version = "1.1.3";

const {
	token,
	nToken,
	spToken,
	rule,
	domain,
	seq,
	alter,
	q,
	not,
	spWrap,
	error,
	deb,
} = _syntax_highlight_framework_syntax_hl_fk_js__WEBPACK_IMPORTED_MODULE_1__.default.describeAPI;

const
	__main_ = rule(function(pc) {
		return seq(
			spWrap(r.subject.catch("Main. Expected subject.")),
			error("Main. Unexpected symbol after end of code.").q("*")
		)(pc);
	}),
	list = rule(function(pc) {
		return token("[").in("list__open")
			.break(
				seq(
					spWrap(r.subject.q("*/", spWrap(token(",").in("list__coma")))),
					token("]").in("list__close")
						.catch("List. Expected closing bracket ' ] '."),
				)
			).msg("List.")(pc);
			
	}),
	dict = rule(function(pc) {
		return spToken("{")
			.break(
				alter(
					spToken("}"),
					seq(
						seq(
							d.string_n.catch("Dict. Expected string name of field."),
							spToken(":").catch("Dict. Expected colon ' : '."),
							r.subject.catch("Dict. Expected subject - (null | boll | number | string | list | dict).")
						).q("*/", spToken(",")),
						spToken("}").catch("Dict. Expected closing curly ' } ' or coma ' , '."),
					),
				)
			).msg("Dict.")(pc);
	}),
	d = {
		string_v : domain("string_v" , function(pc) {
			return r.string(pc);
		}),
		string_n : domain("string_n" , function(pc) {
			return r.string(pc);
		}),
		slashed : domain("slashed", function(pc) {
			return token(/\\[\\ntbu'"`]/y)(pc);
		}),
		number          : domain("number", function(pc) {
			return token(/\b\d+\.|\.\d+\b|\b\d+\.?\d*\b/y)(pc);
		}),
		bool            : domain("bool", function(pc) {
			return token(/\btrue\b|\bfalse\b/y)(pc);
		}),
		_null           : domain("_null", function(pc) {
			return token(/\bnull\b/y)(pc);
		}),
	},
	r = {
		subject         : rule(function(pc) {
			return alter(
				d._null,
				d.bool,
				d.number,
				d.string_v,
				list,
				dict
			)(pc);
		}),
		string        : rule(function(pc) {
			return seq(
				token('"'),
				q(alter(d.slashed, nToken('"')), "*"),
				token('"'),
			)(pc);
		}),
		space           : rule(function(pc) {
			return token(/\s+/y)(pc);
		}),
	};

class JsonErrHlter extends _syntax_highlight_framework_syntax_hl_fk_js__WEBPACK_IMPORTED_MODULE_1__.default.Highlighter {
	constructor (clPref="json-err-hl") {
		super(__main_, clPref);
		(0,_set_style_js__WEBPACK_IMPORTED_MODULE_0__.default)(clPref);
	}

	get version () { return version; }

	getHighlighted (
		templ, firstLineNum=1, cssClasses="calm-clarified-theme") {
		return super.getHighlighted(templ, firstLineNum, cssClasses);
	}
}


/***/ }),

/***/ "./JsonErrHter/set-style.js":
/*!**********************************!*\
  !*** ./JsonErrHter/set-style.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStyle)
/* harmony export */ });
function setStyle(clPref) {

	const cssCode = `
	.json-err-hl.calm-theme {
	  background-color: #222; }
	  .json-err-hl.calm-theme .json-err-hl__line-text {
	    color: #eee; }
	    .json-err-hl.calm-theme .json-err-hl__line-text .string {
	      color: #ddc; }
	    .json-err-hl.calm-theme .json-err-hl__line-text .string_v {
	      color: #ddc; }
	    .json-err-hl.calm-theme .json-err-hl__line-text .string_n {
	      color: #78a; }
	    .json-err-hl.calm-theme .json-err-hl__line-text .slashed {
	      color: #f90; }
	    .json-err-hl.calm-theme .json-err-hl__line-text .number {
	      color: #f90; }
	    .json-err-hl.calm-theme .json-err-hl__line-text .bool {
	      color: #f90; }
	    .json-err-hl.calm-theme .json-err-hl__line-text ._null {
	      color: #98f; }

	.json-err-hl.calm-clarified-theme .json-err-hl__line .json-err-hl__line-number {
	  background-color: #444; }

	.json-err-hl.calm-clarified-theme .json-err-hl__line-text {
	  color: #eee; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text .string {
	    color: #ddc; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text .string_v {
	    color: #ddc; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text .string_n {
	    color: #78a; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text .bool {
	    color: #fb6; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text .number {
	    color: #fb6; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text .slashed {
	    color: #fb6; }
	  .json-err-hl.calm-clarified-theme .json-err-hl__line-text ._null {
	    color: #98f; }

	.json-err-hl.monokai-theme {
	  background-color: #333; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text .string_n {
	    color: #3bd; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text .string {
	    color: #da5; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text .string_v {
	    color: #da5; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text .slashed {
	    color: #98f; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text .number {
	    color: #98f; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text .bool {
	    color: #98f; }
	  .json-err-hl.monokai-theme .json-err-hl__line-text ._null {
	    color: #e48; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text .string_n {
	  color: #3bd; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text .string {
	  color: #da5; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text .string_v {
	  color: #da5; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text .slashed {
	  color: #98f; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text .number {
	  color: #98f; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text .bool {
	  color: #98f; }

	.json-err-hl.monokai-clarified-theme .json-err-hl__line-text ._null {
	  color: #e48; }

	 `.replaceAll(/json-err-hl/g, clPref);

	const styleClassName = `${clPref}__theme-style`;

	const styleAlreadyExists = [].some.call(
		document.querySelectorAll(`style.${styleClassName}`), 
		(v) => v.textContent === cssCode
	);

	if (! styleAlreadyExists) {
		const style = eHTML(`<style class="${styleClassName}"></style>`);
		style.textContent = cssCode;
		document.head.appendChild(style);
	}
}


function eHTML(code, shell=null) {
	const _shell = 
		! shell                  ? document.createElement("div") :
		typeof shell == "string" ? document.createElement(shell) :
		typeof shell == "object" ? shell :
			null;
	_shell.innerHTML = code;
	return _shell.children[0];
}

/***/ }),

/***/ "./NodeJsServerAgent/NodeJsServerAgent.js":
/*!************************************************!*\
  !*** ./NodeJsServerAgent/NodeJsServerAgent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServerAgent)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../util.js */ "./util.js");
/* harmony import */ var _parse_tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../parse-tree.js */ "./parse-tree.js");



class ServerAgent {
	constructor(_ = {}) {
		_.name = _.name || "rootNode";
		_.ob = _.ob || global;
		_.t = _.t || {};
		_.portHost = _.portHost || [];
		_.portHost[0] = _.portHost[0] || 3333;
		// _.portHost[1] = _.portHost[1] || "127.0.0.1";
		_.portHost[1] = _.portHost[1] || "localhost";

		Promise.all([
			Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! http */ "http", 19)),
			Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! fs */ "fs", 19)),
			Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! path */ "path", 19)),
			Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! url */ "url", 19)),
		]).then(([http$, fs$, path$, url$]) => {
			const __filename = url$.fileURLToPath("file:///D:/GitHub-my/JsOT/NodeJsServerAgent/NodeJsServerAgent.js"),
				__dirname = path$.dirname(__filename),
				serverRoot = path$.resolve(__dirname, "../");

			console.log(`__dirname`, __dirname);
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
						// console.log(`reqBody.length`, reqBody.length);
						var dataArr = reqBody.split("&");
						var dataDict = dataArr.reduce((acc, v) => {
							if (!v) return acc;

							var k_v = v.split("=");
							acc[k_v[0]] = decodeURIComponent(k_v[1]);

							return acc;
						}, {});
						var inJson = dataDict.template;
						// console.log(`inJson.length`, inJson.length);
						var t = inJson ? _util_js__WEBPACK_IMPORTED_MODULE_0__.default.getFromJson(inJson) : {};
						var getted = (0,_parse_tree_js__WEBPACK_IMPORTED_MODULE_1__.default)(_.ob, _.name, t);
						res.end(_util_js__WEBPACK_IMPORTED_MODULE_0__.default.getJson(getted));

						// console.log("↓ OK\n\n");
					});
				} else if (req.url == "/") {
					res.setHeader("Content-Type", "text/html; Charset=UTF-8");
					res.setHeader("Cash-Control", "no-store");
					var theUrl = `http://${_.portHost[1]}:${_.portHost[0]}`;
					res.end(
						getTemplateFile(
							path$.resolve(__dirname, "./agent-page.html"),
							{
								name: _.name,
								theUrl,
							},
							fs$
						)
					);

					// console.log("↓ OK\n\n");
				} else {
					const filePN = serverRoot + req.url;
					// const filePN = path$.resolve(serverRoot, req.url);
					// console.log(`filePN >>`, filePN);
					if (fs$.existsSync(filePN)) {
						res.setHeader("Content-Type", `${mimeType}; Charset="UTF-8"`);
						res.setHeader("Cash-Control", "no-store");
						res.end(fs$.readFileSync(filePN));
						// console.log("Download", req.url);
						// console.log("↓ OK\n\n");
					} else {
						res.end("JsOT - 404.");

						// console.log("↓ OK\n\n");
					}
				}
			});
			server.listen(..._.portHost);
			// server.listen(3000, "127.0.0.1");
			console.log(
				"JsOT",
				_.name,
				":",
				"http://" + _.portHost[1] + ":" + _.portHost[0],
				"\n",
				_.ob
			);
		});

		// setInterval(() => {}, 60000);
	}
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


/***/ }),

/***/ "./parse-tree.js":
/*!***********************!*\
  !*** ./parse-tree.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseTree)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./util.js");


var pArr = [];

function parseTree(ob, name, oT={}, deep=0) {
	var 
		findedStr,
		isFinded = false;

	return recursive({ob, nip : name,}, oT, deep);

	function recursive(nT, oT={}, deep, cps={}) {
		pArr.push(nT.nip || nT.iter);
		// console.log(`pArr`, pArr);

		if (oT.settings)
			Object.assign(cps, oT.settings);
		// nT.settings = nT.settings || {};
		Object.assign(nT.settings = {}, oT.settings);
		
		if (oT.valueToString) {
			isFinded = true;
			return findedStr = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.getToString(nT.ob);
		}

		var 
			chList, 
			comment,
			esf = nT.esf = {};

		nT.tof = typeof nT.ob;

		esf.e = Object.isExtensible(nT.ob);
		esf.s = Object.isFrozen(nT.ob);
		esf.f = Object.isSealed(nT.ob);

		if (comment = oT.comment || oT.comm)
			nT.comm = comment;

		if (nT.tof == "object") {
			if (nT.ob) {
				var hasIterator;
				try {
					nT.hasIter = !!nT.ob[Symbol.iterator];
				} catch(err) {
					nT.hasIter = "err";
				}
			}
		} else if (nT.tof == "function") {
			if (nT.ob.constructor) {
				if (nT.ob.constructor.name == "GeneratorFunction") 
					nT.isGF = true;
				if (nT.ob.constructor.name == "AsyncFunction") 
					nT.isAF = true;
			}
		}

		oT.cBarIsMounted && (nT.cBarIsMounted = true);

		setValue(nT);

		// if (!isSimpleType(nT.ob)) {
		// if (!isSimpleType(nT.ob) && (oT.ch || 0 < deep)) {
		if (!isNoneValue(nT.ob) && (oT.ch || 0 < deep)) {
			chList = [].concat(
				getIteratedChildren(nT.ob),
				(nT.nip != "__proto__")? getProtoGettedSettedChildren(nT.ob) : [],
				getEnumeratedChildren(nT.ob, nT.nip),
			);
			if (oT.ch || 0 < deep) {
				for (var ch of chList) {
					let oTCh;
					if (oT.ch && oT.ch.find) {
						oTCh = 
							oT.ch.find((v) => {
								return v.nip == ch.nip && 
									v.nip !== undefined && 
										v.isGetter == ch.isGetter &&
											v.isSetter == ch.isSetter;
							}) || 
							oT.ch.find((v) => v.iter == ch.iter && v.iter !== undefined);
					} else {
						oTCh = {}
					}
					nT.ch = nT.ch || [];
					nT.ch.push(recursive(ch, oTCh, deep - 1, Object.assign({}, cps)));
				}
			}
		} 


		delete nT.ob;


		if (isFinded) 
			return findedStr;


		if (nT.ch) {
			if (cps["by_name"])
				nT.ch = nT.ch.sort((_a, _b) => {
					var a = _a.nip, b = _b.nip;

					if (typeof a != "string" || typeof b != "string")
						return 0;
					else if ("__proto__" == b)
						return -1;
					else if (a == "__proto__")
						return 1;

					else if (a == b)
						return 0;
					else if (a < b)
						return -1;
					else if (a > b)
						return 1;
				});

			if (cps["by_type"])
				nT.ch = nT.ch.sort((_a, _b) => {
					var a = _a.tof, b = _b.tof;

					if (typeof a != "string" || typeof b != "string")
						return 0;
					else if ("__proto__" == _b.nip)
						return -1;
					else if (_a.nip == "__proto__")
						return 1;

					else if (a == b)
						return 0;
					else if (a < b)
						return -1;
					else if (a > b)
						return 1;
				});
		}
		


		pArr.pop();
		return nT;
	}
}


function setValue(templ) {
	var 
		sTof = (templ.sOb)? (
			(templ.sOb.get && templ.sOb.set)? "get-set" :
			(templ.sOb.get)?            "get" :
			(templ.sOb.set)?            "set" : 
				null 
		) : null,
		ob = templ.ob, 
		tof = typeof ob;
		// tof = sTof || typeof ob;

	if (templ.isGetSetProp && 0) {
		templ.v = "";
	} else if (templ.individualDetectedProto) {
		if (ob) {
			try {
				if (ob.hasOwnProperty("constructor")) {
					templ.v = ob.constructor.name;
					templ.detectValueWay = "ob.constructor.name";
				} else if (ob.hasOwnProperty("name")) {
					templ.v = ob.name;
					templ.detectValueWay = "ob.name";
				} else
					templ.v = "--No-name--";
			} catch(err) {
				templ.v = "--Error--";
				templ.errors = templ.errors || [];
				templ.errors.push(err);
			}
		} else {
			templ.v = ob;
		}
	} else if ( ["boolean", "number", "string", "symbol"].includes(tof) ) {
		templ.v = ob;
	/*} else if (tof == "symbol") {
		templ.sym_v = ob;*/
	} else if (tof == "undefined") {
		templ.v = undefined;
		templ.sp_v = "undefined";
	} else if (tof == "function") {
		templ.v = ob.name;
	} else if (tof == "object") {
		if (ob) {
			try {
				templ.v = (ob.constructor)? ob.constructor.name : "--No-constructor--";
			} catch(err) {
				templ.v = "--Error--";
				templ.errors = templ.errors || [];
				templ.errors.push(err);
			} 
			if (!templ.v)
				if (ob[Symbol.toStringTag])
					templ.v = ob[Symbol.toStringTag];
		} else
			templ.v = ob;
	}
}

function getIteratedChildren(ob) {
	// if (isSimpleType(ob)) {
	if (isNoneValue(ob)) {
		console.error("(!)-USER'S ", "'getChildren' Wrong type of 'ob'");
		console.error(`pArr`, pArr);
	}
	var 
		children = [],
		sI;

	try {
		sI = ob[Symbol.iterator];
	} catch(err) {}

	if (sI) {
		let 
			iter = 0, 
			pErr; 
			
		try {
			for (var value of ob) { // try!!!
				let ch = {
					detectWay : "iter",
					iter      : ""+iter+"",
					ob        : value,
					detectWay : "iter",
				};
				children.push(ch);
				iter ++;
			}
		} catch(err) {
			let ch = {
				iter : "--ERROR--",
				errors : [],
				ob : err.name,
			};
			ch.errors.push(err);
			children.push(ch);
		}
	}
	return children;
}


function getAdaptedDescriptor(descriptor) {
	if (descriptor) {
		var d = {};
		for (var prop in descriptor) {
			if (prop == "value")
				d.v = "value" in descriptor;
			else if (prop == "get") {
				d.g = !!descriptor.get;
				d.getter = descriptor.get;
			} else if (prop == "set") {
				d.s = !!descriptor.set;
				d.setter = descriptor.set;
			} else 
				d[prop[0]] = descriptor[prop]
		}
		return d;
	} else 
		return undefined;
}

function getEnumeratedChildren(ob, obName) {
	// if (isSimpleType(ob)) {
	if (isNoneValue(ob)) {
		console.error("(!)-USER'S ", "'getEnumeratedChildren' Wrong type of 'ob'");
		console.error(`pArr`, pArr);
	}
	var 
		dict = Object.getOwnPropertyDescriptors(ob),
		list = Object.getOwnPropertyNames(dict).concat(Object.getOwnPropertySymbols(dict)),
		children = [],
		proto = list.find((v) => v == "__proto__");

	if (proto) // To move '__proto__' to end of list.
		list = list.filter((v) => v != "__proto__").concat([proto]);

	for (var name of list) {
		let d = getAdaptedDescriptor(dict[name]);
		if (d.getter || d.setter) {

			if (d.getter) {
				children.push({
					nip          : name,
					// nPref        : "get",
					ob           : d.getter,
					detectWay    : ["getter"],
					descriptor   : d,
					isGetter     : true
				});
			}
			if (d.setter) {
				children.push({
					nip          : name,
					// nPref        : "set",
					ob           : d.setter,
					detectWay    : ["setter"],
					descriptor   : d,
					isSetter     : true
				});
			}
			if (obName != "__proto__") // show geted, setted in not __proto__ only
				children.push(getGettedProperty(ob, name, !!d.getter, !!d.setter));
		} else {
			let ch = {
				nip          : name,
				detectWay    : ["getOwnPropertyDescriptors"],
				detValWay    : ["getOwnPropertyDescriptor.value"], // !
				descriptor   : d,
				ob           : dict[name].value,
			}; 

			children.push(ch);
		}
	}

	if (!proto) {
		try {
			if (
				["boolean", "number", "string", "symbol"].includes(typeof ob) 
					|| 
				"__proto__" in ob
			) 
				children.push({
					nip          : "__proto__",
					detectWay    : ["individ"], 
					descriptor   : getAdaptedDescriptor(
						Object.getOwnPropertyDescriptor(ob,"__proto__")),
					individualDetectedProto : true,
					ob           : Object.getPrototypeOf(ob),
				});
		} catch(err) {
			console.error("(!)-USER'S ", "Can't detect '__proto__'.", "\npArr :", pArr);
			console.error(err);
		}
	}

	return children;
}

function getGettedProperty(parent, propName, hasG, hasS) {
	var node = {
		nip           : propName,
		detectWay     : ["getGettedProperty"],
		descriptor    : {
			g : hasG,
			s : hasS,
		},
		isGSCall      : true,
	}; 

	try {
		node.ob = parent[propName];
	} catch(err) {
		node.ob = err;
		node.errors = node.errors || [];
		node.errors.push(err);
	}

	return node;
}

function getProtoGettedSettedChildren(ob) {
	var 
		max = 100,
		proto = ob,
		descr = {},
		children = [];
	while ((proto = Object.getPrototypeOf(proto)) && max --) {
		let ds = Object.getOwnPropertyDescriptors(proto);
		for (var name in ds) {
			if (name != "__proto__")
				if (ds[name].get || ds[name].set) {
					descr[name] = (descr.hasOwnProperty(name))? 
						descr[name] : {};
					if (ds[name].get)
						descr[name].get = true;
					if (ds[name].set)
						descr[name].set = true;
				}
		};
	}

	for (var name in descr) 
		children.push(
			getGettedProperty(ob, name, descr[name].get, descr[name].set));

	return children;
}


function isSimpleType(v) {
	return !v || ["undefined", "boolean", "number", "string"].includes(typeof v);
}

function isNoneValue(v) {
	return v === undefined || v === null;
}


/***/ }),

/***/ "./render-tree.js":
/*!************************!*\
  !*** ./render-tree.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./util.js");
/* harmony import */ var _HeaderCode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderCode.js */ "./HeaderCode.js");
/* harmony import */ var _CSS_JsOT_scss_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSS/JsOT.scss.js */ "./CSS/JsOT.scss.js");




try {
	(0,_CSS_JsOT_scss_js__WEBPACK_IMPORTED_MODULE_2__.default)("jsot");
	/**
	 * 1. Стили должны грузиться только в среде браузера. 
	 *      Использовать try-catch идеалогически не верно.
	 * 
	 * 2. 'render-tree.js' должен подгружать только стили рендеринга. 
	 *      Стили каретки должен подгружать 'Explorer.js'.
	 */
} catch (err) {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTree);

const debugHideCBarOFF = false;

const context = {
	initNodeBefore,
	newRow,
	endOfRow,
	addBranchEl,
	addHeader,
	mountCBar,
	unmountCBar,
	add,
	getPath,
	getNameToPath,
	maserMethods : {
		fold,
		unfold
	},
	initNodeAfter,
};

function renderTree(inputEl, templ, cBar=null) {
	context.inputEl = inputEl;
	inputEl.innerHTML = "";
	context.cBar = cBar;
	createTree(templ, context);
}

// Context begin

function initNodeAfter(m) {
	if (m.ch) {
		const 
			nameWrs = m.ch.map(v => v.header.querySelector(".name-wr")),
			width = Math.max(
				... nameWrs.map(v => v.getBoundingClientRect().width)
			);
		nameWrs.forEach(v => v.style.minWidth = width+"px");
	}
}

function initNodeBefore(m) {
	m.comment = m.comment || m.comm || m.caption || m.capt;
	for (var mName in this.maserMethods) 
		m[mName] = this.maserMethods[mName];
}

function newRow(m,rI) {
	var code = `<span class="row" data-row-index="${rI}"></span>`;
	var el = this.currRow = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.eval(code).children[0];
	m.rows = m.rows || [];
	recursive(m);
	this.inputEl.appendChild(el);

	function recursive(m) {
		m.rows.push(el);
		if (m.parent)
			recursive(m.parent);
	}
}

function endOfRow(m) {
	var code = `<span class="endl">\n</span>`;
	var el = this.add(code);
	el.m = m;
}

function addBranchEl(t, m) {
	var types = {
		v : " │ ", // vertical
		f : " ├─", // fork
		c : " └─", // corner
		e : "   ", // empty
	};
	var code = `<span class="branch ${t}-branch" title="${m.pathname}">${types[t]}</span>`;
	var el = this.add(code);
	el.m = m;
	el.onclick = function branchOnClick(e) {
		this.m.header.scrollIntoView(true);
	}
}

function addHeader(m) {
	var el = m.header = this.add((new _HeaderCode_js__WEBPACK_IMPORTED_MODULE_1__.default(m)).code)
	m.cBar = this.cBar;

	el.querySelector(".sign").onclick = 
	el.querySelector(".fold-sign").onclick = 
		function foldClick(e) { (m.folded)? m.unfold() : m.fold(); };

	if (m.folded) 
		setTimeout(() => m.fold());

	if (this.cBar) {
		var hoverSensitive = el.querySelector(".hover-sensitive");

		if (m.cBarIsMounted)
			this.mountCBar(m);

		hoverSensitive.onmouseenter = (e) => {
			el.mouseHover = true;

			if (!m.cBarIsMounted) {
				setTimeout(() => {
					if (!m.cBarIsMounted)
						if (el.mouseHover) 
							this.mountCBar(m);
				}, 200);
			}
		}
		hoverSensitive.onmouseleave = (e) => {
			el.mouseHover = false;

			if (debugHideCBarOFF)
				return;

			setTimeout(() => {
				if (m.cBarIsMounted)
					if (!el.mouseHover) 
						this.unmountCBar(m);
			}, 200);
		}
	}
}
function mountCBar(m) {
	this.unmountCBar(m);

	m.cBar.m = m;
	m.cBar.m.header.dataset.highlighted = "true";

	m.header.querySelector(".c-bar-slot").appendChild(m.cBar);

	m.cBarIsMounted = true;
	m.cBar.init(m);
}
function unmountCBar(m) {
	if (m.cBar.parentElement)
		m.cBar.parentElement.removeChild(m.cBar);

	if (m.cBar.m) {
		m.cBar.m.header.dataset.highlighted = "";
		m.cBar.m.cBarIsMounted = false;
		m.cBar.m = null;
	}
}
function add(code) {
	var el = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.eval(code).children[0];
	// this.flat.push(el);
	this.currRow.appendChild(el);
	return el;
}

function getPath(pArr) {
	var p = "";
	pArr.forEach((v,i,a) => {
		if (typeof v == "number") {
			p += "["+v+"]";
		} else if (typeof v == "string") {
			if (v == parseInt(v)+"") 
				p += "["+v+"]";
			else
				p += (i)? "."+v : v;
		} else if (typeof v == "symbol") {
			p += "(("+v.description+"))"; 
		} else {
			p += "[err-of-name-render]";
		}

	});
	return p;
}

function getNameToPath(m) {
	var name;
	if (typeof m.nip == "symbol") {
		name = m.nip;
		m.nameType = "symbol";
	} else if ("nip" in m) {
		name = m.nip;
		m.nameType = "nip";
	} else {
		name = m.iter;
		m.nameType = "iter";
	} 
	m.name = name;
	return name;
}

function fold() {
	this.rows.forEach((v,i) => i && (v.style.display = "none"));
	var foldSignEl = this.header.querySelector(".fold-sign");
	foldSignEl.dataset.foldState = "folded";
	this.folded = true;
}

function unfold() {
	this.rows.forEach((v,i) => i && (v.style.display = ""));
	var foldSignEl = this.header.querySelector(".fold-sign");
	foldSignEl.dataset.foldState = "unfolded";
	delete this.folded;
	_util_js__WEBPACK_IMPORTED_MODULE_0__.default.recurTravel(this, (m) => m.folded && m.fold());
}

// Context end

function m__HeaderCode() {}




function createTree(treeModel, _) {
	// version 3.0.0
	

	function recursive(mNode) {
		var name = (_.getNameToPath)? _.getNameToPath(mNode) : mNode.name;
		mNode.path = _.getPath(pathArr);
		pathArr.push(name);
		mNode.pathname = _.getPath(pathArr);
		mNode.isBranchNode = !!(mNode.ch && mNode.ch.length);

		_.initNodeBefore && _.initNodeBefore(mNode);

		createRow(mNode, "header");
		lastChildStateArr.push(!(mNode.ch && mNode.ch.length)) + mArr.push(mNode);
		_.addSecondHeaderLine && createRow(mNode, "second-header-line");
		// createRow(mNode);

		if (mNode.isBranchNode) {
			var lastChIndex = mNode.ch.length - 1
			for (var i = 0; i < mNode.ch.length; i++) {

				mNode.ch[i].parent = mNode;
				mNode.ch[i].seqN = i;

				lastChildStateArr[lastChildStateArr.length - 1] = i == lastChIndex;
				recursive(mNode.ch[i]);
			}		
		}

		pathArr.pop();
		lastChildStateArr.pop();
		mArr.pop();
		_.initNodeAfter && _.initNodeAfter(mNode);
	}	

	_.getPath = _.getPath || ((pathArr) => pathArr.join("/"));
	
	var 
		pathArr = treeModel.rootpath ? treeModel.rootpath.split(_.pathDiv) : [],
		lastChildStateArr = [],
		rI = 0,
		mArr = []

	recursive(treeModel);
	return _;


	function createRow(mNode, rowType) {
		var cI = 0;
		_.newRow && _.newRow(mNode, rI);

		var 
			len = lastChildStateArr.length,
			lastK = len - 1;
		for (var k = 0; k < len; k++) {
			var type;

			if (rowType == "header" && k == lastK) 
				type = lastChildStateArr[k] ? "c" : "f";
			else
				type = lastChildStateArr[k] ? "e" : "v";

			var rc = [rI, cI];
			_.addBranchEl(type, mArr[k] ,rc);
			cI ++;
		}
		
		var rc = [rI, cI];

		if (rowType == "header") {
			_.addHeader(mNode ,rc);

		} else if (rowType == "second-header-line" && _.addHExt) {
			_.addSecondHeaderLine(mNode ,rc);
		} 

		_.endOfRow && _.endOfRow(mNode, rI);
		rI ++;
	}
}



/***/ }),

/***/ "./src/connect-distrib/connect-distrib.js":
/*!************************************************!*\
  !*** ./src/connect-distrib/connect-distrib.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JsOT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../JsOT.js */ "./JsOT.js");


const attempts = [];

try {
	window.jsot = _JsOT_js__WEBPACK_IMPORTED_MODULE_0__.default;
	attempts.push(false);
} catch(err) {
	attempts.push(err);
} 

try {
	module.exports = _JsOT_js__WEBPACK_IMPORTED_MODULE_0__.default;
	attempts.push(false);
} catch(err) {
	attempts.push(err);
} 

if (attempts.every((v) => !! v)) {
	console.error(`(!) - JsOT.`, `Can't connect distributive. All ways of connection were unsuccessful and resulted in the following errors:`);
	attempts.forEach((v) => console.error(v));
}

/***/ }),

/***/ "./syntax-highlight-framework/Highlighter.js":
/*!***************************************************!*\
  !*** ./syntax-highlight-framework/Highlighter.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HighlightAPI)
/* harmony export */ });
/* harmony import */ var _ParseContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParseContext.js */ "./syntax-highlight-framework/ParseContext.js");


class HighlightAPI {

	constructor (mainRule, clPref="syntax-hl-fk") {
		this.mainRule = mainRule;
		this.clPref   = clPref  ;
		_setCSS(this);
	}

	/**
	 * getHighlighted       (template, firstLineNum, cssClasses)
	 * highlightTextContent (el)
	 * scrollToFirstError   (el)
	 * highlight            (el, template, firstLineNum)
	 * setMainRule          (rule)
	 */

	getHighlighted       (...args) { return getHighlighted       (this, ...args); }
	highlightTextContent (...args) { return highlightTextContent (this, ...args); }
	scrollToFirstError   (...args) { return scrollToFirstError   (this, ...args); }
	highlight            (...args) { return highlight            (this, ...args); }
	setMainRule          (...args) { return setMainRule          (this, ...args); }
}


function getHighlighted(self, text, firstLineNum=1, cssClasses="") {
	const el = document.createElement("div");
	if (typeof cssClasses == "string")
		el.className += " " + cssClasses;
	else if (cssClasses instanceof Array) 
		el.classList.add(...cssClasses);
	else 
		throw new Error([
			"(!) getHighlighted(). ",
			"Argument #3 must be a string, an array of strings, or undefined.",
			"",
			cssClasses+" given.",
			""
		].join("\n"));
	highlight(self, el, text, firstLineNum);
	return el;
}

function highlightTextContent(self, el) {
	return highlight(self, el, el.textContent, getFirstLineNum(el));
}

function scrollToFirstError(self, el) {
	const errEl = el.querySelector(".error");
	if (errEl) {
		// errEl.scrollIntoView();
		const 
			top = errEl.getBoundingClientRect().top - el.getBoundingClientRect().top,
			vpH = el.clientHeight,
			deltaScroll = top - vpH / 2;
		el.scrollTop = deltaScroll;
	}
}

function highlight(self, contentEl, text, firstLineNum=1) {
	if (! (contentEl instanceof HTMLElement))
		throw new Error([
			"(!) highlight(). Argument #1 must be a HTMLElement.",
			"",
			contentEl + " given.",
			""
		].join("\n"));

	if (["executing", "executed", "exec-error"].some((v) => contentEl.classList.contains(v)))
		throw new Error([
			"(!) Highlighter. Already handled.", 
			"",
			contentEl
		].join("\n"));
	
	contentEl.classList.add(self.clPref);
	contentEl.classList.add("executing");
	contentEl.innerHTML = "";

	if (typeof text != "string")
		throw new Error([
			"(!) highlight(). Argument #2 must be a string.",
			"",
			text + " given.",
			""
		].join("\n"));

	try {
		const
			model    = _buildModel(self, text),
			contents = _renderToHighlight(self, model, firstLineNum);
		contents.forEach((lineOb) => lineOb.appendTo(contentEl));
		contentEl.classList.remove("executing");
		contentEl.classList.add("executed");
	} catch (e) {
		console.error(`(!)-CATCHED`, e);
		const lines = text.split("\n");
		lines.forEach((line, i, a) => {
			let lineOb = _makeLine(self, firstLineNum + i);
			let m = line.match(/^(\s*)(.*)/);
			[lineOb.indent.textContent, lineOb.content.textContent] = [m[1], m[2]];
			if (i < a.length - 1)
				lineOb.setEol();
			lineOb.appendTo(contentEl);
		});
		contentEl.classList.remove("executing");
		contentEl.classList.add("exec-error");
	}
}

function setMainRule(self, rule) {
	self.mainRule = rule;
}

function _buildModel(self, text) {
	const mSlot = [];
	self.mainRule(new _ParseContext_js__WEBPACK_IMPORTED_MODULE_0__.default({
		text, 
		i: 0, 
		mSlot, 
		dStack: []
	}));
	return mSlot;
}

function _renderToHighlight (self, model, firstLineNum=1) {
	const content = [], nodeStack = [];
	let lNum = firstLineNum, indentZoneFlag = true, lastLine;
	nodeStack.last = () => nodeStack[nodeStack.length - 1];
	content.push(lastLine = _makeLine(self, lNum ++));
	recur(model);
	return content;
	function recur(sb) {
		if (sb instanceof Array) {
			sb.forEach(recur);
		} else if (typeof sb == "object") {
			sb.parent = nodeStack.last() || null;

			nodeStack.push(sb);
			recur(sb.ch);
			nodeStack.pop();

		} else if (typeof sb == "string") {
			if (sb == "\n") {
				lastLine.setEol();
				content.push(lastLine = _makeLine(self, lNum ++));
				indentZoneFlag = true;
			} else if (indentZoneFlag && sb.match(/^\s+$/)) {
				lastLine.indent.innerHTML += sb;
			} else {
				let _sb = sb;
				if (indentZoneFlag) {
					const m = sb.match(/^(\s*)(.*)/);
					if (! m)
						throw new Error(`sb not matched with /^(\\s+)(.*)/. sb = ${sb}`)
					const
						indent = m[1],
						theText = m[2];
					lastLine.indent.innerHTML += indent;
					_sb = theText;
					indentZoneFlag = false;
				}
				const 
					lastDomainNode = nodeStack.last(),
					className = nodeStack.map(v => v.name).filter(v => v).join("- "),
					el = _evaluate(`<span class="${className || ""}"></span>`);
				if (nodeStack.last()?.name == "error") {
					lastLine.guter.classList.add("error");
					lastLine.guter.title = nodeStack.last()?.msg;
				}
				if (nodeStack.last()?.name == "after-error") {
					lastLine.guter.classList.add("after-error");
					lastLine.guter.title = nodeStack.last()?.msg;
				}
				lastLine.content.appendChild(el);
				el.textContent = _sb;
				el.astNode = nodeStack.last();
				const msgStr = nodeStack.reduce((a,v) => {
					if (v.msg) 
						a += `${v.name} : ${v.msg} \n`;
					return a;
				}, "");
				if (msgStr) {
					el.title = msgStr;
					el.style.cursor = "pointer";
				}
				if (lastDomainNode) {
					el.dataset.region = `${lastDomainNode.i0}:${lastDomainNode.i1}`;
					el.domain = lastDomainNode;
				}
			}
		} else {
			console.error("Invalid model node", sb);
			throw new Error("Invalid model node.")
		}
	}
}

function _makeLine(self, num) {
	return Object.setPrototypeOf(
		{
			line: _evaluate(
				`<span class="${self.clPref}__line">`+
					`<span class="${self.clPref}__line-number" data-line-number="${num}"></span>`+
					`<span class="${self.clPref}__line-indent"></span>`+
					`<span class="${self.clPref}__line-text"  ></span>`+
				`</span>`
			),
			eol: null,
			get guter  () {return this.line.children[0]},
			get indent () {return this.line.children[1]},
			get content() {return this.line.children[2]},
		},
		{
			appendTo: function(parent) {
				parent.appendChild(this.line);
				if (this.eol)
					parent.appendChild(this.eol);
			},
			setEol: function() {this.eol = _evaluate(`<span>\n</span>`);}
		}
	) 
}

function _setCSS(self) {
	
	const cssCode = `
		.syntax-hl-fk {
		  text-align: left;
		  white-space: pre;
		  background-color: #444;
		  color: #ccc;
		  -moz-tab-size: 4;
		  tab-size: 4;
		  overflow: auto;
		  max-height: 500px;
		  padding: 20px;
		  font-family: consolas, monospace; }
		  .syntax-hl-fk *::selection {
		    background-color: #000;
		    background-color: rgba(120, 120, 120, 0.5); }
		  .syntax-hl-fk .syntax-hl-fk__line {
		    margin-left: -20px; }
		    .syntax-hl-fk .syntax-hl-fk__line > * {
		      display: table-cell; }
		    .syntax-hl-fk .syntax-hl-fk__line .syntax-hl-fk__line-number {
		      width: 50px;
		      min-width: 50px;
		      max-width: 50px;
		      text-align: right;
		      background-color: #333;
		      padding-right: 10px;
		      margin-right: 5px;
		      transition: all .2s; }
		      .syntax-hl-fk .syntax-hl-fk__line .syntax-hl-fk__line-number:before {
		        content: attr(data-line-number) ""; }
		    .syntax-hl-fk .syntax-hl-fk__line span.syntax-hl-fk__line-number.error {
		      color: #fff;
		      background-color: #e48; }
		    .syntax-hl-fk .syntax-hl-fk__line .syntax-hl-fk__line-indent {
		      padding-left: 5px; }
		    .syntax-hl-fk .syntax-hl-fk__line .syntax-hl-fk__line-text {
		      padding-left: 20px;
		      white-space: pre-wrap;
		      word-break: break-word; }
		      .syntax-hl-fk .syntax-hl-fk__line .syntax-hl-fk__line-text .error {
		        color: #fff;
		        background-color: #e48;
		        box-shadow: inset 0 0 2px #fff; }
		      .syntax-hl-fk .syntax-hl-fk__line .syntax-hl-fk__line-text:before {
		        content: "";
		        margin-left: -20px; }

	`.replace(/syntax-hl-fk/g, self.clPref);

	const styleClassName = `${self.clPref}__base-style`;

	const styleAlreadyExists = [].some.call(
		document.querySelectorAll(`style.${styleClassName}`), 
		(v) => v.textContent === cssCode
	);

	if (! styleAlreadyExists) {
		const style = _evaluate(`<style class="${styleClassName}"></style>`);
		style.textContent = cssCode;
		document.head.appendChild(style);
	}
}

function _evaluate (code) {
	const shell = document.createElement("div");
	shell.innerHTML = code;
	return shell.children[0];
}


function getFirstLineNum(el) {
	const dln = parseInt(el.dataset.lineNum);
	if (! dln)
		return 1;
	else if (el.nodeName == "PRE")
		return dln + 1;
	else 
		return dln;
}

/***/ }),

/***/ "./syntax-highlight-framework/ModelNode.js":
/*!*************************************************!*\
  !*** ./syntax-highlight-framework/ModelNode.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModelNode)
/* harmony export */ });
class ModelNode {
	constructor (name, ch) {
		Object.defineProperties(this,{
			name: {value: name},
			ch  : {value: ch},
		});
	}

	get text () {
		let res = "";
		recur(this.ch);
		return res;
		function recur(sb) {
			if (sb instanceof Array) {
				sb.forEach(recur);
			} else if (typeof sb == "object") {
				recur(sb.ch);
			} else {
				res += sb;
			}
		}
	}
}

/***/ }),

/***/ "./syntax-highlight-framework/ParseContext.js":
/*!****************************************************!*\
  !*** ./syntax-highlight-framework/ParseContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParseContext)
/* harmony export */ });
/* harmony import */ var _ModelNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelNode.js */ "./syntax-highlight-framework/ModelNode.js");


class ParseContext {
	constructor(pc) {
		Object.defineProperties(this,{
			text:   {value: pc.text},
			mSlot:  {value: pc.mSlot},
			dStack: {value: pc.dStack},
			lFStack: {value: pc.lFStack},
			errC: {value: pc.errC || {eFlag: false}},
		});
		this.i = pc.i;
		this.i0 = pc.i0;
		this.selfMN = pc.selfMN;
		this.monitor = pc.monitor;
		// this.debugDomain = pc.debugDomain;
	}
	match (templ) {
		const {mSubstr, len} = this._getMatchSubstr(templ);

		if (mSubstr) {
			this.i += len;
			push(this.mSlot, mSubstr);
			this.monitor = this.i+ " : "+this.text.substr(this.i, 20)
			return mSubstr;
		} else
			return "";
	}
	notMatch (templ) {
		const {mSubstr, len} = this._getMatchSubstr(templ);

		if (mSubstr) {
			return false;
		} else {
			const simbol = this.text[this.i];
			push(this.mSlot, simbol);
			this.i += 1;
			this.monitor = this.i+ " : "+this.text.substr(this.i, 20);
			return simbol;
		}


		const hpc = this.createHypo();
		if (! hpc.match(templ)) {
			this.match(this.text[this.i]);
			return true;
		} else
			return false;
	}
	createHypo () {
		const 
			{text, i, mSlot, dStack, errC} = this,
			hpc = {text, i, mSlot: [], dStack, errC};
		return new ParseContext(hpc);
	}
	acceptHypo (hpc) {
		this.i = hpc.i;
		this.monitor = hpc.monitor;
		// this.mSlot.push(...hpc.mSlot);
		hpc.mSlot.forEach((v) => push(this.mSlot, v));
		return true;
	}
	createChildHypo (name) {
		const 
			{text, i, dStack, errC} = this,
			mSlot = [],
			mn = new _ModelNode_js__WEBPACK_IMPORTED_MODULE_0__.default(name, mSlot),
			hpc = {text, i, i0: i, mSlot, selfMN: mn, dStack, errC};
		mn.i0 = i;
		return new ParseContext(hpc);
	}
	acceptChildHypo (hpc) {
		this.i = this.i1 = hpc.i;
		push(this.mSlot, hpc.selfMN);
		hpc.selfMN.i1 = hpc.i;
		if (hpc.msg)
			hpc.selfMN.msg = hpc.msg;
		hpc.selfMN = null;
		return true;
	}
	_getMatchSubstr (templ) {
		let mSubstr = "", len;
		if (typeof templ == "string") {
			len = templ.length;
			const substr = this.text.substr(this.i, len);
			if (substr === templ)
				mSubstr = substr;
			
		} else if (templ instanceof RegExp) {
			templ.lastIndex = this.i;
			const mOb    = this.text.match(templ);
			mSubstr =  mOb && mOb[0] || "";
			len = mSubstr.length;
		}

		return {mSubstr, len};
	}
}



function push(arr, subj) {
	if (typeof subj == "string") {
		let lines = subj.split("\n");
		for (let [k, line] of lines.entries()) {
			if (k)
				arr.push("\n");
			if (line)
				pushOneLineText(arr, line);
		}
	} else 
		arr.push(subj);
}

function pushOneLineText(arr, subj) {
	let i = arr.length - 1;
	if (
		typeof arr[i] == "string" 
		&& typeof subj == "string" 
		&& arr[i] !== "\n" 
		&& subj !== "\n"
		&& (
			subj.match(/^\s+$/) && arr[i].match(/^\s+$/) 
			||
			! subj.match(/^\s+$/) && ! arr[i].match(/^\s+$/) 
		)
	)
		arr[i] += subj;
	else
		arr.push(subj);
}

/***/ }),

/***/ "./syntax-highlight-framework/describeAPI.js":
/*!***************************************************!*\
  !*** ./syntax-highlight-framework/describeAPI.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	token,
	nToken,
	spToken,
	rule,
	domain,
	seq,
	alter,
	q,
	not,
	spWrap,
	error,
	deb,
});

const Analyzer_proto = {
	q : function (quanto, sepCallb=undefined) {
		if (quanto == "*/" || quanto == "+/")
			chekToAnalyzer("analyzer.q", 2, sepCallb);
		return q(this, quanto, sepCallb);
	},
	in : function (name) {
		return domain(name, this);
	},
	and : function (callb) {
		chekToAnalyzer("analyzer.and", 1, callb);
		return seq(this, callb);
	},
	or : function (callb) {
		chekToAnalyzer("analyzer.or", 1, callb);
		return alter(this, callb);
	},
	break : function (...args) {
		for (let [k, callb] of args.entries())
			chekToAnalyzer("analyzer.break", k + 1, callb);
		let message = "";
		const _break_ = (pc) => {
			if(this(pc)) {
				seq(...args).or(undefinedError(message))(pc);
				return true;
			} else {
				return false;
			}
		}
		Object.setPrototypeOf(_break_, Analyzer_proto);
		_break_.msg = function(msg) {
			message = msg;
			return this;
		}
		return _break_;
	},
	catch : function (msg) {
		const _catch_ = (pc) => {
			return alter(
				this,
				error(msg)
			)(pc);
		}
		Object.setPrototypeOf(_catch_, Analyzer_proto);
		return _catch_;
	},
	deb : function (i0=0, i1=0) {
		return deb(this, i0, i1);
	},
};

Object.setPrototypeOf(Analyzer_proto, Function);

function seq(...callbs) {
	for (let [k, callb] of callbs.entries())
		chekToAnalyzer("seq", k + 1, callb);
	function _seq_(pc) {
		const hpc = pc.createHypo();
		for (let [k, callb] of callbs.entries()) {
			const res = callb(hpc);
			if (res || pc.errC.eFlag) 
				continue;
			else 
				return false;
		}
		pc.acceptHypo(hpc);
		return true;
	}
	Object.setPrototypeOf(_seq_, Analyzer_proto);
	return _seq_;
}

function alter(...callbs) {
	for (let [k, callb] of callbs.entries())
		chekToAnalyzer("alter", k + 1, callb);
	function _alter_(pc) {
		let res;
		for (let [k, callb] of callbs.entries()) {
			const res = callb(pc);
			if (res)
				return true;
		}
		return false;
	}
	Object.setPrototypeOf(_alter_, Analyzer_proto);
	return _alter_;
}

function q(callb, quanto, callb2=undefined) {
	chekToAnalyzer("q", 1, callb);
	let _q_;
	if (quanto == "*") {
		_q_ = function _q_zero_or_many_(pc) {
			while (pc.text[pc.i]) {
				let i0 = pc.i, status;
				status = callb(pc);
				if (status) {
					if (i0 != pc.i) {
						continue;
					} else {
						/**
						 * Not strict variant. Mismatches allowed throw error message in console.
						 */
						console.error(`(!)`, `i0 == pc.i`, 
							"\n\tpc.i :", pc.i, "\n\tpc.monitor :", pc.monitor); 
						pc.i ++;
						return true;

						/**
						 * Strict variant. Mismatches forbidden. Script will stoped.
						 */
						// console.error(`(!)`, `i0 == pc.i`, pc); debugger; throw new Error();
					}
				} else 
					return true;
			}
			return true;
		}
	} else if (quanto == "+") {
		_q_ = function _q_one_or_many_(pc) {
			return callb(pc) && q(callb, "*")(pc);
		}
	} else if (quanto == "?") {
		_q_ = function _q_zero_or_one_(pc) {
			return callb(pc) || true;
		}
	} else if (quanto == "*/") {
		chekToAnalyzer("q", 3, callb2);
		_q_ = function _q_zero_or_many_sep_(pc) {
			seq(
				callb,
				seq(callb2, callb).q("*")
			)(pc);
			return true;
		}
	} else if (quanto == "+/") {
		chekToAnalyzer("q", 3, callb2);
		_q_ = function _q_one_or_many_sep_(pc) {
			return seq(
					callb,
					seq(callb2, callb).q("*")
				)(pc);
		}
	} else {
		console.error(`(!)`, `Invalid quantifier`, `'${quanto}'`); debugger; throw new Error();
	}

	Object.setPrototypeOf(_q_, Analyzer_proto);
	return _q_;
}

function not(callb) {
	chekToAnalyzer("not", 1, callb);
	const _not_ = function _not_(pc) {
		const hpc = pc.createHypo();
		const res = callb(hpc);
		if (! res) {
			pc.match(pc.text[pc.i]);
			return true;
		} else 
			return false;
	}
	Object.setPrototypeOf(_not_, Analyzer_proto);
	return _not_;
}

function domain(name, callb, msg=null) {
	const _domain_ = function _domain_(pc) {
		const
			chpc = pc.createChildHypo(name),
			status = callb(chpc)
		if (msg) 
			chpc.msg = msg;
		if (status || pc.errC.eFlag) 
			pc.acceptChildHypo(chpc);
		return !! status;
	}
	_domain_.msg = function (text) {
		return domain(name, callb, text);
	}
	_domain_.as = function(otherName, msg=null) {
		return domain(otherName, callb);
	}
	Object.setPrototypeOf(_domain_, Analyzer_proto);
	return _domain_;
}

function rule(callb) {
	const _rule_ = function _rule_(pc) {
		const 
			hpc    = pc.createHypo(),
			status = callb(hpc);
		if (status || pc.errC.eFlag) 
			pc.acceptHypo(hpc);
		return !! status;
	}
	Object.setPrototypeOf(_rule_, Analyzer_proto);
	return _rule_;
}

function token(templ) {
	const _token_ = function _token_(pc) {
		return pc.match(templ);
	}
	Object.setPrototypeOf(_token_, Analyzer_proto);
	return _token_;
}

function nToken(templ) {
	const _notToken_ = function _notToken_(pc) {
		return pc.notMatch(templ);
	}
	Object.setPrototypeOf(_notToken_, Analyzer_proto);
	return _notToken_;
}

function spToken(templ) {
	const _space_wrapped_token_ = function(pc) {
		return seq(token(/\s+/y).q("*"), token(templ), token(/\s+/y).q("*"),)(pc);
	}
	Object.setPrototypeOf(_space_wrapped_token_, Analyzer_proto);
	return _space_wrapped_token_;
}

function spWrap(callb) {
	chekToAnalyzer("spWrap", 1, callb);
	const _space_wrapped_ = function(pc) {
		return seq(token(/\s+/y).q("*"), callb, token(/\s+/y).q("*"),)(pc);
	}
	Object.setPrototypeOf(_space_wrapped_, Analyzer_proto);
	return _space_wrapped_;
}

function error(msg) {
	const _error_ = function(pc) {
		domain("error", token(/\s*.*/y), msg)(pc);
		pc.errC.eFlag = true;
		domain("after-error", token(/\s+|\S+/y), msg).q("*")(pc);
		return true;
	}
	Object.setPrototypeOf(_error_, Analyzer_proto);
	return _error_;
}

function undefinedError(msg) {
	const _undefined_error_ = function(pc) {
		return error("Undefined error. "+msg)(pc);
	}
	Object.setPrototypeOf(_undefined_error_, Analyzer_proto);
	return _undefined_error_;
}

function deb(callb, a=0, b=0) {
	chekToAnalyzer("deb", 1, callb);
	function _deb_(pc) {
		b = b || pc.text.length;
		if (a <= pc.i && pc.i <= b) {
			debugger;
			const res = callb(pc);
			console.log(`res`, res);
			debugger;
			return res;
		}
	}
	Object.setPrototypeOf(_deb_, Analyzer_proto);
	return _deb_;
}

function chekToAnalyzer(fName, argN, callb) {
	if (! callb || callb instanceof Analyzer_proto) {
		console.error(`Argument`, argN, `(from 1) of function '${fName}()' is not Analiser. There is: \n`, callb?.toString ? callb.toString() : callb);
		throw new Error(`Invalid callback. \n\tArgument ${argN} of function '${fName}()' is not Analiser. \n`);
	} else
		return true;
}

/***/ }),

/***/ "./syntax-highlight-framework/syntax-hl-fk.js":
/*!****************************************************!*\
  !*** ./syntax-highlight-framework/syntax-hl-fk.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _describeAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describeAPI.js */ "./syntax-highlight-framework/describeAPI.js");
/* harmony import */ var _Highlighter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Highlighter.js */ "./syntax-highlight-framework/Highlighter.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	version: "5.2.3",
	describeAPI: _describeAPI_js__WEBPACK_IMPORTED_MODULE_0__.default,
	Highlighter: _Highlighter_js__WEBPACK_IMPORTED_MODULE_1__.default,
});

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	getSymId,
	getSymById,
	getSymbolToStr,
	getSymbolToHtmlStr,
	eval: evalHTML,
	recurTravel,
	flatTempl,
	getJson,
	getFromJson,
	getToString,
	toOneSting,
	"@@" : [],
	"symbolStatProps" : [
		"asyncIterator",
		"hasInstance",
		"isConcatSpreadable",
		"iterator",
		"match",
		"matchAll",
		"replace",
		"search",
		"species",
		"split",
		"toPrimitive",
		"toStringTag",
		"unscopables",
	],
});



function getSymId(sym) {
	var id = {sym}, x;
	
	if (x = sym.description)
		id.descr = x;
	
	if (x = Symbol.keyFor(sym))
		id.globRegKey = x;

	if (x = this["symbolStatProps"].find((v) => Symbol[v] && Symbol[v] == sym))
		id.statProp = x;

	if ((x = this["@@"].indexOf(sym)) == -1) 
		x = this["@@"].push(sym) - 1;
	id["@@-number"] = x;

	return id;
}

function getSymById(id) {
	if (id.sym) {
		return id.sym;
	} else if (id.statProp) {
		return Symbol[id.statProp];
	} else if (id["@@-number"]) {
		return this["@@"][id["@@-number"]] || 
			Symbol("-pseudo@@-"+id["@@-number"]+"-"+id.descr);
	} else {
		return Symbol("-pseudo@@-"+id.descr);
	}
}

function getSymbolToStr(subj) {
	var id, str = "";
	if (typeof subj == "symbol")
		id = this.getSymId(subj);
	else if (typeof subj == "object")
		id = subj;
	else 
		console.error("(!)-USER'S ", 
			"'subj' is not 'symbol' and not 'object'", 
			"\nsubj:", subj);
	str += `-@@-${id["@@-number"]}-`;
	if (id.descr)
		str += id.descr;

	return str;
}

function getSymbolToHtmlStr(subj) {
	var id, str = "";
	if (typeof subj == "symbol")
		id = this.getSymId(subj);
	else if (typeof subj == "object")
		id = subj;
	else 
		console.error("(!)-USER'S ", 
			"'subj' is not 'symbol' and not 'object'", 
			"\nsubj:", subj);
	str += `<span class="local-reg-num">${id["@@-number"]}</span>`;
	if (id.descr)
		str += `<span class="symbol-description">${id.descr}</span>`;

	return str;
}

function evalHTML(code, wrElName="div") {
	var wr = document.createElement(wrElName);
	wr.innerHTML = code;
	return wr;
}

function recurTravel(t, callb) {
	function recursive(m, callb) {
		callb(m);
		if (m.ch && m.ch.length)
			for (var ch of m.ch) 
				recursive(ch, callb);
	}
	recursive(t, callb);
}

function flatTempl(t) {
	var flat = [];
	this.recurTravel(t, (m) => flat.push(m));
	return flat;
}

function getJson(ob) {
	if (!ob || typeof ob == "string") {
		return JSON.stringify(ob);
	} else {
		ob["jsot-JSON-format-ver"] = "3.2.0";
		this.flatTempl(ob).forEach((v) => {
			// delete v.parent;
			if (typeof v.nip == "symbol")
				v.n_sym = this.getSymId(v.nip);
				// v.sym_nip = this.getSymbolValueStr(v.nip)
			
			if (typeof v.v == "symbol")
				v.v_sym = this.getSymId(v.v);

			if (v.v === undefined) {
				v.sp_v = "undefined";
				// delete v.v;
			}
			if (v.v === NaN) {
				v.sp_v = "NaN";
				// delete v.v;
			}
			if (v.v === Infinity) {
				v.sp_v = "Infinity";
				// delete v.v;
			}


			if (v.ch) { 
				// Чтобы атрибут 'ch' был последним в списке атрибутов. 
				// Это делает JSON-строку более человеко-понятной.
				var ch = v.ch;
				delete v.ch;
				v.ch = ch;
			}
		});
		var res = JSON.stringify(ob, (k,v) => {
			if ([
				"parent", 
				"header",
				"cBar",
			].includes(k))
				return undefined;

			if ([
				"rows",
				"name",
				"path",
				"pathname",
				"isBranchNode",
			].includes(k))
				return undefined;

			return v;
		}, "\t");

		delete ob["jsot-JSON-format-ver"];

		return res;
	}
}

function getFromJson(json) {
	if (json) {
		var ob = JSON.parse(json);
		this.flatTempl(ob).forEach((v) => {
			/*if (v.sym_nip)
				v.nip = Symbol[v.sym_nip];*/ // Обратная совместимость.

			if (v.n_sym)
				v.nip = this.getSymById(v.n_sym);

			if (v.v_sym)
				v.v = this.getSymById(v.v_sym);

			if (v.sp_v == "undefined") {
				v.v = undefined;
				// delete sp_v;
			}
			if (v.sp_v == "NaN") {
				v.v = NaN;
				// delete sp_v;
			}
			if (v.sp_v == "Infinity") {
				v.v = Infinity;
				// delete sp_v;
			}
		});
		return ob;
	} else {
		return "";
	}
}

function getToString(v) {
	if (v) {
		if (v.toString) {
			return v.toString();
		} else {
			return v+"";
		}
	} else {
		return v+"";
	}
}

function toOneSting(text, length=50) {
	var 
		ellipsis = " ... ",
		slice;
	if (length < text.length ) {
		slice = text.slice(0, length - ellipsis.length)+ellipsis;
	} else if (length < text.length - ellipsis.length && text.length <= length) {
		slice = text.slice(0, length - ellipsis.length);
	} else {
		slice = text;
	}
	return slice.replace(/\n/g, "┓").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__(/*! ./connect-distrib/connect-distrib.js */ "./src/connect-distrib/connect-distrib.js")
__webpack_require__(/*! ./package.json */ "./src/package.json");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map