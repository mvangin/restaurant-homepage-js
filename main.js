!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{document.querySelector(".content").innerHTML=""};var o=()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.innerHTML="Come visit us! <br> La bobs restaurant <br> 345 tundra street",t.classList.add("contact"),e.appendChild(t)};var a=()=>{const e=document.createElement("h1"),t=document.querySelector(".content");e.classList="home",e.innerHTML="This is la-bobs restaurant. The best restaurant in town!",t.appendChild(e)};var c=()=>{const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");t.textContent="Salami",t.classList.add("foodItem"),e.appendChild(t),n.textContent="Pastrami",n.classList.add("foodItem"),e.appendChild(n),r.textContent="nuggets",r.classList.add("foodItem"),e.appendChild(r),o.textContent="sasquatch",o.classList.add("foodItem"),e.appendChild(o)};var d=()=>{const e=document.querySelector(".navbar"),t=document.createElement("Button");t.classList.add("navButton"),t.textContent="Home",e.appendChild(t),t.addEventListener("click",()=>{r(),a()});const n=document.createElement("Button");n.classList.add("navButton"),n.textContent="Menu",e.appendChild(n),n.addEventListener("click",()=>{r(),c()});const d=document.createElement("Button");d.classList.add("navButton"),d.textContent="Contact",e.appendChild(d),d.addEventListener("click",()=>{r(),o()})};(()=>{const e=document.createElement("img");e.src="images/restaurant-banner.jpg",e.style.width="100%";document.querySelector(".banner").appendChild(e)})(),d()}]);