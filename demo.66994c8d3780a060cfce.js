(()=>{"use strict";var e,t={861:(e,t,n)=>{var r=n(498),o=n(666),i=n.n(o),a=n(467),l=n.n(a),s=n(65),u=n.n(s),c=n(202),_=n.n(c),f=n(398),d=n.n(f),p=n(267),h=n.n(p),m=n(182),v={};v.styleTagTransform=h(),v.setAttributes=_(),v.insert=u().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=d(),i()(m.A,v),m.A&&m.A.locals&&m.A.locals;var y=n(695),b=n(898);const g=JSON.parse('{"action":"component-registered","sessionKey":"c46be650-73b9-468b-b6b2-d0a4ca1ccc84","componentData":{},"data":{"uuid":"f43056da-581f-4ee1-8dea-b8dd5ee949ad","environment":"web","platform":"windows-web","activeThemeUrls":[]}}'),w=JSON.parse('{"p":{"item":{"uuid":"ec677a63-5fae-440e-84cd-a62ae7c7d894","content_type":"Note","created_at":"2023-03-26T02:01:59.462Z","updated_at":"2023-03-27T00:18:36.199Z","isMetadataUpdate":false,"content":{"text":"Hello World","title":"Cosmos","noteType":"unknown","editorIdentifier":"cosmos-local","references":[],"appData":{"org.standardnotes.sn":{"client_updated_at":"2023-03-27T00:18:36.483Z"},"org.standardnotes.sn.components":{"f43056da-581f-4ee1-8dea-b8dd5ee949ad":{}},"dev.randombits":{"editor":"plain","columns":1}},"spellcheck":false,"preview_plain":" ","preview_html":"<div> </div>"},"clientData":{}}}}');function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function C(e){var t=function(e,t){if("object"!=k(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==k(t)?t:t+""}var A={},x=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onSave=n,this.updateStream(t),window.addEventListener("message",this.handleMessage.bind(this))},t=[{key:"onReady",value:function(e){this.childWindow=e,g.componentData=A,e.postMessage(g,"*")}},{key:"toggleLock",value:function(e){this.streamData.item.content.appData["org.standardnotes.sn"].locked=e,this.childWindow.postMessage({action:"reply",data:this.streamData,original:this.streamEvent},"*")}},{key:"toggleTheme",value:function(e){var t=e?["dark.css"]:[];this.childWindow.postMessage({action:"themes",data:{themes:t}},"*")}},{key:"changeData",value:function(e){this.updateStream(e),this.childWindow.postMessage({action:"reply",data:this.streamData,original:this.streamEvent},"*")}},{key:"handleMessage",value:function(e){var t=e.data;"stream-context-item"===t.action?(this.streamEvent=t,this.childWindow.postMessage({action:"reply",data:this.streamData,original:t},"*")):"save-items"===t.action?(this.onSave(),this.streamData.item=e.data.data.items[0],this.childWindow.postMessage({action:"reply",data:{},original:t},"*")):"set-component-data"===t.action&&(A=t.data.componentData)}},{key:"updateStream",value:function(e){this.streamData=JSON.parse(JSON.stringify(w.p)),this.streamData.item.content.text=e.getText(),this.streamData.item.content.appData["dev.randombits"]=e.getMetadata(),this.streamData.item.content.appData["org.standardnotes.sn"].locked=e.isLocked()}}],t&&S(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),O=JSON.stringify({elements:[{id:"6sVDp9mCGQTomD9Cg5w1b",type:"rectangle",x:202.04296875,y:-672.6953125,width:163,height:185,angle:0,strokeColor:"#000000",backgroundColor:"#e64980",fillStyle:"solid",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],strokeSharpness:"sharp",seed:1640006454,version:74,versionNonce:1054194038,isDeleted:!1,boundElements:[{type:"text",id:"MB9CSH621UIKH8MEgOhaM"}],updated:1639729535736,customData:{id:"rect-1",version:"1"}}],appState:{},scrollToContent:!0,libraryItems:[[{type:"line",version:1699,versionNonce:1813275999,isDeleted:!1,id:"1OMHrnYMU3LJ3w3IaXU_R",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,angle:0,x:209.72304760646858,y:338.83587294718825,strokeColor:"#881fa3",backgroundColor:"#be4bdb",width:116.42036295658873,height:103.65107323746608,seed:1445523839,groupIds:[],strokeSharpness:"sharp",boundElementIds:[],startBinding:null,endBinding:null,points:[[-92.28090097254909,7105427357601002e-30],[-154.72281841151394,19.199290805487394],[-155.45758928571422,79.43840749607878],[-99.89923520113778,103.6510732374661],[-40.317783799181804,79.1587107641305],[-39.037226329125524,21.285677238400705],[-92.28090097254909,7105427357601002e-30]],lastCommittedPoint:null,startArrowhead:null,endArrowhead:null}]]}),E=(JSON.stringify({elements:[{id:"6sVDp9mCGQTomD9Cg5w1b",type:"rectangle",x:202.04296875,y:-672.6953125,width:163,height:185,angle:0,strokeColor:"#000000",backgroundColor:"#00ff00",fillStyle:"solid",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],strokeSharpness:"sharp",seed:1640006454,version:74,versionNonce:1054194038,isDeleted:!1,boundElements:[{type:"text",id:"MB9CSH621UIKH8MEgOhaM"}],updated:1639729535736,customData:{id:"rect-1",version:"1"}}],appState:{},scrollToContent:!0,libraryItems:[]}),{id:"plain",name:"Plain",desc:"",preinstalled:!0}),D=[{id:"org.standardnotes.standard-sheets",url:"https://nienow.github.io/cosmos/sheets.html",name:"Spreadsheet",cat:"Table",desc:"An excel-like editor. Uses the Kendo library.",preinstalled:!0},{id:"randombits.quill",url:"https://nienow.github.io/sn-quill/",name:"Quill",cat:"Rich Text",desc:"Allows markdown shortcuts. Uses the Quill library.",preinstalled:!0},{id:"randombits.excalidraw",url:"https://nienow.github.io/sn-excalidraw/",name:"Excalidraw",cat:"Drawing",desc:"Uses the Excalidraw library.",github:"https://github.com/nienow/sn-excalidraw",clears:!0,preinstalled:!0},{id:"whiteboard",url:"https://antonheitz.github.io/sn-whiteboard/",name:"Whiteboard",cat:"Drawing",desc:"Uses the TLDraw library.",github:"https://github.com/antonheitz/sn-whiteboard",clears:!0},{id:"mermaid",url:"https://nienow.github.io/sn-mermaid/",name:"Mermaid",cat:"Drawing",desc:"Diagrams and Charts with the Mermaid library",github:"https://github.com/nienow/sn-mermaid"}].sort((function(e,t){return e.name>t.name?1:-1}));function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M(r.key),r)}}function H(e,t,n){return(t=M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=function(e,t){if("object"!=T(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==T(t)?t:t+""}var j,I,R,U,W,L,q=function(){return e=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),H(this,"data",[]),H(this,"editor",[]),H(this,"titles",[]),this.name=t,this.options=n},(t=[{key:"section",value:function(e,t,n){return this.editor.push(e),this.data.push(t),this.titles.push(n),this}},{key:"getMetadata",value:function(){var e=this,t={showTitle:this.options.title||!1};return t.editors=this.editor.map((function(t,n){return F(F({},e.getFullEditorData(t)),{},{title:e.titles[n]})})),t.columns=this.options.columns,t}},{key:"getText",value:function(){return this.data.length>1?this.data:1===this.data.length?this.data[0]:""}},{key:"isLocked",value:function(){return this.options.locked||!1}},{key:"getFullEditorData",value:function(e){return"plain"===e?E:D.find((function(t){return t.id===e}))}}])&&P(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),V=new q("New"),z=new q("Split Columns",{columns:2}).section("plain","Hello Column 1").section("plain","Hello Column 2"),B=new q("Split Rows",{columns:1}).section("plain","Hello Row 1").section("plain","Hello Row 2"),K=new q("Excalidraw").section("randombits.excalidraw",O),J=new q("Split 4",{columns:2,title:!0}).section("plain","Text One","Title One").section("plain","Text Two","Title Two").section("plain","Text Three","Title Three").section("plain","Text Four","Title Four"),X=new q("Locked",{columns:2,title:!0,locked:!0}).section("plain","One","Title One").section("plain","Two"),Q=[V,z,B,J,K,new q("Quill",{}).section("randombits.quill",JSON.stringify({ops:[{insert:"Header"},{attributes:{header:1},insert:"\n"},{insert:"SubHeader"},{attributes:{header:2},insert:"\n"},{attributes:{bold:!0},insert:"This is some text for quill"},{insert:"\n\nThis is some text for quill"},{attributes:{blockquote:!0},insert:"\n"},{insert:"\n"},{attributes:{code:!0},insert:"This is some text for quill"},{insert:"\n"},{attributes:{italic:!0},insert:"This is some text for quill"},{insert:"\n\nThis is some text for quill\n\nThis is some text for quill\n"}]})),new q("Complex",{columns:2}).section("plain","Plain").section("randombits.quill","Quill").section("org.standardnotes.standard-sheets","").section("randombits.excalidraw",""),X],$=n(985),G=0;function Z(e,t,n,r,o,i){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)"ref"==l?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--G,__i:-1,__u:0,__source:o,__self:i};if("function"==typeof e&&(a=e.defaultProps))for(l in a)void 0===s[l]&&(s[l]=a[l]);return $.fF.vnode&&$.fF.vnode(u),u}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function te(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Array.isArray;var ne=(0,b.I4)("div")(j||(j=te(["\n  display: flex;\n  min-height: 100vh;\n"]))),re=(0,b.I4)("div")(I||(I=te(["\n  width: 200px;\n  flex: 0 0 auto;\n  border-right: 1px solid var(--sn-stylekit-border-color);\n"]))),oe=(0,b.I4)("div")(R||(R=te(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n"]))),ie=(0,b.I4)("div")(U||(U=te(["\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n  padding: 5px 20px;\n  display: flex;\n  flex: 0 0 auto;\n\n  div {\n    margin-right: 20px;\n  }\n"]))),ae=(0,b.I4)("div")(W||(W=te(["\n  padding: 20px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n\n  &.selected {\n    background-color: var(--sn-stylekit-secondary-background-color);\n  }\n"]))),le=(0,b.I4)("iframe",r.default.forwardRef)(L||(L=te(["\n  flex: 1 1 auto;\n  width: 100%;\n  border: 0;\n"]))),se=new x(Q[0],(function(){var e=document.getElementById("last-saved");e&&(e.textContent="Last Saved: ".concat((new Date).toLocaleTimeString()))}));(0,b.mj)(r.default.createElement),(0,y.Hr)(document.getElementById("root")).render(Z(r.default.StrictMode,{children:Z((function(){var e=(0,r.useRef)(),t=Y((0,r.useState)(0),2),n=t[0],o=t[1],i=Y((0,r.useState)(!1),2),a=i[0],l=i[1],s=Y((0,r.useState)("light"),2),u=s[0],c=s[1];return Z(ne,{children:[Z(re,{children:Q.map((function(e,t){return Z(ae,{className:n===t?"selected":"",onClick:function(){return function(e){o(e),se.changeData(Q[e])}(t)},children:Q[t].name})}))}),Z(oe,{children:[Z(ie,{children:[Z("div",{children:[Z("input",{id:"editingDisabled",type:"checkbox",value:""+a,onChange:function(e){l(e.target.checked),se.toggleLock(e.target.checked)}}),Z("label",{htmlFor:"editingDisabled",children:" Editing Disabled"})]}),Z("div",{children:[Z("input",{id:"isDark",type:"checkbox",checked:"dark"===u,onChange:function(e){c(e.target.checked?"dark":"light"),se.toggleTheme(e.target.checked)}}),Z("label",{htmlFor:"isDark",children:" Dark Theme"})]}),Z("div",{id:"last-saved"})]}),Z(le,{ref:e,src:"index.html",onLoad:function(){se.onReady(e.current.contentWindow)},sandbox:"allow-scripts allow-top-navigation-by-user-activation allow-popups allow-modals allow-forms allow-downloads"},n)]})]})}),{})}))},182:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(842),o=n.n(r),i=n(866),a=n.n(i),l=n(335),s=a()(o());s.i(l.A),s.push([e.id,'html{font-size:100%}body,html{background-color:var(--sn-stylekit-background-color);color:var(--sn-stylekit-foreground-color);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;margin:0;padding:0}body{font-size:14px}a{color:var(--sn-stylekit-foreground-color)}',"",{version:3,sources:["webpack://./src/stylesheets/main.scss"],names:[],mappings:"AAEA,KACE,cAAA,CAGF,UAEE,oDAAA,CACA,yCAAA,CACA,mJAAA,CACA,QAAA,CACA,SAAA,CAGF,KACE,cAAA,CAGF,EACE,yCAAA",sourcesContent:['@import \'@standardnotes/stylekit/dist/stylekit.css\';\n\nhtml {\n  font-size: 100%;\n}\n\nbody,\nhtml {\n  background-color: var(--sn-stylekit-background-color);\n  color: var(--sn-stylekit-foreground-color);\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 14px;\n}\n\na {\n  color: var(--sn-stylekit-foreground-color);\n}\n'],sourceRoot:""}]);const u=s},498:(e,t,n)=>{n.d(t,{default:()=>Oe,hydrate:()=>ae,render:()=>ie,unmountComponentAtNode:()=>ye,useRef:()=>k,useState:()=>y});var r,o,i,a,l=n(985),s=0,u=[],c=l.fF,_=c.__b,f=c.__r,d=c.diffed,p=c.__c,h=c.unmount,m=c.__;function v(e,t){c.__h&&c.__h(o,e,s||t),s=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function y(e){return s=1,b(M,e)}function b(e,t,n){var i=v(r++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):M(void 0,t),function(e){var t=i.__N?i.__N[0]:i.__[0],n=i.t(t,e);t!==n&&(i.__N=[n,i.__[1]],i.__c.setState({}))}],i.__c=o,!o.u)){var a=function(e,t,n){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter((function(e){return!!e.__c}));if(r.every((function(e){return!e.__N})))return!l||l.call(this,e,t,n);var o=!1;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}})),!(!o&&i.__c.props===e)&&(!l||l.call(this,e,t,n))};o.u=!0;var l=o.shouldComponentUpdate,s=o.componentWillUpdate;o.componentWillUpdate=function(e,t,n){if(this.__e){var r=l;l=void 0,a(e,t,n),l=r}s&&s.call(this,e,t,n)},o.shouldComponentUpdate=a}return i.__N||i.__}function g(e,t){var n=v(r++,3);!c.__s&&H(n.__H,t)&&(n.__=e,n.i=t,o.__H.__h.push(n))}function w(e,t){var n=v(r++,4);!c.__s&&H(n.__H,t)&&(n.__=e,n.i=t,o.__h.push(n))}function k(e){return s=5,C((function(){return{current:e}}),[])}function S(e,t,n){s=6,w((function(){return"function"==typeof e?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0}),null==n?n:n.concat(e))}function C(e,t){var n=v(r++,7);return H(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function A(e,t){return s=8,C((function(){return e}),t)}function x(e){var t=o.context[e.__c],n=v(r++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function O(e,t){c.useDebugValue&&c.useDebugValue(t?t(e):e)}function E(){var e=v(r++,11);if(!e.__){for(var t=o.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function D(){for(var e;e=u.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(P),e.__H.__h=[]}catch(t){e.__H.__h=[],c.__e(t,e.__v)}}c.__b=function(e){o=null,_&&_(e)},c.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),m&&m(e,t)},c.__r=function(e){f&&f(e),r=0;var t=(o=e.__c).__H;t&&(i===o?(t.__h=[],o.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(t.__h.forEach(F),t.__h.forEach(P),t.__h=[],r=0)),i=o},c.diffed=function(e){d&&d(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==u.push(t)&&a===c.requestAnimationFrame||((a=c.requestAnimationFrame)||N)(D)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),i=o=null},c.__c=function(e,t){t.some((function(e){try{e.__h.forEach(F),e.__h=e.__h.filter((function(e){return!e.__||P(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],c.__e(n,e.__v)}})),p&&p(e,t)},c.unmount=function(e){h&&h(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{F(e)}catch(e){t=e}})),n.__H=void 0,t&&c.__e(t,n.__v))};var T="function"==typeof requestAnimationFrame;function N(e){var t,n=function(){clearTimeout(r),T&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);T&&(t=requestAnimationFrame(n))}function F(e){var t=o,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),o=t}function P(e){var t=o;e.__c=e.__(),o=t}function H(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function M(e,t){return"function"==typeof t?t(e):t}function j(e,t){for(var n in t)e[n]=t[n];return e}function I(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function R(e,t){this.props=e,this.context=t}(R.prototype=new l.uA).isPureReactComponent=!0,R.prototype.shouldComponentUpdate=function(e,t){return I(this.props,e)||I(this.state,t)};var U=l.fF.__b;l.fF.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),U&&U(e)};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,L=function(e,t){return null==e?null:(0,l.v2)((0,l.v2)(e).map(t))},q={map:L,forEach:L,count:function(e){return e?(0,l.v2)(e).length:0},only:function(e){var t=(0,l.v2)(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:l.v2},V=l.fF.__e;l.fF.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);V(e,t,n,r)};var z=l.fF.unmount;function B(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=j({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return B(e,t,n)}))),e}function K(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return K(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function J(){this.__u=0,this.t=null,this.__b=null}function X(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Q(){this.u=null,this.o=null}l.fF.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),z&&z(e)},(J.prototype=new l.uA).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=X(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=K(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},J.prototype.componentWillUnmount=function(){this.t=[]},J.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=B(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&(0,l.n)(l.FK,null,e.fallback);return o&&(o.__u&=-33),[(0,l.n)(l.FK,null,t.__a?null:e.children),o]};var $=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function G(e){return this.getChildContext=function(){return e.context},e.children}function Z(e){var t=this,n=e.i;t.componentWillUnmount=function(){(0,l.XX)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),(0,l.XX)((0,l.n)(G,{context:t.context},e.__v),t.l)}(Q.prototype=new l.uA).__a=function(e){var t=this,n=X(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),$(t,e,r)):o()};n?n(i):i()}},Q.prototype.render=function(e){this.u=null,this.o=new Map;var t=(0,l.v2)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Q.prototype.componentDidUpdate=Q.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){$(e,n,t)}))};var Y="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ee=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,te=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ne=/[A-Z0-9]/g,re="undefined"!=typeof document,oe=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};function ie(e,t,n){return null==t.__k&&(t.textContent=""),(0,l.XX)(e,t),"function"==typeof n&&n(),e?e.__c:null}function ae(e,t,n){return(0,l.Qv)(e,t),"function"==typeof n&&n(),e?e.__c:null}l.uA.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(l.uA.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var le=l.fF.event;function se(){}function ue(){return this.cancelBubble}function ce(){return this.defaultPrevented}l.fF.event=function(e){return le&&(e=le(e)),e.persist=se,e.isPropagationStopped=ue,e.isDefaultPrevented=ce,e.nativeEvent=e};var _e,fe={enumerable:!1,configurable:!0,get:function(){return this.class}},de=l.fF.vnode;l.fF.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,r={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||re&&"children"===o&&"noscript"===n||"class"===o||"className"===o)){var a=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"translate"===a&&"no"===i?i=!1:"ondoubleclick"===a?o="ondblclick":"onchange"!==a||"input"!==n&&"textarea"!==n||oe(t.type)?"onfocus"===a?o="onfocusin":"onblur"===a?o="onfocusout":te.test(o)?o=a:-1===n.indexOf("-")&&ee.test(o)?o=o.replace(ne,"-$&").toLowerCase():null===i&&(i=void 0):a=o="oninput","oninput"===a&&r[o=a]&&(o="oninputCapture"),r[o]=i}}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,l.v2)(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==n&&null!=r.defaultValue&&(r.value=(0,l.v2)(t.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",fe)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=Y,de&&de(e)};var pe=l.fF.__r;l.fF.__r=function(e){pe&&pe(e),_e=e.__c};var he=l.fF.diffed;l.fF.diffed=function(e){he&&he(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),_e=null};var me={ReactCurrentDispatcher:{current:{readContext:function(e){return _e.__n[e.__c].props.value},useCallback:A,useContext:x,useDebugValue:O,useDeferredValue:we,useEffect:g,useId:E,useImperativeHandle:S,useInsertionEffect:Se,useLayoutEffect:w,useMemo:C,useReducer:b,useRef:k,useState:y,useSyncExternalStore:Ae,useTransition:ke}}};function ve(e){return!!e&&e.$$typeof===Y}function ye(e){return!!e.__k&&((0,l.XX)(null,e),!0)}var be=l.FK;function ge(e){e()}function we(e){return e}function ke(){return[!1,ge]}var Se=w,Ce=ve;function Ae(e,t){var n=t(),r=y({h:{__:n,v:t}}),o=r[0].h,i=r[1];return w((function(){o.__=n,o.v=t,xe(o)&&i({h:o})}),[e,n,t]),g((function(){return xe(o)&&i({h:o}),e((function(){xe(o)&&i({h:o})}))}),[e]),n}function xe(e){var t,n,r=e.v,o=e.__;try{var i=r();return!((t=o)===(n=i)&&(0!==t||1/t==1/n)||t!=t&&n!=n)}catch(e){return!0}}var Oe={useState:y,useId:E,useReducer:b,useEffect:g,useLayoutEffect:w,useInsertionEffect:Se,useTransition:ke,useDeferredValue:we,useSyncExternalStore:Ae,startTransition:ge,useRef:k,useImperativeHandle:S,useMemo:C,useCallback:A,useContext:x,useDebugValue:O,version:"17.0.2",Children:q,render:ie,hydrate:ae,unmountComponentAtNode:ye,createPortal:function(e,t){var n=(0,l.n)(Z,{__v:e,i:t});return n.containerInfo=t,n},createElement:l.n,createContext:l.q6,createFactory:function(e){return l.n.bind(null,e)},cloneElement:function(e){return ve(e)?l.Ob.apply(null,arguments):e},createRef:l._3,Fragment:l.FK,isValidElement:ve,isElement:Ce,isFragment:function(e){return ve(e)&&e.type===l.FK},isMemo:function(e){return!!e&&!!e.displayName&&("string"==typeof e.displayName||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")},findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:l.uA,PureComponent:R,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:I(this.props,e)}function r(t){return this.shouldComponentUpdate=n,(0,l.n)(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(e){function t(t){var n=j({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=W,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},flushSync:function(e,t){return e(t)},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:be,Suspense:J,SuspenseList:Q,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return(0,l.n)(n,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:me}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={594:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,l,s]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkcosmos=self.webpackChunkcosmos||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[665],(()=>r(861)));o=r.O(o)})();
//# sourceMappingURL=demo.66994c8d3780a060cfce.js.map