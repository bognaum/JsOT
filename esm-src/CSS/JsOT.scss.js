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

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0dpdEh1Yi1teS9Kc09UL3NyYy9DU1MvX2hlYWRlci5zY3NzIiwiZmlsZTovLy9EOi9HaXRIdWItbXkvSnNPVC9zcmMvQ1NTL0pzT1Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0k7RUFFQyxPQ05pQjtFRE9qQjtFQUNBOztBQU1BO0VBQ0M7O0FBSUQ7RUFDQztFQUNBO0VBQ0E7RUFDQTs7QUFJRDtFQUNDOztBQUtIO0VBQ0M7RUFDQTtFQUNBOztBQUNBO0VBQ0M7O0FBSUY7RUFDQztFQUNBOztBQUNBO0VBQ0M7RUFFQTs7QUFFQTtFQUNDOztBQUVEO0VBQ0M7O0FBRUQ7QUFBQTtFQUVDOztBQUlGO0VBQ0M7RUFDQTtFQUVBLE9DL0RpQjs7QURnRWpCO0VBQ0M7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNDOztBQUVEO0VBQ0M7O0FBRUQ7RUFFQztFQUNBLE9DbEZlOztBRHVGaEI7RUFFQztFQUNBOztBQVdEO0VBRUM7RUFDQSxPQ3hHZTs7QURnSGxCO0VBQ0M7O0FBRUQ7RUFDQzs7QUFFRDtFQUVDLE9DeEhpQjtFRHlIakI7O0FBRUQ7RUFDQztFQUNBLE9DN0hpQjtFRDhIakI7O0FBQ0E7RUFDQzs7QUFFRDtFQUNDOztBQUtIO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0M7RUFDQTs7QUFFRDtFQUNDO0VBQ0E7RUFDQTs7QUFFQTtFQUVDOztBQUVBO0VBR0M7RUFFQTtFQUVBO0VBR0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBY0E7RUFDQTs7QUFiQTtFQUNDO0VBQ0E7RUFHQTtFQUVBO0VBRUE7RUFDQTs7QUFNRjtFQUVDOztBQUNBO0VBQ0M7RUFDQTs7QUFJRjtFQUVDOztBQUNBO0VBQ0M7RUFDQTtFQUNBOztBQUtKO0VBQ0M7O0FBQ0E7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHQztFQUEwQjs7QUFDMUI7RUFBMEI7O0FBQzFCO0VBQTBCOztBQUcxQjtFQUEwQjs7QUFDMUI7RUFBMEI7O0FBQzFCO0VBQTBCOztBQXdCNUI7RUFDQzs7QUFDQTtFQUNDOztBQUNBO0VBQ0M7O0FBUUo7RUFDQzs7QUFJRTtFQUNDOztBQU1GO0VBR0M7RUFDQTs7QUFPSjtFQUNDOztBQUNBO0VBQ0M7RUFDQTtFQUNBLE9DdlNpQjs7QUR5U2xCO0VBQ0M7RUFDQSxPQ3pTaUI7O0FEMlNsQjtFQUVDO0VBQ0EsT0NqVGlCOztBRG1UbEI7RUFDQztFQUNBLE9DdlRpQjtFRHdUakI7O0FBQ0E7RUFFQztFQUNBLE9DNVRnQjs7QURrVWpCO0VBQ0M7RUFDQSxPQ2hVZ0I7O0FEdVVsQjtBQUFBO0VBQ0M7O0FBRUQ7QUFBQTtFQUNDOztBQUVEO0FBQUE7QUFBQTtFQUVDLE9DMVZpQjs7QURpV2xCO0FBQUE7RUFDQzs7QUFFRDtBQUFBO0VBQ0M7O0FBR0Q7QUFBQTtBQUFBO0VBRUMsT0MxV2lCOztBRDhXbkI7RUFDQztFQUNBO0VBQ0EsT0M1V2tCOztBRDhXbEI7RUFDQztFQUNBOzs7QUNuV0w7RUFDQztFQUNBO0VBQ0EsT0FwQnFCOztBQXNCckI7RUFDQztFQUNBOztBQUdBO0VBRUM7RUFDQTs7QUFFRDtFQUNDOztBQUdGO0VBQ0Msa0JBekJvQjs7QUE0Qm5CO0VBRUMsT0EzQ2tCOztBQWdEckI7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBQ0E7QUFBQTtFQUdDOztBQUNBO0FBQUE7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBOztBQUNBO0FBQUE7RUFDQyxhQUNDOztBQUlGO0FBQUE7RUFDQyxhQUNDOztBQVNKO0VBR0M7RUFDQTtFQUNBOztBQUdBO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDQztFQUNBOztBQUlIO0VBQ0M7O0FBSUY7RUFDQztFQUNBOztBQUNBO0VBQ0M7OztBQU1IO0VBQ0M7SUFDQzs7RUFFRDtJQUNDIiwiZmlsZSI6IkpzT1Quc2Nzcy5qcyJ9 */`.replaceAll(/\bjsot/g, clPref);

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