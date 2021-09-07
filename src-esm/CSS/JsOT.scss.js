export default function setStyle(clPref="jsot") {

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

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0dpdEh1Yi1teS9Kc09UL3NyYy1lc20vQ1NTL19oZWFkZXIuc2NzcyIsImZpbGU6Ly8vRDovR2l0SHViLW15L0pzT1Qvc3JjLWVzbS9DU1MvSnNPVC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLSTtFQUVDLE9DTmlCO0VET2pCO0VBQ0E7O0FBTUE7RUFDQzs7QUFJRDtFQUNDO0VBQ0E7RUFDQTtFQUNBOztBQUlEO0VBQ0M7O0FBS0g7RUFDQztFQUNBO0VBQ0E7O0FBQ0E7RUFDQzs7QUFJRjtFQUNDO0VBQ0E7O0FBQ0E7RUFDQztFQUVBOztBQUVBO0VBQ0M7O0FBRUQ7RUFDQzs7QUFFRDtBQUFBO0VBRUM7O0FBSUY7RUFDQztFQUNBO0VBRUEsT0MvRGlCOztBRGdFakI7RUFDQztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0M7O0FBRUQ7RUFDQzs7QUFFRDtFQUVDO0VBQ0EsT0NsRmU7O0FEdUZoQjtFQUVDO0VBQ0E7O0FBV0Q7RUFFQztFQUNBLE9DeEdlOztBRGdIbEI7RUFDQzs7QUFFRDtFQUNDOztBQUVEO0VBRUMsT0N4SGlCO0VEeUhqQjs7QUFFRDtFQUNDO0VBQ0EsT0M3SGlCO0VEOEhqQjs7QUFDQTtFQUNDOztBQUVEO0VBQ0M7O0FBS0g7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDQztFQUNBOztBQUVEO0VBQ0M7RUFDQTtFQUNBOztBQUVBO0VBRUM7O0FBRUE7RUFHQztFQUVBO0VBRUE7RUFHQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFjQTtFQUNBOztBQWJBO0VBQ0M7RUFDQTtFQUdBO0VBRUE7RUFFQTtFQUNBOztBQU1GO0VBRUM7O0FBQ0E7RUFDQztFQUNBOztBQUlGO0VBRUM7O0FBQ0E7RUFDQztFQUNBO0VBQ0E7O0FBS0o7RUFDQzs7QUFDQTtFQUNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdDO0VBQTBCOztBQUMxQjtFQUEwQjs7QUFDMUI7RUFBMEI7O0FBRzFCO0VBQTBCOztBQUMxQjtFQUEwQjs7QUFDMUI7RUFBMEI7O0FBd0I1QjtFQUNDOztBQUNBO0VBQ0M7O0FBQ0E7RUFDQzs7QUFRSjtFQUNDOztBQUlFO0VBQ0M7O0FBTUY7RUFHQztFQUNBOztBQU9KO0VBQ0M7O0FBQ0E7RUFDQztFQUNBO0VBQ0EsT0N2U2lCOztBRHlTbEI7RUFDQztFQUNBLE9DelNpQjs7QUQyU2xCO0VBRUM7RUFDQSxPQ2pUaUI7O0FEbVRsQjtFQUNDO0VBQ0EsT0N2VGlCO0VEd1RqQjs7QUFDQTtFQUVDO0VBQ0EsT0M1VGdCOztBRGtVakI7RUFDQztFQUNBLE9DaFVnQjs7QUR1VWxCO0FBQUE7RUFDQzs7QUFFRDtBQUFBO0VBQ0M7O0FBRUQ7QUFBQTtBQUFBO0VBRUMsT0MxVmlCOztBRGlXbEI7QUFBQTtFQUNDOztBQUVEO0FBQUE7RUFDQzs7QUFHRDtBQUFBO0FBQUE7RUFFQyxPQzFXaUI7O0FEOFduQjtFQUNDO0VBQ0E7RUFDQSxPQzVXa0I7O0FEOFdsQjtFQUNDO0VBQ0E7OztBQ25XTDtFQUNDO0VBQ0E7RUFDQSxPQXBCcUI7O0FBc0JyQjtFQUNDO0VBQ0E7O0FBR0E7RUFFQztFQUNBOztBQUVEO0VBQ0M7O0FBR0Y7RUFDQyxrQkF6Qm9COztBQTRCbkI7RUFFQyxPQTNDa0I7O0FBZ0RyQjtFQUNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFDQTtBQUFBO0VBR0M7O0FBQ0E7QUFBQTtFQUNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7O0FBQ0E7QUFBQTtFQUNDLGFBQ0M7O0FBSUY7QUFBQTtFQUNDLGFBQ0M7O0FBU0o7RUFHQztFQUNBO0VBQ0E7O0FBR0E7RUFDQztFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNDO0VBQ0E7O0FBSUg7RUFDQzs7QUFJRjtFQUNDO0VBQ0E7O0FBQ0E7RUFDQzs7O0FBTUg7RUFDQztJQUNDOztFQUVEO0lBQ0MiLCJmaWxlIjoiSnNPVC5zY3NzLmpzIn0= */`.replaceAll(/\bjsot/g, clPref);

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