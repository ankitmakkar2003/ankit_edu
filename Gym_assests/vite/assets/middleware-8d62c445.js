var h=function(){return h=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},h.apply(this,arguments)};function R(t){var r=typeof Symbol=="function"&&Symbol.iterator,n=r&&t[r],e=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(t,r){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var e=n.call(t),a,c=[],l;try{for(;(r===void 0||r-- >0)&&!(a=e.next()).done;)c.push(a.value)}catch(u){l={error:u}}finally{try{a&&!a.done&&(n=e.return)&&n.call(e)}finally{if(l)throw l.error}}return c}function P(t,r,n){if(n||arguments.length===2)for(var e=0,a=r.length,c;e<a;e++)(c||!(e in r))&&(c||(c=Array.prototype.slice.call(r,0,e)),c[e]=r[e]);return t.concat(c||Array.prototype.slice.call(r))}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var S=function(){return S=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},S.apply(this,arguments)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var k=function(){return k=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},k.apply(this,arguments)};function Y(t){return t.toLowerCase()}var B=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],J=/[^A-Z0-9]+/gi;function q(t,r){r===void 0&&(r={});for(var n=r.splitRegexp,e=n===void 0?B:n,a=r.stripRegexp,c=a===void 0?J:a,l=r.transform,u=l===void 0?Y:l,o=r.delimiter,s=o===void 0?" ":o,i=$($(t,e,"$1\0$2"),c,"\0"),v=0,f=i.length;i.charAt(v)==="\0";)v++;for(;i.charAt(f-1)==="\0";)f--;return i.slice(v,f).split("\0").map(u).join(s)}function $(t,r,n){return r instanceof RegExp?t.replace(r,n):r.reduce(function(e,a){return e.replace(a,n)},t)}function M(t,r){var n=t.charAt(0),e=t.substr(1).toLowerCase();return r>0&&n>="0"&&n<="9"?"_"+n+e:""+n.toUpperCase()+e}function Q(t,r){return r===void 0&&(r={}),q(t,k({delimiter:"",transform:M},r))}function V(t,r){return r===0?t.toLowerCase():M(t,r)}function W(t,r){return r===void 0&&(r={}),Q(t,S({transform:V},r))}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var x=function(){return x=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},x.apply(this,arguments)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var F=function(){return F=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},F.apply(this,arguments)};function N(t,r){return r===void 0&&(r={}),q(t,F({delimiter:"."},r))}function rr(t,r){return r===void 0&&(r={}),N(t,x({delimiter:"_"},r))}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var U=function(){return U=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},U.apply(this,arguments)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var L=function(){return L=Object.assign||function(n){for(var e,a=1,c=arguments.length;a<c;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},L.apply(this,arguments)};function er(t){return t.charAt(0).toUpperCase()+t.substr(1)}function nr(t){return er(t.toLowerCase())}function tr(t,r){return r===void 0&&(r={}),q(t,L({delimiter:" ",transform:nr},r))}function ar(t,r){return r===void 0&&(r={}),tr(t,U({delimiter:"-"},r))}var lr=function(r,n){return function(e,a){return r(e,h(h({},n),a))}},cr=function(r,n){var e=typeof n=="function"?n:function(a){return n.includes(a)};return function(a,c){return e(a,c)?a:r(a,c)}},T=function(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams},b=function(r){return typeof FormData<"u"&&r instanceof FormData},Z=function(r){if(r==null)return!1;var n=Object.getPrototypeOf(r);return n===null||n===Object.prototype},ur=function(r){return Array.isArray(r)||Z(r)||b(r)||T(r)},H=function(r){var n,e;return r==null?!1:((e=(n=Object.getPrototypeOf(r))===null||n===void 0?void 0:n.constructor)===null||e===void 0?void 0:e.name)==="AxiosHeaders"},K={snake:rr,camel:W,header:ar},ir=function t(r,n,e){var a,c,l,u,o,s;if(!ur(r))return r;if((b(r)||T(r))&&(!r.entries||e&&!r.delete)){var i=b(r)?"FormData":"URLSearchParams",v=b(r)?"https://github.com/jimmywarting/FormData":"https://github.com/jerrybendy/url-search-params-polyfill";return typeof navigator<"u"&&navigator.product==="ReactNative"?console.warn("Be careful that ".concat(i," cannot be transformed on React Native. If you intentionally implemented, ignore this kind of warning: https://facebook.github.io/react-native/docs/debugging.html")):(r.entries||console.warn("You must use polyfill of ".concat(i,".prototype.entries() on Internet Explorer or Safari: ").concat(v)),e&&!r.delete&&console.warn("You must use polyfill of ".concat(i,".prototype.delete() on Internet Explorer or Safari: ").concat(v))),r}var f=Object.getPrototypeOf(r),d=e?r:f?new f.constructor:Object.create(null),m;if(b(r)||T(r)){if(m=r.entries(),e){m=P([],g(m),!1);try{for(var C=R(m),p=C.next();!p.done;p=C.next()){var G=g(p.value,1),y=G[0];r.delete(y)}}catch(w){a={error:w}}finally{try{p&&!p.done&&(c=C.return)&&c.call(C)}finally{if(a)throw a.error}}}}else if(m=Object.entries(r),e&&!Array.isArray(r))try{for(var _=R(m),O=_.next();!O.done;O=_.next()){var X=g(O.value,1),y=X[0];delete r[y]}}catch(w){l={error:w}}finally{try{O&&!O.done&&(u=_.return)&&u.call(_)}finally{if(l)throw l.error}}try{for(var A=R(m),j=A.next();!j.done;j=A.next()){var D=g(j.value,2),y=D[0],I=D[1];b(d)||T(d)?d.append(n(y),I):y!=="__proto__"&&(d[n(typeof y=="string"?y:"".concat(y))]=t(I,n,e))}}catch(w){o={error:w}}finally{try{j&&!j.done&&(s=A.return)&&s.call(A)}finally{if(o)throw o.error}}return d},or=function(r,n,e){return n=lr(n,h({stripRegexp:/[^A-Z0-9[\]]+/gi},e==null?void 0:e.caseOptions)),e!=null&&e.preservedKeys&&(n=cr(n,e.preservedKeys)),ir(r,n,(e==null?void 0:e.overwrite)||!1)},fr=function(r){return function(n,e){return or(n,r,e)}},sr=function(r,n){return fr((n==null?void 0:n[r])||K[r])},E=function(r){var n,e,a=Object.keys(K),c={};try{for(var l=R(a),u=l.next();!u.done;u=l.next()){var o=u.value;c[o]=sr(o,r)}}catch(s){n={error:s}}finally{try{u&&!u.done&&(e=l.return)&&e.call(l)}finally{if(n)throw n.error}}return c},vr=function(r){var n=E(r==null?void 0:r.caseFunctions).snake;return function(e){return e.params&&(e.params=n(e.params,r)),e}},dr=function(r){var n=E(r==null?void 0:r.caseFunctions),e=n.snake,a=n.header;return function(c,l){return z(l,a,r,["common","delete","get","head","post","put","patch"]),e(c,r)}},mr=function(r){var n=E(r==null?void 0:r.caseFunctions).camel;return function(e,a){return z(a,n,r),n(e,r)}},z=function(r,n,e,a){var c,l,u,o;if(!(e!=null&&e.ignoreHeaders||!Z(r)&&!H(r)))try{for(var s=R(Object.entries(r)),i=s.next();!i.done;i=s.next()){var v=g(i.value,2),f=v[0],d=v[1];n(d,h({overwrite:!0},e)),!(a||[]).includes(f)&&(H(r)?(r.delete(f),r.set(Object.keys(n((u={},u[f]=null,u),e))[0],d,!0)):(delete r[f],r[Object.keys(n((o={},o[f]=null,o),e))[0]]=d))}}catch(m){c={error:m}}finally{try{i&&!i.done&&(l=s.return)&&l.call(s)}finally{if(c)throw c.error}}},yr=function(r,n){var e,a,c;return r.defaults.transformRequest=P([((e=n==null?void 0:n.caseMiddleware)===null||e===void 0?void 0:e.requestTransformer)||dr(n)],g(Array.isArray(r.defaults.transformRequest)?r.defaults.transformRequest:r.defaults.transformRequest!==void 0?[r.defaults.transformRequest]:[]),!1),r.defaults.transformResponse=P(P([],g(Array.isArray(r.defaults.transformResponse)?r.defaults.transformResponse:r.defaults.transformResponse!==void 0?[r.defaults.transformResponse]:[]),!1),[((a=n==null?void 0:n.caseMiddleware)===null||a===void 0?void 0:a.responseTransformer)||mr(n)],!1),r.interceptors.request.use(((c=n==null?void 0:n.caseMiddleware)===null||c===void 0?void 0:c.requestInterceptor)||vr(n)),r};export{yr as a};
//# sourceMappingURL=middleware-8d62c445.js.map
