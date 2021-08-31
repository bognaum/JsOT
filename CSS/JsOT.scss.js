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