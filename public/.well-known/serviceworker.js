!function(){"use strict";var e={title:"Your Project",version:"0.0.1-alpha.1",scheme:"https",proxy:"dev.dev.localhost",port:3e3,main:"main",root:"./public/",src:"./src/",dest:"./public/assets/",styleguide:"./public/styleguide/",library:"./public/site/patterns/",assets:"assets/",config:"config/",docs:"docs/",fonts:"fonts/",icons:"icons/",images:"images/",patterns:"patterns/",scripts:"scripts/",styles:"styles/",browsers:{modern:["last 2 Firefox versions","last 2 Chrome versions","last 2 Safari versions","last 2 Edge versions","last 2 iOS versions","last 2 ChromeAndroid versions"],legacy:["> 0.5% in DE"]}};const t=e.version,s=e.dest.replace(e.root,"/"),i=["/",`./${s}${e.scripts}main.min.js`,`./${s}${e.styles}main.min.css`,`./${s}${e.images}sprite.svg`];self.addEventListener("install",e=>{e.waitUntil((()=>caches.open(t).then(e=>e.addAll(i)))())}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>0!==e.indexOf(t)).map(e=>caches.delete(e)))))}),self.addEventListener("fetch",e=>{let s=e.request;if("GET"===s.method)return-1!==s.headers.get("Accept").indexOf("text/html")?("navigate"!==s.mode&&(s=new Request(s.url,{method:"GET",headers:s.headers,mode:"navigate"===s.mode?"cors":s.mode,credentials:s.credentials,redirect:s.redirect})),void e.respondWith(fetch(s).then(e=>(caches.open(t).then(t=>{t.put(s,e.clone())}),e)).catch(()=>caches.match(s).then(e=>e||caches.match("/offline"))))):void e.respondWith(caches.match(s).then(e=>e||fetch(s).catch(()=>{return-1!==s.headers.get("accept").indexof("image")&&new Response('\n            <svg width="400" height="300" role="img" aria-labelledby="offline-title"\n              viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">\n              <title id="offline-title">offline</title>\n              <g fill="none" fill-rule="evenodd">\n                <path fill="#d8d8d8" d="m0 0h400v300h0z"/>\n                <text fill="#9b9b9b" font-family="arial, sans-serif" font-size="72" font-weight="bold">\n                  <tspan x="93" y="172">offline</tspan>\n                </text>\n              </g>\n            </svg>\n          ',{headers:{"content-type":"image/svg+xml"}})})));e.respondWith(fetch(s).catch(()=>caches.match("/offline")))})}();