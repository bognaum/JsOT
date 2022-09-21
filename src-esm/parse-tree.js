import util       from "./util.js";

var pArr = [];

export default function parseTree(ob, name, oT={}, deep=0) {
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
			return findedStr = util.getToString(nT.ob);
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
				cps["show_iterated"]? getIteratedChildren(nT.ob) : [],
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
