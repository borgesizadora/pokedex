function gg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function yg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cs={},_p={exports:{}},lt={},_={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),xg=Symbol.for("react.portal"),wg=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),Sg=Symbol.for("react.profiler"),bg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Pg=Symbol.for("react.suspense"),_g=Symbol.for("react.memo"),Og=Symbol.for("react.lazy"),uf=Symbol.iterator;function $g(e){return e===null||typeof e!="object"?null:(e=uf&&e[uf]||e["@@iterator"],typeof e=="function"?e:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Ap={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||Op}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Np(){}Np.prototype=jr.prototype;function zu(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||Op}var Du=zu.prototype=new Np;Du.constructor=zu;$p(Du,jr.prototype);Du.isPureReactComponent=!0;var cf=Array.isArray,Tp=Object.prototype.hasOwnProperty,ju={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Tp.call(t,r)&&!Rp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:ju.current}}function Ag(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function Ng(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ff=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ng(""+e.key):t.toString(36)}function Lo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case xg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Pl(a,0):r,cf(i)?(n="",e!=null&&(n=e.replace(ff,"$&/")+"/"),Lo(i,t,n,"",function(u){return u})):i!=null&&(Mu(i)&&(i=Ag(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ff,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",cf(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Pl(o,l);a+=Lo(o,t,n,s,i)}else if(s=$g(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Pl(o,l++),a+=Lo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oo(e,t,n){if(e==null)return e;var r=[],i=0;return Lo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Tg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Io={transition:null},Rg={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Io,ReactCurrentOwner:ju};K.Children={map:oo,forEach:function(e,t,n){oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oo(e,function(){t++}),t},toArray:function(e){return oo(e,function(t){return t})||[]},only:function(e){if(!Mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=jr;K.Fragment=wg;K.Profiler=Sg;K.PureComponent=zu;K.StrictMode=kg;K.Suspense=Pg;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$p({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Tp.call(t,s)&&!Rp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:Eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bg,_context:e},e.Consumer=e};K.createElement=Lp;K.createFactory=function(e){var t=Lp.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Cg,render:e}};K.isValidElement=Mu;K.lazy=function(e){return{$$typeof:Og,_payload:{_status:-1,_result:e},_init:Tg}};K.memo=function(e,t){return{$$typeof:_g,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return Ye.current.useCallback(e,t)};K.useContext=function(e){return Ye.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ye.current.useEffect(e,t)};K.useId=function(){return Ye.current.useId()};K.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ye.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};K.useRef=function(e){return Ye.current.useRef(e)};K.useState=function(e){return Ye.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ye.current.useTransition()};K.version="18.2.0";(function(e){e.exports=K})(_);const Nt=yg(_.exports),fs=gg({__proto__:null,default:Nt},[_.exports]);var Ip={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,U){var W=O.length;O.push(U);e:for(;0<W;){var ae=W-1>>>1,N=O[ae];if(0<i(N,U))O[ae]=U,O[W]=N,W=ae;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var U=O[0],W=O.pop();if(W!==U){O[0]=W;e:for(var ae=0,N=O.length,L=N>>>1;ae<L;){var z=2*(ae+1)-1,H=O[z],k=z+1,X=O[k];if(0>i(H,W))k<N&&0>i(X,H)?(O[ae]=X,O[k]=W,ae=k):(O[ae]=H,O[z]=W,ae=z);else if(k<N&&0>i(X,W))O[ae]=X,O[k]=W,ae=k;else break e}}return U}function i(O,U){var W=O.sortIndex-U.sortIndex;return W!==0?W:O.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,p=3,v=!1,g=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=O)r(u),U.sortIndex=U.expirationTime,t(s,U);else break;U=n(u)}}function w(O){if(x=!1,h(O),!g)if(n(s)!==null)g=!0,jt(b);else{var U=n(u);U!==null&&He(w,U.startTime-O)}}function b(O,U){g=!1,x&&(x=!1,m(R),R=-1),v=!0;var W=p;try{for(h(U),d=n(s);d!==null&&(!(d.expirationTime>U)||O&&!Pe());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,p=d.priorityLevel;var N=ae(d.expirationTime<=U);U=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(s)&&r(s),h(U)}else r(s);d=n(s)}if(d!==null)var L=!0;else{var z=n(u);z!==null&&He(w,z.startTime-U),L=!1}return L}finally{d=null,p=W,v=!1}}var P=!1,A=null,R=-1,G=5,B=-1;function Pe(){return!(e.unstable_now()-B<G)}function Se(){if(A!==null){var O=e.unstable_now();B=O;var U=!0;try{U=A(!0,O)}finally{U?Ne():(P=!1,A=null)}}else P=!1}var Ne;if(typeof f=="function")Ne=function(){f(Se)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,je=nt.port2;nt.port1.onmessage=Se,Ne=function(){je.postMessage(null)}}else Ne=function(){E(Se,0)};function jt(O){A=O,P||(P=!0,Ne())}function He(O,U){R=E(function(){O(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,jt(b))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var W=p;p=U;try{return O()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=p;p=O;try{return U()}finally{p=W}},e.unstable_scheduleCallback=function(O,U,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,O={id:c++,callback:U,priorityLevel:O,startTime:W,expirationTime:N,sortIndex:-1},W>ae?(O.sortIndex=W,t(u,O),n(s)===null&&O===n(u)&&(x?(m(R),R=-1):x=!0,He(w,W-ae))):(O.sortIndex=N,t(s,O),g||v||(g=!0,jt(b))),O},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(O){var U=p;return function(){var W=p;p=U;try{return O.apply(this,arguments)}finally{p=W}}}})(zp);(function(e){e.exports=zp})(Ip);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=_.exports,at=Ip.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,bi={};function qn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(bi[e]=t,e=0;e<t.length;e++)jp.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=Object.prototype.hasOwnProperty,Lg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,df={},pf={};function Ig(e){return ds.call(pf,e)?!0:ds.call(df,e)?!1:Lg.test(e)?pf[e]=!0:(df[e]=!0,!1)}function zg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dg(e,t,n,r){if(t===null||typeof t>"u"||zg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fu,Uu);De[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fu,Uu);De[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fu,Uu);De[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bu(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dg(t,n,i,r)&&(n=null),r||i===null?Ig(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),ir=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),ps=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),ms=Symbol.for("react.suspense"),hs=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Up=Symbol.for("react.offscreen"),mf=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,_l;function oi(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Ol=!1;function $l(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function jg(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case ir:return"Portal";case ps:return"Profiler";case Wu:return"StrictMode";case ms:return"Suspense";case hs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fp:return(e.displayName||"Context")+".Consumer";case Mp:return(e._context.displayName||"Context")+".Provider";case Hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vu:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function Mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fg(e){var t=Bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=Fg(e))}function Wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function hf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hp(e,t){t=t.checked,t!=null&&Bu(e,"checked",t,!1)}function ys(e,t){Hp(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&xs(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xs(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ai(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function Vp(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,Yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ug=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Ug.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Kp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bg=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ss(e,t){if(t){if(Bg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Es=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,kr=null,Sr=null;function xf(e){if(e=Ki(e)){if(typeof Cs!="function")throw Error(C(280));var t=e.stateNode;t&&(t=La(t),Cs(e.stateNode,e.type,t))}}function Xp(e){kr?Sr?Sr.push(e):Sr=[e]:kr=e}function Jp(){if(kr){var e=kr,t=Sr;if(Sr=kr=null,xf(e),t)for(e=0;e<t.length;e++)xf(t[e])}}function Zp(e,t){return e(t)}function qp(){}var Al=!1;function em(e,t,n){if(Al)return e(t,n);Al=!0;try{return Zp(e,t,n)}finally{Al=!1,(kr!==null||Sr!==null)&&(qp(),Jp())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=La(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ps=!1;if(Vt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Ps=!1}function Wg(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var di=!1,Zo=null,qo=!1,_s=null,Hg={onError:function(e){di=!0,Zo=e}};function Vg(e,t,n,r,i,o,a,l,s){di=!1,Zo=null,Wg.apply(Hg,arguments)}function Gg(e,t,n,r,i,o,a,l,s){if(Vg.apply(this,arguments),di){if(di){var u=Zo;di=!1,Zo=null}else throw Error(C(198));qo||(qo=!0,_s=u)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wf(e){if(er(e)!==e)throw Error(C(188))}function Yg(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wf(i),e;if(o===r)return wf(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function nm(e){return e=Yg(e),e!==null?rm(e):null}function rm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rm(e);if(t!==null)return t;e=e.sibling}return null}var im=at.unstable_scheduleCallback,kf=at.unstable_cancelCallback,Qg=at.unstable_shouldYield,Kg=at.unstable_requestPaint,we=at.unstable_now,Xg=at.unstable_getCurrentPriorityLevel,Yu=at.unstable_ImmediatePriority,om=at.unstable_UserBlockingPriority,ea=at.unstable_NormalPriority,Jg=at.unstable_LowPriority,am=at.unstable_IdlePriority,Aa=null,zt=null;function Zg(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:t0,qg=Math.log,e0=Math.LN2;function t0(e){return e>>>=0,e===0?32:31-(qg(e)/e0|0)|0}var uo=64,co=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=li(l):(o&=a,o!==0&&(r=li(o)))}else a=n&~i,a!==0?r=li(a):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function n0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ot(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=n0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lm(){var e=uo;return uo<<=1,(uo&4194240)===0&&(uo=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function i0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function sm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var um,Ku,cm,fm,dm,$s=!1,fo=[],mn=null,hn=null,vn=null,Pi=new Map,_i=new Map,sn=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(t.pointerId)}}function Kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function a0(e,t,n,r,i){switch(t){case"focusin":return mn=Kr(mn,e,t,n,r,i),!0;case"dragenter":return hn=Kr(hn,e,t,n,r,i),!0;case"mouseover":return vn=Kr(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pi.set(o,Kr(Pi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,Kr(_i.get(o)||null,e,t,n,r,i)),!0}return!1}function pm(e){var t=zn(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=tm(n),t!==null){e.blockedOn=t,dm(e.priority,function(){cm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=As(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Es=r,n.target.dispatchEvent(r),Es=null}else return t=Ki(n),t!==null&&Ku(t),e.blockedOn=n,!1;t.shift()}return!0}function bf(e,t,n){zo(e)&&n.delete(t)}function l0(){$s=!1,mn!==null&&zo(mn)&&(mn=null),hn!==null&&zo(hn)&&(hn=null),vn!==null&&zo(vn)&&(vn=null),Pi.forEach(bf),_i.forEach(bf)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,l0)))}function Oi(e){function t(i){return Xr(i,e)}if(0<fo.length){Xr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Xr(mn,e),hn!==null&&Xr(hn,e),vn!==null&&Xr(vn,e),Pi.forEach(t),_i.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)pm(n),n.blockedOn===null&&sn.shift()}var br=Zt.ReactCurrentBatchConfig,na=!0;function s0(e,t,n,r){var i=re,o=br.transition;br.transition=null;try{re=1,Xu(e,t,n,r)}finally{re=i,br.transition=o}}function u0(e,t,n,r){var i=re,o=br.transition;br.transition=null;try{re=4,Xu(e,t,n,r)}finally{re=i,br.transition=o}}function Xu(e,t,n,r){if(na){var i=As(e,t,n,r);if(i===null)Ul(e,t,r,ra,n),Sf(e,r);else if(a0(i,e,t,n,r))r.stopPropagation();else if(Sf(e,r),t&4&&-1<o0.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&um(o),o=As(e,t,n,r),o===null&&Ul(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var ra=null;function As(e,t,n,r){if(ra=null,e=Gu(r),e=zn(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function mm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xg()){case Yu:return 1;case om:return 4;case ea:case Jg:return 16;case am:return 536870912;default:return 16}default:return 16}}var cn=null,Ju=null,Do=null;function hm(){if(Do)return Do;var e,t=Ju,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Do=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Ef(){return!1}function st(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:Ef,this.isPropagationStopped=Ef,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=st(Mr),Qi=he({},Mr,{view:0,detail:0}),c0=st(Qi),Tl,Rl,Jr,Na=he({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Tl=e.screenX-Jr.screenX,Rl=e.screenY-Jr.screenY):Rl=Tl=0,Jr=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Cf=st(Na),f0=he({},Na,{dataTransfer:0}),d0=st(f0),p0=he({},Qi,{relatedTarget:0}),Ll=st(p0),m0=he({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=st(m0),v0=he({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g0=st(v0),y0=he({},Mr,{data:0}),Pf=st(y0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k0[e])?!!t[e]:!1}function qu(){return S0}var b0=he({},Qi,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E0=st(b0),C0=he({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=st(C0),P0=he({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),_0=st(P0),O0=he({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=st(O0),A0=he({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=st(A0),T0=[9,13,27,32],ec=Vt&&"CompositionEvent"in window,pi=null;Vt&&"documentMode"in document&&(pi=document.documentMode);var R0=Vt&&"TextEvent"in window&&!pi,vm=Vt&&(!ec||pi&&8<pi&&11>=pi),Of=String.fromCharCode(32),$f=!1;function gm(e,t){switch(e){case"keyup":return T0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function L0(e,t){switch(e){case"compositionend":return ym(t);case"keypress":return t.which!==32?null:($f=!0,Of);case"textInput":return e=t.data,e===Of&&$f?null:e;default:return null}}function I0(e,t){if(ar)return e==="compositionend"||!ec&&gm(e,t)?(e=hm(),Do=Ju=cn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!z0[e.type]:t==="textarea"}function xm(e,t,n,r){Xp(r),t=ia(t,"onChange"),0<t.length&&(n=new Zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,$i=null;function D0(e){Am(e,0)}function Ta(e){var t=ur(e);if(Wp(t))return e}function j0(e,t){if(e==="change")return t}var wm=!1;if(Vt){var Il;if(Vt){var zl="oninput"in document;if(!zl){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),zl=typeof Nf.oninput=="function"}Il=zl}else Il=!1;wm=Il&&(!document.documentMode||9<document.documentMode)}function Tf(){mi&&(mi.detachEvent("onpropertychange",km),$i=mi=null)}function km(e){if(e.propertyName==="value"&&Ta($i)){var t=[];xm(t,$i,e,Gu(e)),em(D0,t)}}function M0(e,t,n){e==="focusin"?(Tf(),mi=t,$i=n,mi.attachEvent("onpropertychange",km)):e==="focusout"&&Tf()}function F0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta($i)}function U0(e,t){if(e==="click")return Ta(t)}function B0(e,t){if(e==="input"||e==="change")return Ta(t)}function W0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:W0;function Ai(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ds.call(t,i)||!At(e[i],t[i]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=Rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bm(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function H0(e){var t=bm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sm(n.ownerDocument.documentElement,n)){if(r!==null&&tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Lf(n,o);var a=Lf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var V0=Vt&&"documentMode"in document&&11>=document.documentMode,lr=null,Ns=null,hi=null,Ts=!1;function If(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ts||lr==null||lr!==Jo(r)||(r=lr,"selectionStart"in r&&tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Ai(hi,r)||(hi=r,r=ia(Ns,"onSelect"),0<r.length&&(t=new Zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Dl={},Em={};Vt&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Ra(e){if(Dl[e])return Dl[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Em)return Dl[e]=t[n];return e}var Cm=Ra("animationend"),Pm=Ra("animationiteration"),_m=Ra("animationstart"),Om=Ra("transitionend"),$m=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){$m.set(e,t),qn(t,[e])}for(var jl=0;jl<zf.length;jl++){var Ml=zf[jl],G0=Ml.toLowerCase(),Y0=Ml[0].toUpperCase()+Ml.slice(1);$n(G0,"on"+Y0)}$n(Cm,"onAnimationEnd");$n(Pm,"onAnimationIteration");$n(_m,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Om,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Df(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gg(r,t,void 0,e),e.currentTarget=null}function Am(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Df(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Df(i,l,u),o=s}}}if(qo)throw e=_s,qo=!1,_s=null,e}function se(e,t){var n=t[Ds];n===void 0&&(n=t[Ds]=new Set);var r=e+"__bubble";n.has(r)||(Nm(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Nm(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[ho]){e[ho]=!0,jp.forEach(function(n){n!=="selectionchange"&&(Q0.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Fl("selectionchange",!1,t))}}function Nm(e,t,n,r){switch(mm(t)){case 1:var i=s0;break;case 4:i=u0;break;default:i=Xu}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=zn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}em(function(){var u=o,c=Gu(n),d=[];e:{var p=$m.get(e);if(p!==void 0){var v=Zu,g=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":v=E0;break;case"focusin":g="focus",v=Ll;break;case"focusout":g="blur",v=Ll;break;case"beforeblur":case"afterblur":v=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_0;break;case Cm:case Pm:case _m:v=h0;break;case Om:v=$0;break;case"scroll":v=c0;break;case"wheel":v=N0;break;case"copy":case"cut":case"paste":v=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=_f}var x=(t&4)!==0,E=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var f=u,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=Ci(f,m),w!=null&&x.push(Ti(f,w,h)))),E)break;f=f.return}0<x.length&&(p=new v(p,g,null,n,c),d.push({event:p,listeners:x}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Es&&(g=n.relatedTarget||n.fromElement)&&(zn(g)||g[Gt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?zn(g):null,g!==null&&(E=er(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(x=Cf,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=_f,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=v==null?p:ur(v),h=g==null?p:ur(g),p=new x(w,f+"leave",v,n,c),p.target=E,p.relatedTarget=h,w=null,zn(c)===u&&(x=new x(m,f+"enter",g,n,c),x.target=h,x.relatedTarget=E,w=x),E=w,v&&g)t:{for(x=v,m=g,f=0,h=x;h;h=rr(h))f++;for(h=0,w=m;w;w=rr(w))h++;for(;0<f-h;)x=rr(x),f--;for(;0<h-f;)m=rr(m),h--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break t;x=rr(x),m=rr(m)}x=null}else x=null;v!==null&&jf(d,p,v,x,!1),g!==null&&E!==null&&jf(d,E,g,x,!0)}}e:{if(p=u?ur(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var b=j0;else if(Af(p))if(wm)b=B0;else{b=F0;var P=M0}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=U0);if(b&&(b=b(e,u))){xm(d,b,n,c);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&xs(p,"number",p.value)}switch(P=u?ur(u):window,e){case"focusin":(Af(P)||P.contentEditable==="true")&&(lr=P,Ns=u,hi=null);break;case"focusout":hi=Ns=lr=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,If(d,n,c);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":If(d,n,c)}var A;if(ec)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ar?gm(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(vm&&n.locale!=="ko"&&(ar||R!=="onCompositionStart"?R==="onCompositionEnd"&&ar&&(A=hm()):(cn=c,Ju="value"in cn?cn.value:cn.textContent,ar=!0)),P=ia(u,R),0<P.length&&(R=new Pf(R,e,null,n,c),d.push({event:R,listeners:P}),A?R.data=A:(A=ym(n),A!==null&&(R.data=A)))),(A=R0?L0(e,n):I0(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(c=new Pf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Am(d,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ci(e,n),o!=null&&r.unshift(Ti(e,o,i)),o=Ci(e,t),o!=null&&r.push(Ti(e,o,i))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ci(n,o),s!=null&&a.unshift(Ti(n,s,l))):i||(s=Ci(n,o),s!=null&&a.push(Ti(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var K0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function Mf(e){return(typeof e=="string"?e:""+e).replace(K0,`
`).replace(X0,"")}function vo(e,t,n){if(t=Mf(t),Mf(e)!==t&&n)throw Error(C(425))}function oa(){}var Rs=null,Ls=null;function Is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(e){return Ff.resolve(null).then(e).catch(q0)}:zs;function q0(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Fr,Ri="__reactProps$"+Fr,Gt="__reactContainer$"+Fr,Ds="__reactEvents$"+Fr,ey="__reactListeners$"+Fr,ty="__reactHandles$"+Fr;function zn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uf(e);e!==null;){if(n=e[Lt])return n;e=Uf(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[Lt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function La(e){return e[Ri]||null}var js=[],cr=-1;function An(e){return{current:e}}function ce(e){0>cr||(e.current=js[cr],js[cr]=null,cr--)}function le(e,t){cr++,js[cr]=e.current,e.current=t}var Cn={},We=An(Cn),Ze=An(!1),Hn=Cn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function aa(){ce(Ze),ce(We)}function Bf(e,t,n){if(We.current!==Cn)throw Error(C(168));le(We,t),le(Ze,n)}function Tm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Mg(e)||"Unknown",i));return he({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Hn=We.current,le(We,e),le(Ze,Ze.current),!0}function Wf(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Tm(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ze),ce(We),le(We,e)):ce(Ze),le(Ze,n)}var Ft=null,Ia=!1,Wl=!1;function Rm(e){Ft===null?Ft=[e]:Ft.push(e)}function ny(e){Ia=!0,Rm(e)}function Nn(){if(!Wl&&Ft!==null){Wl=!0;var e=0,t=re;try{var n=Ft;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ia=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),im(Yu,Nn),i}finally{re=t,Wl=!1}}return null}var fr=[],dr=0,sa=null,ua=0,ft=[],dt=0,Vn=null,Ut=1,Bt="";function Tn(e,t){fr[dr++]=ua,fr[dr++]=sa,sa=e,ua=t}function Lm(e,t,n){ft[dt++]=Ut,ft[dt++]=Bt,ft[dt++]=Vn,Vn=e;var r=Ut;e=Bt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ut=1<<32-Ot(t)+i|n<<i|r,Bt=o+e}else Ut=1<<o|n<<i|r,Bt=e}function nc(e){e.return!==null&&(Tn(e,1),Lm(e,1,0))}function rc(e){for(;e===sa;)sa=fr[--dr],fr[dr]=null,ua=fr[--dr],fr[dr]=null;for(;e===Vn;)Vn=ft[--dt],ft[dt]=null,Bt=ft[--dt],ft[dt]=null,Ut=ft[--dt],ft[dt]=null}var ot=null,it=null,de=!1,Et=null;function Im(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Ut,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fs(e){if(de){var t=it;if(t){var n=t;if(!Hf(e,t)){if(Ms(e))throw Error(C(418));t=gn(n.nextSibling);var r=ot;t&&Hf(e,t)?Im(r,n):(e.flags=e.flags&-4097|2,de=!1,ot=e)}}else{if(Ms(e))throw Error(C(418));e.flags=e.flags&-4097|2,de=!1,ot=e}}}function Vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function go(e){if(e!==ot)return!1;if(!de)return Vf(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Is(e.type,e.memoizedProps)),t&&(t=it)){if(Ms(e))throw zm(),Error(C(418));for(;t;)Im(e,t),t=gn(t.nextSibling)}if(Vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?gn(e.stateNode.nextSibling):null;return!0}function zm(){for(var e=it;e;)e=gn(e.nextSibling)}function $r(){it=ot=null,de=!1}function ic(e){Et===null?Et=[e]:Et.push(e)}var ry=Zt.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=An(null),fa=null,pr=null,oc=null;function ac(){oc=pr=fa=null}function lc(e){var t=ca.current;ce(ca),e._currentValue=t}function Us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){fa=e,oc=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(oc!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(fa===null)throw Error(C(308));pr=e,fa.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Dn=null;function sc(e){Dn===null?Dn=[e]:Dn.push(e)}function Dm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,sc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function Mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qu(e,n)}}function Gf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;ln=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var p=l.lane,v=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(p=t,v=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(v,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(v,d,p):g,p==null)break e;d=he({},d,p);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,s=d):c=c.next=v,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=d}}function Yf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Mm=new Dp.Component().refs;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=wn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=yn(e,o,i),t!==null&&($t(t,e,i,r),Mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=wn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yn(e,o,i),t!==null&&($t(t,e,i,r),Mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=wn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=yn(e,i,r),t!==null&&($t(t,e,r,n),Mo(t,e,r))}};function Qf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,o):!0}function Fm(e,t,n){var r=!1,i=Cn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=qe(t)?Hn:We.current,r=t.contextTypes,o=(r=r!=null)?Or(e,i):Cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Kf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function Ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mm,uc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=qe(t)?Hn:We.current,i.context=Or(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&za.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Mm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xf(e){var t=e._init;return t(e._payload)}function Um(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=kn(m,f),m.index=0,m.sibling=null,m}function o(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,h,w){return f===null||f.tag!==6?(f=Xl(h,m.mode,w),f.return=m,f):(f=i(f,h),f.return=m,f)}function s(m,f,h,w){var b=h.type;return b===or?c(m,f,h.props.children,w,h.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===an&&Xf(b)===f.type)?(w=i(f,h.props),w.ref=Zr(m,f,h),w.return=m,w):(w=Vo(h.type,h.key,h.props,null,m.mode,w),w.ref=Zr(m,f,h),w.return=m,w)}function u(m,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Jl(h,m.mode,w),f.return=m,f):(f=i(f,h.children||[]),f.return=m,f)}function c(m,f,h,w,b){return f===null||f.tag!==7?(f=Bn(h,m.mode,w,b),f.return=m,f):(f=i(f,h),f.return=m,f)}function d(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xl(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ao:return h=Vo(f.type,f.key,f.props,null,m.mode,h),h.ref=Zr(m,null,f),h.return=m,h;case ir:return f=Jl(f,m.mode,h),f.return=m,f;case an:var w=f._init;return d(m,w(f._payload),h)}if(ai(f)||Yr(f))return f=Bn(f,m.mode,h,null),f.return=m,f;yo(m,f)}return null}function p(m,f,h,w){var b=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(m,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:return h.key===b?s(m,f,h,w):null;case ir:return h.key===b?u(m,f,h,w):null;case an:return b=h._init,p(m,f,b(h._payload),w)}if(ai(h)||Yr(h))return b!==null?null:c(m,f,h,w,null);yo(m,h)}return null}function v(m,f,h,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(f,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ao:return m=m.get(w.key===null?h:w.key)||null,s(f,m,w,b);case ir:return m=m.get(w.key===null?h:w.key)||null,u(f,m,w,b);case an:var P=w._init;return v(m,f,h,P(w._payload),b)}if(ai(w)||Yr(w))return m=m.get(h)||null,c(f,m,w,b,null);yo(f,w)}return null}function g(m,f,h,w){for(var b=null,P=null,A=f,R=f=0,G=null;A!==null&&R<h.length;R++){A.index>R?(G=A,A=null):G=A.sibling;var B=p(m,A,h[R],w);if(B===null){A===null&&(A=G);break}e&&A&&B.alternate===null&&t(m,A),f=o(B,f,R),P===null?b=B:P.sibling=B,P=B,A=G}if(R===h.length)return n(m,A),de&&Tn(m,R),b;if(A===null){for(;R<h.length;R++)A=d(m,h[R],w),A!==null&&(f=o(A,f,R),P===null?b=A:P.sibling=A,P=A);return de&&Tn(m,R),b}for(A=r(m,A);R<h.length;R++)G=v(A,m,R,h[R],w),G!==null&&(e&&G.alternate!==null&&A.delete(G.key===null?R:G.key),f=o(G,f,R),P===null?b=G:P.sibling=G,P=G);return e&&A.forEach(function(Pe){return t(m,Pe)}),de&&Tn(m,R),b}function x(m,f,h,w){var b=Yr(h);if(typeof b!="function")throw Error(C(150));if(h=b.call(h),h==null)throw Error(C(151));for(var P=b=null,A=f,R=f=0,G=null,B=h.next();A!==null&&!B.done;R++,B=h.next()){A.index>R?(G=A,A=null):G=A.sibling;var Pe=p(m,A,B.value,w);if(Pe===null){A===null&&(A=G);break}e&&A&&Pe.alternate===null&&t(m,A),f=o(Pe,f,R),P===null?b=Pe:P.sibling=Pe,P=Pe,A=G}if(B.done)return n(m,A),de&&Tn(m,R),b;if(A===null){for(;!B.done;R++,B=h.next())B=d(m,B.value,w),B!==null&&(f=o(B,f,R),P===null?b=B:P.sibling=B,P=B);return de&&Tn(m,R),b}for(A=r(m,A);!B.done;R++,B=h.next())B=v(A,m,R,B.value,w),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?R:B.key),f=o(B,f,R),P===null?b=B:P.sibling=B,P=B);return e&&A.forEach(function(Se){return t(m,Se)}),de&&Tn(m,R),b}function E(m,f,h,w){if(typeof h=="object"&&h!==null&&h.type===or&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:e:{for(var b=h.key,P=f;P!==null;){if(P.key===b){if(b=h.type,b===or){if(P.tag===7){n(m,P.sibling),f=i(P,h.props.children),f.return=m,m=f;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===an&&Xf(b)===P.type){n(m,P.sibling),f=i(P,h.props),f.ref=Zr(m,P,h),f.return=m,m=f;break e}n(m,P);break}else t(m,P);P=P.sibling}h.type===or?(f=Bn(h.props.children,m.mode,w,h.key),f.return=m,m=f):(w=Vo(h.type,h.key,h.props,null,m.mode,w),w.ref=Zr(m,f,h),w.return=m,m=w)}return a(m);case ir:e:{for(P=h.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=i(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Jl(h,m.mode,w),f.return=m,m=f}return a(m);case an:return P=h._init,E(m,f,P(h._payload),w)}if(ai(h))return g(m,f,h,w);if(Yr(h))return x(m,f,h,w);yo(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,h),f.return=m,m=f):(n(m,f),f=Xl(h,m.mode,w),f.return=m,m=f),a(m)):n(m,f)}return E}var Ar=Um(!0),Bm=Um(!1),Xi={},Dt=An(Xi),Li=An(Xi),Ii=An(Xi);function jn(e){if(e===Xi)throw Error(C(174));return e}function cc(e,t){switch(le(Ii,t),le(Li,e),le(Dt,Xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}ce(Dt),le(Dt,t)}function Nr(){ce(Dt),ce(Li),ce(Ii)}function Wm(e){jn(Ii.current);var t=jn(Dt.current),n=ks(t,e.type);t!==n&&(le(Li,e),le(Dt,n))}function fc(e){Li.current===e&&(ce(Dt),ce(Li))}var pe=An(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function dc(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Fo=Zt.ReactCurrentDispatcher,Vl=Zt.ReactCurrentBatchConfig,Gn=0,me=null,be=null,_e=null,ma=!1,vi=!1,zi=0,iy=0;function Fe(){throw Error(C(321))}function pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function mc(e,t,n,r,i,o){if(Gn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?sy:uy,e=n(r,i),vi){o=0;do{if(vi=!1,zi=0,25<=o)throw Error(C(301));o+=1,_e=be=null,t.updateQueue=null,Fo.current=cy,e=n(r,i)}while(vi)}if(Fo.current=ha,t=be!==null&&be.next!==null,Gn=0,_e=be=me=null,ma=!1,t)throw Error(C(300));return e}function hc(){var e=zi!==0;return zi=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?me.memoizedState=_e=e:_e=_e.next=e,_e}function yt(){if(be===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=_e===null?me.memoizedState:_e.next;if(t!==null)_e=t,be=e;else{if(e===null)throw Error(C(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},_e===null?me.memoizedState=_e=e:_e=_e.next=e}return _e}function Di(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=yt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Gn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,me.lanes|=c,Yn|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,At(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=yt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);At(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hm(){}function Vm(e,t){var n=me,r=yt(),i=t(),o=!At(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,vc(Qm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ji(9,Ym.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(C(349));(Gn&30)!==0||Gm(n,t,i)}return i}function Gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ym(e,t,n,r){t.value=n,t.getSnapshot=r,Km(t)&&Xm(e)}function Qm(e,t,n){return n(function(){Km(t)&&Xm(e)})}function Km(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Xm(e){var t=Yt(e,1);t!==null&&$t(t,e,1,-1)}function Jf(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=ly.bind(null,me,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jm(){return yt().memoizedState}function Uo(e,t,n,r){var i=Rt();me.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function Da(e,t,n,r){var i=yt();r=r===void 0?null:r;var o=void 0;if(be!==null){var a=be.memoizedState;if(o=a.destroy,r!==null&&pc(r,a.deps)){i.memoizedState=ji(t,n,o,r);return}}me.flags|=e,i.memoizedState=ji(1|t,n,o,r)}function Zf(e,t){return Uo(8390656,8,e,t)}function vc(e,t){return Da(2048,8,e,t)}function Zm(e,t){return Da(4,2,e,t)}function qm(e,t){return Da(4,4,e,t)}function eh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,n){return n=n!=null?n.concat([e]):null,Da(4,4,eh.bind(null,t,e),n)}function gc(){}function nh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ih(e,t,n){return(Gn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(At(n,t)||(n=lm(),me.lanes|=n,Yn|=n,e.baseState=!0),t)}function oy(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{re=n,Vl.transition=r}}function oh(){return yt().memoizedState}function ay(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ah(e))lh(t,n);else if(n=Dm(e,t,n,r),n!==null){var i=Ge();$t(n,e,r,i),sh(n,t,r)}}function ly(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ah(e))lh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,At(l,a)){var s=t.interleaved;s===null?(i.next=i,sc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Dm(e,t,i,r),n!==null&&(i=Ge(),$t(n,e,r,i),sh(n,t,r))}}function ah(e){var t=e.alternate;return e===me||t!==null&&t===me}function lh(e,t){vi=ma=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qu(e,n)}}var ha={readContext:gt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},sy={readContext:gt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Zf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ay.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:gc,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=oy.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Rt();if(de){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Oe===null)throw Error(C(349));(Gn&30)!==0||Gm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Zf(Qm.bind(null,r,o,e),[e]),r.flags|=2048,ji(9,Ym.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Oe.identifierPrefix;if(de){var n=Bt,r=Ut;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=iy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uy={readContext:gt,useCallback:nh,useContext:gt,useEffect:vc,useImperativeHandle:th,useInsertionEffect:Zm,useLayoutEffect:qm,useMemo:rh,useReducer:Gl,useRef:Jm,useState:function(){return Gl(Di)},useDebugValue:gc,useDeferredValue:function(e){var t=yt();return ih(t,be.memoizedState,e)},useTransition:function(){var e=Gl(Di)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Hm,useSyncExternalStore:Vm,useId:oh,unstable_isNewReconciler:!1},cy={readContext:gt,useCallback:nh,useContext:gt,useEffect:vc,useImperativeHandle:th,useInsertionEffect:Zm,useLayoutEffect:qm,useMemo:rh,useReducer:Yl,useRef:Jm,useState:function(){return Yl(Di)},useDebugValue:gc,useDeferredValue:function(e){var t=yt();return be===null?t.memoizedState=e:ih(t,be.memoizedState,e)},useTransition:function(){var e=Yl(Di)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Hm,useSyncExternalStore:Vm,useId:oh,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=jg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function uh(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ga||(ga=!0,eu=r),Hs(e,t)},n}function ch(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Hs(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cy.bind(null,e,t,n),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var dy=Zt.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?Bm(t,null,n,r):Ar(t,e.child,n,r)}function nd(e,t,n,r,i){n=n.render;var o=t.ref;return Er(t,i),r=mc(e,t,n,r,o,i),n=hc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&n&&nc(t),t.flags|=1,Ve(e,t,r,i),t.child)}function rd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fh(e,t,o,r,i)):(e=Vo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(a,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=kn(o,r),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return Vs(e,t,n,r,i)}function dh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(hr,rt),rt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(hr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(hr,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(hr,rt),rt|=r;return Ve(e,t,i,n),t.child}function ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,n,r,i){var o=qe(n)?Hn:We.current;return o=Or(t,o),Er(t,i),n=mc(e,t,n,r,o,i),r=hc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&r&&nc(t),t.flags|=1,Ve(e,t,n,i),t.child)}function id(e,t,n,r,i){if(qe(n)){var o=!0;la(t)}else o=!1;if(Er(t,i),t.stateNode===null)Bo(e,t),Fm(t,n,r),Ws(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=qe(n)?Hn:We.current,u=Or(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Kf(t,a,r,u),ln=!1;var p=t.memoizedState;a.state=p,da(t,r,a,i),s=t.memoizedState,l!==r||p!==s||Ze.current||ln?(typeof c=="function"&&(Bs(t,n,c,r),s=t.memoizedState),(l=ln||Qf(t,n,l,r,p,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),a.props=u,d=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=gt(s):(s=qe(n)?Hn:We.current,s=Or(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||p!==s)&&Kf(t,a,r,s),ln=!1,p=t.memoizedState,a.state=p,da(t,r,a,i);var g=t.memoizedState;l!==d||p!==g||Ze.current||ln?(typeof v=="function"&&(Bs(t,n,v,r),g=t.memoizedState),(u=ln||Qf(t,n,u,r,p,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,o,i)}function Gs(e,t,n,r,i,o){ph(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Wf(t,n,!1),Qt(e,t,o);r=t.stateNode,dy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,l,o)):Ve(e,t,l,o),t.memoizedState=r.state,i&&Wf(t,n,!0),t.child}function mh(e){var t=e.stateNode;t.pendingContext?Bf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bf(e,t.context,!1),cc(e,t.containerInfo)}function od(e,t,n,r,i){return $r(),ic(i),t.flags|=256,Ve(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function hh(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(pe,i&1),e===null)return Fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fa(a,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qs(n),t.memoizedState=Ys,e):yc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return py(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=kn(l,o):(o=Bn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Qs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return o=e.child,e=o.sibling,r=kn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yc(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&ic(r),Ar(t,e.child,null,n),e=yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function py(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(C(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fa({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Ar(t,e.child,null,a),t.child.memoizedState=Qs(a),t.memoizedState=Ys,o);if((t.mode&1)===0)return xo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Ql(o,r,void 0),xo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Je||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),$t(r,e,i,-1))}return Ec(),r=Ql(Error(C(421))),xo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Py.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,it=gn(i.nextSibling),ot=t,de=!0,Et=null,e!==null&&(ft[dt++]=Ut,ft[dt++]=Bt,ft[dt++]=Vn,Ut=e.id,Bt=e.overflow,Vn=t),t=yc(t,r.children),t.flags|=4096,t)}function ad(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Us(e.return,t,n)}function Kl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ad(e,n,t);else if(e.tag===19)ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function my(e,t,n){switch(t.tag){case 3:mh(t),$r();break;case 5:Wm(t);break;case 1:qe(t.type)&&la(t);break;case 4:cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(pe,pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?hh(e,t,n):(le(pe,pe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);le(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return vh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,dh(e,t,n)}return Qt(e,t,n)}var gh,Ks,yh,xh;gh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ks=function(){};yh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn(Dt.current);var o=null;switch(n){case"input":i=gs(e,i),r=gs(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=ws(e,i),r=ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}Ss(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hy(e,t,n){var r=t.pendingProps;switch(rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return qe(t.type)&&aa(),Ue(t),null;case 3:return r=t.stateNode,Nr(),ce(Ze),ce(We),dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(ru(Et),Et=null))),Ks(e,t),Ue(t),null;case 5:fc(t);var i=jn(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)yh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ue(t),null}if(e=jn(Dt.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Lt]=t,r[Ri]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)se(si[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":hf(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":gf(r,o),se("invalid",r)}Ss(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),i=["children",""+l]):bi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&se("scroll",r)}switch(n){case"input":lo(r),vf(r,o,!0);break;case"textarea":lo(r),yf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Lt]=t,e[Ri]=r,gh(e,t,!1,!1),t.stateNode=e;e:{switch(a=bs(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)se(si[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":hf(e,r),i=gs(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),se("invalid",e);break;case"textarea":gf(e,r),i=ws(e,r),se("invalid",e);break;default:i=r}Ss(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Kp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Yp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ei(e,s):typeof s=="number"&&Ei(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&se("scroll",e):s!=null&&Bu(e,o,s,a))}switch(n){case"input":lo(e),vf(e,r,!1);break;case"textarea":lo(e),yf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=jn(Ii.current),jn(Dt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zm(),$r(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Lt]=t}else $r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else Et!==null&&(ru(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(pe.current&1)!==0?Ee===0&&(Ee=3):Ec())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Nr(),Ks(e,t),e===null&&Ni(t.stateNode.containerInfo),Ue(t),null;case 10:return lc(t.type._context),Ue(t),null;case 17:return qe(t.type)&&aa(),Ue(t),null;case 19:if(ce(pe),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=pa(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>Rr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=pa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!de)return Ue(t),null}else 2*we()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=pe.current,le(pe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function vy(e,t){switch(rc(t),t.tag){case 1:return qe(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),ce(Ze),ce(We),dc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return fc(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return Nr(),null;case 10:return lc(t.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var wo=!1,Be=!1,gy=typeof WeakSet=="function"?WeakSet:Set,D=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Xs(e,t,n){try{n()}catch(r){ge(e,t,r)}}var ld=!1;function yy(e,t){if(Rs=na,e=bm(),tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++c===r&&(s=a),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},na=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,E=g.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:St(t.type,x),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ge(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return g=ld,ld=!1,g}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xs(t,n,o)}i=i.next}while(i!==r)}}function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Js(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wh(e){var t=e.alternate;t!==null&&(e.alternate=null,wh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[Ri],delete t[Ds],delete t[ey],delete t[ty])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kh(e){return e.tag===5||e.tag===3||e.tag===4}function sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(Zs(e,t,n),e=e.sibling;e!==null;)Zs(e,t,n),e=e.sibling}function qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qs(e,t,n),e=e.sibling;e!==null;)qs(e,t,n),e=e.sibling}var Ie=null,bt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Sh(e,t,n),n=n.sibling}function Sh(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Be||mr(n,t);case 6:var r=Ie,i=bt;Ie=null,nn(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Oi(e)):Bl(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,nn(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&Xs(n,t,a),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!Be&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,nn(e,t,n),Be=r):nn(e,t,n);break;default:nn(e,t,n)}}function ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gy),t.forEach(function(r){var i=_y.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,bt=!1;break e;case 3:Ie=l.stateNode.containerInfo,bt=!0;break e;case 4:Ie=l.stateNode.containerInfo,bt=!0;break e}l=l.return}if(Ie===null)throw Error(C(160));Sh(o,a,i),Ie=null,bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bh(t,e),t=t.sibling}function bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Tt(e),r&4){try{gi(3,e,e.return),ja(3,e)}catch(x){ge(e,e.return,x)}try{gi(5,e,e.return)}catch(x){ge(e,e.return,x)}}break;case 1:kt(t,e),Tt(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(kt(t,e),Tt(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var i=e.stateNode;try{Ei(i,"")}catch(x){ge(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Hp(i,o),bs(l,a);var u=bs(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?Kp(i,d):c==="dangerouslySetInnerHTML"?Yp(i,d):c==="children"?Ei(i,d):Bu(i,c,d,u)}switch(l){case"input":ys(i,o);break;case"textarea":Vp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?wr(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ri]=o}catch(x){ge(e,e.return,x)}}break;case 6:if(kt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ge(e,e.return,x)}}break;case 3:if(kt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(x){ge(e,e.return,x)}break;case 4:kt(t,e),Tt(e);break;case 13:kt(t,e),Tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(kc=we())),r&4&&ud(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,kt(t,e),Be=u):kt(t,e),Tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(D=e,c=e.child;c!==null;){for(d=D=c;D!==null;){switch(p=D,v=p.child,p.tag){case 0:case 11:case 14:case 15:gi(4,p,p.return);break;case 1:mr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){ge(r,n,x)}}break;case 5:mr(p,p.return);break;case 22:if(p.memoizedState!==null){fd(d);continue}}v!==null?(v.return=p,D=v):fd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Qp("display",a))}catch(x){ge(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ge(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),Tt(e),r&4&&ud(e);break;case 21:break;default:kt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kh(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var o=sd(e);qs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=sd(e);Zs(e,l,a);break;default:throw Error(C(161))}}catch(s){ge(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xy(e,t,n){D=e,Eh(e)}function Eh(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Be;l=wo;var u=Be;if(wo=a,(Be=s)&&!u)for(D=i;D!==null;)a=D,s=a.child,a.tag===22&&a.memoizedState!==null?dd(i):s!==null?(s.return=a,D=s):dd(i);for(;o!==null;)D=o,Eh(o),o=o.sibling;D=i,wo=l,Be=u}cd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,D=o):cd(e)}}function cd(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Oi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Be||t.flags&512&&Js(t)}catch(p){ge(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function fd(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function dd(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ja(4,t)}catch(s){ge(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ge(t,i,s)}}var o=t.return;try{Js(t)}catch(s){ge(t,o,s)}break;case 5:var a=t.return;try{Js(t)}catch(s){ge(t,a,s)}}}catch(s){ge(t,t.return,s)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var wy=Math.ceil,va=Zt.ReactCurrentDispatcher,xc=Zt.ReactCurrentOwner,ht=Zt.ReactCurrentBatchConfig,J=0,Oe=null,ke=null,ze=0,rt=0,hr=An(0),Ee=0,Mi=null,Yn=0,Ma=0,wc=0,yi=null,Xe=null,kc=0,Rr=1/0,Mt=null,ga=!1,eu=null,xn=null,ko=!1,fn=null,ya=0,xi=0,tu=null,Wo=-1,Ho=0;function Ge(){return(J&6)!==0?we():Wo!==-1?Wo:Wo=we()}function wn(e){return(e.mode&1)===0?1:(J&2)!==0&&ze!==0?ze&-ze:ry.transition!==null?(Ho===0&&(Ho=lm()),Ho):(e=re,e!==0||(e=window.event,e=e===void 0?16:mm(e.type)),e)}function $t(e,t,n,r){if(50<xi)throw xi=0,tu=null,Error(C(185));Yi(e,n,r),((J&2)===0||e!==Oe)&&(e===Oe&&((J&2)===0&&(Ma|=n),Ee===4&&un(e,ze)),et(e,r),n===1&&J===0&&(t.mode&1)===0&&(Rr=we()+500,Ia&&Nn()))}function et(e,t){var n=e.callbackNode;r0(e,t);var r=ta(e,e===Oe?ze:0);if(r===0)n!==null&&kf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kf(n),t===1)e.tag===0?ny(pd.bind(null,e)):Rm(pd.bind(null,e)),Z0(function(){(J&6)===0&&Nn()}),n=null;else{switch(sm(r)){case 1:n=Yu;break;case 4:n=om;break;case 16:n=ea;break;case 536870912:n=am;break;default:n=ea}n=Th(n,Ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ch(e,t){if(Wo=-1,Ho=0,(J&6)!==0)throw Error(C(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=ta(e,e===Oe?ze:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xa(e,r);else{t=r;var i=J;J|=2;var o=_h();(Oe!==e||ze!==t)&&(Mt=null,Rr=we()+500,Un(e,t));do try{by();break}catch(l){Ph(e,l)}while(1);ac(),va.current=o,J=i,ke!==null?t=0:(Oe=null,ze=0,t=Ee)}if(t!==0){if(t===2&&(i=Os(e),i!==0&&(r=i,t=nu(e,i))),t===1)throw n=Mi,Un(e,0),un(e,r),et(e,we()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,(r&30)===0&&!ky(i)&&(t=xa(e,r),t===2&&(o=Os(e),o!==0&&(r=o,t=nu(e,o))),t===1))throw n=Mi,Un(e,0),un(e,r),et(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Rn(e,Xe,Mt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=kc+500-we(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zs(Rn.bind(null,e,Xe,Mt),t);break}Rn(e,Xe,Mt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ot(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wy(r/1960))-r,10<r){e.timeoutHandle=zs(Rn.bind(null,e,Xe,Mt),r);break}Rn(e,Xe,Mt);break;case 5:Rn(e,Xe,Mt);break;default:throw Error(C(329))}}}return et(e,we()),e.callbackNode===n?Ch.bind(null,e):null}function nu(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=xa(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ru(t)),e}function ru(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function ky(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!At(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~wc,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if((J&6)!==0)throw Error(C(327));Cr();var t=ta(e,0);if((t&1)===0)return et(e,we()),null;var n=xa(e,t);if(e.tag!==0&&n===2){var r=Os(e);r!==0&&(t=r,n=nu(e,r))}if(n===1)throw n=Mi,Un(e,0),un(e,t),et(e,we()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Xe,Mt),et(e,we()),null}function Sc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Rr=we()+500,Ia&&Nn())}}function Qn(e){fn!==null&&fn.tag===0&&(J&6)===0&&Cr();var t=J;J|=1;var n=ht.transition,r=re;try{if(ht.transition=null,re=1,e)return e()}finally{re=r,ht.transition=n,J=t,(J&6)===0&&Nn()}}function bc(){rt=hr.current,ce(hr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,J0(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:Nr(),ce(Ze),ce(We),dc();break;case 5:fc(r);break;case 4:Nr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:lc(r.type._context);break;case 22:case 23:bc()}n=n.return}if(Oe=e,ke=e=kn(e.current,null),ze=rt=t,Ee=0,Mi=null,wc=Ma=Yn=0,Xe=yi=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Dn=null}return e}function Ph(e,t){do{var n=ke;try{if(ac(),Fo.current=ha,ma){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ma=!1}if(Gn=0,_e=be=me=null,vi=!1,zi=0,xc.current=null,n===null||n.return===null){Ee=1,Mi=t,ke=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=ed(a);if(v!==null){v.flags&=-257,td(v,a,l,o,t),v.mode&1&&qf(o,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(s),t.updateQueue=x}else g.add(s);break e}else{if((t&1)===0){qf(o,u,t),Ec();break e}s=Error(C(426))}}else if(de&&l.mode&1){var E=ed(a);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),td(E,a,l,o,t),ic(Tr(s,l));break e}}o=s=Tr(s,l),Ee!==4&&(Ee=2),yi===null?yi=[o]:yi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=uh(o,s,t);Gf(o,m);break e;case 1:l=s;var f=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xn===null||!xn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=ch(o,l,t);Gf(o,w);break e}}o=o.return}while(o!==null)}$h(n)}catch(b){t=b,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function _h(){var e=va.current;return va.current=ha,e===null?ha:e}function Ec(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Oe===null||(Yn&268435455)===0&&(Ma&268435455)===0||un(Oe,ze)}function xa(e,t){var n=J;J|=2;var r=_h();(Oe!==e||ze!==t)&&(Mt=null,Un(e,t));do try{Sy();break}catch(i){Ph(e,i)}while(1);if(ac(),J=n,va.current=r,ke!==null)throw Error(C(261));return Oe=null,ze=0,Ee}function Sy(){for(;ke!==null;)Oh(ke)}function by(){for(;ke!==null&&!Qg();)Oh(ke)}function Oh(e){var t=Nh(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?$h(e):ke=t,xc.current=null}function $h(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hy(n,t,rt),n!==null){ke=n;return}}else{if(n=vy(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ee===0&&(Ee=5)}function Rn(e,t,n){var r=re,i=ht.transition;try{ht.transition=null,re=1,Ey(e,t,n,r)}finally{ht.transition=i,re=r}return null}function Ey(e,t,n,r){do Cr();while(fn!==null);if((J&6)!==0)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(i0(e,o),e===Oe&&(ke=Oe=null,ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ko||(ko=!0,Th(ea,function(){return Cr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ht.transition,ht.transition=null;var a=re;re=1;var l=J;J|=4,xc.current=null,yy(e,n),bh(n,e),H0(Ls),na=!!Rs,Ls=Rs=null,e.current=n,xy(n),Kg(),J=l,re=a,ht.transition=o}else e.current=n;if(ko&&(ko=!1,fn=e,ya=i),o=e.pendingLanes,o===0&&(xn=null),Zg(n.stateNode),et(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,e=eu,eu=null,e;return(ya&1)!==0&&e.tag!==0&&Cr(),o=e.pendingLanes,(o&1)!==0?e===tu?xi++:(xi=0,tu=e):xi=0,Nn(),null}function Cr(){if(fn!==null){var e=sm(ya),t=ht.transition,n=re;try{if(ht.transition=null,re=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,ya=0,(J&6)!==0)throw Error(C(331));var i=J;for(J|=4,D=e.current;D!==null;){var o=D,a=o.child;if((D.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:gi(8,c,o)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var p=c.sibling,v=c.return;if(wh(c),c===u){D=null;break}if(p!==null){p.return=v,D=p;break}D=v}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}D=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:gi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,D=m;break e}D=o.return}}var f=e.current;for(D=f;D!==null;){a=D;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,D=h;else e:for(a=f;D!==null;){if(l=D,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ja(9,l)}}catch(b){ge(l,l.return,b)}if(l===a){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(J=i,Nn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Aa,e)}catch{}r=!0}return r}finally{re=n,ht.transition=t}}return!1}function md(e,t,n){t=Tr(n,t),t=uh(e,t,1),e=yn(e,t,1),t=Ge(),e!==null&&(Yi(e,1,t),et(e,t))}function ge(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=Tr(n,e),e=ch(t,e,1),t=yn(t,e,1),e=Ge(),t!==null&&(Yi(t,1,e),et(t,e));break}}t=t.return}}function Cy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(ze&n)===n&&(Ee===4||Ee===3&&(ze&130023424)===ze&&500>we()-kc?Un(e,0):wc|=n),et(e,t)}function Ah(e,t){t===0&&((e.mode&1)===0?t=1:(t=co,co<<=1,(co&130023424)===0&&(co=4194304)));var n=Ge();e=Yt(e,t),e!==null&&(Yi(e,t,n),et(e,n))}function Py(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ah(e,n)}function _y(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Ah(e,n)}var Nh;Nh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,my(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,de&&(t.flags&1048576)!==0&&Lm(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var i=Or(t,We.current);Er(t,n),i=mc(null,t,r,e,i,n);var o=hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,la(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(t),i.updater=za,t.stateNode=i,i._reactInternals=t,Ws(t,r,e,n),t=Gs(null,t,r,!0,o,n)):(t.tag=0,de&&o&&nc(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$y(r),e=St(r,e),i){case 0:t=Vs(null,t,r,e,n);break e;case 1:t=id(null,t,r,e,n);break e;case 11:t=nd(null,t,r,e,n);break e;case 14:t=rd(null,t,r,St(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Vs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),id(e,t,r,i,n);case 3:e:{if(mh(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jm(e,t),da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tr(Error(C(423)),t),t=od(e,t,r,n,i);break e}else if(r!==i){i=Tr(Error(C(424)),t),t=od(e,t,r,n,i);break e}else for(it=gn(t.stateNode.containerInfo.firstChild),ot=t,de=!0,Et=null,n=Bm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=Qt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Wm(t),e===null&&Fs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Is(r,i)?a=null:o!==null&&Is(r,o)&&(t.flags|=32),ph(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&Fs(t),null;case 13:return hh(e,t,n);case 4:return cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),nd(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,le(ca,r._currentValue),r._currentValue=a,o!==null)if(At(o.value,a)){if(o.children===i.children&&!Ze.current){t=Qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Us(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Us(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=gt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),rd(e,t,r,i,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Bo(e,t),t.tag=1,qe(r)?(e=!0,la(t)):e=!1,Er(t,n),Fm(t,r,i),Ws(t,r,i,n),Gs(null,t,r,!0,e,n);case 19:return vh(e,t,n);case 22:return dh(e,t,n)}throw Error(C(156,t.tag))};function Th(e,t){return im(e,t)}function Oy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new Oy(e,t,n,r)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $y(e){if(typeof e=="function")return Cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Vu)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Cc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case or:return Bn(n.children,i,o,t);case Wu:a=8,i|=8;break;case ps:return e=pt(12,n,t,i|2),e.elementType=ps,e.lanes=o,e;case ms:return e=pt(13,n,t,i),e.elementType=ms,e.lanes=o,e;case hs:return e=pt(19,n,t,i),e.elementType=hs,e.lanes=o,e;case Up:return Fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mp:a=10;break e;case Fp:a=9;break e;case Hu:a=11;break e;case Vu:a=14;break e;case an:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Up,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pc(e,t,n,r,i,o,a,l,s){return e=new Ay(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(o),e}function Ny(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rh(e){if(!e)return Cn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(qe(n))return Tm(e,n,t)}return t}function Lh(e,t,n,r,i,o,a,l,s){return e=Pc(n,r,!0,e,i,o,a,l,s),e.context=Rh(null),n=e.current,r=Ge(),i=wn(n),o=Wt(r,i),o.callback=t!=null?t:null,yn(n,o,i),e.current.lanes=i,Yi(e,i,r),et(e,r),e}function Ua(e,t,n,r){var i=t.current,o=Ge(),a=wn(i);return n=Rh(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(i,t,a),e!==null&&($t(e,i,a,o),Mo(e,i,a)),a}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _c(e,t){hd(e,t),(e=e.alternate)&&hd(e,t)}function Ty(){return null}var Ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oc(e){this._internalRoot=e}Ba.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ua(e,t,null,null)};Ba.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Ua(null,e,null,null)}),t[Gt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=fm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&pm(e)}};function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(){}function Ry(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wa(a);o.call(u)}}var a=Lh(t,r,e,0,null,!1,!1,"",vd);return e._reactRootContainer=a,e[Gt]=a.current,Ni(e.nodeType===8?e.parentNode:e),Qn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=wa(s);l.call(u)}}var s=Pc(e,0,!1,null,null,!1,!1,"",vd);return e._reactRootContainer=s,e[Gt]=s.current,Ni(e.nodeType===8?e.parentNode:e),Qn(function(){Ua(t,s,n,r)}),s}function Ha(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=wa(a);l.call(s)}}Ua(t,a,e,i)}else a=Ry(n,t,e,i,r);return wa(a)}um=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(Qu(t,n|1),et(t,we()),(J&6)===0&&(Rr=we()+500,Nn()))}break;case 13:Qn(function(){var r=Yt(e,1);if(r!==null){var i=Ge();$t(r,e,1,i)}}),_c(e,1)}};Ku=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ge();$t(t,e,134217728,n)}_c(e,134217728)}};cm=function(e){if(e.tag===13){var t=wn(e),n=Yt(e,t);if(n!==null){var r=Ge();$t(n,e,t,r)}_c(e,t)}};fm=function(){return re};dm=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Cs=function(e,t,n){switch(t){case"input":if(ys(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=La(r);if(!i)throw Error(C(90));Wp(r),ys(r,i)}}}break;case"textarea":Vp(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};Zp=Sc;qp=Qn;var Ly={usingClientEntryPoint:!1,Events:[Ki,ur,La,Xp,Jp,Sc]},ei={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Iy={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nm(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Aa=So.inject(Iy),zt=So}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ly;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(t))throw Error(C(200));return Ny(e,t,null,n)};lt.createRoot=function(e,t){if(!$c(e))throw Error(C(299));var n=!1,r="",i=Ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pc(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Ni(e.nodeType===8?e.parentNode:e),new Oc(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=nm(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Qn(e)};lt.hydrate=function(e,t,n){if(!Wa(t))throw Error(C(200));return Ha(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!$c(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Lh(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Gt]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ba(t)};lt.render=function(e,t,n){if(!Wa(t))throw Error(C(200));return Ha(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(C(40));return e._reactRootContainer?(Qn(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};lt.unstable_batchedUpdates=Sc;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wa(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ha(e,t,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=lt})(_p);var gd=_p.exports;cs.createRoot=gd.createRoot,cs.hydrateRoot=gd.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const yd="popstate";function zy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return iu("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ou(i)}return jy(t,n,null,e)}function Dy(){return Math.random().toString(36).substr(2,8)}function xd(e){return{usr:e.state,key:e.key}}function iu(e,t,n,r){return n===void 0&&(n=null),ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:n,key:t&&t.key||r||Dy()})}function ou(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=dn.Pop,s=null;function u(){l=dn.Pop,s&&s({action:l,location:p.location})}function c(v,g){l=dn.Push;let x=iu(p.location,v,g);n&&n(x,v);let E=xd(x),m=p.createHref(x);try{a.pushState(E,"",m)}catch{i.location.assign(m)}o&&s&&s({action:l,location:x})}function d(v,g){l=dn.Replace;let x=iu(p.location,v,g);n&&n(x,v);let E=xd(x),m=p.createHref(x);a.replaceState(E,"",m),o&&s&&s({action:l,location:x})}let p={get action(){return l},get location(){return e(i,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(yd,u),s=v,()=>{i.removeEventListener(yd,u),s=null}},createHref(v){return t(i,v)},push:c,replace:d,go(v){return a.go(v)}};return p}var wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wd||(wd={}));function My(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ur(t):t,i=Dh(r.pathname||"/",n);if(i==null)return null;let o=zh(e);Fy(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=Ky(o[l],i);return a}function zh(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&($e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=Sn([r,a.relativePath]),s=n.concat(a);i.children&&i.children.length>0&&($e(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),zh(i.children,t,s,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Yy(l,i.index),routesMeta:s})}),t}function Fy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Uy=/^:\w+$/,By=3,Wy=2,Hy=1,Vy=10,Gy=-2,kd=e=>e==="*";function Yy(e,t){let n=e.split("/"),r=n.length;return n.some(kd)&&(r+=Gy),t&&(r+=Wy),n.filter(i=>!kd(i)).reduce((i,o)=>i+(Uy.test(o)?By:o===""?Hy:Vy),r)}function Qy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ky(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Xy({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:Sn([i,c.pathname]),pathnameBase:t1(Sn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Sn([i,c.pathnameBase]))}return o}function Xy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=l[d]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=Zy(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Jy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Zy(e,t){try{return decodeURIComponent(e)}catch(n){return jh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Dh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e;return{pathname:n?n.startsWith("/")?n:e1(n,t):t,search:n1(r),hash:r1(i)}}function e1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ur(e):(i=ka({},e),$e(!i.pathname||!i.pathname.includes("?"),Zl("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Zl("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Zl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=qy(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),t1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class i1{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function o1(e){return e instanceof i1}var Va={exports:{}},Ga={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=_.exports,l1=Symbol.for("react.element"),s1=Symbol.for("react.fragment"),u1=Object.prototype.hasOwnProperty,c1=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f1={key:!0,ref:!0,__self:!0,__source:!0};function Fh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)u1.call(t,r)&&!f1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:l1,type:e,key:o,ref:a,props:i,_owner:c1.current}}Ga.Fragment=s1;Ga.jsx=Fh;Ga.jsxs=Fh;(function(e){e.exports=Ga})(Va);const Ji=Va.exports.Fragment,y=Va.exports.jsx,j=Va.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function au(){return au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function d1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const p1=typeof Object.is=="function"?Object.is:d1,{useState:m1,useEffect:h1,useLayoutEffect:v1,useDebugValue:g1}=fs;function y1(e,t,n){const r=t(),[{inst:i},o]=m1({inst:{value:r,getSnapshot:t}});return v1(()=>{i.value=r,i.getSnapshot=t,ql(i)&&o({inst:i})},[e,r,t]),h1(()=>(ql(i)&&o({inst:i}),e(()=>{ql(i)&&o({inst:i})})),[e]),g1(r),r}function ql(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!p1(n,r)}catch{return!0}}function x1(e,t,n){return t()}const w1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k1=!w1,S1=k1?x1:y1;"useSyncExternalStore"in fs&&(e=>e.useSyncExternalStore)(fs);const b1=_.exports.createContext(null),E1=_.exports.createContext(null),Uh=_.exports.createContext(null),Ac=_.exports.createContext(null),Ya=_.exports.createContext(null),tr=_.exports.createContext({outlet:null,matches:[]}),Bh=_.exports.createContext(null);function C1(e,t){let{relative:n}=t===void 0?{}:t;Zi()||$e(!1);let{basename:r,navigator:i}=_.exports.useContext(Ac),{hash:o,pathname:a,search:l}=Hh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Sn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Zi(){return _.exports.useContext(Ya)!=null}function Qa(){return Zi()||$e(!1),_.exports.useContext(Ya).location}function Wh(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function P1(){Zi()||$e(!1);let{basename:e,navigator:t}=_.exports.useContext(Ac),{matches:n}=_.exports.useContext(tr),{pathname:r}=Qa(),i=JSON.stringify(Wh(n).map(l=>l.pathnameBase)),o=_.exports.useRef(!1);return _.exports.useEffect(()=>{o.current=!0}),_.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let u=Mh(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Sn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}const _1=_.exports.createContext(null);function O1(e){let t=_.exports.useContext(tr).outlet;return t&&y(_1.Provider,{value:e,children:t})}function Nc(){let{matches:e}=_.exports.useContext(tr),t=e[e.length-1];return t?t.params:{}}function Hh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.exports.useContext(tr),{pathname:i}=Qa(),o=JSON.stringify(Wh(r).map(a=>a.pathnameBase));return _.exports.useMemo(()=>Mh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function $1(e,t){Zi()||$e(!1);let n=_.exports.useContext(Uh),{matches:r}=_.exports.useContext(tr),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=Qa(),s;if(t){var u;let g=typeof t=="string"?Ur(t):t;a==="/"||((u=g.pathname)==null?void 0:u.startsWith(a))||$e(!1),s=g}else s=l;let c=s.pathname||"/",d=a==="/"?c:c.slice(a.length)||"/",p=My(e,{pathname:d}),v=R1(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Sn([a,g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Sn([a,g.pathnameBase])})),r,n||void 0);return t?y(Ya.Provider,{value:{location:au({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:dn.Pop},children:v}):v}function A1(){let e=I1(),t=o1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return j(Ji,{children:[y("h2",{children:"Unhandled Thrown Error!"}),y("h3",{style:{fontStyle:"italic"},children:t}),n?y("pre",{style:i,children:n}):null,y("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),j("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",y("code",{style:o,children:"errorElement"})," props on\xA0",y("code",{style:o,children:"<Route>"})]})]})}class N1 extends _.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y(Bh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function T1(e){let{routeContext:t,match:n,children:r}=e,i=_.exports.useContext(b1);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),y(tr.Provider,{value:t,children:r})}function R1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||$e(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||y(A1,{}):null,c=()=>y(T1,{match:a,routeContext:{outlet:o,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:o});return n&&(a.route.errorElement||l===0)?y(N1,{location:n.location,component:u,error:s,children:c()}):c()},null)}var Sd;(function(e){e.UseRevalidator="useRevalidator"})(Sd||(Sd={}));var lu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(lu||(lu={}));function L1(e){let t=_.exports.useContext(Uh);return t||$e(!1),t}function I1(){var e;let t=_.exports.useContext(Bh),n=L1(lu.UseRouteError),r=_.exports.useContext(tr),i=r.matches[r.matches.length-1];return t||(r||$e(!1),i.route.id||$e(!1),(e=n.errors)==null?void 0:e[i.route.id])}function z1(e){return O1(e.context)}function Ln(e){$e(!1)}function D1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:o,static:a=!1}=e;Zi()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=_.exports.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ur(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:v="default"}=r,g=_.exports.useMemo(()=>{let x=Dh(u,l);return x==null?null:{pathname:x,search:c,hash:d,state:p,key:v}},[l,u,c,d,p,v]);return g==null?null:y(Ac.Provider,{value:s,children:y(Ya.Provider,{children:n,value:{location:g,navigationType:i}})})}function j1(e){let{children:t,location:n}=e,r=_.exports.useContext(E1),i=r&&!t?r.router.routes:su(t);return $1(i,n)}var bd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(bd||(bd={}));new Promise(()=>{});function su(e,t){t===void 0&&(t=[]);let n=[];return _.exports.Children.forEach(e,(r,i)=>{if(!_.exports.isValidElement(r))return;if(r.type===_.exports.Fragment){n.push.apply(n,su(r.props.children,t));return}r.type!==Ln&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=su(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function M1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function F1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U1(e,t){return e.button===0&&(!t||t==="_self")&&!F1(e)}const B1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function W1(e){let{basename:t,children:n,window:r}=e,i=_.exports.useRef();i.current==null&&(i.current=zy({window:r,v5Compat:!0}));let o=i.current,[a,l]=_.exports.useState({action:o.action,location:o.location});return _.exports.useLayoutEffect(()=>o.listen(l),[o]),y(D1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Ct=_.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=M1(t,B1),p=C1(u,{relative:i}),v=H1(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function g(x){r&&r(x),x.defaultPrevented||v(x)}return y("a",{...d,href:p,onClick:o?r:g,ref:n,target:s})});var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ed||(Ed={}));var Cd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cd||(Cd={}));function H1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=P1(),s=Qa(),u=Hh(e,{relative:a});return _.exports.useCallback(c=>{if(U1(c,n)){c.preventDefault();let d=r!==void 0?r:ou(s)===ou(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var Tc={exports:{}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=Symbol.for("react.element"),Lc=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Za=Symbol.for("react.provider"),qa=Symbol.for("react.context"),V1=Symbol.for("react.server_context"),el=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),rl=Symbol.for("react.memo"),il=Symbol.for("react.lazy"),G1=Symbol.for("react.offscreen"),Vh;Vh=Symbol.for("react.module.reference");function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rc:switch(e=e.type,e){case Ka:case Ja:case Xa:case tl:case nl:return e;default:switch(e=e&&e.$$typeof,e){case V1:case qa:case el:case il:case rl:case Za:return e;default:return t}}case Lc:return t}}}ie.ContextConsumer=qa;ie.ContextProvider=Za;ie.Element=Rc;ie.ForwardRef=el;ie.Fragment=Ka;ie.Lazy=il;ie.Memo=rl;ie.Portal=Lc;ie.Profiler=Ja;ie.StrictMode=Xa;ie.Suspense=tl;ie.SuspenseList=nl;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(e){return xt(e)===qa};ie.isContextProvider=function(e){return xt(e)===Za};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rc};ie.isForwardRef=function(e){return xt(e)===el};ie.isFragment=function(e){return xt(e)===Ka};ie.isLazy=function(e){return xt(e)===il};ie.isMemo=function(e){return xt(e)===rl};ie.isPortal=function(e){return xt(e)===Lc};ie.isProfiler=function(e){return xt(e)===Ja};ie.isStrictMode=function(e){return xt(e)===Xa};ie.isSuspense=function(e){return xt(e)===tl};ie.isSuspenseList=function(e){return xt(e)===nl};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ka||e===Ja||e===Xa||e===tl||e===nl||e===G1||typeof e=="object"&&e!==null&&(e.$$typeof===il||e.$$typeof===rl||e.$$typeof===Za||e.$$typeof===qa||e.$$typeof===el||e.$$typeof===Vh||e.getModuleId!==void 0)};ie.typeOf=xt;(function(e){e.exports=ie})(Tc);function Y1(e){function t(N,L,z,H,k){for(var X=0,$=0,ve=0,ee=0,ne,Y,Te=0,Ke=0,Z,Me=Z=ne=0,te=0,Re=0,Vr=0,Le=0,io=z.length,Gr=io-1,wt,V="",xe="",El="",Cl="",tn;te<io;){if(Y=z.charCodeAt(te),te===Gr&&$+ee+ve+X!==0&&($!==0&&(Y=$===47?10:47),ee=ve=X=0,io++,Gr++),$+ee+ve+X===0){if(te===Gr&&(0<Re&&(V=V.replace(p,"")),0<V.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:V+=z.charAt(te)}Y=59}switch(Y){case 123:for(V=V.trim(),ne=V.charCodeAt(0),Z=1,Le=++te;te<io;){switch(Y=z.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Y=z.charCodeAt(te+1)){case 42:case 47:e:{for(Me=te+1;Me<Gr;++Me)switch(z.charCodeAt(Me)){case 47:if(Y===42&&z.charCodeAt(Me-1)===42&&te+2!==Me){te=Me+1;break e}break;case 10:if(Y===47){te=Me+1;break e}}te=Me}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;te++<Gr&&z.charCodeAt(te)!==Y;);}if(Z===0)break;te++}switch(Z=z.substring(Le,te),ne===0&&(ne=(V=V.replace(d,"").trim()).charCodeAt(0)),ne){case 64:switch(0<Re&&(V=V.replace(p,"")),Y=V.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Re=L;break;default:Re=jt}if(Z=t(L,Re,Z,Y,k+1),Le=Z.length,0<O&&(Re=n(jt,V,Vr),tn=l(3,Z,Re,L,Ne,Se,Le,Y,k,H),V=Re.join(""),tn!==void 0&&(Le=(Z=tn.trim()).length)===0&&(Y=0,Z="")),0<Le)switch(Y){case 115:V=V.replace(P,a);case 100:case 109:case 45:Z=V+"{"+Z+"}";break;case 107:V=V.replace(f,"$1 $2"),Z=V+"{"+Z+"}",Z=je===1||je===2&&o("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=V+Z,H===112&&(Z=(xe+=Z,""))}else Z="";break;default:Z=t(L,n(L,V,Vr),Z,H,k+1)}El+=Z,Z=Vr=Re=Me=ne=0,V="",Y=z.charCodeAt(++te);break;case 125:case 59:if(V=(0<Re?V.replace(p,""):V).trim(),1<(Le=V.length))switch(Me===0&&(ne=V.charCodeAt(0),ne===45||96<ne&&123>ne)&&(Le=(V=V.replace(" ",":")).length),0<O&&(tn=l(1,V,L,N,Ne,Se,xe.length,H,k,H))!==void 0&&(Le=(V=tn.trim()).length)===0&&(V="\0\0"),ne=V.charCodeAt(0),Y=V.charCodeAt(1),ne){case 0:break;case 64:if(Y===105||Y===99){Cl+=V+z.charAt(te);break}default:V.charCodeAt(Le-1)!==58&&(xe+=i(V,ne,Y,V.charCodeAt(2)))}Vr=Re=Me=ne=0,V="",Y=z.charCodeAt(++te)}}switch(Y){case 13:case 10:$===47?$=0:1+ne===0&&H!==107&&0<V.length&&(Re=1,V+="\0"),0<O*W&&l(0,V,L,N,Ne,Se,xe.length,H,k,H),Se=1,Ne++;break;case 59:case 125:if($+ee+ve+X===0){Se++;break}default:switch(Se++,wt=z.charAt(te),Y){case 9:case 32:if(ee+X+$===0)switch(Te){case 44:case 58:case 9:case 32:wt="";break;default:Y!==32&&(wt=" ")}break;case 0:wt="\\0";break;case 12:wt="\\f";break;case 11:wt="\\v";break;case 38:ee+$+X===0&&(Re=Vr=1,wt="\f"+wt);break;case 108:if(ee+$+X+nt===0&&0<Me)switch(te-Me){case 2:Te===112&&z.charCodeAt(te-3)===58&&(nt=Te);case 8:Ke===111&&(nt=Ke)}break;case 58:ee+$+X===0&&(Me=te);break;case 44:$+ve+ee+X===0&&(Re=1,wt+="\r");break;case 34:case 39:$===0&&(ee=ee===Y?0:ee===0?Y:ee);break;case 91:ee+$+ve===0&&X++;break;case 93:ee+$+ve===0&&X--;break;case 41:ee+$+X===0&&ve--;break;case 40:if(ee+$+X===0){if(ne===0)switch(2*Te+3*Ke){case 533:break;default:ne=1}ve++}break;case 64:$+ve+ee+X+Me+Z===0&&(Z=1);break;case 42:case 47:if(!(0<ee+X+ve))switch($){case 0:switch(2*Y+3*z.charCodeAt(te+1)){case 235:$=47;break;case 220:Le=te,$=42}break;case 42:Y===47&&Te===42&&Le+2!==te&&(z.charCodeAt(Le+2)===33&&(xe+=z.substring(Le,te+1)),wt="",$=0)}}$===0&&(V+=wt)}Ke=Te,Te=Y,te++}if(Le=xe.length,0<Le){if(Re=L,0<O&&(tn=l(2,xe,Re,N,Ne,Se,Le,H,k,H),tn!==void 0&&(xe=tn).length===0))return Cl+xe+El;if(xe=Re.join(",")+"{"+xe+"}",je*nt!==0){switch(je!==2||o(xe,2)||(nt=0),nt){case 111:xe=xe.replace(w,":-moz-$1")+xe;break;case 112:xe=xe.replace(h,"::-webkit-input-$1")+xe.replace(h,"::-moz-$1")+xe.replace(h,":-ms-input-$1")+xe}nt=0}}return Cl+xe+El}function n(N,L,z){var H=L.trim().split(E);L=H;var k=H.length,X=N.length;switch(X){case 0:case 1:var $=0;for(N=X===0?"":N[0]+" ";$<k;++$)L[$]=r(N,L[$],z).trim();break;default:var ve=$=0;for(L=[];$<k;++$)for(var ee=0;ee<X;++ee)L[ve++]=r(N[ee]+" ",H[$],z).trim()}return L}function r(N,L,z){var H=L.charCodeAt(0);switch(33>H&&(H=(L=L.trim()).charCodeAt(0)),H){case 38:return L.replace(m,"$1"+N.trim());case 58:return N.trim()+L.replace(m,"$1"+N.trim());default:if(0<1*z&&0<L.indexOf("\f"))return L.replace(m,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+L}function i(N,L,z,H){var k=N+";",X=2*L+3*z+4*H;if(X===944){N=k.indexOf(":",9)+1;var $=k.substring(N,k.length-1).trim();return $=k.substring(0,N).trim()+$+";",je===1||je===2&&o($,1)?"-webkit-"+$+$:$}if(je===0||je===2&&!o(k,1))return k;switch(X){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(Pe,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return $=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+k+"-ms-flex-pack"+$+k;case 1005:return g.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch($=k.substring(13).trim(),L=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(L)){case 226:$=k.replace(b,"tb");break;case 232:$=k.replace(b,"tb-rl");break;case 220:$=k.replace(b,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+$+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(L=(k=N).length-10,$=(k.charCodeAt(L)===33?k.substring(0,L):k).substring(N.indexOf(":",7)+1).trim(),X=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:k=k.replace($,"-webkit-"+$)+";"+k;break;case 207:case 102:k=k.replace($,"-webkit-"+(102<X?"inline-":"")+"box")+";"+k.replace($,"-webkit-"+$)+";"+k.replace($,"-ms-"+$+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return $=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+$+"-ms-flex-"+$+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(R,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(R,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return($=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),L,z,H).replace(":fill-available",":stretch"):k.replace($,"-webkit-"+$)+k.replace($,"-moz-"+$.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,z+H===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+k}return k}function o(N,L){var z=N.indexOf(L===1?":":"{"),H=N.substring(0,L!==3?z:10);return z=N.substring(z+1,N.length-1),U(L!==2?H:H.replace(G,"$1"),z,L)}function a(N,L){var z=i(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return z!==L+";"?z.replace(A," or ($1)").substring(4):"("+L+")"}function l(N,L,z,H,k,X,$,ve,ee,ne){for(var Y=0,Te=L,Ke;Y<O;++Y)switch(Ke=He[Y].call(c,N,Te,z,H,k,X,$,ve,ee,ne)){case void 0:case!1:case!0:case null:break;default:Te=Ke}if(Te!==L)return Te}function s(N){switch(N){case void 0:case null:O=He.length=0;break;default:if(typeof N=="function")He[O++]=N;else if(typeof N=="object")for(var L=0,z=N.length;L<z;++L)s(N[L]);else W=!!N|0}return s}function u(N){return N=N.prefix,N!==void 0&&(U=null,N?typeof N!="function"?je=1:(je=2,U=N):je=0),u}function c(N,L){var z=N;if(33>z.charCodeAt(0)&&(z=z.trim()),ae=z,z=[ae],0<O){var H=l(-1,L,z,z,Ne,Se,0,0,0,0);H!==void 0&&typeof H=="string"&&(L=H)}var k=t(jt,z,L,0,0);return 0<O&&(H=l(-2,k,z,z,Ne,Se,k.length,0,0,0),H!==void 0&&(k=H)),ae="",nt=0,Se=Ne=1,k}var d=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,w=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,R=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,Pe=/([^-])(image-set\()/,Se=1,Ne=1,nt=0,je=1,jt=[],He=[],O=0,U=null,W=0,ae="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var Q1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function K1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var X1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pd=K1(function(e){return X1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gh={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,Ic=Ae?Symbol.for("react.element"):60103,zc=Ae?Symbol.for("react.portal"):60106,ol=Ae?Symbol.for("react.fragment"):60107,al=Ae?Symbol.for("react.strict_mode"):60108,ll=Ae?Symbol.for("react.profiler"):60114,sl=Ae?Symbol.for("react.provider"):60109,ul=Ae?Symbol.for("react.context"):60110,Dc=Ae?Symbol.for("react.async_mode"):60111,cl=Ae?Symbol.for("react.concurrent_mode"):60111,fl=Ae?Symbol.for("react.forward_ref"):60112,dl=Ae?Symbol.for("react.suspense"):60113,J1=Ae?Symbol.for("react.suspense_list"):60120,pl=Ae?Symbol.for("react.memo"):60115,ml=Ae?Symbol.for("react.lazy"):60116,Z1=Ae?Symbol.for("react.block"):60121,q1=Ae?Symbol.for("react.fundamental"):60117,ex=Ae?Symbol.for("react.responder"):60118,tx=Ae?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ic:switch(e=e.type,e){case Dc:case cl:case ol:case ll:case al:case dl:return e;default:switch(e=e&&e.$$typeof,e){case ul:case fl:case ml:case pl:case sl:return e;default:return t}}case zc:return t}}}function Yh(e){return ut(e)===cl}oe.AsyncMode=Dc;oe.ConcurrentMode=cl;oe.ContextConsumer=ul;oe.ContextProvider=sl;oe.Element=Ic;oe.ForwardRef=fl;oe.Fragment=ol;oe.Lazy=ml;oe.Memo=pl;oe.Portal=zc;oe.Profiler=ll;oe.StrictMode=al;oe.Suspense=dl;oe.isAsyncMode=function(e){return Yh(e)||ut(e)===Dc};oe.isConcurrentMode=Yh;oe.isContextConsumer=function(e){return ut(e)===ul};oe.isContextProvider=function(e){return ut(e)===sl};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ic};oe.isForwardRef=function(e){return ut(e)===fl};oe.isFragment=function(e){return ut(e)===ol};oe.isLazy=function(e){return ut(e)===ml};oe.isMemo=function(e){return ut(e)===pl};oe.isPortal=function(e){return ut(e)===zc};oe.isProfiler=function(e){return ut(e)===ll};oe.isStrictMode=function(e){return ut(e)===al};oe.isSuspense=function(e){return ut(e)===dl};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ol||e===cl||e===ll||e===al||e===dl||e===J1||typeof e=="object"&&e!==null&&(e.$$typeof===ml||e.$$typeof===pl||e.$$typeof===sl||e.$$typeof===ul||e.$$typeof===fl||e.$$typeof===q1||e.$$typeof===ex||e.$$typeof===tx||e.$$typeof===Z1)};oe.typeOf=ut;(function(e){e.exports=oe})(Gh);var jc=Gh.exports,nx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ix={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mc={};Mc[jc.ForwardRef]=ix;Mc[jc.Memo]=Qh;function _d(e){return jc.isMemo(e)?Qh:Mc[e.$$typeof]||nx}var ox=Object.defineProperty,ax=Object.getOwnPropertyNames,Od=Object.getOwnPropertySymbols,lx=Object.getOwnPropertyDescriptor,sx=Object.getPrototypeOf,$d=Object.prototype;function Kh(e,t,n){if(typeof t!="string"){if($d){var r=sx(t);r&&r!==$d&&Kh(e,r,n)}var i=ax(t);Od&&(i=i.concat(Od(t)));for(var o=_d(e),a=_d(t),l=0;l<i.length;++l){var s=i[l];if(!rx[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=lx(t,s);try{ox(e,s,u)}catch{}}}}return e}var ux=Kh;function Pt(){return(Pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ad=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},uu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Tc.exports.typeOf(e)},Sa=Object.freeze([]),bn=Object.freeze({});function Lr(e){return typeof e=="function"}function Nd(e){return e.displayName||e.name||"Component"}function Fc(e){return e&&typeof e.styledComponentId=="string"}var Ir=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Uc=typeof window<"u"&&"HTMLElement"in window,cx=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),fx={};function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var dx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Kn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Go=new Map,ba=new Map,wi=1,bo=function(e){if(Go.has(e))return Go.get(e);for(;ba.has(wi);)wi++;var t=wi++;return Go.set(e,t),ba.set(t,e),t},px=function(e){return ba.get(e)},mx=function(e,t){t>=wi&&(wi=t+1),Go.set(e,t),ba.set(t,e)},hx="style["+Ir+'][data-styled-version="5.3.6"]',vx=new RegExp("^"+Ir+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),gx=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},yx=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(vx);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(mx(u,s),gx(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},xx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Xh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(Ir))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ir,"active"),r.setAttribute("data-styled-version","5.3.6");var a=xx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},wx=function(){function e(n){var r=this.element=Xh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Kn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),kx=function(){function e(n){var r=this.element=Xh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Sx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Td=Uc,bx={isServer:!Uc,useCSSOMInjection:!cx},Ea=function(){function e(n,r,i){n===void 0&&(n=bn),r===void 0&&(r={}),this.options=Pt({},bx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Uc&&Td&&(Td=!1,function(o){for(var a=document.querySelectorAll(hx),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Ir)!=="active"&&(yx(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return bo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Pt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new Sx(a):o?new wx(a):new kx(a),new dx(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(bo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(bo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(bo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=px(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var c=Ir+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(p){p.length>0&&(d+=p+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),Ex=/(a)(d)/gi,Rd=function(e){return String.fromCharCode(e+(e>25?39:97))};function cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Rd(t%52)+n;return(Rd(t%52)+n).replace(Ex,"$1-$2")}var vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jh=function(e){return vr(5381,e)};function Zh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Lr(n)&&!Fc(n))return!1}return!0}var Cx=Jh("5.3.6"),Px=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Zh(t),this.componentId=n,this.baseHash=vr(Cx,n),this.baseStyle=r,Ea.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Xn(this.rules,t,n,r).join(""),l=cu(vr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=vr(this.baseHash,r.hash),d="",p=0;p<u;p++){var v=this.rules[p];if(typeof v=="string")d+=v;else if(v){var g=Xn(v,t,n,r),x=Array.isArray(g)?g.join(""):g;c=vr(c,x+p),d+=x}}if(d){var E=cu(c>>>0);if(!n.hasNameForId(i,E)){var m=r(d,"."+E,void 0,i);n.insertRules(i,E,m)}o.push(E)}}return o.join(" ")},e}(),_x=/^\s*\/\/.*$/gm,Ox=[":","[",".","#"];function $x(e){var t,n,r,i,o=e===void 0?bn:e,a=o.options,l=a===void 0?bn:a,s=o.plugins,u=s===void 0?Sa:s,c=new Y1(l),d=[],p=function(x){function E(m){if(m)try{x(m+"}")}catch{}}return function(m,f,h,w,b,P,A,R,G,B){switch(m){case 1:if(G===0&&f.charCodeAt(0)===64)return x(f+";"),"";break;case 2:if(R===0)return f+"/*|*/";break;case 3:switch(R){case 102:case 112:return x(h[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(x){d.push(x)}),v=function(x,E,m){return E===0&&Ox.indexOf(m[n.length])!==-1||m.match(i)?x:"."+t};function g(x,E,m,f){f===void 0&&(f="&");var h=x.replace(_x,""),w=E&&m?m+" "+E+" { "+h+" }":h;return t=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!E?"":E,w)}return c.use([].concat(u,[function(x,E,m){x===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,v))},p,function(x){if(x===-2){var E=d;return d=[],E}}])),g.hash=u.length?u.reduce(function(x,E){return E.name||Kn(15),vr(x,E.name)},5381).toString():"",g}var qh=Nt.createContext();qh.Consumer;var ev=Nt.createContext(),Ax=(ev.Consumer,new Ea),fu=$x();function tv(){return _.exports.useContext(qh)||Ax}function nv(){return _.exports.useContext(ev)||fu}var Nx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=fu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Kn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=fu),this.name+t.hash},e}(),Tx=/([A-Z])/,Rx=/([A-Z])/g,Lx=/^ms-/,Ix=function(e){return"-"+e.toLowerCase()};function Ld(e){return Tx.test(e)?e.replace(Rx,Ix).replace(Lx,"-ms-"):e}var Id=function(e){return e==null||e===!1||e===""};function Xn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Xn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Id(e))return"";if(Fc(e))return"."+e.styledComponentId;if(Lr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Xn(s,t,n,r)}var u;return e instanceof Nx?n?(e.inject(n,r),e.getName(r)):e:uu(e)?function c(d,p){var v,g,x=[];for(var E in d)d.hasOwnProperty(E)&&!Id(d[E])&&(Array.isArray(d[E])&&d[E].isCss||Lr(d[E])?x.push(Ld(E)+":",d[E],";"):uu(d[E])?x.push.apply(x,c(d[E],E)):x.push(Ld(E)+": "+(v=E,(g=d[E])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Q1?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var zd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Lr(e)||uu(e)?zd(Xn(Ad(Sa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:zd(Xn(Ad(e,n)))}var rv=function(e,t,n){return n===void 0&&(n=bn),e.theme!==n.theme&&e.theme||t||n.theme},zx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dx=/(^-|-$)/g;function es(e){return e.replace(zx,"-").replace(Dx,"")}var iv=function(e){return cu(Jh(e)>>>0)};function Eo(e){return typeof e=="string"&&!0}var du=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},jx=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Mx(e,t,n){var r=e[n];du(t)&&du(r)?ov(r,t):e[n]=t}function ov(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(du(a))for(var l in a)jx(l)&&Mx(e,a[l],l)}return e}var zr=Nt.createContext();zr.Consumer;function Fx(e){var t=_.exports.useContext(zr),n=_.exports.useMemo(function(){return function(r,i){if(!r)return Kn(14);if(Lr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Kn(8):i?Pt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Nt.createElement(zr.Provider,{value:n},e.children):null}var ts={};function av(e,t,n){var r=Fc(e),i=!Eo(e),o=t.attrs,a=o===void 0?Sa:o,l=t.componentId,s=l===void 0?function(f,h){var w=typeof f!="string"?"sc":es(f);ts[w]=(ts[w]||0)+1;var b=w+"-"+iv("5.3.6"+w+ts[w]);return h?h+"-"+b:b}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(f){return Eo(f)?"styled."+f:"Styled("+Nd(f)+")"}(e):u,d=t.displayName&&t.componentId?es(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(f,h,w){return e.shouldForwardProp(f,h,w)&&t.shouldForwardProp(f,h,w)}:e.shouldForwardProp);var g,x=new Px(n,d,r?e.componentStyle:void 0),E=x.isStatic&&a.length===0,m=function(f,h){return function(w,b,P,A){var R=w.attrs,G=w.componentStyle,B=w.defaultProps,Pe=w.foldedComponentIds,Se=w.shouldForwardProp,Ne=w.styledComponentId,nt=w.target,je=function(H,k,X){H===void 0&&(H=bn);var $=Pt({},k,{theme:H}),ve={};return X.forEach(function(ee){var ne,Y,Te,Ke=ee;for(ne in Lr(Ke)&&(Ke=Ke($)),Ke)$[ne]=ve[ne]=ne==="className"?(Y=ve[ne],Te=Ke[ne],Y&&Te?Y+" "+Te:Y||Te):Ke[ne]}),[$,ve]}(rv(b,_.exports.useContext(zr),B)||bn,b,R),jt=je[0],He=je[1],O=function(H,k,X,$){var ve=tv(),ee=nv(),ne=k?H.generateAndInjectStyles(bn,ve,ee):H.generateAndInjectStyles(X,ve,ee);return ne}(G,A,jt),U=P,W=He.$as||b.$as||He.as||b.as||nt,ae=Eo(W),N=He!==b?Pt({},b,{},He):b,L={};for(var z in N)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?L.as=N[z]:(Se?Se(z,Pd,W):!ae||Pd(z))&&(L[z]=N[z]));return b.style&&He.style!==b.style&&(L.style=Pt({},b.style,{},He.style)),L.className=Array.prototype.concat(Pe,Ne,O!==Ne?O:null,b.className,He.className).filter(Boolean).join(" "),L.ref=U,_.exports.createElement(W,L)}(g,f,h,E)};return m.displayName=c,(g=Nt.forwardRef(m)).attrs=p,g.componentStyle=x,g.displayName=c,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Sa,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(f){var h=t.componentId,w=function(P,A){if(P==null)return{};var R,G,B={},Pe=Object.keys(P);for(G=0;G<Pe.length;G++)R=Pe[G],A.indexOf(R)>=0||(B[R]=P[R]);return B}(t,["componentId"]),b=h&&h+"-"+(Eo(f)?f:es(Nd(f)));return av(f,Pt({},w,{attrs:p,componentId:b}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?ov({},e.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&ux(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var pu=function(e){return function t(n,r,i){if(i===void 0&&(i=bn),!Tc.exports.isValidElementType(r))return Kn(1,String(r));var o=function(){return n(r,i,F.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Pt({},i,{},a))},o.attrs=function(a){return t(n,r,Pt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(av,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){pu[e]=pu(e)});var Ux=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Zh(n),Ea.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Xn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Ea.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Bx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=F.apply(void 0,[e].concat(n)),o="sc-global-"+iv(JSON.stringify(i)),a=new Ux(i,o);function l(u){var c=tv(),d=nv(),p=_.exports.useContext(zr),v=_.exports.useRef(c.allocateGSInstance(o)).current;return c.server&&s(v,u,c,p,d),_.exports.useLayoutEffect(function(){if(!c.server)return s(v,u,c,p,d),function(){return a.removeStyles(v,c)}},[v,u,c,p,d]),null}function s(u,c,d,p,v){if(a.isStatic)a.renderStyles(u,fx,d,v);else{var g=Pt({},c,{theme:rv(c,p,l.defaultProps)});a.renderStyles(u,g,d,v)}}return Nt.memo(l)}var nr=function(){return _.exports.useContext(zr)};const T=pu;const lv=T.div`
  width: 100%;
  max-width: ${e=>e.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,Wx="/pokedex/assets/pokemonLogo.e4fa62f7.svg",Hx=T.div`
  ${({theme:{colors:e,spacing:t}})=>F`
    width: 100%;
    height: ${t.headerSpacing};
    background-color: ${e.mediumGray};
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 3;
    padding: 0 16px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
  `}
`,Vx=T.div`
  justify-self: flex-start;
  & img {
    max-width: 120px;
  }
`,Gx=T.ul`
  ${({theme:{colors:e,spacing:t}})=>F`
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
`,Yx=()=>y(Hx,{children:j(lv,{children:[y(Vx,{children:y(Ct,{to:"/",children:y("img",{src:Wx,alt:"Pokem\xF3n logo"})})}),y("nav",{children:j(Gx,{children:[y("li",{children:y(Ct,{to:"/",children:"HOME"})}),y("li",{children:y(Ct,{to:"/pokedex/1",children:"POKEDEX"})}),y("li",{children:y(Ct,{to:"/pokemon/1",children:"POKEMON DATA"})})]})})]})}),Qx=T.div`
  ${({theme:{spacing:e}})=>F`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${e.headerSpacing};
  `}
`,Kx=({children:e})=>j(Ji,{children:[y(Yx,{}),y(Qx,{children:y(lv,{children:e})})]}),Xx=T.div`
  ${({color:e,theme:{colors:t}})=>F`
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
`,hl=({color:e})=>y(Xx,{color:e});function sv(e,t){return function(){return e.apply(t,arguments)}}const{toString:uv}=Object.prototype,{getPrototypeOf:Bc}=Object,Wc=(e=>t=>{const n=uv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qt=e=>(e=e.toLowerCase(),t=>Wc(t)===e),vl=e=>t=>typeof t===e,{isArray:qi}=Array,mu=vl("undefined");function Jx(e){return e!==null&&!mu(e)&&e.constructor!==null&&!mu(e.constructor)&&Br(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const cv=qt("ArrayBuffer");function Zx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&cv(e.buffer),t}const qx=vl("string"),Br=vl("function"),fv=vl("number"),dv=e=>e!==null&&typeof e=="object",ew=e=>e===!0||e===!1,Yo=e=>{if(Wc(e)!=="object")return!1;const t=Bc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tw=qt("Date"),nw=qt("File"),rw=qt("Blob"),iw=qt("FileList"),ow=e=>dv(e)&&Br(e.pipe),aw=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||uv.call(e)===t||Br(e.toString)&&e.toString()===t)},lw=qt("URLSearchParams"),sw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),qi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function hu(){const e={},t=(n,r)=>{Yo(e[r])&&Yo(n)?e[r]=hu(e[r],n):Yo(n)?e[r]=hu({},n):qi(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&gl(arguments[n],t);return e}const uw=(e,t,n,{allOwnKeys:r}={})=>(gl(t,(i,o)=>{n&&Br(i)?e[o]=sv(i,n):e[o]=i},{allOwnKeys:r}),e),cw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),fw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dw=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Bc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mw=e=>{if(!e)return null;if(qi(e))return e;let t=e.length;if(!fv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},hw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Bc(Uint8Array)),vw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},gw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yw=qt("HTMLFormElement"),xw=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Dd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ww=qt("RegExp"),pv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};gl(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},kw=e=>{pv(e,(t,n)=>{const r=e[n];if(!!Br(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},Sw=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return qi(e)?r(e):r(String(e).split(t)),n},bw=()=>{},Ew=(e,t)=>(e=+e,Number.isFinite(e)?e:t),S={isArray:qi,isArrayBuffer:cv,isBuffer:Jx,isFormData:aw,isArrayBufferView:Zx,isString:qx,isNumber:fv,isBoolean:ew,isObject:dv,isPlainObject:Yo,isUndefined:mu,isDate:tw,isFile:nw,isBlob:rw,isRegExp:ww,isFunction:Br,isStream:ow,isURLSearchParams:lw,isTypedArray:hw,isFileList:iw,forEach:gl,merge:hu,extend:uw,trim:sw,stripBOM:cw,inherits:fw,toFlatObject:dw,kindOf:Wc,kindOfTest:qt,endsWith:pw,toArray:mw,forEachEntry:vw,matchAll:gw,isHTMLForm:yw,hasOwnProperty:Dd,hasOwnProp:Dd,reduceDescriptors:pv,freezeMethods:kw,toObjectSet:Sw,toCamelCase:xw,noop:bw,toFiniteNumber:Ew};function q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mv=q.prototype,hv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{hv[e]={value:e}});Object.defineProperties(q,hv);Object.defineProperty(mv,"isAxiosError",{value:!0});q.from=(e,t,n,r,i,o)=>{const a=Object.create(mv);return S.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),q.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var Cw=typeof self=="object"?self.FormData:window.FormData;function vu(e){return S.isPlainObject(e)||S.isArray(e)}function vv(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function jd(e,t,n){return e?e.concat(t).map(function(i,o){return i=vv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Pw(e){return S.isArray(e)&&!e.some(vu)}const _w=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Ow(e){return e&&S.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function yl(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new(Cw||FormData),n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,E){return!S.isUndefined(E[x])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&Ow(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!s&&S.isBlob(g))throw new q("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,x,E){let m=g;if(g&&!E&&typeof g=="object"){if(S.endsWith(x,"{}"))x=r?x:x.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&Pw(g)||S.isFileList(g)||S.endsWith(x,"[]")&&(m=S.toArray(g)))return x=vv(x),m.forEach(function(h,w){!(S.isUndefined(h)||h===null)&&t.append(a===!0?jd([x],w,o):a===null?x:x+"[]",u(h))}),!1}return vu(g)?!0:(t.append(jd(E,x,o),u(g)),!1)}const d=[],p=Object.assign(_w,{defaultVisitor:c,convertValue:u,isVisitable:vu});function v(g,x){if(!S.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(g),S.forEach(g,function(m,f){(!(S.isUndefined(m)||m===null)&&i.call(t,m,S.isString(f)?f.trim():f,x,p))===!0&&v(m,x?x.concat(f):[f])}),d.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Md(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Hc(e,t){this._pairs=[],e&&yl(e,this,t)}const gv=Hc.prototype;gv.append=function(t,n){this._pairs.push([t,n])};gv.toString=function(t){const n=t?function(r){return t.call(this,r,Md)}:Md;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function $w(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yv(e,t,n){if(!t)return e;const r=n&&n.encode||$w,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new Hc(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Fd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const xv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Aw=typeof URLSearchParams<"u"?URLSearchParams:Hc,Nw=FormData,Tw=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ht={isBrowser:!0,classes:{URLSearchParams:Aw,FormData:Nw,Blob},isStandardBrowserEnv:Tw,protocols:["http","https","file","blob","url","data"]};function Rw(e,t){return yl(e,new Ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ht.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Lw(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Iw(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function wv(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&S.isArray(i)?i.length:a,s?(S.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!S.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&S.isArray(i[a])&&(i[a]=Iw(i[a])),!l)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(Lw(r),i,n,0)}),n}return null}function zw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Dw=Ht.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const s=[];s.push(n+"="+encodeURIComponent(r)),S.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),S.isString(o)&&s.push("path="+o),S.isString(a)&&s.push("domain="+a),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function jw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mw(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function kv(e,t){return e&&!jw(t)?Mw(e,t):t}const Fw=Ht.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=S.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function eo(e,t,n){q.call(this,e==null?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(eo,q,{__CANCEL__:!0});function Uw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Bw=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ww=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&Bw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ud=Symbol("internals"),Sv=Symbol("defaults");function ui(e){return e&&String(e).trim().toLowerCase()}function Qo(e){return e===!1||e==null?e:S.isArray(e)?e.map(Qo):String(e)}function Hw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Bd(e,t,n,r){if(S.isFunction(r))return r.call(this,t,n);if(!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function Vw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Gw(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}function ti(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function vt(e,t){e&&this.set(e),this[Sv]=t||null}Object.assign(vt.prototype,{set:function(e,t,n){const r=this;function i(o,a,l){const s=ui(a);if(!s)throw new Error("header name must be a non-empty string");const u=ti(r,s);u&&l!==!0&&(r[u]===!1||l===!1)||(r[u||a]=Qo(o))}return S.isPlainObject(e)?S.forEach(e,(o,a)=>{i(o,a,t)}):i(t,e,n),this},get:function(e,t){if(e=ui(e),!e)return;const n=ti(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return Hw(r);if(S.isFunction(t))return t.call(this,r,n);if(S.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ui(e),e){const n=ti(this,e);return!!(n&&(!t||Bd(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(o){if(o=ui(o),o){const a=ti(n,o);a&&(!t||Bd(n,n[a],a,t))&&(delete n[a],r=!0)}}return S.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return S.forEach(this,(r,i)=>{const o=ti(n,i);if(o){t[o]=Qo(r),delete t[i];return}const a=e?Vw(i):String(i).trim();a!==i&&delete t[i],t[a]=Qo(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return S.forEach(Object.assign({},this[Sv]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&S.isArray(n)?n.join(", "):n)}),t}});Object.assign(vt,{from:function(e){return S.isString(e)?new this(Ww(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[Ud]=this[Ud]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=ui(o);n[a]||(Gw(r,o),n[a]=!0)}return S.isArray(e)?e.forEach(i):i(e),this}});vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);S.freezeMethods(vt.prototype);S.freezeMethods(vt);function Yw(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[o];a||(a=u),n[i]=s,r[i]=u;let d=o,p=0;for(;d!==i;)p+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const v=c&&u-c;return v?Math.round(p*1e3/v):void 0}}function Wd(e,t){let n=0;const r=Yw(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-o)/s:void 0};c[t?"download":"upload"]=!0,e(c)}}function Hd(e){return new Promise(function(n,r){let i=e.data;const o=vt.from(e.headers).normalize(),a=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}S.isFormData(i)&&Ht.isStandardBrowserEnv&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+g))}const c=kv(e.baseURL,e.url);u.open(e.method.toUpperCase(),yv(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const v=vt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};zw(function(m){n(m),s()},function(m){r(m),s()},x),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){!u||(r(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||xv;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new q(g,x.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},Ht.isStandardBrowserEnv){const v=(e.withCredentials||Fw(c))&&e.xsrfCookieName&&Dw.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&S.forEach(o.toJSON(),function(g,x){u.setRequestHeader(x,g)}),S.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Wd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Wd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=v=>{!u||(r(!v||v.type?new eo(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const p=Uw(c);if(p&&Ht.protocols.indexOf(p)===-1){r(new q("Unsupported protocol "+p+":",q.ERR_BAD_REQUEST,e));return}u.send(i||null)})}const Vd={http:Hd,xhr:Hd},Gd={getAdapter:e=>{if(S.isString(e)){const t=Vd[e];if(!e)throw Error(S.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!S.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Vd},Qw={"Content-Type":"application/x-www-form-urlencoded"};function Kw(){let e;return typeof XMLHttpRequest<"u"?e=Gd.getAdapter("xhr"):typeof process<"u"&&S.kindOf(process)==="process"&&(e=Gd.getAdapter("http")),e}function Xw(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Wr={transitional:xv,adapter:Kw(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(wv(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Rw(t,this.formSerializer).toString();if((l=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return yl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Xw(t)):t}],transformResponse:[function(t){const n=this.transitional||Wr.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?q.from(l,q.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(t){Wr.headers[t]={}});S.forEach(["post","put","patch"],function(t){Wr.headers[t]=S.merge(Qw)});function ns(e,t){const n=this||Wr,r=t||n,i=vt.from(r.headers);let o=r.data;return S.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function bv(e){return!!(e&&e.__CANCEL__)}function rs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eo}function Yd(e){return rs(e),e.headers=vt.from(e.headers),e.data=ns.call(e,e.transformRequest),(e.adapter||Wr.adapter)(e).then(function(r){return rs(e),r.data=ns.call(e,e.transformResponse,r),r.headers=vt.from(r.headers),r},function(r){return bv(r)||(rs(e),r&&r.response&&(r.response.data=ns.call(e,e.transformResponse,r.response),r.response.headers=vt.from(r.response.headers))),Promise.reject(r)})}function Fi(e,t){t=t||{};const n={};function r(u,c){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge(u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u){if(S.isUndefined(t[u])){if(!S.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function o(u){if(!S.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(S.isUndefined(t[u])){if(!S.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function l(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return S.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=s[c]||i,p=d(c);S.isUndefined(p)&&d!==l||(n[c]=p)}),n}const Ev="1.1.3",Vc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Vc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qd={};Vc.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Ev+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new q(i(a," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Qd[a]&&(Qd[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function Jw(e,t,n){if(typeof e!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new q("option "+o+" must be "+s,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+o,q.ERR_BAD_OPTION)}}const gu={assertOptions:Jw,validators:Vc},rn=gu.validators;class Wn{constructor(t){this.defaults=t,this.interceptors={request:new Fd,response:new Fd}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Fi(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&gu.assertOptions(r,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),i!==void 0&&gu.assertOptions(i,{encode:rn.function,serialize:rn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const o=n.headers&&S.merge(n.headers.common,n.headers[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new vt(n.headers,o);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const s=[];this.interceptors.response.forEach(function(g){s.push(g.fulfilled,g.rejected)});let u,c=0,d;if(!l){const v=[Yd.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,s),d=v.length,u=Promise.resolve(n);c<d;)u=u.then(v[c++],v[c++]);return u}d=a.length;let p=n;for(c=0;c<d;){const v=a[c++],g=a[c++];try{p=v(p)}catch(x){g.call(this,x);break}}try{u=Yd.call(this,p)}catch(v){return Promise.reject(v)}for(c=0,d=s.length;c<d;)u=u.then(s[c++],s[c++]);return u}getUri(t){t=Fi(this.defaults,t);const n=kv(t.baseURL,t.url);return yv(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){Wn.prototype[t]=function(n,r){return this.request(Fi(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(Fi(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Wn.prototype[t]=n(),Wn.prototype[t+"Form"]=n(!0)});class Gc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new eo(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Gc(function(i){t=i}),cancel:t}}}function Zw(e){return function(n){return e.apply(null,n)}}function qw(e){return S.isObject(e)&&e.isAxiosError===!0}function Cv(e){const t=new Wn(e),n=sv(Wn.prototype.request,t);return S.extend(n,Wn.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Cv(Fi(e,i))},n}const tt=Cv(Wr);tt.Axios=Wn;tt.CanceledError=eo;tt.CancelToken=Gc;tt.isCancel=bv;tt.VERSION=Ev;tt.toFormData=yl;tt.AxiosError=q;tt.Cancel=tt.CanceledError;tt.all=function(t){return Promise.all(t)};tt.spread=Zw;tt.isAxiosError=qw;tt.formToJSON=e=>wv(S.isHTMLForm(e)?new FormData(e):e);const ek="https://pokeapi.co/api",xl=tt.create({baseURL:ek}),tk=async(e=0,t=20)=>(await xl.get(`/v2/pokemon/?offset=${e}&limit=${t}}`)).data,Yc=async e=>(await xl.get(`/v2/pokemon/${e}`)).data,nk=async e=>(await xl.get(e)).data,rk=async e=>(await xl.get(`/v2/pokemon-species/${e}`)).data,ik=T.div`
  ${({theme:{typesColors:e,boxShadow:t,colors:n},typeName:r})=>F`
    border: 2px solid ${e[r].primaryColor};
    background-color: ${e[r].secondaryColor};
    padding: 3px;
    border-radius: 99px;
    font-weight: bold;
    width: 100%;
    text-shadow: ${t.dark};
    color: ${n.white};
  `}
`,Qc=({typeName:e})=>y(ik,{typeName:e||"",children:e}),ok=Nt.createContext({}),Pv=!0;function ak({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:o,direction:a,duration:l,enableAnimation:s=Pv}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof l=="number"&&(u["--animation-duration"]=`${l}s`),s||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof i=="string"||typeof i=="number")&&(u.borderRadius=i),o&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function In({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:i,circle:o=!1,style:a,...l}){var s,u,c;const d=Nt.useContext(ok),p={...l};for(const[h,w]of Object.entries(l))typeof w>"u"&&delete p[h];const v={...d,...p,circle:o},g={...a,...ak(v)};let x="react-loading-skeleton";n&&(x+=` ${n}`);const E=(s=v.inline)!==null&&s!==void 0?s:!1,m=[],f=Math.ceil(e);for(let h=0;h<f;h++){let w=g;if(f>e&&h===f-1){const P=(u=w.width)!==null&&u!==void 0?u:"100%",A=e%1,R=typeof P=="number"?P*A:`calc(${P} * ${A})`;w={...w,width:R}}const b=y("span",{className:x,style:w,children:"\u200C"},h);E?m.push(b):m.push(j(Ji,{children:[b,y("br",{})]}))}return y("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":(c=v.enableAnimation)!==null&&c!==void 0?c:Pv,children:t?m.map((h,w)=>y(t,{children:h},w)):m})}const lk=T.div`
  ${({light:e,theme:{boxShadow:t,colors:n}})=>F`
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
`,sk=T.div`
  ${({light:e,theme:{colors:t}})=>F`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  width: 250px;
  height:250px;
  text-transform: capitalize;
  position: relative;
  gap: 18px;
background-color: ${e?t.white:""};
  
  & img {
    max-width: 100px;
    max-height: 100px;
    `}
`,uk=T.div`
  ${({theme:{boxShadow:e,colors:t},secondary:n})=>F`
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
`,ck=T.div`
  ${({theme:{colors:e,boxShadow:t}})=>F`
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
`,fk=T.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`,Kd=T(In)`
  border-radius: 6px 36px;
  width: 250px;
  height: 250px;
`,yu=({pokemon:e,light:t=!1})=>{var a;const[n,r]=_.exports.useState();_.exports.useEffect(()=>{(async()=>{const s=await Yc(e);r(s)})()},[e]);const{typesColors:i,colors:o}=nr();return y(lk,{light:t,children:n?y(Ct,{to:`/pokemon/${n.id}`,children:j(sk,{light:t,children:[j(uk,{secondary:(a=i[n.types[0].type.name])==null?void 0:a.secondaryColor,children:[j(ck,{children:["#",n.id]}),y("h3",{children:n.species.name})]}),y("img",{src:n.sprites.other.dream_world.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name}),y(fk,{children:n.types.map(l=>y(Qc,{typeName:l.type.name},l.type.name))})]})}):y(hl,{color:t?o.black:""})})},dk=T.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 50px 0;
`,pk=({pokemonList:e})=>y(dk,{children:e.map((t,n)=>y(yu,{pokemon:t.name},`${t.name}-${n}`))}),mk=20;function hk(e){const[t,n]=_.exports.useState(!0),[r,i]=_.exports.useState(!1),[o,a]=_.exports.useState([]),l=_.exports.useCallback(async()=>{try{n(!0);const s=await tk(e,mk);a(u=>[...u,...s.results]),n(!1)}catch(s){i(!!s)}},[e]);return _.exports.useEffect(()=>{l()},[l,e]),{loading:t,error:r,allPokemonList:o}}const vk=T.div`
  ${({theme:{spacing:e}})=>F`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${e.headerSpacing} - 76px);
    margin: 8rem 1rem;
    border-radius: 8px;
    position: relative;
  `}
`,gk=T.div`
  ${({theme:{colors:e,spacing:t}})=>F`
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
`,yk=T.div`
  ${({theme:{colors:e,boxShadow:t}})=>F`
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
`,xk=20;function wk(){const[e,t]=_.exports.useState(0),{allPokemonList:n,loading:r}=hk(e),i=_.exports.useRef(null),o=_.exports.useCallback(a=>{a[0].isIntersecting&&t(s=>s+xk)},[]);return _.exports.useEffect(()=>{const a={root:null,rootMargin:"20px",threshold:0},l=new IntersectionObserver(o,a);i.current&&l.observe(i.current)},[o]),j(vk,{children:[y(yk,{children:y("p",{children:"Here's a list of Pokemon from every generation. Click on any of them to get information about their type, stats, and evolution chain!"})}),j(gk,{children:[!!(n!=null&&n.length)&&y(pk,{pokemonList:n}),y("div",{ref:i}),r&&y(hl,{})]})]})}const kk=()=>y("div",{children:y(z1,{})}),Sk=T.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`,ni=T.div`
  ${({theme:{colors:e}})=>F`
    position: relative;
    background: ${e.black};
  `}
`,ri=T.div`
  ${({theme:{colors:e}})=>F`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${e.darkGray};
    z-index: 2;
  `}
`,ii=T.div`
  ${({theme:{colors:e}})=>F`
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
`,bk=T.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
  `}
`,Ek=()=>{const{id:e}=Nc(),t=Number(e),n=t>1?t-1:1,r=t+1;return j(Sk,{children:[y(Ct,{to:`/pokedex/${n}`,children:j(ni,{children:[y(ri,{}),y(ii,{})]})}),j(bk,{children:[y(Ct,{to:`/pokedex/${n}`,children:j(ni,{children:[y(ri,{}),y(ii,{})]})}),j(ni,{children:[y(ri,{}),y(ii,{})]}),y(Ct,{to:`/pokedex/${r}`,children:j(ni,{children:[y(ri,{}),y(ii,{})]})})]}),y(Ct,{to:`/pokedex/${r}`,children:j(ni,{children:[y(ri,{}),y(ii,{})]})})]})},Ck=T.div`
  position: relative;
`,Pk=T.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`,_k=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Ok=T.div`
  display: flex;
  gap: 8px;
`,Xd=T.div`
  ${({theme:{colors:e},color:t})=>F`
    background: ${t};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${e.black};
    border-left: 1px solid ${e.black};
  `}
`,$k=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Ak=({types:e})=>{const{colors:t}=nr();return j(Ck,{children:[j(Pk,{children:[y(_k,{}),j(Ok,{children:[y(Xd,{color:t.red}),y(Xd,{color:t.mediumBlue})]}),y(Ek,{})]}),y($k,{children:e.map(n=>y(Qc,{typeName:n.type.name},n.type.name))})]})},Nk=T.div`
  ${({theme:{colors:e}})=>F`
    width: 370px;
    height: 460px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0 15px 15px 0;
  `}
`,Tk=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Rk=T.div`
  ${({theme:{colors:e}})=>F`
    background-color: ${e.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`,_v=({className:e,children:t})=>j(Nk,{className:e,children:[y(Tk,{}),y(Rk,{children:t})]}),Lk=T.div`
  ${({theme:{colors:e}})=>F`
    border: 8px solid ${e.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`,Ik=T.div`
  ${({theme:{colors:e}})=>F`
    border-radius: 8px;
    background-color: ${e.pokedexGreen};
    border-top: 1px solid ${e.mediumGray};
    border-right: 1px solid ${e.mediumGray};
    color: ${e.darkGray};
    font-size: 12px;
    font-weight: 600;
    padding: 12px 24px;
  `}
`,zk=T.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`,Dk=({pokemon:e})=>y(Lk,{children:y(Ik,{children:e.stats.map(t=>j(zk,{children:[y("div",{children:t.stat.name},t.stat.name),y("div",{children:t.base_stat},`${t.stat.name}-${t.base_stat}`)]},t.stat.name))})}),jk=T.div`
  ${({theme:{colors:e}})=>F`
    position: relative;
  `}
`,Mk=T(_v)`
  ${({theme:{colors:e}})=>F`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`,Fk=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Jd=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Uk=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`,Bk=T.span`
  ${({theme:{colors:e}})=>F`
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
`,Wk=({pokemon:e})=>j(jk,{children:[y(_v,{children:j(Ji,{children:[y(Dk,{pokemon:e}),j(Uk,{children:[j(Fk,{children:[j(Jd,{children:[" HEIGHT - ",e.height," dm"]}),j(Jd,{children:[" WEIGHT - ",e.weight," hg"]})]}),y(Bk,{})]})]})}),y(Mk,{})]}),Hk=T.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`,Vk=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Gk=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Yk=T.span`
  ${({theme:{colors:e}})=>F`
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
`,Qk=T.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`,is=T.span`
  ${({theme:{colors:e},color:t})=>F`
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
`,Kk=T.div`
  ${({theme:{colors:e}})=>F`
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
`,Xk=T.div`
  position: relative;
`,Jk=T.div`
  ${({theme:{colors:e}})=>F`
    background: ${e.lightestGray};
    padding: 30px;
    width: 250px;
    height: 200px;
    margin-left: 45px;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  `}
`,Zk=T.div`
  ${({theme:{colors:e}})=>F`
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
`,qk=T.div`
  ${({theme:{colors:e}})=>F`
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
`,e2=({pokemon:e})=>{const{colors:t}=nr();return j(Hk,{children:[j(Vk,{children:[j(Gk,{children:[y("div",{}),y(Yk,{}),j(Qk,{children:[y(is,{color:t.red}),y(is,{color:t.yellow}),y(is,{color:t.green})]})]}),y(Kk,{children:y("div",{})}),j(Xk,{children:[y(Jk,{children:j(qk,{children:[j("p",{children:["#",e.id]}),y("img",{src:e.sprites.front_default,alt:e.name}),y("p",{children:e.name})]})}),y(Zk,{})]}),y(Ak,{types:e.types})]}),y(Wk,{pokemon:e})]})},t2=()=>{const[e,t]=_.exports.useState(!1),[n,r]=_.exports.useState(),i=Nc(),o=async()=>{t(!0);const a=await Yc(Number(i.id));r(a),t(!1)};return _.exports.useEffect(()=>{o()},[i.id]),y("div",{children:e?y(hl,{}):n?y(e2,{pokemon:n}):y("div",{})})};var xu={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Ov={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},wu={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function Zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zd(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ca(e){return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}function n2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r2(e,t,n){return t&&qd(e.prototype,t),n&&qd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kc(e,t){return o2(e)||l2(e,t)||$v(e,t)||u2()}function to(e){return i2(e)||a2(e)||$v(e)||s2()}function i2(e){if(Array.isArray(e))return ku(e)}function o2(e){if(Array.isArray(e))return e}function a2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function l2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function $v(e,t){if(!!e){if(typeof e=="string")return ku(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ku(e,t)}}function ku(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ep=function(){},Xc={},Av={},Nv=null,Tv={mark:ep,measure:ep};try{typeof window<"u"&&(Xc=window),typeof document<"u"&&(Av=document),typeof MutationObserver<"u"&&(Nv=MutationObserver),typeof performance<"u"&&(Tv=performance)}catch{}var c2=Xc.navigator||{},tp=c2.userAgent,np=tp===void 0?"":tp,Pn=Xc,fe=Av,rp=Nv,Co=Tv;Pn.document;var en=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",Rv=~np.indexOf("MSIE")||~np.indexOf("Trident/"),Po,_o,Oo,$o,Ao,Kt="___FONT_AWESOME___",Su=16,Lv="fa",Iv="svg-inline--fa",Jn="data-fa-i2svg",bu="data-fa-pseudo-element",f2="data-fa-pseudo-element-pending",Jc="data-prefix",Zc="data-icon",ip="fontawesome-i2svg",d2="async",p2=["HTML","HEAD","STYLE","SCRIPT"],zv=function(){try{return!0}catch{return!1}}(),ue="classic",ye="sharp",qc=[ue,ye];function no(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ue]}})}var Ui=no((Po={},Ce(Po,ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ce(Po,ye,{fa:"solid",fass:"solid","fa-solid":"solid"}),Po)),Bi=no((_o={},Ce(_o,ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ce(_o,ye,{solid:"fass"}),_o)),Wi=no((Oo={},Ce(Oo,ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ce(Oo,ye,{fass:"fa-solid"}),Oo)),m2=no(($o={},Ce($o,ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ce($o,ye,{"fa-solid":"fass"}),$o)),h2=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Dv="fa-layers-text",v2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g2=no((Ao={},Ce(Ao,ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ce(Ao,ye,{900:"fass"}),Ao)),jv=[1,2,3,4,5,6,7,8,9,10],y2=jv.concat([11,12,13,14,15,16,17,18,19,20]),x2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hi=new Set;Object.keys(Bi[ue]).map(Hi.add.bind(Hi));Object.keys(Bi[ye]).map(Hi.add.bind(Hi));var w2=[].concat(qc,to(Hi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mn.GROUP,Mn.SWAP_OPACITY,Mn.PRIMARY,Mn.SECONDARY]).concat(jv.map(function(e){return"".concat(e,"x")})).concat(y2.map(function(e){return"w-".concat(e)})),ki=Pn.FontAwesomeConfig||{};function k2(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function S2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var b2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];b2.forEach(function(e){var t=Kc(e,2),n=t[0],r=t[1],i=S2(k2(n));i!=null&&(ki[r]=i)})}var Mv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lv,replacementClass:Iv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ki.familyPrefix&&(ki.cssPrefix=ki.familyPrefix);var Dr=I(I({},Mv),ki);Dr.autoReplaceSvg||(Dr.observeMutations=!1);var M={};Object.keys(Mv).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Dr[e]=n,Si.forEach(function(r){return r(M)})},get:function(){return Dr[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Dr.cssPrefix=t,Si.forEach(function(n){return n(M)})},get:function(){return Dr.cssPrefix}});Pn.FontAwesomeConfig=M;var Si=[];function E2(e){return Si.push(e),function(){Si.splice(Si.indexOf(e),1)}}var on=Su,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function C2(e){if(!(!e||!en)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return fe.head.insertBefore(t,r),e}}var P2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vi(){for(var e=12,t="";e-- >0;)t+=P2[Math.random()*62|0];return t}function Hr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ef(e){return e.classList?Hr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fv(e[n]),'" ')},"").trim()}function wl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function tf(e){return e.size!==It.size||e.x!==It.x||e.y!==It.y||e.rotate!==It.rotate||e.flipX||e.flipY}function O2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function $2(e){var t=e.transform,n=e.width,r=n===void 0?Su:n,i=e.height,o=i===void 0?Su:i,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&Rv?s+="translate(".concat(t.x/on-r/2,"em, ").concat(t.y/on-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/on,"em), calc(-50% + ").concat(t.y/on,"em)) "):s+="translate(".concat(t.x/on,"em, ").concat(t.y/on,"em) "),s+="scale(".concat(t.size/on*(t.flipX?-1:1),", ").concat(t.size/on*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var A2=`:root, :host {
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
}`;function Uv(){var e=Lv,t=Iv,n=M.cssPrefix,r=M.replacementClass,i=A2;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var op=!1;function os(){M.autoAddCss&&!op&&(C2(Uv()),op=!0)}var N2={mixout:function(){return{dom:{css:Uv,insertCss:os}}},hooks:function(){return{beforeDOMElementCreation:function(){os()},beforeI2svg:function(){os()}}}},Xt=Pn||{};Xt[Kt]||(Xt[Kt]={});Xt[Kt].styles||(Xt[Kt].styles={});Xt[Kt].hooks||(Xt[Kt].hooks={});Xt[Kt].shims||(Xt[Kt].shims=[]);var _t=Xt[Kt],Bv=[],T2=function e(){fe.removeEventListener("DOMContentLoaded",e),Pa=1,Bv.map(function(t){return t()})},Pa=!1;en&&(Pa=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Pa||fe.addEventListener("DOMContentLoaded",T2));function R2(e){!en||(Pa?setTimeout(e,0):Bv.push(e))}function ro(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Fv(e):"<".concat(t," ").concat(_2(r),">").concat(o.map(ro).join(""),"</").concat(t,">")}function ap(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var L2=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},as=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?L2(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[o[0]]):(s=0,c=r);s<a;s++)u=o[s],c=l(c,t[u],u,t);return c};function I2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Eu(e){var t=I2(e);return t.length===1?t[0].toString(16):null}function z2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function lp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=lp(t);typeof _t.hooks.addPack=="function"&&!i?_t.hooks.addPack(e,lp(t)):_t.styles[e]=I(I({},_t.styles[e]||{}),o),e==="fas"&&Cu("fa",t)}var No,To,Ro,gr=_t.styles,D2=_t.shims,j2=(No={},Ce(No,ue,Object.values(Wi[ue])),Ce(No,ye,Object.values(Wi[ye])),No),nf=null,Wv={},Hv={},Vv={},Gv={},Yv={},M2=(To={},Ce(To,ue,Object.keys(Ui[ue])),Ce(To,ye,Object.keys(Ui[ye])),To);function F2(e){return~w2.indexOf(e)}function U2(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!F2(i)?i:null}var Qv=function(){var t=function(o){return as(gr,function(a,l,s){return a[s]=as(l,o,{}),a},{})};Wv=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=a})}return i}),Hv=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=a})}return i}),Yv=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(s){i[s]=a}),i});var n="far"in gr||M.autoFetchSvg,r=as(D2,function(i,o){var a=o[0],l=o[1],s=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Vv=r.names,Gv=r.unicodes,nf=kl(M.styleDefault,{family:M.familyDefault})};E2(function(e){nf=kl(e.styleDefault,{family:M.familyDefault})});Qv();function rf(e,t){return(Wv[e]||{})[t]}function B2(e,t){return(Hv[e]||{})[t]}function Fn(e,t){return(Yv[e]||{})[t]}function Kv(e){return Vv[e]||{prefix:null,iconName:null}}function W2(e){var t=Gv[e],n=rf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return nf}var of=function(){return{prefix:null,iconName:null,rest:[]}};function kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ue:n,i=Ui[r][e],o=Bi[r][e]||Bi[r][i],a=e in _t.styles?e:null;return o||a||null}var sp=(Ro={},Ce(Ro,ue,Object.keys(Wi[ue])),Ce(Ro,ye,Object.keys(Wi[ye])),Ro);function Sl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Ce(t,ue,"".concat(M.cssPrefix,"-").concat(ue)),Ce(t,ye,"".concat(M.cssPrefix,"-").concat(ye)),t),a=null,l=ue;(e.includes(o[ue])||e.some(function(u){return sp[ue].includes(u)}))&&(l=ue),(e.includes(o[ye])||e.some(function(u){return sp[ye].includes(u)}))&&(l=ye);var s=e.reduce(function(u,c){var d=U2(M.cssPrefix,c);if(gr[c]?(c=j2[l].includes(c)?m2[l][c]:c,a=c,u.prefix=c):M2[l].indexOf(c)>-1?(a=c,u.prefix=kl(c,{family:l})):d?u.iconName=d:c!==M.replacementClass&&c!==o[ue]&&c!==o[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=a==="fa"?Kv(u.iconName):{},v=Fn(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!gr.far&&gr.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},of());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ye&&(gr.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=Fn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=_n()||"fas"),s}var H2=function(){function e(){n2(this,e),this.definitions={}}return r2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),a[l]),Cu(l,a[l]);var s=Wi[ue][l];s&&Cu(s,a[l]),Qv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,s=a.iconName,u=a.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),up=[],yr={},Pr={},V2=Object.keys(Pr);function G2(e,t){var n=t.mixoutsTo;return up=e,yr={},Object.keys(Pr).forEach(function(r){V2.indexOf(r)===-1&&delete Pr[r]}),up.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ca(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){yr[a]||(yr[a]=[]),yr[a].push(o[a])})}r.provides&&r.provides(Pr)}),n}function Pu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=yr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=yr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Jt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pr[e]?Pr[e].apply(null,t):void 0}function _u(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||_n();if(!!t)return t=Fn(n,t)||t,ap(Xv.definitions,n,t)||ap(_t.styles,n,t)}var Xv=new H2,Y2=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Zn("noAuto")},Q2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return en?(Zn("beforeI2svg",t),Jt("pseudoElements2svg",t),Jt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,R2(function(){X2({autoReplaceSvgRoot:n}),Zn("watch",t)})}},K2={icon:function(t){if(t===null)return null;if(Ca(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=kl(t[0]);return{prefix:r,iconName:Fn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(h2))){var i=Sl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||_n(),iconName:Fn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=_n();return{prefix:o,iconName:Fn(o,t)||t}}}},ct={noAuto:Y2,config:M,dom:Q2,parse:K2,library:Xv,findIconDefinition:_u,toHtml:ro},X2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(_t.styles).length>0||M.autoFetchSvg)&&en&&M.autoReplaceSvg&&ct.dom.i2svg({node:r})};function bl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ro(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!en){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function J2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(tf(a)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=wl(I(I({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Z2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:a}),children:r}]}]}function af(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,v=p===void 0?!1:p,g=r.found?r:n,x=g.width,E=g.height,m=i==="fak",f=[M.replacementClass,o?"".concat(M.cssPrefix,"-").concat(o):""].filter(function(G){return d.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(d.classes).join(" "),h={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":i,"data-icon":o,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(E)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(x/E*16*.0625,"em")}:{};v&&(h.attributes[Jn]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Vi())},children:[s]}),delete h.attributes.title);var b=I(I({},h),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:l,styles:I(I({},w),d.styles)}),P=r.found&&n.found?Jt("generateAbstractMask",b)||{children:[],attributes:{}}:Jt("generateAbstractIcon",b)||{children:[],attributes:{}},A=P.children,R=P.attributes;return b.children=A,b.attributes=R,l?Z2(b):J2(b)}function cp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,u=I(I(I({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(u[Jn]="");var c=I({},a.styles);tf(i)&&(c.transform=$2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=wl(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function q2(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=wl(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ls=_t.styles;function Ou(e){var t=e[0],n=e[1],r=e.slice(4),i=Kc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Mn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Mn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Mn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var eS={found:!1,width:512,height:512};function tS(e,t){!zv&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $u(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=_n()),new Promise(function(r,i){if(Jt("missingIconAbstract"),n==="fa"){var o=Kv(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ls[t]&&ls[t][e]){var a=ls[t][e];return r(Ou(a))}tS(e,t),r(I(I({},eS),{},{icon:M.showMissingIcons&&e?Jt("missingIconAbstract")||{}:{}}))})}var fp=function(){},Au=M.measurePerformance&&Co&&Co.mark&&Co.measure?Co:{mark:fp,measure:fp},ci='FA "6.2.0"',nS=function(t){return Au.mark("".concat(ci," ").concat(t," begins")),function(){return Jv(t)}},Jv=function(t){Au.mark("".concat(ci," ").concat(t," ends")),Au.measure("".concat(ci," ").concat(t),"".concat(ci," ").concat(t," begins"),"".concat(ci," ").concat(t," ends"))},lf={begin:nS,end:Jv},Ko=function(){};function dp(e){var t=e.getAttribute?e.getAttribute(Jn):null;return typeof t=="string"}function rS(e){var t=e.getAttribute?e.getAttribute(Jc):null,n=e.getAttribute?e.getAttribute(Zc):null;return t&&n}function iS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function oS(){if(M.autoReplaceSvg===!0)return Xo.replace;var e=Xo[M.autoReplaceSvg];return e||Xo.replace}function aS(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function lS(e){return fe.createElement(e)}function Zv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?aS:lS:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Zv(a,{ceFn:r}))}),i}function sS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Zv(i),n)}),n.getAttribute(Jn)===null&&M.keepOriginalSource){var r=fe.createComment(sS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ef(n).indexOf(M.replacementClass))return Xo.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return ro(l)}).join(`
`);n.setAttribute(Jn,""),n.innerHTML=a}};function pp(e){e()}function qv(e,t){var n=typeof t=="function"?t:Ko;if(e.length===0)n();else{var r=pp;M.mutateApproach===d2&&(r=Pn.requestAnimationFrame||pp),r(function(){var i=oS(),o=lf.begin("mutate");e.map(i),o(),n()})}}var sf=!1;function eg(){sf=!0}function Nu(){sf=!1}var _a=null;function mp(e){if(!!rp&&!!M.observeMutations){var t=e.treeCallback,n=t===void 0?Ko:t,r=e.nodeCallback,i=r===void 0?Ko:r,o=e.pseudoElementsCallback,a=o===void 0?Ko:o,l=e.observeMutationsRoot,s=l===void 0?fe:l;_a=new rp(function(u){if(!sf){var c=_n();Hr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!dp(d.addedNodes[0])&&(M.searchPseudoElements&&a(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&dp(d.target)&&~x2.indexOf(d.attributeName))if(d.attributeName==="class"&&rS(d.target)){var p=Sl(ef(d.target)),v=p.prefix,g=p.iconName;d.target.setAttribute(Jc,v||c),g&&d.target.setAttribute(Zc,g)}else iS(d.target)&&i(d.target)})}}),en&&_a.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uS(){!_a||_a.disconnect()}function cS(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function fS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Sl(ef(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=B2(i.prefix,e.innerText)||rf(i.prefix,Eu(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function dS(e){var t=Hr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Vi()):(t["aria-hidden"]="true",t.focusable="false")),t}function pS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fS(e),r=n.iconName,i=n.prefix,o=n.rest,a=dS(e),l=Pu("parseNodeAttributes",{},e),s=t.styleParser?cS(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},l)}var mS=_t.styles;function tg(e){var t=M.autoReplaceSvg==="nest"?hp(e,{styleParser:!1}):hp(e);return~t.extra.classes.indexOf(Dv)?Jt("generateLayersText",e,t):Jt("generateSvgReplacementMutation",e,t)}var On=new Set;qc.map(function(e){On.add("fa-".concat(e))});Object.keys(Ui[ue]).map(On.add.bind(On));Object.keys(Ui[ye]).map(On.add.bind(On));On=to(On);function vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!en)return Promise.resolve();var n=fe.documentElement.classList,r=function(d){return n.add("".concat(ip,"-").concat(d))},i=function(d){return n.remove("".concat(ip,"-").concat(d))},o=M.autoFetchSvg?On:qc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(mS));o.includes("fa")||o.push("fa");var a=[".".concat(Dv,":not([").concat(Jn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Jn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=Hr(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=lf.begin("onTree"),u=l.reduce(function(c,d){try{var p=tg(d);p&&c.push(p)}catch(v){zv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){qv(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(p){s(),d(p)})})}function hS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tg(e).then(function(n){n&&qv([n],t)})}function vS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_u(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:_u(i||{})),e(r,I(I({},n),{},{mask:i}))}}var gS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?It:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,g=v===void 0?null:v,x=n.classes,E=x===void 0?[]:x,m=n.attributes,f=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(!!t){var b=t.prefix,P=t.iconName,A=t.icon;return bl(I({type:"icon"},t),function(){return Zn("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?f["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(g||Vi()):(f["aria-hidden"]="true",f.focusable="false")),af({icons:{main:Ou(A),mask:s?Ou(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:P,transform:I(I({},It),i),symbol:a,title:p,maskId:c,titleId:g,extra:{attributes:f,styles:w,classes:E}})})}},yS={mixout:function(){return{icon:vS(gS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vp,n.nodeCallback=hS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,o=n.callback,a=o===void 0?function(){}:o;return vp(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(v,g){Promise.all([$u(i,l),c.iconName?$u(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var E=Kc(x,2),m=E[0],f=E[1];v([n,af({icons:{main:m,mask:f},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:o,titleId:a,extra:p,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,s=wl(l);s.length>0&&(i.style=s);var u;return tf(a)&&(u=Jt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},xS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return bl({type:"layer"},function(){Zn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(to(o)).join(" ")},children:a}]})}}}},wS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,s=r.attributes,u=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return bl({type:"counter",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),q2({content:n.toString(),title:o,extra:{attributes:u,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(to(l))}})})}}}},kS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?It:i,a=r.title,l=a===void 0?null:a,s=r.classes,u=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return bl({type:"text",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),cp({content:n,transform:I(I({},It),o),title:l,extra:{attributes:d,styles:v,classes:["".concat(M.cssPrefix,"-layers-text")].concat(to(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,s=null;if(Rv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return M.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,cp({content:n.innerHTML,width:l,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},SS=new RegExp('"',"ug"),gp=[1105920,1112319];function bS(e){var t=e.replace(SS,""),n=z2(t,0),r=n>=gp[0]&&n<=gp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Eu(i?t[0]:t),isSecondary:r||i}}function yp(e,t){var n="".concat(f2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Hr(e.children),a=o.filter(function(A){return A.getAttribute(bu)===t})[0],l=Pn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(v2),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?ye:ue,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Bi[p][s[2].toLowerCase()]:g2[p][u],g=bS(d),x=g.value,E=g.isSecondary,m=s[0].startsWith("FontAwesome"),f=rf(v,x),h=f;if(m){var w=W2(x);w.iconName&&w.prefix&&(f=w.iconName,v=w.prefix)}if(f&&!E&&(!a||a.getAttribute(Jc)!==v||a.getAttribute(Zc)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);var b=pS(),P=b.extra;P.attributes[bu]=t,$u(f,v).then(function(A){var R=af(I(I({},b),{},{icons:{main:A,mask:of()},prefix:v,iconName:h,extra:P,watchable:!0})),G=fe.createElement("svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=R.map(function(B){return ro(B)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ES(e){return Promise.all([yp(e,"::before"),yp(e,"::after")])}function CS(e){return e.parentNode!==document.head&&!~p2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xp(e){if(!!en)return new Promise(function(t,n){var r=Hr(e.querySelectorAll("*")).filter(CS).map(ES),i=lf.begin("searchPseudoElements");eg(),Promise.all(r).then(function(){i(),Nu(),t()}).catch(function(){i(),Nu(),n()})})}var PS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;M.searchPseudoElements&&xp(i)}}},wp=!1,_S={mixout:function(){return{dom:{unwatch:function(){eg(),wp=!0}}}},hooks:function(){return{bootstrap:function(){mp(Pu("mutationObserverCallbacks",{}))},noAuto:function(){uS()},watch:function(n){var r=n.observeMutationsRoot;wp?Nu():mp(Pu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},kp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},OS={mixout:function(){return{parse:{transform:function(n){return kp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=kp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},v={outer:l,inner:d,path:p};return{tag:"g",attributes:I({},v.outer),children:[{tag:"g",attributes:I({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),v.path)}]}]}}}},ss={x:0,y:0,width:"100%",height:"100%"};function Sp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $S(e){return e.tag==="g"?e.children:[e]}var AS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Sl(i.split(" ").map(function(a){return a.trim()})):of();return o.prefix||(o.prefix=_n()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,s=n.transform,u=o.width,c=o.icon,d=a.width,p=a.icon,v=O2({transform:s,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:I(I({},ss),{},{fill:"white"})},x=c.children?{children:c.children.map(Sp)}:{},E={tag:"g",attributes:I({},v.inner),children:[Sp(I({tag:c.tag,attributes:I(I({},c.attributes),v.path)},x))]},m={tag:"g",attributes:I({},v.outer),children:[E]},f="mask-".concat(l||Vi()),h="clip-".concat(l||Vi()),w={tag:"mask",attributes:I(I({},ss),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:$S(p)},w]};return r.push(b,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(f,")")},ss)}),{children:r,attributes:i}}}},NS={provides:function(t){var n=!1;Pn.matchMedia&&(n=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=I(I({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},TS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},RS=[N2,yS,xS,wS,kS,PS,_S,OS,AS,NS,TS];G2(RS,{mixoutsTo:ct});ct.noAuto;ct.config;ct.library;ct.dom;var Tu=ct.parse;ct.findIconDefinition;ct.toHtml;var LS=ct.icon;ct.layer;ct.text;ct.counter;var Q={exports:{}},IS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zS=IS,DS=zS;function ng(){}function rg(){}rg.resetWarningCache=ng;var jS=function(){function e(r,i,o,a,l,s){if(s!==DS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:rg,resetWarningCache:ng};return n.PropTypes=n,n};Q.exports=jS();function bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bp(Object(n),!0).forEach(function(r){xr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oa(e){return Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oa(e)}function xr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function FS(e,t){if(e==null)return{};var n=MS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ru(e){return US(e)||BS(e)||WS(e)||HS()}function US(e){if(Array.isArray(e))return Lu(e)}function BS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function WS(e,t){if(!!e){if(typeof e=="string")return Lu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lu(e,t)}}function Lu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function HS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VS(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,v=e.inverse,g=e.border,x=e.listItem,E=e.flip,m=e.size,f=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":g,"fa-li":x,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},xr(t,"fa-".concat(m),typeof m<"u"&&m!==null),xr(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),xr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),xr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(b){return w[b]?b:null}).filter(function(b){return b})}function GS(e){return e=e-0,e===e}function ig(e){return GS(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var YS=["style"];function QS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function KS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=ig(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[QS(i)]=o:t[i]=o,t},{})}function og(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return og(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=KS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[ig(u)]=c}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=FS(n,YS);return i.attrs.style=pn(pn({},i.attrs.style),a),e.apply(void 0,[t.tag,pn(pn({},i.attrs),l)].concat(Ru(r)))}var ag=!1;try{ag=!0}catch{}function XS(){if(!ag&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ep(e){if(e&&Oa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Tu.icon)return Tu.icon(e);if(e===null)return null;if(e&&Oa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function us(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xr({},e,t):{}}var mt=Nt.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,s=e.maskId,u=Ep(n),c=us("classes",[].concat(Ru(VS(e)),Ru(o.split(" ")))),d=us("transform",typeof e.transform=="string"?Tu.transform(e.transform):e.transform),p=us("mask",Ep(r)),v=LS(u,pn(pn(pn(pn({},c),d),p),{},{symbol:i,title:a,titleId:l,maskId:s}));if(!v)return XS("Could not find icon",u),null;var g=v.abstract,x={ref:t};return Object.keys(e).forEach(function(E){mt.defaultProps.hasOwnProperty(E)||(x[E]=e[E])}),JS(g[0],x)});mt.displayName="FontAwesomeIcon";mt.propTypes={beat:Q.exports.bool,border:Q.exports.bool,beatFade:Q.exports.bool,bounce:Q.exports.bool,className:Q.exports.string,fade:Q.exports.bool,flash:Q.exports.bool,mask:Q.exports.oneOfType([Q.exports.object,Q.exports.array,Q.exports.string]),maskId:Q.exports.string,fixedWidth:Q.exports.bool,inverse:Q.exports.bool,flip:Q.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.exports.oneOfType([Q.exports.object,Q.exports.array,Q.exports.string]),listItem:Q.exports.bool,pull:Q.exports.oneOf(["right","left"]),pulse:Q.exports.bool,rotation:Q.exports.oneOf([0,90,180,270]),shake:Q.exports.bool,size:Q.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.exports.bool,spinPulse:Q.exports.bool,spinReverse:Q.exports.bool,symbol:Q.exports.oneOfType([Q.exports.bool,Q.exports.string]),title:Q.exports.string,titleId:Q.exports.string,transform:Q.exports.oneOfType([Q.exports.string,Q.exports.object]),swapOpacity:Q.exports.bool};mt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var JS=og.bind(null,Nt.createElement);const ZS=T.div`
  padding: 32px;
`,qS=T.h2`
  ${({theme:{colors:e}})=>F`
    color: ${e.darkBlue};
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
  `}
`,Iu=T.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,lg=T.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,sg=T.span`
  ${({theme:{breakpoints:e}})=>F`
    margin: 1rem;
    @media (max-width: ${e.lg}) {
      transform: rotate(90deg);
    }
  `}
`,eb=T.div`
  ${({hasManyEvolutions:e,showShadow:t,theme:{boxShadow:n}})=>F`
    ${t&&"padding: 24px;"}
    display: flex;
    flex-direction: ${e?"row":"column"};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 32px;
    box-shadow: ${t?n.dark:""};
  `}
`,tb=({url:e})=>{const[t,n]=_.exports.useState(!1),[r,i]=_.exports.useState(),o=r==null?void 0:r.filter(p=>p.canEvolve),a=r==null?void 0:r.filter(p=>!p.canEvolve),l=(p,v)=>p.includes("https://pokeapi.co/api/v2/pokemon-species/")?p.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/",""):v,s=_.exports.useMemo(()=>[],[]),u=_.exports.useCallback(p=>{if(!p.evolves_to.length){s.push({id:l(p.species.url,p.species.name),name:p.species.name,canEvolve:!1}),i(s);return}s.length||s.push({id:l(p.species.url,p.species.name),name:p.species.name,canEvolve:!0}),p.evolves_to.forEach(v=>{if(!v.evolves_to.length){s.push({id:l(v.species.url,v.species.name),name:v.species.name,canEvolve:!1}),i(s);return}s.push({id:l(v.species.url,v.species.name),name:v.species.name,canEvolve:!0}),i(s),u(v)})},[s]),c=_.exports.useCallback(async()=>{n(!0);const p=await nk(e);u(p.chain),n(!1)},[e,u]),{colors:d}=nr();return _.exports.useEffect(()=>{c()},[e,c]),y(ZS,{children:t?y(hl,{}):j(Ji,{children:[y(qS,{children:"EVOLUTION CHAIN:"}),j(Iu,{children:[o!=null&&o.length?o.map(p=>j(lg,{children:[y(yu,{pokemon:p.id,light:!0},p.name),p.canEvolve&&y(sg,{children:y(mt,{icon:Ov,color:d.black,size:"xl"})})]},p.name)):null,a!=null&&a.length?y(eb,{showShadow:a.length>1,hasManyEvolutions:a.length>3,children:a.map(p=>y("div",{children:y(yu,{pokemon:p.id,light:!0},p.name)},p.name))}):null]})]})})},nb=()=>{const{colors:e}=nr();return y(Iu,{children:j(Iu,{children:[j(lg,{children:[y(Kd,{baseColor:e.lightGray}),y(sg,{children:y(mt,{icon:Ov,color:e.mediumGray,size:"xl"})})]}),y(Kd,{baseColor:e.lightGray})]})})},rb=T.div`
  ${({theme:{boxShadow:e,colors:t}})=>F`
    box-shadow: ${e.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${t.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`,ib=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ob=T.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`,ab=T.div`
  margin-bottom: -3px;
`,lb=T.div`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`,sb=T.div`
  ${({value:e,theme:{colors:t}})=>F`
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
`,ub=({stats:e})=>j(rb,{children:[y("h3",{children:"Stats"}),y(ib,{children:e.map(t=>j(ob,{children:[y(ab,{children:t.stat.name.toUpperCase()}),y(lb,{value:t.base_stat,children:y(sb,{value:t.base_stat,children:t.base_stat})})]},t.stat.name))})]}),ug=T.div`
  ${({theme:{spacing:e}})=>F`
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
`,cg=T.div`
  ${({theme:{colors:e,spacing:t}})=>F`
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
`,fg=T.div`
  ${({theme:{colors:e}})=>F`
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
`,dg=T.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: stretch;

    @media (max-width: ${e.md}) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  `}
`,pg=T.div`
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
`,cb=T.p`
  ${({theme:{colors:e,breakpoints:t}})=>F`
    width: 300px;
    padding: 2rem;
    border-radius: 8px;
    background: ${e.lightGray};
    font-weight: 500;
    @media (max-width: ${t.md}) {
      margin-bottom: 1rem;
    }
  `}
`,mg=T.div`
  ${({type:e,theme:{colors:t,typesColors:n}})=>F`
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
`,$a=T.div`
  ${({theme:{colors:e,breakpoints:t}})=>F`
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
`,Cp=T.div`
  ${({isRight:e=!1,theme:{colors:t,breakpoints:n}})=>F`
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
`,hg=T.div`
  ${({type:e,theme:{colors:t,typesColors:n,boxShadow:r}})=>F`
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
`,vg=T.h1`
  font-family: 'Lato', sans-serif;
`,Pp=T(In)`
  border-radius: 99px;
`,fb=()=>{var u;const[e,t]=_.exports.useState(),[n,r]=_.exports.useState(),[i,o]=_.exports.useState(!1),a=Nc(),l=_.exports.useCallback(async()=>{if(a!=null&&a.id){o(!0);const c=await rk(a.id),d=await Yc(a.id);t(c),r(d),o(!1)}},[a.id]),{colors:s}=nr();return _.exports.useEffect(()=>{l()},[a.id,l]),j(ug,{children:[i&&y(db,{}),!i&&a.id&&n?j(cg,{children:[j(mg,{type:n.types[0].type.name,children:[j(Ct,{to:`/pokemon/${Number(n==null?void 0:n.id)>1?Number(n==null?void 0:n.id)-1:1}`,children:[j($a,{children:[y(mt,{icon:wu}),y("p",{children:"PREV POKEMON"})]}),y(Cp,{children:y(mt,{icon:wu,size:"2x",color:s.white})})]}),y(hg,{type:n.types[0].type.name,children:y("img",{src:n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name})}),j(Ct,{to:`/pokemon/${Number(n.id)+1}`,children:[j($a,{children:[y("p",{children:"NEXT POKEMON"}),y(mt,{icon:xu})]}),y(Cp,{isRight:!0,children:y(mt,{icon:xu,size:"2x",color:s.white})})]})]}),j(vg,{children:["#",e==null?void 0:e.id," ",e==null?void 0:e.name.toUpperCase()]}),j(fg,{children:[j(dg,{children:[j(pg,{children:[y(cb,{children:(u=e==null?void 0:e.flavor_text_entries.find(c=>c.language.name==="en"))==null?void 0:u.flavor_text.replace(/\f/g," ")}),y("div",{children:n.types.map(c=>y(Qc,{typeName:c.type.name},c.type.name))})]}),y(ub,{stats:n.stats})]}),e?y(tb,{url:e==null?void 0:e.evolution_chain.url}):null]})]}):null]})},db=()=>{const{colors:e}=nr();return y(ug,{children:j(cg,{children:[j(mg,{type:"normal",children:[j($a,{children:[y(mt,{icon:wu}),y("p",{children:"PREV POKEMON"})]}),y(hg,{type:"normal",children:y(In,{width:200,height:200,circle:!0,baseColor:e.lightGray})}),j($a,{children:[y("p",{children:"NEXT POKEMON"}),y(mt,{icon:xu})]})]}),y(vg,{children:y(In,{width:180,baseColor:e.lightGray,height:45})}),j(fg,{children:[j(dg,{children:[j(pg,{children:[y("div",{children:y(In,{width:300,height:150,baseColor:e.lightGray})}),j("div",{children:[y(Pp,{width:300,height:35,baseColor:e.lightGray}),y(Pp,{width:300,height:35,baseColor:e.lightGray})]})]}),y(In,{width:330,height:330,baseColor:e.lightGray})]}),y(In,{width:250,height:35,baseColor:e.lightGray}),y(nb,{})]})]})})},pb=Bx`
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
`,mb={colors:{white:"#F3F4F6",lightestGray:"#F3F4F6",lightGray:"#D1D5DB",mediumGray:"#6B7280",darkGray:"#1F2937",black:"#111827",lightBlue:"#7DD3FC",mediumBlue:"#0284C7",darkBlue:"#075985",green:"#55ab62",yellow:"#feee6d",mediumYellow:"#c7a400",darkYellow:"#9f8a0d",red:"#e5092e",pokedexGreen:"#bad8a8",pokedexLight:"#ce1131",pokedexMedium:"#bd0f33",pokedexDark:"#941828",pokedexDarkest:"#810a1e"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1440px"},spacing:{headerSpacing:"65px"},boxShadow:{dark:"0 0 6px rgba(0, 0, 0, 0.3)",light:"0 0 4px rgba(0, 0, 0, 0.1)"},typesColors:{normal:{primaryColor:"#A8A878",secondaryColor:"#6D6D4E"},fighting:{primaryColor:"#C03028",secondaryColor:"#D67873"},flying:{primaryColor:"#A890F0",secondaryColor:"#6D5E9C"},poison:{primaryColor:"#A040A0",secondaryColor:"#682A68"},ground:{primaryColor:"#E0C068",secondaryColor:"#927D44"},rock:{primaryColor:"#B8A038",secondaryColor:"#786824"},bug:{primaryColor:"#A8B820",secondaryColor:"#6D7815"},ghost:{primaryColor:"#705898",secondaryColor:"#493963"},steel:{primaryColor:"#B8B8D0",secondaryColor:"#787887"},fire:{primaryColor:"#F08030",secondaryColor:"#9C531F"},water:{primaryColor:"#6890F0",secondaryColor:"#445E9C"},grass:{primaryColor:"#78C850",secondaryColor:"#4E8234"},electric:{primaryColor:"#F8D030",secondaryColor:"#A1871F"},psychic:{primaryColor:"#F85888",secondaryColor:"#A13959"},ice:{primaryColor:"#98D8D8",secondaryColor:"#638D8D"},dragon:{primaryColor:"#7038F8",secondaryColor:"#4924A1"},dark:{primaryColor:"#705848",secondaryColor:"#49392F"},fairy:{primaryColor:"#EE99AC",secondaryColor:"#9B6470"},unknown:{primaryColor:"#68A090",secondaryColor:"#44685E"},shadow:{primaryColor:"#705898",secondaryColor:"#493963"}}},hb="/pokedex/";function vb(){return j(Fx,{theme:mb,children:[y(W1,{basename:hb,children:y(Kx,{children:y(j1,{children:j(Ln,{path:"/",children:[y(Ln,{index:!0,element:y(wk,{})}),y(Ln,{path:"pokedex",element:y(kk,{}),children:y(Ln,{path:":id",element:y(t2,{})})}),y(Ln,{path:"pokemon/:id",element:y(fb,{})}),y(Ln,{path:"*",element:y("div",{children:"Not found"})})]})})})}),y(pb,{})]})}cs.createRoot(document.getElementById("root")).render(y(vb,{}));
