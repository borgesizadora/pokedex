function l0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function u0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={},Va={exports:{}},dt={},y={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ti=Symbol.for("react.element"),c0=Symbol.for("react.portal"),f0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),y0=Symbol.for("react.memo"),x0=Symbol.for("react.lazy"),Df=Symbol.iterator;function w0(e){return e===null||typeof e!="object"?null:(e=Df&&e[Df]||e["@@iterator"],typeof e=="function"?e:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sm=Object.assign,lm={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=lm,this.updater=n||am}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function um(){}um.prototype=Vr.prototype;function oc(e,t,n){this.props=e,this.context=t,this.refs=lm,this.updater=n||am}var ic=oc.prototype=new um;ic.constructor=oc;sm(ic,Vr.prototype);ic.isPureReactComponent=!0;var zf=Array.isArray,cm=Object.prototype.hasOwnProperty,ac={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function dm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)cm.call(t,r)&&!fm.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ti,type:e,key:i,ref:a,props:o,_owner:ac.current}}function k0(e,t){return{$$typeof:ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ti}function S0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ff=/\/+/g;function Ws(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S0(""+e.key):t.toString(36)}function Hi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ti:case c0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ws(a,0):r,zf(o)?(n="",e!=null&&(n=e.replace(Ff,"$&/")+"/"),Hi(o,t,n,"",function(u){return u})):o!=null&&(sc(o)&&(o=k0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ff,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",zf(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Ws(i,s);a+=Hi(i,t,n,l,o)}else if(l=w0(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Ws(i,s++),a+=Hi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hi(e,t,n){if(e==null)return e;var r=[],o=0;return Hi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Vi={transition:null},E0={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Vi,ReactCurrentOwner:ac};Q.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Vr;Q.Fragment=f0;Q.Profiler=p0;Q.PureComponent=oc;Q.StrictMode=d0;Q.Suspense=g0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ac.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)cm.call(t,l)&&!fm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ti,type:e.type,key:o,ref:i,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:h0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m0,_context:e},e.Consumer=e};Q.createElement=dm;Q.createFactory=function(e){var t=dm.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:v0,render:e}};Q.isValidElement=sc;Q.lazy=function(e){return{$$typeof:x0,_payload:{_status:-1,_result:e},_init:b0}};Q.memo=function(e,t){return{$$typeof:y0,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Vi.transition;Vi.transition={};try{e()}finally{Vi.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Xe.current.useCallback(e,t)};Q.useContext=function(e){return Xe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Xe.current.useEffect(e,t)};Q.useId=function(){return Xe.current.useId()};Q.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Xe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};Q.useRef=function(e){return Xe.current.useRef(e)};Q.useState=function(e){return Xe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Xe.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(y);const Se=u0(y.exports),ua=l0({__proto__:null,default:Se},[y.exports]);var pm={exports:{}},mm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,W){var H=R.length;R.push(W);e:for(;0<H;){var ae=H-1>>>1,T=R[ae];if(0<o(T,W))R[ae]=W,R[H]=T,H=ae;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],H=R.pop();if(H!==W){R[0]=H;e:for(var ae=0,T=R.length,M=T>>>1;ae<M;){var F=2*(ae+1)-1,V=R[F],b=F+1,X=R[b];if(0>o(V,H))b<T&&0>o(X,V)?(R[ae]=X,R[b]=H,ae=b):(R[ae]=V,R[F]=H,ae=F);else if(b<T&&0>o(X,H))R[ae]=X,R[b]=H,ae=b;else break e}}return W}function o(R,W){var H=R.sortIndex-W.sortIndex;return H!==0?H:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,p=3,v=!1,g=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=R)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function k(R){if(x=!1,h(R),!g)if(n(l)!==null)g=!0,Bt(S);else{var W=n(u);W!==null&&Ye(k,W.startTime-R)}}function S(R,W){g=!1,x&&(x=!1,m(P),P=-1),v=!0;var H=p;try{for(h(W),f=n(l);f!==null&&(!(f.expirationTime>W)||R&&!se());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,p=f.priorityLevel;var T=ae(f.expirationTime<=W);W=e.unstable_now(),typeof T=="function"?f.callback=T:f===n(l)&&r(l),h(W)}else r(l);f=n(l)}if(f!==null)var M=!0;else{var F=n(u);F!==null&&Ye(k,F.startTime-W),M=!1}return M}finally{f=null,p=H,v=!1}}var $=!1,N=null,P=-1,I=5,B=-1;function se(){return!(e.unstable_now()-B<I)}function we(){if(N!==null){var R=e.unstable_now();B=R;var W=!0;try{W=N(!0,R)}finally{W?Ie():($=!1,N=null)}}else $=!1}var Ie;if(typeof d=="function")Ie=function(){d(we)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ue=st.port2;st.port1.onmessage=we,Ie=function(){Ue.postMessage(null)}}else Ie=function(){E(we,0)};function Bt(R){N=R,$||($=!0,Ie())}function Ye(R,W){P=E(function(){R(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Bt(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var H=p;p=W;try{return R()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=p;p=R;try{return W()}finally{p=H}},e.unstable_scheduleCallback=function(R,W,H){var ae=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,R){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=H+T,R={id:c++,callback:W,priorityLevel:R,startTime:H,expirationTime:T,sortIndex:-1},H>ae?(R.sortIndex=H,t(u,R),n(l)===null&&R===n(u)&&(x?(m(P),P=-1):x=!0,Ye(k,H-ae))):(R.sortIndex=T,t(l,R),g||v||(g=!0,Bt(S))),R},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(R){var W=p;return function(){var H=p;p=W;try{return R.apply(this,arguments)}finally{p=H}}}})(mm);(function(e){e.exports=mm})(pm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=y.exports,ft=pm.exports;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,Ro={};function ir(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Ro[e]=t,e=0;e<t.length;e++)vm.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},Uf={};function $0(e){return _l.call(Uf,e)?!0:_l.call(jf,e)?!1:C0.test(e)?Uf[e]=!0:(jf[e]=!0,!1)}function P0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O0(e,t,n,r){if(t===null||typeof t>"u"||P0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var lc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lc,uc);je[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lc,uc);je[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lc,uc);je[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function cc(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O0(t,n,o,r)&&(n=null),r||o===null?$0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),pc=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),xm=Symbol.for("react.offscreen"),Bf=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=Bf&&e[Bf]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Hs;function po(e){if(Hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hs=t&&t[1]||""}return`
`+Hs+e}var Vs=!1;function Gs(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?po(e):""}function _0(e){switch(e.tag){case 5:return po(e.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return e=Gs(e.type,!1),e;case 11:return e=Gs(e.type.render,!1),e;case 1:return e=Gs(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case Nl:return"Profiler";case fc:return"StrictMode";case Rl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ym:return(e.displayName||"Context")+".Consumer";case gm:return(e._context.displayName||"Context")+".Provider";case dc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pc:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e){var t=wm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=R0(e))}function km(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sm(e,t){t=t.checked,t!=null&&cc(e,"checked",t,!1)}function Ll(e,t){Sm(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||ca(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function $r(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(mo(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function bm(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Cm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A0=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(e){A0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xo[t]=xo[e]})});function $m(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xo.hasOwnProperty(e)&&xo[e]?(""+t).trim():t+"px"}function Pm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$m(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var T0=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(T0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Pr=null,Or=null;function Yf(e){if(e=oi(e)){if(typeof Bl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Xa(t),Bl(e.stateNode,e.type,t))}}function Om(e){Pr?Or?Or.push(e):Or=[e]:Pr=e}function _m(){if(Pr){var e=Pr,t=Or;if(Or=Pr=null,Yf(e),t)for(e=0;e<t.length;e++)Yf(t[e])}}function Nm(e,t){return e(t)}function Rm(){}var Ys=!1;function Am(e,t,n){if(Ys)return e(t,n);Ys=!0;try{return Nm(e,t,n)}finally{Ys=!1,(Pr!==null||Or!==null)&&(Rm(),_m())}}function To(e,t){var n=e.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Wl=!1;if(Qt)try{var to={};Object.defineProperty(to,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Wl=!1}function I0(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var wo=!1,fa=null,da=!1,Hl=null,L0={onError:function(e){wo=!0,fa=e}};function M0(e,t,n,r,o,i,a,s,l){wo=!1,fa=null,I0.apply(L0,arguments)}function D0(e,t,n,r,o,i,a,s,l){if(M0.apply(this,arguments),wo){if(wo){var u=fa;wo=!1,fa=null}else throw Error(O(198));da||(da=!0,Hl=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kf(e){if(ar(e)!==e)throw Error(O(188))}function z0(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Kf(o),e;if(i===r)return Kf(o),t;i=i.sibling}throw Error(O(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Im(e){return e=z0(e),e!==null?Lm(e):null}function Lm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lm(e);if(t!==null)return t;e=e.sibling}return null}var Mm=ft.unstable_scheduleCallback,Qf=ft.unstable_cancelCallback,F0=ft.unstable_shouldYield,j0=ft.unstable_requestPaint,be=ft.unstable_now,U0=ft.unstable_getCurrentPriorityLevel,hc=ft.unstable_ImmediatePriority,Dm=ft.unstable_UserBlockingPriority,pa=ft.unstable_NormalPriority,B0=ft.unstable_LowPriority,zm=ft.unstable_IdlePriority,Ga=null,jt=null;function W0(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:G0,H0=Math.log,V0=Math.LN2;function G0(e){return e>>>=0,e===0?32:31-(H0(e)/V0|0)|0}var xi=64,wi=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=ho(s):(i&=a,i!==0&&(r=ho(i)))}else a=n&~o,a!==0?r=ho(a):i!==0&&(r=ho(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),o=1<<n,r|=e[n],t&=~o;return r}function Y0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-At(i),s=1<<a,l=o[a];l===-1?((s&n)===0||(s&r)!==0)&&(o[a]=Y0(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fm(){var e=xi;return xi<<=1,(xi&4194240)===0&&(xi=64),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function Q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-At(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function vc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function jm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Um,gc,Bm,Wm,Hm,Gl=!1,ki=[],wn=null,kn=null,Sn=null,Io=new Map,Lo=new Map,mn=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function no(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=oi(t),t!==null&&gc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function J0(e,t,n,r,o){switch(t){case"focusin":return wn=no(wn,e,t,n,r,o),!0;case"dragenter":return kn=no(kn,e,t,n,r,o),!0;case"mouseover":return Sn=no(Sn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Io.set(i,no(Io.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Lo.set(i,no(Lo.get(i)||null,e,t,n,r,o)),!0}return!1}function Vm(e){var t=Bn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Tm(n),t!==null){e.blockedOn=t,Hm(e.priority,function(){Bm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=oi(n),t!==null&&gc(t),e.blockedOn=n,!1;t.shift()}return!0}function Jf(e,t,n){Gi(e)&&n.delete(t)}function Z0(){Gl=!1,wn!==null&&Gi(wn)&&(wn=null),kn!==null&&Gi(kn)&&(kn=null),Sn!==null&&Gi(Sn)&&(Sn=null),Io.forEach(Jf),Lo.forEach(Jf)}function ro(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Z0)))}function Mo(e){function t(o){return ro(o,e)}if(0<ki.length){ro(ki[0],e);for(var n=1;n<ki.length;n++){var r=ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&ro(wn,e),kn!==null&&ro(kn,e),Sn!==null&&ro(Sn,e),Io.forEach(t),Lo.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&mn.shift()}var _r=rn.ReactCurrentBatchConfig,ha=!0;function q0(e,t,n,r){var o=re,i=_r.transition;_r.transition=null;try{re=1,yc(e,t,n,r)}finally{re=o,_r.transition=i}}function e1(e,t,n,r){var o=re,i=_r.transition;_r.transition=null;try{re=4,yc(e,t,n,r)}finally{re=o,_r.transition=i}}function yc(e,t,n,r){if(ha){var o=Yl(e,t,n,r);if(o===null)ol(e,t,r,va,n),Xf(e,r);else if(J0(o,e,t,n,r))r.stopPropagation();else if(Xf(e,r),t&4&&-1<X0.indexOf(e)){for(;o!==null;){var i=oi(o);if(i!==null&&Um(i),i=Yl(e,t,n,r),i===null&&ol(e,t,r,va,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var va=null;function Yl(e,t,n,r){if(va=null,e=mc(r),e=Bn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return va=e,null}function Gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U0()){case hc:return 1;case Dm:return 4;case pa:case B0:return 16;case zm:return 536870912;default:return 16}default:return 16}}var vn=null,xc=null,Yi=null;function Ym(){if(Yi)return Yi;var e,t=xc,n=t.length,r,o="value"in vn?vn.value:vn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Yi=o.slice(e,1<r?1-r:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Zf(){return!1}function pt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:Zf,this.isPropagationStopped=Zf,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=pt(Gr),ri=ve({},Gr,{view:0,detail:0}),t1=pt(ri),Qs,Xs,oo,Ya=ve({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Qs=e.screenX-oo.screenX,Xs=e.screenY-oo.screenY):Xs=Qs=0,oo=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),qf=pt(Ya),n1=ve({},Ya,{dataTransfer:0}),r1=pt(n1),o1=ve({},ri,{relatedTarget:0}),Js=pt(o1),i1=ve({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),a1=pt(i1),s1=ve({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l1=pt(s1),u1=ve({},Gr,{data:0}),ed=pt(u1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function kc(){return p1}var m1=ve({},ri,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h1=pt(m1),v1=ve({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=pt(v1),g1=ve({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),y1=pt(g1),x1=ve({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),w1=pt(x1),k1=ve({},Ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S1=pt(k1),b1=[9,13,27,32],Sc=Qt&&"CompositionEvent"in window,ko=null;Qt&&"documentMode"in document&&(ko=document.documentMode);var E1=Qt&&"TextEvent"in window&&!ko,Km=Qt&&(!Sc||ko&&8<ko&&11>=ko),nd=String.fromCharCode(32),rd=!1;function Qm(e,t){switch(e){case"keyup":return b1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function C1(e,t){switch(e){case"compositionend":return Xm(t);case"keypress":return t.which!==32?null:(rd=!0,nd);case"textInput":return e=t.data,e===nd&&rd?null:e;default:return null}}function $1(e,t){if(dr)return e==="compositionend"||!Sc&&Qm(e,t)?(e=Ym(),Yi=xc=vn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Km&&t.locale!=="ko"?null:t.data;default:return null}}var P1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P1[e.type]:t==="textarea"}function Jm(e,t,n,r){Om(r),t=ga(t,"onChange"),0<t.length&&(n=new wc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var So=null,Do=null;function O1(e){lh(e,0)}function Ka(e){var t=hr(e);if(km(t))return e}function _1(e,t){if(e==="change")return t}var Zm=!1;if(Qt){var Zs;if(Qt){var qs="oninput"in document;if(!qs){var id=document.createElement("div");id.setAttribute("oninput","return;"),qs=typeof id.oninput=="function"}Zs=qs}else Zs=!1;Zm=Zs&&(!document.documentMode||9<document.documentMode)}function ad(){So&&(So.detachEvent("onpropertychange",qm),Do=So=null)}function qm(e){if(e.propertyName==="value"&&Ka(Do)){var t=[];Jm(t,Do,e,mc(e)),Am(O1,t)}}function N1(e,t,n){e==="focusin"?(ad(),So=t,Do=n,So.attachEvent("onpropertychange",qm)):e==="focusout"&&ad()}function R1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ka(Do)}function A1(e,t){if(e==="click")return Ka(t)}function T1(e,t){if(e==="input"||e==="change")return Ka(t)}function I1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:I1;function zo(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!_l.call(t,o)||!It(e[o],t[o]))return!1}return!0}function sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ld(e,t){var n=sd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sd(n)}}function eh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function th(){for(var e=window,t=ca();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ca(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function L1(e){var t=th(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eh(n.ownerDocument.documentElement,n)){if(r!==null&&bc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ld(n,i);var a=ld(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M1=Qt&&"documentMode"in document&&11>=document.documentMode,pr=null,Kl=null,bo=null,Ql=!1;function ud(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ql||pr==null||pr!==ca(r)||(r=pr,"selectionStart"in r&&bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&zo(bo,r)||(bo=r,r=ga(Kl,"onSelect"),0<r.length&&(t=new wc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},el={},nh={};Qt&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Qa(e){if(el[e])return el[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nh)return el[e]=t[n];return e}var rh=Qa("animationend"),oh=Qa("animationiteration"),ih=Qa("animationstart"),ah=Qa("transitionend"),sh=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){sh.set(e,t),ir(t,[e])}for(var tl=0;tl<cd.length;tl++){var nl=cd[tl],D1=nl.toLowerCase(),z1=nl[0].toUpperCase()+nl.slice(1);Ln(D1,"on"+z1)}Ln(rh,"onAnimationEnd");Ln(oh,"onAnimationIteration");Ln(ih,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(ah,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F1=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function fd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,D0(r,t,void 0,e),e.currentTarget=null}function lh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;fd(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;fd(o,s,u),i=l}}}if(da)throw e=Hl,da=!1,Hl=null,e}function ue(e,t){var n=t[eu];n===void 0&&(n=t[eu]=new Set);var r=e+"__bubble";n.has(r)||(uh(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),uh(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[Ei]){e[Ei]=!0,vm.forEach(function(n){n!=="selectionchange"&&(F1.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,rl("selectionchange",!1,t))}}function uh(e,t,n,r){switch(Gm(t)){case 1:var o=q0;break;case 4:o=e1;break;default:o=yc}n=o.bind(null,t,n,e),o=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Bn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Am(function(){var u=i,c=mc(n),f=[];e:{var p=sh.get(e);if(p!==void 0){var v=wc,g=e;switch(e){case"keypress":if(Ki(n)===0)break e;case"keydown":case"keyup":v=h1;break;case"focusin":g="focus",v=Js;break;case"focusout":g="blur",v=Js;break;case"beforeblur":case"afterblur":v=Js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=y1;break;case rh:case oh:case ih:v=a1;break;case ah:v=w1;break;case"scroll":v=t1;break;case"wheel":v=S1;break;case"copy":case"cut":case"paste":v=l1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=td}var x=(t&4)!==0,E=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var d=u,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,m!==null&&(k=To(d,m),k!=null&&x.push(jo(d,k,h)))),E)break;d=d.return}0<x.length&&(p=new v(p,g,null,n,c),f.push({event:p,listeners:x}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ul&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Xt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Bn(g):null,g!==null&&(E=ar(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(x=qf,k="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=td,k="onPointerLeave",m="onPointerEnter",d="pointer"),E=v==null?p:hr(v),h=g==null?p:hr(g),p=new x(k,d+"leave",v,n,c),p.target=E,p.relatedTarget=h,k=null,Bn(c)===u&&(x=new x(m,d+"enter",g,n,c),x.target=h,x.relatedTarget=E,k=x),E=k,v&&g)t:{for(x=v,m=g,d=0,h=x;h;h=ur(h))d++;for(h=0,k=m;k;k=ur(k))h++;for(;0<d-h;)x=ur(x),d--;for(;0<h-d;)m=ur(m),h--;for(;d--;){if(x===m||m!==null&&x===m.alternate)break t;x=ur(x),m=ur(m)}x=null}else x=null;v!==null&&dd(f,p,v,x,!1),g!==null&&E!==null&&dd(f,E,g,x,!0)}}e:{if(p=u?hr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=_1;else if(od(p))if(Zm)S=T1;else{S=R1;var $=N1}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=A1);if(S&&(S=S(e,u))){Jm(f,S,n,c);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Ml(p,"number",p.value)}switch($=u?hr(u):window,e){case"focusin":(od($)||$.contentEditable==="true")&&(pr=$,Kl=u,bo=null);break;case"focusout":bo=Kl=pr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,ud(f,n,c);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":ud(f,n,c)}var N;if(Sc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else dr?Qm(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Km&&n.locale!=="ko"&&(dr||P!=="onCompositionStart"?P==="onCompositionEnd"&&dr&&(N=Ym()):(vn=c,xc="value"in vn?vn.value:vn.textContent,dr=!0)),$=ga(u,P),0<$.length&&(P=new ed(P,e,null,n,c),f.push({event:P,listeners:$}),N?P.data=N:(N=Xm(n),N!==null&&(P.data=N)))),(N=E1?C1(e,n):$1(e,n))&&(u=ga(u,"onBeforeInput"),0<u.length&&(c=new ed("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}lh(f,t)})}function jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ga(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=To(e,n),i!=null&&r.unshift(jo(e,i,o)),i=To(e,t),i!=null&&r.push(jo(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=To(n,i),l!=null&&a.unshift(jo(n,l,s))):o||(l=To(n,i),l!=null&&a.push(jo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var j1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function pd(e){return(typeof e=="string"?e:""+e).replace(j1,`
`).replace(U1,"")}function Ci(e,t,n){if(t=pd(t),pd(e)!==t&&n)throw Error(O(425))}function ya(){}var Xl=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(H1)}:ql;function H1(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Mo(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Yr,Uo="__reactProps$"+Yr,Xt="__reactContainer$"+Yr,eu="__reactEvents$"+Yr,V1="__reactListeners$"+Yr,G1="__reactHandles$"+Yr;function Bn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hd(e);e!==null;){if(n=e[zt])return n;e=hd(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[zt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Xa(e){return e[Uo]||null}var tu=[],vr=-1;function Mn(e){return{current:e}}function fe(e){0>vr||(e.current=tu[vr],tu[vr]=null,vr--)}function le(e,t){vr++,tu[vr]=e.current,e.current=t}var Rn={},Ge=Mn(Rn),rt=Mn(!1),Xn=Rn;function Ir(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ot(e){return e=e.childContextTypes,e!=null}function xa(){fe(rt),fe(Ge)}function vd(e,t,n){if(Ge.current!==Rn)throw Error(O(168));le(Ge,t),le(rt,n)}function ch(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(O(108,N0(e)||"Unknown",o));return ve({},n,r)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Xn=Ge.current,le(Ge,e),le(rt,rt.current),!0}function gd(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=ch(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,fe(rt),fe(Ge),le(Ge,e)):fe(rt),le(rt,n)}var Ht=null,Ja=!1,al=!1;function fh(e){Ht===null?Ht=[e]:Ht.push(e)}function Y1(e){Ja=!0,fh(e)}function Dn(){if(!al&&Ht!==null){al=!0;var e=0,t=re;try{var n=Ht;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,Ja=!1}catch(o){throw Ht!==null&&(Ht=Ht.slice(e+1)),Mm(hc,Dn),o}finally{re=t,al=!1}}return null}var gr=[],yr=0,ka=null,Sa=0,vt=[],gt=0,Jn=null,Vt=1,Gt="";function zn(e,t){gr[yr++]=Sa,gr[yr++]=ka,ka=e,Sa=t}function dh(e,t,n){vt[gt++]=Vt,vt[gt++]=Gt,vt[gt++]=Jn,Jn=e;var r=Vt;e=Gt;var o=32-At(r)-1;r&=~(1<<o),n+=1;var i=32-At(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Vt=1<<32-At(t)+o|n<<o|r,Gt=i+e}else Vt=1<<i|n<<o|r,Gt=e}function Ec(e){e.return!==null&&(zn(e,1),dh(e,1,0))}function Cc(e){for(;e===ka;)ka=gr[--yr],gr[yr]=null,Sa=gr[--yr],gr[yr]=null;for(;e===Jn;)Jn=vt[--gt],vt[gt]=null,Gt=vt[--gt],vt[gt]=null,Vt=vt[--gt],vt[gt]=null}var ct=null,ut=null,pe=!1,_t=null;function ph(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Vt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ru(e){if(pe){var t=ut;if(t){var n=t;if(!yd(e,t)){if(nu(e))throw Error(O(418));t=bn(n.nextSibling);var r=ct;t&&yd(e,t)?ph(r,n):(e.flags=e.flags&-4097|2,pe=!1,ct=e)}}else{if(nu(e))throw Error(O(418));e.flags=e.flags&-4097|2,pe=!1,ct=e}}}function xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function $i(e){if(e!==ct)return!1;if(!pe)return xd(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=ut)){if(nu(e))throw mh(),Error(O(418));for(;t;)ph(e,t),t=bn(t.nextSibling)}if(xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?bn(e.stateNode.nextSibling):null;return!0}function mh(){for(var e=ut;e;)e=bn(e.nextSibling)}function Lr(){ut=ct=null,pe=!1}function $c(e){_t===null?_t=[e]:_t.push(e)}var K1=rn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ba=Mn(null),Ea=null,xr=null,Pc=null;function Oc(){Pc=xr=Ea=null}function _c(e){var t=ba.current;fe(ba),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){Ea=e,Pc=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(et=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Pc!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(Ea===null)throw Error(O(308));xr=e,Ea.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Wn=null;function Nc(e){Wn===null?Wn=[e]:Wn.push(e)}function hh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Nc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jt(e,n)}return o=r.interleaved,o===null?(t.next=t,Nc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Jt(e,n)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vc(e,n)}}function wd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ca(e,t,n,r){var o=e.updateQueue;pn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,c=u=l=null,s=i;do{var p=s.lane,v=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(p=t,v=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(v,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(v,f,p):g,p==null)break e;f=ve({},f,p);break e;case 2:pn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=f}}function kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(O(191,o));o.call(r)}}}var gh=new hm.Component().refs;function iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=$n(e),i=Yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&(Tt(t,e,o,r),Qi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=$n(e),i=Yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&(Tt(t,e,o,r),Qi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=$n(e),o=Yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=En(e,o,r),t!==null&&(Tt(t,e,r,n),Qi(t,e,r))}};function Sd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(o,i):!0}function yh(e,t,n){var r=!1,o=Rn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=ot(t)?Xn:Ge.current,r=t.contextTypes,i=(r=r!=null)?Ir(e,o):Rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=gh,Rc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=ot(t)?Xn:Ge.current,o.context=Ir(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(iu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Za.enqueueReplaceState(o,o.state,null),Ca(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===gh&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ed(e){var t=e._init;return t(e._payload)}function xh(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=Pn(m,d),m.index=0,m.sibling=null,m}function i(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,h,k){return d===null||d.tag!==6?(d=pl(h,m.mode,k),d.return=m,d):(d=o(d,h),d.return=m,d)}function l(m,d,h,k){var S=h.type;return S===fr?c(m,d,h.props.children,k,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dn&&Ed(S)===d.type)?(k=o(d,h.props),k.ref=io(m,d,h),k.return=m,k):(k=ta(h.type,h.key,h.props,null,m.mode,k),k.ref=io(m,d,h),k.return=m,k)}function u(m,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ml(h,m.mode,k),d.return=m,d):(d=o(d,h.children||[]),d.return=m,d)}function c(m,d,h,k,S){return d===null||d.tag!==7?(d=Kn(h,m.mode,k,S),d.return=m,d):(d=o(d,h),d.return=m,d)}function f(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=pl(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vi:return h=ta(d.type,d.key,d.props,null,m.mode,h),h.ref=io(m,null,d),h.return=m,h;case cr:return d=ml(d,m.mode,h),d.return=m,d;case dn:var k=d._init;return f(m,k(d._payload),h)}if(mo(d)||eo(d))return d=Kn(d,m.mode,h,null),d.return=m,d;Pi(m,d)}return null}function p(m,d,h,k){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(m,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vi:return h.key===S?l(m,d,h,k):null;case cr:return h.key===S?u(m,d,h,k):null;case dn:return S=h._init,p(m,d,S(h._payload),k)}if(mo(h)||eo(h))return S!==null?null:c(m,d,h,k,null);Pi(m,h)}return null}function v(m,d,h,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(h)||null,s(d,m,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case vi:return m=m.get(k.key===null?h:k.key)||null,l(d,m,k,S);case cr:return m=m.get(k.key===null?h:k.key)||null,u(d,m,k,S);case dn:var $=k._init;return v(m,d,h,$(k._payload),S)}if(mo(k)||eo(k))return m=m.get(h)||null,c(d,m,k,S,null);Pi(d,k)}return null}function g(m,d,h,k){for(var S=null,$=null,N=d,P=d=0,I=null;N!==null&&P<h.length;P++){N.index>P?(I=N,N=null):I=N.sibling;var B=p(m,N,h[P],k);if(B===null){N===null&&(N=I);break}e&&N&&B.alternate===null&&t(m,N),d=i(B,d,P),$===null?S=B:$.sibling=B,$=B,N=I}if(P===h.length)return n(m,N),pe&&zn(m,P),S;if(N===null){for(;P<h.length;P++)N=f(m,h[P],k),N!==null&&(d=i(N,d,P),$===null?S=N:$.sibling=N,$=N);return pe&&zn(m,P),S}for(N=r(m,N);P<h.length;P++)I=v(N,m,P,h[P],k),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?P:I.key),d=i(I,d,P),$===null?S=I:$.sibling=I,$=I);return e&&N.forEach(function(se){return t(m,se)}),pe&&zn(m,P),S}function x(m,d,h,k){var S=eo(h);if(typeof S!="function")throw Error(O(150));if(h=S.call(h),h==null)throw Error(O(151));for(var $=S=null,N=d,P=d=0,I=null,B=h.next();N!==null&&!B.done;P++,B=h.next()){N.index>P?(I=N,N=null):I=N.sibling;var se=p(m,N,B.value,k);if(se===null){N===null&&(N=I);break}e&&N&&se.alternate===null&&t(m,N),d=i(se,d,P),$===null?S=se:$.sibling=se,$=se,N=I}if(B.done)return n(m,N),pe&&zn(m,P),S;if(N===null){for(;!B.done;P++,B=h.next())B=f(m,B.value,k),B!==null&&(d=i(B,d,P),$===null?S=B:$.sibling=B,$=B);return pe&&zn(m,P),S}for(N=r(m,N);!B.done;P++,B=h.next())B=v(N,m,P,B.value,k),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?P:B.key),d=i(B,d,P),$===null?S=B:$.sibling=B,$=B);return e&&N.forEach(function(we){return t(m,we)}),pe&&zn(m,P),S}function E(m,d,h,k){if(typeof h=="object"&&h!==null&&h.type===fr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case vi:e:{for(var S=h.key,$=d;$!==null;){if($.key===S){if(S=h.type,S===fr){if($.tag===7){n(m,$.sibling),d=o($,h.props.children),d.return=m,m=d;break e}}else if($.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dn&&Ed(S)===$.type){n(m,$.sibling),d=o($,h.props),d.ref=io(m,$,h),d.return=m,m=d;break e}n(m,$);break}else t(m,$);$=$.sibling}h.type===fr?(d=Kn(h.props.children,m.mode,k,h.key),d.return=m,m=d):(k=ta(h.type,h.key,h.props,null,m.mode,k),k.ref=io(m,d,h),k.return=m,m=k)}return a(m);case cr:e:{for($=h.key;d!==null;){if(d.key===$)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=o(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=ml(h,m.mode,k),d.return=m,m=d}return a(m);case dn:return $=h._init,E(m,d,$(h._payload),k)}if(mo(h))return g(m,d,h,k);if(eo(h))return x(m,d,h,k);Pi(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,h),d.return=m,m=d):(n(m,d),d=pl(h,m.mode,k),d.return=m,m=d),a(m)):n(m,d)}return E}var Mr=xh(!0),wh=xh(!1),ii={},Ut=Mn(ii),Bo=Mn(ii),Wo=Mn(ii);function Hn(e){if(e===ii)throw Error(O(174));return e}function Ac(e,t){switch(le(Wo,t),le(Bo,e),le(Ut,ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}fe(Ut),le(Ut,t)}function Dr(){fe(Ut),fe(Bo),fe(Wo)}function kh(e){Hn(Wo.current);var t=Hn(Ut.current),n=zl(t,e.type);t!==n&&(le(Bo,e),le(Ut,n))}function Tc(e){Bo.current===e&&(fe(Ut),fe(Bo))}var me=Mn(0);function $a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function Ic(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Xi=rn.ReactCurrentDispatcher,ll=rn.ReactCurrentBatchConfig,Zn=0,he=null,$e=null,_e=null,Pa=!1,Eo=!1,Ho=0,Q1=0;function We(){throw Error(O(321))}function Lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Mc(e,t,n,r,o,i){if(Zn=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?q1:ey,e=n(r,o),Eo){i=0;do{if(Eo=!1,Ho=0,25<=i)throw Error(O(301));i+=1,_e=$e=null,t.updateQueue=null,Xi.current=ty,e=n(r,o)}while(Eo)}if(Xi.current=Oa,t=$e!==null&&$e.next!==null,Zn=0,_e=$e=he=null,Pa=!1,t)throw Error(O(300));return e}function Dc(){var e=Ho!==0;return Ho=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?he.memoizedState=_e=e:_e=_e.next=e,_e}function bt(){if($e===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=_e===null?he.memoizedState:_e.next;if(t!==null)_e=t,$e=e;else{if(e===null)throw Error(O(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},_e===null?he.memoizedState=_e=e:_e=_e.next=e}return _e}function Vo(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=bt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=$e,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((Zn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,he.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,It(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,he.lanes|=i,qn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=bt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);It(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sh(){}function bh(e,t){var n=he,r=bt(),o=t(),i=!It(r.memoizedState,o);if(i&&(r.memoizedState=o,et=!0),r=r.queue,zc($h.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Go(9,Ch.bind(null,n,r,o,t),void 0,null),Re===null)throw Error(O(349));(Zn&30)!==0||Eh(n,t,o)}return o}function Eh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ch(e,t,n,r){t.value=n,t.getSnapshot=r,Ph(t)&&Oh(e)}function $h(e,t,n){return n(function(){Ph(t)&&Oh(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Oh(e){var t=Jt(e,1);t!==null&&Tt(t,e,1,-1)}function Cd(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Z1.bind(null,he,e),[t.memoizedState,e]}function Go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _h(){return bt().memoizedState}function Ji(e,t,n,r){var o=Dt();he.flags|=e,o.memoizedState=Go(1|t,n,void 0,r===void 0?null:r)}function qa(e,t,n,r){var o=bt();r=r===void 0?null:r;var i=void 0;if($e!==null){var a=$e.memoizedState;if(i=a.destroy,r!==null&&Lc(r,a.deps)){o.memoizedState=Go(t,n,i,r);return}}he.flags|=e,o.memoizedState=Go(1|t,n,i,r)}function $d(e,t){return Ji(8390656,8,e,t)}function zc(e,t){return qa(2048,8,e,t)}function Nh(e,t){return qa(4,2,e,t)}function Rh(e,t){return qa(4,4,e,t)}function Ah(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Th(e,t,n){return n=n!=null?n.concat([e]):null,qa(4,4,Ah.bind(null,t,e),n)}function Fc(){}function Ih(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lh(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mh(e,t,n){return(Zn&21)===0?(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n):(It(n,t)||(n=Fm(),he.lanes|=n,qn|=n,e.baseState=!0),t)}function X1(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{re=n,ll.transition=r}}function Dh(){return bt().memoizedState}function J1(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e))Fh(t,n);else if(n=hh(e,t,n,r),n!==null){var o=Qe();Tt(n,e,r,o),jh(n,t,r)}}function Z1(e,t,n){var r=$n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))Fh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,It(s,a)){var l=t.interleaved;l===null?(o.next=o,Nc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=hh(e,t,o,r),n!==null&&(o=Qe(),Tt(n,e,r,o),jh(n,t,r))}}function zh(e){var t=e.alternate;return e===he||t!==null&&t===he}function Fh(e,t){Eo=Pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vc(e,n)}}var Oa={readContext:St,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},q1={readContext:St,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:$d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ji(4194308,4,Ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ji(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J1.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Cd,useDebugValue:Fc,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Cd(!1),t=e[0];return e=X1.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=Dt();if(pe){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Re===null)throw Error(O(349));(Zn&30)!==0||Eh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,$d($h.bind(null,r,i,e),[e]),r.flags|=2048,Go(9,Ch.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Re.identifierPrefix;if(pe){var n=Gt,r=Vt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ey={readContext:St,useCallback:Ih,useContext:St,useEffect:zc,useImperativeHandle:Th,useInsertionEffect:Nh,useLayoutEffect:Rh,useMemo:Lh,useReducer:ul,useRef:_h,useState:function(){return ul(Vo)},useDebugValue:Fc,useDeferredValue:function(e){var t=bt();return Mh(t,$e.memoizedState,e)},useTransition:function(){var e=ul(Vo)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Sh,useSyncExternalStore:bh,useId:Dh,unstable_isNewReconciler:!1},ty={readContext:St,useCallback:Ih,useContext:St,useEffect:zc,useImperativeHandle:Th,useInsertionEffect:Nh,useLayoutEffect:Rh,useMemo:Lh,useReducer:cl,useRef:_h,useState:function(){return cl(Vo)},useDebugValue:Fc,useDeferredValue:function(e){var t=bt();return $e===null?t.memoizedState=e:Mh(t,$e.memoizedState,e)},useTransition:function(){var e=cl(Vo)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Sh,useSyncExternalStore:bh,useId:Dh,unstable_isNewReconciler:!1};function zr(e,t){try{var n="",r=t;do n+=_0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function Uh(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,gu=r),su(e,t)},n}function Bh(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){su(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){su(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Pd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ny;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=vy.bind(null,e,t,n),t.then(e,e))}function Od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ry=rn.ReactCurrentOwner,et=!1;function Ke(e,t,n,r){t.child=e===null?wh(t,null,n,r):Mr(t,e.child,n,r)}function Nd(e,t,n,r,o){n=n.render;var i=t.ref;return Nr(t,o),r=Mc(e,t,n,r,i,o),n=Dc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(pe&&n&&Ec(t),t.flags|=1,Ke(e,t,r,o),t.child)}function Rd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Yc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wh(e,t,i,r,o)):(e=ta(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(a,r)&&e.ref===t.ref)return Zt(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zo(i,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Zt(e,t,o)}return lu(e,t,n,r,o)}function Hh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(kr,lt),lt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(kr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,le(kr,lt),lt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,le(kr,lt),lt|=r;return Ke(e,t,o,n),t.child}function Vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lu(e,t,n,r,o){var i=ot(n)?Xn:Ge.current;return i=Ir(t,i),Nr(t,o),n=Mc(e,t,n,r,i,o),r=Dc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(pe&&r&&Ec(t),t.flags|=1,Ke(e,t,n,o),t.child)}function Ad(e,t,n,r,o){if(ot(n)){var i=!0;wa(t)}else i=!1;if(Nr(t,o),t.stateNode===null)Zi(e,t),yh(t,n,r),au(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=ot(n)?Xn:Ge.current,u=Ir(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&bd(t,a,r,u),pn=!1;var p=t.memoizedState;a.state=p,Ca(t,r,a,o),l=t.memoizedState,s!==r||p!==l||rt.current||pn?(typeof c=="function"&&(iu(t,n,c,r),l=t.memoizedState),(s=pn||Sd(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Pt(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=ot(n)?Xn:Ge.current,l=Ir(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&bd(t,a,r,l),pn=!1,p=t.memoizedState,a.state=p,Ca(t,r,a,o);var g=t.memoizedState;s!==f||p!==g||rt.current||pn?(typeof v=="function"&&(iu(t,n,v,r),g=t.memoizedState),(u=pn||Sd(t,n,u,r,p,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return uu(e,t,n,r,i,o)}function uu(e,t,n,r,o,i){Vh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&gd(t,n,!1),Zt(e,t,i);r=t.stateNode,ry.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Mr(t,e.child,null,i),t.child=Mr(t,null,s,i)):Ke(e,t,s,i),t.memoizedState=r.state,o&&gd(t,n,!0),t.child}function Gh(e){var t=e.stateNode;t.pendingContext?vd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vd(e,t.context,!1),Ac(e,t.containerInfo)}function Td(e,t,n,r,o){return Lr(),$c(o),t.flags|=256,Ke(e,t,n,r),t.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yh(e,t,n){var r=t.pendingProps,o=me.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(me,o&1),e===null)return ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ns(a,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fu(n),t.memoizedState=cu,e):jc(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return oy(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Pn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Pn(s,i):(i=Kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?fu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=cu,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jc(e,t){return t=ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oi(e,t,n,r){return r!==null&&$c(r),Mr(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oy(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(O(422))),Oi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ns({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Mr(t,e.child,null,a),t.child.memoizedState=fu(a),t.memoizedState=cu,i);if((t.mode&1)===0)return Oi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(O(419)),r=fl(i,r,void 0),Oi(e,t,a,r)}if(s=(a&e.childLanes)!==0,et||s){if(r=Re,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Jt(e,o),Tt(r,e,o,-1))}return Gc(),r=fl(Error(O(421))),Oi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ut=bn(o.nextSibling),ct=t,pe=!0,_t=null,e!==null&&(vt[gt++]=Vt,vt[gt++]=Gt,vt[gt++]=Jn,Vt=e.id,Gt=e.overflow,Jn=t),t=jc(t,r.children),t.flags|=4096,t)}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ke(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$a(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$a(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}dl(t,!0,n,null,i);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iy(e,t,n){switch(t.tag){case 3:Gh(t),Lr();break;case 5:kh(t);break;case 1:ot(t.type)&&wa(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Yh(e,t,n):(le(me,me.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);le(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Kh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Hh(e,t,n)}return Zt(e,t,n)}var Qh,du,Xh,Jh;Qh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};Xh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hn(Ut.current);var i=null;switch(n){case"input":o=Il(e,o),r=Il(e,r),i=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),i=[];break;case"textarea":o=Dl(e,o),r=Dl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ya)}Fl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ro.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ao(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ay(e,t,n){var r=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return ot(t.type)&&xa(),He(t),null;case 3:return r=t.stateNode,Dr(),fe(rt),fe(Ge),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(wu(_t),_t=null))),du(e,t),He(t),null;case 5:Tc(t);var o=Hn(Wo.current);if(n=t.type,e!==null&&t.stateNode!=null)Xh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return He(t),null}if(e=Hn(Ut.current),$i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[Uo]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<vo.length;o++)ue(vo[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Wf(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":Vf(r,i),ue("invalid",r)}Fl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),o=["children",""+s]):Ro.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":gi(r),Hf(r,i,!0);break;case"textarea":gi(r),Gf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ya)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Em(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[Uo]=r,Qh(e,t,!1,!1),t.stateNode=e;e:{switch(a=jl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<vo.length;o++)ue(vo[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":Wf(e,r),o=Il(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Vf(e,r),o=Dl(e,r),ue("invalid",e);break;default:o=r}Fl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Pm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(e,l):typeof l=="number"&&Ao(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ro.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ue("scroll",e):l!=null&&cc(e,i,l,a))}switch(n){case"input":gi(e),Hf(e,r,!1);break;case"textarea":gi(e),Gf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$r(e,!!r.multiple,i,!1):r.defaultValue!=null&&$r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Hn(Wo.current),Hn(Ut.current),$i(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return He(t),null;case 13:if(fe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)mh(),Lr(),t.flags|=98560,i=!1;else if(i=$i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(O(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[zt]=t}else Lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),i=!1}else _t!==null&&(wu(_t),_t=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?Pe===0&&(Pe=3):Gc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Dr(),du(e,t),e===null&&Fo(t.stateNode.containerInfo),He(t),null;case 10:return _c(t.type._context),He(t),null;case 17:return ot(t.type)&&xa(),He(t),null;case 19:if(fe(me),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ao(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=$a(e),a!==null){for(t.flags|=128,ao(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(me,me.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>Fr&&(t.flags|=128,r=!0,ao(i,!1),t.lanes=4194304)}else{if(!r)if(e=$a(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!pe)return He(t),null}else 2*be()-i.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,ao(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=me.current,le(me,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Vc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(lt&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function sy(e,t){switch(Cc(t),t.tag){case 1:return ot(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),fe(rt),fe(Ge),Ic(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Tc(t),null;case 13:if(fe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(me),null;case 4:return Dr(),null;case 10:return _c(t.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var _i=!1,Ve=!1,ly=typeof WeakSet=="function"?WeakSet:Set,j=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function pu(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Ld=!1;function uy(e,t){if(Xl=ha,e=th(),bc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++c===r&&(l=a),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},ha=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,E=g.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Pt(t.type,x),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Ld,Ld=!1,g}function Co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&pu(t,n,i)}o=o.next}while(o!==r)}}function es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zh(e){var t=e.alternate;t!==null&&(e.alternate=null,Zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Uo],delete t[eu],delete t[V1],delete t[G1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qh(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var ze=null,Ot=!1;function un(e,t,n){for(n=n.child;n!==null;)ev(e,t,n),n=n.sibling}function ev(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:Ve||wr(n,t);case 6:var r=ze,o=Ot;ze=null,un(e,t,n),ze=r,Ot=o,ze!==null&&(Ot?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ot?(e=ze,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Mo(e)):il(ze,n.stateNode));break;case 4:r=ze,o=Ot,ze=n.stateNode.containerInfo,Ot=!0,un(e,t,n),ze=r,Ot=o;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&pu(n,t,a),o=o.next}while(o!==r)}un(e,t,n);break;case 1:if(!Ve&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,un(e,t,n),Ve=r):un(e,t,n);break;default:un(e,t,n)}}function Dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ly),t.forEach(function(r){var o=yy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ze=s.stateNode,Ot=!1;break e;case 3:ze=s.stateNode.containerInfo,Ot=!0;break e;case 4:ze=s.stateNode.containerInfo,Ot=!0;break e}s=s.return}if(ze===null)throw Error(O(160));ev(i,a,o),ze=null,Ot=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tv(t,e),t=t.sibling}function tv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),Mt(e),r&4){try{Co(3,e,e.return),es(3,e)}catch(x){ye(e,e.return,x)}try{Co(5,e,e.return)}catch(x){ye(e,e.return,x)}}break;case 1:$t(t,e),Mt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if($t(t,e),Mt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var o=e.stateNode;try{Ao(o,"")}catch(x){ye(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Sm(o,i),jl(s,a);var u=jl(s,i);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Pm(o,f):c==="dangerouslySetInnerHTML"?Cm(o,f):c==="children"?Ao(o,f):cc(o,c,f,u)}switch(s){case"input":Ll(o,i);break;case"textarea":bm(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?$r(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?$r(o,!!i.multiple,i.defaultValue,!0):$r(o,!!i.multiple,i.multiple?[]:"",!1))}o[Uo]=i}catch(x){ye(e,e.return,x)}}break;case 6:if($t(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(O(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ye(e,e.return,x)}}break;case 3:if($t(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(x){ye(e,e.return,x)}break;case 4:$t(t,e),Mt(e);break;case 13:$t(t,e),Mt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wc=be())),r&4&&Dd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||c,$t(t,e),Ve=u):$t(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(j=e,c=e.child;c!==null;){for(f=j=c;j!==null;){switch(p=j,v=p.child,p.tag){case 0:case 11:case 14:case 15:Co(4,p,p.return);break;case 1:wr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){ye(r,n,x)}}break;case 5:wr(p,p.return);break;case 22:if(p.memoizedState!==null){Fd(f);continue}}v!==null?(v.return=p,j=v):Fd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=$m("display",a))}catch(x){ye(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ye(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$t(t,e),Mt(e),r&4&&Dd(e);break;case 21:break;default:$t(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qh(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ao(o,""),r.flags&=-33);var i=Md(e);vu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Md(e);hu(e,s,a);break;default:throw Error(O(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cy(e,t,n){j=e,nv(e)}function nv(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||_i;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ve;s=_i;var u=Ve;if(_i=a,(Ve=l)&&!u)for(j=o;j!==null;)a=j,l=a.child,a.tag===22&&a.memoizedState!==null?jd(o):l!==null?(l.return=a,j=l):jd(o);for(;i!==null;)j=i,nv(i),i=i.sibling;j=o,_i=s,Ve=u}zd(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,j=i):zd(e)}}function zd(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&kd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ve||t.flags&512&&mu(t)}catch(p){ye(t,t.return,p)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Fd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function jd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{es(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ye(t,o,l)}}var i=t.return;try{mu(t)}catch(l){ye(t,i,l)}break;case 5:var a=t.return;try{mu(t)}catch(l){ye(t,a,l)}}}catch(l){ye(t,t.return,l)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var fy=Math.ceil,_a=rn.ReactCurrentDispatcher,Uc=rn.ReactCurrentOwner,wt=rn.ReactCurrentBatchConfig,J=0,Re=null,Ee=null,Fe=0,lt=0,kr=Mn(0),Pe=0,Yo=null,qn=0,ts=0,Bc=0,$o=null,qe=null,Wc=0,Fr=1/0,Wt=null,Na=!1,gu=null,Cn=null,Ni=!1,gn=null,Ra=0,Po=0,yu=null,qi=-1,ea=0;function Qe(){return(J&6)!==0?be():qi!==-1?qi:qi=be()}function $n(e){return(e.mode&1)===0?1:(J&2)!==0&&Fe!==0?Fe&-Fe:K1.transition!==null?(ea===0&&(ea=Fm()),ea):(e=re,e!==0||(e=window.event,e=e===void 0?16:Gm(e.type)),e)}function Tt(e,t,n,r){if(50<Po)throw Po=0,yu=null,Error(O(185));ni(e,n,r),((J&2)===0||e!==Re)&&(e===Re&&((J&2)===0&&(ts|=n),Pe===4&&hn(e,Fe)),it(e,r),n===1&&J===0&&(t.mode&1)===0&&(Fr=be()+500,Ja&&Dn()))}function it(e,t){var n=e.callbackNode;K0(e,t);var r=ma(e,e===Re?Fe:0);if(r===0)n!==null&&Qf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qf(n),t===1)e.tag===0?Y1(Ud.bind(null,e)):fh(Ud.bind(null,e)),W1(function(){(J&6)===0&&Dn()}),n=null;else{switch(jm(r)){case 1:n=hc;break;case 4:n=Dm;break;case 16:n=pa;break;case 536870912:n=zm;break;default:n=pa}n=cv(n,rv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rv(e,t){if(qi=-1,ea=0,(J&6)!==0)throw Error(O(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=ma(e,e===Re?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Aa(e,r);else{t=r;var o=J;J|=2;var i=iv();(Re!==e||Fe!==t)&&(Wt=null,Fr=be()+500,Yn(e,t));do try{my();break}catch(s){ov(e,s)}while(1);Oc(),_a.current=i,J=o,Ee!==null?t=0:(Re=null,Fe=0,t=Pe)}if(t!==0){if(t===2&&(o=Vl(e),o!==0&&(r=o,t=xu(e,o))),t===1)throw n=Yo,Yn(e,0),hn(e,r),it(e,be()),n;if(t===6)hn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!dy(o)&&(t=Aa(e,r),t===2&&(i=Vl(e),i!==0&&(r=i,t=xu(e,i))),t===1))throw n=Yo,Yn(e,0),hn(e,r),it(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Fn(e,qe,Wt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=Wc+500-be(),10<t)){if(ma(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ql(Fn.bind(null,e,qe,Wt),t);break}Fn(e,qe,Wt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-At(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fy(r/1960))-r,10<r){e.timeoutHandle=ql(Fn.bind(null,e,qe,Wt),r);break}Fn(e,qe,Wt);break;case 5:Fn(e,qe,Wt);break;default:throw Error(O(329))}}}return it(e,be()),e.callbackNode===n?rv.bind(null,e):null}function xu(e,t){var n=$o;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=qe,qe=n,t!==null&&wu(t)),e}function wu(e){qe===null?qe=e:qe.push.apply(qe,e)}function dy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!It(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Bc,t&=~ts,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function Ud(e){if((J&6)!==0)throw Error(O(327));Rr();var t=ma(e,0);if((t&1)===0)return it(e,be()),null;var n=Aa(e,t);if(e.tag!==0&&n===2){var r=Vl(e);r!==0&&(t=r,n=xu(e,r))}if(n===1)throw n=Yo,Yn(e,0),hn(e,t),it(e,be()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,qe,Wt),it(e,be()),null}function Hc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Fr=be()+500,Ja&&Dn())}}function er(e){gn!==null&&gn.tag===0&&(J&6)===0&&Rr();var t=J;J|=1;var n=wt.transition,r=re;try{if(wt.transition=null,re=1,e)return e()}finally{re=r,wt.transition=n,J=t,(J&6)===0&&Dn()}}function Vc(){lt=kr.current,fe(kr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B1(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xa();break;case 3:Dr(),fe(rt),fe(Ge),Ic();break;case 5:Tc(r);break;case 4:Dr();break;case 13:fe(me);break;case 19:fe(me);break;case 10:_c(r.type._context);break;case 22:case 23:Vc()}n=n.return}if(Re=e,Ee=e=Pn(e.current,null),Fe=lt=t,Pe=0,Yo=null,Bc=ts=qn=0,qe=$o=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Wn=null}return e}function ov(e,t){do{var n=Ee;try{if(Oc(),Xi.current=Oa,Pa){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pa=!1}if(Zn=0,_e=$e=he=null,Eo=!1,Ho=0,Uc.current=null,n===null||n.return===null){Pe=1,Yo=t,Ee=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Fe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Od(a);if(v!==null){v.flags&=-257,_d(v,a,s,i,t),v.mode&1&&Pd(i,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(l),t.updateQueue=x}else g.add(l);break e}else{if((t&1)===0){Pd(i,u,t),Gc();break e}l=Error(O(426))}}else if(pe&&s.mode&1){var E=Od(a);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),_d(E,a,s,i,t),$c(zr(l,s));break e}}i=l=zr(l,s),Pe!==4&&(Pe=2),$o===null?$o=[i]:$o.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Uh(i,l,t);wd(i,m);break e;case 1:s=l;var d=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Cn===null||!Cn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Bh(i,s,t);wd(i,k);break e}}i=i.return}while(i!==null)}sv(n)}catch(S){t=S,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function iv(){var e=_a.current;return _a.current=Oa,e===null?Oa:e}function Gc(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Re===null||(qn&268435455)===0&&(ts&268435455)===0||hn(Re,Fe)}function Aa(e,t){var n=J;J|=2;var r=iv();(Re!==e||Fe!==t)&&(Wt=null,Yn(e,t));do try{py();break}catch(o){ov(e,o)}while(1);if(Oc(),J=n,_a.current=r,Ee!==null)throw Error(O(261));return Re=null,Fe=0,Pe}function py(){for(;Ee!==null;)av(Ee)}function my(){for(;Ee!==null&&!F0();)av(Ee)}function av(e){var t=uv(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?sv(e):Ee=t,Uc.current=null}function sv(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ay(n,t,lt),n!==null){Ee=n;return}}else{if(n=sy(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Pe===0&&(Pe=5)}function Fn(e,t,n){var r=re,o=wt.transition;try{wt.transition=null,re=1,hy(e,t,n,r)}finally{wt.transition=o,re=r}return null}function hy(e,t,n,r){do Rr();while(gn!==null);if((J&6)!==0)throw Error(O(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Q0(e,i),e===Re&&(Ee=Re=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ni||(Ni=!0,cv(pa,function(){return Rr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=wt.transition,wt.transition=null;var a=re;re=1;var s=J;J|=4,Uc.current=null,uy(e,n),tv(n,e),L1(Jl),ha=!!Xl,Jl=Xl=null,e.current=n,cy(n),j0(),J=s,re=a,wt.transition=i}else e.current=n;if(Ni&&(Ni=!1,gn=e,Ra=o),i=e.pendingLanes,i===0&&(Cn=null),W0(n.stateNode),it(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Na)throw Na=!1,e=gu,gu=null,e;return(Ra&1)!==0&&e.tag!==0&&Rr(),i=e.pendingLanes,(i&1)!==0?e===yu?Po++:(Po=0,yu=e):Po=0,Dn(),null}function Rr(){if(gn!==null){var e=jm(Ra),t=wt.transition,n=re;try{if(wt.transition=null,re=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Ra=0,(J&6)!==0)throw Error(O(331));var o=J;for(J|=4,j=e.current;j!==null;){var i=j,a=i.child;if((j.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Co(8,c,i)}var f=c.child;if(f!==null)f.return=c,j=f;else for(;j!==null;){c=j;var p=c.sibling,v=c.return;if(Zh(c),c===u){j=null;break}if(p!==null){p.return=v,j=p;break}j=v}}}var g=i.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Co(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,j=m;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){a=j;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,j=h;else e:for(a=d;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:es(9,s)}}catch(S){ye(s,s.return,S)}if(s===a){j=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,j=k;break e}j=s.return}}if(J=o,Dn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Ga,e)}catch{}r=!0}return r}finally{re=n,wt.transition=t}}return!1}function Bd(e,t,n){t=zr(n,t),t=Uh(e,t,1),e=En(e,t,1),t=Qe(),e!==null&&(ni(e,1,t),it(e,t))}function ye(e,t,n){if(e.tag===3)Bd(e,e,n);else for(;t!==null;){if(t.tag===3){Bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=zr(n,e),e=Bh(t,e,1),t=En(t,e,1),e=Qe(),t!==null&&(ni(t,1,e),it(t,e));break}}t=t.return}}function vy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Fe&n)===n&&(Pe===4||Pe===3&&(Fe&130023424)===Fe&&500>be()-Wc?Yn(e,0):Bc|=n),it(e,t)}function lv(e,t){t===0&&((e.mode&1)===0?t=1:(t=wi,wi<<=1,(wi&130023424)===0&&(wi=4194304)));var n=Qe();e=Jt(e,t),e!==null&&(ni(e,t,n),it(e,n))}function gy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lv(e,n)}function yy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),lv(e,n)}var uv;uv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)et=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return et=!1,iy(e,t,n);et=(e.flags&131072)!==0}else et=!1,pe&&(t.flags&1048576)!==0&&dh(t,Sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var o=Ir(t,Ge.current);Nr(t,n),o=Mc(null,t,r,e,o,n);var i=Dc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(i=!0,wa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rc(t),o.updater=Za,t.stateNode=o,o._reactInternals=t,au(t,r,e,n),t=uu(null,t,r,!0,i,n)):(t.tag=0,pe&&i&&Ec(t),Ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=wy(r),e=Pt(r,e),o){case 0:t=lu(null,t,r,e,n);break e;case 1:t=Ad(null,t,r,e,n);break e;case 11:t=Nd(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,Pt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),lu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Ad(e,t,r,o,n);case 3:e:{if(Gh(t),e===null)throw Error(O(387));r=t.pendingProps,i=t.memoizedState,o=i.element,vh(e,t),Ca(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=zr(Error(O(423)),t),t=Td(e,t,r,n,o);break e}else if(r!==o){o=zr(Error(O(424)),t),t=Td(e,t,r,n,o);break e}else for(ut=bn(t.stateNode.containerInfo.firstChild),ct=t,pe=!0,_t=null,n=wh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===o){t=Zt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return kh(t),e===null&&ru(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Zl(r,o)?a=null:i!==null&&Zl(r,i)&&(t.flags|=32),Vh(e,t),Ke(e,t,a,n),t.child;case 6:return e===null&&ru(t),null;case 13:return Yh(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Nd(e,t,r,o,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,le(ba,r._currentValue),r._currentValue=a,i!==null)if(It(i.value,a)){if(i.children===o.children&&!rt.current){t=Zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Yt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),ou(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(O(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ou(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Nr(t,n),o=St(o),r=r(o),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,o=Pt(r,t.pendingProps),o=Pt(r.type,o),Rd(e,t,r,o,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Zi(e,t),t.tag=1,ot(r)?(e=!0,wa(t)):e=!1,Nr(t,n),yh(t,r,o),au(t,r,o,n),uu(null,t,r,!0,e,n);case 19:return Kh(e,t,n);case 22:return Hh(e,t,n)}throw Error(O(156,t.tag))};function cv(e,t){return Mm(e,t)}function xy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new xy(e,t,n,r)}function Yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wy(e){if(typeof e=="function")return Yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dc)return 11;if(e===pc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ta(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Yc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return Kn(n.children,o,i,t);case fc:a=8,o|=8;break;case Nl:return e=xt(12,n,t,o|2),e.elementType=Nl,e.lanes=i,e;case Rl:return e=xt(13,n,t,o),e.elementType=Rl,e.lanes=i,e;case Al:return e=xt(19,n,t,o),e.elementType=Al,e.lanes=i,e;case xm:return ns(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gm:a=10;break e;case ym:a=9;break e;case dc:a=11;break e;case pc:a=14;break e;case dn:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=xt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function ns(e,t,n,r){return e=xt(22,e,r,t),e.elementType=xm,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ky(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Kc(e,t,n,r,o,i,a,s,l){return e=new ky(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(i),e}function Sy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fv(e){if(!e)return Rn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ot(n))return ch(e,n,t)}return t}function dv(e,t,n,r,o,i,a,s,l){return e=Kc(n,r,!0,e,o,i,a,s,l),e.context=fv(null),n=e.current,r=Qe(),o=$n(n),i=Yt(r,o),i.callback=t!=null?t:null,En(n,i,o),e.current.lanes=o,ni(e,o,r),it(e,r),e}function rs(e,t,n,r){var o=t.current,i=Qe(),a=$n(o);return n=fv(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(o,t,a),e!==null&&(Tt(e,o,a,i),Qi(e,o,a)),a}function Ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qc(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}function by(){return null}var pv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}os.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));rs(e,t,null,null)};os.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){rs(null,e,null,null)}),t[Xt]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Vm(e)}};function Jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function Ey(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ta(a);i.call(u)}}var a=dv(t,r,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=a,e[Xt]=a.current,Fo(e.nodeType===8?e.parentNode:e),er(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ta(l);s.call(u)}}var l=Kc(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=l,e[Xt]=l.current,Fo(e.nodeType===8?e.parentNode:e),er(function(){rs(t,l,n,r)}),l}function as(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Ta(a);s.call(l)}}rs(t,a,e,o)}else a=Ey(n,t,e,o,r);return Ta(a)}Um=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ho(t.pendingLanes);n!==0&&(vc(t,n|1),it(t,be()),(J&6)===0&&(Fr=be()+500,Dn()))}break;case 13:er(function(){var r=Jt(e,1);if(r!==null){var o=Qe();Tt(r,e,1,o)}}),Qc(e,1)}};gc=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Qe();Tt(t,e,134217728,n)}Qc(e,134217728)}};Bm=function(e){if(e.tag===13){var t=$n(e),n=Jt(e,t);if(n!==null){var r=Qe();Tt(n,e,t,r)}Qc(e,t)}};Wm=function(){return re};Hm=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Bl=function(e,t,n){switch(t){case"input":if(Ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xa(r);if(!o)throw Error(O(90));km(r),Ll(r,o)}}}break;case"textarea":bm(e,n);break;case"select":t=n.value,t!=null&&$r(e,!!n.multiple,t,!1)}};Nm=Hc;Rm=er;var Cy={usingClientEntryPoint:!1,Events:[oi,hr,Xa,Om,_m,Hc]},so={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$y={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Im(e),e===null?null:e.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Ga=Ri.inject($y),jt=Ri}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jc(t))throw Error(O(200));return Sy(e,t,null,n)};dt.createRoot=function(e,t){if(!Jc(e))throw Error(O(299));var n=!1,r="",o=pv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Kc(e,1,!1,null,null,n,!1,r,o),e[Xt]=t.current,Fo(e.nodeType===8?e.parentNode:e),new Xc(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Im(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return er(e)};dt.hydrate=function(e,t,n){if(!is(t))throw Error(O(200));return as(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Jc(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=pv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dv(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Xt]=t.current,Fo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new os(t)};dt.render=function(e,t,n){if(!is(t))throw Error(O(200));return as(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!is(e))throw Error(O(40));return e._reactRootContainer?(er(function(){as(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};dt.unstable_batchedUpdates=Hc;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!is(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return as(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dt})(Va);var Vd=Va.exports;Ol.createRoot=Vd.createRoot,Ol.hydrateRoot=Vd.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ia.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Gd="popstate";function Py(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return ku("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Su(o)}return _y(t,n,null,e)}function Oy(){return Math.random().toString(36).substr(2,8)}function Yd(e){return{usr:e.state,key:e.key}}function ku(e,t,n,r){return n===void 0&&(n=null),Ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kr(t):t,{state:n,key:t&&t.key||r||Oy()})}function Su(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _y(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=yn.Pop,l=null;function u(){s=yn.Pop,l&&l({action:s,location:p.location})}function c(v,g){s=yn.Push;let x=ku(p.location,v,g);n&&n(x,v);let E=Yd(x),m=p.createHref(x);try{a.pushState(E,"",m)}catch{o.location.assign(m)}i&&l&&l({action:s,location:x})}function f(v,g){s=yn.Replace;let x=ku(p.location,v,g);n&&n(x,v);let E=Yd(x),m=p.createHref(x);a.replaceState(E,"",m),i&&l&&l({action:s,location:x})}let p={get action(){return s},get location(){return e(o,a)},listen(v){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Gd,u),l=v,()=>{o.removeEventListener(Gd,u),l=null}},createHref(v){return t(o,v)},push:c,replace:f,go(v){return a.go(v)}};return p}var Kd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kd||(Kd={}));function Ny(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kr(t):t,o=hv(r.pathname||"/",n);if(o==null)return null;let i=mv(e);Ry(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=jy(i[s],o);return a}function mv(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(Ae(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=On([r,a.relativePath]),l=n.concat(a);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),mv(o.children,t,l,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:zy(s,o.index),routesMeta:l})}),t}function Ry(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ay=/^:\w+$/,Ty=3,Iy=2,Ly=1,My=10,Dy=-2,Qd=e=>e==="*";function zy(e,t){let n=e.split("/"),r=n.length;return n.some(Qd)&&(r+=Dy),t&&(r+=Iy),n.filter(o=>!Qd(o)).reduce((o,i)=>o+(Ay.test(i)?Ty:i===""?Ly:My),r)}function Fy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function jy(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=Uy({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;i.push({params:r,pathname:On([o,c.pathname]),pathnameBase:Gy(On([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=On([o,c.pathnameBase]))}return i}function Uy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=By(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=s[f]||"";a=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=Wy(s[f]||"",c),u},{}),pathname:i,pathnameBase:a,pattern:e}}function By(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Wy(e,t){try{return decodeURIComponent(e)}catch(n){return vv(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function hv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kr(e):e;return{pathname:n?n.startsWith("/")?n:Vy(n,t):t,search:Yy(r),hash:Ky(o)}}function Vy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gv(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kr(e):(o=Ia({},e),Ae(!o.pathname||!o.pathname.includes("?"),hl("?","pathname","search",o)),Ae(!o.pathname||!o.pathname.includes("#"),hl("#","pathname","hash",o)),Ae(!o.search||!o.search.includes("#"),hl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=Hy(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const On=e=>e.join("/").replace(/\/\/+/g,"/"),Gy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ky=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Qy{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function Xy(e){return e instanceof Qy}var ss={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=y.exports,Zy=Symbol.for("react.element"),qy=Symbol.for("react.fragment"),ex=Object.prototype.hasOwnProperty,tx=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nx={key:!0,ref:!0,__self:!0,__source:!0};function yv(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ex.call(t,r)&&!nx.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Zy,type:e,key:i,ref:a,props:o,_owner:tx.current}}ls.Fragment=qy;ls.jsx=yv;ls.jsxs=yv;(function(e){e.exports=ls})(ss);const ai=ss.exports.Fragment,w=ss.exports.jsx,L=ss.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bu(){return bu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bu.apply(this,arguments)}function rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const ox=typeof Object.is=="function"?Object.is:rx,{useState:ix,useEffect:ax,useLayoutEffect:sx,useDebugValue:lx}=ua;function ux(e,t,n){const r=t(),[{inst:o},i]=ix({inst:{value:r,getSnapshot:t}});return sx(()=>{o.value=r,o.getSnapshot=t,vl(o)&&i({inst:o})},[e,r,t]),ax(()=>(vl(o)&&i({inst:o}),e(()=>{vl(o)&&i({inst:o})})),[e]),lx(r),r}function vl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!ox(n,r)}catch{return!0}}function cx(e,t,n){return t()}const fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dx=!fx,px=dx?cx:ux;"useSyncExternalStore"in ua&&(e=>e.useSyncExternalStore)(ua);const mx=y.exports.createContext(null),hx=y.exports.createContext(null),xv=y.exports.createContext(null),Zc=y.exports.createContext(null),us=y.exports.createContext(null),sr=y.exports.createContext({outlet:null,matches:[]}),wv=y.exports.createContext(null);function vx(e,t){let{relative:n}=t===void 0?{}:t;si()||Ae(!1);let{basename:r,navigator:o}=y.exports.useContext(Zc),{hash:i,pathname:a,search:s}=Sv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:On([r,a])),o.createHref({pathname:l,search:s,hash:i})}function si(){return y.exports.useContext(us)!=null}function cs(){return si()||Ae(!1),y.exports.useContext(us).location}function kv(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function gx(){si()||Ae(!1);let{basename:e,navigator:t}=y.exports.useContext(Zc),{matches:n}=y.exports.useContext(sr),{pathname:r}=cs(),o=JSON.stringify(kv(n).map(s=>s.pathnameBase)),i=y.exports.useRef(!1);return y.exports.useEffect(()=>{i.current=!0}),y.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let u=gv(s,JSON.parse(o),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:On([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,o,r])}const yx=y.exports.createContext(null);function xx(e){let t=y.exports.useContext(sr).outlet;return t&&w(yx.Provider,{value:e,children:t})}function qc(){let{matches:e}=y.exports.useContext(sr),t=e[e.length-1];return t?t.params:{}}function Sv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.exports.useContext(sr),{pathname:o}=cs(),i=JSON.stringify(kv(r).map(a=>a.pathnameBase));return y.exports.useMemo(()=>gv(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function wx(e,t){si()||Ae(!1);let n=y.exports.useContext(xv),{matches:r}=y.exports.useContext(sr),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=cs(),l;if(t){var u;let g=typeof t=="string"?Kr(t):t;a==="/"||((u=g.pathname)==null?void 0:u.startsWith(a))||Ae(!1),l=g}else l=s;let c=l.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",p=Ny(e,{pathname:f}),v=Ex(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},i,g.params),pathname:On([a,g.pathname]),pathnameBase:g.pathnameBase==="/"?a:On([a,g.pathnameBase])})),r,n||void 0);return t?w(us.Provider,{value:{location:bu({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:yn.Pop},children:v}):v}function kx(){let e=$x(),t=Xy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return L(ai,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:t}),n?w("pre",{style:o,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),L("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:i,children:"errorElement"})," props on\xA0",w("code",{style:i,children:"<Route>"})]})]})}class Sx extends y.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w(wv.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function bx(e){let{routeContext:t,match:n,children:r}=e,o=y.exports.useContext(mx);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),w(sr.Provider,{value:t,children:r})}function Ex(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||Ae(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,s)=>{let l=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||w(kx,{}):null,c=()=>w(bx,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,s+1))},children:l?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||s===0)?w(Sx,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Xd;(function(e){e.UseRevalidator="useRevalidator"})(Xd||(Xd={}));var Eu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Eu||(Eu={}));function Cx(e){let t=y.exports.useContext(xv);return t||Ae(!1),t}function $x(){var e;let t=y.exports.useContext(wv),n=Cx(Eu.UseRouteError),r=y.exports.useContext(sr),o=r.matches[r.matches.length-1];return t||(r||Ae(!1),o.route.id||Ae(!1),(e=n.errors)==null?void 0:e[o.route.id])}function Px(e){return xx(e.context)}function jn(e){Ae(!1)}function Ox(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yn.Pop,navigator:i,static:a=!1}=e;si()&&Ae(!1);let s=t.replace(/^\/*/,"/"),l=y.exports.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=Kr(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:v="default"}=r,g=y.exports.useMemo(()=>{let x=hv(u,s);return x==null?null:{pathname:x,search:c,hash:f,state:p,key:v}},[s,u,c,f,p,v]);return g==null?null:w(Zc.Provider,{value:l,children:w(us.Provider,{children:n,value:{location:g,navigationType:o}})})}function _x(e){let{children:t,location:n}=e,r=y.exports.useContext(hx),o=r&&!t?r.router.routes:Cu(t);return wx(o,n)}var Jd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Jd||(Jd={}));new Promise(()=>{});function Cu(e,t){t===void 0&&(t=[]);let n=[];return y.exports.Children.forEach(e,(r,o)=>{if(!y.exports.isValidElement(r))return;if(r.type===y.exports.Fragment){n.push.apply(n,Cu(r.props.children,t));return}r.type!==jn&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Cu(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Rx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ax(e,t){return e.button===0&&(!t||t==="_self")&&!Rx(e)}const Tx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ix(e){let{basename:t,children:n,window:r}=e,o=y.exports.useRef();o.current==null&&(o.current=Py({window:r,v5Compat:!0}));let i=o.current,[a,s]=y.exports.useState({action:i.action,location:i.location});return y.exports.useLayoutEffect(()=>i.listen(s),[i]),w(Ox,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}const tt=y.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=Nx(t,Tx),p=vx(u,{relative:o}),v=Lx(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o});function g(x){r&&r(x),x.defaultPrevented||v(x)}return w("a",{...f,href:p,onClick:i?r:g,ref:n,target:l})});var Zd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Zd||(Zd={}));var qd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));function Lx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=gx(),l=cs(),u=Sv(e,{relative:a});return y.exports.useCallback(c=>{if(Ax(c,n)){c.preventDefault();let f=r!==void 0?r:Su(l)===Su(u);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[l,s,u,r,o,n,e,i,a])}var ef={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=Symbol.for("react.element"),nf=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),ds=Symbol.for("react.strict_mode"),ps=Symbol.for("react.profiler"),ms=Symbol.for("react.provider"),hs=Symbol.for("react.context"),Mx=Symbol.for("react.server_context"),vs=Symbol.for("react.forward_ref"),gs=Symbol.for("react.suspense"),ys=Symbol.for("react.suspense_list"),xs=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),Dx=Symbol.for("react.offscreen"),bv;bv=Symbol.for("react.module.reference");function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tf:switch(e=e.type,e){case fs:case ps:case ds:case gs:case ys:return e;default:switch(e=e&&e.$$typeof,e){case Mx:case hs:case vs:case ws:case xs:case ms:return e;default:return t}}case nf:return t}}}oe.ContextConsumer=hs;oe.ContextProvider=ms;oe.Element=tf;oe.ForwardRef=vs;oe.Fragment=fs;oe.Lazy=ws;oe.Memo=xs;oe.Portal=nf;oe.Profiler=ps;oe.StrictMode=ds;oe.Suspense=gs;oe.SuspenseList=ys;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Et(e)===hs};oe.isContextProvider=function(e){return Et(e)===ms};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tf};oe.isForwardRef=function(e){return Et(e)===vs};oe.isFragment=function(e){return Et(e)===fs};oe.isLazy=function(e){return Et(e)===ws};oe.isMemo=function(e){return Et(e)===xs};oe.isPortal=function(e){return Et(e)===nf};oe.isProfiler=function(e){return Et(e)===ps};oe.isStrictMode=function(e){return Et(e)===ds};oe.isSuspense=function(e){return Et(e)===gs};oe.isSuspenseList=function(e){return Et(e)===ys};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fs||e===ps||e===ds||e===gs||e===ys||e===Dx||typeof e=="object"&&e!==null&&(e.$$typeof===ws||e.$$typeof===xs||e.$$typeof===ms||e.$$typeof===hs||e.$$typeof===vs||e.$$typeof===bv||e.getModuleId!==void 0)};oe.typeOf=Et;(function(e){e.exports=oe})(ef);function zx(e){function t(T,M,F,V,b){for(var X=0,A=0,ge=0,ee=0,ne,Y,Le=0,Ze=0,Z,Be=Z=ne=0,te=0,Me=0,Zr=0,De=0,mi=F.length,qr=mi-1,Ct,G="",ke="",Us="",Bs="",ln;te<mi;){if(Y=F.charCodeAt(te),te===qr&&A+ee+ge+X!==0&&(A!==0&&(Y=A===47?10:47),ee=ge=X=0,mi++,qr++),A+ee+ge+X===0){if(te===qr&&(0<Me&&(G=G.replace(p,"")),0<G.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:G+=F.charAt(te)}Y=59}switch(Y){case 123:for(G=G.trim(),ne=G.charCodeAt(0),Z=1,De=++te;te<mi;){switch(Y=F.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Y=F.charCodeAt(te+1)){case 42:case 47:e:{for(Be=te+1;Be<qr;++Be)switch(F.charCodeAt(Be)){case 47:if(Y===42&&F.charCodeAt(Be-1)===42&&te+2!==Be){te=Be+1;break e}break;case 10:if(Y===47){te=Be+1;break e}}te=Be}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;te++<qr&&F.charCodeAt(te)!==Y;);}if(Z===0)break;te++}switch(Z=F.substring(De,te),ne===0&&(ne=(G=G.replace(f,"").trim()).charCodeAt(0)),ne){case 64:switch(0<Me&&(G=G.replace(p,"")),Y=G.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Me=M;break;default:Me=Bt}if(Z=t(M,Me,Z,Y,b+1),De=Z.length,0<R&&(Me=n(Bt,G,Zr),ln=s(3,Z,Me,M,Ie,we,De,Y,b,V),G=Me.join(""),ln!==void 0&&(De=(Z=ln.trim()).length)===0&&(Y=0,Z="")),0<De)switch(Y){case 115:G=G.replace($,a);case 100:case 109:case 45:Z=G+"{"+Z+"}";break;case 107:G=G.replace(d,"$1 $2"),Z=G+"{"+Z+"}",Z=Ue===1||Ue===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=G+Z,V===112&&(Z=(ke+=Z,""))}else Z="";break;default:Z=t(M,n(M,G,Zr),Z,V,b+1)}Us+=Z,Z=Zr=Me=Be=ne=0,G="",Y=F.charCodeAt(++te);break;case 125:case 59:if(G=(0<Me?G.replace(p,""):G).trim(),1<(De=G.length))switch(Be===0&&(ne=G.charCodeAt(0),ne===45||96<ne&&123>ne)&&(De=(G=G.replace(" ",":")).length),0<R&&(ln=s(1,G,M,T,Ie,we,ke.length,V,b,V))!==void 0&&(De=(G=ln.trim()).length)===0&&(G="\0\0"),ne=G.charCodeAt(0),Y=G.charCodeAt(1),ne){case 0:break;case 64:if(Y===105||Y===99){Bs+=G+F.charAt(te);break}default:G.charCodeAt(De-1)!==58&&(ke+=o(G,ne,Y,G.charCodeAt(2)))}Zr=Me=Be=ne=0,G="",Y=F.charCodeAt(++te)}}switch(Y){case 13:case 10:A===47?A=0:1+ne===0&&V!==107&&0<G.length&&(Me=1,G+="\0"),0<R*H&&s(0,G,M,T,Ie,we,ke.length,V,b,V),we=1,Ie++;break;case 59:case 125:if(A+ee+ge+X===0){we++;break}default:switch(we++,Ct=F.charAt(te),Y){case 9:case 32:if(ee+X+A===0)switch(Le){case 44:case 58:case 9:case 32:Ct="";break;default:Y!==32&&(Ct=" ")}break;case 0:Ct="\\0";break;case 12:Ct="\\f";break;case 11:Ct="\\v";break;case 38:ee+A+X===0&&(Me=Zr=1,Ct="\f"+Ct);break;case 108:if(ee+A+X+st===0&&0<Be)switch(te-Be){case 2:Le===112&&F.charCodeAt(te-3)===58&&(st=Le);case 8:Ze===111&&(st=Ze)}break;case 58:ee+A+X===0&&(Be=te);break;case 44:A+ge+ee+X===0&&(Me=1,Ct+="\r");break;case 34:case 39:A===0&&(ee=ee===Y?0:ee===0?Y:ee);break;case 91:ee+A+ge===0&&X++;break;case 93:ee+A+ge===0&&X--;break;case 41:ee+A+X===0&&ge--;break;case 40:if(ee+A+X===0){if(ne===0)switch(2*Le+3*Ze){case 533:break;default:ne=1}ge++}break;case 64:A+ge+ee+X+Be+Z===0&&(Z=1);break;case 42:case 47:if(!(0<ee+X+ge))switch(A){case 0:switch(2*Y+3*F.charCodeAt(te+1)){case 235:A=47;break;case 220:De=te,A=42}break;case 42:Y===47&&Le===42&&De+2!==te&&(F.charCodeAt(De+2)===33&&(ke+=F.substring(De,te+1)),Ct="",A=0)}}A===0&&(G+=Ct)}Ze=Le,Le=Y,te++}if(De=ke.length,0<De){if(Me=M,0<R&&(ln=s(2,ke,Me,T,Ie,we,De,V,b,V),ln!==void 0&&(ke=ln).length===0))return Bs+ke+Us;if(ke=Me.join(",")+"{"+ke+"}",Ue*st!==0){switch(Ue!==2||i(ke,2)||(st=0),st){case 111:ke=ke.replace(k,":-moz-$1")+ke;break;case 112:ke=ke.replace(h,"::-webkit-input-$1")+ke.replace(h,"::-moz-$1")+ke.replace(h,":-ms-input-$1")+ke}st=0}}return Bs+ke+Us}function n(T,M,F){var V=M.trim().split(E);M=V;var b=V.length,X=T.length;switch(X){case 0:case 1:var A=0;for(T=X===0?"":T[0]+" ";A<b;++A)M[A]=r(T,M[A],F).trim();break;default:var ge=A=0;for(M=[];A<b;++A)for(var ee=0;ee<X;++ee)M[ge++]=r(T[ee]+" ",V[A],F).trim()}return M}function r(T,M,F){var V=M.charCodeAt(0);switch(33>V&&(V=(M=M.trim()).charCodeAt(0)),V){case 38:return M.replace(m,"$1"+T.trim());case 58:return T.trim()+M.replace(m,"$1"+T.trim());default:if(0<1*F&&0<M.indexOf("\f"))return M.replace(m,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+M}function o(T,M,F,V){var b=T+";",X=2*M+3*F+4*V;if(X===944){T=b.indexOf(":",9)+1;var A=b.substring(T,b.length-1).trim();return A=b.substring(0,T).trim()+A+";",Ue===1||Ue===2&&i(A,1)?"-webkit-"+A+A:A}if(Ue===0||Ue===2&&!i(b,1))return b;switch(X){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(se,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return A=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+b+"-ms-flex-pack"+A+b;case 1005:return g.test(b)?b.replace(v,":-webkit-")+b.replace(v,":-moz-")+b:b;case 1e3:switch(A=b.substring(13).trim(),M=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(M)){case 226:A=b.replace(S,"tb");break;case 232:A=b.replace(S,"tb-rl");break;case 220:A=b.replace(S,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+A+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(M=(b=T).length-10,A=(b.charCodeAt(M)===33?b.substring(0,M):b).substring(T.indexOf(":",7)+1).trim(),X=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:b=b.replace(A,"-webkit-"+A)+";"+b;break;case 207:case 102:b=b.replace(A,"-webkit-"+(102<X?"inline-":"")+"box")+";"+b.replace(A,"-webkit-"+A)+";"+b.replace(A,"-ms-"+A+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return A=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+A+"-ms-flex-"+A+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(P,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(P,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(B.test(T)===!0)return(A=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?o(T.replace("stretch","fill-available"),M,F,V).replace(":fill-available",":stretch"):b.replace(A,"-webkit-"+A)+b.replace(A,"-moz-"+A.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,F+V===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+b}return b}function i(T,M){var F=T.indexOf(M===1?":":"{"),V=T.substring(0,M!==3?F:10);return F=T.substring(F+1,T.length-1),W(M!==2?V:V.replace(I,"$1"),F,M)}function a(T,M){var F=o(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return F!==M+";"?F.replace(N," or ($1)").substring(4):"("+M+")"}function s(T,M,F,V,b,X,A,ge,ee,ne){for(var Y=0,Le=M,Ze;Y<R;++Y)switch(Ze=Ye[Y].call(c,T,Le,F,V,b,X,A,ge,ee,ne)){case void 0:case!1:case!0:case null:break;default:Le=Ze}if(Le!==M)return Le}function l(T){switch(T){case void 0:case null:R=Ye.length=0;break;default:if(typeof T=="function")Ye[R++]=T;else if(typeof T=="object")for(var M=0,F=T.length;M<F;++M)l(T[M]);else H=!!T|0}return l}function u(T){return T=T.prefix,T!==void 0&&(W=null,T?typeof T!="function"?Ue=1:(Ue=2,W=T):Ue=0),u}function c(T,M){var F=T;if(33>F.charCodeAt(0)&&(F=F.trim()),ae=F,F=[ae],0<R){var V=s(-1,M,F,F,Ie,we,0,0,0,0);V!==void 0&&typeof V=="string"&&(M=V)}var b=t(Bt,F,M,0,0);return 0<R&&(V=s(-2,b,F,F,Ie,we,b.length,0,0,0),V!==void 0&&(b=V)),ae="",st=0,we=Ie=1,b}var f=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,k=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,P=/-self|flex-/g,I=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,we=1,Ie=1,st=0,Ue=1,Bt=[],Ye=[],R=0,W=null,H=0,ae="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var Fx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ux=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ep=jx(function(e){return Ux.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ev={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=typeof Symbol=="function"&&Symbol.for,rf=Te?Symbol.for("react.element"):60103,of=Te?Symbol.for("react.portal"):60106,ks=Te?Symbol.for("react.fragment"):60107,Ss=Te?Symbol.for("react.strict_mode"):60108,bs=Te?Symbol.for("react.profiler"):60114,Es=Te?Symbol.for("react.provider"):60109,Cs=Te?Symbol.for("react.context"):60110,af=Te?Symbol.for("react.async_mode"):60111,$s=Te?Symbol.for("react.concurrent_mode"):60111,Ps=Te?Symbol.for("react.forward_ref"):60112,Os=Te?Symbol.for("react.suspense"):60113,Bx=Te?Symbol.for("react.suspense_list"):60120,_s=Te?Symbol.for("react.memo"):60115,Ns=Te?Symbol.for("react.lazy"):60116,Wx=Te?Symbol.for("react.block"):60121,Hx=Te?Symbol.for("react.fundamental"):60117,Vx=Te?Symbol.for("react.responder"):60118,Gx=Te?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rf:switch(e=e.type,e){case af:case $s:case ks:case bs:case Ss:case Os:return e;default:switch(e=e&&e.$$typeof,e){case Cs:case Ps:case Ns:case _s:case Es:return e;default:return t}}case of:return t}}}function Cv(e){return mt(e)===$s}ie.AsyncMode=af;ie.ConcurrentMode=$s;ie.ContextConsumer=Cs;ie.ContextProvider=Es;ie.Element=rf;ie.ForwardRef=Ps;ie.Fragment=ks;ie.Lazy=Ns;ie.Memo=_s;ie.Portal=of;ie.Profiler=bs;ie.StrictMode=Ss;ie.Suspense=Os;ie.isAsyncMode=function(e){return Cv(e)||mt(e)===af};ie.isConcurrentMode=Cv;ie.isContextConsumer=function(e){return mt(e)===Cs};ie.isContextProvider=function(e){return mt(e)===Es};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rf};ie.isForwardRef=function(e){return mt(e)===Ps};ie.isFragment=function(e){return mt(e)===ks};ie.isLazy=function(e){return mt(e)===Ns};ie.isMemo=function(e){return mt(e)===_s};ie.isPortal=function(e){return mt(e)===of};ie.isProfiler=function(e){return mt(e)===bs};ie.isStrictMode=function(e){return mt(e)===Ss};ie.isSuspense=function(e){return mt(e)===Os};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ks||e===$s||e===bs||e===Ss||e===Os||e===Bx||typeof e=="object"&&e!==null&&(e.$$typeof===Ns||e.$$typeof===_s||e.$$typeof===Es||e.$$typeof===Cs||e.$$typeof===Ps||e.$$typeof===Hx||e.$$typeof===Vx||e.$$typeof===Gx||e.$$typeof===Wx)};ie.typeOf=mt;(function(e){e.exports=ie})(Ev);var sf=Ev.exports,Yx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$v={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lf={};lf[sf.ForwardRef]=Qx;lf[sf.Memo]=$v;function tp(e){return sf.isMemo(e)?$v:lf[e.$$typeof]||Yx}var Xx=Object.defineProperty,Jx=Object.getOwnPropertyNames,np=Object.getOwnPropertySymbols,Zx=Object.getOwnPropertyDescriptor,qx=Object.getPrototypeOf,rp=Object.prototype;function Pv(e,t,n){if(typeof t!="string"){if(rp){var r=qx(t);r&&r!==rp&&Pv(e,r,n)}var o=Jx(t);np&&(o=o.concat(np(t)));for(var i=tp(e),a=tp(t),s=0;s<o.length;++s){var l=o[s];if(!Kx[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var u=Zx(t,l);try{Xx(e,l,u)}catch{}}}}return e}var ew=Pv;function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var op=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},$u=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ef.exports.typeOf(e)},La=Object.freeze([]),_n=Object.freeze({});function jr(e){return typeof e=="function"}function ip(e){return e.displayName||e.name||"Component"}function uf(e){return e&&typeof e.styledComponentId=="string"}var Ur=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",cf=typeof window<"u"&&"HTMLElement"in window,tw=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),nw={};function tr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var rw=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&tr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),na=new Map,Ma=new Map,Oo=1,Ai=function(e){if(na.has(e))return na.get(e);for(;Ma.has(Oo);)Oo++;var t=Oo++;return na.set(e,t),Ma.set(t,e),t},ow=function(e){return Ma.get(e)},iw=function(e,t){t>=Oo&&(Oo=t+1),na.set(e,t),Ma.set(t,e)},aw="style["+Ur+'][data-styled-version="5.3.6"]',sw=new RegExp("^"+Ur+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lw=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},uw=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(sw);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(iw(u,l),lw(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},cw=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ov=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ur))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Ur,"active"),r.setAttribute("data-styled-version","5.3.6");var a=cw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},fw=function(){function e(n){var r=this.element=Ov(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}tr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),dw=function(){function e(n){var r=this.element=Ov(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),pw=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ap=cf,mw={isServer:!cf,useCSSOMInjection:!tw},Da=function(){function e(n,r,o){n===void 0&&(n=_n),r===void 0&&(r={}),this.options=Nt({},mw,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&cf&&ap&&(ap=!1,function(i){for(var a=document.querySelectorAll(aw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ur)!=="active"&&(uw(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ai(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Nt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new pw(a):i?new fw(a):new dw(a),new rw(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ai(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ai(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ai(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=ow(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=Ur+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),i+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),hw=/(a)(d)/gi,sp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sp(t%52)+n;return(sp(t%52)+n).replace(hw,"$1-$2")}var Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_v=function(e){return Sr(5381,e)};function Nv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jr(n)&&!uf(n))return!1}return!0}var vw=_v("5.3.6"),gw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Nv(t),this.componentId=n,this.baseHash=Sr(vw,n),this.baseStyle=r,Da.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=nr(this.rules,t,n,r).join(""),s=Pu(Sr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=Sr(this.baseHash,r.hash),f="",p=0;p<u;p++){var v=this.rules[p];if(typeof v=="string")f+=v;else if(v){var g=nr(v,t,n,r),x=Array.isArray(g)?g.join(""):g;c=Sr(c,x+p),f+=x}}if(f){var E=Pu(c>>>0);if(!n.hasNameForId(o,E)){var m=r(f,"."+E,void 0,o);n.insertRules(o,E,m)}i.push(E)}}return i.join(" ")},e}(),yw=/^\s*\/\/.*$/gm,xw=[":","[",".","#"];function ww(e){var t,n,r,o,i=e===void 0?_n:e,a=i.options,s=a===void 0?_n:a,l=i.plugins,u=l===void 0?La:l,c=new zx(s),f=[],p=function(x){function E(m){if(m)try{x(m+"}")}catch{}}return function(m,d,h,k,S,$,N,P,I,B){switch(m){case 1:if(I===0&&d.charCodeAt(0)===64)return x(d+";"),"";break;case 2:if(P===0)return d+"/*|*/";break;case 3:switch(P){case 102:case 112:return x(h[0]+d),"";default:return d+(B===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(E)}}}(function(x){f.push(x)}),v=function(x,E,m){return E===0&&xw.indexOf(m[n.length])!==-1||m.match(o)?x:"."+t};function g(x,E,m,d){d===void 0&&(d="&");var h=x.replace(yw,""),k=E&&m?m+" "+E+" { "+h+" }":h;return t=d,n=E,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(m||!E?"":E,k)}return c.use([].concat(u,[function(x,E,m){x===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,v))},p,function(x){if(x===-2){var E=f;return f=[],E}}])),g.hash=u.length?u.reduce(function(x,E){return E.name||tr(15),Sr(x,E.name)},5381).toString():"",g}var Rv=Se.createContext();Rv.Consumer;var Av=Se.createContext(),kw=(Av.Consumer,new Da),Ou=ww();function Tv(){return y.exports.useContext(Rv)||kw}function Iv(){return y.exports.useContext(Av)||Ou}var Lv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ou);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return tr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ou),this.name+t.hash},e}(),Sw=/([A-Z])/,bw=/([A-Z])/g,Ew=/^ms-/,Cw=function(e){return"-"+e.toLowerCase()};function lp(e){return Sw.test(e)?e.replace(bw,Cw).replace(Ew,"-ms-"):e}var up=function(e){return e==null||e===!1||e===""};function nr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=nr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(up(e))return"";if(uf(e))return"."+e.styledComponentId;if(jr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return nr(l,t,n,r)}var u;return e instanceof Lv?n?(e.inject(n,r),e.getName(r)):e:$u(e)?function c(f,p){var v,g,x=[];for(var E in f)f.hasOwnProperty(E)&&!up(f[E])&&(Array.isArray(f[E])&&f[E].isCss||jr(f[E])?x.push(lp(E)+":",f[E],";"):$u(f[E])?x.push.apply(x,c(f[E],E)):x.push(lp(E)+": "+(v=E,(g=f[E])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Fx?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var cp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return jr(e)||$u(e)?cp(nr(op(La,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:cp(nr(op(e,n)))}var Mv=function(e,t,n){return n===void 0&&(n=_n),e.theme!==n.theme&&e.theme||t||n.theme},$w=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pw=/(^-|-$)/g;function gl(e){return e.replace($w,"-").replace(Pw,"")}var ff=function(e){return Pu(_v(e)>>>0)};function Ti(e){return typeof e=="string"&&!0}var _u=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ow=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function _w(e,t,n){var r=e[n];_u(t)&&_u(r)?Dv(r,t):e[n]=t}function Dv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(_u(a))for(var s in a)Ow(s)&&_w(e,a[s],s)}return e}var Br=Se.createContext();Br.Consumer;function Nw(e){var t=y.exports.useContext(Br),n=y.exports.useMemo(function(){return function(r,o){if(!r)return tr(14);if(jr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?tr(8):o?Nt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Se.createElement(Br.Provider,{value:n},e.children):null}var yl={};function zv(e,t,n){var r=uf(e),o=!Ti(e),i=t.attrs,a=i===void 0?La:i,s=t.componentId,l=s===void 0?function(d,h){var k=typeof d!="string"?"sc":gl(d);yl[k]=(yl[k]||0)+1;var S=k+"-"+ff("5.3.6"+k+yl[k]);return h?h+"-"+S:S}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(d){return Ti(d)?"styled."+d:"Styled("+ip(d)+")"}(e):u,f=t.displayName&&t.componentId?gl(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,h,k){return e.shouldForwardProp(d,h,k)&&t.shouldForwardProp(d,h,k)}:e.shouldForwardProp);var g,x=new gw(n,f,r?e.componentStyle:void 0),E=x.isStatic&&a.length===0,m=function(d,h){return function(k,S,$,N){var P=k.attrs,I=k.componentStyle,B=k.defaultProps,se=k.foldedComponentIds,we=k.shouldForwardProp,Ie=k.styledComponentId,st=k.target,Ue=function(V,b,X){V===void 0&&(V=_n);var A=Nt({},b,{theme:V}),ge={};return X.forEach(function(ee){var ne,Y,Le,Ze=ee;for(ne in jr(Ze)&&(Ze=Ze(A)),Ze)A[ne]=ge[ne]=ne==="className"?(Y=ge[ne],Le=Ze[ne],Y&&Le?Y+" "+Le:Y||Le):Ze[ne]}),[A,ge]}(Mv(S,y.exports.useContext(Br),B)||_n,S,P),Bt=Ue[0],Ye=Ue[1],R=function(V,b,X,A){var ge=Tv(),ee=Iv(),ne=b?V.generateAndInjectStyles(_n,ge,ee):V.generateAndInjectStyles(X,ge,ee);return ne}(I,N,Bt),W=$,H=Ye.$as||S.$as||Ye.as||S.as||st,ae=Ti(H),T=Ye!==S?Nt({},S,{},Ye):S,M={};for(var F in T)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?M.as=T[F]:(we?we(F,ep,H):!ae||ep(F))&&(M[F]=T[F]));return S.style&&Ye.style!==S.style&&(M.style=Nt({},S.style,{},Ye.style)),M.className=Array.prototype.concat(se,Ie,R!==Ie?R:null,S.className,Ye.className).filter(Boolean).join(" "),M.ref=W,y.exports.createElement(H,M)}(g,d,h,E)};return m.displayName=c,(g=Se.forwardRef(m)).attrs=p,g.componentStyle=x,g.displayName=c,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):La,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(d){var h=t.componentId,k=function($,N){if($==null)return{};var P,I,B={},se=Object.keys($);for(I=0;I<se.length;I++)P=se[I],N.indexOf(P)>=0||(B[P]=$[P]);return B}(t,["componentId"]),S=h&&h+"-"+(Ti(d)?d:gl(ip(d)));return zv(d,Nt({},k,{attrs:p,componentId:S}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Dv({},e.defaultProps,d):d}}),g.toString=function(){return"."+g.styledComponentId},o&&ew(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Nu=function(e){return function t(n,r,o){if(o===void 0&&(o=_n),!ef.exports.isValidElementType(r))return tr(1,String(r));var i=function(){return n(r,o,D.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Nt({},o,{},a))},i.attrs=function(a){return t(n,r,Nt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(zv,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Nu[e]=Nu(e)});var Rw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Nv(n),Da.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(nr(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Da.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Aw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=D.apply(void 0,[e].concat(n)),i="sc-global-"+ff(JSON.stringify(o)),a=new Rw(o,i);function s(u){var c=Tv(),f=Iv(),p=y.exports.useContext(Br),v=y.exports.useRef(c.allocateGSInstance(i)).current;return c.server&&l(v,u,c,p,f),y.exports.useLayoutEffect(function(){if(!c.server)return l(v,u,c,p,f),function(){return a.removeStyles(v,c)}},[v,u,c,p,f]),null}function l(u,c,f,p,v){if(a.isStatic)a.renderStyles(u,nw,f,v);else{var g=Nt({},c,{theme:Mv(c,p,s.defaultProps)});a.renderStyles(u,g,f,v)}}return Se.memo(s)}function Fv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=D.apply(void 0,[e].concat(n)).join(""),i=ff(o);return new Lv(i,o)}var lr=function(){return y.exports.useContext(Br)};const _=Nu;const jv=_.div`
  width: 100%;
  max-width: ${e=>e.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,Tw="/pokedex/assets/pokemonLogo.e4fa62f7.svg";var Iw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ru={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Uv={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},Lw={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},Au={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function fp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fp(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function za(e){return za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},za(e)}function Mw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Dw(e,t,n){return t&&dp(e.prototype,t),n&&dp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function df(e,t){return Fw(e)||Uw(e,t)||Bv(e,t)||Ww()}function li(e){return zw(e)||jw(e)||Bv(e)||Bw()}function zw(e){if(Array.isArray(e))return Tu(e)}function Fw(e){if(Array.isArray(e))return e}function jw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(l){i=!0,s=l}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Bv(e,t){if(!!e){if(typeof e=="string")return Tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tu(e,t)}}function Tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ww(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pp=function(){},pf={},Wv={},Hv=null,Vv={mark:pp,measure:pp};try{typeof window<"u"&&(pf=window),typeof document<"u"&&(Wv=document),typeof MutationObserver<"u"&&(Hv=MutationObserver),typeof performance<"u"&&(Vv=performance)}catch{}var Hw=pf.navigator||{},mp=Hw.userAgent,hp=mp===void 0?"":mp,An=pf,de=Wv,vp=Hv,Ii=Vv;An.document;var on=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",Gv=~hp.indexOf("MSIE")||~hp.indexOf("Trident/"),Li,Mi,Di,zi,Fi,qt="___FONT_AWESOME___",Iu=16,Yv="fa",Kv="svg-inline--fa",rr="data-fa-i2svg",Lu="data-fa-pseudo-element",Vw="data-fa-pseudo-element-pending",mf="data-prefix",hf="data-icon",gp="fontawesome-i2svg",Gw="async",Yw=["HTML","HEAD","STYLE","SCRIPT"],Qv=function(){try{return!0}catch{return!1}}(),ce="classic",xe="sharp",vf=[ce,xe];function ui(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var Ko=ui((Li={},Oe(Li,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(Li,xe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Li)),Qo=ui((Mi={},Oe(Mi,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(Mi,xe,{solid:"fass"}),Mi)),Xo=ui((Di={},Oe(Di,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(Di,xe,{fass:"fa-solid"}),Di)),Kw=ui((zi={},Oe(zi,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(zi,xe,{"fa-solid":"fass"}),zi)),Qw=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Xv="fa-layers-text",Xw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jw=ui((Fi={},Oe(Fi,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(Fi,xe,{900:"fass"}),Fi)),Jv=[1,2,3,4,5,6,7,8,9,10],Zw=Jv.concat([11,12,13,14,15,16,17,18,19,20]),qw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jo=new Set;Object.keys(Qo[ce]).map(Jo.add.bind(Jo));Object.keys(Qo[xe]).map(Jo.add.bind(Jo));var e2=[].concat(vf,li(Jo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(Jv.map(function(e){return"".concat(e,"x")})).concat(Zw.map(function(e){return"w-".concat(e)})),_o=An.FontAwesomeConfig||{};function t2(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function n2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var r2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];r2.forEach(function(e){var t=df(e,2),n=t[0],r=t[1],o=n2(t2(n));o!=null&&(_o[r]=o)})}var Zv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yv,replacementClass:Kv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_o.familyPrefix&&(_o.cssPrefix=_o.familyPrefix);var Wr=z(z({},Zv),_o);Wr.autoReplaceSvg||(Wr.observeMutations=!1);var U={};Object.keys(Zv).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(n){Wr[e]=n,No.forEach(function(r){return r(U)})},get:function(){return Wr[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Wr.cssPrefix=t,No.forEach(function(n){return n(U)})},get:function(){return Wr.cssPrefix}});An.FontAwesomeConfig=U;var No=[];function o2(e){return No.push(e),function(){No.splice(No.indexOf(e),1)}}var cn=Iu,Ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function i2(e){if(!(!e||!on)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return de.head.insertBefore(t,r),e}}var a2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zo(){for(var e=12,t="";e-- >0;)t+=a2[Math.random()*62|0];return t}function Qr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gf(e){return e.classList?Qr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qv(e[n]),'" ')},"").trim()}function Rs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yf(e){return e.size!==Ft.size||e.x!==Ft.x||e.y!==Ft.y||e.rotate!==Ft.rotate||e.flipX||e.flipY}function l2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:u}}function u2(e){var t=e.transform,n=e.width,r=n===void 0?Iu:n,o=e.height,i=o===void 0?Iu:o,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&Gv?l+="translate(".concat(t.x/cn-r/2,"em, ").concat(t.y/cn-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/cn,"em), calc(-50% + ").concat(t.y/cn,"em)) "):l+="translate(".concat(t.x/cn,"em, ").concat(t.y/cn,"em) "),l+="scale(".concat(t.size/cn*(t.flipX?-1:1),", ").concat(t.size/cn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var c2=`:root, :host {
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
}`;function eg(){var e=Yv,t=Kv,n=U.cssPrefix,r=U.replacementClass,o=c2;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var yp=!1;function xl(){U.autoAddCss&&!yp&&(i2(eg()),yp=!0)}var f2={mixout:function(){return{dom:{css:eg,insertCss:xl}}},hooks:function(){return{beforeDOMElementCreation:function(){xl()},beforeI2svg:function(){xl()}}}},en=An||{};en[qt]||(en[qt]={});en[qt].styles||(en[qt].styles={});en[qt].hooks||(en[qt].hooks={});en[qt].shims||(en[qt].shims=[]);var Rt=en[qt],tg=[],d2=function e(){de.removeEventListener("DOMContentLoaded",e),Fa=1,tg.map(function(t){return t()})},Fa=!1;on&&(Fa=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),Fa||de.addEventListener("DOMContentLoaded",d2));function p2(e){!on||(Fa?setTimeout(e,0):tg.push(e))}function ci(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?qv(e):"<".concat(t," ").concat(s2(r),">").concat(i.map(ci).join(""),"</").concat(t,">")}function xp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var m2=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}},wl=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=o!==void 0?m2(n,o):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<a;l++)u=i[l],c=s(c,t[u],u,t);return c};function h2(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Mu(e){var t=h2(e);return t.length===1?t[0].toString(16):null}function v2(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function wp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function Du(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=wp(t);typeof Rt.hooks.addPack=="function"&&!o?Rt.hooks.addPack(e,wp(t)):Rt.styles[e]=z(z({},Rt.styles[e]||{}),i),e==="fas"&&Du("fa",t)}var ji,Ui,Bi,br=Rt.styles,g2=Rt.shims,y2=(ji={},Oe(ji,ce,Object.values(Xo[ce])),Oe(ji,xe,Object.values(Xo[xe])),ji),xf=null,ng={},rg={},og={},ig={},ag={},x2=(Ui={},Oe(Ui,ce,Object.keys(Ko[ce])),Oe(Ui,xe,Object.keys(Ko[xe])),Ui);function w2(e){return~e2.indexOf(e)}function k2(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!w2(o)?o:null}var sg=function(){var t=function(i){return wl(br,function(a,s,l){return a[l]=wl(s,i,{}),a},{})};ng=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){o[l.toString(16)]=a})}return o}),rg=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){o[l]=a})}return o}),ag=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(l){o[l]=a}),o});var n="far"in br||U.autoFetchSvg,r=wl(g2,function(o,i){var a=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});og=r.names,ig=r.unicodes,xf=As(U.styleDefault,{family:U.familyDefault})};o2(function(e){xf=As(e.styleDefault,{family:U.familyDefault})});sg();function wf(e,t){return(ng[e]||{})[t]}function S2(e,t){return(rg[e]||{})[t]}function Gn(e,t){return(ag[e]||{})[t]}function lg(e){return og[e]||{prefix:null,iconName:null}}function b2(e){var t=ig[e],n=wf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Tn(){return xf}var kf=function(){return{prefix:null,iconName:null,rest:[]}};function As(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,o=Ko[r][e],i=Qo[r][e]||Qo[r][o],a=e in Rt.styles?e:null;return i||a||null}var kp=(Bi={},Oe(Bi,ce,Object.keys(Xo[ce])),Oe(Bi,xe,Object.keys(Xo[xe])),Bi);function Ts(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},Oe(t,ce,"".concat(U.cssPrefix,"-").concat(ce)),Oe(t,xe,"".concat(U.cssPrefix,"-").concat(xe)),t),a=null,s=ce;(e.includes(i[ce])||e.some(function(u){return kp[ce].includes(u)}))&&(s=ce),(e.includes(i[xe])||e.some(function(u){return kp[xe].includes(u)}))&&(s=xe);var l=e.reduce(function(u,c){var f=k2(U.cssPrefix,c);if(br[c]?(c=y2[s].includes(c)?Kw[s][c]:c,a=c,u.prefix=c):x2[s].indexOf(c)>-1?(a=c,u.prefix=As(c,{family:s})):f?u.iconName=f:c!==U.replacementClass&&c!==i[ce]&&c!==i[xe]&&u.rest.push(c),!o&&u.prefix&&u.iconName){var p=a==="fa"?lg(u.iconName):{},v=Gn(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!br.far&&br.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},kf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===xe&&(br.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=Gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Tn()||"fas"),l}var E2=function(){function e(){Mw(this,e),this.definitions={}}return Dw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=z(z({},n.definitions[s]||{}),a[s]),Du(s,a[s]);var l=Xo[ce][s];l&&Du(l,a[s]),sg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Sp=[],Er={},Ar={},C2=Object.keys(Ar);function $2(e,t){var n=t.mixoutsTo;return Sp=e,Er={},Object.keys(Ar).forEach(function(r){C2.indexOf(r)===-1&&delete Ar[r]}),Sp.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),za(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){Er[a]||(Er[a]=[]),Er[a].push(i[a])})}r.provides&&r.provides(Ar)}),n}function zu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=Er[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function or(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Er[e]||[];o.forEach(function(i){i.apply(null,n)})}function tn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ar[e]?Ar[e].apply(null,t):void 0}function Fu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Tn();if(!!t)return t=Gn(n,t)||t,xp(ug.definitions,n,t)||xp(Rt.styles,n,t)}var ug=new E2,P2=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,or("noAuto")},O2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return on?(or("beforeI2svg",t),tn("pseudoElements2svg",t),tn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,p2(function(){N2({autoReplaceSvgRoot:n}),or("watch",t)})}},_2={icon:function(t){if(t===null)return null;if(za(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=As(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(Qw))){var o=Ts(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||Tn(),iconName:Gn(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=Tn();return{prefix:i,iconName:Gn(i,t)||t}}}},ht={noAuto:P2,config:U,dom:O2,parse:_2,library:ug,findIconDefinition:Fu,toHtml:ci},N2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?de:n;(Object.keys(Rt.styles).length>0||U.autoFetchSvg)&&on&&U.autoReplaceSvg&&ht.dom.i2svg({node:r})};function Is(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ci(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!on){var r=de.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function R2(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(yf(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};o.style=Rs(z(z({},i),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function A2(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},o),{},{id:a}),children:r}]}]}function Sf(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,v=p===void 0?!1:p,g=r.found?r:n,x=g.width,E=g.height,m=o==="fak",d=[U.replacementClass,i?"".concat(U.cssPrefix,"-").concat(i):""].filter(function(I){return f.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(f.classes).join(" "),h={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":o,"data-icon":i,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(E)})},k=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/E*16*.0625,"em")}:{};v&&(h.attributes[rr]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Zo())},children:[l]}),delete h.attributes.title);var S=z(z({},h),{},{prefix:o,iconName:i,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:z(z({},k),f.styles)}),$=r.found&&n.found?tn("generateAbstractMask",S)||{children:[],attributes:{}}:tn("generateAbstractIcon",S)||{children:[],attributes:{}},N=$.children,P=$.attributes;return S.children=N,S.attributes=P,s?A2(S):R2(S)}function bp(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=z(z(z({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});l&&(u[rr]="");var c=z({},a.styles);yf(o)&&(c.transform=u2({transform:o,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Rs(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function T2(e){var t=e.content,n=e.title,r=e.extra,o=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rs(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var kl=Rt.styles;function ju(e){var t=e[0],n=e[1],r=e.slice(4),o=df(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var I2={found:!1,width:512,height:512};function L2(e,t){!Qv&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Uu(e,t){var n=t;return t==="fa"&&U.styleDefault!==null&&(t=Tn()),new Promise(function(r,o){if(tn("missingIconAbstract"),n==="fa"){var i=lg(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kl[t]&&kl[t][e]){var a=kl[t][e];return r(ju(a))}L2(e,t),r(z(z({},I2),{},{icon:U.showMissingIcons&&e?tn("missingIconAbstract")||{}:{}}))})}var Ep=function(){},Bu=U.measurePerformance&&Ii&&Ii.mark&&Ii.measure?Ii:{mark:Ep,measure:Ep},go='FA "6.2.0"',M2=function(t){return Bu.mark("".concat(go," ").concat(t," begins")),function(){return cg(t)}},cg=function(t){Bu.mark("".concat(go," ").concat(t," ends")),Bu.measure("".concat(go," ").concat(t),"".concat(go," ").concat(t," begins"),"".concat(go," ").concat(t," ends"))},bf={begin:M2,end:cg},ra=function(){};function Cp(e){var t=e.getAttribute?e.getAttribute(rr):null;return typeof t=="string"}function D2(e){var t=e.getAttribute?e.getAttribute(mf):null,n=e.getAttribute?e.getAttribute(hf):null;return t&&n}function z2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function F2(){if(U.autoReplaceSvg===!0)return oa.replace;var e=oa[U.autoReplaceSvg];return e||oa.replace}function j2(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function U2(e){return de.createElement(e)}function fg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?j2:U2:n;if(typeof e=="string")return de.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(fg(a,{ceFn:r}))}),o}function B2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(fg(o),n)}),n.getAttribute(rr)===null&&U.keepOriginalSource){var r=de.createComment(B2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~gf(n).indexOf(U.replacementClass))return oa.replace(t);var o=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===U.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(s){return ci(s)}).join(`
`);n.setAttribute(rr,""),n.innerHTML=a}};function $p(e){e()}function dg(e,t){var n=typeof t=="function"?t:ra;if(e.length===0)n();else{var r=$p;U.mutateApproach===Gw&&(r=An.requestAnimationFrame||$p),r(function(){var o=F2(),i=bf.begin("mutate");e.map(o),i(),n()})}}var Ef=!1;function pg(){Ef=!0}function Wu(){Ef=!1}var ja=null;function Pp(e){if(!!vp&&!!U.observeMutations){var t=e.treeCallback,n=t===void 0?ra:t,r=e.nodeCallback,o=r===void 0?ra:r,i=e.pseudoElementsCallback,a=i===void 0?ra:i,s=e.observeMutationsRoot,l=s===void 0?de:s;ja=new vp(function(u){if(!Ef){var c=Tn();Qr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Cp(f.addedNodes[0])&&(U.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&U.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Cp(f.target)&&~qw.indexOf(f.attributeName))if(f.attributeName==="class"&&D2(f.target)){var p=Ts(gf(f.target)),v=p.prefix,g=p.iconName;f.target.setAttribute(mf,v||c),g&&f.target.setAttribute(hf,g)}else z2(f.target)&&o(f.target)})}}),on&&ja.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W2(){!ja||ja.disconnect()}function H2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function V2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=Ts(gf(e));return o.prefix||(o.prefix=Tn()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=S2(o.prefix,e.innerText)||wf(o.prefix,Mu(e.innerText))),!o.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function G2(e){var t=Qr(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return U.autoA11y&&(n?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||Zo()):(t["aria-hidden"]="true",t.focusable="false")),t}function Y2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Op(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=V2(e),r=n.iconName,o=n.prefix,i=n.rest,a=G2(e),s=zu("parseNodeAttributes",{},e),l=t.styleParser?H2(e):[];return z({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:Ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var K2=Rt.styles;function mg(e){var t=U.autoReplaceSvg==="nest"?Op(e,{styleParser:!1}):Op(e);return~t.extra.classes.indexOf(Xv)?tn("generateLayersText",e,t):tn("generateSvgReplacementMutation",e,t)}var In=new Set;vf.map(function(e){In.add("fa-".concat(e))});Object.keys(Ko[ce]).map(In.add.bind(In));Object.keys(Ko[xe]).map(In.add.bind(In));In=li(In);function _p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!on)return Promise.resolve();var n=de.documentElement.classList,r=function(f){return n.add("".concat(gp,"-").concat(f))},o=function(f){return n.remove("".concat(gp,"-").concat(f))},i=U.autoFetchSvg?In:vf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(K2));i.includes("fa")||i.push("fa");var a=[".".concat(Xv,":not([").concat(rr,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(rr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Qr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),o("complete");else return Promise.resolve();var l=bf.begin("onTree"),u=s.reduce(function(c,f){try{var p=mg(f);p&&c.push(p)}catch(v){Qv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){dg(p,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function Q2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mg(e).then(function(n){n&&dg([n],t)})}function X2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fu(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Fu(o||{})),e(r,z(z({},n),{},{mask:o}))}}var J2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?Ft:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,v=n.titleId,g=v===void 0?null:v,x=n.classes,E=x===void 0?[]:x,m=n.attributes,d=m===void 0?{}:m,h=n.styles,k=h===void 0?{}:h;if(!!t){var S=t.prefix,$=t.iconName,N=t.icon;return Is(z({type:"icon"},t),function(){return or("beforeDOMElementCreation",{iconDefinition:t,params:n}),U.autoA11y&&(p?d["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(g||Zo()):(d["aria-hidden"]="true",d.focusable="false")),Sf({icons:{main:ju(N),mask:l?ju(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:$,transform:z(z({},Ft),o),symbol:a,title:p,maskId:c,titleId:g,extra:{attributes:d,styles:k,classes:E}})})}},Z2={mixout:function(){return{icon:X2(J2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_p,n.nodeCallback=Q2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?de:r,i=n.callback,a=i===void 0?function(){}:i;return _p(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(v,g){Promise.all([Uu(o,s),c.iconName?Uu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var E=df(x,2),m=E[0],d=E[1];v([n,Sf({icons:{main:m,mask:d},prefix:s,iconName:o,transform:l,symbol:u,maskId:f,title:i,titleId:a,extra:p,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,l=Rs(s);l.length>0&&(o.style=l);var u;return yf(a)&&(u=tn("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:o}}}},q2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return Is({type:"layer"},function(){or("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(li(i)).join(" ")},children:a}]})}}}},ek={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Is({type:"counter",content:n},function(){return or("beforeDOMElementCreation",{content:n,params:r}),T2({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(li(s))}})})}}}},tk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?Ft:o,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Is({type:"text",content:n},function(){return or("beforeDOMElementCreation",{content:n,params:r}),bp({content:n,transform:z(z({},Ft),i),title:s,extra:{attributes:f,styles:v,classes:["".concat(U.cssPrefix,"-layers-text")].concat(li(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,s=null,l=null;if(Gv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return U.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,bp({content:n.innerHTML,width:s,height:l,transform:i,title:o,extra:a,watchable:!0})])}}},nk=new RegExp('"',"ug"),Np=[1105920,1112319];function rk(e){var t=e.replace(nk,""),n=v2(t,0),r=n>=Np[0]&&n<=Np[1],o=t.length===2?t[0]===t[1]:!1;return{value:Mu(o?t[0]:t),isSecondary:r||o}}function Rp(e,t){var n="".concat(Vw).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=Qr(e.children),a=i.filter(function(N){return N.getAttribute(Lu)===t})[0],s=An.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Xw),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?xe:ce,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qo[p][l[2].toLowerCase()]:Jw[p][u],g=rk(f),x=g.value,E=g.isSecondary,m=l[0].startsWith("FontAwesome"),d=wf(v,x),h=d;if(m){var k=b2(x);k.iconName&&k.prefix&&(d=k.iconName,v=k.prefix)}if(d&&!E&&(!a||a.getAttribute(mf)!==v||a.getAttribute(hf)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);var S=Y2(),$=S.extra;$.attributes[Lu]=t,Uu(d,v).then(function(N){var P=Sf(z(z({},S),{},{icons:{main:N,mask:kf()},prefix:v,iconName:h,extra:$,watchable:!0})),I=de.createElement("svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=P.map(function(B){return ci(B)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function ok(e){return Promise.all([Rp(e,"::before"),Rp(e,"::after")])}function ik(e){return e.parentNode!==document.head&&!~Yw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ap(e){if(!!on)return new Promise(function(t,n){var r=Qr(e.querySelectorAll("*")).filter(ik).map(ok),o=bf.begin("searchPseudoElements");pg(),Promise.all(r).then(function(){o(),Wu(),t()}).catch(function(){o(),Wu(),n()})})}var ak={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ap,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?de:r;U.searchPseudoElements&&Ap(o)}}},Tp=!1,sk={mixout:function(){return{dom:{unwatch:function(){pg(),Tp=!0}}}},hooks:function(){return{bootstrap:function(){Pp(zu("mutationObserverCallbacks",{}))},noAuto:function(){W2()},watch:function(n){var r=n.observeMutationsRoot;Tp?Wu():Pp(zu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ip=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},lk={mixout:function(){return{parse:{transform:function(n){return Ip(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=Ip(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),u="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},v={outer:s,inner:f,path:p};return{tag:"g",attributes:z({},v.outer),children:[{tag:"g",attributes:z({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),v.path)}]}]}}}},Sl={x:0,y:0,width:"100%",height:"100%"};function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function uk(e){return e.tag==="g"?e.children:[e]}var ck={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?Ts(o.split(" ").map(function(a){return a.trim()})):kf();return i.prefix||(i.prefix=Tn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=a.width,p=a.icon,v=l2({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:z(z({},Sl),{},{fill:"white"})},x=c.children?{children:c.children.map(Lp)}:{},E={tag:"g",attributes:z({},v.inner),children:[Lp(z({tag:c.tag,attributes:z(z({},c.attributes),v.path)},x))]},m={tag:"g",attributes:z({},v.outer),children:[E]},d="mask-".concat(s||Zo()),h="clip-".concat(s||Zo()),k={tag:"mask",attributes:z(z({},Sl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:uk(p)},k]};return r.push(S,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(d,")")},Sl)}),{children:r,attributes:o}}}},fk={provides:function(t){var n=!1;An.matchMedia&&(n=An.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=z(z({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:z(z({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:z(z({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:z(z({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dk={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},pk=[f2,Z2,q2,ek,tk,ak,sk,lk,ck,fk,dk];$2(pk,{mixoutsTo:ht});ht.noAuto;ht.config;ht.library;ht.dom;var Hu=ht.parse;ht.findIconDefinition;ht.toHtml;var mk=ht.icon;ht.layer;ht.text;ht.counter;var K={exports:{}},hk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vk=hk,gk=vk;function hg(){}function vg(){}vg.resetWarningCache=hg;var yk=function(){function e(r,o,i,a,s,l){if(l!==gk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:vg,resetWarningCache:hg};return n.PropTypes=n,n};K.exports=yk();function Mp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mp(Object(n),!0).forEach(function(r){Cr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ua(e){return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ua(e)}function Cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xk(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function wk(e,t){if(e==null)return{};var n=xk(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Vu(e){return kk(e)||Sk(e)||bk(e)||Ek()}function kk(e){if(Array.isArray(e))return Gu(e)}function Sk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bk(e,t){if(!!e){if(typeof e=="string")return Gu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gu(e,t)}}function Gu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ek(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ck(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,v=e.inverse,g=e.border,x=e.listItem,E=e.flip,m=e.size,d=e.rotation,h=e.pull,k=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":v,"fa-border":g,"fa-li":x,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Cr(t,"fa-".concat(m),typeof m<"u"&&m!==null),Cr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Cr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),Cr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map(function(S){return k[S]?S:null}).filter(function(S){return S})}function $k(e){return e=e-0,e===e}function gg(e){return $k(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Pk=["style"];function Ok(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _k(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=gg(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[Ok(o)]=i:t[o]=i,t},{})}function yg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return yg(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=_k(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[gg(u)]=c}return l},{attrs:{}}),i=n.style,a=i===void 0?{}:i,s=wk(n,Pk);return o.attrs.style=xn(xn({},o.attrs.style),a),e.apply(void 0,[t.tag,xn(xn({},o.attrs),s)].concat(Vu(r)))}var xg=!1;try{xg=!0}catch{}function Nk(){if(!xg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dp(e){if(e&&Ua(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hu.icon)return Hu.icon(e);if(e===null)return null;if(e&&Ua(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function bl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Cr({},e,t):{}}var nt=Se.forwardRef(function(e,t){var n=e.icon,r=e.mask,o=e.symbol,i=e.className,a=e.title,s=e.titleId,l=e.maskId,u=Dp(n),c=bl("classes",[].concat(Vu(Ck(e)),Vu(i.split(" ")))),f=bl("transform",typeof e.transform=="string"?Hu.transform(e.transform):e.transform),p=bl("mask",Dp(r)),v=mk(u,xn(xn(xn(xn({},c),f),p),{},{symbol:o,title:a,titleId:s,maskId:l}));if(!v)return Nk("Could not find icon",u),null;var g=v.abstract,x={ref:t};return Object.keys(e).forEach(function(E){nt.defaultProps.hasOwnProperty(E)||(x[E]=e[E])}),Rk(g[0],x)});nt.displayName="FontAwesomeIcon";nt.propTypes={beat:K.exports.bool,border:K.exports.bool,beatFade:K.exports.bool,bounce:K.exports.bool,className:K.exports.string,fade:K.exports.bool,flash:K.exports.bool,mask:K.exports.oneOfType([K.exports.object,K.exports.array,K.exports.string]),maskId:K.exports.string,fixedWidth:K.exports.bool,inverse:K.exports.bool,flip:K.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.exports.oneOfType([K.exports.object,K.exports.array,K.exports.string]),listItem:K.exports.bool,pull:K.exports.oneOf(["right","left"]),pulse:K.exports.bool,rotation:K.exports.oneOf([0,90,180,270]),shake:K.exports.bool,size:K.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.exports.bool,spinPulse:K.exports.bool,spinReverse:K.exports.bool,symbol:K.exports.oneOfType([K.exports.bool,K.exports.string]),title:K.exports.string,titleId:K.exports.string,transform:K.exports.oneOfType([K.exports.string,K.exports.object]),swapOpacity:K.exports.bool};nt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Rk=yg.bind(null,Se.createElement);function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function wg(e,t=[]){let n=[];function r(i,a){const s=y.exports.createContext(a),l=n.length;n=[...n,a];function u(f){const{scope:p,children:v,...g}=f,x=(p==null?void 0:p[e][l])||s,E=y.exports.useMemo(()=>g,Object.values(g));return y.exports.createElement(x.Provider,{value:E},v)}function c(f,p){const v=(p==null?void 0:p[e][l])||s,g=y.exports.useContext(v);if(g)return g;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,c]}const o=()=>{const i=n.map(a=>y.exports.createContext(a));return function(s){const l=(s==null?void 0:s[e])||i;return y.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Ak(o,...t)]}function Ak(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const f=l(i)[`__scope${u}`];return{...s,...f}},{});return y.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Ne(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Tk(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Cf(...e){return t=>e.forEach(n=>Tk(n,t))}function nn(...e){return y.exports.useCallback(Cf(...e),e)}const Ba=y.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=y.exports.Children.toArray(n),i=o.find(Lk);if(i){const a=i.props.children,s=o.map(l=>l===i?y.exports.Children.count(a)>1?y.exports.Children.only(null):y.exports.isValidElement(a)?a.props.children:null:l);return y.exports.createElement(Yu,Ce({},r,{ref:t}),y.exports.isValidElement(a)?y.exports.cloneElement(a,void 0,s):null)}return y.exports.createElement(Yu,Ce({},r,{ref:t}),n)});Ba.displayName="Slot";const Yu=y.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return y.exports.isValidElement(n)?y.exports.cloneElement(n,{...Mk(r,n.props),ref:Cf(t,n.ref)}):y.exports.Children.count(n)>1?y.exports.Children.only(null):null});Yu.displayName="SlotClone";const Ik=({children:e})=>y.exports.createElement(y.exports.Fragment,null,e);function Lk(e){return y.exports.isValidElement(e)&&e.type===Ik}function Mk(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const Dk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Lt=Dk.reduce((e,t)=>{const n=y.exports.forwardRef((r,o)=>{const{asChild:i,...a}=r,s=i?Ba:t;return y.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),y.exports.createElement(s,Ce({},a,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Ku(e,t){e&&Va.exports.flushSync(()=>e.dispatchEvent(t))}function yt(e){const t=y.exports.useRef(e);return y.exports.useEffect(()=>{t.current=e}),y.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function zk({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Fk({defaultProp:t,onChange:n}),i=e!==void 0,a=i?e:r,s=yt(n),l=y.exports.useCallback(u=>{if(i){const f=typeof u=="function"?u(e):u;f!==e&&s(f)}else o(u)},[i,e,o,s]);return[a,l]}function Fk({defaultProp:e,onChange:t}){const n=y.exports.useState(e),[r]=n,o=y.exports.useRef(r),i=yt(t);return y.exports.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const jk=y.exports.createContext(void 0);function Uk(e){const t=y.exports.useContext(jk);return e||t||"ltr"}const Hr=Boolean(globalThis==null?void 0:globalThis.document)?y.exports.useLayoutEffect:()=>{};function Bk(e,t){return y.exports.useReducer((n,r)=>{const o=t[n][r];return o!=null?o:n},e)}const Ls=e=>{const{present:t,children:n}=e,r=Wk(t),o=typeof n=="function"?n({present:r.isPresent}):y.exports.Children.only(n),i=nn(r.ref,o.ref);return typeof n=="function"||r.isPresent?y.exports.cloneElement(o,{ref:i}):null};Ls.displayName="Presence";function Wk(e){const[t,n]=y.exports.useState(),r=y.exports.useRef({}),o=y.exports.useRef(e),i=y.exports.useRef("none"),a=e?"mounted":"unmounted",[s,l]=Bk(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.exports.useEffect(()=>{const u=Wi(r.current);i.current=s==="mounted"?u:"none"},[s]),Hr(()=>{const u=r.current,c=o.current;if(c!==e){const p=i.current,v=Wi(u);e?l("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&p!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Hr(()=>{if(t){const u=f=>{const v=Wi(r.current).includes(f.animationName);f.target===t&&v&&Va.exports.flushSync(()=>l("ANIMATION_END"))},c=f=>{f.target===t&&(i.current=Wi(r.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:y.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Wi(e){return(e==null?void 0:e.animationName)||"none"}const Hk=ua["useId".toString()]||(()=>{});let Vk=0;function kg(e){const[t,n]=y.exports.useState(Hk());return Hr(()=>{e||n(r=>r!=null?r:String(Vk++))},[e]),e||(t?`radix-${t}`:"")}function Sg(e){const t=e+"CollectionProvider",[n,r]=wg(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:g,children:x}=v,E=Se.useRef(null),m=Se.useRef(new Map).current;return Se.createElement(o,{scope:g,itemMap:m,collectionRef:E},x)},s=e+"CollectionSlot",l=Se.forwardRef((v,g)=>{const{scope:x,children:E}=v,m=i(s,x),d=nn(g,m.collectionRef);return Se.createElement(Ba,{ref:d},E)}),u=e+"CollectionItemSlot",c="data-radix-collection-item",f=Se.forwardRef((v,g)=>{const{scope:x,children:E,...m}=v,d=Se.useRef(null),h=nn(g,d),k=i(u,x);return Se.useEffect(()=>(k.itemMap.set(d,{ref:d,...m}),()=>void k.itemMap.delete(d))),Se.createElement(Ba,{[c]:"",ref:h},E)});function p(v){const g=i(e+"CollectionConsumer",v);return Se.useCallback(()=>{const E=g.collectionRef.current;if(!E)return[];const m=Array.from(E.querySelectorAll(`[${c}]`));return Array.from(g.itemMap.values()).sort((k,S)=>m.indexOf(k.ref.current)-m.indexOf(S.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},p,r]}function Gk(e,t=globalThis==null?void 0:globalThis.document){const n=yt(e);y.exports.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Qu="dismissableLayer.update",Yk="dismissableLayer.pointerDownOutside",Kk="dismissableLayer.focusOutside";let zp;const Qk=y.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Xk=y.exports.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:s,onDismiss:l,...u}=e,c=y.exports.useContext(Qk),[f,p]=y.exports.useState(null),v=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,g]=y.exports.useState({}),x=nn(t,P=>p(P)),E=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=E.indexOf(m),h=f?E.indexOf(f):-1,k=c.layersWithOutsidePointerEventsDisabled.size>0,S=h>=d,$=Jk(P=>{const I=P.target,B=[...c.branches].some(se=>se.contains(I));!S||B||(i==null||i(P),s==null||s(P),P.defaultPrevented||l==null||l())},v),N=Zk(P=>{const I=P.target;[...c.branches].some(se=>se.contains(I))||(a==null||a(P),s==null||s(P),P.defaultPrevented||l==null||l())},v);return Gk(P=>{h===c.layers.size-1&&(o==null||o(P),!P.defaultPrevented&&l&&(P.preventDefault(),l()))},v),y.exports.useEffect(()=>{if(!!f)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(zp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Fp(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=zp)}},[f,v,r,c]),y.exports.useEffect(()=>()=>{!f||(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Fp())},[f,c]),y.exports.useEffect(()=>{const P=()=>g({});return document.addEventListener(Qu,P),()=>document.removeEventListener(Qu,P)},[]),y.exports.createElement(Lt.div,Ce({},u,{ref:x,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:Ne(e.onFocusCapture,N.onFocusCapture),onBlurCapture:Ne(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:Ne(e.onPointerDownCapture,$.onPointerDownCapture)}))});function Jk(e,t=globalThis==null?void 0:globalThis.document){const n=yt(e),r=y.exports.useRef(!1),o=y.exports.useRef(()=>{});return y.exports.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let c=function(){bg(Yk,n,u,{discrete:!0})};var l=c;const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Zk(e,t=globalThis==null?void 0:globalThis.document){const n=yt(e),r=y.exports.useRef(!1);return y.exports.useEffect(()=>{const o=i=>{i.target&&!r.current&&bg(Kk,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Fp(){const e=new CustomEvent(Qu);document.dispatchEvent(e)}function bg(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Ku(o,i):o.dispatchEvent(i)}function qk(e){const t=y.exports.useRef({value:e,previous:e});return y.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const eS=y.exports.forwardRef((e,t)=>y.exports.createElement(Lt.span,Ce({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),tS=eS,fi="NavigationMenu",[$f,nS,rS]=Sg(fi),[Xu,oS,iS]=Sg(fi),[Pf,SC]=wg(fi,[rS,iS]),[aS,an]=Pf(fi),[sS,lS]=Pf(fi),uS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,delayDuration:a=200,skipDelayDuration:s=300,orientation:l="horizontal",dir:u,...c}=e,[f,p]=y.exports.useState(null),v=nn(t,I=>p(I)),g=Uk(u),x=y.exports.useRef(0),E=y.exports.useRef(0),m=y.exports.useRef(0),[d,h]=y.exports.useState(!0),[k="",S]=zk({prop:r,onChange:I=>{const B=I!=="",se=s>0;B?(window.clearTimeout(m.current),se&&h(!1)):(window.clearTimeout(m.current),m.current=window.setTimeout(()=>h(!0),s)),o==null||o(I)},defaultProp:i}),$=y.exports.useCallback(()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>S(""),150)},[S]),N=y.exports.useCallback(I=>{window.clearTimeout(E.current),S(I)},[S]),P=y.exports.useCallback(I=>{k===I?window.clearTimeout(E.current):x.current=window.setTimeout(()=>{window.clearTimeout(E.current),S(I)},a)},[k,S,a]);return y.exports.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(E.current),window.clearTimeout(m.current)},[]),y.exports.createElement(cS,{scope:n,isRootMenu:!0,value:k,dir:g,orientation:l,rootNavigationMenu:f,onTriggerEnter:I=>{window.clearTimeout(x.current),d?P(I):N(I)},onTriggerLeave:()=>{window.clearTimeout(x.current),$()},onContentEnter:()=>window.clearTimeout(E.current),onContentLeave:$,onItemSelect:I=>{S(B=>B===I?"":I)},onItemDismiss:()=>S("")},y.exports.createElement(Lt.nav,Ce({"aria-label":"Main","data-orientation":l,dir:g},c,{ref:v})))}),cS=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:i,children:a,value:s,onItemSelect:l,onItemDismiss:u,onTriggerEnter:c,onTriggerLeave:f,onContentEnter:p,onContentLeave:v}=e,[g,x]=y.exports.useState(null),[E,m]=y.exports.useState(new Map),[d,h]=y.exports.useState(null);return y.exports.createElement(aS,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:s,previousValue:qk(s),baseId:kg(),dir:o,orientation:i,viewport:g,onViewportChange:x,indicatorTrack:d,onIndicatorTrackChange:h,onTriggerEnter:yt(c),onTriggerLeave:yt(f),onContentEnter:yt(p),onContentLeave:yt(v),onItemSelect:yt(l),onItemDismiss:yt(u),onViewportContentChange:y.exports.useCallback((k,S)=>{m($=>($.set(k,S),new Map($)))},[]),onViewportContentRemove:y.exports.useCallback(k=>{m(S=>S.has(k)?(S.delete(k),new Map(S)):S)},[])},y.exports.createElement($f.Provider,{scope:t},y.exports.createElement(sS,{scope:t,items:E},a)))},fS="NavigationMenuList",dS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=an(fS,n),i=y.exports.createElement(Lt.ul,Ce({"data-orientation":o.orientation},r,{ref:t}));return y.exports.createElement(Lt.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange},y.exports.createElement($f.Slot,{scope:n},o.isRootMenu?y.exports.createElement(Pg,{asChild:!0},i):i))}),pS="NavigationMenuItem",[mS,Eg]=Pf(pS),hS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...o}=e,i=kg(),a=r||i||"LEGACY_REACT_AUTO_VALUE",s=y.exports.useRef(null),l=y.exports.useRef(null),u=y.exports.useRef(null),c=y.exports.useRef(()=>{}),f=y.exports.useRef(!1),p=y.exports.useCallback((g="start")=>{if(s.current){c.current();const x=Ju(s.current);x.length&&Of(g==="start"?x:x.reverse())}},[]),v=y.exports.useCallback(()=>{if(s.current){const g=Ju(s.current);g.length&&(c.current=ES(g))}},[]);return y.exports.createElement(mS,{scope:n,value:a,triggerRef:l,contentRef:s,focusProxyRef:u,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:v,onContentFocusOutside:v},y.exports.createElement(Lt.li,Ce({},o,{ref:t})))}),jp="NavigationMenuTrigger",vS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...o}=e,i=an(jp,e.__scopeNavigationMenu),a=Eg(jp,e.__scopeNavigationMenu),s=y.exports.useRef(null),l=nn(s,a.triggerRef,t),u=_g(i.baseId,a.value),c=Ng(i.baseId,a.value),f=y.exports.useRef(!1),p=y.exports.useRef(!1),v=a.value===i.value;return y.exports.createElement(y.exports.Fragment,null,y.exports.createElement($f.ItemSlot,{scope:n,value:a.value},y.exports.createElement(Og,{asChild:!0},y.exports.createElement(Lt.button,Ce({id:u,disabled:r,"data-disabled":r?"":void 0,"data-state":_f(v),"aria-expanded":v,"aria-controls":c},o,{ref:l,onPointerEnter:Ne(e.onPointerEnter,()=>{p.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:Ne(e.onPointerMove,Wa(()=>{r||p.current||a.wasEscapeCloseRef.current||f.current||(i.onTriggerEnter(a.value),f.current=!0)})),onPointerLeave:Ne(e.onPointerLeave,Wa(()=>{r||(i.onTriggerLeave(),f.current=!1)})),onClick:Ne(e.onClick,()=>{i.onItemSelect(a.value),p.current=v}),onKeyDown:Ne(e.onKeyDown,g=>{const E={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];v&&g.key===E&&(a.onEntryKeyDown(),g.preventDefault())})})))),v&&y.exports.createElement(y.exports.Fragment,null,y.exports.createElement(tS,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:g=>{const x=a.contentRef.current,E=g.relatedTarget,m=E===s.current,d=x==null?void 0:x.contains(E);(m||!d)&&a.onFocusProxyEnter(m?"start":"end")}}),i.viewport&&y.exports.createElement("span",{"aria-owns":c})))}),Up="navigationMenu.linkSelect",gS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return y.exports.createElement(Og,{asChild:!0},y.exports.createElement(Lt.a,Ce({"data-active":r?"":void 0,"aria-current":r?"page":void 0},i,{ref:t,onClick:Ne(e.onClick,a=>{const s=a.target,l=new CustomEvent(Up,{bubbles:!0,cancelable:!0});if(s.addEventListener(Up,u=>o==null?void 0:o(u),{once:!0}),Ku(s,l),!l.defaultPrevented){const u=new CustomEvent(ia,{bubbles:!0,cancelable:!0});Ku(s,u)}},{checkForDefaultPrevented:!1})})))}),qo="NavigationMenuContent",yS=y.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=an(qo,e.__scopeNavigationMenu),i=Eg(qo,e.__scopeNavigationMenu),a=nn(i.contentRef,t),s=i.value===o.value,l={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?y.exports.createElement(xS,Ce({forceMount:n},l,{ref:a})):y.exports.createElement(Ls,{present:n||s},y.exports.createElement(Cg,Ce({"data-state":_f(s)},l,{ref:a,onPointerEnter:Ne(e.onPointerEnter,o.onContentEnter),onPointerLeave:Ne(e.onPointerLeave,Wa(o.onContentLeave)),style:{pointerEvents:!s&&o.isRootMenu?"none":void 0,...l.style}})))}),xS=y.exports.forwardRef((e,t)=>{const n=an(qo,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=n;return Hr(()=>{r(e.value,{ref:t,...e})},[e,t,r]),Hr(()=>()=>o(e.value),[e.value,o]),null}),ia="navigationMenu.rootContentDismiss",Cg=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:o,focusProxyRef:i,wasEscapeCloseRef:a,onRootContentClose:s,onContentFocusOutside:l,...u}=e,c=an(qo,n),f=y.exports.useRef(null),p=nn(f,t),v=_g(c.baseId,r),g=Ng(c.baseId,r),x=nS(n),E=y.exports.useRef(null),{onItemDismiss:m}=c;y.exports.useEffect(()=>{const h=f.current;if(c.isRootMenu&&h){const k=()=>{var S;m(),s(),h.contains(document.activeElement)&&((S=o.current)===null||S===void 0||S.focus())};return h.addEventListener(ia,k),()=>h.removeEventListener(ia,k)}},[c.isRootMenu,e.value,o,m,s]);const d=y.exports.useMemo(()=>{const k=x().map(B=>B.value);c.dir==="rtl"&&k.reverse();const S=k.indexOf(c.value),$=k.indexOf(c.previousValue),N=r===c.value,P=$===k.indexOf(r);if(!N&&!P)return E.current;const I=(()=>{if(S!==$){if(N&&$!==-1)return S>$?"from-end":"from-start";if(P&&S!==-1)return S>$?"to-start":"to-end"}return null})();return E.current=I,I},[c.previousValue,c.value,c.dir,x,r]);return y.exports.createElement(Pg,{asChild:!0},y.exports.createElement(Xk,Ce({id:g,"aria-labelledby":v,"data-motion":d,"data-orientation":c.orientation},u,{ref:p,onDismiss:()=>{var h;const k=new Event(ia,{bubbles:!0,cancelable:!0});(h=f.current)===null||h===void 0||h.dispatchEvent(k)},onFocusOutside:Ne(e.onFocusOutside,h=>{var k;l();const S=h.target;(k=c.rootNavigationMenu)!==null&&k!==void 0&&k.contains(S)&&h.preventDefault()}),onPointerDownOutside:Ne(e.onPointerDownOutside,h=>{var k;const S=h.target,$=x().some(P=>{var I;return(I=P.ref.current)===null||I===void 0?void 0:I.contains(S)}),N=c.isRootMenu&&((k=c.viewport)===null||k===void 0?void 0:k.contains(S));($||N||!c.isRootMenu)&&h.preventDefault()}),onKeyDown:Ne(e.onKeyDown,h=>{const k=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!k){const N=Ju(h.currentTarget),P=document.activeElement,I=N.findIndex(we=>we===P),se=h.shiftKey?N.slice(0,I).reverse():N.slice(I+1,N.length);if(Of(se))h.preventDefault();else{var $;($=i.current)===null||$===void 0||$.focus()}}}),onEscapeKeyDown:Ne(e.onEscapeKeyDown,h=>{a.current=!0})})))}),$g="NavigationMenuViewport",wS=y.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=an($g,e.__scopeNavigationMenu),i=Boolean(o.value);return y.exports.createElement(Ls,{present:n||i},y.exports.createElement(kS,Ce({},r,{ref:t})))}),kS=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...o}=e,i=an($g,n),a=nn(t,i.onViewportChange),s=lS(qo,e.__scopeNavigationMenu),[l,u]=y.exports.useState(null),[c,f]=y.exports.useState(null),p=l?(l==null?void 0:l.width)+"px":void 0,v=l?(l==null?void 0:l.height)+"px":void 0,g=Boolean(i.value),x=g?i.value:i.previousValue;return CS(c,()=>{c&&u({width:c.offsetWidth,height:c.offsetHeight})}),y.exports.createElement(Lt.div,Ce({"data-state":_f(g),"data-orientation":i.orientation},o,{ref:a,style:{pointerEvents:!g&&i.isRootMenu?"none":void 0,["--radix-navigation-menu-viewport-width"]:p,["--radix-navigation-menu-viewport-height"]:v,...o.style},onPointerEnter:Ne(e.onPointerEnter,i.onContentEnter),onPointerLeave:Ne(e.onPointerLeave,Wa(i.onContentLeave))}),Array.from(s.items).map(([m,{ref:d,forceMount:h,...k}])=>{const S=x===m;return y.exports.createElement(Ls,{key:m,present:h||S},y.exports.createElement(Cg,Ce({},k,{ref:Cf(d,$=>{S&&$&&f($)})})))}))}),SS="FocusGroup",Pg=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=an(SS,n);return y.exports.createElement(Xu.Provider,{scope:n},y.exports.createElement(Xu.Slot,{scope:n},y.exports.createElement(Lt.div,Ce({dir:o.dir},r,{ref:t}))))}),Bp=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],bS="FocusGroupItem",Og=y.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=oS(n),i=an(bS,n);return y.exports.createElement(Xu.ItemSlot,{scope:n},y.exports.createElement(Lt.button,Ce({},r,{ref:t,onKeyDown:Ne(e.onKeyDown,a=>{if(["Home","End",...Bp].includes(a.key)){let l=o().map(f=>f.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&l.reverse(),Bp.includes(a.key)){const f=l.indexOf(a.currentTarget);l=l.slice(f+1)}setTimeout(()=>Of(l)),a.preventDefault()}})})))});function Ju(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Of(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function ES(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function CS(e,t){const n=yt(t);Hr(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}function _f(e){return e?"open":"closed"}function _g(e,t){return`${e}-trigger-${t}`}function Ng(e,t){return`${e}-content-${t}`}function Wa(e){return t=>t.pointerType==="mouse"?e(t):void 0}const $S=uS,PS=dS,OS=hS,_S=vS,aa=gS,Rg=yS,NS=wS,RS=Fv`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,AS=Fv`
 from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`,TS=_.div`
  ${({theme:{colors:e,spacing:t}})=>D`
    width: 100%;
    height: ${t.headerSpacing};
    background-color: ${e.mediumGray};
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
`,IS=_.div`
  justify-self: flex-start;
  & img {
    max-width: 120px;
  }
`,LS=_.ul`
  ${({theme:{colors:e,spacing:t}})=>D`
    display: flex;
    gap: 32px;
    & a {
      font-size: 1rem;
      font-weight: 500;
      height: ${t.headerSpacing};
      display: flex;
      align-items: center;
      border-bottom: 3px solid transparent;
      padding: 0 15px;
      transition: all 300ms;
      &:hover {
        border-bottom: 3px solid ${e.lightBlue};
        background-color: ${e.mediumGray};
      }
    }
  `}
`,MS=_.nav`
  ${({theme:{breakpoints:e}})=>D`
    @media (max-width: ${e.md}) {
      display: none;
    }
  `}
`;_.button`
  ${({theme:{colors:e,boxShadow:t}})=>D`
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
`;const DS=_($S)`
  ${({theme:{breakpoints:e}})=>D`
    display: flex;
    justify-content: center;
    z-index: 1;
    @media (min-width: ${e.md}) {
      display: none;
    }
  `}
`,zS=_(PS)`
  justify-content: center;
  list-style: none;
  margin: 0;
`,FS=_(_S)`
  ${({theme:{colors:e}})=>D`
    padding: 0.8rem;
    border: none;
    border-radius: 99px;
    line-height: 0;
    color: ${e.darkBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;_(Rg)`
  ${({theme:{colors:e}})=>D`
    border: 1px solid red;
    height: 100vh;
    opacity: 0.1;
  `}
`;_(aa)`
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
`;const jS=_.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 1rem;
  gap: 1rem;
`,El=_.li`
  ${({theme:{colors:e,boxShadow:t}})=>D`
    border-radius: 8px;
    background: ${e.lightGray};
    box-shadow: ${t.dark};
    & > a {
      height: 100%;
      width: 100%;
      padding: 1rem;
      color: ${e.darkBlue};
      font-weight: 700;
      display: block;
    }
  `}
`,US=_(NS)`
  ${({theme:{colors:e,boxShadow:t}})=>D`
    width: 100vw;

    position: fixed;
    left: -16px;
    margin-top: 7px;
    background-color: ${e.mediumGray};
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    box-shadow: ${t.dark};
    transition: width, height, 150ms ease;

    &[data-state='open'] {
      animation: ${RS} 150ms ease;
    }
    &[data-state='closed'] {
      animation: ${AS} 150ms ease;
    }
  `}
`,BS=_.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,WS=()=>w(TS,{children:L(jv,{children:[w(IS,{children:w(tt,{to:"/",children:w("img",{src:Tw,alt:"Pokem\xF3n logo"})})}),w(MS,{children:L(LS,{children:[w("li",{children:w(tt,{to:"/",children:"HOME"})}),w("li",{children:w(tt,{to:"/pokedex/1",children:"POKEDEX"})}),w("li",{children:w(tt,{to:"/pokemon/1",children:"POKEMON DATA"})})]})}),w(HS,{})]})}),HS=()=>L(DS,{children:[w(zS,{children:L(OS,{children:[w(FS,{children:w(nt,{icon:Iw,size:"xl"})}),w(Rg,{children:L(jS,{children:[w(El,{children:w(aa,{asChild:!0,children:w(tt,{to:"/",children:"HOME"})})}),w(El,{children:w(aa,{asChild:!0,children:w(tt,{to:"/pokedex/1",children:"POKEDEX"})})}),w(El,{children:w(aa,{asChild:!0,children:w(tt,{to:"/pokemon/1",children:"POKEMON DATA"})})})]})})]})}),w(BS,{children:w(US,{})})]}),VS=_.div`
  ${({theme:{spacing:e}})=>D`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${e.headerSpacing};
  `}
`,GS=({children:e})=>L(ai,{children:[w(WS,{}),w(VS,{children:w(jv,{children:e})})]}),YS=_.div`
  ${({color:e,theme:{colors:t}})=>D`
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
`,Ms=({color:e})=>w(YS,{color:e});function Ag(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tg}=Object.prototype,{getPrototypeOf:Nf}=Object,Rf=(e=>t=>{const n=Tg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),t=>Rf(t)===e),Ds=e=>t=>typeof t===e,{isArray:di}=Array,Zu=Ds("undefined");function KS(e){return e!==null&&!Zu(e)&&e.constructor!==null&&!Zu(e.constructor)&&Xr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ig=sn("ArrayBuffer");function QS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ig(e.buffer),t}const XS=Ds("string"),Xr=Ds("function"),Lg=Ds("number"),Mg=e=>e!==null&&typeof e=="object",JS=e=>e===!0||e===!1,sa=e=>{if(Rf(e)!=="object")return!1;const t=Nf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ZS=sn("Date"),qS=sn("File"),eb=sn("Blob"),tb=sn("FileList"),nb=e=>Mg(e)&&Xr(e.pipe),rb=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Tg.call(e)===t||Xr(e.toString)&&e.toString()===t)},ob=sn("URLSearchParams"),ib=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),di(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function qu(){const e={},t=(n,r)=>{sa(e[r])&&sa(n)?e[r]=qu(e[r],n):sa(n)?e[r]=qu({},n):di(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&zs(arguments[n],t);return e}const ab=(e,t,n,{allOwnKeys:r}={})=>(zs(t,(o,i)=>{n&&Xr(o)?e[i]=Ag(o,n):e[i]=o},{allOwnKeys:r}),e),sb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),lb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ub=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Nf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},cb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},fb=e=>{if(!e)return null;if(di(e))return e;let t=e.length;if(!Lg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},db=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Nf(Uint8Array)),pb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},mb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},hb=sn("HTMLFormElement"),vb=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Wp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gb=sn("RegExp"),Dg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zs(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},yb=e=>{Dg(e,(t,n)=>{const r=e[n];if(!!Xr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},xb=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return di(e)?r(e):r(String(e).split(t)),n},wb=()=>{},kb=(e,t)=>(e=+e,Number.isFinite(e)?e:t),C={isArray:di,isArrayBuffer:Ig,isBuffer:KS,isFormData:rb,isArrayBufferView:QS,isString:XS,isNumber:Lg,isBoolean:JS,isObject:Mg,isPlainObject:sa,isUndefined:Zu,isDate:ZS,isFile:qS,isBlob:eb,isRegExp:gb,isFunction:Xr,isStream:nb,isURLSearchParams:ob,isTypedArray:db,isFileList:tb,forEach:zs,merge:qu,extend:ab,trim:ib,stripBOM:sb,inherits:lb,toFlatObject:ub,kindOf:Rf,kindOfTest:sn,endsWith:cb,toArray:fb,forEachEntry:pb,matchAll:mb,isHTMLForm:hb,hasOwnProperty:Wp,hasOwnProp:Wp,reduceDescriptors:Dg,freezeMethods:yb,toObjectSet:xb,toCamelCase:vb,noop:wb,toFiniteNumber:kb};function q(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const zg=q.prototype,Fg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fg[e]={value:e}});Object.defineProperties(q,Fg);Object.defineProperty(zg,"isAxiosError",{value:!0});q.from=(e,t,n,r,o,i)=>{const a=Object.create(zg);return C.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),q.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var Sb=typeof self=="object"?self.FormData:window.FormData;function ec(e){return C.isPlainObject(e)||C.isArray(e)}function jg(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Hp(e,t,n){return e?e.concat(t).map(function(o,i){return o=jg(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function bb(e){return C.isArray(e)&&!e.some(ec)}const Eb=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Cb(e){return e&&C.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Fs(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new(Sb||FormData),n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,E){return!C.isUndefined(E[x])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Cb(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(C.isDate(g))return g.toISOString();if(!l&&C.isBlob(g))throw new q("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(g)||C.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,x,E){let m=g;if(g&&!E&&typeof g=="object"){if(C.endsWith(x,"{}"))x=r?x:x.slice(0,-2),g=JSON.stringify(g);else if(C.isArray(g)&&bb(g)||C.isFileList(g)||C.endsWith(x,"[]")&&(m=C.toArray(g)))return x=jg(x),m.forEach(function(h,k){!(C.isUndefined(h)||h===null)&&t.append(a===!0?Hp([x],k,i):a===null?x:x+"[]",u(h))}),!1}return ec(g)?!0:(t.append(Hp(E,x,i),u(g)),!1)}const f=[],p=Object.assign(Eb,{defaultVisitor:c,convertValue:u,isVisitable:ec});function v(g,x){if(!C.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),C.forEach(g,function(m,d){(!(C.isUndefined(m)||m===null)&&o.call(t,m,C.isString(d)?d.trim():d,x,p))===!0&&v(m,x?x.concat(d):[d])}),f.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Vp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Af(e,t){this._pairs=[],e&&Fs(e,this,t)}const Ug=Af.prototype;Ug.append=function(t,n){this._pairs.push([t,n])};Ug.toString=function(t){const n=t?function(r){return t.call(this,r,Vp)}:Vp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function $b(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bg(e,t,n){if(!t)return e;const r=n&&n.encode||$b,o=n&&n.serialize;let i;if(o?i=o(t,n):i=C.isURLSearchParams(t)?t.toString():new Af(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Gp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Wg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pb=typeof URLSearchParams<"u"?URLSearchParams:Af,Ob=FormData,_b=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Kt={isBrowser:!0,classes:{URLSearchParams:Pb,FormData:Ob,Blob},isStandardBrowserEnv:_b,protocols:["http","https","file","blob","url","data"]};function Nb(e,t){return Fs(e,new Kt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Kt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Rb(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ab(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Hg(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&C.isArray(o)?o.length:a,l?(C.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!C.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&C.isArray(o[a])&&(o[a]=Ab(o[a])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,o)=>{t(Rb(r),o,n,0)}),n}return null}function Tb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ib=Kt.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),C.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),C.isString(i)&&l.push("path="+i),C.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Lb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mb(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Vg(e,t){return e&&!Lb(t)?Mb(e,t):t}const Db=Kt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=C.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function pi(e,t,n){q.call(this,e==null?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(pi,q,{__CANCEL__:!0});function zb(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Fb=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jb=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&Fb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Yp=Symbol("internals"),Gg=Symbol("defaults");function yo(e){return e&&String(e).trim().toLowerCase()}function la(e){return e===!1||e==null?e:C.isArray(e)?e.map(la):String(e)}function Ub(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Kp(e,t,n,r){if(C.isFunction(r))return r.call(this,t,n);if(!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function Bb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Wb(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}function lo(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}function kt(e,t){e&&this.set(e),this[Gg]=t||null}Object.assign(kt.prototype,{set:function(e,t,n){const r=this;function o(i,a,s){const l=yo(a);if(!l)throw new Error("header name must be a non-empty string");const u=lo(r,l);u&&s!==!0&&(r[u]===!1||s===!1)||(r[u||a]=la(i))}return C.isPlainObject(e)?C.forEach(e,(i,a)=>{o(i,a,t)}):o(t,e,n),this},get:function(e,t){if(e=yo(e),!e)return;const n=lo(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return Ub(r);if(C.isFunction(t))return t.call(this,r,n);if(C.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=yo(e),e){const n=lo(this,e);return!!(n&&(!t||Kp(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function o(i){if(i=yo(i),i){const a=lo(n,i);a&&(!t||Kp(n,n[a],a,t))&&(delete n[a],r=!0)}}return C.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return C.forEach(this,(r,o)=>{const i=lo(n,o);if(i){t[i]=la(r),delete t[o];return}const a=e?Bb(o):String(o).trim();a!==o&&delete t[o],t[a]=la(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return C.forEach(Object.assign({},this[Gg]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&C.isArray(n)?n.join(", "):n)}),t}});Object.assign(kt,{from:function(e){return C.isString(e)?new this(jb(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[Yp]=this[Yp]={accessors:{}}).accessors,r=this.prototype;function o(i){const a=yo(i);n[a]||(Wb(r,i),n[a]=!0)}return C.isArray(e)?e.forEach(o):o(e),this}});kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);C.freezeMethods(kt.prototype);C.freezeMethods(kt);function Hb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let f=i,p=0;for(;f!==o;)p+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=c&&u-c;return v?Math.round(p*1e3/v):void 0}}function Qp(e,t){let n=0;const r=Hb(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0};c[t?"download":"upload"]=!0,e(c)}}function Xp(e){return new Promise(function(n,r){let o=e.data;const i=kt.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}C.isFormData(o)&&Kt.isStandardBrowserEnv&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+g))}const c=Vg(e.baseURL,e.url);u.open(e.method.toUpperCase(),Bg(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const v=kt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};Tb(function(m){n(m),l()},function(m){r(m),l()},x),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){!u||(r(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||Wg;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new q(g,x.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},Kt.isStandardBrowserEnv){const v=(e.withCredentials||Db(c))&&e.xsrfCookieName&&Ib.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&C.forEach(i.toJSON(),function(g,x){u.setRequestHeader(x,g)}),C.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Qp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Qp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{!u||(r(!v||v.type?new pi(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=zb(c);if(p&&Kt.protocols.indexOf(p)===-1){r(new q("Unsupported protocol "+p+":",q.ERR_BAD_REQUEST,e));return}u.send(o||null)})}const Jp={http:Xp,xhr:Xp},Zp={getAdapter:e=>{if(C.isString(e)){const t=Jp[e];if(!e)throw Error(C.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!C.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Jp},Vb={"Content-Type":"application/x-www-form-urlencoded"};function Gb(){let e;return typeof XMLHttpRequest<"u"?e=Zp.getAdapter("xhr"):typeof process<"u"&&C.kindOf(process)==="process"&&(e=Zp.getAdapter("http")),e}function Yb(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Jr={transitional:Wg,adapter:Gb(),transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=C.isObject(t);if(i&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o&&o?JSON.stringify(Hg(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Nb(t,this.formSerializer).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Fs(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Yb(t)):t}],transformResponse:[function(t){const n=this.transitional||Jr.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?q.from(s,q.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],function(t){Jr.headers[t]={}});C.forEach(["post","put","patch"],function(t){Jr.headers[t]=C.merge(Vb)});function Cl(e,t){const n=this||Jr,r=t||n,o=kt.from(r.headers);let i=r.data;return C.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Yg(e){return!!(e&&e.__CANCEL__)}function $l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pi}function qp(e){return $l(e),e.headers=kt.from(e.headers),e.data=Cl.call(e,e.transformRequest),(e.adapter||Jr.adapter)(e).then(function(r){return $l(e),r.data=Cl.call(e,e.transformResponse,r),r.headers=kt.from(r.headers),r},function(r){return Yg(r)||($l(e),r&&r.response&&(r.response.data=Cl.call(e,e.transformResponse,r.response),r.response.headers=kt.from(r.response.headers))),Promise.reject(r)})}function ei(e,t){t=t||{};const n={};function r(u,c){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge(u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function o(u){if(C.isUndefined(t[u])){if(!C.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function i(u){if(!C.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(C.isUndefined(t[u])){if(!C.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function s(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return C.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||o,p=f(c);C.isUndefined(p)&&f!==s||(n[c]=p)}),n}const Kg="1.1.3",Tf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Tf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const em={};Tf.transitional=function(t,n,r){function o(i,a){return"[Axios v"+Kg+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new q(o(a," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!em[a]&&(em[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function Kb(e,t,n){if(typeof e!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new q("option "+i+" must be "+l,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}}const tc={assertOptions:Kb,validators:Tf},fn=tc.validators;class Qn{constructor(t){this.defaults=t,this.interceptors={request:new Gp,response:new Gp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ei(this.defaults,n);const{transitional:r,paramsSerializer:o}=n;r!==void 0&&tc.assertOptions(r,{silentJSONParsing:fn.transitional(fn.boolean),forcedJSONParsing:fn.transitional(fn.boolean),clarifyTimeoutError:fn.transitional(fn.boolean)},!1),o!==void 0&&tc.assertOptions(o,{encode:fn.function,serialize:fn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&C.merge(n.headers.common,n.headers[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new kt(n.headers,i);const a=[];let s=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(s=s&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let u,c=0,f;if(!s){const v=[qp.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,l),f=v.length,u=Promise.resolve(n);c<f;)u=u.then(v[c++],v[c++]);return u}f=a.length;let p=n;for(c=0;c<f;){const v=a[c++],g=a[c++];try{p=v(p)}catch(x){g.call(this,x);break}}try{u=qp.call(this,p)}catch(v){return Promise.reject(v)}for(c=0,f=l.length;c<f;)u=u.then(l[c++],l[c++]);return u}getUri(t){t=ei(this.defaults,t);const n=Vg(t.baseURL,t.url);return Bg(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){Qn.prototype[t]=function(n,r){return this.request(ei(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(ei(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Qn.prototype[t]=n(),Qn.prototype[t+"Form"]=n(!0)});class If{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new pi(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new If(function(o){t=o}),cancel:t}}}function Qb(e){return function(n){return e.apply(null,n)}}function Xb(e){return C.isObject(e)&&e.isAxiosError===!0}function Qg(e){const t=new Qn(e),n=Ag(Qn.prototype.request,t);return C.extend(n,Qn.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Qg(ei(e,o))},n}const at=Qg(Jr);at.Axios=Qn;at.CanceledError=pi;at.CancelToken=If;at.isCancel=Yg;at.VERSION=Kg;at.toFormData=Fs;at.AxiosError=q;at.Cancel=at.CanceledError;at.all=function(t){return Promise.all(t)};at.spread=Qb;at.isAxiosError=Xb;at.formToJSON=e=>Hg(C.isHTMLForm(e)?new FormData(e):e);const Jb="https://pokeapi.co/api",js=at.create({baseURL:Jb}),Zb=async(e=0,t=20)=>(await js.get(`/v2/pokemon/?offset=${e}&limit=${t}}`)).data,Lf=async e=>(await js.get(`/v2/pokemon/${e}`)).data,qb=async e=>(await js.get(e)).data,eE=async e=>(await js.get(`/v2/pokemon-species/${e}`)).data,tE=_.div`
  ${({theme:{typesColors:e,boxShadow:t,colors:n},typeName:r})=>D`
    border: 2px solid ${e[r].primaryColor};
    background-color: ${e[r].secondaryColor};
    padding: 3px;
    border-radius: 99px;
    font-weight: bold;
    width: 100%;
    text-shadow: ${t.dark};
    color: ${n.white};
  `}
`,Mf=({typeName:e})=>w(tE,{typeName:e||"",children:e}),nE=Se.createContext({}),Xg=!0;function rE({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:l=Xg}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof s=="number"&&(u["--animation-duration"]=`${s}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof o=="string"||typeof o=="number")&&(u.borderRadius=o),i&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function Un({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:o,circle:i=!1,style:a,...s}){var l,u,c;const f=Se.useContext(nE),p={...s};for(const[h,k]of Object.entries(s))typeof k>"u"&&delete p[h];const v={...f,...p,circle:i},g={...a,...rE(v)};let x="react-loading-skeleton";n&&(x+=` ${n}`);const E=(l=v.inline)!==null&&l!==void 0?l:!1,m=[],d=Math.ceil(e);for(let h=0;h<d;h++){let k=g;if(d>e&&h===d-1){const $=(u=k.width)!==null&&u!==void 0?u:"100%",N=e%1,P=typeof $=="number"?$*N:`calc(${$} * ${N})`;k={...k,width:P}}const S=w("span",{className:x,style:k,children:"\u200C"},h);E?m.push(S):m.push(L(ai,{children:[S,w("br",{})]}))}return w("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":(c=v.enableAnimation)!==null&&c!==void 0?c:Xg,children:t?m.map((h,k)=>w(t,{children:h},k)):m})}const oE=_.div`
  ${({light:e,theme:{boxShadow:t,colors:n}})=>D`
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
    &:hover {
      position: relative;
      transform: scale(1.1);
      z-index: 2;
    }
  `}
`,iE=_.div`
  ${({light:e,theme:{colors:t}})=>D`
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
`,aE=_.div`
  ${({theme:{boxShadow:e,colors:t},secondary:n})=>D`
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
`,sE=_.div`
  ${({theme:{colors:e,boxShadow:t}})=>D`
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
`,lE=_.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`,tm=_(Un)`
  border-radius: 6px 36px;
  width: 250px;
  height: 250px;
`,nc=({pokemon:e,light:t=!1})=>{var a;const[n,r]=y.exports.useState();y.exports.useEffect(()=>{(async()=>{const l=await Lf(e);r(l)})()},[e]);const{typesColors:o,colors:i}=lr();return w(oE,{light:t,children:n?w(tt,{to:`/pokemon/${n.id}`,children:L(iE,{light:t,children:[L(aE,{secondary:(a=o[n.types[0].type.name])==null?void 0:a.secondaryColor,children:[L(sE,{children:["#",n.id]}),w("h3",{children:n.species.name})]}),w("img",{src:n.sprites.other.dream_world.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name}),w(lE,{children:n.types.map(s=>w(Mf,{typeName:s.type.name},s.type.name))})]})}):w(Ms,{color:t?i.black:""})})},uE=_.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 50px 0;
`,cE=({pokemonList:e})=>w(uE,{children:e.map((t,n)=>w(nc,{pokemon:t.name},`${t.name}-${n}`))}),fE=20;function dE(e){const[t,n]=y.exports.useState(!0),[r,o]=y.exports.useState(!1),[i,a]=y.exports.useState([]),s=y.exports.useCallback(async()=>{try{n(!0);const l=await Zb(e,fE);a(u=>[...u,...l.results]),n(!1)}catch(l){o(!!l)}},[e]);return y.exports.useEffect(()=>{s()},[s,e]),{loading:t,error:r,allPokemonList:i}}const pE=_.div`
  ${({theme:{spacing:e}})=>D`
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
`,mE=_.div`
  ${({theme:{colors:e,spacing:t}})=>D`
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
`,hE=_.div`
  ${({theme:{colors:e,boxShadow:t}})=>D`
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
`,vE=20;function gE(){const[e,t]=y.exports.useState(0),{allPokemonList:n,loading:r}=dE(e),o=y.exports.useRef(null),i=y.exports.useCallback(a=>{a[0].isIntersecting&&t(l=>l+vE)},[]);return y.exports.useEffect(()=>{const a={root:null,rootMargin:"20px",threshold:0},s=new IntersectionObserver(i,a);o.current&&s.observe(o.current)},[i]),L(pE,{children:[w(hE,{children:w("p",{children:"Here's a list of Pokemon from every generation. Click on any of them to get information about their type, stats, and evolution chain!"})}),L(mE,{children:[!!(n!=null&&n.length)&&w(cE,{pokemonList:n}),w("div",{ref:o}),r&&w(Ms,{})]})]})}const yE=()=>w("div",{children:w(Px,{})}),xE=_.div`
  ${({theme:{colors:e}})=>D`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`,uo=_.div`
  ${({theme:{colors:e}})=>D`
    position: relative;
    background: ${e.black};
  `}
`,co=_.div`
  ${({theme:{colors:e}})=>D`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${e.darkGray};
    z-index: 2;
  `}
`,fo=_.div`
  ${({theme:{colors:e}})=>D`
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
`,wE=_.div`
  ${({theme:{colors:e}})=>D`
    display: flex;
  `}
`,kE=()=>{const{id:e}=qc(),t=Number(e),n=t>1?t-1:1,r=t+1;return L(xE,{children:[w(tt,{to:`/pokedex/${n}`,children:L(uo,{children:[w(co,{}),w(fo,{})]})}),L(wE,{children:[w(tt,{to:`/pokedex/${n}`,children:L(uo,{children:[w(co,{}),w(fo,{})]})}),L(uo,{children:[w(co,{}),w(fo,{})]}),w(tt,{to:`/pokedex/${r}`,children:L(uo,{children:[w(co,{}),w(fo,{})]})})]}),w(tt,{to:`/pokedex/${r}`,children:L(uo,{children:[w(co,{}),w(fo,{})]})})]})},SE=_.div`
  position: relative;
`,bE=_.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`,EE=_.div`
  ${({theme:{colors:e}})=>D`
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
`,CE=_.div`
  display: flex;
  gap: 8px;
`,nm=_.div`
  ${({theme:{colors:e},color:t})=>D`
    background: ${t};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${e.black};
    border-left: 1px solid ${e.black};
  `}
`,$E=_.div`
  ${({theme:{colors:e}})=>D`
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
`,PE=({types:e})=>{const{colors:t}=lr();return L(SE,{children:[L(bE,{children:[w(EE,{}),L(CE,{children:[w(nm,{color:t.red}),w(nm,{color:t.mediumBlue})]}),w(kE,{})]}),w($E,{children:e.map(n=>w(Mf,{typeName:n.type.name},n.type.name))})]})},OE=_.div`
  ${({theme:{colors:e}})=>D`
    width: 370px;
    height: 460px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0 15px 15px 0;
  `}
`,_E=_.div`
  ${({theme:{colors:e}})=>D`
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
`,NE=_.div`
  ${({theme:{colors:e}})=>D`
    background-color: ${e.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`,Jg=({className:e,children:t})=>L(OE,{className:e,children:[w(_E,{}),w(NE,{children:t})]}),RE=_.div`
  ${({theme:{colors:e}})=>D`
    border: 8px solid ${e.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`,AE=_.div`
  ${({theme:{colors:e}})=>D`
    border-radius: 8px;
    background-color: ${e.pokedexGreen};
    border-top: 1px solid ${e.mediumGray};
    border-right: 1px solid ${e.mediumGray};
    color: ${e.darkGray};
    font-size: 12px;
    font-weight: 600;
    padding: 12px 24px;
  `}
`,TE=_.div`
  ${({theme:{colors:e}})=>D`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`,IE=({pokemon:e})=>w(RE,{children:w(AE,{children:e.stats.map(t=>L(TE,{children:[w("div",{children:t.stat.name},t.stat.name),w("div",{children:t.base_stat},`${t.stat.name}-${t.base_stat}`)]},t.stat.name))})}),LE=_.div`
  ${({theme:{colors:e}})=>D`
    position: relative;
  `}
`,ME=_(Jg)`
  ${({theme:{colors:e}})=>D`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`,DE=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,rm=_.div`
  ${({theme:{colors:e}})=>D`
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
`,zE=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`,FE=_.span`
  ${({theme:{colors:e}})=>D`
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
`,jE=({pokemon:e})=>L(LE,{children:[w(Jg,{children:L(ai,{children:[w(IE,{pokemon:e}),L(zE,{children:[L(DE,{children:[L(rm,{children:[" HEIGHT - ",e.height," dm"]}),L(rm,{children:[" WEIGHT - ",e.weight," hg"]})]}),w(FE,{})]})]})}),w(ME,{})]}),UE=_.div`
  ${({theme:{breakpoints:e}})=>D`
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
`,BE=_.div`
  ${({theme:{colors:e}})=>D`
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
`,WE=_.div`
  ${({theme:{colors:e}})=>D`
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
`,HE=_.span`
  ${({theme:{colors:e}})=>D`
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
`,VE=_.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`,Pl=_.span`
  ${({theme:{colors:e},color:t})=>D`
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
`,GE=_.div`
  ${({theme:{colors:e}})=>D`
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
`,YE=_.div`
  position: relative;
`,KE=_.div`
  ${({theme:{colors:e}})=>D`
    background: ${e.lightestGray};
    padding: 30px;
    width: 250px;
    height: 200px;
    margin-left: 45px;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  `}
`,QE=_.div`
  ${({theme:{colors:e}})=>D`
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
`,XE=_.div`
  ${({theme:{colors:e}})=>D`
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
`,JE=({pokemon:e})=>{const{colors:t}=lr();return L(UE,{children:[L(BE,{children:[L(WE,{children:[w("div",{}),w(HE,{}),L(VE,{children:[w(Pl,{color:t.red}),w(Pl,{color:t.yellow}),w(Pl,{color:t.green})]})]}),w(GE,{children:w("div",{})}),L(YE,{children:[w(KE,{children:L(XE,{children:[L("p",{children:["#",e.id]}),w("img",{src:e.sprites.front_default,alt:e.name}),w("p",{children:e.name})]})}),w(QE,{})]}),w(PE,{types:e.types})]}),w(jE,{pokemon:e})]})},ZE=_.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  border-radius: 8px;
  position: relative;
`,qE=_.div`
  ${({theme:{colors:e,spacing:t,breakpoints:n}})=>D`
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
`,eC=_.div`
  ${({theme:{colors:e,boxShadow:t}})=>D`
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
`;_.div`
  ${({theme:{colors:e}})=>D`
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
`;const tC=_.span`
  align-self: flex-end;
  display: flex;
  /* align-items: center; */
  padding: 0.5rem;
  gap: 0.5rem;
  font-size: 0.8rem;
  & > svg {
    margin-top: 0.4rem;
  }
`,nC=()=>{const[e,t]=y.exports.useState(!1),[n,r]=y.exports.useState(),o=qc(),i=async()=>{t(!0);const a=await Lf(Number(o.id));r(a),t(!1)};return y.exports.useEffect(()=>{i()},[o.id]),L(ZE,{children:[w(eC,{children:w("p",{children:"Here's a classic way to view Pokemon stats. Move from one Pokemon to the next clicking the direction keys on the pokedex."})}),w(qE,{children:e?w(Ms,{}):n?w(JE,{pokemon:n}):w("div",{})}),L(tC,{children:[w(nt,{icon:Lw,size:"1x"}),"This Pokedex was designed entirely using HTML and CSS code."]})]})},rC=_.div`
  padding: 32px;
`,oC=_.h2`
  ${({theme:{colors:e}})=>D`
    color: ${e.darkBlue};
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
  `}
`,rc=_.div`
  ${({theme:{breakpoints:e}})=>D`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,Zg=_.div`
  ${({theme:{breakpoints:e}})=>D`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,qg=_.span`
  ${({theme:{breakpoints:e}})=>D`
    margin: 1rem;
    @media (max-width: ${e.lg}) {
      transform: rotate(90deg);
    }
  `}
`,iC=_.div`
  ${({hasManyEvolutions:e,showShadow:t,theme:{boxShadow:n}})=>D`
    ${t&&"padding: 24px;"}
    display: flex;
    flex-direction: ${e?"row":"column"};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 32px;
    box-shadow: ${t?n.dark:""};
  `}
`,aC=({url:e})=>{const[t,n]=y.exports.useState(!1),[r,o]=y.exports.useState(),i=r==null?void 0:r.filter(p=>p.canEvolve),a=r==null?void 0:r.filter(p=>!p.canEvolve),s=(p,v)=>p.includes("https://pokeapi.co/api/v2/pokemon-species/")?p.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/",""):v,l=y.exports.useMemo(()=>[],[]),u=y.exports.useCallback(p=>{if(!p.evolves_to.length){l.push({id:s(p.species.url,p.species.name),name:p.species.name,canEvolve:!1}),o(l);return}l.length||l.push({id:s(p.species.url,p.species.name),name:p.species.name,canEvolve:!0}),p.evolves_to.forEach(v=>{if(!v.evolves_to.length){l.push({id:s(v.species.url,v.species.name),name:v.species.name,canEvolve:!1}),o(l);return}l.push({id:s(v.species.url,v.species.name),name:v.species.name,canEvolve:!0}),o(l),u(v)})},[l]),c=y.exports.useCallback(async()=>{n(!0);const p=await qb(e);u(p.chain),n(!1)},[e,u]),{colors:f}=lr();return y.exports.useEffect(()=>{c()},[e,c]),w(rC,{children:t?w(Ms,{}):L(ai,{children:[w(oC,{children:"EVOLUTION CHAIN:"}),L(rc,{children:[i!=null&&i.length?i.map(p=>L(Zg,{children:[w(nc,{pokemon:p.id,light:!0},p.name),p.canEvolve&&w(qg,{children:w(nt,{icon:Uv,color:f.black,size:"xl"})})]},p.name)):null,a!=null&&a.length?w(iC,{showShadow:a.length>1,hasManyEvolutions:a.length>3,children:a.map(p=>w("div",{children:w(nc,{pokemon:p.id,light:!0},p.name)},p.name))}):null]})]})})},sC=()=>{const{colors:e}=lr();return w(rc,{children:L(rc,{children:[L(Zg,{children:[w(tm,{baseColor:e.lightGray}),w(qg,{children:w(nt,{icon:Uv,color:e.mediumGray,size:"xl"})})]}),w(tm,{baseColor:e.lightGray})]})})},lC=_.div`
  ${({theme:{boxShadow:e,colors:t}})=>D`
    box-shadow: ${e.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${t.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`,uC=_.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,cC=_.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`,fC=_.div`
  margin-bottom: -3px;
`,dC=_.div`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`,pC=_.div`
  ${({value:e,theme:{colors:t}})=>D`
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
`,mC=({stats:e})=>L(lC,{children:[w("h3",{children:"Stats"}),w(uC,{children:e.map(t=>L(cC,{children:[w(fC,{children:t.stat.name.toUpperCase()}),w(dC,{value:t.base_stat,children:w(pC,{value:t.base_stat,children:t.base_stat})})]},t.stat.name))})]}),e0=_.div`
  ${({theme:{spacing:e}})=>D`
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
`,t0=_.div`
  ${({theme:{colors:e,spacing:t}})=>D`
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
`,n0=_.div`
  ${({theme:{colors:e}})=>D`
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
`,r0=_.div`
  ${({theme:{breakpoints:e}})=>D`
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
`,o0=_.div`
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
`,hC=_.p`
  ${({theme:{colors:e,breakpoints:t}})=>D`
    width: 300px;
    padding: 2rem;
    border-radius: 8px;
    background: ${e.lightGray};
    font-weight: 500;
    @media (max-width: ${t.md}) {
      margin-bottom: 1rem;
    }
  `}
`,i0=_.div`
  ${({type:e,theme:{colors:t,typesColors:n}})=>D`
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
`,Ha=_.div`
  ${({theme:{colors:e,breakpoints:t}})=>D`
    color: ${e.lightestGray};
    font-weight: bold;
    border: 2px solid ${e.darkBlue};
    background: ${e.darkBlue};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
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
`,om=_.div`
  ${({isRight:e=!1,theme:{colors:t,breakpoints:n}})=>D`
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
`,a0=_.div`
  ${({type:e,theme:{colors:t,typesColors:n,boxShadow:r}})=>D`
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
`,s0=_.h1`
  font-family: 'Lato', sans-serif;
`,im=_(Un)`
  border-radius: 99px;
`,vC=()=>{var u;const[e,t]=y.exports.useState(),[n,r]=y.exports.useState(),[o,i]=y.exports.useState(!1),a=qc(),s=y.exports.useCallback(async()=>{if(a!=null&&a.id){i(!0);const c=await eE(a.id),f=await Lf(a.id);t(c),r(f),i(!1)}},[a.id]),{colors:l}=lr();return y.exports.useEffect(()=>{s(),window.scrollTo(0,0)},[a.id,s]),L(e0,{children:[o&&w(gC,{}),!o&&a.id&&n?L(t0,{children:[L(i0,{type:n.types[0].type.name,children:[L(tt,{to:`/pokemon/${Number(n==null?void 0:n.id)>1?Number(n==null?void 0:n.id)-1:1}`,children:[L(Ha,{children:[w(nt,{icon:Au}),w("p",{children:"PREV POKEMON"})]}),w(om,{children:w(nt,{icon:Au,size:"2x",color:l.white})})]}),w(a0,{type:n.types[0].type.name,children:w("img",{src:n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name})}),L(tt,{to:`/pokemon/${Number(n.id)+1}`,children:[L(Ha,{children:[w("p",{children:"NEXT POKEMON"}),w(nt,{icon:Ru})]}),w(om,{isRight:!0,children:w(nt,{icon:Ru,size:"2x",color:l.white})})]})]}),L(s0,{children:["#",e==null?void 0:e.id," ",e==null?void 0:e.name.toUpperCase()]}),L(n0,{children:[L(r0,{children:[L(o0,{children:[w(hC,{children:(u=e==null?void 0:e.flavor_text_entries.find(c=>c.language.name==="en"))==null?void 0:u.flavor_text.replace(/\f/g," ")}),w("div",{children:n.types.map(c=>w(Mf,{typeName:c.type.name},c.type.name))})]}),w(mC,{stats:n.stats})]}),e?w(aC,{url:e==null?void 0:e.evolution_chain.url}):null]})]}):null]})},gC=()=>{const{colors:e}=lr();return w(e0,{children:L(t0,{children:[L(i0,{type:"normal",children:[L(Ha,{children:[w(nt,{icon:Au}),w("p",{children:"PREV POKEMON"})]}),w(a0,{type:"normal",children:w(Un,{width:200,height:200,circle:!0,baseColor:e.lightGray})}),L(Ha,{children:[w("p",{children:"NEXT POKEMON"}),w(nt,{icon:Ru})]})]}),w(s0,{children:w(Un,{width:180,baseColor:e.lightGray,height:45})}),L(n0,{children:[L(r0,{children:[L(o0,{children:[w("div",{children:w(Un,{width:300,height:150,baseColor:e.lightGray})}),L("div",{children:[w(im,{width:300,height:35,baseColor:e.lightGray}),w(im,{width:300,height:35,baseColor:e.lightGray})]})]}),w(Un,{width:330,height:330,baseColor:e.lightGray})]}),w(Un,{width:250,height:35,baseColor:e.lightGray}),w(sC,{})]})]})})},yC=Aw`
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
`,xC={colors:{white:"#F3F4F6",lightestGray:"#F3F4F6",lightGray:"#D1D5DB",mediumGray:"#6B7280",darkGray:"#1F2937",black:"#111827",lightBlue:"#7DD3FC",mediumBlue:"#0284C7",darkBlue:"#075985",green:"#55ab62",yellow:"#feee6d",mediumYellow:"#c7a400",darkYellow:"#9f8a0d",red:"#e5092e",pokedexGreen:"#bad8a8",pokedexLight:"#ce1131",pokedexMedium:"#bd0f33",pokedexDark:"#941828",pokedexDarkest:"#810a1e"},breakpoints:{xs:"390px",sm:"480px",md:"768px",lg:"1024px",xl:"1440px"},spacing:{headerSpacing:"65px"},boxShadow:{dark:"0 0 6px rgba(0, 0, 0, 0.3)",light:"0 0 4px rgba(0, 0, 0, 0.1)"},typesColors:{normal:{primaryColor:"#A8A878",secondaryColor:"#6D6D4E"},fighting:{primaryColor:"#C03028",secondaryColor:"#D67873"},flying:{primaryColor:"#A890F0",secondaryColor:"#6D5E9C"},poison:{primaryColor:"#A040A0",secondaryColor:"#682A68"},ground:{primaryColor:"#E0C068",secondaryColor:"#927D44"},rock:{primaryColor:"#B8A038",secondaryColor:"#786824"},bug:{primaryColor:"#A8B820",secondaryColor:"#6D7815"},ghost:{primaryColor:"#705898",secondaryColor:"#493963"},steel:{primaryColor:"#B8B8D0",secondaryColor:"#787887"},fire:{primaryColor:"#F08030",secondaryColor:"#9C531F"},water:{primaryColor:"#6890F0",secondaryColor:"#445E9C"},grass:{primaryColor:"#78C850",secondaryColor:"#4E8234"},electric:{primaryColor:"#F8D030",secondaryColor:"#A1871F"},psychic:{primaryColor:"#F85888",secondaryColor:"#A13959"},ice:{primaryColor:"#98D8D8",secondaryColor:"#638D8D"},dragon:{primaryColor:"#7038F8",secondaryColor:"#4924A1"},dark:{primaryColor:"#705848",secondaryColor:"#49392F"},fairy:{primaryColor:"#EE99AC",secondaryColor:"#9B6470"},unknown:{primaryColor:"#68A090",secondaryColor:"#44685E"},shadow:{primaryColor:"#705898",secondaryColor:"#493963"}}},wC="/pokedex/";function kC(){return L(Nw,{theme:xC,children:[w(Ix,{basename:wC,children:w(GS,{children:w(_x,{children:L(jn,{path:"/",children:[w(jn,{index:!0,element:w(gE,{})}),w(jn,{path:"pokedex",element:w(yE,{}),children:w(jn,{path:":id",element:w(nC,{})})}),w(jn,{path:"pokemon/:id",element:w(vC,{})}),w(jn,{path:"*",element:w("div",{children:"Not found"})})]})})})}),w(yC,{})]})}Ol.createRoot(document.getElementById("root")).render(w(kC,{}));
