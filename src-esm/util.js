export default {
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
};



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
