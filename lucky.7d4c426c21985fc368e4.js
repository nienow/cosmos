(()=>{"use strict";var e,t={1553:(e,t,o)=>{var n,r=o(3770),i=o.n(r),a=o(2541),l=new(i())({targetWindow:window,options:{coallesedSaving:!0,coallesedSavingDelay:400}});l.streamContextItem((function(e){var t;if(n&&luckysheet.destroy(),n=e,!e.isMetadataUpdate){var o=(null===(t=e.content)||void 0===t?void 0:t.text)||"",r=l.getItemAppDataValue(e,a.AppDataField.Locked),i=null;o&&(i=JSON.parse(o),r&&i.forEach((function(e){e.config=e.config||{},e.config.authority={selectLockedCells:0,selectunLockedCells:0,formatCells:0,formatColumns:0,formatRows:0,insertColumns:0,insertRows:0,insertHyperlinks:0,deleteColumns:0,deleteRows:0,sort:0,filter:0,usePivotTablereports:0,editObjects:0,editScenarios:0,sheet:1,hintText:"Note is locked"}}))),luckysheet.create({showinfobar:!1,showstatisticBar:!1,sheetFormulaBar:!1,allowUpdate:!1,container:"luckysheet",row:50,column:25,showtoolbarConfig:{paintFormat:!1,numberDecrease:!1,numberIncrease:!1,verticalAlignMode:!1,textRotateMode:!1,image:!1,link:!1,chart:!1,postil:!1,pivotTable:!1,function:!1,frozenMode:!1,sortAndFilter:!1,conditionalFormat:!1,dataVerification:!1,splitColumn:!1,screenshot:!1,findAndReplace:!1,protection:!1,print:!1},cellRightClickConfig:{image:!1,chart:!1},data:i,hook:{updated:function(){console.log(luckysheet.getAllSheets()),l.saveItemWithPresave(n,(function(){n.content.text=JSON.stringify(luckysheet.getAllSheets()),n.content.preview_plain=""}))}}})}}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){for(var[o,r,i]=e[d],l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={161:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,l,s]=o,c=0;if(a.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self.webpackChunksn_extension_template=self.webpackChunksn_extension_template||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[619],(()=>n(1553)));r=n.O(r)})();
//# sourceMappingURL=lucky.7d4c426c21985fc368e4.js.map