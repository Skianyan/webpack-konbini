(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>g});var o=n(601),r=n.n(o),a=n(314),i=n.n(a),c=n(417),s=n.n(c),d=new URL(n(33),n.b),l=new URL(n(494),n.b),u=new URL(n(123),n.b),p=i()(r()),f=s()(d),m=s()(l),h=s()(u);p.push([t.id,`@font-face {\n\tfont-family: "Jacquard12";\n\tsrc: url(${f}) format("truetype");\n}\n@font-face {\n\tfont-family: "Jaro";\n\tsrc: url(${m}) format("truetype");\n}\nbody {\n\tpadding: 0px;\n\tmargin: 0px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground-image: url(${h});\n\tbackground-size: cover;\n}\n.tab {\n\tpadding: 15px 20px;\n\tbackground-color: rgb(142, 108, 162);\n}\n.tab:hover {\n\tbackground-color: rgb(98, 65, 115);\n}\n.box {\n\tbackground-color: bisque;\n\tpadding: 20px;\n\tmargin: 25px;\n\twidth: 500px;\n\tborder-radius: 10px;\n\tbox-shadow: 5px 5px rgba(60, 41, 107, 0.673);\n}\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 25px;\n\tmargin: 20px;\n\twidth: 750px;\n\tbackground-color: rgba(133, 171, 215, 0.5);\n\tborder-radius: 10px;\n}\n#navigation {\n\tdisplay: flex;\n\tgap: 10px;\n\tbackground-color: rgb(204, 130, 199);\n\tjustify-content: center;\n\twidth: 100vw;\n\tcolor: rgb(35, 30, 40);\n\tfont-family: "Jaro";\n}\n.title {\n\tfont-weight: bold;\n\tfont-size: large;\n}\n@media only screen and (max-width: 768px) {\n\tbody {\n\t\tbackground-size: contain;\n\t}\n\t#content {\n\t\twidth: 80%;\n\t}\n\t.box {\n\t\twidth: 95%;\n\t}\n}\n`,""]);const g=p},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=o(t,r),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},33:(t,e,n)=>{t.exports=n.p+"3d111ba887a79b61412a.ttf"},494:(t,e,n)=>{t.exports=n.p+"3346c879d863ecb8ac51.ttf"},123:(t,e,n)=>{t.exports=n.p+"a6a4392620b3d8db4f0f.jpg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),i=n.n(a),c=n(659),s=n.n(c),d=n(56),l=n.n(d),u=n(540),p=n.n(u),f=n(113),m=n.n(f),h=n(208),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=n.p+"3077f37328d71d0a06cc3becdf280557.png",b=n.p+"432d578f4d1966279af8dd578a6eb84c.png",y=n.p+"957d10ce5292772443d6476a5c275881.png",x=n.p+"82e8ff308ad7d41233c9d7058f385138.png";function C(){const t=document.getElementById("content");t.textContent="";const e=document.createElement("div");e.className="title",e.textContent="Ode to convenience stores",t.appendChild(e),[{title:"Setting the Scene.",text:"Have you ever been in a time of need? its 2am on a thursday night, no store open in sight, at the end of a long and dim street you see a light, ''could it be?'' - you think to yourself, ''i think it is!'' - says your buddy, almost passed out. and so it was, a konbini saves your life once again"},{title:"Hours",text:"24/7 365 days a year"},{title:"Location",text:"Spawns whenever you need one the most"}].forEach((e=>{const n=document.createElement("div");n.className="box";const o=document.createElement("div");o.className="title",o.textContent=e.title,n.appendChild(o);const r=document.createElement("div");r.textContent=e.text,n.appendChild(r),t.appendChild(n)}))}var w=n(123);document.body.style.backgroundImage=w;const E=document.getElementById("navigation");[{title:"Home",displayFunction:C},{title:"Products",displayFunction:function(){const t=document.getElementById("content");t.textContent="";const e=document.createElement("div");e.className="title",e.textContent="Products",t.appendChild(e),[{title:"Energy Drinks",img:b,text:"may not have the best flavors stocked"},{title:"Various chips",img:v,text:"grab the sour cream and onion, coward"},{title:"Selection of cookies",img:x,text:"yes im still a child at heart"},{title:"Lighter",img:y,text:"might come in handy"}].forEach((e=>{const n=document.createElement("div");n.className="box";const o=document.createElement("div");o.className="title",o.textContent=e.title,n.appendChild(o);const r=new Image(100,100);r.className="image",r.src=e.img,n.appendChild(r);const a=document.createElement("div");a.textContent=e.text,n.appendChild(a),t.appendChild(n)}))}},{title:"About",displayFunction:function(){const t=document.getElementById("content");t.textContent="";const e=document.createElement("div");e.className="title",e.textContent="About.",t.appendChild(e),[{title:"Author",text:"skianyan@github.com"},{title:"Image credits",text:"Freepik - Chips, pngfre - lighter, pngtree - energy drink, purepng - cookies"}].forEach((e=>{const n=document.createElement("div");n.className="box";const o=document.createElement("div");o.className="title",o.textContent=e.title,n.appendChild(o);const r=document.createElement("div");r.textContent=e.text,n.appendChild(r),t.appendChild(n)}))}}].forEach((t=>{const e=document.createElement("div");e.classList.add("tab"),e.textContent=t.title,e.addEventListener("click",t.displayFunction),E.appendChild(e)})),C()})();