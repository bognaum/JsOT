export default function setStyle(clPref) {

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