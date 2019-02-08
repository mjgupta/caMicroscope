parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"WDG/":[function(require,module,exports) {
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function t(){function t(e,t){var r=JSON.parse(window.localStorage.getItem(e));return r?r.filter(function(e){var r=!0;for(var n in t)r=r&&Object.byString(e,n)==t[n];return r}):[]}function r(e,t){var r=JSON.parse(window.localStorage.getItem(e));return r?r.filter(function(e){return e._id==t})[0]:{}}function n(e,t){var r=JSON.parse(window.localStorage.getItem(e));return(r=r||[]).push(t),window.localStorage.setItem(e,JSON.stringify(r)),t}function o(e,t){console.log(t);var r=JSON.parse(window.localStorage.getItem(e)),n=(r=r||[]).filter(function(e){return e._id.$oid!==t});return window.localStorage.setItem(e,JSON.stringify(n)),console.log(r.length-n.length),{rowsAffected:r.length-n.length}}console.warn("{localstore mods enabled}"),Object.byString=function(e,t){for(var r=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n=0,o=r.length;n<o;++n){var i=r[n];if(!(i in e))return;e=e[i]}return e},Store.prototype.validation=Store.prototype.validation||{},Store.prototype.filterBroken=Store.prototype.filterBroken||function(e,t){return e},Store.prototype.findMarkTypes=function(r,n){return new Promise(function(o,i){var a={};n&&(a["provenance.analysis.execution_id"]=n),r&&(a["provenance.image.slide"]=r);var c=t("mark",a);c?o([].concat(e(new Set(c.map(function(e){return Object.byString(e,"provenance")}))))):o([])})},Store.prototype.findMark=function(e,r,n,o,i,a,c,l,s,p){var u=this;return new Promise(function(i,c){var l={};r&&(l["provenance.image.slide"]=e),e&&(l["provenance.analysis.execution_id"]=r),a&&(l["provenance.analysis.source"]=a),n&&(l["provenance.image.specimen"]=n),o&&(l["provenance.image.study"]=o),i(t("mark",l))}).then(function(e){return u.filterBroken(e,"mark")})},Store.prototype.getMarkByIds=function(r,n,o,i,a,c,l,s,p,u){var m=this;return new Promise(function(o,i){var a=[];for(var c in r)a.push.apply(a,e(t("mark",{"provenance.analysis.execution_id":r[c],"provenance.image.slide":n})));o(a)}).then(function(e){return m.filterBroken(e,"mark")})},Store.prototype.getMark=function(e){var t=this;return new Promise(function(t,n){t(r("mark",e))}).then(function(e){return t.filterBroken(e,"mark")})},Store.prototype.addMark=function(e){return this.validation.mark(e)||console.warn(this.validation.mark.errors),new Promise(function(t,r){e._id=e._id||{$oid:Date.now()},t(n("mark",e))})},Store.prototype.deleteMark=function(e,t){return new Promise(function(t,r){t(o("mark",e))})},Store.prototype.findHeatmap=function(e,r){var n=this;return new Promise(function(n,o){var i={};r&&(i["provenance.image.slide"]=e),e&&(i["provenance.analysis.execution_id"]=r),n(t("heatmap",i))}).then(function(e){return n.filterBroken(e,"heatmap")})},Store.prototype.getHeatmap=function(e){var t=this;return new Promise(function(t,n){t(r("heatmap",e))}).then(function(e){return t.filterBroken(e,"heatmap")})},Store.prototype.addHeatmap=function(e){return this.validation.heatmap(e)||console.warn(this.validation.heatmap.errors),e._id=e._id||{$oid:Date.now()},new Promise(function(t,r){t(n("heatmap",e))})},Store.prototype.deleteHeatmap=function(e,t){return new Promise(function(t,r){t(o("heatmap",e))})},Store.prototype.export=function(e){return new Promise(function(t,r){t(window.localStorage.getItem(e))})},Store.prototype.import=function(e,t){return new Promise(function(r,n){r(window.localStorage.setItem(e,t))})},Store.prototype.findSlide=function(e,t,r,n){return new Promise(function(e,t){e([{id:new URLSearchParams(document.location.search.substring(1)).get("id")||"local",mpp:"0.001",study:"",specimen:""}])})},Store.prototype.getSlide=function(e){return new Promise(function(e,t){var r=new URLSearchParams(document.location.search.substring(1)),n=r.get("id")||"local";console.log(r),e({id:n,mpp:"0.001",study:"",specimen:""})})},Store.prototype.findTemplate=function(e,r){var n=this,o={};return e&&(o.name=e),r&&(o.type=r),new Promise(function(e,r){e(t("template",o))}).then(function(e){return n.filterBroken(e,"template")})},Store.prototype.getTemplate=function(e){var t=this;return new Promise(function(t,n){t(r("template",e))}).then(function(e){return t.filterBroken(e,"template")})},Store.prototype.DownloadMarksToFile=function(){var e=$D.params.id;e=decodeURIComponent(e);var t={};t["provenance.image.slide"]=e;var r=JSON.parse(window.localStorage.getItem("mark")),n="";r&&(n=JSON.stringify(r.filter(function(e){var r=!0;for(var n in t)r=r&&Object.byString(e,n)==t[n];return r})));var o=document.createElement("a"),i=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(i);o.setAttribute("href",a),o.setAttribute("download","markups.json"),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)},Store.prototype.LoadMarksFromFile=function(){var e=$D.params.id;e=decodeURIComponent(e);var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("type","file"),t.style.display="position: fixed; top: -100em",t.onchange=function(t){var r=t.target,n=new FileReader;n.onload=function(){var t=n.result;try{var r=JSON.parse(t);console.log(r),r.forEach(function(t){t.provenance.image.slide=e}),console.log($VALIDATION.mark);var o=JSON.parse(window.localStorage.getItem("mark"));o=o||[],console.log(o),o=(o=o.concat(r)).filter($VALIDATION.mark),console.log(o),window.localStorage.setItem("mark",JSON.stringify(o)),$VALIDATION.mark.errors?console.error($VALIDATION.mark.errors):window.location.reload()}catch(e){console.error(e)}console.log(t.substring(0,200))},n.readAsText(r.files[0])},t.click(),document.body.removeChild(t)}}Object.defineProperty(exports,"__esModule",{value:!0});var r={_id:"0",type:"object",id:"annotation-form",name:"AnnotSchema",description:"",links:[],additionalProperties:!1,properties:{name:{id:"a0",title:"Identity Name",type:"string",required:!0,description:"note name"},notes:{id:"a1",title:"Notes: ",type:"string",format:"textarea",maxLength:128}}},n=JSON.parse(window.localStorage.getItem("template"));n||((n=[]).push(r),window.localStorage.setItem("template",JSON.stringify(n))),exports.default=t;
},{}],"5g62":[function(require,module,exports) {
"use strict";function e(){console.warn("{imgbox mods enabled}"),CaMic.prototype.default_loadImg=CaMic.prototype.loadImg,CaMic.prototype.loadImg=function(e){var t=this,o=new URLSearchParams(window.location.search).get("id");console.log("image ID : "+o);var i=o;this.slideId=i,this.slideName=i,this.study="",this.specimen="",fetch(o+"/info.json").then(function(e){if(e.status>=400)throw e;return e.json()}).then(function(i){var n={"@context":"http://iiif.io/api/image/2/context.json","@id":o,height:i.height,width:i.width,profile:["http://iiif.io/api/image/2/level2.json"],protocol:"http://iiif.io/api/image",tiles:[{scaleFactors:[1,2,4,8,16,32],width:256}]};t.viewer.open(n),t.mpp=i["mpp-x"]||i["mpp-y"]||1,t.createScalebar(t.mpp),new OpenSeadragonImaging.ImagingHelper({viewer:t.viewer}).setMaxZoom(1);var a={_id:"0"};a.name=t.slideName,a.study=t.study,a.specimen=t.specimen,a.mpp=1,a.location=o,a.url=n,console.log(e),console.log(a),e&&"function"==typeof e&&e.call(null,a),Loading.text.textContent="loading slide's tiles..."}).catch(function(e){console.error(e),Loading.text.textContent="ERROR - Slide May be Broken or Unsupported"})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lM4v":[function(require,module,exports) {
"use strict";var e=require("./LocalStore.js"),r=t(e),o=require("./ImgBoxMods.js"),s=t(o);function t(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,s.default)(),console.warn("This setup is intended for imagebox");
},{"./LocalStore.js":"WDG/","./ImgBoxMods.js":"5g62"}]},{},["lM4v"], null)
//# sourceMappingURL=/imgbox_package.map