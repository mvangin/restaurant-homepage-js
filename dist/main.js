!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d=()=>{document.querySelector(".content").innerHTML=""};var a=()=>{const e=document.createElement("div");e.classList.add("contactWrapper");const t=document.querySelector(".content"),n=document.createElement("div"),d=document.createElement("div");n.innerHTML="Come visit us! <br> ",n.classList.add("contact"),e.appendChild(n),d.innerHTML=" <i> La bobs restaurant <br> 345 tundra street <i>",d.classList.add("contactTagLine"),e.appendChild(d),t.appendChild(e)};var o=()=>{const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");t.classList.add("menuWrapper"),n.textContent="Menu",n.classList.add("menuTitle"),t.appendChild(n),d.textContent="Salami",d.classList.add("foodItem"),t.appendChild(d),a.textContent="Pastrami",a.classList.add("foodItem"),t.appendChild(a),o.textContent="nuggets",o.classList.add("foodItem"),t.appendChild(o),r.textContent="sasquatch",r.classList.add("foodItem"),t.appendChild(r),e.appendChild(t)};var r=()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("h1");e.classList.add("homeWrapper");const a=document.querySelector(".content");t.classList="home",n.classList="homeTagLine",t.innerHTML="This is la-bobs restaurant.",n.innerHTML="<i> The best restuarant in town </i>";const r=document.createElement("Button");r.classList.add("menuButtonHome"),r.textContent="See our Menu!",e.appendChild(t),e.appendChild(n),a.appendChild(e),a.appendChild(r),r.addEventListener("click",()=>{d(),o()})};var c=()=>{const e=document.querySelector(".navbar"),t=document.createElement("Button");t.classList.add("navButton"),t.textContent="Home",e.appendChild(t),t.addEventListener("click",()=>{d(),r()});const n=document.createElement("Button");n.classList.add("navButton"),n.textContent="Menu",e.appendChild(n),n.addEventListener("click",()=>{d(),o()});const c=document.createElement("Button");c.classList.add("navButton"),c.textContent="Contact",e.appendChild(c),c.addEventListener("click",()=>{d(),a()})};(()=>{c(),r()})()}]);