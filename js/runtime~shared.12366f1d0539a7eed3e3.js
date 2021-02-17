(()=>{"use strict";var e,t,r,a,o,n,f={},d={};function i(e){if(d[e])return d[e].exports;var t=d[e]={exports:{}};return f[e](t,t.exports,i),t.exports}i.m=f,i.x=e=>{},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var n={};e=e||[null,t({}),t([]),t(t)];for(var f=2&a&&r;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((e=>n[e]=()=>r[e]));return n.default=()=>r,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"./js/"+(179===e?"main":e)+"."+{41:"ca53243b6894fe57f88c",79:"bb95cb4b53b04d3fae3e",102:"f6e2bbf8d31ad89fc6eb",103:"43431c2a8c0968ef821d",179:"44d78ba363ec485948c0",396:"241d05ab122bcbe7fff5",489:"53a073b2189dcd7d818d",515:"defd117e7de7c554c33a",539:"729ba2b78d25615c7aaa",605:"514a62dd4264199c990b",686:"4546da34b9ef3bfd7281",895:"18f5e85a4b39a17c5e53",920:"ab5d21dbc3b895125dd3",999:"c8cc22ef776223629508"}[e]+".js",i.miniCssF=e=>"./css/style."+{102:"79c49310c38162df54bc",179:"0197491cd6159b4378be",489:"0dd388d525ae33f8f532",605:"640ab530631208ea156b",686:"52c391efe1385940c437",895:"c67d0fa93d92385296bf",999:"7302e2514f944a4e95ff"}[e]+".css",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="revisao-10-02-2021:",i.l=(e,t,o,n)=>{if(r[e])r[e].push(t);else{var f,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+o){f=u;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",a+o),f.src=e),r[e]=[t];var c=(t,a)=>{f.onerror=f.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(a))),t)return t(a)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=c.bind(null,f.onerror),f.onload=c.bind(null,f.onload),d&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/simple-observable-examples/",o=e=>new Promise(((t,r)=>{var a=i.miniCssF(e),o=i.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=(f=r[a]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var f;if((o=(f=n[a]).getAttribute("data-href"))===e||o===t)return f}})(a,o))return t();((e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var f=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=f,i.request=d,o.parentNode.removeChild(o),a(i)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),n={955:0},i.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{102:1,179:1,489:1,605:1,686:1,895:1,999:1}[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={955:0},t=[];i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((r,o)=>{a=e[t]=[r,o]}));r.push(a[2]=o);var n=i.p+i.u(t),f=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+t,t)}};var r=e=>{},a=(a,o)=>{for(var n,f,[d,l,s,u]=o,c=0,p=[];c<d.length;c++)f=d[c],i.o(e,f)&&e[f]&&p.push(e[f][0]),e[f]=0;for(n in l)i.o(l,n)&&(i.m[n]=l[n]);for(s&&s(i),a&&a(o);p.length;)p.shift()();return u&&t.push.apply(t,u),r()},o=self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[];function n(){for(var r,a=0;a<t.length;a++){for(var o=t[a],n=!0,f=1;f<o.length;f++){var d=o[f];0!==e[d]&&(n=!1)}n&&(t.splice(a--,1),r=i(i.s=o[0]))}return 0===t.length&&(i.x(),i.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var f=i.x;i.x=()=>(i.x=f||(e=>{}),(r=n)())})(),i.x()})();