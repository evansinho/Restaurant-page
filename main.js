!function(e){var n={};function t(d){if(n[d])return n[d].exports;var a=n[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,d){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:d})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(d,a,function(n){return e[n]}.bind(null,a));return d},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var d=()=>{const e=document.createElement("nav"),n=document.createElement("div");n.classList.add("nav-logo");const t=document.createElement("h1");t.innerText="AFRICAN KITCHEN",n.appendChild(t);const d=document.createElement("ul");d.classList.add("nav-list");const a=document.createElement("li"),c=document.createElement("a");c.innerText="HOME",a.classList.add("nav-items"),a.id="home",a.appendChild(c);const i=document.createElement("li"),l=document.createElement("a");l.innerText="MENU",i.classList.add("nav-items"),i.id="menu",i.appendChild(l);const s=document.createElement("li"),r=document.createElement("a");return r.innerText="CONTACT",s.classList.add("nav-items"),s.id="contact",s.appendChild(r),d.appendChild(a),d.appendChild(i),d.appendChild(s),e.appendChild(n),e.appendChild(d),e};var a=()=>{const e=document.createElement("div");e.classList.add("showcase");const n=document.createElement("h1");n.innerText="WELCOME TO AFRICAN KITCHEN";const t=document.createElement("p");t.innerText="The home of Africa's finest cuisines.";const d=document.createElement("button"),a=document.createElement("a");return a.innerText="VIEW MENU",d.appendChild(a),e.appendChild(n),e.appendChild(t),e.appendChild(d),e};var c=()=>{const e=document.createElement("div");e.classList.add("menu-container");const n=document.createElement("div");n.classList.add("menu-card");const t=document.createElement("div");t.classList.add("menu-img-1");const d=document.createElement("div");d.classList.add("menu-name");const a=document.createElement("h5");a.innerText="YAM & EGG",d.appendChild(a),n.appendChild(t),n.appendChild(d);const c=document.createElement("div");c.classList.add("menu-card");const i=document.createElement("div");i.classList.add("menu-img-2");const l=document.createElement("div");l.classList.add("menu-name");const s=document.createElement("h5");s.innerText="AFANG SOUP",l.appendChild(s),c.appendChild(i),c.appendChild(l);const r=document.createElement("div");r.classList.add("menu-card");const o=document.createElement("div");o.classList.add("menu-img-3");const m=document.createElement("div");m.classList.add("menu-name");const u=document.createElement("h5");u.innerText="EGUSI SOUP",m.appendChild(u),r.appendChild(o),r.appendChild(m);const p=document.createElement("div");p.classList.add("menu-card");const E=document.createElement("div");E.classList.add("menu-img-4");const h=document.createElement("div");h.classList.add("menu-name");const C=document.createElement("h5");C.innerText="JOLLOF RICE",h.appendChild(C),p.appendChild(E),p.appendChild(h);const v=document.createElement("div");v.classList.add("menu-card");const f=document.createElement("div");f.classList.add("menu-img-5");const L=document.createElement("div");L.classList.add("menu-name");const b=document.createElement("h5");b.innerText="AGOYIN BEANS",L.appendChild(b),v.appendChild(f),v.appendChild(L);const T=document.createElement("div");T.classList.add("menu-card");const x=document.createElement("div");x.classList.add("menu-img-6");const g=document.createElement("div");g.classList.add("menu-name");const O=document.createElement("h5");return O.innerText="DONKUNU",g.appendChild(O),T.appendChild(x),T.appendChild(g),e.appendChild(n),e.appendChild(c),e.appendChild(r),e.appendChild(p),e.appendChild(v),e.appendChild(T),e};var i=()=>{const e=document.createElement("div");e.classList.add("contact-container");const n=document.createElement("h2"),t=document.createElement("form");return t.innerHTML='\n    <div class="form-group">\n      <label for="name">NAME:</label>\n      <input type="text" placeholder="Enter Name">\n    </div>\n    <div class="form-group">\n        <label for="email">Email:</label>\n        <input type="email" placeholder="Enter Email">\n    </div>\n    <div class="form-group">\n      <label for="message" class="message">MESSAGE:</label>\n      <textarea name="message" id="" cols="50" rows="10"></textarea>\n    </div>\n    <div class="form-group">\n        <input type="submit" name="submit">\n    </div>\n  ',e.appendChild(n),e.appendChild(t),e};const l=d(),s=a(),r=c(),o=i(),m=document.querySelector("#content");m.appendChild(l),m.appendChild(s),m.appendChild(r),m.appendChild(o)}]);