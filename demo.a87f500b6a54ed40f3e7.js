(()=>{"use strict";var e,t={100:(e,t,n)=>{var r=n(434),o=n(313),i=n.n(o),a=n(66),l=n.n(a),s=n(583),u=n.n(s),c=n(890),_=n.n(c),d=n(407),f=n.n(d),p=n(411),h=n.n(p),m=n(524),v={};v.styleTagTransform=h(),v.setAttributes=_(),v.insert=u().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=f(),i()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;var y=n(735),b=n(815);const g=JSON.parse('{"action":"component-registered","sessionKey":"c46be650-73b9-468b-b6b2-d0a4ca1ccc84","componentData":{},"data":{"uuid":"f43056da-581f-4ee1-8dea-b8dd5ee949ad","environment":"web","platform":"windows-web","activeThemeUrls":[]}}'),w=JSON.parse('{"aT":{"item":{"uuid":"ec677a63-5fae-440e-84cd-a62ae7c7d894","content_type":"Note","created_at":"2023-03-26T02:01:59.462Z","updated_at":"2023-03-27T00:18:36.199Z","isMetadataUpdate":false,"content":{"text":"Hello World","title":"Cosmos","noteType":"unknown","editorIdentifier":"cosmos-local","references":[],"appData":{"org.standardnotes.sn":{"client_updated_at":"2023-03-27T00:18:36.483Z"},"org.standardnotes.sn.components":{"f43056da-581f-4ee1-8dea-b8dd5ee949ad":{}},"dev.randombits":{"editor":"plain","columns":1}},"spellcheck":false,"preview_plain":" ","preview_html":"<div> </div>"},"clientData":{}}}}');function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var C={},x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onSave=n,this.updateStream(t),window.addEventListener("message",this.handleMessage.bind(this))}var t,n;return t=e,(n=[{key:"onReady",value:function(e){this.childWindow=e,g.componentData=C,e.postMessage(g,"*")}},{key:"toggleLock",value:function(e){this.streamData.item.content.appData["org.standardnotes.sn"].locked=e,this.childWindow.postMessage({action:"reply",data:this.streamData,original:this.streamEvent},"*")}},{key:"toggleTheme",value:function(e){var t=e?["dark.css"]:[];this.childWindow.postMessage({action:"themes",data:{themes:t}},"*")}},{key:"changeData",value:function(e){this.updateStream(e),this.childWindow.postMessage({action:"reply",data:this.streamData,original:this.streamEvent},"*")}},{key:"handleMessage",value:function(e){var t=e.data;"stream-context-item"===t.action?(this.streamEvent=t,this.childWindow.postMessage({action:"reply",data:this.streamData,original:t},"*")):"save-items"===t.action?(this.onSave(),this.streamData.item=e.data.data.items[0],this.childWindow.postMessage({action:"reply",data:{},original:t},"*")):"set-component-data"===t.action&&(C=t.data.componentData)}},{key:"updateStream",value:function(e){this.streamData=JSON.parse(JSON.stringify(w.aT)),this.streamData.item.content.text=e.getText(),this.streamData.item.content.appData["dev.randombits"]=e.getMetadata(),this.streamData.item.content.appData["org.standardnotes.sn"].locked=e.isLocked()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=JSON.stringify({elements:[{id:"6sVDp9mCGQTomD9Cg5w1b",type:"rectangle",x:202.04296875,y:-672.6953125,width:163,height:185,angle:0,strokeColor:"#000000",backgroundColor:"#e64980",fillStyle:"solid",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],strokeSharpness:"sharp",seed:1640006454,version:74,versionNonce:1054194038,isDeleted:!1,boundElements:[{type:"text",id:"MB9CSH621UIKH8MEgOhaM"}],updated:1639729535736,customData:{id:"rect-1",version:"1"}}],appState:{},scrollToContent:!0,libraryItems:[[{type:"line",version:1699,versionNonce:1813275999,isDeleted:!1,id:"1OMHrnYMU3LJ3w3IaXU_R",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,angle:0,x:209.72304760646858,y:338.83587294718825,strokeColor:"#881fa3",backgroundColor:"#be4bdb",width:116.42036295658873,height:103.65107323746608,seed:1445523839,groupIds:[],strokeSharpness:"sharp",boundElementIds:[],startBinding:null,endBinding:null,points:[[-92.28090097254909,7105427357601002e-30],[-154.72281841151394,19.199290805487394],[-155.45758928571422,79.43840749607878],[-99.89923520113778,103.6510732374661],[-40.317783799181804,79.1587107641305],[-39.037226329125524,21.285677238400705],[-92.28090097254909,7105427357601002e-30]],lastCommittedPoint:null,startArrowhead:null,endArrowhead:null}]]}),O=(JSON.stringify({elements:[{id:"6sVDp9mCGQTomD9Cg5w1b",type:"rectangle",x:202.04296875,y:-672.6953125,width:163,height:185,angle:0,strokeColor:"#000000",backgroundColor:"#00ff00",fillStyle:"solid",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],strokeSharpness:"sharp",seed:1640006454,version:74,versionNonce:1054194038,isDeleted:!1,boundElements:[{type:"text",id:"MB9CSH621UIKH8MEgOhaM"}],updated:1639729535736,customData:{id:"rect-1",version:"1"}}],appState:{},scrollToContent:!0,libraryItems:[]}),{id:"plain",name:"Plain",desc:"",preinstalled:!0}),M=[{id:"org.standardnotes.standard-sheets",url:"https://nienow.github.io/cosmos/sheets.html",name:"Spreadsheet",cat:"Table",desc:"An excel-like editor. Uses the Kendo library.",preinstalled:!0},{id:"randombits.quill",url:"https://nienow.github.io/sn-quill/",name:"Quill",cat:"Rich Text",desc:"Allows markdown shortcuts. Uses the Quill library.",preinstalled:!0},{id:"randombits.excalidraw",url:"https://nienow.github.io/sn-excalidraw/",name:"Excalidraw",cat:"Drawing",desc:"Uses the Excalidraw library.",github:"https://github.com/nienow/sn-excalidraw",clears:!0,preinstalled:!0},{id:"whiteboard",url:"https://antonheitz.github.io/sn-whiteboard/",name:"Whiteboard",cat:"Drawing",desc:"Uses the TLDraw library.",github:"https://github.com/antonheitz/sn-whiteboard",clears:!0},{id:"mermaid",url:"https://nienow.github.io/sn-mermaid/",name:"Mermaid",cat:"Drawing",desc:"Diagrams and Charts with the Mermaid library",github:"https://github.com/nienow/sn-mermaid"}].sort((function(e,t){return e.name>t.name?1:-1}));function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}function Y(e,t,n){return(t=H(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}var P,R,j,U,z,I,F=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Y(this,"data",[]),Y(this,"editor",[]),Y(this,"titles",[]),this.name=t,this.options=n}var t,n;return t=e,(n=[{key:"section",value:function(e,t,n){return this.editor.push(e),this.data.push(t),this.titles.push(n),this}},{key:"getMetadata",value:function(){var e=this,t={showTitle:this.options.title||!1};return t.editors=this.editor.map((function(t,n){return D(D({},e.getFullEditorData(t)),{},{title:e.titles[n]})})),t.columns=this.options.columns,t}},{key:"getText",value:function(){return this.data.length>1?this.data:1===this.data.length?this.data[0]:""}},{key:"isLocked",value:function(){return this.options.locked||!1}},{key:"getFullEditorData",value:function(e){return"plain"===e?O:M.find((function(t){return t.id===e}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=new F("New"),L=new F("Split Columns",{columns:2}).section("plain","Hello Column 1").section("plain","Hello Column 2"),V=new F("Split Rows",{columns:1}).section("plain","Hello Row 1").section("plain","Hello Row 2"),q=new F("Excalidraw").section("randombits.excalidraw",A),B=new F("Split 4",{columns:2,title:!0}).section("plain","Text One","Title One").section("plain","Text Two","Title Two").section("plain","Text Three","Title Three").section("plain","Text Four","Title Four"),Z=new F("Locked",{columns:2,title:!0,locked:!0}).section("plain","One","Title One").section("plain","Two"),J=[W,L,V,B,q,new F("Quill",{}).section("randombits.quill",JSON.stringify({ops:[{insert:"Header"},{attributes:{header:1},insert:"\n"},{insert:"SubHeader"},{attributes:{header:2},insert:"\n"},{attributes:{bold:!0},insert:"This is some text for quill"},{insert:"\n\nThis is some text for quill"},{attributes:{blockquote:!0},insert:"\n"},{insert:"\n"},{attributes:{code:!0},insert:"This is some text for quill"},{insert:"\n"},{attributes:{italic:!0},insert:"This is some text for quill"},{insert:"\n\nThis is some text for quill\n\nThis is some text for quill\n"}]})),new F("Complex",{columns:2}).section("plain","Plain").section("randombits.quill","Quill").section("org.standardnotes.standard-sheets","").section("randombits.excalidraw",""),Z],$=n(349),Q=0;function K(e,t,n,r,o,i){var a,l,s={};for(l in t)"ref"==l?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Q,__source:o,__self:i};if("function"==typeof e&&(a=e.defaultProps))for(l in a)void 0===s[l]&&(s[l]=a[l]);return $.YM.vnode&&$.YM.vnode(u),u}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ee(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var te=(0,b.zo)("div")(P||(P=ee(["\n  display: flex;\n  min-height: 100vh;\n"]))),ne=(0,b.zo)("div")(R||(R=ee(["\n  width: 200px;\n  flex: 0 0 auto;\n  border-right: 1px solid var(--sn-stylekit-border-color);\n"]))),re=(0,b.zo)("div")(j||(j=ee(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n"]))),oe=(0,b.zo)("div")(U||(U=ee(["\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n  padding: 5px 20px;\n  display: flex;\n  flex: 0 0 auto;\n\n  div {\n    margin-right: 20px;\n  }\n"]))),ie=(0,b.zo)("div")(z||(z=ee(["\n  padding: 20px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n\n  &.selected {\n    background-color: var(--sn-stylekit-secondary-background-color);\n  }\n"]))),ae=(0,b.zo)("iframe",r.default.forwardRef)(I||(I=ee(["\n  flex: 1 1 auto;\n  width: 100%;\n  border: 0;\n"]))),le=new x(J[0],(function(){var e=document.getElementById("last-saved");e&&(e.textContent="Last Saved: ".concat((new Date).toLocaleTimeString()))}));(0,b.cY)(r.default.createElement),(0,y.so)(document.getElementById("root")).render(K(r.default.StrictMode,{children:K((function(){var e=(0,r.useRef)(),t=G((0,r.useState)(0),2),n=t[0],o=t[1],i=G((0,r.useState)(!1),2),a=i[0],l=i[1],s=G((0,r.useState)("light"),2),u=s[0],c=s[1];return K(te,{children:[K(ne,{children:J.map((function(e,t){return K(ie,{className:n===t?"selected":"",onClick:function(){return function(e){o(e),le.changeData(J[e])}(t)},children:J[t].name})}))}),K(re,{children:[K(oe,{children:[K("div",{children:[K("input",{id:"editingDisabled",type:"checkbox",value:""+a,onChange:function(e){l(e.target.checked),le.toggleLock(e.target.checked)}}),K("label",{htmlFor:"editingDisabled",children:" Editing Disabled"})]}),K("div",{children:[K("input",{id:"isDark",type:"checkbox",checked:"dark"===u,onChange:function(e){c(e.target.checked?"dark":"light"),le.toggleTheme(e.target.checked)}}),K("label",{htmlFor:"isDark",children:" Dark Theme"})]}),K("div",{id:"last-saved"})]}),K(ae,{ref:e,src:"index.html",onLoad:function(){le.onReady(e.current.contentWindow)},sandbox:"allow-scripts allow-top-navigation-by-user-activation allow-popups allow-modals allow-forms allow-downloads"},n)]})]})}),{})}))},524:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(103),o=n.n(r),i=n(906),a=n.n(i),l=n(83),s=a()(o());s.i(l.Z),s.push([e.id,'html{font-size:100%}body,html{background-color:var(--sn-stylekit-background-color);color:var(--sn-stylekit-foreground-color);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;margin:0;padding:0}body{font-size:14px}a{color:var(--sn-stylekit-foreground-color)}',"",{version:3,sources:["webpack://./src/stylesheets/main.scss"],names:[],mappings:"AAEA,KACE,cAAA,CAGF,UAEE,oDAAA,CACA,yCAAA,CACA,mJAAA,CACA,QAAA,CACA,SAAA,CAGF,KACE,cAAA,CAGF,EACE,yCAAA",sourcesContent:['@import \'@standardnotes/stylekit/dist/stylekit.css\';\n\nhtml {\n  font-size: 100%;\n}\n\nbody,\nhtml {\n  background-color: var(--sn-stylekit-background-color);\n  color: var(--sn-stylekit-foreground-color);\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 14px;\n}\n\na {\n  color: var(--sn-stylekit-foreground-color);\n}\n'],sourceRoot:""}]);const u=s},434:(e,t,n)=>{n.d(t,{default:()=>ve,hydrate:()=>te,render:()=>ee,unmountComponentAtNode:()=>fe,useRef:()=>w,useState:()=>v});var r,o,i,a,l=n(349),s=0,u=[],c=[],_=l.YM.__b,d=l.YM.__r,f=l.YM.diffed,p=l.YM.__c,h=l.YM.unmount;function m(e,t){l.YM.__h&&l.YM.__h(o,e,s||t),s=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:c}),n.__[e]}function v(e){return s=1,y(E,e)}function y(e,t,n){var i=m(r++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):E(void 0,t),function(e){var t=i.__N?i.__N[0]:i.__[0],n=i.t(t,e);t!==n&&(i.__N=[n,i.__[1]],i.__c.setState({}))}],i.__c=o,!o.u)){var a=function(e,t,n){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter((function(e){return e.__c}));if(r.every((function(e){return!e.__N})))return!l||l.call(this,e,t,n);var o=!1;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}})),!(!o&&i.__c.props===e)&&(!l||l.call(this,e,t,n))};o.u=!0;var l=o.shouldComponentUpdate,s=o.componentWillUpdate;o.componentWillUpdate=function(e,t,n){if(this.__e){var r=l;l=void 0,a(e,t,n),l=r}s&&s.call(this,e,t,n)},o.shouldComponentUpdate=a}return i.__N||i.__}function b(e,t){var n=m(r++,3);!l.YM.__s&&M(n.__H,t)&&(n.__=e,n.i=t,o.__H.__h.push(n))}function g(e,t){var n=m(r++,4);!l.YM.__s&&M(n.__H,t)&&(n.__=e,n.i=t,o.__h.push(n))}function w(e){return s=5,k((function(){return{current:e}}),[])}function k(e,t){var n=m(r++,7);return M(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function S(){for(var e;e=u.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(A),e.__H.__h.forEach(O),e.__H.__h=[]}catch(t){e.__H.__h=[],l.YM.__e(t,e.__v)}}l.YM.__b=function(e){o=null,_&&_(e)},l.YM.__r=function(e){d&&d(e),r=0;var t=(o=e.__c).__H;t&&(i===o?(t.__h=[],o.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=c,e.__N=e.i=void 0}))):(t.__h.forEach(A),t.__h.forEach(O),t.__h=[],r=0)),i=o},l.YM.diffed=function(e){f&&f(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==u.push(t)&&a===l.YM.requestAnimationFrame||((a=l.YM.requestAnimationFrame)||x)(S)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==c&&(e.__=e.__V),e.i=void 0,e.__V=c}))),i=o=null},l.YM.__c=function(e,t){t.some((function(e){try{e.__h.forEach(A),e.__h=e.__h.filter((function(e){return!e.__||O(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],l.YM.__e(n,e.__v)}})),p&&p(e,t)},l.YM.unmount=function(e){h&&h(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{A(e)}catch(e){t=e}})),n.__H=void 0,t&&l.YM.__e(t,n.__v))};var C="function"==typeof requestAnimationFrame;function x(e){var t,n=function(){clearTimeout(r),C&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);C&&(t=requestAnimationFrame(n))}function A(e){var t=o,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),o=t}function O(e){var t=o;e.__c=e.__(),o=t}function M(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function E(e,t){return"function"==typeof t?t(e):t}function T(e,t){for(var n in t)e[n]=t[n];return e}function D(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function N(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}function Y(e){this.props=e}(Y.prototype=new l.wA).isPureReactComponent=!0,Y.prototype.shouldComponentUpdate=function(e,t){return D(this.props,e)||D(this.state,t)};var H=l.YM.__b;l.YM.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),H&&H(e)};var P="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,R=function(e,t){return null==e?null:(0,l.bR)((0,l.bR)(e).map(t))},j={map:R,forEach:R,count:function(e){return e?(0,l.bR)(e).length:0},only:function(e){var t=(0,l.bR)(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:l.bR},U=l.YM.__e;l.YM.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);U(e,t,n,r)};var z=l.YM.unmount;function I(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=T({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return I(e,t,n)}))),e}function F(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return F(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function W(){this.__u=0,this.t=null,this.__b=null}function L(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function V(){this.u=null,this.o=null}l.YM.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),z&&z(e)},(W.prototype=new l.wA).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=L(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=F(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},s=!0===t.__h;r.__u++||s||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},W.prototype.componentWillUnmount=function(){this.t=[]},W.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=I(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&(0,l.az)(l.HY,null,e.fallback);return o&&(o.__h=null),[(0,l.az)(l.HY,null,t.__a?null:e.children),o]};var q=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function B(e){return this.getChildContext=function(){return e.context},e.children}function Z(e){var t=this,n=e.i;t.componentWillUnmount=function(){(0,l.sY)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),(0,l.sY)((0,l.az)(B,{context:t.context},e.__v),t.l)}(V.prototype=new l.wA).__a=function(e){var t=this,n=L(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),q(t,e,r)):o()};n?n(i):i()}},V.prototype.render=function(e){this.u=null,this.o=new Map;var t=(0,l.bR)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){q(e,n,t)}))};var J="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Q=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,G="undefined"!=typeof document,X=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};function ee(e,t,n){return null==t.__k&&(t.textContent=""),(0,l.sY)(e,t),"function"==typeof n&&n(),e?e.__c:null}function te(e,t,n){return(0,l.ZB)(e,t),"function"==typeof n&&n(),e?e.__c:null}l.wA.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(l.wA.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var ne=l.YM.event;function re(){}function oe(){return this.cancelBubble}function ie(){return this.defaultPrevented}l.YM.event=function(e){return ne&&(e=ne(e)),e.persist=re,e.isPropagationStopped=oe,e.isDefaultPrevented=ie,e.nativeEvent=e};var ae,le={enumerable:!1,configurable:!0,get:function(){return this.class}},se=l.YM.vnode;l.YM.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,r={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||G&&"children"===o&&"noscript"===n||"class"===o||"className"===o)){var a=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===a?o="ondblclick":"onchange"!==a||"input"!==n&&"textarea"!==n||X(t.type)?"onfocus"===a?o="onfocusin":"onblur"===a?o="onfocusout":Q.test(o)?o=a:-1===n.indexOf("-")&&$.test(o)?o=o.replace(K,"-$&").toLowerCase():null===i&&(i=void 0):a=o="oninput","oninput"===a&&r[o=a]&&(o="oninputCapture"),r[o]=i}}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,l.bR)(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==n&&null!=r.defaultValue&&(r.value=(0,l.bR)(t.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",le)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=J,se&&se(e)};var ue=l.YM.__r;l.YM.__r=function(e){ue&&ue(e),ae=e.__c};var ce=l.YM.diffed;l.YM.diffed=function(e){ce&&ce(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),ae=null};var _e={ReactCurrentDispatcher:{current:{readContext:function(e){return ae.__n[e.__c].props.value}}}};function de(e){return!!e&&e.$$typeof===J}function fe(e){return!!e.__k&&((0,l.sY)(null,e),!0)}var pe=l.HY;function he(e){e()}var me=de,ve={useState:v,useId:function(){var e=m(r++,11);if(!e.__){for(var t=o.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__},useReducer:y,useEffect:b,useLayoutEffect:g,useInsertionEffect:g,useTransition:function(){return[!1,he]},useDeferredValue:function(e){return e},useSyncExternalStore:function(e,t){var n=t(),r=v({h:{__:n,v:t}}),o=r[0].h,i=r[1];return g((function(){o.__=n,o.v=t,N(o.__,t())||i({h:o})}),[e,n,t]),b((function(){return N(o.__,o.v())||i({h:o}),e((function(){N(o.__,o.v())||i({h:o})}))}),[e]),n},startTransition:he,useRef:w,useImperativeHandle:function(e,t,n){s=6,g((function(){return"function"==typeof e?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0}),null==n?n:n.concat(e))},useMemo:k,useCallback:function(e,t){return s=8,k((function(){return e}),t)},useContext:function(e){var t=o.context[e.__c],n=m(r++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__},useDebugValue:function(e,t){l.YM.useDebugValue&&l.YM.useDebugValue(t?t(e):e)},version:"17.0.2",Children:j,render:ee,hydrate:te,unmountComponentAtNode:fe,createPortal:function(e,t){var n=(0,l.az)(Z,{__v:e,i:t});return n.containerInfo=t,n},createElement:l.az,createContext:l.kr,createFactory:function(e){return l.az.bind(null,e)},cloneElement:function(e){return de(e)?l.Tm.apply(null,arguments):e},createRef:l.Vf,Fragment:l.HY,isValidElement:de,isElement:me,isFragment:function(e){return de(e)&&e.type===l.HY},findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:l.wA,PureComponent:Y,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:D(this.props,e)}function r(t){return this.shouldComponentUpdate=n,(0,l.az)(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(e){function t(t){var n=T({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=P,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},flushSync:function(e,t){return e(t)},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:pe,Suspense:W,SuspenseList:V,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return(0,l.az)(n,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_e}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={577:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,l,s]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkcosmos=self.webpackChunkcosmos||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[101],(()=>r(100)));o=r.O(o)})();
//# sourceMappingURL=demo.a87f500b6a54ed40f3e7.js.map