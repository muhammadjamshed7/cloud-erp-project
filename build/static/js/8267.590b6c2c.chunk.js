/*! For license information please see 8267.590b6c2c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[8267],{69998:function(e,n){n.Z=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?t.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},18267:function(e,n,r){r.d(n,{ZP:function(){return X}});var t=r(72791),o=r(52007),i=r.n(o),a=r(3431),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function c(e,n){var r=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var r=n.split(".").pop().toLowerCase(),t=u.get(r);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var t=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof n?n:"string"===typeof t&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var l=[".DS_Store","Thumbs.db"];function f(e){return(null!==e.target&&e.target.files?d(e.target.files):[]).map((function(e){return c(e)}))}function s(e,n){return(0,a.mG)(this,void 0,void 0,(function(){var r;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return e.items?(r=d(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(v))]):[3,2];case 1:return[2,p(g(t.sent()))];case 2:return[2,p(d(e.files).map((function(e){return c(e)})))]}}))}))}function p(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function d(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function v(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?b(n):y(e)}function g(e){return e.reduce((function(e,n){return(0,a.fl)(e,Array.isArray(n)?g(n):[n])}),[])}function y(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=c(n);return Promise.resolve(r)}function m(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,e.isDirectory?b(e):h(e)]}))}))}function b(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function o(){var i=this;n.readEntries((function(n){return(0,a.mG)(i,void 0,void 0,(function(){var i,u,c;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return i=a.sent(),e(i),[3,4];case 3:return u=a.sent(),r(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(m)),t.push(c),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function h(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=c(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var D=r(69998);function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return O(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var A="file-invalid-type",F="file-too-large",j="file-too-small",k="too-many-files",E=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:A,message:"File type must be ".concat(n)}},S=function(e){return{code:F,message:"File is larger than ".concat(e," bytes")}},C=function(e){return{code:j,message:"File is smaller than ".concat(e," bytes")}},P={code:k,message:"Too many files"};function x(e,n){var r="application/x-moz-file"===e.type||(0,D.Z)(e,n);return[r,r?null:E(n)]}function z(e,n,r){if(T(e.size))if(T(n)&&T(r)){if(e.size>r)return[!1,S(r)];if(e.size<n)return[!1,C(n)]}else{if(T(n)&&e.size<n)return[!1,C(n)];if(T(r)&&e.size>r)return[!1,S(r)]}return[!0,null]}function T(e){return void 0!==e&&null!==e}function R(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function I(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function L(e){e.preventDefault()}function _(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.some((function(n){return!R(e)&&n&&n.apply(void 0,[e].concat(t)),R(e)}))}}var K=["children"],G=["open"],B=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],J=["refKey","onChange","onClick"];function M(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||$(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,n){if(e){if("string"===typeof e)return q(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,n):void 0}}function q(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function U(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){W(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function W(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function H(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Q=(0,t.forwardRef)((function(e,n){var r=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=U(U({},V),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,u=n.minSize,c=n.multiple,l=n.maxFiles,f=n.onDragEnter,s=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,g=n.onDropRejected,y=n.onFileDialogCancel,m=n.preventDropOnDocument,b=n.noClick,h=n.noKeyboard,D=n.noDrag,O=n.noDragEventsBubbling,A=n.validator,F=(0,t.useRef)(null),j=(0,t.useRef)(null),k=Z((0,t.useReducer)(ee,Y),2),E=k[0],S=k[1],C=E.isFocused,T=E.isFileDialogActive,K=E.draggedFiles,G=(0,t.useCallback)((function(){j.current&&(S({type:"openDialog"}),j.current.value=null,j.current.click())}),[S]),$=function(){T&&setTimeout((function(){j.current&&(j.current.files.length||(S({type:"closeDialog"}),"function"===typeof y&&y()))}),300)};(0,t.useEffect)((function(){return window.addEventListener("focus",$,!1),function(){window.removeEventListener("focus",$,!1)}}),[j,T,y]);var q=(0,t.useCallback)((function(e){F.current&&F.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),G()))}),[F,j]),N=(0,t.useCallback)((function(){S({type:"focus"})}),[]),Q=(0,t.useCallback)((function(){S({type:"blur"})}),[]),X=(0,t.useCallback)((function(){b||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?G():setTimeout(G,0))}),[j,b]),ne=(0,t.useRef)([]),re=function(e){F.current&&F.current.contains(e.target)||(e.preventDefault(),ne.current=[])};(0,t.useEffect)((function(){return m&&(document.addEventListener("dragover",L,!1),document.addEventListener("drop",re,!1)),function(){m&&(document.removeEventListener("dragover",L),document.removeEventListener("drop",re))}}),[F,m]);var te=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e),ne.current=[].concat(M(ne.current),[e.target]),I(e)&&Promise.resolve(i(e)).then((function(n){R(e)&&!O||(S({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),f&&f(e))}))}),[i,f,O]),oe=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e);var n=I(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return n&&p&&p(e),!1}),[p,O]),ie=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e);var n=ne.current.filter((function(e){return F.current&&F.current.contains(e)})),r=n.indexOf(e.target);-1!==r&&n.splice(r,1),ne.current=n,n.length>0||(S({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),I(e)&&s&&s(e))}),[F,s,O]),ae=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e),ne.current=[],I(e)&&Promise.resolve(i(e)).then((function(n){if(!R(e)||O){var t=[],o=[];n.forEach((function(e){var n=Z(x(e,r),2),i=n[0],c=n[1],l=Z(z(e,u,a),2),f=l[0],s=l[1],p=A?A(e):null;if(i&&f&&!p)t.push(e);else{var d=[c,s];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!c&&t.length>1||c&&l>=1&&t.length>l)&&(t.forEach((function(e){o.push({file:e,errors:[P]})})),t.splice(0)),S({acceptedFiles:t,fileRejections:o,type:"setFiles"}),d&&d(t,o,e),o.length>0&&g&&g(o,e),t.length>0&&v&&v(t,e)}})),S({type:"reset"})}),[c,r,u,a,l,i,d,v,g,O,A]),ue=function(e){return o?null:e},ce=function(e){return h?null:ue(e)},le=function(e){return D?null:ue(e)},fe=function(e){O&&e.stopPropagation()},se=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,f=e.onDragLeave,s=e.onDrop,p=H(e,B);return U(U(W({onKeyDown:ce(_(t,q)),onFocus:ce(_(i,N)),onBlur:ce(_(a,Q)),onClick:ue(_(u,X)),onDragEnter:le(_(c,te)),onDragOver:le(_(l,oe)),onDragLeave:le(_(f,ie)),onDrop:le(_(s,ae))},r,F),o||h?{}:{tabIndex:0}),p)}}),[F,q,N,Q,X,te,oe,ie,ae,h,D,o]),pe=(0,t.useCallback)((function(e){e.stopPropagation()}),[]),de=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=H(e,J);return U(U({},W({accept:r,multiple:c,type:"file",style:{display:"none"},onChange:ue(_(o,ae)),onClick:ue(_(i,pe)),autoComplete:"off",tabIndex:-1},t,j)),a)}}),[j,r,c,ae,o]),ve=K.length,ge=ve>0&&function(e){var n=e.files,r=e.accept,t=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=w(x(e,r),1)[0],i=w(z(e,t,o),1)[0];return n&&i}))}({files:K,accept:r,minSize:u,maxSize:a,multiple:c,maxFiles:l}),ye=ve>0&&!ge;return U(U({},E),{},{isDragAccept:ge,isDragReject:ye,isFocused:C&&!o,getRootProps:se,getInputProps:de,rootRef:F,inputRef:j,open:ue(G)})}(H(e,K)),i=o.open,a=H(o,G);return(0,t.useImperativeHandle)(n,(function(){return{open:i}}),[i]),t.createElement(t.Fragment,null,r(U(U({},a),{},{open:i})))}));Q.displayName="Dropzone";var V={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?s(e.dataTransfer,e.type):f(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};Q.defaultProps=V,Q.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var X=Q,Y={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ee(e,n){switch(n.type){case"focus":return U(U({},e),{},{isFocused:!0});case"blur":return U(U({},e),{},{isFocused:!1});case"openDialog":return U(U({},e),{},{isFileDialogActive:!0});case"closeDialog":return U(U({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive,t=n.draggedFiles;return U(U({},e),{},{draggedFiles:t,isDragActive:r});case"setFiles":return U(U({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return U({},Y);default:return e}}},3431:function(e,n,r){r.d(n,{Jh:function(){return u},ZT:function(){return o},ev:function(){return f},fl:function(){return l},mG:function(){return a},pi:function(){return i}});var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])},t(e,n)};function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};function a(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{c(t.next(e))}catch(n){i(n)}}function u(e){try{c(t.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}c((t=t.apply(e,n||[])).next())}))}function u(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(u){i=[6,u],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.create;function c(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,i=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(u){o={error:u}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function l(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(c(arguments[n]));return e}function f(e,n,r){if(r||2===arguments.length)for(var t,o=0,i=n.length;o<i;o++)!t&&o in n||(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return e.concat(t||Array.prototype.slice.call(n))}Object.create}}]);
//# sourceMappingURL=8267.590b6c2c.chunk.js.map