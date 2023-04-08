function px(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function bv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),hx=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),vx=Symbol.for("react.strict_mode"),gx=Symbol.for("react.profiler"),yx=Symbol.for("react.provider"),xx=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),bx=Symbol.for("react.suspense"),$x=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),Ep=Symbol.iterator;function Cx(e){return e===null||typeof e!="object"?null:(e=Ep&&e[Ep]||e["@@iterator"],typeof e=="function"?e:null)}var $v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,Cv={};function go(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||$v}go.prototype.isReactComponent={};go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ev(){}Ev.prototype=go.prototype;function Df(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||$v}var Ff=Df.prototype=new Ev;Ff.constructor=Df;Sv(Ff,go.prototype);Ff.isPureReactComponent=!0;var kp=Array.isArray,kv=Object.prototype.hasOwnProperty,Lf={current:null},Pv={key:!0,ref:!0,__self:!0,__source:!0};function Ov(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)kv.call(t,r)&&!Pv.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Fi,type:e,key:i,ref:a,props:o,_owner:Lf.current}}function Ex(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function kx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pp=/\/+/g;function nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kx(""+e.key):t.toString(36)}function Ma(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fi:case hx:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+nu(a,0):r,kp(o)?(n="",e!=null&&(n=e.replace(Pp,"$&/")+"/"),Ma(o,t,n,"",function(u){return u})):o!=null&&(zf(o)&&(o=Ex(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Pp,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",kp(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+nu(i,s);a+=Ma(i,t,n,l,o)}else if(l=Cx(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+nu(i,s++),a+=Ma(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Zi(e,t,n){if(e==null)return e;var r=[],o=0;return Ma(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Px(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},Ia={transition:null},Ox={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Lf};ae.Children={map:Zi,forEach:function(e,t,n){Zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zi(e,function(){t++}),t},toArray:function(e){return Zi(e,function(t){return t})||[]},only:function(e){if(!zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=go;ae.Fragment=mx;ae.Profiler=gx;ae.PureComponent=Df;ae.StrictMode=vx;ae.Suspense=bx;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sv({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Lf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)kv.call(t,l)&&!Pv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Fi,type:e.type,key:o,ref:i,props:r,_owner:a}};ae.createContext=function(e){return e={$$typeof:xx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yx,_context:e},e.Consumer=e};ae.createElement=Ov;ae.createFactory=function(e){var t=Ov.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:wx,render:e}};ae.isValidElement=zf;ae.lazy=function(e){return{$$typeof:Sx,_payload:{_status:-1,_result:e},_init:Px}};ae.memo=function(e,t){return{$$typeof:$x,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Ia.transition;Ia.transition={};try{e()}finally{Ia.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return it.current.useCallback(e,t)};ae.useContext=function(e){return it.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return it.current.useDeferredValue(e)};ae.useEffect=function(e,t){return it.current.useEffect(e,t)};ae.useId=function(){return it.current.useId()};ae.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return it.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};ae.useRef=function(e){return it.current.useRef(e)};ae.useState=function(e){return it.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return it.current.useTransition()};ae.version="18.2.0";(function(e){e.exports=ae})(d);const le=bv(d.exports),rs=px({__proto__:null,default:le},[d.exports]);var Gu={},yo={exports:{}},yt={},Rv={exports:{}},_v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var j=T.length;T.push(A);e:for(;0<j;){var K=j-1>>>1,I=T[K];if(0<o(I,A))T[K]=A,T[j]=I,j=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],j=T.pop();if(j!==A){T[0]=j;e:for(var K=0,I=T.length,z=I>>>1;K<z;){var U=2*(K+1)-1,Q=T[U],E=U+1,G=T[E];if(0>o(Q,j))E<I&&0>o(G,Q)?(T[K]=G,T[E]=j,K=E):(T[K]=Q,T[U]=j,K=U);else if(E<I&&0>o(G,j))T[K]=G,T[E]=j,K=E;else break e}}return A}function o(T,A){var j=T.sortIndex-A.sortIndex;return j!==0?j:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,p=3,h=!1,m=!1,y=!1,$=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function w(T){if(y=!1,x(T),!m)if(n(l)!==null)m=!0,$e(S);else{var A=n(u);A!==null&&ge(w,A.startTime-T)}}function S(T,A){m=!1,y&&(y=!1,g(P),P=-1),h=!0;var j=p;try{for(x(A),f=n(l);f!==null&&(!(f.expirationTime>A)||T&&!X());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var I=K(f.expirationTime<=A);A=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(l)&&r(l),x(A)}else r(l);f=n(l)}if(f!==null)var z=!0;else{var U=n(u);U!==null&&ge(w,U.startTime-A),z=!1}return z}finally{f=null,p=j,h=!1}}var C=!1,k=null,P=-1,_=5,D=-1;function X(){return!(e.unstable_now()-D<_)}function J(){if(k!==null){var T=e.unstable_now();D=T;var A=!0;try{A=k(!0,T)}finally{A?Z():(C=!1,k=null)}}else C=!1}var Z;if(typeof v=="function")Z=function(){v(J)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ne=oe.port2;oe.port1.onmessage=J,Z=function(){ne.postMessage(null)}}else Z=function(){$(J,0)};function $e(T){k=T,C||(C=!0,Z())}function ge(T,A){P=$(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,$e(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var j=p;p=A;try{return T()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var j=p;p=T;try{return A()}finally{p=j}},e.unstable_scheduleCallback=function(T,A,j){var K=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?K+j:K):j=K,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,T={id:c++,callback:A,priorityLevel:T,startTime:j,expirationTime:I,sortIndex:-1},j>K?(T.sortIndex=j,t(u,T),n(l)===null&&T===n(u)&&(y?(g(P),P=-1):y=!0,ge(w,j-K))):(T.sortIndex=I,t(l,T),m||h||(m=!0,$e(S))),T},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(T){var A=p;return function(){var j=p;p=A;try{return T.apply(this,arguments)}finally{p=j}}}})(_v);(function(e){e.exports=_v})(Rv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=d.exports,gt=Rv.exports;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tv=new Set,ui={};function Er(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(ui[e]=t,e=0;e<t.length;e++)Tv.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,Rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Rp={};function _x(e){return Ku.call(Rp,e)?!0:Ku.call(Op,e)?!1:Rx.test(e)?Rp[e]=!0:(Op[e]=!0,!1)}function Ax(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tx(e,t,n,r){if(t===null||typeof t>"u"||Ax(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function Uf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jf,Uf);Ye[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jf,Uf);Ye[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jf,Uf);Ye[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bf(e,t,n,r){var o=Ye.hasOwnProperty(t)?Ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tx(t,n,o,r)&&(n=null),r||o===null?_x(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),_p=Symbol.iterator;function _o(e){return e===null||typeof e!="object"?null:(e=_p&&e[_p]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,ru;function Bo(e){if(ru===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ru=t&&t[1]||""}return`
`+ru+e}var ou=!1;function iu(e,t){if(!e||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bo(e):""}function Nx(e){switch(e.tag){case 5:return Bo(e.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return e=iu(e.type,!1),e;case 11:return e=iu(e.type.render,!1),e;case 1:return e=iu(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fr:return"Fragment";case Dr:return"Portal";case Yu:return"Profiler";case Wf:return"StrictMode";case qu:return"Suspense";case Xu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mv:return(e.displayName||"Context")+".Consumer";case Nv:return(e._context.displayName||"Context")+".Provider";case Hf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vf:return t=e.displayName||null,t!==null?t:Ju(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return Ju(e(t))}catch{}}return null}function Mx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(t);case 8:return t===Wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ix(e){var t=Dv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ta(e){e._valueTracker||(e._valueTracker=Ix(e))}function Fv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zu(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ap(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lv(e,t){t=t.checked,t!=null&&Bf(e,"checked",t,!1)}function ec(e,t){Lv(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tc(e,t.type,n):t.hasOwnProperty("defaultValue")&&tc(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tc(e,t,n){(t!=="number"||os(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wo=Array.isArray;function Jr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Np(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Wo(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function zv(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var na,Uv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(e){Dx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yo[t]=Yo[e]})});function Bv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yo.hasOwnProperty(e)&&Yo[e]?(""+t).trim():t+"px"}function Wv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Bv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Fx=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(Fx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ic(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ac=null;function Qf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sc=null,Zr=null,eo=null;function Ip(e){if(e=ji(e)){if(typeof sc!="function")throw Error(N(280));var t=e.stateNode;t&&(t=nl(t),sc(e.stateNode,e.type,t))}}function Hv(e){Zr?eo?eo.push(e):eo=[e]:Zr=e}function Vv(){if(Zr){var e=Zr,t=eo;if(eo=Zr=null,Ip(e),t)for(e=0;e<t.length;e++)Ip(t[e])}}function Qv(e,t){return e(t)}function Gv(){}var au=!1;function Kv(e,t,n){if(au)return e(t,n);au=!0;try{return Qv(e,t,n)}finally{au=!1,(Zr!==null||eo!==null)&&(Gv(),Vv())}}function fi(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var lc=!1;if(nn)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){lc=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{lc=!1}function Lx(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var qo=!1,is=null,as=!1,uc=null,zx={onError:function(e){qo=!0,is=e}};function jx(e,t,n,r,o,i,a,s,l){qo=!1,is=null,Lx.apply(zx,arguments)}function Ux(e,t,n,r,o,i,a,s,l){if(jx.apply(this,arguments),qo){if(qo){var u=is;qo=!1,is=null}else throw Error(N(198));as||(as=!0,uc=u)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dp(e){if(kr(e)!==e)throw Error(N(188))}function Bx(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Dp(o),e;if(i===r)return Dp(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function qv(e){return e=Bx(e),e!==null?Xv(e):null}function Xv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xv(e);if(t!==null)return t;e=e.sibling}return null}var Jv=gt.unstable_scheduleCallback,Fp=gt.unstable_cancelCallback,Wx=gt.unstable_shouldYield,Hx=gt.unstable_requestPaint,Ne=gt.unstable_now,Vx=gt.unstable_getCurrentPriorityLevel,Gf=gt.unstable_ImmediatePriority,Zv=gt.unstable_UserBlockingPriority,ss=gt.unstable_NormalPriority,Qx=gt.unstable_LowPriority,eg=gt.unstable_IdlePriority,Js=null,Qt=null;function Gx(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Js,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:qx,Kx=Math.log,Yx=Math.LN2;function qx(e){return e>>>=0,e===0?32:31-(Kx(e)/Yx|0)|0}var ra=64,oa=4194304;function Ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Ho(s):(i&=a,i!==0&&(r=Ho(i)))}else a=n&~o,a!==0?r=Ho(a):i!==0&&(r=Ho(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),o=1<<n,r|=e[n],t&=~o;return r}function Xx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-zt(i),s=1<<a,l=o[a];l===-1?((s&n)===0||(s&r)!==0)&&(o[a]=Xx(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tg(){var e=ra;return ra<<=1,(ra&4194240)===0&&(ra=64),e}function su(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Zx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-zt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Kf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var pe=0;function ng(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rg,Yf,og,ig,ag,fc=!1,ia=[],Tn=null,Nn=null,Mn=null,di=new Map,pi=new Map,Cn=[],ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function To(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ji(t),t!==null&&Yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function tw(e,t,n,r,o){switch(t){case"focusin":return Tn=To(Tn,e,t,n,r,o),!0;case"dragenter":return Nn=To(Nn,e,t,n,r,o),!0;case"mouseover":return Mn=To(Mn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return di.set(i,To(di.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,pi.set(i,To(pi.get(i)||null,e,t,n,r,o)),!0}return!1}function sg(e){var t=sr(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Yv(n),t!==null){e.blockedOn=t,ag(e.priority,function(){og(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ac=r,n.target.dispatchEvent(r),ac=null}else return t=ji(n),t!==null&&Yf(t),e.blockedOn=n,!1;t.shift()}return!0}function zp(e,t,n){Da(e)&&n.delete(t)}function nw(){fc=!1,Tn!==null&&Da(Tn)&&(Tn=null),Nn!==null&&Da(Nn)&&(Nn=null),Mn!==null&&Da(Mn)&&(Mn=null),di.forEach(zp),pi.forEach(zp)}function No(e,t){e.blockedOn===t&&(e.blockedOn=null,fc||(fc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,nw)))}function hi(e){function t(o){return No(o,e)}if(0<ia.length){No(ia[0],e);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&No(Tn,e),Nn!==null&&No(Nn,e),Mn!==null&&No(Mn,e),di.forEach(t),pi.forEach(t),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&Cn.shift()}var to=dn.ReactCurrentBatchConfig,us=!0;function rw(e,t,n,r){var o=pe,i=to.transition;to.transition=null;try{pe=1,qf(e,t,n,r)}finally{pe=o,to.transition=i}}function ow(e,t,n,r){var o=pe,i=to.transition;to.transition=null;try{pe=4,qf(e,t,n,r)}finally{pe=o,to.transition=i}}function qf(e,t,n,r){if(us){var o=dc(e,t,n,r);if(o===null)gu(e,t,r,cs,n),Lp(e,r);else if(tw(o,e,t,n,r))r.stopPropagation();else if(Lp(e,r),t&4&&-1<ew.indexOf(e)){for(;o!==null;){var i=ji(o);if(i!==null&&rg(i),i=dc(e,t,n,r),i===null&&gu(e,t,r,cs,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else gu(e,t,r,null,n)}}var cs=null;function dc(e,t,n,r){if(cs=null,e=Qf(r),e=sr(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function lg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vx()){case Gf:return 1;case Zv:return 4;case ss:case Qx:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Pn=null,Xf=null,Fa=null;function ug(){if(Fa)return Fa;var e,t=Xf,n=t.length,r,o="value"in Pn?Pn.value:Pn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Fa=o.slice(e,1<r?1-r:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function jp(){return!1}function xt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?aa:jp,this.isPropagationStopped=jp,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jf=xt(xo),zi=Pe({},xo,{view:0,detail:0}),iw=xt(zi),lu,uu,Mo,Zs=Pe({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(lu=e.screenX-Mo.screenX,uu=e.screenY-Mo.screenY):uu=lu=0,Mo=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Up=xt(Zs),aw=Pe({},Zs,{dataTransfer:0}),sw=xt(aw),lw=Pe({},zi,{relatedTarget:0}),cu=xt(lw),uw=Pe({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),cw=xt(uw),fw=Pe({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dw=xt(fw),pw=Pe({},xo,{data:0}),Bp=xt(pw),hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vw[e])?!!t[e]:!1}function Zf(){return gw}var yw=Pe({},zi,{key:function(e){if(e.key){var t=hw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xw=xt(yw),ww=Pe({},Zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=xt(ww),bw=Pe({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),$w=xt(bw),Sw=Pe({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cw=xt(Sw),Ew=Pe({},Zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kw=xt(Ew),Pw=[9,13,27,32],ed=nn&&"CompositionEvent"in window,Xo=null;nn&&"documentMode"in document&&(Xo=document.documentMode);var Ow=nn&&"TextEvent"in window&&!Xo,cg=nn&&(!ed||Xo&&8<Xo&&11>=Xo),Hp=String.fromCharCode(32),Vp=!1;function fg(e,t){switch(e){case"keyup":return Pw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function Rw(e,t){switch(e){case"compositionend":return dg(t);case"keypress":return t.which!==32?null:(Vp=!0,Hp);case"textInput":return e=t.data,e===Hp&&Vp?null:e;default:return null}}function _w(e,t){if(Lr)return e==="compositionend"||!ed&&fg(e,t)?(e=ug(),Fa=Xf=Pn=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cg&&t.locale!=="ko"?null:t.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Aw[e.type]:t==="textarea"}function pg(e,t,n,r){Hv(r),t=fs(t,"onChange"),0<t.length&&(n=new Jf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jo=null,mi=null;function Tw(e){Cg(e,0)}function el(e){var t=Ur(e);if(Fv(t))return e}function Nw(e,t){if(e==="change")return t}var hg=!1;if(nn){var fu;if(nn){var du="oninput"in document;if(!du){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),du=typeof Gp.oninput=="function"}fu=du}else fu=!1;hg=fu&&(!document.documentMode||9<document.documentMode)}function Kp(){Jo&&(Jo.detachEvent("onpropertychange",mg),mi=Jo=null)}function mg(e){if(e.propertyName==="value"&&el(mi)){var t=[];pg(t,mi,e,Qf(e)),Kv(Tw,t)}}function Mw(e,t,n){e==="focusin"?(Kp(),Jo=t,mi=n,Jo.attachEvent("onpropertychange",mg)):e==="focusout"&&Kp()}function Iw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(mi)}function Dw(e,t){if(e==="click")return el(t)}function Fw(e,t){if(e==="input"||e==="change")return el(t)}function Lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Lw;function vi(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ku.call(t,o)||!Ut(e[o],t[o]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,t){var n=Yp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yp(n)}}function vg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gg(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zw(e){var t=gg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(r!==null&&td(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=qp(n,i);var a=qp(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jw=nn&&"documentMode"in document&&11>=document.documentMode,zr=null,pc=null,Zo=null,hc=!1;function Xp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||zr==null||zr!==os(r)||(r=zr,"selectionStart"in r&&td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&vi(Zo,r)||(Zo=r,r=fs(pc,"onSelect"),0<r.length&&(t=new Jf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},pu={},yg={};nn&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function tl(e){if(pu[e])return pu[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yg)return pu[e]=t[n];return e}var xg=tl("animationend"),wg=tl("animationiteration"),bg=tl("animationstart"),$g=tl("transitionend"),Sg=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Sg.set(e,t),Er(t,[e])}for(var hu=0;hu<Jp.length;hu++){var mu=Jp[hu],Uw=mu.toLowerCase(),Bw=mu[0].toUpperCase()+mu.slice(1);Yn(Uw,"on"+Bw)}Yn(xg,"onAnimationEnd");Yn(wg,"onAnimationIteration");Yn(bg,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn($g,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Zp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ux(r,t,void 0,e),e.currentTarget=null}function Cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Zp(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Zp(o,s,u),i=l}}}if(as)throw e=uc,as=!1,uc=null,e}function ye(e,t){var n=t[xc];n===void 0&&(n=t[xc]=new Set);var r=e+"__bubble";n.has(r)||(Eg(t,e,2,!1),n.add(r))}function vu(e,t,n){var r=0;t&&(r|=4),Eg(n,e,r,t)}var la="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[la]){e[la]=!0,Tv.forEach(function(n){n!=="selectionchange"&&(Ww.has(n)||vu(n,!1,e),vu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[la]||(t[la]=!0,vu("selectionchange",!1,t))}}function Eg(e,t,n,r){switch(lg(t)){case 1:var o=rw;break;case 4:o=ow;break;default:o=qf}n=o.bind(null,t,n,e),o=void 0,!lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gu(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=sr(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Kv(function(){var u=i,c=Qf(n),f=[];e:{var p=Sg.get(e);if(p!==void 0){var h=Jf,m=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":h=xw;break;case"focusin":m="focus",h=cu;break;case"focusout":m="blur",h=cu;break;case"beforeblur":case"afterblur":h=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=$w;break;case xg:case wg:case bg:h=cw;break;case $g:h=Cw;break;case"scroll":h=iw;break;case"wheel":h=kw;break;case"copy":case"cut":case"paste":h=dw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Wp}var y=(t&4)!==0,$=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var v=u,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,g!==null&&(w=fi(v,g),w!=null&&y.push(yi(v,w,x)))),$)break;v=v.return}0<y.length&&(p=new h(p,m,null,n,c),f.push({event:p,listeners:y}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==ac&&(m=n.relatedTarget||n.fromElement)&&(sr(m)||m[rn]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?sr(m):null,m!==null&&($=kr(m),m!==$||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=Up,w="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wp,w="onPointerLeave",g="onPointerEnter",v="pointer"),$=h==null?p:Ur(h),x=m==null?p:Ur(m),p=new y(w,v+"leave",h,n,c),p.target=$,p.relatedTarget=x,w=null,sr(c)===u&&(y=new y(g,v+"enter",m,n,c),y.target=x,y.relatedTarget=$,w=y),$=w,h&&m)t:{for(y=h,g=m,v=0,x=y;x;x=Tr(x))v++;for(x=0,w=g;w;w=Tr(w))x++;for(;0<v-x;)y=Tr(y),v--;for(;0<x-v;)g=Tr(g),x--;for(;v--;){if(y===g||g!==null&&y===g.alternate)break t;y=Tr(y),g=Tr(g)}y=null}else y=null;h!==null&&eh(f,p,h,y,!1),m!==null&&$!==null&&eh(f,$,m,y,!0)}}e:{if(p=u?Ur(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=Nw;else if(Qp(p))if(hg)S=Fw;else{S=Iw;var C=Mw}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Dw);if(S&&(S=S(e,u))){pg(f,S,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&tc(p,"number",p.value)}switch(C=u?Ur(u):window,e){case"focusin":(Qp(C)||C.contentEditable==="true")&&(zr=C,pc=u,Zo=null);break;case"focusout":Zo=pc=zr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Xp(f,n,c);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":Xp(f,n,c)}var k;if(ed)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Lr?fg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cg&&n.locale!=="ko"&&(Lr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Lr&&(k=ug()):(Pn=c,Xf="value"in Pn?Pn.value:Pn.textContent,Lr=!0)),C=fs(u,P),0<C.length&&(P=new Bp(P,e,null,n,c),f.push({event:P,listeners:C}),k?P.data=k:(k=dg(n),k!==null&&(P.data=k)))),(k=Ow?Rw(e,n):_w(e,n))&&(u=fs(u,"onBeforeInput"),0<u.length&&(c=new Bp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}Cg(f,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fi(e,n),i!=null&&r.unshift(yi(e,i,o)),i=fi(e,t),i!=null&&r.push(yi(e,i,o))),e=e.return}return r}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=fi(n,i),l!=null&&a.unshift(yi(n,l,s))):o||(l=fi(n,i),l!=null&&a.push(yi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Hw=/\r\n?/g,Vw=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(Hw,`
`).replace(Vw,"")}function ua(e,t,n){if(t=th(t),th(e)!==t&&n)throw Error(N(425))}function ds(){}var mc=null,vc=null;function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,Gw=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(Kw)}:yc;function Kw(e){setTimeout(function(){throw e})}function yu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),hi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);hi(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Ht="__reactFiber$"+wo,xi="__reactProps$"+wo,rn="__reactContainer$"+wo,xc="__reactEvents$"+wo,Yw="__reactListeners$"+wo,qw="__reactHandles$"+wo;function sr(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[Ht])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[Ht]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function nl(e){return e[xi]||null}var wc=[],Br=-1;function qn(e){return{current:e}}function we(e){0>Br||(e.current=wc[Br],wc[Br]=null,Br--)}function ve(e,t){Br++,wc[Br]=e.current,e.current=t}var Hn={},nt=qn(Hn),ut=qn(!1),vr=Hn;function ao(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ct(e){return e=e.childContextTypes,e!=null}function ps(){we(ut),we(nt)}function oh(e,t,n){if(nt.current!==Hn)throw Error(N(168));ve(nt,t),ve(ut,n)}function kg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,Mx(e)||"Unknown",o));return Pe({},n,r)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,vr=nt.current,ve(nt,e),ve(ut,ut.current),!0}function ih(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=kg(e,t,vr),r.__reactInternalMemoizedMergedChildContext=e,we(ut),we(nt),ve(nt,e)):we(ut),ve(ut,n)}var qt=null,rl=!1,xu=!1;function Pg(e){qt===null?qt=[e]:qt.push(e)}function Xw(e){rl=!0,Pg(e)}function Xn(){if(!xu&&qt!==null){xu=!0;var e=0,t=pe;try{var n=qt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,rl=!1}catch(o){throw qt!==null&&(qt=qt.slice(e+1)),Jv(Gf,Xn),o}finally{pe=t,xu=!1}}return null}var Wr=[],Hr=0,ms=null,vs=0,Ct=[],Et=0,gr=null,Jt=1,Zt="";function tr(e,t){Wr[Hr++]=vs,Wr[Hr++]=ms,ms=e,vs=t}function Og(e,t,n){Ct[Et++]=Jt,Ct[Et++]=Zt,Ct[Et++]=gr,gr=e;var r=Jt;e=Zt;var o=32-zt(r)-1;r&=~(1<<o),n+=1;var i=32-zt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Jt=1<<32-zt(t)+o|n<<o|r,Zt=i+e}else Jt=1<<i|n<<o|r,Zt=e}function nd(e){e.return!==null&&(tr(e,1),Og(e,1,0))}function rd(e){for(;e===ms;)ms=Wr[--Hr],Wr[Hr]=null,vs=Wr[--Hr],Wr[Hr]=null;for(;e===gr;)gr=Ct[--Et],Ct[Et]=null,Zt=Ct[--Et],Ct[Et]=null,Jt=Ct[--Et],Ct[Et]=null}var vt=null,mt=null,Se=!1,It=null;function Rg(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,mt=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gr!==null?{id:Jt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,mt=null,!0):!1;default:return!1}}function bc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $c(e){if(Se){var t=mt;if(t){var n=t;if(!ah(e,t)){if(bc(e))throw Error(N(418));t=In(n.nextSibling);var r=vt;t&&ah(e,t)?Rg(r,n):(e.flags=e.flags&-4097|2,Se=!1,vt=e)}}else{if(bc(e))throw Error(N(418));e.flags=e.flags&-4097|2,Se=!1,vt=e}}}function sh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function ca(e){if(e!==vt)return!1;if(!Se)return sh(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gc(e.type,e.memoizedProps)),t&&(t=mt)){if(bc(e))throw _g(),Error(N(418));for(;t;)Rg(e,t),t=In(t.nextSibling)}if(sh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=In(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=vt?In(e.stateNode.nextSibling):null;return!0}function _g(){for(var e=mt;e;)e=In(e.nextSibling)}function so(){mt=vt=null,Se=!1}function od(e){It===null?It=[e]:It.push(e)}var Jw=dn.ReactCurrentBatchConfig;function Nt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gs=qn(null),ys=null,Vr=null,id=null;function ad(){id=Vr=ys=null}function sd(e){var t=gs.current;we(gs),e._currentValue=t}function Sc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function no(e,t){ys=e,id=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(id!==e)if(e={context:e,memoizedValue:t,next:null},Vr===null){if(ys===null)throw Error(N(308));Vr=e,ys.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return t}var lr=null;function ld(e){lr===null?lr=[e]:lr.push(e)}function Ag(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ld(t)):(n.next=o.next,o.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function ud(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ue&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,on(e,n)}return o=r.interleaved,o===null?(t.next=t,ld(r)):(t.next=o.next,o.next=t),r.interleaved=t,on(e,n)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kf(e,n)}}function lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xs(e,t,n,r){var o=e.updateQueue;$n=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,c=u=l=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,y=s;switch(p=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(h,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,p=typeof m=="function"?m.call(h,f,p):m,p==null)break e;f=Pe({},f,p);break e;case 2:$n=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xr|=a,e.lanes=a,e.memoizedState=f}}function uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Ng=new Av.Component().refs;function Cc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),o=Ln(e),i=en(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dn(e,i,o),t!==null&&(jt(t,e,o,r),za(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),o=Ln(e),i=en(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dn(e,i,o),t!==null&&(jt(t,e,o,r),za(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=Ln(e),o=en(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dn(e,o,r),t!==null&&(jt(t,e,r,n),za(t,e,r))}};function ch(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!vi(n,r)||!vi(o,i):!0}function Mg(e,t,n){var r=!1,o=Hn,i=t.contextType;return typeof i=="object"&&i!==null?i=Rt(i):(o=ct(t)?vr:nt.current,r=t.contextTypes,i=(r=r!=null)?ao(e,o):Hn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Ec(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ng,ud(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Rt(i):(i=ct(t)?vr:nt.current,o.context=ao(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Cc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),xs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===Ng&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function fa(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dh(e){var t=e._init;return t(e._payload)}function Ig(e){function t(g,v){if(e){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function o(g,v){return g=zn(g,v),g.index=0,g.sibling=null,g}function i(g,v,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=2,v):x):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,v,x,w){return v===null||v.tag!==6?(v=ku(x,g.mode,w),v.return=g,v):(v=o(v,x),v.return=g,v)}function l(g,v,x,w){var S=x.type;return S===Fr?c(g,v,x.props.children,w,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&dh(S)===v.type)?(w=o(v,x.props),w.ref=Io(g,v,x),w.return=g,w):(w=Va(x.type,x.key,x.props,null,g.mode,w),w.ref=Io(g,v,x),w.return=g,w)}function u(g,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Pu(x,g.mode,w),v.return=g,v):(v=o(v,x.children||[]),v.return=g,v)}function c(g,v,x,w,S){return v===null||v.tag!==7?(v=hr(x,g.mode,w,S),v.return=g,v):(v=o(v,x),v.return=g,v)}function f(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ku(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ea:return x=Va(v.type,v.key,v.props,null,g.mode,x),x.ref=Io(g,null,v),x.return=g,x;case Dr:return v=Pu(v,g.mode,x),v.return=g,v;case bn:var w=v._init;return f(g,w(v._payload),x)}if(Wo(v)||_o(v))return v=hr(v,g.mode,x,null),v.return=g,v;fa(g,v)}return null}function p(g,v,x,w){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:s(g,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:return x.key===S?l(g,v,x,w):null;case Dr:return x.key===S?u(g,v,x,w):null;case bn:return S=x._init,p(g,v,S(x._payload),w)}if(Wo(x)||_o(x))return S!==null?null:c(g,v,x,w,null);fa(g,x)}return null}function h(g,v,x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(x)||null,s(v,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ea:return g=g.get(w.key===null?x:w.key)||null,l(v,g,w,S);case Dr:return g=g.get(w.key===null?x:w.key)||null,u(v,g,w,S);case bn:var C=w._init;return h(g,v,x,C(w._payload),S)}if(Wo(w)||_o(w))return g=g.get(x)||null,c(v,g,w,S,null);fa(v,w)}return null}function m(g,v,x,w){for(var S=null,C=null,k=v,P=v=0,_=null;k!==null&&P<x.length;P++){k.index>P?(_=k,k=null):_=k.sibling;var D=p(g,k,x[P],w);if(D===null){k===null&&(k=_);break}e&&k&&D.alternate===null&&t(g,k),v=i(D,v,P),C===null?S=D:C.sibling=D,C=D,k=_}if(P===x.length)return n(g,k),Se&&tr(g,P),S;if(k===null){for(;P<x.length;P++)k=f(g,x[P],w),k!==null&&(v=i(k,v,P),C===null?S=k:C.sibling=k,C=k);return Se&&tr(g,P),S}for(k=r(g,k);P<x.length;P++)_=h(k,g,P,x[P],w),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?P:_.key),v=i(_,v,P),C===null?S=_:C.sibling=_,C=_);return e&&k.forEach(function(X){return t(g,X)}),Se&&tr(g,P),S}function y(g,v,x,w){var S=_o(x);if(typeof S!="function")throw Error(N(150));if(x=S.call(x),x==null)throw Error(N(151));for(var C=S=null,k=v,P=v=0,_=null,D=x.next();k!==null&&!D.done;P++,D=x.next()){k.index>P?(_=k,k=null):_=k.sibling;var X=p(g,k,D.value,w);if(X===null){k===null&&(k=_);break}e&&k&&X.alternate===null&&t(g,k),v=i(X,v,P),C===null?S=X:C.sibling=X,C=X,k=_}if(D.done)return n(g,k),Se&&tr(g,P),S;if(k===null){for(;!D.done;P++,D=x.next())D=f(g,D.value,w),D!==null&&(v=i(D,v,P),C===null?S=D:C.sibling=D,C=D);return Se&&tr(g,P),S}for(k=r(g,k);!D.done;P++,D=x.next())D=h(k,g,P,D.value,w),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?P:D.key),v=i(D,v,P),C===null?S=D:C.sibling=D,C=D);return e&&k.forEach(function(J){return t(g,J)}),Se&&tr(g,P),S}function $(g,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Fr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:e:{for(var S=x.key,C=v;C!==null;){if(C.key===S){if(S=x.type,S===Fr){if(C.tag===7){n(g,C.sibling),v=o(C,x.props.children),v.return=g,g=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&dh(S)===C.type){n(g,C.sibling),v=o(C,x.props),v.ref=Io(g,C,x),v.return=g,g=v;break e}n(g,C);break}else t(g,C);C=C.sibling}x.type===Fr?(v=hr(x.props.children,g.mode,w,x.key),v.return=g,g=v):(w=Va(x.type,x.key,x.props,null,g.mode,w),w.ref=Io(g,v,x),w.return=g,g=w)}return a(g);case Dr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(g,v.sibling),v=o(v,x.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=Pu(x,g.mode,w),v.return=g,g=v}return a(g);case bn:return C=x._init,$(g,v,C(x._payload),w)}if(Wo(x))return m(g,v,x,w);if(_o(x))return y(g,v,x,w);fa(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(g,v.sibling),v=o(v,x),v.return=g,g=v):(n(g,v),v=ku(x,g.mode,w),v.return=g,g=v),a(g)):n(g,v)}return $}var lo=Ig(!0),Dg=Ig(!1),Ui={},Gt=qn(Ui),wi=qn(Ui),bi=qn(Ui);function ur(e){if(e===Ui)throw Error(N(174));return e}function cd(e,t){switch(ve(bi,t),ve(wi,e),ve(Gt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rc(t,e)}we(Gt),ve(Gt,t)}function uo(){we(Gt),we(wi),we(bi)}function Fg(e){ur(bi.current);var t=ur(Gt.current),n=rc(t,e.type);t!==n&&(ve(wi,e),ve(Gt,n))}function fd(e){wi.current===e&&(we(Gt),we(wi))}var Ee=qn(0);function ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wu=[];function dd(){for(var e=0;e<wu.length;e++)wu[e]._workInProgressVersionPrimary=null;wu.length=0}var ja=dn.ReactCurrentDispatcher,bu=dn.ReactCurrentBatchConfig,yr=0,ke=null,Le=null,We=null,bs=!1,ei=!1,$i=0,Zw=0;function Je(){throw Error(N(321))}function pd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function hd(e,t,n,r,o,i){if(yr=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ja.current=e===null||e.memoizedState===null?rb:ob,e=n(r,o),ei){i=0;do{if(ei=!1,$i=0,25<=i)throw Error(N(301));i+=1,We=Le=null,t.updateQueue=null,ja.current=ib,e=n(r,o)}while(ei)}if(ja.current=$s,t=Le!==null&&Le.next!==null,yr=0,We=Le=ke=null,bs=!1,t)throw Error(N(300));return e}function md(){var e=$i!==0;return $i=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ke.memoizedState=We=e:We=We.next=e,We}function _t(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=We===null?ke.memoizedState:We.next;if(t!==null)We=t,Le=e;else{if(e===null)throw Error(N(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},We===null?ke.memoizedState=We=e:We=We.next=e}return We}function Si(e,t){return typeof t=="function"?t(e):t}function $u(e){var t=_t(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ke.lanes|=c,xr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Ut(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,xr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Su(e){var t=_t(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ut(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lg(){}function zg(e,t){var n=ke,r=_t(),o=t(),i=!Ut(r.memoizedState,o);if(i&&(r.memoizedState=o,lt=!0),r=r.queue,vd(Bg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Ci(9,Ug.bind(null,n,r,o,t),void 0,null),He===null)throw Error(N(349));(yr&30)!==0||jg(n,t,o)}return o}function jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ug(e,t,n,r){t.value=n,t.getSnapshot=r,Wg(t)&&Hg(e)}function Bg(e,t,n){return n(function(){Wg(t)&&Hg(e)})}function Wg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Hg(e){var t=on(e,1);t!==null&&jt(t,e,1,-1)}function ph(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=nb.bind(null,ke,e),[t.memoizedState,e]}function Ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vg(){return _t().memoizedState}function Ua(e,t,n,r){var o=Wt();ke.flags|=e,o.memoizedState=Ci(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var o=_t();r=r===void 0?null:r;var i=void 0;if(Le!==null){var a=Le.memoizedState;if(i=a.destroy,r!==null&&pd(r,a.deps)){o.memoizedState=Ci(t,n,i,r);return}}ke.flags|=e,o.memoizedState=Ci(1|t,n,i,r)}function hh(e,t){return Ua(8390656,8,e,t)}function vd(e,t){return il(2048,8,e,t)}function Qg(e,t){return il(4,2,e,t)}function Gg(e,t){return il(4,4,e,t)}function Kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yg(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,Kg.bind(null,t,e),n)}function gd(){}function qg(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xg(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jg(e,t,n){return(yr&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(Ut(n,t)||(n=tg(),ke.lanes|=n,xr|=n,e.baseState=!0),t)}function eb(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=bu.transition;bu.transition={};try{e(!1),t()}finally{pe=n,bu.transition=r}}function Zg(){return _t().memoizedState}function tb(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(e))t0(t,n);else if(n=Ag(e,t,n,r),n!==null){var o=ot();jt(n,e,r,o),n0(n,t,r)}}function nb(e,t,n){var r=Ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(e))t0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ut(s,a)){var l=t.interleaved;l===null?(o.next=o,ld(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Ag(e,t,o,r),n!==null&&(o=ot(),jt(n,e,r,o),n0(n,t,r))}}function e0(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function t0(e,t){ei=bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function n0(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kf(e,n)}}var $s={readContext:Rt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},rb={readContext:Rt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4194308,4,Kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tb.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:ph,useDebugValue:gd,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=ph(!1),t=e[0];return e=eb.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Wt();if(Se){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),He===null)throw Error(N(349));(yr&30)!==0||jg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,hh(Bg.bind(null,r,i,e),[e]),r.flags|=2048,Ci(9,Ug.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Wt(),t=He.identifierPrefix;if(Se){var n=Zt,r=Jt;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ob={readContext:Rt,useCallback:qg,useContext:Rt,useEffect:vd,useImperativeHandle:Yg,useInsertionEffect:Qg,useLayoutEffect:Gg,useMemo:Xg,useReducer:$u,useRef:Vg,useState:function(){return $u(Si)},useDebugValue:gd,useDeferredValue:function(e){var t=_t();return Jg(t,Le.memoizedState,e)},useTransition:function(){var e=$u(Si)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Lg,useSyncExternalStore:zg,useId:Zg,unstable_isNewReconciler:!1},ib={readContext:Rt,useCallback:qg,useContext:Rt,useEffect:vd,useImperativeHandle:Yg,useInsertionEffect:Qg,useLayoutEffect:Gg,useMemo:Xg,useReducer:Su,useRef:Vg,useState:function(){return Su(Si)},useDebugValue:gd,useDeferredValue:function(e){var t=_t();return Le===null?t.memoizedState=e:Jg(t,Le.memoizedState,e)},useTransition:function(){var e=Su(Si)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Lg,useSyncExternalStore:zg,useId:Zg,unstable_isNewReconciler:!1};function co(e,t){try{var n="",r=t;do n+=Nx(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cu(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function kc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ab=typeof WeakMap=="function"?WeakMap:Map;function r0(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cs||(Cs=!0,Dc=r),kc(e,t)},n}function o0(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){kc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){kc(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ab;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=wb.bind(null,e,t,n),t.then(e,e))}function vh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gh(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var sb=dn.ReactCurrentOwner,lt=!1;function rt(e,t,n,r){t.child=e===null?Dg(t,null,n,r):lo(t,e.child,n,r)}function yh(e,t,n,r,o){n=n.render;var i=t.ref;return no(t,o),r=hd(e,t,n,r,i,o),n=md(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(Se&&n&&nd(t),t.flags|=1,rt(e,t,r,o),t.child)}function xh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ed(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,i0(e,t,i,r,o)):(e=Va(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(a,r)&&e.ref===t.ref)return an(e,t,o)}return t.flags|=1,e=zn(i,r),e.ref=t.ref,e.return=t,t.child=e}function i0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vi(i,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,an(e,t,o)}return Pc(e,t,n,r,o)}function a0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Gr,ht),ht|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Gr,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve(Gr,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ve(Gr,ht),ht|=r;return rt(e,t,o,n),t.child}function s0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pc(e,t,n,r,o){var i=ct(n)?vr:nt.current;return i=ao(t,i),no(t,o),n=hd(e,t,n,r,i,o),r=md(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(Se&&r&&nd(t),t.flags|=1,rt(e,t,n,o),t.child)}function wh(e,t,n,r,o){if(ct(n)){var i=!0;hs(t)}else i=!1;if(no(t,o),t.stateNode===null)Ba(e,t),Mg(t,n,r),Ec(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?vr:nt.current,u=ao(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&fh(t,a,r,u),$n=!1;var p=t.memoizedState;a.state=p,xs(t,r,a,o),l=t.memoizedState,s!==r||p!==l||ut.current||$n?(typeof c=="function"&&(Cc(t,n,c,r),l=t.memoizedState),(s=$n||ch(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Nt(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=ct(n)?vr:nt.current,l=ao(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&fh(t,a,r,l),$n=!1,p=t.memoizedState,a.state=p,xs(t,r,a,o);var m=t.memoizedState;s!==f||p!==m||ut.current||$n?(typeof h=="function"&&(Cc(t,n,h,r),m=t.memoizedState),(u=$n||ch(t,n,u,r,p,m,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Oc(e,t,n,r,i,o)}function Oc(e,t,n,r,o,i){s0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&ih(t,n,!1),an(e,t,i);r=t.stateNode,sb.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=lo(t,e.child,null,i),t.child=lo(t,null,s,i)):rt(e,t,s,i),t.memoizedState=r.state,o&&ih(t,n,!0),t.child}function l0(e){var t=e.stateNode;t.pendingContext?oh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oh(e,t.context,!1),cd(e,t.containerInfo)}function bh(e,t,n,r,o){return so(),od(o),t.flags|=256,rt(e,t,n,r),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function _c(e){return{baseLanes:e,cachePool:null,transitions:null}}function u0(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ve(Ee,o&1),e===null)return $c(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ll(a,r,0,null),e=hr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_c(n),t.memoizedState=Rc,e):yd(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return lb(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=zn(s,i):(i=hr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?_c(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Rc,r}return i=e.child,e=i.sibling,r=zn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yd(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function da(e,t,n,r){return r!==null&&od(r),lo(t,e.child,null,n),e=yd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lb(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Cu(Error(N(422))),da(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ll({mode:"visible",children:r.children},o,0,null),i=hr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&lo(t,e.child,null,a),t.child.memoizedState=_c(a),t.memoizedState=Rc,i);if((t.mode&1)===0)return da(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(N(419)),r=Cu(i,r,void 0),da(e,t,a,r)}if(s=(a&e.childLanes)!==0,lt||s){if(r=He,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,on(e,o),jt(r,e,o,-1))}return Cd(),r=Cu(Error(N(421))),da(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bb.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,mt=In(o.nextSibling),vt=t,Se=!0,It=null,e!==null&&(Ct[Et++]=Jt,Ct[Et++]=Zt,Ct[Et++]=gr,Jt=e.id,Zt=e.overflow,gr=t),t=yd(t,r.children),t.flags|=4096,t)}function $h(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sc(e.return,t,n)}function Eu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function c0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(rt(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$h(e,n,t);else if(e.tag===19)$h(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ws(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Eu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ws(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Eu(t,!0,n,null,i);break;case"together":Eu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ub(e,t,n){switch(t.tag){case 3:l0(t),so();break;case 5:Fg(t);break;case 1:ct(t.type)&&hs(t);break;case 4:cd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ve(gs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?u0(e,t,n):(ve(Ee,Ee.current&1),e=an(e,t,n),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return c0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ve(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,a0(e,t,n)}return an(e,t,n)}var f0,Ac,d0,p0;f0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ac=function(){};d0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ur(Gt.current);var i=null;switch(n){case"input":o=Zu(e,o),r=Zu(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=nc(e,o),r=nc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ds)}oc(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ui.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ui.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ye("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};p0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Do(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cb(e,t,n){var r=t.pendingProps;switch(rd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ct(t.type)&&ps(),Ze(t),null;case 3:return r=t.stateNode,uo(),we(ut),we(nt),dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&(zc(It),It=null))),Ac(e,t),Ze(t),null;case 5:fd(t);var o=ur(bi.current);if(n=t.type,e!==null&&t.stateNode!=null)d0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ze(t),null}if(e=ur(Gt.current),ca(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ht]=t,r[xi]=i,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<Vo.length;o++)ye(Vo[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Ap(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Np(r,i),ye("invalid",r)}oc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ua(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ua(r.textContent,s,e),o=["children",""+s]):ui.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ta(r),Tp(r,i,!0);break;case"textarea":ta(r),Mp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ds)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ht]=t,e[xi]=r,f0(e,t,!1,!1),t.stateNode=e;e:{switch(a=ic(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vo.length;o++)ye(Vo[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":Ap(e,r),o=Zu(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Np(e,r),o=nc(e,r),ye("invalid",e);break;default:o=r}oc(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Wv(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uv(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ci(e,l):typeof l=="number"&&ci(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ui.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ye("scroll",e):l!=null&&Bf(e,i,l,a))}switch(n){case"input":ta(e),Tp(e,r,!1);break;case"textarea":ta(e),Mp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)p0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=ur(bi.current),ur(Gt.current),ca(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(i=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:ua(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Ze(t),null;case 13:if(we(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&mt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_g(),so(),t.flags|=98560,i=!1;else if(i=ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ht]=t}else so(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),i=!1}else It!==null&&(zc(It),It=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?ze===0&&(ze=3):Cd())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return uo(),Ac(e,t),e===null&&gi(t.stateNode.containerInfo),Ze(t),null;case 10:return sd(t.type._context),Ze(t),null;case 17:return ct(t.type)&&ps(),Ze(t),null;case 19:if(we(Ee),i=t.memoizedState,i===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Do(i,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ws(e),a!==null){for(t.flags|=128,Do(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>fo&&(t.flags|=128,r=!0,Do(i,!1),t.lanes=4194304)}else{if(!r)if(e=ws(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Se)return Ze(t),null}else 2*Ne()-i.renderingStartTime>fo&&n!==1073741824&&(t.flags|=128,r=!0,Do(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=Ee.current,ve(Ee,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Sd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function fb(e,t){switch(rd(t),t.tag){case 1:return ct(t.type)&&ps(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return uo(),we(ut),we(nt),dd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return fd(t),null;case 13:if(we(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));so()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ee),null;case 4:return uo(),null;case 10:return sd(t.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var pa=!1,tt=!1,db=typeof WeakSet=="function"?WeakSet:Set,H=null;function Qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Tc(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Sh=!1;function pb(e,t){if(mc=us,e=gg(),td(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var h;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++c===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},us=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,$=m.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Nt(t.type,y),$);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return m=Sh,Sh=!1,m}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Tc(t,n,i)}o=o.next}while(o!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h0(e){var t=e.alternate;t!==null&&(e.alternate=null,h0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[xi],delete t[xc],delete t[Yw],delete t[qw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m0(e){return e.tag===5||e.tag===3||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(e=e.child,e!==null))for(Mc(e,t,n),e=e.sibling;e!==null;)Mc(e,t,n),e=e.sibling}function Ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}var Qe=null,Mt=!1;function yn(e,t,n){for(n=n.child;n!==null;)v0(e,t,n),n=n.sibling}function v0(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Js,n)}catch{}switch(n.tag){case 5:tt||Qr(n,t);case 6:var r=Qe,o=Mt;Qe=null,yn(e,t,n),Qe=r,Mt=o,Qe!==null&&(Mt?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Mt?(e=Qe,n=n.stateNode,e.nodeType===8?yu(e.parentNode,n):e.nodeType===1&&yu(e,n),hi(e)):yu(Qe,n.stateNode));break;case 4:r=Qe,o=Mt,Qe=n.stateNode.containerInfo,Mt=!0,yn(e,t,n),Qe=r,Mt=o;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Tc(n,t,a),o=o.next}while(o!==r)}yn(e,t,n);break;case 1:if(!tt&&(Qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Re(n,t,s)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,yn(e,t,n),tt=r):yn(e,t,n);break;default:yn(e,t,n)}}function Eh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new db),t.forEach(function(r){var o=$b.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,Mt=!1;break e;case 3:Qe=s.stateNode.containerInfo,Mt=!0;break e;case 4:Qe=s.stateNode.containerInfo,Mt=!0;break e}s=s.return}if(Qe===null)throw Error(N(160));v0(i,a,o),Qe=null,Mt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Re(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g0(t,e),t=t.sibling}function g0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Bt(e),r&4){try{ti(3,e,e.return),al(3,e)}catch(y){Re(e,e.return,y)}try{ti(5,e,e.return)}catch(y){Re(e,e.return,y)}}break;case 1:Tt(t,e),Bt(e),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(Tt(t,e),Bt(e),r&512&&n!==null&&Qr(n,n.return),e.flags&32){var o=e.stateNode;try{ci(o,"")}catch(y){Re(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Lv(o,i),ic(s,a);var u=ic(s,i);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Wv(o,f):c==="dangerouslySetInnerHTML"?Uv(o,f):c==="children"?ci(o,f):Bf(o,c,f,u)}switch(s){case"input":ec(o,i);break;case"textarea":zv(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Jr(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Jr(o,!!i.multiple,i.defaultValue,!0):Jr(o,!!i.multiple,i.multiple?[]:"",!1))}o[xi]=i}catch(y){Re(e,e.return,y)}}break;case 6:if(Tt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Re(e,e.return,y)}}break;case 3:if(Tt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(y){Re(e,e.return,y)}break;case 4:Tt(t,e),Bt(e);break;case 13:Tt(t,e),Bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(bd=Ne())),r&4&&Eh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,Tt(t,e),tt=u):Tt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(H=e,c=e.child;c!==null;){for(f=H=c;H!==null;){switch(p=H,h=p.child,p.tag){case 0:case 11:case 14:case 15:ti(4,p,p.return);break;case 1:Qr(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){Re(r,n,y)}}break;case 5:Qr(p,p.return);break;case 22:if(p.memoizedState!==null){Ph(f);continue}}h!==null?(h.return=p,H=h):Ph(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Bv("display",a))}catch(y){Re(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Re(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(t,e),Bt(e),r&4&&Eh(e);break;case 21:break;default:Tt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m0(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ci(o,""),r.flags&=-33);var i=Ch(e);Ic(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ch(e);Mc(e,s,a);break;default:throw Error(N(161))}}catch(l){Re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hb(e,t,n){H=e,y0(e)}function y0(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var o=H,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||pa;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||tt;s=pa;var u=tt;if(pa=a,(tt=l)&&!u)for(H=o;H!==null;)a=H,l=a.child,a.tag===22&&a.memoizedState!==null?Oh(o):l!==null?(l.return=a,H=l):Oh(o);for(;i!==null;)H=i,y0(i),i=i.sibling;H=o,pa=s,tt=u}kh(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,H=i):kh(e)}}function kh(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:tt||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uh(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&hi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}tt||t.flags&512&&Nc(t)}catch(p){Re(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Ph(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Oh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(l){Re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Re(t,o,l)}}var i=t.return;try{Nc(t)}catch(l){Re(t,i,l)}break;case 5:var a=t.return;try{Nc(t)}catch(l){Re(t,a,l)}}}catch(l){Re(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var mb=Math.ceil,Ss=dn.ReactCurrentDispatcher,xd=dn.ReactCurrentOwner,Pt=dn.ReactCurrentBatchConfig,ue=0,He=null,Me=null,Ke=0,ht=0,Gr=qn(0),ze=0,Ei=null,xr=0,sl=0,wd=0,ni=null,st=null,bd=0,fo=1/0,Yt=null,Cs=!1,Dc=null,Fn=null,ha=!1,On=null,Es=0,ri=0,Fc=null,Wa=-1,Ha=0;function ot(){return(ue&6)!==0?Ne():Wa!==-1?Wa:Wa=Ne()}function Ln(e){return(e.mode&1)===0?1:(ue&2)!==0&&Ke!==0?Ke&-Ke:Jw.transition!==null?(Ha===0&&(Ha=tg()),Ha):(e=pe,e!==0||(e=window.event,e=e===void 0?16:lg(e.type)),e)}function jt(e,t,n,r){if(50<ri)throw ri=0,Fc=null,Error(N(185));Li(e,n,r),((ue&2)===0||e!==He)&&(e===He&&((ue&2)===0&&(sl|=n),ze===4&&En(e,Ke)),ft(e,r),n===1&&ue===0&&(t.mode&1)===0&&(fo=Ne()+500,rl&&Xn()))}function ft(e,t){var n=e.callbackNode;Jx(e,t);var r=ls(e,e===He?Ke:0);if(r===0)n!==null&&Fp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fp(n),t===1)e.tag===0?Xw(Rh.bind(null,e)):Pg(Rh.bind(null,e)),Gw(function(){(ue&6)===0&&Xn()}),n=null;else{switch(ng(r)){case 1:n=Gf;break;case 4:n=Zv;break;case 16:n=ss;break;case 536870912:n=eg;break;default:n=ss}n=k0(n,x0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function x0(e,t){if(Wa=-1,Ha=0,(ue&6)!==0)throw Error(N(327));var n=e.callbackNode;if(ro()&&e.callbackNode!==n)return null;var r=ls(e,e===He?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ks(e,r);else{t=r;var o=ue;ue|=2;var i=b0();(He!==e||Ke!==t)&&(Yt=null,fo=Ne()+500,pr(e,t));do try{yb();break}catch(s){w0(e,s)}while(1);ad(),Ss.current=i,ue=o,Me!==null?t=0:(He=null,Ke=0,t=ze)}if(t!==0){if(t===2&&(o=cc(e),o!==0&&(r=o,t=Lc(e,o))),t===1)throw n=Ei,pr(e,0),En(e,r),ft(e,Ne()),n;if(t===6)En(e,r);else{if(o=e.current.alternate,(r&30)===0&&!vb(o)&&(t=ks(e,r),t===2&&(i=cc(e),i!==0&&(r=i,t=Lc(e,i))),t===1))throw n=Ei,pr(e,0),En(e,r),ft(e,Ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:nr(e,st,Yt);break;case 3:if(En(e,r),(r&130023424)===r&&(t=bd+500-Ne(),10<t)){if(ls(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yc(nr.bind(null,e,st,Yt),t);break}nr(e,st,Yt);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-zt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mb(r/1960))-r,10<r){e.timeoutHandle=yc(nr.bind(null,e,st,Yt),r);break}nr(e,st,Yt);break;case 5:nr(e,st,Yt);break;default:throw Error(N(329))}}}return ft(e,Ne()),e.callbackNode===n?x0.bind(null,e):null}function Lc(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=ks(e,t),e!==2&&(t=st,st=n,t!==null&&zc(t)),e}function zc(e){st===null?st=e:st.push.apply(st,e)}function vb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~wd,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Rh(e){if((ue&6)!==0)throw Error(N(327));ro();var t=ls(e,0);if((t&1)===0)return ft(e,Ne()),null;var n=ks(e,t);if(e.tag!==0&&n===2){var r=cc(e);r!==0&&(t=r,n=Lc(e,r))}if(n===1)throw n=Ei,pr(e,0),En(e,t),ft(e,Ne()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,st,Yt),ft(e,Ne()),null}function $d(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(fo=Ne()+500,rl&&Xn())}}function wr(e){On!==null&&On.tag===0&&(ue&6)===0&&ro();var t=ue;ue|=1;var n=Pt.transition,r=pe;try{if(Pt.transition=null,pe=1,e)return e()}finally{pe=r,Pt.transition=n,ue=t,(ue&6)===0&&Xn()}}function Sd(){ht=Gr.current,we(Gr)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qw(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(rd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ps();break;case 3:uo(),we(ut),we(nt),dd();break;case 5:fd(r);break;case 4:uo();break;case 13:we(Ee);break;case 19:we(Ee);break;case 10:sd(r.type._context);break;case 22:case 23:Sd()}n=n.return}if(He=e,Me=e=zn(e.current,null),Ke=ht=t,ze=0,Ei=null,wd=sl=xr=0,st=ni=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}lr=null}return e}function w0(e,t){do{var n=Me;try{if(ad(),ja.current=$s,bs){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bs=!1}if(yr=0,We=Le=ke=null,ei=!1,$i=0,xd.current=null,n===null||n.return===null){ze=1,Ei=t,Me=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Ke,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=vh(a);if(h!==null){h.flags&=-257,gh(h,a,s,i,t),h.mode&1&&mh(i,u,t),t=h,l=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(l),t.updateQueue=y}else m.add(l);break e}else{if((t&1)===0){mh(i,u,t),Cd();break e}l=Error(N(426))}}else if(Se&&s.mode&1){var $=vh(a);if($!==null){($.flags&65536)===0&&($.flags|=256),gh($,a,s,i,t),od(co(l,s));break e}}i=l=co(l,s),ze!==4&&(ze=2),ni===null?ni=[i]:ni.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=r0(i,l,t);lh(i,g);break e;case 1:s=l;var v=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Fn===null||!Fn.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=o0(i,s,t);lh(i,w);break e}}i=i.return}while(i!==null)}S0(n)}catch(S){t=S,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function b0(){var e=Ss.current;return Ss.current=$s,e===null?$s:e}function Cd(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||(xr&268435455)===0&&(sl&268435455)===0||En(He,Ke)}function ks(e,t){var n=ue;ue|=2;var r=b0();(He!==e||Ke!==t)&&(Yt=null,pr(e,t));do try{gb();break}catch(o){w0(e,o)}while(1);if(ad(),ue=n,Ss.current=r,Me!==null)throw Error(N(261));return He=null,Ke=0,ze}function gb(){for(;Me!==null;)$0(Me)}function yb(){for(;Me!==null&&!Wx();)$0(Me)}function $0(e){var t=E0(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?S0(e):Me=t,xd.current=null}function S0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=cb(n,t,ht),n!==null){Me=n;return}}else{if(n=fb(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);ze===0&&(ze=5)}function nr(e,t,n){var r=pe,o=Pt.transition;try{Pt.transition=null,pe=1,xb(e,t,n,r)}finally{Pt.transition=o,pe=r}return null}function xb(e,t,n,r){do ro();while(On!==null);if((ue&6)!==0)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Zx(e,i),e===He&&(Me=He=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ha||(ha=!0,k0(ss,function(){return ro(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Pt.transition,Pt.transition=null;var a=pe;pe=1;var s=ue;ue|=4,xd.current=null,pb(e,n),g0(n,e),zw(vc),us=!!mc,vc=mc=null,e.current=n,hb(n),Hx(),ue=s,pe=a,Pt.transition=i}else e.current=n;if(ha&&(ha=!1,On=e,Es=o),i=e.pendingLanes,i===0&&(Fn=null),Gx(n.stateNode),ft(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Cs)throw Cs=!1,e=Dc,Dc=null,e;return(Es&1)!==0&&e.tag!==0&&ro(),i=e.pendingLanes,(i&1)!==0?e===Fc?ri++:(ri=0,Fc=e):ri=0,Xn(),null}function ro(){if(On!==null){var e=ng(Es),t=Pt.transition,n=pe;try{if(Pt.transition=null,pe=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,Es=0,(ue&6)!==0)throw Error(N(331));var o=ue;for(ue|=4,H=e.current;H!==null;){var i=H,a=i.child;if((H.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:ti(8,c,i)}var f=c.child;if(f!==null)f.return=c,H=f;else for(;H!==null;){c=H;var p=c.sibling,h=c.return;if(h0(c),c===u){H=null;break}if(p!==null){p.return=h,H=p;break}H=h}}}var m=i.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var $=y.sibling;y.sibling=null,y=$}while(y!==null)}}H=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,H=a;else e:for(;H!==null;){if(i=H,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ti(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,H=g;break e}H=i.return}}var v=e.current;for(H=v;H!==null;){a=H;var x=a.child;if((a.subtreeFlags&2064)!==0&&x!==null)x.return=a,H=x;else e:for(a=v;H!==null;){if(s=H,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:al(9,s)}}catch(S){Re(s,s.return,S)}if(s===a){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(ue=o,Xn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Js,e)}catch{}r=!0}return r}finally{pe=n,Pt.transition=t}}return!1}function _h(e,t,n){t=co(n,t),t=r0(e,t,1),e=Dn(e,t,1),t=ot(),e!==null&&(Li(e,1,t),ft(e,t))}function Re(e,t,n){if(e.tag===3)_h(e,e,n);else for(;t!==null;){if(t.tag===3){_h(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=co(n,e),e=o0(t,e,1),t=Dn(t,e,1),e=ot(),t!==null&&(Li(t,1,e),ft(t,e));break}}t=t.return}}function wb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ke&n)===n&&(ze===4||ze===3&&(Ke&130023424)===Ke&&500>Ne()-bd?pr(e,0):wd|=n),ft(e,t)}function C0(e,t){t===0&&((e.mode&1)===0?t=1:(t=oa,oa<<=1,(oa&130023424)===0&&(oa=4194304)));var n=ot();e=on(e,t),e!==null&&(Li(e,t,n),ft(e,n))}function bb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),C0(e,n)}function $b(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),C0(e,n)}var E0;E0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,ub(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Se&&(t.flags&1048576)!==0&&Og(t,vs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ba(e,t),e=t.pendingProps;var o=ao(t,nt.current);no(t,n),o=hd(null,t,r,e,o,n);var i=md();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(i=!0,hs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ud(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,Ec(t,r,e,n),t=Oc(null,t,r,!0,i,n)):(t.tag=0,Se&&i&&nd(t),rt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cb(r),e=Nt(r,e),o){case 0:t=Pc(null,t,r,e,n);break e;case 1:t=wh(null,t,r,e,n);break e;case 11:t=yh(null,t,r,e,n);break e;case 14:t=xh(null,t,r,Nt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Pc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),wh(e,t,r,o,n);case 3:e:{if(l0(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Tg(e,t),xs(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=co(Error(N(423)),t),t=bh(e,t,r,n,o);break e}else if(r!==o){o=co(Error(N(424)),t),t=bh(e,t,r,n,o);break e}else for(mt=In(t.stateNode.containerInfo.firstChild),vt=t,Se=!0,It=null,n=Dg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===o){t=an(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return Fg(t),e===null&&$c(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,gc(r,o)?a=null:i!==null&&gc(r,i)&&(t.flags|=32),s0(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&$c(t),null;case 13:return u0(e,t,n);case 4:return cd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),yh(e,t,r,o,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ve(gs,r._currentValue),r._currentValue=a,i!==null)if(Ut(i.value,a)){if(i.children===o.children&&!ut.current){t=an(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=en(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Sc(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sc(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}rt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,no(t,n),o=Rt(o),r=r(o),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,o=Nt(r,t.pendingProps),o=Nt(r.type,o),xh(e,t,r,o,n);case 15:return i0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Ba(e,t),t.tag=1,ct(r)?(e=!0,hs(t)):e=!1,no(t,n),Mg(t,r,o),Ec(t,r,o,n),Oc(null,t,r,!0,e,n);case 19:return c0(e,t,n);case 22:return a0(e,t,n)}throw Error(N(156,t.tag))};function k0(e,t){return Jv(e,t)}function Sb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new Sb(e,t,n,r)}function Ed(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cb(e){if(typeof e=="function")return Ed(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hf)return 11;if(e===Vf)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Va(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ed(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fr:return hr(n.children,o,i,t);case Wf:a=8,o|=8;break;case Yu:return e=kt(12,n,t,o|2),e.elementType=Yu,e.lanes=i,e;case qu:return e=kt(13,n,t,o),e.elementType=qu,e.lanes=i,e;case Xu:return e=kt(19,n,t,o),e.elementType=Xu,e.lanes=i,e;case Iv:return ll(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nv:a=10;break e;case Mv:a=9;break e;case Hf:a=11;break e;case Vf:a=14;break e;case bn:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=kt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function hr(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=kt(22,e,r,t),e.elementType=Iv,e.lanes=n,e.stateNode={isHidden:!1},e}function ku(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Pu(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function kd(e,t,n,r,o,i,a,s,l){return e=new Eb(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(i),e}function kb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function P0(e){if(!e)return Hn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ct(n))return kg(e,n,t)}return t}function O0(e,t,n,r,o,i,a,s,l){return e=kd(n,r,!0,e,o,i,a,s,l),e.context=P0(null),n=e.current,r=ot(),o=Ln(n),i=en(r,o),i.callback=t!=null?t:null,Dn(n,i,o),e.current.lanes=o,Li(e,o,r),ft(e,r),e}function ul(e,t,n,r){var o=t.current,i=ot(),a=Ln(o);return n=P0(n),t.context===null?t.context=n:t.pendingContext=n,t=en(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(o,t,a),e!==null&&(jt(e,o,a,i),za(e,o,a)),a}function Ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pd(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function Pb(){return null}var R0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Od(e){this._internalRoot=e}cl.prototype.render=Od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ul(e,t,null,null)};cl.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wr(function(){ul(null,e,null,null)}),t[rn]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ig();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&sg(e)}};function Rd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Th(){}function Ob(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ps(a);i.call(u)}}var a=O0(t,r,e,0,null,!1,!1,"",Th);return e._reactRootContainer=a,e[rn]=a.current,gi(e.nodeType===8?e.parentNode:e),wr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ps(l);s.call(u)}}var l=kd(e,0,!1,null,null,!1,!1,"",Th);return e._reactRootContainer=l,e[rn]=l.current,gi(e.nodeType===8?e.parentNode:e),wr(function(){ul(t,l,n,r)}),l}function dl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Ps(a);s.call(l)}}ul(t,a,e,o)}else a=Ob(n,t,e,o,r);return Ps(a)}rg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ho(t.pendingLanes);n!==0&&(Kf(t,n|1),ft(t,Ne()),(ue&6)===0&&(fo=Ne()+500,Xn()))}break;case 13:wr(function(){var r=on(e,1);if(r!==null){var o=ot();jt(r,e,1,o)}}),Pd(e,1)}};Yf=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=ot();jt(t,e,134217728,n)}Pd(e,134217728)}};og=function(e){if(e.tag===13){var t=Ln(e),n=on(e,t);if(n!==null){var r=ot();jt(n,e,t,r)}Pd(e,t)}};ig=function(){return pe};ag=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};sc=function(e,t,n){switch(t){case"input":if(ec(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nl(r);if(!o)throw Error(N(90));Fv(r),ec(r,o)}}}break;case"textarea":zv(e,n);break;case"select":t=n.value,t!=null&&Jr(e,!!n.multiple,t,!1)}};Qv=$d;Gv=wr;var Rb={usingClientEntryPoint:!1,Events:[ji,Ur,nl,Hv,Vv,$d]},Fo={findFiberByHostInstance:sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_b={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qv(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||Pb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Js=ma.inject(_b),Qt=ma}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rb;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(t))throw Error(N(200));return kb(e,t,null,n)};yt.createRoot=function(e,t){if(!Rd(e))throw Error(N(299));var n=!1,r="",o=R0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=kd(e,1,!1,null,null,n,!1,r,o),e[rn]=t.current,gi(e.nodeType===8?e.parentNode:e),new Od(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=qv(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return wr(e)};yt.hydrate=function(e,t,n){if(!fl(t))throw Error(N(200));return dl(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!Rd(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=R0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=O0(t,null,e,1,n!=null?n:null,o,!1,i,a),e[rn]=t.current,gi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cl(t)};yt.render=function(e,t,n){if(!fl(t))throw Error(N(200));return dl(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!fl(e))throw Error(N(40));return e._reactRootContainer?(wr(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};yt.unstable_batchedUpdates=$d;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return dl(e,t,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=yt})(yo);const _0=bv(yo.exports);var Nh=yo.exports;Gu.createRoot=Nh.createRoot,Gu.hydrateRoot=Nh.hydrateRoot;function jc(e,t){return jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},jc(e,t)}function Bi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,jc(e,t)}var Wi=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var o=this,i=r||function(){};return this.listeners.push(i),this.onSubscribe(),function(){o.listeners=o.listeners.filter(function(a){return a!==i}),o.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}();function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var Os=typeof window>"u";function et(){}function Ab(e,t){return typeof e=="function"?e(t):e}function Uc(e){return typeof e=="number"&&e>=0&&e!==1/0}function Rs(e){return Array.isArray(e)?e:[e]}function A0(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Qa(e,t,n){return pl(e)?typeof t=="function"?L({},n,{queryKey:e,queryFn:t}):L({},t,{queryKey:e}):e}function Sn(e,t,n){return pl(e)?[L({},t,{queryKey:e}),n]:[e||{},t]}function Tb(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e!=null?e:!t;return n?"active":"inactive"}function Mh(e,t){var n=e.active,r=e.exact,o=e.fetching,i=e.inactive,a=e.predicate,s=e.queryKey,l=e.stale;if(pl(s)){if(r){if(t.queryHash!==_d(s,t.options))return!1}else if(!_s(t.queryKey,s))return!1}var u=Tb(n,i);if(u==="none")return!1;if(u!=="all"){var c=t.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof o=="boolean"&&t.isFetching()!==o||a&&!a(t))}function Ih(e,t){var n=e.exact,r=e.fetching,o=e.predicate,i=e.mutationKey;if(pl(i)){if(!t.options.mutationKey)return!1;if(n){if(cr(t.options.mutationKey)!==cr(i))return!1}else if(!_s(t.options.mutationKey,i))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||o&&!o(t))}function _d(e,t){var n=(t==null?void 0:t.queryKeyHashFn)||cr;return n(e)}function cr(e){var t=Rs(e);return Nb(t)}function Nb(e){return JSON.stringify(e,function(t,n){return Bc(n)?Object.keys(n).sort().reduce(function(r,o){return r[o]=n[o],r},{}):n})}function _s(e,t){return T0(Rs(e),Rs(t))}function T0(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!T0(e[n],t[n])}):!1}function As(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||Bc(e)&&Bc(t)){for(var r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),i=o.length,a=n?[]:{},s=0,l=0;l<i;l++){var u=n?l:o[l];a[u]=As(e[u],t[u]),a[u]===e[u]&&s++}return r===i&&s===r?e:a}return t}function Mb(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function Bc(e){if(!Dh(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Dh(n)||!n.hasOwnProperty("isPrototypeOf"))}function Dh(e){return Object.prototype.toString.call(e)==="[object Object]"}function pl(e){return typeof e=="string"||Array.isArray(e)}function Ib(e){return new Promise(function(t){setTimeout(t,e)})}function Fh(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function N0(){if(typeof AbortController=="function")return new AbortController}var Db=function(e){Bi(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var i;if(!Os&&((i=window)==null?void 0:i.addEventListener)){var a=function(){return o()};return window.addEventListener("visibilitychange",a,!1),window.addEventListener("focus",a,!1),function(){window.removeEventListener("visibilitychange",a),window.removeEventListener("focus",a)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var i,a=this;this.setup=o,(i=this.cleanup)==null||i.call(this),this.cleanup=o(function(s){typeof s=="boolean"?a.setFocused(s):a.onFocus()})},n.setFocused=function(o){this.focused=o,o&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(o){o()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Wi),oi=new Db,Fb=function(e){Bi(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var i;if(!Os&&((i=window)==null?void 0:i.addEventListener)){var a=function(){return o()};return window.addEventListener("online",a,!1),window.addEventListener("offline",a,!1),function(){window.removeEventListener("online",a),window.removeEventListener("offline",a)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var i,a=this;this.setup=o,(i=this.cleanup)==null||i.call(this),this.cleanup=o(function(s){typeof s=="boolean"?a.setOnline(s):a.onOnline()})},n.setOnline=function(o){this.online=o,o&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(o){o()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Wi),Ga=new Fb;function Lb(e){return Math.min(1e3*Math.pow(2,e),3e4)}function Ts(e){return typeof(e==null?void 0:e.cancel)=="function"}var M0=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function Ka(e){return e instanceof M0}var I0=function(t){var n=this,r=!1,o,i,a,s;this.abort=t.abort,this.cancel=function(p){return o==null?void 0:o(p)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return i==null?void 0:i()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,h){a=p,s=h});var l=function(h){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(h),i==null||i(),a(h))},u=function(h){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(h),i==null||i(),s(h))},c=function(){return new Promise(function(h){i=h,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){i=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},f=function p(){if(!n.isResolved){var h;try{h=t.fn()}catch(m){h=Promise.reject(m)}o=function(y){if(!n.isResolved&&(u(new M0(y)),n.abort==null||n.abort(),Ts(h)))try{h.cancel()}catch{}},n.isTransportCancelable=Ts(h),Promise.resolve(h).then(l).catch(function(m){var y,$;if(!n.isResolved){var g=(y=t.retry)!=null?y:3,v=($=t.retryDelay)!=null?$:Lb,x=typeof v=="function"?v(n.failureCount,m):v,w=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,m);if(r||!w){u(m);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,m),Ib(x).then(function(){if(!oi.isFocused()||!Ga.isOnline())return c()}).then(function(){r?u(m):p()})}})}};f()},zb=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var o;this.transactions++;try{o=r()}finally{this.transactions--,this.transactions||this.flush()}return o},t.schedule=function(r){var o=this;this.transactions?this.queue.push(r):Fh(function(){o.notifyFn(r)})},t.batchCalls=function(r){var o=this;return function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];o.schedule(function(){r.apply(void 0,a)})}},t.flush=function(){var r=this,o=this.queue;this.queue=[],o.length&&Fh(function(){r.batchNotifyFn(function(){o.forEach(function(i){r.notifyFn(i)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),_e=new zb,D0=console;function Ns(){return D0}function jb(e){D0=e}var Ub=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var o;this.options=L({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(o=this.options.cacheTime)!=null?o:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Uc(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,o){var i,a,s=this.state.data,l=Ab(r,s);return(i=(a=this.options).isDataEqual)!=null&&i.call(a,s,l)?l=s:this.options.structuralSharing!==!1&&(l=As(s,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:o==null?void 0:o.updatedAt}),l},t.setState=function(r,o){this.dispatch({type:"setState",state:r,setStateOptions:o})},t.cancel=function(r){var o,i=this.promise;return(o=this.retryer)==null||o.cancel(r),i?i.then(et).catch(et):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!A0(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,o=this.observers.find(function(i){return i.shouldFetchOnWindowFocus()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,o=this.observers.find(function(i){return i.shouldFetchOnReconnect()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(o){return o!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,o){var i=this,a,s,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(o==null?void 0:o.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(v){return v.options.queryFn});c&&this.setOptions(c.options)}var f=Rs(this.queryKey),p=N0(),h={queryKey:f,pageParam:void 0,meta:this.meta};Object.defineProperty(h,"signal",{enumerable:!0,get:function(){if(p)return i.abortSignalConsumed=!0,p.signal}});var m=function(){return i.options.queryFn?(i.abortSignalConsumed=!1,i.options.queryFn(h)):Promise.reject("Missing queryFn")},y={fetchOptions:o,options:this.options,queryKey:f,state:this.state,fetchFn:m,meta:this.meta};if((a=this.options.behavior)!=null&&a.onFetch){var $;($=this.options.behavior)==null||$.onFetch(y)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((s=y.fetchOptions)==null?void 0:s.meta)){var g;this.dispatch({type:"fetch",meta:(g=y.fetchOptions)==null?void 0:g.meta})}return this.retryer=new I0({fn:y.fetchFn,abort:p==null||(l=p.abort)==null?void 0:l.bind(p),onSuccess:function(x){i.setData(x),i.cache.config.onSuccess==null||i.cache.config.onSuccess(x,i),i.cacheTime===0&&i.optionalRemove()},onError:function(x){Ka(x)&&x.silent||i.dispatch({type:"error",error:x}),Ka(x)||(i.cache.config.onError==null||i.cache.config.onError(x,i),Ns().error(x)),i.cacheTime===0&&i.optionalRemove()},onFail:function(){i.dispatch({type:"failed"})},onPause:function(){i.dispatch({type:"pause"})},onContinue:function(){i.dispatch({type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var o=this;this.state=this.reducer(this.state,r),_e.batch(function(){o.observers.forEach(function(i){i.onQueryUpdate(r)}),o.cache.notify({query:o,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var o=typeof r.initialData=="function"?r.initialData():r.initialData,i=typeof r.initialData<"u",a=i?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,s=typeof o<"u";return{data:o,dataUpdateCount:0,dataUpdatedAt:s?a!=null?a:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:s?"success":"idle"}},t.reducer=function(r,o){var i,a;switch(o.type){case"failed":return L({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return L({},r,{isPaused:!0});case"continue":return L({},r,{isPaused:!1});case"fetch":return L({},r,{fetchFailureCount:0,fetchMeta:(i=o.meta)!=null?i:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return L({},r,{data:o.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(a=o.dataUpdatedAt)!=null?a:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var s=o.error;return Ka(s)&&s.revert&&this.revertState?L({},this.revertState):L({},r,{error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return L({},r,{isInvalidated:!0});case"setState":return L({},r,o.state);default:return r}},e}(),Bb=function(e){Bi(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.queries=[],o.queriesMap={},o}var n=t.prototype;return n.build=function(o,i,a){var s,l=i.queryKey,u=(s=i.queryHash)!=null?s:_d(l,i),c=this.get(u);return c||(c=new Ub({cache:this,queryKey:l,queryHash:u,options:o.defaultQueryOptions(i),state:a,defaultOptions:o.getQueryDefaults(l),meta:i.meta}),this.add(c)),c},n.add=function(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"queryAdded",query:o}))},n.remove=function(o){var i=this.queriesMap[o.queryHash];i&&(o.destroy(),this.queries=this.queries.filter(function(a){return a!==o}),i===o&&delete this.queriesMap[o.queryHash],this.notify({type:"queryRemoved",query:o}))},n.clear=function(){var o=this;_e.batch(function(){o.queries.forEach(function(i){o.remove(i)})})},n.get=function(o){return this.queriesMap[o]},n.getAll=function(){return this.queries},n.find=function(o,i){var a=Sn(o,i),s=a[0];return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(function(l){return Mh(s,l)})},n.findAll=function(o,i){var a=Sn(o,i),s=a[0];return Object.keys(s).length>0?this.queries.filter(function(l){return Mh(s,l)}):this.queries},n.notify=function(o){var i=this;_e.batch(function(){i.listeners.forEach(function(a){a(o)})})},n.onFocus=function(){var o=this;_e.batch(function(){o.queries.forEach(function(i){i.onFocus()})})},n.onOnline=function(){var o=this;_e.batch(function(){o.queries.forEach(function(i){i.onOnline()})})},t}(Wi),Wb=function(){function e(n){this.options=L({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||Hb(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(o){return o!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(et).catch(et)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,o,i=this.state.status==="loading",a=Promise.resolve();return i||(this.dispatch({type:"loading",variables:this.options.variables}),a=a.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(s){s!==r.state.context&&r.dispatch({type:"loading",context:s,variables:r.state.variables})})),a.then(function(){return r.executeMutation()}).then(function(s){o=s,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(o,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(o,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(o,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:o}),o}).catch(function(s){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(s,r.state.variables,r.state.context,r),Ns().error(s),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(s,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,s,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:s}),s})})},t.executeMutation=function(){var r=this,o;return this.retryer=new I0({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(o=this.options.retry)!=null?o:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var o=this;this.state=Vb(this.state,r),_e.batch(function(){o.observers.forEach(function(i){i.onMutationUpdate(r)}),o.mutationCache.notify(o)})},e}();function Hb(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function Vb(e,t){switch(t.type){case"failed":return L({},e,{failureCount:e.failureCount+1});case"pause":return L({},e,{isPaused:!0});case"continue":return L({},e,{isPaused:!1});case"loading":return L({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return L({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return L({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return L({},e,t.state);default:return e}}var Qb=function(e){Bi(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.mutations=[],o.mutationId=0,o}var n=t.prototype;return n.build=function(o,i,a){var s=new Wb({mutationCache:this,mutationId:++this.mutationId,options:o.defaultMutationOptions(i),state:a,defaultOptions:i.mutationKey?o.getMutationDefaults(i.mutationKey):void 0,meta:i.meta});return this.add(s),s},n.add=function(o){this.mutations.push(o),this.notify(o)},n.remove=function(o){this.mutations=this.mutations.filter(function(i){return i!==o}),o.cancel(),this.notify(o)},n.clear=function(){var o=this;_e.batch(function(){o.mutations.forEach(function(i){o.remove(i)})})},n.getAll=function(){return this.mutations},n.find=function(o){return typeof o.exact>"u"&&(o.exact=!0),this.mutations.find(function(i){return Ih(o,i)})},n.findAll=function(o){return this.mutations.filter(function(i){return Ih(o,i)})},n.notify=function(o){var i=this;_e.batch(function(){i.listeners.forEach(function(a){a(o)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var o=this.mutations.filter(function(i){return i.state.isPaused});return _e.batch(function(){return o.reduce(function(i,a){return i.then(function(){return a.continue().catch(et)})},Promise.resolve())})},t}(Wi);function Gb(){return{onFetch:function(t){t.fetchFn=function(){var n,r,o,i,a,s,l=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(o=t.fetchOptions)==null||(i=o.meta)==null?void 0:i.fetchMore,c=u==null?void 0:u.pageParam,f=(u==null?void 0:u.direction)==="forward",p=(u==null?void 0:u.direction)==="backward",h=((a=t.state.data)==null?void 0:a.pages)||[],m=((s=t.state.data)==null?void 0:s.pageParams)||[],y=N0(),$=y==null?void 0:y.signal,g=m,v=!1,x=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},w=function(oe,ne,$e,ge){return g=ge?[ne].concat(g):[].concat(g,[ne]),ge?[$e].concat(oe):[].concat(oe,[$e])},S=function(oe,ne,$e,ge){if(v)return Promise.reject("Cancelled");if(typeof $e>"u"&&!ne&&oe.length)return Promise.resolve(oe);var T={queryKey:t.queryKey,signal:$,pageParam:$e,meta:t.meta},A=x(T),j=Promise.resolve(A).then(function(I){return w(oe,$e,I,ge)});if(Ts(A)){var K=j;K.cancel=A.cancel}return j},C;if(!h.length)C=S([]);else if(f){var k=typeof c<"u",P=k?c:Lh(t.options,h);C=S(h,k,P)}else if(p){var _=typeof c<"u",D=_?c:Kb(t.options,h);C=S(h,_,D,!0)}else(function(){g=[];var Z=typeof t.options.getNextPageParam>"u",oe=l&&h[0]?l(h[0],0,h):!0;C=oe?S([],Z,m[0]):Promise.resolve(w([],m[0],h[0]));for(var ne=function(T){C=C.then(function(A){var j=l&&h[T]?l(h[T],T,h):!0;if(j){var K=Z?m[T]:Lh(t.options,A);return S(A,Z,K)}return Promise.resolve(w(A,m[T],h[T]))})},$e=1;$e<h.length;$e++)ne($e)})();var X=C.then(function(Z){return{pages:Z,pageParams:g}}),J=X;return J.cancel=function(){v=!0,y==null||y.abort(),Ts(C)&&C.cancel()},X}}}}function Lh(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function Kb(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var Yb=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new Bb,this.mutationCache=n.mutationCache||new Qb,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=oi.subscribe(function(){oi.isFocused()&&Ga.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Ga.subscribe(function(){oi.isFocused()&&Ga.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,o;(r=this.unsubscribeFocus)==null||r.call(this),(o=this.unsubscribeOnline)==null||o.call(this)},t.isFetching=function(r,o){var i=Sn(r,o),a=i[0];return a.fetching=!0,this.queryCache.findAll(a).length},t.isMutating=function(r){return this.mutationCache.findAll(L({},r,{fetching:!0})).length},t.getQueryData=function(r,o){var i;return(i=this.queryCache.find(r,o))==null?void 0:i.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(o){var i=o.queryKey,a=o.state,s=a.data;return[i,s]})},t.setQueryData=function(r,o,i){var a=Qa(r),s=this.defaultQueryOptions(a);return this.queryCache.build(this,s).setData(o,i)},t.setQueriesData=function(r,o,i){var a=this;return _e.batch(function(){return a.getQueryCache().findAll(r).map(function(s){var l=s.queryKey;return[l,a.setQueryData(l,o,i)]})})},t.getQueryState=function(r,o){var i;return(i=this.queryCache.find(r,o))==null?void 0:i.state},t.removeQueries=function(r,o){var i=Sn(r,o),a=i[0],s=this.queryCache;_e.batch(function(){s.findAll(a).forEach(function(l){s.remove(l)})})},t.resetQueries=function(r,o,i){var a=this,s=Sn(r,o,i),l=s[0],u=s[1],c=this.queryCache,f=L({},l,{active:!0});return _e.batch(function(){return c.findAll(l).forEach(function(p){p.reset()}),a.refetchQueries(f,u)})},t.cancelQueries=function(r,o,i){var a=this,s=Sn(r,o,i),l=s[0],u=s[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var f=_e.batch(function(){return a.queryCache.findAll(l).map(function(p){return p.cancel(c)})});return Promise.all(f).then(et).catch(et)},t.invalidateQueries=function(r,o,i){var a,s,l,u=this,c=Sn(r,o,i),f=c[0],p=c[1],h=L({},f,{active:(a=(s=f.refetchActive)!=null?s:f.active)!=null?a:!0,inactive:(l=f.refetchInactive)!=null?l:!1});return _e.batch(function(){return u.queryCache.findAll(f).forEach(function(m){m.invalidate()}),u.refetchQueries(h,p)})},t.refetchQueries=function(r,o,i){var a=this,s=Sn(r,o,i),l=s[0],u=s[1],c=_e.batch(function(){return a.queryCache.findAll(l).map(function(p){return p.fetch(void 0,L({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),f=Promise.all(c).then(et);return u!=null&&u.throwOnError||(f=f.catch(et)),f},t.fetchQuery=function(r,o,i){var a=Qa(r,o,i),s=this.defaultQueryOptions(a);typeof s.retry>"u"&&(s.retry=!1);var l=this.queryCache.build(this,s);return l.isStaleByTime(s.staleTime)?l.fetch(s):Promise.resolve(l.state.data)},t.prefetchQuery=function(r,o,i){return this.fetchQuery(r,o,i).then(et).catch(et)},t.fetchInfiniteQuery=function(r,o,i){var a=Qa(r,o,i);return a.behavior=Gb(),this.fetchQuery(a)},t.prefetchInfiniteQuery=function(r,o,i){return this.fetchInfiniteQuery(r,o,i).then(et).catch(et)},t.cancelMutations=function(){var r=this,o=_e.batch(function(){return r.mutationCache.getAll().map(function(i){return i.cancel()})});return Promise.all(o).then(et).catch(et)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,o){var i=this.queryDefaults.find(function(a){return cr(r)===cr(a.queryKey)});i?i.defaultOptions=o:this.queryDefaults.push({queryKey:r,defaultOptions:o})},t.getQueryDefaults=function(r){var o;return r?(o=this.queryDefaults.find(function(i){return _s(r,i.queryKey)}))==null?void 0:o.defaultOptions:void 0},t.setMutationDefaults=function(r,o){var i=this.mutationDefaults.find(function(a){return cr(r)===cr(a.mutationKey)});i?i.defaultOptions=o:this.mutationDefaults.push({mutationKey:r,defaultOptions:o})},t.getMutationDefaults=function(r){var o;return r?(o=this.mutationDefaults.find(function(i){return _s(r,i.mutationKey)}))==null?void 0:o.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var o=L({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!o.queryHash&&o.queryKey&&(o.queryHash=_d(o.queryKey,o)),o},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:L({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),qb=function(e){Bi(t,e);function t(r,o){var i;return i=e.call(this)||this,i.client=r,i.options=o,i.trackedProps=[],i.selectError=null,i.bindMethods(),i.setOptions(o),i}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),zh(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Wc(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Wc(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(o,i){var a=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(o),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var l=this.hasListeners();l&&jh(this.currentQuery,s,this.options,a)&&this.executeFetch(),this.updateResult(i),l&&(this.currentQuery!==s||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==s||this.options.enabled!==a.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},n.getOptimisticResult=function(o){var i=this.client.defaultQueryObserverOptions(o),a=this.client.getQueryCache().build(this.client,i);return this.createResult(a,i)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(o,i){var a=this,s={},l=function(c){a.trackedProps.includes(c)||a.trackedProps.push(c)};return Object.keys(o).forEach(function(u){Object.defineProperty(s,u,{configurable:!1,enumerable:!0,get:function(){return l(u),o[u]}})}),(i.useErrorBoundary||i.suspense)&&l("error"),s},n.getNextResult=function(o){var i=this;return new Promise(function(a,s){var l=i.subscribe(function(u){u.isFetching||(l(),u.isError&&(o==null?void 0:o.throwOnError)?s(u.error):a(u))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(o){return this.fetch(L({},o,{meta:{refetchPage:o==null?void 0:o.refetchPage}}))},n.fetchOptimistic=function(o){var i=this,a=this.client.defaultQueryObserverOptions(o),s=this.client.getQueryCache().build(this.client,a);return s.fetch().then(function(){return i.createResult(s,a)})},n.fetch=function(o){var i=this;return this.executeFetch(o).then(function(){return i.updateResult(),i.currentResult})},n.executeFetch=function(o){this.updateQuery();var i=this.currentQuery.fetch(this.options,o);return o!=null&&o.throwOnError||(i=i.catch(et)),i},n.updateStaleTimeout=function(){var o=this;if(this.clearStaleTimeout(),!(Os||this.currentResult.isStale||!Uc(this.options.staleTime))){var i=A0(this.currentResult.dataUpdatedAt,this.options.staleTime),a=i+1;this.staleTimeoutId=setTimeout(function(){o.currentResult.isStale||o.updateResult()},a)}},n.computeRefetchInterval=function(){var o;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(o=this.options.refetchInterval)!=null?o:!1},n.updateRefetchInterval=function(o){var i=this;this.clearRefetchInterval(),this.currentRefetchInterval=o,!(Os||this.options.enabled===!1||!Uc(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(i.options.refetchIntervalInBackground||oi.isFocused())&&i.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(o,i){var a=this.currentQuery,s=this.options,l=this.currentResult,u=this.currentResultState,c=this.currentResultOptions,f=o!==a,p=f?o.state:this.currentQueryInitialState,h=f?this.currentResult:this.previousQueryResult,m=o.state,y=m.dataUpdatedAt,$=m.error,g=m.errorUpdatedAt,v=m.isFetching,x=m.status,w=!1,S=!1,C;if(i.optimisticResults){var k=this.hasListeners(),P=!k&&zh(o,i),_=k&&jh(o,a,i,s);(P||_)&&(v=!0,y||(x="loading"))}if(i.keepPreviousData&&!m.dataUpdateCount&&(h==null?void 0:h.isSuccess)&&x!=="error")C=h.data,y=h.dataUpdatedAt,x=h.status,w=!0;else if(i.select&&typeof m.data<"u")if(l&&m.data===(u==null?void 0:u.data)&&i.select===this.selectFn)C=this.selectResult;else try{this.selectFn=i.select,C=i.select(m.data),i.structuralSharing!==!1&&(C=As(l==null?void 0:l.data,C)),this.selectResult=C,this.selectError=null}catch(J){Ns().error(J),this.selectError=J}else C=m.data;if(typeof i.placeholderData<"u"&&typeof C>"u"&&(x==="loading"||x==="idle")){var D;if((l==null?void 0:l.isPlaceholderData)&&i.placeholderData===(c==null?void 0:c.placeholderData))D=l.data;else if(D=typeof i.placeholderData=="function"?i.placeholderData():i.placeholderData,i.select&&typeof D<"u")try{D=i.select(D),i.structuralSharing!==!1&&(D=As(l==null?void 0:l.data,D)),this.selectError=null}catch(J){Ns().error(J),this.selectError=J}typeof D<"u"&&(x="success",C=D,S=!0)}this.selectError&&($=this.selectError,C=this.selectResult,g=Date.now(),x="error");var X={status:x,isLoading:x==="loading",isSuccess:x==="success",isError:x==="error",isIdle:x==="idle",data:C,dataUpdatedAt:y,error:$,errorUpdatedAt:g,failureCount:m.fetchFailureCount,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:v,isRefetching:v&&x!=="loading",isLoadingError:x==="error"&&m.dataUpdatedAt===0,isPlaceholderData:S,isPreviousData:w,isRefetchError:x==="error"&&m.dataUpdatedAt!==0,isStale:Ad(o,i),refetch:this.refetch,remove:this.remove};return X},n.shouldNotifyListeners=function(o,i){if(!i)return!0;var a=this.options,s=a.notifyOnChangeProps,l=a.notifyOnChangePropsExclusions;if(!s&&!l||s==="tracked"&&!this.trackedProps.length)return!0;var u=s==="tracked"?this.trackedProps:s;return Object.keys(o).some(function(c){var f=c,p=o[f]!==i[f],h=u==null?void 0:u.some(function(y){return y===c}),m=l==null?void 0:l.some(function(y){return y===c});return p&&!m&&(!u||h)})},n.updateResult=function(o){var i=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Mb(this.currentResult,i)){var a={cache:!0};(o==null?void 0:o.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,i)&&(a.listeners=!0),this.notify(L({},a,o))}},n.updateQuery=function(){var o=this.client.getQueryCache().build(this.client,this.options);if(o!==this.currentQuery){var i=this.currentQuery;this.currentQuery=o,this.currentQueryInitialState=o.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(i==null||i.removeObserver(this),o.addObserver(this))}},n.onQueryUpdate=function(o){var i={};o.type==="success"?i.onSuccess=!0:o.type==="error"&&!Ka(o.error)&&(i.onError=!0),this.updateResult(i),this.hasListeners()&&this.updateTimers()},n.notify=function(o){var i=this;_e.batch(function(){o.onSuccess?(i.options.onSuccess==null||i.options.onSuccess(i.currentResult.data),i.options.onSettled==null||i.options.onSettled(i.currentResult.data,null)):o.onError&&(i.options.onError==null||i.options.onError(i.currentResult.error),i.options.onSettled==null||i.options.onSettled(void 0,i.currentResult.error)),o.listeners&&i.listeners.forEach(function(a){a(i.currentResult)}),o.cache&&i.client.getQueryCache().notify({query:i.currentQuery,type:"observerResultsUpdated"})})},t}(Wi);function Xb(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function zh(e,t){return Xb(e,t)||e.state.dataUpdatedAt>0&&Wc(e,t,t.refetchOnMount)}function Wc(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Ad(e,t)}return!1}function jh(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Ad(e,n)}function Ad(e,t){return e.isStaleByTime(t.staleTime)}var Jb=_0.unstable_batchedUpdates;_e.setBatchNotifyFunction(Jb);var Zb=console;jb(Zb);var hl={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e2=d.exports,t2=Symbol.for("react.element"),n2=Symbol.for("react.fragment"),r2=Object.prototype.hasOwnProperty,o2=e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i2={key:!0,ref:!0,__self:!0,__source:!0};function F0(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)r2.call(t,r)&&!i2.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:t2,type:e,key:i,ref:a,props:o,_owner:o2.current}}ml.Fragment=n2;ml.jsx=F0;ml.jsxs=F0;(function(e){e.exports=ml})(hl);const Pr=hl.exports.Fragment,b=hl.exports.jsx,M=hl.exports.jsxs;var Uh=le.createContext(void 0),L0=le.createContext(!1);function z0(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Uh),window.ReactQueryClientContext):Uh}var a2=function(){var t=le.useContext(z0(le.useContext(L0)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},s2=function(t){var n=t.client,r=t.contextSharing,o=r===void 0?!1:r,i=t.children;le.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var a=z0(o);return b(L0.Provider,{value:o,children:b(a.Provider,{value:n,children:i})})};function l2(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var u2=le.createContext(l2()),c2=function(){return le.useContext(u2)};function f2(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function d2(e,t){var n=le.useRef(!1),r=le.useState(0),o=r[1],i=a2(),a=c2(),s=i.defaultQueryObserverOptions(e);s.optimisticResults=!0,s.onError&&(s.onError=_e.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=_e.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=_e.batchCalls(s.onSettled)),s.suspense&&(typeof s.staleTime!="number"&&(s.staleTime=1e3),s.cacheTime===0&&(s.cacheTime=1)),(s.suspense||s.useErrorBoundary)&&(a.isReset()||(s.retryOnMount=!1));var l=le.useState(function(){return new t(i,s)}),u=l[0],c=u.getOptimisticResult(s);if(le.useEffect(function(){n.current=!0,a.clearReset();var f=u.subscribe(_e.batchCalls(function(){n.current&&o(function(p){return p+1})}));return u.updateResult(),function(){n.current=!1,f()}},[a,u]),le.useEffect(function(){u.setOptions(s,{listeners:!1})},[s,u]),s.suspense&&c.isLoading)throw u.fetchOptimistic(s).then(function(f){var p=f.data;s.onSuccess==null||s.onSuccess(p),s.onSettled==null||s.onSettled(p,null)}).catch(function(f){a.clearReset(),s.onError==null||s.onError(f),s.onSettled==null||s.onSettled(void 0,f)});if(c.isError&&!a.isReset()&&!c.isFetching&&f2(s.suspense,s.useErrorBoundary,[c.error,u.getCurrentQuery()]))throw c.error;return s.notifyOnChangeProps==="tracked"&&(c=u.trackResult(c,s)),c}function j0(e,t,n){var r=Qa(e,t,n);return d2(r,qb)}/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ms.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const Bh="popstate";function p2(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Hc("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Vc(o)}return m2(t,n,null,e)}function h2(){return Math.random().toString(36).substr(2,8)}function Wh(e){return{usr:e.state,key:e.key}}function Hc(e,t,n,r){return n===void 0&&(n=null),Ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bo(t):t,{state:n,key:t&&t.key||r||h2()})}function Vc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Rn.Pop,l=null;function u(){s=Rn.Pop,l&&l({action:s,location:p.location})}function c(h,m){s=Rn.Push;let y=Hc(p.location,h,m);n&&n(y,h);let $=Wh(y),g=p.createHref(y);try{a.pushState($,"",g)}catch{o.location.assign(g)}i&&l&&l({action:s,location:y})}function f(h,m){s=Rn.Replace;let y=Hc(p.location,h,m);n&&n(y,h);let $=Wh(y),g=p.createHref(y);a.replaceState($,"",g),i&&l&&l({action:s,location:y})}let p={get action(){return s},get location(){return e(o,a)},listen(h){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Bh,u),l=h,()=>{o.removeEventListener(Bh,u),l=null}},createHref(h){return t(o,h)},push:c,replace:f,go(h){return a.go(h)}};return p}var Hh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hh||(Hh={}));function v2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?bo(t):t,o=B0(r.pathname||"/",n);if(o==null)return null;let i=U0(e);g2(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=k2(i[s],o);return a}function U0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(je(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=jn([r,a.relativePath]),l=n.concat(a);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),U0(o.children,t,l,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:C2(s,o.index),routesMeta:l})}),t}function g2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:E2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y2=/^:\w+$/,x2=3,w2=2,b2=1,$2=10,S2=-2,Vh=e=>e==="*";function C2(e,t){let n=e.split("/"),r=n.length;return n.some(Vh)&&(r+=S2),t&&(r+=w2),n.filter(o=>!Vh(o)).reduce((o,i)=>o+(y2.test(i)?x2:i===""?b2:$2),r)}function E2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function k2(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=Td({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;i.push({params:r,pathname:jn([o,c.pathname]),pathnameBase:A2(jn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=jn([o,c.pathnameBase]))}return i}function Td(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=s[f]||"";a=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=O2(s[f]||"",c),u},{}),pathname:i,pathnameBase:a,pattern:e}}function P2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),W0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function O2(e,t){try{return decodeURIComponent(e)}catch(n){return W0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function B0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function W0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?bo(e):e;return{pathname:n?n.startsWith("/")?n:_2(n,t):t,search:T2(r),hash:N2(o)}}function _2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ou(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=bo(e):(o=Ms({},e),je(!o.pathname||!o.pathname.includes("?"),Ou("?","pathname","search",o)),je(!o.pathname||!o.pathname.includes("#"),Ou("#","pathname","hash",o)),je(!o.search||!o.search.includes("#"),Ou("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=R2(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),A2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,N2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class M2{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function I2(e){return e instanceof M2}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qc.apply(this,arguments)}function D2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const F2=typeof Object.is=="function"?Object.is:D2,{useState:L2,useEffect:z2,useLayoutEffect:j2,useDebugValue:U2}=rs;function B2(e,t,n){const r=t(),[{inst:o},i]=L2({inst:{value:r,getSnapshot:t}});return j2(()=>{o.value=r,o.getSnapshot=t,Ru(o)&&i({inst:o})},[e,r,t]),z2(()=>(Ru(o)&&i({inst:o}),e(()=>{Ru(o)&&i({inst:o})})),[e]),U2(r),r}function Ru(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!F2(n,r)}catch{return!0}}function W2(e,t,n){return t()}const H2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V2=!H2,Q2=V2?W2:B2;"useSyncExternalStore"in rs&&(e=>e.useSyncExternalStore)(rs);const G2=d.exports.createContext(null),K2=d.exports.createContext(null),Nd=d.exports.createContext(null),Md=d.exports.createContext(null),vl=d.exports.createContext(null),$o=d.exports.createContext({outlet:null,matches:[]}),V0=d.exports.createContext(null);function Y2(e,t){let{relative:n}=t===void 0?{}:t;So()||je(!1);let{basename:r,navigator:o}=d.exports.useContext(Md),{hash:i,pathname:a,search:s}=Is(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:jn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function So(){return d.exports.useContext(vl)!=null}function Or(){return So()||je(!1),d.exports.useContext(vl).location}function q2(e){So()||je(!1);let{pathname:t}=Or();return d.exports.useMemo(()=>Td(e,t),[t,e])}function Q0(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function X2(){So()||je(!1);let{basename:e,navigator:t}=d.exports.useContext(Md),{matches:n}=d.exports.useContext($o),{pathname:r}=Or(),o=JSON.stringify(Q0(n).map(s=>s.pathnameBase)),i=d.exports.useRef(!1);return d.exports.useEffect(()=>{i.current=!0}),d.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let u=H0(s,JSON.parse(o),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:jn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,o,r])}function Id(){let{matches:e}=d.exports.useContext($o),t=e[e.length-1];return t?t.params:{}}function Is(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=d.exports.useContext($o),{pathname:o}=Or(),i=JSON.stringify(Q0(r).map(a=>a.pathnameBase));return d.exports.useMemo(()=>H0(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function J2(e,t){So()||je(!1);let n=d.exports.useContext(Nd),{matches:r}=d.exports.useContext($o),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=Or(),l;if(t){var u;let m=typeof t=="string"?bo(t):t;a==="/"||((u=m.pathname)==null?void 0:u.startsWith(a))||je(!1),l=m}else l=s;let c=l.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",p=v2(e,{pathname:f}),h=n$(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:jn([a,m.pathname]),pathnameBase:m.pathnameBase==="/"?a:jn([a,m.pathnameBase])})),r,n||void 0);return t?b(vl.Provider,{value:{location:Qc({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Rn.Pop},children:h}):h}function Z2(){let e=o$(),t=I2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return M(Pr,{children:[b("h2",{children:"Unhandled Thrown Error!"}),b("h3",{style:{fontStyle:"italic"},children:t}),n?b("pre",{style:o,children:n}):null,b("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),M("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",b("code",{style:i,children:"errorElement"})," props on\xA0",b("code",{style:i,children:"<Route>"})]})]})}class e$ extends d.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b(V0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function t$(e){let{routeContext:t,match:n,children:r}=e,o=d.exports.useContext(G2);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),b($o.Provider,{value:t,children:r})}function n$(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||je(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,s)=>{let l=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||b(Z2,{}):null,c=()=>b(t$,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,s+1))},children:l?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||s===0)?b(e$,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Qh;(function(e){e.UseRevalidator="useRevalidator"})(Qh||(Qh={}));var Gc;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Gc||(Gc={}));function r$(e){let t=d.exports.useContext(Nd);return t||je(!1),t}function o$(){var e;let t=d.exports.useContext(V0),n=r$(Gc.UseRouteError),r=d.exports.useContext($o),o=r.matches[r.matches.length-1];return t||(r||je(!1),o.route.id||je(!1),(e=n.errors)==null?void 0:e[o.route.id])}function rr(e){je(!1)}function i$(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Rn.Pop,navigator:i,static:a=!1}=e;So()&&je(!1);let s=t.replace(/^\/*/,"/"),l=d.exports.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=bo(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:h="default"}=r,m=d.exports.useMemo(()=>{let y=B0(u,s);return y==null?null:{pathname:y,search:c,hash:f,state:p,key:h}},[s,u,c,f,p,h]);return m==null?null:b(Md.Provider,{value:l,children:b(vl.Provider,{children:n,value:{location:m,navigationType:o}})})}function a$(e){let{children:t,location:n}=e,r=d.exports.useContext(K2),o=r&&!t?r.router.routes:Kc(t);return J2(o,n)}var Gh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Gh||(Gh={}));new Promise(()=>{});function Kc(e,t){t===void 0&&(t=[]);let n=[];return d.exports.Children.forEach(e,(r,o)=>{if(!d.exports.isValidElement(r))return;if(r.type===d.exports.Fragment){n.push.apply(n,Kc(r.props.children,t));return}r.type!==rr&&je(!1),!r.props.index||!r.props.children||je(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Kc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function G0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function s$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l$(e,t){return e.button===0&&(!t||t==="_self")&&!s$(e)}const u$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],c$=["aria-current","caseSensitive","className","end","style","to","children"];function f$(e){let{basename:t,children:n,window:r}=e,o=d.exports.useRef();o.current==null&&(o.current=p2({window:r,v5Compat:!0}));let i=o.current,[a,s]=d.exports.useState({action:i.action,location:i.location});return d.exports.useLayoutEffect(()=>i.listen(s),[i]),b(i$,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}const _n=d.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=G0(t,u$),p=Y2(u,{relative:o}),h=d$(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o});function m(y){r&&r(y),y.defaultPrevented||h(y)}return b("a",{...f,href:p,onClick:i?r:m,ref:n,target:l})}),Xt=d.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,children:u}=t,c=G0(t,c$),f=Is(l),p=q2({path:f.pathname,end:a,caseSensitive:o}),h=d.exports.useContext(Nd),m=h==null?void 0:h.navigation.location,y=Is(m||""),g=d.exports.useMemo(()=>m?Td({path:f.pathname,end:a,caseSensitive:o},y.pathname):null,[m,f.pathname,o,a,y.pathname])!=null,v=p!=null,x=v?r:void 0,w;typeof i=="function"?w=i({isActive:v,isPending:g}):w=[i,v?"active":null,g?"pending":null].filter(Boolean).join(" ");let S=typeof s=="function"?s({isActive:v,isPending:g}):s;return b(_n,{...c,"aria-current":x,className:w,ref:n,style:S,to:l,children:typeof u=="function"?u({isActive:v,isPending:g}):u})});var Kh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Kh||(Kh={}));var Yh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yh||(Yh={}));function d$(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=X2(),l=Or(),u=Is(e,{relative:a});return d.exports.useCallback(c=>{if(l$(c,n)){c.preventDefault();let f=r!==void 0?r:Vc(l)===Vc(u);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[l,s,u,r,o,n,e,i,a])}var Dd={exports:{}},he={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),gl=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),wl=Symbol.for("react.provider"),bl=Symbol.for("react.context"),p$=Symbol.for("react.server_context"),$l=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),kl=Symbol.for("react.lazy"),h$=Symbol.for("react.offscreen"),K0;K0=Symbol.for("react.module.reference");function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fd:switch(e=e.type,e){case gl:case xl:case yl:case Sl:case Cl:return e;default:switch(e=e&&e.$$typeof,e){case p$:case bl:case $l:case kl:case El:case wl:return e;default:return t}}case Ld:return t}}}he.ContextConsumer=bl;he.ContextProvider=wl;he.Element=Fd;he.ForwardRef=$l;he.Fragment=gl;he.Lazy=kl;he.Memo=El;he.Portal=Ld;he.Profiler=xl;he.StrictMode=yl;he.Suspense=Sl;he.SuspenseList=Cl;he.isAsyncMode=function(){return!1};he.isConcurrentMode=function(){return!1};he.isContextConsumer=function(e){return At(e)===bl};he.isContextProvider=function(e){return At(e)===wl};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fd};he.isForwardRef=function(e){return At(e)===$l};he.isFragment=function(e){return At(e)===gl};he.isLazy=function(e){return At(e)===kl};he.isMemo=function(e){return At(e)===El};he.isPortal=function(e){return At(e)===Ld};he.isProfiler=function(e){return At(e)===xl};he.isStrictMode=function(e){return At(e)===yl};he.isSuspense=function(e){return At(e)===Sl};he.isSuspenseList=function(e){return At(e)===Cl};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gl||e===xl||e===yl||e===Sl||e===Cl||e===h$||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===El||e.$$typeof===wl||e.$$typeof===bl||e.$$typeof===$l||e.$$typeof===K0||e.getModuleId!==void 0)};he.typeOf=At;(function(e){e.exports=he})(Dd);function m$(e){function t(I,z,U,Q,E){for(var G=0,F=0,te=0,ie=0,de,Y,De=0,Xe=0,se,Be=se=de=0,ce=0,Fe=0,$t=0,Ce=0,er=U.length,St=er-1,pt,q="",Te="",eu="",tu="",gn;ce<er;){if(Y=U.charCodeAt(ce),ce===St&&F+ie+te+G!==0&&(F!==0&&(Y=F===47?10:47),ie=te=G=0,er++,St++),F+ie+te+G===0){if(ce===St&&(0<Fe&&(q=q.replace(p,"")),0<q.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:q+=U.charAt(ce)}Y=59}switch(Y){case 123:for(q=q.trim(),de=q.charCodeAt(0),se=1,Ce=++ce;ce<er;){switch(Y=U.charCodeAt(ce)){case 123:se++;break;case 125:se--;break;case 47:switch(Y=U.charCodeAt(ce+1)){case 42:case 47:e:{for(Be=ce+1;Be<St;++Be)switch(U.charCodeAt(Be)){case 47:if(Y===42&&U.charCodeAt(Be-1)===42&&ce+2!==Be){ce=Be+1;break e}break;case 10:if(Y===47){ce=Be+1;break e}}ce=Be}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;ce++<St&&U.charCodeAt(ce)!==Y;);}if(se===0)break;ce++}switch(se=U.substring(Ce,ce),de===0&&(de=(q=q.replace(f,"").trim()).charCodeAt(0)),de){case 64:switch(0<Fe&&(q=q.replace(p,"")),Y=q.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Fe=z;break;default:Fe=$e}if(se=t(z,Fe,se,Y,E+1),Ce=se.length,0<T&&(Fe=n($e,q,$t),gn=s(3,se,Fe,z,Z,J,Ce,Y,E,Q),q=Fe.join(""),gn!==void 0&&(Ce=(se=gn.trim()).length)===0&&(Y=0,se="")),0<Ce)switch(Y){case 115:q=q.replace(C,a);case 100:case 109:case 45:se=q+"{"+se+"}";break;case 107:q=q.replace(v,"$1 $2"),se=q+"{"+se+"}",se=ne===1||ne===2&&i("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=q+se,Q===112&&(se=(Te+=se,""))}else se="";break;default:se=t(z,n(z,q,$t),se,Q,E+1)}eu+=se,se=$t=Fe=Be=de=0,q="",Y=U.charCodeAt(++ce);break;case 125:case 59:if(q=(0<Fe?q.replace(p,""):q).trim(),1<(Ce=q.length))switch(Be===0&&(de=q.charCodeAt(0),de===45||96<de&&123>de)&&(Ce=(q=q.replace(" ",":")).length),0<T&&(gn=s(1,q,z,I,Z,J,Te.length,Q,E,Q))!==void 0&&(Ce=(q=gn.trim()).length)===0&&(q="\0\0"),de=q.charCodeAt(0),Y=q.charCodeAt(1),de){case 0:break;case 64:if(Y===105||Y===99){tu+=q+U.charAt(ce);break}default:q.charCodeAt(Ce-1)!==58&&(Te+=o(q,de,Y,q.charCodeAt(2)))}$t=Fe=Be=de=0,q="",Y=U.charCodeAt(++ce)}}switch(Y){case 13:case 10:F===47?F=0:1+de===0&&Q!==107&&0<q.length&&(Fe=1,q+="\0"),0<T*j&&s(0,q,z,I,Z,J,Te.length,Q,E,Q),J=1,Z++;break;case 59:case 125:if(F+ie+te+G===0){J++;break}default:switch(J++,pt=U.charAt(ce),Y){case 9:case 32:if(ie+G+F===0)switch(De){case 44:case 58:case 9:case 32:pt="";break;default:Y!==32&&(pt=" ")}break;case 0:pt="\\0";break;case 12:pt="\\f";break;case 11:pt="\\v";break;case 38:ie+F+G===0&&(Fe=$t=1,pt="\f"+pt);break;case 108:if(ie+F+G+oe===0&&0<Be)switch(ce-Be){case 2:De===112&&U.charCodeAt(ce-3)===58&&(oe=De);case 8:Xe===111&&(oe=Xe)}break;case 58:ie+F+G===0&&(Be=ce);break;case 44:F+te+ie+G===0&&(Fe=1,pt+="\r");break;case 34:case 39:F===0&&(ie=ie===Y?0:ie===0?Y:ie);break;case 91:ie+F+te===0&&G++;break;case 93:ie+F+te===0&&G--;break;case 41:ie+F+G===0&&te--;break;case 40:if(ie+F+G===0){if(de===0)switch(2*De+3*Xe){case 533:break;default:de=1}te++}break;case 64:F+te+ie+G+Be+se===0&&(se=1);break;case 42:case 47:if(!(0<ie+G+te))switch(F){case 0:switch(2*Y+3*U.charCodeAt(ce+1)){case 235:F=47;break;case 220:Ce=ce,F=42}break;case 42:Y===47&&De===42&&Ce+2!==ce&&(U.charCodeAt(Ce+2)===33&&(Te+=U.substring(Ce,ce+1)),pt="",F=0)}}F===0&&(q+=pt)}Xe=De,De=Y,ce++}if(Ce=Te.length,0<Ce){if(Fe=z,0<T&&(gn=s(2,Te,Fe,I,Z,J,Ce,Q,E,Q),gn!==void 0&&(Te=gn).length===0))return tu+Te+eu;if(Te=Fe.join(",")+"{"+Te+"}",ne*oe!==0){switch(ne!==2||i(Te,2)||(oe=0),oe){case 111:Te=Te.replace(w,":-moz-$1")+Te;break;case 112:Te=Te.replace(x,"::-webkit-input-$1")+Te.replace(x,"::-moz-$1")+Te.replace(x,":-ms-input-$1")+Te}oe=0}}return tu+Te+eu}function n(I,z,U){var Q=z.trim().split($);z=Q;var E=Q.length,G=I.length;switch(G){case 0:case 1:var F=0;for(I=G===0?"":I[0]+" ";F<E;++F)z[F]=r(I,z[F],U).trim();break;default:var te=F=0;for(z=[];F<E;++F)for(var ie=0;ie<G;++ie)z[te++]=r(I[ie]+" ",Q[F],U).trim()}return z}function r(I,z,U){var Q=z.charCodeAt(0);switch(33>Q&&(Q=(z=z.trim()).charCodeAt(0)),Q){case 38:return z.replace(g,"$1"+I.trim());case 58:return I.trim()+z.replace(g,"$1"+I.trim());default:if(0<1*U&&0<z.indexOf("\f"))return z.replace(g,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+z}function o(I,z,U,Q){var E=I+";",G=2*z+3*U+4*Q;if(G===944){I=E.indexOf(":",9)+1;var F=E.substring(I,E.length-1).trim();return F=E.substring(0,I).trim()+F+";",ne===1||ne===2&&i(F,1)?"-webkit-"+F+F:F}if(ne===0||ne===2&&!i(E,1))return E;switch(G){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(X,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return F=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+E+"-ms-flex-pack"+F+E;case 1005:return m.test(E)?E.replace(h,":-webkit-")+E.replace(h,":-moz-")+E:E;case 1e3:switch(F=E.substring(13).trim(),z=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(z)){case 226:F=E.replace(S,"tb");break;case 232:F=E.replace(S,"tb-rl");break;case 220:F=E.replace(S,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+F+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(z=(E=I).length-10,F=(E.charCodeAt(z)===33?E.substring(0,z):E).substring(I.indexOf(":",7)+1).trim(),G=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:E=E.replace(F,"-webkit-"+F)+";"+E;break;case 207:case 102:E=E.replace(F,"-webkit-"+(102<G?"inline-":"")+"box")+";"+E.replace(F,"-webkit-"+F)+";"+E.replace(F,"-ms-"+F+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return F=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+F+"-ms-flex-"+F+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(D.test(I)===!0)return(F=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?o(I.replace("stretch","fill-available"),z,U,Q).replace(":fill-available",":stretch"):E.replace(F,"-webkit-"+F)+E.replace(F,"-moz-"+F.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,U+Q===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+E}return E}function i(I,z){var U=I.indexOf(z===1?":":"{"),Q=I.substring(0,z!==3?U:10);return U=I.substring(U+1,I.length-1),A(z!==2?Q:Q.replace(_,"$1"),U,z)}function a(I,z){var U=o(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return U!==z+";"?U.replace(k," or ($1)").substring(4):"("+z+")"}function s(I,z,U,Q,E,G,F,te,ie,de){for(var Y=0,De=z,Xe;Y<T;++Y)switch(Xe=ge[Y].call(c,I,De,U,Q,E,G,F,te,ie,de)){case void 0:case!1:case!0:case null:break;default:De=Xe}if(De!==z)return De}function l(I){switch(I){case void 0:case null:T=ge.length=0;break;default:if(typeof I=="function")ge[T++]=I;else if(typeof I=="object")for(var z=0,U=I.length;z<U;++z)l(I[z]);else j=!!I|0}return l}function u(I){return I=I.prefix,I!==void 0&&(A=null,I?typeof I!="function"?ne=1:(ne=2,A=I):ne=0),u}function c(I,z){var U=I;if(33>U.charCodeAt(0)&&(U=U.trim()),K=U,U=[K],0<T){var Q=s(-1,z,U,U,Z,J,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(z=Q)}var E=t($e,U,z,0,0);return 0<T&&(Q=s(-2,E,U,U,Z,J,E.length,0,0,0),Q!==void 0&&(E=Q)),K="",oe=0,J=Z=1,E}var f=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,$=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,w=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,P=/-self|flex-/g,_=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,J=1,Z=1,oe=0,ne=1,$e=[],ge=[],T=0,A=null,j=0,K="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var v$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function g$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var y$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qh=g$(function(e){return y$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Y0={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=typeof Symbol=="function"&&Symbol.for,zd=Ve?Symbol.for("react.element"):60103,jd=Ve?Symbol.for("react.portal"):60106,Pl=Ve?Symbol.for("react.fragment"):60107,Ol=Ve?Symbol.for("react.strict_mode"):60108,Rl=Ve?Symbol.for("react.profiler"):60114,_l=Ve?Symbol.for("react.provider"):60109,Al=Ve?Symbol.for("react.context"):60110,Ud=Ve?Symbol.for("react.async_mode"):60111,Tl=Ve?Symbol.for("react.concurrent_mode"):60111,Nl=Ve?Symbol.for("react.forward_ref"):60112,Ml=Ve?Symbol.for("react.suspense"):60113,x$=Ve?Symbol.for("react.suspense_list"):60120,Il=Ve?Symbol.for("react.memo"):60115,Dl=Ve?Symbol.for("react.lazy"):60116,w$=Ve?Symbol.for("react.block"):60121,b$=Ve?Symbol.for("react.fundamental"):60117,$$=Ve?Symbol.for("react.responder"):60118,S$=Ve?Symbol.for("react.scope"):60119;function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zd:switch(e=e.type,e){case Ud:case Tl:case Pl:case Rl:case Ol:case Ml:return e;default:switch(e=e&&e.$$typeof,e){case Al:case Nl:case Dl:case Il:case _l:return e;default:return t}}case jd:return t}}}function q0(e){return wt(e)===Tl}me.AsyncMode=Ud;me.ConcurrentMode=Tl;me.ContextConsumer=Al;me.ContextProvider=_l;me.Element=zd;me.ForwardRef=Nl;me.Fragment=Pl;me.Lazy=Dl;me.Memo=Il;me.Portal=jd;me.Profiler=Rl;me.StrictMode=Ol;me.Suspense=Ml;me.isAsyncMode=function(e){return q0(e)||wt(e)===Ud};me.isConcurrentMode=q0;me.isContextConsumer=function(e){return wt(e)===Al};me.isContextProvider=function(e){return wt(e)===_l};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zd};me.isForwardRef=function(e){return wt(e)===Nl};me.isFragment=function(e){return wt(e)===Pl};me.isLazy=function(e){return wt(e)===Dl};me.isMemo=function(e){return wt(e)===Il};me.isPortal=function(e){return wt(e)===jd};me.isProfiler=function(e){return wt(e)===Rl};me.isStrictMode=function(e){return wt(e)===Ol};me.isSuspense=function(e){return wt(e)===Ml};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pl||e===Tl||e===Rl||e===Ol||e===Ml||e===x$||typeof e=="object"&&e!==null&&(e.$$typeof===Dl||e.$$typeof===Il||e.$$typeof===_l||e.$$typeof===Al||e.$$typeof===Nl||e.$$typeof===b$||e.$$typeof===$$||e.$$typeof===S$||e.$$typeof===w$)};me.typeOf=wt;(function(e){e.exports=me})(Y0);var Bd=Y0.exports,C$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},k$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},X0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wd={};Wd[Bd.ForwardRef]=k$;Wd[Bd.Memo]=X0;function Xh(e){return Bd.isMemo(e)?X0:Wd[e.$$typeof]||C$}var P$=Object.defineProperty,O$=Object.getOwnPropertyNames,Jh=Object.getOwnPropertySymbols,R$=Object.getOwnPropertyDescriptor,_$=Object.getPrototypeOf,Zh=Object.prototype;function J0(e,t,n){if(typeof t!="string"){if(Zh){var r=_$(t);r&&r!==Zh&&J0(e,r,n)}var o=O$(t);Jh&&(o=o.concat(Jh(t)));for(var i=Xh(e),a=Xh(t),s=0;s<o.length;++s){var l=o[s];if(!E$[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var u=R$(t,l);try{P$(e,l,u)}catch{}}}}return e}var A$=J0;function Dt(){return(Dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var em=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Yc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Dd.exports.typeOf(e)},Ds=Object.freeze([]),Un=Object.freeze({});function po(e){return typeof e=="function"}function tm(e){return e.displayName||e.name||"Component"}function Hd(e){return e&&typeof e.styledComponentId=="string"}var ho=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Vd=typeof window<"u"&&"HTMLElement"in window,T$=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),N$={};function br(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var M$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&br(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Ya=new Map,Fs=new Map,ii=1,va=function(e){if(Ya.has(e))return Ya.get(e);for(;Fs.has(ii);)ii++;var t=ii++;return Ya.set(e,t),Fs.set(t,e),t},I$=function(e){return Fs.get(e)},D$=function(e,t){t>=ii&&(ii=t+1),Ya.set(e,t),Fs.set(t,e)},F$="style["+ho+'][data-styled-version="5.3.6"]',L$=new RegExp("^"+ho+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),z$=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},j$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(L$);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(D$(u,l),z$(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},U$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Z0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(ho))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ho,"active"),r.setAttribute("data-styled-version","5.3.6");var a=U$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},B$=function(){function e(n){var r=this.element=Z0(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}br(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),W$=function(){function e(n){var r=this.element=Z0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),H$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),nm=Vd,V$={isServer:!Vd,useCSSOMInjection:!T$},Ls=function(){function e(n,r,o){n===void 0&&(n=Un),r===void 0&&(r={}),this.options=Dt({},V$,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Vd&&nm&&(nm=!1,function(i){for(var a=document.querySelectorAll(F$),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(ho)!=="active"&&(j$(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return va(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Dt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new H$(a):i?new B$(a):new W$(a),new M$(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(va(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(va(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(va(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=I$(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=ho+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),i+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),Q$=/(a)(d)/gi,rm=function(e){return String.fromCharCode(e+(e>25?39:97))};function qc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rm(t%52)+n;return(rm(t%52)+n).replace(Q$,"$1-$2")}var Kr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ey=function(e){return Kr(5381,e)};function ty(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(po(n)&&!Hd(n))return!1}return!0}var G$=ey("5.3.6"),K$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ty(t),this.componentId=n,this.baseHash=Kr(G$,n),this.baseStyle=r,Ls.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=$r(this.rules,t,n,r).join(""),s=qc(Kr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=Kr(this.baseHash,r.hash),f="",p=0;p<u;p++){var h=this.rules[p];if(typeof h=="string")f+=h;else if(h){var m=$r(h,t,n,r),y=Array.isArray(m)?m.join(""):m;c=Kr(c,y+p),f+=y}}if(f){var $=qc(c>>>0);if(!n.hasNameForId(o,$)){var g=r(f,"."+$,void 0,o);n.insertRules(o,$,g)}i.push($)}}return i.join(" ")},e}(),Y$=/^\s*\/\/.*$/gm,q$=[":","[",".","#"];function X$(e){var t,n,r,o,i=e===void 0?Un:e,a=i.options,s=a===void 0?Un:a,l=i.plugins,u=l===void 0?Ds:l,c=new m$(s),f=[],p=function(y){function $(g){if(g)try{y(g+"}")}catch{}}return function(g,v,x,w,S,C,k,P,_,D){switch(g){case 1:if(_===0&&v.charCodeAt(0)===64)return y(v+";"),"";break;case 2:if(P===0)return v+"/*|*/";break;case 3:switch(P){case 102:case 112:return y(x[0]+v),"";default:return v+(D===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach($)}}}(function(y){f.push(y)}),h=function(y,$,g){return $===0&&q$.indexOf(g[n.length])!==-1||g.match(o)?y:"."+t};function m(y,$,g,v){v===void 0&&(v="&");var x=y.replace(Y$,""),w=$&&g?g+" "+$+" { "+x+" }":x;return t=v,n=$,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(g||!$?"":$,w)}return c.use([].concat(u,[function(y,$,g){y===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},p,function(y){if(y===-2){var $=f;return f=[],$}}])),m.hash=u.length?u.reduce(function(y,$){return $.name||br(15),Kr(y,$.name)},5381).toString():"",m}var ny=le.createContext();ny.Consumer;var ry=le.createContext(),J$=(ry.Consumer,new Ls),Xc=X$();function oy(){return d.exports.useContext(ny)||J$}function iy(){return d.exports.useContext(ry)||Xc}var ay=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Xc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return br(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Xc),this.name+t.hash},e}(),Z$=/([A-Z])/,eS=/([A-Z])/g,tS=/^ms-/,nS=function(e){return"-"+e.toLowerCase()};function om(e){return Z$.test(e)?e.replace(eS,nS).replace(tS,"-ms-"):e}var im=function(e){return e==null||e===!1||e===""};function $r(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=$r(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(im(e))return"";if(Hd(e))return"."+e.styledComponentId;if(po(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return $r(l,t,n,r)}var u;return e instanceof ay?n?(e.inject(n,r),e.getName(r)):e:Yc(e)?function c(f,p){var h,m,y=[];for(var $ in f)f.hasOwnProperty($)&&!im(f[$])&&(Array.isArray(f[$])&&f[$].isCss||po(f[$])?y.push(om($)+":",f[$],";"):Yc(f[$])?y.push.apply(y,c(f[$],$)):y.push(om($)+": "+(h=$,(m=f[$])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in v$?String(m).trim():m+"px")+";"));return p?[p+" {"].concat(y,["}"]):y}(e):e.toString()}var am=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return po(e)||Yc(e)?am($r(em(Ds,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:am($r(em(e,n)))}var sy=function(e,t,n){return n===void 0&&(n=Un),e.theme!==n.theme&&e.theme||t||n.theme},rS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oS=/(^-|-$)/g;function _u(e){return e.replace(rS,"-").replace(oS,"")}var Qd=function(e){return qc(ey(e)>>>0)};function ga(e){return typeof e=="string"&&!0}var Jc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},iS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function aS(e,t,n){var r=e[n];Jc(t)&&Jc(r)?ly(r,t):e[n]=t}function ly(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Jc(a))for(var s in a)iS(s)&&aS(e,a[s],s)}return e}var mo=le.createContext();mo.Consumer;function sS(e){var t=d.exports.useContext(mo),n=d.exports.useMemo(function(){return function(r,o){if(!r)return br(14);if(po(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?br(8):o?Dt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?le.createElement(mo.Provider,{value:n},e.children):null}var Au={};function uy(e,t,n){var r=Hd(e),o=!ga(e),i=t.attrs,a=i===void 0?Ds:i,s=t.componentId,l=s===void 0?function(v,x){var w=typeof v!="string"?"sc":_u(v);Au[w]=(Au[w]||0)+1;var S=w+"-"+Qd("5.3.6"+w+Au[w]);return x?x+"-"+S:S}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(v){return ga(v)?"styled."+v:"Styled("+tm(v)+")"}(e):u,f=t.displayName&&t.componentId?_u(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(v,x,w){return e.shouldForwardProp(v,x,w)&&t.shouldForwardProp(v,x,w)}:e.shouldForwardProp);var m,y=new K$(n,f,r?e.componentStyle:void 0),$=y.isStatic&&a.length===0,g=function(v,x){return function(w,S,C,k){var P=w.attrs,_=w.componentStyle,D=w.defaultProps,X=w.foldedComponentIds,J=w.shouldForwardProp,Z=w.styledComponentId,oe=w.target,ne=function(Q,E,G){Q===void 0&&(Q=Un);var F=Dt({},E,{theme:Q}),te={};return G.forEach(function(ie){var de,Y,De,Xe=ie;for(de in po(Xe)&&(Xe=Xe(F)),Xe)F[de]=te[de]=de==="className"?(Y=te[de],De=Xe[de],Y&&De?Y+" "+De:Y||De):Xe[de]}),[F,te]}(sy(S,d.exports.useContext(mo),D)||Un,S,P),$e=ne[0],ge=ne[1],T=function(Q,E,G,F){var te=oy(),ie=iy(),de=E?Q.generateAndInjectStyles(Un,te,ie):Q.generateAndInjectStyles(G,te,ie);return de}(_,k,$e),A=C,j=ge.$as||S.$as||ge.as||S.as||oe,K=ga(j),I=ge!==S?Dt({},S,{},ge):S,z={};for(var U in I)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?z.as=I[U]:(J?J(U,qh,j):!K||qh(U))&&(z[U]=I[U]));return S.style&&ge.style!==S.style&&(z.style=Dt({},S.style,{},ge.style)),z.className=Array.prototype.concat(X,Z,T!==Z?T:null,S.className,ge.className).filter(Boolean).join(" "),z.ref=A,d.exports.createElement(j,z)}(m,v,x,$)};return g.displayName=c,(m=le.forwardRef(g)).attrs=p,m.componentStyle=y,m.displayName=c,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ds,m.styledComponentId=f,m.target=r?e.target:e,m.withComponent=function(v){var x=t.componentId,w=function(C,k){if(C==null)return{};var P,_,D={},X=Object.keys(C);for(_=0;_<X.length;_++)P=X[_],k.indexOf(P)>=0||(D[P]=C[P]);return D}(t,["componentId"]),S=x&&x+"-"+(ga(v)?v:_u(tm(v)));return uy(v,Dt({},w,{attrs:p,componentId:S}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?ly({},e.defaultProps,v):v}}),m.toString=function(){return"."+m.styledComponentId},o&&A$(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Zc=function(e){return function t(n,r,o){if(o===void 0&&(o=Un),!Dd.exports.isValidElementType(r))return br(1,String(r));var i=function(){return n(r,o,B.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Dt({},o,{},a))},i.attrs=function(a){return t(n,r,Dt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(uy,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Zc[e]=Zc(e)});var lS=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=ty(n),Ls.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i($r(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Ls.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function uS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=B.apply(void 0,[e].concat(n)),i="sc-global-"+Qd(JSON.stringify(o)),a=new lS(o,i);function s(u){var c=oy(),f=iy(),p=d.exports.useContext(mo),h=d.exports.useRef(c.allocateGSInstance(i)).current;return c.server&&l(h,u,c,p,f),d.exports.useLayoutEffect(function(){if(!c.server)return l(h,u,c,p,f),function(){return a.removeStyles(h,c)}},[h,u,c,p,f]),null}function l(u,c,f,p,h){if(a.isStatic)a.renderStyles(u,N$,f,h);else{var m=Dt({},c,{theme:sy(c,p,s.defaultProps)});a.renderStyles(u,m,f,h)}}return le.memo(s)}function Fl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=B.apply(void 0,[e].concat(n)).join(""),i=Qd(o);return new ay(i,o)}var Rr=function(){return d.exports.useContext(mo)};const O=Zc;const cy=O.div`
  width: 100%;
  max-width: ${e=>e.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,fy="/pokedex/assets/pokeball.bf8b84a8.svg",cS="/pokedex/assets/pokemonLogo.aff162cf.svg";var dy={prefix:"fas",iconName:"user-ninja",icon:[448,512,[129399],"f504","M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 396 61.3 324.1 142.7 307.6l68.5 91.4c6.4 8.5 19.2 8.5 25.6 0l68.5-91.4C386.7 324.1 448 396 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"]},fS={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},ef={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},py={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},Gd={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},hy={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},tf={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sm(Object(n),!0).forEach(function(r){Ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zs(e){return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function dS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pS(e,t,n){return t&&lm(e.prototype,t),n&&lm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kd(e,t){return mS(e)||gS(e,t)||my(e,t)||xS()}function Hi(e){return hS(e)||vS(e)||my(e)||yS()}function hS(e){if(Array.isArray(e))return nf(e)}function mS(e){if(Array.isArray(e))return e}function vS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(l){i=!0,s=l}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function my(e,t){if(!!e){if(typeof e=="string")return nf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nf(e,t)}}function nf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var um=function(){},Yd={},vy={},gy=null,yy={mark:um,measure:um};try{typeof window<"u"&&(Yd=window),typeof document<"u"&&(vy=document),typeof MutationObserver<"u"&&(gy=MutationObserver),typeof performance<"u"&&(yy=performance)}catch{}var wS=Yd.navigator||{},cm=wS.userAgent,fm=cm===void 0?"":cm,Vn=Yd,be=vy,dm=gy,ya=yy;Vn.document;var pn=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",xy=~fm.indexOf("MSIE")||~fm.indexOf("Trident/"),xa,wa,ba,$a,Sa,sn="___FONT_AWESOME___",rf=16,wy="fa",by="svg-inline--fa",Sr="data-fa-i2svg",of="data-fa-pseudo-element",bS="data-fa-pseudo-element-pending",qd="data-prefix",Xd="data-icon",pm="fontawesome-i2svg",$S="async",SS=["HTML","HEAD","STYLE","SCRIPT"],$y=function(){try{return!0}catch{return!1}}(),xe="classic",Ae="sharp",Jd=[xe,Ae];function Vi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[xe]}})}var ki=Vi((xa={},Ue(xa,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ue(xa,Ae,{fa:"solid",fass:"solid","fa-solid":"solid"}),xa)),Pi=Vi((wa={},Ue(wa,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ue(wa,Ae,{solid:"fass"}),wa)),Oi=Vi((ba={},Ue(ba,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ue(ba,Ae,{fass:"fa-solid"}),ba)),CS=Vi(($a={},Ue($a,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ue($a,Ae,{"fa-solid":"fass"}),$a)),ES=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Sy="fa-layers-text",kS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,PS=Vi((Sa={},Ue(Sa,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ue(Sa,Ae,{900:"fass"}),Sa)),Cy=[1,2,3,4,5,6,7,8,9,10],OS=Cy.concat([11,12,13,14,15,16,17,18,19,20]),RS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ri=new Set;Object.keys(Pi[xe]).map(Ri.add.bind(Ri));Object.keys(Pi[Ae]).map(Ri.add.bind(Ri));var _S=[].concat(Jd,Hi(Ri),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fr.GROUP,fr.SWAP_OPACITY,fr.PRIMARY,fr.SECONDARY]).concat(Cy.map(function(e){return"".concat(e,"x")})).concat(OS.map(function(e){return"w-".concat(e)})),ai=Vn.FontAwesomeConfig||{};function AS(e){var t=be.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function TS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(be&&typeof be.querySelector=="function"){var NS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];NS.forEach(function(e){var t=Kd(e,2),n=t[0],r=t[1],o=TS(AS(n));o!=null&&(ai[r]=o)})}var Ey={styleDefault:"solid",familyDefault:"classic",cssPrefix:wy,replacementClass:by,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ai.familyPrefix&&(ai.cssPrefix=ai.familyPrefix);var vo=W(W({},Ey),ai);vo.autoReplaceSvg||(vo.observeMutations=!1);var V={};Object.keys(Ey).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){vo[e]=n,si.forEach(function(r){return r(V)})},get:function(){return vo[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){vo.cssPrefix=t,si.forEach(function(n){return n(V)})},get:function(){return vo.cssPrefix}});Vn.FontAwesomeConfig=V;var si=[];function MS(e){return si.push(e),function(){si.splice(si.indexOf(e),1)}}var xn=rf,Vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function IS(e){if(!(!e||!pn)){var t=be.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=be.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return be.head.insertBefore(t,r),e}}var DS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _i(){for(var e=12,t="";e-- >0;)t+=DS[Math.random()*62|0];return t}function Co(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Zd(e){return e.classList?Co(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ky(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function FS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ky(e[n]),'" ')},"").trim()}function Ll(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ep(e){return e.size!==Vt.size||e.x!==Vt.x||e.y!==Vt.y||e.rotate!==Vt.rotate||e.flipX||e.flipY}function LS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:u}}function zS(e){var t=e.transform,n=e.width,r=n===void 0?rf:n,o=e.height,i=o===void 0?rf:o,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&xy?l+="translate(".concat(t.x/xn-r/2,"em, ").concat(t.y/xn-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/xn,"em), calc(-50% + ").concat(t.y/xn,"em)) "):l+="translate(".concat(t.x/xn,"em, ").concat(t.y/xn,"em) "),l+="scale(".concat(t.size/xn*(t.flipX?-1:1),", ").concat(t.size/xn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jS=`:root, :host {
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
}`;function Py(){var e=wy,t=by,n=V.cssPrefix,r=V.replacementClass,o=jS;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var hm=!1;function Tu(){V.autoAddCss&&!hm&&(IS(Py()),hm=!0)}var US={mixout:function(){return{dom:{css:Py,insertCss:Tu}}},hooks:function(){return{beforeDOMElementCreation:function(){Tu()},beforeI2svg:function(){Tu()}}}},ln=Vn||{};ln[sn]||(ln[sn]={});ln[sn].styles||(ln[sn].styles={});ln[sn].hooks||(ln[sn].hooks={});ln[sn].shims||(ln[sn].shims=[]);var Ft=ln[sn],Oy=[],BS=function e(){be.removeEventListener("DOMContentLoaded",e),js=1,Oy.map(function(t){return t()})},js=!1;pn&&(js=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),js||be.addEventListener("DOMContentLoaded",BS));function WS(e){!pn||(js?setTimeout(e,0):Oy.push(e))}function Qi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?ky(e):"<".concat(t," ").concat(FS(r),">").concat(i.map(Qi).join(""),"</").concat(t,">")}function mm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var HS=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}},Nu=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=o!==void 0?HS(n,o):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<a;l++)u=i[l],c=s(c,t[u],u,t);return c};function VS(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function af(e){var t=VS(e);return t.length===1?t[0].toString(16):null}function QS(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function vm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function sf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=vm(t);typeof Ft.hooks.addPack=="function"&&!o?Ft.hooks.addPack(e,vm(t)):Ft.styles[e]=W(W({},Ft.styles[e]||{}),i),e==="fas"&&sf("fa",t)}var Ca,Ea,ka,Yr=Ft.styles,GS=Ft.shims,KS=(Ca={},Ue(Ca,xe,Object.values(Oi[xe])),Ue(Ca,Ae,Object.values(Oi[Ae])),Ca),tp=null,Ry={},_y={},Ay={},Ty={},Ny={},YS=(Ea={},Ue(Ea,xe,Object.keys(ki[xe])),Ue(Ea,Ae,Object.keys(ki[Ae])),Ea);function qS(e){return~_S.indexOf(e)}function XS(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!qS(o)?o:null}var My=function(){var t=function(i){return Nu(Yr,function(a,s,l){return a[l]=Nu(s,i,{}),a},{})};Ry=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){o[l.toString(16)]=a})}return o}),_y=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){o[l]=a})}return o}),Ny=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(l){o[l]=a}),o});var n="far"in Yr||V.autoFetchSvg,r=Nu(GS,function(o,i){var a=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});Ay=r.names,Ty=r.unicodes,tp=zl(V.styleDefault,{family:V.familyDefault})};MS(function(e){tp=zl(e.styleDefault,{family:V.familyDefault})});My();function np(e,t){return(Ry[e]||{})[t]}function JS(e,t){return(_y[e]||{})[t]}function dr(e,t){return(Ny[e]||{})[t]}function Iy(e){return Ay[e]||{prefix:null,iconName:null}}function ZS(e){var t=Ty[e],n=np("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qn(){return tp}var rp=function(){return{prefix:null,iconName:null,rest:[]}};function zl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?xe:n,o=ki[r][e],i=Pi[r][e]||Pi[r][o],a=e in Ft.styles?e:null;return i||a||null}var gm=(ka={},Ue(ka,xe,Object.keys(Oi[xe])),Ue(ka,Ae,Object.keys(Oi[Ae])),ka);function jl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},Ue(t,xe,"".concat(V.cssPrefix,"-").concat(xe)),Ue(t,Ae,"".concat(V.cssPrefix,"-").concat(Ae)),t),a=null,s=xe;(e.includes(i[xe])||e.some(function(u){return gm[xe].includes(u)}))&&(s=xe),(e.includes(i[Ae])||e.some(function(u){return gm[Ae].includes(u)}))&&(s=Ae);var l=e.reduce(function(u,c){var f=XS(V.cssPrefix,c);if(Yr[c]?(c=KS[s].includes(c)?CS[s][c]:c,a=c,u.prefix=c):YS[s].indexOf(c)>-1?(a=c,u.prefix=zl(c,{family:s})):f?u.iconName=f:c!==V.replacementClass&&c!==i[xe]&&c!==i[Ae]&&u.rest.push(c),!o&&u.prefix&&u.iconName){var p=a==="fa"?Iy(u.iconName):{},h=dr(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||h||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Yr.far&&Yr.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},rp());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Ae&&(Yr.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=dr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Qn()||"fas"),l}var eC=function(){function e(){dS(this,e),this.definitions={}}return pS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=W(W({},n.definitions[s]||{}),a[s]),sf(s,a[s]);var l=Oi[xe][s];l&&sf(l,a[s]),My()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),ym=[],qr={},oo={},tC=Object.keys(oo);function nC(e,t){var n=t.mixoutsTo;return ym=e,qr={},Object.keys(oo).forEach(function(r){tC.indexOf(r)===-1&&delete oo[r]}),ym.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),zs(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){qr[a]||(qr[a]=[]),qr[a].push(i[a])})}r.provides&&r.provides(oo)}),n}function lf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=qr[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Cr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=qr[e]||[];o.forEach(function(i){i.apply(null,n)})}function un(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return oo[e]?oo[e].apply(null,t):void 0}function uf(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qn();if(!!t)return t=dr(n,t)||t,mm(Dy.definitions,n,t)||mm(Ft.styles,n,t)}var Dy=new eC,rC=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Cr("noAuto")},oC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pn?(Cr("beforeI2svg",t),un("pseudoElements2svg",t),un("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,WS(function(){aC({autoReplaceSvgRoot:n}),Cr("watch",t)})}},iC={icon:function(t){if(t===null)return null;if(zs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zl(t[0]);return{prefix:r,iconName:dr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(ES))){var o=jl(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||Qn(),iconName:dr(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=Qn();return{prefix:i,iconName:dr(i,t)||t}}}},bt={noAuto:rC,config:V,dom:oC,parse:iC,library:Dy,findIconDefinition:uf,toHtml:Qi},aC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?be:n;(Object.keys(Ft.styles).length>0||V.autoFetchSvg)&&pn&&V.autoReplaceSvg&&bt.dom.i2svg({node:r})};function Ul(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Qi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!pn){var r=be.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function sC(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(ep(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};o.style=Ll(W(W({},i),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function lC(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},o),{},{id:a}),children:r}]}]}function op(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,h=p===void 0?!1:p,m=r.found?r:n,y=m.width,$=m.height,g=o==="fak",v=[V.replacementClass,i?"".concat(V.cssPrefix,"-").concat(i):""].filter(function(_){return f.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(f.classes).join(" "),x={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":o,"data-icon":i,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat($)})},w=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/$*16*.0625,"em")}:{};h&&(x.attributes[Sr]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||_i())},children:[l]}),delete x.attributes.title);var S=W(W({},x),{},{prefix:o,iconName:i,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:W(W({},w),f.styles)}),C=r.found&&n.found?un("generateAbstractMask",S)||{children:[],attributes:{}}:un("generateAbstractIcon",S)||{children:[],attributes:{}},k=C.children,P=C.attributes;return S.children=k,S.attributes=P,s?lC(S):sC(S)}function xm(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=W(W(W({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});l&&(u[Sr]="");var c=W({},a.styles);ep(o)&&(c.transform=zS({transform:o,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ll(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function uC(e){var t=e.content,n=e.title,r=e.extra,o=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ll(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Mu=Ft.styles;function cf(e){var t=e[0],n=e[1],r=e.slice(4),o=Kd(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(fr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(fr.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var cC={found:!1,width:512,height:512};function fC(e,t){!$y&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ff(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=Qn()),new Promise(function(r,o){if(un("missingIconAbstract"),n==="fa"){var i=Iy(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Mu[t]&&Mu[t][e]){var a=Mu[t][e];return r(cf(a))}fC(e,t),r(W(W({},cC),{},{icon:V.showMissingIcons&&e?un("missingIconAbstract")||{}:{}}))})}var wm=function(){},df=V.measurePerformance&&ya&&ya.mark&&ya.measure?ya:{mark:wm,measure:wm},Qo='FA "6.2.0"',dC=function(t){return df.mark("".concat(Qo," ").concat(t," begins")),function(){return Fy(t)}},Fy=function(t){df.mark("".concat(Qo," ").concat(t," ends")),df.measure("".concat(Qo," ").concat(t),"".concat(Qo," ").concat(t," begins"),"".concat(Qo," ").concat(t," ends"))},ip={begin:dC,end:Fy},qa=function(){};function bm(e){var t=e.getAttribute?e.getAttribute(Sr):null;return typeof t=="string"}function pC(e){var t=e.getAttribute?e.getAttribute(qd):null,n=e.getAttribute?e.getAttribute(Xd):null;return t&&n}function hC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function mC(){if(V.autoReplaceSvg===!0)return Xa.replace;var e=Xa[V.autoReplaceSvg];return e||Xa.replace}function vC(e){return be.createElementNS("http://www.w3.org/2000/svg",e)}function gC(e){return be.createElement(e)}function Ly(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?vC:gC:n;if(typeof e=="string")return be.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(Ly(a,{ceFn:r}))}),o}function yC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(Ly(o),n)}),n.getAttribute(Sr)===null&&V.keepOriginalSource){var r=be.createComment(yC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Zd(n).indexOf(V.replacementClass))return Xa.replace(t);var o=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===V.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(s){return Qi(s)}).join(`
`);n.setAttribute(Sr,""),n.innerHTML=a}};function $m(e){e()}function zy(e,t){var n=typeof t=="function"?t:qa;if(e.length===0)n();else{var r=$m;V.mutateApproach===$S&&(r=Vn.requestAnimationFrame||$m),r(function(){var o=mC(),i=ip.begin("mutate");e.map(o),i(),n()})}}var ap=!1;function jy(){ap=!0}function pf(){ap=!1}var Us=null;function Sm(e){if(!!dm&&!!V.observeMutations){var t=e.treeCallback,n=t===void 0?qa:t,r=e.nodeCallback,o=r===void 0?qa:r,i=e.pseudoElementsCallback,a=i===void 0?qa:i,s=e.observeMutationsRoot,l=s===void 0?be:s;Us=new dm(function(u){if(!ap){var c=Qn();Co(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!bm(f.addedNodes[0])&&(V.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&V.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&bm(f.target)&&~RS.indexOf(f.attributeName))if(f.attributeName==="class"&&pC(f.target)){var p=jl(Zd(f.target)),h=p.prefix,m=p.iconName;f.target.setAttribute(qd,h||c),m&&f.target.setAttribute(Xd,m)}else hC(f.target)&&o(f.target)})}}),pn&&Us.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xC(){!Us||Us.disconnect()}function wC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function bC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=jl(Zd(e));return o.prefix||(o.prefix=Qn()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=JS(o.prefix,e.innerText)||np(o.prefix,af(e.innerText))),!o.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function $C(e){var t=Co(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return V.autoA11y&&(n?t["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||_i()):(t["aria-hidden"]="true",t.focusable="false")),t}function SC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bC(e),r=n.iconName,o=n.prefix,i=n.rest,a=$C(e),s=lf("parseNodeAttributes",{},e),l=t.styleParser?wC(e):[];return W({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:Vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var CC=Ft.styles;function Uy(e){var t=V.autoReplaceSvg==="nest"?Cm(e,{styleParser:!1}):Cm(e);return~t.extra.classes.indexOf(Sy)?un("generateLayersText",e,t):un("generateSvgReplacementMutation",e,t)}var Gn=new Set;Jd.map(function(e){Gn.add("fa-".concat(e))});Object.keys(ki[xe]).map(Gn.add.bind(Gn));Object.keys(ki[Ae]).map(Gn.add.bind(Gn));Gn=Hi(Gn);function Em(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pn)return Promise.resolve();var n=be.documentElement.classList,r=function(f){return n.add("".concat(pm,"-").concat(f))},o=function(f){return n.remove("".concat(pm,"-").concat(f))},i=V.autoFetchSvg?Gn:Jd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(CC));i.includes("fa")||i.push("fa");var a=[".".concat(Sy,":not([").concat(Sr,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Sr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Co(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),o("complete");else return Promise.resolve();var l=ip.begin("onTree"),u=s.reduce(function(c,f){try{var p=Uy(f);p&&c.push(p)}catch(h){$y||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){zy(p,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function EC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Uy(e).then(function(n){n&&zy([n],t)})}function kC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:uf(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:uf(o||{})),e(r,W(W({},n),{},{mask:o}))}}var PC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?Vt:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,h=n.titleId,m=h===void 0?null:h,y=n.classes,$=y===void 0?[]:y,g=n.attributes,v=g===void 0?{}:g,x=n.styles,w=x===void 0?{}:x;if(!!t){var S=t.prefix,C=t.iconName,k=t.icon;return Ul(W({type:"icon"},t),function(){return Cr("beforeDOMElementCreation",{iconDefinition:t,params:n}),V.autoA11y&&(p?v["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(m||_i()):(v["aria-hidden"]="true",v.focusable="false")),op({icons:{main:cf(k),mask:l?cf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:W(W({},Vt),o),symbol:a,title:p,maskId:c,titleId:m,extra:{attributes:v,styles:w,classes:$}})})}},OC={mixout:function(){return{icon:kC(PC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Em,n.nodeCallback=EC,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?be:r,i=n.callback,a=i===void 0?function(){}:i;return Em(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(h,m){Promise.all([ff(o,s),c.iconName?ff(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var $=Kd(y,2),g=$[0],v=$[1];h([n,op({icons:{main:g,mask:v},prefix:s,iconName:o,transform:l,symbol:u,maskId:f,title:i,titleId:a,extra:p,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,l=Ll(s);l.length>0&&(o.style=l);var u;return ep(a)&&(u=un("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:o}}}},RC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return Ul({type:"layer"},function(){Cr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Hi(i)).join(" ")},children:a}]})}}}},_C={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ul({type:"counter",content:n},function(){return Cr("beforeDOMElementCreation",{content:n,params:r}),uC({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Hi(s))}})})}}}},AC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?Vt:o,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,h=p===void 0?{}:p;return Ul({type:"text",content:n},function(){return Cr("beforeDOMElementCreation",{content:n,params:r}),xm({content:n,transform:W(W({},Vt),i),title:s,extra:{attributes:f,styles:h,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Hi(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,s=null,l=null;if(xy){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return V.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,xm({content:n.innerHTML,width:s,height:l,transform:i,title:o,extra:a,watchable:!0})])}}},TC=new RegExp('"',"ug"),km=[1105920,1112319];function NC(e){var t=e.replace(TC,""),n=QS(t,0),r=n>=km[0]&&n<=km[1],o=t.length===2?t[0]===t[1]:!1;return{value:af(o?t[0]:t),isSecondary:r||o}}function Pm(e,t){var n="".concat(bS).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=Co(e.children),a=i.filter(function(k){return k.getAttribute(of)===t})[0],s=Vn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(kS),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?Ae:xe,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pi[p][l[2].toLowerCase()]:PS[p][u],m=NC(f),y=m.value,$=m.isSecondary,g=l[0].startsWith("FontAwesome"),v=np(h,y),x=v;if(g){var w=ZS(y);w.iconName&&w.prefix&&(v=w.iconName,h=w.prefix)}if(v&&!$&&(!a||a.getAttribute(qd)!==h||a.getAttribute(Xd)!==x)){e.setAttribute(n,x),a&&e.removeChild(a);var S=SC(),C=S.extra;C.attributes[of]=t,ff(v,h).then(function(k){var P=op(W(W({},S),{},{icons:{main:k,mask:rp()},prefix:h,iconName:x,extra:C,watchable:!0})),_=be.createElement("svg");t==="::before"?e.insertBefore(_,e.firstChild):e.appendChild(_),_.outerHTML=P.map(function(D){return Qi(D)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function MC(e){return Promise.all([Pm(e,"::before"),Pm(e,"::after")])}function IC(e){return e.parentNode!==document.head&&!~SS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(of)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Om(e){if(!!pn)return new Promise(function(t,n){var r=Co(e.querySelectorAll("*")).filter(IC).map(MC),o=ip.begin("searchPseudoElements");jy(),Promise.all(r).then(function(){o(),pf(),t()}).catch(function(){o(),pf(),n()})})}var DC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Om,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?be:r;V.searchPseudoElements&&Om(o)}}},Rm=!1,FC={mixout:function(){return{dom:{unwatch:function(){jy(),Rm=!0}}}},hooks:function(){return{bootstrap:function(){Sm(lf("mutationObserverCallbacks",{}))},noAuto:function(){xC()},watch:function(n){var r=n.observeMutationsRoot;Rm?pf():Sm(lf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_m=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},LC={mixout:function(){return{parse:{transform:function(n){return _m(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=_m(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),u="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},h={outer:s,inner:f,path:p};return{tag:"g",attributes:W({},h.outer),children:[{tag:"g",attributes:W({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),h.path)}]}]}}}},Iu={x:0,y:0,width:"100%",height:"100%"};function Am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zC(e){return e.tag==="g"?e.children:[e]}var jC={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?jl(o.split(" ").map(function(a){return a.trim()})):rp();return i.prefix||(i.prefix=Qn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=a.width,p=a.icon,h=LS({transform:l,containerWidth:f,iconWidth:u}),m={tag:"rect",attributes:W(W({},Iu),{},{fill:"white"})},y=c.children?{children:c.children.map(Am)}:{},$={tag:"g",attributes:W({},h.inner),children:[Am(W({tag:c.tag,attributes:W(W({},c.attributes),h.path)},y))]},g={tag:"g",attributes:W({},h.outer),children:[$]},v="mask-".concat(s||_i()),x="clip-".concat(s||_i()),w={tag:"mask",attributes:W(W({},Iu),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:zC(p)},w]};return r.push(S,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(v,")")},Iu)}),{children:r,attributes:o}}}},UC={provides:function(t){var n=!1;Vn.matchMedia&&(n=Vn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=W(W({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:W(W({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:W(W({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:W(W({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},BC={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},WC=[US,OC,RC,_C,AC,DC,FC,LC,jC,UC,BC];nC(WC,{mixoutsTo:bt});bt.noAuto;bt.config;bt.library;bt.dom;var hf=bt.parse;bt.findIconDefinition;bt.toHtml;var HC=bt.icon;bt.layer;bt.text;bt.counter;var re={exports:{}},VC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",QC=VC,GC=QC;function By(){}function Wy(){}Wy.resetWarningCache=By;var KC=function(){function e(r,o,i,a,s,l){if(l!==GC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Wy,resetWarningCache:By};return n.PropTypes=n,n};re.exports=KC();function Tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tm(Object(n),!0).forEach(function(r){Xr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bs(e){return Bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bs(e)}function Xr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YC(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function qC(e,t){if(e==null)return{};var n=YC(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function mf(e){return XC(e)||JC(e)||ZC(e)||eE()}function XC(e){if(Array.isArray(e))return vf(e)}function JC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ZC(e,t){if(!!e){if(typeof e=="string")return vf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vf(e,t)}}function vf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function eE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tE(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,h=e.inverse,m=e.border,y=e.listItem,$=e.flip,g=e.size,v=e.rotation,x=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":h,"fa-border":m,"fa-li":y,"fa-flip":$===!0,"fa-flip-horizontal":$==="horizontal"||$==="both","fa-flip-vertical":$==="vertical"||$==="both"},Xr(t,"fa-".concat(g),typeof g<"u"&&g!==null),Xr(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Xr(t,"fa-pull-".concat(x),typeof x<"u"&&x!==null),Xr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function nE(e){return e=e-0,e===e}function Hy(e){return nE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var rE=["style"];function oE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function iE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=Hy(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[oE(o)]=i:t[o]=i,t},{})}function Vy(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Vy(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=iE(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Hy(u)]=c}return l},{attrs:{}}),i=n.style,a=i===void 0?{}:i,s=qC(n,rE);return o.attrs.style=An(An({},o.attrs.style),a),e.apply(void 0,[t.tag,An(An({},o.attrs),s)].concat(mf(r)))}var Qy=!1;try{Qy=!0}catch{}function aE(){if(!Qy&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nm(e){if(e&&Bs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(hf.icon)return hf.icon(e);if(e===null)return null;if(e&&Bs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Du(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Xr({},e,t):{}}var Ie=le.forwardRef(function(e,t){var n=e.icon,r=e.mask,o=e.symbol,i=e.className,a=e.title,s=e.titleId,l=e.maskId,u=Nm(n),c=Du("classes",[].concat(mf(tE(e)),mf(i.split(" ")))),f=Du("transform",typeof e.transform=="string"?hf.transform(e.transform):e.transform),p=Du("mask",Nm(r)),h=HC(u,An(An(An(An({},c),f),p),{},{symbol:o,title:a,titleId:s,maskId:l}));if(!h)return aE("Could not find icon",u),null;var m=h.abstract,y={ref:t};return Object.keys(e).forEach(function($){Ie.defaultProps.hasOwnProperty($)||(y[$]=e[$])}),sE(m[0],y)});Ie.displayName="FontAwesomeIcon";Ie.propTypes={beat:re.exports.bool,border:re.exports.bool,beatFade:re.exports.bool,bounce:re.exports.bool,className:re.exports.string,fade:re.exports.bool,flash:re.exports.bool,mask:re.exports.oneOfType([re.exports.object,re.exports.array,re.exports.string]),maskId:re.exports.string,fixedWidth:re.exports.bool,inverse:re.exports.bool,flip:re.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.exports.oneOfType([re.exports.object,re.exports.array,re.exports.string]),listItem:re.exports.bool,pull:re.exports.oneOf(["right","left"]),pulse:re.exports.bool,rotation:re.exports.oneOf([0,90,180,270]),shake:re.exports.bool,size:re.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.exports.bool,spinPulse:re.exports.bool,spinReverse:re.exports.bool,symbol:re.exports.oneOfType([re.exports.bool,re.exports.string]),title:re.exports.string,titleId:re.exports.string,transform:re.exports.oneOfType([re.exports.string,re.exports.object]),swapOpacity:re.exports.bool};Ie.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sE=Vy.bind(null,le.createElement);function Eo(e,t=[]){let n=[];function r(i,a){const s=d.exports.createContext(a),l=n.length;n=[...n,a];function u(f){const{scope:p,children:h,...m}=f,y=(p==null?void 0:p[e][l])||s,$=d.exports.useMemo(()=>m,Object.values(m));return d.exports.createElement(y.Provider,{value:$},h)}function c(f,p){const h=(p==null?void 0:p[e][l])||s,m=d.exports.useContext(h);if(m)return m;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,c]}const o=()=>{const i=n.map(a=>d.exports.createContext(a));return function(s){const l=(s==null?void 0:s[e])||i;return d.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,lE(o,...t)]}function lE(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const f=l(i)[`__scope${u}`];return{...s,...f}},{});return d.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function ee(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function uE(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Bl(...e){return t=>e.forEach(n=>uE(n,t))}function qe(...e){return d.exports.useCallback(Bl(...e),e)}const Ai=d.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=d.exports.Children.toArray(n),i=o.find(fE);if(i){const a=i.props.children,s=o.map(l=>l===i?d.exports.Children.count(a)>1?d.exports.Children.only(null):d.exports.isValidElement(a)?a.props.children:null:l);return d.exports.createElement(gf,L({},r,{ref:t}),d.exports.isValidElement(a)?d.exports.cloneElement(a,void 0,s):null)}return d.exports.createElement(gf,L({},r,{ref:t}),n)});Ai.displayName="Slot";const gf=d.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return d.exports.isValidElement(n)?d.exports.cloneElement(n,{...dE(r,n.props),ref:Bl(t,n.ref)}):d.exports.Children.count(n)>1?d.exports.Children.only(null):null});gf.displayName="SlotClone";const cE=({children:e})=>d.exports.createElement(d.exports.Fragment,null,e);function fE(e){return d.exports.isValidElement(e)&&e.type===cE}function dE(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const pE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Oe=pE.reduce((e,t)=>{const n=d.exports.forwardRef((r,o)=>{const{asChild:i,...a}=r,s=i?Ai:t;return d.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),d.exports.createElement(s,L({},a,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Ws(e,t){e&&yo.exports.flushSync(()=>e.dispatchEvent(t))}function Ge(e){const t=d.exports.useRef(e);return d.exports.useEffect(()=>{t.current=e}),d.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function sp({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=hE({defaultProp:t,onChange:n}),i=e!==void 0,a=i?e:r,s=Ge(n),l=d.exports.useCallback(u=>{if(i){const f=typeof u=="function"?u(e):u;f!==e&&s(f)}else o(u)},[i,e,o,s]);return[a,l]}function hE({defaultProp:e,onChange:t}){const n=d.exports.useState(e),[r]=n,o=d.exports.useRef(r),i=Ge(t);return d.exports.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const mE=d.exports.createContext(void 0);function lp(e){const t=d.exports.useContext(mE);return e||t||"ltr"}const Lt=Boolean(globalThis==null?void 0:globalThis.document)?d.exports.useLayoutEffect:()=>{};function vE(e,t){return d.exports.useReducer((n,r)=>{const o=t[n][r];return o!=null?o:n},e)}const ko=e=>{const{present:t,children:n}=e,r=gE(t),o=typeof n=="function"?n({present:r.isPresent}):d.exports.Children.only(n),i=qe(r.ref,o.ref);return typeof n=="function"||r.isPresent?d.exports.cloneElement(o,{ref:i}):null};ko.displayName="Presence";function gE(e){const[t,n]=d.exports.useState(),r=d.exports.useRef({}),o=d.exports.useRef(e),i=d.exports.useRef("none"),a=e?"mounted":"unmounted",[s,l]=vE(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.exports.useEffect(()=>{const u=Pa(r.current);i.current=s==="mounted"?u:"none"},[s]),Lt(()=>{const u=r.current,c=o.current;if(c!==e){const p=i.current,h=Pa(u);e?l("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&p!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Lt(()=>{if(t){const u=f=>{const h=Pa(r.current).includes(f.animationName);f.target===t&&h&&yo.exports.flushSync(()=>l("ANIMATION_END"))},c=f=>{f.target===t&&(i.current=Pa(r.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:d.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Pa(e){return(e==null?void 0:e.animationName)||"none"}const yE=rs["useId".toString()]||(()=>{});let xE=0;function Ti(e){const[t,n]=d.exports.useState(yE());return Lt(()=>{e||n(r=>r!=null?r:String(xE++))},[e]),e||(t?`radix-${t}`:"")}function Wl(e){const t=e+"CollectionProvider",[n,r]=Eo(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=h=>{const{scope:m,children:y}=h,$=le.useRef(null),g=le.useRef(new Map).current;return le.createElement(o,{scope:m,itemMap:g,collectionRef:$},y)},s=e+"CollectionSlot",l=le.forwardRef((h,m)=>{const{scope:y,children:$}=h,g=i(s,y),v=qe(m,g.collectionRef);return le.createElement(Ai,{ref:v},$)}),u=e+"CollectionItemSlot",c="data-radix-collection-item",f=le.forwardRef((h,m)=>{const{scope:y,children:$,...g}=h,v=le.useRef(null),x=qe(m,v),w=i(u,y);return le.useEffect(()=>(w.itemMap.set(v,{ref:v,...g}),()=>void w.itemMap.delete(v))),le.createElement(Ai,{[c]:"",ref:x},$)});function p(h){const m=i(e+"CollectionConsumer",h);return le.useCallback(()=>{const $=m.collectionRef.current;if(!$)return[];const g=Array.from($.querySelectorAll(`[${c}]`));return Array.from(m.itemMap.values()).sort((w,S)=>g.indexOf(w.ref.current)-g.indexOf(S.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},p,r]}function wE(e,t=globalThis==null?void 0:globalThis.document){const n=Ge(e);d.exports.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const yf="dismissableLayer.update",bE="dismissableLayer.pointerDownOutside",$E="dismissableLayer.focusOutside";let Mm;const SE=d.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Gy=d.exports.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:s,onDismiss:l,...u}=e,c=d.exports.useContext(SE),[f,p]=d.exports.useState(null),h=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,m]=d.exports.useState({}),y=qe(t,P=>p(P)),$=Array.from(c.layers),[g]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),v=$.indexOf(g),x=f?$.indexOf(f):-1,w=c.layersWithOutsidePointerEventsDisabled.size>0,S=x>=v,C=CE(P=>{const _=P.target,D=[...c.branches].some(X=>X.contains(_));!S||D||(i==null||i(P),s==null||s(P),P.defaultPrevented||l==null||l())},h),k=EE(P=>{const _=P.target;[...c.branches].some(X=>X.contains(_))||(a==null||a(P),s==null||s(P),P.defaultPrevented||l==null||l())},h);return wE(P=>{x===c.layers.size-1&&(o==null||o(P),!P.defaultPrevented&&l&&(P.preventDefault(),l()))},h),d.exports.useEffect(()=>{if(!!f)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Mm=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Im(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Mm)}},[f,h,r,c]),d.exports.useEffect(()=>()=>{!f||(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Im())},[f,c]),d.exports.useEffect(()=>{const P=()=>m({});return document.addEventListener(yf,P),()=>document.removeEventListener(yf,P)},[]),d.exports.createElement(Oe.div,L({},u,{ref:y,style:{pointerEvents:w?S?"auto":"none":void 0,...e.style},onFocusCapture:ee(e.onFocusCapture,k.onFocusCapture),onBlurCapture:ee(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:ee(e.onPointerDownCapture,C.onPointerDownCapture)}))});function CE(e,t=globalThis==null?void 0:globalThis.document){const n=Ge(e),r=d.exports.useRef(!1),o=d.exports.useRef(()=>{});return d.exports.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let c=function(){Ky(bE,n,u,{discrete:!0})};var l=c;const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function EE(e,t=globalThis==null?void 0:globalThis.document){const n=Ge(e),r=d.exports.useRef(!1);return d.exports.useEffect(()=>{const o=i=>{i.target&&!r.current&&Ky($E,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Im(){const e=new CustomEvent(yf);document.dispatchEvent(e)}function Ky(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Ws(o,i):o.dispatchEvent(i)}function kE(e){const t=d.exports.useRef({value:e,previous:e});return d.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const PE=d.exports.forwardRef((e,t)=>d.exports.createElement(Oe.span,L({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),OE=PE,Gi="NavigationMenu",[up,RE,_E]=Wl(Gi),[xf,AE,TE]=Wl(Gi),[cp,R8]=Eo(Gi,[_E,TE]),[NE,hn]=cp(Gi),[ME,IE]=cp(Gi),DE=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,delayDuration:a=200,skipDelayDuration:s=300,orientation:l="horizontal",dir:u,...c}=e,[f,p]=d.exports.useState(null),h=qe(t,_=>p(_)),m=lp(u),y=d.exports.useRef(0),$=d.exports.useRef(0),g=d.exports.useRef(0),[v,x]=d.exports.useState(!0),[w="",S]=sp({prop:r,onChange:_=>{const D=_!=="",X=s>0;D?(window.clearTimeout(g.current),X&&x(!1)):(window.clearTimeout(g.current),g.current=window.setTimeout(()=>x(!0),s)),o==null||o(_)},defaultProp:i}),C=d.exports.useCallback(()=>{window.clearTimeout($.current),$.current=window.setTimeout(()=>S(""),150)},[S]),k=d.exports.useCallback(_=>{window.clearTimeout($.current),S(_)},[S]),P=d.exports.useCallback(_=>{w===_?window.clearTimeout($.current):y.current=window.setTimeout(()=>{window.clearTimeout($.current),S(_)},a)},[w,S,a]);return d.exports.useEffect(()=>()=>{window.clearTimeout(y.current),window.clearTimeout($.current),window.clearTimeout(g.current)},[]),d.exports.createElement(FE,{scope:n,isRootMenu:!0,value:w,dir:m,orientation:l,rootNavigationMenu:f,onTriggerEnter:_=>{window.clearTimeout(y.current),v?P(_):k(_)},onTriggerLeave:()=>{window.clearTimeout(y.current),C()},onContentEnter:()=>window.clearTimeout($.current),onContentLeave:C,onItemSelect:_=>{S(D=>D===_?"":_)},onItemDismiss:()=>S("")},d.exports.createElement(Oe.nav,L({"aria-label":"Main","data-orientation":l,dir:m},c,{ref:h})))}),FE=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:i,children:a,value:s,onItemSelect:l,onItemDismiss:u,onTriggerEnter:c,onTriggerLeave:f,onContentEnter:p,onContentLeave:h}=e,[m,y]=d.exports.useState(null),[$,g]=d.exports.useState(new Map),[v,x]=d.exports.useState(null);return d.exports.createElement(NE,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:s,previousValue:kE(s),baseId:Ti(),dir:o,orientation:i,viewport:m,onViewportChange:y,indicatorTrack:v,onIndicatorTrackChange:x,onTriggerEnter:Ge(c),onTriggerLeave:Ge(f),onContentEnter:Ge(p),onContentLeave:Ge(h),onItemSelect:Ge(l),onItemDismiss:Ge(u),onViewportContentChange:d.exports.useCallback((w,S)=>{g(C=>(C.set(w,S),new Map(C)))},[]),onViewportContentRemove:d.exports.useCallback(w=>{g(S=>S.has(w)?(S.delete(w),new Map(S)):S)},[])},d.exports.createElement(up.Provider,{scope:t},d.exports.createElement(ME,{scope:t,items:$},a)))},LE="NavigationMenuList",zE=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=hn(LE,n),i=d.exports.createElement(Oe.ul,L({"data-orientation":o.orientation},r,{ref:t}));return d.exports.createElement(Oe.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange},d.exports.createElement(up.Slot,{scope:n},o.isRootMenu?d.exports.createElement(Jy,{asChild:!0},i):i))}),jE="NavigationMenuItem",[UE,Yy]=cp(jE),BE=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...o}=e,i=Ti(),a=r||i||"LEGACY_REACT_AUTO_VALUE",s=d.exports.useRef(null),l=d.exports.useRef(null),u=d.exports.useRef(null),c=d.exports.useRef(()=>{}),f=d.exports.useRef(!1),p=d.exports.useCallback((m="start")=>{if(s.current){c.current();const y=wf(s.current);y.length&&fp(m==="start"?y:y.reverse())}},[]),h=d.exports.useCallback(()=>{if(s.current){const m=wf(s.current);m.length&&(c.current=XE(m))}},[]);return d.exports.createElement(UE,{scope:n,value:a,triggerRef:l,contentRef:s,focusProxyRef:u,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:h,onContentFocusOutside:h},d.exports.createElement(Oe.li,L({},o,{ref:t})))}),Dm="NavigationMenuTrigger",WE=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...o}=e,i=hn(Dm,e.__scopeNavigationMenu),a=Yy(Dm,e.__scopeNavigationMenu),s=d.exports.useRef(null),l=qe(s,a.triggerRef,t),u=e1(i.baseId,a.value),c=t1(i.baseId,a.value),f=d.exports.useRef(!1),p=d.exports.useRef(!1),h=a.value===i.value;return d.exports.createElement(d.exports.Fragment,null,d.exports.createElement(up.ItemSlot,{scope:n,value:a.value},d.exports.createElement(Zy,{asChild:!0},d.exports.createElement(Oe.button,L({id:u,disabled:r,"data-disabled":r?"":void 0,"data-state":dp(h),"aria-expanded":h,"aria-controls":c},o,{ref:l,onPointerEnter:ee(e.onPointerEnter,()=>{p.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:ee(e.onPointerMove,Hs(()=>{r||p.current||a.wasEscapeCloseRef.current||f.current||(i.onTriggerEnter(a.value),f.current=!0)})),onPointerLeave:ee(e.onPointerLeave,Hs(()=>{r||(i.onTriggerLeave(),f.current=!1)})),onClick:ee(e.onClick,()=>{i.onItemSelect(a.value),p.current=h}),onKeyDown:ee(e.onKeyDown,m=>{const $={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];h&&m.key===$&&(a.onEntryKeyDown(),m.preventDefault())})})))),h&&d.exports.createElement(d.exports.Fragment,null,d.exports.createElement(OE,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:m=>{const y=a.contentRef.current,$=m.relatedTarget,g=$===s.current,v=y==null?void 0:y.contains($);(g||!v)&&a.onFocusProxyEnter(g?"start":"end")}}),i.viewport&&d.exports.createElement("span",{"aria-owns":c})))}),Fm="navigationMenu.linkSelect",HE=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return d.exports.createElement(Zy,{asChild:!0},d.exports.createElement(Oe.a,L({"data-active":r?"":void 0,"aria-current":r?"page":void 0},i,{ref:t,onClick:ee(e.onClick,a=>{const s=a.target,l=new CustomEvent(Fm,{bubbles:!0,cancelable:!0});if(s.addEventListener(Fm,u=>o==null?void 0:o(u),{once:!0}),Ws(s,l),!l.defaultPrevented){const u=new CustomEvent(Ja,{bubbles:!0,cancelable:!0});Ws(s,u)}},{checkForDefaultPrevented:!1})})))}),Ni="NavigationMenuContent",VE=d.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=hn(Ni,e.__scopeNavigationMenu),i=Yy(Ni,e.__scopeNavigationMenu),a=qe(i.contentRef,t),s=i.value===o.value,l={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?d.exports.createElement(QE,L({forceMount:n},l,{ref:a})):d.exports.createElement(ko,{present:n||s},d.exports.createElement(qy,L({"data-state":dp(s)},l,{ref:a,onPointerEnter:ee(e.onPointerEnter,o.onContentEnter),onPointerLeave:ee(e.onPointerLeave,Hs(o.onContentLeave)),style:{pointerEvents:!s&&o.isRootMenu?"none":void 0,...l.style}})))}),QE=d.exports.forwardRef((e,t)=>{const n=hn(Ni,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=n;return Lt(()=>{r(e.value,{ref:t,...e})},[e,t,r]),Lt(()=>()=>o(e.value),[e.value,o]),null}),Ja="navigationMenu.rootContentDismiss",qy=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:o,focusProxyRef:i,wasEscapeCloseRef:a,onRootContentClose:s,onContentFocusOutside:l,...u}=e,c=hn(Ni,n),f=d.exports.useRef(null),p=qe(f,t),h=e1(c.baseId,r),m=t1(c.baseId,r),y=RE(n),$=d.exports.useRef(null),{onItemDismiss:g}=c;d.exports.useEffect(()=>{const x=f.current;if(c.isRootMenu&&x){const w=()=>{var S;g(),s(),x.contains(document.activeElement)&&((S=o.current)===null||S===void 0||S.focus())};return x.addEventListener(Ja,w),()=>x.removeEventListener(Ja,w)}},[c.isRootMenu,e.value,o,g,s]);const v=d.exports.useMemo(()=>{const w=y().map(D=>D.value);c.dir==="rtl"&&w.reverse();const S=w.indexOf(c.value),C=w.indexOf(c.previousValue),k=r===c.value,P=C===w.indexOf(r);if(!k&&!P)return $.current;const _=(()=>{if(S!==C){if(k&&C!==-1)return S>C?"from-end":"from-start";if(P&&S!==-1)return S>C?"to-start":"to-end"}return null})();return $.current=_,_},[c.previousValue,c.value,c.dir,y,r]);return d.exports.createElement(Jy,{asChild:!0},d.exports.createElement(Gy,L({id:m,"aria-labelledby":h,"data-motion":v,"data-orientation":c.orientation},u,{ref:p,onDismiss:()=>{var x;const w=new Event(Ja,{bubbles:!0,cancelable:!0});(x=f.current)===null||x===void 0||x.dispatchEvent(w)},onFocusOutside:ee(e.onFocusOutside,x=>{var w;l();const S=x.target;(w=c.rootNavigationMenu)!==null&&w!==void 0&&w.contains(S)&&x.preventDefault()}),onPointerDownOutside:ee(e.onPointerDownOutside,x=>{var w;const S=x.target,C=y().some(P=>{var _;return(_=P.ref.current)===null||_===void 0?void 0:_.contains(S)}),k=c.isRootMenu&&((w=c.viewport)===null||w===void 0?void 0:w.contains(S));(C||k||!c.isRootMenu)&&x.preventDefault()}),onKeyDown:ee(e.onKeyDown,x=>{const w=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!w){const k=wf(x.currentTarget),P=document.activeElement,_=k.findIndex(J=>J===P),X=x.shiftKey?k.slice(0,_).reverse():k.slice(_+1,k.length);if(fp(X))x.preventDefault();else{var C;(C=i.current)===null||C===void 0||C.focus()}}}),onEscapeKeyDown:ee(e.onEscapeKeyDown,x=>{a.current=!0})})))}),Xy="NavigationMenuViewport",GE=d.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=hn(Xy,e.__scopeNavigationMenu),i=Boolean(o.value);return d.exports.createElement(ko,{present:n||i},d.exports.createElement(KE,L({},r,{ref:t})))}),KE=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...o}=e,i=hn(Xy,n),a=qe(t,i.onViewportChange),s=IE(Ni,e.__scopeNavigationMenu),[l,u]=d.exports.useState(null),[c,f]=d.exports.useState(null),p=l?(l==null?void 0:l.width)+"px":void 0,h=l?(l==null?void 0:l.height)+"px":void 0,m=Boolean(i.value),y=m?i.value:i.previousValue;return JE(c,()=>{c&&u({width:c.offsetWidth,height:c.offsetHeight})}),d.exports.createElement(Oe.div,L({"data-state":dp(m),"data-orientation":i.orientation},o,{ref:a,style:{pointerEvents:!m&&i.isRootMenu?"none":void 0,["--radix-navigation-menu-viewport-width"]:p,["--radix-navigation-menu-viewport-height"]:h,...o.style},onPointerEnter:ee(e.onPointerEnter,i.onContentEnter),onPointerLeave:ee(e.onPointerLeave,Hs(i.onContentLeave))}),Array.from(s.items).map(([g,{ref:v,forceMount:x,...w}])=>{const S=y===g;return d.exports.createElement(ko,{key:g,present:x||S},d.exports.createElement(qy,L({},w,{ref:Bl(v,C=>{S&&C&&f(C)})})))}))}),YE="FocusGroup",Jy=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=hn(YE,n);return d.exports.createElement(xf.Provider,{scope:n},d.exports.createElement(xf.Slot,{scope:n},d.exports.createElement(Oe.div,L({dir:o.dir},r,{ref:t}))))}),Lm=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],qE="FocusGroupItem",Zy=d.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=AE(n),i=hn(qE,n);return d.exports.createElement(xf.ItemSlot,{scope:n},d.exports.createElement(Oe.button,L({},r,{ref:t,onKeyDown:ee(e.onKeyDown,a=>{if(["Home","End",...Lm].includes(a.key)){let l=o().map(f=>f.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&l.reverse(),Lm.includes(a.key)){const f=l.indexOf(a.currentTarget);l=l.slice(f+1)}setTimeout(()=>fp(l)),a.preventDefault()}})})))});function wf(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function fp(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function XE(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function JE(e,t){const n=Ge(t);Lt(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}function dp(e){return e?"open":"closed"}function e1(e,t){return`${e}-trigger-${t}`}function t1(e,t){return`${e}-content-${t}`}function Hs(e){return t=>t.pointerType==="mouse"?e(t):void 0}const ZE=DE,ek=zE,tk=BE,nk=WE,Go=HE,n1=VE,rk=GE,ok=Fl`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,ik=Fl`
 from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`,ak=O.div`
  ${({theme:{colors:e,spacing:t}})=>B`
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
`,sk=O.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
  }
`,lk=O.ul`
  display: flex;
  gap: 1rem;
`,Oa=O.li`
  ${({theme:{colors:e,spacing:t}})=>B`
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
`,uk=O.nav`
  ${({theme:{breakpoints:e}})=>B`
    @media (max-width: ${e.md}) {
      display: none;
    }
  `}
`;O.button`
  ${({theme:{colors:e,boxShadow:t}})=>B`
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
`;const ck=O(ZE)`
  ${({theme:{breakpoints:e}})=>B`
    display: none;
    @media (max-width: ${e.md}) {
      display: flex;
      justify-content: center;
      z-index: 1;
    }
  `}
`,fk=O(ek)`
  justify-content: center;
  list-style: none;
  margin: 0;
`,dk=O(nk)`
  ${({theme:{colors:e}})=>B`
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
`;O(n1)`
  border: 1px solid red;
  height: 100vh;
  opacity: 0.1;
`;O(Go)`
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
`;const pk=O.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  padding: 2rem 0 2rem 1rem;
  gap: 1rem;
`,Ra=O.li`
  ${({theme:{colors:e,boxShadow:t}})=>B`
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
`,hk=O(rk)`
  ${({theme:{colors:e,boxShadow:t}})=>B`
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
      animation: ${ok} 150ms ease;
    }
    &[data-state='closed'] {
      animation: ${ik} 150ms ease;
    }
  `}
`,mk=O.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,vk=()=>{const e=Or(),t=e.pathname.startsWith("/pokemon"),n=e.pathname.startsWith("/pokedex");return b(ak,{children:M(cy,{children:[b(sk,{children:M(Xt,{to:"/",children:[b("img",{src:cS,alt:"Pokem\xF3n logo",width:40}),b("span",{children:"React PokeDex"})]})}),b(uk,{children:M(lk,{children:[b(Oa,{children:M(Xt,{end:!0,to:"/",children:[b(Ie,{icon:hy,size:"2x"}),"Home"]})}),b(Oa,{children:M(Xt,{to:"/pokedex/1",className:n?"active":"inactive",children:[b("img",{src:fy,alt:"",width:28}),"PokeDex"]})}),b(Oa,{children:M(Xt,{to:"/pokemon/1",className:t?"active":"inactive",children:[b(Ie,{icon:Gd,size:"2x"}),"Pokemon Data"]})}),b(Oa,{children:M(Xt,{to:"/battle",children:[b(Ie,{icon:dy,size:"2x"}),"Battle"]})})]})}),b(gk,{})]})})},gk=()=>{const e=Or(),t=e.pathname.startsWith("/pokemon"),n=e.pathname.startsWith("/pokedex");return M(ck,{children:[b(fk,{children:M(tk,{children:[b(dk,{children:b(Ie,{icon:fS,size:"xl"})}),b(n1,{children:M(pk,{children:[b(Ra,{children:b(Go,{asChild:!0,children:M(Xt,{end:!0,to:"/",children:[b(Ie,{icon:hy,size:"2x"}),"Home"]})})}),b(Ra,{children:b(Go,{asChild:!0,children:M(Xt,{to:"/pokedex/1",className:n?"active":"inactive",children:[b("img",{src:fy,alt:"",width:28}),"PokeDex"]})})}),b(Ra,{children:b(Go,{asChild:!0,children:M(Xt,{to:"/pokemon/1",className:t?"active":"inactive",children:[b(Ie,{icon:Gd,size:"2x"}),"Pokemon Data"]})})}),b(Ra,{children:b(Go,{asChild:!0,children:M(Xt,{to:"/battle",children:[b(Ie,{icon:dy,size:"2x"}),"Battle"]})})})]})})]})}),b(mk,{children:b(hk,{})})]})},yk=O.div`
  ${({theme:{spacing:e}})=>B`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${e.headerSpacing};
  `}
`,xk=({children:e})=>M(Pr,{children:[b(vk,{}),b(yk,{children:b(cy,{children:e})})]}),r1="/pokedex/assets/groundTop.5b5a4f62.svg",wk=O.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`,bk=O.div`
  text-align: end;
  padding-right: 0.2rem;
`,$k=O.div`
  margin-bottom: -3px;
`,Sk=O.div`
  ${({isBattle:e=!1,theme:{colors:t}})=>B`
    width: ${e?"100%":"300px"};
    height: 20px;
    border-radius: 15px;
    overflow: hidden;
    ${e&&`border: 1px solid${t.mediumBlue};`}
  `}
`,Ck=O.div`
  ${({value:e,maxValue:t=100,isBattle:n=!1,theme:{colors:r}})=>B`
    height: 100%;
    display: block;
    background-color: ${r.mediumBlue};
    color: ${r.white};
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
        ${n&&`width: ${Math.round(e/t*100)}%;`}
      }
    }
  `}
`,pp=({name:e,maxValue:t,currentValue:n,isBattle:r=!1})=>M(wk,{children:[b($k,{children:e.toUpperCase()}),b(Sk,{isBattle:r,children:b(Ck,{isBattle:r,value:n,maxValue:t,children:r?"":n})}),b(bk,{children:r&&`${n}/${t}`})]}),Ek=Fl`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-100px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`,kk=O.div`
  ${({theme:{breakpoints:e}})=>B`
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 25rem;
    @media (max-width: ${e.md}) {
      flex-direction: column;
    }
  `}
`,Pk=O.span`
  ${({theme:{colors:e,boxShadow:t,breakpoints:n}})=>B`
    border-radius: 32px 6px;
    padding: 1.5rem;
    border: 2px solid ${e.lightGray};
    box-shadow: ${t.dark};
    background: ${e.white};
    align-self: flex-end;
    width: 500px;
    max-width: calc(100vw - 2rem);
    margin-bottom: 2rem;
    text-align: end;
    @media (max-width: ${n.md}) {
      align-self: flex-start;
    }
    & h2 {
      font-size: 1.2rem;
    }
  `}
`,Ok=O.div`
  ${({theme:{breakpoints:e}})=>B`
    align-self: center;
    @media (max-width: ${e.md}) {
      align-self: flex-start;
    }
  `}
`,Rk=O.div`
  animation: ${Ek} 2s ease;
  margin-bottom: -150px;

  & > img {
    width: 80%;
    max-width: 350px;
  }
`,_k=O.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: relative;
  z-index: -1;
`,Ak=({pokemon:e})=>M(kk,{children:[M(Ok,{children:[b(Rk,{children:b("img",{src:e==null?void 0:e.sprites.back_default,alt:""})}),b(_k,{src:r1,alt:"",width:400})]}),M(Pk,{children:[b("h2",{children:e.name.toUpperCase()}),b(pp,{isBattle:!0,name:e.stats[0].stat.name,maxValue:e.stats[0].base_stat,currentValue:e.stats[0].base_stat-30})]})]}),Tk=Fl`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-100px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`,Nk=O.div`
  ${({theme:{breakpoints:e}})=>B`
    display: flex;
    height: 25rem;
    @media (max-width: ${e.md}) {
      flex-direction: column;
      margin-bottom: 5rem;
    }
  `}
`,Mk=O.span`
  ${({theme:{colors:e,boxShadow:t,breakpoints:n}})=>B`
    border-radius: 6px 32px;
    padding: 1.5rem;
    border: 2px solid ${e.lightGray};
    box-shadow: ${t.dark};
    background: ${e.white};
    align-self: flex-start;
    width: 500px;
    max-width: calc(100vw - 2rem);
    display: flex;
    flex-direction: column;
    text-align: start;
    @media (max-width: ${n.md}) {
      align-self: flex-end;
    }
    & h2 {
      font-size: 1.2rem;
    }
  `}
`,Ik=O.div`
  ${({theme:{breakpoints:e}})=>B`
    align-self: center;
    @media (max-width: ${e.md}) {
      align-self: flex-end;
    }
  `}
`,Dk=O.div`
  animation: ${Tk} 2s ease;
  animation-delay: 1s;
  margin-bottom: -170px;
  z-index: 2;

  & > img {
    width: 80%;
    max-width: 350px;
  }
`,Fk=O.img`
  position: relative;
  z-index: -1;
`,Lk=({pokemon:e})=>M(Nk,{children:[M(Mk,{children:[b("h2",{children:e.name.toLocaleUpperCase()}),b(pp,{isBattle:!0,name:e.stats[0].stat.name,maxValue:e.stats[0].base_stat,currentValue:e.stats[0].base_stat})]}),M(Ik,{children:[b(Dk,{children:b("img",{src:e==null?void 0:e.sprites.front_default,alt:""})}),b(Fk,{src:r1,alt:"",width:400})]})]});function o1(e,t){return function(){return e.apply(t,arguments)}}const{toString:i1}=Object.prototype,{getPrototypeOf:hp}=Object,mp=(e=>t=>{const n=i1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mn=e=>(e=e.toLowerCase(),t=>mp(t)===e),Hl=e=>t=>typeof t===e,{isArray:Ki}=Array,bf=Hl("undefined");function zk(e){return e!==null&&!bf(e)&&e.constructor!==null&&!bf(e.constructor)&&Po(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const a1=mn("ArrayBuffer");function jk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&a1(e.buffer),t}const Uk=Hl("string"),Po=Hl("function"),s1=Hl("number"),l1=e=>e!==null&&typeof e=="object",Bk=e=>e===!0||e===!1,Za=e=>{if(mp(e)!=="object")return!1;const t=hp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Wk=mn("Date"),Hk=mn("File"),Vk=mn("Blob"),Qk=mn("FileList"),Gk=e=>l1(e)&&Po(e.pipe),Kk=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||i1.call(e)===t||Po(e.toString)&&e.toString()===t)},Yk=mn("URLSearchParams"),qk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ki(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function $f(){const e={},t=(n,r)=>{Za(e[r])&&Za(n)?e[r]=$f(e[r],n):Za(n)?e[r]=$f({},n):Ki(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Vl(arguments[n],t);return e}const Xk=(e,t,n,{allOwnKeys:r}={})=>(Vl(t,(o,i)=>{n&&Po(o)?e[i]=o1(o,n):e[i]=o},{allOwnKeys:r}),e),Jk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Zk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},e3=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&hp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},t3=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},n3=e=>{if(!e)return null;if(Ki(e))return e;let t=e.length;if(!s1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},r3=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hp(Uint8Array)),o3=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},i3=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},a3=mn("HTMLFormElement"),s3=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),zm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),l3=mn("RegExp"),u1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Vl(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},u3=e=>{u1(e,(t,n)=>{const r=e[n];if(!!Po(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},c3=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Ki(e)?r(e):r(String(e).split(t)),n},f3=()=>{},d3=(e,t)=>(e=+e,Number.isFinite(e)?e:t),R={isArray:Ki,isArrayBuffer:a1,isBuffer:zk,isFormData:Kk,isArrayBufferView:jk,isString:Uk,isNumber:s1,isBoolean:Bk,isObject:l1,isPlainObject:Za,isUndefined:bf,isDate:Wk,isFile:Hk,isBlob:Vk,isRegExp:l3,isFunction:Po,isStream:Gk,isURLSearchParams:Yk,isTypedArray:r3,isFileList:Qk,forEach:Vl,merge:$f,extend:Xk,trim:qk,stripBOM:Jk,inherits:Zk,toFlatObject:e3,kindOf:mp,kindOfTest:mn,endsWith:t3,toArray:n3,forEachEntry:o3,matchAll:i3,isHTMLForm:a3,hasOwnProperty:zm,hasOwnProp:zm,reduceDescriptors:u1,freezeMethods:u3,toObjectSet:c3,toCamelCase:s3,noop:f3,toFiniteNumber:d3};function fe(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}R.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const c1=fe.prototype,f1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{f1[e]={value:e}});Object.defineProperties(fe,f1);Object.defineProperty(c1,"isAxiosError",{value:!0});fe.from=(e,t,n,r,o,i)=>{const a=Object.create(c1);return R.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),fe.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var p3=typeof self=="object"?self.FormData:window.FormData;function Sf(e){return R.isPlainObject(e)||R.isArray(e)}function d1(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function jm(e,t,n){return e?e.concat(t).map(function(o,i){return o=d1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function h3(e){return R.isArray(e)&&!e.some(Sf)}const m3=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function v3(e){return e&&R.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Ql(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new(p3||FormData),n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,$){return!R.isUndefined($[y])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&v3(t);if(!R.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(R.isDate(m))return m.toISOString();if(!l&&R.isBlob(m))throw new fe("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(m)||R.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,y,$){let g=m;if(m&&!$&&typeof m=="object"){if(R.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(R.isArray(m)&&h3(m)||R.isFileList(m)||R.endsWith(y,"[]")&&(g=R.toArray(m)))return y=d1(y),g.forEach(function(x,w){!(R.isUndefined(x)||x===null)&&t.append(a===!0?jm([y],w,i):a===null?y:y+"[]",u(x))}),!1}return Sf(m)?!0:(t.append(jm($,y,i),u(m)),!1)}const f=[],p=Object.assign(m3,{defaultVisitor:c,convertValue:u,isVisitable:Sf});function h(m,y){if(!R.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(m),R.forEach(m,function(g,v){(!(R.isUndefined(g)||g===null)&&o.call(t,g,R.isString(v)?v.trim():v,y,p))===!0&&h(g,y?y.concat(v):[v])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Um(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function vp(e,t){this._pairs=[],e&&Ql(e,this,t)}const p1=vp.prototype;p1.append=function(t,n){this._pairs.push([t,n])};p1.toString=function(t){const n=t?function(r){return t.call(this,r,Um)}:Um;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function g3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function h1(e,t,n){if(!t)return e;const r=n&&n.encode||g3,o=n&&n.serialize;let i;if(o?i=o(t,n):i=R.isURLSearchParams(t)?t.toString():new vp(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Bm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const m1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},y3=typeof URLSearchParams<"u"?URLSearchParams:vp,x3=FormData,w3=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),tn={isBrowser:!0,classes:{URLSearchParams:y3,FormData:x3,Blob},isStandardBrowserEnv:w3,protocols:["http","https","file","blob","url","data"]};function b3(e,t){return Ql(e,new tn.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return tn.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function $3(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function S3(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function v1(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&R.isArray(o)?o.length:a,l?(R.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!R.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&R.isArray(o[a])&&(o[a]=S3(o[a])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,o)=>{t($3(r),o,n,0)}),n}return null}function C3(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const E3=tn.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),R.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),R.isString(i)&&l.push("path="+i),R.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function k3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function P3(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function g1(e,t){return e&&!k3(t)?P3(e,t):t}const O3=tn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=R.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Yi(e,t,n){fe.call(this,e==null?"canceled":e,fe.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Yi,fe,{__CANCEL__:!0});function R3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const _3=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A3=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&_3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Wm=Symbol("internals"),y1=Symbol("defaults");function Ko(e){return e&&String(e).trim().toLowerCase()}function es(e){return e===!1||e==null?e:R.isArray(e)?e.map(es):String(e)}function T3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Hm(e,t,n,r){if(R.isFunction(r))return r.call(this,t,n);if(!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function N3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function M3(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}function Lo(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}function Ot(e,t){e&&this.set(e),this[y1]=t||null}Object.assign(Ot.prototype,{set:function(e,t,n){const r=this;function o(i,a,s){const l=Ko(a);if(!l)throw new Error("header name must be a non-empty string");const u=Lo(r,l);u&&s!==!0&&(r[u]===!1||s===!1)||(r[u||a]=es(i))}return R.isPlainObject(e)?R.forEach(e,(i,a)=>{o(i,a,t)}):o(t,e,n),this},get:function(e,t){if(e=Ko(e),!e)return;const n=Lo(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return T3(r);if(R.isFunction(t))return t.call(this,r,n);if(R.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=Ko(e),e){const n=Lo(this,e);return!!(n&&(!t||Hm(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function o(i){if(i=Ko(i),i){const a=Lo(n,i);a&&(!t||Hm(n,n[a],a,t))&&(delete n[a],r=!0)}}return R.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return R.forEach(this,(r,o)=>{const i=Lo(n,o);if(i){t[i]=es(r),delete t[o];return}const a=e?N3(o):String(o).trim();a!==o&&delete t[o],t[a]=es(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return R.forEach(Object.assign({},this[y1]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&R.isArray(n)?n.join(", "):n)}),t}});Object.assign(Ot,{from:function(e){return R.isString(e)?new this(A3(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[Wm]=this[Wm]={accessors:{}}).accessors,r=this.prototype;function o(i){const a=Ko(i);n[a]||(M3(r,i),n[a]=!0)}return R.isArray(e)?e.forEach(o):o(e),this}});Ot.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);R.freezeMethods(Ot.prototype);R.freezeMethods(Ot);function I3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let f=i,p=0;for(;f!==o;)p+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const h=c&&u-c;return h?Math.round(p*1e3/h):void 0}}function Vm(e,t){let n=0;const r=I3(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0};c[t?"download":"upload"]=!0,e(c)}}function Qm(e){return new Promise(function(n,r){let o=e.data;const i=Ot.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}R.isFormData(o)&&tn.isStandardBrowserEnv&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+m))}const c=g1(e.baseURL,e.url);u.open(e.method.toUpperCase(),h1(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const h=Ot.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};C3(function(g){n(g),l()},function(g){r(g),l()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){!u||(r(new fe("Request aborted",fe.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||m1;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new fe(m,y.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,u)),u=null},tn.isStandardBrowserEnv){const h=(e.withCredentials||O3(c))&&e.xsrfCookieName&&E3.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&R.forEach(i.toJSON(),function(m,y){u.setRequestHeader(y,m)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Vm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Vm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{!u||(r(!h||h.type?new Yi(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=R3(c);if(p&&tn.protocols.indexOf(p)===-1){r(new fe("Unsupported protocol "+p+":",fe.ERR_BAD_REQUEST,e));return}u.send(o||null)})}const Gm={http:Qm,xhr:Qm},Km={getAdapter:e=>{if(R.isString(e)){const t=Gm[e];if(!e)throw Error(R.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!R.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Gm},D3={"Content-Type":"application/x-www-form-urlencoded"};function F3(){let e;return typeof XMLHttpRequest<"u"?e=Km.getAdapter("xhr"):typeof process<"u"&&R.kindOf(process)==="process"&&(e=Km.getAdapter("http")),e}function L3(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Oo={transitional:m1,adapter:F3(),transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=R.isObject(t);if(i&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return o&&o?JSON.stringify(v1(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return b3(t,this.formSerializer).toString();if((s=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ql(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),L3(t)):t}],transformResponse:[function(t){const n=this.transitional||Oo.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?fe.from(s,fe.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){Oo.headers[t]={}});R.forEach(["post","put","patch"],function(t){Oo.headers[t]=R.merge(D3)});function Fu(e,t){const n=this||Oo,r=t||n,o=Ot.from(r.headers);let i=r.data;return R.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function x1(e){return!!(e&&e.__CANCEL__)}function Lu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yi}function Ym(e){return Lu(e),e.headers=Ot.from(e.headers),e.data=Fu.call(e,e.transformRequest),(e.adapter||Oo.adapter)(e).then(function(r){return Lu(e),r.data=Fu.call(e,e.transformResponse,r),r.headers=Ot.from(r.headers),r},function(r){return x1(r)||(Lu(e),r&&r.response&&(r.response.data=Fu.call(e,e.transformResponse,r.response),r.response.headers=Ot.from(r.response.headers))),Promise.reject(r)})}function Mi(e,t){t=t||{};const n={};function r(u,c){return R.isPlainObject(u)&&R.isPlainObject(c)?R.merge(u,c):R.isPlainObject(c)?R.merge({},c):R.isArray(c)?c.slice():c}function o(u){if(R.isUndefined(t[u])){if(!R.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function i(u){if(!R.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(R.isUndefined(t[u])){if(!R.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function s(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return R.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||o,p=f(c);R.isUndefined(p)&&f!==s||(n[c]=p)}),n}const w1="1.1.3",gp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{gp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const qm={};gp.transitional=function(t,n,r){function o(i,a){return"[Axios v"+w1+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new fe(o(a," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!qm[a]&&(qm[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function z3(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new fe("option "+i+" must be "+l,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+i,fe.ERR_BAD_OPTION)}}const Cf={assertOptions:z3,validators:gp},wn=Cf.validators;class mr{constructor(t){this.defaults=t,this.interceptors={request:new Bm,response:new Bm}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mi(this.defaults,n);const{transitional:r,paramsSerializer:o}=n;r!==void 0&&Cf.assertOptions(r,{silentJSONParsing:wn.transitional(wn.boolean),forcedJSONParsing:wn.transitional(wn.boolean),clarifyTimeoutError:wn.transitional(wn.boolean)},!1),o!==void 0&&Cf.assertOptions(o,{encode:wn.function,serialize:wn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&R.merge(n.headers.common,n.headers[n.method]);i&&R.forEach(["delete","get","head","post","put","patch","common"],function(m){delete n.headers[m]}),n.headers=new Ot(n.headers,i);const a=[];let s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(s=s&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,c=0,f;if(!s){const h=[Ym.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,l),f=h.length,u=Promise.resolve(n);c<f;)u=u.then(h[c++],h[c++]);return u}f=a.length;let p=n;for(c=0;c<f;){const h=a[c++],m=a[c++];try{p=h(p)}catch(y){m.call(this,y);break}}try{u=Ym.call(this,p)}catch(h){return Promise.reject(h)}for(c=0,f=l.length;c<f;)u=u.then(l[c++],l[c++]);return u}getUri(t){t=Mi(this.defaults,t);const n=g1(t.baseURL,t.url);return h1(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){mr.prototype[t]=function(n,r){return this.request(Mi(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(Mi(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}mr.prototype[t]=n(),mr.prototype[t+"Form"]=n(!0)});class yp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Yi(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new yp(function(o){t=o}),cancel:t}}}function j3(e){return function(n){return e.apply(null,n)}}function U3(e){return R.isObject(e)&&e.isAxiosError===!0}function b1(e){const t=new mr(e),n=o1(mr.prototype.request,t);return R.extend(n,mr.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return b1(Mi(e,o))},n}const dt=b1(Oo);dt.Axios=mr;dt.CanceledError=Yi;dt.CancelToken=yp;dt.isCancel=x1;dt.VERSION=w1;dt.toFormData=Ql;dt.AxiosError=fe;dt.Cancel=dt.CanceledError;dt.all=function(t){return Promise.all(t)};dt.spread=j3;dt.isAxiosError=U3;dt.formToJSON=e=>v1(R.isHTMLForm(e)?new FormData(e):e);const B3="https://pokeapi.co/api",Gl=dt.create({baseURL:B3}),W3=async(e=0,t=20)=>(await Gl.get(`/v2/pokemon/?offset=${e}&limit=${t}}`)).data,Ii=async e=>(await Gl.get(`/v2/pokemon/${e}`)).data,H3=async e=>(await Gl.get(e)).data,V3=async e=>(await Gl.get(`/v2/pokemon-species/${e}`)).data,Q3=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  border-radius: 99px;
  position: relative;
  background-color: white;
  max-width: 70rem;
`,G3=O.div`
  ${({theme:{colors:e,spacing:t,breakpoints:n}})=>B`
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${t.headerSpacing} - (76px + 16rem;));
    background-color: ${e.white};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${e.darkGray};
    padding-bottom: 3rem;
    padding-top: 6rem;
    padding: 6rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        ${e.white},
        ${e.white},
        ${e.grassGreenLight},
        ${e.grassGreenDark}
      );
      opacity: 0.8;
    }
    @media (max-width: ${n.lg}) {
      padding: 6rem 1rem;
    }
  `}
`,K3=O.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`,Y3=O.span`
  ${({theme:{colors:e}})=>B`
    position: absolute;
    width: 300px;
    z-index: 3;
    transform: rotate(45deg);
    padding: 1rem;
    top: 30px;
    font-size: 1.2rem;
    right: -90px;
    font-weight: 500;
    background: ${e.yellowMedium};
  `}
`,q3=()=>{const[e,t]=d.exports.useState(),[n,r]=d.exports.useState();return d.exports.useEffect(()=>{(async i=>{const a=await Ii(i[0]),s=await Ii(i[1]);t(a),r(s)})(["3","59"])},[]),b(Q3,{children:M(G3,{children:[b(Y3,{children:"Coming soon"}),M(K3,{children:[e&&b(Lk,{pokemon:e}),n&&b(Ak,{pokemon:n})]})]})})},X3=O.div`
  ${({color:e,theme:{colors:t}})=>B`
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
`,Kl=({color:e})=>b(X3,{color:e}),J3=O.div`
  ${({theme:{typesColors:e,boxShadow:t,colors:n},typeName:r})=>B`
    border: 2px solid ${e[r].primaryColor};
    background-color: ${e[r].secondaryColor};
    padding: 3px;
    border-radius: 99px;
    font-weight: bold;
    width: 100%;
    text-shadow: ${t.dark};
    color: ${n.white};
  `}
`,xp=({typeName:e})=>b(J3,{typeName:e||"",children:e}),Z3=le.createContext({}),$1=!0;function eP({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:l=$1}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof s=="number"&&(u["--animation-duration"]=`${s}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof o=="string"||typeof o=="number")&&(u.borderRadius=o),i&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function ar({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:o,circle:i=!1,style:a,...s}){var l,u,c;const f=le.useContext(Z3),p={...s};for(const[x,w]of Object.entries(s))typeof w>"u"&&delete p[x];const h={...f,...p,circle:i},m={...a,...eP(h)};let y="react-loading-skeleton";n&&(y+=` ${n}`);const $=(l=h.inline)!==null&&l!==void 0?l:!1,g=[],v=Math.ceil(e);for(let x=0;x<v;x++){let w=m;if(v>e&&x===v-1){const C=(u=w.width)!==null&&u!==void 0?u:"100%",k=e%1,P=typeof C=="number"?C*k:`calc(${C} * ${k})`;w={...w,width:P}}const S=b("span",{className:y,style:w,children:"\u200C"},x);$?g.push(S):g.push(M(Pr,{children:[S,b("br",{})]}))}return b("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":(c=h.enableAnimation)!==null&&c!==void 0?c:$1,children:t?g.map((x,w)=>b(t,{children:x},w)):g})}const tP=O.div`
  ${({light:e,theme:{boxShadow:t,colors:n,breakpoints:r}})=>B`
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
`,nP=O.div`
  ${({light:e,theme:{colors:t}})=>B`
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
`,rP=O.div`
  ${({theme:{boxShadow:e,colors:t},secondary:n})=>B`
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
`,oP=O.div`
  ${({theme:{colors:e,boxShadow:t}})=>B`
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
`,iP=O.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`,Xm=O(ar)`
  border-radius: 6px 36px;
  width: 250px;
  height: 250px;
`,Ef=({pokemon:e,light:t=!1})=>{var a;const[n,r]=d.exports.useState();d.exports.useEffect(()=>{(async()=>{const l=await Ii(e);r(l)})()},[e]);const{typesColors:o,colors:i}=Rr();return b(tP,{light:t,children:n?b(_n,{to:`/pokemon/${n.id}`,children:M(nP,{light:t,children:[M(rP,{secondary:(a=o[n.types[0].type.name])==null?void 0:a.secondaryColor,children:[M(oP,{children:["#",n.id]}),b("h3",{children:n.species.name})]}),b("img",{src:n.sprites.other.dream_world.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name}),b(iP,{children:n.types.map(s=>b(xp,{typeName:s.type.name},s.type.name))})]})}):b(Kl,{color:t?i.black:""})})},aP=O.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 50px 0;
`,sP=({pokemonList:e})=>b(aP,{children:e.map((t,n)=>b(Ef,{pokemon:t.name},t.name+n))});let zu=0;function lP(){d.exports.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Jm()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Jm()),zu++,()=>{zu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),zu--}},[])}function Jm(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const ju="focusScope.autoFocusOnMount",Uu="focusScope.autoFocusOnUnmount",Zm={bubbles:!1,cancelable:!0},uP=d.exports.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[s,l]=d.exports.useState(null),u=Ge(o),c=Ge(i),f=d.exports.useRef(null),p=qe(t,y=>l(y)),h=d.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.exports.useEffect(()=>{if(r){let g=function(x){if(h.paused||!s)return;const w=x.target;s.contains(w)?f.current=w:or(f.current,{select:!0})},v=function(x){h.paused||!s||s.contains(x.relatedTarget)||or(f.current,{select:!0})};var y=g,$=v;return document.addEventListener("focusin",g),document.addEventListener("focusout",v),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",v)}}},[r,s,h.paused]),d.exports.useEffect(()=>{if(s){tv.add(h);const y=document.activeElement;if(!s.contains(y)){const g=new CustomEvent(ju,Zm);s.addEventListener(ju,u),s.dispatchEvent(g),g.defaultPrevented||(cP(mP(S1(s)),{select:!0}),document.activeElement===y&&or(s))}return()=>{s.removeEventListener(ju,u),setTimeout(()=>{const g=new CustomEvent(Uu,Zm);s.addEventListener(Uu,c),s.dispatchEvent(g),g.defaultPrevented||or(y!=null?y:document.body,{select:!0}),s.removeEventListener(Uu,c),tv.remove(h)},0)}}},[s,u,c,h]);const m=d.exports.useCallback(y=>{if(!n&&!r||h.paused)return;const $=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,g=document.activeElement;if($&&g){const v=y.currentTarget,[x,w]=fP(v);x&&w?!y.shiftKey&&g===w?(y.preventDefault(),n&&or(x,{select:!0})):y.shiftKey&&g===x&&(y.preventDefault(),n&&or(w,{select:!0})):g===v&&y.preventDefault()}},[n,r,h.paused]);return d.exports.createElement(Oe.div,L({tabIndex:-1},a,{ref:p,onKeyDown:m}))});function cP(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(or(r,{select:t}),document.activeElement!==n)return}function fP(e){const t=S1(e),n=ev(t,e),r=ev(t.reverse(),e);return[n,r]}function S1(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ev(e,t){for(const n of e)if(!dP(n,{upTo:t}))return n}function dP(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function pP(e){return e instanceof HTMLInputElement&&"select"in e}function or(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&pP(e)&&t&&e.select()}}const tv=hP();function hP(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=nv(e,t),e.unshift(t)},remove(t){var n;e=nv(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function nv(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function mP(e){return e.filter(t=>t.tagName!=="A")}function _r(e){return e.split("-")[0]}function qi(e){return e.split("-")[1]}function Ro(e){return["top","bottom"].includes(_r(e))?"x":"y"}function wp(e){return e==="y"?"height":"width"}function rv(e,t,n){let{reference:r,floating:o}=e;const i=r.x+r.width/2-o.width/2,a=r.y+r.height/2-o.height/2,s=Ro(t),l=wp(s),u=r[l]/2-o[l]/2,c=_r(t),f=s==="x";let p;switch(c){case"top":p={x:i,y:r.y-o.height};break;case"bottom":p={x:i,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:a};break;case"left":p={x:r.x-o.width,y:a};break;default:p={x:r.x,y:r.y}}switch(qi(t)){case"start":p[s]-=u*(n&&f?-1:1);break;case"end":p[s]+=u*(n&&f?-1:1);break}return p}const vP=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=await(a.isRTL==null?void 0:a.isRTL(t));let l=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:c}=rv(l,r,s),f=r,p={},h=0;for(let m=0;m<i.length;m++){const{name:y,fn:$}=i[m],{x:g,y:v,data:x,reset:w}=await $({x:u,y:c,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:l,platform:a,elements:{reference:e,floating:t}});if(u=g!=null?g:u,c=v!=null?v:c,p={...p,[y]:{...p[y],...x}},w&&h<=50){h++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(l=w.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:u,y:c}=rv(l,f,s)),m=-1;continue}}return{x:u,y:c,placement:f,strategy:o,middlewareData:p}};function gP(e){return{top:0,right:0,bottom:0,left:0,...e}}function C1(e){return typeof e!="number"?gP(e):{top:e,right:e,bottom:e,left:e}}function Vs(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Di(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:p=!1,padding:h=0}=t,m=C1(h),$=s[p?f==="floating"?"reference":"floating":f],g=Vs(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement($)))==null||n?$:$.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:l})),v=Vs(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?{...a.floating,x:r,y:o}:a.reference,offsetParent:await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),strategy:l}):a[f]);return{top:g.top-v.top+m.top,bottom:v.bottom-g.bottom+m.bottom,left:g.left-v.left+m.left,right:v.right-g.right+m.right}}const yP=Math.min,ir=Math.max;function kf(e,t,n){return ir(e,yP(t,n))}const ov=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e!=null?e:{},{x:o,y:i,placement:a,rects:s,platform:l}=t;if(n==null)return{};const u=C1(r),c={x:o,y:i},f=Ro(a),p=qi(a),h=wp(f),m=await l.getDimensions(n),y=f==="y"?"top":"left",$=f==="y"?"bottom":"right",g=s.reference[h]+s.reference[f]-c[f]-s.floating[h],v=c[f]-s.reference[f],x=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let w=x?f==="y"?x.clientHeight||0:x.clientWidth||0:0;w===0&&(w=s.floating[h]);const S=g/2-v/2,C=u[y],k=w-m[h]-u[$],P=w/2-m[h]/2+S,_=kf(C,P,k),J=(p==="start"?u[y]:u[$])>0&&P!==_&&s.reference[h]<=s.floating[h]?P<C?C-P:k-P:0;return{[f]:c[f]-J,data:{[f]:_,centerOffset:P-_}}}}),xP={left:"right",right:"left",bottom:"top",top:"bottom"};function Qs(e){return e.replace(/left|right|bottom|top/g,t=>xP[t])}function wP(e,t,n){n===void 0&&(n=!1);const r=qi(e),o=Ro(e),i=wp(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Qs(a)),{main:a,cross:Qs(a)}}const bP={start:"end",end:"start"};function iv(e){return e.replace(/start|end/g,t=>bP[t])}const $P=["top","right","bottom","left"];function SP(e){const t=Qs(e);return[iv(e),t,iv(t)]}const CP=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:i,initialPlacement:a,platform:s,elements:l}=t,{mainAxis:u=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",flipAlignment:h=!0,...m}=e,y=_r(r),g=f||(y===a||!h?[Qs(a)]:SP(a)),v=[a,...g],x=await Di(t,m),w=[];let S=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&w.push(x[y]),c){const{main:_,cross:D}=wP(r,i,await(s.isRTL==null?void 0:s.isRTL(l.floating)));w.push(x[_],x[D])}if(S=[...S,{placement:r,overflows:w}],!w.every(_=>_<=0)){var C,k;const _=((C=(k=o.flip)==null?void 0:k.index)!=null?C:0)+1,D=v[_];if(D)return{data:{index:_,overflows:S},reset:{placement:D}};let X="bottom";switch(p){case"bestFit":{var P;const J=(P=S.map(Z=>[Z,Z.overflows.filter(oe=>oe>0).reduce((oe,ne)=>oe+ne,0)]).sort((Z,oe)=>Z[1]-oe[1])[0])==null?void 0:P[0].placement;J&&(X=J);break}case"initialPlacement":X=a;break}if(r!==X)return{reset:{placement:X}}}return{}}}};function av(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function sv(e){return $P.some(t=>e[t]>=0)}const EP=function(e){let{strategy:t="referenceHidden",...n}=e===void 0?{}:e;return{name:"hide",async fn(r){const{rects:o}=r;switch(t){case"referenceHidden":{const i=await Di(r,{...n,elementContext:"reference"}),a=av(i,o.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:sv(a)}}}case"escaped":{const i=await Di(r,{...n,altBoundary:!0}),a=av(i,o.floating);return{data:{escapedOffsets:a,escaped:sv(a)}}}default:return{}}}}};async function kP(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=_r(n),s=qi(n),l=Ro(n)==="x",u=["left","top"].includes(a)?-1:1,c=i&&l?-1:1,f=typeof t=="function"?t(e):t;let{mainAxis:p,crossAxis:h,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return s&&typeof m=="number"&&(h=s==="end"?m*-1:m),l?{x:h*c,y:p*u}:{x:p*u,y:h*c}}const PP=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await kP(t,e);return{x:n+o.x,y:r+o.y,data:o}}}};function E1(e){return e==="x"?"y":"x"}const OP=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:$=>{let{x:g,y:v}=$;return{x:g,y:v}}},...l}=e,u={x:n,y:r},c=await Di(t,l),f=Ro(_r(o)),p=E1(f);let h=u[f],m=u[p];if(i){const $=f==="y"?"top":"left",g=f==="y"?"bottom":"right",v=h+c[$],x=h-c[g];h=kf(v,h,x)}if(a){const $=p==="y"?"top":"left",g=p==="y"?"bottom":"right",v=m+c[$],x=m-c[g];m=kf(v,m,x)}const y=s.fn({...t,[f]:h,[p]:m});return{...y,data:{x:y.x-n,y:y.y-r}}}}},RP=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:u=!0}=e,c={x:n,y:r},f=Ro(o),p=E1(f);let h=c[f],m=c[p];const y=typeof s=="function"?s({...i,placement:o}):s,$=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const S=f==="y"?"height":"width",C=i.reference[f]-i.floating[S]+$.mainAxis,k=i.reference[f]+i.reference[S]-$.mainAxis;h<C?h=C:h>k&&(h=k)}if(u){var g,v,x,w;const S=f==="y"?"width":"height",C=["top","left"].includes(_r(o)),k=i.reference[p]-i.floating[S]+(C&&(g=(v=a.offset)==null?void 0:v[p])!=null?g:0)+(C?0:$.crossAxis),P=i.reference[p]+i.reference[S]+(C?0:(x=(w=a.offset)==null?void 0:w[p])!=null?x:0)-(C?$.crossAxis:0);m<k?m=k:m>P&&(m=P)}return{[f]:h,[p]:m}}}},_P=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a,...s}=e,l=await Di(t,s),u=_r(n),c=qi(n);let f,p;u==="top"||u==="bottom"?(f=u,p=c===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(p=u,f=c==="end"?"top":"bottom");const h=ir(l.left,0),m=ir(l.right,0),y=ir(l.top,0),$=ir(l.bottom,0),g={availableHeight:r.floating.height-(["left","right"].includes(n)?2*(y!==0||$!==0?y+$:ir(l.top,l.bottom)):l[f]),availableWidth:r.floating.width-(["top","bottom"].includes(n)?2*(h!==0||m!==0?h+m:ir(l.left,l.right)):l[p])},v=await o.getDimensions(i.floating);a==null||a({...t,...g});const x=await o.getDimensions(i.floating);return v.width!==x.width||v.height!==x.height?{reset:{rects:!0}}:{}}}};function k1(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function vn(e){if(e==null)return window;if(!k1(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function Xi(e){return vn(e).getComputedStyle(e)}function cn(e){return k1(e)?"":e?(e.nodeName||"").toLowerCase():""}function P1(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function Kt(e){return e instanceof vn(e).HTMLElement}function Kn(e){return e instanceof vn(e).Element}function AP(e){return e instanceof vn(e).Node}function bp(e){if(typeof ShadowRoot>"u")return!1;const t=vn(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Yl(e){const{overflow:t,overflowX:n,overflowY:r}=Xi(e);return/auto|scroll|overlay|hidden/.test(t+r+n)}function TP(e){return["table","td","th"].includes(cn(e))}function O1(e){const t=/firefox/i.test(P1()),n=Xi(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}function R1(){return!/^((?!chrome|android).)*safari/i.test(P1())}const lv=Math.min,li=Math.max,Gs=Math.round;function fn(e,t,n){var r,o,i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect();let l=1,u=1;t&&Kt(e)&&(l=e.offsetWidth>0&&Gs(s.width)/e.offsetWidth||1,u=e.offsetHeight>0&&Gs(s.height)/e.offsetHeight||1);const c=Kn(e)?vn(e):window,f=!R1()&&n,p=(s.left+(f&&(r=(o=c.visualViewport)==null?void 0:o.offsetLeft)!=null?r:0))/l,h=(s.top+(f&&(i=(a=c.visualViewport)==null?void 0:a.offsetTop)!=null?i:0))/u,m=s.width/l,y=s.height/u;return{width:m,height:y,top:h,right:p+m,bottom:h+y,left:p,x:p,y:h}}function Jn(e){return((AP(e)?e.ownerDocument:e.document)||window.document).documentElement}function ql(e){return Kn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function _1(e){return fn(Jn(e)).left+ql(e).scrollLeft}function NP(e){const t=fn(e);return Gs(t.width)!==e.offsetWidth||Gs(t.height)!==e.offsetHeight}function MP(e,t,n){const r=Kt(t),o=Jn(t),i=fn(e,r&&NP(t),n==="fixed");let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(r||!r&&n!=="fixed")if((cn(t)!=="body"||Yl(o))&&(a=ql(t)),Kt(t)){const l=fn(t,!0);s.x=l.x+t.clientLeft,s.y=l.y+t.clientTop}else o&&(s.x=_1(o));return{x:i.left+a.scrollLeft-s.x,y:i.top+a.scrollTop-s.y,width:i.width,height:i.height}}function A1(e){return cn(e)==="html"?e:e.assignedSlot||e.parentNode||(bp(e)?e.host:null)||Jn(e)}function uv(e){return!Kt(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function IP(e){let t=A1(e);for(bp(t)&&(t=t.host);Kt(t)&&!["html","body"].includes(cn(t));){if(O1(t))return t;t=t.parentNode}return null}function Pf(e){const t=vn(e);let n=uv(e);for(;n&&TP(n)&&getComputedStyle(n).position==="static";)n=uv(n);return n&&(cn(n)==="html"||cn(n)==="body"&&getComputedStyle(n).position==="static"&&!O1(n))?t:n||IP(e)||t}function cv(e){if(Kt(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=fn(e);return{width:t.width,height:t.height}}function DP(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Kt(n),i=Jn(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((o||!o&&r!=="fixed")&&((cn(n)!=="body"||Yl(i))&&(a=ql(n)),Kt(n))){const l=fn(n,!0);s.x=l.x+n.clientLeft,s.y=l.y+n.clientTop}return{...t,x:t.x-a.scrollLeft+s.x,y:t.y-a.scrollTop+s.y}}function FP(e,t){const n=vn(e),r=Jn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const u=R1();(u||!u&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}function LP(e){var t;const n=Jn(e),r=ql(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=li(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=li(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-r.scrollLeft+_1(e);const l=-r.scrollTop;return Xi(o||n).direction==="rtl"&&(s+=li(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function T1(e){const t=A1(e);return["html","body","#document"].includes(cn(t))?e.ownerDocument.body:Kt(t)&&Yl(t)?t:T1(t)}function Ks(e,t){var n;t===void 0&&(t=[]);const r=T1(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=vn(r),a=o?[i].concat(i.visualViewport||[],Yl(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Ks(a))}function zP(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&bp(n)){let r=t;do{if(r&&e===r)return!0;r=r.parentNode||r.host}while(r)}return!1}function jP(e,t){const n=fn(e,!1,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft;return{top:r,left:o,x:o,y:r,right:o+e.clientWidth,bottom:r+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function fv(e,t,n){return t==="viewport"?Vs(FP(e,n)):Kn(t)?jP(t,n):Vs(LP(Jn(e)))}function UP(e){const t=Ks(e),r=["absolute","fixed"].includes(Xi(e).position)&&Kt(e)?Pf(e):e;return Kn(r)?t.filter(o=>Kn(o)&&zP(o,r)&&cn(o)!=="body"):[]}function BP(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?UP(t):[].concat(n),r],s=a[0],l=a.reduce((u,c)=>{const f=fv(t,c,o);return u.top=li(f.top,u.top),u.right=lv(f.right,u.right),u.bottom=lv(f.bottom,u.bottom),u.left=li(f.left,u.left),u},fv(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const WP={getClippingRect:BP,convertOffsetParentRelativeRectToViewportRelativeRect:DP,isElement:Kn,getDimensions:cv,getOffsetParent:Pf,getDocumentElement:Jn,getElementRects:e=>{let{reference:t,floating:n,strategy:r}=e;return{reference:MP(t,Pf(n),r),floating:{...cv(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Xi(e).direction==="rtl"};function HP(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=!0,animationFrame:s=!1}=r,l=o&&!s,u=i&&!s,c=l||u?[...Kn(e)?Ks(e):[],...Ks(t)]:[];c.forEach(y=>{l&&y.addEventListener("scroll",n,{passive:!0}),u&&y.addEventListener("resize",n)});let f=null;if(a){let y=!0;f=new ResizeObserver(()=>{y||n(),y=!1}),Kn(e)&&!s&&f.observe(e),f.observe(t)}let p,h=s?fn(e):null;s&&m();function m(){const y=fn(e);h&&(y.x!==h.x||y.y!==h.y||y.width!==h.width||y.height!==h.height)&&n(),h=y,p=requestAnimationFrame(m)}return n(),()=>{var y;c.forEach($=>{l&&$.removeEventListener("scroll",n),u&&$.removeEventListener("resize",n)}),(y=f)==null||y.disconnect(),f=null,s&&cancelAnimationFrame(p)}}const VP=(e,t,n)=>vP(e,t,{platform:WP,...n});var Of=typeof document<"u"?d.exports.useLayoutEffect:d.exports.useEffect;function Rf(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Rf(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Rf(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function QP(e){const t=d.exports.useRef(e);return Of(()=>{t.current=e}),t}function GP(e){let{middleware:t,placement:n="bottom",strategy:r="absolute",whileElementsMounted:o}=e===void 0?{}:e;const i=d.exports.useRef(null),a=d.exports.useRef(null),s=QP(o),l=d.exports.useRef(null),[u,c]=d.exports.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{}}),[f,p]=d.exports.useState(t);Rf(f==null?void 0:f.map(x=>{let{options:w}=x;return w}),t==null?void 0:t.map(x=>{let{options:w}=x;return w}))||p(t);const h=d.exports.useCallback(()=>{!i.current||!a.current||VP(i.current,a.current,{middleware:f,placement:n,strategy:r}).then(x=>{m.current&&yo.exports.flushSync(()=>{c(x)})})},[f,n,r]);Of(()=>{m.current&&h()},[h]);const m=d.exports.useRef(!1);Of(()=>(m.current=!0,()=>{m.current=!1}),[]);const y=d.exports.useCallback(()=>{if(typeof l.current=="function"&&(l.current(),l.current=null),i.current&&a.current)if(s.current){const x=s.current(i.current,a.current,h);l.current=x}else h()},[h,s]),$=d.exports.useCallback(x=>{i.current=x,y()},[y]),g=d.exports.useCallback(x=>{a.current=x,y()},[y]),v=d.exports.useMemo(()=>({reference:i,floating:a}),[]);return d.exports.useMemo(()=>({...u,update:h,refs:v,reference:$,floating:g}),[u,h,v,$,g])}const KP=e=>{const{element:t,padding:n}=e;function r(o){return Object.prototype.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){return r(t)?t.current!=null?ov({element:t.current,padding:n}).fn(o):{}:t?ov({element:t,padding:n}).fn(o):{}}}},YP=d.exports.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return d.exports.createElement(Oe.svg,L({},i,{ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:d.exports.createElement("polygon",{points:"0,0 30,0 15,10"}))}),qP=YP;function XP(e){const[t,n]=d.exports.useState(void 0);return Lt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let a,s;if("borderBoxSize"in i){const l=i.borderBoxSize,u=Array.isArray(l)?l[0]:l;a=u.inlineSize,s=u.blockSize}else a=e.offsetWidth,s=e.offsetHeight;n({width:a,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const N1="Popper",[$p,M1]=Eo(N1),[JP,I1]=$p(N1),ZP=e=>{const{__scopePopper:t,children:n}=e,[r,o]=d.exports.useState(null);return d.exports.createElement(JP,{scope:t,anchor:r,onAnchorChange:o},n)},eO="PopperAnchor",tO=d.exports.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=I1(eO,n),a=d.exports.useRef(null),s=qe(t,a);return d.exports.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:d.exports.createElement(Oe.div,L({},o,{ref:s}))}),Ys="PopperContent",[nO,rO]=$p(Ys),[oO,iO]=$p(Ys,{hasParent:!1,positionUpdateFns:new Set}),aO=d.exports.forwardRef((e,t)=>{var n,r,o,i,a,s,l,u;const{__scopePopper:c,side:f="bottom",sideOffset:p=0,align:h="center",alignOffset:m=0,arrowPadding:y=0,collisionBoundary:$=[],collisionPadding:g=0,sticky:v="partial",hideWhenDetached:x=!1,avoidCollisions:w=!0,onPlaced:S,...C}=e,k=I1(Ys,c),[P,_]=d.exports.useState(null),D=qe(t,St=>_(St)),[X,J]=d.exports.useState(null),Z=XP(X),oe=(n=Z==null?void 0:Z.width)!==null&&n!==void 0?n:0,ne=(r=Z==null?void 0:Z.height)!==null&&r!==void 0?r:0,$e=f+(h!=="center"?"-"+h:""),ge=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},T=Array.isArray($)?$:[$],A=T.length>0,j={padding:ge,boundary:T.filter(fO),altBoundary:A},{reference:K,floating:I,strategy:z,x:U,y:Q,placement:E,middlewareData:G,update:F}=GP({strategy:"fixed",placement:$e,whileElementsMounted:HP,middleware:[dO(),PP({mainAxis:p+ne,alignmentAxis:m}),w?OP({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?RP():void 0,...j}):void 0,X?KP({element:X,padding:y}):void 0,w?CP({...j}):void 0,_P({...j,apply:({elements:St,availableWidth:pt,availableHeight:q})=>{St.floating.style.setProperty("--radix-popper-available-width",`${pt}px`),St.floating.style.setProperty("--radix-popper-available-height",`${q}px`)}}),pO({arrowWidth:oe,arrowHeight:ne}),x?EP({strategy:"referenceHidden"}):void 0].filter(cO)});Lt(()=>{K(k.anchor)},[K,k.anchor]);const te=U!==null&&Q!==null,[ie,de]=D1(E),Y=Ge(S);Lt(()=>{te&&(Y==null||Y())},[te,Y]);const De=(o=G.arrow)===null||o===void 0?void 0:o.x,Xe=(i=G.arrow)===null||i===void 0?void 0:i.y,se=((a=G.arrow)===null||a===void 0?void 0:a.centerOffset)!==0,[Be,ce]=d.exports.useState();Lt(()=>{P&&ce(window.getComputedStyle(P).zIndex)},[P]);const{hasParent:Fe,positionUpdateFns:$t}=iO(Ys,c),Ce=!Fe;d.exports.useLayoutEffect(()=>{if(!Ce)return $t.add(F),()=>{$t.delete(F)}},[Ce,$t,F]),Lt(()=>{Ce&&te&&Array.from($t).reverse().forEach(St=>requestAnimationFrame(St))},[Ce,te,$t]);const er={"data-side":ie,"data-align":de,...C,ref:D,style:{...C.style,animation:te?void 0:"none",opacity:(s=G.hide)!==null&&s!==void 0&&s.referenceHidden?0:void 0}};return d.exports.createElement("div",{ref:I,"data-radix-popper-content-wrapper":"",style:{position:z,left:0,top:0,transform:te?`translate3d(${Math.round(U)}px, ${Math.round(Q)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:Be,["--radix-popper-transform-origin"]:[(l=G.transformOrigin)===null||l===void 0?void 0:l.x,(u=G.transformOrigin)===null||u===void 0?void 0:u.y].join(" ")},dir:e.dir},d.exports.createElement(nO,{scope:c,placedSide:ie,onArrowChange:J,arrowX:De,arrowY:Xe,shouldHideArrow:se},Ce?d.exports.createElement(oO,{scope:c,hasParent:!0,positionUpdateFns:$t},d.exports.createElement(Oe.div,er)):d.exports.createElement(Oe.div,er)))}),sO="PopperArrow",lO={top:"bottom",right:"left",bottom:"top",left:"right"},uO=d.exports.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=rO(sO,r),a=lO[i.placedSide];return d.exports.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},d.exports.createElement(qP,L({},o,{ref:n,style:{...o.style,display:"block"}})))});function cO(e){return e!==void 0}function fO(e){return e!==null}const dO=()=>({name:"anchorCssProperties",fn(e){const{rects:t,elements:n}=e,{width:r,height:o}=t.reference;return n.floating.style.setProperty("--radix-popper-anchor-width",`${r}px`),n.floating.style.setProperty("--radix-popper-anchor-height",`${o}px`),{}}}),pO=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,a;const{placement:s,rects:l,middlewareData:u}=t,f=((n=u.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,p=f?0:e.arrowWidth,h=f?0:e.arrowHeight,[m,y]=D1(s),$={start:"0%",center:"50%",end:"100%"}[y],g=((r=(o=u.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+p/2,v=((i=(a=u.arrow)===null||a===void 0?void 0:a.y)!==null&&i!==void 0?i:0)+h/2;let x="",w="";return m==="bottom"?(x=f?$:`${g}px`,w=`${-h}px`):m==="top"?(x=f?$:`${g}px`,w=`${l.floating.height+h}px`):m==="right"?(x=`${-h}px`,w=f?$:`${v}px`):m==="left"&&(x=`${l.floating.width+h}px`,w=f?$:`${v}px`),{data:{x,y:w}}}});function D1(e){const[t,n="center"]=e.split("-");return[t,n]}const hO=ZP,mO=tO,vO=aO,gO=uO,yO=d.exports.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?_0.createPortal(d.exports.createElement(Oe.div,L({},o,{ref:t})),r):null}),Bu="rovingFocusGroup.onEntryFocus",xO={bubbles:!1,cancelable:!0},Sp="RovingFocusGroup",[_f,F1,wO]=Wl(Sp),[bO,L1]=Eo(Sp,[wO]),[$O,SO]=bO(Sp),CO=d.exports.forwardRef((e,t)=>d.exports.createElement(_f.Provider,{scope:e.__scopeRovingFocusGroup},d.exports.createElement(_f.Slot,{scope:e.__scopeRovingFocusGroup},d.exports.createElement(EO,L({},e,{ref:t}))))),EO=d.exports.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:l,onEntryFocus:u,...c}=e,f=d.exports.useRef(null),p=qe(t,f),h=lp(i),[m=null,y]=sp({prop:a,defaultProp:s,onChange:l}),[$,g]=d.exports.useState(!1),v=Ge(u),x=F1(n),w=d.exports.useRef(!1),[S,C]=d.exports.useState(0);return d.exports.useEffect(()=>{const k=f.current;if(k)return k.addEventListener(Bu,v),()=>k.removeEventListener(Bu,v)},[v]),d.exports.createElement($O,{scope:n,orientation:r,dir:h,loop:o,currentTabStopId:m,onItemFocus:d.exports.useCallback(k=>y(k),[y]),onItemShiftTab:d.exports.useCallback(()=>g(!0),[]),onFocusableItemAdd:d.exports.useCallback(()=>C(k=>k+1),[]),onFocusableItemRemove:d.exports.useCallback(()=>C(k=>k-1),[])},d.exports.createElement(Oe.div,L({tabIndex:$||S===0?-1:0,"data-orientation":r},c,{ref:p,style:{outline:"none",...e.style},onMouseDown:ee(e.onMouseDown,()=>{w.current=!0}),onFocus:ee(e.onFocus,k=>{const P=!w.current;if(k.target===k.currentTarget&&P&&!$){const _=new CustomEvent(Bu,xO);if(k.currentTarget.dispatchEvent(_),!_.defaultPrevented){const D=x().filter(ne=>ne.focusable),X=D.find(ne=>ne.active),J=D.find(ne=>ne.id===m),oe=[X,J,...D].filter(Boolean).map(ne=>ne.ref.current);z1(oe)}}w.current=!1}),onBlur:ee(e.onBlur,()=>g(!1))})))}),kO="RovingFocusGroupItem",PO=d.exports.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...a}=e,s=Ti(),l=i||s,u=SO(kO,n),c=u.currentTabStopId===l,f=F1(n),{onFocusableItemAdd:p,onFocusableItemRemove:h}=u;return d.exports.useEffect(()=>{if(r)return p(),()=>h()},[r,p,h]),d.exports.createElement(_f.ItemSlot,{scope:n,id:l,focusable:r,active:o},d.exports.createElement(Oe.span,L({tabIndex:c?0:-1,"data-orientation":u.orientation},a,{ref:t,onMouseDown:ee(e.onMouseDown,m=>{r?u.onItemFocus(l):m.preventDefault()}),onFocus:ee(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:ee(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){u.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const y=_O(m,u.orientation,u.dir);if(y!==void 0){m.preventDefault();let g=f().filter(v=>v.focusable).map(v=>v.ref.current);if(y==="last")g.reverse();else if(y==="prev"||y==="next"){y==="prev"&&g.reverse();const v=g.indexOf(m.currentTarget);g=u.loop?AO(g,v+1):g.slice(v+1)}setTimeout(()=>z1(g))}})})))}),OO={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function RO(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function _O(e,t,n){const r=RO(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return OO[r]}function z1(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function AO(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const TO=CO,NO=PO;var MO=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Nr=new WeakMap,_a=new WeakMap,Aa={},Wu=0,j1=function(e){return e&&(e.host||j1(e.parentNode))},IO=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=j1(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},DO=function(e,t,n,r){var o=IO(t,Array.isArray(e)?e:[e]);Aa[n]||(Aa[n]=new WeakMap);var i=Aa[n],a=[],s=new Set,l=new Set(o),u=function(f){!f||s.has(f)||(s.add(f),u(f.parentNode))};o.forEach(u);var c=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(p){if(s.has(p))c(p);else{var h=p.getAttribute(r),m=h!==null&&h!=="false",y=(Nr.get(p)||0)+1,$=(i.get(p)||0)+1;Nr.set(p,y),i.set(p,$),a.push(p),y===1&&m&&_a.set(p,!0),$===1&&p.setAttribute(n,"true"),m||p.setAttribute(r,"true")}})};return c(t),s.clear(),Wu++,function(){a.forEach(function(f){var p=Nr.get(f)-1,h=i.get(f)-1;Nr.set(f,p),i.set(f,h),p||(_a.has(f)||f.removeAttribute(r),_a.delete(f)),h||f.removeAttribute(n)}),Wu--,Wu||(Nr=new WeakMap,Nr=new WeakMap,_a=new WeakMap,Aa={})}},FO=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||MO(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),DO(r,o,n,"aria-hidden")):function(){return null}},kn=function(){return kn=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kn.apply(this,arguments)};function LO(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function zO(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ts="right-scroll-bar-position",ns="width-before-scroll-bar",jO="with-scroll-bars-hidden",UO="--removed-body-scroll-bar-size";function BO(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function WO(e,t){var n=d.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function HO(e,t){return WO(t||null,function(n){return e.forEach(function(r){return BO(r,n)})})}var qs=function(){return qs=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qs.apply(this,arguments)};function VO(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function QO(e){return e}function GO(e,t){t===void 0&&(t=QO);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var a=t(i,r);return n.push(a),function(){n=n.filter(function(s){return s!==a})}},assignSyncMedium:function(i){for(r=!0;n.length;){var a=n;n=[],a.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var a=[];if(n.length){var s=n;n=[],s.forEach(i),a=n}var l=function(){var c=a;a=[],c.forEach(i)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){a.push(c),u()},filter:function(c){return a=a.filter(c),n}}}};return o}function KO(e){e===void 0&&(e={});var t=GO(null);return t.options=qs({async:!0,ssr:!1},e),t}var U1=function(e){var t=e.sideCar,n=VO(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return b(r,{...qs({},n)})};U1.isSideCarExport=!0;function YO(e,t){return e.useMedium(t),U1}var B1=KO(),Hu=function(){},Xl=d.exports.forwardRef(function(e,t){var n=d.exports.useRef(null),r=d.exports.useState({onScrollCapture:Hu,onWheelCapture:Hu,onTouchMoveCapture:Hu}),o=r[0],i=r[1],a=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,f=e.shards,p=e.sideCar,h=e.noIsolation,m=e.inert,y=e.allowPinchZoom,$=e.as,g=$===void 0?"div":$,v=LO(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=p,w=HO([n,t]),S=kn(kn({},v),o);return M(Pr,{children:[c&&b(x,{sideCar:B1,removeScrollBar:u,shards:f,noIsolation:h,inert:m,setCallbacks:i,allowPinchZoom:!!y,lockRef:n}),a?d.exports.cloneElement(d.exports.Children.only(s),kn(kn({},S),{ref:w})):b(g,{...kn({},S,{className:l,ref:w}),children:s})]})});Xl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Xl.classNames={fullWidth:ns,zeroRight:ts};var qO=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function XO(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=qO();return t&&e.setAttribute("nonce",t),e}function JO(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ZO(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var eR=function(){var e=0,t=null;return{add:function(n){e==0&&(t=XO())&&(JO(t,n),ZO(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},tR=function(){var e=eR();return function(t,n){d.exports.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},W1=function(){var e=tR(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},nR={left:0,top:0,right:0,gap:0},Vu=function(e){return parseInt(e||"",10)||0},rR=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Vu(n),Vu(r),Vu(o)]},oR=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return nR;var t=rR(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},iR=W1(),aR=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(jO,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ts,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ns,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ts," .").concat(ts,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(ns," .").concat(ns,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(UO,": ").concat(s,`px;
  }
`)},sR=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=d.exports.useMemo(function(){return oR(o)},[o]);return b(iR,{styles:aR(i,!t,o,n?"":"!important")})},Af=!1;if(typeof window<"u")try{var Ta=Object.defineProperty({},"passive",{get:function(){return Af=!0,!0}});window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Af=!1}var Mr=Af?{passive:!1}:!1,lR=function(e){return e.tagName==="TEXTAREA"},H1=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!lR(e)&&n[t]==="visible")},uR=function(e){return H1(e,"overflowY")},cR=function(e){return H1(e,"overflowX")},dv=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=V1(e,n);if(r){var o=Q1(e,n),i=o[1],a=o[2];if(i>a)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},fR=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},dR=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},V1=function(e,t){return e==="v"?uR(t):cR(t)},Q1=function(e,t){return e==="v"?fR(t):dR(t)},pR=function(e,t){return e==="h"&&t==="rtl"?-1:1},hR=function(e,t,n,r,o){var i=pR(e,window.getComputedStyle(t).direction),a=i*r,s=n.target,l=t.contains(s),u=!1,c=a>0,f=0,p=0;do{var h=Q1(e,s),m=h[0],y=h[1],$=h[2],g=y-$-i*m;(m||g)&&V1(e,s)&&(f+=g,p+=m),s=s.parentNode}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(c&&(o&&f===0||!o&&a>f)||!c&&(o&&p===0||!o&&-a>p))&&(u=!0),u},Na=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},pv=function(e){return[e.deltaX,e.deltaY]},hv=function(e){return e&&"current"in e?e.current:e},mR=function(e,t){return e[0]===t[0]&&e[1]===t[1]},vR=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},gR=0,Ir=[];function yR(e){var t=d.exports.useRef([]),n=d.exports.useRef([0,0]),r=d.exports.useRef(),o=d.exports.useState(gR++)[0],i=d.exports.useState(function(){return W1()})[0],a=d.exports.useRef(e);d.exports.useEffect(function(){a.current=e},[e]),d.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var y=zO([e.lockRef.current],(e.shards||[]).map(hv),!0).filter(Boolean);return y.forEach(function($){return $.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),y.forEach(function($){return $.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=d.exports.useCallback(function(y,$){if("touches"in y&&y.touches.length===2)return!a.current.allowPinchZoom;var g=Na(y),v=n.current,x="deltaX"in y?y.deltaX:v[0]-g[0],w="deltaY"in y?y.deltaY:v[1]-g[1],S,C=y.target,k=Math.abs(x)>Math.abs(w)?"h":"v";if("touches"in y&&k==="h"&&C.type==="range")return!1;var P=dv(k,C);if(!P)return!0;if(P?S=k:(S=k==="v"?"h":"v",P=dv(k,C)),!P)return!1;if(!r.current&&"changedTouches"in y&&(x||w)&&(r.current=S),!S)return!0;var _=r.current||S;return hR(_,$,y,_==="h"?x:w,!0)},[]),l=d.exports.useCallback(function(y){var $=y;if(!(!Ir.length||Ir[Ir.length-1]!==i)){var g="deltaY"in $?pv($):Na($),v=t.current.filter(function(S){return S.name===$.type&&S.target===$.target&&mR(S.delta,g)})[0];if(v&&v.should){$.cancelable&&$.preventDefault();return}if(!v){var x=(a.current.shards||[]).map(hv).filter(Boolean).filter(function(S){return S.contains($.target)}),w=x.length>0?s($,x[0]):!a.current.noIsolation;w&&$.cancelable&&$.preventDefault()}}},[]),u=d.exports.useCallback(function(y,$,g,v){var x={name:y,delta:$,target:g,should:v};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(w){return w!==x})},1)},[]),c=d.exports.useCallback(function(y){n.current=Na(y),r.current=void 0},[]),f=d.exports.useCallback(function(y){u(y.type,pv(y),y.target,s(y,e.lockRef.current))},[]),p=d.exports.useCallback(function(y){u(y.type,Na(y),y.target,s(y,e.lockRef.current))},[]);d.exports.useEffect(function(){return Ir.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,Mr),document.addEventListener("touchmove",l,Mr),document.addEventListener("touchstart",c,Mr),function(){Ir=Ir.filter(function(y){return y!==i}),document.removeEventListener("wheel",l,Mr),document.removeEventListener("touchmove",l,Mr),document.removeEventListener("touchstart",c,Mr)}},[]);var h=e.removeScrollBar,m=e.inert;return M(Pr,{children:[m?b(i,{styles:vR(o)}):null,h?b(sR,{gapMode:"margin"}):null]})}const xR=YO(B1,yR);var G1=d.exports.forwardRef(function(e,t){return b(Xl,{...kn({},e,{ref:t,sideCar:xR})})});G1.classNames=Xl.classNames;const wR=G1,bR=["Enter"," "],$R=["ArrowDown","PageUp","Home"],K1=["ArrowUp","PageDown","End"],SR=[...$R,...K1],Jl="Menu",[Tf,CR,ER]=Wl(Jl),[Ar,Y1]=Eo(Jl,[ER,M1,L1]),Zl=M1(),q1=L1(),[kR,Ji]=Ar(Jl),[PR,Cp]=Ar(Jl),OR=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:a=!0}=e,s=Zl(t),[l,u]=d.exports.useState(null),c=d.exports.useRef(!1),f=Ge(i),p=lp(o);return d.exports.useEffect(()=>{const h=()=>{c.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},m=()=>c.current=!1;return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),d.exports.createElement(hO,s,d.exports.createElement(kR,{scope:t,open:n,onOpenChange:f,content:l,onContentChange:u},d.exports.createElement(PR,{scope:t,onClose:d.exports.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:c,dir:p,modal:a},r)))},RR=d.exports.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=Zl(n);return d.exports.createElement(mO,L({},o,r,{ref:t}))}),X1="MenuPortal",[_R,AR]=Ar(X1,{forceMount:void 0}),TR=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=Ji(X1,t);return d.exports.createElement(_R,{scope:t,forceMount:n},d.exports.createElement(ko,{present:n||i.open},d.exports.createElement(yO,{asChild:!0,container:o},r)))},Bn="MenuContent",[NR,J1]=Ar(Bn),MR=d.exports.forwardRef((e,t)=>{const n=AR(Bn,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=Ji(Bn,e.__scopeMenu),a=Cp(Bn,e.__scopeMenu);return d.exports.createElement(Tf.Provider,{scope:e.__scopeMenu},d.exports.createElement(ko,{present:r||i.open},d.exports.createElement(Tf.Slot,{scope:e.__scopeMenu},a.modal?d.exports.createElement(IR,L({},o,{ref:t})):d.exports.createElement(DR,L({},o,{ref:t})))))}),IR=d.exports.forwardRef((e,t)=>{const n=Ji(Bn,e.__scopeMenu),r=d.exports.useRef(null),o=qe(t,r);return d.exports.useEffect(()=>{const i=r.current;if(i)return FO(i)},[]),d.exports.createElement(Z1,L({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:ee(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),DR=d.exports.forwardRef((e,t)=>{const n=Ji(Bn,e.__scopeMenu);return d.exports.createElement(Z1,L({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),Z1=d.exports.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:s,onEntryFocus:l,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:p,onDismiss:h,disableOutsideScroll:m,...y}=e,$=Ji(Bn,n),g=Cp(Bn,n),v=Zl(n),x=q1(n),w=CR(n),[S,C]=d.exports.useState(null),k=d.exports.useRef(null),P=qe(t,k,$.onContentChange),_=d.exports.useRef(0),D=d.exports.useRef(""),X=d.exports.useRef(0),J=d.exports.useRef(null),Z=d.exports.useRef("right"),oe=d.exports.useRef(0),ne=m?wR:d.exports.Fragment,$e=m?{as:Ai,allowPinchZoom:!0}:void 0,ge=A=>{var j,K;const I=D.current+A,z=w().filter(te=>!te.disabled),U=document.activeElement,Q=(j=z.find(te=>te.ref.current===U))===null||j===void 0?void 0:j.textValue,E=z.map(te=>te.textValue),G=KR(E,I,Q),F=(K=z.find(te=>te.textValue===G))===null||K===void 0?void 0:K.ref.current;(function te(ie){D.current=ie,window.clearTimeout(_.current),ie!==""&&(_.current=window.setTimeout(()=>te(""),1e3))})(I),F&&setTimeout(()=>F.focus())};d.exports.useEffect(()=>()=>window.clearTimeout(_.current),[]),lP();const T=d.exports.useCallback(A=>{var j,K;return Z.current===((j=J.current)===null||j===void 0?void 0:j.side)&&qR(A,(K=J.current)===null||K===void 0?void 0:K.area)},[]);return d.exports.createElement(NR,{scope:n,searchRef:D,onItemEnter:d.exports.useCallback(A=>{T(A)&&A.preventDefault()},[T]),onItemLeave:d.exports.useCallback(A=>{var j;T(A)||((j=k.current)===null||j===void 0||j.focus(),C(null))},[T]),onTriggerLeave:d.exports.useCallback(A=>{T(A)&&A.preventDefault()},[T]),pointerGraceTimerRef:X,onPointerGraceIntentChange:d.exports.useCallback(A=>{J.current=A},[])},d.exports.createElement(ne,$e,d.exports.createElement(uP,{asChild:!0,trapped:o,onMountAutoFocus:ee(i,A=>{var j;A.preventDefault(),(j=k.current)===null||j===void 0||j.focus()}),onUnmountAutoFocus:a},d.exports.createElement(Gy,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:p,onDismiss:h},d.exports.createElement(TO,L({asChild:!0},x,{dir:g.dir,orientation:"vertical",loop:r,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:ee(l,A=>{g.isUsingKeyboardRef.current||A.preventDefault()})}),d.exports.createElement(vO,L({role:"menu","aria-orientation":"vertical","data-state":VR($.open),"data-radix-menu-content":"",dir:g.dir},v,y,{ref:P,style:{outline:"none",...y.style},onKeyDown:ee(y.onKeyDown,A=>{const K=A.target.closest("[data-radix-menu-content]")===A.currentTarget,I=A.ctrlKey||A.altKey||A.metaKey,z=A.key.length===1;K&&(A.key==="Tab"&&A.preventDefault(),!I&&z&&ge(A.key));const U=k.current;if(A.target!==U||!SR.includes(A.key))return;A.preventDefault();const E=w().filter(G=>!G.disabled).map(G=>G.ref.current);K1.includes(A.key)&&E.reverse(),QR(E)}),onBlur:ee(e.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(_.current),D.current="")}),onPointerMove:ee(e.onPointerMove,Mf(A=>{const j=A.target,K=oe.current!==A.clientX;if(A.currentTarget.contains(j)&&K){const I=A.clientX>oe.current?"right":"left";Z.current=I,oe.current=A.clientX}}))})))))))}),FR=d.exports.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return d.exports.createElement(Oe.div,L({},r,{ref:t}))}),Nf="MenuItem",mv="menu.itemSelect",LR=d.exports.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,i=d.exports.useRef(null),a=Cp(Nf,e.__scopeMenu),s=J1(Nf,e.__scopeMenu),l=qe(t,i),u=d.exports.useRef(!1),c=()=>{const f=i.current;if(!n&&f){const p=new CustomEvent(mv,{bubbles:!0,cancelable:!0});f.addEventListener(mv,h=>r==null?void 0:r(h),{once:!0}),Ws(f,p),p.defaultPrevented?u.current=!1:a.onClose()}};return d.exports.createElement(zR,L({},o,{ref:l,disabled:n,onClick:ee(e.onClick,c),onPointerDown:f=>{var p;(p=e.onPointerDown)===null||p===void 0||p.call(e,f),u.current=!0},onPointerUp:ee(e.onPointerUp,f=>{var p;u.current||(p=f.currentTarget)===null||p===void 0||p.click()}),onKeyDown:ee(e.onKeyDown,f=>{const p=s.searchRef.current!=="";n||p&&f.key===" "||bR.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})}))}),zR=d.exports.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...i}=e,a=J1(Nf,n),s=q1(n),l=d.exports.useRef(null),u=qe(t,l),[c,f]=d.exports.useState(!1),[p,h]=d.exports.useState("");return d.exports.useEffect(()=>{const m=l.current;if(m){var y;h(((y=m.textContent)!==null&&y!==void 0?y:"").trim())}},[i.children]),d.exports.createElement(Tf.ItemSlot,{scope:n,disabled:r,textValue:o!=null?o:p},d.exports.createElement(NO,L({asChild:!0},s,{focusable:!r}),d.exports.createElement(Oe.div,L({role:"menuitem","data-highlighted":c?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},i,{ref:u,onPointerMove:ee(e.onPointerMove,Mf(m=>{r?a.onItemLeave(m):(a.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus())})),onPointerLeave:ee(e.onPointerLeave,Mf(m=>a.onItemLeave(m))),onFocus:ee(e.onFocus,()=>f(!0)),onBlur:ee(e.onBlur,()=>f(!1))}))))}),jR="MenuRadioGroup";Ar(jR,{value:void 0,onValueChange:()=>{}});const UR="MenuItemIndicator";Ar(UR,{checked:!1});const BR=d.exports.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return d.exports.createElement(Oe.div,L({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),WR=d.exports.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=Zl(n);return d.exports.createElement(gO,L({},o,r,{ref:t}))}),HR="MenuSub";Ar(HR);function VR(e){return e?"open":"closed"}function QR(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function GR(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function KR(e,t,n){const o=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let a=GR(e,Math.max(i,0));o.length===1&&(a=a.filter(u=>u!==n));const l=a.find(u=>u.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function YR(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,a=t.length-1;i<t.length;a=i++){const s=t[i].x,l=t[i].y,u=t[a].x,c=t[a].y;l>r!=c>r&&n<(u-s)*(r-l)/(c-l)+s&&(o=!o)}return o}function qR(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return YR(n,t)}function Mf(e){return t=>t.pointerType==="mouse"?e(t):void 0}const XR=OR,JR=RR,ZR=TR,e_=MR,t_=FR,n_=LR,r_=BR,o_=WR,ex="DropdownMenu",[i_,_8]=Eo(ex,[Y1]),Zn=Y1(),[a_,tx]=i_(ex),s_=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:a,modal:s=!0}=e,l=Zn(t),u=d.exports.useRef(null),[c=!1,f]=sp({prop:o,defaultProp:i,onChange:a});return d.exports.createElement(a_,{scope:t,triggerId:Ti(),triggerRef:u,contentId:Ti(),open:c,onOpenChange:f,onOpenToggle:d.exports.useCallback(()=>f(p=>!p),[f]),modal:s},d.exports.createElement(XR,L({},l,{open:c,onOpenChange:f,dir:r,modal:s}),n))},l_="DropdownMenuTrigger",u_=d.exports.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,i=tx(l_,n),a=Zn(n);return d.exports.createElement(JR,L({asChild:!0},a),d.exports.createElement(Oe.button,L({type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},o,{ref:Bl(t,i.triggerRef),onPointerDown:ee(e.onPointerDown,s=>{!r&&s.button===0&&s.ctrlKey===!1&&(i.onOpenToggle(),i.open||s.preventDefault())}),onKeyDown:ee(e.onKeyDown,s=>{r||(["Enter"," "].includes(s.key)&&i.onOpenToggle(),s.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(s.key)&&s.preventDefault())})})))}),c_=e=>{const{__scopeDropdownMenu:t,...n}=e,r=Zn(t);return d.exports.createElement(ZR,L({},r,n))},f_="DropdownMenuContent",d_=d.exports.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tx(f_,n),i=Zn(n),a=d.exports.useRef(!1);return d.exports.createElement(e_,L({id:o.contentId,"aria-labelledby":o.triggerId},i,r,{ref:t,onCloseAutoFocus:ee(e.onCloseAutoFocus,s=>{var l;a.current||(l=o.triggerRef.current)===null||l===void 0||l.focus(),a.current=!1,s.preventDefault()}),onInteractOutside:ee(e.onInteractOutside,s=>{const l=s.detail.originalEvent,u=l.button===0&&l.ctrlKey===!0,c=l.button===2||u;(!o.modal||c)&&(a.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),p_=d.exports.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Zn(n);return d.exports.createElement(t_,L({},o,r,{ref:t}))}),h_=d.exports.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Zn(n);return d.exports.createElement(n_,L({},o,r,{ref:t}))}),m_=d.exports.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Zn(n);return d.exports.createElement(r_,L({},o,r,{ref:t}))}),v_=d.exports.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Zn(n);return d.exports.createElement(o_,L({},o,r,{ref:t}))}),g_=s_,y_=u_,x_=c_,w_=d_,b_=p_,$_=h_,S_=m_,C_=v_;const E_=O.div`
  ${({theme:{spacing:e}})=>B`
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
`,k_=O.div`
  ${({theme:{colors:e,spacing:t}})=>B`
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
`,P_=O.div`
  ${({theme:{colors:e,boxShadow:t}})=>B`
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
`,vv=20;function O_(){const[e,t]=d.exports.useState(0);d.exports.useState(null);const[n,r]=d.exports.useState([]),{isFetching:o,isFetchedAfterMount:i}=j0(["pokemonList",e],()=>W3(e,vv),{onSuccess:l=>{r(u=>[...u,...l.results])}}),a=d.exports.useCallback(l=>{l[0].isIntersecting&&i&&t(c=>c+vv)},[i]),s=d.exports.useRef(null);return d.exports.useEffect(()=>{const l={root:null,rootMargin:"20px",threshold:1},u=s.current,c=new IntersectionObserver(a,l);return u&&c.observe(u),()=>{u&&c.unobserve(u)}},[a]),d.exports.useEffect(()=>()=>{r([]),t(0)},[]),d.exports.useEffect(()=>{window.onbeforeunload=function(){window.scrollTo(0,0)}},[]),M(E_,{children:[b(P_,{children:b("p",{children:"Here's a list of Pokemon from every generation. Click on any of them to get information about their type, stats, and evolution chain!"})}),M(k_,{children:[b(R_,{}),!!(n!=null&&n.length)&&b(sP,{pokemonList:n}),b("div",{ref:s}),o&&b(Kl,{})]})]})}const R_=()=>M(g_,{children:[b(y_,{asChild:!0,children:b("button",{className:"IconButton","aria-label":"Customise options",children:"Filter"})}),b(x_,{children:M(w_,{className:"DropdownMenuContent",sideOffset:5,children:[b(b_,{className:"DropdownMenuLabel",children:"Filter by:"}),b(S_,{className:"DropdownMenuSeparator"}),["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"].map(t=>b($_,{className:"DropdownMenuItem",children:t},t)),b(C_,{className:"DropdownMenuArrow"})]})})]}),__=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,zo=O.div`
  position: relative;
`,jo=O.div`
  ${({theme:{colors:e}})=>B`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${e.darkGray};
    z-index: 2;
  `}
`,Uo=O.div`
  ${({theme:{colors:e}})=>B`
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
`,A_=O.div`
  display: flex;
`,T_=()=>{const{id:e}=Id(),t=Number(e),n=t>1?t-1:1,r=t+1;return M(__,{children:[b(_n,{to:`/pokedex/${n}`,children:M(zo,{children:[b(jo,{}),b(Uo,{})]})}),M(A_,{children:[b(_n,{to:`/pokedex/${n}`,children:M(zo,{children:[b(jo,{}),b(Uo,{})]})}),M(zo,{children:[b(jo,{}),b(Uo,{})]}),b(_n,{to:`/pokedex/${r}`,children:M(zo,{children:[b(jo,{}),b(Uo,{})]})})]}),b(_n,{to:`/pokedex/${r}`,children:M(zo,{children:[b(jo,{}),b(Uo,{})]})})]})},N_=O.div`
  position: relative;
`,M_=O.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`,I_=O.div`
  ${({theme:{colors:e}})=>B`
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
`,D_=O.div`
  display: flex;
  gap: 8px;
`,gv=O.div`
  ${({theme:{colors:e},color:t})=>B`
    background: ${t};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${e.black};
    border-left: 1px solid ${e.black};
  `}
`,F_=O.div`
  ${({theme:{colors:e}})=>B`
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
`,L_=({types:e})=>{const{colors:t}=Rr();return M(N_,{children:[M(M_,{children:[b(I_,{}),M(D_,{children:[b(gv,{color:t.red}),b(gv,{color:t.mediumBlue})]}),b(T_,{})]}),b(F_,{children:e.map(n=>b(xp,{typeName:n.type.name},n.type.name))})]})},z_=O.div`
  width: 370px;
  height: 460px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 0 15px 15px 0;
`,j_=O.div`
  ${({theme:{colors:e}})=>B`
    background-color: ${e.pokedexMedium};
    width: 150px;
    height: 60px;
    position: relative;
    &::after {
      content: '';
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
`,U_=O.div`
  ${({theme:{colors:e}})=>B`
    background-color: ${e.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`,nx=({className:e,children:t})=>M(z_,{className:e,children:[b(j_,{}),b(U_,{children:t})]}),B_=O.div`
  ${({theme:{colors:e}})=>B`
    border: 8px solid ${e.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`,W_=O.div`
  ${({theme:{colors:e}})=>B`
    border-radius: 8px;
    background-color: ${e.pokedexGreen};
    border-top: 1px solid ${e.mediumGray};
    border-right: 1px solid ${e.mediumGray};
    color: ${e.darkGray};
    font-size: 12px;
    font-weight: 600;
    padding: 12px 24px;
  `}
`,H_=O.div`
  ${({theme:{colors:e}})=>B`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`,V_=({pokemon:e})=>b(B_,{children:b(W_,{children:e.stats.map(t=>M(H_,{children:[b("div",{children:t.stat.name},t.stat.name),b("div",{children:t.base_stat},`${t.stat.name}-${t.base_stat}`)]},t.stat.name))})}),Q_=O.div`
  ${({theme:{colors:e}})=>B`
    position: relative;
  `}
`,G_=O(nx)`
  ${({theme:{colors:e}})=>B`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`,K_=O.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,yv=O.div`
  ${({theme:{colors:e}})=>B`
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
`,Y_=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`,q_=O.span`
  ${({theme:{colors:e}})=>B`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    transform: scale(0.7);
    &::before {
      content: '';
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
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${e.white};
      top: 15px;
      opacity: 0.8;
    }
  `}
`,X_=({pokemon:e})=>M(Q_,{children:[b(nx,{children:M(Pr,{children:[b(V_,{pokemon:e}),M(Y_,{children:[M(K_,{children:[M(yv,{children:[" HEIGHT - ",e.height," dm"]}),M(yv,{children:[" WEIGHT - ",e.weight," hg"]})]}),b(q_,{})]})]})}),b(G_,{})]}),J_=O.div`
  ${({theme:{breakpoints:e}})=>B`
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
`,Z_=O.div`
  ${({theme:{colors:e}})=>B`
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
`,e8=O.div`
  ${({theme:{colors:e}})=>B`
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
`,t8=O.span`
  ${({theme:{colors:e}})=>B`
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
`,n8=O.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`,Qu=O.span`
  ${({theme:{colors:e},color:t})=>B`
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
`,r8=O.div`
  ${({theme:{colors:e}})=>B`
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
`,o8=O.div`
  position: relative;
`,i8=O.div`
  ${({theme:{colors:e}})=>B`
    background: ${e.lightestGray};
    padding: 30px;
    width: 250px;
    height: 200px;
    margin-left: 45px;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  `}
`,a8=O.div`
  ${({theme:{colors:e}})=>B`
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
`,s8=O.div`
  ${({theme:{colors:e}})=>B`
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
`,l8=({pokemon:e})=>{const{colors:t}=Rr();return M(J_,{children:[M(Z_,{children:[M(e8,{children:[b("div",{}),b(t8,{}),M(n8,{children:[b(Qu,{color:t.red}),b(Qu,{color:t.yellow}),b(Qu,{color:t.green})]})]}),b(r8,{children:b("div",{})}),M(o8,{children:[b(i8,{children:M(s8,{children:[M("p",{children:["#",e.id]}),b("img",{src:e.sprites.front_default,alt:e.name}),b("p",{children:e.name})]})}),b(a8,{})]}),b(L_,{types:e.types})]}),b(X_,{pokemon:e})]})},u8=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  border-radius: 8px;
  position: relative;
`,c8=O.div`
  ${({theme:{colors:e,spacing:t,breakpoints:n}})=>B`
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
`,f8=O.div`
  ${({theme:{colors:e,boxShadow:t}})=>B`
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
  ${({theme:{colors:e}})=>B`
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
`;const d8=O.span`
  align-self: flex-end;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  font-size: 0.8rem;
  & > svg {
    margin-top: 0.4rem;
  }
`,p8=()=>{const[e,t]=d.exports.useState(!1),[n,r]=d.exports.useState(),o=Id(),i=async()=>{t(!0);const a=await Ii(Number(o.id));r(a),t(!1)};return d.exports.useEffect(()=>{i()},[o.id]),M(u8,{children:[b(f8,{children:b("p",{children:"Here's a classic way to view Pokemon stats. Move from one Pokemon to the next clicking the direction keys on the pokedex."})}),b(c8,{children:e?b(Kl,{}):n?b(l8,{pokemon:n}):b("div",{})}),M(d8,{children:[b(Ie,{icon:Gd,size:"1x"}),"This Pokedex was designed entirely using HTML and CSS code."]})]})},h8=O.div`
  padding: 32px;
`,m8=O.h2`
  ${({theme:{colors:e}})=>B`
    color: ${e.darkBlue};
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
  `}
`,If=O.div`
  ${({theme:{breakpoints:e}})=>B`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,rx=O.div`
  ${({theme:{breakpoints:e}})=>B`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,ox=O.span`
  ${({theme:{breakpoints:e}})=>B`
    margin: 1rem;
    @media (max-width: ${e.lg}) {
      transform: rotate(90deg);
    }
  `}
`,v8=O.div`
  ${({hasManyEvolutions:e,showShadow:t,theme:{boxShadow:n}})=>B`
    ${t&&"padding: 24px;"}
    display: flex;
    flex-direction: ${e?"row":"column"};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 32px;
    box-shadow: ${t?n.dark:""};
  `}
`,g8=({url:e})=>{const[t,n]=d.exports.useState(),r=t==null?void 0:t.filter(c=>c.canEvolve),o=t==null?void 0:t.filter(c=>!c.canEvolve),i=(c,f)=>c.includes("https://pokeapi.co/api/v2/pokemon-species/")?c.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/",""):f,a=d.exports.useMemo(()=>[],[]),s=d.exports.useCallback(c=>{if(!c.evolves_to.length){a.push({id:i(c.species.url,c.species.name),name:c.species.name,canEvolve:!1}),n(a);return}a.length||a.push({id:i(c.species.url,c.species.name),name:c.species.name,canEvolve:!0}),c.evolves_to.forEach(f=>{if(!f.evolves_to.length){a.push({id:i(f.species.url,f.species.name),name:f.species.name,canEvolve:!1}),n(a);return}a.push({id:i(f.species.url,f.species.name),name:f.species.name,canEvolve:!0}),n(a),s(f)})},[a]),{isFetching:l}=j0(["pokemonChain",e],()=>H3(e),{onSuccess:c=>s(c==null?void 0:c.chain)}),{colors:u}=Rr();return b(h8,{children:l?b(Kl,{}):M(Pr,{children:[b(m8,{children:"EVOLUTION CHAIN:"}),M(If,{children:[r!=null&&r.length?r.map(c=>M(rx,{children:[b(Ef,{pokemon:c.id,light:!0},c.name),c.canEvolve&&b(ox,{children:b(Ie,{icon:py,color:u.black,size:"xl"})})]},c.name)):null,o!=null&&o.length?b(v8,{showShadow:o.length>1,hasManyEvolutions:o.length>3,children:o.map(c=>b("div",{children:b(Ef,{pokemon:c.id,light:!0},c.name)},c.name))}):null]})]})})},y8=()=>{const{colors:e}=Rr();return b(If,{children:M(If,{children:[M(rx,{children:[b(Xm,{baseColor:e.lightGray}),b(ox,{children:b(Ie,{icon:py,color:e.mediumGray,size:"xl"})})]}),b(Xm,{baseColor:e.lightGray})]})})},x8=O.div`
  ${({theme:{boxShadow:e,colors:t}})=>B`
    box-shadow: ${e.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${t.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`,w8=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;O.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`;O.div`
  margin-bottom: -3px;
`;O.div`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`;O.div`
  ${({value:e,theme:{colors:t}})=>B`
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
`;const b8=({stats:e})=>M(x8,{children:[b("h3",{children:"Stats"}),b(w8,{children:e.map(t=>b(pp,{name:t.stat.name,maxValue:t.base_stat,currentValue:t.base_stat},t.stat.name))})]}),ix=O.div`
  ${({theme:{spacing:e}})=>B`
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
`,ax=O.div`
  ${({theme:{colors:e,spacing:t}})=>B`
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
`,sx=O.div`
  ${({theme:{colors:e}})=>B`
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
`,lx=O.div`
  ${({theme:{breakpoints:e}})=>B`
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
`,ux=O.div`
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
`,$8=O.p`
  ${({theme:{colors:e,breakpoints:t}})=>B`
    width: 300px;
    padding: 2rem;
    border-radius: 8px;
    background: ${e.lightGray};
    font-weight: 500;
    @media (max-width: ${t.md}) {
      margin-bottom: 1rem;
    }
  `}
`,cx=O.div`
  ${({type:e,theme:{colors:t,typesColors:n}})=>B`
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
`,Xs=O.div`
  ${({theme:{colors:e,breakpoints:t}})=>B`
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
`,xv=O.div`
  ${({isRight:e=!1,theme:{colors:t,breakpoints:n}})=>B`
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
`,fx=O.div`
  ${({type:e,theme:{colors:t,typesColors:n,boxShadow:r}})=>B`
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
`,dx=O.h1`
  font-family: 'Lato', sans-serif;
`,wv=O(ar)`
  border-radius: 99px;
`,S8=()=>{var u;const[e,t]=d.exports.useState(),[n,r]=d.exports.useState(),[o,i]=d.exports.useState(!1),a=Id(),s=d.exports.useCallback(async()=>{if(a!=null&&a.id){i(!0);const c=await V3(a.id),f=await Ii(a.id);t(c),r(f),i(!1)}},[a.id]),{colors:l}=Rr();return d.exports.useEffect(()=>{s(),window.scrollTo(0,0)},[a.id,s]),M(ix,{children:[o&&b(C8,{}),!o&&a.id&&n?M(ax,{children:[M(cx,{type:n.types[0].type.name,children:[M(_n,{to:`/pokemon/${Number(n==null?void 0:n.id)>1?Number(n==null?void 0:n.id)-1:1}`,children:[M(Xs,{children:[b(Ie,{icon:tf}),b("p",{children:"PREV POKEMON"})]}),b(xv,{children:b(Ie,{icon:tf,size:"2x",color:l.white})})]}),b(fx,{type:n.types[0].type.name,children:b("img",{src:n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name})}),M(_n,{to:`/pokemon/${Number(n.id)+1}`,children:[M(Xs,{children:[b("p",{children:"NEXT POKEMON"}),b(Ie,{icon:ef})]}),b(xv,{isRight:!0,children:b(Ie,{icon:ef,size:"2x",color:l.white})})]})]}),M(dx,{children:["#",e==null?void 0:e.id," ",e==null?void 0:e.name.toUpperCase()]}),M(sx,{children:[M(lx,{children:[M(ux,{children:[b($8,{children:(u=e==null?void 0:e.flavor_text_entries.find(c=>c.language.name==="en"))==null?void 0:u.flavor_text.replace(/\f/g," ")}),b("div",{children:n.types.map(c=>b(xp,{typeName:c.type.name},c.type.name))})]}),b(b8,{stats:n.stats})]}),e?b(g8,{url:e==null?void 0:e.evolution_chain.url}):null]})]}):null]})},C8=()=>{const{colors:e}=Rr();return b(ix,{children:M(ax,{children:[M(cx,{type:"normal",children:[M(Xs,{children:[b(Ie,{icon:tf}),b("p",{children:"PREV POKEMON"})]}),b(fx,{type:"normal",children:b(ar,{width:200,height:200,circle:!0,baseColor:e.lightGray})}),M(Xs,{children:[b("p",{children:"NEXT POKEMON"}),b(Ie,{icon:ef})]})]}),b(dx,{children:b(ar,{width:180,baseColor:e.lightGray,height:45})}),M(sx,{children:[M(lx,{children:[M(ux,{children:[b("div",{children:b(ar,{width:300,height:150,baseColor:e.lightGray})}),M("div",{children:[b(wv,{width:300,height:35,baseColor:e.lightGray}),b(wv,{width:300,height:35,baseColor:e.lightGray})]})]}),b(ar,{width:330,height:330,baseColor:e.lightGray})]}),b(ar,{width:250,height:35,baseColor:e.lightGray}),b(y8,{})]})]})})},E8=uS`
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
`,k8={colors:{white:"#F3F4F6",lightestGray:"#F3F4F6",lightGray:"#D1D5DB",mediumGray:"#6B7280",darkGray:"#1F2937",black:"#111827",lightBlue:"#7DD3FC",mediumBlue:"#0284C7",darkBlue:"#075985",green:"#55ab62",grassGreenLight:"#ADD46F",grassGreenDark:"#7DC67E",yellow:"#feee6d",yellowMedium:"#FACC15",mediumYellow:"#c7a400",darkYellow:"#9f8a0d",red:"#e5092e",pokedexGreen:"#bad8a8",pokedexLight:"#ce1131",pokedexMedium:"#bd0f33",pokedexDark:"#941828",pokedexDarkest:"#810a1e"},breakpoints:{xs:"390px",sm:"480px",md:"768px",lg:"1024px",xl:"1440px"},spacing:{headerSpacing:"75px"},boxShadow:{dark:"0 0 6px rgba(0, 0, 0, 0.3)",light:"0 0 4px rgba(0, 0, 0, 0.1)"},typesColors:{normal:{primaryColor:"#A8A878",secondaryColor:"#6D6D4E"},fighting:{primaryColor:"#C03028",secondaryColor:"#D67873"},flying:{primaryColor:"#A890F0",secondaryColor:"#6D5E9C"},poison:{primaryColor:"#A040A0",secondaryColor:"#682A68"},ground:{primaryColor:"#E0C068",secondaryColor:"#927D44"},rock:{primaryColor:"#B8A038",secondaryColor:"#786824"},bug:{primaryColor:"#A8B820",secondaryColor:"#6D7815"},ghost:{primaryColor:"#705898",secondaryColor:"#493963"},steel:{primaryColor:"#B8B8D0",secondaryColor:"#787887"},fire:{primaryColor:"#F08030",secondaryColor:"#9C531F"},water:{primaryColor:"#6890F0",secondaryColor:"#445E9C"},grass:{primaryColor:"#78C850",secondaryColor:"#4E8234"},electric:{primaryColor:"#F8D030",secondaryColor:"#A1871F"},psychic:{primaryColor:"#F85888",secondaryColor:"#A13959"},ice:{primaryColor:"#98D8D8",secondaryColor:"#638D8D"},dragon:{primaryColor:"#7038F8",secondaryColor:"#4924A1"},dark:{primaryColor:"#705848",secondaryColor:"#49392F"},fairy:{primaryColor:"#EE99AC",secondaryColor:"#9B6470"},unknown:{primaryColor:"#68A090",secondaryColor:"#44685E"},shadow:{primaryColor:"#705898",secondaryColor:"#493963"}}},P8="/pokedex/";function O8(){const e=new Yb;return b(sS,{theme:k8,children:M(s2,{client:e,children:[b(f$,{basename:P8,children:b(xk,{children:b(a$,{children:M(rr,{path:"/",children:[b(rr,{index:!0,element:b(O_,{})}),b(rr,{path:"pokedex/:id",element:b(p8,{})}),b(rr,{path:"pokemon/:id",element:b(S8,{})}),b(rr,{path:"battle",element:b(q3,{})}),b(rr,{path:"*",element:b("div",{children:"Not found"})})]})})})}),b(E8,{})]})})}Gu.createRoot(document.getElementById("root")).render(b(le.StrictMode,{children:b(O8,{})}));
