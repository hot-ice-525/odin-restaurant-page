(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var c=r.length-1;c>-1&&(!t||!/^http(s?):/.test(t));)t=r[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"82742923ad5808874e61.jpg",n=e.p+"5de99914a59ea3e0c090.jpg";console.log("hello"),function(){const e=document.querySelector("header > nav"),n=document.querySelector("div#content"),r=document.createElement("button");r.innerText="Home",r.classList.add("home"),e.appendChild(r);const c=document.createElement("button");c.innerText="Menu",c.classList.add("menu"),e.appendChild(c);const o=document.createElement("h1");o.innerText="Welcome to our restaurant",n.appendChild(o);const a=document.createElement("img");a.setAttribute("src",t),n.appendChild(a);const i=document.createElement("p");i.innerHTML="Our restaurant is the ulimate place for all your hunger needs,<br>just wanna grab a quick bite while you are on road? YOU ARE MOST WELCOME",n.appendChild(i)}();const r=document.querySelector("div#content"),c=document.querySelector(".home"),o=document.querySelector(".menu");c.addEventListener("click",(()=>{r.innerHTML="",function(){const e=document.querySelector("#content"),n=document.createElement("h1");n.innerText="Welcome to our restaurant",e.appendChild(n);const r=document.createElement("img");r.setAttribute("src",t),e.appendChild(r);const c=document.createElement("p");c.innerHTML="Our restaurant is the ulimate place for all your hunger needs,<br>just wanna grab a quick bite while you are on road? YOU ARE MOST WELCOME",e.appendChild(c)}()})),o.addEventListener("click",(()=>{r.innerHTML="",function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.innerText="Menu",e.appendChild(t);const r=document.createElement("img");r.setAttribute("src",n),e.appendChild(r);const c=document.createElement("p");c.innerHTML="<i>Custom orders also available</i>",e.appendChild(c)}()}))})();