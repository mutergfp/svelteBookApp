var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(e,t,n){e.$$.on_destroy.push(a(t,n))}function l(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function d(e,t,n,r,i,o,s){const a=function(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}(t,r,i,o);if(a){const i=u(t,n,r,s);e.p(i,a)}}function p(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function h(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function v(){return y(" ")}function b(){return y("")}function w(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function S(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:x(e,r,t[r])}function C(e,t,n){t in e?e[t]=n:x(e,t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let P;function E(e){P=e}function A(){if(!P)throw new Error("Function called outside component initialization");return P}function O(e){A().$$.on_mount.push(e)}function T(){const e=A();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const i=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);r.slice().forEach((t=>{t.call(e,i)}))}}}function $(e,t){A().$$.context.set(e,t)}function N(e){return A().$$.context.get(e)}const I=[],R=[],D=[],L=[],j=Promise.resolve();let M=!1;function q(e){D.push(e)}function B(e){L.push(e)}let z=!1;const F=new Set;function H(){if(!z){z=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];E(t),U(t.$$)}for(E(null),I.length=0;R.length;)R.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];F.has(t)||(F.add(t),t())}D.length=0}while(I.length);for(;L.length;)L.pop()();M=!1,z=!1,F.clear()}}function U(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const V=new Set;let J;function Y(){J={r:0,c:[],p:J}}function G(){J.r||i(J.c),J=J.p}function K(e,t){e&&e.i&&(V.delete(e),e.i(t))}function W(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),J.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function X(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],a=t[o];if(a){for(const e in s)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[o]=a}else for(const e in s)i[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function Q(e){return"object"==typeof e&&null!==e?e:{}}function Z(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function ee(e){e&&e.c()}function te(e,t,r){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=e.$$;s&&s.m(t,r),q((()=>{const t=a.map(n).filter(o);c?c.push(...t):i(t),e.$$.on_mount=[]})),l.forEach(q)}function ne(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){-1===e.$$.dirty[0]&&(I.push(e),M||(M=!0,j.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,n,o,s,a,c,l=[-1]){const u=P;E(t);const d=n.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let f=!1;if(p.ctx=o?o(t,d,((e,n,...r)=>{const i=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&re(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(_)}else p.fragment&&p.fragment.c();n.intro&&K(t.$$.fragment),te(t,n.target,n.anchor),H()}E(u)}class oe{$destroy(){ne(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const se=[];function ae(t,n=e){let r;const i=[];function o(e){if(s(t,e)&&(t=e,r)){const e=!se.length;for(let e=0;e<i.length;e+=1){const n=i[e];n[1](),se.push(n,t)}if(e){for(let e=0;e<se.length;e+=2)se[e][0](se[e+1]);se.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return i.push(c),1===i.length&&(r=n(o)||e),s(t),()=>{const e=i.indexOf(c);-1!==e&&i.splice(e,1),0===i.length&&(r(),r=null)}}}}function ce(t,n,r){const s=!Array.isArray(t),c=s?[t]:t,l=n.length<2;return{subscribe:ae(r,(t=>{let r=!1;const u=[];let d=0,p=e;const f=()=>{if(d)return;p();const r=n(s?u[0]:u,t);l?t(r):p=o(r)?r:e},h=c.map(((e,t)=>a(e,(e=>{u[t]=e,d&=~(1<<t),r&&f()}),(()=>{d|=1<<t}))));return r=!0,f(),function(){i(h),p()}})).subscribe}}const le={},ue={};function de(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const pe=function(e,t){const n=[];let r=de(e);return{get location(){return r},listen(t){n.push(t);const i=()=>{r=de(e),t({location:r,action:"POP"})};return e.addEventListener("popstate",i),()=>{e.removeEventListener("popstate",i);const r=n.indexOf(t);n.splice(r,1)}},navigate(t,{state:i,replace:o=!1}={}){i={...i,key:Date.now()+""};try{o?e.history.replaceState(i,null,t):e.history.pushState(i,null,t)}catch(n){e.location[o?"replace":"assign"](t)}r=de(e),n.forEach((e=>e({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(e,i,o){const[s,a=""]=o.split("?");t++,n.push({pathname:s,search:a}),r.push(e)},replaceState(e,i,o){const[s,a=""]=o.split("?");n[t]={pathname:s,search:a},r[t]=e}}}}()),{navigate:fe}=pe,he=/^:(.+)/;function me(e,t){return e.substr(0,t.length)===t}function _e(e){return"*"===e[0]}function ge(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ye(e){return e.replace(/(^\/+|\/+$)/g,"")}function ve(e,t){return{route:e,score:e.default?0:ge(e.path).reduce(((e,t)=>(e+=4,!function(e){return""===e}(t)?!function(e){return he.test(e)}(t)?_e(t)?e-=5:e+=3:e+=2:e+=1,e)),0),index:t}}function be(e,t){let n,r;const[i]=t.split("?"),o=ge(i),s=""===o[0],a=function(e){return e.map(ve).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,i=a.length;e<i;e++){const i=a[e].route;let c=!1;if(i.default){r={route:i,params:{},uri:t};continue}const l=ge(i.path),u={},d=Math.max(o.length,l.length);let p=0;for(;p<d;p++){const e=l[p],t=o[p];if(void 0!==e&&_e(e)){u["*"===e?"*":e.slice(1)]=o.slice(p).map(decodeURIComponent).join("/");break}if(void 0===t){c=!0;break}let n=he.exec(e);if(n&&!s){const e=decodeURIComponent(t);u[n[1]]=e}else if(e!==t){c=!0;break}}if(!c){n={route:i,params:u,uri:"/"+o.slice(0,p).join("/")};break}}return n||r||null}function we(e,t){return e+(t?`?${t}`:"")}function xe(e,t){return`${ye("/"===t?e:`${ye(e)}/${ye(t)}`)}/`}function Se(e){let t;const n=e[9].default,r=l(n,e,e[8],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[t]){r&&r.p&&256&t&&d(r,n,e,e[8],t,null,null)},i(e){t||(K(r,e),t=!0)},o(e){W(r,e),t=!1},d(e){r&&r.d(e)}}}function Ce(e,t,n){let r,i,o,{$$slots:s={},$$scope:a}=t,{basepath:l="/"}=t,{url:u=null}=t;const d=N(le),p=N(ue),f=ae([]);c(e,f,(e=>n(7,o=e)));const h=ae(null);let m=!1;const _=d||ae(u?{pathname:u}:pe.location);c(e,_,(e=>n(6,i=e)));const g=p?p.routerBase:ae({path:l,uri:l});c(e,g,(e=>n(5,r=e)));const y=ce([g,h],(([e,t])=>{if(null===t)return e;const{path:n}=e,{route:r,uri:i}=t;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:i}}));return d||(O((()=>pe.listen((e=>{_.set(e.location)})))),$(le,_)),$(ue,{activeRoute:h,base:g,routerBase:y,registerRoute:function(e){const{path:t}=r;let{path:n}=e;if(e._path=n,e.path=xe(t,n),"undefined"==typeof window){if(m)return;const t=function(e,t){return be([e],t)}(e,i.pathname);t&&(h.set(t),m=!0)}else f.update((t=>(t.push(e),t)))},unregisterRoute:function(e){f.update((t=>{const n=t.indexOf(e);return t.splice(n,1),t}))}}),e.$$set=e=>{"basepath"in e&&n(3,l=e.basepath),"url"in e&&n(4,u=e.url),"$$scope"in e&&n(8,a=e.$$scope)},e.$$.update=()=>{if(32&e.$$.dirty){const{path:e}=r;f.update((t=>(t.forEach((t=>t.path=xe(e,t._path))),t)))}if(192&e.$$.dirty){const e=be(o,i.pathname);h.set(e)}},[f,_,g,l,u,r,i,o,a,s]}class ke extends oe{constructor(e){super(),ie(this,e,Ce,Se,s,{basepath:3,url:4})}}const Pe=e=>({params:4&e,location:16&e}),Ee=e=>({params:e[2],location:e[4]});function Ae(e){let t,n,r,i;const o=[Te,Oe],s=[];function a(e,t){return null!==e[0]?0:1}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=b()},m(e,n){s[t].m(e,n),m(e,r,n),i=!0},p(e,i){let c=t;t=a(e),t===c?s[t].p(e,i):(Y(),W(s[c],1,1,(()=>{s[c]=null})),G(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),K(n,1),n.m(r.parentNode,r))},i(e){i||(K(n),i=!0)},o(e){W(n),i=!1},d(e){s[t].d(e),e&&_(r)}}}function Oe(e){let t;const n=e[10].default,r=l(n,e,e[9],Ee);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,t){r&&r.p&&532&t&&d(r,n,e,e[9],t,Pe,Ee)},i(e){t||(K(r,e),t=!0)},o(e){W(r,e),t=!1},d(e){r&&r.d(e)}}}function Te(e){let n,r,i;const o=[{location:e[4]},e[2],e[3]];var s=e[0];function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return s&&(n=new s(a())),{c(){n&&ee(n.$$.fragment),r=b()},m(e,t){n&&te(n,e,t),m(e,r,t),i=!0},p(e,t){const i=28&t?X(o,[16&t&&{location:e[4]},4&t&&Q(e[2]),8&t&&Q(e[3])]):{};if(s!==(s=e[0])){if(n){Y();const e=n;W(e.$$.fragment,1,0,(()=>{ne(e,1)})),G()}s?(n=new s(a()),ee(n.$$.fragment),K(n.$$.fragment,1),te(n,r.parentNode,r)):n=null}else s&&n.$set(i)},i(e){i||(n&&K(n.$$.fragment,e),i=!0)},o(e){n&&W(n.$$.fragment,e),i=!1},d(e){e&&_(r),n&&ne(n,e)}}}function $e(e){let t,n,r=null!==e[1]&&e[1].route===e[7]&&Ae(e);return{c(){r&&r.c(),t=b()},m(e,i){r&&r.m(e,i),m(e,t,i),n=!0},p(e,[n]){null!==e[1]&&e[1].route===e[7]?r?(r.p(e,n),2&n&&K(r,1)):(r=Ae(e),r.c(),K(r,1),r.m(t.parentNode,t)):r&&(Y(),W(r,1,1,(()=>{r=null})),G())},i(e){n||(K(r),n=!0)},o(e){W(r),n=!1},d(e){r&&r.d(e),e&&_(t)}}}function Ne(e,n,r){let i,o,{$$slots:s={},$$scope:a}=n,{path:l=""}=n,{component:u=null}=n;const{registerRoute:d,unregisterRoute:f,activeRoute:h}=N(ue);c(e,h,(e=>r(1,i=e)));const m=N(le);c(e,m,(e=>r(4,o=e)));const _={path:l,default:""===l};let g={},y={};return d(_),"undefined"!=typeof window&&function(e){A().$$.on_destroy.push(e)}((()=>{f(_)})),e.$$set=e=>{r(13,n=t(t({},n),p(e))),"path"in e&&r(8,l=e.path),"component"in e&&r(0,u=e.component),"$$scope"in e&&r(9,a=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&i&&i.route===_&&r(2,g=i.params);{const{path:e,component:t,...i}=n;r(3,y=i)}},n=p(n),[u,i,g,y,o,h,m,_,l,a,s]}class Ie extends oe{constructor(e){super(),ie(this,e,Ne,$e,s,{path:8,component:0})}}function Re(e){let n,r,i,o;const s=e[16].default,a=l(s,e,e[15],null);let c=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],u={};for(let e=0;e<c.length;e+=1)u=t(u,c[e]);return{c(){n=g("a"),a&&a.c(),S(n,u)},m(t,s){m(t,n,s),a&&a.m(n,null),r=!0,i||(o=w(n,"click",e[5]),i=!0)},p(e,[t]){a&&a.p&&32768&t&&d(a,s,e,e[15],t,null,null),S(n,u=X(c,[(!r||1&t)&&{href:e[0]},(!r||4&t)&&{"aria-current":e[2]},2&t&&e[1],64&t&&e[6]]))},i(e){r||(K(a,e),r=!0)},o(e){W(a,e),r=!1},d(e){e&&_(n),a&&a.d(e),i=!1,o()}}}function De(e,n,r){let i;const o=["to","replace","state","getProps"];let s,a,l=f(n,o),{$$slots:u={},$$scope:d}=n,{to:h="#"}=n,{replace:m=!1}=n,{state:_={}}=n,{getProps:g=(()=>({}))}=n;const{base:y}=N(ue);c(e,y,(e=>r(13,s=e)));const v=N(le);c(e,v,(e=>r(14,a=e)));const b=T();let w,x,S,C;return e.$$set=e=>{n=t(t({},n),p(e)),r(6,l=f(n,o)),"to"in e&&r(7,h=e.to),"replace"in e&&r(8,m=e.replace),"state"in e&&r(9,_=e.state),"getProps"in e&&r(10,g=e.getProps),"$$scope"in e&&r(15,d=e.$$scope)},e.$$.update=()=>{8320&e.$$.dirty&&r(0,w="/"===h?s.uri:function(e,t){if(me(e,"/"))return e;const[n,r]=e.split("?"),[i]=t.split("?"),o=ge(n),s=ge(i);if(""===o[0])return we(i,r);if(!me(o[0],"."))return we(("/"===i?"":"/")+s.concat(o).join("/"),r);const a=s.concat(o),c=[];return a.forEach((e=>{".."===e?c.pop():"."!==e&&c.push(e)})),we("/"+c.join("/"),r)}(h,s.uri)),16385&e.$$.dirty&&r(11,x=me(a.pathname,w)),16385&e.$$.dirty&&r(12,S=w===a.pathname),4096&e.$$.dirty&&r(2,i=S?"page":void 0),23553&e.$$.dirty&&r(1,C=g({location:a,href:w,isPartiallyCurrent:x,isCurrent:S}))},[w,C,i,y,v,function(e){if(b("click",e),function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)){e.preventDefault();const t=a.pathname===w||m;fe(w,{state:_,replace:t})}},l,h,m,_,g,x,S,s,a,d,u]}class Le extends oe{constructor(e){super(),ie(this,e,De,Re,s,{to:7,replace:8,state:9,getProps:10})}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var je=function(e,t){return(je=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Me(e,t){function n(){this.constructor=e}je(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var qe=function(){return(qe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function Be(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */}const ze=new WeakMap,Fe=e=>(...t)=>{const n=e(...t);return ze.set(n,!0),n},He=e=>"function"==typeof e&&ze.has(e),Ue=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Ve=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},Je={},Ye={},Ge=`{{lit-${String(Math.random()).slice(2)}}}`,Ke=`\x3c!--${Ge}--\x3e`,We=new RegExp(`${Ge}|${Ke}`),Xe="$lit$";class Qe{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,s=-1,a=0;const{strings:c,values:{length:l}}=e;for(;a<l;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)Ze(t[e].name,Xe)&&r++;for(;r-- >0;){const t=c[a],n=nt.exec(t)[2],r=n.toLowerCase()+Xe,i=e.getAttribute(r);e.removeAttribute(r);const o=i.split(We);this.parts.push({type:"attribute",index:s,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Ge)>=0){const r=e.parentNode,i=t.split(We),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=tt();else{const e=nt.exec(o);null!==e&&Ze(e[2],Xe)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-Xe.length)+e[3]),n=document.createTextNode(o)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===i[o]?(r.insertBefore(tt(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===Ge){const t=e.parentNode;null!==e.previousSibling&&s!==o||(s++,t.insertBefore(tt(),e)),o=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Ge,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const Ze=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},et=e=>-1!==e.index,tt=()=>document.createComment(""),nt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class rt{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=Ue?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,o=0,s=0,a=r.nextNode();for(;o<n.length;)if(i=n[o],et(i)){for(;s<i.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=t.pop(),a=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return Ue&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const it=` ${Ge} `;class ot{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=nt.exec(e);t+=null===o?e+(n?it:Ke):e.substr(0,o.index)+o[1]+o[2]+Xe+o[3]+Ge}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const st=e=>null===e||!("object"==typeof e||"function"==typeof e),at=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ct{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new lt(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(st(e)||!at(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class lt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Je||st(e)&&e===this.value||(this.value=e,He(e)||(this.committer.dirty=!0))}commit(){for(;He(this.value);){const e=this.value;this.value=Je,e(this)}this.value!==Je&&this.committer.commit()}}class ut{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(tt()),this.endNode=e.appendChild(tt())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=tt()),e.__insert(this.endNode=tt())}insertAfterPart(e){e.__insert(this.startNode=tt()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;He(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Je,e(this)}const e=this.__pendingValue;e!==Je&&(st(e)?e!==this.value&&this.__commitText(e):e instanceof ot?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):at(e)?this.__commitIterable(e):e===Ye?(this.value=Ye,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof rt&&this.value.template===t)this.value.update(e.values);else{const n=new rt(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new ut(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Ve(this.startNode.parentNode,e.nextSibling,this.endNode)}}class dt{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;He(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Je,e(this)}if(this.__pendingValue===Je)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Je}}class pt extends ct{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ft(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ft extends lt{}let ht=!1;try{const e={get capture(){return ht=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class mt{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;He(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Je,e(this)}if(this.__pendingValue===Je)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=_t(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Je}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const _t=e=>e&&(ht?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;const gt=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new pt(e,t.slice(1),n).parts}if("@"===i)return[new mt(e,t.slice(1),r.eventContext)];if("?"===i)return[new dt(e,t.slice(1),n)];return new ct(e,t,n).parts}handleTextExpression(e){return new ut(e)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */function yt(e){let t=vt.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},vt.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Ge);return n=t.keyString.get(r),void 0===n&&(n=new Qe(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const vt=new Map,bt=new WeakMap;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const wt=(e,...t)=>new ot(e,t,"html",gt)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;function xt(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let o=Ct(r),s=r[o],a=-1,c=0;const l=[];let u=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,o=Ct(r,o),s=r[o]}l.forEach((e=>e.parentNode.removeChild(e)))}const St=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},Ct=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(et(t))return n}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const kt=(e,t)=>`${e}--${t}`;let Pt=!0;void 0===window.ShadyCSS?Pt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Pt=!1);const Et=e=>t=>{const n=kt(t.type,e);let r=vt.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},vt.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(Ge);if(i=r.keyString.get(o),void 0===i){const n=t.getTemplateElement();Pt&&window.ShadyCSS.prepareTemplateDom(n,e),i=new Qe(t,n),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i},At=["html","svg"],Ot=new Set,Tt=(e,t,n)=>{Ot.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{At.forEach((t=>{const n=vt.get(kt(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),xt(e,n)}))}))})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let s=Ct(i),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===n&&(a=St(t),n.parentNode.insertBefore(t,n));-1!==s&&i[s].index===c;){if(a>0){for(;-1!==s;)i[s].index+=a,s=Ct(i,s);return}s=Ct(i,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),xt(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const $t={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Nt=(e,t)=>t!==e&&(t==t||e==e),It={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Nt},Rt=Promise.resolve(!0),Dt="finalized";class Lt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Rt,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=It){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Dt)||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Nt){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||$t,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||$t.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=It){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||It;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,i=r._classProperties.get(e)||It;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise(((n,r)=>{e=n,t=r}));try{await n}catch(e){}this._hasConnected||await new Promise((e=>this._hasConnectedResolver=e));try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Lt.finalized=!0;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const jt=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),Mt=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function qt(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Mt(e,t)}function Bt(e){return(t,n)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?zt(r,t,n):Ft(r,t)}}const zt=(e,t,n)=>{Object.defineProperty(t,n,e)},Ft=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e})
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */,Ht="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol();class Vt{constructor(e,t){if(t!==Ut)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Ht?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Jt=(e,...t)=>{const n=t.reduce(((t,n,r)=>t+(e=>{if(e instanceof Vt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]);return new Vt(n,Ut)};function Yt(e,t=[]){for(let n=0,r=e.length;n<r;n++){const r=e[n];Array.isArray(r)?Yt(r,t):t.push(r)}return t}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Gt=e=>e.flat?e.flat(1/0):Yt(e);class Kt extends Lt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){Gt(e).reduceRight(((e,t)=>(e.add(t),e)),new Set).forEach((e=>t.unshift(e)))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ht?this.renderRoot.adoptedStyleSheets=e.map((e=>e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof ot&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Wt;function Xt(e,t){if(void 0===e&&(e=window),void 0===t&&(t=!1),void 0===Wt||t){var n=!1;try{e.document.addEventListener("test",(function(){}),{get passive(){return n=!0}})}catch(e){}Wt=n}return!!Wt&&{passive:!0}}
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */Kt.finalized=!0,Kt.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=bt.has(t),o=Pt&&11===t.nodeType&&!!t.host,s=o&&!Ot.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=bt.get(t);void 0===r&&(Ve(t,t.firstChild),bt.set(t,r=new ut(Object.assign({templateFactory:yt},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:Et(r)},n)),s){const e=bt.get(a);bt.delete(a);const n=e.value instanceof rt?e.value.template:void 0;Tt(r,a,n),Ve(t,t.firstChild),t.appendChild(a),bt.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)};
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Qt,Zt=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),en={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},tn={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},nn={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var rn=["touchstart","pointerdown","mousedown","keydown"],on=["touchend","pointerup","mouseup","contextmenu"],sn=[],an=function(e){function t(n){var r=e.call(this,qe({},t.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(e){return r.activate_(e)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return Me(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return en},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return tn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return nn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var r=t.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.addClass(i),e.adapter_.isUnbounded()&&(e.adapter_.addClass(o),e.layoutInternal_())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,r=n.ROOT,i=n.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.removeClass(r),e.adapter_.removeClass(i),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.setUnbounded=function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(rn.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):on.forEach((function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},t.prototype.deregisterRootHandlers_=function(){var e=this;rn.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),on.forEach((function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},t.prototype.removeCssVars_=function(){var e=this,n=t.strings;Object.keys(n).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)}))},t.prototype.activate_=function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==e&&r.type!==e.type))n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&sn.length>0&&sn.some((function(e){return t.adapter_.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(sn.push(e.target),this.registerDeactivationHandlers_(e)),n.wasElementMadeActive=this.checkElementMadeActive_(e),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){sn=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive_(e),n.wasElementMadeActive&&t.animateActivation_()),n.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,n=t.strings,r=n.VAR_FG_TRANSLATE_START,i=n.VAR_FG_TRANSLATE_END,o=t.cssClasses,s=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var l="",u="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),p=d.startPoint,f=d.endPoint;l=p.x+"px, "+p.y+"px",u=f.x+"px, "+f.y+"px"}this.adapter_.updateCssVariable(r,l),this.adapter_.updateCssVariable(i,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(s),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),c)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,n=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,n){if(!e)return{x:0,y:0};var r,i,o=t.x,s=t.y,a=o+n.left,c=s+n.top;if("touchstart"===e.type){var l=e;r=l.changedTouches[0].pageX-a,i=l.changedTouches[0].pageY-c}else{var u=e;r=u.pageX-a,i=u.pageY-c}return{x:r,y:i}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,r=this.activationState_,i=r.hasDeactivationUXRun,o=r.isActivated;(i||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter_.removeClass(n)}),nn.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var n=qe({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(n),e.resetActivationState_()})))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING;var r=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&r%2!=0?this.initialSize_=r-1:this.initialSize_=r,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,n=e.VAR_FG_SIZE,r=e.VAR_LEFT,i=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},t}(Zt);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const cn=Jt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */,ln=function(e,t){void 0===t&&(t=!1);var n=e.CSS,r=Qt;if("boolean"==typeof Qt&&!t)return Qt;if(!(n&&"function"==typeof n.supports))return!1;var i=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=!(!i&&!o)&&!function(e){var t=e.document,n=t.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",t.head.appendChild(n);var r=e.getComputedStyle(n),i=null!==r&&"solid"===r.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),i}(e),t||(Qt=r),r}(window),un=navigator.userAgent.match(/Safari/);let dn=!1;const pn=e=>{un&&!dn&&(()=>{dn=!0;const e=new ut({templateFactory:yt});e.appendInto(document.head),e.setValue(cn),e.commit()})();const t=e.surfaceNode,n=e.interactionNode||t;n.getRootNode()!==t.getRootNode()&&""===n.style.position&&(n.style.position="relative");const r=new an({browserSupportsCssVars:()=>ln,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>function(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}(n,":active"),isSurfaceDisabled:()=>Boolean(n.hasAttribute("disabled")),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>n.contains(e),registerInteractionHandler:(e,t)=>n.addEventListener(e,t,Xt()),deregisterInteractionHandler:(e,t)=>n.removeEventListener(e,t,Xt()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,Xt()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,Xt()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,n)=>t.style.setProperty(e,n),computeBoundingRect:()=>t.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return r.init(),r},fn=new WeakMap,hn=Fe(((e={})=>t=>{const n=t.committer.element,r=e.interactionNode||n;let i=t.value;const o=fn.get(i);void 0!==o&&o!==r&&(i.destroy(),i=Je),i===Je?(i=pn(Object.assign({},e,{surfaceNode:n})),fn.set(i,r),t.setValue(i)):(void 0!==e.unbounded&&i.setUnbounded(e.unbounded),void 0!==e.disabled&&i.setUnbounded(e.disabled)),!0===e.active?i.activate():!1===e.active&&i.deactivate()})),mn=new WeakMap,_n=Fe((e=>t=>{if(!(t instanceof lt)||t instanceof ft||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=t,{element:r}=n;mn.has(t)||(r.className=n.strings.join(" "));const{classList:i}=r,o=mn.get(t);for(const t in o)t in e||i.remove(t);for(const t in e){const n=e[t];if(!o||n!==o[t]){i[n?"add":"remove"](t)}}mn.set(t,e)}));class gn extends Kt{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;if(e){const t=e.ripple;t&&t.handleFocus(),e.focus()}}blur(){const e=this.buttonElement;if(e){const t=e.ripple;t&&t.handleBlur(),e.blur()}}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},t=wt`<span class="material-icons mdc-button__icon">${this.icon}</span>`,n=hn({unbounded:!1});return wt`
      <button id="button"
              .ripple="${n}"
              class="mdc-button ${_n(e)}"
              ?disabled="${this.disabled}"
              aria-label="${this.label||this.icon}">
        <div class="mdc-button__ripple"></div>
        ${this.icon&&!this.trailingIcon?t:""}
        <span class="mdc-button__label">${this.label}</span>
        ${this.icon&&this.trailingIcon?t:""}
        <slot></slot>
      </button>`}}Be([qt({type:Boolean})],gn.prototype,"raised",void 0),Be([qt({type:Boolean})],gn.prototype,"unelevated",void 0),Be([qt({type:Boolean})],gn.prototype,"outlined",void 0),Be([qt({type:Boolean})],gn.prototype,"dense",void 0),Be([qt({type:Boolean,reflect:!0})],gn.prototype,"disabled",void 0),Be([qt({type:Boolean})],gn.prototype,"trailingIcon",void 0),Be([qt()],gn.prototype,"icon",void 0),Be([qt()],gn.prototype,"label",void 0),Be([Bt("#button")],gn.prototype,"buttonElement",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const yn=Jt`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-elevation-overlay{background-color:#fff}.mdc-button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.37)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.37)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-button{height:36px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;outline:none;vertical-align:top}:host([disabled]){pointer-events:none}.mdc-button{flex:auto;text-transform:var(--mdc-button-text-transform, uppercase);letter-spacing:var(--mdc-button-letter-spacing, 0.0892857143em);padding:0 var(--mdc-button-horizontal-padding, 8px) 0 var(--mdc-button-horizontal-padding, 8px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding, 16px) 0 var(--mdc-button-horizontal-padding, 16px)}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px)) 0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));border-width:var(--mdc-button-outline-width, 1px);border-color:var(--mdc-button-outline-color, var(--mdc-theme-primary, #6200ee))}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.37))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.37))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.37));border-color:var(--mdc-button-disabled-outline-color, var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.37)))}`;let vn=class extends gn{};vn.styles=yn,vn=Be([jt("mwc-button")],vn);class bn extends Kt{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return wt`<button
    .ripple="${hn()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}Be([qt({type:Boolean,reflect:!0})],bn.prototype,"disabled",void 0),Be([qt({type:String})],bn.prototype,"icon",void 0),Be([qt({type:String})],bn.prototype,"label",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const wn=Jt`.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;outline:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;let xn=class extends bn{};xn.styles=wn,xn=Be([jt("mwc-icon-button")],xn);
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Sn={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Cn={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},kn={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Pn=function(e){function t(n){return e.call(this,qe({},t.defaultAdapter,n))||this}return Me(t,e),Object.defineProperty(t,"strings",{get:function(){return kn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return Sn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Cn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},t}(Zt),En=function(e){function t(t){var n=e.call(this,t)||this;return n.wasDocked_=!0,n.isDockedShowing_=!0,n.currentAppBarOffsetTop_=0,n.isCurrentlyBeingResized_=!1,n.resizeThrottleId_=0,n.resizeDebounceId_=0,n.lastScrollPosition_=n.adapter_.getViewportScrollY(),n.topAppBarHeight_=n.adapter_.getTopAppBarHeight(),n}return Me(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.adapter_.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter_.getViewportScrollY(),0),t=e-this.lastScrollPosition_;this.lastScrollPosition_=e,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=t,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){e.resizeThrottleId_=0,e.throttledResizeHandler_()}),Cn.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){e.handleTargetScroll(),e.isCurrentlyBeingResized_=!1,e.resizeDebounceId_=0}),Cn.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate_=function(){var e=-this.topAppBarHeight_,t=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>e,r=t&&n;if(r)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return r},t.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var e=this.currentAppBarOffsetTop_;Math.abs(e)>=this.topAppBarHeight_&&(e=-Cn.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler_=function(){var e=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==e&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-e,this.topAppBarHeight_=e),this.handleTargetScroll()},t}(Pn);let An=!1;const On=()=>{},Tn={get passive(){return An=!0,!1}};document.addEventListener("x",On,Tn),document.removeEventListener("x",On);const $n=An;
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */class Nn extends Kt{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}const In=$n?{passive:!0}:void 0;class Rn extends Nn{constructor(){super(...arguments),this.mdcFoundationClass=Pn,this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t)}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=wt`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=wt`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),wt`
      <header class="mdc-top-app-bar ${_n(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:e}
        </section>
        ${this.centerTitle?e:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${_n(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
function(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(kn.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,In)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}Be([Bt(".mdc-top-app-bar")],Rn.prototype,"mdcRoot",void 0),Be([Bt('slot[name="actionItems"]')],Rn.prototype,"_actionItemsSlot",void 0),Be([qt({type:Boolean})],Rn.prototype,"centerTitle",void 0),Be([qt()],Rn.prototype,"scrollTarget",null);class Dn extends Rn{constructor(){super(...arguments),this.mdcFoundationClass=En,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,In)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}Be([qt({type:Boolean,reflect:!0})],Dn.prototype,"prominent",void 0),Be([qt({type:Boolean,reflect:!0})],Dn.prototype,"dense",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const Ln=Jt`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}`;let jn=class extends Dn{};jn.styles=Ln,jn=Be([jt("mwc-top-app-bar")],jn);var Mn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof Mn.setTimeout&&setTimeout,"function"==typeof Mn.clearTimeout&&clearTimeout;function qn(e,t){this.fun=e,this.array=t}qn.prototype.run=function(){this.fun.apply(null,this.array)};var Bn=Mn.performance||{};Bn.now||Bn.mozNow||Bn.msNow||Bn.oNow||Bn.webkitNow;new Date;var zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Fn(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var Hn,Un,Vn=zn.MutationObserver||zn.WebKitMutationObserver;if(Vn){var Jn=0,Yn=new Vn(Xn),Gn=zn.document.createTextNode("");Yn.observe(Gn,{characterData:!0}),Hn=function(){Gn.data=Jn=++Jn%2}}else if(zn.setImmediate||void 0===zn.MessageChannel)Hn="document"in zn&&"onreadystatechange"in zn.document.createElement("script")?function(){var e=zn.document.createElement("script");e.onreadystatechange=function(){Xn(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},zn.document.documentElement.appendChild(e)}:function(){setTimeout(Xn,0)};else{var Kn=new zn.MessageChannel;Kn.port1.onmessage=Xn,Hn=function(){Kn.port2.postMessage(0)}}var Wn=[];function Xn(){var e,t;Un=!0;for(var n=Wn.length;n;){for(t=Wn,Wn=[],e=-1;++e<n;)t[e]();n=Wn.length}Un=!1}var Qn=function(e){1!==Wn.push(e)||Un||Hn()};for(var Zn=Fn((function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}})),er=[],tr=0;tr<256;++tr)er[tr]=(tr+256).toString(16).substr(1);var nr,rr,ir=function(e,t){var n=t||0,r=er;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]},or=0,sr=0;var ar=function(e,t,n){var r=t&&n||0,i=t||[],o=(e=e||{}).node||nr,s=void 0!==e.clockseq?e.clockseq:rr;if(null==o||null==s){var a=Zn();null==o&&(o=nr=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==s&&(s=rr=16383&(a[6]<<8|a[7]))}var c=void 0!==e.msecs?e.msecs:(new Date).getTime(),l=void 0!==e.nsecs?e.nsecs:sr+1,u=c-or+(l-sr)/1e4;if(u<0&&void 0===e.clockseq&&(s=s+1&16383),(u<0||c>or)&&void 0===e.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");or=c,sr=l,rr=s;var d=(1e4*(268435455&(c+=122192928e5))+l)%4294967296;i[r++]=d>>>24&255,i[r++]=d>>>16&255,i[r++]=d>>>8&255,i[r++]=255&d;var p=c/4294967296*1e4&268435455;i[r++]=p>>>8&255,i[r++]=255&p,i[r++]=p>>>24&15|16,i[r++]=p>>>16&255,i[r++]=s>>>8|128,i[r++]=255&s;for(var f=0;f<6;++f)i[r+f]=o[f];return t||ir(i)};var cr=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||Zn)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||ir(i)},lr=cr;lr.v1=ar,lr.v4=cr;var ur=lr,dr=Fn((function(e,t){e.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function n(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+t[1]-389564586|0)<<12|o>>>20)+n|0)&n|~o&r)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&n)+t[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+t[5]+1200080426|0)<<12|o>>>20)+n|0)&n|~o&r)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&n)+t[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+t[9]-1958414417|0)<<12|o>>>20)+n|0)&n|~o&r)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&n)+t[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+t[13]-40341101|0)<<12|o>>>20)+n|0)&n|~o&r)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&n)+t[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+t[6]-1069501632|0)<<9|o>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|i>>>18)+o|0)&n|o&~n)+t[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+t[10]+38016083|0)<<9|o>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|i>>>18)+o|0)&n|o&~n)+t[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+t[14]-1019803690|0)<<9|o>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|i>>>18)+o|0)&n|o&~n)+t[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+t[2]-51403784|0)<<9|o>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&n|o&~n)+t[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+t[8]-2022574463|0)<<11|o>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^n)+t[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+t[4]+1272893353|0)<<11|o>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^n)+t[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+t[0]-358537222|0)<<11|o>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^n)+t[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+t[12]-421815835|0)<<11|o>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^n)+t[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function r(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function i(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function o(e){var t,i,o,s,a,c,l=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=l;t+=64)n(u,r(e.substring(t-64,t)));for(i=(e=e.substring(t-64)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<i;t+=1)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(n(u,o),t=0;t<16;t+=1)o[t]=0;return s=(s=8*l).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),c=parseInt(s[1],16)||0,o[14]=a,o[15]=c,n(u,o),u}function s(e){var t,r,o,s,a,c,l=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=l;t+=64)n(u,i(e.subarray(t-64,t)));for(r=(e=t-64<l?e.subarray(t-64):new Uint8Array(0)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)o[t>>2]|=e[t]<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(n(u,o),t=0;t<16;t+=1)o[t]=0;return s=(s=8*l).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),c=parseInt(s[1],16)||0,o[14]=a,o[15]=c,n(u,o),u}function a(e){var n,r="";for(n=0;n<4;n+=1)r+=t[e>>8*n+4&15]+t[e>>8*n&15];return r}function c(e){var t;for(t=0;t<e.length;t+=1)e[t]=a(e[t]);return e.join("")}function l(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function u(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i);for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n);return t?o:i}function d(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function p(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}function f(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function h(){this.reset()}return c(o("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var i,o,s,a,c=this.byteLength,l=t(n,c),u=c;return r!==e&&(u=t(r,c)),l>u?new ArrayBuffer(0):(i=u-l,o=new ArrayBuffer(i),s=new Uint8Array(o),a=new Uint8Array(this,l,i),s.set(a),o)}}(),h.prototype.append=function(e){return this.appendBinary(l(e)),this},h.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,i=this._buff.length;for(t=64;t<=i;t+=64)n(this._hash,r(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},h.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),n=c(this._hash),e&&(n=f(n)),this.reset(),n},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},h.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(e,t){var r,i,o,s=t;if(e[s>>2]|=128<<(s%4<<3),s>55)for(n(this._hash,e),s=0;s<16;s+=1)e[s]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(r[2],16),o=parseInt(r[1],16)||0,e[14]=i,e[15]=o,n(this._hash,e)},h.hash=function(e,t){return h.hashBinary(l(e),t)},h.hashBinary=function(e,t){var n=c(o(e));return t?f(n):n},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(e){var t,r=p(this._buff.buffer,e,!0),o=r.length;for(this._length+=e.byteLength,t=64;t<=o;t+=64)n(this._hash,i(r.subarray(t-64,t)));return this._buff=t-64<o?new Uint8Array(r.buffer.slice(t-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3);return this._finish(o,i),n=c(this._hash),e&&(n=f(n)),this.reset(),n},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var e=h.prototype.getState.call(this);return e.buff=d(e.buff),e},h.ArrayBuffer.prototype.setState=function(e){return e.buff=u(e.buff,!0),h.prototype.setState.call(this,e)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(e,t){var n=c(s(new Uint8Array(e)));return t?f(n):n},h}()}));function pr(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(e);else if(o===t.length-2){i[t.pop()]=e}else t.push(e)}var fr=function(e){var t=[];t.push({obj:e});for(var n,r,i,o,s,a,c,l,u,d,p="";n=t.pop();)if(r=n.obj,p+=n.prefix||"",i=n.val||"")p+=i;else if("object"!=typeof r)p+=void 0===r?null:JSON.stringify(r);else if(null===r)p+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),o=r.length-1;o>=0;o--)s=0===o?"":",",t.push({obj:r[o],prefix:s});t.push({val:"["})}else{for(c in a=[],r)r.hasOwnProperty(c)&&a.push(c);for(t.push({val:"}"}),o=a.length-1;o>=0;o--)u=r[l=a[o]],d=o>0?",":"",d+=JSON.stringify(l)+":",t.push({obj:u,prefix:d});t.push({val:"{"})}return p},hr=function(e){for(var t,n,r,i,o,s,a,c,l,u=[],d=[],p=0;;)if("}"!==(t=e[p++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":p+=3,pr(null,u,d);break;case"t":p+=3,pr(!0,u,d);break;case"f":p+=4,pr(!1,u,d);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",p--;;){if(r=e[p++],!/[\d\.\-e\+]/.test(r)){p--;break}n+=r}pr(parseFloat(n),u,d);break;case'"':for(i="",o=void 0,s=0;'"'!==(a=e[p++])||"\\"===o&&s%2==1;)i+=a,"\\"===(o=a)?s++:s=0;pr(JSON.parse('"'+i+'"'),u,d);break;case"[":c={element:[],index:u.length},u.push(c.element),d.push(c);break;case"{":l={element:{},index:u.length},u.push(l.element),d.push(l);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===u.length)return u.pop();pr(u.pop(),u,d)}},mr=function(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}};var _r,gr,yr=Fn((function(e){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}));function vr(){}function br(){br.init.call(this)}function wr(e){return void 0===e._maxListeners?br.defaultMaxListeners:e._maxListeners}function xr(e,t,n){if(t)e.call(n);else for(var r=e.length,i=Tr(e,r),o=0;o<r;++o)i[o].call(n)}function Sr(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=Tr(e,i),s=0;s<i;++s)o[s].call(n,r)}function Cr(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=Tr(e,o),a=0;a<o;++a)s[a].call(n,r,i)}function kr(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=Tr(e,s),c=0;c<s;++c)a[c].call(n,r,i,o)}function Pr(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=Tr(e,i),s=0;s<i;++s)o[s].apply(n,r)}function Er(e,t,n,r){var i,o,s,a;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=new vr,e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=wr(e))&&i>0&&s.length>i){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,a=c,"function"==typeof console.warn?console.warn(a):console.log(a)}}else s=o[t]=n,++e._eventsCount;return e}function Ar(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments))}return i.listener=n,i}function Or(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function Tr(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}function $r(e){return"$"+e}function Nr(e){return e.substring(1)}function Ir(){this._store={}}function Rr(e){if(this._store=new Ir,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function Dr(e){if(e instanceof ArrayBuffer)return function(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}vr.prototype=Object.create(null),br.EventEmitter=br,br.usingDomains=!1,br.prototype.domain=void 0,br.prototype._events=void 0,br.prototype._maxListeners=void 0,br.defaultMaxListeners=10,br.init=function(){this.domain=null,br.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new vr,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},br.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},br.prototype.getMaxListeners=function(){return wr(this)},br.prototype.emit=function(e){var t,n,r,i,o,s,a,c="error"===e;if(s=this._events)c=c&&null==s.error;else if(!c)return!1;if(a=this.domain,c){if(t=arguments[1],!a){if(t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(n=s[e]))return!1;var u="function"==typeof n;switch(r=arguments.length){case 1:xr(n,u,this);break;case 2:Sr(n,u,this,arguments[1]);break;case 3:Cr(n,u,this,arguments[1],arguments[2]);break;case 4:kr(n,u,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),o=1;o<r;o++)i[o-1]=arguments[o];Pr(n,u,this,i)}return!0},br.prototype.addListener=function(e,t){return Er(this,e,t,!1)},br.prototype.on=br.prototype.addListener,br.prototype.prependListener=function(e,t){return Er(this,e,t,!0)},br.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,Ar(this,e,t)),this},br.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,Ar(this,e,t)),this},br.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new vr:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length;o-- >0;)if(n[o]===t||n[o].listener&&n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new vr,this;delete r[e]}else!function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i);r.removeListener&&this.emit("removeListener",e,s||t)}return this},br.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new vr,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new vr:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new vr,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},br.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},br.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):Or.call(e,t)},br.prototype.listenerCount=Or,br.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]},Ir.prototype.get=function(e){var t=$r(e);return this._store[t]},Ir.prototype.set=function(e,t){var n=$r(e);return this._store[n]=t,!0},Ir.prototype.has=function(e){return $r(e)in this._store},Ir.prototype.delete=function(e){var t=$r(e),n=t in this._store;return delete this._store[t],n},Ir.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var i=t[n];e(this._store[i],i=Nr(i))}},Object.defineProperty(Ir.prototype,"size",{get:function(){return Object.keys(this._store).length}}),Rr.prototype.add=function(e){return this._store.set(e,!0)},Rr.prototype.has=function(e){return this._store.has(e)},Rr.prototype.forEach=function(e){this._store.forEach((function(t,n){e(n)}))},Object.defineProperty(Rr.prototype,"size",{get:function(){return this._store.size}}),!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(_r=Rr,gr=Ir):(_r=Set,gr=Map);var Lr=Function.prototype.toString,jr=Lr.call(Object);function Mr(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=Mr(e[n]);return t}if(e instanceof Date)return e.toISOString();if(function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}(e))return Dr(e);if(!function(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&Lr.call(n)==jr}(e))return e;for(n in t={},e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Mr(e[n]);void 0!==i&&(t[n]=i)}return t}function qr(e){var t=!1;return mr((function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)}))}function Br(e){return mr((function(t){t=Mr(t);var n=this,r="function"==typeof t[t.length-1]&&t.pop(),i=new Promise((function(r,i){var o;try{var s=qr((function(e,t){e?i(e):r(t)}));t.push(s),(o=e.apply(n,t))&&"function"==typeof o.then&&r(o)}catch(e){i(e)}}));return r&&i.then((function(e){r(null,e)}),r),i}))}function zr(e,t){return Br(mr((function(n){if(this._closed)return Promise.reject(new Error("database is closed"));if(this._destroyed)return Promise.reject(new Error("database is destroyed"));var r=this;return function(e,t,n){if(e.constructor.listeners("debug").length){for(var r=["api",e.name,t],i=0;i<n.length-1;i++)r.push(n[i]);e.constructor.emit("debug",r);var o=n[n.length-1];n[n.length-1]=function(n,r){var i=["api",e.name,t];i=i.concat(n?["error",n]:["success",r]),e.constructor.emit("debug",i),o(n,r)}}}(r,e,n),this.taskqueue.isReady?t.apply(this,n):new Promise((function(t,i){r.taskqueue.addTask((function(o){o?i(o):t(r[e].apply(r,n))}))}))})))}function Fr(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r];o in e&&(n[o]=e[o])}return n}var Hr;function Ur(e){return e}function Vr(e){return[{ok:e}]}function Jr(e,t,n){var r=t.docs,i=new gr;r.forEach((function(e){i.has(e.id)?i.get(e.id).push(e):i.set(e.id,[e])}));var o=i.size,s=0,a=new Array(o);function c(){var e;++s===o&&(e=[],a.forEach((function(t){t.docs.forEach((function(n){e.push({id:t.id,docs:[n]})}))})),n(null,{results:e}))}var l=[];i.forEach((function(e,t){l.push(t)}));var u=0;function d(){if(!(u>=l.length)){var n=Math.min(u+6,l.length),r=l.slice(u,n);!function(n,r){n.forEach((function(n,o){var s=r+o,l=i.get(n),u=Fr(l[0],["atts_since","attachments"]);u.open_revs=l.map((function(e){return e.rev})),u.open_revs=u.open_revs.filter(Ur);var p=Ur;0===u.open_revs.length&&(delete u.open_revs,p=Vr),["revs","attachments","binary","ajax","latest"].forEach((function(e){e in t&&(u[e]=t[e])})),e.get(n,u,(function(e,t){var r,i,o;r=e?[{error:e}]:p(t),i=n,o=r,a[s]={id:i,docs:o},c(),d()}))}))}(r,u),u+=r.length}}d()}try{localStorage.setItem("_pouch_check_localstorage",1),Hr=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){Hr=!1}function Yr(){return Hr}function Gr(){br.call(this),this._listeners={},function(e){Yr()&&addEventListener("storage",(function(t){e.emit(t.key)}))}(this)}function Kr(e){if("undefined"!=typeof console&&"function"==typeof console[e]){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function Wr(e){var t=0;return e||(t=2e3),function(e,t){var n=6e5;return e=parseInt(e,10)||0,(t=parseInt(t,10))!=t||t<=e?t=(e||1)<<1:t+=1,t>n&&(e=3e5,t=n),~~((t-e)*Math.random()+e)}(e,t)}function Xr(e,t){Kr("info","The above "+e+" is totally normal. "+t)}yr(Gr,br),Gr.prototype.addListener=function(e,t,n,r){if(!this._listeners[t]){var i=this,o=!1;this._listeners[t]=s,this.on(e,s)}function s(){if(i._listeners[t])if(o)o="waiting";else{o=!0;var e=Fr(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary","return_docs"]);n.changes(e).on("change",(function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))})).on("complete",(function(){"waiting"===o&&Qn(s),o=!1})).on("error",(function(){o=!1}))}}},Gr.prototype.removeListener=function(e,t){t in this._listeners&&(br.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},Gr.prototype.notifyLocalWindows=function(e){Yr()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},Gr.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var Qr="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};function Zr(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}yr(Zr,Error),Zr.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};new Zr(401,"unauthorized","Name or password is incorrect.");var ei=new Zr(400,"bad_request","Missing JSON list of 'docs'"),ti=new Zr(404,"not_found","missing"),ni=new Zr(409,"conflict","Document update conflict"),ri=new Zr(400,"bad_request","_id field must contain a string"),ii=new Zr(412,"missing_id","_id is required for puts"),oi=new Zr(400,"bad_request","Only reserved document ids may start with underscore."),si=(new Zr(412,"precondition_failed","Database not open"),new Zr(500,"unknown_error","Database encountered an unknown error")),ai=new Zr(500,"badarg","Some query argument is invalid"),ci=(new Zr(400,"invalid_request","Request was invalid"),new Zr(400,"query_parse_error","Some query parameter is invalid")),li=new Zr(500,"doc_validation","Bad special document member"),ui=new Zr(400,"bad_request","Something wrong with the request"),di=new Zr(400,"bad_request","Document must be a JSON object"),pi=(new Zr(404,"not_found","Database not found"),new Zr(500,"indexed_db_went_bad","unknown")),fi=(new Zr(500,"web_sql_went_bad","unknown"),new Zr(500,"levelDB_went_went_bad","unknown"),new Zr(403,"forbidden","Forbidden by design doc validate_doc_update function"),new Zr(400,"bad_request","Invalid rev format")),hi=(new Zr(412,"file_exists","The database could not be created, the file already exists."),new Zr(412,"missing_stub","A pre-existing attachment stub wasn't found"));new Zr(413,"invalid_url","Provided URL is invalid");function mi(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=Zr.prototype,new n(t)}function _i(e){if("object"!=typeof e){var t=e;(e=si).data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function gi(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var i=n&&function(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return mi(ui,r)}}(e.filter,r.doc,t);if("object"==typeof i)return i;if(i)return!1;if(e.include_docs){if(!e.attachments)for(var o in r.doc._attachments)r.doc._attachments.hasOwnProperty(o)&&(r.doc._attachments[o].stub=!0)}else delete r.doc;return!0}}function yi(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function vi(e){var t;if(e?"string"!=typeof e?t=mi(ri):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=mi(oi)):t=mi(ii),t)throw t}function bi(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(Kr("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function wi(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function xi(e){var t=wi(e);return t?t.join("/"):null}var Si=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],Ci="queryKey",ki=/(?:^|&)([^&=]*)=?([^&]*)/g,Pi=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;function Ei(e){for(var t=Pi.exec(e),n={},r=14;r--;){var i=Si[r],o=t[r]||"",s=-1!==["user","password"].indexOf(i);n[i]=s?decodeURIComponent(o):o}return n[Ci]={},n[Si[12]].replace(ki,(function(e,t,r){t&&(n[Ci][t]=r)})),n}function Ai(e,t){var n=[],r=[];for(var i in t)t.hasOwnProperty(i)&&(n.push(i),r.push(t[i]));return n.push(e),Function.apply(null,n).apply(null,r)}function Oi(e,t,n){return new Promise((function(r,i){e.get(t,(function(o,s){if(o){if(404!==o.status)return i(o);s={}}var a=s._rev,c=n(s);if(!c)return r({updated:!1,rev:a});c._id=t,c._rev=a,r(function(e,t,n){return e.put(t).then((function(e){return{updated:!0,rev:e.rev}}),(function(r){if(409!==r.status)throw r;return Oi(e,t._id,n)}))}(e,c,n))}))}))}var Ti=function(e){return atob(e)},$i=function(e){return btoa(e)};function Ni(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}function Ii(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function Ri(e,t){return Ni([Ii(e)],{type:t})}function Di(e,t){return Ri(Ti(e),t)}function Li(e,t){var n=new FileReader,r="function"==typeof n.readAsBinaryString;n.onloadend=function(e){var n=e.target.result||"";if(r)return t(n);t(function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,i=0;i<r;i++)t+=String.fromCharCode(n[i]);return t}(n))},r?n.readAsBinaryString(e):n.readAsArrayBuffer(e)}function ji(e,t){Li(e,(function(e){t(e)}))}function Mi(e,t){ji(e,(function(e){t($i(e))}))}var qi=Mn.setImmediate||Mn.setTimeout;function Bi(e,t,n,r,i){(n>0||r<t.size)&&(t=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}(t,n,r)),function(e,t){var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}(t,(function(t){e.append(t),i()}))}function zi(e,t,n,r,i){(n>0||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),i()}function Fi(e,t){var n="string"==typeof e,r=n?e.length:e.size,i=Math.min(32768,r),o=Math.ceil(r/i),s=0,a=n?new dr:new dr.ArrayBuffer,c=n?zi:Bi;function l(){qi(d)}function u(){var e=function(e){return $i(e)}(a.end(!0));t(e),a.destroy()}function d(){var t=s*i,n=t+i;s++,c(a,e,t,n,s<o?l:u)}d()}function Hi(e){return dr.hash(e)}function Ui(e,t){var n=Mr(e);return t?(delete n._rev_tree,Hi(JSON.stringify(n))):ur.v4().replace(/-/g,"").toLowerCase()}var Vi=ur.v4;function Ji(e){for(var t,n,r,i,o=e.rev_tree.slice();i=o.pop();){var s=i.ids,a=s[2],c=i.pos;if(a.length)for(var l=0,u=a.length;l<u;l++)o.push({pos:c+1,ids:a[l]});else{var d=!!s[1].deleted,p=s[0];t&&!(r!==d?r:n!==c?n<c:t<p)||(t=p,n=c,r=d)}}return n+"-"+t}function Yi(e,t){for(var n,r=e.slice();n=r.pop();)for(var i=n.pos,o=n.ids,s=o[2],a=t(0===s.length,i,o[0],n.ctx,o[1]),c=0,l=s.length;c<l;c++)r.push({pos:i+1,ids:s[c],ctx:a})}function Gi(e,t){return e.pos-t.pos}function Ki(e){var t=[];Yi(e,(function(e,n,r,i,o){e&&t.push({rev:n+"-"+r,pos:n,opts:o})})),t.sort(Gi).reverse();for(var n=0,r=t.length;n<r;n++)delete t[n].pos;return t}function Wi(e){for(var t=Ji(e),n=Ki(e.rev_tree),r=[],i=0,o=n.length;i<o;i++){var s=n[i];s.rev===t||s.opts.deleted||r.push(s.rev)}return r}function Xi(e){for(var t,n=[],r=e.slice();t=r.pop();){var i=t.pos,o=t.ids,s=o[0],a=o[1],c=o[2],l=0===c.length,u=t.history?t.history.slice():[];u.push({id:s,opts:a}),l&&n.push({pos:i+1-u.length,ids:u});for(var d=0,p=c.length;d<p;d++)r.push({pos:i+1,ids:c[d],history:u})}return n.reverse()}function Qi(e,t){return e.pos-t.pos}function Zi(e,t,n){var r=function(e,t,n){for(var r,i=0,o=e.length;i<o;)n(e[r=i+o>>>1],t)<0?i=r+1:o=r;return i}(e,t,n);e.splice(r,0,t)}function eo(e,t){for(var n,r,i=t,o=e.length;i<o;i++){var s=e[i],a=[s.id,s.opts,[]];r?(r[2].push(a),r=a):n=r=a}return n}function to(e,t){return e[0]<t[0]?-1:1}function no(e,t){for(var n=[{tree1:e,tree2:t}],r=!1;n.length>0;){var i=n.pop(),o=i.tree1,s=i.tree2;(o[1].status||s[1].status)&&(o[1].status="available"===o[1].status||"available"===s[1].status?"available":"missing");for(var a=0;a<s[2].length;a++)if(o[2][0]){for(var c=!1,l=0;l<o[2].length;l++)o[2][l][0]===s[2][a][0]&&(n.push({tree1:o[2][l],tree2:s[2][a]}),c=!0);c||(r="new_branch",Zi(o[2],s[2][a],to))}else r="new_leaf",o[2][0]=s[2][a]}return{conflicts:r,tree:e}}function ro(e,t,n){var r,i=[],o=!1,s=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var a=0,c=e.length;a<c;a++){var l=e[a];if(l.pos===t.pos&&l.ids[0]===t.ids[0])r=no(l.ids,t.ids),i.push({pos:l.pos,ids:r.tree}),o=o||r.conflicts,s=!0;else if(!0!==n){var u=l.pos<t.pos?l:t,d=l.pos<t.pos?t:l,p=d.pos-u.pos,f=[],h=[];for(h.push({ids:u.ids,diff:p,parent:null,parentIdx:null});h.length>0;){var m=h.pop();if(0!==m.diff)for(var _=m.ids[2],g=0,y=_.length;g<y;g++)h.push({ids:_[g],diff:m.diff-1,parent:m.ids,parentIdx:g});else m.ids[0]===d.ids[0]&&f.push(m)}var v=f[0];v?(r=no(v.ids,d.ids),v.parent[2][v.parentIdx]=r.tree,i.push({pos:u.pos,ids:u.ids}),o=o||r.conflicts,s=!0):i.push(l)}else i.push(l)}return s||i.push(t),i.sort(Qi),{tree:i,conflicts:o||"internal_node"}}function io(e,t,n){var r=ro(e,t),i=function(e,t){for(var n,r,i=Xi(e),o=0,s=i.length;o<s;o++){var a,c=i[o],l=c.ids;if(l.length>t){n||(n={});var u=l.length-t;a={pos:c.pos+u,ids:eo(l,u)};for(var d=0;d<u;d++){var p=c.pos+d+"-"+l[d].id;n[p]=!0}}else a={pos:c.pos,ids:eo(l,0)};r=r?ro(r,a,!0).tree:[a]}return n&&Yi(r,(function(e,t,r){delete n[t+"-"+r]})),{tree:r,revs:n?Object.keys(n):[]}}(r.tree,n);return{tree:i.tree,stemmedRevs:i.revs,conflicts:r.conflicts}}function oo(e){return e.ids}function so(e,t){t||(t=Ji(e));for(var n,r=t.substring(t.indexOf("-")+1),i=e.rev_tree.map(oo);n=i.pop();){if(n[0]===r)return!!n[1].deleted;i=i.concat(n[2])}}function ao(e){return/^_local/.test(e)}function co(e,t,n){br.call(this);var r=this;this.db=e;var i=(t=t?Mr(t):{}).complete=qr((function(t,n){var i,s;t?(s="error",("listenerCount"in(i=r)?i.listenerCount(s):br.listenerCount(i,s))>0&&r.emit("error",t)):r.emit("complete",n),r.removeAllListeners(),e.removeListener("destroyed",o)}));function o(){r.cancel()}n&&(r.on("complete",(function(e){n(null,e)})),r.on("error",n)),e.once("destroyed",o),t.onChange=function(e,t,n){r.isCancelled||function(e,t,n,r){try{e.emit("change",t,n,r)}catch(e){Kr("error",'Error in .on("change", function):',e)}}(r,e,t,n)};var s=new Promise((function(e,n){t.complete=function(t,r){t?n(t):e(r)}}));r.once("cancel",(function(){e.removeListener("destroyed",o),t.complete(null,{status:"cancelled"})})),this.then=s.then.bind(s),this.catch=s.catch.bind(s),this.then((function(e){i(null,e)}),i),e.taskqueue.isReady?r.validateChanges(t):e.taskqueue.addTask((function(e){e?t.complete(e):r.isCancelled?r.emit("cancel"):r.validateChanges(t)}))}function lo(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=Ki(t.rev_tree).map((function(e){return{rev:e.rev}})));var i={id:t.id,changes:r,doc:e};return so(t,e._rev)&&(i.deleted=!0),n.conflicts&&(i.doc._conflicts=Wi(t),i.doc._conflicts.length||delete i.doc._conflicts),i}function uo(e,t){return e<t?-1:e>t?1:0}function po(e,t){return function(n,r){n||r[0]&&r[0].error?((n=n||r[0]).docId=t,e(n)):e(null,r.length?r[0]:r)}}function fo(e,t){var n=uo(e._id,t._id);return 0!==n?n:uo(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function ho(e){var t=e._compactionQueue[0],n=t.opts,r=t.callback;e.get("_local/compaction").catch((function(){return!1})).then((function(t){t&&t.last_seq&&(n.last_seq=t.last_seq),e._compact(n,(function(t,n){t?r(t):r(null,n),Qn((function(){e._compactionQueue.shift(),e._compactionQueue.length&&ho(e)}))}))}))}function mo(){for(var e in br.call(this),mo.prototype)"function"==typeof this[e]&&(this[e]=this[e].bind(this))}function _o(){this.isReady=!1,this.failed=!1,this.queue=[]}function go(e,t){if(!(this instanceof go))return new go(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),void 0===t.deterministic_revs&&(t.deterministic_revs=!0),this.__opts=t=Mr(t),n.auto_compaction=t.auto_compaction,n.prefix=go.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=function(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=go.adapters,i=go.preferredAdapters,o=go.prefix,s=t.adapter;if(!s)for(var a=0;a<i.length&&"idb"===(s=i[a])&&"websql"in r&&Yr()&&localStorage["_pouch__websqldb_"+o+e];++a)Kr("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.');var c=r[s];return{name:c&&"use_prefix"in c&&!c.use_prefix?e:o+e,adapter:s}}((t.prefix||"")+e,t);if(t.name=r.name,t.adapter=t.adapter||r.adapter,n.name=e,n._adapter=t.adapter,go.emit("debug",["adapter","Picked adapter: ",t.adapter]),!go.adapters[t.adapter]||!go.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);mo.call(n),n.taskqueue=new _o,n.adapter=t.adapter,go.adapters[t.adapter].call(n,t,(function(e){if(e)return n.taskqueue.fail(e);!function(e){function t(t){e.removeListener("closed",n),t||e.constructor.emit("destroyed",e.name)}function n(){e.removeListener("destroyed",t),e.constructor.emit("unref",e)}e.once("destroyed",t),e.once("closed",n),e.constructor.emit("ref",e)}(n),n.emit("created",n),go.emit("created",n.name),n.taskqueue.ready(n)}))}yr(co,br),co.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},co.prototype.validateChanges=function(e){var t=e.complete,n=this;go._changesFilterPlugin?go._changesFilterPlugin.validate(e,(function(r){if(r)return t(r);n.doChanges(e)})):n.doChanges(e)},co.prototype.doChanges=function(e){var t=this,n=e.complete;if("live"in(e=Mr(e))&&!("continuous"in e)&&(e.continuous=e.live),e.processChange=lo,"latest"===e.since&&(e.since="now"),e.since||(e.since=0),"now"!==e.since){if(go._changesFilterPlugin){if(go._changesFilterPlugin.normalize(e),go._changesFilterPlugin.shouldFilter(this,e))return go._changesFilterPlugin.filter(this,e)}else["doc_ids","filter","selector","view"].forEach((function(t){t in e&&Kr("warn",'The "'+t+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')}));"descending"in e||(e.descending=!1),e.limit=0===e.limit?1:e.limit,e.complete=n;var r=this.db._changes(e);if(r&&"function"==typeof r.cancel){var i=t.cancel;t.cancel=mr((function(e){r.cancel(),i.apply(this,e)}))}}else this.db.info().then((function(r){t.isCancelled?n(null,{status:"cancelled"}):(e.since=r.update_seq,t.doChanges(e))}),n)},yr(mo,br),mo.prototype.post=zr("post",(function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(mi(di));this.bulkDocs({docs:[e]},t,po(n,e._id))})),mo.prototype.put=zr("put",(function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(mi(di));if(vi(e._id),ao(e._id)&&"function"==typeof this._putLocal)return e._deleted?this._removeLocal(e,n):this._putLocal(e,n);var r=this;function i(n){"function"==typeof r._put&&!1!==t.new_edits?r._put(e,t,n):r.bulkDocs({docs:[e]},t,po(n,e._id))}t.force&&e._rev?(!function(){var n=e._rev.split("-"),r=n[1],i=parseInt(n[0],10)+1,o=Ui();e._revisions={start:i,ids:[o,r]},e._rev=i+"-"+o,t.new_edits=!1}(),i((function(t){var r=t?null:{ok:!0,id:e._id,rev:e._rev};n(t,r)}))):i(n)})),mo.prototype.putAttachment=zr("putAttachment",(function(e,t,n,r,i){var o=this;function s(e){var n="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[t]={content_type:i,data:r,revpos:++n},o.put(e)}return"function"==typeof i&&(i=r,r=n,n=null),void 0===i&&(i=r,r=n,n=null),i||Kr("warn","Attachment",t,"on document",e,"is missing content_type"),o.get(e).then((function(e){if(e._rev!==n)throw mi(ni);return s(e)}),(function(t){if(t.reason===ti.message)return s({_id:e});throw t}))})),mo.prototype.removeAttachment=zr("removeAttachment",(function(e,t,n,r){var i=this;i.get(e,(function(e,o){if(e)r(e);else if(o._rev===n){if(!o._attachments)return r();delete o._attachments[t],0===Object.keys(o._attachments).length&&delete o._attachments,i.put(o,r)}else r(mi(ni))}))})),mo.prototype.remove=zr("remove",(function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),(n=n||{}).was_delete=!0;var o={_id:i._id,_rev:i._rev||n.rev,_deleted:!0};if(ao(o._id)&&"function"==typeof this._removeLocal)return this._removeLocal(i,r);this.bulkDocs({docs:[o]},n,po(r,o._id))})),mo.prototype.revsDiff=zr("revsDiff",(function(e,t,n){"function"==typeof t&&(n=t,t={});var r=Object.keys(e);if(!r.length)return n(null,{});var i=0,o=new gr;function s(e,t){o.has(e)||o.set(e,{missing:[]}),o.get(e).missing.push(t)}r.map((function(t){this._getRevisionTree(t,(function(a,c){if(a&&404===a.status&&"missing"===a.message)o.set(t,{missing:e[t]});else{if(a)return n(a);!function(t,n){var r=e[t].slice(0);Yi(n,(function(e,n,i,o,a){var c=n+"-"+i,l=r.indexOf(c);-1!==l&&(r.splice(l,1),"available"!==a.status&&s(t,c))})),r.forEach((function(e){s(t,e)}))}(t,c)}if(++i===r.length){var l={};return o.forEach((function(e,t){l[t]=e})),n(null,l)}}))}),this)})),mo.prototype.bulkGet=zr("bulkGet",(function(e,t){Jr(this,e,t)})),mo.prototype.compactDocument=zr("compactDocument",(function(e,t,n){var r=this;this._getRevisionTree(e,(function(i,o){if(i)return n(i);var s=function(e){var t={},n=[];return Yi(e,(function(e,r,i,o){var s=r+"-"+i;return e&&(t[s]=0),void 0!==o&&n.push({from:o,to:s}),s})),n.reverse(),n.forEach((function(e){void 0===t[e.from]?t[e.from]=1+t[e.to]:t[e.from]=Math.min(t[e.from],1+t[e.to])})),t}(o),a=[],c=[];Object.keys(s).forEach((function(e){s[e]>t&&a.push(e)})),Yi(o,(function(e,t,n,r,i){var o=t+"-"+n;"available"===i.status&&-1!==a.indexOf(o)&&c.push(o)})),r._doCompaction(e,c,n)}))})),mo.prototype.compact=zr("compact",(function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&ho(n)})),mo.prototype._compact=function(e,t){var n=this,r={return_docs:!1,last_seq:e.last_seq||0},i=[];n.changes(r).on("change",(function(e){i.push(n.compactDocument(e.id,0))})).on("complete",(function(e){var r=e.last_seq;Promise.all(i).then((function(){return Oi(n,"_local/compaction",(function(e){return(!e.last_seq||e.last_seq<r)&&(e.last_seq=r,e)}))})).then((function(){t(null,{ok:!0})})).catch(t)})).on("error",t)},mo.prototype.get=zr("get",(function(e,t,n){if("function"==typeof t&&(n=t,t={}),"string"!=typeof e)return n(mi(ri));if(ao(e)&&"function"==typeof this._getLocal)return this._getLocal(e,n);var r=[],i=this;function o(){var o=[],s=r.length;if(!s)return n(null,o);r.forEach((function(r){i.get(e,{rev:r,revs:t.revs,latest:t.latest,attachments:t.attachments,binary:t.binary},(function(e,t){if(e)o.push({missing:r});else{for(var i,a=0,c=o.length;a<c;a++)if(o[a].ok&&o[a].ok._rev===t._rev){i=!0;break}i||o.push({ok:t})}--s||n(null,o)}))}))}if(!t.open_revs)return this._get(e,t,(function(r,o){if(r)return r.docId=e,n(r);var s=o.doc,a=o.metadata,c=o.ctx;if(t.conflicts){var l=Wi(a);l.length&&(s._conflicts=l)}if(so(a,s._rev)&&(s._deleted=!0),t.revs||t.revs_info){for(var u=s._rev.split("-"),d=parseInt(u[0],10),p=u[1],f=Xi(a.rev_tree),h=null,m=0;m<f.length;m++){var _=f[m],g=_.ids.map((function(e){return e.id})).indexOf(p);(g===d-1||!h&&-1!==g)&&(h=_)}if(!h)return(r=new Error("invalid rev tree")).docId=e,n(r);var y=h.ids.map((function(e){return e.id})).indexOf(s._rev.split("-")[1])+1,v=h.ids.length-y;if(h.ids.splice(y,v),h.ids.reverse(),t.revs&&(s._revisions={start:h.pos+h.ids.length-1,ids:h.ids.map((function(e){return e.id}))}),t.revs_info){var b=h.pos+h.ids.length;s._revs_info=h.ids.map((function(e){return{rev:--b+"-"+e.id,status:e.opts.status}}))}}if(t.attachments&&s._attachments){var w=s._attachments,x=Object.keys(w).length;if(0===x)return n(null,s);Object.keys(w).forEach((function(e){this._getAttachment(s._id,e,w[e],{rev:s._rev,binary:t.binary,ctx:c},(function(t,r){var i=s._attachments[e];i.data=r,delete i.stub,delete i.length,--x||n(null,s)}))}),i)}else{if(s._attachments)for(var S in s._attachments)s._attachments.hasOwnProperty(S)&&(s._attachments[S].stub=!0);n(null,s)}}));if("all"===t.open_revs)this._getRevisionTree(e,(function(e,t){if(e)return n(e);r=Ki(t).map((function(e){return e.rev})),o()}));else{if(!Array.isArray(t.open_revs))return n(mi(si,"function_clause"));r=t.open_revs;for(var s=0;s<r.length;s++){var a=r[s];if("string"!=typeof a||!/^\d+-/.test(a))return n(mi(fi))}o()}})),mo.prototype.getAttachment=zr("getAttachment",(function(e,t,n,r){var i=this;n instanceof Function&&(r=n,n={}),this._get(e,n,(function(o,s){return o?r(o):s.doc._attachments&&s.doc._attachments[t]?(n.ctx=s.ctx,n.binary=!0,void i._getAttachment(e,t,s.doc._attachments[t],n,r)):r(mi(ti))}))})),mo.prototype.allDocs=zr("allDocs",(function(e,t){if("function"==typeof e&&(t=e,e={}),e.skip=void 0!==e.skip?e.skip:0,e.start_key&&(e.startkey=e.start_key),e.end_key&&(e.endkey=e.end_key),"keys"in e){if(!Array.isArray(e.keys))return t(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter((function(t){return t in e}))[0];if(n)return void t(mi(ci,"Query parameter `"+n+"` is not compatible with multi-get"));if(!bi(this)&&(function(e){var t="limit"in e?e.keys.slice(e.skip,e.limit+e.skip):e.skip>0?e.keys.slice(e.skip):e.keys;e.keys=t,e.skip=0,delete e.limit,e.descending&&(t.reverse(),e.descending=!1)}(e),0===e.keys.length))return this._allDocs({limit:0},t)}return this._allDocs(e,t)})),mo.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),(e=e||{}).return_docs="return_docs"in e?e.return_docs:!e.live,new co(this,e,t)},mo.prototype.close=zr("close",(function(e){return this._closed=!0,this.emit("closed"),this._close(e)})),mo.prototype.info=zr("info",(function(e){var t=this;this._info((function(n,r){if(n)return e(n);r.db_name=r.db_name||t.name,r.auto_compaction=!(!t.auto_compaction||bi(t)),r.adapter=t.adapter,e(null,r)}))})),mo.prototype.id=zr("id",(function(e){return this._id(e)})),mo.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},mo.prototype.bulkDocs=zr("bulkDocs",(function(e,t,n){if("function"==typeof t&&(n=t,t={}),t=t||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return n(mi(ei));for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return n(mi(di));var i;if(e.docs.forEach((function(e){e._attachments&&Object.keys(e._attachments).forEach((function(t){i=i||function(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}(t),e._attachments[t].content_type||Kr("warn","Attachment",t,"on document",e._id,"is missing content_type")}))})),i)return n(mi(ui,i));"new_edits"in t||(t.new_edits=!("new_edits"in e)||e.new_edits);var o=this;t.new_edits||bi(o)||e.docs.sort(fo),function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),i=0;i<r.length;i++){var o=r[i];n._attachments[o]=Fr(n._attachments[o],["data","digest","content_type","length","revpos","stub"])}}}(e.docs);var s=e.docs.map((function(e){return e._id}));return this._bulkDocs(e,t,(function(e,r){if(e)return n(e);if(t.new_edits||(r=r.filter((function(e){return e.error}))),!bi(o))for(var i=0,a=r.length;i<a;i++)r[i].id=r[i].id||s[i];n(null,r)}))})),mo.prototype.registerDependentDatabase=zr("registerDependentDatabase",(function(e,t){var n=new this.constructor(e,this.__opts);Oi(this,"_local/_pouch_dependentDbs",(function(t){return t.dependentDbs=t.dependentDbs||{},!t.dependentDbs[e]&&(t.dependentDbs[e]=!0,t)})).then((function(){t(null,{db:n})})).catch(t)})),mo.prototype.destroy=zr("destroy",(function(e,t){"function"==typeof e&&(t=e,e={});var n=this,r=!("use_prefix"in n)||n.use_prefix;function i(){n._destroy(e,(function(e,r){if(e)return t(e);n._destroyed=!0,n.emit("destroyed"),t(null,r||{ok:!0})}))}if(bi(n))return i();n.get("_local/_pouch_dependentDbs",(function(e,o){if(e)return 404!==e.status?t(e):i();var s=o.dependentDbs,a=n.constructor,c=Object.keys(s).map((function(e){var t=r?e.replace(new RegExp("^"+a.prefix),""):e;return new a(t,n.__opts).destroy()}));Promise.all(c).then(i,t)}))})),_o.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},_o.prototype.fail=function(e){this.failed=e,this.execute()},_o.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},_o.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},yr(go,mo);var yo="undefined"!=typeof AbortController?AbortController:function(){return{abort:function(){}}},vo=fetch,bo=Headers;go.adapters={},go.preferredAdapters=[],go.prefix="_pouch_";var wo=new br;!function(e){Object.keys(br.prototype).forEach((function(t){"function"==typeof br.prototype[t]&&(e[t]=wo[t].bind(wo))}));var t=e._destructionListeners=new gr;e.on("ref",(function(e){t.has(e.name)||t.set(e.name,[]),t.get(e.name).push(e)})),e.on("unref",(function(e){if(t.has(e.name)){var n=t.get(e.name),r=n.indexOf(e);r<0||(n.splice(r,1),n.length>1?t.set(e.name,n):t.delete(e.name))}})),e.on("destroyed",(function(e){if(t.has(e)){var n=t.get(e);t.delete(e),n.forEach((function(e){e.emit("destroyed",!0)}))}}))}(go),go.adapter=function(e,t,n){t.valid()&&(go.adapters[e]=t,n&&go.preferredAdapters.push(e))},go.plugin=function(e){if("function"==typeof e)e(go);else{if("object"!=typeof e||0===Object.keys(e).length)throw new Error('Invalid plugin: got "'+e+'", expected an object or a function');Object.keys(e).forEach((function(t){go.prototype[t]=e[t]}))}return this.__defaults&&(go.__defaults=Qr({},this.__defaults)),go},go.defaults=function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);n=n||{},e&&"object"==typeof e&&(e=(n=e).name,delete n.name),n=Qr({},t.__defaults,n),go.call(this,e,n)}return yr(t,go),t.preferredAdapters=go.preferredAdapters.slice(),Object.keys(go).forEach((function(e){e in t||(t[e]=go[e])})),t.__defaults=Qr({},this.__defaults,e),t},go.fetch=function(e,t){return vo(e,t)};function xo(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n}function So(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r];"."===o?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=o}return t.push(n),t}var Co=["$or","$nor","$not"];function ko(e){return Co.indexOf(e)>-1}function Po(e){return Object.keys(e)[0]}function Eo(e){var t={};return e.forEach((function(e){Object.keys(e).forEach((function(n){var r=e[n];if("object"!=typeof r&&(r={$eq:r}),ko(n))t[n]=r instanceof Array?r.map((function(e){return Eo([e])})):Eo([r]);else{var i=t[n]=t[n]||{};Object.keys(r).forEach((function(e){var t=r[e];return"$gt"===e||"$gte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t}(e,t,i):"$lt"===e||"$lte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t}(e,t,i):"$ne"===e?function(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}(t,i):"$eq"===e?function(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}(t,i):void(i[e]=t)}))}}))})),t}function Ao(e){for(var t in e){if(Array.isArray(e))for(var n in e)e[n].$and&&(e[n]=Eo(e[n].$and));var r=e[t];"object"==typeof r&&Ao(r)}return e}function Oo(e,t){for(var n in e){"$and"===n&&(t=!0);var r=e[n];"object"==typeof r&&(t=Oo(r,t))}return t}function To(e){var t=Mr(e),n=!1;Oo(t,!1)&&("$and"in(t=Ao(t))&&(t=Eo(t.$and)),n=!0),["$or","$nor"].forEach((function(e){e in t&&t[e].forEach((function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],i=e[r];"object"==typeof i&&null!==i||(e[r]={$eq:i})}}))})),"$not"in t&&(t.$not=Eo([t.$not]));for(var r=Object.keys(t),i=0;i<r.length;i++){var o=r[i],s=t[o];"object"!=typeof s||null===s?s={$eq:s}:"$ne"in s&&!n&&(s.$ne=[s.$ne]),t[o]=s}return t}var $o=-324;function No(e,t){if(e===t)return 0;e=Io(e),t=Io(t);var n=Mo(e),r=Mo(t);if(n-r!=0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return function(e,t){return e===t?0:e>t?1:-1}(e,t)}return Array.isArray(e)?function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=No(e[r],t[r]);if(0!==i)return i}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var n=Object.keys(e),r=Object.keys(t),i=Math.min(n.length,r.length),o=0;o<i;o++){var s=No(n[o],r[o]);if(0!==s)return s;if(0!==(s=No(e[n[o]],t[r[o]])))return s}return n.length===r.length?0:n.length>r.length?1:-1}(e,t)}function Io(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=Io(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e)for(var i in e={},t)if(t.hasOwnProperty(i)){var o=t[i];void 0!==o&&(e[i]=Io(o))}}}return e}function Ro(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return function(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,i=r?"0":"2",o=(s=((r?-n:n)-$o).toString(),a="0",c=3,function(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t;return r}(s,a,c)+s);var s,a,c;i+=""+o;var l=Math.abs(parseFloat(t[0]));r&&(l=10-l);var u=l.toFixed(20);return u=u.replace(/\.?0+$/,""),i+=""+u}(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,i=n.length,o="";if(t)for(;++r<i;)o+=Do(n[r]);else for(;++r<i;){var s=n[r];o+=Do(s)+Do(e[s])}return o}return""}function Do(e){return Mo(e=Io(e))+""+Ro(e)+"\0"}function Lo(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var i="0"===e[t];t++;var o="",s=e.substring(t,t+3),a=parseInt(s,10)+$o;for(i&&(a=-a),t+=3;;){var c=e[t];if("\0"===c)break;o+=c,t++}n=1===(o=o.split(".")).length?parseInt(o,10):parseFloat(o[0]+"."+o[1]),i&&(n-=10),0!==a&&(n=parseFloat(n+"e"+a))}return{num:n,length:t-r}}function jo(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(n);else if(o===e.length-2){i[e.pop()]=n}else e.push(n)}}function Mo(e){var t=["boolean","number","string","object"].indexOf(typeof e);return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}function qo(e,t,n){if(e=e.filter((function(e){return Bo(e.doc,t.selector,n)})),t.sort){var r=function(e){function t(t){return e.map((function(e){var n=So(Po(e));return xo(t,n)}))}return function(e,n){var r,i,o=No(t(e.doc),t(n.doc));return 0!==o?o:(r=e.doc._id)<(i=n.doc._id)?-1:r>i?1:0}}(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===(i=t.sort[0])[Po(i)]&&(e=e.reverse())}var i;if("limit"in t||"skip"in t){var o=t.skip||0,s=("limit"in t?t.limit:e.length)+o;e=e.slice(o,s)}return e}function Bo(e,t,n){return n.every((function(n){var r=t[n],i=So(n),o=xo(e,i);return ko(n)?function(e,t,n){if("$or"===e)return t.some((function(e){return Bo(n,e,Object.keys(e))}));if("$not"===e)return!Bo(n,t,Object.keys(t));return!t.find((function(e){return Bo(n,e,Object.keys(e))}))}(n,r,e):zo(r,e,i,o)}))}function zo(e,t,n,r){return!e||("object"==typeof e?Object.keys(e).every((function(i){var o=e[i];return function(e,t,n,r,i){if(!Vo[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');return Vo[e](t,n,r,i)}(i,t,o,n,r)})):e===r)}function Fo(e){return null!=e}function Ho(e){return void 0!==e}function Uo(e,t){return t.some((function(t){return e instanceof Array?e.indexOf(t)>-1:e===t}))}var Vo={$elemMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.some((function(e){return Bo(e,t,Object.keys(t))})):r.some((function(r){return zo(t,e,n,r)}))))},$allMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.every((function(e){return Bo(e,t,Object.keys(t))})):r.every((function(r){return zo(t,e,n,r)}))))},$eq:function(e,t,n,r){return Ho(r)&&0===No(r,t)},$gte:function(e,t,n,r){return Ho(r)&&No(r,t)>=0},$gt:function(e,t,n,r){return Ho(r)&&No(r,t)>0},$lte:function(e,t,n,r){return Ho(r)&&No(r,t)<=0},$lt:function(e,t,n,r){return Ho(r)&&No(r,t)<0},$exists:function(e,t,n,r){return t?Ho(r):!Ho(r)},$mod:function(e,t,n,r){return Fo(r)&&function(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every((function(e){return 0!==No(r,e)}))},$in:function(e,t,n,r){return Fo(r)&&Uo(r,t)},$nin:function(e,t,n,r){return Fo(r)&&!Uo(r,t)},$size:function(e,t,n,r){return Fo(r)&&function(e,t){return e.length===t}(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&function(e,t){return t.every((function(t){return e.indexOf(t)>-1}))}(r,t)},$regex:function(e,t,n,r){return Fo(r)&&function(e,t){return new RegExp(t).test(e)}(r,t)},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}};function Jo(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function Yo(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=xi(e.view):e.filter=xi(e.filter))}function Go(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!bi(e.db)}function Ko(e,t){var n=t.complete;if("_view"===t.filter){if(!t.view||"string"!=typeof t.view){var r=mi(ui,"`view` filter parameter not found or invalid.");return n(r)}var i=wi(t.view);e.db.get("_design/"+i[0],(function(r,o){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(_i(r));var s=o&&o.views&&o.views[i[1]]&&o.views[i[1]].map;if(!s)return n(mi(ti,o.views?"missing json key: "+i[1]:"missing json key: views"));t.filter=Ai(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+s+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{}),e.doChanges(t)}))}else if(t.selector)t.filter=function(e){return function(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");var n=qo([{doc:e}],{selector:t=To(t)},Object.keys(t));return n&&1===n.length}(e,t.selector)},e.doChanges(t);else{var o=wi(t.filter);e.db.get("_design/"+o[0],(function(r,i){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(_i(r));var s=i&&i.filters&&i.filters[o[1]];if(!s)return n(mi(ti,i&&i.filters?"missing json key: "+o[1]:"missing json key: filters"));t.filter=Ai('"use strict";\nreturn '+s+";",{}),e.doChanges(t)}))}}function Wo(e){return e.reduce((function(e,t){return e[t]=!0,e}),{})}go.plugin((function(e){e._changesFilterPlugin={validate:Jo,normalize:Yo,shouldFilter:Go,filter:Ko}})),go.version="7.1.1";var Xo=Wo(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),Qo=Wo(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]);function Zo(e){if(!/^\d+-./.test(e))return mi(fi);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function es(e,t,n){var r,i,o;n||(n={deterministic_revs:!0});var s={status:"available"};if(e._deleted&&(s.deleted=!0),t)if(e._id||(e._id=Vi()),i=Ui(e,n.deterministic_revs),e._rev){if((o=Zo(e._rev)).error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[i,s,[]]]]}],r=o.prefix+1}else e._rev_tree=[{pos:1,ids:[i,s,[]]}],r=1;else if(e._revisions&&(e._rev_tree=function(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,i=[r[0],t,[]],o=1,s=r.length;o<s;o++)i=[r[o],{status:"missing"},[i]];return[{pos:n,ids:i}]}(e._revisions,s),r=e._revisions.start,i=e._revisions.ids[0]),!e._rev_tree){if((o=Zo(e._rev)).error)return o;r=o.prefix,i=o.id,e._rev_tree=[{pos:r,ids:[i,s,[]]}]}vi(e._id),e._rev=r+"-"+i;var a={metadata:{},data:{}};for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var l="_"===c[0];if(l&&!Xo[c]){var u=mi(li,c);throw u.message=li.message+": "+c,u}l&&!Qo[c]?a.metadata[c.slice(1)]=e[c]:a.data[c]=e[c]}return a}function ts(e,t,n){var r=function(e){try{return Ti(e)}catch(e){return{error:mi(ai,"Attachment is not a valid base64 string")}}}(e.data);if(r.error)return n(r.error);e.length=r.length,e.data="blob"===t?Ri(r,e.content_type):"base64"===t?$i(r):r,Fi(r,(function(t){e.digest="md5-"+t,n()}))}function ns(e,t,n){if(e.stub)return n();"string"==typeof e.data?ts(e,t,n):function(e,t,n){Fi(e.data,(function(r){e.digest="md5-"+r,e.length=e.data.size||e.data.length||0,"binary"===t?ji(e.data,(function(t){e.data=t,n()})):"base64"===t?Mi(e.data,(function(t){e.data=t,n()})):n()}))}(e,t,n)}function rs(e,t,n,r,i,o,s,a){if(function(e,t){for(var n,r=e.slice(),i=t.split("-"),o=parseInt(i[0],10),s=i[1];n=r.pop();){if(n.pos===o&&n.ids[0]===s)return!0;for(var a=n.ids[2],c=0,l=a.length;c<l;c++)r.push({pos:n.pos+1,ids:a[c]})}return!1}(t.rev_tree,n.metadata.rev)&&!a)return r[i]=n,o();var c=t.winningRev||Ji(t),l="deleted"in t?t.deleted:so(t,c),u="deleted"in n.metadata?n.metadata.deleted:so(n.metadata),d=/^1-/.test(n.metadata.rev);if(l&&!u&&a&&d){var p=n.data;p._rev=c,p._id=n.metadata.id,n=es(p,a)}var f=io(t.rev_tree,n.metadata.rev_tree[0],e);if(a&&(l&&u&&"new_leaf"!==f.conflicts||!l&&"new_leaf"!==f.conflicts||l&&!u&&"new_branch"===f.conflicts)){var h=mi(ni);return r[i]=h,o()}var m=n.metadata.rev;n.metadata.rev_tree=f.tree,n.stemmedRevs=f.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var _=Ji(n.metadata),g=so(n.metadata,_),y=l===g?0:l<g?-1:1;s(n,_,g,m===_?g:so(n.metadata,m),!0,y,i,o)}function is(e,t,n,r,i,o,s,a,c){e=e||1e3;var l=a.new_edits,u=new gr,d=0,p=t.length;function f(){++d===p&&c&&c()}t.forEach((function(e,t){if(e._id&&ao(e._id)){var r=e._deleted?"_removeLocal":"_putLocal";n[r](e,{ctx:i},(function(e,n){o[t]=e||n,f()}))}else{var s=e.metadata.id;u.has(s)?(p--,u.get(s).push([e,t])):u.set(s,[[e,t]])}})),u.forEach((function(t,n){var i=0;function c(){++i<t.length?u():f()}function u(){var u=t[i],d=u[0],p=u[1];if(r.has(n))rs(e,r.get(n),d,o,p,c,s,l);else{var f=io([],d.metadata.rev_tree[0],e);d.metadata.rev_tree=f.tree,d.stemmedRevs=f.stemmedRevs||[],function(e,t,n){var r=Ji(e.metadata),i=so(e.metadata,r);if("was_delete"in a&&i)return o[t]=mi(ti,"deleted"),n();if(l&&function(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}(e)){var c=mi(ni);return o[t]=c,n()}s(e,r,i,i,!1,i?0:1,t,n)}(d,p,c)}}u()}))}var os="document-store",ss="by-sequence",as="attach-store",cs="attach-seq-store",ls="meta-store",us="local-store",ds="detect-blob-support";function ps(e){try{return JSON.stringify(e)}catch(t){return fr(e)}}function fs(e){return function(t){var n="unknown_error";t.target&&t.target.error&&(n=t.target.error.name||t.target.error.message),e(mi(pi,n,t.type))}}function hs(e,t,n){return{data:ps(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function ms(e){if(!e)return null;var t=function(e){try{return JSON.parse(e)}catch(t){return hr(e)}}(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function _s(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function gs(e,t,n,r){n?r(e?"string"!=typeof e?e:Di(e,t):Ni([""],{type:t})):e?"string"!=typeof e?Li(e,(function(e){r($i(e))})):r(e):r("")}function ys(e,t,n,r){var i=Object.keys(e._attachments||{});if(!i.length)return r&&r();var o=0;function s(){++o===i.length&&r&&r()}i.forEach((function(r){t.attachments&&t.include_docs?function(e,t){var r=e._attachments[t],i=r.digest;n.objectStore(as).get(i).onsuccess=function(e){r.body=e.target.result.body,s()}}(e,r):(e._attachments[r].stub=!0,s())}))}function vs(e,t){return Promise.all(e.map((function(e){if(e.doc&&e.doc._attachments){var n=Object.keys(e.doc._attachments);return Promise.all(n.map((function(n){var r=e.doc._attachments[n];if("body"in r){var i=r.body,o=r.content_type;return new Promise((function(s){gs(i,o,t,(function(t){e.doc._attachments[n]=Qr(Fr(r,["digest","content_type"]),{data:t}),s()}))}))}})))}})))}function bs(e,t,n){var r=[],i=n.objectStore(ss),o=n.objectStore(as),s=n.objectStore(cs),a=e.length;function c(){--a||function(){if(!r.length)return;r.forEach((function(e){s.index("digestSeq").count(IDBKeyRange.bound(e+"::",e+"::￿",!1,!1)).onsuccess=function(t){t.target.result||o.delete(e)}}))}()}e.forEach((function(e){var n=i.index("_doc_id_rev"),o=t+"::"+e;n.getKey(o).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return c();i.delete(t),s.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];r.push(n),s.delete(t.primaryKey),t.continue()}else c()}}}))}function ws(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}var xs=new Gr;function Ss(e,t,n,r,i,o){for(var s,a,c,l,u,d,p,f,h=t.docs,m=0,_=h.length;m<_;m++){var g=h[m];g._id&&ao(g._id)||(g=h[m]=es(g,n.new_edits,e)).error&&!p&&(p=g)}if(p)return o(p);var y=!1,v=0,b=new Array(h.length),w=new gr,x=!1,S=r._meta.blobSupport?"blob":"base64";function C(){y=!0,k()}function k(){f&&y&&(f.docCount+=v,d.put(f))}function P(){x||(xs.notify(r._meta.name),o(null,b))}function E(e,t,n,r,i,o,s,a){e.metadata.winningRev=t,e.metadata.deleted=n;var c=e.data;if(c._id=e.metadata.id,c._rev=e.metadata.rev,r&&(c._deleted=!0),c._attachments&&Object.keys(c._attachments).length)return function(e,t,n,r,i,o){var s=e.data,a=0,c=Object.keys(s._attachments);function u(){a===c.length&&A(e,t,n,r,i,o)}function d(){a++,u()}c.forEach((function(n){var r=e.data._attachments[n];if(r.stub)a++,u();else{var i=r.data;delete r.data,r.revpos=parseInt(t,10),function(e,t,n){l.count(e).onsuccess=function(r){if(r.target.result)return n();var i={digest:e,body:t};l.put(i).onsuccess=n}}(r.digest,i,d)}}))}(e,t,n,i,s,a);v+=o,k(),A(e,t,n,i,s,a)}function A(e,t,n,i,o,l){var d=e.data,p=e.metadata;function f(o){var c=e.stemmedRevs||[];i&&r.auto_compaction&&(c=c.concat(function(e){var t=[];return Yi(e.rev_tree,(function(e,n,r,i,o){"available"!==o.status||e||(t.push(n+"-"+r),o.status="missing")})),t}(e.metadata))),c&&c.length&&bs(c,e.metadata.id,s),p.seq=o.target.result;var l=hs(p,t,n);a.put(l).onsuccess=h}function h(){b[o]={ok:!0,id:p.id,rev:p.rev},w.set(e.metadata.id,e.metadata),function(e,t,n){var r=0,i=Object.keys(e.data._attachments||{});if(!i.length)return n();function o(){++r===i.length&&n()}function s(n){var r=e.data._attachments[n].digest,i=u.put({seq:t,digestSeq:r+"::"+t});i.onsuccess=o,i.onerror=function(e){e.preventDefault(),e.stopPropagation(),o()}}for(var a=0;a<i.length;a++)s(i[a])}(e,p.seq,l)}d._doc_id_rev=p.id+"::"+p.rev,delete d._id,delete d._rev;var m=c.put(d);m.onsuccess=f,m.onerror=function(e){e.preventDefault(),e.stopPropagation(),c.index("_doc_id_rev").getKey(d._doc_id_rev).onsuccess=function(e){c.put(d,e.target.result).onsuccess=f}}}!function(e,t,n){if(!e.length)return n();var r,i=0;function o(){i++,e.length===i&&(r?n(r):n())}e.forEach((function(e){var n=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],i=0;if(!n.length)return o();function s(e){r=e,++i===n.length&&o()}for(var a in e.data._attachments)e.data._attachments.hasOwnProperty(a)&&ns(e.data._attachments[a],t,s)}))}(h,S,(function(t){if(t)return o(t);!function(){var t=ws(i,[os,ss,as,us,cs,ls],"readwrite");if(t.error)return o(t.error);(s=t.txn).onabort=fs(o),s.ontimeout=fs(o),s.oncomplete=P,a=s.objectStore(os),c=s.objectStore(ss),l=s.objectStore(as),u=s.objectStore(cs),(d=s.objectStore(ls)).get(ls).onsuccess=function(e){f=e.target.result,k()},function(e){var t=[];if(h.forEach((function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach((function(n){var r=e.data._attachments[n];r.stub&&t.push(r.digest)}))})),!t.length)return e();var n,r=0;function i(){++r===t.length&&e(n)}t.forEach((function(e){!function(e,t){l.get(e).onsuccess=function(n){if(n.target.result)t();else{var r=mi(hi,"unknown stub attachment with digest "+e);r.status=412,t(r)}}}(e,(function(e){e&&!n&&(n=e),i()}))}))}((function(t){if(t)return x=!0,o(t);!function(){if(!h.length)return;var t=0;function i(){++t===h.length&&is(e.revs_limit,h,r,w,s,b,E,n,C)}function o(e){var t=ms(e.target.result);t&&w.set(t.id,t),i()}for(var c=0,l=h.length;c<l;c++){var u=h[c];if(u._id&&ao(u._id))i();else a.get(u.metadata.id).onsuccess=o}}()}))}()}))}function Cs(e,t,n,r,i){var o,s,a;function c(e){s=e.target.result,o&&i(o,s,a)}function l(e){o=e.target.result,s&&i(o,s,a)}function u(e){var t=e.target.result;if(!t)return i();i([t.key],[t.value],t)}-1===r&&(r=1e3),"function"==typeof e.getAll&&"function"==typeof e.getAllKeys&&r>1&&!n?(a={continue:function(){if(!o.length)return i();var n,a=o[o.length-1];if(t&&t.upper)try{n=IDBKeyRange.bound(a,t.upper,!0,t.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return i()}else n=IDBKeyRange.lowerBound(a,!0);t=n,o=null,s=null,e.getAll(t,r).onsuccess=c,e.getAllKeys(t,r).onsuccess=l}},e.getAll(t,r).onsuccess=c,e.getAllKeys(t,r).onsuccess=l):n?e.openCursor(t,"prev").onsuccess=u:e.openCursor(t).onsuccess=u}function ks(e,t,n){var r,i,o="startkey"in e&&e.startkey,s="endkey"in e&&e.endkey,a="key"in e&&e.key,c="keys"in e&&e.keys,l=e.skip||0,u="number"==typeof e.limit?e.limit:-1,d=!1!==e.inclusive_end;if(!c&&(i=(r=function(e,t,n,r,i){try{if(e&&t)return i?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return i?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return i?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}(o,s,d,a,e.descending))&&r.error)&&("DataError"!==i.name||0!==i.code))return n(mi(pi,i.name,i.message));var p=[os,ss,ls];e.attachments&&p.push(as);var f=ws(t,p,"readonly");if(f.error)return n(f.error);var h=f.txn;h.oncomplete=function(){e.attachments?vs(w,e.binary).then(k):k()},h.onabort=fs(n);var m,_,g=h.objectStore(os),y=h.objectStore(ss),v=h.objectStore(ls),b=y.index("_doc_id_rev"),w=[];function x(t,n){var r={id:n.id,key:n.id,value:{rev:t}};n.deleted?c&&(w.push(r),r.value.deleted=!0,r.doc=null):l--<=0&&(w.push(r),e.include_docs&&function(t,n,r){var i=t.id+"::"+r;b.get(i).onsuccess=function(r){if(n.doc=_s(r.target.result)||{},e.conflicts){var i=Wi(t);i.length&&(n.doc._conflicts=i)}ys(n.doc,e,h)}}(n,r,t))}function S(e){for(var t=0,n=e.length;t<n&&w.length!==u;t++){var r=e[t];if(r.error&&c)w.push(r);else{var i=ms(r);x(i.winningRev,i)}}}function C(e,t,n){n&&(S(t),w.length<u&&n.continue())}function k(){var t={total_rows:m,offset:e.skip,rows:w};e.update_seq&&void 0!==_&&(t.update_seq=_),n(null,t)}return v.get(ls).onsuccess=function(e){m=e.target.result.docCount},e.update_seq&&function(e,t){function n(e){var n=e.target.result,r=void 0;return n&&n.key&&(r=n.key),t({target:{result:[r]}})}e.openCursor(null,"prev").onsuccess=n}(y,(function(e){e.target.result&&e.target.result.length>0&&(_=e.target.result[0])})),i||0===u?void 0:c?function(e,t,n){var r=new Array(e.length),i=0;e.forEach((function(o,s){t.get(o).onsuccess=function(t){t.target.result?r[s]=t.target.result:r[s]={key:o,error:"not_found"},++i===e.length&&n(e,r,{})}}))}(e.keys,g,C):-1===u?function(e,t,n){if("function"!=typeof e.getAll){var r=[];e.openCursor(t).onsuccess=function(e){var t=e.target.result;t?(r.push(t.value),t.continue()):n({target:{result:r}})}}else e.getAll(t).onsuccess=n}(g,r,(function(t){var n=t.target.result;e.descending&&(n=n.reverse()),S(n)})):void Cs(g,r,e.descending,u+l,C)}var Ps=!1,Es=[];function As(){!Ps&&Es.length&&(Ps=!0,Es.shift()())}function Os(e,t,n,r){if((e=Mr(e)).continuous){var i=n+":"+Vi();return xs.addListener(n,i,t,e),xs.notify(n),{cancel:function(){xs.removeListener(n,i)}}}var o=e.doc_ids&&new _r(e.doc_ids);e.since=e.since||0;var s=e.since,a="limit"in e?e.limit:-1;0===a&&(a=1);var c,l,u,d,p=[],f=0,h=gi(e),m=new gr;function _(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var i=e._id+"::"+n.winningRev;d.get(i).onsuccess=function(e){r(n,_s(e.target.result))}}function g(){e.complete(null,{results:p,last_seq:s})}var y=[os,ss];e.attachments&&y.push(as);var v=ws(r,y,"readonly");if(v.error)return e.complete(v.error);(c=v.txn).onabort=fs(e.complete),c.oncomplete=function(){!e.continuous&&e.attachments?vs(p).then(g):g()},l=c.objectStore(ss),u=c.objectStore(os),d=l.index("_doc_id_rev"),Cs(l,e.since&&!e.descending?IDBKeyRange.lowerBound(e.since,!0):null,e.descending,a,(function(t,n,r){if(r&&t.length){var i=new Array(t.length),l=new Array(t.length),d=0;n.forEach((function(n,s){!function(e,t,n){if(o&&!o.has(e._id))return n();var r=m.get(e._id);if(r)return _(e,t,r,n);u.get(e._id).onsuccess=function(i){r=ms(i.target.result),m.set(e._id,r),_(e,t,r,n)}}(_s(n),t[s],(function(n,o){l[s]=n,i[s]=o,++d===t.length&&function(){for(var t=[],n=0,o=i.length;n<o&&f!==a;n++){var s=i[n];if(s){var c=l[n];t.push(g(c,s))}}Promise.all(t).then((function(t){for(var n=0,r=t.length;n<r;n++)t[n]&&e.onChange(t[n])})).catch(e.complete),f!==a&&r.continue()}()}))}))}function g(t,n){var r=e.processChange(n,t,e);s=r.seq=t.seq;var i=h(r);return"object"==typeof i?Promise.reject(i):i?(f++,e.return_docs&&p.push(r),e.attachments&&e.include_docs?new Promise((function(t){ys(n,e,c,(function(){vs([r],e.binary).then((function(){t(r)}))}))})):Promise.resolve(r)):Promise.resolve()}}))}var Ts,$s=new gr,Ns=new gr;function Is(e,t){var n=this;!function(e,t,n){Es.push((function(){e((function(e,r){!function(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}(t,e,r,n),Ps=!1,Qn((function(){As()}))}))})),As()}((function(t){!function(e,t,n){var r=t.name,i=null;function o(e){var t=e.createObjectStore(os,{keyPath:"id"});e.createObjectStore(ss,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(as,{keyPath:"digest"}),e.createObjectStore(ls,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(ds),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(us,{keyPath:"_id"});var n=e.createObjectStore(cs,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}function s(e,t){var n=e.objectStore(os);n.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),n.openCursor().onsuccess=function(e){var r=e.target.result;if(r){var i=r.value,o=so(i);i.deletedOrLocal=o?"1":"0",n.put(i),r.continue()}else t()}}function a(e){e.createObjectStore(us,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}function c(e,t){var n=e.objectStore(us),r=e.objectStore(os),i=e.objectStore(ss);r.openCursor().onsuccess=function(e){var o=e.target.result;if(o){var s=o.value,a=s.id,c=ao(a),l=Ji(s);if(c){var u=a+"::"+l,d=a+"::",p=a+"::~",f=i.index("_doc_id_rev"),h=IDBKeyRange.bound(d,p,!1,!1),m=f.openCursor(h);m.onsuccess=function(e){if(m=e.target.result){var t=m.value;t._doc_id_rev===u&&n.put(t),i.delete(m.primaryKey),m.continue()}else r.delete(o.primaryKey),o.continue()}}else o.continue()}else t&&t()}}function l(e){var t=e.createObjectStore(cs,{autoIncrement:!0});t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}function u(e,t){var n=e.objectStore(ss),r=e.objectStore(as),i=e.objectStore(cs);r.count().onsuccess=function(e){if(!e.target.result)return t();n.openCursor().onsuccess=function(e){var n=e.target.result;if(!n)return t();for(var r=n.value,o=n.primaryKey,s=Object.keys(r._attachments||{}),a={},c=0;c<s.length;c++){a[r._attachments[s[c]].digest]=!0}var l=Object.keys(a);for(c=0;c<l.length;c++){var u=l[c];i.put({seq:o,digestSeq:u+"::"+o})}n.continue()}}}function d(e){function t(e){return e.data?ms(e):(e.deleted="1"===e.deletedOrLocal,e)}var n=e.objectStore(ss),r=e.objectStore(os);r.openCursor().onsuccess=function(e){var i=e.target.result;if(i){var o=t(i.value);if(o.winningRev=o.winningRev||Ji(o),o.seq)return a();s()}function s(){var e=o.id+"::",t=o.id+"::￿",r=n.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e,t)),i=0;r.onsuccess=function(e){var t=e.target.result;if(!t)return o.seq=i,a();var n=t.primaryKey;n>i&&(i=n),t.continue()}}function a(){var e=hs(o,o.winningRev,o.deleted);r.put(e).onsuccess=function(){i.continue()}}}}e._meta=null,e._remote=!1,e.type=function(){return"idb"},e._id=Br((function(t){t(null,e._meta.instanceId)})),e._bulkDocs=function(n,r,o){Ss(t,n,r,e,i,o)},e._get=function(e,t,n){var r,o,s,a=t.ctx;if(!a){var c=ws(i,[os,ss,as],"readonly");if(c.error)return n(c.error);a=c.txn}function l(){n(s,{doc:r,metadata:o,ctx:a})}a.objectStore(os).get(e).onsuccess=function(e){if(!(o=ms(e.target.result)))return s=mi(ti,"missing"),l();var n;if(t.rev)n=t.latest?function(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var i=n.pos,o=n.ids,s=o[0],a=o[1],c=o[2],l=0===c.length,u=n.history?n.history.slice():[];if(u.push({id:s,pos:i,opts:a}),l)for(var d=0,p=u.length;d<p;d++){var f=u[d];if(f.pos+"-"+f.id===e)return i+"-"+s}for(var h=0,m=c.length;h<m;h++)r.push({pos:i+1,ids:c[h],history:u})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}(t.rev,o):t.rev;else if(n=o.winningRev,so(o))return s=mi(ti,"deleted"),l();var i=a.objectStore(ss),c=o.id+"::"+n;i.index("_doc_id_rev").get(c).onsuccess=function(e){if((r=e.target.result)&&(r=_s(r)),!r)return s=mi(ti,"missing"),l();l()}}},e._getAttachment=function(e,t,n,r,o){var s;if(r.ctx)s=r.ctx;else{var a=ws(i,[os,ss,as],"readonly");if(a.error)return o(a.error);s=a.txn}var c=n.digest,l=n.content_type;s.objectStore(as).get(c).onsuccess=function(e){gs(e.target.result.body,l,r.binary,(function(e){o(null,e)}))}},e._info=function(t){var n,r,o=ws(i,[ls,ss],"readonly");if(o.error)return t(o.error);var s=o.txn;s.objectStore(ls).get(ls).onsuccess=function(e){r=e.target.result.docCount},s.objectStore(ss).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},s.oncomplete=function(){t(null,{doc_count:r,update_seq:n,idb_attachment_format:e._meta.blobSupport?"binary":"base64"})}},e._allDocs=function(e,t){ks(e,i,t)},e._changes=function(t){return Os(t,e,r,i)},e._close=function(e){i.close(),$s.delete(r),e()},e._getRevisionTree=function(e,t){var n=ws(i,[os],"readonly");if(n.error)return t(n.error);n.txn.objectStore(os).get(e).onsuccess=function(e){var n=ms(e.target.result);n?t(null,n.rev_tree):t(mi(ti))}},e._doCompaction=function(e,t,n){var r=ws(i,[os,ss,as,cs],"readwrite");if(r.error)return n(r.error);var o=r.txn;o.objectStore(os).get(e).onsuccess=function(n){var r=ms(n.target.result);Yi(r.rev_tree,(function(e,n,r,i,o){var s=n+"-"+r;-1!==t.indexOf(s)&&(o.status="missing")})),bs(t,e,o);var i=r.winningRev,s=r.deleted;o.objectStore(os).put(hs(r,i,s))},o.onabort=fs(n),o.oncomplete=function(){n()}},e._getLocal=function(e,t){var n=ws(i,[us],"readonly");if(n.error)return t(n.error);var r=n.txn.objectStore(us).get(e);r.onerror=fs(t),r.onsuccess=function(e){var n=e.target.result;n?(delete n._doc_id_rev,t(null,n)):t(mi(ti))}},e._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions;var r=e._rev,o=e._id;e._rev=r?"0-"+(parseInt(r.split("-")[1],10)+1):"0-1";var s,a=t.ctx;if(!a){var c=ws(i,[us],"readwrite");if(c.error)return n(c.error);(a=c.txn).onerror=fs(n),a.oncomplete=function(){s&&n(null,s)}}var l,u=a.objectStore(us);r?(l=u.get(o)).onsuccess=function(i){var o=i.target.result;o&&o._rev===r?u.put(e).onsuccess=function(){s={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,s)}:n(mi(ni))}:((l=u.add(e)).onerror=function(e){n(mi(ni)),e.preventDefault(),e.stopPropagation()},l.onsuccess=function(){s={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,s)})},e._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={});var r,o=t.ctx;if(!o){var s=ws(i,[us],"readwrite");if(s.error)return n(s.error);(o=s.txn).oncomplete=function(){r&&n(null,r)}}var a=e._id,c=o.objectStore(us),l=c.get(a);l.onerror=fs(n),l.onsuccess=function(i){var o=i.target.result;o&&o._rev===e._rev?(c.delete(a),r={ok:!0,id:a,rev:"0-0"},t.ctx&&n(null,r)):n(mi(ti))}},e._destroy=function(e,t){xs.removeAllListeners(r);var n=Ns.get(r);n&&n.result&&(n.result.close(),$s.delete(r));var i=indexedDB.deleteDatabase(r);i.onsuccess=function(){Ns.delete(r),Yr()&&r in localStorage&&delete localStorage[r],t(null,{ok:!0})},i.onerror=fs(t)};var p=$s.get(r);if(p)return i=p.idb,e._meta=p.global,Qn((function(){n(null,e)}));var f=indexedDB.open(r,5);Ns.set(r,f),f.onupgradeneeded=function(e){var t=e.target.result;if(e.oldVersion<1)return o(t);var n=e.currentTarget.transaction;e.oldVersion<3&&a(t),e.oldVersion<4&&l(t);var r=[s,c,u,d],i=e.oldVersion;function p(){var e=r[i-1];i++,e&&e(n,p)}p()},f.onsuccess=function(t){(i=t.target.result).onversionchange=function(){i.close(),$s.delete(r)},i.onabort=function(e){Kr("error","Database has a global failure",e.target.error),i.close(),$s.delete(r)};var o,s,a,c,l=i.transaction([ls,ds,os],"readwrite"),u=!1;function d(){void 0!==a&&u&&(e._meta={name:r,instanceId:c,blobSupport:a},$s.set(r,{idb:i,global:e._meta}),n(null,e))}function p(){if(void 0!==s&&void 0!==o){var e=r+"_id";e in o?c=o[e]:o[e]=c=Vi(),o.docCount=s,l.objectStore(ls).put(o)}}l.objectStore(ls).get(ls).onsuccess=function(e){o=e.target.result||{id:ls},p()},function(e,t){e.objectStore(os).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}(l,(function(e){s=e,p()})),Ts||(Ts=function(e){return new Promise((function(t){var n=Ni([""]),r=e.objectStore(ds).put(n,"key");r.onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)},r.onerror=e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)}})).catch((function(){return!1}))}(l)),Ts.then((function(e){a=e,d()})),l.oncomplete=function(){u=!0,d()},l.onabort=fs(n)},f.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";Kr("error",e),n(mi(pi,e))}}(n,e,t)}),t,n.constructor)}Is.valid=function(){try{return"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}};var Rs=5e3,Ds={};function Ls(e){var t=e.doc||e.ok,n=t&&t._attachments;n&&Object.keys(n).forEach((function(e){var t=n[e];t.data=Di(t.data,t.content_type)}))}function js(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function Ms(e){return e._attachments&&Object.keys(e._attachments)?Promise.all(Object.keys(e._attachments).map((function(t){var n=e._attachments[t];if(n.data&&"string"!=typeof n.data)return new Promise((function(e){Mi(n.data,e)})).then((function(e){n.data=e}))}))):Promise.resolve()}function qs(e,t){if(function(e){if(!e.prefix)return!1;var t=Ei(e.prefix).protocol;return"http"===t||"https"===t}(t)){var n=t.name.substr(t.prefix.length);e=t.prefix.replace(/\/?$/,"/")+encodeURIComponent(n)}var r=Ei(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var i=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=i.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=i.join("/"),r}function Bs(e,t){return zs(e,e.db+"/"+t)}function zs(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function Fs(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}function Hs(e,t){var n=this,r=qs(e.name,e),i=Bs(r,"");e=Mr(e);var o,s=function(t,n){if((n=n||{}).headers=n.headers||new bo,n.credentials="include",e.auth||r.auth){var i=e.auth||r.auth,o=i.username+":"+i.password,s=$i(unescape(encodeURIComponent(o)));n.headers.set("Authorization","Basic "+s)}var a=e.headers||{};return Object.keys(a).forEach((function(e){n.headers.append(e,a[e])})),function(e){var t="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",n=-1!==t.indexOf("msie"),r=-1!==t.indexOf("trident"),i=-1!==t.indexOf("edge"),o=!("method"in e)||"GET"===e.method;return(n||r||i)&&o}(n)&&(t+=(-1===t.indexOf("?")?"?":"&")+"_nonce="+Date.now()),(e.fetch||vo)(t,n)};function a(e,t){return zr(e,mr((function(e){l().then((function(){return t.apply(this,e)})).catch((function(t){e.pop()(t)}))}))).bind(n)}function c(e,t,n){var r={};return(t=t||{}).headers=t.headers||new bo,t.headers.get("Content-Type")||t.headers.set("Content-Type","application/json"),t.headers.get("Accept")||t.headers.set("Accept","application/json"),s(e,t).then((function(e){return r.ok=e.ok,r.status=e.status,e.json()})).then((function(e){if(r.data=e,!r.ok){r.data.status=r.status;var t=_i(r.data);if(n)return n(t);throw t}if(Array.isArray(r.data)&&(r.data=r.data.map((function(e){return e.error||e.missing?_i(e):e}))),!n)return r;n(null,r.data)}))}function l(){return e.skip_setup?Promise.resolve():o||((o=c(i).catch((function(e){return e&&e.status&&404===e.status?(Xr(404,"PouchDB is just detecting if the remote exists."),c(i,{method:"PUT"})):Promise.reject(e)})).catch((function(e){return!(!e||!e.status||412!==e.status)||Promise.reject(e)}))).catch((function(){o=null})),o)}function u(e){return e.split("/").map(encodeURIComponent).join("/")}Qn((function(){t(null,n)})),n._remote=!0,n.type=function(){return"http"},n.id=a("id",(function(e){s(zs(r,"")).then((function(e){return e.json()})).catch((function(){return{}})).then((function(t){var n=t&&t.uuid?t.uuid+r.db:Bs(r,"");e(null,n)}))})),n.compact=a("compact",(function(e,t){"function"==typeof e&&(t=e,e={}),e=Mr(e),c(Bs(r,"_compact"),{method:"POST"}).then((function(){!function r(){n.info((function(n,i){i&&!i.compact_running?t(null,{ok:!0}):setTimeout(r,e.interval||200)}))}()}))})),n.bulkGet=zr("bulkGet",(function(e,t){var n=this;function i(t){var n={};e.revs&&(n.revs=!0),e.attachments&&(n.attachments=!0),e.latest&&(n.latest=!0),c(Bs(r,"_bulk_get"+Fs(n)),{method:"POST",body:JSON.stringify({docs:e.docs})}).then((function(n){e.attachments&&e.binary&&n.data.results.forEach((function(e){e.docs.forEach(Ls)})),t(null,n.data)})).catch(t)}function o(){var r=Math.ceil(e.docs.length/50),i=0,o=new Array(r);function s(e){return function(n,s){o[e]=s.results,++i===r&&t(null,{results:yi(o)})}}for(var a=0;a<r;a++){var c=Fr(e,["revs","attachments","binary","latest"]);c.docs=e.docs.slice(50*a,Math.min(e.docs.length,50*(a+1))),Jr(n,c,s(a))}}var s=zs(r,""),a=Ds[s];"boolean"!=typeof a?i((function(e,n){e?(Ds[s]=!1,Xr(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),o()):(Ds[s]=!0,t(null,n))})):a?i(t):o()})),n._info=function(e){l().then((function(){return s(Bs(r,""))})).then((function(e){return e.json()})).then((function(t){t.host=Bs(r,""),e(null,t)})).catch(e)},n.fetch=function(e,t){return l().then((function(){var n="/"===e.substring(0,1)?zs(r,e.substring(1)):Bs(r,e);return s(n,t)}))},n.get=a("get",(function(e,t,n){"function"==typeof t&&(n=t,t={});var i={};function o(e){var n=e._attachments,i=n&&Object.keys(n);if(n&&i.length)return function(e,t){return new Promise((function(n,r){var i,o=0,s=0,a=0,c=e.length;function l(){++a===c?i?r(i):n():p()}function u(){o--,l()}function d(e){o--,i=i||e,l()}function p(){for(;o<t&&s<c;)o++,e[s++]().then(u,d)}p()}))}(i.map((function(i){return function(){return function(i){var o=n[i],a=js(e._id)+"/"+u(i)+"?rev="+e._rev;return s(Bs(r,a)).then((function(e){return e.blob()})).then((function(e){return t.binary?e:new Promise((function(t){Mi(e,t)}))})).then((function(e){delete o.stub,delete o.length,o.data=e}))}(i)}})),5)}(t=Mr(t)).revs&&(i.revs=!0),t.revs_info&&(i.revs_info=!0),t.latest&&(i.latest=!0),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),i.open_revs=t.open_revs),t.rev&&(i.rev=t.rev),t.conflicts&&(i.conflicts=t.conflicts),t.update_seq&&(i.update_seq=t.update_seq),e=js(e),c(Bs(r,e+Fs(i))).then((function(e){return Promise.resolve().then((function(){if(t.attachments)return n=e.data,Array.isArray(n)?Promise.all(n.map((function(e){if(e.ok)return o(e.ok)}))):o(n);var n})).then((function(){n(null,e.data)}))})).catch((function(t){t.docId=e,n(t)}))})),n.remove=a("remove",(function(e,t,n,i){var o;"string"==typeof t?(o={_id:e,_rev:t},"function"==typeof n&&(i=n,n={})):(o=e,"function"==typeof t?(i=t,n={}):(i=n,n=t));var s=o._rev||n.rev;c(Bs(r,js(o._id))+"?rev="+s,{method:"DELETE"},i).catch(i)})),n.getAttachment=a("getAttachment",(function(e,t,n,i){"function"==typeof n&&(i=n,n={});var o=n.rev?"?rev="+n.rev:"",a=Bs(r,js(e))+"/"+u(t)+o;s(a,{method:"GET"}).then((function(e){if(e.headers.get("content-type"),e.ok)return e.blob();throw e})).then((function(e){i(null,e)})).catch((function(e){i(e)}))})),n.removeAttachment=a("removeAttachment",(function(e,t,n,i){c(Bs(r,js(e)+"/"+u(t))+"?rev="+n,{method:"DELETE"},i).catch(i)})),n.putAttachment=a("putAttachment",(function(e,t,n,i,o,s){"function"==typeof o&&(s=o,o=i,i=n,n=null);var a=js(e)+"/"+u(t),l=Bs(r,a);if(n&&(l+="?rev="+n),"string"==typeof i){var d;try{d=Ti(i)}catch(e){return s(mi(ai,"Attachment is not a valid base64 string"))}i=d?Ri(d,o):""}c(l,{headers:new bo({"Content-Type":o}),method:"PUT",body:i},s).catch(s)})),n._bulkDocs=function(e,t,n){e.new_edits=t.new_edits,l().then((function(){return Promise.all(e.docs.map(Ms))})).then((function(){return c(Bs(r,"_bulk_docs"),{method:"POST",body:JSON.stringify(e)},n)})).catch(n)},n._put=function(e,t,n){l().then((function(){return Ms(e)})).then((function(){return c(Bs(r,js(e._id)),{method:"PUT",body:JSON.stringify(e)})})).then((function(e){n(null,e.data)})).catch((function(t){t.docId=e&&e._id,n(t)}))},n.allDocs=a("allDocs",(function(e,t){"function"==typeof e&&(t=e,e={});var n,i={},o="GET";(e=Mr(e)).conflicts&&(i.conflicts=!0),e.update_seq&&(i.update_seq=!0),e.descending&&(i.descending=!0),e.include_docs&&(i.include_docs=!0),e.attachments&&(i.attachments=!0),e.key&&(i.key=JSON.stringify(e.key)),e.start_key&&(e.startkey=e.start_key),e.startkey&&(i.startkey=JSON.stringify(e.startkey)),e.end_key&&(e.endkey=e.end_key),e.endkey&&(i.endkey=JSON.stringify(e.endkey)),void 0!==e.inclusive_end&&(i.inclusive_end=!!e.inclusive_end),void 0!==e.limit&&(i.limit=e.limit),void 0!==e.skip&&(i.skip=e.skip);var s=Fs(i);void 0!==e.keys&&(o="POST",n={keys:e.keys}),c(Bs(r,"_all_docs"+s),{method:o,body:JSON.stringify(n)}).then((function(n){e.include_docs&&e.attachments&&e.binary&&n.data.rows.forEach(Ls),t(null,n.data)})).catch(t)})),n._changes=function(e){var t="batch_size"in e?e.batch_size:25;(e=Mr(e)).continuous&&!("heartbeat"in e)&&(e.heartbeat=1e4);var n="timeout"in e?e.timeout:3e4;"timeout"in e&&e.timeout&&n-e.timeout<Rs&&(n=e.timeout+Rs),"heartbeat"in e&&e.heartbeat&&n-e.heartbeat<Rs&&(n=e.heartbeat+Rs);var i={};"timeout"in e&&e.timeout&&(i.timeout=e.timeout);var o=void 0!==e.limit&&e.limit,s=o;if(e.style&&(i.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(i.include_docs=!0),e.attachments&&(i.attachments=!0),e.continuous&&(i.feed="longpoll"),e.seq_interval&&(i.seq_interval=e.seq_interval),e.conflicts&&(i.conflicts=!0),e.descending&&(i.descending=!0),e.update_seq&&(i.update_seq=!0),"heartbeat"in e&&e.heartbeat&&(i.heartbeat=e.heartbeat),e.filter&&"string"==typeof e.filter&&(i.filter=e.filter),e.view&&"string"==typeof e.view&&(i.filter="_view",i.view=e.view),e.query_params&&"object"==typeof e.query_params)for(var a in e.query_params)e.query_params.hasOwnProperty(a)&&(i[a]=e.query_params[a]);var u,d="GET";e.doc_ids?(i.filter="_doc_ids",d="POST",u={doc_ids:e.doc_ids}):e.selector&&(i.filter="_selector",d="POST",u={selector:e.selector});var p,f=new yo,h=function(n,a){if(!e.aborted){i.since=n,"object"==typeof i.since&&(i.since=JSON.stringify(i.since)),e.descending?o&&(i.limit=s):i.limit=!o||s>t?t:s;var h=Bs(r,"_changes"+Fs(i)),m={signal:f.signal,method:d,body:JSON.stringify(u)};p=n,e.aborted||l().then((function(){return c(h,m,a)})).catch(a)}},m={results:[]},_=function(n,r){if(!e.aborted){var i=0;if(r&&r.results){i=r.results.length,m.last_seq=r.last_seq;var a=null,c=null;"number"==typeof r.pending&&(a=r.pending),"string"!=typeof m.last_seq&&"number"!=typeof m.last_seq||(c=m.last_seq);e.query_params,r.results=r.results.filter((function(t){s--;var n=gi(e)(t);return n&&(e.include_docs&&e.attachments&&e.binary&&Ls(t),e.return_docs&&m.results.push(t),e.onChange(t,a,c)),n}))}else if(n)return e.aborted=!0,void e.complete(n);r&&r.last_seq&&(p=r.last_seq);var l=o&&s<=0||r&&i<t||e.descending;(!e.continuous||o&&s<=0)&&l?e.complete(null,m):Qn((function(){h(p,_)}))}};return h(e.since||0,_),{cancel:function(){e.aborted=!0,f.abort()}}},n.revsDiff=a("revsDiff",(function(e,t,n){"function"==typeof t&&(n=t,t={}),c(Bs(r,"_revs_diff"),{method:"POST",body:JSON.stringify(e)},n).catch(n)})),n._close=function(e){e()},n._destroy=function(e,t){c(Bs(r,""),{method:"DELETE"}).then((function(e){t(null,e)})).catch((function(e){404===e.status?t(null,{ok:!0}):t(e)}))}}function Us(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Us)}catch(e){}}function Vs(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Vs)}catch(e){}}function Js(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Js)}catch(e){}}function Ys(e,t){return t&&e.then((function(e){Qn((function(){t(null,e)}))}),(function(e){Qn((function(){t(e)}))})),e}function Gs(e,t){return function(){var n=arguments,r=this;return e.add((function(){return t.apply(r,n)}))}}function Ks(e){var t=new _r(e),n=new Array(t.size),r=-1;return t.forEach((function(e){n[++r]=e})),n}function Ws(e){var t=new Array(e.size),n=-1;return e.forEach((function(e,r){t[++n]=r})),t}function Xs(e){return new Js("builtin "+e+" function requires map values to be numbers or number arrays")}function Qs(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];if("number"!=typeof i){if(!Array.isArray(i))throw Xs("_sum");t="number"==typeof t?[t]:t;for(var o=0,s=i.length;o<s;o++){var a=i[o];if("number"!=typeof a)throw Xs("_sum");void 0===t[o]?t.push(a):t[o]+=a}}else"number"==typeof t?t+=i:t[0]+=i}return t}Hs.valid=function(){return!0},yr(Us,Error),yr(Vs,Error),yr(Js,Error);var Zs=Kr.bind(null,"log"),ea=Array.isArray,ta=JSON.parse;function na(e,t){return Ai("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:Qs,log:Zs,isArray:ea,toJSON:ta})}function ra(){this.promise=new Promise((function(e){e()}))}function ia(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function oa(e,t,n,r,i,o){var s,a=function(e,t){return ia(e)+ia(t)+"undefined"}(n,r);if(!i&&(s=e._cachedViews=e._cachedViews||{})[a])return s[a];var c=e.info().then((function(c){var l=c.db_name+"-mrview-"+(i?"temp":Hi(a));return Oi(e,"_local/"+o,(function(e){e.views=e.views||{};var n=t;-1===n.indexOf("/")&&(n=t+"/"+t);var r=e.views[n]=e.views[n]||{};if(!r[l])return r[l]=!0,e})).then((function(){return e.registerDependentDatabase(l).then((function(t){var i=t.db;i.auto_compaction=!0;var o={name:l,db:i,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r};return o.db.get("_local/lastSeq").catch((function(e){if(404!==e.status)throw e})).then((function(e){return o.seq=e?e.seq:0,s&&o.db.once("destroyed",(function(){delete s[a]})),o}))}))}))}));return s&&(s[a]=c),c}ra.prototype.add=function(e){return this.promise=this.promise.catch((function(){})).then((function(){return e()})),this.promise},ra.prototype.finish=function(){return this.promise};var sa={},aa=new ra;function ca(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function la(e,t){try{e.emit("error",t)}catch(e){Kr("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),Kr("error",t)}}var ua=function(e,t){return Qs(t)},da=function(e,t){return t.length},pa=function(e,t){return{sum:Qs(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];t+=i*i}return t}(t)}};var fa=function(e,t,n,r){function i(e,t,n){try{t(n)}catch(t){la(e,t)}}function o(e,t,n,r,i){try{return{output:t(n,r,i)}}catch(t){return la(e,t),{error:t}}}function s(e,t){var n=No(e.key,t.key);return 0!==n?n:No(e.value,t.value)}function a(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function c(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function l(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&function(e){e.rows.forEach((function(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach((function(e){var n=t[e];t[e].data=Di(n.data,n.content_type)}))}))}(t),t}}function u(e,t,n,r){var i=t[e];void 0!==i&&(r&&(i=encodeURIComponent(JSON.stringify(i))),n.push(e+"="+i))}function d(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function p(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey";if(void 0!==e[n]&&void 0!==e[r]&&No(e[n],e[r])>0)throw new Us("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new Us("{include_docs:true} is invalid for reduce");if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new Us("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach((function(t){var n=function(e){if(e){if("number"!=typeof e)return new Us('Invalid value for integer: "'+e+'"');if(e<0)return new Us('Invalid value for positive integer: "'+e+'"')}}(e[t]);if(n)throw n}))}function f(e){return function(t){if(404===t.status)return e;throw t}}function h(e,t,n){var r="_local/doc_"+e,i={_id:r,keys:[]},o=n.get(e),s=o[0];return(function(e){return 1===e.length&&/^1-/.test(e[0].rev)}(o[1])?Promise.resolve(i):t.db.get(r).catch(f(i))).then((function(e){return function(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):Promise.resolve({rows:[]})}(e).then((function(t){return function(e,t){for(var n=[],r=new _r,i=0,o=t.rows.length;i<o;i++){var a=t.rows[i].doc;if(a&&(n.push(a),r.add(a._id),a._deleted=!s.has(a._id),!a._deleted)){var c=s.get(a._id);"value"in c&&(a.value=c.value)}}var l=Ws(s);return l.forEach((function(e){if(!r.has(e)){var t={_id:e},i=s.get(e);"value"in i&&(t.value=i.value),n.push(t)}})),e.keys=Ks(l.concat(e.keys)),n.push(e),n}(e,t)}))}))}function m(e){var t="string"==typeof e?e:e.name,n=sa[t];return n||(n=sa[t]=new ra),n}function _(e){return Gs(m(e),(function(){return function(e){var n,r;function o(e,t){var i={id:r._id,key:Io(e)};null!=t&&(i.value=Io(t)),n.push(i)}var a=t(e.mapFun,o),c=e.seq||0;function l(t,n){return function(){return function(e,t,n){var r="_local/lastSeq";return e.db.get(r).catch(f({_id:r,seq:0})).then((function(r){var i=Ws(t);return Promise.all(i.map((function(n){return h(n,e,t)}))).then((function(t){var i=yi(t);return r.seq=n,i.push(r),e.db.bulkDocs({docs:i})}))}))}(e,t,n)}}var u=new ra;function d(){return e.sourceDB.changes({return_docs:!0,conflicts:!0,include_docs:!0,style:"all_docs",since:c,limit:50}).then(p)}function p(e){var t=e.results;if(t.length){var n=m(t);if(u.add(l(n,c)),!(t.length<50))return d()}}function m(t){for(var o=new gr,l=0,u=t.length;l<u;l++){var d=t[l];if("_"!==d.doc._id[0]){n=[],(r=d.doc)._deleted||i(e.sourceDB,a,r),n.sort(s);var p=_(n);o.set(d.doc._id,[p,d.changes])}c=d.seq}return o}function _(e){for(var t,n=new gr,r=0,i=e.length;r<i;r++){var o=e[r],s=[o.key,o.id];r>0&&0===No(o.key,t)&&s.push(r),n.set(Do(s),o),t=o.key}return n}return d().then((function(){return u.finish()})).then((function(){e.seq=c}))}(e)}))()}function g(e,t){return Gs(m(e),(function(){return function(e,t){var r,i=e.reduceFun&&!1!==t.reduce,s=t.skip||0;void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys);function l(t){return t.include_docs=!0,e.db.allDocs(t).then((function(e){return r=e.total_rows,e.rows.map((function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||t>n))return e.doc.value}var r=function(e){for(var t=[],n=[],r=0;;){var i=e[r++];if("\0"!==i)switch(i){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var o=Lo(e,r);t.push(o.num),r+=o.length;break;case"4":for(var s="";;){var a=e[r];if("\0"===a)break;s+=a,r++}s=s.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(s);break;case"5":var c={element:[],index:t.length};t.push(c.element),n.push(c);break;case"6":var l={element:{},index:t.length};t.push(l.element),n.push(l);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop();jo(t,n)}}}(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}}))}))}function u(l){var u;if(u=i?function(e,t,r){0===r.group_level&&delete r.group_level;var i=r.group||r.group_level,s=n(e.reduceFun),c=[],l=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level;t.forEach((function(e){var t=c[c.length-1],n=i?e.key:null;if(i&&Array.isArray(n)&&(n=n.slice(0,l)),t&&0===No(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);c.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})})),t=[];for(var u=0,d=c.length;u<d;u++){var p=c[u],f=o(e.sourceDB,s,p.keys,p.values,!1);if(f.error&&f.error instanceof Js)throw f.error;t.push({value:f.error?null:f.output,key:p.groupKey})}return{rows:a(t,r.limit,r.skip)}}(e,l,t):{total_rows:r,offset:s,rows:l},t.update_seq&&(u.update_seq=e.seq),t.include_docs){var d=Ks(l.map(c));return e.sourceDB.allDocs({keys:d,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then((function(e){var t=new gr;return e.rows.forEach((function(e){t.set(e.id,e.doc)})),l.forEach((function(e){var n=c(e),r=t.get(n);r&&(e.doc=r)})),u}))}return u}if(void 0!==t.keys){var d=t.keys.map((function(e){var n={startkey:Do([e]),endkey:Do([e,{}])};return t.update_seq&&(n.update_seq=!0),l(n)}));return Promise.all(d).then(yi).then(u)}var p,f,h={descending:t.descending};if(t.update_seq&&(h.update_seq=!0),"start_key"in t&&(p=t.start_key),"startkey"in t&&(p=t.startkey),"end_key"in t&&(f=t.end_key),"endkey"in t&&(f=t.endkey),void 0!==p&&(h.startkey=t.descending?Do([p,{}]):Do([p])),void 0!==f){var m=!1!==t.inclusive_end;t.descending&&(m=!m),h.endkey=Do(m?[f,{}]:[f])}if(void 0!==t.key){var _=Do([t.key]),g=Do([t.key,{}]);h.descending?(h.endkey=_,h.startkey=g):(h.startkey=_,h.endkey=g)}return i||("number"==typeof t.limit&&(h.limit=t.limit),h.skip=s),l(h).then(u)}(e,t)}))()}function y(t,n,i){if("function"==typeof t._query)return function(e,t,n){return new Promise((function(r,i){e._query(t,n,(function(e,t){if(e)return i(e);r(t)}))}))}(t,n,i);if(bi(t))return function(e,t,n){var r,i,o,s=[],a="GET";if(u("reduce",n,s),u("include_docs",n,s),u("attachments",n,s),u("limit",n,s),u("descending",n,s),u("group",n,s),u("group_level",n,s),u("skip",n,s),u("stale",n,s),u("conflicts",n,s),u("startkey",n,s,!0),u("start_key",n,s,!0),u("endkey",n,s,!0),u("end_key",n,s,!0),u("inclusive_end",n,s),u("key",n,s,!0),u("update_seq",n,s),s=""===(s=s.join("&"))?"":"?"+s,void 0!==n.keys){var c="keys="+encodeURIComponent(JSON.stringify(n.keys));c.length+s.length+1<=2e3?s+=("?"===s[0]?"&":"?")+c:(a="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var d=ca(t);return e.fetch("_design/"+d[0]+"/_view/"+d[1]+s,{headers:new bo({"Content-Type":"application/json"}),method:a,body:JSON.stringify(r)}).then((function(e){return i=e.ok,o=e.status,e.json()})).then((function(e){if(!i)throw e.status=o,_i(e);return e.rows.forEach((function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)})),e})).then(l(n))}return r=r||{},Object.keys(t).forEach((function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()})),e.fetch("_temp_view"+s,{headers:new bo({"Content-Type":"application/json"}),method:"POST",body:JSON.stringify(r)}).then((function(e){return i=e.ok,o=e.status,e.json()})).then((function(e){if(!i)throw e.status=o,_i(e);return e})).then(l(n))}(t,n,i);if("string"!=typeof n)return p(i,n),aa.add((function(){return oa(t,"temp_view/temp_view",n.map,n.reduce,!0,e).then((function(e){return function(e,t){return e.then((function(e){return t().then((function(){return e}))}),(function(e){return t().then((function(){throw e}))}))}(_(e).then((function(){return g(e,i)})),(function(){return e.db.destroy()}))}))})),aa.finish();var o=n,s=ca(o),a=s[0],c=s[1];return t.get("_design/"+a).then((function(n){var s=n.views&&n.views[c];if(!s)throw new Vs("ddoc "+n._id+" has no view named "+c);return r(n,c),p(i,s),oa(t,o,s.map,s.reduce,!1,e).then((function(e){return"ok"===i.stale||"update_after"===i.stale?("update_after"===i.stale&&Qn((function(){_(e)})),g(e,i)):_(e).then((function(){return g(e,i)}))}))}))}var v;return{query:function(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?function(e){return e.group_level=d(e.group_level),e.limit=d(e.limit),e.skip=d(e.skip),e}(t):{},"function"==typeof e&&(e={map:e});var i=Promise.resolve().then((function(){return y(r,e,t)}));return Ys(i,n),i},viewCleanup:(v=function(){var t=this;return"function"==typeof t._viewCleanup?function(e){return new Promise((function(t,n){e._viewCleanup((function(e,r){if(e)return n(e);t(r)}))}))}(t):bi(t)?function(e){return e.fetch("_view_cleanup",{headers:new bo({"Content-Type":"application/json"}),method:"POST"}).then((function(e){return e.json()}))}(t):function(t){return t.get("_local/"+e).then((function(e){var n=new gr;Object.keys(e.views).forEach((function(e){var t=ca(e),r="_design/"+t[0],i=t[1],o=n.get(r);o||(o=new _r,n.set(r,o)),o.add(i)}));var r={keys:Ws(n),include_docs:!0};return t.allDocs(r).then((function(r){var i={};r.rows.forEach((function(t){var r=t.key.substring(8);n.get(t.key).forEach((function(n){var o=r+"/"+n;e.views[o]||(o=n);var s=Object.keys(e.views[o]),a=t.doc&&t.doc.views&&t.doc.views[n];s.forEach((function(e){i[e]=i[e]||a}))}))}));var o=Object.keys(i).filter((function(e){return!i[e]})).map((function(e){return Gs(m(e),(function(){return new t.constructor(e,t.__opts).destroy()}))()}));return Promise.all(o).then((function(){return{ok:!0}}))}))}),f({ok:!0}))}(t)},mr((function(e){var t=e.pop(),n=v.apply(this,e);return"function"==typeof t&&Ys(n,t),n})))}}("mrviews",(function(e,t){if("function"==typeof e&&2===e.length){var n=e;return function(e){return n(e,t)}}return na(e.toString(),t)}),(function(e){var t=e.toString(),n=function(e){if(/^_sum/.test(e))return ua;if(/^_count/.test(e))return da;if(/^_stats/.test(e))return pa;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}(t);return n||na(t)}),(function(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new Vs("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)}));var ha={query:function(e,t,n){return fa.query.call(this,e,t,n)},viewCleanup:function(e){return fa.viewCleanup.call(this,e)}};function ma(e){return/^1-/.test(e)}function _a(e,t){var n=Object.keys(t._attachments);return Promise.all(n.map((function(n){return e.getAttachment(t._id,n,{rev:t._rev})})))}function ga(e,t,n,r){n=Mr(n);var i=[],o=!0;function s(t){return e.allDocs({keys:t,include_docs:!0,conflicts:!0}).then((function(e){if(r.cancelled)throw new Error("cancelled");e.rows.forEach((function(e){var t;e.deleted||!e.doc||!ma(e.value.rev)||(t=e.doc,t._attachments&&Object.keys(t._attachments).length>0)||function(e){return e._conflicts&&e._conflicts.length>0}(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,i.push(e.doc),delete n[e.id])}))}))}return Promise.resolve().then((function(){var e=Object.keys(n).filter((function(e){var t=n[e].missing;return 1===t.length&&ma(t[0])}));if(e.length>0)return s(e)})).then((function(){var s=function(e){var t=[];return Object.keys(e).forEach((function(n){e[n].missing.forEach((function(e){t.push({id:n,rev:e})}))})),{docs:t,revs:!0,latest:!0}}(n);if(s.docs.length)return e.bulkGet(s).then((function(n){if(r.cancelled)throw new Error("cancelled");return Promise.all(n.results.map((function(n){return Promise.all(n.docs.map((function(n){var r=n.ok;return n.error&&(o=!1),r&&r._attachments?function(e,t,n){var r=bi(t)&&!bi(e),i=Object.keys(n._attachments);return r?e.get(n._id).then((function(r){return Promise.all(i.map((function(i){return function(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}(r,n,i)?t.getAttachment(n._id,i):e.getAttachment(r._id,i)})))})).catch((function(e){if(404!==e.status)throw e;return _a(t,n)})):_a(t,n)}(t,e,r).then((function(e){var t=Object.keys(r._attachments);return e.forEach((function(e,n){var i=r._attachments[t[n]];delete i.stub,delete i.length,i.data=e})),r})):r})))}))).then((function(e){i=i.concat(yi(e).filter(Boolean))}))}))})).then((function(){return{ok:o,docs:i}}))}var ya="pouchdb";function va(e,t,n,r,i){return e.get(t).catch((function(n){if(404===n.status)return"http"!==e.adapter&&"https"!==e.adapter||Xr(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:r,_id:t,history:[],replicator:ya,version:1};throw n})).then((function(o){if(!i.cancelled&&o.last_seq!==n)return o.history=(o.history||[]).filter((function(e){return e.session_id!==r})),o.history.unshift({last_seq:n,session_id:r}),o.history=o.history.slice(0,5),o.version=1,o.replicator=ya,o.session_id=r,o.last_seq=n,e.put(o).catch((function(o){if(409===o.status)return va(e,t,n,r,i);throw o}))}))}function ba(e,t,n,r,i){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=i||{}}ba.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then((function(){return n.updateSource(e,t)}))},ba.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?va(this.target,this.id,e,t,this.returnValue):Promise.resolve(!0)},ba.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return va(this.src,this.id,e,t,this.returnValue).catch((function(e){if(Ca(e))return n.opts.writeSourceCheckpoint=!1,!0;throw e}))}return Promise.resolve(!0)};var wa={undefined:function(e,t){return 0===No(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return function(e,t){if(e.session_id===t.session_id)return{last_seq:e.last_seq,history:e.history};return xa(e.history,t.history)}(t,e).last_seq}};function xa(e,t){var n=e[0],r=e.slice(1),i=t[0],o=t.slice(1);return n&&0!==t.length?Sa(n.session_id,t)?{last_seq:n.last_seq,history:e}:Sa(i.session_id,r)?{last_seq:i.last_seq,history:o}:xa(r,o):{last_seq:0,history:[]}}function Sa(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||Sa(e,r))}function Ca(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}ba.prototype.getCheckpoint=function(){var e=this;return e.opts&&e.opts.writeSourceCheckpoint&&!e.opts.writeTargetCheckpoint?e.src.get(e.id).then((function(e){return e.last_seq||0})).catch((function(e){if(404!==e.status)throw e;return 0})):e.target.get(e.id).then((function(t){return e.opts&&e.opts.writeTargetCheckpoint&&!e.opts.writeSourceCheckpoint?t.last_seq||0:e.src.get(e.id).then((function(e){return t.version!==e.version?0:(n=t.version?t.version.toString():"undefined")in wa?wa[n](t,e):0;var n}),(function(n){if(404===n.status&&t.last_seq)return e.src.put({_id:e.id,last_seq:0}).then((function(){return 0}),(function(n){return Ca(n)?(e.opts.writeSourceCheckpoint=!1,t.last_seq):0}));throw n}))})).catch((function(e){if(404!==e.status)throw e;return 0}))};function ka(e,t,n){var r=n.doc_ids?n.doc_ids.sort(No):"",i=n.filter?n.filter.toString():"",o="",s="",a="";return n.selector&&(a=JSON.stringify(n.selector)),n.filter&&n.query_params&&(o=JSON.stringify(function(e){return Object.keys(e).sort(No).reduce((function(t,n){return t[n]=e[n],t}),{})}(n.query_params))),n.filter&&"_view"===n.filter&&(s=n.view.toString()),Promise.all([e.id(),t.id()]).then((function(e){var t=e[0]+e[1]+i+s+o+r+a;return new Promise((function(e){Fi(t,e)}))})).then((function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))}))}function Pa(e,t,n,r,i){var o,s,a,c=[],l={seq:0,changes:[],docs:[]},u=!1,d=!1,p=!1,f=0,h=n.continuous||n.live||!1,m=n.batch_size||100,_=n.batches_limit||10,g=!1,y=n.doc_ids,v=n.selector,b=[],w=Vi();i=i||{ok:!0,start_time:(new Date).toISOString(),docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var x={};function S(){return a?Promise.resolve():ka(e,t,n).then((function(i){s=i;var o={};o=!1===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===n.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},a=new ba(e,t,s,r,o)}))}function C(){if(b=[],0!==o.docs.length){var e=o.docs,s={timeout:n.timeout};return t.bulkDocs({docs:e,new_edits:!1},s).then((function(t){if(r.cancelled)throw T(),new Error("cancelled");var n=Object.create(null);t.forEach((function(e){e.error&&(n[e.id]=e)}));var o=Object.keys(n).length;i.doc_write_failures+=o,i.docs_written+=e.length-o,e.forEach((function(e){var t=n[e._id];if(t){i.errors.push(t);var o=(t.name||"").toLowerCase();if("unauthorized"!==o&&"forbidden"!==o)throw t;r.emit("denied",Mr(t))}else b.push(e)}))}),(function(t){throw i.doc_write_failures+=e.length,t}))}}function k(){if(o.error)throw new Error("There was a problem getting docs.");i.last_seq=f=o.seq;var e=Mr(i);return b.length&&(e.docs=b,"number"==typeof o.pending&&(e.pending=o.pending,delete o.pending),r.emit("change",e)),u=!0,a.writeCheckpoint(o.seq,w).then((function(){if(u=!1,r.cancelled)throw T(),new Error("cancelled");o=void 0,R()})).catch((function(e){throw L(e),e}))}function P(){return ga(e,t,o.diffs,r).then((function(e){o.error=!e.ok,e.docs.forEach((function(e){delete o.diffs[e._id],i.docs_read++,o.docs.push(e)}))}))}function E(){var e;r.cancelled||o||(0!==c.length?(o=c.shift(),(e={},o.changes.forEach((function(t){"_user/"!==t.id&&(e[t.id]=t.changes.map((function(e){return e.rev})))})),t.revsDiff(e).then((function(e){if(r.cancelled)throw T(),new Error("cancelled");o.diffs=e}))).then(P).then(C).then(k).then(E).catch((function(e){O("batch processing terminated with error",e)}))):A(!0))}function A(e){0!==l.changes.length?(e||d||l.changes.length>=m)&&(c.push(l),l={seq:0,changes:[],docs:[]},"pending"!==r.state&&"stopped"!==r.state||(r.state="active",r.emit("active")),E()):0!==c.length||o||((h&&x.live||d)&&(r.state="pending",r.emit("paused")),d&&T())}function O(e,t){p||(t.message||(t.message=e),i.ok=!1,i.status="aborting",c=[],l={seq:0,changes:[],docs:[]},T(t))}function T(o){if(!(p||r.cancelled&&(i.status="cancelled",u)))if(i.status=i.status||"complete",i.end_time=(new Date).toISOString(),i.last_seq=f,p=!0,o){(o=mi(o)).result=i;var s=(o.name||"").toLowerCase();"unauthorized"===s||"forbidden"===s?(r.emit("error",o),r.removeAllListeners()):function(e,t,n,r){if(!1===e.retry)return t.emit("error",n),void t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=Wr),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var i=function(){e.current_back_off=0};t.once("paused",(function(){t.removeListener("active",i)})),t.once("active",i)}e.current_back_off=e.current_back_off||0,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}(n,r,o,(function(){Pa(e,t,n,r)}))}else r.emit("complete",i),r.removeAllListeners()}function $(e,t,i){if(r.cancelled)return T();"number"==typeof t&&(l.pending=t),gi(n)(e)&&(l.seq=e.seq||i,l.changes.push(e),Qn((function(){A(0===c.length&&x.live)})))}function N(e){if(g=!1,r.cancelled)return T();if(e.results.length>0)x.since=e.results[e.results.length-1].seq,R(),A(!0);else{var t=function(){h?(x.live=!0,R()):d=!0,A(!0)};o||0!==e.results.length?t():(u=!0,a.writeCheckpoint(e.last_seq,w).then((function(){u=!1,i.last_seq=f=e.last_seq,t()})).catch(L))}}function I(e){if(g=!1,r.cancelled)return T();O("changes rejected",e)}function R(){if(!g&&!d&&c.length<_){g=!0,r._changes&&(r.removeListener("cancel",r._abortChanges),r._changes.cancel()),r.once("cancel",i);var t=e.changes(x).on("change",$);t.then(o,o),t.then(N).catch(I),n.retry&&(r._changes=t,r._abortChanges=i)}function i(){t.cancel()}function o(){r.removeListener("cancel",i)}}function D(){S().then((function(){if(!r.cancelled)return a.getCheckpoint().then((function(e){x={since:f=e,limit:m,batch_size:m,style:"all_docs",doc_ids:y,selector:v,return_docs:!0},n.filter&&("string"!=typeof n.filter?x.include_docs=!0:x.filter=n.filter),"heartbeat"in n&&(x.heartbeat=n.heartbeat),"timeout"in n&&(x.timeout=n.timeout),n.query_params&&(x.query_params=n.query_params),n.view&&(x.view=n.view),R()}));T()})).catch((function(e){O("getCheckpoint rejected with ",e)}))}function L(e){u=!1,O("writeCheckpoint completed with error",e)}r.ready(e,t),r.cancelled?T():(r._addedListeners||(r.once("cancel",T),"function"==typeof n.complete&&(r.once("error",n.complete),r.once("complete",(function(e){n.complete(null,e)}))),r._addedListeners=!0),void 0===n.since?D():S().then((function(){return u=!0,a.writeCheckpoint(n.since,w)})).then((function(){u=!1,r.cancelled?T():(f=n.since,D())})).catch(L))}function Ea(){br.call(this),this.cancelled=!1,this.state="pending";var e=this,t=new Promise((function(t,n){e.once("complete",t),e.once("error",n)}));e.then=function(e,n){return t.then(e,n)},e.catch=function(e){return t.catch(e)},e.catch((function(){}))}function Aa(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function Oa(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw mi(ui,"`doc_ids` filter parameter is not a list.");n.complete=r,(n=Mr(n)).continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var i=new Ea(n);return Pa(Aa(e,n),Aa(t,n),n,i),i}function Ta(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),(n=Mr(n)).PouchConstructor=n.PouchConstructor||this,new $a(e=Aa(e,n),t=Aa(t,n),n,r)}function $a(e,t,n,r){var i=this;this.canceled=!1;var o=n.push?Qr({},n,n.push):n,s=n.pull?Qr({},n,n.pull):n;function a(e){i.emit("change",{direction:"pull",change:e})}function c(e){i.emit("change",{direction:"push",change:e})}function l(e){i.emit("denied",{direction:"push",doc:e})}function u(e){i.emit("denied",{direction:"pull",doc:e})}function d(){i.pushPaused=!0,i.pullPaused&&i.emit("paused")}function p(){i.pullPaused=!0,i.pushPaused&&i.emit("paused")}function f(){i.pushPaused=!1,i.pullPaused&&i.emit("active",{direction:"push"})}function h(){i.pullPaused=!1,i.pushPaused&&i.emit("active",{direction:"pull"})}this.push=Oa(e,t,o),this.pull=Oa(t,e,s),this.pushPaused=!0,this.pullPaused=!0;var m={};function _(e){return function(t,n){("change"===t&&(n===a||n===c)||"denied"===t&&(n===u||n===l)||"paused"===t&&(n===p||n===d)||"active"===t&&(n===h||n===f))&&(t in m||(m[t]={}),m[t][e]=!0,2===Object.keys(m[t]).length&&i.removeAllListeners(t))}}function g(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}n.live&&(this.push.on("complete",i.pull.cancel.bind(i.pull)),this.pull.on("complete",i.push.cancel.bind(i.push))),this.on("newListener",(function(e){"change"===e?(g(i.pull,"change",a),g(i.push,"change",c)):"denied"===e?(g(i.pull,"denied",u),g(i.push,"denied",l)):"active"===e?(g(i.pull,"active",h),g(i.push,"active",f)):"paused"===e&&(g(i.pull,"paused",p),g(i.push,"paused",d))})),this.on("removeListener",(function(e){"change"===e?(i.pull.removeListener("change",a),i.push.removeListener("change",c)):"denied"===e?(i.pull.removeListener("denied",u),i.push.removeListener("denied",l)):"active"===e?(i.pull.removeListener("active",h),i.push.removeListener("active",f)):"paused"===e&&(i.pull.removeListener("paused",p),i.push.removeListener("paused",d))})),this.pull.on("removeListener",_("pull")),this.push.on("removeListener",_("push"));var y=Promise.all([this.push,this.pull]).then((function(e){var t={push:e[0],pull:e[1]};return i.emit("complete",t),r&&r(null,t),i.removeAllListeners(),t}),(function(e){if(i.cancel(),r?r(e):i.emit("error",e),i.removeAllListeners(),r)throw e}));this.then=function(e,t){return y.then(e,t)},this.catch=function(e){return y.catch(e)}}function Na(e,t,n){let r,{documents:i}=t,{initsrc:o}=t,{collection:s}=t;return O((async()=>{const e=new go(s);await e.info(),n(5,r=e)})),e.$$set=e=>{"documents"in e&&n(0,i=e.documents),"initsrc"in e&&n(1,o=e.initsrc),"collection"in e&&n(2,s=e.collection)},e.$$.update=()=>{32&e.$$.dirty&&r&&async function(){if(!r)return;if(0===(await r.info()).update_seq){const e=await fetch(o),t=await e.json();r.bulkDocs(t)}const e=await r.allDocs({include_docs:!0});console.log(e),n(0,i=e.rows.map((e=>e.doc)))}()},[i,o,s,async function(e){return r?await r.get(e):void console.log("no bdd")},async function(e){r?r.get(e).then((function(e){return r.remove(e)})):console.log("no bdd")},r]}yr(Ea,br),Ea.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},Ea.prototype.ready=function(e,t){var n=this;function r(){n.cancel()}n._readyCalled||(n._readyCalled=!0,e.once("destroyed",r),t.once("destroyed",r),n.once("complete",(function(){e.removeListener("destroyed",r),t.removeListener("destroyed",r)})))},yr($a,br),$a.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},go.plugin((function(e){e.adapter("idb",Is,!0)})).plugin((function(e){e.adapter("http",Hs,!1),e.adapter("https",Hs,!1)})).plugin(ha).plugin((function(e){e.replicate=Oa,e.sync=Ta,Object.defineProperty(e.prototype,"replicate",{get:function(){var e=this;return void 0===this.replicateMethods&&(this.replicateMethods={from:function(t,n,r){return e.constructor.replicate(t,e,n,r)},to:function(t,n,r){return e.constructor.replicate(e,t,n,r)}}),this.replicateMethods}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}));class Ia extends oe{constructor(e){super(),ie(this,e,Na,null,s,{documents:0,initsrc:1,collection:2,load_book:3,delete_book:4})}get load_book(){return this.$$.ctx[3]}get delete_book(){return this.$$.ctx[4]}}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const Ra=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Da,La;function ja(e){Da=(!e||!e.shimcssproperties)&&(Ra||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(La=window.ShadyCSS.cssBuild);const Ma=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Da=window.ShadyCSS.nativeCss:window.ShadyCSS?(ja(window.ShadyCSS),window.ShadyCSS=void 0):ja(window.WebComponents&&window.WebComponents.flags);const qa=Da;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */class Ba{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function za(e){return Fa(function(e){let t=new Ba;t.start=0,t.end=e.length;let n=t;for(let r=0,i=e.length;r<i;r++)if(e[r]===Va){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new Ba,n.start=r+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[r]===Ja&&(n.end=r+1,n=n.parent||t);return t}(e=e.replace(Ya.comments,"").replace(Ya.port,"")),e)}function Fa(e,t){let n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let r=e.previous?e.previous.end:e.parent.start;n=t.substring(r,e.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(Ya.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let i=e.parsedSelector=e.selector=n.trim();e.atRule=0===i.indexOf(Wa),e.atRule?0===i.indexOf(Ka)?e.type=Ua.MEDIA_RULE:i.match(Ya.keyframesRule)&&(e.type=Ua.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Ya.multipleSpaces).pop()):0===i.indexOf(Ga)?e.type=Ua.MIXIN_RULE:e.type=Ua.STYLE_RULE}let r=e.rules;if(r)for(let e,n=0,i=r.length;n<i&&(e=r[n]);n++)Fa(e,t);return e}function Ha(e,t,n=""){let r="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Ga)}(n))for(let e,i=0,o=n.length;i<o&&(e=n[i]);i++)r=Ha(e,t,r);else r=t?e.cssText:function(e){return function(e){return e.replace(Ya.mixinApply,"").replace(Ya.varApply,"")}(e=function(e){return e.replace(Ya.customProp,"").replace(Ya.mixinProp,"")}(e))}(e.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(e.selector&&(n+=e.selector+" "+Va+"\n"),n+=r,e.selector&&(n+=Ja+"\n\n")),n}const Ua={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Va="{",Ja="}",Ya={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ga="--",Ka="@media",Wa="@",Xa=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Qa=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Za=/@media\s(.*)/,ec=new Set;function tc(e){const t=e.textContent;if(!ec.has(t)){ec.add(t);const n=e.cloneNode(!0);document.head.appendChild(n)}}function nc(e){return e.hasAttribute("shady-unscoped")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function rc(e,t){return e?("string"==typeof e&&(e=za(e)),t&&oc(e,t),Ha(e,qa)):""}function ic(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=za(e.textContent)),e.__cssRules||null}function oc(e,t,n,r){if(!e)return;let i=!1,o=e.type;if(r&&o===Ua.MEDIA_RULE){let t=e.selector.match(Za);t&&(window.matchMedia(t[1]).matches||(i=!0))}o===Ua.STYLE_RULE?t(e):n&&o===Ua.KEYFRAMES_RULE?n(e):o===Ua.MIXIN_RULE&&(i=!0);let s=e.rules;if(s&&!i)for(let e,i=0,o=s.length;i<o&&(e=s[i]);i++)oc(e,t,n,r)}function sc(e,t){let n=e.indexOf("var(");if(-1===n)return t(e,"","","");let r=function(e,t){let n=0;for(let r=t,i=e.length;r<i;r++)if("("===e[r])n++;else if(")"===e[r]&&0==--n)return r;return-1}(e,n+3),i=e.substring(n+4,r),o=e.substring(0,n),s=sc(e.substring(r+1),t),a=i.indexOf(",");return-1===a?t(o,i.trim(),"",s):t(o,i.substring(0,a).trim(),i.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;const ac="css-build";function cc(e){if(void 0!==La)return La;if(void 0===e.__cssBuild){const t=e.getAttribute(ac);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===ac)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(e),e.__cssBuild=t}}return e.__cssBuild||""}function lc(e){return""!==cc(e)}function uc(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function dc(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const pc=/;\s*/m,fc=/^\s*(initial)|(inherit)\s*$/,hc=/\s*!important/,mc="_-_";class _c{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let gc=null;class yc{constructor(){this._currentElement=null,this._measureElement=null,this._map=new _c}detectMixin(e){return function(e){const t=Qa.test(e)||Xa.test(e);return Qa.lastIndex=0,Xa.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const r=n[e];nc(r)?Ra||(tc(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=ic(e);return this.transformRules(n,t),e.textContent=rc(n),n}transformCustomStyle(e){let t=ic(e);return oc(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=rc(t),t}transformRules(e,t){this._currentElement=t,oc(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(Xa,((e,n,r,i)=>this._produceCssProperties(e,n,r,i,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let r=!1;return oc(t,(t=>{r=r||t===e,r||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))})),n}_consumeCssProperties(e,t){let n=null;for(;n=Qa.exec(e);){let r=n[0],i=n[1],o=n.index,s=o+r.indexOf("@apply"),a=o+r.length,c=e.slice(0,s),l=e.slice(a),u=t?this._fallbacksFromPreviousRules(t):{};Object.assign(u,this._cssTextToMap(c));let d=this._atApplyToCssProperties(i,u);e=`${c}${d}${l}`,Qa.lastIndex=o+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(pc,"");let n=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){let i,o,s;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(i in a)s=t&&t[i],o=[i,": var(",e,mc,i],s&&o.push(",",s.replace(hc,"")),o.push(")"),hc.test(a[i])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=fc.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,r,i=e.split(";"),o={};for(let e,s,a=0;a<i.length;a++)e=i[a],e&&(s=e.split(":"),s.length>1&&(n=s[0].trim(),r=s.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(n,r)),o[n]=r));return o}_invalidateMixinEntry(e){if(gc)for(let t in e.dependants)t!==this._currentElement&&gc(t)}_produceCssProperties(e,t,n,r,i){if(n&&sc(n,((e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)})),!r)return e;let o=this._consumeCssProperties(""+r,i),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),c=a,l=this._map.get(t),u=l&&l.properties;u?c=Object.assign(Object.create(u),a):this._map.set(t,c);let d,p,f=[],h=!1;for(d in c)p=a[d],void 0===p&&(p="initial"),u&&!(d in u)&&(h=!0),f.push(`${t}_-_${d}: ${p}`);return h&&this._invalidateMixinEntry(l),l&&(l.properties=c),n&&(s=`${e};${s}`),`${s}${f.join("; ")};`}}yc.prototype.detectMixin=yc.prototype.detectMixin,yc.prototype.transformStyle=yc.prototype.transformStyle,yc.prototype.transformCustomStyle=yc.prototype.transformCustomStyle,yc.prototype.transformRules=yc.prototype.transformRules,yc.prototype.transformRule=yc.prototype.transformRule,yc.prototype.transformTemplate=yc.prototype.transformTemplate,yc.prototype._separator=mc,Object.defineProperty(yc.prototype,"invalidCallback",{get:()=>gc,set(e){gc=e}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const vc={},bc="_applyShimCurrentVersion",wc="_applyShimNextVersion",xc="_applyShimValidatingVersion",Sc=Promise.resolve();
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Cc(e){let t=vc[e];t&&function(e){e[bc]=e[bc]||0,e[xc]=e[xc]||0,e[wc]=(e[wc]||0)+1}(t)}function kc(e){return e[bc]===e[wc]}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Pc,Ec=null,Ac=window.HTMLImports&&window.HTMLImports.whenReady||null;function Oc(e){requestAnimationFrame((function(){Ac?Ac(e):(Ec||(Ec=new Promise((e=>{Pc=e})),"complete"===document.readyState?Pc():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&Pc()}))),Ec.then((function(){e&&e()})))}))}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const Tc="__seenByShadyCSS",$c="__shadyCSSCachedStyle";let Nc=null,Ic=null;class Rc{constructor(){this.customStyles=[],this.enqueued=!1,Oc((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&Ic&&(this.enqueued=!0,Oc(Ic))}addCustomStyle(e){e[Tc]||(e[Tc]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[$c])return e[$c];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[$c])continue;const r=this.getStyleForCustomStyle(n);if(r){const e=r.__appliedElement||r;Nc&&Nc(e),n[$c]=e}}return e}}Rc.prototype.addCustomStyle=Rc.prototype.addCustomStyle,Rc.prototype.getStyleForCustomStyle=Rc.prototype.getStyleForCustomStyle,Rc.prototype.processStyles=Rc.prototype.processStyles,Object.defineProperties(Rc.prototype,{transformCallback:{get:()=>Nc,set(e){Nc=e}},validateCallback:{get:()=>Ic,set(e){let t=!1;Ic||(t=!0),Ic=e,t&&this.enqueueDocumentValidation()}}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const Dc=new yc;class Lc{constructor(){this.customStyleInterface=null,Dc.invalidCallback=Cc}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Dc.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),lc(e))return;vc[t]=e;let n=Dc.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&Dc.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&uc(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",r="";return t?t.indexOf("-")>-1?n=t:(r=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,r=e.extends),{is:n,typeExtension:r}}(e),n=vc[t];if((!n||!lc(n))&&n&&!kc(n)){(function(e){return!kc(e)&&e[xc]===e[wc]})(n)||(this.prepareTemplate(n,t),function(e){e[xc]=e[wc],e._validating||(e._validating=!0,Sc.then((function(){e[bc]=e[wc],e._validating=!1})))}(n));let r=e.shadowRoot;if(r){let e=r.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=rc(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Lc;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,r){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>dc(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:qa,nativeShadow:Ra,cssBuild:La,disableRuntime:Ma},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Dc,
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
window.JSCompiler_renameProperty=function(e,t){return e};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let jc,Mc,qc=/(url\()([^)]*)(\))/g,Bc=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function zc(e,t){if(e&&Bc.test(e))return e;if("//"===e)return e;if(void 0===jc){jc=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",jc="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),jc)try{return new URL(e,t).href}catch(t){return e}return Mc||(Mc=document.implementation.createHTMLDocument("temp"),Mc.base=Mc.createElement("base"),Mc.head.appendChild(Mc.base),Mc.anchor=Mc.createElement("a"),Mc.body.appendChild(Mc.anchor)),Mc.base.href=t,Mc.anchor.href=e,Mc.anchor.href||e}function Fc(e,t){return e.replace(qc,(function(e,n,r,i){return n+"'"+zc(r.replace(/["']/g,""),t)+"'"+i}))}function Hc(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let Uc=Hc(document.baseURI||window.location.href),Vc=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Jc=0;const Yc=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=Jc++;return function(r){let i=r.__mixinSet;if(i&&i[n])return r;let o=t,s=o.get(r);s||(s=e(r),o.set(r,s));let a=Object.create(s.__mixinSet||i||null);return a[n]=!0,s.__mixinSet=a,s}};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let Gc={},Kc={};class Wc extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=function(e){return Gc[e]||Kc[e.toLowerCase()]}(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=zc(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Hc(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,function(e,t){Gc[e]=Kc[e.toLowerCase()]=t}(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}Wc.prototype.modules=Gc,customElements.define("dom-module",Wc);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const Xc="shady-unscoped";function Qc(e){return Wc.import(e)}function Zc(e){const t=Fc((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function el(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...tl(t[e]));return n}function tl(e){const t=Qc(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...rl(t));const n=t.querySelector("template");n&&e.push(...nl(n,t.assetpath)),t._styles=e}return t._styles}function nl(e,t){if(!e._styles){const n=[],r=e.content.querySelectorAll("style");for(let e=0;e<r.length;e++){let i=r[e],o=i.getAttribute("include");o&&n.push(...el(o).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(i.textContent=Fc(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function rl(e){const t=[],n=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<n.length;e++){let r=n[e];if(r.import){const e=r.import,n=r.hasAttribute(Xc);if(n&&!e._unscopedStyle){const t=Zc(e);t.setAttribute(Xc,""),e._unscopedStyle=t}else e._style||(e._style=Zc(e));t.push(n?e._unscopedStyle:e._style)}}return t}function il(e){let t=Qc(e);if(t&&void 0===t._cssText){let e=function(e){let t="",n=rl(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const r=nl(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const ol=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function sl(e){return e.indexOf(".")>=0}function al(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function cl(e,t){return 0===e.indexOf(t+".")}function ll(e,t){return 0===t.indexOf(e+".")}function ul(e,t,n){return t+n.slice(e.length)}function dl(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function pl(e){return Array.isArray(e)?dl(e).split("."):e.toString().split(".")}function fl(e,t,n){let r=e,i=pl(t);for(let e=0;e<i.length;e++){if(!r)return;r=r[i[e]]}return n&&(n.path=i.join(".")),r}function hl(e,t,n){let r=e,i=pl(t),o=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){if(r=r[i[e]],!r)return}r[o]=n}else r[t]=n;return i.join(".")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const ml={},_l=/-[a-z]/g,gl=/([A-Z])/g;function yl(e){return ml[e]||(ml[e]=e.indexOf("-")<0?e:e.replace(_l,(e=>e[1].toUpperCase())))}function vl(e){return ml[e]||(ml[e]=e.replace(gl,"-$1").toLowerCase())}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let bl=0,wl=0,xl=[],Sl=0,Cl=document.createTextNode("");new window.MutationObserver((function(){const e=xl.length;for(let t=0;t<e;t++){let e=xl[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}xl.splice(0,e),wl+=e})).observe(Cl,{characterData:!0});const kl={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Pl={run:e=>(Cl.textContent=Sl++,xl.push(e),bl++),cancel(e){const t=e-wl;if(t>=0){if(!xl[t])throw new Error("invalid async handle: "+e);xl[t]=null}}},El=Pl,Al=Yc((e=>class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,El.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){const r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const r=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=ol(e)),void 0===r?e.removeAttribute(n):e.setAttribute(n,r)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Ol={};let Tl=HTMLElement.prototype;for(;Tl;){let e=Object.getOwnPropertyNames(Tl);for(let t=0;t<e.length;t++)Ol[e[t]]=!0;Tl=Object.getPrototypeOf(Tl)}const $l=Yc((e=>{const t=Al(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(yl(e[t]))}static attributeNameForProperty(e){return vl(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!Ol[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Nl={"dom-if":!0,"dom-repeat":!0};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let Il=!1,Rl=!1;function Dl(e){(function(){if(!Il){Il=!0;const e=document.createElement("textarea");e.placeholder="a",Rl=e.placeholder===e.textContent}return Rl})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Ll(e){let t=e.getAttribute("is");if(t&&Nl[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function jl(e,t){let n=t.parentInfo&&jl(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}function Ml(e,t,n,r){r.id&&(t[r.id]=n)}function ql(e,t,n){if(n.events&&n.events.length)for(let r,i=0,o=n.events;i<o.length&&(r=o[i]);i++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Bl(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const zl=Yc((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(i,t,n)||r,Dl(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let r,i=e.firstChild,o=0;i;i=r){if("template"==i.localName&&(i=Ll(i)),r=i.nextSibling,i.nodeType===Node.TEXT_NODE){let n=r;for(;n&&n.nodeType===Node.TEXT_NODE;)i.textContent+=n.textContent,r=n.nextSibling,e.removeChild(n),n=r;if(t.stripWhiteSpace&&!i.textContent.trim()){e.removeChild(i);continue}}let s={parentIndex:o,parentInfo:n};this._parseTemplateNode(i,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),i.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let o,s=i.length-1;o=i[s];s--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return"on-"===r.slice(0,3)?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):"id"===r&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let o=i.nodeList=new Array(n.length);i.$={};for(let e,t=0,r=n.length;t<r&&(e=n[t]);t++){let n=o[t]=jl(i,e);Ml(0,i.$,n,e),Bl(0,n,e),ql(this,n,e)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){let i=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(r=r||e,0,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}));
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */let Fl=0;const Hl={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ul=/[A-Z]/;function Vl(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],r=n[e]=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}}}else n=e[t]={};return n}function Jl(e,t,n,r,i,o){if(t){let s=!1,a=Fl++;for(let c in n)Yl(e,t,a,c,n,r,i,o)&&(s=!0);return s}return!1}function Yl(e,t,n,r,i,o,s,a){let c=!1,l=t[s?al(r):r];if(l)for(let t,u=0,d=l.length;u<d&&(t=l[u]);u++)t.info&&t.info.lastRun===n||s&&!Gl(r,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,r,i,o,t.info,s,a),c=!0);return c}function Gl(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!cl(n,e))||!(!t.wildcard||!ll(n,e))}return!0}function Kl(e,t,n,r,i){let o="string"==typeof i.method?e[i.method]:i.method,s=i.property;o?o.call(e,e.__data[s],r[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Wl(e,t,n){let r=al(t);if(r!==t){return Xl(e,vl(r)+"-changed",n[t],t),!0}return!1}function Xl(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),ol(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Ql(e,t,n,r,i,o){let s=(o?al(t):t)!=t?t:null,a=s?fl(e,s):e.__data[t];s&&void 0===a&&(a=n[t]),Xl(e,i.eventName,a,s)}function Zl(e,t,n,r,i){let o=e.__data[t];Vc&&(o=Vc(o,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,o)}function eu(e,t,n,r,i){let o=au(e,t,n,r,i),s=i.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):e[s]=o}function tu(e,t,n,r,i,o,s){n.bindings=n.bindings||[];let a={kind:r,target:i,parts:o,literal:s,isCompound:1!==o.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||vl(i)+"-changed",a.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let r=a.parts[n];r.compoundIndex=n,nu(e,t,a,r,c)}}function nu(e,t,n,r,i){if(!r.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,s={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<o.length;n++){let r=o[n];"string"==typeof r&&(r=pu(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:ru,info:s,trigger:r})}}}function ru(e,t,n,r,i,o,s){let a=s[i.index],c=i.binding,l=i.part;if(o&&l.source&&t.length>l.source.length&&"property"==c.kind&&!c.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[c.target]){let r=n[t];t=ul(l.source,c.target,t),a._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,n,r,i){i=function(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,i,n,r),Vc&&(i=Vc(i,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[Hl.READ_ONLY]&&t[Hl.READ_ONLY][r]||t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}(e,a,c,l,i.evaluator._evaluateBinding(e,l,t,n,r,o))}}function iu(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=new Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let o=t.target;n[o]=i,t.literal&&"property"==t.kind&&("className"===o&&(e=ol(e)),e[o]=t.literal)}}function ou(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,r,i){let o,s=e.detail,a=s&&s.path;a?(r=ul(n,r,a),o=s&&s.value):o=e.currentTarget[n],o=i?!o:o,t[Hl.READ_ONLY]&&t[Hl.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,o,!0,Boolean(a))||s&&s.queueProperty||t._invalidateProperties()}(e,t,n.target,r.source,r.negate)}))}}function su(e,t,n,r,i,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:o};for(let i,o=0;o<t.args.length&&(i=t.args[o]);o++)i.literal||e._addPropertyEffect(i.rootProperty,n,{fn:r,info:s,trigger:i});o&&e._addPropertyEffect(t.methodName,n,{fn:r,info:s})}function au(e,t,n,r,i){let o=e._methodHost||e,s=o[i.methodName];if(s){let r=e._marshalArgs(i.args,t,n);return s.apply(o,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const cu=[],lu=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function uu(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function du(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:cu};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let n=pu(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function pu(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=al(t),n.structured=sl(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function fu(e,t,n){let r=fl(e,n);return void 0===r&&(r=t[n]),r}function hu(e,t,n,r){e.notifyPath(n+".splices",{indexSplices:r}),e.notifyPath(n+".length",t.length)}function mu(e,t,n,r,i,o){hu(e,t,n,[{index:r,addedCount:i,removed:o,object:t,type:"splice"}])}const _u=Yc((e=>{const t=zl($l(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return Hl}_initializeProperties(){super._initializeProperties(),gu.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Hl.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Hl.READ_ONLY);let r=Vl(this,t)[e];r||(r=this[t][e]=[]),r.push(n)}_removePropertyEffect(e,t,n){let r=Vl(this,t)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Hl.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Hl.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Hl.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Hl.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||al(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=fl(this,e);if(!(e=hl(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let o in r){let s=r[o];ll(o,t)?(i=ul(o,s,t),e._setPendingPropertyOrPath(i,n,!0,!0)):ll(s,t)&&(i=ul(s,o,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=ol(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&sl(e),i=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,i[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Hl.NOTIFY]&&this[Hl.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[Hl.READ_ONLY]&&this[Hl.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,r){let i=e[Hl.COMPUTE];if(i){let o=t;for(;Jl(e,i,o,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,n,r);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Jl(this,this[Hl.REFLECT],t,n,r),Jl(this,this[Hl.OBSERVE],t,n,r),i&&function(e,t,n,r,i){let o,s,a=e[Hl.NOTIFY],c=Fl++;for(let s in t)t[s]&&(a&&Yl(e,a,c,s,n,r,i)||i&&Wl(e,s,n))&&(o=!0);o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,i,t,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Hl.PROPAGATE]&&Jl(this,this[Hl.PROPAGATE],e,t,n);let r=this.__templateInfo;for(;r;)Jl(this,r.propertyEffects,e,t,n,r.nodeList),r=r.nextTemplateInfo}linkPaths(e,t){e=dl(e),t=dl(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=dl(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};hu(this,fl(this,e,n),n.path,t)}get(e,t){return fl(t||this,e)}set(e,t,n){n?hl(n,e,t):this[Hl.READ_ONLY]&&this[Hl.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},r=fl(this,e,n),i=r.length,o=r.push(...t);return t.length&&mu(this,r,n.path,i,t.length,[]),o}pop(e){let t={path:""},n=fl(this,e,t),r=Boolean(n.length),i=n.pop();return r&&mu(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i,o={path:""},s=fl(this,e,o);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),i=2===arguments.length?s.splice(t):s.splice(t,n,...r),(r.length||i.length)&&mu(this,s,o.path,t,r.length,i),i}shift(e){let t={path:""},n=fl(this,e,t),r=Boolean(n.length),i=n.shift();return r&&mu(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:""},r=fl(this,e,n),i=r.unshift(...t);return t.length&&mu(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(1==arguments.length){let r={path:""};t=fl(this,e,r),n=r.path}else n=Array.isArray(e)?dl(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,Hl.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,Hl.OBSERVE,{fn:Kl,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Hl.OBSERVE,{fn:Kl,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=du(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");su(this,n,Hl.OBSERVE,au,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Hl.NOTIFY,{fn:Ql,info:{eventName:vl(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Hl.REFLECT,{fn:Zl,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=du(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");su(this,r,Hl.COMPUTE,eu,e,n)}_marshalArgs(e,t,n){const r=this.__data,i=[];for(let o=0,s=e.length;o<s;o++){let{name:s,structured:a,wildcard:c,value:l,literal:u}=e[o];if(!u)if(c){const e=ll(s,t),i=fu(r,n,e?t:s);l={path:e?t:s,value:i,base:e?fl(r,s):i}}else l=a?fu(r,n,s):r[s];i[o]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__templateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&(n=Object.create(n),n.wasPreBound=r,!r&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(n)}_stampTemplate(e){gu.beginHosting(this);let t=super._stampTemplate(e);gu.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],o=n[t],s=i.bindings;if(s)for(let t=0;t<s.length;t++){let n=s[t];iu(o,n),ou(o,e,n)}o.__dataHost=e}}(this,n),this.__dataReady&&Jl(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=uu(t)||" ",tu(this,n,r,"text","textContent",t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,o){let s=this._parseBindings(o,n);if(s){let t=i,o="property";Ul.test(i)?o="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),o="attribute");let a=uu(s);return a&&"attribute"==o&&("class"==i&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(i)),e.setAttribute(i,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(i=yl(i)),tu(this,n,r,o,i,s,a),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,o)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),o=r.templateInfo.hostProps;for(let e in o){tu(this,n,r,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return i}static _parseBindings(e,t){let n,r=[],i=0;for(;null!==(n=lu.exec(e));){n.index>i&&r.push({literal:e.slice(i,n.index)});let o=n[1][0],s=Boolean(n[2]),a=n[3].trim(),c=!1,l="",u=-1;"{"==o&&(u=a.indexOf("::"))>0&&(l=a.substring(u+2),a=a.substring(0,u),c=!0);let d=du(a),p=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||p.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(p.push(n),d.dynamicFn=!0)}else p.push(a);r.push({source:a,mode:o,negate:s,customEvent:c,signature:d,dependencies:p,event:l}),i=lu.lastIndex}if(i&&i<e.length){let t=e.substring(i);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,n,r,i,o){let s;return s=t.signature?au(e,n,r,0,t.signature):n!=t.source?fl(e,t.source):o&&sl(n)?fl(e,n):e.__data[n],t.negate&&(s=!s),s}}}));const gu=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const yu=Yc((e=>{const t=Al(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function(e){const t={};for(let n in e){const r=e[n];t[n]="function"==typeof r?{type:r}:r}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.attributeNameForProperty(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})),vu=window.ShadyCSS&&window.ShadyCSS.cssBuild,bu=Yc((e=>{const t=yu(_u(e));function n(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===n.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===n.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function r(e,t,n,r){if(!vu){const i=t.content.querySelectorAll("style"),o=nl(t),s=function(e){let t=Qc(e);return t?rl(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<s.length;n++){let i=s[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,a)}let c=0;for(let t=0;t<o.length;t++){let n=o[t],s=i[c];s!==n?(n=n.cloneNode(!0),s.parentNode.insertBefore(n,s)):c++,n.textContent=e._processStyleText(n.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let t in e)n(this.prototype,t,e[t],e)}static createObservers(e,t){const n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;return e&&(t=Wc.import(e,"template")),t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Hc(e.url);else{const e=Wc.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Uc,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return Fc(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;r(this,t,e,n?zc(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=ol(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=zc(this.importPath)),zc(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return t._addTemplatePropertyEffect.call(this,e,n,r)}}}));
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class wu{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,xu.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),xu.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof wu?e._cancelAsync():e=new wu,e.setConfig(t,n),e}}let xu=new Set;const Su=function(e){xu.add(e)},Cu=function(){const e=Boolean(xu.size);return xu.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let ku="string"==typeof document.head.style.touchAction,Pu="__polymerGestures",Eu="__polymerGesturesHandled",Au="__polymerGesturesTouchAction",Ou=["mousedown","mousemove","mouseup","click"],Tu=[0,1,4,2],$u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Nu(e){return Ou.indexOf(e)>-1}let Iu=!1;function Ru(e){Nu(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Iu=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Du=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Lu=[],ju={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Mu={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function qu(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let r=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<r.length;e++)t.push(r[e])}}return t}let Bu=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[Eu]={skip:!0},"click"===e.type)){let t=!1,r=Ju(e);for(let e=0;e<r.length;e++){if(r[e].nodeType===Node.ELEMENT_NODE)if("label"===r[e].localName)Lu.push(r[e]);else if(n=r[e],ju[n.localName]){let n=qu(r[e]);for(let e=0;e<n.length;e++)t=t||Lu.indexOf(n[e])>-1}if(r[e]===Hu.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function zu(e){let t=Du?["click"]:Ou;for(let n,r=0;r<t.length;r++)n=t[r],e?(Lu.length=0,document.addEventListener(n,Bu,!0)):document.removeEventListener(n,Bu,!0)}function Fu(e){let t=e.type;if(!Nu(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!$u&&(t=Tu[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Hu={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Uu(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function Vu(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Hu.mouse.mouseIgnoreJob||zu(!0),Hu.mouse.target=Ju(e)[0],Hu.mouse.mouseIgnoreJob=wu.debounce(Hu.mouse.mouseIgnoreJob,kl.after(2500),(function(){zu(),Hu.mouse.target=null,Hu.mouse.mouseIgnoreJob=null}))}),!!Iu&&{passive:!0});const Ju=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Yu={},Gu=[];function Ku(e){const t=Ju(e);return t.length>0?t[0]:e.target}function Wu(e){let t,n=e.type,r=e.currentTarget[Pu];if(!r)return;let i=r[n];if(i){if(!e[Eu]&&(e[Eu]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(Hu.touch.id=t.identifier),Hu.touch.id!==t.identifier)return;ku||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)Hu.touch.x=t.clientX,Hu.touch.y=t.clientY,Hu.touch.scrollDecided=!1;else if("touchmove"===n){if(Hu.touch.scrollDecided)return;Hu.touch.scrollDecided=!0;let n=function(e){let t="auto",n=Ju(e);for(let e,r=0;r<n.length;r++)if(e=n[r],e[Au]){t=e[Au];break}return t}(e),r=!1,i=Math.abs(Hu.touch.x-t.clientX),o=Math.abs(Hu.touch.y-t.clientY);e.cancelable&&("none"===n?r=!0:"pan-x"===n?r=o>i:"pan-y"===n&&(r=i>o)),r?e.preventDefault():nd("track")}}(e)}if(t=e[Eu],!t.skip){for(let n,r=0;r<Gu.length;r++)n=Gu[r],i[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let r,o=0;o<Gu.length;o++)r=Gu[o],i[r.name]&&!t[r.name]&&(t[r.name]=!0,r[n](e))}}}function Xu(e,t,n){return!!Yu[t]&&(function(e,t,n){let r=Yu[t],i=r.deps,o=r.name,s=e[Pu];s||(e[Pu]=s={});for(let t,n,r=0;r<i.length;r++)t=i[r],Du&&Nu(t)&&"click"!==t||(n=s[t],n||(s[t]=n={_count:0}),0===n._count&&e.addEventListener(t,Wu,Ru(t)),n[o]=(n[o]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),r.touchAction&&ed(e,r.touchAction)}(e,t,n),!0)}function Qu(e,t,n){return!!Yu[t]&&(function(e,t,n){let r=Yu[t],i=r.deps,o=r.name,s=e[Pu];if(s)for(let t,n,r=0;r<i.length;r++)t=i[r],n=s[t],n&&n[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,Wu,Ru(t)));e.removeEventListener(t,n)}(e,t,n),!0)}function Zu(e){Gu.push(e);for(let t=0;t<e.emits.length;t++)Yu[e.emits[t]]=e}function ed(e,t){ku&&e instanceof HTMLElement&&Pl.run((()=>{e.style.touchAction=t})),e[Au]=t}function td(e,t,n){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,ol(e).dispatchEvent(r),r.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function nd(e){let t=function(e){for(let t,n=0;n<Gu.length;n++){t=Gu[n];for(let n,r=0;r<t.emits.length;r++)if(n=t.emits[r],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function rd(e,t,n,r){t&&td(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(e){return nd(e)}})}function id(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),i=Math.abs(e.y-n);return r>=5||i>=5}function od(e,t,n){if(!t)return;let r,i=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,c=0;i&&(r=o.x-i.x,c=o.y-i.y),td(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:r,ddy:c,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let i=r;if(r=r.shadowRoot.elementFromPoint(e,t),i===r)break;r&&(n=r)}return n}(n.clientX,n.clientY)}})}function sd(e,t,n){let r=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),o=Ku(n||t);!o||Mu[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=25&&i<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Ku(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),r=e.pageX,i=e.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(t))&&(e.prevent||td(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */Zu({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Vu(this.info)},mousedown:function(e){if(!Fu(e))return;let t=Ku(e),n=this;Uu(this.info,(function(e){Fu(e)||(rd("up",t,e),Vu(n.info))}),(function(e){Fu(e)&&rd("up",t,e),Vu(n.info)})),rd("down",t,e)},touchstart:function(e){rd("down",Ku(e),e.changedTouches[0],e)},touchend:function(e){rd("up",Ku(e),e.changedTouches[0],e)}}),Zu({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Vu(this.info)},mousedown:function(e){if(!Fu(e))return;let t=Ku(e),n=this,r=function(e){let r=e.clientX,i=e.clientY;id(n.info,r,i)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&nd("tap"),n.info.addMove({x:r,y:i}),Fu(e)||(n.info.state="end",Vu(n.info)),t&&od(n.info,t,e),n.info.started=!0)};Uu(this.info,r,(function(e){n.info.started&&r(e),Vu(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Ku(e),n=e.changedTouches[0],r=n.clientX,i=n.clientY;id(this.info,r,i)&&("start"===this.info.state&&nd("tap"),this.info.addMove({x:r,y:i}),od(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Ku(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),od(this.info,t,n))}}),Zu({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Fu(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Fu(e)&&sd(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){sd(this.info,e.changedTouches[0],e)}});const ad=Yc((e=>class extends e{_addEventListenerToNode(e,t,n){Xu(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){Qu(e,t,n)||super._removeEventListenerFromNode(e,t,n)}})),cd=/:host\(:dir\((ltr|rtl)\)\)/g,ld=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,ud=/:dir\((?:ltr|rtl)\)/,dd=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),pd=[];
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */let fd=null,hd="";function md(){hd=document.documentElement.getAttribute("dir")}function _d(e){if(!e.__autoDirOptOut){e.setAttribute("dir",hd)}}function gd(){md(),hd=document.documentElement.getAttribute("dir");for(let e=0;e<pd.length;e++)_d(pd[e])}const yd=Yc((e=>{dd||fd||(md(),fd=new MutationObserver(gd),fd.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=$l(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!dd&&ud.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(cd,':host([dir="$1"])'),t=t.replace(ld,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(fd&&fd.takeRecords().length&&gd(),pd.push(this),_d(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=pd.indexOf(this);e>-1&&pd.splice(e,1)}}}return n.__activateDir=!1,n}));
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function vd(){document.body.removeAttribute("unresolved")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function bd(e,t,n){return{index:e,removed:t,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?vd():window.addEventListener("DOMContentLoaded",vd);function wd(e,t,n,r,i,o){let s,a=0,c=0,l=Math.min(n-t,o-i);if(0==t&&0==i&&(a=function(e,t,n){for(let r=0;r<n;r++)if(!Sd(e[r],t[r]))return r;return n}(e,r,l)),n==e.length&&o==r.length&&(c=function(e,t,n){let r=e.length,i=t.length,o=0;for(;o<n&&Sd(e[--r],t[--i]);)o++;return o}(e,r,l-a)),i+=a,o-=c,(n-=c)-(t+=a)==0&&o-i==0)return[];if(t==n){for(s=bd(t,[],0);i<o;)s.removed.push(r[i++]);return[s]}if(i==o)return[bd(t,[],n-t)];let u=function(e){let t=e.length-1,n=e[0].length-1,r=e[t][n],i=[];for(;t>0||n>0;){if(0==t){i.push(2),n--;continue}if(0==n){i.push(3),t--;continue}let o,s=e[t-1][n-1],a=e[t-1][n],c=e[t][n-1];o=a<c?a<s?a:s:c<s?c:s,o==s?(s==r?i.push(0):(i.push(1),r=s),t--,n--):o==a?(i.push(3),t--,r=a):(i.push(2),n--,r=c)}return i.reverse(),i}(function(e,t,n,r,i,o){let s=o-i+1,a=n-t+1,c=new Array(s);for(let e=0;e<s;e++)c[e]=new Array(a),c[e][0]=e;for(let e=0;e<a;e++)c[0][e]=e;for(let n=1;n<s;n++)for(let o=1;o<a;o++)if(Sd(e[t+o-1],r[i+n-1]))c[n][o]=c[n-1][o-1];else{let e=c[n-1][o]+1,t=c[n][o-1]+1;c[n][o]=e<t?e:t}return c}(e,t,n,r,i,o));s=void 0;let d=[],p=t,f=i;for(let e=0;e<u.length;e++)switch(u[e]){case 0:s&&(d.push(s),s=void 0),p++,f++;break;case 1:s||(s=bd(p,[],0)),s.addedCount++,p++,s.removed.push(r[f]),f++;break;case 2:s||(s=bd(p,[],0)),s.addedCount++,p++;break;case 3:s||(s=bd(p,[],0)),s.removed.push(r[f]),f++}return s&&d.push(s),d}function xd(e,t){return wd(e,0,e.length,t,0,t.length)}function Sd(e,t){return e===t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Cd(e){return"slot"===e.localName}let kd=class{static getFlattenedNodes(e){const t=ol(e);return Cd(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>Cd(e)?ol(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Cd(this._target)?this._listenSlots([this._target]):ol(this._target).children&&(this._listenSlots(ol(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Cd(this._target)?this._unlistenSlots([this._target]):ol(this._target).children&&(this._unlistenSlots(ol(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Pl.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=xd(t,this._effectiveNodes);for(let t,r=0;r<n.length&&(t=n[r]);r++)for(let n,r=0;r<t.removed.length&&(n=t.removed[r]);r++)e.removedNodes.push(n);for(let r,i=0;i<n.length&&(r=n[i]);i++)for(let n=r.index;n<r.index+r.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Cd(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Cd(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const Pd=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Cu()}while(e||t)},Ed=Element.prototype,Ad=Ed.matches||Ed.matchesSelector||Ed.mozMatchesSelector||Ed.msMatchesSelector||Ed.oMatchesSelector||Ed.webkitMatchesSelector,Od=function(e,t){return Ad.call(e,t)};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */class Td{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new kd(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(ol(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=ol(t).parentNode||ol(t).host;return t===this.node}getOwnerRoot(){return ol(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?ol(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=ol(this.node).assignedSlot;for(;t;)e.push(t),t=ol(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return ol(n).importNode(e,t)}getEffectiveChildNodes(){return kd.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let r,i=0,o=t.length;i<o&&(r=t[i]);i++)r.nodeType===Node.ELEMENT_NODE&&Od(r,e)&&n.push(r);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function $d(e,t){for(let n=0;n<t.length;n++){let r=t[n];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}class Nd{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let Id=Td;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Td.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=Td.prototype[t])})),$d(e.prototype,["classList"]),Id=e,Object.defineProperties(Nd.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Rd(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const r=n[e];if(Rd(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let r=t[n];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}(Td.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),$d(Td.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let r=t[n];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}(Td.prototype,["textContent","innerHTML","className"]);const Rd=function(e){if((e=e||document)instanceof Id)return e;if(e instanceof Nd)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Nd(e):new Id(e),e.__domApi=t),t},Dd=window.ShadyDOM,Ld=window.ShadyCSS;
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function jd(e,t){return ol(e).getRootNode()===t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Md=window.ShadyCSS;const qd=Yc((e=>{const t=yd(ad(bu(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,r){t!==n&&(super.attributeChangedCallback(e,t,n,r),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let r,i=0;i<n.length&&(r=n[i]);i++){let n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});r.detail=t;let i=n.node||this;return ol(i).dispatchEvent(r),r}listen(e,t,n){e=e||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),i=r.get(e);i||(i={},r.set(e,i));let o=t+n;i[o]||(i[o]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let r=this.__boundListeners&&this.__boundListeners.get(e),i=t+n,o=r&&r[i];o&&(this._removeEventListenerFromNode(e,t,o),r[i]=null)}setScrollDirection(e,t){ed(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=ol(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Rd(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Rd(this).getEffectiveChildNodes()}queryDistributedElements(e){return Rd(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,r=0;n=e[r];r++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Rd(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&ol(t).contains(e)&&ol(t).getRootNode()===ol(e).getRootNode()}isLocalDescendant(e){return this.root===ol(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Dd||!Ld)return null;if(!Dd.handlesDynamicScoping)return null;const n=Ld.ScopingShim;if(!n)return null;const r=n.scopeForNode(e),i=ol(e).getRootNode(),o=e=>{if(!jd(e,i))return;const t=Array.from(Dd.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!jd(o,i))continue;const s=n.currentScopeForNode(o);s!==r&&(""!==s&&n.unscopeNode(o,s),n.scopeNode(o,r))}};if(o(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Md.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=wu.debounce(this._debouncers[e],n>0?kl.after(n):Pl,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?kl.run(e.bind(this),t):~Pl.run(e.bind(this))}cancelAsync(e){e<0?Pl.cancel(~e):kl.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return Od(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(ol(n).setAttribute(e,""),!0):(ol(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,r){r=r||this,this.transform("translate3d("+e+","+t+","+n+")",r)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else{if(n=fl(this,e).indexOf(t),n>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return r.prototype.is="",r})),Bd={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},zd={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Fd=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},zd);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Hd(e,t,n,r){!function(e,t,n){const r=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let o=0;o<i.length;o++){let s=i[o];if(!(s in n))if(r)t[s]=e[s];else{let n=Object.getOwnPropertyDescriptor(e,s);n&&(n.configurable=!0,Object.defineProperty(t,s,n))}}}(t,e,r);for(let e in Bd)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function Ud(e,t,n){t=t||[];for(let r=e.length-1;r>=0;r--){let i=e[r];i?Array.isArray(i)?Ud(i,t):t.indexOf(i)<0&&(!n||n.indexOf(i)<0)&&t.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return t}function Vd(e,t){for(const n in t){const r=e[n],i=t[n];e[n]=!("value"in i)&&r&&"value"in r?Object.assign({value:r.value},i):i}}function Jd(e,t,n){let r;const i={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let e,t=0;t<r.length;t++)e=r[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(r)for(let e=0;e<r.length;e++)Vd(t,r[e].properties);return Vd(t,e.properties),t}static get observers(){let t=[];if(r)for(let e,n=0;n<r.length;n++)e=r[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=i.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let n=i.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=i.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=i.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=i.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=i.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=i.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=i.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let r=i.attributeChanged;if(r)for(let i=0;i<r.length;i++)r[i].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;r=Ud(n,null,e),o.prototype.behaviors=e?e.concat(n):r}return(t=>{r&&function(e,t,n){for(let r=0;r<t.length;r++)Hd(e,t[r],n,Fd)}(t,r,i),Hd(t,e,i,zd)})(o.prototype),o.generatedFrom=e,o}const Yd=function(e){let t;return t="function"==typeof e?e:Yd.Class(e),customElements.define(t.is,t),t};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function Gd(e,t,n,r,i){let o;i&&(o="object"==typeof n&&null!==n,o&&(r=e.__dataTemp[t]));let s=r!==n&&(r==r||n==n);return o&&s&&(e.__dataTemp[t]=n),s}Yd.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(qd(HTMLElement)):qd(HTMLElement);return n=Jd(e,n,e.behaviors),n.is=n.prototype.is=e.is,n};const Kd=Yc((e=>class extends e{_shouldPropertyChange(e,t,n){return Gd(this,e,t,n,!0)}})),Wd=Yc((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return Gd(this,e,t,n,this.mutableData)}}));Kd._mutablePropertyChange=Gd;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Xd=null;function Qd(){return Xd}Qd.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Qd,writable:!0}});const Zd=_u(Qd),ep=Kd(Zd);const tp=_u(class{});class np extends tp{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,n(e)}));else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let r=t[n];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),ol(ol(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const e=r.__polymerReplaced__;e&&ol(ol(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}const rp=Kd(np);function ip(e,t,n){let r=n.mutableData?rp:np;cp.mixin&&(r=cp.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(e),function(e,t,n,r){let i=n.hostProps||{};for(let t in r.instanceProps){delete i[t];let n=r.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ap(t,n)})}if(r.forwardHostProp&&t.__dataHost)for(let t in i)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(i,e,t,n),i}function op(e,t,n){let r=n.forwardHostProp;if(r&&t.hasHostProps){let i=t.templatizeTemplateClass;if(!i){let e=n.mutableData?ep:Zd;i=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)i.prototype._addPropertyEffect("_host_"+e,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:sp(e,r)}),i.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){Xd=e,Object.setPrototypeOf(e,t.prototype),new t,Xd=null}(e,i),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function sp(e,t){return function(e,n,r){t.call(e.__templatizeOwner,n.substring("_host_".length),r[n])}}function ap(e,t){return function(e,n,r){t.call(e.__templatizeOwner,e,n,r[n])}}function cp(e,t,n){if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let r=(t?t.constructor:np)._parseTemplate(e),i=r.templatizeInstanceClass;i||(i=ip(e,r,n),r.templatizeInstanceClass=i),op(e,r,n);let o=class extends i{};return o.prototype._methodHost=function(e){let t=e.__dataHost;return t&&t._methodHost||t}(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=r.hostProps,o=o,o}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const lp=ad(Wd(_u(HTMLElement)));customElements.define("dom-bind",class extends lp{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,r){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){ol(ol(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class up{constructor(e){this.value=e.toString()}toString(){return this.value}}function dp(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof up)return function(e){if(e instanceof up)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const pp=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce(((t,n,r)=>t+dp(n)+e[r+1]),e[0]),n},fp=bu(HTMLElement),hp=Wd(fp);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */class mp extends hp{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=ol(ol(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=cp(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let r,i=0;i<n.length&&(r=n[i]);i++)r.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((r=this.as)===(i=t)||cl(r,i)||ll(r,i)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=n);let i=ul(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(i,n)}var r,i}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame((()=>this.__renderChunk()))}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=wu.debounce(this.__renderDebouncer,t>0?kl.after(t):Pl,e.bind(this)),Su(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Pd()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter(((t,n,r)=>this.__filterFn(e[t],n,r)))),this.__sortFn&&t.sort(((t,n)=>this.__sortFn(e[t],e[n])));const n=this.__itemsIdxToInstIdx={};let r=0;const i=Math.min(t.length,this.__limit);for(;r<i;r++){let i=this.__instances[r],o=t[r],s=e[o];n[o]=r,i?(i._setPendingProperty(this.as,s),i._setPendingProperty(this.indexAs,r),i._setPendingProperty(this.itemsIndexAs,o),i._flushProperties()):this.__insertInstance(s,r,o)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=ol(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];n.appendChild(r)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(e,t,n){let r=this.__pool.pop();r?(r._setPendingProperty(this.as,e),r._setPendingProperty(this.indexAs,t),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):r=this.__stampInstance(e,t,n);let i=this.__instances[t+1],o=i?i.children[0]:this;return ol(ol(this).parentNode).insertBefore(r.root,o),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),r=n.indexOf("."),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){let e=r<0?"":n.substring(r+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[i],s=this.__instances[o];if(s){let n=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(n,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=ol(t).parentNode;return null}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(this.template,e)}}customElements.define(mp.is,mp);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class _p extends fp{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=wu.debounce(this.__renderDebouncer,Pl,(()=>this.__render())),Su(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=ol(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||ol(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Pd()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=ol(this).parentNode;if(e){if(!this.__ctor){let e=ol(this).querySelector("template");if(!e){let e=new MutationObserver((()=>{if(!ol(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__ctor=cp(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[al(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(ol(this).previousSibling!==t[t.length-1])for(let n,r=0;r<t.length&&(n=t[r]);r++)ol(e).insertBefore(n,this)}}else this.__instance=new this.__ctor,ol(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=ol(e[0]).parentNode;if(t){t=ol(t);for(let n,r=0;r<e.length&&(n=e[r]);r++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(_p.is,_p);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let gp=Yc((e=>{let t=bu(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=xd(n,r);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let r=e[n];t.forEach(((e,n)=>{e<r.index||(e>=r.index+r.removed.length?t.set(n,e+r.addedCount-r.removed.length):t.set(n,-1))}));for(let e=0;e<r.addedCount;e++){let n=r.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach(((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(r)):n++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((n,r)=>{t==e++&&this.deselect(r)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}}))(fp);class yp extends gp{static get is(){return"array-selector"}static get template(){return null}}customElements.define(yp.is,yp);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const vp=new Rc;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){vp.processStyles(),uc(e,t)},styleElement(e){vp.processStyles()},styleDocument(e){vp.processStyles(),uc(document.body,e)},getComputedStyleValue:(e,t)=>dc(e,t),flushCustomStyles(){},nativeCss:qa,nativeShadow:Ra,cssBuild:La,disableRuntime:Ma}),window.ShadyCSS.CustomStyleInterface=vp;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const bp="include",wp=window.ShadyCSS.CustomStyleInterface;class xp extends HTMLElement{constructor(){super(),this._style=null,wp.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(bp);return t&&(e.removeAttribute(bp),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=il(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",xp);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
qd(HTMLElement).prototype;
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const Sp=pp`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Sp.setAttribute("style","display: none;"),document.head.appendChild(Sp.content);var Cp=document.createElement("style");Cp.textContent="[hidden] { display: none !important; }",document.head.appendChild(Cp),
/**
    @license
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
Yd({_template:pp`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var n=this._resolveSrc(e);n!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=n,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=zc(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}});
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
const kp=pp`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;kp.setAttribute("style","display: none;"),document.head.appendChild(kp.content);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
const Pp=pp`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;Pp.setAttribute("style","display: none;"),document.head.appendChild(Pp.content);
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
const Ep=pp`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Ep.setAttribute("style","display: none;"),document.head.appendChild(Ep.content);
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
const Ap=pp`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;function Op(t){let n,r,i,o,s,a,c,l,u;return{c(){n=g("mwc-top-app-bar"),r=g("mwc-icon-button"),i=v(),o=g("div"),s=y(t[0]),a=v(),c=g("mwc-icon-button"),l=v(),u=g("div"),C(r,"icon","menu"),C(r,"slot","navigationIcon"),x(o,"slot","title"),C(c,"icon","add"),C(c,"slot","actionItems")},m(e,t){m(e,n,t),h(n,r),h(n,i),h(n,o),h(o,s),h(n,a),h(n,c),h(n,l),h(n,u)},p(e,[t]){1&t&&k(s,e[0])},i:e,o:e,d(e){e&&_(n)}}}function Tp(e,t,n){let{title:r=""}=t;return e.$$set=e=>{"title"in e&&n(0,r=e.title)},[r]}Ap.setAttribute("style","display: none;"),document.head.appendChild(Ap.content),
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
Yd({_template:pp`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),n=this.getAttribute("aria-label");"string"==typeof n&&n!==t||this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}});class $p extends oe{constructor(e){super(),ie(this,e,Tp,Op,s,{title:0})}}function Np(e,t,n){const r=e.slice();return r[4]=t[n],r}function Ip(e){let t,n;function r(){return e[2](e[4])}return{c(){t=g("mwc-icon-button"),C(t,"icon","delete"),C(t,"onclick",n=r),C(t,"class","svelte-16zk576")},m(e,n){m(e,t,n)},p(i,o){e=i,3&o&&n!==(n=r)&&C(t,"onclick",n)},d(e){e&&_(t)}}}function Rp(e){let t,n;function r(){return e[3](e[4])}return{c(){t=g("mwc-icon-button"),C(t,"icon","edit"),C(t,"onclick",n=r),C(t,"class","svelte-16zk576")},m(e,n){m(e,t,n)},p(i,o){e=i,3&o&&n!==(n=r)&&C(t,"onclick",n)},d(e){e&&_(t)}}}function Dp(e){let t,n,r,i,o,s,a,c,l,u,d,p,f,b,w,S,P,E,A,O,T,$,N=e[4].author+"",I=e[4].price+"";return P=new Le({props:{to:"delete/",$$slots:{default:[Ip]},$$scope:{ctx:e}}}),A=new Le({props:{to:"edit/",$$slots:{default:[Rp]},$$scope:{ctx:e}}}),{c(){t=g("paper-card"),n=g("div"),r=g("div"),i=g("img"),c=v(),l=g("div"),u=y("Ecrit par "),d=y(N),p=y(" au prix de "),f=y(I),b=v(),w=g("div"),S=g("nav"),ee(P.$$.fragment),E=v(),ee(A.$$.fragment),O=v(),i.src!==(o="data:image/jpeg;base64, "+e[4].img.data)&&x(i,"src",o),x(i,"alt",s=e[4].title),x(i,"title",a=e[4].title),x(l,"class","card-content"),x(w,"class","card-action"),x(n,"class","card-info svelte-16zk576"),C(t,"heading",T=e[4].title),C(t,"class","svelte-16zk576")},m(e,o){m(e,t,o),h(t,n),h(n,r),h(r,i),h(r,c),h(r,l),h(l,u),h(l,d),h(l,p),h(l,f),h(n,b),h(n,w),h(w,S),te(P,S,null),h(S,E),te(A,S,null),h(t,O),$=!0},p(e,n){(!$||2&n&&i.src!==(o="data:image/jpeg;base64, "+e[4].img.data))&&x(i,"src",o),(!$||2&n&&s!==(s=e[4].title))&&x(i,"alt",s),(!$||2&n&&a!==(a=e[4].title))&&x(i,"title",a),(!$||2&n)&&N!==(N=e[4].author+"")&&k(d,N),(!$||2&n)&&I!==(I=e[4].price+"")&&k(f,I);const r={};131&n&&(r.$$scope={dirty:n,ctx:e}),P.$set(r);const c={};131&n&&(c.$$scope={dirty:n,ctx:e}),A.$set(c),(!$||2&n&&T!==(T=e[4].title))&&C(t,"heading",T)},i(e){$||(K(P.$$.fragment,e),K(A.$$.fragment,e),$=!0)},o(e){W(P.$$.fragment,e),W(A.$$.fragment,e),$=!1},d(e){e&&_(t),ne(P),ne(A)}}}function Lp(e){let t,n,r,i;t=new $p({props:{title:jp}});let o=e[1],s=[];for(let t=0;t<o.length;t+=1)s[t]=Dp(Np(e,o,t));const a=e=>W(s[e],1,1,(()=>{s[e]=null}));return{c(){ee(t.$$.fragment),n=v();for(let e=0;e<s.length;e+=1)s[e].c();r=b()},m(e,o){te(t,e,o),m(e,n,o);for(let t=0;t<s.length;t+=1)s[t].m(e,o);m(e,r,o),i=!0},p(e,[t]){if(3&t){let n;for(o=e[1],n=0;n<o.length;n+=1){const i=Np(e,o,n);s[n]?(s[n].p(i,t),K(s[n],1)):(s[n]=Dp(i),s[n].c(),K(s[n],1),s[n].m(r.parentNode,r))}for(Y(),n=o.length;n<s.length;n+=1)a(n);G()}},i(e){if(!i){K(t.$$.fragment,e);for(let e=0;e<o.length;e+=1)K(s[e]);i=!0}},o(e){W(t.$$.fragment,e),s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)W(s[e]);i=!1},d(e){ne(t,e),e&&_(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(s,e),e&&_(r)}}}let jp="BookAPP - Accueil";function Mp(e,t,n){let{books:r=[]}=t,{idBook:i=null}=t;return e.$$set=e=>{"books"in e&&n(1,r=e.books),"idBook"in e&&n(0,i=e.idBook)},e.$$.update=()=>{2&e.$$.dirty&&r&&console.log(r)},[i,r,e=>{n(0,i=e._id)},e=>{n(0,i=e._id)}]}class qp extends oe{constructor(e){super(),ie(this,e,Mp,Lp,s,{books:1,idBook:0})}}function Bp(t){let n,r,i,o,s,a;return n=new $p({props:{title:zp}}),{c(){ee(n.$$.fragment),r=y("\r\nÊtes vous sûr de vouloir supprimer ce livre ?\r\n"),i=g("button"),i.textContent="Supprimer"},m(e,c){te(n,e,c),m(e,r,c),m(e,i,c),o=!0,s||(a=w(i,"click",t[0]),s=!0)},p:e,i(e){o||(K(n.$$.fragment,e),o=!0)},o(e){W(n.$$.fragment,e),o=!1},d(e){ne(n,e),e&&_(r),e&&_(i),s=!1,a()}}}let zp="BookAPP - Supression";function Fp(e,t,n){let{db:r=null}=t,{idBook:i=null}=t;return e.$$set=e=>{"db"in e&&n(1,r=e.db),"idBook"in e&&n(2,i=e.idBook)},e.$$.update=()=>{4&e.$$.dirty&&i&&console.log(i),6&e.$$.dirty&&r&&i&&console.log("ok")},[async function(){await r.delete_book(i),window.location.href="/"},r,i]}class Hp extends oe{constructor(e){super(),ie(this,e,Fp,Bp,s,{db:1,idBook:2})}}function Up(t){let n,r;return n=new $p({props:{title:Vp}}),{c(){ee(n.$$.fragment)},m(e,t){te(n,e,t),r=!0},p:e,i(e){r||(K(n.$$.fragment,e),r=!0)},o(e){W(n.$$.fragment,e),r=!1},d(e){ne(n,e)}}}let Vp="BookAPP - Modification";function Jp(e,t,n){let r={},{db:i=null}=t,{idBook:o=null}=t;return e.$$set=e=>{"db"in e&&n(0,i=e.db),"idBook"in e&&n(1,o=e.idBook)},e.$$.update=()=>{2&e.$$.dirty&&o&&console.log(o),3&e.$$.dirty&&i&&o&&async function(){r=await i.load_book(o),console.log(r)}()},[i,o]}class Yp extends oe{constructor(e){super(),ie(this,e,Jp,Up,s,{db:0,idBook:1})}}function Gp(e){let t,n;return t=new Hp({props:{db:e[2],idBook:e[3]}}),{c(){ee(t.$$.fragment)},m(e,r){te(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.db=e[2]),8&n&&(r.idBook=e[3]),t.$set(r)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){ne(t,e)}}}function Kp(e){let t,n;return t=new Yp({props:{db:e[2],idBook:e[3]}}),{c(){ee(t.$$.fragment)},m(e,r){te(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.db=e[2]),8&n&&(r.idBook=e[3]),t.$set(r)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){ne(t,e)}}}function Wp(e){let t,n,r;function i(t){e[6].call(null,t)}let o={books:e[1]};return void 0!==e[3]&&(o.idBook=e[3]),t=new qp({props:o}),R.push((()=>Z(t,"idBook",i))),{c(){ee(t.$$.fragment)},m(e,n){te(t,e,n),r=!0},p(e,r){const i={};2&r&&(i.books=e[1]),!n&&8&r&&(n=!0,i.idBook=e[3],B((()=>n=!1))),t.$set(i)},i(e){r||(K(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){ne(t,e)}}}function Xp(e){let t,n,r,i,o,s,a,c,l;return n=new Ie({props:{path:"add",component:Hp}}),i=new Ie({props:{path:"delete",$$slots:{default:[Gp]},$$scope:{ctx:e}}}),s=new Ie({props:{path:"edit",$$slots:{default:[Kp]},$$scope:{ctx:e}}}),c=new Ie({props:{path:"/",$$slots:{default:[Wp]},$$scope:{ctx:e}}}),{c(){t=g("div"),ee(n.$$.fragment),r=v(),ee(i.$$.fragment),o=v(),ee(s.$$.fragment),a=v(),ee(c.$$.fragment)},m(e,u){m(e,t,u),te(n,t,null),h(t,r),te(i,t,null),h(t,o),te(s,t,null),h(t,a),te(c,t,null),l=!0},p(e,t){const n={};268&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const r={};268&t&&(r.$$scope={dirty:t,ctx:e}),s.$set(r);const o={};266&t&&(o.$$scope={dirty:t,ctx:e}),c.$set(o)},i(e){l||(K(n.$$.fragment,e),K(i.$$.fragment,e),K(s.$$.fragment,e),K(c.$$.fragment,e),l=!0)},o(e){W(n.$$.fragment,e),W(i.$$.fragment,e),W(s.$$.fragment,e),W(c.$$.fragment,e),l=!1},d(e){e&&_(t),ne(n),ne(i),ne(s),ne(c)}}}function Qp(e){let t,n,r,i,o,s,a,c;function l(t){e[5].call(null,t)}let u={initsrc:"./books.json",collection:"books"};return void 0!==e[1]&&(u.documents=e[1]),i=new Ia({props:u}),e[4](i),R.push((()=>Z(i,"documents",l))),a=new ke({props:{url:e[0],$$slots:{default:[Xp]},$$scope:{ctx:e}}}),{c(){t=g("link"),n=v(),r=g("main"),ee(i.$$.fragment),s=v(),ee(a.$$.fragment),x(t,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),x(t,"rel","stylesheet")},m(e,o){m(e,t,o),m(e,n,o),m(e,r,o),te(i,r,null),h(r,s),te(a,r,null),c=!0},p(e,[t]){const n={};!o&&2&t&&(o=!0,n.documents=e[1],B((()=>o=!1))),i.$set(n);const r={};1&t&&(r.url=e[0]),270&t&&(r.$$scope={dirty:t,ctx:e}),a.$set(r)},i(e){c||(K(i.$$.fragment,e),K(a.$$.fragment,e),c=!0)},o(e){W(i.$$.fragment,e),W(a.$$.fragment,e),c=!1},d(o){o&&_(t),o&&_(n),o&&_(r),e[4](null),ne(i),ne(a)}}}function Zp(e,t,n){let r=[],i=null,o=null,{url:s=""}=t;return e.$$set=e=>{"url"in e&&n(0,s=e.url)},[s,r,i,o,function(e){R[e?"unshift":"push"]((()=>{i=e,n(2,i)}))},function(e){r=e,n(1,r)},function(e){o=e,n(3,o)}]}return new class extends oe{constructor(e){super(),ie(this,e,Zp,Qp,s,{url:0})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
