(function(e){function t(t){for(var n,u,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"82854838"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"012a":function(e,t,r){e.exports=r.p+"img/about-big.ea4b0891.jpeg"},"0197":function(e,t,r){e.exports=r.p+"img/about-large.9717d726.jpeg"},"31d5":function(e,t,r){e.exports=r.p+"img/spiral-cat.23379b28.gif"},"3b25":function(e,t,r){var n={"./about-large.jpeg":"0197","./archive-large.jpeg":"7cbd","./blog-large.jpeg":"fab7","./contact-large.jpeg":"9146","./holder-large.jpeg":"76d2","./projects-large.jpeg":"5ef1"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="3b25"},"50b2":function(e,t,r){e.exports=r.p+"img/test-block.a907c2f8.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view",e._b({},"router-view",e.myProps,!1))],1)},o=[],u=r("5530");function i(){var e=window.innerWidth,t=window.innerHeight,r=e/Math.phi,n=e-r,a=e/21;return{width:e,height:t,a:r,b:n,squareEdge:a}}Math.phi=(1+Math.sqrt(5))/2;var c={name:"app",data:function(){return i()},created:function(){var e=this;window.addEventListener("resize",(function(){var t=i();Object.assign(e.$data,t)}))},destroyed:function(){window.removeEventListener("resize",(function(){}))},computed:{myProps:function(){return{nestData:Object(u["a"])({},this.$data)}}}},s=c,f=(r("5c0b"),r("2877")),d=Object(f["a"])(s,a,o,!1,null,null,null),p=d.exports,g=(r("d3b7"),r("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("open-base",{attrs:{nestData:e.nestData,url:e.background},on:{mousemove:e.hoverEffect}},[r("about",{attrs:{areas:e.areas}}),r("projects",{attrs:{areas:e.areas}}),r("blog",{attrs:{areas:e.areas}}),r("archive",{attrs:{areas:e.areas}}),r("contact",{attrs:{areas:e.areas}}),r("holder",{attrs:{areas:e.areas}}),r("vortex",{on:{click:e.shift}}),r("hover-effect",{attrs:{nestData:e.nestData,mouseX:e.mouseX,mouseY:e.mouseY}}),r("foot")],1)],1)},l=[],h=(r("96cf"),r("1da1")),m=r("bc3a"),v=r.n(m);function j(){return w.apply(this,arguments)}function w(){return w=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(Object({NODE_ENV:"production",VUE_APP_STRAPI:"54.191.223.72",BASE_URL:"/"})),t="https://".concat("54.191.223.72"),e.next=4,v.a.get("".concat(t,"/projects"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}r("c975");var y=r("8785"),O=r("9c56");function x(){var e=Object(y["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 3px solid;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return x=function(){return e},e}function E(){return{areas:Array}}function N(e){switch(e){case 0:return"14/27";case 1:return"14/22";case 2:return"22/27";case 3:return"24/27";case 4:return"22/24";case 5:return"22/23"}}function D(e){switch(e){case 0:return"1/14";case 1:return"14/-1";case 2:return"17/-1";case 3:return"14/17";case 4:return"14/16";case 5:return"16/17"}}function k(e){return Object(O["a"])("div",E())(x(),(function(t){switch(t.areas?t.areas.indexOf(e):0){case 0:return r("620d")("./".concat(e,"-big.jpeg"));case 1:return r("3b25")("./".concat(e,"-large.jpeg"))}}),(function(t){var r=t.areas?t.areas.indexOf(e):0;return N(r)}),(function(t){var r=t.areas?t.areas.indexOf(e):0;return D(r)}))}r("a9e3");function _(){var e=Object(y["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    grid-template-rows: repeat(26, ","px);\n    grid-template-columns: repeat(21, ","px);\n  "]);return _=function(){return e},e}function q(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function P(){return i(window)}function M(e){return Object(O["a"])(e,q())(_(),(function(e){return e.url?e.url:r("50b2")}),(function(e){if("undefined"===typeof e.nestData){var t=P();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:P().squareEdge}),(function(e){if("undefined"===typeof e.nestData){var t=P();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:P().squareEdge}))}function S(){var e=Object(y["a"])(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 3px green solid;\n    grid-row: 23;\n    grid-column:16;\n  "]);return S=function(){return e},e}function A(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function T(e){return Object(O["a"])(e,A())(S())}function X(){var e=Object(y["a"])(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border-top: 3px solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    grid-row: 14/15;\n    grid-column: -1 / 1;\n  "]);return X=function(){return e},e}function Y(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function L(e){return Object(O["a"])(e,Y())(X())}r("99af");function C(){var e=Object(y["a"])(["\n    pointer-events: none;\n    display: grid;\n    width: 100%;\n    height: 100%; \n    border: 3px solid #ffc400;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return C=function(){return e},e}function R(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number},mouseX:Number,mouseY:Number}}function U(){return i(window)}function H(e){return Object(O["a"])(e,R())(C(),(function(e){"undefined"===typeof e.nestData&&(e.nestData=U());var t=e.mouseY?e.mouseY:1,r=Math.floor(t/e.nestData.squareEdge);return"".concat(r+1,"/").concat(r+2)}),(function(e){"undefined"===typeof e.nestData&&(e.nestData=U());var t=e.mouseX?e.mouseX:1,r=Math.floor(t/e.nestData.squareEdge);return"".concat(r+1,"/").concat(r+2)}))}var $=M("div"),z=L("div"),B=H("div"),F=k("about"),V=k("projects"),J=k("blog"),I=k("archive"),W=k("contact"),G=k("holder"),K=T("div"),Q={name:"Home",components:{OpenBase:$,Foot:z,HoverEffect:B,About:F,Projects:V,Blog:J,Archive:I,Contact:W,Holder:G,Vortex:K},props:{nestData:Object},data:function(){return{background:r("31d5"),mouseX:0,mouseY:0,areas:["about","projects","blog","contact","archive","holder"]}},created:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,j();case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{hoverEffect:function(e){this.mouseX=e.pageX,this.mouseY=e.pageY},shift:function(e){this.areas.push(this.areas.shift())}}},Z=Q,ee=Object(f["a"])(Z,b,l,!1,null,null,null),te=ee.exports;n["a"].use(g["a"]);var re=[{path:"/",name:"Home",component:te},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],ne=new g["a"]({mode:"history",base:"/",routes:re}),ae=ne;n["a"].config.productionTip=!1,new n["a"]({router:ae,render:function(e){return e(p)}}).$mount("#app")},"5b01":function(e,t,r){e.exports=r.p+"img/holder-big.9516ad49.jpeg"},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"5ef1":function(e,t,r){e.exports=r.p+"img/projects-large.495d6bdd.jpeg"},"620d":function(e,t,r){var n={"./about-big.jpeg":"012a","./archive-big.jpeg":"6ff1","./blog-big.jpeg":"80ee","./contact-big.jpeg":"dcd2","./holder-big.jpeg":"5b01","./projects-big.jpeg":"e031"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="620d"},"6ff1":function(e,t,r){e.exports=r.p+"img/archive-big.d05131f5.jpeg"},"76d2":function(e,t,r){e.exports=r.p+"img/holder-large.e30d3f5f.jpeg"},"7cbd":function(e,t,r){e.exports=r.p+"img/archive-large.3c104d92.jpeg"},"80ee":function(e,t,r){e.exports=r.p+"img/blog-big.2182df23.jpeg"},9146:function(e,t,r){e.exports=r.p+"img/contact-large.f3218c63.jpeg"},"9c0c":function(e,t,r){},dcd2:function(e,t,r){e.exports=r.p+"img/contact-big.242ce462.jpeg"},e031:function(e,t,r){e.exports=r.p+"img/projects-big.b6b54e56.jpeg"},fab7:function(e,t,r){e.exports=r.p+"img/blog-large.6398c423.jpeg"}});
//# sourceMappingURL=app.de93ca7f.js.map