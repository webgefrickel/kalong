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

  Object.keys(fonts).forEach(fontObject => {
    Object.keys(fonts[fontObject]).forEach(font => {
      const f = fonts[fontObject][font];
      if (f.fontface) {
        fontObservers.push(new fontfaceobserver(f.family.replace(/'/g, ''), {
          weight: f.weight,
          style: f.style
        }));
      }
    });
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


console.log('fuck yeah');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zZWxlY3QtZG9tL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb21wb25lbnRzL2ljb24vaWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjAuMTMgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7dmFyIGYsZz1bXTtmdW5jdGlvbiBsKGEpe2cucHVzaChhKTsxPT1nLmxlbmd0aCYmZigpfWZ1bmN0aW9uIG0oKXtmb3IoO2cubGVuZ3RoOylnWzBdKCksZy5zaGlmdCgpfWY9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KG0pfTtmdW5jdGlvbiBuKGEpe3RoaXMuYT1wO3RoaXMuYj12b2lkIDA7dGhpcy5mPVtdO3ZhciBiPXRoaXM7dHJ5e2EoZnVuY3Rpb24oYSl7cShiLGEpfSxmdW5jdGlvbihhKXtyKGIsYSl9KX1jYXRjaChjKXtyKGIsYyl9fXZhciBwPTI7ZnVuY3Rpb24gdChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtjKGEpfSl9ZnVuY3Rpb24gdShhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYil7YihhKX0pfWZ1bmN0aW9uIHEoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgYz0hMTt0cnl7dmFyIGQ9YiYmYi50aGVuO2lmKG51bGwhPWImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkKXtkLmNhbGwoYixmdW5jdGlvbihiKXtjfHxxKGEsYik7Yz0hMH0sZnVuY3Rpb24oYil7Y3x8cihhLGIpO2M9ITB9KTtyZXR1cm59fWNhdGNoKGUpe2N8fHIoYSxlKTtyZXR1cm59YS5hPTA7YS5iPWI7dihhKX19XG5mdW5jdGlvbiByKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7YS5hPTE7YS5iPWI7dihhKX19ZnVuY3Rpb24gdihhKXtsKGZ1bmN0aW9uKCl7aWYoYS5hIT1wKWZvcig7YS5mLmxlbmd0aDspe3ZhciBiPWEuZi5zaGlmdCgpLGM9YlswXSxkPWJbMV0sZT1iWzJdLGI9YlszXTt0cnl7MD09YS5hP1wiZnVuY3Rpb25cIj09dHlwZW9mIGM/ZShjLmNhbGwodm9pZCAwLGEuYikpOmUoYS5iKToxPT1hLmEmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2UoZC5jYWxsKHZvaWQgMCxhLmIpKTpiKGEuYikpfWNhdGNoKGgpe2IoaCl9fX0pfW4ucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYyh2b2lkIDAsYSl9O24ucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBuZXcgbihmdW5jdGlvbihkLGUpe2MuZi5wdXNoKFthLGIsZCxlXSk7dihjKX0pfTtcbmZ1bmN0aW9uIHcoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gZnVuY3Rpb24oZCl7aFtjXT1kO2UrPTE7ZT09YS5sZW5ndGgmJmIoaCl9fXZhciBlPTAsaD1bXTswPT1hLmxlbmd0aCYmYihoKTtmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srPTEpdShhW2tdKS5jKGQoayksYyl9KX1mdW5jdGlvbiB4KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCs9MSl1KGFbZF0pLmMoYixjKX0pfTt3aW5kb3cuUHJvbWlzZXx8KHdpbmRvdy5Qcm9taXNlPW4sd2luZG93LlByb21pc2UucmVzb2x2ZT11LHdpbmRvdy5Qcm9taXNlLnJlamVjdD10LHdpbmRvdy5Qcm9taXNlLnJhY2U9eCx3aW5kb3cuUHJvbWlzZS5hbGw9dyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbj1uLnByb3RvdHlwZS5jLHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdPW4ucHJvdG90eXBlLmcpO30oKSk7XG5cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiByKGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB0KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHkoYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIHooYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt5KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eShhKX07ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEI9bnVsbCxDPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUMpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Qz0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEM9ITE7cmV0dXJuIEN9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixxPTAsRD1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQ/YigpOmRvY3VtZW50LmZvbnRzLmxvYWQoTChjLCdcIicrYy5mYW1pbHkrJ1wiJyksaykudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sZnVuY3Rpb24oKXtiKCl9KX1lKCl9KSxOPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7cT1zZXRUaW1lb3V0KGMsRCl9KTtQcm9taXNlLnJhY2UoW04sTV0pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocSk7YShjKX0sZnVuY3Rpb24oKXtiKGMpfSl9ZWxzZSBtKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdSgpe3ZhciBiO2lmKGI9LTEhPVxuZiYmLTEhPWd8fC0xIT1mJiYtMSE9aHx8LTEhPWcmJi0xIT1oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUImJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxCPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QiYmKGY9PXYmJmc9PXYmJmg9PXZ8fGY9PXcmJmc9PXcmJmg9PXd8fGY9PXgmJmc9PXgmJmg9PXgpKSxiPSFiO2ImJihkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQocSksYShjKSl9ZnVuY3Rpb24gSSgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQpZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYihjKTtlbHNle3ZhciBhPWRvY3VtZW50LmhpZGRlbjtpZighMD09PWF8fHZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsXG5nPW4uYS5vZmZzZXRXaWR0aCxoPXAuYS5vZmZzZXRXaWR0aCx1KCk7cT1zZXRUaW1lb3V0KEksNTApfX12YXIgZT1uZXcgcihrKSxuPW5ldyByKGspLHA9bmV3IHIoayksZj0tMSxnPS0xLGg9LTEsdj0tMSx3PS0xLHg9LTEsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuZGlyPVwibHRyXCI7dChlLEwoYyxcInNhbnMtc2VyaWZcIikpO3QobixMKGMsXCJzZXJpZlwiKSk7dChwLEwoYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQobi5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt2PWUuYS5vZmZzZXRXaWR0aDt3PW4uYS5vZmZzZXRXaWR0aDt4PXAuYS5vZmZzZXRXaWR0aDtJKCk7eihlLGZ1bmN0aW9uKGEpe2Y9YTt1KCl9KTt0KGUsTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7eihuLGZ1bmN0aW9uKGEpe2c9YTt1KCl9KTt0KG4sTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO1xueihwLGZ1bmN0aW9uKGEpe2g9YTt1KCl9KTt0KHAsTChjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUE6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUEsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9QS5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsImltcG9ydCBPYnNlcnZlciBmcm9tICcjbW9kdWxlL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlcic7XG5pbXBvcnQgeyBmb250cyB9IGZyb20gJyNzaGFyZWRjb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGZvbnRPYnNlcnZlcnMgPSBbXTtcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZm9udHMpLmZvckVhY2goZm9udE9iamVjdCA9PiB7XG4gICAgT2JqZWN0LmtleXMoZm9udHNbZm9udE9iamVjdF0pLmZvckVhY2goZm9udCA9PiB7XG4gICAgICBjb25zdCBmID0gZm9udHNbZm9udE9iamVjdF1bZm9udF07XG4gICAgICBpZiAoZi5mb250ZmFjZSkge1xuICAgICAgICBmb250T2JzZXJ2ZXJzLnB1c2goXG4gICAgICAgICAgbmV3IE9ic2VydmVyKGYuZmFtaWx5LnJlcGxhY2UoLycvZywgJycpLCB7XG4gICAgICAgICAgICB3ZWlnaHQ6IGYud2VpZ2h0LFxuICAgICAgICAgICAgc3R5bGU6IGYuc3R5bGVcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpZiAoZm9udE9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgIFByb21pc2UuYWxsKGZvbnRPYnNlcnZlcnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICAgICAgLy8gT3B0aW1pemF0aW9uIGZvciBSZXBlYXQgVmlld3NcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJyNzaGFyZWRjb25maWcnO1xuXG4vLyBzYW1lIHVzYWdlIGFzIHRoZSBtZWRpYXF1ZXJ5LXNjc3MtbWl4aW4sIGp1c3Rcbi8vIHByb3ZpZGUgdGhlIHNob3J0Y29kZSB1c2VkIGluIHRoZSBzY3NzLWZpbGUgYW5kIGlmIGl0XG4vLyBpcyBhIGN1c3RvbSBxdWVyeS4gdGhpcyBtb2R1bGUgcmV0dXJuIHRydWUgaWYgdGhlXG4vLyBnaXZlbiBicmVha3BvaW50IG1hdGNoZXMgb3IgZmFsc2UgaWYgaXQgZG9lc250XG5leHBvcnQgZGVmYXVsdCAoc2hvcnRjb2RlLCBjdXN0b20gPSBmYWxzZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IChjdXN0b20pID8gYnJlYWtwb2ludHNbc2hvcnRjb2RlXSA6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzW3Nob3J0Y29kZV19cHgpYDtcblxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yICAgT25lIG9yIG1vcmUgQ1NTIHNlbGVjdG9ycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtwYXJlbnRdICBUaGUgZWxlbWVudCB0byBsb29rIGluc2lkZSBvZlxuICogQHJldHVybiB7P0VsZW1lbnR9ICAgICAgICAgVGhlIGVsZW1lbnQgZm91bmQsIGlmIGFueVxuICovXG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IsIHBhcmVudCkge1xuXHRyZXR1cm4gKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yICAgT25lIG9yIG1vcmUgQ1NTIHNlbGVjdG9ycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtwYXJlbnRdICBUaGUgZWxlbWVudCB0byBsb29rIGluc2lkZSBvZlxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgV2hldGhlciBpdCdzIGJlZW4gZm91bmRcbiAqL1xuc2VsZWN0LmV4aXN0cyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XG5cdHJldHVybiBCb29sZWFuKHNlbGVjdChzZWxlY3RvciwgcGFyZW50KSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAgICAgICAgICAgICAgIE9uZSBvciBtb3JlIENTUyBzZWxlY3RvcnMgc2VwYXJhdGVkIGJ5IGNvbW1hc1xuICogQHBhcmFtIHtFbGVtZW50fEVsZW1lbnRbXX0gW3BhcmVudF0gICAgVGhlIGVsZW1lbnQgb3IgbGlzdCBvZiBlbGVtZW50cyB0byBsb29rIGluc2lkZSBvZlxuICogQHJldHVybiB7RWxlbWVudFtdfSAgICAgICAgICAgICAgICAgICAgQW4gYXJyYXkgb2YgZWxlbWVudHMgZm91bmRcbiAqL1xuc2VsZWN0LmFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XG5cdC8vIENhbiBiZTogc2VsZWN0LmFsbCgnc2VsZWN0b3InKSBvciBzZWxlY3QuYWxsKCdzZWxlY3RvcicsIHNpbmdsZUVsZW1lbnRPckRvY3VtZW50KVxuXHRpZiAoIXBhcmVudCB8fCB0eXBlb2YgcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXHR9XG5cblx0dmFyIGN1cnJlbnQ7XG5cdHZhciBpO1xuXHR2YXIgaWk7XG5cdHZhciBhbGwgPSBbXTtcblx0Zm9yIChpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xuXHRcdGN1cnJlbnQgPSBwYXJlbnRbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdFx0Zm9yIChpaSA9IDA7IGlpIDwgY3VycmVudC5sZW5ndGg7IGlpKyspIHtcblx0XHRcdGlmIChhbGwuaW5kZXhPZihjdXJyZW50W2lpXSkgPCAwKSB7XG5cdFx0XHRcdGFsbC5wdXNoKGN1cnJlbnRbaWldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGFsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuIiwiLy8gWW91IGNhbiBpbXBvcnQgYW55dGhpbmcgeW91IHdhbnQgaGVyZSwgbnBtLW1vZHVsZXMsIG90aGVyIGZpbGVzIGV0Yy4gcHAuXG4vLyBFeGFtcGxlczpcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vL1xuLy8gVGhlcmUgaXMgYSBzaG9ydGN1dCBmb3IgaW1wb3J0aW5nIHRoZSBTYXNzLXNoYXJlZC5qc29uIGNvbmZpZ1xuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcjc2hhcmVkY29uZmlnJ1xuLy9cbi8vIGFuZCBhIHNob3J0Y3V0IGZvciBpbXBvcnRpbmcgYSBmaWxlIGZyb20gdGhlIG5vZGVfbW9kdWxlcy1mb2xkZXJcbi8vIGltcG9ydCBzb21lbGliIGZyb20gJyNtb2R1bGUvc29tZWxpYi9kaXN0L3NvbWVmaWxlJztcbi8vXG4vLyBhbmQgb3RoZXIgaGVscGVycyBmb3IgdmVuZG9yL2dsb2JhbC9oZWxwZXJcbi8vIGltcG9ydCBtZWRpYXF1ZXJ5IGZyb20gJyNoZWxwZXIvbWVkaWFxdWVyeSc7XG4vLyBpbXBvcnQgZm9udGxvYWRlciBmcm9tICcjZ2xvYmFsL2ZvbnRsb2FkZXInO1xuLy8gaW1wb3J0IHNvbWVmaWxlIGZyb20gJyN2ZW5kb3Ivc29tZWZpbGUnO1xuLy9cbi8vIEFuZCBmaW5hbGx5OiBhIHNob3J0Y3V0IHRvIGltcG9ydCBwYXR0ZXJuc+KAlHlvdSBkb24ndCBoYXZlIHRvIHNwZWNpZnlcbi8vIHRoZSBmdWxsIHBhdGgsIGJlY2F1c2UgcGF0dGVybi1uYW1lcyBzaG91bGQgYmUgdW5pcXVlIGFueXdheTpcbi8vIGltcG9ydCBidXR0b24gZnJvbSAnI3BhdHRlcm4vYnV0dG9uJztcblxuaW1wb3J0IG1lZGlhcXVlcnkgZnJvbSAnI2hlbHBlci9tZWRpYXF1ZXJ5JztcbmltcG9ydCBzZWxlY3QgZnJvbSAnc2VsZWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IChzY29wZSA9IGRvY3VtZW50KSA9PiB7XG4gIGNvbnN0IGV4YW1wbGVzID0gc2VsZWN0LmFsbCgnLmpzLWV4YW1wbGUnLCBzY29wZSk7XG5cbiAgZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICBpZiAobWVkaWFxdWVyeSgnbCcpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRG9pbmcgc29tZXRoaW5nIHdpdGggJHtleGFtcGxlfSBhYm92ZSBicmVha3BvaW50IExgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYERvaW5nIHNvbWV0aGluZyB3aXRoICR7ZXhhbXBsZX0gYmVsb3cgYnJlYWtwb2ludCBMYCk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKiFcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE3IEljb01vb24uaW9cbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9zdmd4dXNlXG4gKiBAdmVyc2lvbiAgIDEuMi42XG4gKi9cbi8qanNsaW50IGJyb3dzZXI6IHRydWUgKi9cbi8qZ2xvYmFsIFhEb21haW5SZXF1ZXN0LCBNdXRhdGlvbk9ic2VydmVyLCB3aW5kb3cgKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gaG9sZHMgeGhyIG9iamVjdHMgdG8gcHJldmVudCBtdWx0aXBsZSByZXF1ZXN0c1xuICAgICAgICB2YXIgY2hlY2tVc2VFbGVtcztcbiAgICAgICAgdmFyIHRpZDsgLy8gdGltZW91dCBpZFxuICAgICAgICB2YXIgZGVib3VuY2VkQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGlkKTtcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcjtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlZENoZWNrKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjcmVhdGVSZXF1ZXN0ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgLy8gSW4gSUUgOSwgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIGNhbiBvbmx5IGJlIHNlbnQgdXNpbmcgWERvbWFpblJlcXVlc3QuXG4gICAgICAgICAgICAvLyBYRG9tYWluUmVxdWVzdCB3b3VsZCBmYWlsIGlmIENPUlMgaGVhZGVycyBhcmUgbm90IHNldC5cbiAgICAgICAgICAgIC8vIFRoZXJlZm9yZSwgWERvbWFpblJlcXVlc3Qgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aXRoIGNyb3NzIG9yaWdpbiByZXF1ZXN0cy5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE9yaWdpbihsb2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAobG9jLnByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGxvYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IGxvYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKSArIGEuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIG9yaWdpbjtcbiAgICAgICAgICAgIHZhciBvcmlnaW4yO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBnZXRPcmlnaW4obG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIG9yaWdpbjIgPSBnZXRPcmlnaW4odXJsKTtcbiAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCAmJiBvcmlnaW4yICE9PSBcIlwiICYmIG9yaWdpbjIgIT09IG9yaWdpbikge1xuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gWERvbWFpblJlcXVlc3QgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbiAgICAgICAgY2hlY2tVc2VFbGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBiYXNlO1xuICAgICAgICAgICAgdmFyIGJjcjtcbiAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IFwiXCI7IC8vIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpbiBjYXNlIG5vIGJhc2UgcGF0aCB0byBTVkcgZmlsZSB3YXMgZ2l2ZW4gYW5kIG5vIHN5bWJvbCBkZWZpbml0aW9uIHdhcyBmb3VuZC5cbiAgICAgICAgICAgIHZhciBoYXNoO1xuICAgICAgICAgICAgdmFyIGhyZWY7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBpblByb2dyZXNzQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGlzSGlkZGVuO1xuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgdmFyIHVzZXM7XG4gICAgICAgICAgICB2YXIgeGhyO1xuICAgICAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZUlmRG9uZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBkb25lIHdpdGggbWFraW5nIGNoYW5nZXMsIHN0YXJ0IHdhdGNoaW5nIGZvciBjaGFnbmVzIGluIERPTSBhZ2FpblxuICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpblByb2dyZXNzQ291bnQgPT09IDApIHsgLy8gaWYgYWxsIHhocnMgd2VyZSByZXNvbHZlZFxuICAgICAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzKCk7IC8vIG1ha2Ugc3VyZSB0byByZW1vdmUgb2xkIGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVDaGFuZ2VzKCk7IC8vIHdhdGNoIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGF0dHJVcGRhdGVGdW5jKHNwZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVbc3BlYy5iYXNlXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcInhsaW5rOmhyZWZcIiwgXCIjXCIgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWMudXNlRWwuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25sb2FkRnVuYyh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInhcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdmc7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB4LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHN2ZyA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIilbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoc3ZnLCBib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25FcnJvclRpbWVvdXQoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzKCk7IC8vIHN0b3Agd2F0Y2hpbmcgZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAvLyBmaW5kIGFsbCB1c2UgZWxlbWVudHNcbiAgICAgICAgICAgIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gdXNlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFpbGVkIHRvIGdldCBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIHVzZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGJjciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBocmVmID0gdXNlc1tpXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwiaHJlZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdXNlc1tpXS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmIChocmVmICYmIGhyZWYuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaHJlZi5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gW1wiXCIsIFwiXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiYXNlID0gdXJsWzBdO1xuICAgICAgICAgICAgICAgIGhhc2ggPSB1cmxbMV07XG4gICAgICAgICAgICAgICAgaXNIaWRkZW4gPSBiY3IgJiYgYmNyLmxlZnQgPT09IDAgJiYgYmNyLnJpZ2h0ID09PSAwICYmIGJjci50b3AgPT09IDAgJiYgYmNyLmJvdHRvbSA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoYmNyICYmIGJjci53aWR0aCA9PT0gMCAmJiBiY3IuaGVpZ2h0ID09PSAwICYmICFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBvcHRpb25hbCBmYWxsYmFjayBVUkwgaWYgdGhlcmUgaXMgbm8gcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsIFNWR1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2sgJiYgIWJhc2UubGVuZ3RoICYmIGhhc2ggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlID0gZmFsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXNbaV0uaGFzQXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcInhsaW5rOmhyZWZcIiwgaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZSB1cGRhdGluZyB4bGluazpocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBjYWNoZVtiYXNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlIHNpZ25pZmllcyB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyB3YXMgbm90IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUVsOiB1c2VzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG9ubG9hZEZ1bmMoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gb25FcnJvclRpbWVvdXQoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtiYXNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhpcyBVUkwgaWYgdGhlIHVzZSBlbGVtZW50IHdhcyBub3QgZW1wdHkgYW5kIG5vIHJlcXVlc3Qgd2FzIHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhY2hlW2Jhc2VdLm9ubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IHR1cm5zIG91dCB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyBpcyBub3QgbmVjZXNzYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFib3J0IHRoZSBpbi1wcm9ncmVzcyB4aHIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVbYmFzZV0ub25sb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmxlbmd0aCAmJiBjYWNoZVtiYXNlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VzID0gXCJcIjtcbiAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgd2luTG9hZDtcbiAgICAgICAgd2luTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7IC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAvLyBUaGUgbG9hZCBldmVudCBmaXJlcyB3aGVuIGFsbCByZXNvdXJjZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLCB3aGljaCBhbGxvd3MgZGV0ZWN0aW5nIHdoZXRoZXIgU1ZHIHVzZSBlbGVtZW50cyBhcmUgZW1wdHkuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luTG9hZCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgYSBsaXN0ZW5lciBpZiB0aGUgZG9jdW1lbnQgaXMgYWxyZWFkeSBsb2FkZWQsIGluaXRpYWxpemUgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICB3aW5Mb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCkpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCAnc3ZneHVzZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHt9O1xuIiwiaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuLzMtZ2xvYmFsLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5pbXBvcnQgKiBhcyBwYXR0ZXJucyBmcm9tICcuLi9wYXR0ZXJucy8qKi8hKCoudGVzdHwqLmNvbmZpZykuanMnO1xuXG5jb25zb2xlLmxvZygnZnVjayB5ZWFoJyk7XG5cbi8vIGFkZGl0aW9uYWwgc2FuaXR5IGNoZWNrIGZvciBtb2Rlcm4gYnJvd3NlcnPigJRhbmQgdGhlbiwgZW5oYW5jZSFcbmlmICgndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudCkge1xuICAvLyByZW1vdmUgdGhlIG5vLWpzIGNsYXNzXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuXG4gIC8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4gIC8vIGJ1dCBleGNsdWRlIHRlc3QgYW5kIGNvbmZpZyBmaWxlcyDigJQgdGhvc2Ugc2hvdWxkIG5vdCBiZSBleGVjdXRlZFxuICBbIGdsb2JhbHMsIHBhdHRlcm5zIF0uZm9yRWFjaChpdGVtcyA9PiB7XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaSA9PiB7XG4gICAgICBpdGVtc1tpXSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmIiwiZyIsImwiLCJhIiwicHVzaCIsImxlbmd0aCIsIm0iLCJzaGlmdCIsIm4iLCJwIiwiYiIsImMiLCJ0IiwidSIsInEiLCJUeXBlRXJyb3IiLCJkIiwidGhlbiIsImNhbGwiLCJyIiwiZSIsInYiLCJoIiwicHJvdG90eXBlIiwidyIsImsiLCJ4Iiwid2luZG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYWNlIiwiYWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYm9keSIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkZXRhY2hFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic3R5bGUiLCJjc3NUZXh0IiwieSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ6IiwicGFyZW50Tm9kZSIsIkEiLCJmYW1pbHkiLCJ3ZWlnaHQiLCJzdHJldGNoIiwiQiIsIkMiLCJFIiwiRiIsIkciLCJKIiwidGVzdCIsIm5hdmlnYXRvciIsInZlbmRvciIsImV4ZWMiLCJ1c2VyQWdlbnQiLCJwYXJzZUludCIsImZvbnRzIiwiSyIsImZvbnQiLCJMIiwiam9pbiIsImxvYWQiLCJEIiwiSCIsIkRhdGUiLCJnZXRUaW1lIiwiTSIsInNldFRpbWVvdXQiLCJOIiwicmVtb3ZlQ2hpbGQiLCJjbGVhclRpbWVvdXQiLCJJIiwiaGlkZGVuIiwiZGlyIiwibW9kdWxlIiwiZm9udE9ic2VydmVycyIsInNlc3Npb25TdG9yYWdlIiwiZm9udHNMb2FkZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXlzIiwiZm9yRWFjaCIsImZvbnRPYmplY3QiLCJmb250ZmFjZSIsIk9ic2VydmVyIiwicmVwbGFjZSIsInNob3J0Y29kZSIsImN1c3RvbSIsInF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNlbGVjdCIsInNlbGVjdG9yIiwicGFyZW50IiwicXVlcnlTZWxlY3RvciIsImV4aXN0cyIsIkJvb2xlYW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJhcHBseSIsImN1cnJlbnQiLCJpIiwiaWkiLCJpbmRleE9mIiwic2NvcGUiLCJleGFtcGxlcyIsImV4YW1wbGUiLCJtZWRpYXF1ZXJ5IiwibG9nIiwiY2FjaGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjaGVja1VzZUVsZW1zIiwidGlkIiwiZGVib3VuY2VkQ2hlY2siLCJ1bm9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImlnbm9yZSIsImNyZWF0ZVJlcXVlc3QiLCJ1cmwiLCJnZXRPcmlnaW4iLCJsb2MiLCJwcm90b2NvbCIsInVuZGVmaW5lZCIsImhyZWYiLCJob3N0IiwiUmVxdWVzdCIsIm9yaWdpbiIsIm9yaWdpbjIiLCJYTUxIdHRwUmVxdWVzdCIsImxvY2F0aW9uIiwid2l0aENyZWRlbnRpYWxzIiwiWERvbWFpblJlcXVlc3QiLCJ4bGlua05TIiwiYmFzZSIsImJjciIsImZhbGxiYWNrIiwiaGFzaCIsImluUHJvZ3Jlc3NDb3VudCIsImlzSGlkZGVuIiwidXNlcyIsInhociIsIm9ic2VydmVJZkRvbmUiLCJhdHRyVXBkYXRlRnVuYyIsInNwZWMiLCJ1c2VFbCIsInNldEF0dHJpYnV0ZU5TIiwiaGFzQXR0cmlidXRlIiwib25sb2FkRnVuYyIsInN2ZyIsIm9ubG9hZCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvbkVycm9yVGltZW91dCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOUyIsInNwbGl0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVuIiwic2VuZCIsImFib3J0Iiwid2luTG9hZCIsImNvbnNvbGUiLCJyZW1vdmUiLCJnbG9iYWxzIiwicGF0dGVybnMiLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7d0VBQXVFLGFBQVU7QUFBQyxBQUFhLFFBQUlBLENBQUo7UUFBTUMsSUFBRSxFQUFSLENBQVcsU0FBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWE7UUFBR0MsSUFBRixDQUFPRCxDQUFQLEVBQVUsS0FBR0YsRUFBRUksTUFBTCxJQUFhTCxHQUFiO2NBQTBCTSxDQUFULEdBQVk7YUFBTUwsRUFBRUksTUFBUCxHQUFlSixFQUFFLENBQUYsS0FBT0EsRUFBRU0sS0FBRixFQUFQO1NBQW1CLGFBQVU7aUJBQVlELENBQVg7S0FBYixDQUE0QixTQUFTRSxDQUFULENBQVdMLENBQVgsRUFBYTtXQUFNQSxDQUFMLEdBQU9NLENBQVAsQ0FBUyxLQUFLQyxDQUFMLEdBQU8sS0FBSyxDQUFaLENBQWMsS0FBS1YsQ0FBTCxHQUFPLEVBQVAsQ0FBVSxJQUFJVSxJQUFFLElBQU4sQ0FBVyxJQUFHO1VBQUcsVUFBU1AsQ0FBVCxFQUFXO1lBQUdPLENBQUYsRUFBSVAsQ0FBSjtTQUFkLEVBQXNCLFVBQVNBLENBQVQsRUFBVztZQUFHTyxDQUFGLEVBQUlQLENBQUo7U0FBbEM7T0FBSixDQUErQyxPQUFNUSxDQUFOLEVBQVE7VUFBR0QsQ0FBRixFQUFJQyxDQUFKOztTQUFZRixJQUFFLENBQU4sQ0FBUSxTQUFTRyxDQUFULENBQVdULENBQVgsRUFBYTthQUFRLElBQUlLLENBQUosQ0FBTSxVQUFTRSxDQUFULEVBQVdDLENBQVgsRUFBYTtVQUFHUixDQUFGO09BQXBCLENBQVA7Y0FBMkNVLENBQVQsQ0FBV1YsQ0FBWCxFQUFhO2FBQVEsSUFBSUssQ0FBSixDQUFNLFVBQVNFLENBQVQsRUFBVztVQUFHUCxDQUFGO09BQWxCLENBQVA7Y0FBeUNXLENBQVQsQ0FBV1gsQ0FBWCxFQUFhTyxDQUFiLEVBQWU7VUFBSVAsRUFBRUEsQ0FBRixJQUFLTSxDQUFSLEVBQVU7WUFBSUMsS0FBR1AsQ0FBTixFQUFRLE1BQU0sSUFBSVksU0FBSixFQUFOLENBQW9CLElBQUlKLElBQUUsQ0FBQyxDQUFQLENBQVMsSUFBRztjQUFLSyxJQUFFTixLQUFHQSxFQUFFTyxJQUFYLENBQWdCLElBQUcsUUFBTVAsQ0FBTixJQUFTLFlBQVUsT0FBT0EsQ0FBMUIsSUFBNkIsY0FBWSxPQUFPTSxDQUFuRCxFQUFxRDtjQUFHRSxJQUFGLENBQU9SLENBQVAsRUFBUyxVQUFTQSxDQUFULEVBQVc7bUJBQUlJLEVBQUVYLENBQUYsRUFBSU8sQ0FBSixDQUFILENBQVVDLElBQUUsQ0FBQyxDQUFIO2FBQS9CLEVBQXFDLFVBQVNELENBQVQsRUFBVzttQkFBSVMsRUFBRWhCLENBQUYsRUFBSU8sQ0FBSixDQUFILENBQVVDLElBQUUsQ0FBQyxDQUFIO2FBQTNELEVBQWtFOztTQUE1SSxDQUFvSixPQUFNUyxDQUFOLEVBQVE7ZUFBSUQsRUFBRWhCLENBQUYsRUFBSWlCLENBQUosQ0FBSCxDQUFVO1dBQVNqQixDQUFGLEdBQUksQ0FBSixDQUFNQSxFQUFFTyxDQUFGLEdBQUlBLENBQUosQ0FBTVcsRUFBRWxCLENBQUY7OzthQUM3cUJnQixDQUFULENBQVdoQixDQUFYLEVBQWFPLENBQWIsRUFBZTtVQUFJUCxFQUFFQSxDQUFGLElBQUtNLENBQVIsRUFBVTtZQUFJQyxLQUFHUCxDQUFOLEVBQVEsTUFBTSxJQUFJWSxTQUFKLEVBQU4sQ0FBb0JaLEVBQUVBLENBQUYsR0FBSSxDQUFKLENBQU1BLEVBQUVPLENBQUYsR0FBSUEsQ0FBSixDQUFNVyxFQUFFbEIsQ0FBRjs7Y0FBZWtCLENBQVQsQ0FBV2xCLENBQVgsRUFBYTtRQUFHLFlBQVU7WUFBSUEsRUFBRUEsQ0FBRixJQUFLTSxDQUFSLEVBQVUsT0FBS04sRUFBRUgsQ0FBRixDQUFJSyxNQUFULEdBQWlCO2NBQUtLLElBQUVQLEVBQUVILENBQUYsQ0FBSU8sS0FBSixFQUFOO2NBQWtCSSxJQUFFRCxFQUFFLENBQUYsQ0FBcEI7Y0FBeUJNLElBQUVOLEVBQUUsQ0FBRixDQUEzQjtjQUFnQ1UsSUFBRVYsRUFBRSxDQUFGLENBQWxDO2NBQXVDQSxJQUFFQSxFQUFFLENBQUYsQ0FBekMsQ0FBOEMsSUFBRztpQkFBSVAsRUFBRUEsQ0FBTCxHQUFPLGNBQVksT0FBT1EsQ0FBbkIsR0FBcUJTLEVBQUVULEVBQUVPLElBQUYsQ0FBTyxLQUFLLENBQVosRUFBY2YsRUFBRU8sQ0FBaEIsQ0FBRixDQUFyQixHQUEyQ1UsRUFBRWpCLEVBQUVPLENBQUosQ0FBbEQsR0FBeUQsS0FBR1AsRUFBRUEsQ0FBTCxLQUFTLGNBQVksT0FBT2EsQ0FBbkIsR0FBcUJJLEVBQUVKLEVBQUVFLElBQUYsQ0FBTyxLQUFLLENBQVosRUFBY2YsRUFBRU8sQ0FBaEIsQ0FBRixDQUFyQixHQUEyQ0EsRUFBRVAsRUFBRU8sQ0FBSixDQUFwRCxDQUF6RDtXQUFKLENBQXlILE9BQU1ZLENBQU4sRUFBUTtjQUFHQSxDQUFGOzs7T0FBek47T0FBb09DLFNBQUYsQ0FBWXRCLENBQVosR0FBYyxVQUFTRSxDQUFULEVBQVc7YUFBUSxLQUFLUSxDQUFMLENBQU8sS0FBSyxDQUFaLEVBQWNSLENBQWQsQ0FBUDtLQUExQixDQUFtREssRUFBRWUsU0FBRixDQUFZWixDQUFaLEdBQWMsVUFBU1IsQ0FBVCxFQUFXTyxDQUFYLEVBQWE7VUFBS0MsSUFBRSxJQUFOLENBQVcsT0FBTyxJQUFJSCxDQUFKLENBQU0sVUFBU1EsQ0FBVCxFQUFXSSxDQUFYLEVBQWE7VUFBR3BCLENBQUYsQ0FBSUksSUFBSixDQUFTLENBQUNELENBQUQsRUFBR08sQ0FBSCxFQUFLTSxDQUFMLEVBQU9JLENBQVAsQ0FBVCxFQUFvQkMsRUFBRVYsQ0FBRjtPQUF4QyxDQUFQO0tBQXZDO2FBQ25XYSxDQUFULENBQVdyQixDQUFYLEVBQWE7YUFBUSxJQUFJSyxDQUFKLENBQU0sVUFBU0UsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7aUJBQVVLLENBQVQsQ0FBV0wsQ0FBWCxFQUFhO2lCQUFRLFVBQVNLLENBQVQsRUFBVztjQUFHTCxDQUFGLElBQUtLLENBQUwsQ0FBT0ksS0FBRyxDQUFILENBQUtBLEtBQUdqQixFQUFFRSxNQUFMLElBQWFLLEVBQUVZLENBQUYsQ0FBYjtXQUEvQjthQUFzREYsSUFBRSxDQUFOO1lBQVFFLElBQUUsRUFBVixDQUFhLEtBQUduQixFQUFFRSxNQUFMLElBQWFLLEVBQUVZLENBQUYsQ0FBYixDQUFrQixLQUFJLElBQUlHLElBQUUsQ0FBVixFQUFZQSxJQUFFdEIsRUFBRUUsTUFBaEIsRUFBdUJvQixLQUFHLENBQTFCLEVBQTRCWixFQUFFVixFQUFFc0IsQ0FBRixDQUFGLEVBQVFkLENBQVIsQ0FBVUssRUFBRVMsQ0FBRixDQUFWLEVBQWVkLENBQWY7T0FBL0ksQ0FBUDtjQUFtTGUsQ0FBVCxDQUFXdkIsQ0FBWCxFQUFhO2FBQVEsSUFBSUssQ0FBSixDQUFNLFVBQVNFLENBQVQsRUFBV0MsQ0FBWCxFQUFhO2FBQUssSUFBSUssSUFBRSxDQUFWLEVBQVlBLElBQUViLEVBQUVFLE1BQWhCLEVBQXVCVyxLQUFHLENBQTFCLEVBQTRCSCxFQUFFVixFQUFFYSxDQUFGLENBQUYsRUFBUUwsQ0FBUixDQUFVRCxDQUFWLEVBQVlDLENBQVo7T0FBaEQsQ0FBUDtLQUF5RWdCLE9BQU9DLE9BQVAsS0FBaUJELE9BQU9DLE9BQVAsR0FBZXBCLENBQWYsRUFBaUJtQixPQUFPQyxPQUFQLENBQWVDLE9BQWYsR0FBdUJoQixDQUF4QyxFQUEwQ2MsT0FBT0MsT0FBUCxDQUFlRSxNQUFmLEdBQXNCbEIsQ0FBaEUsRUFBa0VlLE9BQU9DLE9BQVAsQ0FBZUcsSUFBZixHQUFvQkwsQ0FBdEYsRUFBd0ZDLE9BQU9DLE9BQVAsQ0FBZUksR0FBZixHQUFtQlIsQ0FBM0csRUFBNkdHLE9BQU9DLE9BQVAsQ0FBZUwsU0FBZixDQUF5Qk4sSUFBekIsR0FBOEJULEVBQUVlLFNBQUYsQ0FBWVosQ0FBdkosRUFBeUpnQixPQUFPQyxPQUFQLENBQWVMLFNBQWYsQ0FBeUIsT0FBekIsSUFBa0NmLEVBQUVlLFNBQUYsQ0FBWXRCLENBQXhOO0dBRnhNLEdBQUQ7O2VBSTNEO2FBQVVDLENBQVQsQ0FBV0MsQ0FBWCxFQUFhTyxDQUFiLEVBQWU7ZUFBVXVCLGdCQUFULEdBQTBCOUIsRUFBRThCLGdCQUFGLENBQW1CLFFBQW5CLEVBQTRCdkIsQ0FBNUIsRUFBOEIsQ0FBQyxDQUEvQixDQUExQixHQUE0RFAsRUFBRStCLFdBQUYsQ0FBYyxRQUFkLEVBQXVCeEIsQ0FBdkIsQ0FBNUQ7Y0FBK0ZKLENBQVQsQ0FBV0gsQ0FBWCxFQUFhO2VBQVVnQyxJQUFULEdBQWNoQyxHQUFkLEdBQWtCaUMsU0FBU0gsZ0JBQVQsR0FBMEJHLFNBQVNILGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxTQUFTdEIsQ0FBVCxHQUFZO2lCQUFVMEIsbUJBQVQsQ0FBNkIsa0JBQTdCLEVBQWdEMUIsQ0FBaEQsRUFBbURSO09BQTdHLENBQTFCLEdBQTZJaUMsU0FBU0YsV0FBVCxDQUFxQixvQkFBckIsRUFBMEMsU0FBU1QsQ0FBVCxHQUFZO1lBQUksaUJBQWVXLFNBQVNFLFVBQXhCLElBQW9DLGNBQVlGLFNBQVNFLFVBQTVELEVBQXVFRixTQUFTRyxXQUFULENBQXFCLG9CQUFyQixFQUEwQ2QsQ0FBMUMsR0FBNkN0QixHQUE3QztPQUE5SCxDQUEvSjtLQUFpVixTQUFTZ0IsQ0FBVCxDQUFXaEIsQ0FBWCxFQUFhO1dBQU1BLENBQUwsR0FBT2lDLFNBQVNJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUCxDQUFxQyxLQUFLckMsQ0FBTCxDQUFPc0MsWUFBUCxDQUFvQixhQUFwQixFQUFrQyxNQUFsQyxFQUEwQyxLQUFLdEMsQ0FBTCxDQUFPdUMsV0FBUCxDQUFtQk4sU0FBU08sY0FBVCxDQUF3QnhDLENBQXhCLENBQW5CLEVBQStDLEtBQUtPLENBQUwsR0FBTzBCLFNBQVNJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUCxDQUFzQyxLQUFLN0IsQ0FBTCxHQUFPeUIsU0FBU0ksYUFBVCxDQUF1QixNQUF2QixDQUFQLENBQXNDLEtBQUtsQixDQUFMLEdBQU9jLFNBQVNJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUCxDQUFzQyxLQUFLeEMsQ0FBTCxHQUFPb0MsU0FBU0ksYUFBVCxDQUF1QixNQUF2QixDQUFQLENBQXNDLEtBQUt2QyxDQUFMLEdBQU8sQ0FBQyxDQUFSLENBQVUsS0FBS1MsQ0FBTCxDQUFPa0MsS0FBUCxDQUFhQyxPQUFiLEdBQXFCLDhHQUFyQixDQUFvSSxLQUFLbEMsQ0FBTCxDQUFPaUMsS0FBUCxDQUFhQyxPQUFiLEdBQXFCLDhHQUFyQjtXQUM5M0I3QyxDQUFMLENBQU80QyxLQUFQLENBQWFDLE9BQWIsR0FBcUIsOEdBQXJCLENBQW9JLEtBQUt2QixDQUFMLENBQU9zQixLQUFQLENBQWFDLE9BQWIsR0FBcUIsNEVBQXJCLENBQWtHLEtBQUtuQyxDQUFMLENBQU9nQyxXQUFQLENBQW1CLEtBQUtwQixDQUF4QixFQUEyQixLQUFLWCxDQUFMLENBQU8rQixXQUFQLENBQW1CLEtBQUsxQyxDQUF4QixFQUEyQixLQUFLRyxDQUFMLENBQU91QyxXQUFQLENBQW1CLEtBQUtoQyxDQUF4QixFQUEyQixLQUFLUCxDQUFMLENBQU91QyxXQUFQLENBQW1CLEtBQUsvQixDQUF4Qjs7YUFDOVNDLENBQVQsQ0FBV1QsQ0FBWCxFQUFhTyxDQUFiLEVBQWU7UUFBR1AsQ0FBRixDQUFJeUMsS0FBSixDQUFVQyxPQUFWLEdBQWtCLCtMQUE2TG5DLENBQTdMLEdBQStMLEdBQWpOO2NBQThOb0MsQ0FBVCxDQUFXM0MsQ0FBWCxFQUFhO1VBQUtPLElBQUVQLEVBQUVBLENBQUYsQ0FBSTRDLFdBQVY7VUFBc0JwQyxJQUFFRCxJQUFFLEdBQTFCLENBQThCUCxFQUFFSCxDQUFGLENBQUk0QyxLQUFKLENBQVVJLEtBQVYsR0FBZ0JyQyxJQUFFLElBQWxCLENBQXVCUixFQUFFUSxDQUFGLENBQUlzQyxVQUFKLEdBQWV0QyxDQUFmLENBQWlCUixFQUFFTyxDQUFGLENBQUl1QyxVQUFKLEdBQWU5QyxFQUFFTyxDQUFGLENBQUl3QyxXQUFKLEdBQWdCLEdBQS9CLENBQW1DLE9BQU8vQyxFQUFFRixDQUFGLEtBQU1TLENBQU4sSUFBU1AsRUFBRUYsQ0FBRixHQUFJUyxDQUFKLEVBQU0sQ0FBQyxDQUFoQixJQUFtQixDQUFDLENBQTNCO2NBQXNDeUMsQ0FBVCxDQUFXaEQsQ0FBWCxFQUFhTyxDQUFiLEVBQWU7ZUFBVUMsQ0FBVCxHQUFZO1lBQUtSLElBQUVzQixDQUFOLENBQVFxQixFQUFFM0MsQ0FBRixLQUFNQSxFQUFFQSxDQUFGLENBQUlpRCxVQUFWLElBQXNCMUMsRUFBRVAsRUFBRUYsQ0FBSixDQUF0QjtXQUFpQ3dCLElBQUV0QixDQUFOLENBQVFELEVBQUVDLEVBQUVPLENBQUosRUFBTUMsQ0FBTixFQUFTVCxFQUFFQyxFQUFFUSxDQUFKLEVBQU1BLENBQU4sRUFBU21DLEVBQUUzQyxDQUFGO0tBQU0sU0FBU2tELENBQVQsQ0FBV2xELENBQVgsRUFBYU8sQ0FBYixFQUFlO1VBQUtDLElBQUVELEtBQUcsRUFBVCxDQUFZLEtBQUs0QyxNQUFMLEdBQVluRCxDQUFaLENBQWMsS0FBS3lDLEtBQUwsR0FBV2pDLEVBQUVpQyxLQUFGLElBQVMsUUFBcEIsQ0FBNkIsS0FBS1csTUFBTCxHQUFZNUMsRUFBRTRDLE1BQUYsSUFBVSxRQUF0QixDQUErQixLQUFLQyxPQUFMLEdBQWE3QyxFQUFFNkMsT0FBRixJQUFXLFFBQXhCO1NBQXFDQyxJQUFFLElBQU47UUFBV0MsSUFBRSxJQUFiO1FBQWtCQyxJQUFFLElBQXBCO1FBQXlCQyxJQUFFLElBQTNCLENBQWdDLFNBQVNDLENBQVQsR0FBWTtVQUFJLFNBQU9ILENBQVYsRUFBWSxJQUFHSSxPQUFLLFFBQVFDLElBQVIsQ0FBYXBDLE9BQU9xQyxTQUFQLENBQWlCQyxNQUE5QixDQUFSLEVBQThDO1lBQUs5RCxJQUFFLG9EQUFvRCtELElBQXBELENBQXlEdkMsT0FBT3FDLFNBQVAsQ0FBaUJHLFNBQTFFLENBQU4sQ0FBMkZULElBQUUsQ0FBQyxDQUFDdkQsQ0FBRixJQUFLLE1BQUlpRSxTQUFTakUsRUFBRSxDQUFGLENBQVQsRUFBYyxFQUFkLENBQVg7T0FBMUksTUFBNEt1RCxJQUFFLENBQUMsQ0FBSCxDQUFLLE9BQU9BLENBQVA7Y0FBa0JJLENBQVQsR0FBWTtlQUFRRixDQUFQLEtBQVdBLElBQUUsQ0FBQyxDQUFDeEIsU0FBU2lDLEtBQXhCLEVBQStCLE9BQU9ULENBQVA7O2FBQ3gzQlUsQ0FBVCxHQUFZO1VBQUksU0FBT1gsQ0FBVixFQUFZO1lBQUt4RCxJQUFFaUMsU0FBU0ksYUFBVCxDQUF1QixLQUF2QixDQUFOLENBQW9DLElBQUc7WUFBR0ksS0FBRixDQUFRMkIsSUFBUixHQUFhLDRCQUFiO1NBQUosQ0FBOEMsT0FBTTdELENBQU4sRUFBUSxNQUFJLE9BQUtQLEVBQUV5QyxLQUFGLENBQVEyQixJQUFmO2NBQTJCWixDQUFQO2NBQWtCYSxDQUFULENBQVdyRSxDQUFYLEVBQWFPLENBQWIsRUFBZTthQUFPLENBQUNQLEVBQUV5QyxLQUFILEVBQVN6QyxFQUFFb0QsTUFBWCxFQUFrQmUsTUFBSW5FLEVBQUVxRCxPQUFOLEdBQWMsRUFBaEMsRUFBbUMsT0FBbkMsRUFBMkM5QyxDQUEzQyxFQUE4QytELElBQTlDLENBQW1ELEdBQW5ELENBQU47O01BQ2pLbEQsU0FBRixDQUFZbUQsSUFBWixHQUFpQixVQUFTdkUsQ0FBVCxFQUFXTyxDQUFYLEVBQWE7VUFBS0MsSUFBRSxJQUFOO1VBQVdjLElBQUV0QixLQUFHLFNBQWhCO1VBQTBCVyxJQUFFLENBQTVCO1VBQThCNkQsSUFBRWpFLEtBQUcsR0FBbkM7VUFBdUNrRSxJQUFHLElBQUlDLElBQUosRUFBRCxDQUFXQyxPQUFYLEVBQXpDLENBQThELE9BQU8sSUFBSWxELE9BQUosQ0FBWSxVQUFTekIsQ0FBVCxFQUFXTyxDQUFYLEVBQWE7WUFBSW9ELE9BQUssQ0FBQ0QsR0FBVCxFQUFhO2NBQUtrQixJQUFFLElBQUluRCxPQUFKLENBQVksVUFBU3pCLENBQVQsRUFBV08sQ0FBWCxFQUFhO3FCQUFVVSxDQUFULEdBQVk7a0JBQU15RCxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxLQUFxQkYsQ0FBckIsSUFBd0JELENBQXhCLEdBQTBCakUsR0FBMUIsR0FBOEIwQixTQUFTaUMsS0FBVCxDQUFlSyxJQUFmLENBQW9CRixFQUFFN0QsQ0FBRixFQUFJLE1BQUlBLEVBQUUyQyxNQUFOLEdBQWEsR0FBakIsQ0FBcEIsRUFBMEM3QixDQUExQyxFQUE2Q1IsSUFBN0MsQ0FBa0QsVUFBU04sQ0FBVCxFQUFXO3FCQUFJQSxFQUFFTixNQUFMLEdBQVlGLEdBQVosR0FBZ0I2RSxXQUFXNUQsQ0FBWCxFQUFhLEVBQWIsQ0FBaEI7ZUFBOUQsRUFBZ0csWUFBVTs7ZUFBMUcsQ0FBOUI7O1dBQXZDLENBQU47Y0FBa002RCxJQUFFLElBQUlyRCxPQUFKLENBQVksVUFBU3pCLENBQVQsRUFBV1EsQ0FBWCxFQUFhO2dCQUFHcUUsV0FBV3JFLENBQVgsRUFBYWdFLENBQWIsQ0FBRjtXQUExQixDQUFwTSxDQUFrUC9DLFFBQVFHLElBQVIsQ0FBYSxDQUFDa0QsQ0FBRCxFQUFHRixDQUFILENBQWIsRUFBb0I5RCxJQUFwQixDQUF5QixZQUFVO3lCQUFjSCxDQUFiLEVBQWdCWCxFQUFFUSxDQUFGO1dBQXBELEVBQTBELFlBQVU7Y0FBR0EsQ0FBRjtXQUFyRTtTQUFoUSxNQUFpVkwsRUFBRSxZQUFVO21CQUFVTyxDQUFULEdBQVk7Z0JBQUtILENBQUosQ0FBTSxJQUFHQSxJQUFFLENBQUMsQ0FBRCxJQUNwZlYsQ0FEb2YsSUFDamYsQ0FBQyxDQUFELElBQUlDLENBRDZlLElBQzFlLENBQUMsQ0FBRCxJQUFJRCxDQUFKLElBQU8sQ0FBQyxDQUFELElBQUlzQixDQUQrZCxJQUM1ZCxDQUFDLENBQUQsSUFBSXJCLENBQUosSUFBTyxDQUFDLENBQUQsSUFBSXFCLENBRDRjLEVBQzFjLENBQUNaLElBQUVWLEtBQUdDLENBQUgsSUFBTUQsS0FBR3NCLENBQVQsSUFBWXJCLEtBQUdxQixDQUFsQixNQUF1QixTQUFPbUMsQ0FBUCxLQUFXL0MsSUFBRSxzQ0FBc0N3RCxJQUF0QyxDQUEyQ3ZDLE9BQU9xQyxTQUFQLENBQWlCRyxTQUE1RCxDQUFGLEVBQXlFVixJQUFFLENBQUMsQ0FBQy9DLENBQUYsS0FBTSxNQUFJMEQsU0FBUzFELEVBQUUsQ0FBRixDQUFULEVBQWMsRUFBZCxDQUFKLElBQXVCLFFBQU0wRCxTQUFTMUQsRUFBRSxDQUFGLENBQVQsRUFBYyxFQUFkLENBQU4sSUFBeUIsTUFBSTBELFNBQVMxRCxFQUFFLENBQUYsQ0FBVCxFQUFjLEVBQWQsQ0FBMUQsQ0FBdEYsR0FBb0tBLElBQUUrQyxNQUFJekQsS0FBR3FCLENBQUgsSUFBTXBCLEtBQUdvQixDQUFULElBQVlDLEtBQUdELENBQWYsSUFBa0JyQixLQUFHd0IsQ0FBSCxJQUFNdkIsS0FBR3VCLENBQVQsSUFBWUYsS0FBR0UsQ0FBakMsSUFBb0N4QixLQUFHMEIsQ0FBSCxJQUFNekIsS0FBR3lCLENBQVQsSUFBWUosS0FBR0ksQ0FBdkQsQ0FBN0wsR0FBd1BoQixJQUFFLENBQUNBLENBQTNQLENBQTZQQSxNQUFJTSxFQUFFb0MsVUFBRixJQUFjcEMsRUFBRW9DLFVBQUYsQ0FBYThCLFdBQWIsQ0FBeUJsRSxDQUF6QixDQUFkLEVBQTBDbUUsYUFBYXJFLENBQWIsQ0FBMUMsRUFBMERYLEVBQUVRLENBQUYsQ0FBOUQ7b0JBQTZFeUUsQ0FBVCxHQUFZO2dCQUFLLElBQUlQLElBQUosRUFBRCxDQUFXQyxPQUFYLEtBQXFCRixDQUFyQixJQUF3QkQsQ0FBM0IsRUFBNkIzRCxFQUFFb0MsVUFBRixJQUFjcEMsRUFBRW9DLFVBQUYsQ0FBYThCLFdBQWIsQ0FBeUJsRSxDQUF6QixDQUFkLEVBQTBDTixFQUFFQyxDQUFGLENBQTFDLENBQTdCLEtBQWdGO2tCQUFLUixJQUFFaUMsU0FBU2lELE1BQWYsQ0FBc0IsSUFBRyxDQUFDLENBQUQsS0FBS2xGLENBQUwsSUFBUSxLQUFLLENBQUwsS0FBU0EsQ0FBcEIsRUFBc0JILElBQUVvQixFQUFFakIsQ0FBRixDQUFJNEMsV0FBTixFQUNoZjlDLElBQUVPLEVBQUVMLENBQUYsQ0FBSTRDLFdBRDBlLEVBQzlkekIsSUFBRWIsRUFBRU4sQ0FBRixDQUFJNEMsV0FEd2QsRUFDNWNsQyxHQUQ0YyxDQUN4Y0MsSUFBRWtFLFdBQVdJLENBQVgsRUFBYSxFQUFiLENBQUY7O2VBQXdCaEUsSUFBRSxJQUFJRCxDQUFKLENBQU1NLENBQU4sQ0FBTjtjQUFlakIsSUFBRSxJQUFJVyxDQUFKLENBQU1NLENBQU4sQ0FBakI7Y0FBMEJoQixJQUFFLElBQUlVLENBQUosQ0FBTU0sQ0FBTixDQUE1QjtjQUFxQ3pCLElBQUUsQ0FBQyxDQUF4QztjQUEwQ0MsSUFBRSxDQUFDLENBQTdDO2NBQStDcUIsSUFBRSxDQUFDLENBQWxEO2NBQW9ERCxJQUFFLENBQUMsQ0FBdkQ7Y0FBeURHLElBQUUsQ0FBQyxDQUE1RDtjQUE4REUsSUFBRSxDQUFDLENBQWpFO2NBQW1FVixJQUFFb0IsU0FBU0ksYUFBVCxDQUF1QixLQUF2QixDQUFyRSxDQUFtR3hCLEVBQUVzRSxHQUFGLEdBQU0sS0FBTixDQUFZMUUsRUFBRVEsQ0FBRixFQUFJb0QsRUFBRTdELENBQUYsRUFBSSxZQUFKLENBQUosRUFBdUJDLEVBQUVKLENBQUYsRUFBSWdFLEVBQUU3RCxDQUFGLEVBQUksT0FBSixDQUFKLEVBQWtCQyxFQUFFSCxDQUFGLEVBQUkrRCxFQUFFN0QsQ0FBRixFQUFJLFdBQUosQ0FBSixFQUFzQkssRUFBRTBCLFdBQUYsQ0FBY3RCLEVBQUVqQixDQUFoQixFQUFtQmEsRUFBRTBCLFdBQUYsQ0FBY2xDLEVBQUVMLENBQWhCLEVBQW1CYSxFQUFFMEIsV0FBRixDQUFjakMsRUFBRU4sQ0FBaEIsRUFBbUJpQyxTQUFTRCxJQUFULENBQWNPLFdBQWQsQ0FBMEIxQixDQUExQixFQUE2QkssSUFBRUQsRUFBRWpCLENBQUYsQ0FBSTRDLFdBQU4sQ0FBa0J2QixJQUFFaEIsRUFBRUwsQ0FBRixDQUFJNEMsV0FBTixDQUFrQnJCLElBQUVqQixFQUFFTixDQUFGLENBQUk0QyxXQUFOLENBQWtCcUMsSUFBSWpDLEVBQUUvQixDQUFGLEVBQUksVUFBU2pCLENBQVQsRUFBVztnQkFBR0EsQ0FBRixDQUFJVTtXQUFwQixFQUEwQkQsRUFBRVEsQ0FBRixFQUFJb0QsRUFBRTdELENBQUYsRUFBSSxNQUFJQSxFQUFFMkMsTUFBTixHQUFhLGNBQWpCLENBQUosRUFBc0NILEVBQUUzQyxDQUFGLEVBQUksVUFBU0wsQ0FBVCxFQUFXO2dCQUFHQSxDQUFGLENBQUlVO1dBQXBCLEVBQTBCRCxFQUFFSixDQUFGLEVBQUlnRSxFQUFFN0QsQ0FBRixFQUFJLE1BQUlBLEVBQUUyQyxNQUFOLEdBQWEsU0FBakIsQ0FBSjtZQUNsZDdDLENBQUYsRUFBSSxVQUFTTixDQUFULEVBQVc7Z0JBQUdBLENBQUYsQ0FBSVU7V0FBcEIsRUFBMEJELEVBQUVILENBQUYsRUFBSStELEVBQUU3RCxDQUFGLEVBQUksTUFBSUEsRUFBRTJDLE1BQU4sR0FBYSxhQUFqQixDQUFKO1NBSHFiO09BQTNXLENBQVA7S0FBN0YsQ0FHb0UsQUFBeUJpQyxjQUFBLEdBQWVsQyxDQUF4QztHQVBuRSxHQUFEOzs7Ozs7QUNEQSwyQkFBZSxNQUFNO1FBQ2JtQyxnQkFBZ0IsRUFBdEI7O01BRUlDLGVBQWVDLFdBQW5CLEVBQWdDO2FBQ3JCQyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsY0FBdkM7Ozs7U0FJS0MsSUFBUCxDQUFZekIsS0FBWixFQUFtQjBCLE9BQW5CLENBQTJCQyxjQUFjO1dBQ2hDRixJQUFQLENBQVl6QixNQUFNMkIsVUFBTixDQUFaLEVBQStCRCxPQUEvQixDQUF1Q3hCLFFBQVE7WUFDdkN2RSxJQUFJcUUsTUFBTTJCLFVBQU4sRUFBa0J6QixJQUFsQixDQUFWO1VBQ0l2RSxFQUFFaUcsUUFBTixFQUFnQjtzQkFDQTdGLElBQWQsQ0FDRSxJQUFJOEYsZ0JBQUosQ0FBYWxHLEVBQUVzRCxNQUFGLENBQVM2QyxPQUFULENBQWlCLElBQWpCLEVBQXVCLEVBQXZCLENBQWIsRUFBeUM7a0JBQy9CbkcsRUFBRXVELE1BRDZCO2lCQUVoQ3ZELEVBQUU0QztTQUZYLENBREY7O0tBSEo7R0FERjs7TUFjSTRDLGNBQWNuRixNQUFkLElBQXdCLENBQTVCLEVBQStCO1lBQ3JCMkIsR0FBUixDQUFZd0QsYUFBWixFQUNHdkUsSUFESCxDQUNRLE1BQU07ZUFDRDBFLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxjQUF2Qzs7cUJBRWVILFdBQWYsR0FBNkIsSUFBN0I7S0FKSjs7Q0F2Qko7O0FDREE7Ozs7QUFJQSxrQkFBZSxDQUFDVSxTQUFELEVBQVlDLFNBQVMsS0FBckIsS0FBK0I7UUFDdENDLFFBQVNELE1BQUQsR0FBV0UsWUFBWUgsU0FBWixDQUFYLEdBQXFDLGVBQWNHLFlBQVlILFNBQVosQ0FBdUIsS0FBeEY7O1NBRU96RSxPQUFPNkUsVUFBUCxDQUFrQkYsS0FBbEIsRUFBeUJHLE9BQWhDO0NBSEY7Ozs7Ozs7O0FDQ0EsU0FBU0MsTUFBVCxDQUFnQkMsUUFBaEIsRUFBMEJDLE1BQTFCLEVBQWtDO1FBQzFCLENBQUNBLFVBQVV4RSxRQUFYLEVBQXFCeUUsYUFBckIsQ0FBbUNGLFFBQW5DLENBQVA7Ozs7Ozs7O0FBUURELE9BQU9JLE1BQVAsR0FBZ0IsVUFBVUgsUUFBVixFQUFvQkMsTUFBcEIsRUFBNEI7UUFDcENHLFFBQVFMLE9BQU9DLFFBQVAsRUFBaUJDLE1BQWpCLENBQVIsQ0FBUDtDQUREOzs7Ozs7O0FBU0FGLE9BQU8xRSxHQUFQLEdBQWEsVUFBVTJFLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCOztLQUVwQyxDQUFDQSxNQUFELElBQVcsT0FBT0EsT0FBT0ksZ0JBQWQsS0FBbUMsVUFBbEQsRUFBOEQ7U0FDdERDLE1BQU1DLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLENBQUNOLFVBQVV4RSxRQUFYLEVBQXFCNEUsZ0JBQXJCLENBQXNDTCxRQUF0QyxDQUFsQixDQUFQOzs7S0FHR1EsT0FBSjtLQUNJQyxDQUFKO0tBQ0lDLEVBQUo7S0FDSXJGLE1BQU0sRUFBVjtNQUNLb0YsSUFBSSxDQUFULEVBQVlBLElBQUlSLE9BQU92RyxNQUF2QixFQUErQitHLEdBQS9CLEVBQW9DO1lBQ3pCUixPQUFPUSxDQUFQLEVBQVVKLGdCQUFWLENBQTJCTCxRQUEzQixDQUFWO09BQ0tVLEtBQUssQ0FBVixFQUFhQSxLQUFLRixRQUFROUcsTUFBMUIsRUFBa0NnSCxJQUFsQyxFQUF3QztPQUNuQ3JGLElBQUlzRixPQUFKLENBQVlILFFBQVFFLEVBQVIsQ0FBWixJQUEyQixDQUEvQixFQUFrQztRQUM3QmpILElBQUosQ0FBUytHLFFBQVFFLEVBQVIsQ0FBVDs7OztRQUlJckYsR0FBUDtDQWxCRDs7QUFxQkEsZ0JBQWlCMEUsTUFBakI7O0FDOUNBO0FBQ0E7QUFzQkEsNENBQWUsQ0FBQ2EsUUFBUW5GLFFBQVQsS0FBc0I7UUFDN0JvRixXQUFXZCxVQUFPMUUsR0FBUCxDQUFXLGFBQVgsRUFBMEJ1RixLQUExQixDQUFqQjs7V0FFU3hCLE9BQVQsQ0FBaUIwQixXQUFXO1FBQ3RCQyxXQUFXLEdBQVgsQ0FBSixFQUFxQjtjQUNYQyxHQUFSLENBQWEsd0JBQXVCRixPQUFRLHFCQUE1QztLQURGLE1BRU87Y0FDR0UsR0FBUixDQUFhLHdCQUF1QkYsT0FBUSxxQkFBNUM7O0dBSko7Q0FIRjs7QUN2QkE7Ozs7Ozs7O0FBUUMsYUFBWTtBQUNUO1FBQ0ksT0FBTzlGLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9NLGdCQUE1QyxFQUE4RDtZQUN0RDJGLFFBQVFDLE9BQU9DLE1BQVAsQ0FBYyxJQUFkLENBQVosQ0FEMEQ7WUFFdERDLGFBQUo7WUFDSUMsR0FBSixDQUgwRDtZQUl0REMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFZO3lCQUNoQkQsR0FBYjtrQkFDTWhELFdBQVcrQyxhQUFYLEVBQTBCLEdBQTFCLENBQU47U0FGSjtZQUlJRyxtQkFBbUIsNEJBQVk7O1NBQW5DO1lBR0lDLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBWTtnQkFDekJDLFFBQUo7bUJBQ09uRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2dHLGNBQWxDLEVBQWtELEtBQWxEO21CQUNPaEcsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDZ0csY0FBN0MsRUFBNkQsS0FBN0Q7Z0JBQ0l0RyxPQUFPMEcsZ0JBQVgsRUFBNkI7MkJBQ2QsSUFBSUEsZ0JBQUosQ0FBcUJKLGNBQXJCLENBQVg7eUJBQ1NLLE9BQVQsQ0FBaUJsRyxTQUFTdUQsZUFBMUIsRUFBMkM7K0JBQzVCLElBRDRCOzZCQUU5QixJQUY4QjtnQ0FHM0I7aUJBSGhCO21DQUttQiw0QkFBWTt3QkFDdkI7aUNBQ1M0QyxVQUFUOytCQUNPbEcsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUM0RixjQUFyQyxFQUFxRCxLQUFyRDsrQkFDTzVGLG1CQUFQLENBQTJCLG1CQUEzQixFQUFnRDRGLGNBQWhELEVBQWdFLEtBQWhFO3FCQUhKLENBSUUsT0FBT08sTUFBUCxFQUFlO2lCQUxyQjthQVBKLE1BY087eUJBQ003QyxlQUFULENBQXlCMUQsZ0JBQXpCLENBQTBDLG9CQUExQyxFQUFnRWdHLGNBQWhFLEVBQWdGLEtBQWhGO21DQUNtQiw0QkFBWTs2QkFDbEJ0QyxlQUFULENBQXlCdEQsbUJBQXpCLENBQTZDLG9CQUE3QyxFQUFtRTRGLGNBQW5FLEVBQW1GLEtBQW5GOzJCQUNPNUYsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUM0RixjQUFyQyxFQUFxRCxLQUFyRDsyQkFDTzVGLG1CQUFQLENBQTJCLG1CQUEzQixFQUFnRDRGLGNBQWhELEVBQWdFLEtBQWhFO2lCQUhKOztTQXBCUjtZQTJCSVEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxHQUFWLEVBQWU7Ozs7cUJBSXRCQyxTQUFULENBQW1CQyxHQUFuQixFQUF3QjtvQkFDaEJ6SSxDQUFKO29CQUNJeUksSUFBSUMsUUFBSixLQUFpQkMsU0FBckIsRUFBZ0M7d0JBQ3hCRixHQUFKO2lCQURKLE1BRU87d0JBQ0N4RyxTQUFTSSxhQUFULENBQXVCLEdBQXZCLENBQUo7c0JBQ0V1RyxJQUFGLEdBQVNILEdBQVQ7O3VCQUVHekksRUFBRTBJLFFBQUYsQ0FBVzFDLE9BQVgsQ0FBbUIsSUFBbkIsRUFBeUIsRUFBekIsSUFBK0JoRyxFQUFFNkksSUFBeEM7O2dCQUVBQyxPQUFKO2dCQUNJQyxNQUFKO2dCQUNJQyxPQUFKO2dCQUNJeEgsT0FBT3lILGNBQVgsRUFBMkI7MEJBQ2IsSUFBSUEsY0FBSixFQUFWO3lCQUNTVCxVQUFVVSxRQUFWLENBQVQ7MEJBQ1VWLFVBQVVELEdBQVYsQ0FBVjtvQkFDSU8sUUFBUUssZUFBUixLQUE0QlIsU0FBNUIsSUFBeUNLLFlBQVksRUFBckQsSUFBMkRBLFlBQVlELE1BQTNFLEVBQW1GOzhCQUNyRUssa0JBQWtCVCxTQUE1QjtpQkFESixNQUVPOzhCQUNPTSxjQUFWOzs7bUJBR0RILE9BQVA7U0EzQko7WUE2QklPLFVBQVUsOEJBQWQ7d0JBQ2dCLHlCQUFZO2dCQUNwQkMsSUFBSjtnQkFDSUMsR0FBSjtnQkFDSUMsV0FBVyxFQUFmLENBSHdCO2dCQUlwQkMsSUFBSjtnQkFDSWIsSUFBSjtnQkFDSTNCLENBQUo7Z0JBQ0l5QyxrQkFBa0IsQ0FBdEI7Z0JBQ0lDLFFBQUo7Z0JBQ0liLE9BQUo7Z0JBQ0lQLEdBQUo7Z0JBQ0lxQixJQUFKO2dCQUNJQyxHQUFKO3FCQUNTQyxhQUFULEdBQXlCOzttQ0FFRixDQUFuQjtvQkFDSUosb0JBQW9CLENBQXhCLEVBQTJCOzt1Q0FBQTtxQ0FBQTs7O3FCQUt0QkssY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7dUJBQ25CLFlBQVk7d0JBQ1h2QyxNQUFNdUMsS0FBS1YsSUFBWCxNQUFxQixJQUF6QixFQUErQjs2QkFDdEJXLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmIsT0FBMUIsRUFBbUMsWUFBbkMsRUFBaUQsTUFBTVcsS0FBS1AsSUFBNUQ7NEJBQ0lPLEtBQUtDLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QixNQUF4QixDQUFKLEVBQXFDO2lDQUM1QkYsS0FBTCxDQUFXM0gsWUFBWCxDQUF3QixNQUF4QixFQUFnQyxNQUFNMEgsS0FBS1AsSUFBM0M7OztpQkFKWjs7cUJBU0tXLFVBQVQsQ0FBb0JQLEdBQXBCLEVBQXlCO3VCQUNkLFlBQVk7d0JBQ1g3SCxPQUFPQyxTQUFTRCxJQUFwQjt3QkFDSVQsSUFBSVUsU0FBU0ksYUFBVCxDQUF1QixHQUF2QixDQUFSO3dCQUNJZ0ksR0FBSjt3QkFDSUMsTUFBSixHQUFhLElBQWI7c0JBQ0VDLFNBQUYsR0FBY1YsSUFBSVcsWUFBbEI7MEJBQ01qSixFQUFFa0osb0JBQUYsQ0FBdUIsS0FBdkIsRUFBOEIsQ0FBOUIsQ0FBTjt3QkFDSUosR0FBSixFQUFTOzRCQUNEL0gsWUFBSixDQUFpQixhQUFqQixFQUFnQyxNQUFoQzs0QkFDSUcsS0FBSixDQUFVaUksUUFBVixHQUFxQixVQUFyQjs0QkFDSWpJLEtBQUosQ0FBVUksS0FBVixHQUFrQixDQUFsQjs0QkFDSUosS0FBSixDQUFVa0ksTUFBVixHQUFtQixDQUFuQjs0QkFDSWxJLEtBQUosQ0FBVW1JLFFBQVYsR0FBcUIsUUFBckI7NkJBQ0tDLFlBQUwsQ0FBa0JSLEdBQWxCLEVBQXVCckksS0FBSzhJLFVBQTVCOzs7aUJBYlI7O3FCQWtCS0MsY0FBVCxDQUF3QmxCLEdBQXhCLEVBQTZCO3VCQUNsQixZQUFZO3dCQUNYbUIsT0FBSixHQUFjLElBQWQ7d0JBQ0lDLFNBQUosR0FBZ0IsSUFBaEI7O2lCQUZKOzsrQkFuRG9COzttQkEyRGpCaEosU0FBU3dJLG9CQUFULENBQThCLEtBQTlCLENBQVA7aUJBQ0t4RCxJQUFJLENBQVQsRUFBWUEsSUFBSTJDLEtBQUsxSixNQUFyQixFQUE2QitHLEtBQUssQ0FBbEMsRUFBcUM7b0JBQzdCOzBCQUNNMkMsS0FBSzNDLENBQUwsRUFBUWlFLHFCQUFSLEVBQU47aUJBREosQ0FFRSxPQUFPN0MsTUFBUCxFQUFlOzswQkFFUCxLQUFOOzt1QkFFR3VCLEtBQUszQyxDQUFMLEVBQVFrRSxZQUFSLENBQXFCLE1BQXJCLEtBQ0l2QixLQUFLM0MsQ0FBTCxFQUFRbUUsY0FBUixDQUF1Qi9CLE9BQXZCLEVBQWdDLE1BQWhDLENBREosSUFFSU8sS0FBSzNDLENBQUwsRUFBUWtFLFlBQVIsQ0FBcUIsWUFBckIsQ0FGWDtvQkFHSXZDLFFBQVFBLEtBQUt5QyxLQUFqQixFQUF3QjswQkFDZHpDLEtBQUt5QyxLQUFMLENBQVcsR0FBWCxDQUFOO2lCQURKLE1BRU87MEJBQ0csQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFOOzt1QkFFRzlDLElBQUksQ0FBSixDQUFQO3VCQUNPQSxJQUFJLENBQUosQ0FBUDsyQkFDV2dCLE9BQU9BLElBQUkrQixJQUFKLEtBQWEsQ0FBcEIsSUFBeUIvQixJQUFJZ0MsS0FBSixLQUFjLENBQXZDLElBQTRDaEMsSUFBSWlDLEdBQUosS0FBWSxDQUF4RCxJQUE2RGpDLElBQUlrQyxNQUFKLEtBQWUsQ0FBdkY7b0JBQ0lsQyxPQUFPQSxJQUFJMUcsS0FBSixLQUFjLENBQXJCLElBQTBCMEcsSUFBSW9CLE1BQUosS0FBZSxDQUF6QyxJQUE4QyxDQUFDaEIsUUFBbkQsRUFBNkQ7Ozs7d0JBSXJESCxZQUFZLENBQUNGLEtBQUtwSixNQUFsQixJQUE0QnVKLElBQTVCLElBQW9DLENBQUN4SCxTQUFTeUosY0FBVCxDQUF3QmpDLElBQXhCLENBQXpDLEVBQXdFOytCQUM3REQsUUFBUDs7d0JBRUFJLEtBQUszQyxDQUFMLEVBQVFrRCxZQUFSLENBQXFCLE1BQXJCLENBQUosRUFBa0M7NkJBQ3pCbEQsQ0FBTCxFQUFRaUQsY0FBUixDQUF1QmIsT0FBdkIsRUFBZ0MsWUFBaEMsRUFBOENULElBQTlDOzt3QkFFQVUsS0FBS3BKLE1BQVQsRUFBaUI7OzhCQUVQdUgsTUFBTTZCLElBQU4sQ0FBTjs0QkFDSU8sUUFBUSxJQUFaLEVBQWtCOzt1Q0FFSEUsZUFBZTt1Q0FDZkgsS0FBSzNDLENBQUwsQ0FEZTtzQ0FFaEJxQyxJQUZnQjtzQ0FHaEJHOzZCQUhDLENBQVgsRUFJSSxDQUpKOzs0QkFNQUksUUFBUWxCLFNBQVosRUFBdUI7c0NBQ1RMLGNBQWNnQixJQUFkLENBQVY7Z0NBQ0lSLFlBQVlILFNBQWhCLEVBQTJCO3NDQUNqQixJQUFJRyxPQUFKLEVBQU47c0NBQ01RLElBQU4sSUFBY08sR0FBZDtvQ0FDSVMsTUFBSixHQUFhRixXQUFXUCxHQUFYLENBQWI7b0NBQ0ltQixPQUFKLEdBQWNELGVBQWVsQixHQUFmLENBQWQ7b0NBQ0lvQixTQUFKLEdBQWdCRixlQUFlbEIsR0FBZixDQUFoQjtvQ0FDSThCLElBQUosQ0FBUyxLQUFULEVBQWdCckMsSUFBaEI7b0NBQ0lzQyxJQUFKO21EQUNtQixDQUFuQjs7OztpQkEvQmhCLE1BbUNPO3dCQUNDLENBQUNqQyxRQUFMLEVBQWU7NEJBQ1BsQyxNQUFNNkIsSUFBTixNQUFnQlgsU0FBcEIsRUFBK0I7O2tDQUVyQlcsSUFBTixJQUFjLElBQWQ7eUJBRkosTUFHTyxJQUFJN0IsTUFBTTZCLElBQU4sRUFBWWdCLE1BQWhCLEVBQXdCOzs7a0NBR3JCaEIsSUFBTixFQUFZdUMsS0FBWjttQ0FDT3BFLE1BQU02QixJQUFOLEVBQVlnQixNQUFuQjtrQ0FDTWhCLElBQU4sSUFBYyxJQUFkOztxQkFUUixNQVdPLElBQUlBLEtBQUtwSixNQUFMLElBQWV1SCxNQUFNNkIsSUFBTixDQUFuQixFQUFnQzttQ0FDeEJTLGVBQWU7bUNBQ2ZILEtBQUszQyxDQUFMLENBRGU7a0NBRWhCcUMsSUFGZ0I7a0NBR2hCRzt5QkFIQyxDQUFYLEVBSUksQ0FKSjs7OzttQkFRTCxFQUFQOytCQUNtQixDQUFuQjs7U0F2SUo7WUEwSUlxQyxRQUFKO21CQUNVLG1CQUFZO21CQUNYNUosbUJBQVAsQ0FBMkIsTUFBM0IsRUFBbUM0SixRQUFuQyxFQUE0QyxLQUE1QyxFQURrQjtrQkFFWmpILFdBQVcrQyxhQUFYLEVBQTBCLENBQTFCLENBQU47U0FGSjtZQUlJM0YsU0FBU0UsVUFBVCxLQUF3QixVQUE1QixFQUF3Qzs7bUJBRTdCTCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ2dLLFFBQWhDLEVBQXlDLEtBQXpDO1NBRkosTUFHTzs7Ozs7Q0F4TmQsR0FBRDs7QUNSQTtBQUNBO0FBRUEsc0NBQWUsTUFBTSxFQUFyQjs7Ozs7Ozs7Ozs7OztBQ0FBQyxRQUFRdkUsR0FBUixDQUFZLFdBQVo7OztBQUdBLElBQUkscUJBQXFCdkYsUUFBekIsRUFBbUM7O1dBRXhCdUQsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUN1RyxNQUFuQyxDQUEwQyxPQUExQzs7OztHQUlFQyxPQUFGLEVBQVdDLFFBQVgsRUFBc0J0RyxPQUF0QixDQUE4QnVHLFNBQVM7V0FDOUJ4RyxJQUFQLENBQVl3RyxLQUFaLEVBQW1CdkcsT0FBbkIsQ0FBMkJxQixLQUFLO1lBQ3hCQSxDQUFOO0tBREY7R0FERjs7Ozs7In0=
