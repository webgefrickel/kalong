(function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var fontfaceobserver = createCommonjsModule(function (module) {
	  /* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
	  (function () {

	    var f,
	        g = [];

	    function l(a) {
	      g.push(a);
	      1 == g.length && f();
	    }

	    function m() {
	      for (; g.length;) g[0](), g.shift();
	    }

	    f = function f() {
	      setTimeout(m);
	    };

	    function n(a) {
	      this.a = p;
	      this.b = void 0;
	      this.f = [];
	      var b = this;

	      try {
	        a(function (a) {
	          q(b, a);
	        }, function (a) {
	          r(b, a);
	        });
	      } catch (c) {
	        r(b, c);
	      }
	    }

	    var p = 2;

	    function t(a) {
	      return new n(function (b, c) {
	        c(a);
	      });
	    }

	    function u(a) {
	      return new n(function (b) {
	        b(a);
	      });
	    }

	    function q(a, b) {
	      if (a.a == p) {
	        if (b == a) throw new TypeError();
	        var c = !1;

	        try {
	          var d = b && b.then;

	          if (null != b && "object" == typeof b && "function" == typeof d) {
	            d.call(b, function (b) {
	              c || q(a, b);
	              c = !0;
	            }, function (b) {
	              c || r(a, b);
	              c = !0;
	            });
	            return;
	          }
	        } catch (e) {
	          c || r(a, e);
	          return;
	        }

	        a.a = 0;
	        a.b = b;
	        v(a);
	      }
	    }

	    function r(a, b) {
	      if (a.a == p) {
	        if (b == a) throw new TypeError();
	        a.a = 1;
	        a.b = b;
	        v(a);
	      }
	    }

	    function v(a) {
	      l(function () {
	        if (a.a != p) for (; a.f.length;) {
	          var b = a.f.shift(),
	              c = b[0],
	              d = b[1],
	              e = b[2],
	              b = b[3];

	          try {
	            0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b));
	          } catch (h) {
	            b(h);
	          }
	        }
	      });
	    }

	    n.prototype.g = function (a) {
	      return this.c(void 0, a);
	    };

	    n.prototype.c = function (a, b) {
	      var c = this;
	      return new n(function (d, e) {
	        c.f.push([a, b, d, e]);
	        v(c);
	      });
	    };

	    function w(a) {
	      return new n(function (b, c) {
	        function d(c) {
	          return function (d) {
	            h[c] = d;
	            e += 1;
	            e == a.length && b(h);
	          };
	        }

	        var e = 0,
	            h = [];
	        0 == a.length && b(h);

	        for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c);
	      });
	    }

	    function x(a) {
	      return new n(function (b, c) {
	        for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c);
	      });
	    }
	    window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
	  })();

	  (function () {
	    function l(a, b) {
	      document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
	    }

	    function m(a) {
	      document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
	        document.removeEventListener("DOMContentLoaded", c);
	        a();
	      }) : document.attachEvent("onreadystatechange", function k() {
	        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a();
	      });
	    }

	    function t(a) {
	      this.a = document.createElement("div");
	      this.a.setAttribute("aria-hidden", "true");
	      this.a.appendChild(document.createTextNode(a));
	      this.b = document.createElement("span");
	      this.c = document.createElement("span");
	      this.h = document.createElement("span");
	      this.f = document.createElement("span");
	      this.g = -1;
	      this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
	      this.b.appendChild(this.h);
	      this.c.appendChild(this.f);
	      this.a.appendChild(this.b);
	      this.a.appendChild(this.c);
	    }

	    function u(a, b) {
	      a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
	    }

	    function z(a) {
	      var b = a.a.offsetWidth,
	          c = b + 100;
	      a.f.style.width = c + "px";
	      a.c.scrollLeft = c;
	      a.b.scrollLeft = a.b.scrollWidth + 100;
	      return a.g !== b ? (a.g = b, !0) : !1;
	    }

	    function A(a, b) {
	      function c() {
	        var a = k;
	        z(a) && a.a.parentNode && b(a.g);
	      }

	      var k = a;
	      l(a.b, c);
	      l(a.c, c);
	      z(a);
	    }

	    function B(a, b) {
	      var c = b || {};
	      this.family = a;
	      this.style = c.style || "normal";
	      this.weight = c.weight || "normal";
	      this.stretch = c.stretch || "normal";
	    }

	    var C = null,
	        D = null,
	        E = null,
	        F = null;

	    function G() {
	      if (null === D) if (J() && /Apple/.test(window.navigator.vendor)) {
	        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
	        D = !!a && 603 > parseInt(a[1], 10);
	      } else D = !1;
	      return D;
	    }

	    function J() {
	      null === F && (F = !!document.fonts);
	      return F;
	    }

	    function K() {
	      if (null === E) {
	        var a = document.createElement("div");

	        try {
	          a.style.font = "condensed 100px sans-serif";
	        } catch (b) {}

	        E = "" !== a.style.font;
	      }

	      return E;
	    }

	    function L(a, b) {
	      return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
	    }

	    B.prototype.load = function (a, b) {
	      var c = this,
	          k = a || "BESbswy",
	          r = 0,
	          n = b || 3E3,
	          H = new Date().getTime();
	      return new Promise(function (a, b) {
	        if (J() && !G()) {
	          var M = new Promise(function (a, b) {
	            function e() {
	              new Date().getTime() - H >= n ? b(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) {
	                1 <= c.length ? a() : setTimeout(e, 25);
	              }, b);
	            }

	            e();
	          }),
	              N = new Promise(function (a, c) {
	            r = setTimeout(function () {
	              c(Error("" + n + "ms timeout exceeded"));
	            }, n);
	          });
	          Promise.race([N, M]).then(function () {
	            clearTimeout(r);
	            a(c);
	          }, b);
	        } else m(function () {
	          function v() {
	            var b;
	            if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)), b = !b;
	            b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c));
	          }

	          function I() {
	            if (new Date().getTime() - H >= n) d.parentNode && d.parentNode.removeChild(d), b(Error("" + n + "ms timeout exceeded"));else {
	              var a = document.hidden;
	              if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = p.a.offsetWidth, h = q.a.offsetWidth, v();
	              r = setTimeout(I, 50);
	            }
	          }

	          var e = new t(k),
	              p = new t(k),
	              q = new t(k),
	              f = -1,
	              g = -1,
	              h = -1,
	              w = -1,
	              x = -1,
	              y = -1,
	              d = document.createElement("div");
	          d.dir = "ltr";
	          u(e, L(c, "sans-serif"));
	          u(p, L(c, "serif"));
	          u(q, L(c, "monospace"));
	          d.appendChild(e.a);
	          d.appendChild(p.a);
	          d.appendChild(q.a);
	          document.body.appendChild(d);
	          w = e.a.offsetWidth;
	          x = p.a.offsetWidth;
	          y = q.a.offsetWidth;
	          I();
	          A(e, function (a) {
	            f = a;
	            v();
	          });
	          u(e, L(c, '"' + c.family + '",sans-serif'));
	          A(p, function (a) {
	            g = a;
	            v();
	          });
	          u(p, L(c, '"' + c.family + '",serif'));
	          A(q, function (a) {
	            h = a;
	            v();
	          });
	          u(q, L(c, '"' + c.family + '",monospace'));
	        });
	      });
	    };

	    module.exports = B;
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
	      document.documentElement.classList.add('fonts-loaded'); // Optimization for Repeat Views

	      sessionStorage.fontsLoaded = true;
	    });
	  }
	});

	// provide the shortcode used in the scss-file and if it
	// is a custom query. this module return true if the
	// given breakpoint matches or false if it doesnt

	var mediaquery = (function (shortcode) {
	  let custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
	  } // Can be: select.all('selector') or select.all('selector', singleElementOrDocument)


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
	var _patterns_components$example$example = (function () {
	  let scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
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
	Object.freeze(patterns); // additional sanity check for modern browsers—and then, enhance!

	if ('visibilityState' in document) {
	  // remove the no-js class
	  document.documentElement.classList.remove('no-js'); // load and execute all scripts from global and all patterns automatically
	  // but exclude test and config files — those should not be executed

	  [globals, patterns].forEach(items => {
	    Object.keys(items).forEach(i => {
	      items[i]();
	    });
	  });
	}

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zZWxlY3QtZG9tL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb21wb25lbnRzL2ljb24vaWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjEuMCAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt2YXIgZixnPVtdO2Z1bmN0aW9uIGwoYSl7Zy5wdXNoKGEpOzE9PWcubGVuZ3RoJiZmKCl9ZnVuY3Rpb24gbSgpe2Zvcig7Zy5sZW5ndGg7KWdbMF0oKSxnLnNoaWZ0KCl9Zj1mdW5jdGlvbigpe3NldFRpbWVvdXQobSl9O2Z1bmN0aW9uIG4oYSl7dGhpcy5hPXA7dGhpcy5iPXZvaWQgMDt0aGlzLmY9W107dmFyIGI9dGhpczt0cnl7YShmdW5jdGlvbihhKXtxKGIsYSl9LGZ1bmN0aW9uKGEpe3IoYixhKX0pfWNhdGNoKGMpe3IoYixjKX19dmFyIHA9MjtmdW5jdGlvbiB0KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2MoYSl9KX1mdW5jdGlvbiB1KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiKXtiKGEpfSl9ZnVuY3Rpb24gcShhLGIpe2lmKGEuYT09cCl7aWYoYj09YSl0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciBjPSExO3RyeXt2YXIgZD1iJiZiLnRoZW47aWYobnVsbCE9YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQpe2QuY2FsbChiLGZ1bmN0aW9uKGIpe2N8fHEoYSxiKTtjPSEwfSxmdW5jdGlvbihiKXtjfHxyKGEsYik7Yz0hMH0pO3JldHVybn19Y2F0Y2goZSl7Y3x8cihhLGUpO3JldHVybn1hLmE9MDthLmI9Yjt2KGEpfX1cbmZ1bmN0aW9uIHIoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjthLmE9MTthLmI9Yjt2KGEpfX1mdW5jdGlvbiB2KGEpe2woZnVuY3Rpb24oKXtpZihhLmEhPXApZm9yKDthLmYubGVuZ3RoOyl7dmFyIGI9YS5mLnNoaWZ0KCksYz1iWzBdLGQ9YlsxXSxlPWJbMl0sYj1iWzNdO3RyeXswPT1hLmE/XCJmdW5jdGlvblwiPT10eXBlb2YgYz9lKGMuY2FsbCh2b2lkIDAsYS5iKSk6ZShhLmIpOjE9PWEuYSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZShkLmNhbGwodm9pZCAwLGEuYikpOmIoYS5iKSl9Y2F0Y2goaCl7YihoKX19fSl9bi5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jKHZvaWQgMCxhKX07bi5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGQsZSl7Yy5mLnB1c2goW2EsYixkLGVdKTt2KGMpfSl9O1xuZnVuY3Rpb24gdyhhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtmdW5jdGlvbiBkKGMpe3JldHVybiBmdW5jdGlvbihkKXtoW2NdPWQ7ZSs9MTtlPT1hLmxlbmd0aCYmYihoKX19dmFyIGU9MCxoPVtdOzA9PWEubGVuZ3RoJiZiKGgpO2Zvcih2YXIgaz0wO2s8YS5sZW5ndGg7ays9MSl1KGFba10pLmMoZChrKSxjKX0pfWZ1bmN0aW9uIHgoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKz0xKXUoYVtkXSkuYyhiLGMpfSl9O3dpbmRvdy5Qcm9taXNlfHwod2luZG93LlByb21pc2U9bix3aW5kb3cuUHJvbWlzZS5yZXNvbHZlPXUsd2luZG93LlByb21pc2UucmVqZWN0PXQsd2luZG93LlByb21pc2UucmFjZT14LHdpbmRvdy5Qcm9taXNlLmFsbD13LHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuPW4ucHJvdG90eXBlLmMsd2luZG93LlByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl09bi5wcm90b3R5cGUuZyk7fSgpKTtcblxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChhLGIpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsYiwhMSk6YS5hdHRhY2hFdmVudChcInNjcm9sbFwiLGIpfWZ1bmN0aW9uIG0oYSl7ZG9jdW1lbnQuYm9keT9hKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uIGMoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGMpO2EoKX0pOmRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24gaygpe2lmKFwiaW50ZXJhY3RpdmVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZXx8XCJjb21wbGV0ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlKWRvY3VtZW50LmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsayksYSgpfSl9O2Z1bmN0aW9uIHQoYSl7dGhpcy5hPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5hLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3RoaXMuYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7dGhpcy5iPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5mPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZz0tMTt0aGlzLmIuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuYy5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7XG50aGlzLmYuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuaC5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJTtmb250LXNpemU6MTZweDttYXgtd2lkdGg6bm9uZTtcIjt0aGlzLmIuYXBwZW5kQ2hpbGQodGhpcy5oKTt0aGlzLmMuYXBwZW5kQ2hpbGQodGhpcy5mKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5iKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5jKX1cbmZ1bmN0aW9uIHUoYSxiKXthLmEuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO21pbi13aWR0aDoyMHB4O21pbi1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bzttYXJnaW46MDtwYWRkaW5nOjA7dG9wOi05OTlweDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zeW50aGVzaXM6bm9uZTtmb250OlwiK2IrXCI7XCJ9ZnVuY3Rpb24geihhKXt2YXIgYj1hLmEub2Zmc2V0V2lkdGgsYz1iKzEwMDthLmYuc3R5bGUud2lkdGg9YytcInB4XCI7YS5jLnNjcm9sbExlZnQ9YzthLmIuc2Nyb2xsTGVmdD1hLmIuc2Nyb2xsV2lkdGgrMTAwO3JldHVybiBhLmchPT1iPyhhLmc9YiwhMCk6ITF9ZnVuY3Rpb24gQShhLGIpe2Z1bmN0aW9uIGMoKXt2YXIgYT1rO3ooYSkmJmEuYS5wYXJlbnROb2RlJiZiKGEuZyl9dmFyIGs9YTtsKGEuYixjKTtsKGEuYyxjKTt6KGEpfTtmdW5jdGlvbiBCKGEsYil7dmFyIGM9Ynx8e307dGhpcy5mYW1pbHk9YTt0aGlzLnN0eWxlPWMuc3R5bGV8fFwibm9ybWFsXCI7dGhpcy53ZWlnaHQ9Yy53ZWlnaHR8fFwibm9ybWFsXCI7dGhpcy5zdHJldGNoPWMuc3RyZXRjaHx8XCJub3JtYWxcIn12YXIgQz1udWxsLEQ9bnVsbCxFPW51bGwsRj1udWxsO2Z1bmN0aW9uIEcoKXtpZihudWxsPT09RClpZihKKCkmJi9BcHBsZS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnZlbmRvcikpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtEPSEhYSYmNjAzPnBhcnNlSW50KGFbMV0sMTApfWVsc2UgRD0hMTtyZXR1cm4gRH1mdW5jdGlvbiBKKCl7bnVsbD09PUYmJihGPSEhZG9jdW1lbnQuZm9udHMpO3JldHVybiBGfVxuZnVuY3Rpb24gSygpe2lmKG51bGw9PT1FKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXthLnN0eWxlLmZvbnQ9XCJjb25kZW5zZWQgMTAwcHggc2Fucy1zZXJpZlwifWNhdGNoKGIpe31FPVwiXCIhPT1hLnN0eWxlLmZvbnR9cmV0dXJuIEV9ZnVuY3Rpb24gTChhLGIpe3JldHVyblthLnN0eWxlLGEud2VpZ2h0LEsoKT9hLnN0cmV0Y2g6XCJcIixcIjEwMHB4XCIsYl0uam9pbihcIiBcIil9XG5CLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxrPWF8fFwiQkVTYnN3eVwiLHI9MCxuPWJ8fDNFMyxIPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2lmKEooKSYmIUcoKSl7dmFyIE09bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBlKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktSD49bj9iKEVycm9yKFwiXCIrbitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpOmRvY3VtZW50LmZvbnRzLmxvYWQoTChjLCdcIicrYy5mYW1pbHkrJ1wiJyksaykudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sYil9ZSgpfSksTj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGMpe3I9c2V0VGltZW91dChmdW5jdGlvbigpe2MoRXJyb3IoXCJcIituK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSl9LG4pfSk7UHJvbWlzZS5yYWNlKFtOLE1dKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpO2EoYyl9LFxuYil9ZWxzZSBtKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdigpe3ZhciBiO2lmKGI9LTEhPWYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9aCkoYj1mIT1nJiZmIT1oJiZnIT1oKXx8KG51bGw9PT1DJiYoYj0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksQz0hIWImJig1MzY+cGFyc2VJbnQoYlsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGJbMV0sMTApJiYxMT49cGFyc2VJbnQoYlsyXSwxMCkpKSxiPUMmJihmPT13JiZnPT13JiZoPT13fHxmPT14JiZnPT14JiZoPT14fHxmPT15JiZnPT15JiZoPT15KSksYj0hYjtiJiYoZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KHIpLGEoYykpfWZ1bmN0aW9uIEkoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1IPj1uKWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoRXJyb3IoXCJcIitcbm4rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTtlbHNle3ZhciBhPWRvY3VtZW50LmhpZGRlbjtpZighMD09PWF8fHZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsZz1wLmEub2Zmc2V0V2lkdGgsaD1xLmEub2Zmc2V0V2lkdGgsdigpO3I9c2V0VGltZW91dChJLDUwKX19dmFyIGU9bmV3IHQoaykscD1uZXcgdChrKSxxPW5ldyB0KGspLGY9LTEsZz0tMSxoPS0xLHc9LTEseD0tMSx5PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmRpcj1cImx0clwiO3UoZSxMKGMsXCJzYW5zLXNlcmlmXCIpKTt1KHAsTChjLFwic2VyaWZcIikpO3UocSxMKGMsXCJtb25vc3BhY2VcIikpO2QuYXBwZW5kQ2hpbGQoZS5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZC5hcHBlbmRDaGlsZChxLmEpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7dz1lLmEub2Zmc2V0V2lkdGg7eD1wLmEub2Zmc2V0V2lkdGg7eT1xLmEub2Zmc2V0V2lkdGg7SSgpO0EoZSxmdW5jdGlvbihhKXtmPWE7digpfSk7dShlLFxuTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7QShwLGZ1bmN0aW9uKGEpe2c9YTt2KCl9KTt1KHAsTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO0EocSxmdW5jdGlvbihhKXtoPWE7digpfSk7dShxLEwoYywnXCInK2MuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1COih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1CLHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUIucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnfm1vZHVsZS9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IHsgZm9udHMgfSBmcm9tICcuLi8uLi9zdHlsZXMvMS1jb25maWcvc2hhcmVkLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGZvbnRPYnNlcnZlcnMgPSBbXTtcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZm9udHMpLmZvckVhY2goZm9udCA9PiB7XG4gICAgY29uc3QgZiA9IGZvbnRzW2ZvbnRdO1xuXG4gICAgaWYgKGYuZm9udGZhY2UpIHtcbiAgICAgIGZvbnRPYnNlcnZlcnMucHVzaChcbiAgICAgICAgbmV3IE9ic2VydmVyKGYuZmFtaWx5LnJlcGxhY2UoLycvZywgJycpLCB7XG4gICAgICAgICAgd2VpZ2h0OiBmLndlaWdodCxcbiAgICAgICAgICBzdHlsZTogZi5zdHlsZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZm9udE9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgIFByb21pc2UuYWxsKGZvbnRPYnNlcnZlcnMpLnRoZW4oKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgLy8gT3B0aW1pemF0aW9uIGZvciBSZXBlYXQgVmlld3NcbiAgICAgIHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSAnLi4vLi4vc3R5bGVzLzEtY29uZmlnL3NoYXJlZC5qc29uJztcblxuLy8gc2FtZSB1c2FnZSBhcyB0aGUgbWVkaWFxdWVyeS1zY3NzLW1peGluLCBqdXN0XG4vLyBwcm92aWRlIHRoZSBzaG9ydGNvZGUgdXNlZCBpbiB0aGUgc2Nzcy1maWxlIGFuZCBpZiBpdFxuLy8gaXMgYSBjdXN0b20gcXVlcnkuIHRoaXMgbW9kdWxlIHJldHVybiB0cnVlIGlmIHRoZVxuLy8gZ2l2ZW4gYnJlYWtwb2ludCBtYXRjaGVzIG9yIGZhbHNlIGlmIGl0IGRvZXNudFxuZXhwb3J0IGRlZmF1bHQgKHNob3J0Y29kZSwgY3VzdG9tID0gZmFsc2UpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBjdXN0b21cbiAgICA/IGJyZWFrcG9pbnRzW3Nob3J0Y29kZV1cbiAgICA6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzW3Nob3J0Y29kZV19cHgpYDtcblxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAgIE9uZSBvciBtb3JlIENTUyBzZWxlY3RvcnMgc2VwYXJhdGVkIGJ5IGNvbW1hc1xuICogQHBhcmFtIHtFbGVtZW50fSBbcGFyZW50XSAgVGhlIGVsZW1lbnQgdG8gbG9vayBpbnNpZGUgb2ZcbiAqIEByZXR1cm4gez9FbGVtZW50fSAgICAgICAgIFRoZSBlbGVtZW50IGZvdW5kLCBpZiBhbnlcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yLCBwYXJlbnQpIHtcblx0Ly8gU2hvcnRjdXQgd2l0aCBzcGVjaWZpZWQtYnV0LW51bGwgcGFyZW50XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFwYXJlbnQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yICAgT25lIG9yIG1vcmUgQ1NTIHNlbGVjdG9ycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtwYXJlbnRdICBUaGUgZWxlbWVudCB0byBsb29rIGluc2lkZSBvZlxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgV2hldGhlciBpdCdzIGJlZW4gZm91bmRcbiAqL1xuc2VsZWN0LmV4aXN0cyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG5cdFx0cmV0dXJuIEJvb2xlYW4oc2VsZWN0KHNlbGVjdG9yLCBwYXJlbnQpKTtcblx0fVxuXHRyZXR1cm4gQm9vbGVhbihzZWxlY3Qoc2VsZWN0b3IpKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yICAgICAgICAgICAgICAgT25lIG9yIG1vcmUgQ1NTIHNlbGVjdG9ycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiBAcGFyYW0ge0VsZW1lbnR8RWxlbWVudFtdfSBbcGFyZW50XSAgICBUaGUgZWxlbWVudCBvciBsaXN0IG9mIGVsZW1lbnRzIHRvIGxvb2sgaW5zaWRlIG9mXG4gKiBAcmV0dXJuIHtFbGVtZW50W119ICAgICAgICAgICAgICAgICAgICBBbiBhcnJheSBvZiBlbGVtZW50cyBmb3VuZFxuICovXG5zZWxlY3QuYWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcblx0Ly8gU2hvcnRjdXQgd2l0aCBzcGVjaWZpZWQtYnV0LW51bGwgcGFyZW50XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFwYXJlbnQpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBDYW4gYmU6IHNlbGVjdC5hbGwoJ3NlbGVjdG9yJykgb3Igc2VsZWN0LmFsbCgnc2VsZWN0b3InLCBzaW5nbGVFbGVtZW50T3JEb2N1bWVudClcblx0aWYgKCFwYXJlbnQgfHwgdHlwZW9mIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblx0fVxuXG5cdHZhciBjdXJyZW50O1xuXHR2YXIgaTtcblx0dmFyIGlpO1xuXHR2YXIgYWxsO1xuXHRmb3IgKGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y3VycmVudCA9IHBhcmVudFtpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRpZiAoIWFsbCkge1xuXHRcdFx0YWxsID0gQXJyYXkuYXBwbHkobnVsbCwgY3VycmVudCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Zm9yIChpaSA9IDA7IGlpIDwgY3VycmVudC5sZW5ndGg7IGlpKyspIHtcblx0XHRcdGlmIChhbGwuaW5kZXhPZihjdXJyZW50W2lpXSkgPCAwKSB7XG5cdFx0XHRcdGFsbC5wdXNoKGN1cnJlbnRbaWldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGFsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuIiwiLy8gWW91IGNhbiBpbXBvcnQgYW55dGhpbmcgeW91IHdhbnQgaGVyZSwgbnBtLW1vZHVsZXMsIG90aGVyIGZpbGVzIGV0Yy4gcHAuXG4vLyBFeGFtcGxlczpcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vL1xuLy8gVGhlcmUgaXMgYSBzaG9ydGN1dCBmb3IgaW1wb3J0aW5nIHRoZSBTYXNzLXNoYXJlZC5qc29uIGNvbmZpZ1xuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcjc2hhcmVkY29uZmlnJ1xuLy9cbi8vIGFuZCBhIHNob3J0Y3V0IGZvciBpbXBvcnRpbmcgYSBmaWxlIGZyb20gdGhlIG5vZGVfbW9kdWxlcy1mb2xkZXJcbi8vIGltcG9ydCBzb21lbGliIGZyb20gJyNtb2R1bGUvc29tZWxpYi9kaXN0L3NvbWVmaWxlJztcbi8vXG4vLyBhbmQgb3RoZXIgaGVscGVycyBmb3IgdmVuZG9yL2dsb2JhbC9oZWxwZXJcbi8vIGltcG9ydCBtZWRpYXF1ZXJ5IGZyb20gJyNoZWxwZXIvbWVkaWFxdWVyeSc7XG4vLyBpbXBvcnQgZm9udGxvYWRlciBmcm9tICcjZ2xvYmFsL2ZvbnRsb2FkZXInO1xuLy8gaW1wb3J0IHNvbWVmaWxlIGZyb20gJyN2ZW5kb3Ivc29tZWZpbGUnO1xuLy9cbi8vIEFuZCBmaW5hbGx5OiBhIHNob3J0Y3V0IHRvIGltcG9ydCBwYXR0ZXJuc+KAlHlvdSBkb24ndCBoYXZlIHRvIHNwZWNpZnlcbi8vIHRoZSBmdWxsIHBhdGgsIGJlY2F1c2UgcGF0dGVybi1uYW1lcyBzaG91bGQgYmUgdW5pcXVlIGFueXdheTpcbi8vIGltcG9ydCBidXR0b24gZnJvbSAnI3BhdHRlcm4vYnV0dG9uJztcblxuLy8gVE9ETyByZWZhY3RvciB0byB+aGVscGVyXG5pbXBvcnQgbWVkaWFxdWVyeSBmcm9tICd+aGVscGVyL21lZGlhcXVlcnknO1xuXG4vLyBUT0RPIHJlbW92ZSB0aGlzLCBpbnRyb2R1Y2Ugbm9kZWxpc3QuZm9yRWFjaCBwb2x5ZmlsbFxuaW1wb3J0IHNlbGVjdCBmcm9tICdzZWxlY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgKHNjb3BlID0gZG9jdW1lbnQpID0+IHtcbiAgY29uc3QgZXhhbXBsZXMgPSBzZWxlY3QuYWxsKCcuanMtZXhhbXBsZScsIHNjb3BlKTtcblxuICBleGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgIGlmIChtZWRpYXF1ZXJ5KCdsJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBEb2luZyBzb21ldGhpbmcgd2l0aCAke2V4YW1wbGV9IGFib3ZlIGJyZWFrcG9pbnQgTGApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRG9pbmcgc29tZXRoaW5nIHdpdGggJHtleGFtcGxlfSBiZWxvdyBicmVha3BvaW50IExgKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qIVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTcgSWNvTW9vbi5pb1xuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL3N2Z3h1c2VcbiAqIEB2ZXJzaW9uICAgMS4yLjZcbiAqL1xuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSAqL1xuLypnbG9iYWwgWERvbWFpblJlcXVlc3QsIE11dGF0aW9uT2JzZXJ2ZXIsIHdpbmRvdyAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBob2xkcyB4aHIgb2JqZWN0cyB0byBwcmV2ZW50IG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICAgIHZhciBjaGVja1VzZUVsZW1zO1xuICAgICAgICB2YXIgdGlkOyAvLyB0aW1lb3V0IGlkXG4gICAgICAgIHZhciBkZWJvdW5jZWRDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2VkQ2hlY2spO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAvLyBJbiBJRSA5LCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgY2FuIG9ubHkgYmUgc2VudCB1c2luZyBYRG9tYWluUmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IHdvdWxkIGZhaWwgaWYgQ09SUyBoZWFkZXJzIGFyZSBub3Qgc2V0LlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCBYRG9tYWluUmVxdWVzdCBzaG91bGQgb25seSBiZSB1c2VkIHdpdGggY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzLlxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0T3JpZ2luKGxvYykge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmIChsb2MucHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhID0gbG9jO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpICsgYS5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgb3JpZ2luO1xuICAgICAgICAgICAgdmFyIG9yaWdpbjI7XG4gICAgICAgICAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IGdldE9yaWdpbihsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgb3JpZ2luMiA9IGdldE9yaWdpbih1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkICYmIG9yaWdpbjIgIT09IFwiXCIgJiYgb3JpZ2luMiAhPT0gb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYRG9tYWluUmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgeGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuICAgICAgICBjaGVja1VzZUVsZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJhc2U7XG4gICAgICAgICAgICB2YXIgYmNyO1xuICAgICAgICAgICAgdmFyIGZhbGxiYWNrID0gXCJcIjsgLy8gb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGluIGNhc2Ugbm8gYmFzZSBwYXRoIHRvIFNWRyBmaWxlIHdhcyBnaXZlbiBhbmQgbm8gc3ltYm9sIGRlZmluaXRpb24gd2FzIGZvdW5kLlxuICAgICAgICAgICAgdmFyIGhhc2g7XG4gICAgICAgICAgICB2YXIgaHJlZjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGluUHJvZ3Jlc3NDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgaXNIaWRkZW47XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciB1cmw7XG4gICAgICAgICAgICB2YXIgdXNlcztcbiAgICAgICAgICAgIHZhciB4aHI7XG4gICAgICAgICAgICBmdW5jdGlvbiBvYnNlcnZlSWZEb25lKCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRvbmUgd2l0aCBtYWtpbmcgY2hhbmdlcywgc3RhcnQgd2F0Y2hpbmcgZm9yIGNoYWduZXMgaW4gRE9NIGFnYWluXG4gICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGluUHJvZ3Jlc3NDb3VudCA9PT0gMCkgeyAvLyBpZiBhbGwgeGhycyB3ZXJlIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gbWFrZSBzdXJlIHRvIHJlbW92ZSBvbGQgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUNoYW5nZXMoKTsgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0clVwZGF0ZUZ1bmMoc3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtzcGVjLmJhc2VdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlYy51c2VFbC5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbmxvYWRGdW5jKHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwieFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZShzdmcsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkVycm9yVGltZW91dCh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gc3RvcCB3YXRjaGluZyBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgIC8vIGZpbmQgYWxsIHVzZSBlbGVtZW50c1xuICAgICAgICAgICAgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWYgPSB1c2VzW2ldLmdldEF0dHJpYnV0ZShcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBocmVmLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBbXCJcIiwgXCJcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhc2UgPSB1cmxbMF07XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVybFsxXTtcbiAgICAgICAgICAgICAgICBpc0hpZGRlbiA9IGJjciAmJiBiY3IubGVmdCA9PT0gMCAmJiBiY3IucmlnaHQgPT09IDAgJiYgYmNyLnRvcCA9PT0gMCAmJiBiY3IuYm90dG9tID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiY3IgJiYgYmNyLndpZHRoID09PSAwICYmIGJjci5oZWlnaHQgPT09IDAgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2UgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkcsIHRyeSB0byBmZXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpZiB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjayAmJiAhYmFzZS5sZW5ndGggJiYgaGFzaCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlc1tpXS5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VzW2ldLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIHVwZGF0aW5nIHhsaW5rOmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IGNhY2hlW2Jhc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWUgc2lnbmlmaWVzIHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIHdhcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0geGhyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb25sb2FkRnVuYyh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW2Jhc2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGlzIFVSTCBpZiB0aGUgdXNlIGVsZW1lbnQgd2FzIG5vdCBlbXB0eSBhbmQgbm8gcmVxdWVzdCB3YXMgc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FjaGVbYmFzZV0ub25sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgdHVybnMgb3V0IHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIGlzIG5vdCBuZWNlc3NhcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWJvcnQgdGhlIGluLXByb2dyZXNzIHhoci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtiYXNlXS5vbmxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2UubGVuZ3RoICYmIGNhY2hlW2Jhc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXMgPSBcIlwiO1xuICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aW5Mb2FkO1xuICAgICAgICB3aW5Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTsgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2FkIGV2ZW50IGZpcmVzIHdoZW4gYWxsIHJlc291cmNlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcsIHdoaWNoIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBTVkcgdXNlIGVsZW1lbnRzIGFyZSBlbXB0eS5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBhIGxpc3RlbmVyIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZCwgaW5pdGlhbGl6ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHdpbkxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0ICdzdmd4dXNlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge307XG4iLCJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vMy1nbG9iYWwvISgqLnRlc3R8Ki5jb25maWcpLmpzJztcbmltcG9ydCAqIGFzIHBhdHRlcm5zIGZyb20gJy4uL3BhdHRlcm5zLyoqLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5cbi8vIGFkZGl0aW9uYWwgc2FuaXR5IGNoZWNrIGZvciBtb2Rlcm4gYnJvd3NlcnPigJRhbmQgdGhlbiwgZW5oYW5jZSFcbmlmICgndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudCkge1xuICAvLyByZW1vdmUgdGhlIG5vLWpzIGNsYXNzXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuXG4gIC8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4gIC8vIGJ1dCBleGNsdWRlIHRlc3QgYW5kIGNvbmZpZyBmaWxlcyDigJQgdGhvc2Ugc2hvdWxkIG5vdCBiZSBleGVjdXRlZFxuICBbZ2xvYmFscywgcGF0dGVybnNdLmZvckVhY2goaXRlbXMgPT4ge1xuICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaXRlbXNbaV0oKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZiIsImciLCJsIiwiYSIsInB1c2giLCJsZW5ndGgiLCJtIiwic2hpZnQiLCJzZXRUaW1lb3V0IiwibiIsInAiLCJiIiwicSIsInIiLCJjIiwidCIsInUiLCJUeXBlRXJyb3IiLCJkIiwidGhlbiIsImNhbGwiLCJlIiwidiIsImgiLCJwcm90b3R5cGUiLCJ3IiwiayIsIngiLCJ3aW5kb3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhY2UiLCJhbGwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImJvZHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlTdGF0ZSIsImRldGFjaEV2ZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJzdHlsZSIsImNzc1RleHQiLCJ6Iiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsIkEiLCJwYXJlbnROb2RlIiwiQiIsImZhbWlseSIsIndlaWdodCIsInN0cmV0Y2giLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkoiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidmVuZG9yIiwiZXhlYyIsInVzZXJBZ2VudCIsInBhcnNlSW50IiwiZm9udHMiLCJLIiwiZm9udCIsIkwiLCJqb2luIiwibG9hZCIsIkgiLCJEYXRlIiwiZ2V0VGltZSIsIk0iLCJFcnJvciIsIk4iLCJjbGVhclRpbWVvdXQiLCJ5IiwicmVtb3ZlQ2hpbGQiLCJJIiwiaGlkZGVuIiwiZGlyIiwibW9kdWxlIiwiZm9udE9ic2VydmVycyIsInNlc3Npb25TdG9yYWdlIiwiZm9udHNMb2FkZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImZvbnRmYWNlIiwiT2JzZXJ2ZXIiLCJyZXBsYWNlIiwic2hvcnRjb2RlIiwiY3VzdG9tIiwicXVlcnkiLCJicmVha3BvaW50cyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2VsZWN0Iiwic2VsZWN0b3IiLCJwYXJlbnQiLCJhcmd1bWVudHMiLCJxdWVyeVNlbGVjdG9yIiwiZXhpc3RzIiwiQm9vbGVhbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImFwcGx5IiwiY3VycmVudCIsImkiLCJpaSIsImluZGV4T2YiLCJzY29wZSIsImV4YW1wbGVzIiwiZXhhbXBsZSIsIm1lZGlhcXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY2FjaGUiLCJjcmVhdGUiLCJjaGVja1VzZUVsZW1zIiwidGlkIiwiZGVib3VuY2VkQ2hlY2siLCJ1bm9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZXMiLCJkaXNjb25uZWN0IiwiaWdub3JlIiwiY3JlYXRlUmVxdWVzdCIsInVybCIsImdldE9yaWdpbiIsImxvYyIsInByb3RvY29sIiwidW5kZWZpbmVkIiwiaHJlZiIsImhvc3QiLCJSZXF1ZXN0Iiwib3JpZ2luIiwib3JpZ2luMiIsIlhNTEh0dHBSZXF1ZXN0IiwibG9jYXRpb24iLCJ3aXRoQ3JlZGVudGlhbHMiLCJYRG9tYWluUmVxdWVzdCIsInhsaW5rTlMiLCJiYXNlIiwiYmNyIiwiaGFzaCIsImluUHJvZ3Jlc3NDb3VudCIsImlzSGlkZGVuIiwidXNlcyIsInhociIsIm9ic2VydmVJZkRvbmUiLCJhdHRyVXBkYXRlRnVuYyIsInNwZWMiLCJ1c2VFbCIsInNldEF0dHJpYnV0ZU5TIiwiaGFzQXR0cmlidXRlIiwib25sb2FkRnVuYyIsInN2ZyIsIm9ubG9hZCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvbkVycm9yVGltZW91dCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOUyIsInNwbGl0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwib3BlbiIsInNlbmQiLCJhYm9ydCIsIndpbkxvYWQiLCJyZW1vdmUiLCJnbG9iYWxzIiwicGF0dGVybnMiLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FBQTtDQUFzRSxlQUFVO0FBQUM7Q0FBYSxRQUFJQSxDQUFKO0NBQUEsUUFBTUMsQ0FBQyxHQUFDLEVBQVI7O0NBQVcsYUFBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWE7Q0FBQ0YsTUFBQUEsQ0FBQyxDQUFDRyxJQUFGLENBQU9ELENBQVA7Q0FBVSxXQUFHRixDQUFD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
