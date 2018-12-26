(function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var fontfaceobserver_standalone = createCommonjsModule(function (module) {
	/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b);}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a();}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a();});}function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);}
	function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";";}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g);}var k=a;l(a.b,c);l(a.c,c);z(a);}function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10);}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
	function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif";}catch(b){}E=""!==a.style.font;}return E}function L(a,b){return [a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
	B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25);},b);}e();}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"));},n);});Promise.race([N,M]).then(function(){clearTimeout(r);a(c);},
	b);}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c));}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
	n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50);}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v();});u(e,
	L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v();});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v();});u(q,L(c,'"'+c.family+'",monospace'));});})};module.exports=B;}());
	});

	var fonts = {
		"default": {
			family: "Roboto",
			fallback: "sans-serif",
			weight: 400,
			style: "normal",
			fontface: true,
			file: "roboto-regular"
		}
	};

	var _globals_fontloader = (() => {
	  const fontObservers = [];

	  if (sessionStorage.fontsLoaded) {
	    document.documentElement.classList.add('fonts-loaded');
	    return;
	  }

	  Object.keys(fonts).forEach(font => {
	    const f = fonts[font];

	    if (f.fontface) {
	      fontObservers.push(new fontfaceobserver_standalone(f.family.replace(/'/g, ''), {
	        weight: f.weight,
	        style: f.style
	      }));
	    }
	  });

	  if (fontObservers.length >= 1) {
	    Promise.all(fontObservers).then(() => {
	      document.documentElement.classList.add('fonts-loaded'); // Optimization for Repeat Views

	      sessionStorage.fontsLoaded = true;
	    });
	  }
	});

	var _globals_nodelistforeach = (() => {
	  if (window.NodeList && !NodeList.prototype.forEach) {
	    NodeList.prototype.forEach = function (callback, thisArg) {
	      thisArg = thisArg || window;

	      for (let i = 0; i < this.length; i++) {
	        callback.call(thisArg, this[i], i, this);
	      }
	    };
	  }
	});

	var _globals_vhfix = (() => {
	  const setVh = () => {
	    const vh = window.innerHeight * 0.01;
	    document.documentElement.style.setProperty('--vh', `${vh}px`);
	  };

	  setVh();
	  window.addEventListener('resize', () => {
	    window.requestAnimationFrame(() => {
	      setVh();
	    });
	  });
	});

	/*!
	 * @copyright Copyright (c) 2017 IcoMoon.io
	 * @license   Licensed under MIT license
	 *            See https://github.com/Keyamoon/svgxuse
	 * @version   1.2.6
	 */
	/*jslint browser: true */
	/*global XDomainRequest, MutationObserver, window */
	(function () {
	    if (typeof window !== "undefined" && window.addEventListener) {
	        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
	        var checkUseElems;
	        var tid; // timeout id
	        var debouncedCheck = function () {
	            clearTimeout(tid);
	            tid = setTimeout(checkUseElems, 100);
	        };
	        var unobserveChanges = function () {
	            return;
	        };
	        var observeChanges = function () {
	            var observer;
	            window.addEventListener("resize", debouncedCheck, false);
	            window.addEventListener("orientationchange", debouncedCheck, false);
	            if (window.MutationObserver) {
	                observer = new MutationObserver(debouncedCheck);
	                observer.observe(document.documentElement, {
	                    childList: true,
	                    subtree: true,
	                    attributes: true
	                });
	                unobserveChanges = function () {
	                    try {
	                        observer.disconnect();
	                        window.removeEventListener("resize", debouncedCheck, false);
	                        window.removeEventListener("orientationchange", debouncedCheck, false);
	                    } catch (ignore) {}
	                };
	            } else {
	                document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
	                unobserveChanges = function () {
	                    document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
	                    window.removeEventListener("resize", debouncedCheck, false);
	                    window.removeEventListener("orientationchange", debouncedCheck, false);
	                };
	            }
	        };
	        var createRequest = function (url) {
	            // In IE 9, cross origin requests can only be sent using XDomainRequest.
	            // XDomainRequest would fail if CORS headers are not set.
	            // Therefore, XDomainRequest should only be used with cross origin requests.
	            function getOrigin(loc) {
	                var a;
	                if (loc.protocol !== undefined) {
	                    a = loc;
	                } else {
	                    a = document.createElement("a");
	                    a.href = loc;
	                }
	                return a.protocol.replace(/:/g, "") + a.host;
	            }
	            var Request;
	            var origin;
	            var origin2;
	            if (window.XMLHttpRequest) {
	                Request = new XMLHttpRequest();
	                origin = getOrigin(location);
	                origin2 = getOrigin(url);
	                if (Request.withCredentials === undefined && origin2 !== "" && origin2 !== origin) {
	                    Request = XDomainRequest || undefined;
	                } else {
	                    Request = XMLHttpRequest;
	                }
	            }
	            return Request;
	        };
	        var xlinkNS = "http://www.w3.org/1999/xlink";
	        checkUseElems = function () {
	            var base;
	            var bcr;
	            var hash;
	            var href;
	            var i;
	            var inProgressCount = 0;
	            var isHidden;
	            var Request;
	            var url;
	            var uses;
	            var xhr;
	            function observeIfDone() {
	                // If done with making changes, start watching for chagnes in DOM again
	                inProgressCount -= 1;
	                if (inProgressCount === 0) { // if all xhrs were resolved
	                    unobserveChanges(); // make sure to remove old handlers
	                    observeChanges(); // watch for changes to DOM
	                }
	            }
	            function attrUpdateFunc(spec) {
	                return function () {
	                    if (cache[spec.base] !== true) {
	                        spec.useEl.setAttributeNS(xlinkNS, "xlink:href", "#" + spec.hash);
	                        if (spec.useEl.hasAttribute("href")) {
	                            spec.useEl.setAttribute("href", "#" + spec.hash);
	                        }
	                    }
	                };
	            }
	            function onloadFunc(xhr) {
	                return function () {
	                    var body = document.body;
	                    var x = document.createElement("x");
	                    var svg;
	                    xhr.onload = null;
	                    x.innerHTML = xhr.responseText;
	                    svg = x.getElementsByTagName("svg")[0];
	                    if (svg) {
	                        svg.setAttribute("aria-hidden", "true");
	                        svg.style.position = "absolute";
	                        svg.style.width = 0;
	                        svg.style.height = 0;
	                        svg.style.overflow = "hidden";
	                        body.insertBefore(svg, body.firstChild);
	                    }
	                    observeIfDone();
	                };
	            }
	            function onErrorTimeout(xhr) {
	                return function () {
	                    xhr.onerror = null;
	                    xhr.ontimeout = null;
	                    observeIfDone();
	                };
	            }
	            unobserveChanges(); // stop watching for changes to DOM
	            // find all use elements
	            uses = document.getElementsByTagName("use");
	            for (i = 0; i < uses.length; i += 1) {
	                try {
	                    bcr = uses[i].getBoundingClientRect();
	                } catch (ignore) {
	                    // failed to get bounding rectangle of the use element
	                    bcr = false;
	                }
	                href = uses[i].getAttribute("href")
	                        || uses[i].getAttributeNS(xlinkNS, "href")
	                        || uses[i].getAttribute("xlink:href");
	                if (href && href.split) {
	                    url = href.split("#");
	                } else {
	                    url = ["", ""];
	                }
	                base = url[0];
	                hash = url[1];
	                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
	                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
	                    if (uses[i].hasAttribute("href")) {
	                        uses[i].setAttributeNS(xlinkNS, "xlink:href", href);
	                    }
	                    if (base.length) {
	                        // schedule updating xlink:href
	                        xhr = cache[base];
	                        if (xhr !== true) {
	                            // true signifies that prepending the SVG was not required
	                            setTimeout(attrUpdateFunc({
	                                useEl: uses[i],
	                                base: base,
	                                hash: hash
	                            }), 0);
	                        }
	                        if (xhr === undefined) {
	                            Request = createRequest(base);
	                            if (Request !== undefined) {
	                                xhr = new Request();
	                                cache[base] = xhr;
	                                xhr.onload = onloadFunc(xhr);
	                                xhr.onerror = onErrorTimeout(xhr);
	                                xhr.ontimeout = onErrorTimeout(xhr);
	                                xhr.open("GET", base);
	                                xhr.send();
	                                inProgressCount += 1;
	                            }
	                        }
	                    }
	                } else {
	                    if (!isHidden) {
	                        if (cache[base] === undefined) {
	                            // remember this URL if the use element was not empty and no request was sent
	                            cache[base] = true;
	                        } else if (cache[base].onload) {
	                            // if it turns out that prepending the SVG is not necessary,
	                            // abort the in-progress xhr.
	                            cache[base].abort();
	                            delete cache[base].onload;
	                            cache[base] = true;
	                        }
	                    } else if (base.length && cache[base]) {
	                        setTimeout(attrUpdateFunc({
	                            useEl: uses[i],
	                            base: base,
	                            hash: hash
	                        }), 0);
	                    }
	                }
	            }
	            uses = "";
	            inProgressCount += 1;
	            observeIfDone();
	        };
	        var winLoad;
	        winLoad = function () {
	            window.removeEventListener("load", winLoad, false); // to prevent memory leaks
	            tid = setTimeout(checkUseElems, 0);
	        };
	        if (document.readyState !== "complete") {
	            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
	            window.addEventListener("load", winLoad, false);
	        } else {
	            // No need to add a listener if the document is already loaded, initialize immediately.
	            winLoad();
	        }
	    }
	}());

	/* eslint-disable no-unused-vars */
	var _patterns__1Basics$icon$icon = (() => {});

	var mediaqueries = {
		s: 480,
		m: 720,
		l: 960,
		xl: 1100,
		xxl: 1400,
		portrait: "(orientation: portrait)",
		landscape: "(orientation: landscape)",
		print: "print",
		custom: "(max-width: 30em)"
	};

	// shortcode used in the scss-file. this module will return true
	// if the given mediaquery matches

	var mediaquery = (shortcode => {
	  const queryValue = mediaqueries[shortcode];
	  let mediaquery;

	  if (Number.isInteger(queryValue)) {
	    mediaquery = `(min-width: ${queryValue}px)`;
	  } else {
	    mediaquery = queryValue;
	  }

	  return window.matchMedia(mediaquery).matches;
	});

	// You can import anything you want here, npm-modules, other files etc. pp.
	var _patterns__3Components$example$example = (function () {
	  let scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
	  const examples = scope.querySelectorAll('.js-example');
	  examples.forEach(example => {
	    if (mediaquery('l')) {
	      console.log(`Doing something with ${example} above breakpoint L`);
	    } else {
	      console.log(`Doing something with ${example} below breakpoint L`);
	    }
	  });
	});

	const globals = {
	  fontloader: _globals_fontloader,
	  nodelistforeach: _globals_nodelistforeach,
	  vhfix: _globals_vhfix
	};
	Object.freeze(globals);
	const patterns = {
	  _1Basics$icon$icon: _patterns__1Basics$icon$icon,
	  _3Components$example$example: _patterns__3Components$example$example
	};
	Object.freeze(patterns); // js has loaded—remove the no-js class

	document.documentElement.classList.remove('no-js'); // load and execute all scripts from global and all patterns automatically
	// but exclude test and config files — those should not be executed

	[globals, patterns].forEach(module => {
	  Object.keys(module).forEach(i => {
	    module[i]();
	  });
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwiLi4vLi4vLi4vc3JjL3NjcmlwdHMvMy1nbG9iYWwvZm9udGxvYWRlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL25vZGVsaXN0Zm9yZWFjaC5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL3ZoZml4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy8xLWJhc2ljcy9pY29uL2ljb24uanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy8zLWNvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmpzIiwiLi4vLi4vLi4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250IEZhY2UgT2JzZXJ2ZXIgdjIuMS4wIC0gwqkgQnJhbSBTdGVpbi4gTGljZW5zZTogQlNELTMtQ2xhdXNlICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChhLGIpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsYiwhMSk6YS5hdHRhY2hFdmVudChcInNjcm9sbFwiLGIpfWZ1bmN0aW9uIG0oYSl7ZG9jdW1lbnQuYm9keT9hKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uIGMoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGMpO2EoKX0pOmRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24gaygpe2lmKFwiaW50ZXJhY3RpdmVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZXx8XCJjb21wbGV0ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlKWRvY3VtZW50LmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsayksYSgpfSl9O2Z1bmN0aW9uIHQoYSl7dGhpcy5hPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5hLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3RoaXMuYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7dGhpcy5iPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5mPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZz0tMTt0aGlzLmIuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuYy5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7XG50aGlzLmYuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuaC5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJTtmb250LXNpemU6MTZweDttYXgtd2lkdGg6bm9uZTtcIjt0aGlzLmIuYXBwZW5kQ2hpbGQodGhpcy5oKTt0aGlzLmMuYXBwZW5kQ2hpbGQodGhpcy5mKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5iKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5jKX1cbmZ1bmN0aW9uIHUoYSxiKXthLmEuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO21pbi13aWR0aDoyMHB4O21pbi1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bzttYXJnaW46MDtwYWRkaW5nOjA7dG9wOi05OTlweDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zeW50aGVzaXM6bm9uZTtmb250OlwiK2IrXCI7XCJ9ZnVuY3Rpb24geihhKXt2YXIgYj1hLmEub2Zmc2V0V2lkdGgsYz1iKzEwMDthLmYuc3R5bGUud2lkdGg9YytcInB4XCI7YS5jLnNjcm9sbExlZnQ9YzthLmIuc2Nyb2xsTGVmdD1hLmIuc2Nyb2xsV2lkdGgrMTAwO3JldHVybiBhLmchPT1iPyhhLmc9YiwhMCk6ITF9ZnVuY3Rpb24gQShhLGIpe2Z1bmN0aW9uIGMoKXt2YXIgYT1rO3ooYSkmJmEuYS5wYXJlbnROb2RlJiZiKGEuZyl9dmFyIGs9YTtsKGEuYixjKTtsKGEuYyxjKTt6KGEpfTtmdW5jdGlvbiBCKGEsYil7dmFyIGM9Ynx8e307dGhpcy5mYW1pbHk9YTt0aGlzLnN0eWxlPWMuc3R5bGV8fFwibm9ybWFsXCI7dGhpcy53ZWlnaHQ9Yy53ZWlnaHR8fFwibm9ybWFsXCI7dGhpcy5zdHJldGNoPWMuc3RyZXRjaHx8XCJub3JtYWxcIn12YXIgQz1udWxsLEQ9bnVsbCxFPW51bGwsRj1udWxsO2Z1bmN0aW9uIEcoKXtpZihudWxsPT09RClpZihKKCkmJi9BcHBsZS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnZlbmRvcikpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtEPSEhYSYmNjAzPnBhcnNlSW50KGFbMV0sMTApfWVsc2UgRD0hMTtyZXR1cm4gRH1mdW5jdGlvbiBKKCl7bnVsbD09PUYmJihGPSEhZG9jdW1lbnQuZm9udHMpO3JldHVybiBGfVxuZnVuY3Rpb24gSygpe2lmKG51bGw9PT1FKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXthLnN0eWxlLmZvbnQ9XCJjb25kZW5zZWQgMTAwcHggc2Fucy1zZXJpZlwifWNhdGNoKGIpe31FPVwiXCIhPT1hLnN0eWxlLmZvbnR9cmV0dXJuIEV9ZnVuY3Rpb24gTChhLGIpe3JldHVyblthLnN0eWxlLGEud2VpZ2h0LEsoKT9hLnN0cmV0Y2g6XCJcIixcIjEwMHB4XCIsYl0uam9pbihcIiBcIil9XG5CLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxrPWF8fFwiQkVTYnN3eVwiLHI9MCxuPWJ8fDNFMyxIPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2lmKEooKSYmIUcoKSl7dmFyIE09bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBlKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktSD49bj9iKEVycm9yKFwiXCIrbitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpOmRvY3VtZW50LmZvbnRzLmxvYWQoTChjLCdcIicrYy5mYW1pbHkrJ1wiJyksaykudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sYil9ZSgpfSksTj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGMpe3I9c2V0VGltZW91dChmdW5jdGlvbigpe2MoRXJyb3IoXCJcIituK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSl9LG4pfSk7UHJvbWlzZS5yYWNlKFtOLE1dKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpO2EoYyl9LFxuYil9ZWxzZSBtKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdigpe3ZhciBiO2lmKGI9LTEhPWYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9aCkoYj1mIT1nJiZmIT1oJiZnIT1oKXx8KG51bGw9PT1DJiYoYj0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksQz0hIWImJig1MzY+cGFyc2VJbnQoYlsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGJbMV0sMTApJiYxMT49cGFyc2VJbnQoYlsyXSwxMCkpKSxiPUMmJihmPT13JiZnPT13JiZoPT13fHxmPT14JiZnPT14JiZoPT14fHxmPT15JiZnPT15JiZoPT15KSksYj0hYjtiJiYoZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KHIpLGEoYykpfWZ1bmN0aW9uIEkoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1IPj1uKWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoRXJyb3IoXCJcIitcbm4rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTtlbHNle3ZhciBhPWRvY3VtZW50LmhpZGRlbjtpZighMD09PWF8fHZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsZz1wLmEub2Zmc2V0V2lkdGgsaD1xLmEub2Zmc2V0V2lkdGgsdigpO3I9c2V0VGltZW91dChJLDUwKX19dmFyIGU9bmV3IHQoaykscD1uZXcgdChrKSxxPW5ldyB0KGspLGY9LTEsZz0tMSxoPS0xLHc9LTEseD0tMSx5PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmRpcj1cImx0clwiO3UoZSxMKGMsXCJzYW5zLXNlcmlmXCIpKTt1KHAsTChjLFwic2VyaWZcIikpO3UocSxMKGMsXCJtb25vc3BhY2VcIikpO2QuYXBwZW5kQ2hpbGQoZS5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZC5hcHBlbmRDaGlsZChxLmEpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7dz1lLmEub2Zmc2V0V2lkdGg7eD1wLmEub2Zmc2V0V2lkdGg7eT1xLmEub2Zmc2V0V2lkdGg7SSgpO0EoZSxmdW5jdGlvbihhKXtmPWE7digpfSk7dShlLFxuTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7QShwLGZ1bmN0aW9uKGEpe2c9YTt2KCl9KTt1KHAsTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO0EocSxmdW5jdGlvbihhKXtoPWE7digpfSk7dShxLEwoYywnXCInK2MuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1COih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1CLHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUIucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCJpbXBvcnQgRm9udEZhY2VPYnNlcnZlciBmcm9tICdmb250ZmFjZW9ic2VydmVyJztcbmltcG9ydCB7IGZvbnRzIH0gZnJvbSAnfmNvbmZpZy9mb250cyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZm9udE9ic2VydmVycyA9IFtdO1xuXG4gIGlmIChzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhmb250cykuZm9yRWFjaChmb250ID0+IHtcbiAgICBjb25zdCBmID0gZm9udHNbZm9udF07XG5cbiAgICBpZiAoZi5mb250ZmFjZSkge1xuICAgICAgZm9udE9ic2VydmVycy5wdXNoKFxuICAgICAgICBuZXcgRm9udEZhY2VPYnNlcnZlcihmLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgIHdlaWdodDogZi53ZWlnaHQsXG4gICAgICAgICAgc3R5bGU6IGYuc3R5bGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGZvbnRPYnNlcnZlcnMubGVuZ3RoID49IDEpIHtcbiAgICBQcm9taXNlLmFsbChmb250T2JzZXJ2ZXJzKS50aGVuKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICAgIC8vIE9wdGltaXphdGlvbiBmb3IgUmVwZWF0IFZpZXdzXG4gICAgICBzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgdGhpc0FyZyA9IHRoaXNBcmcgfHwgd2luZG93O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgc2V0VmggPSAoKSA9PiB7XG4gICAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gIH07XG5cbiAgc2V0VmgoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNldFZoKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsIi8qIVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTcgSWNvTW9vbi5pb1xuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL3N2Z3h1c2VcbiAqIEB2ZXJzaW9uICAgMS4yLjZcbiAqL1xuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSAqL1xuLypnbG9iYWwgWERvbWFpblJlcXVlc3QsIE11dGF0aW9uT2JzZXJ2ZXIsIHdpbmRvdyAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBob2xkcyB4aHIgb2JqZWN0cyB0byBwcmV2ZW50IG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICAgIHZhciBjaGVja1VzZUVsZW1zO1xuICAgICAgICB2YXIgdGlkOyAvLyB0aW1lb3V0IGlkXG4gICAgICAgIHZhciBkZWJvdW5jZWRDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2VkQ2hlY2spO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAvLyBJbiBJRSA5LCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgY2FuIG9ubHkgYmUgc2VudCB1c2luZyBYRG9tYWluUmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IHdvdWxkIGZhaWwgaWYgQ09SUyBoZWFkZXJzIGFyZSBub3Qgc2V0LlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCBYRG9tYWluUmVxdWVzdCBzaG91bGQgb25seSBiZSB1c2VkIHdpdGggY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzLlxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0T3JpZ2luKGxvYykge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmIChsb2MucHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhID0gbG9jO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpICsgYS5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgb3JpZ2luO1xuICAgICAgICAgICAgdmFyIG9yaWdpbjI7XG4gICAgICAgICAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IGdldE9yaWdpbihsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgb3JpZ2luMiA9IGdldE9yaWdpbih1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkICYmIG9yaWdpbjIgIT09IFwiXCIgJiYgb3JpZ2luMiAhPT0gb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYRG9tYWluUmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgeGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuICAgICAgICBjaGVja1VzZUVsZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJhc2U7XG4gICAgICAgICAgICB2YXIgYmNyO1xuICAgICAgICAgICAgdmFyIGZhbGxiYWNrID0gXCJcIjsgLy8gb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGluIGNhc2Ugbm8gYmFzZSBwYXRoIHRvIFNWRyBmaWxlIHdhcyBnaXZlbiBhbmQgbm8gc3ltYm9sIGRlZmluaXRpb24gd2FzIGZvdW5kLlxuICAgICAgICAgICAgdmFyIGhhc2g7XG4gICAgICAgICAgICB2YXIgaHJlZjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGluUHJvZ3Jlc3NDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgaXNIaWRkZW47XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciB1cmw7XG4gICAgICAgICAgICB2YXIgdXNlcztcbiAgICAgICAgICAgIHZhciB4aHI7XG4gICAgICAgICAgICBmdW5jdGlvbiBvYnNlcnZlSWZEb25lKCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRvbmUgd2l0aCBtYWtpbmcgY2hhbmdlcywgc3RhcnQgd2F0Y2hpbmcgZm9yIGNoYWduZXMgaW4gRE9NIGFnYWluXG4gICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGluUHJvZ3Jlc3NDb3VudCA9PT0gMCkgeyAvLyBpZiBhbGwgeGhycyB3ZXJlIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gbWFrZSBzdXJlIHRvIHJlbW92ZSBvbGQgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUNoYW5nZXMoKTsgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0clVwZGF0ZUZ1bmMoc3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtzcGVjLmJhc2VdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlYy51c2VFbC5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbmxvYWRGdW5jKHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwieFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZShzdmcsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkVycm9yVGltZW91dCh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gc3RvcCB3YXRjaGluZyBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgIC8vIGZpbmQgYWxsIHVzZSBlbGVtZW50c1xuICAgICAgICAgICAgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWYgPSB1c2VzW2ldLmdldEF0dHJpYnV0ZShcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBocmVmLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBbXCJcIiwgXCJcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhc2UgPSB1cmxbMF07XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVybFsxXTtcbiAgICAgICAgICAgICAgICBpc0hpZGRlbiA9IGJjciAmJiBiY3IubGVmdCA9PT0gMCAmJiBiY3IucmlnaHQgPT09IDAgJiYgYmNyLnRvcCA9PT0gMCAmJiBiY3IuYm90dG9tID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiY3IgJiYgYmNyLndpZHRoID09PSAwICYmIGJjci5oZWlnaHQgPT09IDAgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2UgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkcsIHRyeSB0byBmZXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpZiB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjayAmJiAhYmFzZS5sZW5ndGggJiYgaGFzaCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlc1tpXS5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VzW2ldLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIHVwZGF0aW5nIHhsaW5rOmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IGNhY2hlW2Jhc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWUgc2lnbmlmaWVzIHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIHdhcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0geGhyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb25sb2FkRnVuYyh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW2Jhc2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGlzIFVSTCBpZiB0aGUgdXNlIGVsZW1lbnQgd2FzIG5vdCBlbXB0eSBhbmQgbm8gcmVxdWVzdCB3YXMgc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FjaGVbYmFzZV0ub25sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgdHVybnMgb3V0IHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIGlzIG5vdCBuZWNlc3NhcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWJvcnQgdGhlIGluLXByb2dyZXNzIHhoci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtiYXNlXS5vbmxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2UubGVuZ3RoICYmIGNhY2hlW2Jhc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXMgPSBcIlwiO1xuICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aW5Mb2FkO1xuICAgICAgICB3aW5Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTsgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2FkIGV2ZW50IGZpcmVzIHdoZW4gYWxsIHJlc291cmNlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcsIHdoaWNoIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBTVkcgdXNlIGVsZW1lbnRzIGFyZSBlbXB0eS5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBhIGxpc3RlbmVyIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZCwgaW5pdGlhbGl6ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHdpbkxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0ICdzdmd4dXNlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge307XG4iLCJpbXBvcnQgeyBtZWRpYXF1ZXJpZXMgfSBmcm9tICd+Y29uZmlnL21lZGlhcXVlcmllcyc7XG5cbi8vIHNhbWUgdXNhZ2UgYXMgdGhlIG1lZGlhcXVlcnktc2Nzcy1taXhpbiwganVzdCBwcm92aWRlIHRoZVxuLy8gc2hvcnRjb2RlIHVzZWQgaW4gdGhlIHNjc3MtZmlsZS4gdGhpcyBtb2R1bGUgd2lsbCByZXR1cm4gdHJ1ZVxuLy8gaWYgdGhlIGdpdmVuIG1lZGlhcXVlcnkgbWF0Y2hlc1xuZXhwb3J0IGRlZmF1bHQgc2hvcnRjb2RlID0+IHtcbiAgY29uc3QgcXVlcnlWYWx1ZSA9IG1lZGlhcXVlcmllc1tzaG9ydGNvZGVdO1xuICBsZXQgbWVkaWFxdWVyeTtcblxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcihxdWVyeVZhbHVlKSkge1xuICAgIG1lZGlhcXVlcnkgPSBgKG1pbi13aWR0aDogJHtxdWVyeVZhbHVlfXB4KWA7XG4gIH0gZWxzZSB7XG4gICAgbWVkaWFxdWVyeSA9IHF1ZXJ5VmFsdWU7XG4gIH1cblxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFxdWVyeSkubWF0Y2hlcztcbn07XG4iLCIvLyBZb3UgY2FuIGltcG9ydCBhbnl0aGluZyB5b3Ugd2FudCBoZXJlLCBucG0tbW9kdWxlcywgb3RoZXIgZmlsZXMgZXRjLiBwcC5cbi8vIEV4YW1wbGVzOlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vXG4vLyBUaGVyZSBhcmUgc2hvcnRjdXRzIGZvciBpbXBvcnRpbmcgdGhlIHNoYXJlZCAuanNvbiBjb25maWcgZmlsZXNcbi8vIGltcG9ydCBjb25maWcgZnJvbSAnfmNvbmZpZy9tZWRpYXF1ZXJpZXMnXG4vL1xuLy8gYW5kIGEgc2hvcnRjdXQgZm9yIGltcG9ydGluZyBhIGZpbGUgZnJvbSB0aGUgbm9kZV9tb2R1bGVzLWZvbGRlclxuLy8gaW1wb3J0IHNvbWVsaWIgZnJvbSAnI21vZHVsZS9zb21lbGliL2Rpc3Qvc29tZWZpbGUnO1xuLy9cbi8vIGFuZCBvdGhlciBoZWxwZXJzIGZvciB2ZW5kb3IvZ2xvYmFsL2hlbHBlclxuLy8gaW1wb3J0IG1lZGlhcXVlcnkgZnJvbSAnfmhlbHBlci9tZWRpYXF1ZXJ5Jztcbi8vIGltcG9ydCBmb250bG9hZGVyIGZyb20gJ35nbG9iYWwvZm9udGxvYWRlcic7XG4vLyBpbXBvcnQgc29tZWZpbGUgZnJvbSAnfnZlbmRvci9zb21lc2NyaXB0Jztcbi8vXG4vLyBBbmQgZmluYWxseTogYSBzaG9ydGN1dCB0byBpbXBvcnQgcGF0dGVybnPigJR5b3UgZG9uJ3QgaGF2ZSB0byBzcGVjaWZ5XG4vLyB0aGUgZnVsbCBwYXRoLCBiZWNhdXNlIHBhdHRlcm4tbmFtZXMgc2hvdWxkIGJlIHVuaXF1ZSBhbnl3YXk6XG4vLyBpbXBvcnQgYnV0dG9uIGZyb20gJ35wYXR0ZXJuL2J1dHRvbic7XG5pbXBvcnQgbWVkaWFxdWVyeSBmcm9tICd+aGVscGVyL21lZGlhcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCAoc2NvcGUgPSBkb2N1bWVudCkgPT4ge1xuICBjb25zdCBleGFtcGxlcyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1leGFtcGxlJyk7XG4gIGV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgaWYgKG1lZGlhcXVlcnkoJ2wnKSkge1xuICAgICAgY29uc29sZS5sb2coYERvaW5nIHNvbWV0aGluZyB3aXRoICR7ZXhhbXBsZX0gYWJvdmUgYnJlYWtwb2ludCBMYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBEb2luZyBzb21ldGhpbmcgd2l0aCAke2V4YW1wbGV9IGJlbG93IGJyZWFrcG9pbnQgTGApO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuLzMtZ2xvYmFsLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5pbXBvcnQgKiBhcyBwYXR0ZXJucyBmcm9tICcuLi9wYXR0ZXJucy8qKi8hKCoudGVzdHwqLmNvbmZpZykuanMnO1xuXG4vLyBqcyBoYXMgbG9hZGVk4oCUcmVtb3ZlIHRoZSBuby1qcyBjbGFzc1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbi8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4vLyBidXQgZXhjbHVkZSB0ZXN0IGFuZCBjb25maWcgZmlsZXMg4oCUIHRob3NlIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbltnbG9iYWxzLCBwYXR0ZXJuc10uZm9yRWFjaChtb2R1bGUgPT4ge1xuICBPYmplY3Qua2V5cyhtb2R1bGUpLmZvckVhY2goaSA9PiB7XG4gICAgbW9kdWxlW2ldKCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiZm9udE9ic2VydmVycyIsInNlc3Npb25TdG9yYWdlIiwiZm9udHNMb2FkZWQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIk9iamVjdCIsImtleXMiLCJmb250cyIsImZvckVhY2giLCJmb250IiwiZiIsImZvbnRmYWNlIiwicHVzaCIsIkZvbnRGYWNlT2JzZXJ2ZXIiLCJmYW1pbHkiLCJyZXBsYWNlIiwid2VpZ2h0Iiwic3R5bGUiLCJsZW5ndGgiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsIndpbmRvdyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwiaSIsImNhbGwiLCJzZXRWaCIsInZoIiwiaW5uZXJIZWlnaHQiLCJzZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzaG9ydGNvZGUiLCJxdWVyeVZhbHVlIiwibWVkaWFxdWVyaWVzIiwibWVkaWFxdWVyeSIsIk51bWJlciIsImlzSW50ZWdlciIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2NvcGUiLCJleGFtcGxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJleGFtcGxlIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsImdsb2JhbHMiLCJwYXR0ZXJucyIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FBQSxxRUFBcUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsQUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsOEdBQThHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDhHQUE4RyxDQUFDO0NBQzVrQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsOEdBQThHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDRFQUE0RSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQztDQUNsVixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDRMQUE0TCxDQUFDLENBQUMsQ0FBQyxJQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEFBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsbURBQW1ELENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzE0QixTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDZCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2pPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztDQUN6ZixDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO0NBQ3JmLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDcGYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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
