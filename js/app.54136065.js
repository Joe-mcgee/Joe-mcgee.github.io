(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],d=0,l=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"012a":function(e,t,n){e.exports=n.p+"img/about-big.ea4b0891.jpeg"},"0197":function(e,t,n){e.exports=n.p+"img/about-large.9717d726.jpeg"},"31d5":function(e,t,n){e.exports=n.p+"img/spiral-cat.23379b28.gif"},"3b25":function(e,t,n){var r={"./about-large.jpeg":"0197","./archive-large.jpeg":"7cbd","./blog-large.jpeg":"fab7","./contact-large.jpeg":"9146","./finish-large.jpeg":"f8d4","./projects-large.jpeg":"5ef1"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="3b25"},"50b2":function(e,t,n){e.exports=n.p+"img/test-block.a907c2f8.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",e._b({},"router-view",e.myProps,!1))],1)},o=[],i=n("5530");function u(e){var t=window.innerWidth,n=window.innerHeight,r=t/Math.phi,a=t-r,o=t/e;return{width:t,height:n,a:r,b:a,squareEdge:o}}Math.phi=(1+Math.sqrt(5))/2;var c={name:"app",data:function(){return u(21)},created:function(){var e=this;window.addEventListener("resize",(function(){var t=u(21);Object.assign(e.$data,t)}))},destroyed:function(){window.removeEventListener("resize",(function(){}))},computed:{myProps:function(){return{nestData:Object(i["a"])({},this.$data)}}}},s=c,f=(n("5c0b"),n("2877")),d=Object(f["a"])(s,a,o,!1,null,null,null),l=d.exports,p=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("open-base",{attrs:{nestData:e.nestData,url:e.background},on:{mousemove:e.hoverEffect}},[n("about",{attrs:{areas:e.areas,nestData:e.nestData}}),n("projects",{attrs:{areas:e.areas,nestData:e.nestData}}),n("blog",{attrs:{areas:e.areas,nestData:e.nestData}}),n("archive",{attrs:{areas:e.areas,nestData:e.nestData}}),n("contact",{attrs:{areas:e.areas,nestData:e.nestData}}),n("finish",{attrs:{areas:e.areas,nestData:e.nestData}}),n("vortex",{on:{click:e.shift}}),n("hover-effect",{attrs:{nestData:e.nestData,mouseX:e.mouseX,mouseY:e.mouseY}}),n("foot")],1)],1)},b=[],m=(n("96cf"),n("1da1"));n("bc3a");n("c975"),n("a9e3");var h=n("8785"),v=n("9c56");function j(){var e=Object(h["a"])(["\n  display: grid;\n  grid-row: 1;\n  grid-column: 1;\n  justify-content: center;\n  align-content: center;\n"]);return j=function(){return e},e}function w(){var e=Object(h["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    grid-template-rows: repeat(",", ","px);\n    grid-template-columns: repeat(",", ","px);\n    height: 100%;\n    border: 2px solid;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return w=function(){return e},e}function x(){return{areas:Array,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function O(){return u(window)}function y(e){switch(e){case 0:return"14/27";case 1:return"14/22";case 2:return"22/27";case 3:return"24/27";case 4:return"22/24";case 5:return"22/23"}}function D(e){switch(e){case 0:return"1/14";case 1:return"14/-1";case 2:return"17/-1";case 3:return"14/17";case 4:return"14/16";case 5:return"16/17"}}function E(e){var t=1,n=1,r=1;while(t<=e){var a=r-n;r+=a,t++}return r}function N(e,t){return t=t||"div",Object(v["a"])(t,x())(w(),(function(t){switch(t.areas?t.areas.indexOf(e):0){case 0:return n("620d")("./".concat(e,"-big.jpeg"));case 1:return"projects"===e?n("5e87")("./".concat(e,"-large.gif")):n("3b25")("./".concat(e,"-large.jpeg"))}}),(function(t){var n=t.areas?t.areas.indexOf(e):1;return E(n)}),(function(e){if("undefined"===typeof e.nestData){var t=O();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:O().squareEdge}),(function(t){var n=t.areas?t.areas.indexOf(e):1;return E(n)}),(function(e){if("undefined"===typeof e.nestData){var t=O();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:O().squareEdge}),(function(t){var n=t.areas?t.areas.indexOf(e):0;return y(n)}),(function(t){var n=t.areas?t.areas.indexOf(e):0;return D(n)}))}function _(e){return Object(v["a"])(e)(j())}function k(){var e=Object(h["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    grid-template-rows: repeat(26, ","px);\n    grid-template-columns: repeat(21, ","px);\n  "]);return k=function(){return e},e}function q(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function C(){return u(window)}function M(e){return Object(v["a"])(e,q())(k(),(function(e){return e.url?e.url:n("50b2")}),(function(e){if("undefined"===typeof e.nestData){var t=C();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:C().squareEdge}),(function(e){if("undefined"===typeof e.nestData){var t=C();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:C().squareEdge}))}function P(){var e=Object(h["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 2px solid #ffc400;\n    grid-row: 23;\n    grid-column:16;\n  "]);return P=function(){return e},e}function $(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function A(e){return Object(v["a"])(e,$())(P(),(function(e){return n("a257")}))}function F(){var e=Object(h["a"])(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border-top: 3px solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    grid-row: 14/15;\n    grid-column: -1 / 1;\n  "]);return F=function(){return e},e}function S(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function T(e){return Object(v["a"])(e,S())(F())}n("99af");function X(){var e=Object(h["a"])(["\n    pointer-events: none;\n    display: grid;\n    width: 100%;\n    height: 100%; \n    border: 2px solid;\n    border-image-source: linear-gradient(137.5deg, #003bff, #ffc400);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return X=function(){return e},e}function Y(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number},mouseX:Number,mouseY:Number}}function G(){return u(window)}function U(e){return Object(v["a"])(e,Y())(X(),(function(e){"undefined"===typeof e.nestData&&(e.nestData=G());var t=e.mouseY?e.mouseY:1,n=Math.floor(t/e.nestData.squareEdge);return"".concat(n+1,"/").concat(n+2)}),(function(e){"undefined"===typeof e.nestData&&(e.nestData=G());var t=e.mouseX?e.mouseX:1,n=Math.floor(t/e.nestData.squareEdge);return"".concat(n+1,"/").concat(n+2)}))}var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("information-variant-grid",{attrs:{fillColor:"#003bff"}})],1)},H=[],L=n("da50"),B=_(L["a"]),J={name:"About",props:{areas:Array},components:{InformationVariantGrid:B},data:function(){return{}}},R=J,V=Object(f["a"])(R,z,H,!1,null,null,null),I=V.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("flask-grid",{attrs:{fillColor:"#003bff"}})],1)},K=[],Q=n("9cf2"),Z=_(Q["a"]),ee={name:"Projects",props:{areas:Array},components:{FlaskGrid:Z},data:function(){return{}}},te=ee,ne=Object(f["a"])(te,W,K,!1,null,null,null),re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("typewriter-grid",{attrs:{fillColor:"#003bff"}})],1)},oe=[],ie=n("7312"),ue=_(ie["a"]),ce={name:"Blog",props:{areas:Array},components:{TypewriterGrid:ue},data:function(){return{}}},se=ce,fe=Object(f["a"])(se,ae,oe,!1,null,null,null),de=fe.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("human-greeting-proximity-grid",{attrs:{fillColor:"#003bff"}})],1)},pe=[],ge=n("1e5b"),be=_(ge["a"]),me={name:"Contact",props:{areas:Array},components:{HumanGreetingProximityGrid:be},data:function(){return{}}},he=me,ve=Object(f["a"])(he,le,pe,!1,null,null,null),je=ve.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("script-text-outline-grid",{attrs:{fillColor:"#003bff"}})],1)},xe=[],Oe=n("a3c9"),ye=_(Oe["a"]),De={name:"Archive",props:{areas:Array},components:{ScriptTextOutlineGrid:ye},data:function(){return{}}},Ee=De,Ne=Object(f["a"])(Ee,we,xe,!1,null,null,null),_e=Ne.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("flag-grid",{attrs:{fillColor:"#003bff"}})],1)},qe=[],Ce=n("7259"),Me=_(Ce["a"]),Pe={name:"Finish",props:{areas:Array},components:{FlagGrid:Me},data:function(){return{}},created:function(){console.log(this.$props)}},$e=Pe,Ae=Object(f["a"])($e,ke,qe,!1,null,null,null),Fe=Ae.exports,Se=M("div"),Te=T("div"),Xe=U("div"),Ye=N("about",I),Ge=N("projects",re),Ue=N("blog",de),ze=N("contact",je),He=N("archive",_e),Le=N("finish",Fe),Be=A("div"),Je={name:"Home",components:{OpenBase:Se,Foot:Te,HoverEffect:Xe,About:Ye,Projects:Ge,Blog:Ue,Archive:He,Contact:ze,Finish:Le,Vortex:Be},props:{nestData:Object},data:function(){return{background:n("31d5"),mouseX:0,mouseY:0,areas:["about","projects","blog","contact","archive","finish"]}},created:function(){return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{hoverEffect:function(e){this.mouseX=e.pageX,this.mouseY=e.pageY},shift:function(e){this.areas.push(this.areas.shift())}}},Re=Je,Ve=Object(f["a"])(Re,g,b,!1,null,null,null),Ie=Ve.exports;r["a"].use(p["a"]);var We=[{path:"/",name:"Home",component:Ie}],Ke=new p["a"]({mode:"history",base:"/",routes:We}),Qe=Ke;r["a"].config.productionTip=!1,new r["a"]({router:Qe,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5e87":function(e,t,n){var r={"./projects-large.gif":"fa84"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="5e87"},"5ef1":function(e,t,n){e.exports=n.p+"img/projects-large.495d6bdd.jpeg"},"620d":function(e,t,n){var r={"./about-big.jpeg":"012a","./archive-big.jpeg":"6ff1","./blog-big.jpeg":"80ee","./contact-big.jpeg":"dcd2","./finish-big.jpeg":"b7c1","./projects-big.jpeg":"e031"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="620d"},"6ff1":function(e,t,n){e.exports=n.p+"img/archive-big.d05131f5.jpeg"},"7cbd":function(e,t,n){e.exports=n.p+"img/archive-large.3c104d92.jpeg"},"80ee":function(e,t,n){e.exports=n.p+"img/blog-big.2182df23.jpeg"},9146:function(e,t,n){e.exports=n.p+"img/contact-large.f3218c63.jpeg"},"9c0c":function(e,t,n){},a257:function(e,t,n){e.exports=n.p+"img/vortex.2c09db4a.gif"},b7c1:function(e,t,n){e.exports=n.p+"img/finish-big.9516ad49.jpeg"},dcd2:function(e,t,n){e.exports=n.p+"img/contact-big.242ce462.jpeg"},e031:function(e,t,n){e.exports=n.p+"img/projects-big.b6b54e56.jpeg"},f8d4:function(e,t,n){e.exports=n.p+"img/finish-large.e30d3f5f.jpeg"},fa84:function(e,t,n){e.exports=n.p+"img/projects-large.c2a894a7.gif"},fab7:function(e,t,n){e.exports=n.p+"img/blog-large.6398c423.jpeg"}});
//# sourceMappingURL=app.54136065.js.map