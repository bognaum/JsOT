import util       from "./util.js";
import parseTree  from "./parse-tree.js";
import renderTree from "./render-tree.js";
import JsHter     from "./JsHter.js";

export default class Explorer {
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
			(new JsHter()).highlight(contentEl, value);
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
