function vg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function gg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cs={},bp={exports:{}},lt={},_={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),yg=Symbol.for("react.portal"),xg=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),bg=Symbol.for("react.forward_ref"),Cg=Symbol.for("react.suspense"),Pg=Symbol.for("react.memo"),_g=Symbol.for("react.lazy"),lf=Symbol.iterator;function Og(e){return e===null||typeof e!="object"?null:(e=lf&&e[lf]||e["@@iterator"],typeof e=="function"?e:null)}var Cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pp=Object.assign,_p={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=_p,this.updater=n||Cp}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Op(){}Op.prototype=Dr.prototype;function Lu(e,t,n){this.props=e,this.context=t,this.refs=_p,this.updater=n||Cp}var Iu=Lu.prototype=new Op;Iu.constructor=Lu;Pp(Iu,Dr.prototype);Iu.isPureReactComponent=!0;var sf=Array.isArray,Ap=Object.prototype.hasOwnProperty,zu={current:null},$p={key:!0,ref:!0,__self:!0,__source:!0};function Np(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ap.call(t,r)&&!$p.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:zu.current}}function Ag(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Du(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function $g(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uf=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$g(""+e.key):t.toString(36)}function Lo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case yg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Pl(a,0):r,sf(i)?(n="",e!=null&&(n=e.replace(uf,"$&/")+"/"),Lo(i,t,n,"",function(u){return u})):i!=null&&(Du(i)&&(i=Ag(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",sf(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Pl(o,l);a+=Lo(o,t,n,s,i)}else if(s=Og(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Pl(o,l++),a+=Lo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oo(e,t,n){if(e==null)return e;var r=[],i=0;return Lo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Io={transition:null},Tg={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Io,ReactCurrentOwner:zu};K.Children={map:oo,forEach:function(e,t,n){oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oo(e,function(){t++}),t},toArray:function(e){return oo(e,function(t){return t})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Dr;K.Fragment=xg;K.Profiler=kg;K.PureComponent=Lu;K.StrictMode=wg;K.Suspense=Cg;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=zu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ap.call(t,s)&&!$p.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:Eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sg,_context:e},e.Consumer=e};K.createElement=Np;K.createFactory=function(e){var t=Np.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:bg,render:e}};K.isValidElement=Du;K.lazy=function(e){return{$$typeof:_g,_payload:{_status:-1,_result:e},_init:Ng}};K.memo=function(e,t){return{$$typeof:Pg,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return Ye.current.useCallback(e,t)};K.useContext=function(e){return Ye.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ye.current.useEffect(e,t)};K.useId=function(){return Ye.current.useId()};K.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ye.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};K.useRef=function(e){return Ye.current.useRef(e)};K.useState=function(e){return Ye.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ye.current.useTransition()};K.version="18.2.0";(function(e){e.exports=K})(_);const $t=gg(_.exports),fs=vg({__proto__:null,default:$t},[_.exports]);var Tp={exports:{}},Rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,U){var W=O.length;O.push(U);e:for(;0<W;){var ae=W-1>>>1,N=O[ae];if(0<i(N,U))O[ae]=U,O[W]=N,W=ae;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var U=O[0],W=O.pop();if(W!==U){O[0]=W;e:for(var ae=0,N=O.length,L=N>>>1;ae<L;){var z=2*(ae+1)-1,H=O[z],k=z+1,X=O[k];if(0>i(H,W))k<N&&0>i(X,H)?(O[ae]=X,O[k]=W,ae=k):(O[ae]=H,O[z]=W,ae=z);else if(k<N&&0>i(X,W))O[ae]=X,O[k]=W,ae=k;else break e}}return U}function i(O,U){var W=O.sortIndex-U.sortIndex;return W!==0?W:O.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,p=null,d=3,v=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=O)r(u),U.sortIndex=U.expirationTime,t(s,U);else break;U=n(u)}}function w(O){if(y=!1,h(O),!g)if(n(s)!==null)g=!0,Mt(E);else{var U=n(u);U!==null&&He(w,U.startTime-O)}}function E(O,U){g=!1,y&&(y=!1,m(T),T=-1),v=!0;var W=d;try{for(h(U),p=n(s);p!==null&&(!(p.expirationTime>U)||O&&!Pe());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,d=p.priorityLevel;var N=ae(p.expirationTime<=U);U=e.unstable_now(),typeof N=="function"?p.callback=N:p===n(s)&&r(s),h(U)}else r(s);p=n(s)}if(p!==null)var L=!0;else{var z=n(u);z!==null&&He(w,z.startTime-U),L=!1}return L}finally{p=null,d=W,v=!1}}var P=!1,$=null,T=-1,G=5,B=-1;function Pe(){return!(e.unstable_now()-B<G)}function Se(){if($!==null){var O=e.unstable_now();B=O;var U=!0;try{U=$(!0,O)}finally{U?Ne():(P=!1,$=null)}}else P=!1}var Ne;if(typeof f=="function")Ne=function(){f(Se)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Me=nt.port2;nt.port1.onmessage=Se,Ne=function(){Me.postMessage(null)}}else Ne=function(){b(Se,0)};function Mt(O){$=O,P||(P=!0,Ne())}function He(O,U){T=b(function(){O(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Mt(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var W=d;d=U;try{return O()}finally{d=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=d;d=O;try{return U()}finally{d=W}},e.unstable_scheduleCallback=function(O,U,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,O={id:c++,callback:U,priorityLevel:O,startTime:W,expirationTime:N,sortIndex:-1},W>ae?(O.sortIndex=W,t(u,O),n(s)===null&&O===n(u)&&(y?(m(T),T=-1):y=!0,He(w,W-ae))):(O.sortIndex=N,t(s,O),g||v||(g=!0,Mt(E))),O},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(O){var U=d;return function(){var W=d;d=U;try{return O.apply(this,arguments)}finally{d=W}}}})(Rp);(function(e){e.exports=Rp})(Tp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=_.exports,at=Tp.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=new Set,Ei={};function qn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Ei[e]=t,e=0;e<t.length;e++)Ip.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=Object.prototype.hasOwnProperty,Rg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},ff={};function Lg(e){return ds.call(ff,e)?!0:ds.call(cf,e)?!1:Rg.test(e)?ff[e]=!0:(cf[e]=!0,!1)}function Ig(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zg(e,t,n,r){if(t===null||typeof t>"u"||Ig(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function ju(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,ju);De[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,ju);De[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,ju);De[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fu(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zg(t,n,i,r)&&(n=null),r||i===null?Lg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),ps=Symbol.for("react.profiler"),zp=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),ms=Symbol.for("react.suspense"),hs=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Mp=Symbol.for("react.offscreen"),df=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=df&&e[df]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,_l;function oi(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Ol=!1;function Al(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Dg(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case rr:return"Portal";case ps:return"Profiler";case Uu:return"StrictMode";case ms:return"Suspense";case hs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dp:return(e.displayName||"Context")+".Consumer";case zp:return(e._context.displayName||"Context")+".Provider";case Bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wu:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function Mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jg(e){var t=jp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=jg(e))}function Fp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function pf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Up(e,t){t=t.checked,t!=null&&Fu(e,"checked",t,!1)}function ys(e,t){Up(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&xs(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xs(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function xr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ai(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Bp(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,Hp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fg=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Fg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Vp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Gp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ug=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ss(e,t){if(t){if(Ug[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,wr=null,kr=null;function gf(e){if(e=Ki(e)){if(typeof Cs!="function")throw Error(C(280));var t=e.stateNode;t&&(t=La(t),Cs(e.stateNode,e.type,t))}}function Yp(e){wr?kr?kr.push(e):kr=[e]:wr=e}function Qp(){if(wr){var e=wr,t=kr;if(kr=wr=null,gf(e),t)for(e=0;e<t.length;e++)gf(t[e])}}function Kp(e,t){return e(t)}function Xp(){}var $l=!1;function Jp(e,t,n){if($l)return e(t,n);$l=!0;try{return Kp(e,t,n)}finally{$l=!1,(wr!==null||kr!==null)&&(Xp(),Qp())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=La(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ps=!1;if(Vt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Ps=!1}function Bg(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var di=!1,Zo=null,qo=!1,_s=null,Wg={onError:function(e){di=!0,Zo=e}};function Hg(e,t,n,r,i,o,a,l,s){di=!1,Zo=null,Bg.apply(Wg,arguments)}function Vg(e,t,n,r,i,o,a,l,s){if(Hg.apply(this,arguments),di){if(di){var u=Zo;di=!1,Zo=null}else throw Error(C(198));qo||(qo=!0,_s=u)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yf(e){if(er(e)!==e)throw Error(C(188))}function Gg(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yf(i),e;if(o===r)return yf(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function qp(e){return e=Gg(e),e!==null?em(e):null}function em(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=em(e);if(t!==null)return t;e=e.sibling}return null}var tm=at.unstable_scheduleCallback,xf=at.unstable_cancelCallback,Yg=at.unstable_shouldYield,Qg=at.unstable_requestPaint,we=at.unstable_now,Kg=at.unstable_getCurrentPriorityLevel,Vu=at.unstable_ImmediatePriority,nm=at.unstable_UserBlockingPriority,ea=at.unstable_NormalPriority,Xg=at.unstable_LowPriority,rm=at.unstable_IdlePriority,$a=null,It=null;function Jg(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:e0,Zg=Math.log,qg=Math.LN2;function e0(e){return e>>>=0,e===0?32:31-(Zg(e)/qg|0)|0}var uo=64,co=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=li(l):(o&=a,o!==0&&(r=li(o)))}else a=n&~i,a!==0?r=li(a):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function t0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_t(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=t0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function im(){var e=uo;return uo<<=1,(uo&4194240)===0&&(uo=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function r0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function om(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var am,Yu,lm,sm,um,As=!1,fo=[],mn=null,hn=null,vn=null,Pi=new Map,_i=new Map,sn=[],i0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(t.pointerId)}}function Kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Yu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function o0(e,t,n,r,i){switch(t){case"focusin":return mn=Kr(mn,e,t,n,r,i),!0;case"dragenter":return hn=Kr(hn,e,t,n,r,i),!0;case"mouseover":return vn=Kr(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pi.set(o,Kr(Pi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,Kr(_i.get(o)||null,e,t,n,r,i)),!0}return!1}function cm(e){var t=zn(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=Zp(n),t!==null){e.blockedOn=t,um(e.priority,function(){lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bs=r,n.target.dispatchEvent(r),bs=null}else return t=Ki(n),t!==null&&Yu(t),e.blockedOn=n,!1;t.shift()}return!0}function kf(e,t,n){zo(e)&&n.delete(t)}function a0(){As=!1,mn!==null&&zo(mn)&&(mn=null),hn!==null&&zo(hn)&&(hn=null),vn!==null&&zo(vn)&&(vn=null),Pi.forEach(kf),_i.forEach(kf)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,a0)))}function Oi(e){function t(i){return Xr(i,e)}if(0<fo.length){Xr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Xr(mn,e),hn!==null&&Xr(hn,e),vn!==null&&Xr(vn,e),Pi.forEach(t),_i.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&sn.shift()}var Sr=Zt.ReactCurrentBatchConfig,na=!0;function l0(e,t,n,r){var i=re,o=Sr.transition;Sr.transition=null;try{re=1,Qu(e,t,n,r)}finally{re=i,Sr.transition=o}}function s0(e,t,n,r){var i=re,o=Sr.transition;Sr.transition=null;try{re=4,Qu(e,t,n,r)}finally{re=i,Sr.transition=o}}function Qu(e,t,n,r){if(na){var i=$s(e,t,n,r);if(i===null)Ul(e,t,r,ra,n),wf(e,r);else if(o0(i,e,t,n,r))r.stopPropagation();else if(wf(e,r),t&4&&-1<i0.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&am(o),o=$s(e,t,n,r),o===null&&Ul(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var ra=null;function $s(e,t,n,r){if(ra=null,e=Hu(r),e=zn(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function fm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case Vu:return 1;case nm:return 4;case ea:case Xg:return 16;case rm:return 536870912;default:return 16}default:return 16}}var cn=null,Ku=null,Do=null;function dm(){if(Do)return Do;var e,t=Ku,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Do=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Sf(){return!1}function st(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:Sf,this.isPropagationStopped=Sf,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=st(Mr),Qi=he({},Mr,{view:0,detail:0}),u0=st(Qi),Tl,Rl,Jr,Na=he({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Tl=e.screenX-Jr.screenX,Rl=e.screenY-Jr.screenY):Rl=Tl=0,Jr=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Ef=st(Na),c0=he({},Na,{dataTransfer:0}),f0=st(c0),d0=he({},Qi,{relatedTarget:0}),Ll=st(d0),p0=he({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=st(p0),h0=he({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=st(h0),g0=he({},Mr,{data:0}),bf=st(g0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w0[e])?!!t[e]:!1}function Ju(){return k0}var S0=he({},Qi,{key:function(e){if(e.key){var t=y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E0=st(S0),b0=he({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=st(b0),C0=he({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),P0=st(C0),_0=he({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=st(_0),A0=he({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=st(A0),N0=[9,13,27,32],Zu=Vt&&"CompositionEvent"in window,pi=null;Vt&&"documentMode"in document&&(pi=document.documentMode);var T0=Vt&&"TextEvent"in window&&!pi,pm=Vt&&(!Zu||pi&&8<pi&&11>=pi),Pf=String.fromCharCode(32),_f=!1;function mm(e,t){switch(e){case"keyup":return N0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function R0(e,t){switch(e){case"compositionend":return hm(t);case"keypress":return t.which!==32?null:(_f=!0,Pf);case"textInput":return e=t.data,e===Pf&&_f?null:e;default:return null}}function L0(e,t){if(or)return e==="compositionend"||!Zu&&mm(e,t)?(e=dm(),Do=Ku=cn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pm&&t.locale!=="ko"?null:t.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I0[e.type]:t==="textarea"}function vm(e,t,n,r){Yp(r),t=ia(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Ai=null;function z0(e){_m(e,0)}function Ta(e){var t=sr(e);if(Fp(t))return e}function D0(e,t){if(e==="change")return t}var gm=!1;if(Vt){var Il;if(Vt){var zl="oninput"in document;if(!zl){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),zl=typeof Af.oninput=="function"}Il=zl}else Il=!1;gm=Il&&(!document.documentMode||9<document.documentMode)}function $f(){mi&&(mi.detachEvent("onpropertychange",ym),Ai=mi=null)}function ym(e){if(e.propertyName==="value"&&Ta(Ai)){var t=[];vm(t,Ai,e,Hu(e)),Jp(z0,t)}}function M0(e,t,n){e==="focusin"?($f(),mi=t,Ai=n,mi.attachEvent("onpropertychange",ym)):e==="focusout"&&$f()}function j0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(Ai)}function F0(e,t){if(e==="click")return Ta(t)}function U0(e,t){if(e==="input"||e==="change")return Ta(t)}function B0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:B0;function $i(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ds.call(t,i)||!At(e[i],t[i]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tf(e,t){var n=Nf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function xm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wm(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function W0(e){var t=wm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(r!==null&&qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Tf(n,o);var a=Tf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var H0=Vt&&"documentMode"in document&&11>=document.documentMode,ar=null,Ns=null,hi=null,Ts=!1;function Rf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ts||ar==null||ar!==Jo(r)||(r=ar,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&$i(hi,r)||(hi=r,r=ia(Ns,"onSelect"),0<r.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Dl={},km={};Vt&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Ra(e){if(Dl[e])return Dl[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in km)return Dl[e]=t[n];return e}var Sm=Ra("animationend"),Em=Ra("animationiteration"),bm=Ra("animationstart"),Cm=Ra("transitionend"),Pm=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Pm.set(e,t),qn(t,[e])}for(var Ml=0;Ml<Lf.length;Ml++){var jl=Lf[Ml],V0=jl.toLowerCase(),G0=jl[0].toUpperCase()+jl.slice(1);An(V0,"on"+G0)}An(Sm,"onAnimationEnd");An(Em,"onAnimationIteration");An(bm,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Cm,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function If(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vg(r,t,void 0,e),e.currentTarget=null}function _m(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;If(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;If(i,l,u),o=s}}}if(qo)throw e=_s,qo=!1,_s=null,e}function se(e,t){var n=t[Ds];n===void 0&&(n=t[Ds]=new Set);var r=e+"__bubble";n.has(r)||(Om(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Om(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[ho]){e[ho]=!0,Ip.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Fl("selectionchange",!1,t))}}function Om(e,t,n,r){switch(fm(t)){case 1:var i=l0;break;case 4:i=s0;break;default:i=Qu}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=zn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Jp(function(){var u=o,c=Hu(n),p=[];e:{var d=Pm.get(e);if(d!==void 0){var v=Xu,g=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":v=E0;break;case"focusin":g="focus",v=Ll;break;case"focusout":g="blur",v=Ll;break;case"beforeblur":case"afterblur":v=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=P0;break;case Sm:case Em:case bm:v=m0;break;case Cm:v=O0;break;case"scroll":v=u0;break;case"wheel":v=$0;break;case"copy":case"cut":case"paste":v=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cf}var y=(t&4)!==0,b=!y&&e==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=Ci(f,m),w!=null&&y.push(Ti(f,w,h)))),b)break;f=f.return}0<y.length&&(d=new v(d,g,null,n,c),p.push({event:d,listeners:y}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==bs&&(g=n.relatedTarget||n.fromElement)&&(zn(g)||g[Gt]))break e;if((v||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?zn(g):null,g!==null&&(b=er(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Ef,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Cf,w="onPointerLeave",m="onPointerEnter",f="pointer"),b=v==null?d:sr(v),h=g==null?d:sr(g),d=new y(w,f+"leave",v,n,c),d.target=b,d.relatedTarget=h,w=null,zn(c)===u&&(y=new y(m,f+"enter",g,n,c),y.target=h,y.relatedTarget=b,w=y),b=w,v&&g)t:{for(y=v,m=g,f=0,h=y;h;h=nr(h))f++;for(h=0,w=m;w;w=nr(w))h++;for(;0<f-h;)y=nr(y),f--;for(;0<h-f;)m=nr(m),h--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=nr(y),m=nr(m)}y=null}else y=null;v!==null&&zf(p,d,v,y,!1),g!==null&&b!==null&&zf(p,b,g,y,!0)}}e:{if(d=u?sr(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var E=D0;else if(Of(d))if(gm)E=U0;else{E=j0;var P=M0}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=F0);if(E&&(E=E(e,u))){vm(p,E,n,c);break e}P&&P(e,d,u),e==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&xs(d,"number",d.value)}switch(P=u?sr(u):window,e){case"focusin":(Of(P)||P.contentEditable==="true")&&(ar=P,Ns=u,hi=null);break;case"focusout":hi=Ns=ar=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,Rf(p,n,c);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":Rf(p,n,c)}var $;if(Zu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else or?mm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(pm&&n.locale!=="ko"&&(or||T!=="onCompositionStart"?T==="onCompositionEnd"&&or&&($=dm()):(cn=c,Ku="value"in cn?cn.value:cn.textContent,or=!0)),P=ia(u,T),0<P.length&&(T=new bf(T,e,null,n,c),p.push({event:T,listeners:P}),$?T.data=$:($=hm(n),$!==null&&(T.data=$)))),($=T0?R0(e,n):L0(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(c=new bf("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=$))}_m(p,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ci(e,n),o!=null&&r.unshift(Ti(e,o,i)),o=Ci(e,t),o!=null&&r.push(Ti(e,o,i))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ci(n,o),s!=null&&a.unshift(Ti(n,s,l))):i||(s=Ci(n,o),s!=null&&a.push(Ti(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Q0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(Q0,`
`).replace(K0,"")}function vo(e,t,n){if(t=Df(t),Df(e)!==t&&n)throw Error(C(425))}function oa(){}var Rs=null,Ls=null;function Is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Mf=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof Mf<"u"?function(e){return Mf.resolve(null).then(e).catch(Z0)}:zs;function Z0(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+jr,Ri="__reactProps$"+jr,Gt="__reactContainer$"+jr,Ds="__reactEvents$"+jr,q0="__reactListeners$"+jr,ey="__reactHandles$"+jr;function zn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jf(e);e!==null;){if(n=e[Rt])return n;e=jf(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[Rt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function La(e){return e[Ri]||null}var Ms=[],ur=-1;function $n(e){return{current:e}}function ce(e){0>ur||(e.current=Ms[ur],Ms[ur]=null,ur--)}function le(e,t){ur++,Ms[ur]=e.current,e.current=t}var Cn={},We=$n(Cn),Ze=$n(!1),Hn=Cn;function _r(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function aa(){ce(Ze),ce(We)}function Ff(e,t,n){if(We.current!==Cn)throw Error(C(168));le(We,t),le(Ze,n)}function Am(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Mg(e)||"Unknown",i));return he({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Hn=We.current,le(We,e),le(Ze,Ze.current),!0}function Uf(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Am(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ze),ce(We),le(We,e)):ce(Ze),le(Ze,n)}var Ft=null,Ia=!1,Wl=!1;function $m(e){Ft===null?Ft=[e]:Ft.push(e)}function ty(e){Ia=!0,$m(e)}function Nn(){if(!Wl&&Ft!==null){Wl=!0;var e=0,t=re;try{var n=Ft;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ia=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),tm(Vu,Nn),i}finally{re=t,Wl=!1}}return null}var cr=[],fr=0,sa=null,ua=0,ft=[],dt=0,Vn=null,Ut=1,Bt="";function Tn(e,t){cr[fr++]=ua,cr[fr++]=sa,sa=e,ua=t}function Nm(e,t,n){ft[dt++]=Ut,ft[dt++]=Bt,ft[dt++]=Vn,Vn=e;var r=Ut;e=Bt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var o=32-_t(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ut=1<<32-_t(t)+i|n<<i|r,Bt=o+e}else Ut=1<<o|n<<i|r,Bt=e}function ec(e){e.return!==null&&(Tn(e,1),Nm(e,1,0))}function tc(e){for(;e===sa;)sa=cr[--fr],cr[fr]=null,ua=cr[--fr],cr[fr]=null;for(;e===Vn;)Vn=ft[--dt],ft[dt]=null,Bt=ft[--dt],ft[dt]=null,Ut=ft[--dt],ft[dt]=null}var ot=null,it=null,de=!1,Et=null;function Tm(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Ut,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fs(e){if(de){var t=it;if(t){var n=t;if(!Bf(e,t)){if(js(e))throw Error(C(418));t=gn(n.nextSibling);var r=ot;t&&Bf(e,t)?Tm(r,n):(e.flags=e.flags&-4097|2,de=!1,ot=e)}}else{if(js(e))throw Error(C(418));e.flags=e.flags&-4097|2,de=!1,ot=e}}}function Wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function go(e){if(e!==ot)return!1;if(!de)return Wf(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Is(e.type,e.memoizedProps)),t&&(t=it)){if(js(e))throw Rm(),Error(C(418));for(;t;)Tm(e,t),t=gn(t.nextSibling)}if(Wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?gn(e.stateNode.nextSibling):null;return!0}function Rm(){for(var e=it;e;)e=gn(e.nextSibling)}function Or(){it=ot=null,de=!1}function nc(e){Et===null?Et=[e]:Et.push(e)}var ny=Zt.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=$n(null),fa=null,dr=null,rc=null;function ic(){rc=dr=fa=null}function oc(e){var t=ca.current;ce(ca),e._currentValue=t}function Us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){fa=e,rc=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(fa===null)throw Error(C(308));dr=e,fa.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Dn=null;function ac(e){Dn===null?Dn=[e]:Dn.push(e)}function Lm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ac(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Im(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,ac(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}function Hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;ln=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;a=0,c=u=s=null,l=o;do{var d=l.lane,v=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(d=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(v,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(v,p,d):g,d==null)break e;p=he({},p,d);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else v={eventTime:v,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,s=p):c=c.next=v,a|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=p}}function Vf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var zm=new Lp.Component().refs;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=wn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=yn(e,o,i),t!==null&&(Ot(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=wn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yn(e,o,i),t!==null&&(Ot(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=wn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=yn(e,i,r),t!==null&&(Ot(t,e,r,n),jo(t,e,r))}};function Gf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!$i(n,r)||!$i(i,o):!0}function Dm(e,t,n){var r=!1,i=Cn,o=t.contextType;return typeof o=="object"&&o!==null?o=vt(o):(i=qe(t)?Hn:We.current,r=t.contextTypes,o=(r=r!=null)?_r(e,i):Cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function Ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zm,lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=vt(o):(o=qe(t)?Hn:We.current,i.context=_r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&za.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===zm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qf(e){var t=e._init;return t(e._payload)}function Mm(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=kn(m,f),m.index=0,m.sibling=null,m}function o(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,h,w){return f===null||f.tag!==6?(f=Xl(h,m.mode,w),f.return=m,f):(f=i(f,h),f.return=m,f)}function s(m,f,h,w){var E=h.type;return E===ir?c(m,f,h.props.children,w,h.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&Qf(E)===f.type)?(w=i(f,h.props),w.ref=Zr(m,f,h),w.return=m,w):(w=Vo(h.type,h.key,h.props,null,m.mode,w),w.ref=Zr(m,f,h),w.return=m,w)}function u(m,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Jl(h,m.mode,w),f.return=m,f):(f=i(f,h.children||[]),f.return=m,f)}function c(m,f,h,w,E){return f===null||f.tag!==7?(f=Bn(h,m.mode,w,E),f.return=m,f):(f=i(f,h),f.return=m,f)}function p(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xl(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ao:return h=Vo(f.type,f.key,f.props,null,m.mode,h),h.ref=Zr(m,null,f),h.return=m,h;case rr:return f=Jl(f,m.mode,h),f.return=m,f;case an:var w=f._init;return p(m,w(f._payload),h)}if(ai(f)||Yr(f))return f=Bn(f,m.mode,h,null),f.return=m,f;yo(m,f)}return null}function d(m,f,h,w){var E=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:l(m,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:return h.key===E?s(m,f,h,w):null;case rr:return h.key===E?u(m,f,h,w):null;case an:return E=h._init,d(m,f,E(h._payload),w)}if(ai(h)||Yr(h))return E!==null?null:c(m,f,h,w,null);yo(m,h)}return null}function v(m,f,h,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(f,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ao:return m=m.get(w.key===null?h:w.key)||null,s(f,m,w,E);case rr:return m=m.get(w.key===null?h:w.key)||null,u(f,m,w,E);case an:var P=w._init;return v(m,f,h,P(w._payload),E)}if(ai(w)||Yr(w))return m=m.get(h)||null,c(f,m,w,E,null);yo(f,w)}return null}function g(m,f,h,w){for(var E=null,P=null,$=f,T=f=0,G=null;$!==null&&T<h.length;T++){$.index>T?(G=$,$=null):G=$.sibling;var B=d(m,$,h[T],w);if(B===null){$===null&&($=G);break}e&&$&&B.alternate===null&&t(m,$),f=o(B,f,T),P===null?E=B:P.sibling=B,P=B,$=G}if(T===h.length)return n(m,$),de&&Tn(m,T),E;if($===null){for(;T<h.length;T++)$=p(m,h[T],w),$!==null&&(f=o($,f,T),P===null?E=$:P.sibling=$,P=$);return de&&Tn(m,T),E}for($=r(m,$);T<h.length;T++)G=v($,m,T,h[T],w),G!==null&&(e&&G.alternate!==null&&$.delete(G.key===null?T:G.key),f=o(G,f,T),P===null?E=G:P.sibling=G,P=G);return e&&$.forEach(function(Pe){return t(m,Pe)}),de&&Tn(m,T),E}function y(m,f,h,w){var E=Yr(h);if(typeof E!="function")throw Error(C(150));if(h=E.call(h),h==null)throw Error(C(151));for(var P=E=null,$=f,T=f=0,G=null,B=h.next();$!==null&&!B.done;T++,B=h.next()){$.index>T?(G=$,$=null):G=$.sibling;var Pe=d(m,$,B.value,w);if(Pe===null){$===null&&($=G);break}e&&$&&Pe.alternate===null&&t(m,$),f=o(Pe,f,T),P===null?E=Pe:P.sibling=Pe,P=Pe,$=G}if(B.done)return n(m,$),de&&Tn(m,T),E;if($===null){for(;!B.done;T++,B=h.next())B=p(m,B.value,w),B!==null&&(f=o(B,f,T),P===null?E=B:P.sibling=B,P=B);return de&&Tn(m,T),E}for($=r(m,$);!B.done;T++,B=h.next())B=v($,m,T,B.value,w),B!==null&&(e&&B.alternate!==null&&$.delete(B.key===null?T:B.key),f=o(B,f,T),P===null?E=B:P.sibling=B,P=B);return e&&$.forEach(function(Se){return t(m,Se)}),de&&Tn(m,T),E}function b(m,f,h,w){if(typeof h=="object"&&h!==null&&h.type===ir&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:e:{for(var E=h.key,P=f;P!==null;){if(P.key===E){if(E=h.type,E===ir){if(P.tag===7){n(m,P.sibling),f=i(P,h.props.children),f.return=m,m=f;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&Qf(E)===P.type){n(m,P.sibling),f=i(P,h.props),f.ref=Zr(m,P,h),f.return=m,m=f;break e}n(m,P);break}else t(m,P);P=P.sibling}h.type===ir?(f=Bn(h.props.children,m.mode,w,h.key),f.return=m,m=f):(w=Vo(h.type,h.key,h.props,null,m.mode,w),w.ref=Zr(m,f,h),w.return=m,m=w)}return a(m);case rr:e:{for(P=h.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=i(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Jl(h,m.mode,w),f.return=m,m=f}return a(m);case an:return P=h._init,b(m,f,P(h._payload),w)}if(ai(h))return g(m,f,h,w);if(Yr(h))return y(m,f,h,w);yo(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,h),f.return=m,m=f):(n(m,f),f=Xl(h,m.mode,w),f.return=m,m=f),a(m)):n(m,f)}return b}var Ar=Mm(!0),jm=Mm(!1),Xi={},zt=$n(Xi),Li=$n(Xi),Ii=$n(Xi);function Mn(e){if(e===Xi)throw Error(C(174));return e}function sc(e,t){switch(le(Ii,t),le(Li,e),le(zt,Xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}ce(zt),le(zt,t)}function $r(){ce(zt),ce(Li),ce(Ii)}function Fm(e){Mn(Ii.current);var t=Mn(zt.current),n=ks(t,e.type);t!==n&&(le(Li,e),le(zt,n))}function uc(e){Li.current===e&&(ce(zt),ce(Li))}var pe=$n(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function cc(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Fo=Zt.ReactCurrentDispatcher,Vl=Zt.ReactCurrentBatchConfig,Gn=0,me=null,Ee=null,_e=null,ma=!1,vi=!1,zi=0,ry=0;function Fe(){throw Error(C(321))}function fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function dc(e,t,n,r,i,o){if(Gn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?ly:sy,e=n(r,i),vi){o=0;do{if(vi=!1,zi=0,25<=o)throw Error(C(301));o+=1,_e=Ee=null,t.updateQueue=null,Fo.current=uy,e=n(r,i)}while(vi)}if(Fo.current=ha,t=Ee!==null&&Ee.next!==null,Gn=0,_e=Ee=me=null,ma=!1,t)throw Error(C(300));return e}function pc(){var e=zi!==0;return zi=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?me.memoizedState=_e=e:_e=_e.next=e,_e}function gt(){if(Ee===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=_e===null?me.memoizedState:_e.next;if(t!==null)_e=t,Ee=e;else{if(e===null)throw Error(C(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},_e===null?me.memoizedState=_e=e:_e=_e.next=e}return _e}function Di(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=gt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Gn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,me.lanes|=c,Yn|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,At(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=gt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);At(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Um(){}function Bm(e,t){var n=me,r=gt(),i=t(),o=!At(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,mc(Vm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Mi(9,Hm.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(C(349));(Gn&30)!==0||Wm(n,t,i)}return i}function Wm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hm(e,t,n,r){t.value=n,t.getSnapshot=r,Gm(t)&&Ym(e)}function Vm(e,t,n){return n(function(){Gm(t)&&Ym(e)})}function Gm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Ym(e){var t=Yt(e,1);t!==null&&Ot(t,e,1,-1)}function Kf(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=ay.bind(null,me,e),[t.memoizedState,e]}function Mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qm(){return gt().memoizedState}function Uo(e,t,n,r){var i=Tt();me.flags|=e,i.memoizedState=Mi(1|t,n,void 0,r===void 0?null:r)}function Da(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var a=Ee.memoizedState;if(o=a.destroy,r!==null&&fc(r,a.deps)){i.memoizedState=Mi(t,n,o,r);return}}me.flags|=e,i.memoizedState=Mi(1|t,n,o,r)}function Xf(e,t){return Uo(8390656,8,e,t)}function mc(e,t){return Da(2048,8,e,t)}function Km(e,t){return Da(4,2,e,t)}function Xm(e,t){return Da(4,4,e,t)}function Jm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zm(e,t,n){return n=n!=null?n.concat([e]):null,Da(4,4,Jm.bind(null,t,e),n)}function hc(){}function qm(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function eh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function th(e,t,n){return(Gn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(At(n,t)||(n=im(),me.lanes|=n,Yn|=n,e.baseState=!0),t)}function iy(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{re=n,Vl.transition=r}}function nh(){return gt().memoizedState}function oy(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rh(e))ih(t,n);else if(n=Lm(e,t,n,r),n!==null){var i=Ge();Ot(n,e,r,i),oh(n,t,r)}}function ay(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rh(e))ih(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,At(l,a)){var s=t.interleaved;s===null?(i.next=i,ac(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Lm(e,t,i,r),n!==null&&(i=Ge(),Ot(n,e,r,i),oh(n,t,r))}}function rh(e){var t=e.alternate;return e===me||t!==null&&t===me}function ih(e,t){vi=ma=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}var ha={readContext:vt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},ly={readContext:vt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Xf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,Jm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oy.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Kf,useDebugValue:hc,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Kf(!1),t=e[0];return e=iy.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Tt();if(de){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Oe===null)throw Error(C(349));(Gn&30)!==0||Wm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xf(Vm.bind(null,r,o,e),[e]),r.flags|=2048,Mi(9,Hm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Oe.identifierPrefix;if(de){var n=Bt,r=Ut;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ry++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sy={readContext:vt,useCallback:qm,useContext:vt,useEffect:mc,useImperativeHandle:Zm,useInsertionEffect:Km,useLayoutEffect:Xm,useMemo:eh,useReducer:Gl,useRef:Qm,useState:function(){return Gl(Di)},useDebugValue:hc,useDeferredValue:function(e){var t=gt();return th(t,Ee.memoizedState,e)},useTransition:function(){var e=Gl(Di)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Um,useSyncExternalStore:Bm,useId:nh,unstable_isNewReconciler:!1},uy={readContext:vt,useCallback:qm,useContext:vt,useEffect:mc,useImperativeHandle:Zm,useInsertionEffect:Km,useLayoutEffect:Xm,useMemo:eh,useReducer:Yl,useRef:Qm,useState:function(){return Yl(Di)},useDebugValue:hc,useDeferredValue:function(e){var t=gt();return Ee===null?t.memoizedState=e:th(t,Ee.memoizedState,e)},useTransition:function(){var e=Yl(Di)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Um,useSyncExternalStore:Bm,useId:nh,unstable_isNewReconciler:!1};function Nr(e,t){try{var n="",r=t;do n+=Dg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cy=typeof WeakMap=="function"?WeakMap:Map;function ah(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ga||(ga=!0,eu=r),Hs(e,t)},n}function lh(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Hs(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Jf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=by.bind(null,e,t,n),t.then(e,e))}function Zf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qf(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var fy=Zt.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?jm(t,null,n,r):Ar(t,e.child,n,r)}function ed(e,t,n,r,i){n=n.render;var o=t.ref;return Er(t,i),r=dc(e,t,n,r,o,i),n=pc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&n&&ec(t),t.flags|=1,Ve(e,t,r,i),t.child)}function td(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sh(e,t,o,r,i)):(e=Vo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:$i,n(a,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=kn(o,r),e.ref=t.ref,e.return=t,t.child=e}function sh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($i(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return Vs(e,t,n,r,i)}function uh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(mr,rt),rt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(mr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(mr,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(mr,rt),rt|=r;return Ve(e,t,i,n),t.child}function ch(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,n,r,i){var o=qe(n)?Hn:We.current;return o=_r(t,o),Er(t,i),n=dc(e,t,n,r,o,i),r=pc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&r&&ec(t),t.flags|=1,Ve(e,t,n,i),t.child)}function nd(e,t,n,r,i){if(qe(n)){var o=!0;la(t)}else o=!1;if(Er(t,i),t.stateNode===null)Bo(e,t),Dm(t,n,r),Ws(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=qe(n)?Hn:We.current,u=_r(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Yf(t,a,r,u),ln=!1;var d=t.memoizedState;a.state=d,da(t,r,a,i),s=t.memoizedState,l!==r||d!==s||Ze.current||ln?(typeof c=="function"&&(Bs(t,n,c,r),s=t.memoizedState),(l=ln||Gf(t,n,l,r,d,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Im(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:kt(t.type,l),a.props=u,p=t.pendingProps,d=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=vt(s):(s=qe(n)?Hn:We.current,s=_r(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||d!==s)&&Yf(t,a,r,s),ln=!1,d=t.memoizedState,a.state=d,da(t,r,a,i);var g=t.memoizedState;l!==p||d!==g||Ze.current||ln?(typeof v=="function"&&(Bs(t,n,v,r),g=t.memoizedState),(u=ln||Gf(t,n,u,r,d,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,o,i)}function Gs(e,t,n,r,i,o){ch(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Uf(t,n,!1),Qt(e,t,o);r=t.stateNode,fy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,l,o)):Ve(e,t,l,o),t.memoizedState=r.state,i&&Uf(t,n,!0),t.child}function fh(e){var t=e.stateNode;t.pendingContext?Ff(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ff(e,t.context,!1),sc(e,t.containerInfo)}function rd(e,t,n,r,i){return Or(),nc(i),t.flags|=256,Ve(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function dh(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(pe,i&1),e===null)return Fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fa(a,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qs(n),t.memoizedState=Ys,e):vc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dy(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=kn(l,o):(o=Bn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Qs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return o=e.child,e=o.sibling,r=kn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&nc(r),Ar(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(C(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fa({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Ar(t,e.child,null,a),t.child.memoizedState=Qs(a),t.memoizedState=Ys,o);if((t.mode&1)===0)return xo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Ql(o,r,void 0),xo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Je||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),Ot(r,e,i,-1))}return Sc(),r=Ql(Error(C(421))),xo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,it=gn(i.nextSibling),ot=t,de=!0,Et=null,e!==null&&(ft[dt++]=Ut,ft[dt++]=Bt,ft[dt++]=Vn,Ut=e.id,Bt=e.overflow,Vn=t),t=vc(t,r.children),t.flags|=4096,t)}function id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Us(e.return,t,n)}function Kl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ph(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,n,t);else if(e.tag===19)id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function py(e,t,n){switch(t.tag){case 3:fh(t),Or();break;case 5:Fm(t);break;case 1:qe(t.type)&&la(t);break;case 4:sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(pe,pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?dh(e,t,n):(le(pe,pe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);le(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ph(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,uh(e,t,n)}return Qt(e,t,n)}var mh,Ks,hh,vh;mh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ks=function(){};hh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mn(zt.current);var o=null;switch(n){case"input":i=gs(e,i),r=gs(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=ws(e,i),r=ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}Ss(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};vh=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function my(e,t,n){var r=t.pendingProps;switch(tc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return qe(t.type)&&aa(),Ue(t),null;case 3:return r=t.stateNode,$r(),ce(Ze),ce(We),cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(ru(Et),Et=null))),Ks(e,t),Ue(t),null;case 5:uc(t);var i=Mn(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)hh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ue(t),null}if(e=Mn(zt.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Ri]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)se(si[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":pf(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":hf(r,o),se("invalid",r)}Ss(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),i=["children",""+l]):Ei.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&se("scroll",r)}switch(n){case"input":lo(r),mf(r,o,!0);break;case"textarea":lo(r),vf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Rt]=t,e[Ri]=r,mh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Es(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)se(si[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":pf(e,r),i=gs(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),se("invalid",e);break;case"textarea":hf(e,r),i=ws(e,r),se("invalid",e);break;default:i=r}Ss(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Gp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bi(e,s):typeof s=="number"&&bi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?s!=null&&o==="onScroll"&&se("scroll",e):s!=null&&Fu(e,o,s,a))}switch(n){case"input":lo(e),mf(e,r,!1);break;case"textarea":lo(e),vf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xr(e,!!r.multiple,o,!1):r.defaultValue!=null&&xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)vh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Mn(Ii.current),Mn(zt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rm(),Or(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Rt]=t}else Or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else Et!==null&&(ru(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(pe.current&1)!==0?be===0&&(be=3):Sc())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return $r(),Ks(e,t),e===null&&Ni(t.stateNode.containerInfo),Ue(t),null;case 10:return oc(t.type._context),Ue(t),null;case 17:return qe(t.type)&&aa(),Ue(t),null;case 19:if(ce(pe),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=pa(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>Tr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=pa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!de)return Ue(t),null}else 2*we()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=pe.current,le(pe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return kc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function hy(e,t){switch(tc(t),t.tag){case 1:return qe(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),ce(Ze),ce(We),cc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return uc(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return $r(),null;case 10:return oc(t.type._context),null;case 22:case 23:return kc(),null;case 24:return null;default:return null}}var wo=!1,Be=!1,vy=typeof WeakSet=="function"?WeakSet:Set,D=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Xs(e,t,n){try{n()}catch(r){ge(e,t,r)}}var od=!1;function gy(e,t){if(Rs=na,e=wm(),qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,p=e,d=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)d=p,p=v;for(;;){if(p===e)break t;if(d===n&&++u===i&&(l=a),d===o&&++c===r&&(s=a),(v=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},na=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:kt(t.type,y),b);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ge(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return g=od,od=!1,g}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xs(t,n,o)}i=i.next}while(i!==r)}}function Ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Js(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Ri],delete t[Ds],delete t[q0],delete t[ey])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yh(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(Zs(e,t,n),e=e.sibling;e!==null;)Zs(e,t,n),e=e.sibling}function qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qs(e,t,n),e=e.sibling;e!==null;)qs(e,t,n),e=e.sibling}var Ie=null,St=!1;function nn(e,t,n){for(n=n.child;n!==null;)xh(e,t,n),n=n.sibling}function xh(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Be||pr(n,t);case 6:var r=Ie,i=St;Ie=null,nn(e,t,n),Ie=r,St=i,Ie!==null&&(St?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(St?(e=Ie,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Oi(e)):Bl(Ie,n.stateNode));break;case 4:r=Ie,i=St,Ie=n.stateNode.containerInfo,St=!0,nn(e,t,n),Ie=r,St=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&Xs(n,t,a),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!Be&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,nn(e,t,n),Be=r):nn(e,t,n);break;default:nn(e,t,n)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vy),t.forEach(function(r){var i=Py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,St=!1;break e;case 3:Ie=l.stateNode.containerInfo,St=!0;break e;case 4:Ie=l.stateNode.containerInfo,St=!0;break e}l=l.return}if(Ie===null)throw Error(C(160));xh(o,a,i),Ie=null,St=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wh(t,e),t=t.sibling}function wh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Nt(e),r&4){try{gi(3,e,e.return),Ma(3,e)}catch(y){ge(e,e.return,y)}try{gi(5,e,e.return)}catch(y){ge(e,e.return,y)}}break;case 1:wt(t,e),Nt(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(wt(t,e),Nt(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(y){ge(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Up(i,o),Es(l,a);var u=Es(l,o);for(a=0;a<s.length;a+=2){var c=s[a],p=s[a+1];c==="style"?Gp(i,p):c==="dangerouslySetInnerHTML"?Hp(i,p):c==="children"?bi(i,p):Fu(i,c,p,u)}switch(l){case"input":ys(i,o);break;case"textarea":Bp(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?xr(i,!!o.multiple,v,!1):d!==!!o.multiple&&(o.defaultValue!=null?xr(i,!!o.multiple,o.defaultValue,!0):xr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ri]=o}catch(y){ge(e,e.return,y)}}break;case 6:if(wt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ge(e,e.return,y)}}break;case 3:if(wt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(y){ge(e,e.return,y)}break;case 4:wt(t,e),Nt(e);break;case 13:wt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xc=we())),r&4&&ld(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,wt(t,e),Be=u):wt(t,e),Nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(D=e,c=e.child;c!==null;){for(p=D=c;D!==null;){switch(d=D,v=d.child,d.tag){case 0:case 11:case 14:case 15:gi(4,d,d.return);break;case 1:pr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ge(r,n,y)}}break;case 5:pr(d,d.return);break;case 22:if(d.memoizedState!==null){ud(p);continue}}v!==null?(v.return=d,D=v):ud(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Vp("display",a))}catch(y){ge(e,e.return,y)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ge(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:wt(t,e),Nt(e),r&4&&ld(e);break;case 21:break;default:wt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yh(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var o=ad(e);qs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ad(e);Zs(e,l,a);break;default:throw Error(C(161))}}catch(s){ge(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yy(e,t,n){D=e,kh(e)}function kh(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Be;l=wo;var u=Be;if(wo=a,(Be=s)&&!u)for(D=i;D!==null;)a=D,s=a.child,a.tag===22&&a.memoizedState!==null?cd(i):s!==null?(s.return=a,D=s):cd(i);for(;o!==null;)D=o,kh(o),o=o.sibling;D=i,wo=l,Be=u}sd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,D=o):sd(e)}}function sd(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||Ma(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Oi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Be||t.flags&512&&Js(t)}catch(d){ge(t,t.return,d)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function ud(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function cd(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ma(4,t)}catch(s){ge(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ge(t,i,s)}}var o=t.return;try{Js(t)}catch(s){ge(t,o,s)}break;case 5:var a=t.return;try{Js(t)}catch(s){ge(t,a,s)}}}catch(s){ge(t,t.return,s)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var xy=Math.ceil,va=Zt.ReactCurrentDispatcher,gc=Zt.ReactCurrentOwner,mt=Zt.ReactCurrentBatchConfig,J=0,Oe=null,ke=null,ze=0,rt=0,mr=$n(0),be=0,ji=null,Yn=0,ja=0,yc=0,yi=null,Xe=null,xc=0,Tr=1/0,jt=null,ga=!1,eu=null,xn=null,ko=!1,fn=null,ya=0,xi=0,tu=null,Wo=-1,Ho=0;function Ge(){return(J&6)!==0?we():Wo!==-1?Wo:Wo=we()}function wn(e){return(e.mode&1)===0?1:(J&2)!==0&&ze!==0?ze&-ze:ny.transition!==null?(Ho===0&&(Ho=im()),Ho):(e=re,e!==0||(e=window.event,e=e===void 0?16:fm(e.type)),e)}function Ot(e,t,n,r){if(50<xi)throw xi=0,tu=null,Error(C(185));Yi(e,n,r),((J&2)===0||e!==Oe)&&(e===Oe&&((J&2)===0&&(ja|=n),be===4&&un(e,ze)),et(e,r),n===1&&J===0&&(t.mode&1)===0&&(Tr=we()+500,Ia&&Nn()))}function et(e,t){var n=e.callbackNode;n0(e,t);var r=ta(e,e===Oe?ze:0);if(r===0)n!==null&&xf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xf(n),t===1)e.tag===0?ty(fd.bind(null,e)):$m(fd.bind(null,e)),J0(function(){(J&6)===0&&Nn()}),n=null;else{switch(om(r)){case 1:n=Vu;break;case 4:n=nm;break;case 16:n=ea;break;case 536870912:n=rm;break;default:n=ea}n=Ah(n,Sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sh(e,t){if(Wo=-1,Ho=0,(J&6)!==0)throw Error(C(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=ta(e,e===Oe?ze:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xa(e,r);else{t=r;var i=J;J|=2;var o=bh();(Oe!==e||ze!==t)&&(jt=null,Tr=we()+500,Un(e,t));do try{Sy();break}catch(l){Eh(e,l)}while(1);ic(),va.current=o,J=i,ke!==null?t=0:(Oe=null,ze=0,t=be)}if(t!==0){if(t===2&&(i=Os(e),i!==0&&(r=i,t=nu(e,i))),t===1)throw n=ji,Un(e,0),un(e,r),et(e,we()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,(r&30)===0&&!wy(i)&&(t=xa(e,r),t===2&&(o=Os(e),o!==0&&(r=o,t=nu(e,o))),t===1))throw n=ji,Un(e,0),un(e,r),et(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Rn(e,Xe,jt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=xc+500-we(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zs(Rn.bind(null,e,Xe,jt),t);break}Rn(e,Xe,jt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_t(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xy(r/1960))-r,10<r){e.timeoutHandle=zs(Rn.bind(null,e,Xe,jt),r);break}Rn(e,Xe,jt);break;case 5:Rn(e,Xe,jt);break;default:throw Error(C(329))}}}return et(e,we()),e.callbackNode===n?Sh.bind(null,e):null}function nu(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=xa(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ru(t)),e}function ru(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function wy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!At(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~yc,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function fd(e){if((J&6)!==0)throw Error(C(327));br();var t=ta(e,0);if((t&1)===0)return et(e,we()),null;var n=xa(e,t);if(e.tag!==0&&n===2){var r=Os(e);r!==0&&(t=r,n=nu(e,r))}if(n===1)throw n=ji,Un(e,0),un(e,t),et(e,we()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Xe,jt),et(e,we()),null}function wc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Tr=we()+500,Ia&&Nn())}}function Qn(e){fn!==null&&fn.tag===0&&(J&6)===0&&br();var t=J;J|=1;var n=mt.transition,r=re;try{if(mt.transition=null,re=1,e)return e()}finally{re=r,mt.transition=n,J=t,(J&6)===0&&Nn()}}function kc(){rt=mr.current,ce(mr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,X0(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:$r(),ce(Ze),ce(We),cc();break;case 5:uc(r);break;case 4:$r();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:oc(r.type._context);break;case 22:case 23:kc()}n=n.return}if(Oe=e,ke=e=kn(e.current,null),ze=rt=t,be=0,ji=null,yc=ja=Yn=0,Xe=yi=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Dn=null}return e}function Eh(e,t){do{var n=ke;try{if(ic(),Fo.current=ha,ma){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ma=!1}if(Gn=0,_e=Ee=me=null,vi=!1,zi=0,gc.current=null,n===null||n.return===null){be=1,ji=t,ke=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,p=c.tag;if((c.mode&1)===0&&(p===0||p===11||p===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Zf(a);if(v!==null){v.flags&=-257,qf(v,a,l,o,t),v.mode&1&&Jf(o,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if((t&1)===0){Jf(o,u,t),Sc();break e}s=Error(C(426))}}else if(de&&l.mode&1){var b=Zf(a);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),qf(b,a,l,o,t),nc(Nr(s,l));break e}}o=s=Nr(s,l),be!==4&&(be=2),yi===null?yi=[o]:yi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=ah(o,s,t);Hf(o,m);break e;case 1:l=s;var f=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xn===null||!xn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=lh(o,l,t);Hf(o,w);break e}}o=o.return}while(o!==null)}Ph(n)}catch(E){t=E,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function bh(){var e=va.current;return va.current=ha,e===null?ha:e}function Sc(){(be===0||be===3||be===2)&&(be=4),Oe===null||(Yn&268435455)===0&&(ja&268435455)===0||un(Oe,ze)}function xa(e,t){var n=J;J|=2;var r=bh();(Oe!==e||ze!==t)&&(jt=null,Un(e,t));do try{ky();break}catch(i){Eh(e,i)}while(1);if(ic(),J=n,va.current=r,ke!==null)throw Error(C(261));return Oe=null,ze=0,be}function ky(){for(;ke!==null;)Ch(ke)}function Sy(){for(;ke!==null&&!Yg();)Ch(ke)}function Ch(e){var t=Oh(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Ph(e):ke=t,gc.current=null}function Ph(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=my(n,t,rt),n!==null){ke=n;return}}else{if(n=hy(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);be===0&&(be=5)}function Rn(e,t,n){var r=re,i=mt.transition;try{mt.transition=null,re=1,Ey(e,t,n,r)}finally{mt.transition=i,re=r}return null}function Ey(e,t,n,r){do br();while(fn!==null);if((J&6)!==0)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(r0(e,o),e===Oe&&(ke=Oe=null,ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ko||(ko=!0,Ah(ea,function(){return br(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=mt.transition,mt.transition=null;var a=re;re=1;var l=J;J|=4,gc.current=null,gy(e,n),wh(n,e),W0(Ls),na=!!Rs,Ls=Rs=null,e.current=n,yy(n),Qg(),J=l,re=a,mt.transition=o}else e.current=n;if(ko&&(ko=!1,fn=e,ya=i),o=e.pendingLanes,o===0&&(xn=null),Jg(n.stateNode),et(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,e=eu,eu=null,e;return(ya&1)!==0&&e.tag!==0&&br(),o=e.pendingLanes,(o&1)!==0?e===tu?xi++:(xi=0,tu=e):xi=0,Nn(),null}function br(){if(fn!==null){var e=om(ya),t=mt.transition,n=re;try{if(mt.transition=null,re=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,ya=0,(J&6)!==0)throw Error(C(331));var i=J;for(J|=4,D=e.current;D!==null;){var o=D,a=o.child;if((D.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:gi(8,c,o)}var p=c.child;if(p!==null)p.return=c,D=p;else for(;D!==null;){c=D;var d=c.sibling,v=c.return;if(gh(c),c===u){D=null;break}if(d!==null){d.return=v,D=d;break}D=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}D=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:gi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,D=m;break e}D=o.return}}var f=e.current;for(D=f;D!==null;){a=D;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,D=h;else e:for(a=f;D!==null;){if(l=D,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Ma(9,l)}}catch(E){ge(l,l.return,E)}if(l===a){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(J=i,Nn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{re=n,mt.transition=t}}return!1}function dd(e,t,n){t=Nr(n,t),t=ah(e,t,1),e=yn(e,t,1),t=Ge(),e!==null&&(Yi(e,1,t),et(e,t))}function ge(e,t,n){if(e.tag===3)dd(e,e,n);else for(;t!==null;){if(t.tag===3){dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=Nr(n,e),e=lh(t,e,1),t=yn(t,e,1),e=Ge(),t!==null&&(Yi(t,1,e),et(t,e));break}}t=t.return}}function by(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(ze&n)===n&&(be===4||be===3&&(ze&130023424)===ze&&500>we()-xc?Un(e,0):yc|=n),et(e,t)}function _h(e,t){t===0&&((e.mode&1)===0?t=1:(t=co,co<<=1,(co&130023424)===0&&(co=4194304)));var n=Ge();e=Yt(e,t),e!==null&&(Yi(e,t,n),et(e,n))}function Cy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_h(e,n)}function Py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),_h(e,n)}var Oh;Oh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,py(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,de&&(t.flags&1048576)!==0&&Nm(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var i=_r(t,We.current);Er(t,n),i=dc(null,t,r,e,i,n);var o=pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,la(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(t),i.updater=za,t.stateNode=i,i._reactInternals=t,Ws(t,r,e,n),t=Gs(null,t,r,!0,o,n)):(t.tag=0,de&&o&&ec(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Oy(r),e=kt(r,e),i){case 0:t=Vs(null,t,r,e,n);break e;case 1:t=nd(null,t,r,e,n);break e;case 11:t=ed(null,t,r,e,n);break e;case 14:t=td(null,t,r,kt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Vs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),nd(e,t,r,i,n);case 3:e:{if(fh(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Im(e,t),da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nr(Error(C(423)),t),t=rd(e,t,r,n,i);break e}else if(r!==i){i=Nr(Error(C(424)),t),t=rd(e,t,r,n,i);break e}else for(it=gn(t.stateNode.containerInfo.firstChild),ot=t,de=!0,Et=null,n=jm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=Qt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Fm(t),e===null&&Fs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Is(r,i)?a=null:o!==null&&Is(r,o)&&(t.flags|=32),ch(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&Fs(t),null;case 13:return dh(e,t,n);case 4:return sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),ed(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,le(ca,r._currentValue),r._currentValue=a,o!==null)if(At(o.value,a)){if(o.children===i.children&&!Ze.current){t=Qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Us(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Us(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=vt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),td(e,t,r,i,n);case 15:return sh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Bo(e,t),t.tag=1,qe(r)?(e=!0,la(t)):e=!1,Er(t,n),Dm(t,r,i),Ws(t,r,i,n),Gs(null,t,r,!0,e,n);case 19:return ph(e,t,n);case 22:return uh(e,t,n)}throw Error(C(156,t.tag))};function Ah(e,t){return tm(e,t)}function _y(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new _y(e,t,n,r)}function Ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oy(e){if(typeof e=="function")return Ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bu)return 11;if(e===Wu)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ec(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ir:return Bn(n.children,i,o,t);case Uu:a=8,i|=8;break;case ps:return e=pt(12,n,t,i|2),e.elementType=ps,e.lanes=o,e;case ms:return e=pt(13,n,t,i),e.elementType=ms,e.lanes=o,e;case hs:return e=pt(19,n,t,i),e.elementType=hs,e.lanes=o,e;case Mp:return Fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zp:a=10;break e;case Dp:a=9;break e;case Bu:a=11;break e;case Wu:a=14;break e;case an:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Mp,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(e,t,n,r,i,o,a,l,s){return e=new Ay(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(o),e}function $y(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $h(e){if(!e)return Cn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(qe(n))return Am(e,n,t)}return t}function Nh(e,t,n,r,i,o,a,l,s){return e=bc(n,r,!0,e,i,o,a,l,s),e.context=$h(null),n=e.current,r=Ge(),i=wn(n),o=Wt(r,i),o.callback=t!=null?t:null,yn(n,o,i),e.current.lanes=i,Yi(e,i,r),et(e,r),e}function Ua(e,t,n,r){var i=t.current,o=Ge(),a=wn(i);return n=$h(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(i,t,a),e!==null&&(Ot(e,i,a,o),jo(e,i,a)),a}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cc(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function Ny(){return null}var Th=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}Ba.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ua(e,t,null,null)};Ba.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Ua(null,e,null,null)}),t[Gt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=sm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&cm(e)}};function _c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(){}function Ty(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wa(a);o.call(u)}}var a=Nh(t,r,e,0,null,!1,!1,"",md);return e._reactRootContainer=a,e[Gt]=a.current,Ni(e.nodeType===8?e.parentNode:e),Qn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=wa(s);l.call(u)}}var s=bc(e,0,!1,null,null,!1,!1,"",md);return e._reactRootContainer=s,e[Gt]=s.current,Ni(e.nodeType===8?e.parentNode:e),Qn(function(){Ua(t,s,n,r)}),s}function Ha(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=wa(a);l.call(s)}}Ua(t,a,e,i)}else a=Ty(n,t,e,i,r);return wa(a)}am=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(Gu(t,n|1),et(t,we()),(J&6)===0&&(Tr=we()+500,Nn()))}break;case 13:Qn(function(){var r=Yt(e,1);if(r!==null){var i=Ge();Ot(r,e,1,i)}}),Cc(e,1)}};Yu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ge();Ot(t,e,134217728,n)}Cc(e,134217728)}};lm=function(e){if(e.tag===13){var t=wn(e),n=Yt(e,t);if(n!==null){var r=Ge();Ot(n,e,t,r)}Cc(e,t)}};sm=function(){return re};um=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Cs=function(e,t,n){switch(t){case"input":if(ys(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=La(r);if(!i)throw Error(C(90));Fp(r),ys(r,i)}}}break;case"textarea":Bp(e,n);break;case"select":t=n.value,t!=null&&xr(e,!!n.multiple,t,!1)}};Kp=wc;Xp=Qn;var Ry={usingClientEntryPoint:!1,Events:[Ki,sr,La,Yp,Qp,wc]},ei={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ly={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qp(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{$a=So.inject(Ly),It=So}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(t))throw Error(C(200));return $y(e,t,null,n)};lt.createRoot=function(e,t){if(!_c(e))throw Error(C(299));var n=!1,r="",i=Th;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bc(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Ni(e.nodeType===8?e.parentNode:e),new Pc(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=qp(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Qn(e)};lt.hydrate=function(e,t,n){if(!Wa(t))throw Error(C(200));return Ha(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!_c(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Th;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nh(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Gt]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ba(t)};lt.render=function(e,t,n){if(!Wa(t))throw Error(C(200));return Ha(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(C(40));return e._reactRootContainer?(Qn(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};lt.unstable_batchedUpdates=wc;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wa(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ha(e,t,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=lt})(bp);var hd=bp.exports;cs.createRoot=hd.createRoot,cs.hydrateRoot=hd.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const vd="popstate";function Iy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return iu("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ou(i)}return Dy(t,n,null,e)}function zy(){return Math.random().toString(36).substr(2,8)}function gd(e){return{usr:e.state,key:e.key}}function iu(e,t,n,r){return n===void 0&&(n=null),ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fr(t):t,{state:n,key:t&&t.key||r||zy()})}function ou(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=dn.Pop,s=null;function u(){l=dn.Pop,s&&s({action:l,location:d.location})}function c(v,g){l=dn.Push;let y=iu(d.location,v,g);n&&n(y,v);let b=gd(y),m=d.createHref(y);try{a.pushState(b,"",m)}catch{i.location.assign(m)}o&&s&&s({action:l,location:y})}function p(v,g){l=dn.Replace;let y=iu(d.location,v,g);n&&n(y,v);let b=gd(y),m=d.createHref(y);a.replaceState(b,"",m),o&&s&&s({action:l,location:y})}let d={get action(){return l},get location(){return e(i,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(vd,u),s=v,()=>{i.removeEventListener(vd,u),s=null}},createHref(v){return t(i,v)},push:c,replace:p,go(v){return a.go(v)}};return d}var yd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yd||(yd={}));function My(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fr(t):t,i=Lh(r.pathname||"/",n);if(i==null)return null;let o=Rh(e);jy(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=Qy(o[l],i);return a}function Rh(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(Ae(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=Sn([r,a.relativePath]),s=n.concat(a);i.children&&i.children.length>0&&(Ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Rh(i.children,t,s,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Gy(l,i.index),routesMeta:s})}),t}function jy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fy=/^:\w+$/,Uy=3,By=2,Wy=1,Hy=10,Vy=-2,xd=e=>e==="*";function Gy(e,t){let n=e.split("/"),r=n.length;return n.some(xd)&&(r+=Vy),t&&(r+=By),n.filter(i=>!xd(i)).reduce((i,o)=>i+(Fy.test(o)?Uy:o===""?Wy:Hy),r)}function Yy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Qy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Ky({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let p=l.route;o.push({params:r,pathname:Sn([i,c.pathname]),pathnameBase:e1(Sn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=Sn([i,c.pathnameBase]))}return o}function Ky(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,p)=>{if(c==="*"){let d=l[p]||"";a=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Jy(l[p]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Xy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ih(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Jy(e,t){try{return decodeURIComponent(e)}catch(n){return Ih(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ih(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fr(e):e;return{pathname:n?n.startsWith("/")?n:qy(n,t):t,search:t1(r),hash:n1(i)}}function qy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fr(e):(i=ka({},e),Ae(!i.pathname||!i.pathname.includes("?"),Zl("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Zl("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Zl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let p=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),p-=1;i.pathname=d.join("/")}l=p>=0?t[p]:"/"}let s=Zy(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),e1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class r1{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function i1(e){return e instanceof r1}var Va={exports:{}},Ga={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=_.exports,a1=Symbol.for("react.element"),l1=Symbol.for("react.fragment"),s1=Object.prototype.hasOwnProperty,u1=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c1={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)s1.call(t,r)&&!c1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:a1,type:e,key:o,ref:a,props:i,_owner:u1.current}}Ga.Fragment=l1;Ga.jsx=Dh;Ga.jsxs=Dh;(function(e){e.exports=Ga})(Va);const Ji=Va.exports.Fragment,x=Va.exports.jsx,M=Va.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function au(){return au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function f1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const d1=typeof Object.is=="function"?Object.is:f1,{useState:p1,useEffect:m1,useLayoutEffect:h1,useDebugValue:v1}=fs;function g1(e,t,n){const r=t(),[{inst:i},o]=p1({inst:{value:r,getSnapshot:t}});return h1(()=>{i.value=r,i.getSnapshot=t,ql(i)&&o({inst:i})},[e,r,t]),m1(()=>(ql(i)&&o({inst:i}),e(()=>{ql(i)&&o({inst:i})})),[e]),v1(r),r}function ql(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!d1(n,r)}catch{return!0}}function y1(e,t,n){return t()}const x1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w1=!x1,k1=w1?y1:g1;"useSyncExternalStore"in fs&&(e=>e.useSyncExternalStore)(fs);const S1=_.exports.createContext(null),E1=_.exports.createContext(null),Mh=_.exports.createContext(null),Oc=_.exports.createContext(null),Ya=_.exports.createContext(null),tr=_.exports.createContext({outlet:null,matches:[]}),jh=_.exports.createContext(null);function b1(e,t){let{relative:n}=t===void 0?{}:t;Zi()||Ae(!1);let{basename:r,navigator:i}=_.exports.useContext(Oc),{hash:o,pathname:a,search:l}=Uh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Sn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Zi(){return _.exports.useContext(Ya)!=null}function Qa(){return Zi()||Ae(!1),_.exports.useContext(Ya).location}function Fh(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function C1(){Zi()||Ae(!1);let{basename:e,navigator:t}=_.exports.useContext(Oc),{matches:n}=_.exports.useContext(tr),{pathname:r}=Qa(),i=JSON.stringify(Fh(n).map(l=>l.pathnameBase)),o=_.exports.useRef(!1);return _.exports.useEffect(()=>{o.current=!0}),_.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let u=zh(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Sn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}const P1=_.exports.createContext(null);function _1(e){let t=_.exports.useContext(tr).outlet;return t&&x(P1.Provider,{value:e,children:t})}function Ac(){let{matches:e}=_.exports.useContext(tr),t=e[e.length-1];return t?t.params:{}}function Uh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.exports.useContext(tr),{pathname:i}=Qa(),o=JSON.stringify(Fh(r).map(a=>a.pathnameBase));return _.exports.useMemo(()=>zh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function O1(e,t){Zi()||Ae(!1);let n=_.exports.useContext(Mh),{matches:r}=_.exports.useContext(tr),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=Qa(),s;if(t){var u;let g=typeof t=="string"?Fr(t):t;a==="/"||((u=g.pathname)==null?void 0:u.startsWith(a))||Ae(!1),s=g}else s=l;let c=s.pathname||"/",p=a==="/"?c:c.slice(a.length)||"/",d=My(e,{pathname:p}),v=T1(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Sn([a,g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Sn([a,g.pathnameBase])})),r,n||void 0);return t?x(Ya.Provider,{value:{location:au({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:dn.Pop},children:v}):v}function A1(){let e=L1(),t=i1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return M(Ji,{children:[x("h2",{children:"Unhandled Thrown Error!"}),x("h3",{style:{fontStyle:"italic"},children:t}),n?x("pre",{style:i,children:n}):null,x("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),M("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",x("code",{style:o,children:"errorElement"})," props on\xA0",x("code",{style:o,children:"<Route>"})]})]})}class $1 extends _.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x(jh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function N1(e){let{routeContext:t,match:n,children:r}=e,i=_.exports.useContext(S1);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),x(tr.Provider,{value:t,children:r})}function T1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Ae(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||x(A1,{}):null,c=()=>x(N1,{match:a,routeContext:{outlet:o,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:o});return n&&(a.route.errorElement||l===0)?x($1,{location:n.location,component:u,error:s,children:c()}):c()},null)}var wd;(function(e){e.UseRevalidator="useRevalidator"})(wd||(wd={}));var lu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(lu||(lu={}));function R1(e){let t=_.exports.useContext(Mh);return t||Ae(!1),t}function L1(){var e;let t=_.exports.useContext(jh),n=R1(lu.UseRouteError),r=_.exports.useContext(tr),i=r.matches[r.matches.length-1];return t||(r||Ae(!1),i.route.id||Ae(!1),(e=n.errors)==null?void 0:e[i.route.id])}function I1(e){return _1(e.context)}function Ln(e){Ae(!1)}function z1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:o,static:a=!1}=e;Zi()&&Ae(!1);let l=t.replace(/^\/*/,"/"),s=_.exports.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Fr(r));let{pathname:u="/",search:c="",hash:p="",state:d=null,key:v="default"}=r,g=_.exports.useMemo(()=>{let y=Lh(u,l);return y==null?null:{pathname:y,search:c,hash:p,state:d,key:v}},[l,u,c,p,d,v]);return g==null?null:x(Oc.Provider,{value:s,children:x(Ya.Provider,{children:n,value:{location:g,navigationType:i}})})}function D1(e){let{children:t,location:n}=e,r=_.exports.useContext(E1),i=r&&!t?r.router.routes:su(t);return O1(i,n)}var kd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(kd||(kd={}));new Promise(()=>{});function su(e,t){t===void 0&&(t=[]);let n=[];return _.exports.Children.forEach(e,(r,i)=>{if(!_.exports.isValidElement(r))return;if(r.type===_.exports.Fragment){n.push.apply(n,su(r.props.children,t));return}r.type!==Ln&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=su(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function M1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function j1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F1(e,t){return e.button===0&&(!t||t==="_self")&&!j1(e)}const U1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function B1(e){let{basename:t,children:n,window:r}=e,i=_.exports.useRef();i.current==null&&(i.current=Iy({window:r,v5Compat:!0}));let o=i.current,[a,l]=_.exports.useState({action:o.action,location:o.location});return _.exports.useLayoutEffect(()=>o.listen(l),[o]),x(z1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const bt=_.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,p=M1(t,U1),d=b1(u,{relative:i}),v=W1(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function g(y){r&&r(y),y.defaultPrevented||v(y)}return x("a",{...p,href:d,onClick:o?r:g,ref:n,target:s})});var Sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Sd||(Sd={}));var Ed;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ed||(Ed={}));function W1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=C1(),s=Qa(),u=Uh(e,{relative:a});return _.exports.useCallback(c=>{if(F1(c,n)){c.preventDefault();let p=r!==void 0?r:ou(s)===ou(u);l(e,{replace:p,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var $c={exports:{}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=Symbol.for("react.element"),Tc=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Za=Symbol.for("react.provider"),qa=Symbol.for("react.context"),H1=Symbol.for("react.server_context"),el=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),rl=Symbol.for("react.memo"),il=Symbol.for("react.lazy"),V1=Symbol.for("react.offscreen"),Bh;Bh=Symbol.for("react.module.reference");function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nc:switch(e=e.type,e){case Ka:case Ja:case Xa:case tl:case nl:return e;default:switch(e=e&&e.$$typeof,e){case H1:case qa:case el:case il:case rl:case Za:return e;default:return t}}case Tc:return t}}}ie.ContextConsumer=qa;ie.ContextProvider=Za;ie.Element=Nc;ie.ForwardRef=el;ie.Fragment=Ka;ie.Lazy=il;ie.Memo=rl;ie.Portal=Tc;ie.Profiler=Ja;ie.StrictMode=Xa;ie.Suspense=tl;ie.SuspenseList=nl;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(e){return yt(e)===qa};ie.isContextProvider=function(e){return yt(e)===Za};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nc};ie.isForwardRef=function(e){return yt(e)===el};ie.isFragment=function(e){return yt(e)===Ka};ie.isLazy=function(e){return yt(e)===il};ie.isMemo=function(e){return yt(e)===rl};ie.isPortal=function(e){return yt(e)===Tc};ie.isProfiler=function(e){return yt(e)===Ja};ie.isStrictMode=function(e){return yt(e)===Xa};ie.isSuspense=function(e){return yt(e)===tl};ie.isSuspenseList=function(e){return yt(e)===nl};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ka||e===Ja||e===Xa||e===tl||e===nl||e===V1||typeof e=="object"&&e!==null&&(e.$$typeof===il||e.$$typeof===rl||e.$$typeof===Za||e.$$typeof===qa||e.$$typeof===el||e.$$typeof===Bh||e.getModuleId!==void 0)};ie.typeOf=yt;(function(e){e.exports=ie})($c);function G1(e){function t(N,L,z,H,k){for(var X=0,A=0,ve=0,ee=0,ne,Y,Te=0,Ke=0,Z,je=Z=ne=0,te=0,Re=0,Vr=0,Le=0,io=z.length,Gr=io-1,xt,V="",xe="",bl="",Cl="",tn;te<io;){if(Y=z.charCodeAt(te),te===Gr&&A+ee+ve+X!==0&&(A!==0&&(Y=A===47?10:47),ee=ve=X=0,io++,Gr++),A+ee+ve+X===0){if(te===Gr&&(0<Re&&(V=V.replace(d,"")),0<V.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:V+=z.charAt(te)}Y=59}switch(Y){case 123:for(V=V.trim(),ne=V.charCodeAt(0),Z=1,Le=++te;te<io;){switch(Y=z.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Y=z.charCodeAt(te+1)){case 42:case 47:e:{for(je=te+1;je<Gr;++je)switch(z.charCodeAt(je)){case 47:if(Y===42&&z.charCodeAt(je-1)===42&&te+2!==je){te=je+1;break e}break;case 10:if(Y===47){te=je+1;break e}}te=je}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;te++<Gr&&z.charCodeAt(te)!==Y;);}if(Z===0)break;te++}switch(Z=z.substring(Le,te),ne===0&&(ne=(V=V.replace(p,"").trim()).charCodeAt(0)),ne){case 64:switch(0<Re&&(V=V.replace(d,"")),Y=V.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Re=L;break;default:Re=Mt}if(Z=t(L,Re,Z,Y,k+1),Le=Z.length,0<O&&(Re=n(Mt,V,Vr),tn=l(3,Z,Re,L,Ne,Se,Le,Y,k,H),V=Re.join(""),tn!==void 0&&(Le=(Z=tn.trim()).length)===0&&(Y=0,Z="")),0<Le)switch(Y){case 115:V=V.replace(P,a);case 100:case 109:case 45:Z=V+"{"+Z+"}";break;case 107:V=V.replace(f,"$1 $2"),Z=V+"{"+Z+"}",Z=Me===1||Me===2&&o("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=V+Z,H===112&&(Z=(xe+=Z,""))}else Z="";break;default:Z=t(L,n(L,V,Vr),Z,H,k+1)}bl+=Z,Z=Vr=Re=je=ne=0,V="",Y=z.charCodeAt(++te);break;case 125:case 59:if(V=(0<Re?V.replace(d,""):V).trim(),1<(Le=V.length))switch(je===0&&(ne=V.charCodeAt(0),ne===45||96<ne&&123>ne)&&(Le=(V=V.replace(" ",":")).length),0<O&&(tn=l(1,V,L,N,Ne,Se,xe.length,H,k,H))!==void 0&&(Le=(V=tn.trim()).length)===0&&(V="\0\0"),ne=V.charCodeAt(0),Y=V.charCodeAt(1),ne){case 0:break;case 64:if(Y===105||Y===99){Cl+=V+z.charAt(te);break}default:V.charCodeAt(Le-1)!==58&&(xe+=i(V,ne,Y,V.charCodeAt(2)))}Vr=Re=je=ne=0,V="",Y=z.charCodeAt(++te)}}switch(Y){case 13:case 10:A===47?A=0:1+ne===0&&H!==107&&0<V.length&&(Re=1,V+="\0"),0<O*W&&l(0,V,L,N,Ne,Se,xe.length,H,k,H),Se=1,Ne++;break;case 59:case 125:if(A+ee+ve+X===0){Se++;break}default:switch(Se++,xt=z.charAt(te),Y){case 9:case 32:if(ee+X+A===0)switch(Te){case 44:case 58:case 9:case 32:xt="";break;default:Y!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:ee+A+X===0&&(Re=Vr=1,xt="\f"+xt);break;case 108:if(ee+A+X+nt===0&&0<je)switch(te-je){case 2:Te===112&&z.charCodeAt(te-3)===58&&(nt=Te);case 8:Ke===111&&(nt=Ke)}break;case 58:ee+A+X===0&&(je=te);break;case 44:A+ve+ee+X===0&&(Re=1,xt+="\r");break;case 34:case 39:A===0&&(ee=ee===Y?0:ee===0?Y:ee);break;case 91:ee+A+ve===0&&X++;break;case 93:ee+A+ve===0&&X--;break;case 41:ee+A+X===0&&ve--;break;case 40:if(ee+A+X===0){if(ne===0)switch(2*Te+3*Ke){case 533:break;default:ne=1}ve++}break;case 64:A+ve+ee+X+je+Z===0&&(Z=1);break;case 42:case 47:if(!(0<ee+X+ve))switch(A){case 0:switch(2*Y+3*z.charCodeAt(te+1)){case 235:A=47;break;case 220:Le=te,A=42}break;case 42:Y===47&&Te===42&&Le+2!==te&&(z.charCodeAt(Le+2)===33&&(xe+=z.substring(Le,te+1)),xt="",A=0)}}A===0&&(V+=xt)}Ke=Te,Te=Y,te++}if(Le=xe.length,0<Le){if(Re=L,0<O&&(tn=l(2,xe,Re,N,Ne,Se,Le,H,k,H),tn!==void 0&&(xe=tn).length===0))return Cl+xe+bl;if(xe=Re.join(",")+"{"+xe+"}",Me*nt!==0){switch(Me!==2||o(xe,2)||(nt=0),nt){case 111:xe=xe.replace(w,":-moz-$1")+xe;break;case 112:xe=xe.replace(h,"::-webkit-input-$1")+xe.replace(h,"::-moz-$1")+xe.replace(h,":-ms-input-$1")+xe}nt=0}}return Cl+xe+bl}function n(N,L,z){var H=L.trim().split(b);L=H;var k=H.length,X=N.length;switch(X){case 0:case 1:var A=0;for(N=X===0?"":N[0]+" ";A<k;++A)L[A]=r(N,L[A],z).trim();break;default:var ve=A=0;for(L=[];A<k;++A)for(var ee=0;ee<X;++ee)L[ve++]=r(N[ee]+" ",H[A],z).trim()}return L}function r(N,L,z){var H=L.charCodeAt(0);switch(33>H&&(H=(L=L.trim()).charCodeAt(0)),H){case 38:return L.replace(m,"$1"+N.trim());case 58:return N.trim()+L.replace(m,"$1"+N.trim());default:if(0<1*z&&0<L.indexOf("\f"))return L.replace(m,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+L}function i(N,L,z,H){var k=N+";",X=2*L+3*z+4*H;if(X===944){N=k.indexOf(":",9)+1;var A=k.substring(N,k.length-1).trim();return A=k.substring(0,N).trim()+A+";",Me===1||Me===2&&o(A,1)?"-webkit-"+A+A:A}if(Me===0||Me===2&&!o(k,1))return k;switch(X){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(Pe,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return A=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+k+"-ms-flex-pack"+A+k;case 1005:return g.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch(A=k.substring(13).trim(),L=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(L)){case 226:A=k.replace(E,"tb");break;case 232:A=k.replace(E,"tb-rl");break;case 220:A=k.replace(E,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+A+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(L=(k=N).length-10,A=(k.charCodeAt(L)===33?k.substring(0,L):k).substring(N.indexOf(":",7)+1).trim(),X=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:k=k.replace(A,"-webkit-"+A)+";"+k;break;case 207:case 102:k=k.replace(A,"-webkit-"+(102<X?"inline-":"")+"box")+";"+k.replace(A,"-webkit-"+A)+";"+k.replace(A,"-ms-"+A+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return A=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+A+"-ms-flex-"+A+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(T,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(T,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return(A=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),L,z,H).replace(":fill-available",":stretch"):k.replace(A,"-webkit-"+A)+k.replace(A,"-moz-"+A.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,z+H===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+k}return k}function o(N,L){var z=N.indexOf(L===1?":":"{"),H=N.substring(0,L!==3?z:10);return z=N.substring(z+1,N.length-1),U(L!==2?H:H.replace(G,"$1"),z,L)}function a(N,L){var z=i(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return z!==L+";"?z.replace($," or ($1)").substring(4):"("+L+")"}function l(N,L,z,H,k,X,A,ve,ee,ne){for(var Y=0,Te=L,Ke;Y<O;++Y)switch(Ke=He[Y].call(c,N,Te,z,H,k,X,A,ve,ee,ne)){case void 0:case!1:case!0:case null:break;default:Te=Ke}if(Te!==L)return Te}function s(N){switch(N){case void 0:case null:O=He.length=0;break;default:if(typeof N=="function")He[O++]=N;else if(typeof N=="object")for(var L=0,z=N.length;L<z;++L)s(N[L]);else W=!!N|0}return s}function u(N){return N=N.prefix,N!==void 0&&(U=null,N?typeof N!="function"?Me=1:(Me=2,U=N):Me=0),u}function c(N,L){var z=N;if(33>z.charCodeAt(0)&&(z=z.trim()),ae=z,z=[ae],0<O){var H=l(-1,L,z,z,Ne,Se,0,0,0,0);H!==void 0&&typeof H=="string"&&(L=H)}var k=t(Mt,z,L,0,0);return 0<O&&(H=l(-2,k,z,z,Ne,Se,k.length,0,0,0),H!==void 0&&(k=H)),ae="",nt=0,Se=Ne=1,k}var p=/^\0+/g,d=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,b=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,w=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,T=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,Pe=/([^-])(image-set\()/,Se=1,Ne=1,nt=0,Me=1,Mt=[],He=[],O=0,U=null,W=0,ae="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var Y1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Q1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var K1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,bd=Q1(function(e){return K1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wh={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,Rc=$e?Symbol.for("react.element"):60103,Lc=$e?Symbol.for("react.portal"):60106,ol=$e?Symbol.for("react.fragment"):60107,al=$e?Symbol.for("react.strict_mode"):60108,ll=$e?Symbol.for("react.profiler"):60114,sl=$e?Symbol.for("react.provider"):60109,ul=$e?Symbol.for("react.context"):60110,Ic=$e?Symbol.for("react.async_mode"):60111,cl=$e?Symbol.for("react.concurrent_mode"):60111,fl=$e?Symbol.for("react.forward_ref"):60112,dl=$e?Symbol.for("react.suspense"):60113,X1=$e?Symbol.for("react.suspense_list"):60120,pl=$e?Symbol.for("react.memo"):60115,ml=$e?Symbol.for("react.lazy"):60116,J1=$e?Symbol.for("react.block"):60121,Z1=$e?Symbol.for("react.fundamental"):60117,q1=$e?Symbol.for("react.responder"):60118,ex=$e?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rc:switch(e=e.type,e){case Ic:case cl:case ol:case ll:case al:case dl:return e;default:switch(e=e&&e.$$typeof,e){case ul:case fl:case ml:case pl:case sl:return e;default:return t}}case Lc:return t}}}function Hh(e){return ut(e)===cl}oe.AsyncMode=Ic;oe.ConcurrentMode=cl;oe.ContextConsumer=ul;oe.ContextProvider=sl;oe.Element=Rc;oe.ForwardRef=fl;oe.Fragment=ol;oe.Lazy=ml;oe.Memo=pl;oe.Portal=Lc;oe.Profiler=ll;oe.StrictMode=al;oe.Suspense=dl;oe.isAsyncMode=function(e){return Hh(e)||ut(e)===Ic};oe.isConcurrentMode=Hh;oe.isContextConsumer=function(e){return ut(e)===ul};oe.isContextProvider=function(e){return ut(e)===sl};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rc};oe.isForwardRef=function(e){return ut(e)===fl};oe.isFragment=function(e){return ut(e)===ol};oe.isLazy=function(e){return ut(e)===ml};oe.isMemo=function(e){return ut(e)===pl};oe.isPortal=function(e){return ut(e)===Lc};oe.isProfiler=function(e){return ut(e)===ll};oe.isStrictMode=function(e){return ut(e)===al};oe.isSuspense=function(e){return ut(e)===dl};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ol||e===cl||e===ll||e===al||e===dl||e===X1||typeof e=="object"&&e!==null&&(e.$$typeof===ml||e.$$typeof===pl||e.$$typeof===sl||e.$$typeof===ul||e.$$typeof===fl||e.$$typeof===Z1||e.$$typeof===q1||e.$$typeof===ex||e.$$typeof===J1)};oe.typeOf=ut;(function(e){e.exports=oe})(Wh);var zc=Wh.exports,tx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dc={};Dc[zc.ForwardRef]=rx;Dc[zc.Memo]=Vh;function Cd(e){return zc.isMemo(e)?Vh:Dc[e.$$typeof]||tx}var ix=Object.defineProperty,ox=Object.getOwnPropertyNames,Pd=Object.getOwnPropertySymbols,ax=Object.getOwnPropertyDescriptor,lx=Object.getPrototypeOf,_d=Object.prototype;function Gh(e,t,n){if(typeof t!="string"){if(_d){var r=lx(t);r&&r!==_d&&Gh(e,r,n)}var i=ox(t);Pd&&(i=i.concat(Pd(t)));for(var o=Cd(e),a=Cd(t),l=0;l<i.length;++l){var s=i[l];if(!nx[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=ax(t,s);try{ix(e,s,u)}catch{}}}}return e}var sx=Gh;function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Od=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},uu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!$c.exports.typeOf(e)},Sa=Object.freeze([]),En=Object.freeze({});function Rr(e){return typeof e=="function"}function Ad(e){return e.displayName||e.name||"Component"}function Mc(e){return e&&typeof e.styledComponentId=="string"}var Lr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",jc=typeof window<"u"&&"HTMLElement"in window,ux=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),cx={};function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var fx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Kn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Go=new Map,Ea=new Map,wi=1,Eo=function(e){if(Go.has(e))return Go.get(e);for(;Ea.has(wi);)wi++;var t=wi++;return Go.set(e,t),Ea.set(t,e),t},dx=function(e){return Ea.get(e)},px=function(e,t){t>=wi&&(wi=t+1),Go.set(e,t),Ea.set(t,e)},mx="style["+Lr+'][data-styled-version="5.3.6"]',hx=new RegExp("^"+Lr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),vx=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},gx=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(hx);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(px(u,s),vx(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},yx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Yh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(Lr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Lr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=yx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},xx=function(){function e(n){var r=this.element=Yh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Kn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),wx=function(){function e(n){var r=this.element=Yh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),kx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),$d=jc,Sx={isServer:!jc,useCSSOMInjection:!ux},ba=function(){function e(n,r,i){n===void 0&&(n=En),r===void 0&&(r={}),this.options=Ct({},Sx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&jc&&$d&&($d=!1,function(o){for(var a=document.querySelectorAll(mx),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Lr)!=="active"&&(gx(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Eo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ct({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new kx(a):o?new xx(a):new wx(a),new fx(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Eo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Eo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Eo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=dx(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var c=Lr+".g"+a+'[id="'+l+'"]',p="";s!==void 0&&s.forEach(function(d){d.length>0&&(p+=d+",")}),o+=""+u+c+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),Ex=/(a)(d)/gi,Nd=function(e){return String.fromCharCode(e+(e>25?39:97))};function cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Nd(t%52)+n;return(Nd(t%52)+n).replace(Ex,"$1-$2")}var hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Qh=function(e){return hr(5381,e)};function Kh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rr(n)&&!Mc(n))return!1}return!0}var bx=Qh("5.3.6"),Cx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Kh(t),this.componentId=n,this.baseHash=hr(bx,n),this.baseStyle=r,ba.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Xn(this.rules,t,n,r).join(""),l=cu(hr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=hr(this.baseHash,r.hash),p="",d=0;d<u;d++){var v=this.rules[d];if(typeof v=="string")p+=v;else if(v){var g=Xn(v,t,n,r),y=Array.isArray(g)?g.join(""):g;c=hr(c,y+d),p+=y}}if(p){var b=cu(c>>>0);if(!n.hasNameForId(i,b)){var m=r(p,"."+b,void 0,i);n.insertRules(i,b,m)}o.push(b)}}return o.join(" ")},e}(),Px=/^\s*\/\/.*$/gm,_x=[":","[",".","#"];function Ox(e){var t,n,r,i,o=e===void 0?En:e,a=o.options,l=a===void 0?En:a,s=o.plugins,u=s===void 0?Sa:s,c=new G1(l),p=[],d=function(y){function b(m){if(m)try{y(m+"}")}catch{}}return function(m,f,h,w,E,P,$,T,G,B){switch(m){case 1:if(G===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(T===0)return f+"/*|*/";break;case 3:switch(T){case 102:case 112:return y(h[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(b)}}}(function(y){p.push(y)}),v=function(y,b,m){return b===0&&_x.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function g(y,b,m,f){f===void 0&&(f="&");var h=y.replace(Px,""),w=b&&m?m+" "+b+" { "+h+" }":h;return t=f,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!b?"":b,w)}return c.use([].concat(u,[function(y,b,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,v))},d,function(y){if(y===-2){var b=p;return p=[],b}}])),g.hash=u.length?u.reduce(function(y,b){return b.name||Kn(15),hr(y,b.name)},5381).toString():"",g}var Xh=$t.createContext();Xh.Consumer;var Jh=$t.createContext(),Ax=(Jh.Consumer,new ba),fu=Ox();function Zh(){return _.exports.useContext(Xh)||Ax}function qh(){return _.exports.useContext(Jh)||fu}var $x=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=fu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Kn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=fu),this.name+t.hash},e}(),Nx=/([A-Z])/,Tx=/([A-Z])/g,Rx=/^ms-/,Lx=function(e){return"-"+e.toLowerCase()};function Td(e){return Nx.test(e)?e.replace(Tx,Lx).replace(Rx,"-ms-"):e}var Rd=function(e){return e==null||e===!1||e===""};function Xn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Xn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Rd(e))return"";if(Mc(e))return"."+e.styledComponentId;if(Rr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Xn(s,t,n,r)}var u;return e instanceof $x?n?(e.inject(n,r),e.getName(r)):e:uu(e)?function c(p,d){var v,g,y=[];for(var b in p)p.hasOwnProperty(b)&&!Rd(p[b])&&(Array.isArray(p[b])&&p[b].isCss||Rr(p[b])?y.push(Td(b)+":",p[b],";"):uu(p[b])?y.push.apply(y,c(p[b],b)):y.push(Td(b)+": "+(v=b,(g=p[b])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Y1?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(e):e.toString()}var Ld=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Rr(e)||uu(e)?Ld(Xn(Od(Sa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ld(Xn(Od(e,n)))}var ev=function(e,t,n){return n===void 0&&(n=En),e.theme!==n.theme&&e.theme||t||n.theme},Ix=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function es(e){return e.replace(Ix,"-").replace(zx,"")}var tv=function(e){return cu(Qh(e)>>>0)};function bo(e){return typeof e=="string"&&!0}var du=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Dx=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Mx(e,t,n){var r=e[n];du(t)&&du(r)?nv(r,t):e[n]=t}function nv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(du(a))for(var l in a)Dx(l)&&Mx(e,a[l],l)}return e}var Ir=$t.createContext();Ir.Consumer;function jx(e){var t=_.exports.useContext(Ir),n=_.exports.useMemo(function(){return function(r,i){if(!r)return Kn(14);if(Rr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Kn(8):i?Ct({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?$t.createElement(Ir.Provider,{value:n},e.children):null}var ts={};function rv(e,t,n){var r=Mc(e),i=!bo(e),o=t.attrs,a=o===void 0?Sa:o,l=t.componentId,s=l===void 0?function(f,h){var w=typeof f!="string"?"sc":es(f);ts[w]=(ts[w]||0)+1;var E=w+"-"+tv("5.3.6"+w+ts[w]);return h?h+"-"+E:E}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(f){return bo(f)?"styled."+f:"Styled("+Ad(f)+")"}(e):u,p=t.displayName&&t.componentId?es(t.displayName)+"-"+t.componentId:t.componentId||s,d=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(f,h,w){return e.shouldForwardProp(f,h,w)&&t.shouldForwardProp(f,h,w)}:e.shouldForwardProp);var g,y=new Cx(n,p,r?e.componentStyle:void 0),b=y.isStatic&&a.length===0,m=function(f,h){return function(w,E,P,$){var T=w.attrs,G=w.componentStyle,B=w.defaultProps,Pe=w.foldedComponentIds,Se=w.shouldForwardProp,Ne=w.styledComponentId,nt=w.target,Me=function(H,k,X){H===void 0&&(H=En);var A=Ct({},k,{theme:H}),ve={};return X.forEach(function(ee){var ne,Y,Te,Ke=ee;for(ne in Rr(Ke)&&(Ke=Ke(A)),Ke)A[ne]=ve[ne]=ne==="className"?(Y=ve[ne],Te=Ke[ne],Y&&Te?Y+" "+Te:Y||Te):Ke[ne]}),[A,ve]}(ev(E,_.exports.useContext(Ir),B)||En,E,T),Mt=Me[0],He=Me[1],O=function(H,k,X,A){var ve=Zh(),ee=qh(),ne=k?H.generateAndInjectStyles(En,ve,ee):H.generateAndInjectStyles(X,ve,ee);return ne}(G,$,Mt),U=P,W=He.$as||E.$as||He.as||E.as||nt,ae=bo(W),N=He!==E?Ct({},E,{},He):E,L={};for(var z in N)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?L.as=N[z]:(Se?Se(z,bd,W):!ae||bd(z))&&(L[z]=N[z]));return E.style&&He.style!==E.style&&(L.style=Ct({},E.style,{},He.style)),L.className=Array.prototype.concat(Pe,Ne,O!==Ne?O:null,E.className,He.className).filter(Boolean).join(" "),L.ref=U,_.exports.createElement(W,L)}(g,f,h,b)};return m.displayName=c,(g=$t.forwardRef(m)).attrs=d,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Sa,g.styledComponentId=p,g.target=r?e.target:e,g.withComponent=function(f){var h=t.componentId,w=function(P,$){if(P==null)return{};var T,G,B={},Pe=Object.keys(P);for(G=0;G<Pe.length;G++)T=Pe[G],$.indexOf(T)>=0||(B[T]=P[T]);return B}(t,["componentId"]),E=h&&h+"-"+(bo(f)?f:es(Ad(f)));return rv(f,Ct({},w,{attrs:d,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?nv({},e.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&sx(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var pu=function(e){return function t(n,r,i){if(i===void 0&&(i=En),!$c.exports.isValidElementType(r))return Kn(1,String(r));var o=function(){return n(r,i,F.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Ct({},i,{},a))},o.attrs=function(a){return t(n,r,Ct({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(rv,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){pu[e]=pu(e)});var Fx=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Kh(n),ba.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Xn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&ba.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Ux(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=F.apply(void 0,[e].concat(n)),o="sc-global-"+tv(JSON.stringify(i)),a=new Fx(i,o);function l(u){var c=Zh(),p=qh(),d=_.exports.useContext(Ir),v=_.exports.useRef(c.allocateGSInstance(o)).current;return c.server&&s(v,u,c,d,p),_.exports.useLayoutEffect(function(){if(!c.server)return s(v,u,c,d,p),function(){return a.removeStyles(v,c)}},[v,u,c,d,p]),null}function s(u,c,p,d,v){if(a.isStatic)a.renderStyles(u,cx,p,v);else{var g=Ct({},c,{theme:ev(c,d,l.defaultProps)});a.renderStyles(u,g,p,v)}}return $t.memo(l)}var Ur=function(){return _.exports.useContext(Ir)};const R=pu;const iv=R.div`
  width: 100%;
  max-width: ${e=>e.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,Bx="/assets/pokemonLogo.e4fa62f7.svg",Wx=R.div`
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
`,Hx=R.div`
  justify-self: flex-start;
  & img {
    max-width: 120px;
  }
`,Vx=R.ul`
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
`,Gx=()=>x(Wx,{children:M(iv,{children:[x(Hx,{children:x(bt,{to:"/",children:x("img",{src:Bx,alt:"Pokem\xF3n logo"})})}),x("nav",{children:M(Vx,{children:[x("li",{children:x(bt,{to:"/",children:"HOME"})}),x("li",{children:x(bt,{to:"/pokedex/1",children:"POKEDEX"})}),x("li",{children:x(bt,{to:"/pokemon/1",children:"POKEMON DATA"})})]})})]})}),Yx=R.div`
  ${({theme:{spacing:e}})=>F`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${e.headerSpacing};
  `}
`,Qx=({children:e})=>M(Ji,{children:[x(Gx,{}),x(Yx,{children:x(iv,{children:e})})]}),Kx=R.div`
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
`,hl=({color:e})=>x(Kx,{color:e});function ov(e,t){return function(){return e.apply(t,arguments)}}const{toString:av}=Object.prototype,{getPrototypeOf:Fc}=Object,Uc=(e=>t=>{const n=av.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qt=e=>(e=e.toLowerCase(),t=>Uc(t)===e),vl=e=>t=>typeof t===e,{isArray:qi}=Array,mu=vl("undefined");function Xx(e){return e!==null&&!mu(e)&&e.constructor!==null&&!mu(e.constructor)&&Br(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const lv=qt("ArrayBuffer");function Jx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&lv(e.buffer),t}const Zx=vl("string"),Br=vl("function"),sv=vl("number"),uv=e=>e!==null&&typeof e=="object",qx=e=>e===!0||e===!1,Yo=e=>{if(Uc(e)!=="object")return!1;const t=Fc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ew=qt("Date"),tw=qt("File"),nw=qt("Blob"),rw=qt("FileList"),iw=e=>uv(e)&&Br(e.pipe),ow=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||av.call(e)===t||Br(e.toString)&&e.toString()===t)},aw=qt("URLSearchParams"),lw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),qi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function hu(){const e={},t=(n,r)=>{Yo(e[r])&&Yo(n)?e[r]=hu(e[r],n):Yo(n)?e[r]=hu({},n):qi(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&gl(arguments[n],t);return e}const sw=(e,t,n,{allOwnKeys:r}={})=>(gl(t,(i,o)=>{n&&Br(i)?e[o]=ov(i,n):e[o]=i},{allOwnKeys:r}),e),uw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},fw=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Fc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},pw=e=>{if(!e)return null;if(qi(e))return e;let t=e.length;if(!sv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Fc(Uint8Array)),hw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},vw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},gw=qt("HTMLFormElement"),yw=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Id=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xw=qt("RegExp"),cv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};gl(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},ww=e=>{cv(e,(t,n)=>{const r=e[n];if(!!Br(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},kw=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return qi(e)?r(e):r(String(e).split(t)),n},Sw=()=>{},Ew=(e,t)=>(e=+e,Number.isFinite(e)?e:t),S={isArray:qi,isArrayBuffer:lv,isBuffer:Xx,isFormData:ow,isArrayBufferView:Jx,isString:Zx,isNumber:sv,isBoolean:qx,isObject:uv,isPlainObject:Yo,isUndefined:mu,isDate:ew,isFile:tw,isBlob:nw,isRegExp:xw,isFunction:Br,isStream:iw,isURLSearchParams:aw,isTypedArray:mw,isFileList:rw,forEach:gl,merge:hu,extend:sw,trim:lw,stripBOM:uw,inherits:cw,toFlatObject:fw,kindOf:Uc,kindOfTest:qt,endsWith:dw,toArray:pw,forEachEntry:hw,matchAll:vw,isHTMLForm:gw,hasOwnProperty:Id,hasOwnProp:Id,reduceDescriptors:cv,freezeMethods:ww,toObjectSet:kw,toCamelCase:yw,noop:Sw,toFiniteNumber:Ew};function q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fv=q.prototype,dv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{dv[e]={value:e}});Object.defineProperties(q,dv);Object.defineProperty(fv,"isAxiosError",{value:!0});q.from=(e,t,n,r,i,o)=>{const a=Object.create(fv);return S.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),q.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var bw=typeof self=="object"?self.FormData:window.FormData;function vu(e){return S.isPlainObject(e)||S.isArray(e)}function pv(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function zd(e,t,n){return e?e.concat(t).map(function(i,o){return i=pv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Cw(e){return S.isArray(e)&&!e.some(vu)}const Pw=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function _w(e){return e&&S.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function yl(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new(bw||FormData),n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!S.isUndefined(b[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&_w(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!s&&S.isBlob(g))throw new q("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,b){let m=g;if(g&&!b&&typeof g=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&Cw(g)||S.isFileList(g)||S.endsWith(y,"[]")&&(m=S.toArray(g)))return y=pv(y),m.forEach(function(h,w){!(S.isUndefined(h)||h===null)&&t.append(a===!0?zd([y],w,o):a===null?y:y+"[]",u(h))}),!1}return vu(g)?!0:(t.append(zd(b,y,o),u(g)),!1)}const p=[],d=Object.assign(Pw,{defaultVisitor:c,convertValue:u,isVisitable:vu});function v(g,y){if(!S.isUndefined(g)){if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(g),S.forEach(g,function(m,f){(!(S.isUndefined(m)||m===null)&&i.call(t,m,S.isString(f)?f.trim():f,y,d))===!0&&v(m,y?y.concat(f):[f])}),p.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Dd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Bc(e,t){this._pairs=[],e&&yl(e,this,t)}const mv=Bc.prototype;mv.append=function(t,n){this._pairs.push([t,n])};mv.toString=function(t){const n=t?function(r){return t.call(this,r,Dd)}:Dd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Ow(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hv(e,t,n){if(!t)return e;const r=n&&n.encode||Ow,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new Bc(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Md{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const vv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Aw=typeof URLSearchParams<"u"?URLSearchParams:Bc,$w=FormData,Nw=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ht={isBrowser:!0,classes:{URLSearchParams:Aw,FormData:$w,Blob},isStandardBrowserEnv:Nw,protocols:["http","https","file","blob","url","data"]};function Tw(e,t){return yl(e,new Ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ht.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Rw(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lw(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function gv(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&S.isArray(i)?i.length:a,s?(S.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!S.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&S.isArray(i[a])&&(i[a]=Lw(i[a])),!l)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(Rw(r),i,n,0)}),n}return null}function Iw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zw=Ht.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const s=[];s.push(n+"="+encodeURIComponent(r)),S.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),S.isString(o)&&s.push("path="+o),S.isString(a)&&s.push("domain="+a),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Dw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mw(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function yv(e,t){return e&&!Dw(t)?Mw(e,t):t}const jw=Ht.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=S.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function eo(e,t,n){q.call(this,e==null?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(eo,q,{__CANCEL__:!0});function Fw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Uw=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bw=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&Uw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},jd=Symbol("internals"),xv=Symbol("defaults");function ui(e){return e&&String(e).trim().toLowerCase()}function Qo(e){return e===!1||e==null?e:S.isArray(e)?e.map(Qo):String(e)}function Ww(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Fd(e,t,n,r){if(S.isFunction(r))return r.call(this,t,n);if(!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function Hw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vw(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}function ti(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function ht(e,t){e&&this.set(e),this[xv]=t||null}Object.assign(ht.prototype,{set:function(e,t,n){const r=this;function i(o,a,l){const s=ui(a);if(!s)throw new Error("header name must be a non-empty string");const u=ti(r,s);u&&l!==!0&&(r[u]===!1||l===!1)||(r[u||a]=Qo(o))}return S.isPlainObject(e)?S.forEach(e,(o,a)=>{i(o,a,t)}):i(t,e,n),this},get:function(e,t){if(e=ui(e),!e)return;const n=ti(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return Ww(r);if(S.isFunction(t))return t.call(this,r,n);if(S.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ui(e),e){const n=ti(this,e);return!!(n&&(!t||Fd(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(o){if(o=ui(o),o){const a=ti(n,o);a&&(!t||Fd(n,n[a],a,t))&&(delete n[a],r=!0)}}return S.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return S.forEach(this,(r,i)=>{const o=ti(n,i);if(o){t[o]=Qo(r),delete t[i];return}const a=e?Hw(i):String(i).trim();a!==i&&delete t[i],t[a]=Qo(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return S.forEach(Object.assign({},this[xv]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&S.isArray(n)?n.join(", "):n)}),t}});Object.assign(ht,{from:function(e){return S.isString(e)?new this(Bw(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[jd]=this[jd]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=ui(o);n[a]||(Vw(r,o),n[a]=!0)}return S.isArray(e)?e.forEach(i):i(e),this}});ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);S.freezeMethods(ht.prototype);S.freezeMethods(ht);function Gw(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[o];a||(a=u),n[i]=s,r[i]=u;let p=o,d=0;for(;p!==i;)d+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const v=c&&u-c;return v?Math.round(d*1e3/v):void 0}}function Ud(e,t){let n=0;const r=Gw(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-o)/s:void 0};c[t?"download":"upload"]=!0,e(c)}}function Bd(e){return new Promise(function(n,r){let i=e.data;const o=ht.from(e.headers).normalize(),a=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}S.isFormData(i)&&Ht.isStandardBrowserEnv&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+g))}const c=yv(e.baseURL,e.url);u.open(e.method.toUpperCase(),hv(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const v=ht.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};Iw(function(m){n(m),s()},function(m){r(m),s()},y),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){!u||(r(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||vv;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new q(g,y.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},Ht.isStandardBrowserEnv){const v=(e.withCredentials||jw(c))&&e.xsrfCookieName&&zw.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&S.forEach(o.toJSON(),function(g,y){u.setRequestHeader(y,g)}),S.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ud(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ud(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=v=>{!u||(r(!v||v.type?new eo(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const d=Fw(c);if(d&&Ht.protocols.indexOf(d)===-1){r(new q("Unsupported protocol "+d+":",q.ERR_BAD_REQUEST,e));return}u.send(i||null)})}const Wd={http:Bd,xhr:Bd},Hd={getAdapter:e=>{if(S.isString(e)){const t=Wd[e];if(!e)throw Error(S.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!S.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Wd},Yw={"Content-Type":"application/x-www-form-urlencoded"};function Qw(){let e;return typeof XMLHttpRequest<"u"?e=Hd.getAdapter("xhr"):typeof process<"u"&&S.kindOf(process)==="process"&&(e=Hd.getAdapter("http")),e}function Kw(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Wr={transitional:vv,adapter:Qw(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(gv(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Tw(t,this.formSerializer).toString();if((l=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return yl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Kw(t)):t}],transformResponse:[function(t){const n=this.transitional||Wr.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?q.from(l,q.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(t){Wr.headers[t]={}});S.forEach(["post","put","patch"],function(t){Wr.headers[t]=S.merge(Yw)});function ns(e,t){const n=this||Wr,r=t||n,i=ht.from(r.headers);let o=r.data;return S.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function wv(e){return!!(e&&e.__CANCEL__)}function rs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eo}function Vd(e){return rs(e),e.headers=ht.from(e.headers),e.data=ns.call(e,e.transformRequest),(e.adapter||Wr.adapter)(e).then(function(r){return rs(e),r.data=ns.call(e,e.transformResponse,r),r.headers=ht.from(r.headers),r},function(r){return wv(r)||(rs(e),r&&r.response&&(r.response.data=ns.call(e,e.transformResponse,r.response),r.response.headers=ht.from(r.response.headers))),Promise.reject(r)})}function Fi(e,t){t=t||{};const n={};function r(u,c){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge(u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u){if(S.isUndefined(t[u])){if(!S.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function o(u){if(!S.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(S.isUndefined(t[u])){if(!S.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function l(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return S.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const p=s[c]||i,d=p(c);S.isUndefined(d)&&p!==l||(n[c]=d)}),n}const kv="1.1.3",Wc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Wc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Gd={};Wc.transitional=function(t,n,r){function i(o,a){return"[Axios v"+kv+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new q(i(a," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Gd[a]&&(Gd[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function Xw(e,t,n){if(typeof e!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new q("option "+o+" must be "+s,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+o,q.ERR_BAD_OPTION)}}const gu={assertOptions:Xw,validators:Wc},rn=gu.validators;class Wn{constructor(t){this.defaults=t,this.interceptors={request:new Md,response:new Md}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Fi(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&gu.assertOptions(r,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),i!==void 0&&gu.assertOptions(i,{encode:rn.function,serialize:rn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const o=n.headers&&S.merge(n.headers.common,n.headers[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new ht(n.headers,o);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const s=[];this.interceptors.response.forEach(function(g){s.push(g.fulfilled,g.rejected)});let u,c=0,p;if(!l){const v=[Vd.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,s),p=v.length,u=Promise.resolve(n);c<p;)u=u.then(v[c++],v[c++]);return u}p=a.length;let d=n;for(c=0;c<p;){const v=a[c++],g=a[c++];try{d=v(d)}catch(y){g.call(this,y);break}}try{u=Vd.call(this,d)}catch(v){return Promise.reject(v)}for(c=0,p=s.length;c<p;)u=u.then(s[c++],s[c++]);return u}getUri(t){t=Fi(this.defaults,t);const n=yv(t.baseURL,t.url);return hv(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){Wn.prototype[t]=function(n,r){return this.request(Fi(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(Fi(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Wn.prototype[t]=n(),Wn.prototype[t+"Form"]=n(!0)});class Hc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new eo(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Hc(function(i){t=i}),cancel:t}}}function Jw(e){return function(n){return e.apply(null,n)}}function Zw(e){return S.isObject(e)&&e.isAxiosError===!0}function Sv(e){const t=new Wn(e),n=ov(Wn.prototype.request,t);return S.extend(n,Wn.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Sv(Fi(e,i))},n}const tt=Sv(Wr);tt.Axios=Wn;tt.CanceledError=eo;tt.CancelToken=Hc;tt.isCancel=wv;tt.VERSION=kv;tt.toFormData=yl;tt.AxiosError=q;tt.Cancel=tt.CanceledError;tt.all=function(t){return Promise.all(t)};tt.spread=Jw;tt.isAxiosError=Zw;tt.formToJSON=e=>gv(S.isHTMLForm(e)?new FormData(e):e);const qw="https://pokeapi.co/api",xl=tt.create({baseURL:qw}),ek=async(e=0,t=20)=>(await xl.get(`/v2/pokemon/?offset=${e}&limit=${t}}`)).data,Vc=async e=>(await xl.get(`/v2/pokemon/${e}`)).data,tk=async e=>(await xl.get(e)).data,nk=async e=>(await xl.get(`/v2/pokemon-species/${e}`)).data,rk=R.div`
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
`,Gc=({typeName:e})=>x(rk,{typeName:e||"",children:e}),ik=$t.createContext({}),Ev=!0;function ok({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:o,direction:a,duration:l,enableAnimation:s=Ev}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof l=="number"&&(u["--animation-duration"]=`${l}s`),s||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof i=="string"||typeof i=="number")&&(u.borderRadius=i),o&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function In({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:i,circle:o=!1,style:a,...l}){var s,u,c;const p=$t.useContext(ik),d={...l};for(const[h,w]of Object.entries(l))typeof w>"u"&&delete d[h];const v={...p,...d,circle:o},g={...a,...ok(v)};let y="react-loading-skeleton";n&&(y+=` ${n}`);const b=(s=v.inline)!==null&&s!==void 0?s:!1,m=[],f=Math.ceil(e);for(let h=0;h<f;h++){let w=g;if(f>e&&h===f-1){const P=(u=w.width)!==null&&u!==void 0?u:"100%",$=e%1,T=typeof P=="number"?P*$:`calc(${P} * ${$})`;w={...w,width:T}}const E=x("span",{className:y,style:w,children:"\u200C"},h);b?m.push(E):m.push(M(Ji,{children:[E,x("br",{})]}))}return x("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":(c=v.enableAnimation)!==null&&c!==void 0?c:Ev,children:t?m.map((h,w)=>x(t,{children:h},w)):m})}const ak=R.div`
  ${({light:e,theme:{boxShadow:t,colors:n}})=>F`
    border: ${e?"":`3px solid ${n.lightestGray}`};
    background-color: ${e?n.white:n.black};
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
`,lk=R.div`
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
`,sk=R.div`
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
`,uk=R.div`
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
`,ck=R.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`,Yd=R(In)`
  border-radius: 6px 36px;
  width: 250px;
  height: 250px;
`,yu=({pokemon:e,light:t=!1})=>{var a;const[n,r]=_.exports.useState();_.exports.useEffect(()=>{(async()=>{const s=await Vc(e);r(s)})()},[e]);const{typesColors:i,colors:o}=Ur();return x(ak,{light:t,children:n?x(bt,{to:`/pokemon/${n.id}`,children:M(lk,{light:t,children:[M(sk,{secondary:(a=i[n.types[0].type.name])==null?void 0:a.secondaryColor,children:[M(uk,{children:["#",n.id]}),x("h3",{children:n.species.name})]}),x("img",{src:n.sprites.other.dream_world.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name}),x(ck,{children:n.types.map(l=>x(Gc,{typeName:l.type.name},l.type.name))})]})}):x(hl,{color:t?o.black:""})})},fk=R.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 50px 0;
`,dk=({pokemonList:e})=>x(fk,{children:e.map((t,n)=>x(yu,{pokemon:t.name},`${t.name}-${n}`))}),pk=20;function mk(e){const[t,n]=_.exports.useState(!0),[r,i]=_.exports.useState(!1),[o,a]=_.exports.useState([]),l=_.exports.useCallback(async()=>{try{n(!0);const s=await ek(e,pk);a(u=>[...u,...s.results]),n(!1)}catch(s){i(!!s)}},[e]);return _.exports.useEffect(()=>{l()},[l,e]),{loading:t,error:r,allPokemonList:o}}const hk=20;function vk(){const[e,t]=_.exports.useState(0),{allPokemonList:n,loading:r}=mk(e),i=_.exports.useRef(null),o=_.exports.useCallback(a=>{a[0].isIntersecting&&t(s=>s+hk)},[]);return _.exports.useEffect(()=>{const a={root:null,rootMargin:"20px",threshold:0},l=new IntersectionObserver(o,a);i.current&&l.observe(i.current)},[o]),M("div",{children:[!!(n!=null&&n.length)&&x(dk,{pokemonList:n}),x("div",{ref:i}),r&&x(hl,{})]})}const gk=()=>x("div",{children:x(I1,{})}),yk=R.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`,ni=R.div`
  ${({theme:{colors:e}})=>F`
    position: relative;
  `}
`,ri=R.div`
  ${({theme:{colors:e}})=>F`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${e.darkGray};
    z-index: 2;
  `}
`,ii=R.div`
  ${({theme:{colors:e}})=>F`
    width: 25px;
    height: 25px;
    background: ${e.black};
    position: relative;
    right: 4px;
    top: 4px;
    &::after {
      content: "";
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
      content: "";
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
`,xk=R.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
  `}
`,wk=()=>{const{id:e}=Ac(),t=Number(e),n=t>1?t-1:1,r=t+1;return M(yk,{children:[x(bt,{to:`/pokedex/${n}`,children:M(ni,{children:[x(ri,{}),x(ii,{})]})}),M(xk,{children:[x(bt,{to:`/pokedex/${n}`,children:M(ni,{children:[x(ri,{}),x(ii,{})]})}),M(ni,{children:[x(ri,{}),x(ii,{})]}),x(bt,{to:`/pokedex/${r}`,children:M(ni,{children:[x(ri,{}),x(ii,{})]})})]}),x(bt,{to:`/pokedex/${r}`,children:M(ni,{children:[x(ri,{}),x(ii,{})]})})]})},kk=R.div`
  position: relative;
`,Sk=R.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`,Ek=R.div`
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
`,bk=R.div`
  display: flex;
  gap: 8px;
`,Qd=R.div`
  ${({theme:{colors:e},color:t})=>F`
    background: ${t};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${e.black};
    border-left: 1px solid ${e.black};
  `}
`,Ck=R.div`
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
`,Pk=({types:e})=>{const{colors:t}=Ur();return M(kk,{children:[M(Sk,{children:[x(Ek,{}),M(bk,{children:[x(Qd,{color:t.red}),x(Qd,{color:t.mediumBlue})]}),x(wk,{})]}),x(Ck,{children:e.map(n=>x(Gc,{typeName:n.type.name},n.type.name))})]})},_k=R.div`
  ${({theme:{colors:e}})=>F`
    width: 370px;
    height: 460px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0 15px 15px 0;
  `}
`,Ok=R.div`
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
`,Ak=R.div`
  ${({theme:{colors:e}})=>F`
    background-color: ${e.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`,bv=({className:e,children:t})=>M(_k,{className:e,children:[x(Ok,{}),x(Ak,{children:t})]}),$k=R.div`
  ${({theme:{colors:e}})=>F`
    border: 8px solid ${e.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`,Nk=R.div`
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
`,Tk=R.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`,Rk=({pokemon:e})=>x($k,{children:x(Nk,{children:e.stats.map(t=>M(Tk,{children:[x("div",{children:t.stat.name},t.stat.name),x("div",{children:t.base_stat},`${t.stat.name}-${t.base_stat}`)]},t.stat.name))})}),Lk=R.div`
  ${({theme:{colors:e}})=>F`
    position: relative;
  `}
`,Ik=R(bv)`
  ${({theme:{colors:e}})=>F`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`,zk=R.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Kd=R.div`
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
`,Dk=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`,Mk=R.span`
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
`,jk=({pokemon:e})=>M(Lk,{children:[x(bv,{children:M(Ji,{children:[x(Rk,{pokemon:e}),M(Dk,{children:[M(zk,{children:[M(Kd,{children:[" HEIGHT - ",e.height," dm"]}),M(Kd,{children:[" WEIGHT - ",e.weight," hg"]})]}),x(Mk,{})]})]})}),x(Ik,{})]}),Fk=R.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`,Uk=R.div`
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
`,Bk=R.div`
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
`,Wk=R.span`
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
`,Hk=R.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`,is=R.span`
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
`,Vk=R.div`
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
`,Gk=R.div`
  position: relative;
`,Yk=R.div`
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
`,Qk=R.div`
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
`,Kk=R.div`
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
`,Xk=({pokemon:e})=>{const{colors:t}=Ur();return M(Fk,{children:[M(Uk,{children:[M(Bk,{children:[x("div",{}),x(Wk,{}),M(Hk,{children:[x(is,{color:t.red}),x(is,{color:t.yellow}),x(is,{color:t.green})]})]}),x(Vk,{children:x("div",{})}),M(Gk,{children:[x(Yk,{children:M(Kk,{children:[M("p",{children:["#",e.id]}),x("img",{src:e.sprites.front_default,alt:e.name}),x("p",{children:e.name})]})}),x(Qk,{})]}),x(Pk,{types:e.types})]}),x(jk,{pokemon:e})]})},Jk=()=>{const[e,t]=_.exports.useState(!1),[n,r]=_.exports.useState(),i=Ac(),o=async()=>{t(!0);const a=await Vc(Number(i.id));r(a),t(!1)};return _.exports.useEffect(()=>{o()},[i.id]),x("div",{children:e?x(hl,{}):n?x(Xk,{pokemon:n}):x("div",{})})};var Cv={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Pv={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},_v={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function Xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xd(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ca(e){return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}function Zk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qk(e,t,n){return t&&Jd(e.prototype,t),n&&Jd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yc(e,t){return t2(e)||r2(e,t)||Ov(e,t)||o2()}function to(e){return e2(e)||n2(e)||Ov(e)||i2()}function e2(e){if(Array.isArray(e))return xu(e)}function t2(e){if(Array.isArray(e))return e}function n2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function r2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Ov(e,t){if(!!e){if(typeof e=="string")return xu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xu(e,t)}}function xu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zd=function(){},Qc={},Av={},$v=null,Nv={mark:Zd,measure:Zd};try{typeof window<"u"&&(Qc=window),typeof document<"u"&&(Av=document),typeof MutationObserver<"u"&&($v=MutationObserver),typeof performance<"u"&&(Nv=performance)}catch{}var a2=Qc.navigator||{},qd=a2.userAgent,ep=qd===void 0?"":qd,Pn=Qc,fe=Av,tp=$v,Co=Nv;Pn.document;var en=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",Tv=~ep.indexOf("MSIE")||~ep.indexOf("Trident/"),Po,_o,Oo,Ao,$o,Kt="___FONT_AWESOME___",wu=16,Rv="fa",Lv="svg-inline--fa",Jn="data-fa-i2svg",ku="data-fa-pseudo-element",l2="data-fa-pseudo-element-pending",Kc="data-prefix",Xc="data-icon",np="fontawesome-i2svg",s2="async",u2=["HTML","HEAD","STYLE","SCRIPT"],Iv=function(){try{return!0}catch{return!1}}(),ue="classic",ye="sharp",Jc=[ue,ye];function no(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ue]}})}var Ui=no((Po={},Ce(Po,ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ce(Po,ye,{fa:"solid",fass:"solid","fa-solid":"solid"}),Po)),Bi=no((_o={},Ce(_o,ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ce(_o,ye,{solid:"fass"}),_o)),Wi=no((Oo={},Ce(Oo,ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ce(Oo,ye,{fass:"fa-solid"}),Oo)),c2=no((Ao={},Ce(Ao,ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ce(Ao,ye,{"fa-solid":"fass"}),Ao)),f2=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,zv="fa-layers-text",d2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,p2=no(($o={},Ce($o,ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ce($o,ye,{900:"fass"}),$o)),Dv=[1,2,3,4,5,6,7,8,9,10],m2=Dv.concat([11,12,13,14,15,16,17,18,19,20]),h2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hi=new Set;Object.keys(Bi[ue]).map(Hi.add.bind(Hi));Object.keys(Bi[ye]).map(Hi.add.bind(Hi));var v2=[].concat(Jc,to(Hi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",jn.GROUP,jn.SWAP_OPACITY,jn.PRIMARY,jn.SECONDARY]).concat(Dv.map(function(e){return"".concat(e,"x")})).concat(m2.map(function(e){return"w-".concat(e)})),ki=Pn.FontAwesomeConfig||{};function g2(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function y2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var x2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];x2.forEach(function(e){var t=Yc(e,2),n=t[0],r=t[1],i=y2(g2(n));i!=null&&(ki[r]=i)})}var Mv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rv,replacementClass:Lv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ki.familyPrefix&&(ki.cssPrefix=ki.familyPrefix);var zr=I(I({},Mv),ki);zr.autoReplaceSvg||(zr.observeMutations=!1);var j={};Object.keys(Mv).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){zr[e]=n,Si.forEach(function(r){return r(j)})},get:function(){return zr[e]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(t){zr.cssPrefix=t,Si.forEach(function(n){return n(j)})},get:function(){return zr.cssPrefix}});Pn.FontAwesomeConfig=j;var Si=[];function w2(e){return Si.push(e),function(){Si.splice(Si.indexOf(e),1)}}var on=wu,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function k2(e){if(!(!e||!en)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return fe.head.insertBefore(t,r),e}}var S2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vi(){for(var e=12,t="";e-- >0;)t+=S2[Math.random()*62|0];return t}function Hr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Zc(e){return e.classList?Hr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jv(e[n]),'" ')},"").trim()}function wl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qc(e){return e.size!==Lt.size||e.x!==Lt.x||e.y!==Lt.y||e.rotate!==Lt.rotate||e.flipX||e.flipY}function b2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function C2(e){var t=e.transform,n=e.width,r=n===void 0?wu:n,i=e.height,o=i===void 0?wu:i,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&Tv?s+="translate(".concat(t.x/on-r/2,"em, ").concat(t.y/on-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/on,"em), calc(-50% + ").concat(t.y/on,"em)) "):s+="translate(".concat(t.x/on,"em, ").concat(t.y/on,"em) "),s+="scale(".concat(t.size/on*(t.flipX?-1:1),", ").concat(t.size/on*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var P2=`:root, :host {
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
}`;function Fv(){var e=Rv,t=Lv,n=j.cssPrefix,r=j.replacementClass,i=P2;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var rp=!1;function os(){j.autoAddCss&&!rp&&(k2(Fv()),rp=!0)}var _2={mixout:function(){return{dom:{css:Fv,insertCss:os}}},hooks:function(){return{beforeDOMElementCreation:function(){os()},beforeI2svg:function(){os()}}}},Xt=Pn||{};Xt[Kt]||(Xt[Kt]={});Xt[Kt].styles||(Xt[Kt].styles={});Xt[Kt].hooks||(Xt[Kt].hooks={});Xt[Kt].shims||(Xt[Kt].shims=[]);var Pt=Xt[Kt],Uv=[],O2=function e(){fe.removeEventListener("DOMContentLoaded",e),Pa=1,Uv.map(function(t){return t()})},Pa=!1;en&&(Pa=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Pa||fe.addEventListener("DOMContentLoaded",O2));function A2(e){!en||(Pa?setTimeout(e,0):Uv.push(e))}function ro(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?jv(e):"<".concat(t," ").concat(E2(r),">").concat(o.map(ro).join(""),"</").concat(t,">")}function ip(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $2=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},as=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?$2(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[o[0]]):(s=0,c=r);s<a;s++)u=o[s],c=l(c,t[u],u,t);return c};function N2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Su(e){var t=N2(e);return t.length===1?t[0].toString(16):null}function T2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function op(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Eu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=op(t);typeof Pt.hooks.addPack=="function"&&!i?Pt.hooks.addPack(e,op(t)):Pt.styles[e]=I(I({},Pt.styles[e]||{}),o),e==="fas"&&Eu("fa",t)}var No,To,Ro,vr=Pt.styles,R2=Pt.shims,L2=(No={},Ce(No,ue,Object.values(Wi[ue])),Ce(No,ye,Object.values(Wi[ye])),No),ef=null,Bv={},Wv={},Hv={},Vv={},Gv={},I2=(To={},Ce(To,ue,Object.keys(Ui[ue])),Ce(To,ye,Object.keys(Ui[ye])),To);function z2(e){return~v2.indexOf(e)}function D2(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!z2(i)?i:null}var Yv=function(){var t=function(o){return as(vr,function(a,l,s){return a[s]=as(l,o,{}),a},{})};Bv=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=a})}return i}),Wv=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=a})}return i}),Gv=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(s){i[s]=a}),i});var n="far"in vr||j.autoFetchSvg,r=as(R2,function(i,o){var a=o[0],l=o[1],s=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Hv=r.names,Vv=r.unicodes,ef=kl(j.styleDefault,{family:j.familyDefault})};w2(function(e){ef=kl(e.styleDefault,{family:j.familyDefault})});Yv();function tf(e,t){return(Bv[e]||{})[t]}function M2(e,t){return(Wv[e]||{})[t]}function Fn(e,t){return(Gv[e]||{})[t]}function Qv(e){return Hv[e]||{prefix:null,iconName:null}}function j2(e){var t=Vv[e],n=tf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return ef}var nf=function(){return{prefix:null,iconName:null,rest:[]}};function kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ue:n,i=Ui[r][e],o=Bi[r][e]||Bi[r][i],a=e in Pt.styles?e:null;return o||a||null}var ap=(Ro={},Ce(Ro,ue,Object.keys(Wi[ue])),Ce(Ro,ye,Object.keys(Wi[ye])),Ro);function Sl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Ce(t,ue,"".concat(j.cssPrefix,"-").concat(ue)),Ce(t,ye,"".concat(j.cssPrefix,"-").concat(ye)),t),a=null,l=ue;(e.includes(o[ue])||e.some(function(u){return ap[ue].includes(u)}))&&(l=ue),(e.includes(o[ye])||e.some(function(u){return ap[ye].includes(u)}))&&(l=ye);var s=e.reduce(function(u,c){var p=D2(j.cssPrefix,c);if(vr[c]?(c=L2[l].includes(c)?c2[l][c]:c,a=c,u.prefix=c):I2[l].indexOf(c)>-1?(a=c,u.prefix=kl(c,{family:l})):p?u.iconName=p:c!==j.replacementClass&&c!==o[ue]&&c!==o[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=a==="fa"?Qv(u.iconName):{},v=Fn(u.prefix,u.iconName);d.prefix&&(a=null),u.iconName=d.iconName||v||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!vr.far&&vr.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},nf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ye&&(vr.fass||j.autoFetchSvg)&&(s.prefix="fass",s.iconName=Fn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=_n()||"fas"),s}var F2=function(){function e(){Zk(this,e),this.definitions={}}return qk(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),a[l]),Eu(l,a[l]);var s=Wi[ue][l];s&&Eu(s,a[l]),Yv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,s=a.iconName,u=a.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][s]=u}),n}}]),e}(),lp=[],gr={},Cr={},U2=Object.keys(Cr);function B2(e,t){var n=t.mixoutsTo;return lp=e,gr={},Object.keys(Cr).forEach(function(r){U2.indexOf(r)===-1&&delete Cr[r]}),lp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ca(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){gr[a]||(gr[a]=[]),gr[a].push(o[a])})}r.provides&&r.provides(Cr)}),n}function bu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=gr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=gr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Jt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Cr[e]?Cr[e].apply(null,t):void 0}function Cu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||_n();if(!!t)return t=Fn(n,t)||t,ip(Kv.definitions,n,t)||ip(Pt.styles,n,t)}var Kv=new F2,W2=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Zn("noAuto")},H2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return en?(Zn("beforeI2svg",t),Jt("pseudoElements2svg",t),Jt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,A2(function(){G2({autoReplaceSvgRoot:n}),Zn("watch",t)})}},V2={icon:function(t){if(t===null)return null;if(Ca(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=kl(t[0]);return{prefix:r,iconName:Fn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.cssPrefix,"-"))>-1||t.match(f2))){var i=Sl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||_n(),iconName:Fn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=_n();return{prefix:o,iconName:Fn(o,t)||t}}}},ct={noAuto:W2,config:j,dom:H2,parse:V2,library:Kv,findIconDefinition:Cu,toHtml:ro},G2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(Pt.styles).length>0||j.autoFetchSvg)&&en&&j.autoReplaceSvg&&ct.dom.i2svg({node:r})};function El(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ro(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!en){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Y2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(qc(a)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=wl(I(I({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Q2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(j.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:a}),children:r}]}]}function rf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,p=e.extra,d=e.watchable,v=d===void 0?!1:d,g=r.found?r:n,y=g.width,b=g.height,m=i==="fak",f=[j.replacementClass,o?"".concat(j.cssPrefix,"-").concat(o):""].filter(function(G){return p.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(p.classes).join(" "),h={children:[],attributes:I(I({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:f,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},w=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};v&&(h.attributes[Jn]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Vi())},children:[s]}),delete h.attributes.title);var E=I(I({},h),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:l,styles:I(I({},w),p.styles)}),P=r.found&&n.found?Jt("generateAbstractMask",E)||{children:[],attributes:{}}:Jt("generateAbstractIcon",E)||{children:[],attributes:{}},$=P.children,T=P.attributes;return E.children=$,E.attributes=T,l?Q2(E):Y2(E)}function sp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,u=I(I(I({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(u[Jn]="");var c=I({},a.styles);qc(i)&&(c.transform=C2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var p=wl(c);p.length>0&&(u.style=p);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function K2(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=wl(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ls=Pt.styles;function Pu(e){var t=e[0],n=e[1],r=e.slice(4),i=Yc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var X2={found:!1,width:512,height:512};function J2(e,t){!Iv&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _u(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=_n()),new Promise(function(r,i){if(Jt("missingIconAbstract"),n==="fa"){var o=Qv(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ls[t]&&ls[t][e]){var a=ls[t][e];return r(Pu(a))}J2(e,t),r(I(I({},X2),{},{icon:j.showMissingIcons&&e?Jt("missingIconAbstract")||{}:{}}))})}var up=function(){},Ou=j.measurePerformance&&Co&&Co.mark&&Co.measure?Co:{mark:up,measure:up},ci='FA "6.2.0"',Z2=function(t){return Ou.mark("".concat(ci," ").concat(t," begins")),function(){return Xv(t)}},Xv=function(t){Ou.mark("".concat(ci," ").concat(t," ends")),Ou.measure("".concat(ci," ").concat(t),"".concat(ci," ").concat(t," begins"),"".concat(ci," ").concat(t," ends"))},of={begin:Z2,end:Xv},Ko=function(){};function cp(e){var t=e.getAttribute?e.getAttribute(Jn):null;return typeof t=="string"}function q2(e){var t=e.getAttribute?e.getAttribute(Kc):null,n=e.getAttribute?e.getAttribute(Xc):null;return t&&n}function eS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function tS(){if(j.autoReplaceSvg===!0)return Xo.replace;var e=Xo[j.autoReplaceSvg];return e||Xo.replace}function nS(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function rS(e){return fe.createElement(e)}function Jv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nS:rS:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Jv(a,{ceFn:r}))}),i}function iS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Jv(i),n)}),n.getAttribute(Jn)===null&&j.keepOriginalSource){var r=fe.createComment(iS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Zc(n).indexOf(j.replacementClass))return Xo.replace(t);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,s){return s===j.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return ro(l)}).join(`
`);n.setAttribute(Jn,""),n.innerHTML=a}};function fp(e){e()}function Zv(e,t){var n=typeof t=="function"?t:Ko;if(e.length===0)n();else{var r=fp;j.mutateApproach===s2&&(r=Pn.requestAnimationFrame||fp),r(function(){var i=tS(),o=of.begin("mutate");e.map(i),o(),n()})}}var af=!1;function qv(){af=!0}function Au(){af=!1}var _a=null;function dp(e){if(!!tp&&!!j.observeMutations){var t=e.treeCallback,n=t===void 0?Ko:t,r=e.nodeCallback,i=r===void 0?Ko:r,o=e.pseudoElementsCallback,a=o===void 0?Ko:o,l=e.observeMutationsRoot,s=l===void 0?fe:l;_a=new tp(function(u){if(!af){var c=_n();Hr(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!cp(p.addedNodes[0])&&(j.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&j.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&cp(p.target)&&~h2.indexOf(p.attributeName))if(p.attributeName==="class"&&q2(p.target)){var d=Sl(Zc(p.target)),v=d.prefix,g=d.iconName;p.target.setAttribute(Kc,v||c),g&&p.target.setAttribute(Xc,g)}else eS(p.target)&&i(p.target)})}}),en&&_a.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oS(){!_a||_a.disconnect()}function aS(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function lS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Sl(Zc(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=M2(i.prefix,e.innerText)||tf(i.prefix,Su(e.innerText))),!i.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function sS(e){var t=Hr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||Vi()):(t["aria-hidden"]="true",t.focusable="false")),t}function uS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lS(e),r=n.iconName,i=n.prefix,o=n.rest,a=sS(e),l=bu("parseNodeAttributes",{},e),s=t.styleParser?aS(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},l)}var cS=Pt.styles;function eg(e){var t=j.autoReplaceSvg==="nest"?pp(e,{styleParser:!1}):pp(e);return~t.extra.classes.indexOf(zv)?Jt("generateLayersText",e,t):Jt("generateSvgReplacementMutation",e,t)}var On=new Set;Jc.map(function(e){On.add("fa-".concat(e))});Object.keys(Ui[ue]).map(On.add.bind(On));Object.keys(Ui[ye]).map(On.add.bind(On));On=to(On);function mp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!en)return Promise.resolve();var n=fe.documentElement.classList,r=function(p){return n.add("".concat(np,"-").concat(p))},i=function(p){return n.remove("".concat(np,"-").concat(p))},o=j.autoFetchSvg?On:Jc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(cS));o.includes("fa")||o.push("fa");var a=[".".concat(zv,":not([").concat(Jn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Jn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=Hr(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=of.begin("onTree"),u=l.reduce(function(c,p){try{var d=eg(p);d&&c.push(d)}catch(v){Iv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,p){Promise.all(u).then(function(d){Zv(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(d){s(),p(d)})})}function fS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eg(e).then(function(n){n&&Zv([n],t)})}function dS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Cu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Cu(i||{})),e(r,I(I({},n),{},{mask:i}))}}var pS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Lt:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,p=n.title,d=p===void 0?null:p,v=n.titleId,g=v===void 0?null:v,y=n.classes,b=y===void 0?[]:y,m=n.attributes,f=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(!!t){var E=t.prefix,P=t.iconName,$=t.icon;return El(I({type:"icon"},t),function(){return Zn("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(d?f["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(g||Vi()):(f["aria-hidden"]="true",f.focusable="false")),rf({icons:{main:Pu($),mask:s?Pu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:P,transform:I(I({},Lt),i),symbol:a,title:d,maskId:c,titleId:g,extra:{attributes:f,styles:w,classes:b}})})}},mS={mixout:function(){return{icon:dS(pS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mp,n.nodeCallback=fS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,o=n.callback,a=o===void 0?function(){}:o;return mp(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,p=r.maskId,d=r.extra;return new Promise(function(v,g){Promise.all([_u(i,l),c.iconName?_u(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=Yc(y,2),m=b[0],f=b[1];v([n,rf({icons:{main:m,mask:f},prefix:l,iconName:i,transform:s,symbol:u,maskId:p,title:o,titleId:a,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,s=wl(l);s.length>0&&(i.style=s);var u;return qc(a)&&(u=Jt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},hS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return El({type:"layer"},function(){Zn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(to(o)).join(" ")},children:a}]})}}}},vS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,s=r.attributes,u=s===void 0?{}:s,c=r.styles,p=c===void 0?{}:c;return El({type:"counter",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),K2({content:n.toString(),title:o,extra:{attributes:u,styles:p,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(to(l))}})})}}}},gS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Lt:i,a=r.title,l=a===void 0?null:a,s=r.classes,u=s===void 0?[]:s,c=r.attributes,p=c===void 0?{}:c,d=r.styles,v=d===void 0?{}:d;return El({type:"text",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),sp({content:n,transform:I(I({},Lt),o),title:l,extra:{attributes:p,styles:v,classes:["".concat(j.cssPrefix,"-layers-text")].concat(to(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,s=null;if(Tv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return j.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,sp({content:n.innerHTML,width:l,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},yS=new RegExp('"',"ug"),hp=[1105920,1112319];function xS(e){var t=e.replace(yS,""),n=T2(t,0),r=n>=hp[0]&&n<=hp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Su(i?t[0]:t),isSecondary:r||i}}function vp(e,t){var n="".concat(l2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Hr(e.children),a=o.filter(function($){return $.getAttribute(ku)===t})[0],l=Pn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(d2),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&c!=="none"&&c!==""){var p=l.getPropertyValue("content"),d=~["Sharp"].indexOf(s[2])?ye:ue,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Bi[d][s[2].toLowerCase()]:p2[d][u],g=xS(p),y=g.value,b=g.isSecondary,m=s[0].startsWith("FontAwesome"),f=tf(v,y),h=f;if(m){var w=j2(y);w.iconName&&w.prefix&&(f=w.iconName,v=w.prefix)}if(f&&!b&&(!a||a.getAttribute(Kc)!==v||a.getAttribute(Xc)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);var E=uS(),P=E.extra;P.attributes[ku]=t,_u(f,v).then(function($){var T=rf(I(I({},E),{},{icons:{main:$,mask:nf()},prefix:v,iconName:h,extra:P,watchable:!0})),G=fe.createElement("svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=T.map(function(B){return ro(B)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function wS(e){return Promise.all([vp(e,"::before"),vp(e,"::after")])}function kS(e){return e.parentNode!==document.head&&!~u2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ku)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gp(e){if(!!en)return new Promise(function(t,n){var r=Hr(e.querySelectorAll("*")).filter(kS).map(wS),i=of.begin("searchPseudoElements");qv(),Promise.all(r).then(function(){i(),Au(),t()}).catch(function(){i(),Au(),n()})})}var SS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;j.searchPseudoElements&&gp(i)}}},yp=!1,ES={mixout:function(){return{dom:{unwatch:function(){qv(),yp=!0}}}},hooks:function(){return{bootstrap:function(){dp(bu("mutationObserverCallbacks",{}))},noAuto:function(){oS()},watch:function(n){var r=n.observeMutationsRoot;yp?Au():dp(bu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},bS={mixout:function(){return{parse:{transform:function(n){return xp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(s," ").concat(u," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")},v={outer:l,inner:p,path:d};return{tag:"g",attributes:I({},v.outer),children:[{tag:"g",attributes:I({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),v.path)}]}]}}}},ss={x:0,y:0,width:"100%",height:"100%"};function wp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function CS(e){return e.tag==="g"?e.children:[e]}var PS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Sl(i.split(" ").map(function(a){return a.trim()})):nf();return o.prefix||(o.prefix=_n()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,s=n.transform,u=o.width,c=o.icon,p=a.width,d=a.icon,v=b2({transform:s,containerWidth:p,iconWidth:u}),g={tag:"rect",attributes:I(I({},ss),{},{fill:"white"})},y=c.children?{children:c.children.map(wp)}:{},b={tag:"g",attributes:I({},v.inner),children:[wp(I({tag:c.tag,attributes:I(I({},c.attributes),v.path)},y))]},m={tag:"g",attributes:I({},v.outer),children:[b]},f="mask-".concat(l||Vi()),h="clip-".concat(l||Vi()),w={tag:"mask",attributes:I(I({},ss),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:CS(d)},w]};return r.push(E,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(f,")")},ss)}),{children:r,attributes:i}}}},_S={provides:function(t){var n=!1;Pn.matchMedia&&(n=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=I(I({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},OS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},AS=[_2,mS,hS,vS,gS,SS,ES,bS,PS,_S,OS];B2(AS,{mixoutsTo:ct});ct.noAuto;ct.config;ct.library;ct.dom;var $u=ct.parse;ct.findIconDefinition;ct.toHtml;var $S=ct.icon;ct.layer;ct.text;ct.counter;var Q={exports:{}},NS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TS=NS,RS=TS;function tg(){}function ng(){}ng.resetWarningCache=tg;var LS=function(){function e(r,i,o,a,l,s){if(s!==RS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ng,resetWarningCache:tg};return n.PropTypes=n,n};Q.exports=LS();function kp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kp(Object(n),!0).forEach(function(r){yr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oa(e){return Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oa(e)}function yr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zS(e,t){if(e==null)return{};var n=IS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Nu(e){return DS(e)||MS(e)||jS(e)||FS()}function DS(e){if(Array.isArray(e))return Tu(e)}function MS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jS(e,t){if(!!e){if(typeof e=="string")return Tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tu(e,t)}}function Tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function FS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function US(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,p=e.pulse,d=e.fixedWidth,v=e.inverse,g=e.border,y=e.listItem,b=e.flip,m=e.size,f=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":d,"fa-inverse":v,"fa-border":g,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},yr(t,"fa-".concat(m),typeof m<"u"&&m!==null),yr(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),yr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),yr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(E){return w[E]?E:null}).filter(function(E){return E})}function BS(e){return e=e-0,e===e}function rg(e){return BS(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var WS=["style"];function HS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function VS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=rg(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[HS(i)]=o:t[i]=o,t},{})}function ig(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return ig(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=VS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[rg(u)]=c}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=zS(n,WS);return i.attrs.style=pn(pn({},i.attrs.style),a),e.apply(void 0,[t.tag,pn(pn({},i.attrs),l)].concat(Nu(r)))}var og=!1;try{og=!0}catch{}function GS(){if(!og&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Sp(e){if(e&&Oa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($u.icon)return $u.icon(e);if(e===null)return null;if(e&&Oa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function us(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?yr({},e,t):{}}var Dt=$t.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,s=e.maskId,u=Sp(n),c=us("classes",[].concat(Nu(US(e)),Nu(o.split(" ")))),p=us("transform",typeof e.transform=="string"?$u.transform(e.transform):e.transform),d=us("mask",Sp(r)),v=$S(u,pn(pn(pn(pn({},c),p),d),{},{symbol:i,title:a,titleId:l,maskId:s}));if(!v)return GS("Could not find icon",u),null;var g=v.abstract,y={ref:t};return Object.keys(e).forEach(function(b){Dt.defaultProps.hasOwnProperty(b)||(y[b]=e[b])}),YS(g[0],y)});Dt.displayName="FontAwesomeIcon";Dt.propTypes={beat:Q.exports.bool,border:Q.exports.bool,beatFade:Q.exports.bool,bounce:Q.exports.bool,className:Q.exports.string,fade:Q.exports.bool,flash:Q.exports.bool,mask:Q.exports.oneOfType([Q.exports.object,Q.exports.array,Q.exports.string]),maskId:Q.exports.string,fixedWidth:Q.exports.bool,inverse:Q.exports.bool,flip:Q.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.exports.oneOfType([Q.exports.object,Q.exports.array,Q.exports.string]),listItem:Q.exports.bool,pull:Q.exports.oneOf(["right","left"]),pulse:Q.exports.bool,rotation:Q.exports.oneOf([0,90,180,270]),shake:Q.exports.bool,size:Q.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.exports.bool,spinPulse:Q.exports.bool,spinReverse:Q.exports.bool,symbol:Q.exports.oneOfType([Q.exports.bool,Q.exports.string]),title:Q.exports.string,titleId:Q.exports.string,transform:Q.exports.oneOfType([Q.exports.string,Q.exports.object]),swapOpacity:Q.exports.bool};Dt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var YS=ig.bind(null,$t.createElement);const QS=R.div`
  padding: 32px;
`,KS=R.h2`
  ${({theme:{colors:e}})=>F`
    color: ${e.darkBlue};
    margin-bottom: 1.2rem;
    font-family: 'Lato', sans-serif;
  `}
`,Ru=R.div`
  display: flex;
  align-items: center;
`,ag=R.div`
  display: flex;
  align-items: center;
`,lg=R.span`
  margin: 1rem;
`,XS=R.div`
  ${({hasManyEvolutions:e,showShadow:t,theme:{boxShadow:n}})=>F`
    padding: 24px ${t?"24px":0};
    display: flex;
    flex-direction: ${e?"row":"column"};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 8px;
    box-shadow: ${t?n.dark:""};
  `}
`,JS=({url:e})=>{const[t,n]=_.exports.useState(!1),[r,i]=_.exports.useState(),o=r==null?void 0:r.filter(d=>d.canEvolve),a=r==null?void 0:r.filter(d=>!d.canEvolve),l=(d,v)=>d.includes("https://pokeapi.co/api/v2/pokemon-species/")?d.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/",""):v,s=_.exports.useMemo(()=>[],[]),u=_.exports.useCallback(d=>{if(!d.evolves_to.length){s.push({id:l(d.species.url,d.species.name),name:d.species.name,canEvolve:!1}),i(s);return}s.length||s.push({id:l(d.species.url,d.species.name),name:d.species.name,canEvolve:!0}),d.evolves_to.forEach(v=>{if(!v.evolves_to.length){s.push({id:l(v.species.url,v.species.name),name:v.species.name,canEvolve:!1}),i(s);return}s.push({id:l(v.species.url,v.species.name),name:v.species.name,canEvolve:!0}),i(s),u(v)})},[s]),c=_.exports.useCallback(async()=>{n(!0);const d=await tk(e);u(d.chain),n(!1)},[e,u]),{colors:p}=Ur();return _.exports.useEffect(()=>{c()},[e,c]),x(QS,{children:t?x(hl,{}):M(Ji,{children:[x(KS,{children:"EVOLUTION CHAIN:"}),M(Ru,{children:[o!=null&&o.length?o.map(d=>M(ag,{children:[x(yu,{pokemon:d.id,light:!0},d.name),d.canEvolve&&x(lg,{children:x(Dt,{icon:Pv,color:p.black,size:"xl"})})]},d.name)):null,a!=null&&a.length?x(XS,{showShadow:a.length>1,hasManyEvolutions:a.length>3,children:a.map(d=>x("div",{children:x(yu,{pokemon:d.id,light:!0},d.name)},d.name))}):null]})]})})},ZS=()=>{const{colors:e}=Ur();return x(Ru,{children:M(Ru,{children:[M(ag,{children:[x(Yd,{baseColor:e.lightGray}),x(lg,{children:x(Dt,{icon:Pv,color:e.mediumGray,size:"xl"})})]}),x(Yd,{baseColor:e.lightGray})]})})},qS=R.div`
  ${({theme:{boxShadow:e,colors:t}})=>F`
    box-shadow: ${e.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${t.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`,eE=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tE=R.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`,nE=R.div`
  margin-bottom: -3px;
`,rE=R.div`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`,iE=R.div`
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
`,oE=({stats:e})=>M(qS,{children:[x("h3",{children:"Stats"}),x(eE,{children:e.map(t=>M(tE,{children:[x(nE,{children:t.stat.name.toUpperCase()}),x(rE,{value:t.base_stat,children:x(iE,{value:t.base_stat,children:t.base_stat})})]},t.stat.name))})]}),sg=R.div`
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
`,ug=R.div`
  ${({theme:{colors:e,spacing:t}})=>F`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: calc(100vh - ${t.headerSpacing} - 76px);
    background-color: ${e.mediumGray};
    border-radius: 8px;
    overflow: hidden;
    gap: 2rem;
    color: ${e.darkGray};
    padding-bottom: 3rem;
  `}
`,cg=R.div`
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
`,fg=R.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  align-items: stretch;
`,dg=R.div`
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
`,aE=R.p`
  ${({theme:{colors:e}})=>F`
    width: 300px;
    padding: 2rem;
    border-radius: 8px;
    background: ${e.lightGray};
    font-weight: 500;
  `}
`,pg=R.div`
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
`,Aa=R.div`
  ${({theme:{colors:e}})=>F`
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
  `}
`,mg=R.div`
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
`,hg=R.h1`
  font-family: 'Lato', sans-serif;
`,Ep=R(In)`
  border-radius: 99px;
`,lE=()=>{var s;const[e,t]=_.exports.useState(),[n,r]=_.exports.useState(),[i,o]=_.exports.useState(!1),a=Ac(),l=_.exports.useCallback(async()=>{if(a!=null&&a.id){o(!0);const u=await nk(a.id),c=await Vc(a.id);t(u),r(c),o(!1)}},[a.id]);return _.exports.useEffect(()=>{l()},[a.id,l]),M(sg,{children:[i&&x(sE,{}),!i&&a.id&&n?M(ug,{children:[M(pg,{type:n.types[0].type.name,children:[x(bt,{to:`/pokemon/${Number(n==null?void 0:n.id)>1?Number(n==null?void 0:n.id)-1:1}`,children:M(Aa,{children:[x(Dt,{icon:_v}),x("p",{children:"PREV POKEMON"})]})}),x(mg,{type:n.types[0].type.name,children:x("img",{src:n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name})}),x(bt,{to:`/pokemon/${Number(n.id)+1}`,children:M(Aa,{children:[x("p",{children:"NEXT POKEMON"}),x(Dt,{icon:Cv})]})})]}),M(hg,{children:["#",e==null?void 0:e.id," ",e==null?void 0:e.name.toUpperCase()]}),M(cg,{children:[M(fg,{children:[M(dg,{children:[x(aE,{children:(s=e==null?void 0:e.flavor_text_entries.find(u=>u.language.name==="en"))==null?void 0:s.flavor_text.replace(/\f/g," ")}),x("div",{children:n.types.map(u=>x(Gc,{typeName:u.type.name},u.type.name))})]}),x(oE,{stats:n.stats})]}),e?x(JS,{url:e==null?void 0:e.evolution_chain.url}):null]})]}):null]})},sE=()=>{const{colors:e}=Ur();return x(sg,{children:M(ug,{children:[M(pg,{type:"normal",children:[M(Aa,{children:[x(Dt,{icon:_v}),x("p",{children:"PREV POKEMON"})]}),x(mg,{type:"normal",children:x(In,{width:200,height:200,circle:!0,baseColor:e.lightGray})}),M(Aa,{children:[x("p",{children:"NEXT POKEMON"}),x(Dt,{icon:Cv})]})]}),x(hg,{children:x(In,{width:180,baseColor:e.lightGray,height:45})}),M(cg,{children:[M(fg,{children:[M(dg,{children:[x("div",{children:x(In,{width:300,height:150,baseColor:e.lightGray})}),M("div",{children:[x(Ep,{width:300,height:35,baseColor:e.lightGray}),x(Ep,{width:300,height:35,baseColor:e.lightGray})]})]}),x(In,{width:330,height:330,baseColor:e.lightGray})]}),x(In,{width:250,height:35,baseColor:e.lightGray}),x(ZS,{})]})]})})},uE=Ux`
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
`,cE={colors:{white:"#F3F4F6",lightestGray:"#F3F4F6",lightGray:"#D1D5DB",mediumGray:"#6B7280",darkGray:"#1F2937",black:"#111827",lightBlue:"#7DD3FC",mediumBlue:"#0284C7",darkBlue:"#075985",green:"#55ab62",yellow:"#feee6d",mediumYellow:"#c7a400",darkYellow:"#9f8a0d",red:"#e5092e",pokedexGreen:"#bad8a8",pokedexLight:"#ce1131",pokedexMedium:"#bd0f33",pokedexDark:"#941828",pokedexDarkest:"#810a1e"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1440px"},spacing:{headerSpacing:"65px"},boxShadow:{dark:"0 0 6px rgba(0, 0, 0, 0.3)",light:"0 0 4px rgba(0, 0, 0, 0.1)"},typesColors:{normal:{primaryColor:"#A8A878",secondaryColor:"#6D6D4E"},fighting:{primaryColor:"#C03028",secondaryColor:"#D67873"},flying:{primaryColor:"#A890F0",secondaryColor:"#6D5E9C"},poison:{primaryColor:"#A040A0",secondaryColor:"#682A68"},ground:{primaryColor:"#E0C068",secondaryColor:"#927D44"},rock:{primaryColor:"#B8A038",secondaryColor:"#786824"},bug:{primaryColor:"#A8B820",secondaryColor:"#6D7815"},ghost:{primaryColor:"#705898",secondaryColor:"#493963"},steel:{primaryColor:"#B8B8D0",secondaryColor:"#787887"},fire:{primaryColor:"#F08030",secondaryColor:"#9C531F"},water:{primaryColor:"#6890F0",secondaryColor:"#445E9C"},grass:{primaryColor:"#78C850",secondaryColor:"#4E8234"},electric:{primaryColor:"#F8D030",secondaryColor:"#A1871F"},psychic:{primaryColor:"#F85888",secondaryColor:"#A13959"},ice:{primaryColor:"#98D8D8",secondaryColor:"#638D8D"},dragon:{primaryColor:"#7038F8",secondaryColor:"#4924A1"},dark:{primaryColor:"#705848",secondaryColor:"#49392F"},fairy:{primaryColor:"#EE99AC",secondaryColor:"#9B6470"},unknown:{primaryColor:"#68A090",secondaryColor:"#44685E"},shadow:{primaryColor:"#705898",secondaryColor:"#493963"}}};function fE(){return M(jx,{theme:cE,children:[x(B1,{children:x(Qx,{children:x(D1,{children:M(Ln,{path:"/",children:[x(Ln,{index:!0,element:x(vk,{})}),x(Ln,{path:"pokedex",element:x(gk,{}),children:x(Ln,{path:":id",element:x(Jk,{})})}),x(Ln,{path:"pokemon/:id",element:x(lE,{})}),x(Ln,{path:"*",element:x("div",{children:"Not found"})})]})})})}),x(uE,{})]})}cs.createRoot(document.getElementById("root")).render(x(fE,{}));
