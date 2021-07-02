import util       from "./util.js";
import HeaderCode from "./HeaderCode.js";

export default renderTree;

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
}

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

