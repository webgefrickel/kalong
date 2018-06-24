(function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var fontfaceobserver = createCommonjsModule(function (module) {
	  /* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function () {
	    var f,
	        g = [];function l(a) {
	      g.push(a);1 == g.length && f();
	    }function m() {
	      for (; g.length;) g[0](), g.shift();
	    }f = function f() {
	      setTimeout(m);
	    };function n(a) {
	      this.a = p;this.b = void 0;this.f = [];var b = this;try {
	        a(function (a) {
	          q(b, a);
	        }, function (a) {
	          r(b, a);
	        });
	      } catch (c) {
	        r(b, c);
	      }
	    }var p = 2;function t(a) {
	      return new n(function (b, c) {
	        c(a);
	      });
	    }function u(a) {
	      return new n(function (b) {
	        b(a);
	      });
	    }function q(a, b) {
	      if (a.a == p) {
	        if (b == a) throw new TypeError();var c = !1;try {
	          var d = b && b.then;if (null != b && "object" == typeof b && "function" == typeof d) {
	            d.call(b, function (b) {
	              c || q(a, b);c = !0;
	            }, function (b) {
	              c || r(a, b);c = !0;
	            });return;
	          }
	        } catch (e) {
	          c || r(a, e);return;
	        }a.a = 0;a.b = b;v(a);
	      }
	    }
	    function r(a, b) {
	      if (a.a == p) {
	        if (b == a) throw new TypeError();a.a = 1;a.b = b;v(a);
	      }
	    }function v(a) {
	      l(function () {
	        if (a.a != p) for (; a.f.length;) {
	          var b = a.f.shift(),
	              c = b[0],
	              d = b[1],
	              e = b[2],
	              b = b[3];try {
	            0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b));
	          } catch (h) {
	            b(h);
	          }
	        }
	      });
	    }n.prototype.g = function (a) {
	      return this.c(void 0, a);
	    };n.prototype.c = function (a, b) {
	      var c = this;return new n(function (d, e) {
	        c.f.push([a, b, d, e]);v(c);
	      });
	    };
	    function w(a) {
	      return new n(function (b, c) {
	        function d(c) {
	          return function (d) {
	            h[c] = d;e += 1;e == a.length && b(h);
	          };
	        }var e = 0,
	            h = [];0 == a.length && b(h);for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c);
	      });
	    }function x(a) {
	      return new n(function (b, c) {
	        for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c);
	      });
	    }window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
	  })();

	  (function () {
	    function l(a, b) {
	      document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
	    }function m(a) {
	      document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
	        document.removeEventListener("DOMContentLoaded", c);a();
	      }) : document.attachEvent("onreadystatechange", function k() {
	        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a();
	      });
	    }function r(a) {
	      this.a = document.createElement("div");this.a.setAttribute("aria-hidden", "true");this.a.appendChild(document.createTextNode(a));this.b = document.createElement("span");this.c = document.createElement("span");this.h = document.createElement("span");this.f = document.createElement("span");this.g = -1;this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);
	    }
	    function t(a, b) {
	      a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
	    }function y(a) {
	      var b = a.a.offsetWidth,
	          c = b + 100;a.f.style.width = c + "px";a.c.scrollLeft = c;a.b.scrollLeft = a.b.scrollWidth + 100;return a.g !== b ? (a.g = b, !0) : !1;
	    }function z(a, b) {
	      function c() {
	        var a = k;y(a) && a.a.parentNode && b(a.g);
	      }var k = a;l(a.b, c);l(a.c, c);y(a);
	    }function A(a, b) {
	      var c = b || {};this.family = a;this.style = c.style || "normal";this.weight = c.weight || "normal";this.stretch = c.stretch || "normal";
	    }var B = null,
	        C = null,
	        E = null,
	        F = null;function G() {
	      if (null === C) if (J() && /Apple/.test(window.navigator.vendor)) {
	        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C = !!a && 603 > parseInt(a[1], 10);
	      } else C = !1;return C;
	    }function J() {
	      null === F && (F = !!document.fonts);return F;
	    }
	    function K() {
	      if (null === E) {
	        var a = document.createElement("div");try {
	          a.style.font = "condensed 100px sans-serif";
	        } catch (b) {}E = "" !== a.style.font;
	      }return E;
	    }function L(a, b) {
	      return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
	    }
	    A.prototype.load = function (a, b) {
	      var c = this,
	          k = a || "BESbswy",
	          q = 0,
	          D = b || 3E3,
	          H = new Date().getTime();return new Promise(function (a, b) {
	        if (J() && !G()) {
	          var M = new Promise(function (a, b) {
	            function e() {
	              new Date().getTime() - H >= D ? b() : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) {
	                1 <= c.length ? a() : setTimeout(e, 25);
	              }, function () {
	                b();
	              });
	            }e();
	          }),
	              N = new Promise(function (a, c) {
	            q = setTimeout(c, D);
	          });Promise.race([N, M]).then(function () {
	            clearTimeout(q);a(c);
	          }, function () {
	            b(c);
	          });
	        } else m(function () {
	          function u() {
	            var b;if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (f == v && g == v && h == v || f == w && g == w && h == w || f == x && g == x && h == x)), b = !b;b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(q), a(c));
	          }function I() {
	            if (new Date().getTime() - H >= D) d.parentNode && d.parentNode.removeChild(d), b(c);else {
	              var a = document.hidden;if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = n.a.offsetWidth, h = p.a.offsetWidth, u();q = setTimeout(I, 50);
	            }
	          }var e = new r(k),
	              n = new r(k),
	              p = new r(k),
	              f = -1,
	              g = -1,
	              h = -1,
	              v = -1,
	              w = -1,
	              x = -1,
	              d = document.createElement("div");d.dir = "ltr";t(e, L(c, "sans-serif"));t(n, L(c, "serif"));t(p, L(c, "monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v = e.a.offsetWidth;w = n.a.offsetWidth;x = p.a.offsetWidth;I();z(e, function (a) {
	            f = a;u();
	          });t(e, L(c, '"' + c.family + '",sans-serif'));z(n, function (a) {
	            g = a;u();
	          });t(n, L(c, '"' + c.family + '",serif'));
	          z(p, function (a) {
	            h = a;u();
	          });t(p, L(c, '"' + c.family + '",monospace'));
	        });
	      });
	    };module.exports = A;
	  })();
	});

	var breakpoints = {
		s: 480,
		m: 640,
		l: 720,
		xl: 960,
		xxl: 1100,
		xxxl: 1400,
		custom: "(max-width: 30em)"
	};
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
	      fontObservers.push(new fontfaceobserver(f.family.replace(/'/g, ''), {
	        weight: f.weight,
	        style: f.style
	      }));
	    }
	  });

	  if (fontObservers.length >= 1) {
	    Promise.all(fontObservers).then(() => {
	      document.documentElement.classList.add('fonts-loaded');
	      // Optimization for Repeat Views
	      sessionStorage.fontsLoaded = true;
	    });
	  }
	});

	// same usage as the mediaquery-scss-mixin, just
	// provide the shortcode used in the scss-file and if it
	// is a custom query. this module return true if the
	// given breakpoint matches or false if it doesnt
	var mediaquery = ((shortcode, custom = false) => {
	  const query = custom ? breakpoints[shortcode] : `(min-width: ${breakpoints[shortcode]}px)`;

	  return window.matchMedia(query).matches;
	});

	/**
	 * @param {string} selector   One or more CSS selectors separated by commas
	 * @param {Element} [parent]  The element to look inside of
	 * @return {?Element}         The element found, if any
	 */

	function select(selector, parent) {
		// Shortcut with specified-but-null parent
		if (arguments.length === 2 && !parent) {
			return null;
		}
		return (parent || document).querySelector(selector);
	}

	/**
	 * @param {string} selector   One or more CSS selectors separated by commas
	 * @param {Element} [parent]  The element to look inside of
	 * @return {boolean}          Whether it's been found
	 */
	select.exists = function (selector, parent) {
		if (arguments.length === 2) {
			return Boolean(select(selector, parent));
		}
		return Boolean(select(selector));
	};

	/**
	 * @param {string} selector               One or more CSS selectors separated by commas
	 * @param {Element|Element[]} [parent]    The element or list of elements to look inside of
	 * @return {Element[]}                    An array of elements found
	 */
	select.all = function (selector, parent) {
		// Shortcut with specified-but-null parent
		if (arguments.length === 2 && !parent) {
			return [];
		}

		// Can be: select.all('selector') or select.all('selector', singleElementOrDocument)
		if (!parent || typeof parent.querySelectorAll === 'function') {
			return Array.apply(null, (parent || document).querySelectorAll(selector));
		}

		var current;
		var i;
		var ii;
		var all;
		for (i = 0; i < parent.length; i++) {
			current = parent[i].querySelectorAll(selector);
			if (!all) {
				all = Array.apply(null, current);
				continue;
			}
			for (ii = 0; ii < current.length; ii++) {
				if (all.indexOf(current[ii]) < 0) {
					all.push(current[ii]);
				}
			}
		}
		return all;
	};

	var selectDom = select;

	// You can import anything you want here, npm-modules, other files etc. pp.

	var _patterns_components$example$example = ((scope = document) => {
	  const examples = selectDom.all('.js-example', scope);

	  examples.forEach(example => {
	    if (mediaquery('l')) {
	      console.log(`Doing something with ${example} above breakpoint L`);
	    } else {
	      console.log(`Doing something with ${example} below breakpoint L`);
	    }
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
	        var debouncedCheck = function debouncedCheck() {
	            clearTimeout(tid);
	            tid = setTimeout(checkUseElems, 100);
	        };
	        var unobserveChanges = function unobserveChanges() {
	            return;
	        };
	        var observeChanges = function observeChanges() {
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
	                unobserveChanges = function unobserveChanges() {
	                    try {
	                        observer.disconnect();
	                        window.removeEventListener("resize", debouncedCheck, false);
	                        window.removeEventListener("orientationchange", debouncedCheck, false);
	                    } catch (ignore) {}
	                };
	            } else {
	                document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
	                unobserveChanges = function unobserveChanges() {
	                    document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
	                    window.removeEventListener("resize", debouncedCheck, false);
	                    window.removeEventListener("orientationchange", debouncedCheck, false);
	                };
	            }
	        };
	        var createRequest = function createRequest(url) {
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
	        checkUseElems = function checkUseElems() {
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
	                if (inProgressCount === 0) {
	                    // if all xhrs were resolved
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
	                href = uses[i].getAttribute("href") || uses[i].getAttributeNS(xlinkNS, "href") || uses[i].getAttribute("xlink:href");
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
	        var _winLoad;
	        _winLoad = function winLoad() {
	            window.removeEventListener("load", _winLoad, false); // to prevent memory leaks
	            tid = setTimeout(checkUseElems, 0);
	        };
	        if (document.readyState !== "complete") {
	            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
	            window.addEventListener("load", _winLoad, false);
	        } else {
	            // No need to add a listener if the document is already loaded, initialize immediately.
	            _winLoad();
	        }
	    }
	})();

	/* eslint-disable no-unused-vars */

	var _patterns_components$icon$icon = (() => {});

	const globals = {
	  fontloader: _globals_fontloader
	};
	Object.freeze(globals);
	const patterns = {
	  components$example$example: _patterns_components$example$example,
	  components$icon$icon: _patterns_components$icon$icon
	};
	Object.freeze(patterns);

	// additional sanity check for modern browsers—and then, enhance!

	if ('visibilityState' in document) {
	  // remove the no-js class
	  document.documentElement.classList.remove('no-js');

	  // load and execute all scripts from global and all patterns automatically
	  // but exclude test and config files — those should not be executed
	  [globals, patterns].forEach(items => {
	    Object.keys(items).forEach(i => {
	      items[i]();
	    });
	  });
	}

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zZWxlY3QtZG9tL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb21wb25lbnRzL2ljb24vaWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjAuMTMgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7dmFyIGYsZz1bXTtmdW5jdGlvbiBsKGEpe2cucHVzaChhKTsxPT1nLmxlbmd0aCYmZigpfWZ1bmN0aW9uIG0oKXtmb3IoO2cubGVuZ3RoOylnWzBdKCksZy5zaGlmdCgpfWY9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KG0pfTtmdW5jdGlvbiBuKGEpe3RoaXMuYT1wO3RoaXMuYj12b2lkIDA7dGhpcy5mPVtdO3ZhciBiPXRoaXM7dHJ5e2EoZnVuY3Rpb24oYSl7cShiLGEpfSxmdW5jdGlvbihhKXtyKGIsYSl9KX1jYXRjaChjKXtyKGIsYyl9fXZhciBwPTI7ZnVuY3Rpb24gdChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtjKGEpfSl9ZnVuY3Rpb24gdShhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYil7YihhKX0pfWZ1bmN0aW9uIHEoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgYz0hMTt0cnl7dmFyIGQ9YiYmYi50aGVuO2lmKG51bGwhPWImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkKXtkLmNhbGwoYixmdW5jdGlvbihiKXtjfHxxKGEsYik7Yz0hMH0sZnVuY3Rpb24oYil7Y3x8cihhLGIpO2M9ITB9KTtyZXR1cm59fWNhdGNoKGUpe2N8fHIoYSxlKTtyZXR1cm59YS5hPTA7YS5iPWI7dihhKX19XG5mdW5jdGlvbiByKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7YS5hPTE7YS5iPWI7dihhKX19ZnVuY3Rpb24gdihhKXtsKGZ1bmN0aW9uKCl7aWYoYS5hIT1wKWZvcig7YS5mLmxlbmd0aDspe3ZhciBiPWEuZi5zaGlmdCgpLGM9YlswXSxkPWJbMV0sZT1iWzJdLGI9YlszXTt0cnl7MD09YS5hP1wiZnVuY3Rpb25cIj09dHlwZW9mIGM/ZShjLmNhbGwodm9pZCAwLGEuYikpOmUoYS5iKToxPT1hLmEmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2UoZC5jYWxsKHZvaWQgMCxhLmIpKTpiKGEuYikpfWNhdGNoKGgpe2IoaCl9fX0pfW4ucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYyh2b2lkIDAsYSl9O24ucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBuZXcgbihmdW5jdGlvbihkLGUpe2MuZi5wdXNoKFthLGIsZCxlXSk7dihjKX0pfTtcbmZ1bmN0aW9uIHcoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gZnVuY3Rpb24oZCl7aFtjXT1kO2UrPTE7ZT09YS5sZW5ndGgmJmIoaCl9fXZhciBlPTAsaD1bXTswPT1hLmxlbmd0aCYmYihoKTtmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srPTEpdShhW2tdKS5jKGQoayksYyl9KX1mdW5jdGlvbiB4KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCs9MSl1KGFbZF0pLmMoYixjKX0pfTt3aW5kb3cuUHJvbWlzZXx8KHdpbmRvdy5Qcm9taXNlPW4sd2luZG93LlByb21pc2UucmVzb2x2ZT11LHdpbmRvdy5Qcm9taXNlLnJlamVjdD10LHdpbmRvdy5Qcm9taXNlLnJhY2U9eCx3aW5kb3cuUHJvbWlzZS5hbGw9dyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbj1uLnByb3RvdHlwZS5jLHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdPW4ucHJvdG90eXBlLmcpO30oKSk7XG5cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiByKGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB0KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHkoYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIHooYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt5KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eShhKX07ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEI9bnVsbCxDPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUMpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Qz0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEM9ITE7cmV0dXJuIEN9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixxPTAsRD1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQ/YigpOmRvY3VtZW50LmZvbnRzLmxvYWQoTChjLCdcIicrYy5mYW1pbHkrJ1wiJyksaykudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sZnVuY3Rpb24oKXtiKCl9KX1lKCl9KSxOPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7cT1zZXRUaW1lb3V0KGMsRCl9KTtQcm9taXNlLnJhY2UoW04sTV0pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocSk7YShjKX0sZnVuY3Rpb24oKXtiKGMpfSl9ZWxzZSBtKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdSgpe3ZhciBiO2lmKGI9LTEhPVxuZiYmLTEhPWd8fC0xIT1mJiYtMSE9aHx8LTEhPWcmJi0xIT1oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUImJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxCPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QiYmKGY9PXYmJmc9PXYmJmg9PXZ8fGY9PXcmJmc9PXcmJmg9PXd8fGY9PXgmJmc9PXgmJmg9PXgpKSxiPSFiO2ImJihkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQocSksYShjKSl9ZnVuY3Rpb24gSSgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQpZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYihjKTtlbHNle3ZhciBhPWRvY3VtZW50LmhpZGRlbjtpZighMD09PWF8fHZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsXG5nPW4uYS5vZmZzZXRXaWR0aCxoPXAuYS5vZmZzZXRXaWR0aCx1KCk7cT1zZXRUaW1lb3V0KEksNTApfX12YXIgZT1uZXcgcihrKSxuPW5ldyByKGspLHA9bmV3IHIoayksZj0tMSxnPS0xLGg9LTEsdj0tMSx3PS0xLHg9LTEsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuZGlyPVwibHRyXCI7dChlLEwoYyxcInNhbnMtc2VyaWZcIikpO3QobixMKGMsXCJzZXJpZlwiKSk7dChwLEwoYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQobi5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt2PWUuYS5vZmZzZXRXaWR0aDt3PW4uYS5vZmZzZXRXaWR0aDt4PXAuYS5vZmZzZXRXaWR0aDtJKCk7eihlLGZ1bmN0aW9uKGEpe2Y9YTt1KCl9KTt0KGUsTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7eihuLGZ1bmN0aW9uKGEpe2c9YTt1KCl9KTt0KG4sTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO1xueihwLGZ1bmN0aW9uKGEpe2g9YTt1KCl9KTt0KHAsTChjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUE6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUEsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9QS5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsImltcG9ydCBPYnNlcnZlciBmcm9tICcjbW9kdWxlL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlcic7XG5pbXBvcnQgeyBmb250cyB9IGZyb20gJyNzaGFyZWRjb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGZvbnRPYnNlcnZlcnMgPSBbXTtcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZm9udHMpLmZvckVhY2goZm9udCA9PiB7XG4gICAgY29uc3QgZiA9IGZvbnRzW2ZvbnRdO1xuXG4gICAgaWYgKGYuZm9udGZhY2UpIHtcbiAgICAgIGZvbnRPYnNlcnZlcnMucHVzaChcbiAgICAgICAgbmV3IE9ic2VydmVyKGYuZmFtaWx5LnJlcGxhY2UoLycvZywgJycpLCB7XG4gICAgICAgICAgd2VpZ2h0OiBmLndlaWdodCxcbiAgICAgICAgICBzdHlsZTogZi5zdHlsZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgICAvLyBPcHRpbWl6YXRpb24gZm9yIFJlcGVhdCBWaWV3c1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSAnI3NoYXJlZGNvbmZpZyc7XG5cbi8vIHNhbWUgdXNhZ2UgYXMgdGhlIG1lZGlhcXVlcnktc2Nzcy1taXhpbiwganVzdFxuLy8gcHJvdmlkZSB0aGUgc2hvcnRjb2RlIHVzZWQgaW4gdGhlIHNjc3MtZmlsZSBhbmQgaWYgaXRcbi8vIGlzIGEgY3VzdG9tIHF1ZXJ5LiB0aGlzIG1vZHVsZSByZXR1cm4gdHJ1ZSBpZiB0aGVcbi8vIGdpdmVuIGJyZWFrcG9pbnQgbWF0Y2hlcyBvciBmYWxzZSBpZiBpdCBkb2VzbnRcbmV4cG9ydCBkZWZhdWx0IChzaG9ydGNvZGUsIGN1c3RvbSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gKGN1c3RvbSkgPyBicmVha3BvaW50c1tzaG9ydGNvZGVdIDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHNbc2hvcnRjb2RlXX1weClgO1xuXG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgICBPbmUgb3IgbW9yZSBDU1Mgc2VsZWN0b3JzIHNlcGFyYXRlZCBieSBjb21tYXNcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3BhcmVudF0gIFRoZSBlbGVtZW50IHRvIGxvb2sgaW5zaWRlIG9mXG4gKiBAcmV0dXJuIHs/RWxlbWVudH0gICAgICAgICBUaGUgZWxlbWVudCBmb3VuZCwgaWYgYW55XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3RvciwgcGFyZW50KSB7XG5cdC8vIFNob3J0Y3V0IHdpdGggc3BlY2lmaWVkLWJ1dC1udWxsIHBhcmVudFxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhcGFyZW50KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAgIE9uZSBvciBtb3JlIENTUyBzZWxlY3RvcnMgc2VwYXJhdGVkIGJ5IGNvbW1hc1xuICogQHBhcmFtIHtFbGVtZW50fSBbcGFyZW50XSAgVGhlIGVsZW1lbnQgdG8gbG9vayBpbnNpZGUgb2ZcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgIFdoZXRoZXIgaXQncyBiZWVuIGZvdW5kXG4gKi9cbnNlbGVjdC5leGlzdHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHBhcmVudCkge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuXHRcdHJldHVybiBCb29sZWFuKHNlbGVjdChzZWxlY3RvciwgcGFyZW50KSk7XG5cdH1cblx0cmV0dXJuIEJvb2xlYW4oc2VsZWN0KHNlbGVjdG9yKSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAgICAgICAgICAgICAgIE9uZSBvciBtb3JlIENTUyBzZWxlY3RvcnMgc2VwYXJhdGVkIGJ5IGNvbW1hc1xuICogQHBhcmFtIHtFbGVtZW50fEVsZW1lbnRbXX0gW3BhcmVudF0gICAgVGhlIGVsZW1lbnQgb3IgbGlzdCBvZiBlbGVtZW50cyB0byBsb29rIGluc2lkZSBvZlxuICogQHJldHVybiB7RWxlbWVudFtdfSAgICAgICAgICAgICAgICAgICAgQW4gYXJyYXkgb2YgZWxlbWVudHMgZm91bmRcbiAqL1xuc2VsZWN0LmFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XG5cdC8vIFNob3J0Y3V0IHdpdGggc3BlY2lmaWVkLWJ1dC1udWxsIHBhcmVudFxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhcGFyZW50KSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gQ2FuIGJlOiBzZWxlY3QuYWxsKCdzZWxlY3RvcicpIG9yIHNlbGVjdC5hbGwoJ3NlbGVjdG9yJywgc2luZ2xlRWxlbWVudE9yRG9jdW1lbnQpXG5cdGlmICghcGFyZW50IHx8IHR5cGVvZiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5hcHBseShudWxsLCAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cdH1cblxuXHR2YXIgY3VycmVudDtcblx0dmFyIGk7XG5cdHZhciBpaTtcblx0dmFyIGFsbDtcblx0Zm9yIChpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xuXHRcdGN1cnJlbnQgPSBwYXJlbnRbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdFx0aWYgKCFhbGwpIHtcblx0XHRcdGFsbCA9IEFycmF5LmFwcGx5KG51bGwsIGN1cnJlbnQpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGZvciAoaWkgPSAwOyBpaSA8IGN1cnJlbnQubGVuZ3RoOyBpaSsrKSB7XG5cdFx0XHRpZiAoYWxsLmluZGV4T2YoY3VycmVudFtpaV0pIDwgMCkge1xuXHRcdFx0XHRhbGwucHVzaChjdXJyZW50W2lpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhbGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcbiIsIi8vIFlvdSBjYW4gaW1wb3J0IGFueXRoaW5nIHlvdSB3YW50IGhlcmUsIG5wbS1tb2R1bGVzLCBvdGhlciBmaWxlcyBldGMuIHBwLlxuLy8gRXhhbXBsZXM6XG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuLy9cbi8vIFRoZXJlIGlzIGEgc2hvcnRjdXQgZm9yIGltcG9ydGluZyB0aGUgU2Fzcy1zaGFyZWQuanNvbiBjb25maWdcbi8vIGltcG9ydCBjb25maWcgZnJvbSAnI3NoYXJlZGNvbmZpZydcbi8vXG4vLyBhbmQgYSBzaG9ydGN1dCBmb3IgaW1wb3J0aW5nIGEgZmlsZSBmcm9tIHRoZSBub2RlX21vZHVsZXMtZm9sZGVyXG4vLyBpbXBvcnQgc29tZWxpYiBmcm9tICcjbW9kdWxlL3NvbWVsaWIvZGlzdC9zb21lZmlsZSc7XG4vL1xuLy8gYW5kIG90aGVyIGhlbHBlcnMgZm9yIHZlbmRvci9nbG9iYWwvaGVscGVyXG4vLyBpbXBvcnQgbWVkaWFxdWVyeSBmcm9tICcjaGVscGVyL21lZGlhcXVlcnknO1xuLy8gaW1wb3J0IGZvbnRsb2FkZXIgZnJvbSAnI2dsb2JhbC9mb250bG9hZGVyJztcbi8vIGltcG9ydCBzb21lZmlsZSBmcm9tICcjdmVuZG9yL3NvbWVmaWxlJztcbi8vXG4vLyBBbmQgZmluYWxseTogYSBzaG9ydGN1dCB0byBpbXBvcnQgcGF0dGVybnPigJR5b3UgZG9uJ3QgaGF2ZSB0byBzcGVjaWZ5XG4vLyB0aGUgZnVsbCBwYXRoLCBiZWNhdXNlIHBhdHRlcm4tbmFtZXMgc2hvdWxkIGJlIHVuaXF1ZSBhbnl3YXk6XG4vLyBpbXBvcnQgYnV0dG9uIGZyb20gJyNwYXR0ZXJuL2J1dHRvbic7XG5cbmltcG9ydCBtZWRpYXF1ZXJ5IGZyb20gJyNoZWxwZXIvbWVkaWFxdWVyeSc7XG5pbXBvcnQgc2VsZWN0IGZyb20gJ3NlbGVjdC1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCAoc2NvcGUgPSBkb2N1bWVudCkgPT4ge1xuICBjb25zdCBleGFtcGxlcyA9IHNlbGVjdC5hbGwoJy5qcy1leGFtcGxlJywgc2NvcGUpO1xuXG4gIGV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgaWYgKG1lZGlhcXVlcnkoJ2wnKSkge1xuICAgICAgY29uc29sZS5sb2coYERvaW5nIHNvbWV0aGluZyB3aXRoICR7ZXhhbXBsZX0gYWJvdmUgYnJlYWtwb2ludCBMYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBEb2luZyBzb21ldGhpbmcgd2l0aCAke2V4YW1wbGV9IGJlbG93IGJyZWFrcG9pbnQgTGApO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyohXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNyBJY29Nb29uLmlvXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2V5YW1vb24vc3ZneHVzZVxuICogQHZlcnNpb24gICAxLjIuNlxuICovXG4vKmpzbGludCBicm93c2VyOiB0cnVlICovXG4vKmdsb2JhbCBYRG9tYWluUmVxdWVzdCwgTXV0YXRpb25PYnNlcnZlciwgd2luZG93ICovXG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIGhvbGRzIHhociBvYmplY3RzIHRvIHByZXZlbnQgbXVsdGlwbGUgcmVxdWVzdHNcbiAgICAgICAgdmFyIGNoZWNrVXNlRWxlbXM7XG4gICAgICAgIHZhciB0aWQ7IC8vIHRpbWVvdXQgaWRcbiAgICAgICAgdmFyIGRlYm91bmNlZENoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpZCk7XG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDEwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXI7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZWRDaGVjayk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3JlYXRlUmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgIC8vIEluIElFIDksIGNyb3NzIG9yaWdpbiByZXF1ZXN0cyBjYW4gb25seSBiZSBzZW50IHVzaW5nIFhEb21haW5SZXF1ZXN0LlxuICAgICAgICAgICAgLy8gWERvbWFpblJlcXVlc3Qgd291bGQgZmFpbCBpZiBDT1JTIGhlYWRlcnMgYXJlIG5vdCBzZXQuXG4gICAgICAgICAgICAvLyBUaGVyZWZvcmUsIFhEb21haW5SZXF1ZXN0IHNob3VsZCBvbmx5IGJlIHVzZWQgd2l0aCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmlnaW4obG9jKSB7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgaWYgKGxvYy5wcm90b2NvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBsb2M7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICBhLmhyZWYgPSBsb2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhLnByb3RvY29sLnJlcGxhY2UoLzovZywgXCJcIikgKyBhLmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciBvcmlnaW47XG4gICAgICAgICAgICB2YXIgb3JpZ2luMjtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgb3JpZ2luID0gZ2V0T3JpZ2luKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBvcmlnaW4yID0gZ2V0T3JpZ2luKHVybCk7XG4gICAgICAgICAgICAgICAgaWYgKFJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID09PSB1bmRlZmluZWQgJiYgb3JpZ2luMiAhPT0gXCJcIiAmJiBvcmlnaW4yICE9PSBvcmlnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhEb21haW5SZXF1ZXN0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gWE1MSHR0cFJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB4bGlua05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG4gICAgICAgIGNoZWNrVXNlRWxlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmFzZTtcbiAgICAgICAgICAgIHZhciBiY3I7XG4gICAgICAgICAgICB2YXIgZmFsbGJhY2sgPSBcIlwiOyAvLyBvcHRpb25hbCBmYWxsYmFjayBVUkwgaW4gY2FzZSBubyBiYXNlIHBhdGggdG8gU1ZHIGZpbGUgd2FzIGdpdmVuIGFuZCBubyBzeW1ib2wgZGVmaW5pdGlvbiB3YXMgZm91bmQuXG4gICAgICAgICAgICB2YXIgaGFzaDtcbiAgICAgICAgICAgIHZhciBocmVmO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgaW5Qcm9ncmVzc0NvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBpc0hpZGRlbjtcbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIHVybDtcbiAgICAgICAgICAgIHZhciB1c2VzO1xuICAgICAgICAgICAgdmFyIHhocjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ic2VydmVJZkRvbmUoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZG9uZSB3aXRoIG1ha2luZyBjaGFuZ2VzLCBzdGFydCB3YXRjaGluZyBmb3IgY2hhZ25lcyBpbiBET00gYWdhaW5cbiAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaW5Qcm9ncmVzc0NvdW50ID09PSAwKSB7IC8vIGlmIGFsbCB4aHJzIHdlcmUgcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBtYWtlIHN1cmUgdG8gcmVtb3ZlIG9sZCBoYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlQ2hhbmdlcygpOyAvLyB3YXRjaCBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhdHRyVXBkYXRlRnVuYyhzcGVjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW3NwZWMuYmFzZV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJ4bGluazpocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjLnVzZUVsLmhhc0F0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ubG9hZEZ1bmMoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ4XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ZnO1xuICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgeC5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBzdmcgPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ZnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLndpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKHN2ZywgYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRXJyb3JUaW1lb3V0KHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBzdG9wIHdhdGNoaW5nIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgLy8gZmluZCBhbGwgdXNlIGVsZW1lbnRzXG4gICAgICAgICAgICB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIik7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGJjciA9IHVzZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhaWxlZCB0byBnZXQgYm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZSB1c2UgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBiY3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaHJlZiA9IHVzZXNbaV0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdXNlc1tpXS5nZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaHJlZiAmJiBocmVmLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhyZWYuc3BsaXQoXCIjXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFtcIlwiLCBcIlwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmFzZSA9IHVybFswXTtcbiAgICAgICAgICAgICAgICBoYXNoID0gdXJsWzFdO1xuICAgICAgICAgICAgICAgIGlzSGlkZGVuID0gYmNyICYmIGJjci5sZWZ0ID09PSAwICYmIGJjci5yaWdodCA9PT0gMCAmJiBiY3IudG9wID09PSAwICYmIGJjci5ib3R0b20gPT09IDA7XG4gICAgICAgICAgICAgICAgaWYgKGJjciAmJiBiY3Iud2lkdGggPT09IDAgJiYgYmNyLmhlaWdodCA9PT0gMCAmJiAhaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVzZSBlbGVtZW50IGlzIGVtcHR5XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsIFNWRywgdHJ5IHRvIGZldGNoIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGlmIHRoZXJlIGlzIG5vIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrICYmICFiYXNlLmxlbmd0aCAmJiBoYXNoICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSA9IGZhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VzW2ldLmhhc0F0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXNbaV0uc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJ4bGluazpocmVmXCIsIGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGUgdXBkYXRpbmcgeGxpbms6aHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyID0gY2FjaGVbYmFzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ1ZSBzaWduaWZpZXMgdGhhdCBwcmVwZW5kaW5nIHRoZSBTVkcgd2FzIG5vdCByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXR0clVwZGF0ZUZ1bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogaGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KGJhc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyID0gbmV3IFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB4aHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBvbmxvYWRGdW5jKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gb25FcnJvclRpbWVvdXQoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIGJhc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVbYmFzZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgVVJMIGlmIHRoZSB1c2UgZWxlbWVudCB3YXMgbm90IGVtcHR5IGFuZCBubyByZXF1ZXN0IHdhcyBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYWNoZVtiYXNlXS5vbmxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCB0dXJucyBvdXQgdGhhdCBwcmVwZW5kaW5nIHRoZSBTVkcgaXMgbm90IG5lY2Vzc2FyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhYm9ydCB0aGUgaW4tcHJvZ3Jlc3MgeGhyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhY2hlW2Jhc2VdLm9ubG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5sZW5ndGggJiYgY2FjaGVbYmFzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXR0clVwZGF0ZUZ1bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUVsOiB1c2VzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogaGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlcyA9IFwiXCI7XG4gICAgICAgICAgICBpblByb2dyZXNzQ291bnQgKz0gMTtcbiAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHdpbkxvYWQ7XG4gICAgICAgIHdpbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luTG9hZCwgZmFsc2UpOyAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgLy8gVGhlIGxvYWQgZXZlbnQgZmlyZXMgd2hlbiBhbGwgcmVzb3VyY2VzIGhhdmUgZmluaXNoZWQgbG9hZGluZywgd2hpY2ggYWxsb3dzIGRldGVjdGluZyB3aGV0aGVyIFNWRyB1c2UgZWxlbWVudHMgYXJlIGVtcHR5LlxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gYWRkIGEgbGlzdGVuZXIgaWYgdGhlIGRvY3VtZW50IGlzIGFscmVhZHkgbG9hZGVkLCBpbml0aWFsaXplIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgd2luTG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxufSgpKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgJ3N2Z3h1c2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7fTtcbiIsImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi8zLWdsb2JhbC8hKCoudGVzdHwqLmNvbmZpZykuanMnO1xuaW1wb3J0ICogYXMgcGF0dGVybnMgZnJvbSAnLi4vcGF0dGVybnMvKiovISgqLnRlc3R8Ki5jb25maWcpLmpzJztcblxuLy8gYWRkaXRpb25hbCBzYW5pdHkgY2hlY2sgZm9yIG1vZGVybiBicm93c2Vyc+KAlGFuZCB0aGVuLCBlbmhhbmNlIVxuaWYgKCd2aXNpYmlsaXR5U3RhdGUnIGluIGRvY3VtZW50KSB7XG4gIC8vIHJlbW92ZSB0aGUgbm8tanMgY2xhc3NcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbiAgLy8gbG9hZCBhbmQgZXhlY3V0ZSBhbGwgc2NyaXB0cyBmcm9tIGdsb2JhbCBhbmQgYWxsIHBhdHRlcm5zIGF1dG9tYXRpY2FsbHlcbiAgLy8gYnV0IGV4Y2x1ZGUgdGVzdCBhbmQgY29uZmlnIGZpbGVzIOKAlCB0aG9zZSBzaG91bGQgbm90IGJlIGV4ZWN1dGVkXG4gIFsgZ2xvYmFscywgcGF0dGVybnMgXS5mb3JFYWNoKGl0ZW1zID0+IHtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpID0+IHtcbiAgICAgIGl0ZW1zW2ldKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImYiLCJnIiwibCIsImEiLCJwdXNoIiwibGVuZ3RoIiwibSIsInNoaWZ0Iiwic2V0VGltZW91dCIsIm4iLCJwIiwiYiIsInEiLCJyIiwiYyIsInQiLCJ1IiwiVHlwZUVycm9yIiwiZCIsInRoZW4iLCJjYWxsIiwiZSIsInYiLCJoIiwicHJvdG90eXBlIiwidyIsImsiLCJ4Iiwid2luZG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYWNlIiwiYWxsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJib2R5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkZXRhY2hFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic3R5bGUiLCJjc3NUZXh0IiwieSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ6IiwicGFyZW50Tm9kZSIsIkEiLCJmYW1pbHkiLCJ3ZWlnaHQiLCJzdHJldGNoIiwiQiIsIkMiLCJFIiwiRiIsIkciLCJKIiwidGVzdCIsIm5hdmlnYXRvciIsInZlbmRvciIsImV4ZWMiLCJ1c2VyQWdlbnQiLCJwYXJzZUludCIsImZvbnRzIiwiSyIsImZvbnQiLCJMIiwiam9pbiIsImxvYWQiLCJEIiwiSCIsIkRhdGUiLCJnZXRUaW1lIiwiTSIsIk4iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIkkiLCJoaWRkZW4iLCJkaXIiLCJtb2R1bGUiLCJmb250T2JzZXJ2ZXJzIiwic2Vzc2lvblN0b3JhZ2UiLCJmb250c0xvYWRlZCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZm9udGZhY2UiLCJPYnNlcnZlciIsInJlcGxhY2UiLCJzaG9ydGNvZGUiLCJjdXN0b20iLCJxdWVyeSIsImJyZWFrcG9pbnRzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzZWxlY3QiLCJzZWxlY3RvciIsInBhcmVudCIsImFyZ3VtZW50cyIsInF1ZXJ5U2VsZWN0b3IiLCJleGlzdHMiLCJCb29sZWFuIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiYXBwbHkiLCJjdXJyZW50IiwiaSIsImlpIiwiaW5kZXhPZiIsInNjb3BlIiwiZXhhbXBsZXMiLCJleGFtcGxlIiwibWVkaWFxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJjYWNoZSIsImNyZWF0ZSIsImNoZWNrVXNlRWxlbXMiLCJ0aWQiLCJkZWJvdW5jZWRDaGVjayIsInVub2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlQ2hhbmdlcyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlcyIsImRpc2Nvbm5lY3QiLCJpZ25vcmUiLCJjcmVhdGVSZXF1ZXN0IiwidXJsIiwiZ2V0T3JpZ2luIiwibG9jIiwicHJvdG9jb2wiLCJ1bmRlZmluZWQiLCJocmVmIiwiaG9zdCIsIlJlcXVlc3QiLCJvcmlnaW4iLCJvcmlnaW4yIiwiWE1MSHR0cFJlcXVlc3QiLCJsb2NhdGlvbiIsIndpdGhDcmVkZW50aWFscyIsIlhEb21haW5SZXF1ZXN0IiwieGxpbmtOUyIsImJhc2UiLCJiY3IiLCJoYXNoIiwiaW5Qcm9ncmVzc0NvdW50IiwiaXNIaWRkZW4iLCJ1c2VzIiwieGhyIiwib2JzZXJ2ZUlmRG9uZSIsImF0dHJVcGRhdGVGdW5jIiwic3BlYyIsInVzZUVsIiwic2V0QXR0cmlidXRlTlMiLCJoYXNBdHRyaWJ1dGUiLCJvbmxvYWRGdW5jIiwic3ZnIiwib25sb2FkIiwiaW5uZXJIVE1MIiwicmVzcG9uc2VUZXh0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwb3NpdGlvbiIsImhlaWdodCIsIm92ZXJmbG93IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm9uRXJyb3JUaW1lb3V0Iiwib25lcnJvciIsIm9udGltZW91dCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5TIiwic3BsaXQiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJvcGVuIiwic2VuZCIsImFib3J0Iiwid2luTG9hZCIsInJlbW92ZSIsImdsb2JhbHMiLCJwYXR0ZXJucyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUFBLHdFQUF1RSxhQUFVO0FBQUMsQ0FBYSxRQUFJQSxDQUFKO0NBQUEsUUFBTUMsSUFBRSxFQUFSLENBQVcsU0FBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWE7Q0FBQ0YsUUFBRUcsSUFBRixDQUFPRCxDQUFQLEVBQVUsS0FBR0YsRUFBRUksTUFBTCxJQUFhTCxHQUFiO0NBQWlCLGNBQVNNLENBQVQsR0FBWTtDQUFDLGFBQUtMLEVBQUVJLE1BQVAsR0FBZUosRUFBRSxDQUFGLEtBQU9BLEVBQUVNLEtBQUYsRUFBUDtDQUFpQixTQUFFLGFBQVU7Q0FBQ0MsaUJBQVdGLENBQVg7Q0FBYyxLQUEzQixDQUE0QixTQUFTRyxDQUFULENBQVdOLENBQVgsRUFBYTtDQUFDLFdBQUtBLENBQUwsR0FBT08sQ0FBUCxDQUFTLEtBQUtDLENBQUwsR0FBTyxLQUFLLENBQVos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
