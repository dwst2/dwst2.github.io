!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r={appVersion:"2.6.2-1-g5338044",echoServer:"wss://echo.websocket.org/"}.appVersion;addEventListener("install",e=>{const t=["styles/dwst.css","scripts/dwst.js","images/sprite.png","images/favicon.png","images/favicon.ico","images/icon_120.png","images/icon_180.png","images/icon_192.png","images/icon_512.png","manifest.json"].map(e=>`/${r}/${e}`),n=["/"];e.waitUntil(caches.open(r).then(e=>{e.addAll(n.concat(t))}))}),addEventListener("fetch",e=>-1===e.request.url.indexOf("styleguide")&&(-1===e.request.url.indexOf("google-analytics.com")&&void e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request))))),addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>e!==r?caches.delete(e):Promise.resolve(null)))))})}]);
//# sourceMappingURL=service_worker.js.map