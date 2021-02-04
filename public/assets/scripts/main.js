(function () {
	'use strict';

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */

	var fontfaceobserver_standalone = createCommonjsModule(function (module) {
	(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b);}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a();}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a();});}function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);}
	function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";";}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g);}var k=a;l(a.b,c);l(a.c,c);z(a);}function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10);}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
	function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif";}catch(b){}E=""!==a.style.font;}return E}function L(a,b){return [a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
	B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25);},b);}e();}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"));},n);});Promise.race([N,M]).then(function(){clearTimeout(r);a(c);},
	b);}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c));}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
	n+"ms timeout exceeded"));else {var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50);}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v();});u(e,
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

	/*! lozad.js - v1.16.0 - 2020-09-06
	* https://github.com/ApoorvSaxena/lozad.js
	* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */


	/**
	 * Detect IE browser
	 * @const {boolean}
	 * @private
	 */
	const isIE = typeof document !== 'undefined' && document.documentMode;

	const defaultConfig = {
	  rootMargin: '0px',
	  threshold: 0,
	  load(element) {
	    if (element.nodeName.toLowerCase() === 'picture') {
	      let img = element.querySelector('img');
	      let append = false;

	      if (img === null) {
	        img = document.createElement('img');
	        append = true;
	      }

	      if (isIE && element.getAttribute('data-iesrc')) {
	        img.src = element.getAttribute('data-iesrc');
	      }

	      if (element.getAttribute('data-alt')) {
	        img.alt = element.getAttribute('data-alt');
	      }

	      if (append) {
	        element.append(img);
	      }
	    }

	    if (element.nodeName.toLowerCase() === 'video' && !element.getAttribute('data-src')) {
	      if (element.children) {
	        const childs = element.children;
	        let childSrc;
	        for (let i = 0; i <= childs.length - 1; i++) {
	          childSrc = childs[i].getAttribute('data-src');
	          if (childSrc) {
	            childs[i].src = childSrc;
	          }
	        }

	        element.load();
	      }
	    }

	    if (element.getAttribute('data-poster')) {
	      element.poster = element.getAttribute('data-poster');
	    }

	    if (element.getAttribute('data-src')) {
	      element.src = element.getAttribute('data-src');
	    }

	    if (element.getAttribute('data-srcset')) {
	      element.setAttribute('srcset', element.getAttribute('data-srcset'));
	    }

	    let backgroundImageDelimiter = ',';
	    if (element.getAttribute('data-background-delimiter')) {
	      backgroundImageDelimiter = element.getAttribute('data-background-delimiter');
	    }

	    if (element.getAttribute('data-background-image')) {
	      element.style.backgroundImage = `url('${element.getAttribute('data-background-image').split(backgroundImageDelimiter).join('\'),url(\'')}')`;
	    } else if (element.getAttribute('data-background-image-set')) {
	      const imageSetLinks = element.getAttribute('data-background-image-set').split(backgroundImageDelimiter);
	      let firstUrlLink = (imageSetLinks[0].substr(0, imageSetLinks[0].indexOf(' ')) || imageSetLinks[0]); // Substring before ... 1x
	      firstUrlLink = firstUrlLink.indexOf('url(') === -1 ? `url(${firstUrlLink})` : firstUrlLink;
	      if (imageSetLinks.length === 1) {
	        element.style.backgroundImage = firstUrlLink;
	      } else {
	        element.setAttribute('style', (element.getAttribute('style') || '') + `background-image: ${firstUrlLink}; background-image: -webkit-image-set(${imageSetLinks}); background-image: image-set(${imageSetLinks})`);
	      }
	    }

	    if (element.getAttribute('data-toggle-class')) {
	      element.classList.toggle(element.getAttribute('data-toggle-class'));
	    }
	  },
	  loaded() {}
	};

	function markAsLoaded(element) {
	  element.setAttribute('data-loaded', true);
	}

	function preLoad(element) {
	  if (element.getAttribute('data-placeholder-background')) {
	    element.style.background = element.getAttribute('data-placeholder-background');
	  }
	}

	const isLoaded = element => element.getAttribute('data-loaded') === 'true';

	const onIntersection = (load, loaded) => (entries, observer) => {
	  entries.forEach(entry => {
	    if (entry.intersectionRatio > 0 || entry.isIntersecting) {
	      observer.unobserve(entry.target);

	      if (!isLoaded(entry.target)) {
	        load(entry.target);
	        markAsLoaded(entry.target);
	        loaded(entry.target);
	      }
	    }
	  });
	};

	const getElements = (selector, root = document) => {
	  if (selector instanceof Element) {
	    return [selector]
	  }

	  if (selector instanceof NodeList) {
	    return selector
	  }

	  return root.querySelectorAll(selector)
	};

	function lozad (selector = '.lozad', options = {}) {
	  const {root, rootMargin, threshold, load, loaded} = Object.assign({}, defaultConfig, options);
	  let observer;

	  if (typeof window !== 'undefined' && window.IntersectionObserver) {
	    observer = new IntersectionObserver(onIntersection(load, loaded), {
	      root,
	      rootMargin,
	      threshold
	    });
	  }

	  const elements = getElements(selector, root);
	  for (let i = 0; i < elements.length; i++) {
	    preLoad(elements[i]);
	  }

	  return {
	    observe() {
	      const elements = getElements(selector, root);

	      for (let i = 0; i < elements.length; i++) {
	        if (isLoaded(elements[i])) {
	          continue
	        }

	        if (observer) {
	          observer.observe(elements[i]);
	          continue
	        }

	        load(elements[i]);
	        markAsLoaded(elements[i]);
	        loaded(elements[i]);
	      }
	    },
	    triggerLoad(element) {
	      if (isLoaded(element)) {
	        return
	      }

	      load(element);
	      markAsLoaded(element);
	      loaded(element);
	    },
	    observer
	  }
	}

	var _globals_lazyload = (() => {
	  // this loads videos as well
	  const observer = lozad(document.querySelectorAll('[data-lazyload]'));
	  observer.observe();
	});

	var _globals_nodelistforeach = (() => {
	  if (window.NodeList && !NodeList.prototype.forEach) {
	    NodeList.prototype.forEach = function forEach(callback, thisArg) {
	      const arg = thisArg || window;

	      for (let i = 0; i < this.length; i += 1) {
	        callback.call(arg, this[i], i, this);
	      }
	    };
	  }
	});

	var _patterns__3Components$header$header = (() => {});

	/* eslint-disable */
	const globals = {
	  fontloader: _globals_fontloader,
	  lazyload: _globals_lazyload,
	  nodelistforeach: _globals_nodelistforeach
	};
	Object.freeze(globals);
	const patterns = {
	  _3Components$header$header: _patterns__3Components$header$header
	};
	Object.freeze(patterns); // Js has loaded—remove the no-js class

	document.documentElement.classList.remove('no-js'); // Load and execute all scripts from global and all patterns automatically
	// but exclude test and config files — those should not be executed

	[globals, patterns].forEach(module => {
	  Object.keys(module).forEach(i => {
	    module[i]();
	  });
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwiLi4vLi4vLi4vc3JjL3NjcmlwdHMvMy1nbG9iYWwvZm9udGxvYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb3phZC9kaXN0L2xvemFkLmVzLmpzIiwiLi4vLi4vLi4vc3JjL3NjcmlwdHMvMy1nbG9iYWwvbGF6eWxvYWQuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy8zLWdsb2JhbC9ub2RlbGlzdGZvcmVhY2guanMiLCIuLi8uLi8uLi9zcmMvcGF0dGVybnMvMy1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnQgRmFjZSBPYnNlcnZlciB2Mi4xLjAgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGEsYil7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gbShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYygpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYyk7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBrKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixrKSxhKCl9KX07ZnVuY3Rpb24gdChhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24gdShhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYitcIjtcIn1mdW5jdGlvbiB6KGEpe3ZhciBiPWEuYS5vZmZzZXRXaWR0aCxjPWIrMTAwO2EuZi5zdHlsZS53aWR0aD1jK1wicHhcIjthLmMuc2Nyb2xsTGVmdD1jO2EuYi5zY3JvbGxMZWZ0PWEuYi5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEuZyE9PWI/KGEuZz1iLCEwKTohMX1mdW5jdGlvbiBBKGEsYil7ZnVuY3Rpb24gYygpe3ZhciBhPWs7eihhKSYmYS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3ooYSl9O2Z1bmN0aW9uIEIoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBDPW51bGwsRD1udWxsLEU9bnVsbCxGPW51bGw7ZnVuY3Rpb24gRygpe2lmKG51bGw9PT1EKWlmKEooKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKSl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO0Q9ISFhJiY2MDM+cGFyc2VJbnQoYVsxXSwxMCl9ZWxzZSBEPSExO3JldHVybiBEfWZ1bmN0aW9uIEooKXtudWxsPT09RiYmKEY9ISFkb2N1bWVudC5mb250cyk7cmV0dXJuIEZ9XG5mdW5jdGlvbiBLKCl7aWYobnVsbD09PUUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUU9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSygpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkIucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIscj0wLG49Ynx8M0UzLEg9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7aWYoSigpJiYhRygpKXt2YXIgTT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1IPj1uP2IoRXJyb3IoXCJcIituK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSk6ZG9jdW1lbnQuZm9udHMubG9hZChMKGMsJ1wiJytjLmZhbWlseSsnXCInKSxrKS50aGVuKGZ1bmN0aW9uKGMpezE8PWMubGVuZ3RoP2EoKTpzZXRUaW1lb3V0KGUsMjUpfSxiKX1lKCl9KSxOPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7cj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyhFcnJvcihcIlwiK24rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKX0sbil9KTtQcm9taXNlLnJhY2UoW04sTV0pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocik7YShjKX0sXG5iKX1lbHNlIG0oZnVuY3Rpb24oKXtmdW5jdGlvbiB2KCl7dmFyIGI7aWYoYj0tMSE9ZiYmLTEhPWd8fC0xIT1mJiYtMSE9aHx8LTEhPWcmJi0xIT1oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUMmJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxDPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QyYmKGY9PXcmJmc9PXcmJmg9PXd8fGY9PXgmJmc9PXgmJmg9PXh8fGY9PXkmJmc9PXkmJmg9PXkpKSxiPSFiO2ImJihkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQociksYShjKSl9ZnVuY3Rpb24gSSgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PW4pZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYihFcnJvcihcIlwiK1xubitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuaGlkZGVuO2lmKCEwPT09YXx8dm9pZCAwPT09YSlmPWUuYS5vZmZzZXRXaWR0aCxnPXAuYS5vZmZzZXRXaWR0aCxoPXEuYS5vZmZzZXRXaWR0aCx2KCk7cj1zZXRUaW1lb3V0KEksNTApfX12YXIgZT1uZXcgdChrKSxwPW5ldyB0KGspLHE9bmV3IHQoayksZj0tMSxnPS0xLGg9LTEsdz0tMSx4PS0xLHk9LTEsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuZGlyPVwibHRyXCI7dShlLEwoYyxcInNhbnMtc2VyaWZcIikpO3UocCxMKGMsXCJzZXJpZlwiKSk7dShxLEwoYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQocC5hKTtkLmFwcGVuZENoaWxkKHEuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt3PWUuYS5vZmZzZXRXaWR0aDt4PXAuYS5vZmZzZXRXaWR0aDt5PXEuYS5vZmZzZXRXaWR0aDtJKCk7QShlLGZ1bmN0aW9uKGEpe2Y9YTt2KCl9KTt1KGUsXG5MKGMsJ1wiJytjLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTtBKHAsZnVuY3Rpb24oYSl7Zz1hO3YoKX0pO3UocCxMKGMsJ1wiJytjLmZhbWlseSsnXCIsc2VyaWYnKSk7QShxLGZ1bmN0aW9uKGEpe2g9YTt2KCl9KTt1KHEsTChjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUI6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUIsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9Qi5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsImltcG9ydCBGb250RmFjZU9ic2VydmVyIGZyb20gJ2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IHsgZm9udHMgfSBmcm9tICcuLi8uLi9jb25maWcvZm9udHMuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZm9udE9ic2VydmVycyA9IFtdO1xuXG4gIGlmIChzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhmb250cykuZm9yRWFjaChmb250ID0+IHtcbiAgICBjb25zdCBmID0gZm9udHNbZm9udF07XG5cbiAgICBpZiAoZi5mb250ZmFjZSkge1xuICAgICAgZm9udE9ic2VydmVycy5wdXNoKFxuICAgICAgICBuZXcgRm9udEZhY2VPYnNlcnZlcihmLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgIHdlaWdodDogZi53ZWlnaHQsXG4gICAgICAgICAgc3R5bGU6IGYuc3R5bGUsXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycykudGhlbigoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgICAvLyBPcHRpbWl6YXRpb24gZm9yIFJlcGVhdCBWaWV3c1xuICAgICAgc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG59O1xuIiwiLyohIGxvemFkLmpzIC0gdjEuMTYuMCAtIDIwMjAtMDktMDZcbiogaHR0cHM6Ly9naXRodWIuY29tL0Fwb29ydlNheGVuYS9sb3phZC5qc1xuKiBDb3B5cmlnaHQgKGMpIDIwMjAgQXBvb3J2IFNheGVuYTsgTGljZW5zZWQgTUlUICovXG5cblxuLyoqXG4gKiBEZXRlY3QgSUUgYnJvd3NlclxuICogQGNvbnN0IHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaXNJRSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICByb290TWFyZ2luOiAnMHB4JyxcbiAgdGhyZXNob2xkOiAwLFxuICBsb2FkKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncGljdHVyZScpIHtcbiAgICAgIGxldCBpbWcgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgbGV0IGFwcGVuZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoaW1nID09PSBudWxsKSB7XG4gICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhcHBlbmQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNJRSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZXNyYycpKSB7XG4gICAgICAgIGltZy5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZXNyYycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWx0JykpIHtcbiAgICAgICAgaW1nLmFsdCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFsdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwZW5kKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGltZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3ZpZGVvJyAmJiAhZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcyA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgICAgIGxldCBjaGlsZFNyYztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2hpbGRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgIGNoaWxkU3JjID0gY2hpbGRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgICBpZiAoY2hpbGRTcmMpIHtcbiAgICAgICAgICAgIGNoaWxkc1tpXS5zcmMgPSBjaGlsZFNyYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyJykpIHtcbiAgICAgIGVsZW1lbnQucG9zdGVyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyJyk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcpKTtcbiAgICB9XG5cbiAgICBsZXQgYmFja2dyb3VuZEltYWdlRGVsaW1pdGVyID0gJywnO1xuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kLWRlbGltaXRlcicpKSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2VEZWxpbWl0ZXIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kLWRlbGltaXRlcicpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kLWltYWdlJykpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kLWltYWdlJykuc3BsaXQoYmFja2dyb3VuZEltYWdlRGVsaW1pdGVyKS5qb2luKCdcXCcpLHVybChcXCcnKX0nKWA7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kLWltYWdlLXNldCcpKSB7XG4gICAgICBjb25zdCBpbWFnZVNldExpbmtzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2dyb3VuZC1pbWFnZS1zZXQnKS5zcGxpdChiYWNrZ3JvdW5kSW1hZ2VEZWxpbWl0ZXIpO1xuICAgICAgbGV0IGZpcnN0VXJsTGluayA9IChpbWFnZVNldExpbmtzWzBdLnN1YnN0cigwLCBpbWFnZVNldExpbmtzWzBdLmluZGV4T2YoJyAnKSkgfHwgaW1hZ2VTZXRMaW5rc1swXSk7IC8vIFN1YnN0cmluZyBiZWZvcmUgLi4uIDF4XG4gICAgICBmaXJzdFVybExpbmsgPSBmaXJzdFVybExpbmsuaW5kZXhPZigndXJsKCcpID09PSAtMSA/IGB1cmwoJHtmaXJzdFVybExpbmt9KWAgOiBmaXJzdFVybExpbms7XG4gICAgICBpZiAoaW1hZ2VTZXRMaW5rcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBmaXJzdFVybExpbms7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJycpICsgYGJhY2tncm91bmQtaW1hZ2U6ICR7Zmlyc3RVcmxMaW5rfTsgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1pbWFnZS1zZXQoJHtpbWFnZVNldExpbmtzfSk7IGJhY2tncm91bmQtaW1hZ2U6IGltYWdlLXNldCgke2ltYWdlU2V0TGlua3N9KWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtY2xhc3MnKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1jbGFzcycpKTtcbiAgICB9XG4gIH0sXG4gIGxvYWRlZCgpIHt9XG59O1xuXG5mdW5jdGlvbiBtYXJrQXNMb2FkZWQoZWxlbWVudCkge1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkZWQnLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcHJlTG9hZChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZWhvbGRlci1iYWNrZ3JvdW5kJykpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZWhvbGRlci1iYWNrZ3JvdW5kJyk7XG4gIH1cbn1cblxuY29uc3QgaXNMb2FkZWQgPSBlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxvYWRlZCcpID09PSAndHJ1ZSc7XG5cbmNvbnN0IG9uSW50ZXJzZWN0aW9uID0gKGxvYWQsIGxvYWRlZCkgPT4gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCB8fCBlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cbiAgICAgIGlmICghaXNMb2FkZWQoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICBsb2FkKGVudHJ5LnRhcmdldCk7XG4gICAgICAgIG1hcmtBc0xvYWRlZChlbnRyeS50YXJnZXQpO1xuICAgICAgICBsb2FkZWQoZW50cnkudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHMgPSAoc2VsZWN0b3IsIHJvb3QgPSBkb2N1bWVudCkgPT4ge1xuICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtzZWxlY3Rvcl1cbiAgfVxuXG4gIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gIH1cblxuICByZXR1cm4gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxufTtcblxuZnVuY3Rpb24gbG96YWQgKHNlbGVjdG9yID0gJy5sb3phZCcsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7cm9vdCwgcm9vdE1hcmdpbiwgdGhyZXNob2xkLCBsb2FkLCBsb2FkZWR9ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XG4gIGxldCBvYnNlcnZlcjtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25JbnRlcnNlY3Rpb24obG9hZCwgbG9hZGVkKSwge1xuICAgICAgcm9vdCxcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICB0aHJlc2hvbGRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gZ2V0RWxlbWVudHMoc2VsZWN0b3IsIHJvb3QpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJlTG9hZChlbGVtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9ic2VydmUoKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGdldEVsZW1lbnRzKHNlbGVjdG9yLCByb290KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNMb2FkZWQoZWxlbWVudHNbaV0pKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudHNbaV0pO1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsb2FkKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgbWFya0FzTG9hZGVkKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgbG9hZGVkKGVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyaWdnZXJMb2FkKGVsZW1lbnQpIHtcbiAgICAgIGlmIChpc0xvYWRlZChlbGVtZW50KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbG9hZChlbGVtZW50KTtcbiAgICAgIG1hcmtBc0xvYWRlZChlbGVtZW50KTtcbiAgICAgIGxvYWRlZChlbGVtZW50KTtcbiAgICB9LFxuICAgIG9ic2VydmVyXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG96YWQ7XG4iLCJpbXBvcnQgbG96YWQgZnJvbSAnbG96YWQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIHRoaXMgbG9hZHMgdmlkZW9zIGFzIHdlbGxcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBsb3phZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sYXp5bG9hZF0nKSk7XG4gIG9ic2VydmVyLm9ic2VydmUoKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBhcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoYXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vMy1nbG9iYWwvISgqLnRlc3R8Ki5jb25maWcpLmpzJztcbmltcG9ydCAqIGFzIHBhdHRlcm5zIGZyb20gJy4uL3BhdHRlcm5zLyoqLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5cbi8vIEpzIGhhcyBsb2FkZWTigJRyZW1vdmUgdGhlIG5vLWpzIGNsYXNzXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcblxuLy8gTG9hZCBhbmQgZXhlY3V0ZSBhbGwgc2NyaXB0cyBmcm9tIGdsb2JhbCBhbmQgYWxsIHBhdHRlcm5zIGF1dG9tYXRpY2FsbHlcbi8vIGJ1dCBleGNsdWRlIHRlc3QgYW5kIGNvbmZpZyBmaWxlcyDigJQgdGhvc2Ugc2hvdWxkIG5vdCBiZSBleGVjdXRlZFxuW2dsb2JhbHMsIHBhdHRlcm5zXS5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gIE9iamVjdC5rZXlzKG1vZHVsZSkuZm9yRWFjaChpID0+IHtcbiAgICBtb2R1bGVbaV0oKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJmb250T2JzZXJ2ZXJzIiwic2Vzc2lvblN0b3JhZ2UiLCJmb250c0xvYWRlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsImZvbnRzIiwiZm9yRWFjaCIsImZvbnQiLCJmIiwiZm9udGZhY2UiLCJwdXNoIiwiRm9udEZhY2VPYnNlcnZlciIsImZhbWlseSIsInJlcGxhY2UiLCJ3ZWlnaHQiLCJzdHlsZSIsImxlbmd0aCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwib2JzZXJ2ZXIiLCJsb3phZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwid2luZG93IiwiTm9kZUxpc3QiLCJwcm90b3R5cGUiLCJjYWxsYmFjayIsInRoaXNBcmciLCJhcmciLCJpIiwiY2FsbCIsInJlbW92ZSIsImdsb2JhbHMiLCJwYXR0ZXJucyIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Q0FBcUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDhHQUE4RyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyw4R0FBOEcsQ0FBQztDQUM1a0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDhHQUE4RyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyw0RUFBNEUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUM7Q0FDbFYsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyw0TEFBNEwsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtREFBbUQsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDMTRCLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsNkJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDak8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0NBQ3pmLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Q0FDcmYsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNwZixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQTBCLGVBQWUsQ0FBcUYsQ0FBQyxDQUFDLEVBQUU7Ozs7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
