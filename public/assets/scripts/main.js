(function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var fontfaceobserver_standalone = createCommonjsModule(function (module) {
	  /* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
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

	var fonts = {
		"default": {
			family: "Roboto",
			fallback: "sans-serif",
			weight: 400,
			style: "normal",
			fontface: true,
			file: "roboto-regular"
		},
		mono: {
			family: "Hack",
			fallback: "monospace",
			weight: 700,
			style: "normal",
			fontface: false
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
	var _patterns__1Identity$icon$icon = (() => {});

	const globals = {
	  fontloader: _globals_fontloader,
	  nodelistforeach: _globals_nodelistforeach,
	  vhfix: _globals_vhfix
	};
	Object.freeze(globals);
	const patterns = {
	  _1Identity$icon$icon: _patterns__1Identity$icon$icon
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwiLi4vLi4vLi4vc3JjL3NjcmlwdHMvMy1nbG9iYWwvZm9udGxvYWRlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL25vZGVsaXN0Zm9yZWFjaC5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL3ZoZml4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy8xLWlkZW50aXR5L2ljb24vaWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjEuMCAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiB0KGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB1KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHooYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIEEoYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt6KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eihhKX07ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEM9bnVsbCxEPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUQpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7RD0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEQ9ITE7cmV0dXJuIER9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQi5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixyPTAsbj1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PW4/YihFcnJvcihcIlwiK24rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGIpfWUoKX0pLE49bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXtyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjKEVycm9yKFwiXCIrbitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpfSxuKX0pO1Byb21pc2UucmFjZShbTixNXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChyKTthKGMpfSxcbmIpfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHYoKXt2YXIgYjtpZihiPS0xIT1mJiYtMSE9Z3x8LTEhPWYmJi0xIT1ofHwtMSE9ZyYmLTEhPWgpKGI9ZiE9ZyYmZiE9aCYmZyE9aCl8fChudWxsPT09QyYmKGI9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEM9ISFiJiYoNTM2PnBhcnNlSW50KGJbMV0sMTApfHw1MzY9PT1wYXJzZUludChiWzFdLDEwKSYmMTE+PXBhcnNlSW50KGJbMl0sMTApKSksYj1DJiYoZj09dyYmZz09dyYmaD09d3x8Zj09eCYmZz09eCYmaD09eHx8Zj09eSYmZz09eSYmaD09eSkpLGI9IWI7YiYmKGQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGNsZWFyVGltZW91dChyKSxhKGMpKX1mdW5jdGlvbiBJKCl7aWYoKG5ldyBEYXRlKS5nZXRUaW1lKCktSD49bilkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxiKEVycm9yKFwiXCIrXG5uK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLGc9cC5hLm9mZnNldFdpZHRoLGg9cS5hLm9mZnNldFdpZHRoLHYoKTtyPXNldFRpbWVvdXQoSSw1MCl9fXZhciBlPW5ldyB0KGspLHA9bmV3IHQoaykscT1uZXcgdChrKSxmPS0xLGc9LTEsaD0tMSx3PS0xLHg9LTEseT0tMSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5kaXI9XCJsdHJcIjt1KGUsTChjLFwic2Fucy1zZXJpZlwiKSk7dShwLEwoYyxcInNlcmlmXCIpKTt1KHEsTChjLFwibW9ub3NwYWNlXCIpKTtkLmFwcGVuZENoaWxkKGUuYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2QuYXBwZW5kQ2hpbGQocS5hKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3c9ZS5hLm9mZnNldFdpZHRoO3g9cC5hLm9mZnNldFdpZHRoO3k9cS5hLm9mZnNldFdpZHRoO0koKTtBKGUsZnVuY3Rpb24oYSl7Zj1hO3YoKX0pO3UoZSxcbkwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO0EocCxmdW5jdGlvbihhKXtnPWE7digpfSk7dShwLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtBKHEsZnVuY3Rpb24oYSl7aD1hO3YoKX0pO3UocSxMKGMsJ1wiJytjLmZhbWlseSsnXCIsbW9ub3NwYWNlJykpfSl9KX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9Qjood2luZG93LkZvbnRGYWNlT2JzZXJ2ZXI9Qix3aW5kb3cuRm9udEZhY2VPYnNlcnZlci5wcm90b3R5cGUubG9hZD1CLnByb3RvdHlwZS5sb2FkKTt9KCkpO1xuIiwiaW1wb3J0IEZvbnRGYWNlT2JzZXJ2ZXIgZnJvbSAnZm9udGZhY2VvYnNlcnZlcic7XG5pbXBvcnQgeyBmb250cyB9IGZyb20gJ35jb25maWcvZm9udHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGZvbnRPYnNlcnZlcnMgPSBbXTtcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZm9udHMpLmZvckVhY2goZm9udCA9PiB7XG4gICAgY29uc3QgZiA9IGZvbnRzW2ZvbnRdO1xuXG4gICAgaWYgKGYuZm9udGZhY2UpIHtcbiAgICAgIGZvbnRPYnNlcnZlcnMucHVzaChcbiAgICAgICAgbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoZi5mYW1pbHkucmVwbGFjZSgvJy9nLCAnJyksIHtcbiAgICAgICAgICB3ZWlnaHQ6IGYud2VpZ2h0LFxuICAgICAgICAgIHN0eWxlOiBmLnN0eWxlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycykudGhlbigoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgICAvLyBPcHRpbWl6YXRpb24gZm9yIFJlcGVhdCBWaWV3c1xuICAgICAgc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHNldFZoID0gKCkgPT4ge1xuICAgIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICB9O1xuXG4gIHNldFZoKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzZXRWaCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCIvKiFcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE3IEljb01vb24uaW9cbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9zdmd4dXNlXG4gKiBAdmVyc2lvbiAgIDEuMi42XG4gKi9cbi8qanNsaW50IGJyb3dzZXI6IHRydWUgKi9cbi8qZ2xvYmFsIFhEb21haW5SZXF1ZXN0LCBNdXRhdGlvbk9ic2VydmVyLCB3aW5kb3cgKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gaG9sZHMgeGhyIG9iamVjdHMgdG8gcHJldmVudCBtdWx0aXBsZSByZXF1ZXN0c1xuICAgICAgICB2YXIgY2hlY2tVc2VFbGVtcztcbiAgICAgICAgdmFyIHRpZDsgLy8gdGltZW91dCBpZFxuICAgICAgICB2YXIgZGVib3VuY2VkQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGlkKTtcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcjtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlZENoZWNrKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjcmVhdGVSZXF1ZXN0ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgLy8gSW4gSUUgOSwgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIGNhbiBvbmx5IGJlIHNlbnQgdXNpbmcgWERvbWFpblJlcXVlc3QuXG4gICAgICAgICAgICAvLyBYRG9tYWluUmVxdWVzdCB3b3VsZCBmYWlsIGlmIENPUlMgaGVhZGVycyBhcmUgbm90IHNldC5cbiAgICAgICAgICAgIC8vIFRoZXJlZm9yZSwgWERvbWFpblJlcXVlc3Qgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aXRoIGNyb3NzIG9yaWdpbiByZXF1ZXN0cy5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE9yaWdpbihsb2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAobG9jLnByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGxvYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IGxvYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKSArIGEuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIG9yaWdpbjtcbiAgICAgICAgICAgIHZhciBvcmlnaW4yO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBnZXRPcmlnaW4obG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIG9yaWdpbjIgPSBnZXRPcmlnaW4odXJsKTtcbiAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCAmJiBvcmlnaW4yICE9PSBcIlwiICYmIG9yaWdpbjIgIT09IG9yaWdpbikge1xuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gWERvbWFpblJlcXVlc3QgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbiAgICAgICAgY2hlY2tVc2VFbGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBiYXNlO1xuICAgICAgICAgICAgdmFyIGJjcjtcbiAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IFwiXCI7IC8vIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpbiBjYXNlIG5vIGJhc2UgcGF0aCB0byBTVkcgZmlsZSB3YXMgZ2l2ZW4gYW5kIG5vIHN5bWJvbCBkZWZpbml0aW9uIHdhcyBmb3VuZC5cbiAgICAgICAgICAgIHZhciBoYXNoO1xuICAgICAgICAgICAgdmFyIGhyZWY7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBpblByb2dyZXNzQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGlzSGlkZGVuO1xuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgdmFyIHVzZXM7XG4gICAgICAgICAgICB2YXIgeGhyO1xuICAgICAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZUlmRG9uZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBkb25lIHdpdGggbWFraW5nIGNoYW5nZXMsIHN0YXJ0IHdhdGNoaW5nIGZvciBjaGFnbmVzIGluIERPTSBhZ2FpblxuICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpblByb2dyZXNzQ291bnQgPT09IDApIHsgLy8gaWYgYWxsIHhocnMgd2VyZSByZXNvbHZlZFxuICAgICAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzKCk7IC8vIG1ha2Ugc3VyZSB0byByZW1vdmUgb2xkIGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVDaGFuZ2VzKCk7IC8vIHdhdGNoIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGF0dHJVcGRhdGVGdW5jKHNwZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVbc3BlYy5iYXNlXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcInhsaW5rOmhyZWZcIiwgXCIjXCIgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWMudXNlRWwuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25sb2FkRnVuYyh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInhcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdmc7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB4LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHN2ZyA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIilbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoc3ZnLCBib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25FcnJvclRpbWVvdXQoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzKCk7IC8vIHN0b3Agd2F0Y2hpbmcgZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAvLyBmaW5kIGFsbCB1c2UgZWxlbWVudHNcbiAgICAgICAgICAgIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gdXNlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFpbGVkIHRvIGdldCBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIHVzZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGJjciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBocmVmID0gdXNlc1tpXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwiaHJlZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdXNlc1tpXS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmIChocmVmICYmIGhyZWYuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaHJlZi5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gW1wiXCIsIFwiXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiYXNlID0gdXJsWzBdO1xuICAgICAgICAgICAgICAgIGhhc2ggPSB1cmxbMV07XG4gICAgICAgICAgICAgICAgaXNIaWRkZW4gPSBiY3IgJiYgYmNyLmxlZnQgPT09IDAgJiYgYmNyLnJpZ2h0ID09PSAwICYmIGJjci50b3AgPT09IDAgJiYgYmNyLmJvdHRvbSA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoYmNyICYmIGJjci53aWR0aCA9PT0gMCAmJiBiY3IuaGVpZ2h0ID09PSAwICYmICFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBvcHRpb25hbCBmYWxsYmFjayBVUkwgaWYgdGhlcmUgaXMgbm8gcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsIFNWR1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2sgJiYgIWJhc2UubGVuZ3RoICYmIGhhc2ggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlID0gZmFsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXNbaV0uaGFzQXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcInhsaW5rOmhyZWZcIiwgaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZSB1cGRhdGluZyB4bGluazpocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBjYWNoZVtiYXNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlIHNpZ25pZmllcyB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyB3YXMgbm90IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUVsOiB1c2VzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG9ubG9hZEZ1bmMoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gb25FcnJvclRpbWVvdXQoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtiYXNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhpcyBVUkwgaWYgdGhlIHVzZSBlbGVtZW50IHdhcyBub3QgZW1wdHkgYW5kIG5vIHJlcXVlc3Qgd2FzIHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhY2hlW2Jhc2VdLm9ubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IHR1cm5zIG91dCB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyBpcyBub3QgbmVjZXNzYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFib3J0IHRoZSBpbi1wcm9ncmVzcyB4aHIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVbYmFzZV0ub25sb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmxlbmd0aCAmJiBjYWNoZVtiYXNlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VzID0gXCJcIjtcbiAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgd2luTG9hZDtcbiAgICAgICAgd2luTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7IC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAvLyBUaGUgbG9hZCBldmVudCBmaXJlcyB3aGVuIGFsbCByZXNvdXJjZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLCB3aGljaCBhbGxvd3MgZGV0ZWN0aW5nIHdoZXRoZXIgU1ZHIHVzZSBlbGVtZW50cyBhcmUgZW1wdHkuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luTG9hZCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgYSBsaXN0ZW5lciBpZiB0aGUgZG9jdW1lbnQgaXMgYWxyZWFkeSBsb2FkZWQsIGluaXRpYWxpemUgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICB3aW5Mb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCkpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCAnc3ZneHVzZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHt9O1xuIiwiaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuLzMtZ2xvYmFsLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5pbXBvcnQgKiBhcyBwYXR0ZXJucyBmcm9tICcuLi9wYXR0ZXJucy8qKi8hKCoudGVzdHwqLmNvbmZpZykuanMnO1xuXG4vLyBqcyBoYXMgbG9hZGVk4oCUcmVtb3ZlIHRoZSBuby1qcyBjbGFzc1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbi8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4vLyBidXQgZXhjbHVkZSB0ZXN0IGFuZCBjb25maWcgZmlsZXMg4oCUIHRob3NlIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbltnbG9iYWxzLCBwYXR0ZXJuc10uZm9yRWFjaChtb2R1bGUgPT4ge1xuICBPYmplY3Qua2V5cyhtb2R1bGUpLmZvckVhY2goaSA9PiB7XG4gICAgbW9kdWxlW2ldKCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsibCIsImEiLCJiIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJtIiwiYm9keSIsImMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiayIsInJlYWR5U3RhdGUiLCJkZXRhY2hFdmVudCIsInQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImgiLCJmIiwiZyIsInN0eWxlIiwiY3NzVGV4dCIsInUiLCJ6Iiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsIkEiLCJwYXJlbnROb2RlIiwiQiIsImZhbWlseSIsIndlaWdodCIsInN0cmV0Y2giLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkoiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmVuZG9yIiwiZXhlYyIsInVzZXJBZ2VudCIsInBhcnNlSW50IiwiZm9udHMiLCJLIiwiZm9udCIsIkwiLCJqb2luIiwicHJvdG90eXBlIiwibG9hZCIsInIiLCJuIiwiSCIsIkRhdGUiLCJnZXRUaW1lIiwiUHJvbWlzZSIsIk0iLCJlIiwiRXJyb3IiLCJ0aGVuIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIk4iLCJyYWNlIiwiY2xlYXJUaW1lb3V0IiwidiIsInciLCJ4IiwieSIsImQiLCJyZW1vdmVDaGlsZCIsIkkiLCJoaWRkZW4iLCJwIiwicSIsImRpciIsIm1vZHVsZSIsImZvbnRPYnNlcnZlcnMiLCJzZXNzaW9uU3RvcmFnZSIsImZvbnRzTG9hZGVkIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmb250ZmFjZSIsInB1c2giLCJGb250RmFjZU9ic2VydmVyIiwicmVwbGFjZSIsImFsbCIsIk5vZGVMaXN0IiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwiaSIsImNhbGwiLCJzZXRWaCIsInZoIiwiaW5uZXJIZWlnaHQiLCJzZXRQcm9wZXJ0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhY2hlIiwiY3JlYXRlIiwiY2hlY2tVc2VFbGVtcyIsInRpZCIsImRlYm91bmNlZENoZWNrIiwidW5vYnNlcnZlQ2hhbmdlcyIsIm9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVzIiwiZGlzY29ubmVjdCIsImlnbm9yZSIsImNyZWF0ZVJlcXVlc3QiLCJ1cmwiLCJnZXRPcmlnaW4iLCJsb2MiLCJwcm90b2NvbCIsInVuZGVmaW5lZCIsImhyZWYiLCJob3N0IiwiUmVxdWVzdCIsIm9yaWdpbiIsIm9yaWdpbjIiLCJYTUxIdHRwUmVxdWVzdCIsImxvY2F0aW9uIiwid2l0aENyZWRlbnRpYWxzIiwiWERvbWFpblJlcXVlc3QiLCJ4bGlua05TIiwiYmFzZSIsImJjciIsImhhc2giLCJpblByb2dyZXNzQ291bnQiLCJpc0hpZGRlbiIsInVzZXMiLCJ4aHIiLCJvYnNlcnZlSWZEb25lIiwiYXR0clVwZGF0ZUZ1bmMiLCJzcGVjIiwidXNlRWwiLCJzZXRBdHRyaWJ1dGVOUyIsImhhc0F0dHJpYnV0ZSIsIm9ubG9hZEZ1bmMiLCJzdmciLCJvbmxvYWQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwib25FcnJvclRpbWVvdXQiLCJvbmVycm9yIiwib250aW1lb3V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTlMiLCJzcGxpdCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm9wZW4iLCJzZW5kIiwiYWJvcnQiLCJ3aW5Mb2FkIiwicmVtb3ZlIiwiZ2xvYmFscyIsInBhdHRlcm5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUFBO0NBQXNFLGVBQVU7Q0FBQyxhQUFTQSxDQUFULENBQVdDLENBQVgsRUFBYUMsQ0FBYixFQUFlO0NBQUNDLE1BQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsR0FBMEJILENBQUMsQ0FBQ0csZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNEJGLENBQTVCLEVBQThCLENBQUMsQ0FBL0IsQ0FBMUIsR0FBNERELENBQUMsQ0FBQ0ksV0FBRixDQUFjLFFBQWQsRUFBdUJILENBQXZCLENBQTVEO0NBQXNGOztDQUFBLGFBQVNJLENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0NBQUNFLE1BQUFBLFFBQVEsQ0FBQ0ksSUFBVCxHQUFjTixDQUFDLEVBQWYsR0FBa0JFLFFBQVEsQ0FBQ0MsZ0JBQVQsR0FBMEJELFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLFNBQVNJLENBQVQsR0FBWTtDQUFDTCxRQUFBQSxRQUFRLENBQUNNLG1CQUFULENBQTZCLGtCQUE3QixFQUFnREQsQ0FBaEQ7Q0FBbURQLFFBQUFBLENBQUM7Q0FBRyxPQUFqSCxDQUExQixHQUE2SUUsUUFBUSxDQUFDRSxXQUFULENBQXFCLG9CQUFyQixFQUEwQyxTQUFTSyxDQUFULEdBQVk7Q0FBQyxZQUFHLGlCQUFlUCxRQUFRLENBQUNRLFVBQXhCLElBQW9DLGNBQVlSLFFBQVEsQ0FBQ1EsVUFBNUQsRUFBdUVSLFFBQVEsQ0FBQ1MsV0FBVCxDQUFxQixvQkFBckIsRUFBMENGLENBQTFDLEdBQTZDVCxDQUFDLEVBQTlDO0NBQWlELE9BQS9LLENBQS9KO0NB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
