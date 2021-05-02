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

import parseTree from "./parse-tree.js";

const 
	version = "2.0.0",
	util = m__util(),
	{
		JsHl,  // (contentEl, value)
		JsonHl // (contentEl, value)
		
	}                 = m__highlighter(),
	renderTree        = m__renderTree(util),
	Explorer          = m__Explorer(util, parseTree),
	NodeJsServerAgent = m__NodeJsServerAgent(parseTree);


export default {
	version,
	Explorer,                       // (inputEl, options)
	NodeJsServerAgent,              // (options)
	ServerAgent: NodeJsServerAgent, // (options)
	renderTextContent,              // (inputEl)
	renderJSON,                     // (inputEl, json)
	renderObject,                   // (inputEl, templ)
	special: {
		util,
		parseTree,                  // (ob, name, oT={}, deep=0)
		renderTree,                 // (inputEl, templ, cBar=null)
		JsHl,                       // (contentEl, value)
		JsonHl,                     // (contentEl, value)
		"@@"             : util["@@"],
		"symbolStatProps": util["symbolStatProps"],
	}
}

const debugHideCBarOFF = false;

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Explorer





function m__Explorer(util, parseTree) {

	return class Explorer {
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
			const cBar = this.cBar = util.eval(`
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
				var json = util.getJson(cBar.m);

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
			return parseTree(_.ob, _.name, _.t);
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
					body : "template="+encodeURIComponent(util.getJson(_.t)),
				},
				resp, text, t;

			try {
				resp = await fetch(_.ajaxReqUrl, opts);
				text = await resp.text();
				t    = util.getFromJson(text);
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
			renderTree(inputEl, _.t, this.cBar);
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
			var cWindow = util.eval(`
				<div class="c-window dark-skin">
					<div class="c-w-header">
						<div class="btn-el scroll-btn"title="scroll">&nbsp;&nbsp;⭿&nbsp;&nbsp;</div>
						<div class="btn-el copy-btn"  title="copy"  >&nbsp;&nbsp;⧉&nbsp;&nbsp;</div>
						<div class="btn-el close-btn" title="close" >&nbsp;&nbsp;✖&nbsp;&nbsp;</div>
					</div>
					<div class="float-cleaner"></div>
					<div class="c-w-content-wr">
						<pre class="js-hl-c-w-content jsot-syntax-hl"></pre>
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
				JsHl.highlight(contentEl, value);
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
}





// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Renderer




function m__renderTree(util) { // Renderer
	const HeaderCode = m__HeaderCode();
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
		}
	}

	return renderTree;

	function renderTree(inputEl, templ, cBar=null) {
		context.inputEl = inputEl;
		inputEl.innerHTML = "";
		context.cBar = cBar;
		createTree(templ, context);
	}

	// Context begin

	function initNodeBefore(m) {
		m.comment = m.comment || m.comm || m.caption || m.capt;
		for (var mName in this.maserMethods) 
			m[mName] = this.maserMethods[mName];
	}

	function newRow(m,rI) {
		var code = `<span class="row" data-row-index="${rI}"></span>`;
		var el = this.currRow = util.eval(code).children[0];
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
		var el = m.header = this.add((new HeaderCode(m)).code)
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
		var el = util.eval(code).children[0];
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
		util.recurTravel(this, (m) => m.folded && m.fold());
	}

	// Context end

	function m__HeaderCode() {
		return class HeaderCode {
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

					if ("e" in d)
						_.cevwStr += `<span 
							class="descr-property enumerable ${(!!d.e).toString()}"   
							title="enumerable"  
							>e</span>`; 

					if ("v" in d)
						_.cevwStr += `<span 
							class="descr-property value ${(!!d.v).toString()}"        
							title="value"       
							>v</span>`;

					if ("w" in d)
						_.cevwStr += `<span 
							class="descr-property writable ${(!!d.w).toString()}"     
							title="writable"    
							>w</span>`;

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

					if ("s" in esf)
						_.esfStr += `<span 
							class="object-option sealed ${(!!esf.f).toString()}"     
							title="Sealed object"    
							>S</span>`;

					if ("f" in esf)
						_.esfStr += `<span 
							class="object-option frozen ${(!!esf.s).toString()}"     
							title="Frozen object"    
							>F</span>`;

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
	}

	


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

}





// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// ServerParser





function m__NodeJsServerAgent(parseTree) {
	return class ServerAgent {
		constructor (_={}) {
			_.name = _.name || "rootNode";
			_.ob = _.ob || global;
			_.t = _.t || {};
			_.portHost = _.portHost || [];
			_.portHost[0] = _.portHost[0] || 3333;
			// _.portHost[1] = _.portHost[1] || "127.0.0.1";
			_.portHost[1] = _.portHost[1] || "localhost";

			var 
				http = require("http"),
				fs   = require("fs");

			var server = new http.Server(function (req, res) {
				// console.log("\n↑ GO");

				req.on("error", (err) => console.error(err));
				res.on("error", (err) => console.error(err));

				
				res.setHeader('Access-Control-Allow-Origin', '*');

				var gFUrl;

				if (req.url == "/") {
					res.setHeader('Content-Type', 'text/html; Charset=UTF-8');
					res.setHeader('Cash-Control', 'no-store');
					var theUrl = `http://${_.portHost[1]}:${_.portHost[0]}`;
					res.end(`
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<link rel="stylesheet" type="text/css"       href="/JsOT.css">
							<script                type="text/javascript" src="/JsOT.js" ></script>
							<title>${_.name} - JsOT</title>
							<style>
								body {
									margin: 0;
								}
								body>a:nth-child(1) {
									text-align: center;
									display: block;
									font-style: italic;
									font-weight: bold;
									background-color: #333;
									color: #eee;
									padding: 10px;
								}
								h1 {
									text-align: center;
								}
								.pre-wr {
									text-align: center;
								}
								pre {
									margin: 20px;
									display: inline-block;
									margin-bottom: 200px;
									text-align: left;
								}
							</style>
						</head>
						<body>
							<a target="_blank" href="${theUrl}">${theUrl}</a>
							<h1>${_.name}</h1>
							<div class="pre-wr">
								<pre id="explorer" class="jsot"></pre>
								<!-- <br><br><br><br><br><br><br><br><br><br> -->
							</div>
							<script type="text/javascript">
								new jsot.Explorer(explorer, {ajaxReqUrl : "/parse"});
							</script>
						</body>
						</html>
					`);

					// console.log("↓ OK\n\n");
				} else if (["/jsot.js"].includes(req.url.toLowerCase())) {
					res.setHeader('Content-Type', 'application/javascript; Charset="UTF-8"');
					res.setHeader('Cash-Control', 'no-store');
					res.end(fs.readFileSync(__dirname+req.url));

					// console.log("Download", req.url);
					// console.log("↓ OK\n\n");
				} else if ([
					"/jsot.css",
					"/jsot.css.map",
					"/jsot.scss",
				].includes(req.url.toLowerCase())) {
					res.setHeader('Content-Type', 'text/css; Charset="UTF-8"');
					res.setHeader('Cash-Control', 'no-store');
					res.end(fs.readFileSync(__dirname+req.url));
					// console.log("Download", req.url);
					// console.log("↓ OK\n\n");
				} else if (req.url == "/parse") {
					res.setHeader('Content-Type', 'text/plain; Charset="UTF-8"');
					res.setHeader('Cash-Control', 'no-store');

					var reqBody = ""
					req.on("data", (dataBuf) => reqBody += dataBuf.toString());

					req.on("end", (e) => {
						// console.log(`reqBody.length`, reqBody.length);
						var dataArr = reqBody.split("&");
						var dataDict = dataArr.reduce((acc,v) => {
								if (!v)
									return acc;

								var k_v = v.split("=");
								acc[k_v[0]] = decodeURIComponent(k_v[1]);

								return acc;
							}, {});
						var inJson = dataDict.template;
						// console.log(`inJson.length`, inJson.length);
						var t = inJson ? util.getFromJson(inJson) : {};
						var getted = parseTree(_.ob, _.name, t);
						res.end(util.getJson(getted));

						// console.log("↓ OK\n\n");
					});
				} else {
					res.end("JsOT - 404.");

					// console.log("↓ OK\n\n");
				}
			});
			server.listen(..._.portHost);
			// server.listen(3000, "127.0.0.1");
			console.log("JsOT",_.name, ":", "http://"+_.portHost[1]+":"+_.portHost[0], "\n", _.ob);
		}
		
	}
}




// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Parser







// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// util



function m__util() {
	return {
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
}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// renderTextContent

function renderTextContent(inputEl) {
	const json = inputEl.textContent;
	return renderJSON(inputEl, json)
}

function renderJSON(inputEl, json) {
	let templ;
	try {
		templ = util.getFromJson(json);
	} catch(err) {
		inputEl.classList.add("jsot-syntax-hl");
		JsonHl.highlightTextContent(inputEl, json);
		JsonHl.scrollToFirstError(inputEl);
		console.error(`(!)-Catched the next JSON error:`);
		throw(err);
	}
	return renderTree(inputEl, templ);
}

function renderObject(inputEl, templ) {
	return renderTree(inputEl, templ)
}





// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// makeHighlighter


function m__highlighter() {
	const {describeAPI, getSyntaxHighlightAPI} = m__SyntaxHlFk();

	return {
		JsHl  : m__JsHl(),
		JsonHl: m__JsonErrorHl(),
	}

	function m__JsHl() {
		const {
			seq,
			alter,
			q,
			not,
			domain,
			rule,
			token,
			deb,
		} = describeAPI;

		const
			d = {
				comment : domain("comment", function(pc) {
					return r.comment_line(pc) || r.comment_snippet(pc);
				}),
				string  : domain("string" , function(pc) {
					return r.string_single(pc) || r.string_dowble(pc) || r.string_slash(pc);
				}),
				re      : domain("re"     , function(pc) {
					return pc.match(/\/(\\\/|[^\/\n])+\/[migy]{0,4}/y);
				}),
				slashed : domain("slashed", function(pc) {
					return pc.match(/\\[\\ntbu'"`]/y);
				}),
				keyword : domain("keyword", function(pc) {
					return pc.match(/\bvar\b|\blet\b|\bconst\b|\bclass\b|\bextends\b|\btypeof\b|\binstanceof\b|\bnew\b|\breturn\b|\bif\b|\belse\b|\bfor\b|\bin\b|\bof\b|\bwhile\b|\bbreak\b|\bdo\b|\bcontinue\b|\bswitch\b|\bcase\b|\bthrow\b|\byield\b|\bimport\b|\bexport\b|\bdefault\b|\bfrom\b|\bas\b/y);
				}),
				string_tag      : domain("string_tag", function(pc) {
					return pc.match("${")
						// && q(pc => pc.notMatch("}"), "*")(pc)
						// && domain("s_t_content", q(r.main_inner, "*"))(pc)
						&& q(r.main_inner, "*")(pc)
						&& pc.match("}");
				}),
				word          : domain("word", function(pc) {
					return pc.match(/\b[a-zA-Z_$][0-9a-zA-Z_$]*\b/y);
				}),
				operator        : domain("operator", function(pc) {
					return pc.match(/\?\.|\?|=>|!|%|&&|&|\*|-|\+|=|\|\||\||:|<|>/y);
				}),
				punctuation     : domain("punctuation", function(pc) {
					return pc.match(/\.|,|;/y);
				}),
				number          : domain("number", function(pc) {
					return pc.match(/\b\d+\.|\.\d+\b|\b\d+\.?\d*\b/y);
				}),
				bool            : domain("bool", function(pc) {
					return pc.match(/\btrue\b|\bfalse\b/y);
				}),
				sp_const        : domain("sp_const", function(pc) {
					return pc.match(/\bundefined\b|\bnull\b|\bInfinity\b/y);
				}),
				paren           : domain("paren", function(pc) {
					return pc.match("(")
						&& q(pc => r.main_inner(pc), "*")(pc)
						&& pc.match(")");
				}),
				curly           : domain("curly", function(pc) {
					return pc.match("{")
						&& q(pc => r.main_inner(pc), "*")(pc)
						&& pc.match("}");
				}),
				bracket         : domain("bracket", function(pc) {
					return pc.match("[")
						&& q(pc => r.main_inner(pc), "*")(pc)
						&& pc.match("]");
				}),
				f_sign          : domain("f_sign", function(pc) {
					return d.word.as("f_name")(pc)
						&& q(pc => r.space(pc), "*")(pc)
						&& d.paren(pc);
				}),
				f_decl          : domain("f_decl", function(pc) {
					return seq(
						token("async").in("keyword").q("*"),
						r.space.q("*"),
						token("function").in("keyword"),
						r.space.q("+"),
						d.word.as("f_name"),
						r.space.q("*"),
						d.paren,
						r.space.q("*"),
						d.curly,
					)(pc);
				}),
			},
			r = {
				main            : rule(function(pc) {
					return q(
						pc => {
							return r.main_inner(pc)
								|| r.simple(pc);
						},
						"*"
					)(pc);
				}),
				main_inner       : rule(function(pc) {
					return r.space(pc)
						|| d.keyword(pc)
						|| d.operator(pc)
						|| d.f_decl(pc)
						|| d.f_sign(pc)
						|| d.bool(pc)
						|| d.sp_const(pc)
						|| d.word(pc)
						|| d.paren(pc)
						|| d.curly(pc)
						|| d.bracket(pc)
						|| d.number(pc)
						|| d.punctuation(pc)
						|| d.comment(pc)
						|| d.string(pc)
						|| d.re(pc);
				}),
				space           : rule(function(pc) {
					return pc.match(/\s+/y);
				}),
				simple          : rule(function(pc) {
					return pc.match(/./y);
				}),
				comment_line    : rule(function(pc) {
					return pc.match("//")
						&& q(pc => pc.notMatch("\n"), "*")(pc);
				}),
				comment_snippet : rule(function(pc) {
					return pc.match("/*")
						&& q(pc => pc.notMatch("*/"), "*")(pc)
						&& pc.match("*/");
				}),
				string_single   : rule(function(pc) {
					return pc.match("'")
						&& q(pc => d.slashed(pc) || pc.notMatch("'"), "*")(pc) 
						&& pc.match("'");
				}),
				string_dowble   : rule(function(pc) {
					return pc.match('"')
						&& q(pc => d.slashed(pc) || pc.notMatch('"'), "*")(pc) 
						&& pc.match('"');
				}),
				string_slash    : rule(function(pc) {
					return pc.match("`")
						&& q(pc => d.slashed(pc) || d.string_tag(pc) || pc.notMatch("`"), "*")(pc) 
						&& pc.match("`");
				}),
			};

		return getSyntaxHighlightAPI(r.main, "jsot-syntax-hl");
	}

	function m__JsonErrorHl() {
		const {
			seq,
			alter,
			q,
			not,
			domain,
			rule,
			token,
			deb,
		} = describeAPI;

		const
			__main_ = rule(function(pc) {
				return seq(
					r.space.q("*"),
					alter(
						r.subject,
						err.msg("expected subject")
					),
					r.space.q("*"),
					err.msg("unwanted symbol after end of code").q("*"),
				)(pc);
			}),
			list = rule(function(pc) {
				if (token("[").in("list__open")(pc)) {
					r.space.q("*")(pc);
					r.subject.q("*/", r.coma_sep.in("list__coma"))(pc);
					r.space.q("*")(pc);
					token("]").in("list__close").or(err.msg("expected closing bracket ' ] ' or coma ' , '"))(pc);
					return true;
				} else
					return false;
			}),
			dict = rule(function(pc) {
				if (r.curly_op(pc)) {
					alter(
						seq(r.curly_cl),
						seq(
							seq(
								d.string_n.or(err.msg("expected string name of field")),
								r.colon_sep.or(err.msg("expected colon ' : '")),
								r.subject.or(err.msg("expected subject - (null | boll | number | string | list | dict)"))
							).q("*/", r.coma_sep),
							seq(r.curly_cl).or(err.msg("expected closing curly ' } ' or coma ' , '")),
						),
					)(pc);
					return true;
				} else
					return false;
			}),
			err = domain("error", function(pc) {
				return pc.match(/\s*.*/y);
			}),
			d = {
				string_v : domain("string_v" , function(pc) {
					return r.string(pc);
				}),
				string_n : domain("string_n" , function(pc) {
					return r.string(pc);
				}),
				slashed : domain("slashed", function(pc) {
					return pc.match(/\\[\\ntbu'"`]/y);
				}),
				number          : domain("number", function(pc) {
					return pc.match(/\b\d+\.|\.\d+\b|\b\d+\.?\d*\b/y);
				}),
				bool            : domain("bool", function(pc) {
					return pc.match(/\btrue\b|\bfalse\b/y);
				}),
				_null           : domain("_null", function(pc) {
					return pc.match(/\bnull\b/y);
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
				coma_sep      : rule(function(pc) {
					return seq(
						r.space.q("*"),
						token(","),
						r.space.q("*"),
						)(pc);
				}),
				colon_sep      : rule(function(pc) {
					return seq(
						r.space.q("*"),
						token(":"),
						r.space.q("*"),
						)(pc);
				}),
				curly_op      : rule(function(pc) {
					return seq(token("{"), r.space.q("*"))(pc);
				}),
				curly_cl      : rule(function(pc) {
					return seq(r.space.q("*"), token("}"))(pc);
				}),
				string        : rule(function(pc) {
					return pc.match('"')
						&& q(pc => d.slashed(pc) || pc.notMatch('"'), "*")(pc) 
						&& pc.match('"');
				}),
				space           : rule(function(pc) {
					return pc.match(/\s+/y);
				}),
			};

		return getSyntaxHighlightAPI(__main_, "jsot-syntax-hl");
	}


	function m__SyntaxHlFk () {
		const {
			ParseContext,
			seq,
			alter,
			q,
			not,
			domain,
			rule,
			token,
			deb,
		} = makeDescribeAPI(),
		getSyntaxHighlightAPI = makeHighlighter(ParseContext);
		
		return {
			version: "2.0.0-alpha",
			describeAPI: {
				seq,
				alter,
				q,
				not,
				domain,
				rule,
				token,
				deb,
			},
			getSyntaxHighlightAPI, // (mainRule, clPref="syntax-hl-fk")
		};



		function makeHighlighter(ParseContext) {

			return function getSyntaxHighlightAPI (mainRule, clPref="syntax-hl-fk") {

				return {
					highlight,            // (contentEl, text, firstLineNum=1)
					highlightTextContent, // (el)
					setMainRule,          // (rule)
					scrollToFirstError,   // (el)
				}

				function highlightTextContent(el) {
					return highlight(el, el.textContent, (el.dataset.lineNum*1 + 1) || 1);
				}

				function scrollToFirstError(el) {
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

				function highlight(contentEl, text, firstLineNum=1) {
					contentEl.innerHTML = "";
					try {
						const
							model    = buildModel(text),
							contents = renderToHighlight(model, firstLineNum);
						contents.forEach((lineOb) => lineOb.appendTo(contentEl));
					} catch (e) {
						console.error(`(!)-CATCHED`, e);
						const lines = text.split("\n");
						lines.forEach((line, i, a) => {
							let lineOb = makeLine(firstLineNum + i);
							let m = line.match(/^(\s*)(.*)/);
							[lineOb.indent.textContent, lineOb.content.textContent] = [m[1], m[2]];
							if (i < a.length - 1)
								lineOb.setEol();
							lineOb.appendTo(contentEl);
						});
					}
				}


				function buildModel(text) {
					const mSlot = [];
					mainRule(new ParseContext({
						text, 
						i: 0, 
						mSlot, 
						dStack: []
					}));
					return mSlot;
				}

				function renderToHighlight (model, firstLineNum=1) {
					const content = [], dStack = [], msgStack = [], dNodeStack = [];
					let lNum = firstLineNum, indentZoneFlag = true, lastLine;
					content.push(lastLine = makeLine(lNum ++));
					recur(model);
					return content;
					function recur(sb) {
						if (sb instanceof Array) {
							sb.forEach(recur);
						} else if (typeof sb == "object") {
							sb.parent = dNodeStack[dNodeStack.length - 1];

							dStack.push(sb.name);
							dNodeStack.push(sb);
							msgStack.push(sb.msg || "");

							recur(sb.ch);

							msgStack.pop();
							dNodeStack.pop();
							dStack.pop();
						} else {
							if (sb == "\n") {
								lastLine.setEol();
								content.push(lastLine = makeLine(lNum ++));
								indentZoneFlag = true;
							} else {
								if (indentZoneFlag && sb.match(/^\s+$/)) {
									lastLine.indent.innerHTML += sb;
								} else {
									indentZoneFlag = false;
									const 
										lastDomainNode = dNodeStack[dNodeStack.length - 1],
										className = dStack.filter(v => v).join("- "),
										el = evaluate(`<span class="${className || ""}"></span>`);
									lastLine.content.appendChild(el);
									el.textContent = sb;
									if (msgStack.join("")) {
										let 
											msgStr = "";
										dStack.forEach((v,i,a) => {
											let pf = (i + 1 == a.length)? "" : "-";
											msgStr += `${v+pf} : ${msgStack[i]} \n`;
										});
										el.title = msgStr;
										el.style.cursor = "pointer";
									}
									if (lastDomainNode) {
										el.dataset.region = `${lastDomainNode.i0}:${lastDomainNode.i1}`;
										el.domain = lastDomainNode;
									}
								}
							}
						}
					}
				}

				function makeLine(num) {
					return Object.setPrototypeOf(
						{
							line: evaluate(
								`<span class="${clPref}__line">`+
									`<span class="${clPref}__line-number" data-line-number="${num}"></span>`+
									`<span class="${clPref}__line-indent"></span>`+
									`<span class="${clPref}__line-text"  ></span>`+
								`</span>`
							),
							eol: null,
							get indent () {return this.line.children[1]},
							get content() {return this.line.children[2]},
						},
						{
							appendTo: function(parent) {
								parent.appendChild(this.line);
								if (this.eol)
									parent.appendChild(this.eol);
							},
							setEol: function() {this.eol = evaluate(`<span>\n</span>`);}
						}
					) 
				}

				function evaluate (code) {
					const shell = document.createElement("div");
					shell.innerHTML = code;
					return shell.children[0];
				}

				function setMainRule(rule) {
					mainRule = rule;
				}
			}
		}



		function makeDescribeAPI () {

			const Analyzer_proto = _make_Analizer_proto();
			const {ParseContext, ModelNode} = _make_classes();

			return {
				ParseContext,
				seq,
				alter,
				q,
				not,
				domain,
				rule,
				token,
				deb,
			};

			function seq(...callbs) {
				function _seq_(pc) {
					const hpc = pc.createHypo();
					for (let [k, callb] of callbs.entries()) {
						chekToAnaliser(callb);
						const res = callb(hpc);
						if (res) 
							continue;
						else 
							return false;
					}
					pc.acceptHypo(hpc);
					return true;
				}
				insertProto(Analyzer_proto, _seq_);
				return _seq_;
			}

			function alter(...callbs) {
				function _alter_(pc) {
					let res;
					for (let [k, callb] of callbs.entries()) {
						chekToAnaliser(callb);
						const res = callb(pc);
						if (res)
							return true;
					}
					return false;
				}
				insertProto(Analyzer_proto, _alter_);
				return _alter_;
			}

			function q(callb, quanto, callb2=null) {
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
						return callb(pc) && q(callb(pc), "*");
					}
				} else if (quanto == "?") {
					_q_ = function _q_zero_or_one_(pc) {
						return callb(pc) || true;
					}
				} else if (quanto == "*/") {
					_q_ = function _q_zero_or_many_sep_(pc) {
						seq(
							callb,
							seq(callb2, callb).q("*")
						)(pc);
						return true;
					}
				} else if (quanto == "+/") {
					_q_ = function _q_one_or_many_sep_(pc) {
						return seq(
								callb,
								seq(callb2, callb).q("*")
							)(pc);
					}
				} else {
					console.error(`(!)`, `Invalid quantifier`, `'${quanto}'`); debugger; throw new Error();
				}

				insertProto(Analyzer_proto, _q_);
				return _q_;
			}

			function not(callb) {
				const _not_ = function _not_(pc) {
					const hpc = pc.createHypothesis();
					const res = callb(hpc);
					if (! res) {
						pc.match(pc.text[pc.i]);
						return true;
					} else 
						return false;
				}
				insertProto(Analyzer_proto, _not_);
				return _not_;
			}

			function domain(name, callb, msg=null) {
				const _domain_ = function _domain_(pc) {
					const
						chpc = pc.createChildHypo(name),
						status = callb(chpc)
					if (msg) 
						chpc.msg = msg;
					if (status) 
						pc.acceptChildHypo(chpc);
					return !! status;
				}
				_domain_.msg = function (text) {
					return domain(name, callb, text);
				}
				_domain_.as = function(otherName, msg=null) {
					return domain(otherName, callb);
				}
				insertProto(Analyzer_proto, _domain_);
				return _domain_;
			}

			function rule(callb) {
				const _rule_ = function _rule_(pc) {
					const 
						hpc    = pc.createHypo(),
						status = callb(hpc);
					if (status) 
						pc.acceptHypo(hpc);
					return !! status;
				}
				insertProto(Analyzer_proto, _rule_);
				return _rule_;
			}

			function token(templ) {
				const _token_ = function _token_(pc) {
					return pc.match(templ);
				}
				insertProto(Analyzer_proto, _token_);
				return _token_;
			}

			function deb(callb, a=0, b=0) {
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
				insertProto(Analyzer_proto, _deb_);
				return _deb_;
			}

			function _make_Analizer_proto() {
				const Analyzer_proto = {
					q : function wr_q(quanto, sepCallb=null) {
						return q(this, quanto, sepCallb);
					},
					in : function wr_inDomainin(name) {
						return domain(name, this);
					},
					and : function wr_and(callb) {
						return seq(this, callb);
					},
					or : function wr_or(callb) {
						return alter(this, callb);
					},
					deb : function wr_deb(i0=0, i1=0) {
						return deb(this, i0, i1);
					},
				};

				return Analyzer_proto;
			}

			function _make_classes() {
				class ParseContext {
					constructor(pc) {
						Object.defineProperties(this,{
							text:   {value: pc.text},
							mSlot:  {value: pc.mSlot},
							dStack: {value: pc.dStack},
							lFStack: {value: pc.lFStack},
						});
						this.i = pc.i;
						this.i0 = pc.i0;
						this.selfMN = pc.selfMN;
						this.monitor = pc.monitor;
						// this.debugDomain = pc.debugDomain;
					}
					match (templ) {
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

						if (mSubstr) {
							this.i += len;
							push(this.mSlot, mSubstr);
							this.monitor = this.i+ " : "+this.text.substr(this.i, 20)
							return mSubstr;
						} else
							return "";
					}
					notMatch (templ) {
						const hpc = this.createHypo();
						if (! hpc.match(templ)) {
							this.match(this.text[this.i]);
							return true;
						} else
							return false;
					}
					createHypo () {
						const 
							{text, i, mSlot, dStack} = this,
							hpc = {text, i, mSlot: [], dStack};
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
							{text, i, dStack} = this,
							mSlot = [],
							mn = new ModelNode(name, mSlot),
							hpc = {text, i, i0: i, mSlot, selfMN: mn, dStack};
						mn.i0 = i;
						return new ParseContext(hpc);
					}
					acceptChildHypo (hpc) {
						this.i = this.i1 = hpc.i;
						push(this.mSlot, hpc.selfMN);
						hpc.selfMN.i1 = hpc.i - 1;
						if (hpc.msg)
							hpc.selfMN.msg = hpc.msg;
						hpc.selfMN = null;
						return true;
					}
				}

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

				return {
					ParseContext,
					ModelNode,
				};
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

			function insertProto(proto, ob) {
				return Object.setPrototypeOf(ob, Object.setPrototypeOf(proto, Object.getPrototypeOf(ob)));
			}

			function chekToAnaliser(fn) {
				if (! fn || Object.getPrototypeOf(fn) != Analyzer_proto) {
					console.error(fn);
					if (fn && fn.toString)
						console.error(fn.toString());
					debugger;
					throw new Error("Invalid callback.");
				} else
					return true;
			}

		}
	}
}
