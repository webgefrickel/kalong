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

var _patterns_components$example$example = ((scope = document) => {
  const example = scope.querySelectorAll('.js-example');

  console.log(mediaquery('s'), 'mediaquery above breakpoint S');
  console.log(example);
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

var _patterns_components$icon$icon = (() => {
  console.log('Loading svgxuse polyfill...');
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8xLWhlbHBlcnMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb21wb25lbnRzL2V4YW1wbGUvZXhhbXBsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmd4dXNlL3N2Z3h1c2UuanMiLCIuLi8uLi8uLi9zcmMvcGF0dGVybnMvY29tcG9uZW50cy9pY29uL2ljb24uanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnQgRmFjZSBPYnNlcnZlciB2Mi4wLjEzIC0gwqkgQnJhbSBTdGVpbi4gTGljZW5zZTogQlNELTMtQ2xhdXNlICovKGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3ZhciBmLGc9W107ZnVuY3Rpb24gbChhKXtnLnB1c2goYSk7MT09Zy5sZW5ndGgmJmYoKX1mdW5jdGlvbiBtKCl7Zm9yKDtnLmxlbmd0aDspZ1swXSgpLGcuc2hpZnQoKX1mPWZ1bmN0aW9uKCl7c2V0VGltZW91dChtKX07ZnVuY3Rpb24gbihhKXt0aGlzLmE9cDt0aGlzLmI9dm9pZCAwO3RoaXMuZj1bXTt2YXIgYj10aGlzO3RyeXthKGZ1bmN0aW9uKGEpe3EoYixhKX0sZnVuY3Rpb24oYSl7cihiLGEpfSl9Y2F0Y2goYyl7cihiLGMpfX12YXIgcD0yO2Z1bmN0aW9uIHQoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7YyhhKX0pfWZ1bmN0aW9uIHUoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIpe2IoYSl9KX1mdW5jdGlvbiBxKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGM9ITE7dHJ5e3ZhciBkPWImJmIudGhlbjtpZihudWxsIT1iJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZCl7ZC5jYWxsKGIsZnVuY3Rpb24oYil7Y3x8cShhLGIpO2M9ITB9LGZ1bmN0aW9uKGIpe2N8fHIoYSxiKTtjPSEwfSk7cmV0dXJufX1jYXRjaChlKXtjfHxyKGEsZSk7cmV0dXJufWEuYT0wO2EuYj1iO3YoYSl9fVxuZnVuY3Rpb24gcihhLGIpe2lmKGEuYT09cCl7aWYoYj09YSl0aHJvdyBuZXcgVHlwZUVycm9yO2EuYT0xO2EuYj1iO3YoYSl9fWZ1bmN0aW9uIHYoYSl7bChmdW5jdGlvbigpe2lmKGEuYSE9cClmb3IoO2EuZi5sZW5ndGg7KXt2YXIgYj1hLmYuc2hpZnQoKSxjPWJbMF0sZD1iWzFdLGU9YlsyXSxiPWJbM107dHJ5ezA9PWEuYT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2UoYy5jYWxsKHZvaWQgMCxhLmIpKTplKGEuYik6MT09YS5hJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZD9lKGQuY2FsbCh2b2lkIDAsYS5iKSk6YihhLmIpKX1jYXRjaChoKXtiKGgpfX19KX1uLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmModm9pZCAwLGEpfTtuLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gbmV3IG4oZnVuY3Rpb24oZCxlKXtjLmYucHVzaChbYSxiLGQsZV0pO3YoYyl9KX07XG5mdW5jdGlvbiB3KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2hbY109ZDtlKz0xO2U9PWEubGVuZ3RoJiZiKGgpfX12YXIgZT0wLGg9W107MD09YS5sZW5ndGgmJmIoaCk7Zm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKz0xKXUoYVtrXSkuYyhkKGspLGMpfSl9ZnVuY3Rpb24geChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrPTEpdShhW2RdKS5jKGIsYyl9KX07d2luZG93LlByb21pc2V8fCh3aW5kb3cuUHJvbWlzZT1uLHdpbmRvdy5Qcm9taXNlLnJlc29sdmU9dSx3aW5kb3cuUHJvbWlzZS5yZWplY3Q9dCx3aW5kb3cuUHJvbWlzZS5yYWNlPXgsd2luZG93LlByb21pc2UuYWxsPXcsd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW49bi5wcm90b3R5cGUuYyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXT1uLnByb3RvdHlwZS5nKTt9KCkpO1xuXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGEsYil7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gbShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYygpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYyk7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBrKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixrKSxhKCl9KX07ZnVuY3Rpb24gcihhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24gdChhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYitcIjtcIn1mdW5jdGlvbiB5KGEpe3ZhciBiPWEuYS5vZmZzZXRXaWR0aCxjPWIrMTAwO2EuZi5zdHlsZS53aWR0aD1jK1wicHhcIjthLmMuc2Nyb2xsTGVmdD1jO2EuYi5zY3JvbGxMZWZ0PWEuYi5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEuZyE9PWI/KGEuZz1iLCEwKTohMX1mdW5jdGlvbiB6KGEsYil7ZnVuY3Rpb24gYygpe3ZhciBhPWs7eShhKSYmYS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3koYSl9O2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBCPW51bGwsQz1udWxsLEU9bnVsbCxGPW51bGw7ZnVuY3Rpb24gRygpe2lmKG51bGw9PT1DKWlmKEooKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKSl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO0M9ISFhJiY2MDM+cGFyc2VJbnQoYVsxXSwxMCl9ZWxzZSBDPSExO3JldHVybiBDfWZ1bmN0aW9uIEooKXtudWxsPT09RiYmKEY9ISFkb2N1bWVudC5mb250cyk7cmV0dXJuIEZ9XG5mdW5jdGlvbiBLKCl7aWYobnVsbD09PUUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUU9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSygpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIscT0wLEQ9Ynx8M0UzLEg9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7aWYoSigpJiYhRygpKXt2YXIgTT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EP2IoKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGZ1bmN0aW9uKCl7YigpfSl9ZSgpfSksTj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGMpe3E9c2V0VGltZW91dChjLEQpfSk7UHJvbWlzZS5yYWNlKFtOLE1dKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHEpO2EoYyl9LGZ1bmN0aW9uKCl7YihjKX0pfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHUoKXt2YXIgYjtpZihiPS0xIT1cbmYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9aCkoYj1mIT1nJiZmIT1oJiZnIT1oKXx8KG51bGw9PT1CJiYoYj0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksQj0hIWImJig1MzY+cGFyc2VJbnQoYlsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGJbMV0sMTApJiYxMT49cGFyc2VJbnQoYlsyXSwxMCkpKSxiPUImJihmPT12JiZnPT12JiZoPT12fHxmPT13JiZnPT13JiZoPT13fHxmPT14JiZnPT14JiZoPT14KSksYj0hYjtiJiYoZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KHEpLGEoYykpfWZ1bmN0aW9uIEkoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EKWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoYyk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLFxuZz1uLmEub2Zmc2V0V2lkdGgsaD1wLmEub2Zmc2V0V2lkdGgsdSgpO3E9c2V0VGltZW91dChJLDUwKX19dmFyIGU9bmV3IHIoayksbj1uZXcgcihrKSxwPW5ldyByKGspLGY9LTEsZz0tMSxoPS0xLHY9LTEsdz0tMSx4PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmRpcj1cImx0clwiO3QoZSxMKGMsXCJzYW5zLXNlcmlmXCIpKTt0KG4sTChjLFwic2VyaWZcIikpO3QocCxMKGMsXCJtb25vc3BhY2VcIikpO2QuYXBwZW5kQ2hpbGQoZS5hKTtkLmFwcGVuZENoaWxkKG4uYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7dj1lLmEub2Zmc2V0V2lkdGg7dz1uLmEub2Zmc2V0V2lkdGg7eD1wLmEub2Zmc2V0V2lkdGg7SSgpO3ooZSxmdW5jdGlvbihhKXtmPWE7dSgpfSk7dChlLEwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO3oobixmdW5jdGlvbihhKXtnPWE7dSgpfSk7dChuLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtcbnoocCxmdW5jdGlvbihhKXtoPWE7dSgpfSk7dChwLEwoYywnXCInK2MuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1BOih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1BLHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUEucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnI21vZHVsZS9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IHsgZm9udHMgfSBmcm9tICcjc2hhcmVkY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBmb250T2JzZXJ2ZXJzID0gW107XG5cbiAgaWYgKHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGZvbnRzKS5mb3JFYWNoKGZvbnRPYmplY3QgPT4ge1xuICAgIE9iamVjdC5rZXlzKGZvbnRzW2ZvbnRPYmplY3RdKS5mb3JFYWNoKGZvbnQgPT4ge1xuICAgICAgY29uc3QgZiA9IGZvbnRzW2ZvbnRPYmplY3RdW2ZvbnRdO1xuICAgICAgaWYgKGYuZm9udGZhY2UpIHtcbiAgICAgICAgZm9udE9ic2VydmVycy5wdXNoKFxuICAgICAgICAgIG5ldyBPYnNlcnZlcihmLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgICAgd2VpZ2h0OiBmLndlaWdodCxcbiAgICAgICAgICAgIHN0eWxlOiBmLnN0eWxlXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKGZvbnRPYnNlcnZlcnMubGVuZ3RoID49IDEpIHtcbiAgICBQcm9taXNlLmFsbChmb250T2JzZXJ2ZXJzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgICAgIC8vIE9wdGltaXphdGlvbiBmb3IgUmVwZWF0IFZpZXdzXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgYnJlYWtwb2ludHMgfSBmcm9tICcjc2hhcmVkY29uZmlnJztcblxuLy8gc2FtZSB1c2FnZSBhcyB0aGUgbWVkaWFxdWVyeS1zY3NzLW1peGluLCBqdXN0XG4vLyBwcm92aWRlIHRoZSBzaG9ydGNvZGUgdXNlZCBpbiB0aGUgc2Nzcy1maWxlIGFuZCBpZiBpdFxuLy8gaXMgYSBjdXN0b20gcXVlcnkuIHRoaXMgbW9kdWxlIHJldHVybiB0cnVlIGlmIHRoZVxuLy8gZ2l2ZW4gYnJlYWtwb2ludCBtYXRjaGVzIG9yIGZhbHNlIGlmIGl0IGRvZXNudFxuZXhwb3J0IGRlZmF1bHQgKHNob3J0Y29kZSwgY3VzdG9tID0gZmFsc2UpID0+IHtcbiAgY29uc3QgcXVlcnkgPSAoY3VzdG9tKSA/IGJyZWFrcG9pbnRzW3Nob3J0Y29kZV0gOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50c1tzaG9ydGNvZGVdfXB4KWA7XG5cbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xufTtcblxuIiwiaW1wb3J0IG1lZGlhcXVlcnkgZnJvbSAnI2hlbHBlci9tZWRpYXF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgKHNjb3BlID0gZG9jdW1lbnQpID0+IHtcbiAgY29uc3QgZXhhbXBsZSA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1leGFtcGxlJyk7XG5cbiAgY29uc29sZS5sb2cobWVkaWFxdWVyeSgncycpLCAnbWVkaWFxdWVyeSBhYm92ZSBicmVha3BvaW50IFMnKTtcbiAgY29uc29sZS5sb2coZXhhbXBsZSk7XG59O1xuIiwiLyohXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNyBJY29Nb29uLmlvXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2V5YW1vb24vc3ZneHVzZVxuICogQHZlcnNpb24gICAxLjIuNlxuICovXG4vKmpzbGludCBicm93c2VyOiB0cnVlICovXG4vKmdsb2JhbCBYRG9tYWluUmVxdWVzdCwgTXV0YXRpb25PYnNlcnZlciwgd2luZG93ICovXG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIGhvbGRzIHhociBvYmplY3RzIHRvIHByZXZlbnQgbXVsdGlwbGUgcmVxdWVzdHNcbiAgICAgICAgdmFyIGNoZWNrVXNlRWxlbXM7XG4gICAgICAgIHZhciB0aWQ7IC8vIHRpbWVvdXQgaWRcbiAgICAgICAgdmFyIGRlYm91bmNlZENoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpZCk7XG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDEwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXI7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZWRDaGVjayk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3JlYXRlUmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgIC8vIEluIElFIDksIGNyb3NzIG9yaWdpbiByZXF1ZXN0cyBjYW4gb25seSBiZSBzZW50IHVzaW5nIFhEb21haW5SZXF1ZXN0LlxuICAgICAgICAgICAgLy8gWERvbWFpblJlcXVlc3Qgd291bGQgZmFpbCBpZiBDT1JTIGhlYWRlcnMgYXJlIG5vdCBzZXQuXG4gICAgICAgICAgICAvLyBUaGVyZWZvcmUsIFhEb21haW5SZXF1ZXN0IHNob3VsZCBvbmx5IGJlIHVzZWQgd2l0aCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmlnaW4obG9jKSB7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgaWYgKGxvYy5wcm90b2NvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBsb2M7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICBhLmhyZWYgPSBsb2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhLnByb3RvY29sLnJlcGxhY2UoLzovZywgXCJcIikgKyBhLmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciBvcmlnaW47XG4gICAgICAgICAgICB2YXIgb3JpZ2luMjtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgb3JpZ2luID0gZ2V0T3JpZ2luKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBvcmlnaW4yID0gZ2V0T3JpZ2luKHVybCk7XG4gICAgICAgICAgICAgICAgaWYgKFJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID09PSB1bmRlZmluZWQgJiYgb3JpZ2luMiAhPT0gXCJcIiAmJiBvcmlnaW4yICE9PSBvcmlnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhEb21haW5SZXF1ZXN0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gWE1MSHR0cFJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB4bGlua05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG4gICAgICAgIGNoZWNrVXNlRWxlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmFzZTtcbiAgICAgICAgICAgIHZhciBiY3I7XG4gICAgICAgICAgICB2YXIgZmFsbGJhY2sgPSBcIlwiOyAvLyBvcHRpb25hbCBmYWxsYmFjayBVUkwgaW4gY2FzZSBubyBiYXNlIHBhdGggdG8gU1ZHIGZpbGUgd2FzIGdpdmVuIGFuZCBubyBzeW1ib2wgZGVmaW5pdGlvbiB3YXMgZm91bmQuXG4gICAgICAgICAgICB2YXIgaGFzaDtcbiAgICAgICAgICAgIHZhciBocmVmO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgaW5Qcm9ncmVzc0NvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBpc0hpZGRlbjtcbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIHVybDtcbiAgICAgICAgICAgIHZhciB1c2VzO1xuICAgICAgICAgICAgdmFyIHhocjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ic2VydmVJZkRvbmUoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZG9uZSB3aXRoIG1ha2luZyBjaGFuZ2VzLCBzdGFydCB3YXRjaGluZyBmb3IgY2hhZ25lcyBpbiBET00gYWdhaW5cbiAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaW5Qcm9ncmVzc0NvdW50ID09PSAwKSB7IC8vIGlmIGFsbCB4aHJzIHdlcmUgcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBtYWtlIHN1cmUgdG8gcmVtb3ZlIG9sZCBoYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlQ2hhbmdlcygpOyAvLyB3YXRjaCBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhdHRyVXBkYXRlRnVuYyhzcGVjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW3NwZWMuYmFzZV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJ4bGluazpocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjLnVzZUVsLmhhc0F0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ubG9hZEZ1bmMoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ4XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ZnO1xuICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgeC5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBzdmcgPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ZnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLndpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKHN2ZywgYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRXJyb3JUaW1lb3V0KHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBzdG9wIHdhdGNoaW5nIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgLy8gZmluZCBhbGwgdXNlIGVsZW1lbnRzXG4gICAgICAgICAgICB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIik7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGJjciA9IHVzZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhaWxlZCB0byBnZXQgYm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZSB1c2UgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBiY3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaHJlZiA9IHVzZXNbaV0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdXNlc1tpXS5nZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaHJlZiAmJiBocmVmLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhyZWYuc3BsaXQoXCIjXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFtcIlwiLCBcIlwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmFzZSA9IHVybFswXTtcbiAgICAgICAgICAgICAgICBoYXNoID0gdXJsWzFdO1xuICAgICAgICAgICAgICAgIGlzSGlkZGVuID0gYmNyICYmIGJjci5sZWZ0ID09PSAwICYmIGJjci5yaWdodCA9PT0gMCAmJiBiY3IudG9wID09PSAwICYmIGJjci5ib3R0b20gPT09IDA7XG4gICAgICAgICAgICAgICAgaWYgKGJjciAmJiBiY3Iud2lkdGggPT09IDAgJiYgYmNyLmhlaWdodCA9PT0gMCAmJiAhaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVzZSBlbGVtZW50IGlzIGVtcHR5XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsIFNWRywgdHJ5IHRvIGZldGNoIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGlmIHRoZXJlIGlzIG5vIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrICYmICFiYXNlLmxlbmd0aCAmJiBoYXNoICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSA9IGZhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VzW2ldLmhhc0F0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXNbaV0uc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJ4bGluazpocmVmXCIsIGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGUgdXBkYXRpbmcgeGxpbms6aHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyID0gY2FjaGVbYmFzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ1ZSBzaWduaWZpZXMgdGhhdCBwcmVwZW5kaW5nIHRoZSBTVkcgd2FzIG5vdCByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXR0clVwZGF0ZUZ1bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogaGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KGJhc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyID0gbmV3IFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB4aHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBvbmxvYWRGdW5jKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gb25FcnJvclRpbWVvdXQoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIGJhc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVbYmFzZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgVVJMIGlmIHRoZSB1c2UgZWxlbWVudCB3YXMgbm90IGVtcHR5IGFuZCBubyByZXF1ZXN0IHdhcyBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYWNoZVtiYXNlXS5vbmxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCB0dXJucyBvdXQgdGhhdCBwcmVwZW5kaW5nIHRoZSBTVkcgaXMgbm90IG5lY2Vzc2FyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhYm9ydCB0aGUgaW4tcHJvZ3Jlc3MgeGhyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhY2hlW2Jhc2VdLm9ubG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5sZW5ndGggJiYgY2FjaGVbYmFzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXR0clVwZGF0ZUZ1bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUVsOiB1c2VzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogaGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlcyA9IFwiXCI7XG4gICAgICAgICAgICBpblByb2dyZXNzQ291bnQgKz0gMTtcbiAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHdpbkxvYWQ7XG4gICAgICAgIHdpbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luTG9hZCwgZmFsc2UpOyAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgLy8gVGhlIGxvYWQgZXZlbnQgZmlyZXMgd2hlbiBhbGwgcmVzb3VyY2VzIGhhdmUgZmluaXNoZWQgbG9hZGluZywgd2hpY2ggYWxsb3dzIGRldGVjdGluZyB3aGV0aGVyIFNWRyB1c2UgZWxlbWVudHMgYXJlIGVtcHR5LlxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gYWRkIGEgbGlzdGVuZXIgaWYgdGhlIGRvY3VtZW50IGlzIGFscmVhZHkgbG9hZGVkLCBpbml0aWFsaXplIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgd2luTG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxufSgpKTtcbiIsImltcG9ydCAnc3ZneHVzZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0xvYWRpbmcgc3ZneHVzZSBwb2x5ZmlsbC4uLicpO1xufTtcbiIsImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi8zLWdsb2JhbC8hKCoudGVzdHwqLmNvbmZpZykuanMnO1xuaW1wb3J0ICogYXMgcGF0dGVybnMgZnJvbSAnLi4vcGF0dGVybnMvKiovISgqLnRlc3R8Ki5jb25maWcpLmpzJztcblxuLy8gYWRkaXRpb25hbCBzYW5pdHkgY2hlY2sgZm9yIG1vZGVybiBicm93c2Vyc+KAlGFuZCB0aGVuLCBlbmhhbmNlIVxuaWYgKCd2aXNpYmlsaXR5U3RhdGUnIGluIGRvY3VtZW50KSB7XG4gIC8vIHJlbW92ZSB0aGUgbm8tanMgY2xhc3NcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbiAgLy8gbG9hZCBhbmQgZXhlY3V0ZSBhbGwgc2NyaXB0cyBmcm9tIGdsb2JhbCBhbmQgYWxsIHBhdHRlcm5zIGF1dG9tYXRpY2FsbHlcbiAgLy8gYnV0IGV4Y2x1ZGUgdGVzdCBhbmQgY29uZmlnIGZpbGVzIOKAlCB0aG9zZSBzaG91bGQgbm90IGJlIGV4ZWN1dGVkXG4gIFsgZ2xvYmFscywgcGF0dGVybnMgXS5mb3JFYWNoKGl0ZW1zID0+IHtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpID0+IHtcbiAgICAgIGl0ZW1zW2ldKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImYiLCJnIiwibCIsImEiLCJwdXNoIiwibGVuZ3RoIiwibSIsInNoaWZ0IiwibiIsInAiLCJiIiwiYyIsInQiLCJ1IiwicSIsIlR5cGVFcnJvciIsImQiLCJ0aGVuIiwiY2FsbCIsInIiLCJlIiwidiIsImgiLCJwcm90b3R5cGUiLCJ3IiwiayIsIngiLCJ3aW5kb3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhY2UiLCJhbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJib2R5IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlTdGF0ZSIsImRldGFjaEV2ZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJzdHlsZSIsImNzc1RleHQiLCJ5Iiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsInoiLCJwYXJlbnROb2RlIiwiQSIsImZhbWlseSIsIndlaWdodCIsInN0cmV0Y2giLCJCIiwiQyIsIkUiLCJGIiwiRyIsIkoiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidmVuZG9yIiwiZXhlYyIsInVzZXJBZ2VudCIsInBhcnNlSW50IiwiZm9udHMiLCJLIiwiZm9udCIsIkwiLCJqb2luIiwibG9hZCIsIkQiLCJIIiwiRGF0ZSIsImdldFRpbWUiLCJNIiwic2V0VGltZW91dCIsIk4iLCJyZW1vdmVDaGlsZCIsImNsZWFyVGltZW91dCIsIkkiLCJoaWRkZW4iLCJkaXIiLCJtb2R1bGUiLCJmb250T2JzZXJ2ZXJzIiwic2Vzc2lvblN0b3JhZ2UiLCJmb250c0xvYWRlZCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImtleXMiLCJmb3JFYWNoIiwiZm9udE9iamVjdCIsImZvbnRmYWNlIiwiT2JzZXJ2ZXIiLCJyZXBsYWNlIiwic2hvcnRjb2RlIiwiY3VzdG9tIiwicXVlcnkiLCJicmVha3BvaW50cyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2NvcGUiLCJleGFtcGxlIiwicXVlcnlTZWxlY3RvckFsbCIsImxvZyIsIm1lZGlhcXVlcnkiLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsImNoZWNrVXNlRWxlbXMiLCJ0aWQiLCJkZWJvdW5jZWRDaGVjayIsInVub2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlQ2hhbmdlcyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiaWdub3JlIiwiY3JlYXRlUmVxdWVzdCIsInVybCIsImdldE9yaWdpbiIsImxvYyIsInByb3RvY29sIiwidW5kZWZpbmVkIiwiaHJlZiIsImhvc3QiLCJSZXF1ZXN0Iiwib3JpZ2luIiwib3JpZ2luMiIsIlhNTEh0dHBSZXF1ZXN0IiwibG9jYXRpb24iLCJ3aXRoQ3JlZGVudGlhbHMiLCJYRG9tYWluUmVxdWVzdCIsInhsaW5rTlMiLCJiYXNlIiwiYmNyIiwiZmFsbGJhY2siLCJoYXNoIiwiaSIsImluUHJvZ3Jlc3NDb3VudCIsImlzSGlkZGVuIiwidXNlcyIsInhociIsIm9ic2VydmVJZkRvbmUiLCJhdHRyVXBkYXRlRnVuYyIsInNwZWMiLCJ1c2VFbCIsInNldEF0dHJpYnV0ZU5TIiwiaGFzQXR0cmlidXRlIiwib25sb2FkRnVuYyIsInN2ZyIsIm9ubG9hZCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvbkVycm9yVGltZW91dCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOUyIsInNwbGl0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVuIiwic2VuZCIsImFib3J0Iiwid2luTG9hZCIsInJlbW92ZSIsImdsb2JhbHMiLCJwYXR0ZXJucyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt3RUFBdUUsYUFBVTtRQUFrQkEsQ0FBSjtRQUFNQyxJQUFFLEVBQVIsQ0FBVyxTQUFTQyxDQUFULENBQVdDLENBQVgsRUFBYTtRQUFHQyxJQUFGLENBQU9ELENBQVAsRUFBVSxLQUFHRixFQUFFSSxNQUFMLElBQWFMLEdBQWI7Y0FBMEJNLENBQVQsR0FBWTthQUFNTCxFQUFFSSxNQUFQLEdBQWVKLEVBQUUsQ0FBRixLQUFPQSxFQUFFTSxLQUFGLEVBQVA7U0FBbUIsYUFBVTtpQkFBWUQsQ0FBWDtLQUFiLENBQTRCLFNBQVNFLENBQVQsQ0FBV0wsQ0FBWCxFQUFhO1dBQU1BLENBQUwsR0FBT00sQ0FBUCxDQUFTLEtBQUtDLENBQUwsR0FBTyxLQUFLLENBQVosQ0FBYyxLQUFLVixDQUFMLEdBQU8sRUFBUCxDQUFVLElBQUlVLElBQUUsSUFBTixDQUFXLElBQUc7VUFBRyxVQUFTUCxDQUFULEVBQVc7WUFBR08sQ0FBRixFQUFJUCxDQUFKO1NBQWQsRUFBc0IsVUFBU0EsQ0FBVCxFQUFXO1lBQUdPLENBQUYsRUFBSVAsQ0FBSjtTQUFsQztPQUFKLENBQStDLE9BQU1RLENBQU4sRUFBUTtVQUFHRCxDQUFGLEVBQUlDLENBQUo7O1NBQVlGLElBQUUsQ0FBTixDQUFRLFNBQVNHLENBQVQsQ0FBV1QsQ0FBWCxFQUFhO2FBQVEs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
