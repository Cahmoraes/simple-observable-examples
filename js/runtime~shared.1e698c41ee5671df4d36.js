(()=>{"use strict";var e,t,r,a,o,n,i={},l={};function d(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return i[e](t,t.exports,d),t.exports}d.m=i,d.x=e=>{},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var o=Object.create(null);d.r(o);var n={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>n[e]=()=>r[e]));return n.default=()=>r,d.d(o,n),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"./js/"+(179===e?"main":e)+"."+{41:"239174888be4e18cb135",79:"01b47ef753e3f9ffd8c5",102:"f6e2bbf8d31ad89fc6eb",179:"c8f9d24c637f172d5b07",489:"ce04f18c25aa9d5a82fd",515:"cf3eebb1b1dbe990744b",539:"3983af4e383013d46cf0",724:"71fbd8b61a22a45a88c5",895:"18f5e85a4b39a17c5e53",920:"76b04d00111cd584e5ca",999:"8d9438292aab0a4c6433"}[e]+".js",d.miniCssF=e=>"./css/style."+{102:"ad596ee8b60f6088b1f6",179:"11b58818e8447b7591a8",489:"c2b7f698fa4079bf3f71",895:"c67d0fa93d92385296bf",999:"c8d659fbdbb6ea1510dc"}[e]+".css",d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="revisao-10-02-2021:",d.l=(e,t,o,n)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==o)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var u=f[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",a+o),i.src=e),r[e]=[t];var c=(t,a)=>{i.onerror=i.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),t)return t(a)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/simple-observable-examples/",o=e=>new Promise(((t,r)=>{var a=d.miniCssF(e),o=d.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var i;if((o=(i=n[a]).getAttribute("data-href"))===e||o===t)return i}})(a,o))return t();((e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,o.parentNode.removeChild(o),a(d)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),n={955:0},d.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{102:1,179:1,489:1,895:1,999:1}[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={955:0},t=[];d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((r,o)=>{a=e[t]=[r,o]}));r.push(a[2]=o);var n=d.p+d.u(t),i=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}};var r=e=>{},a=(a,o)=>{for(var n,i,[l,f,s,u]=o,c=0,b=[];c<l.length;c++)i=l[c],d.o(e,i)&&e[i]&&b.push(e[i][0]),e[i]=0;for(n in f)d.o(f,n)&&(d.m[n]=f[n]);for(s&&s(d),a&&a(o);b.length;)b.shift()();return u&&t.push.apply(t,u),r()},o=self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[];function n(){for(var r,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var l=o[i];0!==e[l]&&(n=!1)}n&&(t.splice(a--,1),r=d(d.s=o[0]))}return 0===t.length&&(d.x(),d.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var i=d.x;d.x=()=>(d.x=i||(e=>{}),(r=n)())})(),d.x()})();