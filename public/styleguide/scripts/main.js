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

var breakpoints = { "s": 480, "m": 640, "l": 720, "xl": 960, "xxl": 1100, "xxxl": 1400, "custom": "(max-width: 30em)" };
var fonts = { "default": { "family": "Roboto", "fallback": "sans-serif", "weight": 400, "style": "normal", "fontface": true, "file": "roboto-regular" } };

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
	return (parent || document).querySelector(selector);
}

/**
 * @param {string} selector   One or more CSS selectors separated by commas
 * @param {Element} [parent]  The element to look inside of
 * @return {boolean}          Whether it's been found
 */
select.exists = function (selector, parent) {
	return Boolean(select(selector, parent));
};

/**
 * @param {string} selector               One or more CSS selectors separated by commas
 * @param {Element|Element[]} [parent]    The element or list of elements to look inside of
 * @return {Element[]}                    An array of elements found
 */
select.all = function (selector, parent) {
	// Can be: select.all('selector') or select.all('selector', singleElementOrDocument)
	if (!parent || typeof parent.querySelectorAll === 'function') {
		return Array.apply(null, (parent || document).querySelectorAll(selector));
	}

	var current;
	var i;
	var ii;
	var all = [];
	for (i = 0; i < parent.length; i++) {
		current = parent[i].querySelectorAll(selector);
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
            var fallback = ""; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
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
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zZWxlY3QtZG9tL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb21wb25lbnRzL2ljb24vaWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjAuMTMgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7dmFyIGYsZz1bXTtmdW5jdGlvbiBsKGEpe2cucHVzaChhKTsxPT1nLmxlbmd0aCYmZigpfWZ1bmN0aW9uIG0oKXtmb3IoO2cubGVuZ3RoOylnWzBdKCksZy5zaGlmdCgpfWY9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KG0pfTtmdW5jdGlvbiBuKGEpe3RoaXMuYT1wO3RoaXMuYj12b2lkIDA7dGhpcy5mPVtdO3ZhciBiPXRoaXM7dHJ5e2EoZnVuY3Rpb24oYSl7cShiLGEpfSxmdW5jdGlvbihhKXtyKGIsYSl9KX1jYXRjaChjKXtyKGIsYyl9fXZhciBwPTI7ZnVuY3Rpb24gdChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtjKGEpfSl9ZnVuY3Rpb24gdShhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYil7YihhKX0pfWZ1bmN0aW9uIHEoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgYz0hMTt0cnl7dmFyIGQ9YiYmYi50aGVuO2lmKG51bGwhPWImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkKXtkLmNhbGwoYixmdW5jdGlvbihiKXtjfHxxKGEsYik7Yz0hMH0sZnVuY3Rpb24oYil7Y3x8cihhLGIpO2M9ITB9KTtyZXR1cm59fWNhdGNoKGUpe2N8fHIoYSxlKTtyZXR1cm59YS5hPTA7YS5iPWI7dihhKX19XG5mdW5jdGlvbiByKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7YS5hPTE7YS5iPWI7dihhKX19ZnVuY3Rpb24gdihhKXtsKGZ1bmN0aW9uKCl7aWYoYS5hIT1wKWZvcig7YS5mLmxlbmd0aDspe3ZhciBiPWEuZi5zaGlmdCgpLGM9YlswXSxkPWJbMV0sZT1iWzJdLGI9YlszXTt0cnl7MD09YS5hP1wiZnVuY3Rpb25cIj09dHlwZW9mIGM/ZShjLmNhbGwodm9pZCAwLGEuYikpOmUoYS5iKToxPT1hLmEmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2UoZC5jYWxsKHZvaWQgMCxhLmIpKTpiKGEuYikpfWNhdGNoKGgpe2IoaCl9fX0pfW4ucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYyh2b2lkIDAsYSl9O24ucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBuZXcgbihmdW5jdGlvbihkLGUpe2MuZi5wdXNoKFthLGIsZCxlXSk7dihjKX0pfTtcbmZ1bmN0aW9uIHcoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gZnVuY3Rpb24oZCl7aFtjXT1kO2UrPTE7ZT09YS5sZW5ndGgmJmIoaCl9fXZhciBlPTAsaD1bXTswPT1hLmxlbmd0aCYmYihoKTtmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srPTEpdShhW2tdKS5jKGQoayksYyl9KX1mdW5jdGlvbiB4KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCs9MSl1KGFbZF0pLmMoYixjKX0pfTt3aW5kb3cuUHJvbWlzZXx8KHdpbmRvdy5Qcm9taXNlPW4sd2luZG93LlByb21pc2UucmVzb2x2ZT11LHdpbmRvdy5Qcm9taXNlLnJlamVjdD10LHdpbmRvdy5Qcm9taXNlLnJhY2U9eCx3aW5kb3cuUHJvbWlzZS5hbGw9dyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbj1uLnByb3RvdHlwZS5jLHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdPW4ucHJvdG90eXBlLmcpO30oKSk7XG5cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiByKGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB0KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHkoYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIHooYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt5KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eShhKX07ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEI9bnVsbCxDPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUMpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Qz0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEM9ITE7cmV0dXJuIEN9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixxPTAsRD1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQ/YigpOmRvY3VtZW50LmZvbnRzLmxvYWQoTChjLCdcIicrYy5mYW1pbHkrJ1wiJyksaykudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sZnVuY3Rpb24oKXtiKCl9KX1lKCl9KSxOPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7cT1zZXRUaW1lb3V0KGMsRCl9KTtQcm9taXNlLnJhY2UoW04sTV0pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocSk7YShjKX0sZnVuY3Rpb24oKXtiKGMpfSl9ZWxzZSBtKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdSgpe3ZhciBiO2lmKGI9LTEhPVxuZiYmLTEhPWd8fC0xIT1mJiYtMSE9aHx8LTEhPWcmJi0xIT1oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUImJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxCPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QiYmKGY9PXYmJmc9PXYmJmg9PXZ8fGY9PXcmJmc9PXcmJmg9PXd8fGY9PXgmJmc9PXgmJmg9PXgpKSxiPSFiO2ImJihkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQocSksYShjKSl9ZnVuY3Rpb24gSSgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQpZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYihjKTtlbHNle3ZhciBhPWRvY3VtZW50LmhpZGRlbjtpZighMD09PWF8fHZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsXG5nPW4uYS5vZmZzZXRXaWR0aCxoPXAuYS5vZmZzZXRXaWR0aCx1KCk7cT1zZXRUaW1lb3V0KEksNTApfX12YXIgZT1uZXcgcihrKSxuPW5ldyByKGspLHA9bmV3IHIoayksZj0tMSxnPS0xLGg9LTEsdj0tMSx3PS0xLHg9LTEsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuZGlyPVwibHRyXCI7dChlLEwoYyxcInNhbnMtc2VyaWZcIikpO3QobixMKGMsXCJzZXJpZlwiKSk7dChwLEwoYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQobi5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt2PWUuYS5vZmZzZXRXaWR0aDt3PW4uYS5vZmZzZXRXaWR0aDt4PXAuYS5vZmZzZXRXaWR0aDtJKCk7eihlLGZ1bmN0aW9uKGEpe2Y9YTt1KCl9KTt0KGUsTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7eihuLGZ1bmN0aW9uKGEpe2c9YTt1KCl9KTt0KG4sTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO1xueihwLGZ1bmN0aW9uKGEpe2g9YTt1KCl9KTt0KHAsTChjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUE6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUEsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9QS5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsImltcG9ydCBPYnNlcnZlciBmcm9tICcjbW9kdWxlL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlcic7XG5pbXBvcnQgeyBmb250cyB9IGZyb20gJyNzaGFyZWRjb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGZvbnRPYnNlcnZlcnMgPSBbXTtcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZm9udHMpLmZvckVhY2goZm9udCA9PiB7XG4gICAgY29uc3QgZiA9IGZvbnRzW2ZvbnRdO1xuXG4gICAgaWYgKGYuZm9udGZhY2UpIHtcbiAgICAgIGZvbnRPYnNlcnZlcnMucHVzaChcbiAgICAgICAgbmV3IE9ic2VydmVyKGYuZmFtaWx5LnJlcGxhY2UoLycvZywgJycpLCB7XG4gICAgICAgICAgd2VpZ2h0OiBmLndlaWdodCxcbiAgICAgICAgICBzdHlsZTogZi5zdHlsZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgICAvLyBPcHRpbWl6YXRpb24gZm9yIFJlcGVhdCBWaWV3c1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSAnI3NoYXJlZGNvbmZpZyc7XG5cbi8vIHNhbWUgdXNhZ2UgYXMgdGhlIG1lZGlhcXVlcnktc2Nzcy1taXhpbiwganVzdFxuLy8gcHJvdmlkZSB0aGUgc2hvcnRjb2RlIHVzZWQgaW4gdGhlIHNjc3MtZmlsZSBhbmQgaWYgaXRcbi8vIGlzIGEgY3VzdG9tIHF1ZXJ5LiB0aGlzIG1vZHVsZSByZXR1cm4gdHJ1ZSBpZiB0aGVcbi8vIGdpdmVuIGJyZWFrcG9pbnQgbWF0Y2hlcyBvciBmYWxzZSBpZiBpdCBkb2VzbnRcbmV4cG9ydCBkZWZhdWx0IChzaG9ydGNvZGUsIGN1c3RvbSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gKGN1c3RvbSkgPyBicmVha3BvaW50c1tzaG9ydGNvZGVdIDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHNbc2hvcnRjb2RlXX1weClgO1xuXG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgICBPbmUgb3IgbW9yZSBDU1Mgc2VsZWN0b3JzIHNlcGFyYXRlZCBieSBjb21tYXNcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3BhcmVudF0gIFRoZSBlbGVtZW50IHRvIGxvb2sgaW5zaWRlIG9mXG4gKiBAcmV0dXJuIHs/RWxlbWVudH0gICAgICAgICBUaGUgZWxlbWVudCBmb3VuZCwgaWYgYW55XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3RvciwgcGFyZW50KSB7XG5cdHJldHVybiAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgICBPbmUgb3IgbW9yZSBDU1Mgc2VsZWN0b3JzIHNlcGFyYXRlZCBieSBjb21tYXNcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3BhcmVudF0gIFRoZSBlbGVtZW50IHRvIGxvb2sgaW5zaWRlIG9mXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICBXaGV0aGVyIGl0J3MgYmVlbiBmb3VuZFxuICovXG5zZWxlY3QuZXhpc3RzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcblx0cmV0dXJuIEJvb2xlYW4oc2VsZWN0KHNlbGVjdG9yLCBwYXJlbnQpKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yICAgICAgICAgICAgICAgT25lIG9yIG1vcmUgQ1NTIHNlbGVjdG9ycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiBAcGFyYW0ge0VsZW1lbnR8RWxlbWVudFtdfSBbcGFyZW50XSAgICBUaGUgZWxlbWVudCBvciBsaXN0IG9mIGVsZW1lbnRzIHRvIGxvb2sgaW5zaWRlIG9mXG4gKiBAcmV0dXJuIHtFbGVtZW50W119ICAgICAgICAgICAgICAgICAgICBBbiBhcnJheSBvZiBlbGVtZW50cyBmb3VuZFxuICovXG5zZWxlY3QuYWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcblx0Ly8gQ2FuIGJlOiBzZWxlY3QuYWxsKCdzZWxlY3RvcicpIG9yIHNlbGVjdC5hbGwoJ3NlbGVjdG9yJywgc2luZ2xlRWxlbWVudE9yRG9jdW1lbnQpXG5cdGlmICghcGFyZW50IHx8IHR5cGVvZiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5hcHBseShudWxsLCAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cdH1cblxuXHR2YXIgY3VycmVudDtcblx0dmFyIGk7XG5cdHZhciBpaTtcblx0dmFyIGFsbCA9IFtdO1xuXHRmb3IgKGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y3VycmVudCA9IHBhcmVudFtpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRmb3IgKGlpID0gMDsgaWkgPCBjdXJyZW50Lmxlbmd0aDsgaWkrKykge1xuXHRcdFx0aWYgKGFsbC5pbmRleE9mKGN1cnJlbnRbaWldKSA8IDApIHtcblx0XHRcdFx0YWxsLnB1c2goY3VycmVudFtpaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3Q7XG4iLCIvLyBZb3UgY2FuIGltcG9ydCBhbnl0aGluZyB5b3Ugd2FudCBoZXJlLCBucG0tbW9kdWxlcywgb3RoZXIgZmlsZXMgZXRjLiBwcC5cbi8vIEV4YW1wbGVzOlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJztcbi8vXG4vLyBUaGVyZSBpcyBhIHNob3J0Y3V0IGZvciBpbXBvcnRpbmcgdGhlIFNhc3Mtc2hhcmVkLmpzb24gY29uZmlnXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJyNzaGFyZWRjb25maWcnXG4vL1xuLy8gYW5kIGEgc2hvcnRjdXQgZm9yIGltcG9ydGluZyBhIGZpbGUgZnJvbSB0aGUgbm9kZV9tb2R1bGVzLWZvbGRlclxuLy8gaW1wb3J0IHNvbWVsaWIgZnJvbSAnI21vZHVsZS9zb21lbGliL2Rpc3Qvc29tZWZpbGUnO1xuLy9cbi8vIGFuZCBvdGhlciBoZWxwZXJzIGZvciB2ZW5kb3IvZ2xvYmFsL2hlbHBlclxuLy8gaW1wb3J0IG1lZGlhcXVlcnkgZnJvbSAnI2hlbHBlci9tZWRpYXF1ZXJ5Jztcbi8vIGltcG9ydCBmb250bG9hZGVyIGZyb20gJyNnbG9iYWwvZm9udGxvYWRlcic7XG4vLyBpbXBvcnQgc29tZWZpbGUgZnJvbSAnI3ZlbmRvci9zb21lZmlsZSc7XG4vL1xuLy8gQW5kIGZpbmFsbHk6IGEgc2hvcnRjdXQgdG8gaW1wb3J0IHBhdHRlcm5z4oCUeW91IGRvbid0IGhhdmUgdG8gc3BlY2lmeVxuLy8gdGhlIGZ1bGwgcGF0aCwgYmVjYXVzZSBwYXR0ZXJuLW5hbWVzIHNob3VsZCBiZSB1bmlxdWUgYW55d2F5OlxuLy8gaW1wb3J0IGJ1dHRvbiBmcm9tICcjcGF0dGVybi9idXR0b24nO1xuXG5pbXBvcnQgbWVkaWFxdWVyeSBmcm9tICcjaGVscGVyL21lZGlhcXVlcnknO1xuaW1wb3J0IHNlbGVjdCBmcm9tICdzZWxlY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgKHNjb3BlID0gZG9jdW1lbnQpID0+IHtcbiAgY29uc3QgZXhhbXBsZXMgPSBzZWxlY3QuYWxsKCcuanMtZXhhbXBsZScsIHNjb3BlKTtcblxuICBleGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgIGlmIChtZWRpYXF1ZXJ5KCdsJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBEb2luZyBzb21ldGhpbmcgd2l0aCAke2V4YW1wbGV9IGFib3ZlIGJyZWFrcG9pbnQgTGApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRG9pbmcgc29tZXRoaW5nIHdpdGggJHtleGFtcGxlfSBiZWxvdyBicmVha3BvaW50IExgKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qIVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTcgSWNvTW9vbi5pb1xuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL3N2Z3h1c2VcbiAqIEB2ZXJzaW9uICAgMS4yLjZcbiAqL1xuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSAqL1xuLypnbG9iYWwgWERvbWFpblJlcXVlc3QsIE11dGF0aW9uT2JzZXJ2ZXIsIHdpbmRvdyAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBob2xkcyB4aHIgb2JqZWN0cyB0byBwcmV2ZW50IG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICAgIHZhciBjaGVja1VzZUVsZW1zO1xuICAgICAgICB2YXIgdGlkOyAvLyB0aW1lb3V0IGlkXG4gICAgICAgIHZhciBkZWJvdW5jZWRDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2VkQ2hlY2spO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAvLyBJbiBJRSA5LCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgY2FuIG9ubHkgYmUgc2VudCB1c2luZyBYRG9tYWluUmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IHdvdWxkIGZhaWwgaWYgQ09SUyBoZWFkZXJzIGFyZSBub3Qgc2V0LlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCBYRG9tYWluUmVxdWVzdCBzaG91bGQgb25seSBiZSB1c2VkIHdpdGggY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzLlxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0T3JpZ2luKGxvYykge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmIChsb2MucHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhID0gbG9jO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpICsgYS5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgb3JpZ2luO1xuICAgICAgICAgICAgdmFyIG9yaWdpbjI7XG4gICAgICAgICAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IGdldE9yaWdpbihsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgb3JpZ2luMiA9IGdldE9yaWdpbih1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkICYmIG9yaWdpbjIgIT09IFwiXCIgJiYgb3JpZ2luMiAhPT0gb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYRG9tYWluUmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgeGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuICAgICAgICBjaGVja1VzZUVsZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJhc2U7XG4gICAgICAgICAgICB2YXIgYmNyO1xuICAgICAgICAgICAgdmFyIGZhbGxiYWNrID0gXCJcIjsgLy8gb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGluIGNhc2Ugbm8gYmFzZSBwYXRoIHRvIFNWRyBmaWxlIHdhcyBnaXZlbiBhbmQgbm8gc3ltYm9sIGRlZmluaXRpb24gd2FzIGZvdW5kLlxuICAgICAgICAgICAgdmFyIGhhc2g7XG4gICAgICAgICAgICB2YXIgaHJlZjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGluUHJvZ3Jlc3NDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgaXNIaWRkZW47XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciB1cmw7XG4gICAgICAgICAgICB2YXIgdXNlcztcbiAgICAgICAgICAgIHZhciB4aHI7XG4gICAgICAgICAgICBmdW5jdGlvbiBvYnNlcnZlSWZEb25lKCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRvbmUgd2l0aCBtYWtpbmcgY2hhbmdlcywgc3RhcnQgd2F0Y2hpbmcgZm9yIGNoYWduZXMgaW4gRE9NIGFnYWluXG4gICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGluUHJvZ3Jlc3NDb3VudCA9PT0gMCkgeyAvLyBpZiBhbGwgeGhycyB3ZXJlIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gbWFrZSBzdXJlIHRvIHJlbW92ZSBvbGQgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUNoYW5nZXMoKTsgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0clVwZGF0ZUZ1bmMoc3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtzcGVjLmJhc2VdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlYy51c2VFbC5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbmxvYWRGdW5jKHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwieFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZShzdmcsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkVycm9yVGltZW91dCh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gc3RvcCB3YXRjaGluZyBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgIC8vIGZpbmQgYWxsIHVzZSBlbGVtZW50c1xuICAgICAgICAgICAgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWYgPSB1c2VzW2ldLmdldEF0dHJpYnV0ZShcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBocmVmLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBbXCJcIiwgXCJcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhc2UgPSB1cmxbMF07XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVybFsxXTtcbiAgICAgICAgICAgICAgICBpc0hpZGRlbiA9IGJjciAmJiBiY3IubGVmdCA9PT0gMCAmJiBiY3IucmlnaHQgPT09IDAgJiYgYmNyLnRvcCA9PT0gMCAmJiBiY3IuYm90dG9tID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiY3IgJiYgYmNyLndpZHRoID09PSAwICYmIGJjci5oZWlnaHQgPT09IDAgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2UgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkcsIHRyeSB0byBmZXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpZiB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjayAmJiAhYmFzZS5sZW5ndGggJiYgaGFzaCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlc1tpXS5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VzW2ldLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIHVwZGF0aW5nIHhsaW5rOmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IGNhY2hlW2Jhc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWUgc2lnbmlmaWVzIHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIHdhcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0geGhyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb25sb2FkRnVuYyh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW2Jhc2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGlzIFVSTCBpZiB0aGUgdXNlIGVsZW1lbnQgd2FzIG5vdCBlbXB0eSBhbmQgbm8gcmVxdWVzdCB3YXMgc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FjaGVbYmFzZV0ub25sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgdHVybnMgb3V0IHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIGlzIG5vdCBuZWNlc3NhcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWJvcnQgdGhlIGluLXByb2dyZXNzIHhoci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtiYXNlXS5vbmxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2UubGVuZ3RoICYmIGNhY2hlW2Jhc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXMgPSBcIlwiO1xuICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aW5Mb2FkO1xuICAgICAgICB3aW5Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTsgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2FkIGV2ZW50IGZpcmVzIHdoZW4gYWxsIHJlc291cmNlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcsIHdoaWNoIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBTVkcgdXNlIGVsZW1lbnRzIGFyZSBlbXB0eS5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBhIGxpc3RlbmVyIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZCwgaW5pdGlhbGl6ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHdpbkxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0ICdzdmd4dXNlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge307XG4iLCJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vMy1nbG9iYWwvISgqLnRlc3R8Ki5jb25maWcpLmpzJztcbmltcG9ydCAqIGFzIHBhdHRlcm5zIGZyb20gJy4uL3BhdHRlcm5zLyoqLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5cbi8vIGFkZGl0aW9uYWwgc2FuaXR5IGNoZWNrIGZvciBtb2Rlcm4gYnJvd3NlcnPigJRhbmQgdGhlbiwgZW5oYW5jZSFcbmlmICgndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudCkge1xuICAvLyByZW1vdmUgdGhlIG5vLWpzIGNsYXNzXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuXG4gIC8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4gIC8vIGJ1dCBleGNsdWRlIHRlc3QgYW5kIGNvbmZpZyBmaWxlcyDigJQgdGhvc2Ugc2hvdWxkIG5vdCBiZSBleGVjdXRlZFxuICBbIGdsb2JhbHMsIHBhdHRlcm5zIF0uZm9yRWFjaChpdGVtcyA9PiB7XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaSA9PiB7XG4gICAgICBpdGVtc1tpXSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmIiwiZyIsImwiLCJhIiwicHVzaCIsImxlbmd0aCIsIm0iLCJzaGlmdCIsIm4iLCJwIiwiYiIsImMiLCJ0IiwidSIsInEiLCJUeXBlRXJyb3IiLCJkIiwidGhlbiIsImNhbGwiLCJyIiwiZSIsInYiLCJoIiwicHJvdG90eXBlIiwidyIsImsiLCJ4Iiwid2luZG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYWNlIiwiYWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYm9keSIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkZXRhY2hFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic3R5bGUiLCJjc3NUZXh0IiwieSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ6IiwicGFyZW50Tm9kZSIsIkEiLCJmYW1pbHkiLCJ3ZWlnaHQiLCJzdHJldGNoIiwiQiIsIkMiLCJFIiwiRiIsIkciLCJKIiwidGVzdCIsIm5hdmlnYXRvciIsInZlbmRvciIsImV4ZWMiLCJ1c2VyQWdlbnQiLCJwYXJzZUludCIsImZvbnRzIiwiSyIsImZvbnQiLCJMIiwiam9pbiIsImxvYWQiLCJEIiwiSCIsIkRhdGUiLCJnZXRUaW1lIiwiTSIsInNldFRpbWVvdXQiLCJOIiwicmVtb3ZlQ2hpbGQiLCJjbGVhclRpbWVvdXQiLCJJIiwiaGlkZGVuIiwiZGlyIiwibW9kdWxlIiwiZm9udE9ic2VydmVycyIsInNlc3Npb25TdG9yYWdlIiwiZm9udHNMb2FkZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXlzIiwiZm9yRWFjaCIsImZvbnRmYWNlIiwiT2JzZXJ2ZXIiLCJyZXBsYWNlIiwic2hvcnRjb2RlIiwiY3VzdG9tIiwicXVlcnkiLCJicmVha3BvaW50cyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2VsZWN0Iiwic2VsZWN0b3IiLCJwYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXhpc3RzIiwiQm9vbGVhbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImFwcGx5IiwiY3VycmVudCIsImkiLCJpaSIsImluZGV4T2YiLCJzY29wZSIsImV4YW1wbGVzIiwiZXhhbXBsZSIsIm1lZGlhcXVlcnkiLCJsb2ciLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsImNoZWNrVXNlRWxlbXMiLCJ0aWQiLCJkZWJvdW5jZWRDaGVjayIsInVub2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlQ2hhbmdlcyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiaWdub3JlIiwiY3JlYXRlUmVxdWVzdCIsInVybCIsImdldE9yaWdpbiIsImxvYyIsInByb3RvY29sIiwidW5kZWZpbmVkIiwiaHJlZiIsImhvc3QiLCJSZXF1ZXN0Iiwib3JpZ2luIiwib3JpZ2luMiIsIlhNTEh0dHBSZXF1ZXN0IiwibG9jYXRpb24iLCJ3aXRoQ3JlZGVudGlhbHMiLCJYRG9tYWluUmVxdWVzdCIsInhsaW5rTlMiLCJiYXNlIiwiYmNyIiwiZmFsbGJhY2siLCJoYXNoIiwiaW5Qcm9ncmVzc0NvdW50IiwiaXNIaWRkZW4iLCJ1c2VzIiwieGhyIiwib2JzZXJ2ZUlmRG9uZSIsImF0dHJVcGRhdGVGdW5jIiwic3BlYyIsInVzZUVsIiwic2V0QXR0cmlidXRlTlMiLCJoYXNBdHRyaWJ1dGUiLCJvbmxvYWRGdW5jIiwic3ZnIiwib25sb2FkIiwiaW5uZXJIVE1MIiwicmVzcG9uc2VUZXh0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwb3NpdGlvbiIsImhlaWdodCIsIm92ZXJmbG93IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm9uRXJyb3JUaW1lb3V0Iiwib25lcnJvciIsIm9udGltZW91dCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5TIiwic3BsaXQiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJnZXRFbGVtZW50QnlJZCIsIm9wZW4iLCJzZW5kIiwiYWJvcnQiLCJ3aW5Mb2FkIiwicmVtb3ZlIiwiZ2xvYmFscyIsInBhdHRlcm5zIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3dFQUF1RSxhQUFVO0FBQUMsQUFBYSxRQUFJQSxDQUFKO1FBQU1DLElBQUUsRUFBUixDQUFXLFNBQVNDLENBQVQsQ0FBV0MsQ0FBWCxFQUFhO1FBQUdDLElBQUYsQ0FBT0QsQ0FBUCxFQUFVLEtBQUdGLEVBQUVJLE1BQUwsSUFBYUwsR0FBYjtjQUEwQk0sQ0FBVCxHQUFZO2FBQU1MLEVBQUVJLE1BQVAsR0FBZUosRUFBRSxDQUFGLEtBQU9BLEVBQUVNLEtBQUYsRUFBUDtTQUFtQixhQUFVO2lCQUFZRCxDQUFYO0tBQWIsQ0FBNEIsU0FBU0UsQ0FBVCxDQUFXTCxDQUFYLEVBQWE7V0FBTUEsQ0FBTCxHQUFPTSxDQUFQLENBQVMsS0FBS0MsQ0FBTCxHQUFPLEtBQUssQ0FBWixDQUFjLEtBQUtWLENBQUwsR0FBTyxFQUFQLENBQVUsSUFBSVUsSUFBRSxJQUFOLENBQVcsSUFBRztVQUFHLFVBQVNQLENBQVQsRUFBVztZQUFHTyxDQUFGLEVBQUlQLENBQUo7U0FBZCxFQUFzQixVQUFTQSxDQUFULEVBQVc7WUFBR08sQ0FBRixFQUFJUCxDQUFKO1NBQWxDO09BQUosQ0FBK0MsT0FBTVEsQ0FBTixFQUFRO1VBQUdELENBQUYsRUFBSUMsQ0FBSjs7U0FBWUYsSUFBRSxDQUFOLENBQVEsU0FBU0csQ0FBVCxDQUFXVCxDQUFYLEVBQWE7YUFBUSxJQUFJSyxDQUFKLENBQU0sVUFBU0UsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7VUFBR1IsQ0FBRjtPQUFwQixDQUFQO2NBQTJDVSxDQUFULENBQVdWLENBQVgsRUFBYTthQUFRLElBQUlLLENBQUosQ0FBTSxVQUFTRSxDQUFULEVBQVc7VUFBR1AsQ0FBRjtPQUFsQixDQUFQO2NBQXlDVyxDQUFULENBQVdYLENBQVgsRUFBYU8sQ0FBYixFQUFlO1VBQUlQLEVB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
