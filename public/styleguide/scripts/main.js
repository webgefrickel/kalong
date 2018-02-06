(function () {
'use strict';

var _patterns_components$example$example = (() => {});

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

var _patterns_globals$footer$footer = (() => {
  console.log('footer');
});

const globals = {};
Object.freeze(globals);
const subglobals = {};
Object.freeze(subglobals);
const patterns = {
  components$example$example: _patterns_components$example$example,
  components$icon$icon: _patterns_components$icon$icon,
  globals$footer$footer: _patterns_globals$footer$footer
};
Object.freeze(patterns);

// additional sanity check for modern browsers—and then, enhance!

if ('visibilityState' in document) {
  // remove the no-js class
  document.documentElement.classList.remove('no-js');

  // load and execute all scripts from global and all patterns automatically
  [globals, subglobals, patterns].forEach(items => {
    Object.keys(items).forEach(i => {
      items[i]();
    });
  });
}

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhdHRlcm5zL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb21wb25lbnRzL2ljb24vaWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9nbG9iYWxzL2Zvb3Rlci9mb290ZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbn07XG4iLCIvKiFcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE3IEljb01vb24uaW9cbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9zdmd4dXNlXG4gKiBAdmVyc2lvbiAgIDEuMi42XG4gKi9cbi8qanNsaW50IGJyb3dzZXI6IHRydWUgKi9cbi8qZ2xvYmFsIFhEb21haW5SZXF1ZXN0LCBNdXRhdGlvbk9ic2VydmVyLCB3aW5kb3cgKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gaG9sZHMgeGhyIG9iamVjdHMgdG8gcHJldmVudCBtdWx0aXBsZSByZXF1ZXN0c1xuICAgICAgICB2YXIgY2hlY2tVc2VFbGVtcztcbiAgICAgICAgdmFyIHRpZDsgLy8gdGltZW91dCBpZFxuICAgICAgICB2YXIgZGVib3VuY2VkQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGlkKTtcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcjtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlZENoZWNrKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjcmVhdGVSZXF1ZXN0ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgLy8gSW4gSUUgOSwgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIGNhbiBvbmx5IGJlIHNlbnQgdXNpbmcgWERvbWFpblJlcXVlc3QuXG4gICAgICAgICAgICAvLyBYRG9tYWluUmVxdWVzdCB3b3VsZCBmYWlsIGlmIENPUlMgaGVhZGVycyBhcmUgbm90IHNldC5cbiAgICAgICAgICAgIC8vIFRoZXJlZm9yZSwgWERvbWFpblJlcXVlc3Qgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aXRoIGNyb3NzIG9yaWdpbiByZXF1ZXN0cy5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE9yaWdpbihsb2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAobG9jLnByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGxvYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IGxvYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKSArIGEuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIG9yaWdpbjtcbiAgICAgICAgICAgIHZhciBvcmlnaW4yO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBnZXRPcmlnaW4obG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIG9yaWdpbjIgPSBnZXRPcmlnaW4odXJsKTtcbiAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCAmJiBvcmlnaW4yICE9PSBcIlwiICYmIG9yaWdpbjIgIT09IG9yaWdpbikge1xuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gWERvbWFpblJlcXVlc3QgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbiAgICAgICAgY2hlY2tVc2VFbGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBiYXNlO1xuICAgICAgICAgICAgdmFyIGJjcjtcbiAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IFwiXCI7IC8vIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpbiBjYXNlIG5vIGJhc2UgcGF0aCB0byBTVkcgZmlsZSB3YXMgZ2l2ZW4gYW5kIG5vIHN5bWJvbCBkZWZpbml0aW9uIHdhcyBmb3VuZC5cbiAgICAgICAgICAgIHZhciBoYXNoO1xuICAgICAgICAgICAgdmFyIGhyZWY7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBpblByb2dyZXNzQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGlzSGlkZGVuO1xuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgdmFyIHVzZXM7XG4gICAgICAgICAgICB2YXIgeGhyO1xuICAgICAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZUlmRG9uZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBkb25lIHdpdGggbWFraW5nIGNoYW5nZXMsIHN0YXJ0IHdhdGNoaW5nIGZvciBjaGFnbmVzIGluIERPTSBhZ2FpblxuICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpblByb2dyZXNzQ291bnQgPT09IDApIHsgLy8gaWYgYWxsIHhocnMgd2VyZSByZXNvbHZlZFxuICAgICAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzKCk7IC8vIG1ha2Ugc3VyZSB0byByZW1vdmUgb2xkIGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVDaGFuZ2VzKCk7IC8vIHdhdGNoIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGF0dHJVcGRhdGVGdW5jKHNwZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVbc3BlYy5iYXNlXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcInhsaW5rOmhyZWZcIiwgXCIjXCIgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWMudXNlRWwuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25sb2FkRnVuYyh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInhcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdmc7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB4LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHN2ZyA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIilbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoc3ZnLCBib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25FcnJvclRpbWVvdXQoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzKCk7IC8vIHN0b3Agd2F0Y2hpbmcgZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAvLyBmaW5kIGFsbCB1c2UgZWxlbWVudHNcbiAgICAgICAgICAgIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gdXNlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFpbGVkIHRvIGdldCBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIHVzZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGJjciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBocmVmID0gdXNlc1tpXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwiaHJlZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdXNlc1tpXS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmIChocmVmICYmIGhyZWYuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaHJlZi5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gW1wiXCIsIFwiXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiYXNlID0gdXJsWzBdO1xuICAgICAgICAgICAgICAgIGhhc2ggPSB1cmxbMV07XG4gICAgICAgICAgICAgICAgaXNIaWRkZW4gPSBiY3IgJiYgYmNyLmxlZnQgPT09IDAgJiYgYmNyLnJpZ2h0ID09PSAwICYmIGJjci50b3AgPT09IDAgJiYgYmNyLmJvdHRvbSA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoYmNyICYmIGJjci53aWR0aCA9PT0gMCAmJiBiY3IuaGVpZ2h0ID09PSAwICYmICFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBvcHRpb25hbCBmYWxsYmFjayBVUkwgaWYgdGhlcmUgaXMgbm8gcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsIFNWR1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2sgJiYgIWJhc2UubGVuZ3RoICYmIGhhc2ggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlID0gZmFsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXNbaV0uaGFzQXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBcInhsaW5rOmhyZWZcIiwgaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZSB1cGRhdGluZyB4bGluazpocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBjYWNoZVtiYXNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlIHNpZ25pZmllcyB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyB3YXMgbm90IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUVsOiB1c2VzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG9ubG9hZEZ1bmMoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gb25FcnJvclRpbWVvdXQoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtiYXNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhpcyBVUkwgaWYgdGhlIHVzZSBlbGVtZW50IHdhcyBub3QgZW1wdHkgYW5kIG5vIHJlcXVlc3Qgd2FzIHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhY2hlW2Jhc2VdLm9ubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IHR1cm5zIG91dCB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyBpcyBub3QgbmVjZXNzYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFib3J0IHRoZSBpbi1wcm9ncmVzcyB4aHIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVbYmFzZV0ub25sb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmxlbmd0aCAmJiBjYWNoZVtiYXNlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VzID0gXCJcIjtcbiAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgd2luTG9hZDtcbiAgICAgICAgd2luTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7IC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAvLyBUaGUgbG9hZCBldmVudCBmaXJlcyB3aGVuIGFsbCByZXNvdXJjZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLCB3aGljaCBhbGxvd3MgZGV0ZWN0aW5nIHdoZXRoZXIgU1ZHIHVzZSBlbGVtZW50cyBhcmUgZW1wdHkuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luTG9hZCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgYSBsaXN0ZW5lciBpZiB0aGUgZG9jdW1lbnQgaXMgYWxyZWFkeSBsb2FkZWQsIGluaXRpYWxpemUgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICB3aW5Mb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCkpO1xuIiwiaW1wb3J0ICdzdmd4dXNlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnTG9hZGluZyBzdmd4dXNlIHBvbHlmaWxsLi4uJyk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnZm9vdGVyJyk7XG59O1xuIiwiaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuLzQtZ2xvYmFsLyouanMnO1xuaW1wb3J0ICogYXMgc3ViZ2xvYmFscyBmcm9tICcuLzQtZ2xvYmFsLyoqLyouanMnO1xuaW1wb3J0ICogYXMgcGF0dGVybnMgZnJvbSAnLi4vcGF0dGVybnMvKiovKi5qcyc7XG5cbi8vIGFkZGl0aW9uYWwgc2FuaXR5IGNoZWNrIGZvciBtb2Rlcm4gYnJvd3NlcnPigJRhbmQgdGhlbiwgZW5oYW5jZSFcbmlmICgndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudCkge1xuICAvLyByZW1vdmUgdGhlIG5vLWpzIGNsYXNzXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuXG4gIC8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4gIFsgZ2xvYmFscywgc3ViZ2xvYmFscywgcGF0dGVybnMgXS5mb3JFYWNoKGl0ZW1zID0+IHtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpID0+IHtcbiAgICAgIGl0ZW1zW2ldKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsImNoZWNrVXNlRWxlbXMiLCJ0aWQiLCJkZWJvdW5jZWRDaGVjayIsInNldFRpbWVvdXQiLCJ1bm9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlnbm9yZSIsImNyZWF0ZVJlcXVlc3QiLCJ1cmwiLCJnZXRPcmlnaW4iLCJsb2MiLCJhIiwicHJvdG9jb2wiLCJ1bmRlZmluZWQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlcGxhY2UiLCJob3N0IiwiUmVxdWVzdCIsIm9yaWdpbiIsIm9yaWdpbjIiLCJYTUxIdHRwUmVxdWVzdCIsImxvY2F0aW9uIiwid2l0aENyZWRlbnRpYWxzIiwiWERvbWFpblJlcXVlc3QiLCJ4bGlua05TIiwiYmFzZSIsImJjciIsImZhbGxiYWNrIiwiaGFzaCIsImkiLCJpblByb2dyZXNzQ291bnQiLCJpc0hpZGRlbiIsInVzZXMiLCJ4aHIiLCJvYnNlcnZlSWZEb25lIiwiYXR0clVwZGF0ZUZ1bmMiLCJzcGVjIiwidXNlRWwiLCJzZXRBdHRyaWJ1dGVOUyIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZEZ1bmMiLCJib2R5IiwieCIsInN2ZyIsIm9ubG9hZCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwib25FcnJvclRpbWVvdXQiLCJvbmVycm9yIiwib250aW1lb3V0IiwibGVuZ3RoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTlMiLCJzcGxpdCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdldEVsZW1lbnRCeUlkIiwib3BlbiIsInNlbmQiLCJhYm9ydCIsIndpbkxvYWQiLCJyZWFkeVN0YXRlIiwibG9nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2xvYmFscyIsInN1Ymdsb2JhbHMiLCJwYXR0ZXJucyIsImZvckVhY2giLCJpdGVtcyIsImtl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
