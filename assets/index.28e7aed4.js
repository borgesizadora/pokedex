function hg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function vg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rl={},Ka={exports:{}},ft={},y={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi=Symbol.for("react.element"),gg=Symbol.for("react.portal"),yg=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),wg=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),bg=Symbol.for("react.forward_ref"),Eg=Symbol.for("react.suspense"),Cg=Symbol.for("react.memo"),$g=Symbol.for("react.lazy"),Wf=Symbol.iterator;function Pg(e){return e===null||typeof e!="object"?null:(e=Wf&&e[Wf]||e["@@iterator"],typeof e=="function"?e:null)}var dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,mm={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=mm,this.updater=n||dm}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hm(){}hm.prototype=Gr.prototype;function sc(e,t,n){this.props=e,this.context=t,this.refs=mm,this.updater=n||dm}var lc=sc.prototype=new hm;lc.constructor=sc;pm(lc,Gr.prototype);lc.isPureReactComponent=!0;var Hf=Array.isArray,vm=Object.prototype.hasOwnProperty,uc={current:null},gm={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)vm.call(t,r)&&!gm.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:oi,type:e,key:i,ref:a,props:o,_owner:uc.current}}function _g(e,t){return{$$typeof:oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function Og(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vf=/\/+/g;function Vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Og(""+e.key):t.toString(36)}function Gi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case oi:case gg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Vs(a,0):r,Hf(o)?(n="",e!=null&&(n=e.replace(Vf,"$&/")+"/"),Gi(o,t,n,"",function(u){return u})):o!=null&&(cc(o)&&(o=_g(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Vf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Hf(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Vs(i,s);a+=Gi(i,t,n,l,o)}else if(l=Pg(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Vs(i,s++),a+=Gi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gi(e,t,n){if(e==null)return e;var r=[],o=0;return Gi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Yi={transition:null},Rg={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Yi,ReactCurrentOwner:uc};Q.Children={map:gi,forEach:function(e,t,n){gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gi(e,function(){t++}),t},toArray:function(e){return gi(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Gr;Q.Fragment=yg;Q.Profiler=wg;Q.PureComponent=sc;Q.StrictMode=xg;Q.Suspense=Eg;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=uc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)vm.call(t,l)&&!gm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:oi,type:e.type,key:o,ref:i,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:Sg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kg,_context:e},e.Consumer=e};Q.createElement=ym;Q.createFactory=function(e){var t=ym.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:bg,render:e}};Q.isValidElement=cc;Q.lazy=function(e){return{$$typeof:$g,_payload:{_status:-1,_result:e},_init:Ng}};Q.memo=function(e,t){return{$$typeof:Cg,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Yi.transition;Yi.transition={};try{e()}finally{Yi.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Je.current.useCallback(e,t)};Q.useContext=function(e){return Je.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Je.current.useEffect(e,t)};Q.useId=function(){return Je.current.useId()};Q.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Je.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};Q.useRef=function(e){return Je.current.useRef(e)};Q.useState=function(e){return Je.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Je.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(y);const Se=vg(y.exports),fa=hg({__proto__:null,default:Se},[y.exports]);var xm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,W){var H=R.length;R.push(W);e:for(;0<H;){var ae=H-1>>>1,I=R[ae];if(0<o(I,W))R[ae]=W,R[H]=I,H=ae;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],H=R.pop();if(H!==W){R[0]=H;e:for(var ae=0,I=R.length,M=I>>>1;ae<M;){var F=2*(ae+1)-1,V=R[F],b=F+1,X=R[b];if(0>o(V,H))b<I&&0>o(X,V)?(R[ae]=X,R[b]=H,ae=b):(R[ae]=V,R[F]=H,ae=F);else if(b<I&&0>o(X,H))R[ae]=X,R[b]=H,ae=b;else break e}}return W}function o(R,W){var H=R.sortIndex-W.sortIndex;return H!==0?H:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,p=3,v=!1,g=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=R)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function w(R){if(x=!1,h(R),!g)if(n(l)!==null)g=!0,Ut(S);else{var W=n(u);W!==null&&Ke(w,W.startTime-R)}}function S(R,W){g=!1,x&&(x=!1,m(P),P=-1),v=!0;var H=p;try{for(h(W),f=n(l);f!==null&&(!(f.expirationTime>W)||R&&!se());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,p=f.priorityLevel;var I=ae(f.expirationTime<=W);W=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(l)&&r(l),h(W)}else r(l);f=n(l)}if(f!==null)var M=!0;else{var F=n(u);F!==null&&Ke(w,F.startTime-W),M=!1}return M}finally{f=null,p=H,v=!1}}var $=!1,N=null,P=-1,L=5,B=-1;function se(){return!(e.unstable_now()-B<L)}function we(){if(N!==null){var R=e.unstable_now();B=R;var W=!0;try{W=N(!0,R)}finally{W?Le():($=!1,N=null)}}else $=!1}var Le;if(typeof d=="function")Le=function(){d(we)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Be=at.port2;at.port1.onmessage=we,Le=function(){Be.postMessage(null)}}else Le=function(){E(we,0)};function Ut(R){N=R,$||($=!0,Le())}function Ke(R,W){P=E(function(){R(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Ut(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var H=p;p=W;try{return R()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=p;p=R;try{return W()}finally{p=H}},e.unstable_scheduleCallback=function(R,W,H){var ae=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,R){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=H+I,R={id:c++,callback:W,priorityLevel:R,startTime:H,expirationTime:I,sortIndex:-1},H>ae?(R.sortIndex=H,t(u,R),n(l)===null&&R===n(u)&&(x?(m(P),P=-1):x=!0,Ke(w,H-ae))):(R.sortIndex=I,t(l,R),g||v||(g=!0,Ut(S))),R},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(R){var W=p;return function(){var H=p;p=W;try{return R.apply(this,arguments)}finally{p=H}}}})(wm);(function(e){e.exports=wm})(xm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=y.exports,ct=xm.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sm=new Set,Io={};function ir(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Io[e]=t,e=0;e<t.length;e++)Sm.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,Ag=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gf={},Yf={};function Tg(e){return Al.call(Yf,e)?!0:Al.call(Gf,e)?!1:Ag.test(e)?Yf[e]=!0:(Gf[e]=!0,!1)}function Ig(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lg(e,t,n,r){if(t===null||typeof t>"u"||Ig(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fc,dc);Ue[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fc,dc);Ue[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fc,dc);Ue[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var o=Ue.hasOwnProperty(t)?Ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lg(t,n,o,r)&&(n=null),r||o===null?Tg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),fr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Em=Symbol.for("react.context"),hc=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=Kf&&e[Kf]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Gs;function vo(e){if(Gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gs=t&&t[1]||""}return`
`+Gs+e}var Ys=!1;function Ks(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function Mg(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=Ks(e.type,!1),e;case 11:return e=Ks(e.type.render,!1),e;case 1:return e=Ks(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case fr:return"Portal";case Tl:return"Profiler";case mc:return"StrictMode";case Il:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Em:return(e.displayName||"Context")+".Consumer";case bm:return(e._context.displayName||"Context")+".Provider";case hc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function Dg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $m(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zg(e){var t=$m(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=zg(e))}function Pm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$m(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Qf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _m(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function zl(e,t){_m(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||da(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var go=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(go(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function Om(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wi,Rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wi=wi||document.createElement("div"),wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fg=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(e){Fg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),So[t]=So[e]})});function Am(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||So.hasOwnProperty(e)&&So[e]?(""+t).trim():t+"px"}function Tm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Am(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var jg=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(jg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,_r=null,Or=null;function qf(e){if(e=si(e)){if(typeof Vl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=qa(t),Vl(e.stateNode,e.type,t))}}function Im(e){_r?Or?Or.push(e):Or=[e]:_r=e}function Lm(){if(_r){var e=_r,t=Or;if(Or=_r=null,qf(e),t)for(e=0;e<t.length;e++)qf(t[e])}}function Mm(e,t){return e(t)}function Dm(){}var Qs=!1;function zm(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return Mm(e,t,n)}finally{Qs=!1,(_r!==null||Or!==null)&&(Dm(),Lm())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Gl=!1;if(Kt)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Gl=!1}function Ug(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var bo=!1,pa=null,ma=!1,Yl=null,Bg={onError:function(e){bo=!0,pa=e}};function Wg(e,t,n,r,o,i,a,s,l){bo=!1,pa=null,Ug.apply(Bg,arguments)}function Hg(e,t,n,r,o,i,a,s,l){if(Wg.apply(this,arguments),bo){if(bo){var u=pa;bo=!1,pa=null}else throw Error(_(198));ma||(ma=!0,Yl=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ed(e){if(ar(e)!==e)throw Error(_(188))}function Vg(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ed(o),e;if(i===r)return ed(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function jm(e){return e=Vg(e),e!==null?Um(e):null}function Um(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Um(e);if(t!==null)return t;e=e.sibling}return null}var Bm=ct.unstable_scheduleCallback,td=ct.unstable_cancelCallback,Gg=ct.unstable_shouldYield,Yg=ct.unstable_requestPaint,be=ct.unstable_now,Kg=ct.unstable_getCurrentPriorityLevel,yc=ct.unstable_ImmediatePriority,Wm=ct.unstable_UserBlockingPriority,ha=ct.unstable_NormalPriority,Qg=ct.unstable_LowPriority,Hm=ct.unstable_IdlePriority,Qa=null,Ft=null;function Xg(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Qa,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:qg,Jg=Math.log,Zg=Math.LN2;function qg(e){return e>>>=0,e===0?32:31-(Jg(e)/Zg|0)|0}var ki=64,Si=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function va(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=yo(s):(i&=a,i!==0&&(r=yo(i)))}else a=n&~o,a!==0?r=yo(a):i!==0&&(r=yo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),o=1<<n,r|=e[n],t&=~o;return r}function e1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Rt(i),s=1<<a,l=o[a];l===-1?((s&n)===0||(s&r)!==0)&&(o[a]=e1(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vm(){var e=ki;return ki<<=1,(ki&4194240)===0&&(ki=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function n1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function Gm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ym,wc,Km,Qm,Xm,Ql=!1,bi=[],wn=null,kn=null,Sn=null,Do=new Map,zo=new Map,pn=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Do.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function io(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=si(t),t!==null&&wc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function o1(e,t,n,r,o){switch(t){case"focusin":return wn=io(wn,e,t,n,r,o),!0;case"dragenter":return kn=io(kn,e,t,n,r,o),!0;case"mouseover":return Sn=io(Sn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Do.set(i,io(Do.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zo.set(i,io(zo.get(i)||null,e,t,n,r,o)),!0}return!1}function Jm(e){var t=Un(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Fm(n),t!==null){e.blockedOn=t,Xm(e.priority,function(){Km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hl=r,n.target.dispatchEvent(r),Hl=null}else return t=si(n),t!==null&&wc(t),e.blockedOn=n,!1;t.shift()}return!0}function rd(e,t,n){Ki(e)&&n.delete(t)}function i1(){Ql=!1,wn!==null&&Ki(wn)&&(wn=null),kn!==null&&Ki(kn)&&(kn=null),Sn!==null&&Ki(Sn)&&(Sn=null),Do.forEach(rd),zo.forEach(rd)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,i1)))}function Fo(e){function t(o){return ao(o,e)}if(0<bi.length){ao(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&ao(wn,e),kn!==null&&ao(kn,e),Sn!==null&&ao(Sn,e),Do.forEach(t),zo.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Jm(n),n.blockedOn===null&&pn.shift()}var Nr=nn.ReactCurrentBatchConfig,ga=!0;function a1(e,t,n,r){var o=re,i=Nr.transition;Nr.transition=null;try{re=1,kc(e,t,n,r)}finally{re=o,Nr.transition=i}}function s1(e,t,n,r){var o=re,i=Nr.transition;Nr.transition=null;try{re=4,kc(e,t,n,r)}finally{re=o,Nr.transition=i}}function kc(e,t,n,r){if(ga){var o=Xl(e,t,n,r);if(o===null)al(e,t,r,ya,n),nd(e,r);else if(o1(o,e,t,n,r))r.stopPropagation();else if(nd(e,r),t&4&&-1<r1.indexOf(e)){for(;o!==null;){var i=si(o);if(i!==null&&Ym(i),i=Xl(e,t,n,r),i===null&&al(e,t,r,ya,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var ya=null;function Xl(e,t,n,r){if(ya=null,e=gc(r),e=Un(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ya=e,null}function Zm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case yc:return 1;case Wm:return 4;case ha:case Qg:return 16;case Hm:return 536870912;default:return 16}default:return 16}}var hn=null,Sc=null,Qi=null;function qm(){if(Qi)return Qi;var e,t=Sc,n=t.length,r,o="value"in hn?hn.value:hn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Qi=o.slice(e,1<r?1-r:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function od(){return!1}function dt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ei:od,this.isPropagationStopped=od,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=dt(Yr),ai=ve({},Yr,{view:0,detail:0}),l1=dt(ai),Js,Zs,so,Xa=ve({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Js=e.screenX-so.screenX,Zs=e.screenY-so.screenY):Zs=Js=0,so=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),id=dt(Xa),u1=ve({},Xa,{dataTransfer:0}),c1=dt(u1),f1=ve({},ai,{relatedTarget:0}),qs=dt(f1),d1=ve({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=dt(d1),m1=ve({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h1=dt(m1),v1=ve({},Yr,{data:0}),ad=dt(v1),g1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=x1[e])?!!t[e]:!1}function Ec(){return w1}var k1=ve({},ai,{key:function(e){if(e.key){var t=g1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S1=dt(k1),b1=ve({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=dt(b1),E1=ve({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),C1=dt(E1),$1=ve({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=dt($1),_1=ve({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=dt(_1),N1=[9,13,27,32],Cc=Kt&&"CompositionEvent"in window,Eo=null;Kt&&"documentMode"in document&&(Eo=document.documentMode);var R1=Kt&&"TextEvent"in window&&!Eo,eh=Kt&&(!Cc||Eo&&8<Eo&&11>=Eo),ld=String.fromCharCode(32),ud=!1;function th(e,t){switch(e){case"keyup":return N1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function A1(e,t){switch(e){case"compositionend":return nh(t);case"keypress":return t.which!==32?null:(ud=!0,ld);case"textInput":return e=t.data,e===ld&&ud?null:e;default:return null}}function T1(e,t){if(pr)return e==="compositionend"||!Cc&&th(e,t)?(e=qm(),Qi=Sc=hn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eh&&t.locale!=="ko"?null:t.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I1[e.type]:t==="textarea"}function rh(e,t,n,r){Im(r),t=xa(t,"onChange"),0<t.length&&(n=new bc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Co=null,jo=null;function L1(e){mh(e,0)}function Ja(e){var t=vr(e);if(Pm(t))return e}function M1(e,t){if(e==="change")return t}var oh=!1;if(Kt){var el;if(Kt){var tl="oninput"in document;if(!tl){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),tl=typeof fd.oninput=="function"}el=tl}else el=!1;oh=el&&(!document.documentMode||9<document.documentMode)}function dd(){Co&&(Co.detachEvent("onpropertychange",ih),jo=Co=null)}function ih(e){if(e.propertyName==="value"&&Ja(jo)){var t=[];rh(t,jo,e,gc(e)),zm(L1,t)}}function D1(e,t,n){e==="focusin"?(dd(),Co=t,jo=n,Co.attachEvent("onpropertychange",ih)):e==="focusout"&&dd()}function z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(jo)}function F1(e,t){if(e==="click")return Ja(t)}function j1(e,t){if(e==="input"||e==="change")return Ja(t)}function U1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:U1;function Uo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Al.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,t){var n=pd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pd(n)}}function ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sh(){for(var e=window,t=da();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=da(e.document)}return t}function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function B1(e){var t=sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ah(n.ownerDocument.documentElement,n)){if(r!==null&&$c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=md(n,i);var a=md(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var W1=Kt&&"documentMode"in document&&11>=document.documentMode,mr=null,Jl=null,$o=null,Zl=!1;function hd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zl||mr==null||mr!==da(r)||(r=mr,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&Uo($o,r)||($o=r,r=xa(Jl,"onSelect"),0<r.length&&(t=new bc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},nl={},lh={};Kt&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Za(e){if(nl[e])return nl[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lh)return nl[e]=t[n];return e}var uh=Za("animationend"),ch=Za("animationiteration"),fh=Za("animationstart"),dh=Za("transitionend"),ph=new Map,vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){ph.set(e,t),ir(t,[e])}for(var rl=0;rl<vd.length;rl++){var ol=vd[rl],H1=ol.toLowerCase(),V1=ol[0].toUpperCase()+ol.slice(1);Ln(H1,"on"+V1)}Ln(uh,"onAnimationEnd");Ln(ch,"onAnimationIteration");Ln(fh,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(dh,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function gd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hg(r,t,void 0,e),e.currentTarget=null}function mh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;gd(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;gd(o,s,u),i=l}}}if(ma)throw e=Yl,ma=!1,Yl=null,e}function ue(e,t){var n=t[ru];n===void 0&&(n=t[ru]=new Set);var r=e+"__bubble";n.has(r)||(hh(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),hh(n,e,r,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Bo(e){if(!e[$i]){e[$i]=!0,Sm.forEach(function(n){n!=="selectionchange"&&(G1.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,il("selectionchange",!1,t))}}function hh(e,t,n,r){switch(Zm(t)){case 1:var o=a1;break;case 4:o=s1;break;default:o=kc}n=o.bind(null,t,n,e),o=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function al(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Un(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}zm(function(){var u=i,c=gc(n),f=[];e:{var p=ph.get(e);if(p!==void 0){var v=bc,g=e;switch(e){case"keypress":if(Xi(n)===0)break e;case"keydown":case"keyup":v=S1;break;case"focusin":g="focus",v=qs;break;case"focusout":g="blur",v=qs;break;case"beforeblur":case"afterblur":v=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=C1;break;case uh:case ch:case fh:v=p1;break;case dh:v=P1;break;case"scroll":v=l1;break;case"wheel":v=O1;break;case"copy":case"cut":case"paste":v=h1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sd}var x=(t&4)!==0,E=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=Mo(d,m),w!=null&&x.push(Wo(d,w,h)))),E)break;d=d.return}0<x.length&&(p=new v(p,g,null,n,c),f.push({event:p,listeners:x}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Hl&&(g=n.relatedTarget||n.fromElement)&&(Un(g)||g[Qt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Un(g):null,g!==null&&(E=ar(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(x=id,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=sd,w="onPointerLeave",m="onPointerEnter",d="pointer"),E=v==null?p:vr(v),h=g==null?p:vr(g),p=new x(w,d+"leave",v,n,c),p.target=E,p.relatedTarget=h,w=null,Un(c)===u&&(x=new x(m,d+"enter",g,n,c),x.target=h,x.relatedTarget=E,w=x),E=w,v&&g)t:{for(x=v,m=g,d=0,h=x;h;h=ur(h))d++;for(h=0,w=m;w;w=ur(w))h++;for(;0<d-h;)x=ur(x),d--;for(;0<h-d;)m=ur(m),h--;for(;d--;){if(x===m||m!==null&&x===m.alternate)break t;x=ur(x),m=ur(m)}x=null}else x=null;v!==null&&yd(f,p,v,x,!1),g!==null&&E!==null&&yd(f,E,g,x,!0)}}e:{if(p=u?vr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=M1;else if(cd(p))if(oh)S=j1;else{S=z1;var $=D1}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=F1);if(S&&(S=S(e,u))){rh(f,S,n,c);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Fl(p,"number",p.value)}switch($=u?vr(u):window,e){case"focusin":(cd($)||$.contentEditable==="true")&&(mr=$,Jl=u,$o=null);break;case"focusout":$o=Jl=mr=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,hd(f,n,c);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":hd(f,n,c)}var N;if(Cc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?th(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(eh&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(N=qm()):(hn=c,Sc="value"in hn?hn.value:hn.textContent,pr=!0)),$=xa(u,P),0<$.length&&(P=new ad(P,e,null,n,c),f.push({event:P,listeners:$}),N?P.data=N:(N=nh(n),N!==null&&(P.data=N)))),(N=R1?A1(e,n):T1(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(c=new ad("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}mh(f,t)})}function Wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mo(e,n),i!=null&&r.unshift(Wo(e,i,o)),i=Mo(e,t),i!=null&&r.push(Wo(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Mo(n,i),l!=null&&a.unshift(Wo(n,l,s))):o||(l=Mo(n,i),l!=null&&a.push(Wo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Y1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(Y1,`
`).replace(K1,"")}function Pi(e,t,n){if(t=xd(t),xd(e)!==t&&n)throw Error(_(425))}function wa(){}var ql=null,eu=null;function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(e){return wd.resolve(null).then(e).catch(J1)}:nu;function J1(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fo(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Kr,Ho="__reactProps$"+Kr,Qt="__reactContainer$"+Kr,ru="__reactEvents$"+Kr,Z1="__reactListeners$"+Kr,q1="__reactHandles$"+Kr;function Un(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kd(e);e!==null;){if(n=e[Dt])return n;e=kd(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[Dt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function qa(e){return e[Ho]||null}var ou=[],gr=-1;function Mn(e){return{current:e}}function fe(e){0>gr||(e.current=ou[gr],ou[gr]=null,gr--)}function le(e,t){gr++,ou[gr]=e.current,e.current=t}var Rn={},Ye=Mn(Rn),nt=Mn(!1),Xn=Rn;function Lr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function ka(){fe(nt),fe(Ye)}function Sd(e,t,n){if(Ye.current!==Rn)throw Error(_(168));le(Ye,t),le(nt,n)}function vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Dg(e)||"Unknown",o));return ve({},n,r)}function Sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Xn=Ye.current,le(Ye,e),le(nt,nt.current),!0}function bd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=vh(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,fe(nt),fe(Ye),le(Ye,e)):fe(nt),le(nt,n)}var Wt=null,es=!1,ll=!1;function gh(e){Wt===null?Wt=[e]:Wt.push(e)}function ey(e){es=!0,gh(e)}function Dn(){if(!ll&&Wt!==null){ll=!0;var e=0,t=re;try{var n=Wt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,es=!1}catch(o){throw Wt!==null&&(Wt=Wt.slice(e+1)),Bm(yc,Dn),o}finally{re=t,ll=!1}}return null}var yr=[],xr=0,ba=null,Ea=0,ht=[],vt=0,Jn=null,Ht=1,Vt="";function zn(e,t){yr[xr++]=Ea,yr[xr++]=ba,ba=e,Ea=t}function yh(e,t,n){ht[vt++]=Ht,ht[vt++]=Vt,ht[vt++]=Jn,Jn=e;var r=Ht;e=Vt;var o=32-Rt(r)-1;r&=~(1<<o),n+=1;var i=32-Rt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Ht=1<<32-Rt(t)+o|n<<o|r,Vt=i+e}else Ht=1<<i|n<<o|r,Vt=e}function Pc(e){e.return!==null&&(zn(e,1),yh(e,1,0))}function _c(e){for(;e===ba;)ba=yr[--xr],yr[xr]=null,Ea=yr[--xr],yr[xr]=null;for(;e===Jn;)Jn=ht[--vt],ht[vt]=null,Vt=ht[--vt],ht[vt]=null,Ht=ht[--vt],ht[vt]=null}var ut=null,lt=null,pe=!1,_t=null;function xh(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,lt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,lt=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function au(e){if(pe){var t=lt;if(t){var n=t;if(!Ed(e,t)){if(iu(e))throw Error(_(418));t=bn(n.nextSibling);var r=ut;t&&Ed(e,t)?xh(r,n):(e.flags=e.flags&-4097|2,pe=!1,ut=e)}}else{if(iu(e))throw Error(_(418));e.flags=e.flags&-4097|2,pe=!1,ut=e}}}function Cd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function _i(e){if(e!==ut)return!1;if(!pe)return Cd(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tu(e.type,e.memoizedProps)),t&&(t=lt)){if(iu(e))throw wh(),Error(_(418));for(;t;)xh(e,t),t=bn(t.nextSibling)}if(Cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ut?bn(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=lt;e;)e=bn(e.nextSibling)}function Mr(){lt=ut=null,pe=!1}function Oc(e){_t===null?_t=[e]:_t.push(e)}var ty=nn.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ca=Mn(null),$a=null,wr=null,Nc=null;function Rc(){Nc=wr=$a=null}function Ac(e){var t=Ca.current;fe(Ca),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){$a=e,Nc=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Nc!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if($a===null)throw Error(_(308));wr=e,$a.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Bn=null;function Tc(e){Bn===null?Bn=[e]:Bn.push(e)}function kh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Tc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function Ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Tc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function $d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pa(e,t,n,r){var o=e.updateQueue;dn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,c=u=l=null,s=i;do{var p=s.lane,v=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(p=t,v=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(v,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(v,f,p):g,p==null)break e;f=ve({},f,p);break e;case 2:dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=f}}function Pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var bh=new km.Component().refs;function lu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=$n(e),i=Gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&(At(t,e,o,r),Ji(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=$n(e),i=Gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&(At(t,e,o,r),Ji(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=$n(e),o=Gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=En(e,o,r),t!==null&&(At(t,e,r,n),Ji(t,e,r))}};function _d(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,r)||!Uo(o,i):!0}function Eh(e,t,n){var r=!1,o=Rn,i=t.contextType;return typeof i=="object"&&i!==null?i=kt(i):(o=rt(t)?Xn:Ye.current,r=t.contextTypes,i=(r=r!=null)?Lr(e,o):Rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Od(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function uu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=bh,Ic(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=kt(i):(i=rt(t)?Xn:Ye.current,o.context=Lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(lu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ts.enqueueReplaceState(o,o.state,null),Pa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function lo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===bh&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Oi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nd(e){var t=e._init;return t(e._payload)}function Ch(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=Pn(m,d),m.index=0,m.sibling=null,m}function i(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,h,w){return d===null||d.tag!==6?(d=hl(h,m.mode,w),d.return=m,d):(d=o(d,h),d.return=m,d)}function l(m,d,h,w){var S=h.type;return S===dr?c(m,d,h.props.children,w,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&Nd(S)===d.type)?(w=o(d,h.props),w.ref=lo(m,d,h),w.return=m,w):(w=ra(h.type,h.key,h.props,null,m.mode,w),w.ref=lo(m,d,h),w.return=m,w)}function u(m,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=vl(h,m.mode,w),d.return=m,d):(d=o(d,h.children||[]),d.return=m,d)}function c(m,d,h,w,S){return d===null||d.tag!==7?(d=Kn(h,m.mode,w,S),d.return=m,d):(d=o(d,h),d.return=m,d)}function f(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hl(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yi:return h=ra(d.type,d.key,d.props,null,m.mode,h),h.ref=lo(m,null,d),h.return=m,h;case fr:return d=vl(d,m.mode,h),d.return=m,d;case fn:var w=d._init;return f(m,w(d._payload),h)}if(go(d)||ro(d))return d=Kn(d,m.mode,h,null),d.return=m,d;Oi(m,d)}return null}function p(m,d,h,w){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(m,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:return h.key===S?l(m,d,h,w):null;case fr:return h.key===S?u(m,d,h,w):null;case fn:return S=h._init,p(m,d,S(h._payload),w)}if(go(h)||ro(h))return S!==null?null:c(m,d,h,w,null);Oi(m,h)}return null}function v(m,d,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,s(d,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yi:return m=m.get(w.key===null?h:w.key)||null,l(d,m,w,S);case fr:return m=m.get(w.key===null?h:w.key)||null,u(d,m,w,S);case fn:var $=w._init;return v(m,d,h,$(w._payload),S)}if(go(w)||ro(w))return m=m.get(h)||null,c(d,m,w,S,null);Oi(d,w)}return null}function g(m,d,h,w){for(var S=null,$=null,N=d,P=d=0,L=null;N!==null&&P<h.length;P++){N.index>P?(L=N,N=null):L=N.sibling;var B=p(m,N,h[P],w);if(B===null){N===null&&(N=L);break}e&&N&&B.alternate===null&&t(m,N),d=i(B,d,P),$===null?S=B:$.sibling=B,$=B,N=L}if(P===h.length)return n(m,N),pe&&zn(m,P),S;if(N===null){for(;P<h.length;P++)N=f(m,h[P],w),N!==null&&(d=i(N,d,P),$===null?S=N:$.sibling=N,$=N);return pe&&zn(m,P),S}for(N=r(m,N);P<h.length;P++)L=v(N,m,P,h[P],w),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?P:L.key),d=i(L,d,P),$===null?S=L:$.sibling=L,$=L);return e&&N.forEach(function(se){return t(m,se)}),pe&&zn(m,P),S}function x(m,d,h,w){var S=ro(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var $=S=null,N=d,P=d=0,L=null,B=h.next();N!==null&&!B.done;P++,B=h.next()){N.index>P?(L=N,N=null):L=N.sibling;var se=p(m,N,B.value,w);if(se===null){N===null&&(N=L);break}e&&N&&se.alternate===null&&t(m,N),d=i(se,d,P),$===null?S=se:$.sibling=se,$=se,N=L}if(B.done)return n(m,N),pe&&zn(m,P),S;if(N===null){for(;!B.done;P++,B=h.next())B=f(m,B.value,w),B!==null&&(d=i(B,d,P),$===null?S=B:$.sibling=B,$=B);return pe&&zn(m,P),S}for(N=r(m,N);!B.done;P++,B=h.next())B=v(N,m,P,B.value,w),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?P:B.key),d=i(B,d,P),$===null?S=B:$.sibling=B,$=B);return e&&N.forEach(function(we){return t(m,we)}),pe&&zn(m,P),S}function E(m,d,h,w){if(typeof h=="object"&&h!==null&&h.type===dr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:e:{for(var S=h.key,$=d;$!==null;){if($.key===S){if(S=h.type,S===dr){if($.tag===7){n(m,$.sibling),d=o($,h.props.children),d.return=m,m=d;break e}}else if($.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&Nd(S)===$.type){n(m,$.sibling),d=o($,h.props),d.ref=lo(m,$,h),d.return=m,m=d;break e}n(m,$);break}else t(m,$);$=$.sibling}h.type===dr?(d=Kn(h.props.children,m.mode,w,h.key),d.return=m,m=d):(w=ra(h.type,h.key,h.props,null,m.mode,w),w.ref=lo(m,d,h),w.return=m,m=w)}return a(m);case fr:e:{for($=h.key;d!==null;){if(d.key===$)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=o(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=vl(h,m.mode,w),d.return=m,m=d}return a(m);case fn:return $=h._init,E(m,d,$(h._payload),w)}if(go(h))return g(m,d,h,w);if(ro(h))return x(m,d,h,w);Oi(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,h),d.return=m,m=d):(n(m,d),d=hl(h,m.mode,w),d.return=m,m=d),a(m)):n(m,d)}return E}var Dr=Ch(!0),$h=Ch(!1),li={},jt=Mn(li),Vo=Mn(li),Go=Mn(li);function Wn(e){if(e===li)throw Error(_(174));return e}function Lc(e,t){switch(le(Go,t),le(Vo,e),le(jt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}fe(jt),le(jt,t)}function zr(){fe(jt),fe(Vo),fe(Go)}function Ph(e){Wn(Go.current);var t=Wn(jt.current),n=Ul(t,e.type);t!==n&&(le(Vo,e),le(jt,n))}function Mc(e){Vo.current===e&&(fe(jt),fe(Vo))}var me=Mn(0);function _a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function Dc(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Zi=nn.ReactCurrentDispatcher,cl=nn.ReactCurrentBatchConfig,Zn=0,he=null,$e=null,Ne=null,Oa=!1,Po=!1,Yo=0,ny=0;function He(){throw Error(_(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Fc(e,t,n,r,o,i){if(Zn=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zi.current=e===null||e.memoizedState===null?ay:sy,e=n(r,o),Po){i=0;do{if(Po=!1,Yo=0,25<=i)throw Error(_(301));i+=1,Ne=$e=null,t.updateQueue=null,Zi.current=ly,e=n(r,o)}while(Po)}if(Zi.current=Na,t=$e!==null&&$e.next!==null,Zn=0,Ne=$e=he=null,Oa=!1,t)throw Error(_(300));return e}function jc(){var e=Yo!==0;return Yo=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?he.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function St(){if($e===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Ne===null?he.memoizedState:Ne.next;if(t!==null)Ne=t,$e=e;else{if(e===null)throw Error(_(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ne===null?he.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Ko(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=St(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=$e,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((Zn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,he.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Tt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,he.lanes|=i,qn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=St(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(tt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _h(){}function Oh(e,t){var n=he,r=St(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,tt=!0),r=r.queue,Uc(Ah.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Qo(9,Rh.bind(null,n,r,o,t),void 0,null),Te===null)throw Error(_(349));(Zn&30)!==0||Nh(n,t,o)}return o}function Nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rh(e,t,n,r){t.value=n,t.getSnapshot=r,Th(t)&&Ih(e)}function Ah(e,t,n){return n(function(){Th(t)&&Ih(e)})}function Th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Ih(e){var t=Xt(e,1);t!==null&&At(t,e,1,-1)}function Rd(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=iy.bind(null,he,e),[t.memoizedState,e]}function Qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lh(){return St().memoizedState}function qi(e,t,n,r){var o=Mt();he.flags|=e,o.memoizedState=Qo(1|t,n,void 0,r===void 0?null:r)}function ns(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if($e!==null){var a=$e.memoizedState;if(i=a.destroy,r!==null&&zc(r,a.deps)){o.memoizedState=Qo(t,n,i,r);return}}he.flags|=e,o.memoizedState=Qo(1|t,n,i,r)}function Ad(e,t){return qi(8390656,8,e,t)}function Uc(e,t){return ns(2048,8,e,t)}function Mh(e,t){return ns(4,2,e,t)}function Dh(e,t){return ns(4,4,e,t)}function zh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fh(e,t,n){return n=n!=null?n.concat([e]):null,ns(4,4,zh.bind(null,t,e),n)}function Bc(){}function jh(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uh(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bh(e,t,n){return(Zn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Tt(n,t)||(n=Vm(),he.lanes|=n,qn|=n,e.baseState=!0),t)}function ry(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{re=n,cl.transition=r}}function Wh(){return St().memoizedState}function oy(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hh(e))Vh(t,n);else if(n=kh(e,t,n,r),n!==null){var o=Xe();At(n,e,r,o),Gh(n,t,r)}}function iy(e,t,n){var r=$n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))Vh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Tt(s,a)){var l=t.interleaved;l===null?(o.next=o,Tc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=kh(e,t,o,r),n!==null&&(o=Xe(),At(n,e,r,o),Gh(n,t,r))}}function Hh(e){var t=e.alternate;return e===he||t!==null&&t===he}function Vh(e,t){Po=Oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var Na={readContext:kt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},ay={readContext:kt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Ad,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qi(4194308,4,zh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return qi(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oy.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Rd,useDebugValue:Bc,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Rd(!1),t=e[0];return e=ry.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=Mt();if(pe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Te===null)throw Error(_(349));(Zn&30)!==0||Nh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ad(Ah.bind(null,r,i,e),[e]),r.flags|=2048,Qo(9,Rh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Te.identifierPrefix;if(pe){var n=Vt,r=Ht;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ny++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sy={readContext:kt,useCallback:jh,useContext:kt,useEffect:Uc,useImperativeHandle:Fh,useInsertionEffect:Mh,useLayoutEffect:Dh,useMemo:Uh,useReducer:fl,useRef:Lh,useState:function(){return fl(Ko)},useDebugValue:Bc,useDeferredValue:function(e){var t=St();return Bh(t,$e.memoizedState,e)},useTransition:function(){var e=fl(Ko)[0],t=St().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Oh,useId:Wh,unstable_isNewReconciler:!1},ly={readContext:kt,useCallback:jh,useContext:kt,useEffect:Uc,useImperativeHandle:Fh,useInsertionEffect:Mh,useLayoutEffect:Dh,useMemo:Uh,useReducer:dl,useRef:Lh,useState:function(){return dl(Ko)},useDebugValue:Bc,useDeferredValue:function(e){var t=St();return $e===null?t.memoizedState=e:Bh(t,$e.memoizedState,e)},useTransition:function(){var e=dl(Ko)[0],t=St().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Oh,useId:Wh,unstable_isNewReconciler:!1};function Fr(e,t){try{var n="",r=t;do n+=Mg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Aa||(Aa=!0,wu=r),cu(e,t)},n}function Kh(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){cu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){cu(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=by.bind(null,e,t,n),t.then(e,e))}function Id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ld(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var cy=nn.ReactCurrentOwner,tt=!1;function Qe(e,t,n,r){t.child=e===null?$h(t,null,n,r):Dr(t,e.child,n,r)}function Md(e,t,n,r,o){n=n.render;var i=t.ref;return Rr(t,o),r=Fc(e,t,n,r,i,o),n=jc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(pe&&n&&Pc(t),t.flags|=1,Qe(e,t,r,o),t.child)}function Dd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qh(e,t,i,r,o)):(e=ra(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(a,r)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Uo(i,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return fu(e,t,n,r,o)}function Xh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Sr,st),st|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Sr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,le(Sr,st),st|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,le(Sr,st),st|=r;return Qe(e,t,o,n),t.child}function Jh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fu(e,t,n,r,o){var i=rt(n)?Xn:Ye.current;return i=Lr(t,i),Rr(t,o),n=Fc(e,t,n,r,i,o),r=jc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(pe&&r&&Pc(t),t.flags|=1,Qe(e,t,n,o),t.child)}function zd(e,t,n,r,o){if(rt(n)){var i=!0;Sa(t)}else i=!1;if(Rr(t,o),t.stateNode===null)ea(e,t),Eh(t,n,r),uu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=rt(n)?Xn:Ye.current,u=Lr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Od(t,a,r,u),dn=!1;var p=t.memoizedState;a.state=p,Pa(t,r,a,o),l=t.memoizedState,s!==r||p!==l||nt.current||dn?(typeof c=="function"&&(lu(t,n,c,r),l=t.memoizedState),(s=dn||_d(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Sh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:$t(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=rt(n)?Xn:Ye.current,l=Lr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&Od(t,a,r,l),dn=!1,p=t.memoizedState,a.state=p,Pa(t,r,a,o);var g=t.memoizedState;s!==f||p!==g||nt.current||dn?(typeof v=="function"&&(lu(t,n,v,r),g=t.memoizedState),(u=dn||_d(t,n,u,r,p,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return du(e,t,n,r,i,o)}function du(e,t,n,r,o,i){Jh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&bd(t,n,!1),Jt(e,t,i);r=t.stateNode,cy.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Dr(t,e.child,null,i),t.child=Dr(t,null,s,i)):Qe(e,t,s,i),t.memoizedState=r.state,o&&bd(t,n,!0),t.child}function Zh(e){var t=e.stateNode;t.pendingContext?Sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sd(e,t.context,!1),Lc(e,t.containerInfo)}function Fd(e,t,n,r,o){return Mr(),Oc(o),t.flags|=256,Qe(e,t,n,r),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function qh(e,t,n){var r=t.pendingProps,o=me.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(me,o&1),e===null)return au(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=is(a,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=mu(n),t.memoizedState=pu,e):Wc(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return fy(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Pn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Pn(s,i):(i=Kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?mu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=pu,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wc(e,t){return t=is({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&Oc(r),Dr(t,e.child,null,n),e=Wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fy(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(_(422))),Ni(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=is({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Dr(t,e.child,null,a),t.child.memoizedState=mu(a),t.memoizedState=pu,i);if((t.mode&1)===0)return Ni(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=pl(i,r,void 0),Ni(e,t,a,r)}if(s=(a&e.childLanes)!==0,tt||s){if(r=Te,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xt(e,o),At(r,e,o,-1))}return Qc(),r=pl(Error(_(421))),Ni(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ey.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,lt=bn(o.nextSibling),ut=t,pe=!0,_t=null,e!==null&&(ht[vt++]=Ht,ht[vt++]=Vt,ht[vt++]=Jn,Ht=e.id,Vt=e.overflow,Jn=t),t=Wc(t,r.children),t.flags|=4096,t)}function jd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function ml(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ev(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Qe(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,t);else if(e.tag===19)jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&_a(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ml(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&_a(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ml(t,!0,n,null,i);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dy(e,t,n){switch(t.tag){case 3:Zh(t),Mr();break;case 5:Ph(t);break;case 1:rt(t.type)&&Sa(t);break;case 4:Lc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(Ca,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qh(e,t,n):(le(me,me.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);le(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ev(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Xh(e,t,n)}return Jt(e,t,n)}var tv,hu,nv,rv;tv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hu=function(){};nv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Wn(jt.current);var i=null;switch(n){case"input":o=Dl(e,o),r=Dl(e,r),i=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),i=[];break;case"textarea":o=jl(e,o),r=jl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wa)}Bl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};rv=function(e,t,n,r){n!==r&&(t.flags|=4)};function uo(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function py(e,t,n){var r=t.pendingProps;switch(_c(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return rt(t.type)&&ka(),Ve(t),null;case 3:return r=t.stateNode,zr(),fe(nt),fe(Ye),Dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(bu(_t),_t=null))),hu(e,t),Ve(t),null;case 5:Mc(t);var o=Wn(Go.current);if(n=t.type,e!==null&&t.stateNode!=null)nv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ve(t),null}if(e=Wn(jt.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Dt]=t,r[Ho]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<xo.length;o++)ue(xo[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Qf(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":Jf(r,i),ue("invalid",r)}Bl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Pi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Pi(r.textContent,s,e),o=["children",""+s]):Io.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":xi(r),Xf(r,i,!0);break;case"textarea":xi(r),Zf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Dt]=t,e[Ho]=r,tv(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<xo.length;o++)ue(xo[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":Qf(e,r),o=Dl(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Jf(e,r),o=jl(e,r),ue("invalid",e);break;default:o=r}Bl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Tm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(e,l):typeof l=="number"&&Lo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Io.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ue("scroll",e):l!=null&&pc(e,i,l,a))}switch(n){case"input":xi(e),Xf(e,r,!1);break;case"textarea":xi(e),Zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)rv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Wn(Go.current),Wn(jt.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(i=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Ve(t),null;case 13:if(fe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wh(),Mr(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Dt]=t}else Mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),i=!1}else _t!==null&&(bu(_t),_t=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?Pe===0&&(Pe=3):Qc())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return zr(),hu(e,t),e===null&&Bo(t.stateNode.containerInfo),Ve(t),null;case 10:return Ac(t.type._context),Ve(t),null;case 17:return rt(t.type)&&ka(),Ve(t),null;case 19:if(fe(me),i=t.memoizedState,i===null)return Ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)uo(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=_a(e),a!==null){for(t.flags|=128,uo(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(me,me.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>jr&&(t.flags|=128,r=!0,uo(i,!1),t.lanes=4194304)}else{if(!r)if(e=_a(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!pe)return Ve(t),null}else 2*be()-i.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,uo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=me.current,le(me,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Kc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function my(e,t){switch(_c(t),t.tag){case 1:return rt(t.type)&&ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),fe(nt),fe(Ye),Dc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Mc(t),null;case 13:if(fe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(me),null;case 4:return zr(),null;case 10:return Ac(t.type._context),null;case 22:case 23:return Kc(),null;case 24:return null;default:return null}}var Ri=!1,Ge=!1,hy=typeof WeakSet=="function"?WeakSet:Set,j=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function vu(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Ud=!1;function vy(e,t){if(ql=ga,e=sh(),$c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++c===r&&(l=a),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eu={focusedElem:e,selectionRange:n},ga=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,E=g.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:$t(t.type,x),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ye(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Ud,Ud=!1,g}function _o(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&vu(t,n,i)}o=o.next}while(o!==r)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ov(e){var t=e.alternate;t!==null&&(e.alternate=null,ov(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Ho],delete t[ru],delete t[Z1],delete t[q1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function iv(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wa));else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}var Fe=null,Pt=!1;function ln(e,t,n){for(n=n.child;n!==null;)av(e,t,n),n=n.sibling}function av(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Ge||kr(n,t);case 6:var r=Fe,o=Pt;Fe=null,ln(e,t,n),Fe=r,Pt=o,Fe!==null&&(Pt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Pt?(e=Fe,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Fo(e)):sl(Fe,n.stateNode));break;case 4:r=Fe,o=Pt,Fe=n.stateNode.containerInfo,Pt=!0,ln(e,t,n),Fe=r,Pt=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&vu(n,t,a),o=o.next}while(o!==r)}ln(e,t,n);break;case 1:if(!Ge&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,ln(e,t,n),Ge=r):ln(e,t,n);break;default:ln(e,t,n)}}function Wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hy),t.forEach(function(r){var o=Cy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Fe=s.stateNode,Pt=!1;break e;case 3:Fe=s.stateNode.containerInfo,Pt=!0;break e;case 4:Fe=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if(Fe===null)throw Error(_(160));av(i,a,o),Fe=null,Pt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sv(t,e),t=t.sibling}function sv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Lt(e),r&4){try{_o(3,e,e.return),rs(3,e)}catch(x){ye(e,e.return,x)}try{_o(5,e,e.return)}catch(x){ye(e,e.return,x)}}break;case 1:Ct(t,e),Lt(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(Ct(t,e),Lt(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var o=e.stateNode;try{Lo(o,"")}catch(x){ye(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&_m(o,i),Wl(s,a);var u=Wl(s,i);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Tm(o,f):c==="dangerouslySetInnerHTML"?Rm(o,f):c==="children"?Lo(o,f):pc(o,c,f,u)}switch(s){case"input":zl(o,i);break;case"textarea":Om(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Pr(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?Pr(o,!!i.multiple,i.defaultValue,!0):Pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ho]=i}catch(x){ye(e,e.return,x)}}break;case 6:if(Ct(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ye(e,e.return,x)}}break;case 3:if(Ct(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(x){ye(e,e.return,x)}break;case 4:Ct(t,e),Lt(e);break;case 13:Ct(t,e),Lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Gc=be())),r&4&&Wd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||c,Ct(t,e),Ge=u):Ct(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(j=e,c=e.child;c!==null;){for(f=j=c;j!==null;){switch(p=j,v=p.child,p.tag){case 0:case 11:case 14:case 15:_o(4,p,p.return);break;case 1:kr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){ye(r,n,x)}}break;case 5:kr(p,p.return);break;case 22:if(p.memoizedState!==null){Vd(f);continue}}v!==null?(v.return=p,j=v):Vd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Am("display",a))}catch(x){ye(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ye(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ct(t,e),Lt(e),r&4&&Wd(e);break;case 21:break;default:Ct(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(iv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lo(o,""),r.flags&=-33);var i=Bd(e);xu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Bd(e);yu(e,s,a);break;default:throw Error(_(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gy(e,t,n){j=e,lv(e)}function lv(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ri;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ge;s=Ri;var u=Ge;if(Ri=a,(Ge=l)&&!u)for(j=o;j!==null;)a=j,l=a.child,a.tag===22&&a.memoizedState!==null?Gd(o):l!==null?(l.return=a,j=l):Gd(o);for(;i!==null;)j=i,lv(i),i=i.sibling;j=o,Ri=s,Ge=u}Hd(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,j=i):Hd(e)}}function Hd(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ge||t.flags&512&&gu(t)}catch(p){ye(t,t.return,p)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Vd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Gd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ye(t,o,l)}}var i=t.return;try{gu(t)}catch(l){ye(t,i,l)}break;case 5:var a=t.return;try{gu(t)}catch(l){ye(t,a,l)}}}catch(l){ye(t,t.return,l)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var yy=Math.ceil,Ra=nn.ReactCurrentDispatcher,Hc=nn.ReactCurrentOwner,xt=nn.ReactCurrentBatchConfig,J=0,Te=null,Ee=null,je=0,st=0,Sr=Mn(0),Pe=0,Xo=null,qn=0,os=0,Vc=0,Oo=null,et=null,Gc=0,jr=1/0,Bt=null,Aa=!1,wu=null,Cn=null,Ai=!1,vn=null,Ta=0,No=0,ku=null,ta=-1,na=0;function Xe(){return(J&6)!==0?be():ta!==-1?ta:ta=be()}function $n(e){return(e.mode&1)===0?1:(J&2)!==0&&je!==0?je&-je:ty.transition!==null?(na===0&&(na=Vm()),na):(e=re,e!==0||(e=window.event,e=e===void 0?16:Zm(e.type)),e)}function At(e,t,n,r){if(50<No)throw No=0,ku=null,Error(_(185));ii(e,n,r),((J&2)===0||e!==Te)&&(e===Te&&((J&2)===0&&(os|=n),Pe===4&&mn(e,je)),ot(e,r),n===1&&J===0&&(t.mode&1)===0&&(jr=be()+500,es&&Dn()))}function ot(e,t){var n=e.callbackNode;t1(e,t);var r=va(e,e===Te?je:0);if(r===0)n!==null&&td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&td(n),t===1)e.tag===0?ey(Yd.bind(null,e)):gh(Yd.bind(null,e)),X1(function(){(J&6)===0&&Dn()}),n=null;else{switch(Gm(r)){case 1:n=yc;break;case 4:n=Wm;break;case 16:n=ha;break;case 536870912:n=Hm;break;default:n=ha}n=vv(n,uv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uv(e,t){if(ta=-1,na=0,(J&6)!==0)throw Error(_(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var r=va(e,e===Te?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ia(e,r);else{t=r;var o=J;J|=2;var i=fv();(Te!==e||je!==t)&&(Bt=null,jr=be()+500,Yn(e,t));do try{ky();break}catch(s){cv(e,s)}while(1);Rc(),Ra.current=i,J=o,Ee!==null?t=0:(Te=null,je=0,t=Pe)}if(t!==0){if(t===2&&(o=Kl(e),o!==0&&(r=o,t=Su(e,o))),t===1)throw n=Xo,Yn(e,0),mn(e,r),ot(e,be()),n;if(t===6)mn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!xy(o)&&(t=Ia(e,r),t===2&&(i=Kl(e),i!==0&&(r=i,t=Su(e,i))),t===1))throw n=Xo,Yn(e,0),mn(e,r),ot(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Fn(e,et,Bt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=Gc+500-be(),10<t)){if(va(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nu(Fn.bind(null,e,et,Bt),t);break}Fn(e,et,Bt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Rt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yy(r/1960))-r,10<r){e.timeoutHandle=nu(Fn.bind(null,e,et,Bt),r);break}Fn(e,et,Bt);break;case 5:Fn(e,et,Bt);break;default:throw Error(_(329))}}}return ot(e,be()),e.callbackNode===n?uv.bind(null,e):null}function Su(e,t){var n=Oo;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=et,et=n,t!==null&&bu(t)),e}function bu(e){et===null?et=e:et.push.apply(et,e)}function xy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Vc,t&=~os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Yd(e){if((J&6)!==0)throw Error(_(327));Ar();var t=va(e,0);if((t&1)===0)return ot(e,be()),null;var n=Ia(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=Su(e,r))}if(n===1)throw n=Xo,Yn(e,0),mn(e,t),ot(e,be()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,et,Bt),ot(e,be()),null}function Yc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(jr=be()+500,es&&Dn())}}function er(e){vn!==null&&vn.tag===0&&(J&6)===0&&Ar();var t=J;J|=1;var n=xt.transition,r=re;try{if(xt.transition=null,re=1,e)return e()}finally{re=r,xt.transition=n,J=t,(J&6)===0&&Dn()}}function Kc(){st=Sr.current,fe(Sr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Q1(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(_c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:zr(),fe(nt),fe(Ye),Dc();break;case 5:Mc(r);break;case 4:zr();break;case 13:fe(me);break;case 19:fe(me);break;case 10:Ac(r.type._context);break;case 22:case 23:Kc()}n=n.return}if(Te=e,Ee=e=Pn(e.current,null),je=st=t,Pe=0,Xo=null,Vc=os=qn=0,et=Oo=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Bn=null}return e}function cv(e,t){do{var n=Ee;try{if(Rc(),Zi.current=Na,Oa){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oa=!1}if(Zn=0,Ne=$e=he=null,Po=!1,Yo=0,Hc.current=null,n===null||n.return===null){Pe=1,Xo=t,Ee=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=je,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Id(a);if(v!==null){v.flags&=-257,Ld(v,a,s,i,t),v.mode&1&&Td(i,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(l),t.updateQueue=x}else g.add(l);break e}else{if((t&1)===0){Td(i,u,t),Qc();break e}l=Error(_(426))}}else if(pe&&s.mode&1){var E=Id(a);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Ld(E,a,s,i,t),Oc(Fr(l,s));break e}}i=l=Fr(l,s),Pe!==4&&(Pe=2),Oo===null?Oo=[i]:Oo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Yh(i,l,t);$d(i,m);break e;case 1:s=l;var d=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Cn===null||!Cn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Kh(i,s,t);$d(i,w);break e}}i=i.return}while(i!==null)}pv(n)}catch(S){t=S,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function fv(){var e=Ra.current;return Ra.current=Na,e===null?Na:e}function Qc(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Te===null||(qn&268435455)===0&&(os&268435455)===0||mn(Te,je)}function Ia(e,t){var n=J;J|=2;var r=fv();(Te!==e||je!==t)&&(Bt=null,Yn(e,t));do try{wy();break}catch(o){cv(e,o)}while(1);if(Rc(),J=n,Ra.current=r,Ee!==null)throw Error(_(261));return Te=null,je=0,Pe}function wy(){for(;Ee!==null;)dv(Ee)}function ky(){for(;Ee!==null&&!Gg();)dv(Ee)}function dv(e){var t=hv(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?pv(e):Ee=t,Hc.current=null}function pv(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=py(n,t,st),n!==null){Ee=n;return}}else{if(n=my(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Pe===0&&(Pe=5)}function Fn(e,t,n){var r=re,o=xt.transition;try{xt.transition=null,re=1,Sy(e,t,n,r)}finally{xt.transition=o,re=r}return null}function Sy(e,t,n,r){do Ar();while(vn!==null);if((J&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(n1(e,i),e===Te&&(Ee=Te=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ai||(Ai=!0,vv(ha,function(){return Ar(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var a=re;re=1;var s=J;J|=4,Hc.current=null,vy(e,n),sv(n,e),B1(eu),ga=!!ql,eu=ql=null,e.current=n,gy(n),Yg(),J=s,re=a,xt.transition=i}else e.current=n;if(Ai&&(Ai=!1,vn=e,Ta=o),i=e.pendingLanes,i===0&&(Cn=null),Xg(n.stateNode),ot(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Aa)throw Aa=!1,e=wu,wu=null,e;return(Ta&1)!==0&&e.tag!==0&&Ar(),i=e.pendingLanes,(i&1)!==0?e===ku?No++:(No=0,ku=e):No=0,Dn(),null}function Ar(){if(vn!==null){var e=Gm(Ta),t=xt.transition,n=re;try{if(xt.transition=null,re=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,Ta=0,(J&6)!==0)throw Error(_(331));var o=J;for(J|=4,j=e.current;j!==null;){var i=j,a=i.child;if((j.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:_o(8,c,i)}var f=c.child;if(f!==null)f.return=c,j=f;else for(;j!==null;){c=j;var p=c.sibling,v=c.return;if(ov(c),c===u){j=null;break}if(p!==null){p.return=v,j=p;break}j=v}}}var g=i.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:_o(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,j=m;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){a=j;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,j=h;else e:for(a=d;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){ye(s,s.return,S)}if(s===a){j=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,j=w;break e}j=s.return}}if(J=o,Dn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Qa,e)}catch{}r=!0}return r}finally{re=n,xt.transition=t}}return!1}function Kd(e,t,n){t=Fr(n,t),t=Yh(e,t,1),e=En(e,t,1),t=Xe(),e!==null&&(ii(e,1,t),ot(e,t))}function ye(e,t,n){if(e.tag===3)Kd(e,e,n);else for(;t!==null;){if(t.tag===3){Kd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Fr(n,e),e=Kh(t,e,1),t=En(t,e,1),e=Xe(),t!==null&&(ii(t,1,e),ot(t,e));break}}t=t.return}}function by(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(je&n)===n&&(Pe===4||Pe===3&&(je&130023424)===je&&500>be()-Gc?Yn(e,0):Vc|=n),ot(e,t)}function mv(e,t){t===0&&((e.mode&1)===0?t=1:(t=Si,Si<<=1,(Si&130023424)===0&&(Si=4194304)));var n=Xe();e=Xt(e,t),e!==null&&(ii(e,t,n),ot(e,n))}function Ey(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mv(e,n)}function Cy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),mv(e,n)}var hv;hv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,dy(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,pe&&(t.flags&1048576)!==0&&yh(t,Ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ea(e,t),e=t.pendingProps;var o=Lr(t,Ye.current);Rr(t,n),o=Fc(null,t,r,e,o,n);var i=jc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,Sa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ic(t),o.updater=ts,t.stateNode=o,o._reactInternals=t,uu(t,r,e,n),t=du(null,t,r,!0,i,n)):(t.tag=0,pe&&i&&Pc(t),Qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Py(r),e=$t(r,e),o){case 0:t=fu(null,t,r,e,n);break e;case 1:t=zd(null,t,r,e,n);break e;case 11:t=Md(null,t,r,e,n);break e;case 14:t=Dd(null,t,r,$t(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),fu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),zd(e,t,r,o,n);case 3:e:{if(Zh(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Sh(e,t),Pa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fr(Error(_(423)),t),t=Fd(e,t,r,n,o);break e}else if(r!==o){o=Fr(Error(_(424)),t),t=Fd(e,t,r,n,o);break e}else for(lt=bn(t.stateNode.containerInfo.firstChild),ut=t,pe=!0,_t=null,n=$h(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===o){t=Jt(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return Ph(t),e===null&&au(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,tu(r,o)?a=null:i!==null&&tu(r,i)&&(t.flags|=32),Jh(e,t),Qe(e,t,a,n),t.child;case 6:return e===null&&au(t),null;case 13:return qh(e,t,n);case 4:return Lc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Md(e,t,r,o,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,le(Ca,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!nt.current){t=Jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),su(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),su(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rr(t,n),o=kt(o),r=r(o),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,o=$t(r,t.pendingProps),o=$t(r.type,o),Dd(e,t,r,o,n);case 15:return Qh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),ea(e,t),t.tag=1,rt(r)?(e=!0,Sa(t)):e=!1,Rr(t,n),Eh(t,r,o),uu(t,r,o,n),du(null,t,r,!0,e,n);case 19:return ev(e,t,n);case 22:return Xh(e,t,n)}throw Error(_(156,t.tag))};function vv(e,t){return Bm(e,t)}function $y(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new $y(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Py(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hc)return 11;if(e===vc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ra(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Xc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case dr:return Kn(n.children,o,i,t);case mc:a=8,o|=8;break;case Tl:return e=yt(12,n,t,o|2),e.elementType=Tl,e.lanes=i,e;case Il:return e=yt(13,n,t,o),e.elementType=Il,e.lanes=i,e;case Ll:return e=yt(19,n,t,o),e.elementType=Ll,e.lanes=i,e;case Cm:return is(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bm:a=10;break e;case Em:a=9;break e;case hc:a=11;break e;case vc:a=14;break e;case fn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=yt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function is(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Cm,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _y(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Jc(e,t,n,r,o,i,a,s,l){return e=new _y(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(i),e}function Oy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gv(e){if(!e)return Rn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(rt(n))return vh(e,n,t)}return t}function yv(e,t,n,r,o,i,a,s,l){return e=Jc(n,r,!0,e,o,i,a,s,l),e.context=gv(null),n=e.current,r=Xe(),o=$n(n),i=Gt(r,o),i.callback=t!=null?t:null,En(n,i,o),e.current.lanes=o,ii(e,o,r),ot(e,r),e}function as(e,t,n,r){var o=t.current,i=Xe(),a=$n(o);return n=gv(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(o,t,a),e!==null&&(At(e,o,a,i),Ji(e,o,a)),a}function La(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function Ny(){return null}var xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}ss.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));as(e,t,null,null)};ss.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){as(null,e,null,null)}),t[Qt]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Jm(e)}};function ef(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Ry(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=La(a);i.call(u)}}var a=yv(t,r,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=a,e[Qt]=a.current,Bo(e.nodeType===8?e.parentNode:e),er(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=La(l);s.call(u)}}var l=Jc(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=l,e[Qt]=l.current,Bo(e.nodeType===8?e.parentNode:e),er(function(){as(t,l,n,r)}),l}function us(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=La(a);s.call(l)}}as(t,a,e,o)}else a=Ry(n,t,e,o,r);return La(a)}Ym=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yo(t.pendingLanes);n!==0&&(xc(t,n|1),ot(t,be()),(J&6)===0&&(jr=be()+500,Dn()))}break;case 13:er(function(){var r=Xt(e,1);if(r!==null){var o=Xe();At(r,e,1,o)}}),Zc(e,1)}};wc=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Xe();At(t,e,134217728,n)}Zc(e,134217728)}};Km=function(e){if(e.tag===13){var t=$n(e),n=Xt(e,t);if(n!==null){var r=Xe();At(n,e,t,r)}Zc(e,t)}};Qm=function(){return re};Xm=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Vl=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=qa(r);if(!o)throw Error(_(90));Pm(r),zl(r,o)}}}break;case"textarea":Om(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};Mm=Yc;Dm=er;var Ay={usingClientEntryPoint:!1,Events:[si,vr,qa,Im,Lm,Yc]},co={findFiberByHostInstance:Un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ty={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jm(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Qa=Ti.inject(Ty),Ft=Ti}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(t))throw Error(_(200));return Oy(e,t,null,n)};ft.createRoot=function(e,t){if(!ef(e))throw Error(_(299));var n=!1,r="",o=xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Jc(e,1,!1,null,null,n,!1,r,o),e[Qt]=t.current,Bo(e.nodeType===8?e.parentNode:e),new qc(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=jm(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return er(e)};ft.hydrate=function(e,t,n){if(!ls(t))throw Error(_(200));return us(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!ef(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=xv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=yv(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Qt]=t.current,Bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ss(t)};ft.render=function(e,t,n){if(!ls(t))throw Error(_(200));return us(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!ls(e))throw Error(_(40));return e._reactRootContainer?(er(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};ft.unstable_batchedUpdates=Yc;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ls(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return us(e,t,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ft})(Ka);var Jd=Ka.exports;Rl.createRoot=Jd.createRoot,Rl.hydrateRoot=Jd.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const Zd="popstate";function Iy(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Eu("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Cu(o)}return My(t,n,null,e)}function Ly(){return Math.random().toString(36).substr(2,8)}function qd(e){return{usr:e.state,key:e.key}}function Eu(e,t,n,r){return n===void 0&&(n=null),Ma({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qr(t):t,{state:n,key:t&&t.key||r||Ly()})}function Cu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function My(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=gn.Pop,l=null;function u(){s=gn.Pop,l&&l({action:s,location:p.location})}function c(v,g){s=gn.Push;let x=Eu(p.location,v,g);n&&n(x,v);let E=qd(x),m=p.createHref(x);try{a.pushState(E,"",m)}catch{o.location.assign(m)}i&&l&&l({action:s,location:x})}function f(v,g){s=gn.Replace;let x=Eu(p.location,v,g);n&&n(x,v);let E=qd(x),m=p.createHref(x);a.replaceState(E,"",m),i&&l&&l({action:s,location:x})}let p={get action(){return s},get location(){return e(o,a)},listen(v){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Zd,u),l=v,()=>{o.removeEventListener(Zd,u),l=null}},createHref(v){return t(o,v)},push:c,replace:f,go(v){return a.go(v)}};return p}var ep;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ep||(ep={}));function Dy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Qr(t):t,o=kv(r.pathname||"/",n);if(o==null)return null;let i=wv(e);zy(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Yy(i[s],o);return a}function wv(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(_e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=_n([r,a.relativePath]),l=n.concat(a);o.children&&o.children.length>0&&(_e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),wv(o.children,t,l,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:Vy(s,o.index),routesMeta:l})}),t}function zy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fy=/^:\w+$/,jy=3,Uy=2,By=1,Wy=10,Hy=-2,tp=e=>e==="*";function Vy(e,t){let n=e.split("/"),r=n.length;return n.some(tp)&&(r+=Hy),t&&(r+=Uy),n.filter(o=>!tp(o)).reduce((o,i)=>o+(Fy.test(i)?jy:i===""?By:Wy),r)}function Gy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Yy(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=tf({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;i.push({params:r,pathname:_n([o,c.pathname]),pathnameBase:Zy(_n([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=_n([o,c.pathnameBase]))}return i}function tf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ky(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=s[f]||"";a=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=Qy(s[f]||"",c),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Ky(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Sv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Qy(e,t){try{return decodeURIComponent(e)}catch(n){return Sv(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function kv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Qr(e):e;return{pathname:n?n.startsWith("/")?n:Jy(n,t):t,search:qy(r),hash:ex(o)}}function Jy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bv(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Qr(e):(o=Ma({},e),_e(!o.pathname||!o.pathname.includes("?"),gl("?","pathname","search",o)),_e(!o.pathname||!o.pathname.includes("#"),gl("#","pathname","hash",o)),_e(!o.search||!o.search.includes("#"),gl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=Xy(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),Zy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ex=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class tx{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function nx(e){return e instanceof tx}var cs={exports:{}},fs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx=y.exports,ox=Symbol.for("react.element"),ix=Symbol.for("react.fragment"),ax=Object.prototype.hasOwnProperty,sx=rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lx={key:!0,ref:!0,__self:!0,__source:!0};function Ev(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ax.call(t,r)&&!lx.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ox,type:e,key:i,ref:a,props:o,_owner:sx.current}}fs.Fragment=ix;fs.jsx=Ev;fs.jsxs=Ev;(function(e){e.exports=fs})(cs);const ui=cs.exports.Fragment,k=cs.exports.jsx,T=cs.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $u(){return $u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$u.apply(this,arguments)}function ux(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const cx=typeof Object.is=="function"?Object.is:ux,{useState:fx,useEffect:dx,useLayoutEffect:px,useDebugValue:mx}=fa;function hx(e,t,n){const r=t(),[{inst:o},i]=fx({inst:{value:r,getSnapshot:t}});return px(()=>{o.value=r,o.getSnapshot=t,yl(o)&&i({inst:o})},[e,r,t]),dx(()=>(yl(o)&&i({inst:o}),e(()=>{yl(o)&&i({inst:o})})),[e]),mx(r),r}function yl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!cx(n,r)}catch{return!0}}function vx(e,t,n){return t()}const gx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yx=!gx,xx=yx?vx:hx;"useSyncExternalStore"in fa&&(e=>e.useSyncExternalStore)(fa);const wx=y.exports.createContext(null),kx=y.exports.createContext(null),nf=y.exports.createContext(null),rf=y.exports.createContext(null),ds=y.exports.createContext(null),Xr=y.exports.createContext({outlet:null,matches:[]}),Cv=y.exports.createContext(null);function Sx(e,t){let{relative:n}=t===void 0?{}:t;Jr()||_e(!1);let{basename:r,navigator:o}=y.exports.useContext(rf),{hash:i,pathname:a,search:s}=Da(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:_n([r,a])),o.createHref({pathname:l,search:s,hash:i})}function Jr(){return y.exports.useContext(ds)!=null}function sr(){return Jr()||_e(!1),y.exports.useContext(ds).location}function bx(e){Jr()||_e(!1);let{pathname:t}=sr();return y.exports.useMemo(()=>tf(e,t),[t,e])}function $v(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function Ex(){Jr()||_e(!1);let{basename:e,navigator:t}=y.exports.useContext(rf),{matches:n}=y.exports.useContext(Xr),{pathname:r}=sr(),o=JSON.stringify($v(n).map(s=>s.pathnameBase)),i=y.exports.useRef(!1);return y.exports.useEffect(()=>{i.current=!0}),y.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let u=bv(s,JSON.parse(o),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:_n([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,o,r])}function of(){let{matches:e}=y.exports.useContext(Xr),t=e[e.length-1];return t?t.params:{}}function Da(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.exports.useContext(Xr),{pathname:o}=sr(),i=JSON.stringify($v(r).map(a=>a.pathnameBase));return y.exports.useMemo(()=>bv(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Cx(e,t){Jr()||_e(!1);let n=y.exports.useContext(nf),{matches:r}=y.exports.useContext(Xr),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=sr(),l;if(t){var u;let g=typeof t=="string"?Qr(t):t;a==="/"||((u=g.pathname)==null?void 0:u.startsWith(a))||_e(!1),l=g}else l=s;let c=l.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",p=Dy(e,{pathname:f}),v=Ox(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},i,g.params),pathname:_n([a,g.pathname]),pathnameBase:g.pathnameBase==="/"?a:_n([a,g.pathnameBase])})),r,n||void 0);return t?k(ds.Provider,{value:{location:$u({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:gn.Pop},children:v}):v}function $x(){let e=Rx(),t=nx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return T(ui,{children:[k("h2",{children:"Unhandled Thrown Error!"}),k("h3",{style:{fontStyle:"italic"},children:t}),n?k("pre",{style:o,children:n}):null,k("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),T("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",k("code",{style:i,children:"errorElement"})," props on\xA0",k("code",{style:i,children:"<Route>"})]})]})}class Px extends y.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k(Cv.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function _x(e){let{routeContext:t,match:n,children:r}=e,o=y.exports.useContext(wx);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),k(Xr.Provider,{value:t,children:r})}function Ox(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||_e(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,s)=>{let l=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||k($x,{}):null,c=()=>k(_x,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,s+1))},children:l?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||s===0)?k(Px,{location:n.location,component:u,error:l,children:c()}):c()},null)}var np;(function(e){e.UseRevalidator="useRevalidator"})(np||(np={}));var Pu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Pu||(Pu={}));function Nx(e){let t=y.exports.useContext(nf);return t||_e(!1),t}function Rx(){var e;let t=y.exports.useContext(Cv),n=Nx(Pu.UseRouteError),r=y.exports.useContext(Xr),o=r.matches[r.matches.length-1];return t||(r||_e(!1),o.route.id||_e(!1),(e=n.errors)==null?void 0:e[o.route.id])}function cr(e){_e(!1)}function Ax(e){let{basename:t="/",children:n=null,location:r,navigationType:o=gn.Pop,navigator:i,static:a=!1}=e;Jr()&&_e(!1);let s=t.replace(/^\/*/,"/"),l=y.exports.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=Qr(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:v="default"}=r,g=y.exports.useMemo(()=>{let x=kv(u,s);return x==null?null:{pathname:x,search:c,hash:f,state:p,key:v}},[s,u,c,f,p,v]);return g==null?null:k(rf.Provider,{value:l,children:k(ds.Provider,{children:n,value:{location:g,navigationType:o}})})}function Tx(e){let{children:t,location:n}=e,r=y.exports.useContext(kx),o=r&&!t?r.router.routes:_u(t);return Cx(o,n)}var rp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(rp||(rp={}));new Promise(()=>{});function _u(e,t){t===void 0&&(t=[]);let n=[];return y.exports.Children.forEach(e,(r,o)=>{if(!y.exports.isValidElement(r))return;if(r.type===y.exports.Fragment){n.push.apply(n,_u(r.props.children,t));return}r.type!==cr&&_e(!1),!r.props.index||!r.props.children||_e(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=_u(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ix(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lx(e,t){return e.button===0&&(!t||t==="_self")&&!Ix(e)}const Mx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Dx=["aria-current","caseSensitive","className","end","style","to","children"];function zx(e){let{basename:t,children:n,window:r}=e,o=y.exports.useRef();o.current==null&&(o.current=Iy({window:r,v5Compat:!0}));let i=o.current,[a,s]=y.exports.useState({action:i.action,location:i.location});return y.exports.useLayoutEffect(()=>i.listen(s),[i]),k(Ax,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}const yn=y.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=Pv(t,Mx),p=Sx(u,{relative:o}),v=Fx(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o});function g(x){r&&r(x),x.defaultPrevented||v(x)}return k("a",{...f,href:p,onClick:i?r:g,ref:n,target:l})}),Hn=y.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,children:u}=t,c=Pv(t,Dx),f=Da(l),p=bx({path:f.pathname,end:a,caseSensitive:o}),v=y.exports.useContext(nf),g=v==null?void 0:v.navigation.location,x=Da(g||""),m=y.exports.useMemo(()=>g?tf({path:f.pathname,end:a,caseSensitive:o},x.pathname):null,[g,f.pathname,o,a,x.pathname])!=null,d=p!=null,h=d?r:void 0,w;typeof i=="function"?w=i({isActive:d,isPending:m}):w=[i,d?"active":null,m?"pending":null].filter(Boolean).join(" ");let S=typeof s=="function"?s({isActive:d,isPending:m}):s;return k(yn,{...c,"aria-current":h,className:w,ref:n,style:S,to:l,children:typeof u=="function"?u({isActive:d,isPending:m}):u})});var op;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(op||(op={}));var ip;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ip||(ip={}));function Fx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=Ex(),l=sr(),u=Da(e,{relative:a});return y.exports.useCallback(c=>{if(Lx(c,n)){c.preventDefault();let f=r!==void 0?r:Cu(l)===Cu(u);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[l,s,u,r,o,n,e,i,a])}var af={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=Symbol.for("react.element"),lf=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),vs=Symbol.for("react.provider"),gs=Symbol.for("react.context"),jx=Symbol.for("react.server_context"),ys=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),ks=Symbol.for("react.memo"),Ss=Symbol.for("react.lazy"),Ux=Symbol.for("react.offscreen"),_v;_v=Symbol.for("react.module.reference");function bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case sf:switch(e=e.type,e){case ps:case hs:case ms:case xs:case ws:return e;default:switch(e=e&&e.$$typeof,e){case jx:case gs:case ys:case Ss:case ks:case vs:return e;default:return t}}case lf:return t}}}oe.ContextConsumer=gs;oe.ContextProvider=vs;oe.Element=sf;oe.ForwardRef=ys;oe.Fragment=ps;oe.Lazy=Ss;oe.Memo=ks;oe.Portal=lf;oe.Profiler=hs;oe.StrictMode=ms;oe.Suspense=xs;oe.SuspenseList=ws;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return bt(e)===gs};oe.isContextProvider=function(e){return bt(e)===vs};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===sf};oe.isForwardRef=function(e){return bt(e)===ys};oe.isFragment=function(e){return bt(e)===ps};oe.isLazy=function(e){return bt(e)===Ss};oe.isMemo=function(e){return bt(e)===ks};oe.isPortal=function(e){return bt(e)===lf};oe.isProfiler=function(e){return bt(e)===hs};oe.isStrictMode=function(e){return bt(e)===ms};oe.isSuspense=function(e){return bt(e)===xs};oe.isSuspenseList=function(e){return bt(e)===ws};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ps||e===hs||e===ms||e===xs||e===ws||e===Ux||typeof e=="object"&&e!==null&&(e.$$typeof===Ss||e.$$typeof===ks||e.$$typeof===vs||e.$$typeof===gs||e.$$typeof===ys||e.$$typeof===_v||e.getModuleId!==void 0)};oe.typeOf=bt;(function(e){e.exports=oe})(af);function Bx(e){function t(I,M,F,V,b){for(var X=0,A=0,ge=0,ee=0,ne,Y,Me=0,qe=0,Z,We=Z=ne=0,te=0,De=0,to=0,ze=0,vi=F.length,no=vi-1,Et,G="",ke="",Ws="",Hs="",sn;te<vi;){if(Y=F.charCodeAt(te),te===no&&A+ee+ge+X!==0&&(A!==0&&(Y=A===47?10:47),ee=ge=X=0,vi++,no++),A+ee+ge+X===0){if(te===no&&(0<De&&(G=G.replace(p,"")),0<G.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:G+=F.charAt(te)}Y=59}switch(Y){case 123:for(G=G.trim(),ne=G.charCodeAt(0),Z=1,ze=++te;te<vi;){switch(Y=F.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Y=F.charCodeAt(te+1)){case 42:case 47:e:{for(We=te+1;We<no;++We)switch(F.charCodeAt(We)){case 47:if(Y===42&&F.charCodeAt(We-1)===42&&te+2!==We){te=We+1;break e}break;case 10:if(Y===47){te=We+1;break e}}te=We}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;te++<no&&F.charCodeAt(te)!==Y;);}if(Z===0)break;te++}switch(Z=F.substring(ze,te),ne===0&&(ne=(G=G.replace(f,"").trim()).charCodeAt(0)),ne){case 64:switch(0<De&&(G=G.replace(p,"")),Y=G.charCodeAt(1),Y){case 100:case 109:case 115:case 45:De=M;break;default:De=Ut}if(Z=t(M,De,Z,Y,b+1),ze=Z.length,0<R&&(De=n(Ut,G,to),sn=s(3,Z,De,M,Le,we,ze,Y,b,V),G=De.join(""),sn!==void 0&&(ze=(Z=sn.trim()).length)===0&&(Y=0,Z="")),0<ze)switch(Y){case 115:G=G.replace($,a);case 100:case 109:case 45:Z=G+"{"+Z+"}";break;case 107:G=G.replace(d,"$1 $2"),Z=G+"{"+Z+"}",Z=Be===1||Be===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=G+Z,V===112&&(Z=(ke+=Z,""))}else Z="";break;default:Z=t(M,n(M,G,to),Z,V,b+1)}Ws+=Z,Z=to=De=We=ne=0,G="",Y=F.charCodeAt(++te);break;case 125:case 59:if(G=(0<De?G.replace(p,""):G).trim(),1<(ze=G.length))switch(We===0&&(ne=G.charCodeAt(0),ne===45||96<ne&&123>ne)&&(ze=(G=G.replace(" ",":")).length),0<R&&(sn=s(1,G,M,I,Le,we,ke.length,V,b,V))!==void 0&&(ze=(G=sn.trim()).length)===0&&(G="\0\0"),ne=G.charCodeAt(0),Y=G.charCodeAt(1),ne){case 0:break;case 64:if(Y===105||Y===99){Hs+=G+F.charAt(te);break}default:G.charCodeAt(ze-1)!==58&&(ke+=o(G,ne,Y,G.charCodeAt(2)))}to=De=We=ne=0,G="",Y=F.charCodeAt(++te)}}switch(Y){case 13:case 10:A===47?A=0:1+ne===0&&V!==107&&0<G.length&&(De=1,G+="\0"),0<R*H&&s(0,G,M,I,Le,we,ke.length,V,b,V),we=1,Le++;break;case 59:case 125:if(A+ee+ge+X===0){we++;break}default:switch(we++,Et=F.charAt(te),Y){case 9:case 32:if(ee+X+A===0)switch(Me){case 44:case 58:case 9:case 32:Et="";break;default:Y!==32&&(Et=" ")}break;case 0:Et="\\0";break;case 12:Et="\\f";break;case 11:Et="\\v";break;case 38:ee+A+X===0&&(De=to=1,Et="\f"+Et);break;case 108:if(ee+A+X+at===0&&0<We)switch(te-We){case 2:Me===112&&F.charCodeAt(te-3)===58&&(at=Me);case 8:qe===111&&(at=qe)}break;case 58:ee+A+X===0&&(We=te);break;case 44:A+ge+ee+X===0&&(De=1,Et+="\r");break;case 34:case 39:A===0&&(ee=ee===Y?0:ee===0?Y:ee);break;case 91:ee+A+ge===0&&X++;break;case 93:ee+A+ge===0&&X--;break;case 41:ee+A+X===0&&ge--;break;case 40:if(ee+A+X===0){if(ne===0)switch(2*Me+3*qe){case 533:break;default:ne=1}ge++}break;case 64:A+ge+ee+X+We+Z===0&&(Z=1);break;case 42:case 47:if(!(0<ee+X+ge))switch(A){case 0:switch(2*Y+3*F.charCodeAt(te+1)){case 235:A=47;break;case 220:ze=te,A=42}break;case 42:Y===47&&Me===42&&ze+2!==te&&(F.charCodeAt(ze+2)===33&&(ke+=F.substring(ze,te+1)),Et="",A=0)}}A===0&&(G+=Et)}qe=Me,Me=Y,te++}if(ze=ke.length,0<ze){if(De=M,0<R&&(sn=s(2,ke,De,I,Le,we,ze,V,b,V),sn!==void 0&&(ke=sn).length===0))return Hs+ke+Ws;if(ke=De.join(",")+"{"+ke+"}",Be*at!==0){switch(Be!==2||i(ke,2)||(at=0),at){case 111:ke=ke.replace(w,":-moz-$1")+ke;break;case 112:ke=ke.replace(h,"::-webkit-input-$1")+ke.replace(h,"::-moz-$1")+ke.replace(h,":-ms-input-$1")+ke}at=0}}return Hs+ke+Ws}function n(I,M,F){var V=M.trim().split(E);M=V;var b=V.length,X=I.length;switch(X){case 0:case 1:var A=0;for(I=X===0?"":I[0]+" ";A<b;++A)M[A]=r(I,M[A],F).trim();break;default:var ge=A=0;for(M=[];A<b;++A)for(var ee=0;ee<X;++ee)M[ge++]=r(I[ee]+" ",V[A],F).trim()}return M}function r(I,M,F){var V=M.charCodeAt(0);switch(33>V&&(V=(M=M.trim()).charCodeAt(0)),V){case 38:return M.replace(m,"$1"+I.trim());case 58:return I.trim()+M.replace(m,"$1"+I.trim());default:if(0<1*F&&0<M.indexOf("\f"))return M.replace(m,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+M}function o(I,M,F,V){var b=I+";",X=2*M+3*F+4*V;if(X===944){I=b.indexOf(":",9)+1;var A=b.substring(I,b.length-1).trim();return A=b.substring(0,I).trim()+A+";",Be===1||Be===2&&i(A,1)?"-webkit-"+A+A:A}if(Be===0||Be===2&&!i(b,1))return b;switch(X){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(se,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return A=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+b+"-ms-flex-pack"+A+b;case 1005:return g.test(b)?b.replace(v,":-webkit-")+b.replace(v,":-moz-")+b:b;case 1e3:switch(A=b.substring(13).trim(),M=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(M)){case 226:A=b.replace(S,"tb");break;case 232:A=b.replace(S,"tb-rl");break;case 220:A=b.replace(S,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+A+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(M=(b=I).length-10,A=(b.charCodeAt(M)===33?b.substring(0,M):b).substring(I.indexOf(":",7)+1).trim(),X=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:b=b.replace(A,"-webkit-"+A)+";"+b;break;case 207:case 102:b=b.replace(A,"-webkit-"+(102<X?"inline-":"")+"box")+";"+b.replace(A,"-webkit-"+A)+";"+b.replace(A,"-ms-"+A+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return A=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+A+"-ms-flex-"+A+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(P,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(P,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(B.test(I)===!0)return(A=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?o(I.replace("stretch","fill-available"),M,F,V).replace(":fill-available",":stretch"):b.replace(A,"-webkit-"+A)+b.replace(A,"-moz-"+A.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,F+V===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+b}return b}function i(I,M){var F=I.indexOf(M===1?":":"{"),V=I.substring(0,M!==3?F:10);return F=I.substring(F+1,I.length-1),W(M!==2?V:V.replace(L,"$1"),F,M)}function a(I,M){var F=o(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return F!==M+";"?F.replace(N," or ($1)").substring(4):"("+M+")"}function s(I,M,F,V,b,X,A,ge,ee,ne){for(var Y=0,Me=M,qe;Y<R;++Y)switch(qe=Ke[Y].call(c,I,Me,F,V,b,X,A,ge,ee,ne)){case void 0:case!1:case!0:case null:break;default:Me=qe}if(Me!==M)return Me}function l(I){switch(I){case void 0:case null:R=Ke.length=0;break;default:if(typeof I=="function")Ke[R++]=I;else if(typeof I=="object")for(var M=0,F=I.length;M<F;++M)l(I[M]);else H=!!I|0}return l}function u(I){return I=I.prefix,I!==void 0&&(W=null,I?typeof I!="function"?Be=1:(Be=2,W=I):Be=0),u}function c(I,M){var F=I;if(33>F.charCodeAt(0)&&(F=F.trim()),ae=F,F=[ae],0<R){var V=s(-1,M,F,F,Le,we,0,0,0,0);V!==void 0&&typeof V=="string"&&(M=V)}var b=t(Ut,F,M,0,0);return 0<R&&(V=s(-2,b,F,F,Le,we,b.length,0,0,0),V!==void 0&&(b=V)),ae="",at=0,we=Le=1,b}var f=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,w=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,P=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,we=1,Le=1,at=0,Be=1,Ut=[],Ke=[],R=0,W=null,H=0,ae="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var Wx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Hx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Vx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ap=Hx(function(e){return Vx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ov={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,uf=Ie?Symbol.for("react.element"):60103,cf=Ie?Symbol.for("react.portal"):60106,bs=Ie?Symbol.for("react.fragment"):60107,Es=Ie?Symbol.for("react.strict_mode"):60108,Cs=Ie?Symbol.for("react.profiler"):60114,$s=Ie?Symbol.for("react.provider"):60109,Ps=Ie?Symbol.for("react.context"):60110,ff=Ie?Symbol.for("react.async_mode"):60111,_s=Ie?Symbol.for("react.concurrent_mode"):60111,Os=Ie?Symbol.for("react.forward_ref"):60112,Ns=Ie?Symbol.for("react.suspense"):60113,Gx=Ie?Symbol.for("react.suspense_list"):60120,Rs=Ie?Symbol.for("react.memo"):60115,As=Ie?Symbol.for("react.lazy"):60116,Yx=Ie?Symbol.for("react.block"):60121,Kx=Ie?Symbol.for("react.fundamental"):60117,Qx=Ie?Symbol.for("react.responder"):60118,Xx=Ie?Symbol.for("react.scope"):60119;function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uf:switch(e=e.type,e){case ff:case _s:case bs:case Cs:case Es:case Ns:return e;default:switch(e=e&&e.$$typeof,e){case Ps:case Os:case As:case Rs:case $s:return e;default:return t}}case cf:return t}}}function Nv(e){return pt(e)===_s}ie.AsyncMode=ff;ie.ConcurrentMode=_s;ie.ContextConsumer=Ps;ie.ContextProvider=$s;ie.Element=uf;ie.ForwardRef=Os;ie.Fragment=bs;ie.Lazy=As;ie.Memo=Rs;ie.Portal=cf;ie.Profiler=Cs;ie.StrictMode=Es;ie.Suspense=Ns;ie.isAsyncMode=function(e){return Nv(e)||pt(e)===ff};ie.isConcurrentMode=Nv;ie.isContextConsumer=function(e){return pt(e)===Ps};ie.isContextProvider=function(e){return pt(e)===$s};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uf};ie.isForwardRef=function(e){return pt(e)===Os};ie.isFragment=function(e){return pt(e)===bs};ie.isLazy=function(e){return pt(e)===As};ie.isMemo=function(e){return pt(e)===Rs};ie.isPortal=function(e){return pt(e)===cf};ie.isProfiler=function(e){return pt(e)===Cs};ie.isStrictMode=function(e){return pt(e)===Es};ie.isSuspense=function(e){return pt(e)===Ns};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bs||e===_s||e===Cs||e===Es||e===Ns||e===Gx||typeof e=="object"&&e!==null&&(e.$$typeof===As||e.$$typeof===Rs||e.$$typeof===$s||e.$$typeof===Ps||e.$$typeof===Os||e.$$typeof===Kx||e.$$typeof===Qx||e.$$typeof===Xx||e.$$typeof===Yx)};ie.typeOf=pt;(function(e){e.exports=ie})(Ov);var df=Ov.exports,Jx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pf={};pf[df.ForwardRef]=qx;pf[df.Memo]=Rv;function sp(e){return df.isMemo(e)?Rv:pf[e.$$typeof]||Jx}var ew=Object.defineProperty,tw=Object.getOwnPropertyNames,lp=Object.getOwnPropertySymbols,nw=Object.getOwnPropertyDescriptor,rw=Object.getPrototypeOf,up=Object.prototype;function Av(e,t,n){if(typeof t!="string"){if(up){var r=rw(t);r&&r!==up&&Av(e,r,n)}var o=tw(t);lp&&(o=o.concat(lp(t)));for(var i=sp(e),a=sp(t),s=0;s<o.length;++s){var l=o[s];if(!Zx[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var u=nw(t,l);try{ew(e,l,u)}catch{}}}}return e}var ow=Av;function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var cp=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ou=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!af.exports.typeOf(e)},za=Object.freeze([]),On=Object.freeze({});function Ur(e){return typeof e=="function"}function fp(e){return e.displayName||e.name||"Component"}function mf(e){return e&&typeof e.styledComponentId=="string"}var Br=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",hf=typeof window<"u"&&"HTMLElement"in window,iw=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),aw={};function tr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var sw=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&tr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),oa=new Map,Fa=new Map,Ro=1,Ii=function(e){if(oa.has(e))return oa.get(e);for(;Fa.has(Ro);)Ro++;var t=Ro++;return oa.set(e,t),Fa.set(t,e),t},lw=function(e){return Fa.get(e)},uw=function(e,t){t>=Ro&&(Ro=t+1),oa.set(e,t),Fa.set(t,e)},cw="style["+Br+'][data-styled-version="5.3.6"]',fw=new RegExp("^"+Br+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),dw=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},pw=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(fw);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(uw(u,l),dw(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},mw=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Tv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Br))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Br,"active"),r.setAttribute("data-styled-version","5.3.6");var a=mw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},hw=function(){function e(n){var r=this.element=Tv(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}tr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),vw=function(){function e(n){var r=this.element=Tv(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),gw=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),dp=hf,yw={isServer:!hf,useCSSOMInjection:!iw},ja=function(){function e(n,r,o){n===void 0&&(n=On),r===void 0&&(r={}),this.options=Ot({},yw,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&hf&&dp&&(dp=!1,function(i){for(var a=document.querySelectorAll(cw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Br)!=="active"&&(pw(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ii(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ot({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new gw(a):i?new hw(a):new vw(a),new sw(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ii(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ii(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ii(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=lw(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=Br+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),i+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),xw=/(a)(d)/gi,pp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=pp(t%52)+n;return(pp(t%52)+n).replace(xw,"$1-$2")}var br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Iv=function(e){return br(5381,e)};function Lv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!mf(n))return!1}return!0}var ww=Iv("5.3.6"),kw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lv(t),this.componentId=n,this.baseHash=br(ww,n),this.baseStyle=r,ja.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=nr(this.rules,t,n,r).join(""),s=Nu(br(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=br(this.baseHash,r.hash),f="",p=0;p<u;p++){var v=this.rules[p];if(typeof v=="string")f+=v;else if(v){var g=nr(v,t,n,r),x=Array.isArray(g)?g.join(""):g;c=br(c,x+p),f+=x}}if(f){var E=Nu(c>>>0);if(!n.hasNameForId(o,E)){var m=r(f,"."+E,void 0,o);n.insertRules(o,E,m)}i.push(E)}}return i.join(" ")},e}(),Sw=/^\s*\/\/.*$/gm,bw=[":","[",".","#"];function Ew(e){var t,n,r,o,i=e===void 0?On:e,a=i.options,s=a===void 0?On:a,l=i.plugins,u=l===void 0?za:l,c=new Bx(s),f=[],p=function(x){function E(m){if(m)try{x(m+"}")}catch{}}return function(m,d,h,w,S,$,N,P,L,B){switch(m){case 1:if(L===0&&d.charCodeAt(0)===64)return x(d+";"),"";break;case 2:if(P===0)return d+"/*|*/";break;case 3:switch(P){case 102:case 112:return x(h[0]+d),"";default:return d+(B===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(E)}}}(function(x){f.push(x)}),v=function(x,E,m){return E===0&&bw.indexOf(m[n.length])!==-1||m.match(o)?x:"."+t};function g(x,E,m,d){d===void 0&&(d="&");var h=x.replace(Sw,""),w=E&&m?m+" "+E+" { "+h+" }":h;return t=d,n=E,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(m||!E?"":E,w)}return c.use([].concat(u,[function(x,E,m){x===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,v))},p,function(x){if(x===-2){var E=f;return f=[],E}}])),g.hash=u.length?u.reduce(function(x,E){return E.name||tr(15),br(x,E.name)},5381).toString():"",g}var Mv=Se.createContext();Mv.Consumer;var Dv=Se.createContext(),Cw=(Dv.Consumer,new ja),Ru=Ew();function zv(){return y.exports.useContext(Mv)||Cw}function Fv(){return y.exports.useContext(Dv)||Ru}var jv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ru);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return tr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ru),this.name+t.hash},e}(),$w=/([A-Z])/,Pw=/([A-Z])/g,_w=/^ms-/,Ow=function(e){return"-"+e.toLowerCase()};function mp(e){return $w.test(e)?e.replace(Pw,Ow).replace(_w,"-ms-"):e}var hp=function(e){return e==null||e===!1||e===""};function nr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=nr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(hp(e))return"";if(mf(e))return"."+e.styledComponentId;if(Ur(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return nr(l,t,n,r)}var u;return e instanceof jv?n?(e.inject(n,r),e.getName(r)):e:Ou(e)?function c(f,p){var v,g,x=[];for(var E in f)f.hasOwnProperty(E)&&!hp(f[E])&&(Array.isArray(f[E])&&f[E].isCss||Ur(f[E])?x.push(mp(E)+":",f[E],";"):Ou(f[E])?x.push.apply(x,c(f[E],E)):x.push(mp(E)+": "+(v=E,(g=f[E])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Wx?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var vp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ur(e)||Ou(e)?vp(nr(cp(za,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:vp(nr(cp(e,n)))}var Uv=function(e,t,n){return n===void 0&&(n=On),e.theme!==n.theme&&e.theme||t||n.theme},Nw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rw=/(^-|-$)/g;function xl(e){return e.replace(Nw,"-").replace(Rw,"")}var vf=function(e){return Nu(Iv(e)>>>0)};function Li(e){return typeof e=="string"&&!0}var Au=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Aw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Tw(e,t,n){var r=e[n];Au(t)&&Au(r)?Bv(r,t):e[n]=t}function Bv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Au(a))for(var s in a)Aw(s)&&Tw(e,a[s],s)}return e}var Wr=Se.createContext();Wr.Consumer;function Iw(e){var t=y.exports.useContext(Wr),n=y.exports.useMemo(function(){return function(r,o){if(!r)return tr(14);if(Ur(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?tr(8):o?Ot({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Se.createElement(Wr.Provider,{value:n},e.children):null}var wl={};function Wv(e,t,n){var r=mf(e),o=!Li(e),i=t.attrs,a=i===void 0?za:i,s=t.componentId,l=s===void 0?function(d,h){var w=typeof d!="string"?"sc":xl(d);wl[w]=(wl[w]||0)+1;var S=w+"-"+vf("5.3.6"+w+wl[w]);return h?h+"-"+S:S}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(d){return Li(d)?"styled."+d:"Styled("+fp(d)+")"}(e):u,f=t.displayName&&t.componentId?xl(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,h,w){return e.shouldForwardProp(d,h,w)&&t.shouldForwardProp(d,h,w)}:e.shouldForwardProp);var g,x=new kw(n,f,r?e.componentStyle:void 0),E=x.isStatic&&a.length===0,m=function(d,h){return function(w,S,$,N){var P=w.attrs,L=w.componentStyle,B=w.defaultProps,se=w.foldedComponentIds,we=w.shouldForwardProp,Le=w.styledComponentId,at=w.target,Be=function(V,b,X){V===void 0&&(V=On);var A=Ot({},b,{theme:V}),ge={};return X.forEach(function(ee){var ne,Y,Me,qe=ee;for(ne in Ur(qe)&&(qe=qe(A)),qe)A[ne]=ge[ne]=ne==="className"?(Y=ge[ne],Me=qe[ne],Y&&Me?Y+" "+Me:Y||Me):qe[ne]}),[A,ge]}(Uv(S,y.exports.useContext(Wr),B)||On,S,P),Ut=Be[0],Ke=Be[1],R=function(V,b,X,A){var ge=zv(),ee=Fv(),ne=b?V.generateAndInjectStyles(On,ge,ee):V.generateAndInjectStyles(X,ge,ee);return ne}(L,N,Ut),W=$,H=Ke.$as||S.$as||Ke.as||S.as||at,ae=Li(H),I=Ke!==S?Ot({},S,{},Ke):S,M={};for(var F in I)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?M.as=I[F]:(we?we(F,ap,H):!ae||ap(F))&&(M[F]=I[F]));return S.style&&Ke.style!==S.style&&(M.style=Ot({},S.style,{},Ke.style)),M.className=Array.prototype.concat(se,Le,R!==Le?R:null,S.className,Ke.className).filter(Boolean).join(" "),M.ref=W,y.exports.createElement(H,M)}(g,d,h,E)};return m.displayName=c,(g=Se.forwardRef(m)).attrs=p,g.componentStyle=x,g.displayName=c,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):za,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(d){var h=t.componentId,w=function($,N){if($==null)return{};var P,L,B={},se=Object.keys($);for(L=0;L<se.length;L++)P=se[L],N.indexOf(P)>=0||(B[P]=$[P]);return B}(t,["componentId"]),S=h&&h+"-"+(Li(d)?d:xl(fp(d)));return Wv(d,Ot({},w,{attrs:p,componentId:S}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Bv({},e.defaultProps,d):d}}),g.toString=function(){return"."+g.styledComponentId},o&&ow(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Tu=function(e){return function t(n,r,o){if(o===void 0&&(o=On),!af.exports.isValidElementType(r))return tr(1,String(r));var i=function(){return n(r,o,z.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Ot({},o,{},a))},i.attrs=function(a){return t(n,r,Ot({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Wv,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Tu[e]=Tu(e)});var Lw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Lv(n),ja.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(nr(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&ja.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Mw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=z.apply(void 0,[e].concat(n)),i="sc-global-"+vf(JSON.stringify(o)),a=new Lw(o,i);function s(u){var c=zv(),f=Fv(),p=y.exports.useContext(Wr),v=y.exports.useRef(c.allocateGSInstance(i)).current;return c.server&&l(v,u,c,p,f),y.exports.useLayoutEffect(function(){if(!c.server)return l(v,u,c,p,f),function(){return a.removeStyles(v,c)}},[v,u,c,p,f]),null}function l(u,c,f,p,v){if(a.isStatic)a.renderStyles(u,aw,f,v);else{var g=Ot({},c,{theme:Uv(c,p,s.defaultProps)});a.renderStyles(u,g,f,v)}}return Se.memo(s)}function Hv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=z.apply(void 0,[e].concat(n)).join(""),i=vf(o);return new jv(i,o)}var lr=function(){return y.exports.useContext(Wr)};const O=Tu;const Vv=O.div`
  width: 100%;
  max-width: ${e=>e.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,Gv="/pokedex/assets/pokeball.bf8b84a8.svg",Dw="/pokedex/assets/pokemonLogo.aff162cf.svg";var zw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Iu={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Yv={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},gf={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},Kv={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Lu={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gp(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ua(e){return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ua(e)}function Fw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jw(e,t,n){return t&&yp(e.prototype,t),n&&yp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yf(e,t){return Bw(e)||Hw(e,t)||Qv(e,t)||Gw()}function ci(e){return Uw(e)||Ww(e)||Qv(e)||Vw()}function Uw(e){if(Array.isArray(e))return Mu(e)}function Bw(e){if(Array.isArray(e))return e}function Ww(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(l){i=!0,s=l}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Qv(e,t){if(!!e){if(typeof e=="string")return Mu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mu(e,t)}}function Mu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xp=function(){},xf={},Xv={},Jv=null,Zv={mark:xp,measure:xp};try{typeof window<"u"&&(xf=window),typeof document<"u"&&(Xv=document),typeof MutationObserver<"u"&&(Jv=MutationObserver),typeof performance<"u"&&(Zv=performance)}catch{}var Yw=xf.navigator||{},wp=Yw.userAgent,kp=wp===void 0?"":wp,An=xf,de=Xv,Sp=Jv,Mi=Zv;An.document;var rn=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",qv=~kp.indexOf("MSIE")||~kp.indexOf("Trident/"),Di,zi,Fi,ji,Ui,Zt="___FONT_AWESOME___",Du=16,e0="fa",t0="svg-inline--fa",rr="data-fa-i2svg",zu="data-fa-pseudo-element",Kw="data-fa-pseudo-element-pending",wf="data-prefix",kf="data-icon",bp="fontawesome-i2svg",Qw="async",Xw=["HTML","HEAD","STYLE","SCRIPT"],n0=function(){try{return!0}catch{return!1}}(),ce="classic",xe="sharp",Sf=[ce,xe];function fi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var Jo=fi((Di={},Oe(Di,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(Di,xe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Di)),Zo=fi((zi={},Oe(zi,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(zi,xe,{solid:"fass"}),zi)),qo=fi((Fi={},Oe(Fi,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(Fi,xe,{fass:"fa-solid"}),Fi)),Jw=fi((ji={},Oe(ji,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(ji,xe,{"fa-solid":"fass"}),ji)),Zw=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,r0="fa-layers-text",qw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,e2=fi((Ui={},Oe(Ui,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(Ui,xe,{900:"fass"}),Ui)),o0=[1,2,3,4,5,6,7,8,9,10],t2=o0.concat([11,12,13,14,15,16,17,18,19,20]),n2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ei=new Set;Object.keys(Zo[ce]).map(ei.add.bind(ei));Object.keys(Zo[xe]).map(ei.add.bind(ei));var r2=[].concat(Sf,ci(ei),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(o0.map(function(e){return"".concat(e,"x")})).concat(t2.map(function(e){return"w-".concat(e)})),Ao=An.FontAwesomeConfig||{};function o2(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function i2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var a2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];a2.forEach(function(e){var t=yf(e,2),n=t[0],r=t[1],o=i2(o2(n));o!=null&&(Ao[r]=o)})}var i0={styleDefault:"solid",familyDefault:"classic",cssPrefix:e0,replacementClass:t0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ao.familyPrefix&&(Ao.cssPrefix=Ao.familyPrefix);var Hr=D(D({},i0),Ao);Hr.autoReplaceSvg||(Hr.observeMutations=!1);var U={};Object.keys(i0).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(n){Hr[e]=n,To.forEach(function(r){return r(U)})},get:function(){return Hr[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Hr.cssPrefix=t,To.forEach(function(n){return n(U)})},get:function(){return Hr.cssPrefix}});An.FontAwesomeConfig=U;var To=[];function s2(e){return To.push(e),function(){To.splice(To.indexOf(e),1)}}var un=Du,zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l2(e){if(!(!e||!rn)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return de.head.insertBefore(t,r),e}}var u2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ti(){for(var e=12,t="";e-- >0;)t+=u2[Math.random()*62|0];return t}function Zr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bf(e){return e.classList?Zr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function a0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(a0(e[n]),'" ')},"").trim()}function Ts(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ef(e){return e.size!==zt.size||e.x!==zt.x||e.y!==zt.y||e.rotate!==zt.rotate||e.flipX||e.flipY}function f2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:u}}function d2(e){var t=e.transform,n=e.width,r=n===void 0?Du:n,o=e.height,i=o===void 0?Du:o,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&qv?l+="translate(".concat(t.x/un-r/2,"em, ").concat(t.y/un-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/un,"em), calc(-50% + ").concat(t.y/un,"em)) "):l+="translate(".concat(t.x/un,"em, ").concat(t.y/un,"em) "),l+="scale(".concat(t.size/un*(t.flipX?-1:1),", ").concat(t.size/un*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var p2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function s0(){var e=e0,t=t0,n=U.cssPrefix,r=U.replacementClass,o=p2;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var Ep=!1;function kl(){U.autoAddCss&&!Ep&&(l2(s0()),Ep=!0)}var m2={mixout:function(){return{dom:{css:s0,insertCss:kl}}},hooks:function(){return{beforeDOMElementCreation:function(){kl()},beforeI2svg:function(){kl()}}}},qt=An||{};qt[Zt]||(qt[Zt]={});qt[Zt].styles||(qt[Zt].styles={});qt[Zt].hooks||(qt[Zt].hooks={});qt[Zt].shims||(qt[Zt].shims=[]);var Nt=qt[Zt],l0=[],h2=function e(){de.removeEventListener("DOMContentLoaded",e),Ba=1,l0.map(function(t){return t()})},Ba=!1;rn&&(Ba=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),Ba||de.addEventListener("DOMContentLoaded",h2));function v2(e){!rn||(Ba?setTimeout(e,0):l0.push(e))}function di(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?a0(e):"<".concat(t," ").concat(c2(r),">").concat(i.map(di).join(""),"</").concat(t,">")}function Cp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var g2=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}},Sl=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=o!==void 0?g2(n,o):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<a;l++)u=i[l],c=s(c,t[u],u,t);return c};function y2(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Fu(e){var t=y2(e);return t.length===1?t[0].toString(16):null}function x2(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function $p(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function ju(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=$p(t);typeof Nt.hooks.addPack=="function"&&!o?Nt.hooks.addPack(e,$p(t)):Nt.styles[e]=D(D({},Nt.styles[e]||{}),i),e==="fas"&&ju("fa",t)}var Bi,Wi,Hi,Er=Nt.styles,w2=Nt.shims,k2=(Bi={},Oe(Bi,ce,Object.values(qo[ce])),Oe(Bi,xe,Object.values(qo[xe])),Bi),Cf=null,u0={},c0={},f0={},d0={},p0={},S2=(Wi={},Oe(Wi,ce,Object.keys(Jo[ce])),Oe(Wi,xe,Object.keys(Jo[xe])),Wi);function b2(e){return~r2.indexOf(e)}function E2(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!b2(o)?o:null}var m0=function(){var t=function(i){return Sl(Er,function(a,s,l){return a[l]=Sl(s,i,{}),a},{})};u0=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){o[l.toString(16)]=a})}return o}),c0=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){o[l]=a})}return o}),p0=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(l){o[l]=a}),o});var n="far"in Er||U.autoFetchSvg,r=Sl(w2,function(o,i){var a=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});f0=r.names,d0=r.unicodes,Cf=Is(U.styleDefault,{family:U.familyDefault})};s2(function(e){Cf=Is(e.styleDefault,{family:U.familyDefault})});m0();function $f(e,t){return(u0[e]||{})[t]}function C2(e,t){return(c0[e]||{})[t]}function Gn(e,t){return(p0[e]||{})[t]}function h0(e){return f0[e]||{prefix:null,iconName:null}}function $2(e){var t=d0[e],n=$f("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Tn(){return Cf}var Pf=function(){return{prefix:null,iconName:null,rest:[]}};function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,o=Jo[r][e],i=Zo[r][e]||Zo[r][o],a=e in Nt.styles?e:null;return i||a||null}var Pp=(Hi={},Oe(Hi,ce,Object.keys(qo[ce])),Oe(Hi,xe,Object.keys(qo[xe])),Hi);function Ls(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},Oe(t,ce,"".concat(U.cssPrefix,"-").concat(ce)),Oe(t,xe,"".concat(U.cssPrefix,"-").concat(xe)),t),a=null,s=ce;(e.includes(i[ce])||e.some(function(u){return Pp[ce].includes(u)}))&&(s=ce),(e.includes(i[xe])||e.some(function(u){return Pp[xe].includes(u)}))&&(s=xe);var l=e.reduce(function(u,c){var f=E2(U.cssPrefix,c);if(Er[c]?(c=k2[s].includes(c)?Jw[s][c]:c,a=c,u.prefix=c):S2[s].indexOf(c)>-1?(a=c,u.prefix=Is(c,{family:s})):f?u.iconName=f:c!==U.replacementClass&&c!==i[ce]&&c!==i[xe]&&u.rest.push(c),!o&&u.prefix&&u.iconName){var p=a==="fa"?h0(u.iconName):{},v=Gn(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Er.far&&Er.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Pf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===xe&&(Er.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=Gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Tn()||"fas"),l}var P2=function(){function e(){Fw(this,e),this.definitions={}}return jw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=D(D({},n.definitions[s]||{}),a[s]),ju(s,a[s]);var l=qo[ce][s];l&&ju(l,a[s]),m0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),_p=[],Cr={},Tr={},_2=Object.keys(Tr);function O2(e,t){var n=t.mixoutsTo;return _p=e,Cr={},Object.keys(Tr).forEach(function(r){_2.indexOf(r)===-1&&delete Tr[r]}),_p.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),Ua(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){Cr[a]||(Cr[a]=[]),Cr[a].push(i[a])})}r.provides&&r.provides(Tr)}),n}function Uu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=Cr[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function or(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Cr[e]||[];o.forEach(function(i){i.apply(null,n)})}function en(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tr[e]?Tr[e].apply(null,t):void 0}function Bu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Tn();if(!!t)return t=Gn(n,t)||t,Cp(v0.definitions,n,t)||Cp(Nt.styles,n,t)}var v0=new P2,N2=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,or("noAuto")},R2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rn?(or("beforeI2svg",t),en("pseudoElements2svg",t),en("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,v2(function(){T2({autoReplaceSvgRoot:n}),or("watch",t)})}},A2={icon:function(t){if(t===null)return null;if(Ua(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Is(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(Zw))){var o=Ls(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||Tn(),iconName:Gn(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=Tn();return{prefix:i,iconName:Gn(i,t)||t}}}},mt={noAuto:N2,config:U,dom:R2,parse:A2,library:v0,findIconDefinition:Bu,toHtml:di},T2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?de:n;(Object.keys(Nt.styles).length>0||U.autoFetchSvg)&&rn&&U.autoReplaceSvg&&mt.dom.i2svg({node:r})};function Ms(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return di(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!rn){var r=de.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function I2(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(Ef(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};o.style=Ts(D(D({},i),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function L2(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},o),{},{id:a}),children:r}]}]}function _f(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,v=p===void 0?!1:p,g=r.found?r:n,x=g.width,E=g.height,m=o==="fak",d=[U.replacementClass,i?"".concat(U.cssPrefix,"-").concat(i):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),h={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":o,"data-icon":i,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(E)})},w=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/E*16*.0625,"em")}:{};v&&(h.attributes[rr]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||ti())},children:[l]}),delete h.attributes.title);var S=D(D({},h),{},{prefix:o,iconName:i,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:D(D({},w),f.styles)}),$=r.found&&n.found?en("generateAbstractMask",S)||{children:[],attributes:{}}:en("generateAbstractIcon",S)||{children:[],attributes:{}},N=$.children,P=$.attributes;return S.children=N,S.attributes=P,s?L2(S):I2(S)}function Op(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=D(D(D({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});l&&(u[rr]="");var c=D({},a.styles);Ef(o)&&(c.transform=d2({transform:o,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ts(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function M2(e){var t=e.content,n=e.title,r=e.extra,o=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ts(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var bl=Nt.styles;function Wu(e){var t=e[0],n=e[1],r=e.slice(4),o=yf(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var D2={found:!1,width:512,height:512};function z2(e,t){!n0&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hu(e,t){var n=t;return t==="fa"&&U.styleDefault!==null&&(t=Tn()),new Promise(function(r,o){if(en("missingIconAbstract"),n==="fa"){var i=h0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&bl[t]&&bl[t][e]){var a=bl[t][e];return r(Wu(a))}z2(e,t),r(D(D({},D2),{},{icon:U.showMissingIcons&&e?en("missingIconAbstract")||{}:{}}))})}var Np=function(){},Vu=U.measurePerformance&&Mi&&Mi.mark&&Mi.measure?Mi:{mark:Np,measure:Np},wo='FA "6.2.0"',F2=function(t){return Vu.mark("".concat(wo," ").concat(t," begins")),function(){return g0(t)}},g0=function(t){Vu.mark("".concat(wo," ").concat(t," ends")),Vu.measure("".concat(wo," ").concat(t),"".concat(wo," ").concat(t," begins"),"".concat(wo," ").concat(t," ends"))},Of={begin:F2,end:g0},ia=function(){};function Rp(e){var t=e.getAttribute?e.getAttribute(rr):null;return typeof t=="string"}function j2(e){var t=e.getAttribute?e.getAttribute(wf):null,n=e.getAttribute?e.getAttribute(kf):null;return t&&n}function U2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function B2(){if(U.autoReplaceSvg===!0)return aa.replace;var e=aa[U.autoReplaceSvg];return e||aa.replace}function W2(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function H2(e){return de.createElement(e)}function y0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?W2:H2:n;if(typeof e=="string")return de.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(y0(a,{ceFn:r}))}),o}function V2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var aa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(y0(o),n)}),n.getAttribute(rr)===null&&U.keepOriginalSource){var r=de.createComment(V2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~bf(n).indexOf(U.replacementClass))return aa.replace(t);var o=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===U.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(s){return di(s)}).join(`
`);n.setAttribute(rr,""),n.innerHTML=a}};function Ap(e){e()}function x0(e,t){var n=typeof t=="function"?t:ia;if(e.length===0)n();else{var r=Ap;U.mutateApproach===Qw&&(r=An.requestAnimationFrame||Ap),r(function(){var o=B2(),i=Of.begin("mutate");e.map(o),i(),n()})}}var Nf=!1;function w0(){Nf=!0}function Gu(){Nf=!1}var Wa=null;function Tp(e){if(!!Sp&&!!U.observeMutations){var t=e.treeCallback,n=t===void 0?ia:t,r=e.nodeCallback,o=r===void 0?ia:r,i=e.pseudoElementsCallback,a=i===void 0?ia:i,s=e.observeMutationsRoot,l=s===void 0?de:s;Wa=new Sp(function(u){if(!Nf){var c=Tn();Zr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Rp(f.addedNodes[0])&&(U.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&U.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Rp(f.target)&&~n2.indexOf(f.attributeName))if(f.attributeName==="class"&&j2(f.target)){var p=Ls(bf(f.target)),v=p.prefix,g=p.iconName;f.target.setAttribute(wf,v||c),g&&f.target.setAttribute(kf,g)}else U2(f.target)&&o(f.target)})}}),rn&&Wa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function G2(){!Wa||Wa.disconnect()}function Y2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function K2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=Ls(bf(e));return o.prefix||(o.prefix=Tn()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=C2(o.prefix,e.innerText)||$f(o.prefix,Fu(e.innerText))),!o.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function Q2(e){var t=Zr(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return U.autoA11y&&(n?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||ti()):(t["aria-hidden"]="true",t.focusable="false")),t}function X2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ip(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=K2(e),r=n.iconName,o=n.prefix,i=n.rest,a=Q2(e),s=Uu("parseNodeAttributes",{},e),l=t.styleParser?Y2(e):[];return D({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var J2=Nt.styles;function k0(e){var t=U.autoReplaceSvg==="nest"?Ip(e,{styleParser:!1}):Ip(e);return~t.extra.classes.indexOf(r0)?en("generateLayersText",e,t):en("generateSvgReplacementMutation",e,t)}var In=new Set;Sf.map(function(e){In.add("fa-".concat(e))});Object.keys(Jo[ce]).map(In.add.bind(In));Object.keys(Jo[xe]).map(In.add.bind(In));In=ci(In);function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rn)return Promise.resolve();var n=de.documentElement.classList,r=function(f){return n.add("".concat(bp,"-").concat(f))},o=function(f){return n.remove("".concat(bp,"-").concat(f))},i=U.autoFetchSvg?In:Sf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(J2));i.includes("fa")||i.push("fa");var a=[".".concat(r0,":not([").concat(rr,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(rr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Zr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),o("complete");else return Promise.resolve();var l=Of.begin("onTree"),u=s.reduce(function(c,f){try{var p=k0(f);p&&c.push(p)}catch(v){n0||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){x0(p,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function Z2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k0(e).then(function(n){n&&x0([n],t)})}function q2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Bu(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Bu(o||{})),e(r,D(D({},n),{},{mask:o}))}}var ek=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?zt:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,v=n.titleId,g=v===void 0?null:v,x=n.classes,E=x===void 0?[]:x,m=n.attributes,d=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(!!t){var S=t.prefix,$=t.iconName,N=t.icon;return Ms(D({type:"icon"},t),function(){return or("beforeDOMElementCreation",{iconDefinition:t,params:n}),U.autoA11y&&(p?d["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(g||ti()):(d["aria-hidden"]="true",d.focusable="false")),_f({icons:{main:Wu(N),mask:l?Wu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:$,transform:D(D({},zt),o),symbol:a,title:p,maskId:c,titleId:g,extra:{attributes:d,styles:w,classes:E}})})}},tk={mixout:function(){return{icon:q2(ek)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lp,n.nodeCallback=Z2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?de:r,i=n.callback,a=i===void 0?function(){}:i;return Lp(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(v,g){Promise.all([Hu(o,s),c.iconName?Hu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var E=yf(x,2),m=E[0],d=E[1];v([n,_f({icons:{main:m,mask:d},prefix:s,iconName:o,transform:l,symbol:u,maskId:f,title:i,titleId:a,extra:p,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,l=Ts(s);l.length>0&&(o.style=l);var u;return Ef(a)&&(u=en("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:o}}}},nk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return Ms({type:"layer"},function(){or("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(ci(i)).join(" ")},children:a}]})}}}},rk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ms({type:"counter",content:n},function(){return or("beforeDOMElementCreation",{content:n,params:r}),M2({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(ci(s))}})})}}}},ok={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?zt:o,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Ms({type:"text",content:n},function(){return or("beforeDOMElementCreation",{content:n,params:r}),Op({content:n,transform:D(D({},zt),i),title:s,extra:{attributes:f,styles:v,classes:["".concat(U.cssPrefix,"-layers-text")].concat(ci(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,s=null,l=null;if(qv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return U.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Op({content:n.innerHTML,width:s,height:l,transform:i,title:o,extra:a,watchable:!0})])}}},ik=new RegExp('"',"ug"),Mp=[1105920,1112319];function ak(e){var t=e.replace(ik,""),n=x2(t,0),r=n>=Mp[0]&&n<=Mp[1],o=t.length===2?t[0]===t[1]:!1;return{value:Fu(o?t[0]:t),isSecondary:r||o}}function Dp(e,t){var n="".concat(Kw).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=Zr(e.children),a=i.filter(function(N){return N.getAttribute(zu)===t})[0],s=An.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qw),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?xe:ce,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zo[p][l[2].toLowerCase()]:e2[p][u],g=ak(f),x=g.value,E=g.isSecondary,m=l[0].startsWith("FontAwesome"),d=$f(v,x),h=d;if(m){var w=$2(x);w.iconName&&w.prefix&&(d=w.iconName,v=w.prefix)}if(d&&!E&&(!a||a.getAttribute(wf)!==v||a.getAttribute(kf)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);var S=X2(),$=S.extra;$.attributes[zu]=t,Hu(d,v).then(function(N){var P=_f(D(D({},S),{},{icons:{main:N,mask:Pf()},prefix:v,iconName:h,extra:$,watchable:!0})),L=de.createElement("svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=P.map(function(B){return di(B)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function sk(e){return Promise.all([Dp(e,"::before"),Dp(e,"::after")])}function lk(e){return e.parentNode!==document.head&&!~Xw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zp(e){if(!!rn)return new Promise(function(t,n){var r=Zr(e.querySelectorAll("*")).filter(lk).map(sk),o=Of.begin("searchPseudoElements");w0(),Promise.all(r).then(function(){o(),Gu(),t()}).catch(function(){o(),Gu(),n()})})}var uk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?de:r;U.searchPseudoElements&&zp(o)}}},Fp=!1,ck={mixout:function(){return{dom:{unwatch:function(){w0(),Fp=!0}}}},hooks:function(){return{bootstrap:function(){Tp(Uu("mutationObserverCallbacks",{}))},noAuto:function(){G2()},watch:function(n){var r=n.observeMutationsRoot;Fp?Gu():Tp(Uu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},jp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},fk={mixout:function(){return{parse:{transform:function(n){return jp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=jp(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),u="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},v={outer:s,inner:f,path:p};return{tag:"g",attributes:D({},v.outer),children:[{tag:"g",attributes:D({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),v.path)}]}]}}}},El={x:0,y:0,width:"100%",height:"100%"};function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function dk(e){return e.tag==="g"?e.children:[e]}var pk={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?Ls(o.split(" ").map(function(a){return a.trim()})):Pf();return i.prefix||(i.prefix=Tn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=a.width,p=a.icon,v=f2({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:D(D({},El),{},{fill:"white"})},x=c.children?{children:c.children.map(Up)}:{},E={tag:"g",attributes:D({},v.inner),children:[Up(D({tag:c.tag,attributes:D(D({},c.attributes),v.path)},x))]},m={tag:"g",attributes:D({},v.outer),children:[E]},d="mask-".concat(s||ti()),h="clip-".concat(s||ti()),w={tag:"mask",attributes:D(D({},El),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:dk(p)},w]};return r.push(S,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(d,")")},El)}),{children:r,attributes:o}}}},mk={provides:function(t){var n=!1;An.matchMedia&&(n=An.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=D(D({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:D(D({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:D(D({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:D(D({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hk={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},vk=[m2,tk,nk,rk,ok,uk,ck,fk,pk,mk,hk];O2(vk,{mixoutsTo:mt});mt.noAuto;mt.config;mt.library;mt.dom;var Yu=mt.parse;mt.findIconDefinition;mt.toHtml;var gk=mt.icon;mt.layer;mt.text;mt.counter;var K={exports:{}},yk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xk=yk,wk=xk;function S0(){}function b0(){}b0.resetWarningCache=S0;var kk=function(){function e(r,o,i,a,s,l){if(l!==wk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b0,resetWarningCache:S0};return n.PropTypes=n,n};K.exports=kk();function Bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bp(Object(n),!0).forEach(function(r){$r(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ha(e){return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ha(e)}function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sk(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function bk(e,t){if(e==null)return{};var n=Sk(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ku(e){return Ek(e)||Ck(e)||$k(e)||Pk()}function Ek(e){if(Array.isArray(e))return Qu(e)}function Ck(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $k(e,t){if(!!e){if(typeof e=="string")return Qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qu(e,t)}}function Qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _k(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,v=e.inverse,g=e.border,x=e.listItem,E=e.flip,m=e.size,d=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":v,"fa-border":g,"fa-li":x,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},$r(t,"fa-".concat(m),typeof m<"u"&&m!==null),$r(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),$r(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),$r(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function Ok(e){return e=e-0,e===e}function E0(e){return Ok(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Nk=["style"];function Rk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ak(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=E0(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[Rk(o)]=i:t[o]=i,t},{})}function C0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return C0(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Ak(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[E0(u)]=c}return l},{attrs:{}}),i=n.style,a=i===void 0?{}:i,s=bk(n,Nk);return o.attrs.style=xn(xn({},o.attrs.style),a),e.apply(void 0,[t.tag,xn(xn({},o.attrs),s)].concat(Ku(r)))}var $0=!1;try{$0=!0}catch{}function Tk(){if(!$0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wp(e){if(e&&Ha(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yu.icon)return Yu.icon(e);if(e===null)return null;if(e&&Ha(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Cl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$r({},e,t):{}}var Ae=Se.forwardRef(function(e,t){var n=e.icon,r=e.mask,o=e.symbol,i=e.className,a=e.title,s=e.titleId,l=e.maskId,u=Wp(n),c=Cl("classes",[].concat(Ku(_k(e)),Ku(i.split(" ")))),f=Cl("transform",typeof e.transform=="string"?Yu.transform(e.transform):e.transform),p=Cl("mask",Wp(r)),v=gk(u,xn(xn(xn(xn({},c),f),p),{},{symbol:o,title:a,titleId:s,maskId:l}));if(!v)return Tk("Could not find icon",u),null;var g=v.abstract,x={ref:t};return Object.keys(e).forEach(function(E){Ae.defaultProps.hasOwnProperty(E)||(x[E]=e[E])}),Ik(g[0],x)});Ae.displayName="FontAwesomeIcon";Ae.propTypes={beat:K.exports.bool,border:K.exports.bool,beatFade:K.exports.bool,bounce:K.exports.bool,className:K.exports.string,fade:K.exports.bool,flash:K.exports.bool,mask:K.exports.oneOfType([K.exports.object,K.exports.array,K.exports.string]),maskId:K.exports.string,fixedWidth:K.exports.bool,inverse:K.exports.bool,flip:K.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.exports.oneOfType([K.exports.object,K.exports.array,K.exports.string]),listItem:K.exports.bool,pull:K.exports.oneOf(["right","left"]),pulse:K.exports.bool,rotation:K.exports.oneOf([0,90,180,270]),shake:K.exports.bool,size:K.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.exports.bool,spinPulse:K.exports.bool,spinReverse:K.exports.bool,symbol:K.exports.oneOfType([K.exports.bool,K.exports.string]),title:K.exports.string,titleId:K.exports.string,transform:K.exports.oneOfType([K.exports.string,K.exports.object]),swapOpacity:K.exports.bool};Ae.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ik=C0.bind(null,Se.createElement);function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function P0(e,t=[]){let n=[];function r(i,a){const s=y.exports.createContext(a),l=n.length;n=[...n,a];function u(f){const{scope:p,children:v,...g}=f,x=(p==null?void 0:p[e][l])||s,E=y.exports.useMemo(()=>g,Object.values(g));return y.exports.createElement(x.Provider,{value:E},v)}function c(f,p){const v=(p==null?void 0:p[e][l])||s,g=y.exports.useContext(v);if(g)return g;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,c]}const o=()=>{const i=n.map(a=>y.exports.createContext(a));return function(s){const l=(s==null?void 0:s[e])||i;return y.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Lk(o,...t)]}function Lk(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const f=l(i)[`__scope${u}`];return{...s,...f}},{});return y.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Re(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Mk(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Rf(...e){return t=>e.forEach(n=>Mk(n,t))}function tn(...e){return y.exports.useCallback(Rf(...e),e)}const Va=y.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=y.exports.Children.toArray(n),i=o.find(zk);if(i){const a=i.props.children,s=o.map(l=>l===i?y.exports.Children.count(a)>1?y.exports.Children.only(null):y.exports.isValidElement(a)?a.props.children:null:l);return y.exports.createElement(Xu,Ce({},r,{ref:t}),y.exports.isValidElement(a)?y.exports.cloneElement(a,void 0,s):null)}return y.exports.createElement(Xu,Ce({},r,{ref:t}),n)});Va.displayName="Slot";const Xu=y.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return y.exports.isValidElement(n)?y.exports.cloneElement(n,{...Fk(r,n.props),ref:Rf(t,n.ref)}):y.exports.Children.count(n)>1?y.exports.Children.only(null):null});Xu.displayName="SlotClone";const Dk=({children:e})=>y.exports.createElement(y.exports.Fragment,null,e);function zk(e){return y.exports.isValidElement(e)&&e.type===Dk}function Fk(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const jk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],It=jk.reduce((e,t)=>{const n=y.exports.forwardRef((r,o)=>{const{asChild:i,...a}=r,s=i?Va:t;return y.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),y.exports.createElement(s,Ce({},a,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Ju(e,t){e&&Ka.exports.flushSync(()=>e.dispatchEvent(t))}function gt(e){const t=y.exports.useRef(e);return y.exports.useEffect(()=>{t.current=e}),y.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Uk({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Bk({defaultProp:t,onChange:n}),i=e!==void 0,a=i?e:r,s=gt(n),l=y.exports.useCallback(u=>{if(i){const f=typeof u=="function"?u(e):u;f!==e&&s(f)}else o(u)},[i,e,o,s]);return[a,l]}function Bk({defaultProp:e,onChange:t}){const n=y.exports.useState(e),[r]=n,o=y.exports.useRef(r),i=gt(t);return y.exports.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const Wk=y.exports.createContext(void 0);function Hk(e){const t=y.exports.useContext(Wk);return e||t||"ltr"}const Vr=Boolean(globalThis==null?void 0:globalThis.document)?y.exports.useLayoutEffect:()=>{};function Vk(e,t){return y.exports.useReducer((n,r)=>{const o=t[n][r];return o!=null?o:n},e)}const Ds=e=>{const{present:t,children:n}=e,r=Gk(t),o=typeof n=="function"?n({present:r.isPresent}):y.exports.Children.only(n),i=tn(r.ref,o.ref);return typeof n=="function"||r.isPresent?y.exports.cloneElement(o,{ref:i}):null};Ds.displayName="Presence";function Gk(e){const[t,n]=y.exports.useState(),r=y.exports.useRef({}),o=y.exports.useRef(e),i=y.exports.useRef("none"),a=e?"mounted":"unmounted",[s,l]=Vk(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.exports.useEffect(()=>{const u=Vi(r.current);i.current=s==="mounted"?u:"none"},[s]),Vr(()=>{const u=r.current,c=o.current;if(c!==e){const p=i.current,v=Vi(u);e?l("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&p!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Vr(()=>{if(t){const u=f=>{const v=Vi(r.current).includes(f.animationName);f.target===t&&v&&Ka.exports.flushSync(()=>l("ANIMATION_END"))},c=f=>{f.target===t&&(i.current=Vi(r.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:y.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Vi(e){return(e==null?void 0:e.animationName)||"none"}const Yk=fa["useId".toString()]||(()=>{});let Kk=0;function _0(e){const[t,n]=y.exports.useState(Yk());return Vr(()=>{e||n(r=>r!=null?r:String(Kk++))},[e]),e||(t?`radix-${t}`:"")}function O0(e){const t=e+"CollectionProvider",[n,r]=P0(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:g,children:x}=v,E=Se.useRef(null),m=Se.useRef(new Map).current;return Se.createElement(o,{scope:g,itemMap:m,collectionRef:E},x)},s=e+"CollectionSlot",l=Se.forwardRef((v,g)=>{const{scope:x,children:E}=v,m=i(s,x),d=tn(g,m.collectionRef);return Se.createElement(Va,{ref:d},E)}),u=e+"CollectionItemSlot",c="data-radix-collection-item",f=Se.forwardRef((v,g)=>{const{scope:x,children:E,...m}=v,d=Se.useRef(null),h=tn(g,d),w=i(u,x);return Se.useEffect(()=>(w.itemMap.set(d,{ref:d,...m}),()=>void w.itemMap.delete(d))),Se.createElement(Va,{[c]:"",ref:h},E)});function p(v){const g=i(e+"CollectionConsumer",v);return Se.useCallback(()=>{const E=g.collectionRef.current;if(!E)return[];const m=Array.from(E.querySelectorAll(`[${c}]`));return Array.from(g.itemMap.values()).sort((w,S)=>m.indexOf(w.ref.current)-m.indexOf(S.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},p,r]}function Qk(e,t=globalThis==null?void 0:globalThis.document){const n=gt(e);y.exports.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Zu="dismissableLayer.update",Xk="dismissableLayer.pointerDownOutside",Jk="dismissableLayer.focusOutside";let Hp;const Zk=y.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),qk=y.exports.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:s,onDismiss:l,...u}=e,c=y.exports.useContext(Zk),[f,p]=y.exports.useState(null),v=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,g]=y.exports.useState({}),x=tn(t,P=>p(P)),E=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=E.indexOf(m),h=f?E.indexOf(f):-1,w=c.layersWithOutsidePointerEventsDisabled.size>0,S=h>=d,$=eS(P=>{const L=P.target,B=[...c.branches].some(se=>se.contains(L));!S||B||(i==null||i(P),s==null||s(P),P.defaultPrevented||l==null||l())},v),N=tS(P=>{const L=P.target;[...c.branches].some(se=>se.contains(L))||(a==null||a(P),s==null||s(P),P.defaultPrevented||l==null||l())},v);return Qk(P=>{h===c.layers.size-1&&(o==null||o(P),!P.defaultPrevented&&l&&(P.preventDefault(),l()))},v),y.exports.useEffect(()=>{if(!!f)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Hp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Vp(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Hp)}},[f,v,r,c]),y.exports.useEffect(()=>()=>{!f||(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Vp())},[f,c]),y.exports.useEffect(()=>{const P=()=>g({});return document.addEventListener(Zu,P),()=>document.removeEventListener(Zu,P)},[]),y.exports.createElement(It.div,Ce({},u,{ref:x,style:{pointerEvents:w?S?"auto":"none":void 0,...e.style},onFocusCapture:Re(e.onFocusCapture,N.onFocusCapture),onBlurCapture:Re(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:Re(e.onPointerDownCapture,$.onPointerDownCapture)}))});function eS(e,t=globalThis==null?void 0:globalThis.document){const n=gt(e),r=y.exports.useRef(!1),o=y.exports.useRef(()=>{});return y.exports.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let c=function(){N0(Xk,n,u,{discrete:!0})};var l=c;const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function tS(e,t=globalThis==null?void 0:globalThis.document){const n=gt(e),r=y.exports.useRef(!1);return y.exports.useEffect(()=>{const o=i=>{i.target&&!r.current&&N0(Jk,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Vp(){const e=new CustomEvent(Zu);document.dispatchEvent(e)}function N0(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Ju(o,i):o.dispatchEvent(i)}function nS(e){const t=y.exports.useRef({value:e,previous:e});return y.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const rS=y.exports.forwardRef((e,t)=>y.exports.createElement(It.span,Ce({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),oS=rS,pi="NavigationMenu",[Af,iS,aS]=O0(pi),[qu,sS,lS]=O0(pi),[Tf,EC]=P0(pi,[aS,lS]),[uS,on]=Tf(pi),[cS,fS]=Tf(pi),dS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,delayDuration:a=200,skipDelayDuration:s=300,orientation:l="horizontal",dir:u,...c}=e,[f,p]=y.exports.useState(null),v=tn(t,L=>p(L)),g=Hk(u),x=y.exports.useRef(0),E=y.exports.useRef(0),m=y.exports.useRef(0),[d,h]=y.exports.useState(!0),[w="",S]=Uk({prop:r,onChange:L=>{const B=L!=="",se=s>0;B?(window.clearTimeout(m.current),se&&h(!1)):(window.clearTimeout(m.current),m.current=window.setTimeout(()=>h(!0),s)),o==null||o(L)},defaultProp:i}),$=y.exports.useCallback(()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>S(""),150)},[S]),N=y.exports.useCallback(L=>{window.clearTimeout(E.current),S(L)},[S]),P=y.exports.useCallback(L=>{w===L?window.clearTimeout(E.current):x.current=window.setTimeout(()=>{window.clearTimeout(E.current),S(L)},a)},[w,S,a]);return y.exports.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(E.current),window.clearTimeout(m.current)},[]),y.exports.createElement(pS,{scope:n,isRootMenu:!0,value:w,dir:g,orientation:l,rootNavigationMenu:f,onTriggerEnter:L=>{window.clearTimeout(x.current),d?P(L):N(L)},onTriggerLeave:()=>{window.clearTimeout(x.current),$()},onContentEnter:()=>window.clearTimeout(E.current),onContentLeave:$,onItemSelect:L=>{S(B=>B===L?"":L)},onItemDismiss:()=>S("")},y.exports.createElement(It.nav,Ce({"aria-label":"Main","data-orientation":l,dir:g},c,{ref:v})))}),pS=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:i,children:a,value:s,onItemSelect:l,onItemDismiss:u,onTriggerEnter:c,onTriggerLeave:f,onContentEnter:p,onContentLeave:v}=e,[g,x]=y.exports.useState(null),[E,m]=y.exports.useState(new Map),[d,h]=y.exports.useState(null);return y.exports.createElement(uS,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:s,previousValue:nS(s),baseId:_0(),dir:o,orientation:i,viewport:g,onViewportChange:x,indicatorTrack:d,onIndicatorTrackChange:h,onTriggerEnter:gt(c),onTriggerLeave:gt(f),onContentEnter:gt(p),onContentLeave:gt(v),onItemSelect:gt(l),onItemDismiss:gt(u),onViewportContentChange:y.exports.useCallback((w,S)=>{m($=>($.set(w,S),new Map($)))},[]),onViewportContentRemove:y.exports.useCallback(w=>{m(S=>S.has(w)?(S.delete(w),new Map(S)):S)},[])},y.exports.createElement(Af.Provider,{scope:t},y.exports.createElement(cS,{scope:t,items:E},a)))},mS="NavigationMenuList",hS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=on(mS,n),i=y.exports.createElement(It.ul,Ce({"data-orientation":o.orientation},r,{ref:t}));return y.exports.createElement(It.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange},y.exports.createElement(Af.Slot,{scope:n},o.isRootMenu?y.exports.createElement(I0,{asChild:!0},i):i))}),vS="NavigationMenuItem",[gS,R0]=Tf(vS),yS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...o}=e,i=_0(),a=r||i||"LEGACY_REACT_AUTO_VALUE",s=y.exports.useRef(null),l=y.exports.useRef(null),u=y.exports.useRef(null),c=y.exports.useRef(()=>{}),f=y.exports.useRef(!1),p=y.exports.useCallback((g="start")=>{if(s.current){c.current();const x=ec(s.current);x.length&&If(g==="start"?x:x.reverse())}},[]),v=y.exports.useCallback(()=>{if(s.current){const g=ec(s.current);g.length&&(c.current=PS(g))}},[]);return y.exports.createElement(gS,{scope:n,value:a,triggerRef:l,contentRef:s,focusProxyRef:u,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:v,onContentFocusOutside:v},y.exports.createElement(It.li,Ce({},o,{ref:t})))}),Gp="NavigationMenuTrigger",xS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...o}=e,i=on(Gp,e.__scopeNavigationMenu),a=R0(Gp,e.__scopeNavigationMenu),s=y.exports.useRef(null),l=tn(s,a.triggerRef,t),u=M0(i.baseId,a.value),c=D0(i.baseId,a.value),f=y.exports.useRef(!1),p=y.exports.useRef(!1),v=a.value===i.value;return y.exports.createElement(y.exports.Fragment,null,y.exports.createElement(Af.ItemSlot,{scope:n,value:a.value},y.exports.createElement(L0,{asChild:!0},y.exports.createElement(It.button,Ce({id:u,disabled:r,"data-disabled":r?"":void 0,"data-state":Lf(v),"aria-expanded":v,"aria-controls":c},o,{ref:l,onPointerEnter:Re(e.onPointerEnter,()=>{p.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:Re(e.onPointerMove,Ga(()=>{r||p.current||a.wasEscapeCloseRef.current||f.current||(i.onTriggerEnter(a.value),f.current=!0)})),onPointerLeave:Re(e.onPointerLeave,Ga(()=>{r||(i.onTriggerLeave(),f.current=!1)})),onClick:Re(e.onClick,()=>{i.onItemSelect(a.value),p.current=v}),onKeyDown:Re(e.onKeyDown,g=>{const E={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];v&&g.key===E&&(a.onEntryKeyDown(),g.preventDefault())})})))),v&&y.exports.createElement(y.exports.Fragment,null,y.exports.createElement(oS,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:g=>{const x=a.contentRef.current,E=g.relatedTarget,m=E===s.current,d=x==null?void 0:x.contains(E);(m||!d)&&a.onFocusProxyEnter(m?"start":"end")}}),i.viewport&&y.exports.createElement("span",{"aria-owns":c})))}),Yp="navigationMenu.linkSelect",wS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return y.exports.createElement(L0,{asChild:!0},y.exports.createElement(It.a,Ce({"data-active":r?"":void 0,"aria-current":r?"page":void 0},i,{ref:t,onClick:Re(e.onClick,a=>{const s=a.target,l=new CustomEvent(Yp,{bubbles:!0,cancelable:!0});if(s.addEventListener(Yp,u=>o==null?void 0:o(u),{once:!0}),Ju(s,l),!l.defaultPrevented){const u=new CustomEvent(sa,{bubbles:!0,cancelable:!0});Ju(s,u)}},{checkForDefaultPrevented:!1})})))}),ni="NavigationMenuContent",kS=y.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=on(ni,e.__scopeNavigationMenu),i=R0(ni,e.__scopeNavigationMenu),a=tn(i.contentRef,t),s=i.value===o.value,l={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?y.exports.createElement(SS,Ce({forceMount:n},l,{ref:a})):y.exports.createElement(Ds,{present:n||s},y.exports.createElement(A0,Ce({"data-state":Lf(s)},l,{ref:a,onPointerEnter:Re(e.onPointerEnter,o.onContentEnter),onPointerLeave:Re(e.onPointerLeave,Ga(o.onContentLeave)),style:{pointerEvents:!s&&o.isRootMenu?"none":void 0,...l.style}})))}),SS=y.exports.forwardRef((e,t)=>{const n=on(ni,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=n;return Vr(()=>{r(e.value,{ref:t,...e})},[e,t,r]),Vr(()=>()=>o(e.value),[e.value,o]),null}),sa="navigationMenu.rootContentDismiss",A0=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:o,focusProxyRef:i,wasEscapeCloseRef:a,onRootContentClose:s,onContentFocusOutside:l,...u}=e,c=on(ni,n),f=y.exports.useRef(null),p=tn(f,t),v=M0(c.baseId,r),g=D0(c.baseId,r),x=iS(n),E=y.exports.useRef(null),{onItemDismiss:m}=c;y.exports.useEffect(()=>{const h=f.current;if(c.isRootMenu&&h){const w=()=>{var S;m(),s(),h.contains(document.activeElement)&&((S=o.current)===null||S===void 0||S.focus())};return h.addEventListener(sa,w),()=>h.removeEventListener(sa,w)}},[c.isRootMenu,e.value,o,m,s]);const d=y.exports.useMemo(()=>{const w=x().map(B=>B.value);c.dir==="rtl"&&w.reverse();const S=w.indexOf(c.value),$=w.indexOf(c.previousValue),N=r===c.value,P=$===w.indexOf(r);if(!N&&!P)return E.current;const L=(()=>{if(S!==$){if(N&&$!==-1)return S>$?"from-end":"from-start";if(P&&S!==-1)return S>$?"to-start":"to-end"}return null})();return E.current=L,L},[c.previousValue,c.value,c.dir,x,r]);return y.exports.createElement(I0,{asChild:!0},y.exports.createElement(qk,Ce({id:g,"aria-labelledby":v,"data-motion":d,"data-orientation":c.orientation},u,{ref:p,onDismiss:()=>{var h;const w=new Event(sa,{bubbles:!0,cancelable:!0});(h=f.current)===null||h===void 0||h.dispatchEvent(w)},onFocusOutside:Re(e.onFocusOutside,h=>{var w;l();const S=h.target;(w=c.rootNavigationMenu)!==null&&w!==void 0&&w.contains(S)&&h.preventDefault()}),onPointerDownOutside:Re(e.onPointerDownOutside,h=>{var w;const S=h.target,$=x().some(P=>{var L;return(L=P.ref.current)===null||L===void 0?void 0:L.contains(S)}),N=c.isRootMenu&&((w=c.viewport)===null||w===void 0?void 0:w.contains(S));($||N||!c.isRootMenu)&&h.preventDefault()}),onKeyDown:Re(e.onKeyDown,h=>{const w=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!w){const N=ec(h.currentTarget),P=document.activeElement,L=N.findIndex(we=>we===P),se=h.shiftKey?N.slice(0,L).reverse():N.slice(L+1,N.length);if(If(se))h.preventDefault();else{var $;($=i.current)===null||$===void 0||$.focus()}}}),onEscapeKeyDown:Re(e.onEscapeKeyDown,h=>{a.current=!0})})))}),T0="NavigationMenuViewport",bS=y.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=on(T0,e.__scopeNavigationMenu),i=Boolean(o.value);return y.exports.createElement(Ds,{present:n||i},y.exports.createElement(ES,Ce({},r,{ref:t})))}),ES=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...o}=e,i=on(T0,n),a=tn(t,i.onViewportChange),s=fS(ni,e.__scopeNavigationMenu),[l,u]=y.exports.useState(null),[c,f]=y.exports.useState(null),p=l?(l==null?void 0:l.width)+"px":void 0,v=l?(l==null?void 0:l.height)+"px":void 0,g=Boolean(i.value),x=g?i.value:i.previousValue;return _S(c,()=>{c&&u({width:c.offsetWidth,height:c.offsetHeight})}),y.exports.createElement(It.div,Ce({"data-state":Lf(g),"data-orientation":i.orientation},o,{ref:a,style:{pointerEvents:!g&&i.isRootMenu?"none":void 0,["--radix-navigation-menu-viewport-width"]:p,["--radix-navigation-menu-viewport-height"]:v,...o.style},onPointerEnter:Re(e.onPointerEnter,i.onContentEnter),onPointerLeave:Re(e.onPointerLeave,Ga(i.onContentLeave))}),Array.from(s.items).map(([m,{ref:d,forceMount:h,...w}])=>{const S=x===m;return y.exports.createElement(Ds,{key:m,present:h||S},y.exports.createElement(A0,Ce({},w,{ref:Rf(d,$=>{S&&$&&f($)})})))}))}),CS="FocusGroup",I0=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=on(CS,n);return y.exports.createElement(qu.Provider,{scope:n},y.exports.createElement(qu.Slot,{scope:n},y.exports.createElement(It.div,Ce({dir:o.dir},r,{ref:t}))))}),Kp=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],$S="FocusGroupItem",L0=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=sS(n),i=on($S,n);return y.exports.createElement(qu.ItemSlot,{scope:n},y.exports.createElement(It.button,Ce({},r,{ref:t,onKeyDown:Re(e.onKeyDown,a=>{if(["Home","End",...Kp].includes(a.key)){let l=o().map(f=>f.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&l.reverse(),Kp.includes(a.key)){const f=l.indexOf(a.currentTarget);l=l.slice(f+1)}setTimeout(()=>If(l)),a.preventDefault()}})})))});function ec(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function If(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function PS(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function _S(e,t){const n=gt(t);Vr(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}function Lf(e){return e?"open":"closed"}function M0(e,t){return`${e}-trigger-${t}`}function D0(e,t){return`${e}-content-${t}`}function Ga(e){return t=>t.pointerType==="mouse"?e(t):void 0}const OS=dS,NS=hS,RS=yS,AS=xS,la=wS,z0=kS,TS=bS,IS=Hv`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,LS=Hv`
 from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`,MS=O.div`
  ${({theme:{colors:e,spacing:t}})=>z`
    width: 100%;
    height: ${t.headerSpacing};
    background-color: ${e.black};
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 5;
    padding: 0 16px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
  `}
`,DS=O.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
  }
`,zS=O.ul`
  display: flex;
  gap: 1rem;
`,$l=O.li`
  ${({theme:{colors:e,spacing:t}})=>z`
    & svg {
      color: ${e.white};
    }
    & > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem 0;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: 400;
      height: ${t.headerSpacing};
      display: flex;
      align-items: center;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transition: all 300ms;
      min-width: 7rem;
      &:hover,
      &.active {
        border-bottom: 2px solid ${e.lightBlue};
        background-color: ${e.darkGray};
      }
    }
  `}
`,FS=O.nav`
  ${({theme:{breakpoints:e}})=>z`
    @media (max-width: ${e.md}) {
      display: none;
    }
  `}
`;O.button`
  ${({theme:{colors:e,boxShadow:t}})=>z`
    font-family: inherit;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${e.darkBlue};
    background-color: ${e.white};
    box-shadow: ${t.dark};
    border: none;
  `}
`;const jS=O(OS)`
  ${({theme:{breakpoints:e}})=>z`
    display: flex;
    justify-content: center;
    z-index: 1;
    @media (min-width: ${e.md}) {
      display: none;
    }
  `}
`,US=O(NS)`
  justify-content: center;
  list-style: none;
  margin: 0;
`,BS=O(AS)`
  ${({theme:{colors:e}})=>z`
    padding: 0.8rem;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 99px;
    line-height: 0;
    color: ${e.black};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;O(z0)`
  border: 1px solid red;
  height: 100vh;
  opacity: 0.1;
`;O(la)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: red;
  display: block;
  text-decoration: none;
  font-size: 15px;
  line-height: 1;
`;const WS=O.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  padding: 2rem 0 2rem 1rem;
  gap: 1rem;
`,Pl=O.li`
  ${({theme:{colors:e,boxShadow:t}})=>z`
    border-radius: 99px 0 0 99px;
    background: ${e.darkGray};
    box-shadow: ${t.dark};
    width: 80%;
    & > a {
      height: 100%;
      padding: 1rem;
      color: ${e.white};
      font-weight: 500;
      display: block;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      &.active {
        border-radius: 99px 0 0 99px;
        border: 3px solid ${e.white};
        border-right: 0;
      }
    }
  `}
`,HS=O(TS)`
  ${({theme:{colors:e,boxShadow:t}})=>z`
    width: 100vw;
    position: fixed;
    left: -16px;
    margin-top: 7px;
    background-color: ${e.black};
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    box-shadow: ${t.dark};
    transition: width, height, 150ms ease;

    &[data-state='open'] {
      animation: ${IS} 150ms ease;
    }
    &[data-state='closed'] {
      animation: ${LS} 150ms ease;
    }
  `}
`,VS=O.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,GS=()=>{const e=sr(),t=e.pathname.startsWith("/pokemon"),n=e.pathname.startsWith("/pokedex");return k(MS,{children:T(Vv,{children:[k(DS,{children:T(Hn,{to:"/",children:[k("img",{src:Dw,alt:"Pokem\xF3n logo",width:40}),k("span",{children:"React PokeDex"})]})}),k(FS,{children:T(zS,{children:[k($l,{children:T(Hn,{end:!0,to:"/",children:[k(Ae,{icon:Kv,size:"2x"}),"Home"]})}),k($l,{children:T(Hn,{to:"/pokedex/1",className:n?"active":"inactive",children:[k("img",{src:Gv,alt:"",width:28}),"PokeDex"]})}),k($l,{children:T(Hn,{to:"/pokemon/1",className:t?"active":"inactive",children:[k(Ae,{icon:gf,size:"2x"}),"Pokemon Data"]})})]})}),k(YS,{})]})})},YS=()=>{const e=sr(),t=e.pathname.startsWith("/pokemon"),n=e.pathname.startsWith("/pokedex");return T(jS,{children:[k(US,{children:T(RS,{children:[k(BS,{children:k(Ae,{icon:zw,size:"xl"})}),k(z0,{children:T(WS,{children:[k(Pl,{children:k(la,{asChild:!0,children:T(Hn,{end:!0,to:"/",children:[k(Ae,{icon:Kv,size:"2x"}),"Home"]})})}),k(Pl,{children:k(la,{asChild:!0,children:T(Hn,{to:"/pokedex/1",className:n?"active":"inactive",children:[k("img",{src:Gv,alt:"",width:28}),"PokeDex"]})})}),k(Pl,{children:k(la,{asChild:!0,children:T(Hn,{to:"/pokemon/1",className:t?"active":"inactive",children:[k(Ae,{icon:gf,size:"2x"}),"Pokemon Data"]})})})]})})]})}),k(VS,{children:k(HS,{})})]})},KS=O.div`
  ${({theme:{spacing:e}})=>z`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${e.headerSpacing};
  `}
`,QS=({children:e})=>T(ui,{children:[k(GS,{}),k(KS,{children:k(Vv,{children:e})})]}),XS=O.div`
  ${({color:e,theme:{colors:t}})=>z`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid ${e||t.lightestGray};
      border-color: ${e||t.lightestGray} transparent ${e||t.lightestGray}
        transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`,zs=({color:e})=>k(XS,{color:e});function F0(e,t){return function(){return e.apply(t,arguments)}}const{toString:j0}=Object.prototype,{getPrototypeOf:Mf}=Object,Df=(e=>t=>{const n=j0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),an=e=>(e=e.toLowerCase(),t=>Df(t)===e),Fs=e=>t=>typeof t===e,{isArray:mi}=Array,tc=Fs("undefined");function JS(e){return e!==null&&!tc(e)&&e.constructor!==null&&!tc(e.constructor)&&qr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const U0=an("ArrayBuffer");function ZS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&U0(e.buffer),t}const qS=Fs("string"),qr=Fs("function"),B0=Fs("number"),W0=e=>e!==null&&typeof e=="object",eb=e=>e===!0||e===!1,ua=e=>{if(Df(e)!=="object")return!1;const t=Mf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tb=an("Date"),nb=an("File"),rb=an("Blob"),ob=an("FileList"),ib=e=>W0(e)&&qr(e.pipe),ab=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||j0.call(e)===t||qr(e.toString)&&e.toString()===t)},sb=an("URLSearchParams"),lb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function js(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),mi(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function nc(){const e={},t=(n,r)=>{ua(e[r])&&ua(n)?e[r]=nc(e[r],n):ua(n)?e[r]=nc({},n):mi(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&js(arguments[n],t);return e}const ub=(e,t,n,{allOwnKeys:r}={})=>(js(t,(o,i)=>{n&&qr(o)?e[i]=F0(o,n):e[i]=o},{allOwnKeys:r}),e),cb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),fb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},db=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Mf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mb=e=>{if(!e)return null;if(mi(e))return e;let t=e.length;if(!B0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},hb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Mf(Uint8Array)),vb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},gb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yb=an("HTMLFormElement"),xb=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Qp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wb=an("RegExp"),H0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};js(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},kb=e=>{H0(e,(t,n)=>{const r=e[n];if(!!qr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},Sb=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return mi(e)?r(e):r(String(e).split(t)),n},bb=()=>{},Eb=(e,t)=>(e=+e,Number.isFinite(e)?e:t),C={isArray:mi,isArrayBuffer:U0,isBuffer:JS,isFormData:ab,isArrayBufferView:ZS,isString:qS,isNumber:B0,isBoolean:eb,isObject:W0,isPlainObject:ua,isUndefined:tc,isDate:tb,isFile:nb,isBlob:rb,isRegExp:wb,isFunction:qr,isStream:ib,isURLSearchParams:sb,isTypedArray:hb,isFileList:ob,forEach:js,merge:nc,extend:ub,trim:lb,stripBOM:cb,inherits:fb,toFlatObject:db,kindOf:Df,kindOfTest:an,endsWith:pb,toArray:mb,forEachEntry:vb,matchAll:gb,isHTMLForm:yb,hasOwnProperty:Qp,hasOwnProp:Qp,reduceDescriptors:H0,freezeMethods:kb,toObjectSet:Sb,toCamelCase:xb,noop:bb,toFiniteNumber:Eb};function q(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V0=q.prototype,G0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{G0[e]={value:e}});Object.defineProperties(q,G0);Object.defineProperty(V0,"isAxiosError",{value:!0});q.from=(e,t,n,r,o,i)=>{const a=Object.create(V0);return C.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),q.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var Cb=typeof self=="object"?self.FormData:window.FormData;function rc(e){return C.isPlainObject(e)||C.isArray(e)}function Y0(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Xp(e,t,n){return e?e.concat(t).map(function(o,i){return o=Y0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function $b(e){return C.isArray(e)&&!e.some(rc)}const Pb=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function _b(e){return e&&C.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Us(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new(Cb||FormData),n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,E){return!C.isUndefined(E[x])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&_b(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(C.isDate(g))return g.toISOString();if(!l&&C.isBlob(g))throw new q("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(g)||C.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,x,E){let m=g;if(g&&!E&&typeof g=="object"){if(C.endsWith(x,"{}"))x=r?x:x.slice(0,-2),g=JSON.stringify(g);else if(C.isArray(g)&&$b(g)||C.isFileList(g)||C.endsWith(x,"[]")&&(m=C.toArray(g)))return x=Y0(x),m.forEach(function(h,w){!(C.isUndefined(h)||h===null)&&t.append(a===!0?Xp([x],w,i):a===null?x:x+"[]",u(h))}),!1}return rc(g)?!0:(t.append(Xp(E,x,i),u(g)),!1)}const f=[],p=Object.assign(Pb,{defaultVisitor:c,convertValue:u,isVisitable:rc});function v(g,x){if(!C.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),C.forEach(g,function(m,d){(!(C.isUndefined(m)||m===null)&&o.call(t,m,C.isString(d)?d.trim():d,x,p))===!0&&v(m,x?x.concat(d):[d])}),f.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Jp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function zf(e,t){this._pairs=[],e&&Us(e,this,t)}const K0=zf.prototype;K0.append=function(t,n){this._pairs.push([t,n])};K0.toString=function(t){const n=t?function(r){return t.call(this,r,Jp)}:Jp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ob(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q0(e,t,n){if(!t)return e;const r=n&&n.encode||Ob,o=n&&n.serialize;let i;if(o?i=o(t,n):i=C.isURLSearchParams(t)?t.toString():new zf(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Zp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const X0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nb=typeof URLSearchParams<"u"?URLSearchParams:zf,Rb=FormData,Ab=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Yt={isBrowser:!0,classes:{URLSearchParams:Nb,FormData:Rb,Blob},isStandardBrowserEnv:Ab,protocols:["http","https","file","blob","url","data"]};function Tb(e,t){return Us(e,new Yt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Yt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ib(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lb(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function J0(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&C.isArray(o)?o.length:a,l?(C.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!C.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&C.isArray(o[a])&&(o[a]=Lb(o[a])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,o)=>{t(Ib(r),o,n,0)}),n}return null}function Mb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Db=Yt.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),C.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),C.isString(i)&&l.push("path="+i),C.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Fb(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Z0(e,t){return e&&!zb(t)?Fb(e,t):t}const jb=Yt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=C.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function hi(e,t,n){q.call(this,e==null?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(hi,q,{__CANCEL__:!0});function Ub(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Bb=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wb=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&Bb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},qp=Symbol("internals"),q0=Symbol("defaults");function ko(e){return e&&String(e).trim().toLowerCase()}function ca(e){return e===!1||e==null?e:C.isArray(e)?e.map(ca):String(e)}function Hb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function em(e,t,n,r){if(C.isFunction(r))return r.call(this,t,n);if(!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function Vb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Gb(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}function fo(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}function wt(e,t){e&&this.set(e),this[q0]=t||null}Object.assign(wt.prototype,{set:function(e,t,n){const r=this;function o(i,a,s){const l=ko(a);if(!l)throw new Error("header name must be a non-empty string");const u=fo(r,l);u&&s!==!0&&(r[u]===!1||s===!1)||(r[u||a]=ca(i))}return C.isPlainObject(e)?C.forEach(e,(i,a)=>{o(i,a,t)}):o(t,e,n),this},get:function(e,t){if(e=ko(e),!e)return;const n=fo(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return Hb(r);if(C.isFunction(t))return t.call(this,r,n);if(C.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ko(e),e){const n=fo(this,e);return!!(n&&(!t||em(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function o(i){if(i=ko(i),i){const a=fo(n,i);a&&(!t||em(n,n[a],a,t))&&(delete n[a],r=!0)}}return C.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return C.forEach(this,(r,o)=>{const i=fo(n,o);if(i){t[i]=ca(r),delete t[o];return}const a=e?Vb(o):String(o).trim();a!==o&&delete t[o],t[a]=ca(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return C.forEach(Object.assign({},this[q0]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&C.isArray(n)?n.join(", "):n)}),t}});Object.assign(wt,{from:function(e){return C.isString(e)?new this(Wb(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[qp]=this[qp]={accessors:{}}).accessors,r=this.prototype;function o(i){const a=ko(i);n[a]||(Gb(r,i),n[a]=!0)}return C.isArray(e)?e.forEach(o):o(e),this}});wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);C.freezeMethods(wt.prototype);C.freezeMethods(wt);function Yb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let f=i,p=0;for(;f!==o;)p+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=c&&u-c;return v?Math.round(p*1e3/v):void 0}}function tm(e,t){let n=0;const r=Yb(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0};c[t?"download":"upload"]=!0,e(c)}}function nm(e){return new Promise(function(n,r){let o=e.data;const i=wt.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}C.isFormData(o)&&Yt.isStandardBrowserEnv&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+g))}const c=Z0(e.baseURL,e.url);u.open(e.method.toUpperCase(),Q0(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const v=wt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};Mb(function(m){n(m),l()},function(m){r(m),l()},x),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){!u||(r(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||X0;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new q(g,x.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},Yt.isStandardBrowserEnv){const v=(e.withCredentials||jb(c))&&e.xsrfCookieName&&Db.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&C.forEach(i.toJSON(),function(g,x){u.setRequestHeader(x,g)}),C.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",tm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",tm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{!u||(r(!v||v.type?new hi(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=Ub(c);if(p&&Yt.protocols.indexOf(p)===-1){r(new q("Unsupported protocol "+p+":",q.ERR_BAD_REQUEST,e));return}u.send(o||null)})}const rm={http:nm,xhr:nm},om={getAdapter:e=>{if(C.isString(e)){const t=rm[e];if(!e)throw Error(C.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!C.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:rm},Kb={"Content-Type":"application/x-www-form-urlencoded"};function Qb(){let e;return typeof XMLHttpRequest<"u"?e=om.getAdapter("xhr"):typeof process<"u"&&C.kindOf(process)==="process"&&(e=om.getAdapter("http")),e}function Xb(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const eo={transitional:X0,adapter:Qb(),transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=C.isObject(t);if(i&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o&&o?JSON.stringify(J0(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Tb(t,this.formSerializer).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Us(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Xb(t)):t}],transformResponse:[function(t){const n=this.transitional||eo.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?q.from(s,q.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Yt.classes.FormData,Blob:Yt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],function(t){eo.headers[t]={}});C.forEach(["post","put","patch"],function(t){eo.headers[t]=C.merge(Kb)});function _l(e,t){const n=this||eo,r=t||n,o=wt.from(r.headers);let i=r.data;return C.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function eg(e){return!!(e&&e.__CANCEL__)}function Ol(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hi}function im(e){return Ol(e),e.headers=wt.from(e.headers),e.data=_l.call(e,e.transformRequest),(e.adapter||eo.adapter)(e).then(function(r){return Ol(e),r.data=_l.call(e,e.transformResponse,r),r.headers=wt.from(r.headers),r},function(r){return eg(r)||(Ol(e),r&&r.response&&(r.response.data=_l.call(e,e.transformResponse,r.response),r.response.headers=wt.from(r.response.headers))),Promise.reject(r)})}function ri(e,t){t=t||{};const n={};function r(u,c){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge(u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function o(u){if(C.isUndefined(t[u])){if(!C.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function i(u){if(!C.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(C.isUndefined(t[u])){if(!C.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function s(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return C.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||o,p=f(c);C.isUndefined(p)&&f!==s||(n[c]=p)}),n}const tg="1.1.3",Ff={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ff[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const am={};Ff.transitional=function(t,n,r){function o(i,a){return"[Axios v"+tg+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new q(o(a," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!am[a]&&(am[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function Jb(e,t,n){if(typeof e!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new q("option "+i+" must be "+l,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}}const oc={assertOptions:Jb,validators:Ff},cn=oc.validators;class Qn{constructor(t){this.defaults=t,this.interceptors={request:new Zp,response:new Zp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ri(this.defaults,n);const{transitional:r,paramsSerializer:o}=n;r!==void 0&&oc.assertOptions(r,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),o!==void 0&&oc.assertOptions(o,{encode:cn.function,serialize:cn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&C.merge(n.headers.common,n.headers[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new wt(n.headers,i);const a=[];let s=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(s=s&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let u,c=0,f;if(!s){const v=[im.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,l),f=v.length,u=Promise.resolve(n);c<f;)u=u.then(v[c++],v[c++]);return u}f=a.length;let p=n;for(c=0;c<f;){const v=a[c++],g=a[c++];try{p=v(p)}catch(x){g.call(this,x);break}}try{u=im.call(this,p)}catch(v){return Promise.reject(v)}for(c=0,f=l.length;c<f;)u=u.then(l[c++],l[c++]);return u}getUri(t){t=ri(this.defaults,t);const n=Z0(t.baseURL,t.url);return Q0(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){Qn.prototype[t]=function(n,r){return this.request(ri(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(ri(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Qn.prototype[t]=n(),Qn.prototype[t+"Form"]=n(!0)});class jf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new hi(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new jf(function(o){t=o}),cancel:t}}}function Zb(e){return function(n){return e.apply(null,n)}}function qb(e){return C.isObject(e)&&e.isAxiosError===!0}function ng(e){const t=new Qn(e),n=F0(Qn.prototype.request,t);return C.extend(n,Qn.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ng(ri(e,o))},n}const it=ng(eo);it.Axios=Qn;it.CanceledError=hi;it.CancelToken=jf;it.isCancel=eg;it.VERSION=tg;it.toFormData=Us;it.AxiosError=q;it.Cancel=it.CanceledError;it.all=function(t){return Promise.all(t)};it.spread=Zb;it.isAxiosError=qb;it.formToJSON=e=>J0(C.isHTMLForm(e)?new FormData(e):e);const eE="https://pokeapi.co/api",Bs=it.create({baseURL:eE}),tE=async(e=0,t=20)=>(await Bs.get(`/v2/pokemon/?offset=${e}&limit=${t}}`)).data,Uf=async e=>(await Bs.get(`/v2/pokemon/${e}`)).data,nE=async e=>(await Bs.get(e)).data,rE=async e=>(await Bs.get(`/v2/pokemon-species/${e}`)).data,oE=O.div`
  ${({theme:{typesColors:e,boxShadow:t,colors:n},typeName:r})=>z`
    border: 2px solid ${e[r].primaryColor};
    background-color: ${e[r].secondaryColor};
    padding: 3px;
    border-radius: 99px;
    font-weight: bold;
    width: 100%;
    text-shadow: ${t.dark};
    color: ${n.white};
  `}
`,Bf=({typeName:e})=>k(oE,{typeName:e||"",children:e}),iE=Se.createContext({}),rg=!0;function aE({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:l=rg}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof s=="number"&&(u["--animation-duration"]=`${s}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof o=="string"||typeof o=="number")&&(u.borderRadius=o),i&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function jn({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:o,circle:i=!1,style:a,...s}){var l,u,c;const f=Se.useContext(iE),p={...s};for(const[h,w]of Object.entries(s))typeof w>"u"&&delete p[h];const v={...f,...p,circle:i},g={...a,...aE(v)};let x="react-loading-skeleton";n&&(x+=` ${n}`);const E=(l=v.inline)!==null&&l!==void 0?l:!1,m=[],d=Math.ceil(e);for(let h=0;h<d;h++){let w=g;if(d>e&&h===d-1){const $=(u=w.width)!==null&&u!==void 0?u:"100%",N=e%1,P=typeof $=="number"?$*N:`calc(${$} * ${N})`;w={...w,width:P}}const S=k("span",{className:x,style:w,children:"\u200C"},h);E?m.push(S):m.push(T(ui,{children:[S,k("br",{})]}))}return k("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":(c=v.enableAnimation)!==null&&c!==void 0?c:rg,children:t?m.map((h,w)=>k(t,{children:h},w)):m})}const sE=O.div`
  ${({light:e,theme:{boxShadow:t,colors:n,breakpoints:r}})=>z`
    border: ${e?"":`3px solid ${n.lightestGray}`};
    background-color: ${e?n.white:n.lightestGray};
    border-radius: 6px 36px;

    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: ${t.dark};
    @media (min-width: ${r.lg}) {
      &:hover {
        position: relative;
        transform: scale(1.1);
        z-index: 2;
      }
    }
  `}
`,lE=O.div`
  ${({light:e,theme:{colors:t}})=>z`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    text-transform: capitalize;
    position: relative;
    gap: 18px;
    background-color: ${e?t.white:""};

    & img {
      max-width: 100px;
      max-height: 100px;
    }
  `}
`,uE=O.div`
  ${({theme:{boxShadow:e,colors:t},secondary:n})=>z`
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${n};
    margin-bottom: 8px;
    color: ${t.white};
    & > h3 {
      text-shadow: ${e.dark};
    }
  `}
`,cE=O.div`
  ${({theme:{colors:e,boxShadow:t}})=>z`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 14px;
    opacity: 0.9;
    width: 35px;
    height: 35px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    padding: 5px;
    border-radius: 50%;
    color: ${e.darkGray};
    box-shadow: ${t.dark};
  `}
`,fE=O.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`,sm=O(jn)`
  border-radius: 6px 36px;
  width: 250px;
  height: 250px;
`,ic=({pokemon:e,light:t=!1})=>{var a;const[n,r]=y.exports.useState();y.exports.useEffect(()=>{(async()=>{const l=await Uf(e);r(l)})()},[e]);const{typesColors:o,colors:i}=lr();return k(sE,{light:t,children:n?k(yn,{to:`/pokemon/${n.id}`,children:T(lE,{light:t,children:[T(uE,{secondary:(a=o[n.types[0].type.name])==null?void 0:a.secondaryColor,children:[T(cE,{children:["#",n.id]}),k("h3",{children:n.species.name})]}),k("img",{src:n.sprites.other.dream_world.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name}),k(fE,{children:n.types.map(s=>k(Bf,{typeName:s.type.name},s.type.name))})]})}):k(zs,{color:t?i.black:""})})},dE=O.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 50px 0;
`,pE=({pokemonList:e})=>k(dE,{children:e.map((t,n)=>k(ic,{pokemon:t.name},`${t.name}-${n}`))}),mE=20;function hE(e){const[t,n]=y.exports.useState(!0),[r,o]=y.exports.useState(!1),[i,a]=y.exports.useState([]),s=y.exports.useCallback(async()=>{try{n(!0);const l=await tE(e,mE);a(u=>[...u,...l.results]),n(!1)}catch(l){o(!!l)}},[e]);return y.exports.useEffect(()=>{s()},[s,e]),{loading:t,error:r,allPokemonList:i}}const vE=O.div`
  ${({theme:{spacing:e}})=>z`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${e.headerSpacing} - 76px);
    margin: 8rem 0;
    border-radius: 8px;
    position: relative;
  `}
`,gE=O.div`
  ${({theme:{colors:e,spacing:t}})=>z`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: calc(100vh - ${t.headerSpacing} - 76px);
    background-color: ${e.lightGray};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${e.darkGray};
    padding-bottom: 3rem;
    padding-top: 6rem;
  `}
`,yE=O.div`
  ${({theme:{colors:e,boxShadow:t}})=>z`
    background-color: ${e.white};
    border-radius: 16px;
    max-width: 37rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    box-shadow: ${t.dark};
    & > p {
      color: ${e.darkGray};
      font-weight: 500;
      font-size: 1.1rem;
    }
  `}
`,xE=20;function wE(){const[e,t]=y.exports.useState(0),{allPokemonList:n,loading:r}=hE(e),o=y.exports.useRef(null),i=y.exports.useCallback(a=>{a[0].isIntersecting&&t(l=>l+xE)},[]);return y.exports.useEffect(()=>{const a={root:null,rootMargin:"20px",threshold:0},s=new IntersectionObserver(i,a);o.current&&s.observe(o.current)},[i]),T(vE,{children:[k(yE,{children:k("p",{children:"Here's a list of Pokemon from every generation. Click on any of them to get information about their type, stats, and evolution chain!"})}),T(gE,{children:[!!(n!=null&&n.length)&&k(pE,{pokemonList:n}),k("div",{ref:o}),r&&k(zs,{})]})]})}const kE=O.div`
  ${({theme:{colors:e}})=>z`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`,po=O.div`
  ${({theme:{colors:e}})=>z`
    position: relative;
    background: ${e.black};
  `}
`,mo=O.div`
  ${({theme:{colors:e}})=>z`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${e.darkGray};
    z-index: 2;
  `}
`,ho=O.div`
  ${({theme:{colors:e}})=>z`
    width: 25px;
    height: 25px;
    background: ${e.black};
    position: relative;
    right: 4px;
    top: 4px;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-left: 3px solid ${e.black};
      left: 2px;
      top: -4px;
      transform: rotate(45deg);
    }
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 4px solid ${e.black};
      right: -2px;
      bottom: -1px;
      transform: rotate(90deg);
    }
  `}
`,SE=O.div`
  ${({theme:{colors:e}})=>z`
    display: flex;
  `}
`,bE=()=>{const{id:e}=of(),t=Number(e),n=t>1?t-1:1,r=t+1;return T(kE,{children:[k(yn,{to:`/pokedex/${n}`,children:T(po,{children:[k(mo,{}),k(ho,{})]})}),T(SE,{children:[k(yn,{to:`/pokedex/${n}`,children:T(po,{children:[k(mo,{}),k(ho,{})]})}),T(po,{children:[k(mo,{}),k(ho,{})]}),k(yn,{to:`/pokedex/${r}`,children:T(po,{children:[k(mo,{}),k(ho,{})]})})]}),k(yn,{to:`/pokedex/${r}`,children:T(po,{children:[k(mo,{}),k(ho,{})]})})]})},EE=O.div`
  position: relative;
`,CE=O.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`,$E=O.div`
  ${({theme:{colors:e}})=>z`
    position: relative;
    background: ${e.black};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 4px;
      background: ${e.darkGray};
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
  `}
`,PE=O.div`
  display: flex;
  gap: 8px;
`,lm=O.div`
  ${({theme:{colors:e},color:t})=>z`
    background: ${t};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${e.black};
    border-left: 1px solid ${e.black};
  `}
`,_E=O.div`
  ${({theme:{colors:e}})=>z`
    position: absolute;
    top: 50px;
    left: 40px;
    background: ${e.green};
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 12px 0;
    border-radius: 8px;
    gap: 8px;
    text-transform: capitalize;
    border-top: 1px solid ${e.mediumGray};
    border-right: 1px solid ${e.mediumGray};
    padding: 12px;
  `}
`,OE=({types:e})=>{const{colors:t}=lr();return T(EE,{children:[T(CE,{children:[k($E,{}),T(PE,{children:[k(lm,{color:t.red}),k(lm,{color:t.mediumBlue})]}),k(bE,{})]}),k(_E,{children:e.map(n=>k(Bf,{typeName:n.type.name},n.type.name))})]})},NE=O.div`
  ${({theme:{colors:e}})=>z`
    width: 370px;
    height: 460px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0 15px 15px 0;
  `}
`,RE=O.div`
  ${({theme:{colors:e}})=>z`
    background-color: ${e.pokedexMedium};
    width: 150px;
    height: 60px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 45px solid transparent;
      border-bottom: 45px solid transparent;
      border-left: 45px solid ${e.pokedexMedium};
      right: -35px;
      top: 0;
      transform: rotate(135deg);
    }
  `}
`,AE=O.div`
  ${({theme:{colors:e}})=>z`
    background-color: ${e.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`,og=({className:e,children:t})=>T(NE,{className:e,children:[k(RE,{}),k(AE,{children:t})]}),TE=O.div`
  ${({theme:{colors:e}})=>z`
    border: 8px solid ${e.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`,IE=O.div`
  ${({theme:{colors:e}})=>z`
    border-radius: 8px;
    background-color: ${e.pokedexGreen};
    border-top: 1px solid ${e.mediumGray};
    border-right: 1px solid ${e.mediumGray};
    color: ${e.darkGray};
    font-size: 12px;
    font-weight: 600;
    padding: 12px 24px;
  `}
`,LE=O.div`
  ${({theme:{colors:e}})=>z`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`,ME=({pokemon:e})=>k(TE,{children:k(IE,{children:e.stats.map(t=>T(LE,{children:[k("div",{children:t.stat.name},t.stat.name),k("div",{children:t.base_stat},`${t.stat.name}-${t.base_stat}`)]},t.stat.name))})}),DE=O.div`
  ${({theme:{colors:e}})=>z`
    position: relative;
  `}
`,zE=O(og)`
  ${({theme:{colors:e}})=>z`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`,FE=O.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,um=O.div`
  ${({theme:{colors:e}})=>z`
    background: ${e.green};
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    text-transform: none;
    border-top: 1px solid ${e.mediumGray};
    border-right: 1px solid ${e.mediumGray};
    font-weight: 600;
  `}
`,jE=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`,UE=O.span`
  ${({theme:{colors:e}})=>z`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    transform: scale(0.7);
    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 8px;
      width: 55px;
      height: 55px;
      background: ${e.yellow};
      border-radius: 50%;
      border: solid ${e.darkYellow};
      border-width: 0px 3px 8px 7px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${e.white};
      top: 15px;
      opacity: 0.8;
    }
  `}
`,BE=({pokemon:e})=>T(DE,{children:[k(og,{children:T(ui,{children:[k(ME,{pokemon:e}),T(jE,{children:[T(FE,{children:[T(um,{children:[" HEIGHT - ",e.height," dm"]}),T(um,{children:[" WEIGHT - ",e.weight," hg"]})]}),k(UE,{})]})]})}),k(zE,{})]}),WE=O.div`
  ${({theme:{breakpoints:e}})=>z`
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;
    overflow: hidden;
    @media (max-width: ${e.xs}) {
      scale: 90%;
    }
  `}
`,HE=O.div`
  ${({theme:{colors:e}})=>z`
    background-color: ${e.pokedexMedium};
    width: 400px;
    height: 550px;
    border-radius: 35px 10px 18px 35px;
    border-left: 15px solid ${e.pokedexDark};
    border-bottom: 10px solid ${e.pokedexDark};
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      border: 1px solid ${e.pokedexDarkest};
      height: 520px;
      width: 45px;
      position: absolute;
      z-index: 3;
      top: 20px;
      right: 0;
      border-radius: 15px 15px 0 0;
      background: linear-gradient(
        90deg,
        ${e.pokedexLight} 0%,
        ${e.pokedexMedium} 35%,
        ${e.pokedexDark} 100%
      );
    }
    &::after {
      content: '';
      background-color: ${e.pokedexDarkest};
      position: absolute;
      bottom: -10px;
      right: 0;
      height: 20px;
      width: 47px;
      border-radius: 50%;
      z-index: 3;
    }
  `}
`,VE=O.div`
  ${({theme:{colors:e}})=>z`
    position: relative;
    width: 150px;
    height: 100px;
    background: ${e.pokedexLight};
    border-top-left-radius: 35px;
    z-index: 2;
    margin-bottom: 30px;

    &::before {
      content: "";
      background: ${e.pokedexLight};
      width: 100px;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotateZ(45deg);
      transform-origin: bottom right;
    }
    & > div  {
      border-top-left-radius: 35px;
      border-top-right-radius: 15px;
      content: "";
      background: ${e.pokedexLight};
      width: 385px;
      height: 50px;
      z-index:1;
      
  `}
`,GE=O.span`
  ${({theme:{colors:e}})=>z`
    position: absolute;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: ${e.white};
    top: 0;
    left: 0;
    margin: 10px;
    transform: scale(0.9);
    &::before {
      content: '';
      position: absolute;
      top: 9px;
      left: 8px;
      width: 55px;
      height: 55px;
      background: ${e.lightBlue};
      border-radius: 50%;
      border: solid ${e.mediumBlue};
      border-width: 0px 3px 8px 7px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${e.white};
      top: 10px;
      opacity: 0.8;
    }
  `}
`,YE=O.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`,Nl=O.span`
  ${({theme:{colors:e},color:t})=>z`
    position: relative;
    background: ${t};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid ${e.mediumGray};
    border-width: 0 0 2px 1px;

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${e.white};
      top: 1px;
      right: 3px;
      opacity: 0.8;
    }
  `}
`,KE=O.div`
  ${({theme:{colors:e}})=>z`
    position: absolute;
    width: 150px;
    height: 100px;
    background: ${e.pokedexDarkest};
    border-top-left-radius: 35px;
    top: 20px;
    z-index:1;
    top: 12px;

    &::before {
      content: "";
      background: ${e.pokedexDarkest};
      width: 100px;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotateZ(45deg);
      transform-origin: bottom right;
    }
    & > div  {
      border-top-left-radius: 35px;
      border-top-right-radius: 15px;
      content: "";
      background: ${e.pokedexDarkest};
      width: 385px;
      height: 50px;
      z-index:1;
      
  `}
`,QE=O.div`
  position: relative;
`,XE=O.div`
  ${({theme:{colors:e}})=>z`
    background: ${e.lightestGray};
    padding: 30px;
    width: 250px;
    height: 200px;
    margin-left: 45px;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  `}
`,JE=O.div`
  ${({theme:{colors:e}})=>z`
      position: absolute;
      margin-left: 45px;
      z-index: 1;
      left: -7px;
      top: 0px;
      background: ${e.mediumGray};
      width: 257px;
      height: 207px;
      border-radius: 8px 12px 8px 12px;
    }
  `}
`,ZE=O.div`
  ${({theme:{colors:e}})=>z`
  width: 100%;
  height: 100%;   
  border-radius: 8px;
  background-color: ${e.pokedexGreen};
  border-top: 1px solid ${e.mediumGray};
  border-right:1px solid ${e.mediumGray};
  color: ${e.darkGray};
  & img {
    max-width: 60%;
    max-height: 60%;
  }
  & p {
    text-transform: uppercase;
    font-weight: bold;
  }
    }
  `}
`,qE=({pokemon:e})=>{const{colors:t}=lr();return T(WE,{children:[T(HE,{children:[T(VE,{children:[k("div",{}),k(GE,{}),T(YE,{children:[k(Nl,{color:t.red}),k(Nl,{color:t.yellow}),k(Nl,{color:t.green})]})]}),k(KE,{children:k("div",{})}),T(QE,{children:[k(XE,{children:T(ZE,{children:[T("p",{children:["#",e.id]}),k("img",{src:e.sprites.front_default,alt:e.name}),k("p",{children:e.name})]})}),k(JE,{})]}),k(OE,{types:e.types})]}),k(BE,{pokemon:e})]})},eC=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  border-radius: 8px;
  position: relative;
`,tC=O.div`
  ${({theme:{colors:e,spacing:t,breakpoints:n}})=>z`
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${t.headerSpacing} - (76px + 16rem;));
    background-color: ${e.lightGray};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${e.darkGray};
    padding-bottom: 3rem;
    padding-top: 6rem;
    padding: 6rem;
    @media (max-width: ${n.lg}) {
      padding: 6rem 1rem;
    }
  `}
`,nC=O.div`
  ${({theme:{colors:e,boxShadow:t}})=>z`
    background-color: ${e.white};
    border-radius: 16px;
    max-width: 37rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    box-shadow: ${t.dark};
    & > p {
      color: ${e.darkGray};
      font-weight: 500;
      font-size: 1.1rem;
    }
  `}
`;O.div`
  ${({theme:{colors:e}})=>z`
    background-color: ${e.white};
    width: 450px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${e.black};
    margin: 0 auto;
    & > img {
      width: 250px;
      max-height: 80%;
    }
  `}
`;const rC=O.span`
  align-self: flex-end;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  font-size: 0.8rem;
  & > svg {
    margin-top: 0.4rem;
  }
`,oC=()=>{const[e,t]=y.exports.useState(!1),[n,r]=y.exports.useState(),o=of(),i=async()=>{t(!0);const a=await Uf(Number(o.id));r(a),t(!1)};return y.exports.useEffect(()=>{i()},[o.id]),T(eC,{children:[k(nC,{children:k("p",{children:"Here's a classic way to view Pokemon stats. Move from one Pokemon to the next clicking the direction keys on the pokedex."})}),k(tC,{children:e?k(zs,{}):n?k(qE,{pokemon:n}):k("div",{})}),T(rC,{children:[k(Ae,{icon:gf,size:"1x"}),"This Pokedex was designed entirely using HTML and CSS code."]})]})},iC=O.div`
  padding: 32px;
`,aC=O.h2`
  ${({theme:{colors:e}})=>z`
    color: ${e.darkBlue};
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
  `}
`,ac=O.div`
  ${({theme:{breakpoints:e}})=>z`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,ig=O.div`
  ${({theme:{breakpoints:e}})=>z`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,ag=O.span`
  ${({theme:{breakpoints:e}})=>z`
    margin: 1rem;
    @media (max-width: ${e.lg}) {
      transform: rotate(90deg);
    }
  `}
`,sC=O.div`
  ${({hasManyEvolutions:e,showShadow:t,theme:{boxShadow:n}})=>z`
    ${t&&"padding: 24px;"}
    display: flex;
    flex-direction: ${e?"row":"column"};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 32px;
    box-shadow: ${t?n.dark:""};
  `}
`,lC=({url:e})=>{const[t,n]=y.exports.useState(!1),[r,o]=y.exports.useState(),i=r==null?void 0:r.filter(p=>p.canEvolve),a=r==null?void 0:r.filter(p=>!p.canEvolve),s=(p,v)=>p.includes("https://pokeapi.co/api/v2/pokemon-species/")?p.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/",""):v,l=y.exports.useMemo(()=>[],[]),u=y.exports.useCallback(p=>{if(!p.evolves_to.length){l.push({id:s(p.species.url,p.species.name),name:p.species.name,canEvolve:!1}),o(l);return}l.length||l.push({id:s(p.species.url,p.species.name),name:p.species.name,canEvolve:!0}),p.evolves_to.forEach(v=>{if(!v.evolves_to.length){l.push({id:s(v.species.url,v.species.name),name:v.species.name,canEvolve:!1}),o(l);return}l.push({id:s(v.species.url,v.species.name),name:v.species.name,canEvolve:!0}),o(l),u(v)})},[l]),c=y.exports.useCallback(async()=>{n(!0);const p=await nE(e);u(p.chain),n(!1)},[e,u]),{colors:f}=lr();return y.exports.useEffect(()=>{c()},[e,c]),k(iC,{children:t?k(zs,{}):T(ui,{children:[k(aC,{children:"EVOLUTION CHAIN:"}),T(ac,{children:[i!=null&&i.length?i.map(p=>T(ig,{children:[k(ic,{pokemon:p.id,light:!0},p.name),p.canEvolve&&k(ag,{children:k(Ae,{icon:Yv,color:f.black,size:"xl"})})]},p.name)):null,a!=null&&a.length?k(sC,{showShadow:a.length>1,hasManyEvolutions:a.length>3,children:a.map(p=>k("div",{children:k(ic,{pokemon:p.id,light:!0},p.name)},p.name))}):null]})]})})},uC=()=>{const{colors:e}=lr();return k(ac,{children:T(ac,{children:[T(ig,{children:[k(sm,{baseColor:e.lightGray}),k(ag,{children:k(Ae,{icon:Yv,color:e.mediumGray,size:"xl"})})]}),k(sm,{baseColor:e.lightGray})]})})},cC=O.div`
  ${({theme:{boxShadow:e,colors:t}})=>z`
    box-shadow: ${e.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${t.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`,fC=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dC=O.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`,pC=O.div`
  margin-bottom: -3px;
`,mC=O.div`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`,hC=O.div`
  ${({value:e,theme:{colors:t}})=>z`
    height: 100%;
    display: block;
    background-color: ${t.mediumBlue};
    color: ${t.white};
    font-size: 0.875rem;
    line-height: 20px;
    padding-right: 10px;
    font-weight: bold;
    text-align: end;
    border-radius: 15px;
    animation: ${"widthAnimation"+e} 1s ease forwards;
    @keyframes ${"widthAnimation"+e} {
      from {
        width: 0%;
      }
      to {
        width: ${e<100?e:100}%;
      }
    }
  `}
`,vC=({stats:e})=>T(cC,{children:[k("h3",{children:"Stats"}),k(fC,{children:e.map(t=>T(dC,{children:[k(pC,{children:t.stat.name.toUpperCase()}),k(mC,{value:t.base_stat,children:k(hC,{value:t.base_stat,children:t.base_stat})})]},t.stat.name))})]}),sg=O.div`
  ${({theme:{spacing:e}})=>z`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${e.headerSpacing} - 76px);
    margin: 38px 10px;
    border-radius: 8px;
    overflow: hidden;
  `}
`,lg=O.div`
  ${({theme:{colors:e,spacing:t}})=>z`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: calc(100vh - ${t.headerSpacing} - 76px);
    background-color: ${e.mediumGray};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${e.darkGray};
    padding-bottom: 3rem;
  `}
`,ug=O.div`
  ${({theme:{colors:e}})=>z`
    min-width: 80%;
    min-height: 58rem;
    background: ${e.lightestGray};
    padding: 4rem;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  `}
`,cg=O.div`
  ${({theme:{breakpoints:e}})=>z`
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: space-around;
    align-items: stretch;

    @media (max-width: ${e.md}) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  `}
`,fg=O.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-around;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,gC=O.p`
  ${({theme:{colors:e,breakpoints:t}})=>z`
    width: 300px;
    padding: 2rem;
    border-radius: 8px;
    background: ${e.lightGray};
    font-weight: 500;
    @media (max-width: ${t.md}) {
      margin-bottom: 1rem;
    }
  `}
`,dg=O.div`
  ${({type:e,theme:{colors:t,typesColors:n}})=>z`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    background-color: ${n[e].primaryColor};
    filter: saturate(60%);
    color: ${t.black};
    align-items: center;
    min-height: 150px;
    position: relative;
    margin-bottom: 6rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`,Ya=O.div`
  ${({theme:{colors:e,breakpoints:t}})=>z`
    color: ${e.lightestGray};
    font-weight: 500;
    border: 2px solid ${e.darkBlue};
    background: ${e.darkBlue};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 99px;
    width: 200px;
    height: 3rem;
    padding: 0 12px;
    & > p {
      flex: 1;
    }
    @media (max-width: ${t.md}) {
      display: none;
    }
  `}
`,cm=O.div`
  ${({isRight:e=!1,theme:{colors:t,breakpoints:n}})=>z`
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.darkBlue};
    border-radius: 99px;
    position: absolute;
    top: 8rem;
    ${e?"right: 0.2rem;":"left: 0.2rem;"}
    @media (min-width: ${n.md}) {
      display: none;
    }
  `}
`,pg=O.div`
  ${({type:e,theme:{colors:t,typesColors:n,boxShadow:r}})=>z`
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 3rem;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 35px;
    border-radius: 50%;
    background: ${t.lightestGray};
    border: 16px solid;
    border-radius: 50%;
    border-color: ${n[e].primaryColor} ${t.mediumGray} ${t.mediumGray}
      ${n[e].primaryColor};
    transform: rotate(45deg);
    box-shadow: ${r.dark};

    & img {
      transform: rotate(-45deg);
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  `}
`,mg=O.h1`
  font-family: 'Lato', sans-serif;
`,fm=O(jn)`
  border-radius: 99px;
`,yC=()=>{var u;const[e,t]=y.exports.useState(),[n,r]=y.exports.useState(),[o,i]=y.exports.useState(!1),a=of(),s=y.exports.useCallback(async()=>{if(a!=null&&a.id){i(!0);const c=await rE(a.id),f=await Uf(a.id);t(c),r(f),i(!1)}},[a.id]),{colors:l}=lr();return y.exports.useEffect(()=>{s(),window.scrollTo(0,0)},[a.id,s]),T(sg,{children:[o&&k(xC,{}),!o&&a.id&&n?T(lg,{children:[T(dg,{type:n.types[0].type.name,children:[T(yn,{to:`/pokemon/${Number(n==null?void 0:n.id)>1?Number(n==null?void 0:n.id)-1:1}`,children:[T(Ya,{children:[k(Ae,{icon:Lu}),k("p",{children:"PREV POKEMON"})]}),k(cm,{children:k(Ae,{icon:Lu,size:"2x",color:l.white})})]}),k(pg,{type:n.types[0].type.name,children:k("img",{src:n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name})}),T(yn,{to:`/pokemon/${Number(n.id)+1}`,children:[T(Ya,{children:[k("p",{children:"NEXT POKEMON"}),k(Ae,{icon:Iu})]}),k(cm,{isRight:!0,children:k(Ae,{icon:Iu,size:"2x",color:l.white})})]})]}),T(mg,{children:["#",e==null?void 0:e.id," ",e==null?void 0:e.name.toUpperCase()]}),T(ug,{children:[T(cg,{children:[T(fg,{children:[k(gC,{children:(u=e==null?void 0:e.flavor_text_entries.find(c=>c.language.name==="en"))==null?void 0:u.flavor_text.replace(/\f/g," ")}),k("div",{children:n.types.map(c=>k(Bf,{typeName:c.type.name},c.type.name))})]}),k(vC,{stats:n.stats})]}),e?k(lC,{url:e==null?void 0:e.evolution_chain.url}):null]})]}):null]})},xC=()=>{const{colors:e}=lr();return k(sg,{children:T(lg,{children:[T(dg,{type:"normal",children:[T(Ya,{children:[k(Ae,{icon:Lu}),k("p",{children:"PREV POKEMON"})]}),k(pg,{type:"normal",children:k(jn,{width:200,height:200,circle:!0,baseColor:e.lightGray})}),T(Ya,{children:[k("p",{children:"NEXT POKEMON"}),k(Ae,{icon:Iu})]})]}),k(mg,{children:k(jn,{width:180,baseColor:e.lightGray,height:45})}),T(ug,{children:[T(cg,{children:[T(fg,{children:[k("div",{children:k(jn,{width:300,height:150,baseColor:e.lightGray})}),T("div",{children:[k(fm,{width:300,height:35,baseColor:e.lightGray}),k(fm,{width:300,height:35,baseColor:e.lightGray})]})]}),k(jn,{width:330,height:330,baseColor:e.lightGray})]}),k(jn,{width:250,height:35,baseColor:e.lightGray}),k(uC,{})]})]})})},wC=Mw`
  * {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
    color: ${e=>e.theme.colors.white};
    background-color: ${e=>e.theme.colors.darkGray};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }
`,kC={colors:{white:"#F3F4F6",lightestGray:"#F3F4F6",lightGray:"#D1D5DB",mediumGray:"#6B7280",darkGray:"#1F2937",black:"#111827",lightBlue:"#7DD3FC",mediumBlue:"#0284C7",darkBlue:"#075985",green:"#55ab62",yellow:"#feee6d",mediumYellow:"#c7a400",darkYellow:"#9f8a0d",red:"#e5092e",pokedexGreen:"#bad8a8",pokedexLight:"#ce1131",pokedexMedium:"#bd0f33",pokedexDark:"#941828",pokedexDarkest:"#810a1e"},breakpoints:{xs:"390px",sm:"480px",md:"768px",lg:"1024px",xl:"1440px"},spacing:{headerSpacing:"75px"},boxShadow:{dark:"0 0 6px rgba(0, 0, 0, 0.3)",light:"0 0 4px rgba(0, 0, 0, 0.1)"},typesColors:{normal:{primaryColor:"#A8A878",secondaryColor:"#6D6D4E"},fighting:{primaryColor:"#C03028",secondaryColor:"#D67873"},flying:{primaryColor:"#A890F0",secondaryColor:"#6D5E9C"},poison:{primaryColor:"#A040A0",secondaryColor:"#682A68"},ground:{primaryColor:"#E0C068",secondaryColor:"#927D44"},rock:{primaryColor:"#B8A038",secondaryColor:"#786824"},bug:{primaryColor:"#A8B820",secondaryColor:"#6D7815"},ghost:{primaryColor:"#705898",secondaryColor:"#493963"},steel:{primaryColor:"#B8B8D0",secondaryColor:"#787887"},fire:{primaryColor:"#F08030",secondaryColor:"#9C531F"},water:{primaryColor:"#6890F0",secondaryColor:"#445E9C"},grass:{primaryColor:"#78C850",secondaryColor:"#4E8234"},electric:{primaryColor:"#F8D030",secondaryColor:"#A1871F"},psychic:{primaryColor:"#F85888",secondaryColor:"#A13959"},ice:{primaryColor:"#98D8D8",secondaryColor:"#638D8D"},dragon:{primaryColor:"#7038F8",secondaryColor:"#4924A1"},dark:{primaryColor:"#705848",secondaryColor:"#49392F"},fairy:{primaryColor:"#EE99AC",secondaryColor:"#9B6470"},unknown:{primaryColor:"#68A090",secondaryColor:"#44685E"},shadow:{primaryColor:"#705898",secondaryColor:"#493963"}}},SC="/pokedex/";function bC(){return T(Iw,{theme:kC,children:[k(zx,{basename:SC,children:k(QS,{children:k(Tx,{children:T(cr,{path:"/",children:[k(cr,{index:!0,element:k(wE,{})}),k(cr,{path:"pokedex/:id",element:k(oC,{})}),k(cr,{path:"pokemon/:id",element:k(yC,{})}),k(cr,{path:"*",element:k("div",{children:"Not found"})})]})})})}),k(wC,{})]})}Rl.createRoot(document.getElementById("root")).render(k(bC,{}));
