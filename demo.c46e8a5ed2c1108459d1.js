(()=>{"use strict";var e,t={440:(e,t,n)=>{var r=n(543),o=n(861),i=n.n(o),a=n(798),s=n.n(a),l=n(10),u=n.n(l),c=n(241),d=n.n(c),_=n(157),f=n.n(_),p=n(996),h=n.n(p),m=n(701),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=u().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),i()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;var y=n(18),b=n(179);const g=JSON.parse('{"action":"component-registered","sessionKey":"c46be650-73b9-468b-b6b2-d0a4ca1ccc84","componentData":{},"data":{"uuid":"f43056da-581f-4ee1-8dea-b8dd5ee949ad","environment":"web","platform":"windows-web","activeThemeUrls":[]}}'),w=JSON.parse('{"aT":{"item":{"uuid":"ec677a63-5fae-440e-84cd-a62ae7c7d894","content_type":"Note","created_at":"2023-03-26T02:01:59.462Z","updated_at":"2023-03-27T00:18:36.199Z","isMetadataUpdate":false,"content":{"text":"Hello World","title":"Cosmos","noteType":"unknown","editorIdentifier":"cosmos-local","references":[],"appData":{"org.standardnotes.sn":{"client_updated_at":"2023-03-27T00:18:36.483Z"},"org.standardnotes.sn.components":{"f43056da-581f-4ee1-8dea-b8dd5ee949ad":{}},"dev.randombits":{"editor":"plain","columns":1}},"spellcheck":false,"preview_plain":" ","preview_html":"<div> </div>"},"clientData":{}}}}');function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onSave=n,this.updateStream(t),window.addEventListener("message",this.handleMessage.bind(this))}var t,n;return t=e,(n=[{key:"onReady",value:function(e){this.childWindow=e,e.postMessage(g)}},{key:"toggleLock",value:function(e){this.streamData.item.content.appData["org.standardnotes.sn"].locked=e,this.childWindow.postMessage({action:"reply",data:this.streamData,original:this.streamEvent},"*")}},{key:"toggleTheme",value:function(e){var t=e?["dark.css"]:[];this.childWindow.postMessage({action:"themes",data:{themes:t}},"*")}},{key:"changeData",value:function(e){this.updateStream(e),this.childWindow.postMessage({action:"reply",data:this.streamData,original:this.streamEvent},"*")}},{key:"handleMessage",value:function(e){var t=e.data;"stream-context-item"===t.action?(this.streamEvent=t,this.childWindow.postMessage({action:"reply",data:this.streamData,original:t},"*")):"save-items"===t.action&&(this.onSave(),this.streamData.item=e.data.data.items[0],this.childWindow.postMessage({action:"reply",data:{},original:t},"*"))}},{key:"updateStream",value:function(e){this.streamData=JSON.parse(JSON.stringify(w.aT)),this.streamData.item.content.text=e.getText(),this.streamData.item.content.appData["dev.randombits"]=e.getMetadata(),this.streamData.item.content.appData["org.standardnotes.sn"].locked=e.isLocked()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=JSON.stringify({elements:[{id:"6sVDp9mCGQTomD9Cg5w1b",type:"rectangle",x:202.04296875,y:-672.6953125,width:163,height:185,angle:0,strokeColor:"#000000",backgroundColor:"#e64980",fillStyle:"solid",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],strokeSharpness:"sharp",seed:1640006454,version:74,versionNonce:1054194038,isDeleted:!1,boundElements:[{type:"text",id:"MB9CSH621UIKH8MEgOhaM"}],updated:1639729535736,customData:{id:"rect-1",version:"1"}}],appState:{},scrollToContent:!0,libraryItems:[[{type:"line",version:1699,versionNonce:1813275999,isDeleted:!1,id:"1OMHrnYMU3LJ3w3IaXU_R",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,angle:0,x:209.72304760646858,y:338.83587294718825,strokeColor:"#881fa3",backgroundColor:"#be4bdb",width:116.42036295658873,height:103.65107323746608,seed:1445523839,groupIds:[],strokeSharpness:"sharp",boundElementIds:[],startBinding:null,endBinding:null,points:[[-92.28090097254909,7105427357601002e-30],[-154.72281841151394,19.199290805487394],[-155.45758928571422,79.43840749607878],[-99.89923520113778,103.6510732374661],[-40.317783799181804,79.1587107641305],[-39.037226329125524,21.285677238400705],[-92.28090097254909,7105427357601002e-30]],lastCommittedPoint:null,startArrowhead:null,endArrowhead:null}]]}),M=JSON.stringify({elements:[{id:"6sVDp9mCGQTomD9Cg5w1b",type:"rectangle",x:202.04296875,y:-672.6953125,width:163,height:185,angle:0,strokeColor:"#000000",backgroundColor:"#00ff00",fillStyle:"solid",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],strokeSharpness:"sharp",seed:1640006454,version:74,versionNonce:1054194038,isDeleted:!1,boundElements:[{type:"text",id:"MB9CSH621UIKH8MEgOhaM"}],updated:1639729535736,customData:{id:"rect-1",version:"1"}}],appState:{},scrollToContent:!0,libraryItems:[]}),O={id:"plain",name:"Plain",desc:"",preinstalled:!0},A=[{id:"org.standardnotes.standard-sheets",url:"https://app.standardnotes.com/components/assets/org.standardnotes.standard-sheets/dist/index.html",name:"Spreadsheet",cat:"Table",desc:"An excel-like editor. Uses the Kendo library.",preinstalled:!0},{id:"randombits.quill",url:"https://nienow.github.io/sn-quill/",name:"Quill",cat:"Rich Text",desc:"Allows markdown shortcuts. Uses the Quill library.",preinstalled:!0},{id:"org.standardnotes.bold-editor",url:"https://app.standardnotes.com/components/assets/org.standardnotes.bold-editor/dist/index.html",name:"Redactor",cat:"Rich Text",desc:"Uses the Redactor library."},{id:"org.standardnotes.plus-editor",url:"https://app.standardnotes.com/components/assets/org.standardnotes.plus-editor/dist/index.html",name:"Summernote",cat:"Rich Text",desc:"Uses the summernote library."},{id:"org.standardnotes.advanced-markdown-editor",url:"https://app.standardnotes.com/components/assets/org.standardnotes.advanced-markdown-editor/dist/index.html",name:"EasyMDE",cat:"Markdown",desc:"Uses the EasyMDE library.",preinstalled:!0},{id:"org.standardnotes.simple-markdown-editor",url:"https://app.standardnotes.com/components/assets/org.standardnotes.simple-markdown-editor/dist/index.html",name:"MarkdownIt",cat:"Markdown",desc:"Editor/viewer split. Uses the markdown-it library.",preinstalled:!1},{id:"org.standardnotes.minimal-markdown-editor",url:"https://app.standardnotes.com/components/assets/org.standardnotes.minimal-markdown-editor/index.html",name:"Minimal Markdown",cat:"Markdown",desc:"The simplest markdown editor. Uses the CodeMirror library."},{id:"randombits.excalidraw",url:"https://nienow.github.io/sn-excalidraw/",name:"Excalidraw",cat:"Drawing",desc:"Uses the Excalidraw library.",github:"https://github.com/nienow/sn-excalidraw",clears:!0,preinstalled:!0},{id:"whiteboard",url:"https://antonheitz.github.io/sn-whiteboard/",name:"Whiteboard",cat:"Drawing",desc:"Uses the TLDraw library.",github:"https://github.com/antonheitz/sn-whiteboard",clears:!0}].sort((function(e,t){return e.name>t.name?1:-1}));function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Y(r.key),r)}}function N(e,t,n){return(t=Y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}var P,H,R,U,j,I,z=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"data",[]),N(this,"editor",[]),N(this,"titles",[]),this.name=t,this.options=n}var t,n;return t=e,n=[{key:"section",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.editor.push(e),this.data.push(t),this.titles.push(n),this}},{key:"getMetadata",value:function(){var e=this,t={showTitle:this.options.title||!1};return t.editors=this.editor.map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.getFullEditorData(t))})),t.columns=this.options.columns,t}},{key:"getText",value:function(){return this.data.length>1?this.data:1===this.data.length?this.data[0]:""}},{key:"isLocked",value:function(){return this.options.locked||!1}},{key:"getFullEditorData",value:function(e){return"plain"===e?O:A.find((function(t){return t.id===e}))}}],n&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=[new z("New"),new z("Split One",{columns:2}).section("plain","Hello Plain").section("randombits.quill","Hello Quill"),new z("Excalidraw").section("randombits.excalidraw",C),new z("Excalidraw 2").section("randombits.excalidraw",C).section("randombits.excalidraw",M),new z("Split 4",{columns:2,title:!0}).section("plain","One","Title One").section("plain","Two").section("plain","Three").section("plain","Four"),new z("Locked",{columns:2,title:!0,locked:!0}).section("plain","One","Title One").section("plain","Two"),new z("Single",{}).section("plain","One"),new z("Quill",{}).section("randombits.quill",JSON.stringify({ops:[{insert:"Header"},{attributes:{header:1},insert:"\n"},{insert:"SubHeader"},{attributes:{header:2},insert:"\n"},{attributes:{bold:!0},insert:"This is some text for quill"},{insert:"\n\nThis is some text for quill"},{attributes:{blockquote:!0},insert:"\n"},{insert:"\n"},{attributes:{code:!0},insert:"This is some text for quill"},{insert:"\n"},{attributes:{italic:!0},insert:"This is some text for quill"},{insert:"\n\nThis is some text for quill\n\nThis is some text for quill\n"}]}))],F=n(130),L=0;function V(e,t,n,r,o,i){var a,s,l={};for(s in t)"ref"==s?a=t[s]:l[s]=t[s];var u={type:e,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--L,__source:o,__self:i};if("function"==typeof e&&(a=e.defaultProps))for(s in a)void 0===l[s]&&(l[s]=a[s]);return F.YM.vnode&&F.YM.vnode(u),u}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var J=(0,b.zo)("div")(P||(P=Z(["\n  display: flex;\n  min-height: 100vh;\n"]))),$=(0,b.zo)("div")(H||(H=Z(["\n  width: 200px;\n  flex: 0 0 auto;\n  border-right: 1px solid var(--sn-stylekit-border-color);\n"]))),Q=(0,b.zo)("div")(R||(R=Z(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n"]))),K=(0,b.zo)("div")(U||(U=Z(["\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n  padding: 5px 20px;\n  display: flex;\n  flex: 0 0 auto;\n\n  div {\n    margin-right: 20px;\n  }\n"]))),G=(0,b.zo)("div")(j||(j=Z(["\n  padding: 20px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n\n  &.selected {\n    background-color: var(--sn-stylekit-secondary-background-color);\n  }\n"]))),X=(0,b.zo)("iframe",r.default.forwardRef)(I||(I=Z(["\n  flex: 1 1 auto;\n  width: 100%;\n  border: 0;\n"]))),ee=new x(W[0],(function(){var e=document.getElementById("last-saved");e&&(e.textContent="Last Saved: ".concat((new Date).toLocaleTimeString()))}));(0,b.cY)(r.default.createElement),(0,y.so)(document.getElementById("root")).render(V(r.default.StrictMode,{children:V((function(){var e=(0,r.useRef)(),t=q((0,r.useState)(0),2),n=t[0],o=t[1],i=q((0,r.useState)(!1),2),a=i[0],s=i[1],l=q((0,r.useState)("light"),2),u=l[0],c=l[1];return V(J,{children:[V($,{children:W.map((function(e,t){return V(G,{className:n===t?"selected":"",onClick:function(){return function(e){o(e),ee.changeData(W[e])}(t)},children:W[t].name})}))}),V(Q,{children:[V(K,{children:[V("div",{children:[V("input",{id:"editingDisabled",type:"checkbox",value:""+a,onChange:function(e){s(e.target.checked),ee.toggleLock(e.target.checked)}}),V("label",{htmlFor:"editingDisabled",children:" Editing Disabled"})]}),V("div",{children:[V("input",{id:"isDark",type:"checkbox",checked:"dark"===u,onChange:function(e){c(e.target.checked?"dark":"light"),ee.toggleTheme(e.target.checked)}}),V("label",{htmlFor:"isDark",children:" Dark Theme"})]}),V("div",{id:"last-saved"})]}),V(X,{ref:e,src:"index.html",onLoad:function(){ee.onReady(e.current.contentWindow)}},n)]})]})}),{})}))},701:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(726),o=n.n(r),i=n(119),a=n.n(i),s=n(229),l=a()(o());l.i(s.Z),l.push([e.id,'html{font-size:100%}body,html{background-color:var(--sn-stylekit-background-color);color:var(--sn-stylekit-foreground-color);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;margin:0;padding:0}body{font-size:14px}a{color:var(--sn-stylekit-foreground-color)}',"",{version:3,sources:["webpack://./src/stylesheets/main.scss"],names:[],mappings:"AAEA,KACE,cAAA,CAGF,UAEE,oDAAA,CACA,yCAAA,CACA,mJAAA,CACA,QAAA,CACA,SAAA,CAGF,KACE,cAAA,CAGF,EACE,yCAAA",sourcesContent:['@import \'@standardnotes/stylekit/dist/stylekit.css\';\n\nhtml {\n  font-size: 100%;\n}\n\nbody,\nhtml {\n  background-color: var(--sn-stylekit-background-color);\n  color: var(--sn-stylekit-foreground-color);\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 14px;\n}\n\na {\n  color: var(--sn-stylekit-foreground-color);\n}\n'],sourceRoot:""}]);const u=l},543:(e,t,n)=>{n.d(t,{default:()=>me,hydrate:()=>te,render:()=>ee,unmountComponentAtNode:()=>fe,useRef:()=>w,useState:()=>v});var r,o,i,a,s=n(130),l=0,u=[],c=[],d=s.YM.__b,_=s.YM.__r,f=s.YM.diffed,p=s.YM.__c,h=s.YM.unmount;function m(e,t){s.YM.__h&&s.YM.__h(o,e,l||t),l=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:c}),n.__[e]}function v(e){return l=1,y(E,e)}function y(e,t,n){var i=m(r++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):E(void 0,t),function(e){var t=i.__N?i.__N[0]:i.__[0],n=i.t(t,e);t!==n&&(i.__N=[n,i.__[1]],i.__c.setState({}))}],i.__c=o,!o.u)){var a=function(e,t,n){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter((function(e){return e.__c}));if(r.every((function(e){return!e.__N})))return!s||s.call(this,e,t,n);var o=!1;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}})),!(!o&&i.__c.props===e)&&(!s||s.call(this,e,t,n))};o.u=!0;var s=o.shouldComponentUpdate,l=o.componentWillUpdate;o.componentWillUpdate=function(e,t,n){if(this.__e){var r=s;s=void 0,a(e,t,n),s=r}l&&l.call(this,e,t,n)},o.shouldComponentUpdate=a}return i.__N||i.__}function b(e,t){var n=m(r++,3);!s.YM.__s&&A(n.__H,t)&&(n.__=e,n.i=t,o.__H.__h.push(n))}function g(e,t){var n=m(r++,4);!s.YM.__s&&A(n.__H,t)&&(n.__=e,n.i=t,o.__h.push(n))}function w(e){return l=5,k((function(){return{current:e}}),[])}function k(e,t){var n=m(r++,7);return A(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function S(){for(var e;e=u.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(O),e.__H.__h=[]}catch(t){e.__H.__h=[],s.YM.__e(t,e.__v)}}s.YM.__b=function(e){o=null,d&&d(e)},s.YM.__r=function(e){_&&_(e),r=0;var t=(o=e.__c).__H;t&&(i===o?(t.__h=[],o.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=c,e.__N=e.i=void 0}))):(t.__h.forEach(M),t.__h.forEach(O),t.__h=[])),i=o},s.YM.diffed=function(e){f&&f(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==u.push(t)&&a===s.YM.requestAnimationFrame||((a=s.YM.requestAnimationFrame)||C)(S)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==c&&(e.__=e.__V),e.i=void 0,e.__V=c}))),i=o=null},s.YM.__c=function(e,t){t.some((function(e){try{e.__h.forEach(M),e.__h=e.__h.filter((function(e){return!e.__||O(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.YM.__e(n,e.__v)}})),p&&p(e,t)},s.YM.unmount=function(e){h&&h(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{M(e)}catch(e){t=e}})),n.__H=void 0,t&&s.YM.__e(t,n.__v))};var x="function"==typeof requestAnimationFrame;function C(e){var t,n=function(){clearTimeout(r),x&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);x&&(t=requestAnimationFrame(n))}function M(e){var t=o,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),o=t}function O(e){var t=o;e.__c=e.__(),o=t}function A(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function E(e,t){return"function"==typeof t?t(e):t}function D(e,t){for(var n in t)e[n]=t[n];return e}function T(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function N(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}function Y(e){this.props=e}(Y.prototype=new s.wA).isPureReactComponent=!0,Y.prototype.shouldComponentUpdate=function(e,t){return T(this.props,e)||T(this.state,t)};var P=s.YM.__b;s.YM.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),P&&P(e)};var H="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,R=function(e,t){return null==e?null:(0,s.bR)((0,s.bR)(e).map(t))},U={map:R,forEach:R,count:function(e){return e?(0,s.bR)(e).length:0},only:function(e){var t=(0,s.bR)(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:s.bR},j=s.YM.__e;s.YM.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);j(e,t,n,r)};var I=s.YM.unmount;function z(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=D({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return z(e,t,n)}))),e}function W(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return W(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function F(){this.__u=0,this.t=null,this.__b=null}function L(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function V(){this.u=null,this.o=null}s.YM.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),I&&I(e)},(F.prototype=new s.wA).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=L(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(s):s())};n.__R=a;var s=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=W(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},F.prototype.componentWillUnmount=function(){this.t=[]},F.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=z(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&(0,s.az)(s.HY,null,e.fallback);return o&&(o.__h=null),[(0,s.az)(s.HY,null,t.__a?null:e.children),o]};var q=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function B(e){return this.getChildContext=function(){return e.context},e.children}function Z(e){var t=this,n=e.i;t.componentWillUnmount=function(){(0,s.sY)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),(0,s.sY)((0,s.az)(B,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}(V.prototype=new s.wA).__a=function(e){var t=this,n=L(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),q(t,e,r)):o()};n?n(i):i()}},V.prototype.render=function(e){this.u=null,this.o=new Map;var t=(0,s.bR)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){q(e,n,t)}))};var J="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Q=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,G="undefined"!=typeof document,X=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};function ee(e,t,n){return null==t.__k&&(t.textContent=""),(0,s.sY)(e,t),"function"==typeof n&&n(),e?e.__c:null}function te(e,t,n){return(0,s.ZB)(e,t),"function"==typeof n&&n(),e?e.__c:null}s.wA.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(s.wA.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var ne=s.YM.event;function re(){}function oe(){return this.cancelBubble}function ie(){return this.defaultPrevented}s.YM.event=function(e){return ne&&(e=ne(e)),e.persist=re,e.isPropagationStopped=oe,e.isDefaultPrevented=ie,e.nativeEvent=e};var ae,se={configurable:!0,get:function(){return this.class}},le=s.YM.vnode;s.YM.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){for(var o in r={},n){var i=n[o];if(!("value"===o&&"defaultValue"in n&&null==i||G&&"children"===o&&"noscript"===t)){var a=o.toLowerCase();"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===a?o="ondblclick":"onchange"!==a||"input"!==t&&"textarea"!==t||X(n.type)?"onfocus"===a?o="onfocusin":"onblur"===a?o="onfocusout":Q.test(o)?o=a:-1===t.indexOf("-")&&$.test(o)?o=o.replace(K,"-$&").toLowerCase():null===i&&(i=void 0):a=o="oninput","oninput"===a&&r[o=a]&&(o="oninputCapture"),r[o]=i}}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,s.bR)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=(0,s.bR)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(se.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",se))}e.$$typeof=J,le&&le(e)};var ue=s.YM.__r;s.YM.__r=function(e){ue&&ue(e),ae=e.__c};var ce=s.YM.diffed;s.YM.diffed=function(e){ce&&ce(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),ae=null};var de={ReactCurrentDispatcher:{current:{readContext:function(e){return ae.__n[e.__c].props.value}}}};function _e(e){return!!e&&e.$$typeof===J}function fe(e){return!!e.__k&&((0,s.sY)(null,e),!0)}var pe=s.HY;function he(e){e()}var me={useState:v,useId:function(){var e=m(r++,11);if(!e.__){for(var t=o.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__},useReducer:y,useEffect:b,useLayoutEffect:g,useInsertionEffect:g,useTransition:function(){return[!1,he]},useDeferredValue:function(e){return e},useSyncExternalStore:function(e,t){var n=t(),r=v({h:{__:n,v:t}}),o=r[0].h,i=r[1];return g((function(){o.__=n,o.v=t,N(o.__,t())||i({h:o})}),[e,n,t]),b((function(){return N(o.__,o.v())||i({h:o}),e((function(){N(o.__,o.v())||i({h:o})}))}),[e]),n},startTransition:he,useRef:w,useImperativeHandle:function(e,t,n){l=6,g((function(){return"function"==typeof e?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0}),null==n?n:n.concat(e))},useMemo:k,useCallback:function(e,t){return l=8,k((function(){return e}),t)},useContext:function(e){var t=o.context[e.__c],n=m(r++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__},useDebugValue:function(e,t){s.YM.useDebugValue&&s.YM.useDebugValue(t?t(e):e)},version:"17.0.2",Children:U,render:ee,hydrate:te,unmountComponentAtNode:fe,createPortal:function(e,t){var n=(0,s.az)(Z,{__v:e,i:t});return n.containerInfo=t,n},createElement:s.az,createContext:s.kr,createFactory:function(e){return s.az.bind(null,e)},cloneElement:function(e){return _e(e)?s.Tm.apply(null,arguments):e},createRef:s.Vf,Fragment:s.HY,isValidElement:_e,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:s.wA,PureComponent:Y,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:T(this.props,e)}function r(t){return this.shouldComponentUpdate=n,(0,s.az)(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(e){function t(t){var n=D({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=H,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},flushSync:function(e,t){return e(t)},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:pe,Suspense:F,SuspenseList:V,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return(0,s.az)(n,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:de}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={577:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,l]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var c=l(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkcosmos=self.webpackChunkcosmos||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[943],(()=>r(440)));o=r.O(o)})();
//# sourceMappingURL=demo.c46e8a5ed2c1108459d1.js.map