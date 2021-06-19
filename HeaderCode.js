import util       from "./util.js";

export default class HeaderCode {
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
		return ` <span class="n-v-delim">&lt;${_.cevwStr} ${_.esfStr}&gt;</span> `;
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
				""+util.getSymbolToHtmlStr(m.name)+"" : m.name,
			valueStr  : 
				(m.sp_v)                 ? m.sp_v : 
				(typeof m.v == "symbol") ? ""+util.getSymbolToHtmlStr(m.v)+"" : 
				(typeof m.v == "string") ? ""+util.toOneSting(m.v)+"" : 
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
		} 


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
