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

	var _patterns__3Components$example$example = ((scope = document) => {
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

	var _patterns__3Components$icon$icon = (() => {});

	const globals = {
	  fontloader: _globals_fontloader
	};
	Object.freeze(globals);
	const patterns = {
	  _3Components$example$example: _patterns__3Components$example$example,
	  _3Components$icon$icon: _patterns__3Components$icon$icon
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zZWxlY3QtZG9tL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zLzMtY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZneHVzZS9zdmd4dXNlLmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zLzMtY29tcG9uZW50cy9pY29uL2ljb24uanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnQgRmFjZSBPYnNlcnZlciB2Mi4wLjEzIC0gwqkgQnJhbSBTdGVpbi4gTGljZW5zZTogQlNELTMtQ2xhdXNlICovKGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3ZhciBmLGc9W107ZnVuY3Rpb24gbChhKXtnLnB1c2goYSk7MT09Zy5sZW5ndGgmJmYoKX1mdW5jdGlvbiBtKCl7Zm9yKDtnLmxlbmd0aDspZ1swXSgpLGcuc2hpZnQoKX1mPWZ1bmN0aW9uKCl7c2V0VGltZW91dChtKX07ZnVuY3Rpb24gbihhKXt0aGlzLmE9cDt0aGlzLmI9dm9pZCAwO3RoaXMuZj1bXTt2YXIgYj10aGlzO3RyeXthKGZ1bmN0aW9uKGEpe3EoYixhKX0sZnVuY3Rpb24oYSl7cihiLGEpfSl9Y2F0Y2goYyl7cihiLGMpfX12YXIgcD0yO2Z1bmN0aW9uIHQoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7YyhhKX0pfWZ1bmN0aW9uIHUoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIpe2IoYSl9KX1mdW5jdGlvbiBxKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGM9ITE7dHJ5e3ZhciBkPWImJmIudGhlbjtpZihudWxsIT1iJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZCl7ZC5jYWxsKGIsZnVuY3Rpb24oYil7Y3x8cShhLGIpO2M9ITB9LGZ1bmN0aW9uKGIpe2N8fHIoYSxiKTtjPSEwfSk7cmV0dXJufX1jYXRjaChlKXtjfHxyKGEsZSk7cmV0dXJufWEuYT0wO2EuYj1iO3YoYSl9fVxuZnVuY3Rpb24gcihhLGIpe2lmKGEuYT09cCl7aWYoYj09YSl0aHJvdyBuZXcgVHlwZUVycm9yO2EuYT0xO2EuYj1iO3YoYSl9fWZ1bmN0aW9uIHYoYSl7bChmdW5jdGlvbigpe2lmKGEuYSE9cClmb3IoO2EuZi5sZW5ndGg7KXt2YXIgYj1hLmYuc2hpZnQoKSxjPWJbMF0sZD1iWzFdLGU9YlsyXSxiPWJbM107dHJ5ezA9PWEuYT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2UoYy5jYWxsKHZvaWQgMCxhLmIpKTplKGEuYik6MT09YS5hJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZD9lKGQuY2FsbCh2b2lkIDAsYS5iKSk6YihhLmIpKX1jYXRjaChoKXtiKGgpfX19KX1uLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmModm9pZCAwLGEpfTtuLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gbmV3IG4oZnVuY3Rpb24oZCxlKXtjLmYucHVzaChbYSxiLGQsZV0pO3YoYyl9KX07XG5mdW5jdGlvbiB3KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2hbY109ZDtlKz0xO2U9PWEubGVuZ3RoJiZiKGgpfX12YXIgZT0wLGg9W107MD09YS5sZW5ndGgmJmIoaCk7Zm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKz0xKXUoYVtrXSkuYyhkKGspLGMpfSl9ZnVuY3Rpb24geChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrPTEpdShhW2RdKS5jKGIsYyl9KX07d2luZG93LlByb21pc2V8fCh3aW5kb3cuUHJvbWlzZT1uLHdpbmRvdy5Qcm9taXNlLnJlc29sdmU9dSx3aW5kb3cuUHJvbWlzZS5yZWplY3Q9dCx3aW5kb3cuUHJvbWlzZS5yYWNlPXgsd2luZG93LlByb21pc2UuYWxsPXcsd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW49bi5wcm90b3R5cGUuYyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXT1uLnByb3RvdHlwZS5nKTt9KCkpO1xuXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGEsYil7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gbShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYygpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYyk7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBrKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixrKSxhKCl9KX07ZnVuY3Rpb24gcihhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24gdChhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYitcIjtcIn1mdW5jdGlvbiB5KGEpe3ZhciBiPWEuYS5vZmZzZXRXaWR0aCxjPWIrMTAwO2EuZi5zdHlsZS53aWR0aD1jK1wicHhcIjthLmMuc2Nyb2xsTGVmdD1jO2EuYi5zY3JvbGxMZWZ0PWEuYi5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEuZyE9PWI/KGEuZz1iLCEwKTohMX1mdW5jdGlvbiB6KGEsYil7ZnVuY3Rpb24gYygpe3ZhciBhPWs7eShhKSYmYS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3koYSl9O2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBCPW51bGwsQz1udWxsLEU9bnVsbCxGPW51bGw7ZnVuY3Rpb24gRygpe2lmKG51bGw9PT1DKWlmKEooKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKSl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO0M9ISFhJiY2MDM+cGFyc2VJbnQoYVsxXSwxMCl9ZWxzZSBDPSExO3JldHVybiBDfWZ1bmN0aW9uIEooKXtudWxsPT09RiYmKEY9ISFkb2N1bWVudC5mb250cyk7cmV0dXJuIEZ9XG5mdW5jdGlvbiBLKCl7aWYobnVsbD09PUUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUU9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSygpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIscT0wLEQ9Ynx8M0UzLEg9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7aWYoSigpJiYhRygpKXt2YXIgTT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EP2IoKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGZ1bmN0aW9uKCl7YigpfSl9ZSgpfSksTj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGMpe3E9c2V0VGltZW91dChjLEQpfSk7UHJvbWlzZS5yYWNlKFtOLE1dKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHEpO2EoYyl9LGZ1bmN0aW9uKCl7YihjKX0pfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHUoKXt2YXIgYjtpZihiPS0xIT1cbmYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9aCkoYj1mIT1nJiZmIT1oJiZnIT1oKXx8KG51bGw9PT1CJiYoYj0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksQj0hIWImJig1MzY+cGFyc2VJbnQoYlsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGJbMV0sMTApJiYxMT49cGFyc2VJbnQoYlsyXSwxMCkpKSxiPUImJihmPT12JiZnPT12JiZoPT12fHxmPT13JiZnPT13JiZoPT13fHxmPT14JiZnPT14JiZoPT14KSksYj0hYjtiJiYoZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KHEpLGEoYykpfWZ1bmN0aW9uIEkoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EKWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoYyk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLFxuZz1uLmEub2Zmc2V0V2lkdGgsaD1wLmEub2Zmc2V0V2lkdGgsdSgpO3E9c2V0VGltZW91dChJLDUwKX19dmFyIGU9bmV3IHIoayksbj1uZXcgcihrKSxwPW5ldyByKGspLGY9LTEsZz0tMSxoPS0xLHY9LTEsdz0tMSx4PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmRpcj1cImx0clwiO3QoZSxMKGMsXCJzYW5zLXNlcmlmXCIpKTt0KG4sTChjLFwic2VyaWZcIikpO3QocCxMKGMsXCJtb25vc3BhY2VcIikpO2QuYXBwZW5kQ2hpbGQoZS5hKTtkLmFwcGVuZENoaWxkKG4uYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7dj1lLmEub2Zmc2V0V2lkdGg7dz1uLmEub2Zmc2V0V2lkdGg7eD1wLmEub2Zmc2V0V2lkdGg7SSgpO3ooZSxmdW5jdGlvbihhKXtmPWE7dSgpfSk7dChlLEwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO3oobixmdW5jdGlvbihhKXtnPWE7dSgpfSk7dChuLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtcbnoocCxmdW5jdGlvbihhKXtoPWE7dSgpfSk7dChwLEwoYywnXCInK2MuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1BOih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1BLHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUEucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnI21vZHVsZS9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IHsgZm9udHMgfSBmcm9tICcjc2hhcmVkY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBmb250T2JzZXJ2ZXJzID0gW107XG5cbiAgaWYgKHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGZvbnRzKS5mb3JFYWNoKGZvbnQgPT4ge1xuICAgIGNvbnN0IGYgPSBmb250c1tmb250XTtcblxuICAgIGlmIChmLmZvbnRmYWNlKSB7XG4gICAgICBmb250T2JzZXJ2ZXJzLnB1c2goXG4gICAgICAgIG5ldyBPYnNlcnZlcihmLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgIHdlaWdodDogZi53ZWlnaHQsXG4gICAgICAgICAgc3R5bGU6IGYuc3R5bGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZm9udE9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgIFByb21pc2UuYWxsKGZvbnRPYnNlcnZlcnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICAgICAgLy8gT3B0aW1pemF0aW9uIGZvciBSZXBlYXQgVmlld3NcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJyNzaGFyZWRjb25maWcnO1xuXG4vLyBzYW1lIHVzYWdlIGFzIHRoZSBtZWRpYXF1ZXJ5LXNjc3MtbWl4aW4sIGp1c3Rcbi8vIHByb3ZpZGUgdGhlIHNob3J0Y29kZSB1c2VkIGluIHRoZSBzY3NzLWZpbGUgYW5kIGlmIGl0XG4vLyBpcyBhIGN1c3RvbSBxdWVyeS4gdGhpcyBtb2R1bGUgcmV0dXJuIHRydWUgaWYgdGhlXG4vLyBnaXZlbiBicmVha3BvaW50IG1hdGNoZXMgb3IgZmFsc2UgaWYgaXQgZG9lc250XG5leHBvcnQgZGVmYXVsdCAoc2hvcnRjb2RlLCBjdXN0b20gPSBmYWxzZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IChjdXN0b20pID8gYnJlYWtwb2ludHNbc2hvcnRjb2RlXSA6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzW3Nob3J0Y29kZV19cHgpYDtcblxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yICAgT25lIG9yIG1vcmUgQ1NTIHNlbGVjdG9ycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtwYXJlbnRdICBUaGUgZWxlbWVudCB0byBsb29rIGluc2lkZSBvZlxuICogQHJldHVybiB7P0VsZW1lbnR9ICAgICAgICAgVGhlIGVsZW1lbnQgZm91bmQsIGlmIGFueVxuICovXG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IsIHBhcmVudCkge1xuXHQvLyBTaG9ydGN1dCB3aXRoIHNwZWNpZmllZC1idXQtbnVsbCBwYXJlbnRcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIXBhcmVudCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgICBPbmUgb3IgbW9yZSBDU1Mgc2VsZWN0b3JzIHNlcGFyYXRlZCBieSBjb21tYXNcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3BhcmVudF0gIFRoZSBlbGVtZW50IHRvIGxvb2sgaW5zaWRlIG9mXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICBXaGV0aGVyIGl0J3MgYmVlbiBmb3VuZFxuICovXG5zZWxlY3QuZXhpc3RzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcblx0XHRyZXR1cm4gQm9vbGVhbihzZWxlY3Qoc2VsZWN0b3IsIHBhcmVudCkpO1xuXHR9XG5cdHJldHVybiBCb29sZWFuKHNlbGVjdChzZWxlY3RvcikpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgICAgICAgICAgICAgICBPbmUgb3IgbW9yZSBDU1Mgc2VsZWN0b3JzIHNlcGFyYXRlZCBieSBjb21tYXNcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IFtwYXJlbnRdICAgIFRoZSBlbGVtZW50IG9yIGxpc3Qgb2YgZWxlbWVudHMgdG8gbG9vayBpbnNpZGUgb2ZcbiAqIEByZXR1cm4ge0VsZW1lbnRbXX0gICAgICAgICAgICAgICAgICAgIEFuIGFycmF5IG9mIGVsZW1lbnRzIGZvdW5kXG4gKi9cbnNlbGVjdC5hbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHBhcmVudCkge1xuXHQvLyBTaG9ydGN1dCB3aXRoIHNwZWNpZmllZC1idXQtbnVsbCBwYXJlbnRcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIXBhcmVudCkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8vIENhbiBiZTogc2VsZWN0LmFsbCgnc2VsZWN0b3InKSBvciBzZWxlY3QuYWxsKCdzZWxlY3RvcicsIHNpbmdsZUVsZW1lbnRPckRvY3VtZW50KVxuXHRpZiAoIXBhcmVudCB8fCB0eXBlb2YgcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXHR9XG5cblx0dmFyIGN1cnJlbnQ7XG5cdHZhciBpO1xuXHR2YXIgaWk7XG5cdHZhciBhbGw7XG5cdGZvciAoaSA9IDA7IGkgPCBwYXJlbnQubGVuZ3RoOyBpKyspIHtcblx0XHRjdXJyZW50ID0gcGFyZW50W2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdGlmICghYWxsKSB7XG5cdFx0XHRhbGwgPSBBcnJheS5hcHBseShudWxsLCBjdXJyZW50KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRmb3IgKGlpID0gMDsgaWkgPCBjdXJyZW50Lmxlbmd0aDsgaWkrKykge1xuXHRcdFx0aWYgKGFsbC5pbmRleE9mKGN1cnJlbnRbaWldKSA8IDApIHtcblx0XHRcdFx0YWxsLnB1c2goY3VycmVudFtpaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3Q7XG4iLCIvLyBZb3UgY2FuIGltcG9ydCBhbnl0aGluZyB5b3Ugd2FudCBoZXJlLCBucG0tbW9kdWxlcywgb3RoZXIgZmlsZXMgZXRjLiBwcC5cbi8vIEV4YW1wbGVzOlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJztcbi8vXG4vLyBUaGVyZSBpcyBhIHNob3J0Y3V0IGZvciBpbXBvcnRpbmcgdGhlIFNhc3Mtc2hhcmVkLmpzb24gY29uZmlnXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJyNzaGFyZWRjb25maWcnXG4vL1xuLy8gYW5kIGEgc2hvcnRjdXQgZm9yIGltcG9ydGluZyBhIGZpbGUgZnJvbSB0aGUgbm9kZV9tb2R1bGVzLWZvbGRlclxuLy8gaW1wb3J0IHNvbWVsaWIgZnJvbSAnI21vZHVsZS9zb21lbGliL2Rpc3Qvc29tZWZpbGUnO1xuLy9cbi8vIGFuZCBvdGhlciBoZWxwZXJzIGZvciB2ZW5kb3IvZ2xvYmFsL2hlbHBlclxuLy8gaW1wb3J0IG1lZGlhcXVlcnkgZnJvbSAnI2hlbHBlci9tZWRpYXF1ZXJ5Jztcbi8vIGltcG9ydCBmb250bG9hZGVyIGZyb20gJyNnbG9iYWwvZm9udGxvYWRlcic7XG4vLyBpbXBvcnQgc29tZWZpbGUgZnJvbSAnI3ZlbmRvci9zb21lZmlsZSc7XG4vL1xuLy8gQW5kIGZpbmFsbHk6IGEgc2hvcnRjdXQgdG8gaW1wb3J0IHBhdHRlcm5z4oCUeW91IGRvbid0IGhhdmUgdG8gc3BlY2lmeVxuLy8gdGhlIGZ1bGwgcGF0aCwgYmVjYXVzZSBwYXR0ZXJuLW5hbWVzIHNob3VsZCBiZSB1bmlxdWUgYW55d2F5OlxuLy8gaW1wb3J0IGJ1dHRvbiBmcm9tICcjcGF0dGVybi9idXR0b24nO1xuXG5pbXBvcnQgbWVkaWFxdWVyeSBmcm9tICcjaGVscGVyL21lZGlhcXVlcnknO1xuaW1wb3J0IHNlbGVjdCBmcm9tICdzZWxlY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgKHNjb3BlID0gZG9jdW1lbnQpID0+IHtcbiAgY29uc3QgZXhhbXBsZXMgPSBzZWxlY3QuYWxsKCcuanMtZXhhbXBsZScsIHNjb3BlKTtcblxuICBleGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgIGlmIChtZWRpYXF1ZXJ5KCdsJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBEb2luZyBzb21ldGhpbmcgd2l0aCAke2V4YW1wbGV9IGFib3ZlIGJyZWFrcG9pbnQgTGApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRG9pbmcgc29tZXRoaW5nIHdpdGggJHtleGFtcGxlfSBiZWxvdyBicmVha3BvaW50IExgKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qIVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTcgSWNvTW9vbi5pb1xuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL3N2Z3h1c2VcbiAqIEB2ZXJzaW9uICAgMS4yLjZcbiAqL1xuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSAqL1xuLypnbG9iYWwgWERvbWFpblJlcXVlc3QsIE11dGF0aW9uT2JzZXJ2ZXIsIHdpbmRvdyAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBob2xkcyB4aHIgb2JqZWN0cyB0byBwcmV2ZW50IG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICAgIHZhciBjaGVja1VzZUVsZW1zO1xuICAgICAgICB2YXIgdGlkOyAvLyB0aW1lb3V0IGlkXG4gICAgICAgIHZhciBkZWJvdW5jZWRDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2VkQ2hlY2spO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAvLyBJbiBJRSA5LCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgY2FuIG9ubHkgYmUgc2VudCB1c2luZyBYRG9tYWluUmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IHdvdWxkIGZhaWwgaWYgQ09SUyBoZWFkZXJzIGFyZSBub3Qgc2V0LlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCBYRG9tYWluUmVxdWVzdCBzaG91bGQgb25seSBiZSB1c2VkIHdpdGggY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzLlxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0T3JpZ2luKGxvYykge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmIChsb2MucHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhID0gbG9jO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpICsgYS5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgb3JpZ2luO1xuICAgICAgICAgICAgdmFyIG9yaWdpbjI7XG4gICAgICAgICAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IGdldE9yaWdpbihsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgb3JpZ2luMiA9IGdldE9yaWdpbih1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkICYmIG9yaWdpbjIgIT09IFwiXCIgJiYgb3JpZ2luMiAhPT0gb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYRG9tYWluUmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgeGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuICAgICAgICBjaGVja1VzZUVsZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJhc2U7XG4gICAgICAgICAgICB2YXIgYmNyO1xuICAgICAgICAgICAgdmFyIGZhbGxiYWNrID0gXCJcIjsgLy8gb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGluIGNhc2Ugbm8gYmFzZSBwYXRoIHRvIFNWRyBmaWxlIHdhcyBnaXZlbiBhbmQgbm8gc3ltYm9sIGRlZmluaXRpb24gd2FzIGZvdW5kLlxuICAgICAgICAgICAgdmFyIGhhc2g7XG4gICAgICAgICAgICB2YXIgaHJlZjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGluUHJvZ3Jlc3NDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgaXNIaWRkZW47XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciB1cmw7XG4gICAgICAgICAgICB2YXIgdXNlcztcbiAgICAgICAgICAgIHZhciB4aHI7XG4gICAgICAgICAgICBmdW5jdGlvbiBvYnNlcnZlSWZEb25lKCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRvbmUgd2l0aCBtYWtpbmcgY2hhbmdlcywgc3RhcnQgd2F0Y2hpbmcgZm9yIGNoYWduZXMgaW4gRE9NIGFnYWluXG4gICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGluUHJvZ3Jlc3NDb3VudCA9PT0gMCkgeyAvLyBpZiBhbGwgeGhycyB3ZXJlIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gbWFrZSBzdXJlIHRvIHJlbW92ZSBvbGQgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUNoYW5nZXMoKTsgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0clVwZGF0ZUZ1bmMoc3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtzcGVjLmJhc2VdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlYy51c2VFbC5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbmxvYWRGdW5jKHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwieFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZShzdmcsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkVycm9yVGltZW91dCh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gc3RvcCB3YXRjaGluZyBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgIC8vIGZpbmQgYWxsIHVzZSBlbGVtZW50c1xuICAgICAgICAgICAgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWYgPSB1c2VzW2ldLmdldEF0dHJpYnV0ZShcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBocmVmLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBbXCJcIiwgXCJcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhc2UgPSB1cmxbMF07XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVybFsxXTtcbiAgICAgICAgICAgICAgICBpc0hpZGRlbiA9IGJjciAmJiBiY3IubGVmdCA9PT0gMCAmJiBiY3IucmlnaHQgPT09IDAgJiYgYmNyLnRvcCA9PT0gMCAmJiBiY3IuYm90dG9tID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiY3IgJiYgYmNyLndpZHRoID09PSAwICYmIGJjci5oZWlnaHQgPT09IDAgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2UgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkcsIHRyeSB0byBmZXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpZiB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjayAmJiAhYmFzZS5sZW5ndGggJiYgaGFzaCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlc1tpXS5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VzW2ldLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIHVwZGF0aW5nIHhsaW5rOmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IGNhY2hlW2Jhc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWUgc2lnbmlmaWVzIHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIHdhcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0geGhyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb25sb2FkRnVuYyh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW2Jhc2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGlzIFVSTCBpZiB0aGUgdXNlIGVsZW1lbnQgd2FzIG5vdCBlbXB0eSBhbmQgbm8gcmVxdWVzdCB3YXMgc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FjaGVbYmFzZV0ub25sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgdHVybnMgb3V0IHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIGlzIG5vdCBuZWNlc3NhcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWJvcnQgdGhlIGluLXByb2dyZXNzIHhoci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtiYXNlXS5vbmxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2UubGVuZ3RoICYmIGNhY2hlW2Jhc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXMgPSBcIlwiO1xuICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aW5Mb2FkO1xuICAgICAgICB3aW5Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTsgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2FkIGV2ZW50IGZpcmVzIHdoZW4gYWxsIHJlc291cmNlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcsIHdoaWNoIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBTVkcgdXNlIGVsZW1lbnRzIGFyZSBlbXB0eS5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBhIGxpc3RlbmVyIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZCwgaW5pdGlhbGl6ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHdpbkxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0ICdzdmd4dXNlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge307XG4iLCJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vMy1nbG9iYWwvISgqLnRlc3R8Ki5jb25maWcpLmpzJztcbmltcG9ydCAqIGFzIHBhdHRlcm5zIGZyb20gJy4uL3BhdHRlcm5zLyoqLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5cbi8vIGFkZGl0aW9uYWwgc2FuaXR5IGNoZWNrIGZvciBtb2Rlcm4gYnJvd3NlcnPigJRhbmQgdGhlbiwgZW5oYW5jZSFcbmlmICgndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudCkge1xuICAvLyByZW1vdmUgdGhlIG5vLWpzIGNsYXNzXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuXG4gIC8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4gIC8vIGJ1dCBleGNsdWRlIHRlc3QgYW5kIGNvbmZpZyBmaWxlcyDigJQgdGhvc2Ugc2hvdWxkIG5vdCBiZSBleGVjdXRlZFxuICBbIGdsb2JhbHMsIHBhdHRlcm5zIF0uZm9yRWFjaChpdGVtcyA9PiB7XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaSA9PiB7XG4gICAgICBpdGVtc1tpXSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmIiwiZyIsImwiLCJhIiwicHVzaCIsImxlbmd0aCIsIm0iLCJzaGlmdCIsInNldFRpbWVvdXQiLCJuIiwicCIsImIiLCJxIiwiciIsImMiLCJ0IiwidSIsIlR5cGVFcnJvciIsImQiLCJ0aGVuIiwiY2FsbCIsImUiLCJ2IiwiaCIsInByb3RvdHlwZSIsInciLCJrIiwieCIsIndpbmRvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmFjZSIsImFsbCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwiZGV0YWNoRXZlbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInN0eWxlIiwiY3NzVGV4dCIsInkiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwieiIsInBhcmVudE5vZGUiLCJBIiwiZmFtaWx5Iiwid2VpZ2h0Iiwic3RyZXRjaCIsIkIiLCJDIiwiRSIsIkYiLCJHIiwiSiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJleGVjIiwidXNlckFnZW50IiwicGFyc2VJbnQiLCJmb250cyIsIksiLCJmb250IiwiTCIsImpvaW4iLCJsb2FkIiwiRCIsIkgiLCJEYXRlIiwiZ2V0VGltZSIsIk0iLCJOIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJJIiwiaGlkZGVuIiwiZGlyIiwibW9kdWxlIiwiZm9udE9ic2VydmVycyIsInNlc3Npb25TdG9yYWdlIiwiZm9udHNMb2FkZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImZvbnRmYWNlIiwiT2JzZXJ2ZXIiLCJyZXBsYWNlIiwic2hvcnRjb2RlIiwiY3VzdG9tIiwicXVlcnkiLCJicmVha3BvaW50cyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2VsZWN0Iiwic2VsZWN0b3IiLCJwYXJlbnQiLCJhcmd1bWVudHMiLCJxdWVyeVNlbGVjdG9yIiwiZXhpc3RzIiwiQm9vbGVhbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImFwcGx5IiwiY3VycmVudCIsImkiLCJpaSIsImluZGV4T2YiLCJzY29wZSIsImV4YW1wbGVzIiwiZXhhbXBsZSIsIm1lZGlhcXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY2FjaGUiLCJjcmVhdGUiLCJjaGVja1VzZUVsZW1zIiwidGlkIiwiZGVib3VuY2VkQ2hlY2siLCJ1bm9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZXMiLCJkaXNjb25uZWN0IiwiaWdub3JlIiwiY3JlYXRlUmVxdWVzdCIsInVybCIsImdldE9yaWdpbiIsImxvYyIsInByb3RvY29sIiwidW5kZWZpbmVkIiwiaHJlZiIsImhvc3QiLCJSZXF1ZXN0Iiwib3JpZ2luIiwib3JpZ2luMiIsIlhNTEh0dHBSZXF1ZXN0IiwibG9jYXRpb24iLCJ3aXRoQ3JlZGVudGlhbHMiLCJYRG9tYWluUmVxdWVzdCIsInhsaW5rTlMiLCJiYXNlIiwiYmNyIiwiaGFzaCIsImluUHJvZ3Jlc3NDb3VudCIsImlzSGlkZGVuIiwidXNlcyIsInhociIsIm9ic2VydmVJZkRvbmUiLCJhdHRyVXBkYXRlRnVuYyIsInNwZWMiLCJ1c2VFbCIsInNldEF0dHJpYnV0ZU5TIiwiaGFzQXR0cmlidXRlIiwib25sb2FkRnVuYyIsInN2ZyIsIm9ubG9hZCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvbkVycm9yVGltZW91dCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOUyIsInNwbGl0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwib3BlbiIsInNlbmQiLCJhYm9ydCIsIndpbkxvYWQiLCJyZW1vdmUiLCJnbG9iYWxzIiwicGF0dGVybnMiLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FBQSx3RUFBdUUsYUFBVTtBQUFDLENBQWEsUUFBSUEsQ0FBSjtDQUFBLFFBQU1DLElBQUUsRUFBUixDQUFXLFNBQVNDLENBQVQsQ0FBV0MsQ0FBWCxFQUFhO0NBQUNGLFFBQUVHLElBQUYsQ0FBT0QsQ0FBUCxFQUFVLEtBQUdGLEVBQUVJLE1BQUwsSUFBYUwsR0FBYjtDQUFpQixjQUFTTSxDQUFULEdBQVk7Q0FBQyxhQUFLTCxFQUFFSSxNQUFQLEdBQWVKLEVBQUUsQ0FBRixLQUFPQSxFQUFFTSxLQUFGLEVBQVA7Q0FBaUIsU0FBRSxhQUFVO0NBQUNDLGlCQUFXRixDQUFYO0NBQWMsS0FBM0IsQ0FBNEIsU0FBU0csQ0FBVCxDQUFXTixDQUFYLEVBQWE7Q0FBQyxXQUFLQSxDQUFMLEdBQU9PLENBQVAsQ0FBUyxLQUFLQyxDQUFMLEdBQU8sS0FBSyxD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
