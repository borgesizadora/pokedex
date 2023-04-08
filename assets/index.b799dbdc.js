function ay(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),sy=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),cy=Symbol.for("react.profiler"),fy=Symbol.for("react.provider"),dy=Symbol.for("react.context"),py=Symbol.for("react.forward_ref"),hy=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),vy=Symbol.for("react.lazy"),hd=Symbol.iterator;function gy(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var Gh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kh=Object.assign,Yh={};function qr(e,t,n){this.props=e,this.context=t,this.refs=Yh,this.updater=n||Gh}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qh(){}qh.prototype=qr.prototype;function Rc(e,t,n){this.props=e,this.context=t,this.refs=Yh,this.updater=n||Gh}var Ac=Rc.prototype=new qh;Ac.constructor=Rc;Kh(Ac,qr.prototype);Ac.isPureReactComponent=!0;var md=Array.isArray,Xh=Object.prototype.hasOwnProperty,Nc={current:null},Jh={key:!0,ref:!0,__self:!0,__source:!0};function Zh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Xh.call(t,r)&&!Jh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:co,type:e,key:o,ref:a,props:i,_owner:Nc.current}}function yy(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vd=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xy(""+e.key):t.toString(36)}function ia(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case co:case sy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+dl(a,0):r,md(i)?(n="",e!=null&&(n=e.replace(vd,"$&/")+"/"),ia(i,t,n,"",function(u){return u})):i!=null&&(Tc(i)&&(i=yy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",md(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+dl(o,s);a+=ia(o,t,n,l,i)}else if(l=gy(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+dl(o,s++),a+=ia(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Po(e,t,n){if(e==null)return e;var r=[],i=0;return ia(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},oa={transition:null},by={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:oa,ReactCurrentOwner:Nc};q.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!Tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=qr;q.Fragment=ly;q.Profiler=cy;q.PureComponent=Rc;q.StrictMode=uy;q.Suspense=hy;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Nc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Xh.call(t,l)&&!Jh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:co,type:e.type,key:i,ref:o,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:dy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fy,_context:e},e.Consumer=e};q.createElement=Zh;q.createFactory=function(e){var t=Zh.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:py,render:e}};q.isValidElement=Tc;q.lazy=function(e){return{$$typeof:vy,_payload:{_status:-1,_result:e},_init:wy}};q.memo=function(e,t){return{$$typeof:my,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=oa.transition;oa.transition={};try{e()}finally{oa.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return tt.current.useCallback(e,t)};q.useContext=function(e){return tt.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};q.useEffect=function(e,t){return tt.current.useEffect(e,t)};q.useId=function(){return tt.current.useId()};q.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return tt.current.useMemo(e,t)};q.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};q.useRef=function(e){return tt.current.useRef(e)};q.useState=function(e){return tt.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return tt.current.useTransition()};q.version="18.2.0";(function(e){e.exports=q})(x);const J=Vh(x.exports),Ea=ay({__proto__:null,default:J},[x.exports]);var ql={},fo={exports:{}},ht={},em={exports:{}},tm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,H){var W=A.length;A.push(H);e:for(;0<W;){var re=W-1>>>1,I=A[re];if(0<i(I,H))A[re]=H,A[W]=I,W=re;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var H=A[0],W=A.pop();if(W!==H){A[0]=W;e:for(var re=0,I=A.length,D=I>>>1;re<D;){var j=2*(re+1)-1,V=A[j],C=j+1,X=A[C];if(0>i(V,W))C<I&&0>i(X,V)?(A[re]=X,A[C]=W,re=C):(A[re]=V,A[j]=W,re=j);else if(C<I&&0>i(X,W))A[re]=X,A[C]=W,re=C;else break e}}return H}function i(A,H){var W=A.sortIndex-H.sortIndex;return W!==0?W:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,p=3,h=!1,g=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=A)r(u),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(u)}}function b(A){if(y=!1,m(A),!g)if(n(l)!==null)g=!0,Re(k);else{var H=n(u);H!==null&&Pe(b,H.startTime-A)}}function k(A,H){g=!1,y&&(y=!1,v(O),O=-1),h=!0;var W=p;try{for(m(H),f=n(l);f!==null&&(!(f.expirationTime>H)||A&&!ne());){var re=f.callback;if(typeof re=="function"){f.callback=null,p=f.priorityLevel;var I=re(f.expirationTime<=H);H=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(l)&&r(l),m(H)}else r(l);f=n(l)}if(f!==null)var D=!0;else{var j=n(u);j!==null&&Pe(b,j.startTime-H),D=!1}return D}finally{f=null,p=W,h=!1}}var E=!1,_=null,O=-1,T=5,L=-1;function ne(){return!(e.unstable_now()-L<T)}function ae(){if(_!==null){var A=e.unstable_now();L=A;var H=!0;try{H=_(!0,A)}finally{H?de():(E=!1,_=null)}}else E=!1}var de;if(typeof d=="function")de=function(){d(ae)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ye=ke.port2;ke.port1.onmessage=ae,de=function(){ye.postMessage(null)}}else de=function(){S(ae,0)};function Re(A){_=A,E||(E=!0,de())}function Pe(A,H){O=S(function(){A(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Re(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var W=p;p=H;try{return A()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=p;p=A;try{return H()}finally{p=W}},e.unstable_scheduleCallback=function(A,H,W){var re=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?re+W:re):W=re,A){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=W+I,A={id:c++,callback:H,priorityLevel:A,startTime:W,expirationTime:I,sortIndex:-1},W>re?(A.sortIndex=W,t(u,A),n(l)===null&&A===n(u)&&(y?(v(O),O=-1):y=!0,Pe(b,W-re))):(A.sortIndex=I,t(l,A),g||h||(g=!0,Re(k))),A},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(A){var H=p;return function(){var W=p;p=H;try{return A.apply(this,arguments)}finally{p=W}}}})(tm);(function(e){e.exports=tm})(em);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm=x.exports,pt=em.exports;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rm=new Set,zi={};function cr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(zi[e]=t,e=0;e<t.length;e++)rm.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},yd={};function Sy(e){return Xl.call(yd,e)?!0:Xl.call(gd,e)?!1:ky.test(e)?yd[e]=!0:(gd[e]=!0,!1)}function Cy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ey(e,t,n,r){if(t===null||typeof t>"u"||Cy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ic,Mc);Ve[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ic,Mc);Ve[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ic,Mc);Ve[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ey(t,n,i,r)&&(n=null),r||i===null?Sy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),mr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),om=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),xd=Symbol.iterator;function si(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,pl;function xi(e){if(pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pl=t&&t[1]||""}return`
`+pl+e}var hl=!1;function ml(e,t){if(!e||hl)return"";hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xi(e):""}function $y(e){switch(e.tag){case 5:return xi(e.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case mr:return"Portal";case Jl:return"Profiler";case Lc:return"StrictMode";case Zl:return"Suspense";case eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case om:return(e.displayName||"Context")+".Consumer";case im:return(e._context.displayName||"Context")+".Provider";case Dc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zc:return t=e.displayName||null,t!==null?t:tu(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return tu(e(t))}catch{}}return null}function Py(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(t);case 8:return t===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oy(e){var t=sm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _o(e){e._valueTracker||(e._valueTracker=Oy(e))}function lm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nu(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function um(e,t){t=t.checked,t!=null&&Fc(e,"checked",t,!1)}function ru(e,t){um(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?iu(e,t.type,n):t.hasOwnProperty("defaultValue")&&iu(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function iu(e,t,n){(t!=="number"||$a(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wi=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(wi(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function cm(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ro,dm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_y=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(e){_y.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$i[t]=$i[e]})});function pm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$i.hasOwnProperty(e)&&$i[e]?(""+t).trim():t+"px"}function hm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ry=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(e,t){if(t){if(Ry[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cu=null,Nr=null,Tr=null;function Cd(e){if(e=mo(e)){if(typeof cu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=ys(t),cu(e.stateNode,e.type,t))}}function mm(e){Nr?Tr?Tr.push(e):Tr=[e]:Nr=e}function vm(){if(Nr){var e=Nr,t=Tr;if(Tr=Nr=null,Cd(e),t)for(e=0;e<t.length;e++)Cd(t[e])}}function gm(e,t){return e(t)}function ym(){}var vl=!1;function xm(e,t,n){if(vl)return e(t,n);vl=!0;try{return gm(e,t,n)}finally{vl=!1,(Nr!==null||Tr!==null)&&(ym(),vm())}}function Ui(e,t){var n=e.stateNode;if(n===null)return null;var r=ys(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var fu=!1;if(Xt)try{var li={};Object.defineProperty(li,"passive",{get:function(){fu=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{fu=!1}function Ay(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Pi=!1,Pa=null,Oa=!1,du=null,Ny={onError:function(e){Pi=!0,Pa=e}};function Ty(e,t,n,r,i,o,a,s,l){Pi=!1,Pa=null,Ay.apply(Ny,arguments)}function Iy(e,t,n,r,i,o,a,s,l){if(Ty.apply(this,arguments),Pi){if(Pi){var u=Pa;Pi=!1,Pa=null}else throw Error(R(198));Oa||(Oa=!0,du=u)}}function fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ed(e){if(fr(e)!==e)throw Error(R(188))}function My(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ed(i),e;if(o===r)return Ed(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function bm(e){return e=My(e),e!==null?km(e):null}function km(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=km(e);if(t!==null)return t;e=e.sibling}return null}var Sm=pt.unstable_scheduleCallback,$d=pt.unstable_cancelCallback,Fy=pt.unstable_shouldYield,Ly=pt.unstable_requestPaint,_e=pt.unstable_now,Dy=pt.unstable_getCurrentPriorityLevel,Uc=pt.unstable_ImmediatePriority,Cm=pt.unstable_UserBlockingPriority,_a=pt.unstable_NormalPriority,zy=pt.unstable_LowPriority,Em=pt.unstable_IdlePriority,hs=null,Bt=null;function jy(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(hs,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Hy,Uy=Math.log,By=Math.LN2;function Hy(e){return e>>>=0,e===0?32:31-(Uy(e)/By|0)|0}var Ao=64,No=4194304;function bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=bi(s):(o&=a,o!==0&&(r=bi(o)))}else a=n&~i,a!==0?r=bi(a):o!==0&&(r=bi(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function Wy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-It(o),s=1<<a,l=i[a];l===-1?((s&n)===0||(s&r)!==0)&&(i[a]=Wy(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $m(){var e=Ao;return Ao<<=1,(Ao&4194240)===0&&(Ao=64),e}function gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function Vy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function Pm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Om,Hc,_m,Rm,Am,hu=!1,To=[],Cn=null,En=null,$n=null,Bi=new Map,Hi=new Map,gn=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function ui(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=mo(t),t!==null&&Hc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ky(e,t,n,r,i){switch(t){case"focusin":return Cn=ui(Cn,e,t,n,r,i),!0;case"dragenter":return En=ui(En,e,t,n,r,i),!0;case"mouseover":return $n=ui($n,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bi.set(o,ui(Bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hi.set(o,ui(Hi.get(o)||null,e,t,n,r,i)),!0}return!1}function Nm(e){var t=Vn(e.target);if(t!==null){var n=fr(t);if(n!==null){if(t=n.tag,t===13){if(t=wm(n),t!==null){e.blockedOn=t,Am(e.priority,function(){_m(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uu=r,n.target.dispatchEvent(r),uu=null}else return t=mo(n),t!==null&&Hc(t),e.blockedOn=n,!1;t.shift()}return!0}function Od(e,t,n){aa(e)&&n.delete(t)}function Yy(){hu=!1,Cn!==null&&aa(Cn)&&(Cn=null),En!==null&&aa(En)&&(En=null),$n!==null&&aa($n)&&($n=null),Bi.forEach(Od),Hi.forEach(Od)}function ci(e,t){e.blockedOn===t&&(e.blockedOn=null,hu||(hu=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Yy)))}function Wi(e){function t(i){return ci(i,e)}if(0<To.length){ci(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&ci(Cn,e),En!==null&&ci(En,e),$n!==null&&ci($n,e),Bi.forEach(t),Hi.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Nm(n),n.blockedOn===null&&gn.shift()}var Ir=an.ReactCurrentBatchConfig,Aa=!0;function qy(e,t,n,r){var i=le,o=Ir.transition;Ir.transition=null;try{le=1,Wc(e,t,n,r)}finally{le=i,Ir.transition=o}}function Xy(e,t,n,r){var i=le,o=Ir.transition;Ir.transition=null;try{le=4,Wc(e,t,n,r)}finally{le=i,Ir.transition=o}}function Wc(e,t,n,r){if(Aa){var i=mu(e,t,n,r);if(i===null)Pl(e,t,r,Na,n),Pd(e,r);else if(Ky(i,e,t,n,r))r.stopPropagation();else if(Pd(e,r),t&4&&-1<Gy.indexOf(e)){for(;i!==null;){var o=mo(i);if(o!==null&&Om(o),o=mu(e,t,n,r),o===null&&Pl(e,t,r,Na,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pl(e,t,r,null,n)}}var Na=null;function mu(e,t,n,r){if(Na=null,e=jc(r),e=Vn(e),e!==null)if(t=fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Na=e,null}function Tm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case Uc:return 1;case Cm:return 4;case _a:case zy:return 16;case Em:return 536870912;default:return 16}default:return 16}}var xn=null,Qc=null,sa=null;function Im(){if(sa)return sa;var e,t=Qc,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return sa=i.slice(e,1<r?1-r:void 0)}function la(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function _d(){return!1}function mt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Io:_d,this.isPropagationStopped=_d,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=mt(Xr),ho=be({},Xr,{view:0,detail:0}),Jy=mt(ho),yl,xl,fi,ms=be({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(yl=e.screenX-fi.screenX,xl=e.screenY-fi.screenY):xl=yl=0,fi=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Rd=mt(ms),Zy=be({},ms,{dataTransfer:0}),e1=mt(Zy),t1=be({},ho,{relatedTarget:0}),wl=mt(t1),n1=be({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=mt(n1),i1=be({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o1=mt(i1),a1=be({},Xr,{data:0}),Ad=mt(a1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u1[e])?!!t[e]:!1}function Gc(){return c1}var f1=be({},ho,{key:function(e){if(e.key){var t=s1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=la(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?la(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?la(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d1=mt(f1),p1=be({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=mt(p1),h1=be({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),m1=mt(h1),v1=be({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=mt(v1),y1=be({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x1=mt(y1),w1=[9,13,27,32],Kc=Xt&&"CompositionEvent"in window,Oi=null;Xt&&"documentMode"in document&&(Oi=document.documentMode);var b1=Xt&&"TextEvent"in window&&!Oi,Mm=Xt&&(!Kc||Oi&&8<Oi&&11>=Oi),Td=String.fromCharCode(32),Id=!1;function Fm(e,t){switch(e){case"keyup":return w1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function k1(e,t){switch(e){case"compositionend":return Lm(t);case"keypress":return t.which!==32?null:(Id=!0,Td);case"textInput":return e=t.data,e===Td&&Id?null:e;default:return null}}function S1(e,t){if(gr)return e==="compositionend"||!Kc&&Fm(e,t)?(e=Im(),sa=Qc=xn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mm&&t.locale!=="ko"?null:t.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C1[e.type]:t==="textarea"}function Dm(e,t,n,r){mm(r),t=Ta(t,"onChange"),0<t.length&&(n=new Vc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Qi=null;function E1(e){Ym(e,0)}function vs(e){var t=wr(e);if(lm(t))return e}function $1(e,t){if(e==="change")return t}var zm=!1;if(Xt){var bl;if(Xt){var kl="oninput"in document;if(!kl){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),kl=typeof Fd.oninput=="function"}bl=kl}else bl=!1;zm=bl&&(!document.documentMode||9<document.documentMode)}function Ld(){_i&&(_i.detachEvent("onpropertychange",jm),Qi=_i=null)}function jm(e){if(e.propertyName==="value"&&vs(Qi)){var t=[];Dm(t,Qi,e,jc(e)),xm(E1,t)}}function P1(e,t,n){e==="focusin"?(Ld(),_i=t,Qi=n,_i.attachEvent("onpropertychange",jm)):e==="focusout"&&Ld()}function O1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vs(Qi)}function _1(e,t){if(e==="click")return vs(t)}function R1(e,t){if(e==="input"||e==="change")return vs(t)}function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:A1;function Vi(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xl.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Dd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Um(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Um(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bm(){for(var e=window,t=$a();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$a(e.document)}return t}function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N1(e){var t=Bm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(r!==null&&Yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zd(n,o);var a=zd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T1=Xt&&"documentMode"in document&&11>=document.documentMode,yr=null,vu=null,Ri=null,gu=!1;function jd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||yr==null||yr!==$a(r)||(r=yr,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Vi(Ri,r)||(Ri=r,r=Ta(vu,"onSelect"),0<r.length&&(t=new Vc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Sl={},Hm={};Xt&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function gs(e){if(Sl[e])return Sl[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hm)return Sl[e]=t[n];return e}var Wm=gs("animationend"),Qm=gs("animationiteration"),Vm=gs("animationstart"),Gm=gs("transitionend"),Km=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){Km.set(e,t),cr(t,[e])}for(var Cl=0;Cl<Ud.length;Cl++){var El=Ud[Cl],I1=El.toLowerCase(),M1=El[0].toUpperCase()+El.slice(1);zn(I1,"on"+M1)}zn(Wm,"onAnimationEnd");zn(Qm,"onAnimationIteration");zn(Vm,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Gm,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Bd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iy(r,t,void 0,e),e.currentTarget=null}function Ym(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Bd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Bd(i,s,u),o=l}}}if(Oa)throw e=du,Oa=!1,du=null,e}function pe(e,t){var n=t[ku];n===void 0&&(n=t[ku]=new Set);var r=e+"__bubble";n.has(r)||(qm(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),qm(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Gi(e){if(!e[Fo]){e[Fo]=!0,rm.forEach(function(n){n!=="selectionchange"&&(F1.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,$l("selectionchange",!1,t))}}function qm(e,t,n,r){switch(Tm(t)){case 1:var i=qy;break;case 4:i=Xy;break;default:i=Wc}n=i.bind(null,t,n,e),i=void 0,!fu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Pl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Vn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}xm(function(){var u=o,c=jc(n),f=[];e:{var p=Km.get(e);if(p!==void 0){var h=Vc,g=e;switch(e){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":h=d1;break;case"focusin":g="focus",h=wl;break;case"focusout":g="blur",h=wl;break;case"beforeblur":case"afterblur":h=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=e1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=m1;break;case Wm:case Qm:case Vm:h=r1;break;case Gm:h=g1;break;case"scroll":h=Jy;break;case"wheel":h=x1;break;case"copy":case"cut":case"paste":h=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Nd}var y=(t&4)!==0,S=!y&&e==="scroll",v=y?p!==null?p+"Capture":null:p;y=[];for(var d=u,m;d!==null;){m=d;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,v!==null&&(b=Ui(d,v),b!=null&&y.push(Ki(d,b,m)))),S)break;d=d.return}0<y.length&&(p=new h(p,g,null,n,c),f.push({event:p,listeners:y}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==uu&&(g=n.relatedTarget||n.fromElement)&&(Vn(g)||g[Jt]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Vn(g):null,g!==null&&(S=fr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(y=Rd,b="onMouseLeave",v="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nd,b="onPointerLeave",v="onPointerEnter",d="pointer"),S=h==null?p:wr(h),m=g==null?p:wr(g),p=new y(b,d+"leave",h,n,c),p.target=S,p.relatedTarget=m,b=null,Vn(c)===u&&(y=new y(v,d+"enter",g,n,c),y.target=m,y.relatedTarget=S,b=y),S=b,h&&g)t:{for(y=h,v=g,d=0,m=y;m;m=hr(m))d++;for(m=0,b=v;b;b=hr(b))m++;for(;0<d-m;)y=hr(y),d--;for(;0<m-d;)v=hr(v),m--;for(;d--;){if(y===v||v!==null&&y===v.alternate)break t;y=hr(y),v=hr(v)}y=null}else y=null;h!==null&&Hd(f,p,h,y,!1),g!==null&&S!==null&&Hd(f,S,g,y,!0)}}e:{if(p=u?wr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=$1;else if(Md(p))if(zm)k=R1;else{k=O1;var E=P1}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=_1);if(k&&(k=k(e,u))){Dm(f,k,n,c);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&iu(p,"number",p.value)}switch(E=u?wr(u):window,e){case"focusin":(Md(E)||E.contentEditable==="true")&&(yr=E,vu=u,Ri=null);break;case"focusout":Ri=vu=yr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,jd(f,n,c);break;case"selectionchange":if(T1)break;case"keydown":case"keyup":jd(f,n,c)}var _;if(Kc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else gr?Fm(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Mm&&n.locale!=="ko"&&(gr||O!=="onCompositionStart"?O==="onCompositionEnd"&&gr&&(_=Im()):(xn=c,Qc="value"in xn?xn.value:xn.textContent,gr=!0)),E=Ta(u,O),0<E.length&&(O=new Ad(O,e,null,n,c),f.push({event:O,listeners:E}),_?O.data=_:(_=Lm(n),_!==null&&(O.data=_)))),(_=b1?k1(e,n):S1(e,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(c=new Ad("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=_))}Ym(f,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ui(e,n),o!=null&&r.unshift(Ki(e,o,i)),o=Ui(e,t),o!=null&&r.push(Ki(e,o,i))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Ui(n,o),l!=null&&a.unshift(Ki(n,l,s))):i||(l=Ui(n,o),l!=null&&a.push(Ki(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var L1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function Wd(e){return(typeof e=="string"?e:""+e).replace(L1,`
`).replace(D1,"")}function Lo(e,t,n){if(t=Wd(t),Wd(e)!==t&&n)throw Error(R(425))}function Ia(){}var yu=null,xu=null;function wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,z1=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(U1)}:bu;function U1(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),jt="__reactFiber$"+Jr,Yi="__reactProps$"+Jr,Jt="__reactContainer$"+Jr,ku="__reactEvents$"+Jr,B1="__reactListeners$"+Jr,H1="__reactHandles$"+Jr;function Vn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vd(e);e!==null;){if(n=e[jt])return n;e=Vd(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[jt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function ys(e){return e[Yi]||null}var Su=[],br=-1;function jn(e){return{current:e}}function me(e){0>br||(e.current=Su[br],Su[br]=null,br--)}function fe(e,t){br++,Su[br]=e.current,e.current=t}var Mn={},Je=jn(Mn),at=jn(!1),tr=Mn;function zr(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function Ma(){me(at),me(Je)}function Gd(e,t,n){if(Je.current!==Mn)throw Error(R(168));fe(Je,t),fe(at,n)}function Xm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Py(e)||"Unknown",i));return be({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,tr=Je.current,fe(Je,e),fe(at,at.current),!0}function Kd(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Xm(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,me(at),me(Je),fe(Je,e)):me(at),fe(at,n)}var Qt=null,xs=!1,_l=!1;function Jm(e){Qt===null?Qt=[e]:Qt.push(e)}function W1(e){xs=!0,Jm(e)}function Un(){if(!_l&&Qt!==null){_l=!0;var e=0,t=le;try{var n=Qt;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,xs=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),Sm(Uc,Un),i}finally{le=t,_l=!1}}return null}var kr=[],Sr=0,La=null,Da=0,yt=[],xt=0,nr=null,Gt=1,Kt="";function Bn(e,t){kr[Sr++]=Da,kr[Sr++]=La,La=e,Da=t}function Zm(e,t,n){yt[xt++]=Gt,yt[xt++]=Kt,yt[xt++]=nr,nr=e;var r=Gt;e=Kt;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Gt=1<<32-It(t)+i|n<<i|r,Kt=o+e}else Gt=1<<o|n<<i|r,Kt=e}function qc(e){e.return!==null&&(Bn(e,1),Zm(e,1,0))}function Xc(e){for(;e===La;)La=kr[--Sr],kr[Sr]=null,Da=kr[--Sr],kr[Sr]=null;for(;e===nr;)nr=yt[--xt],yt[xt]=null,Kt=yt[--xt],yt[xt]=null,Gt=yt[--xt],yt[xt]=null}var dt=null,ft=null,ge=!1,At=null;function ev(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ft=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ft=null,!0):!1;default:return!1}}function Cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eu(e){if(ge){var t=ft;if(t){var n=t;if(!Yd(e,t)){if(Cu(e))throw Error(R(418));t=Pn(n.nextSibling);var r=dt;t&&Yd(e,t)?ev(r,n):(e.flags=e.flags&-4097|2,ge=!1,dt=e)}}else{if(Cu(e))throw Error(R(418));e.flags=e.flags&-4097|2,ge=!1,dt=e}}}function qd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Do(e){if(e!==dt)return!1;if(!ge)return qd(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wu(e.type,e.memoizedProps)),t&&(t=ft)){if(Cu(e))throw tv(),Error(R(418));for(;t;)ev(e,t),t=Pn(t.nextSibling)}if(qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=dt?Pn(e.stateNode.nextSibling):null;return!0}function tv(){for(var e=ft;e;)e=Pn(e.nextSibling)}function jr(){ft=dt=null,ge=!1}function Jc(e){At===null?At=[e]:At.push(e)}var Q1=an.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var za=jn(null),ja=null,Cr=null,Zc=null;function ef(){Zc=Cr=ja=null}function tf(e){var t=za.current;me(za),e._currentValue=t}function $u(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){ja=e,Zc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(Zc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(ja===null)throw Error(R(308));Cr=e,ja.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Gn=null;function nf(e){Gn===null?Gn=[e]:Gn.push(e)}function nv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Zt(e,n)}return i=r.interleaved,i===null?(t.next=t,nf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Zt(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function Xd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;mn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var p=s.lane,h=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(h,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(h,f,p):g,p==null)break e;f=be({},f,p);break e;case 2:mn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=a,e.lanes=a,e.memoizedState=f}}function Jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var iv=new nm.Component().refs;function Pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=Rn(e),o=Yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=On(e,o,i),t!==null&&(Mt(t,e,i,r),ua(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=Rn(e),o=Yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=On(e,o,i),t!==null&&(Mt(t,e,i,r),ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=Rn(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=On(e,i,r),t!==null&&(Mt(t,e,r,n),ua(t,e,r))}};function Zd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,o):!0}function ov(e,t,n){var r=!1,i=Mn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=st(t)?tr:Je.current,r=t.contextTypes,o=(r=r!=null)?zr(e,i):Mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ep(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Ou(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=iv,rf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=st(t)?tr:Je.current,i.context=zr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ws.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===iv&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tp(e){var t=e._init;return t(e._payload)}function av(e){function t(v,d){if(e){var m=v.deletions;m===null?(v.deletions=[d],v.flags|=16):m.push(d)}}function n(v,d){if(!e)return null;for(;d!==null;)t(v,d),d=d.sibling;return null}function r(v,d){for(v=new Map;d!==null;)d.key!==null?v.set(d.key,d):v.set(d.index,d),d=d.sibling;return v}function i(v,d){return v=An(v,d),v.index=0,v.sibling=null,v}function o(v,d,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<d?(v.flags|=2,d):m):(v.flags|=2,d)):(v.flags|=1048576,d)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,d,m,b){return d===null||d.tag!==6?(d=Fl(m,v.mode,b),d.return=v,d):(d=i(d,m),d.return=v,d)}function l(v,d,m,b){var k=m.type;return k===vr?c(v,d,m.props.children,b,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hn&&tp(k)===d.type)?(b=i(d,m.props),b.ref=di(v,d,m),b.return=v,b):(b=ma(m.type,m.key,m.props,null,v.mode,b),b.ref=di(v,d,m),b.return=v,b)}function u(v,d,m,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ll(m,v.mode,b),d.return=v,d):(d=i(d,m.children||[]),d.return=v,d)}function c(v,d,m,b,k){return d===null||d.tag!==7?(d=Zn(m,v.mode,b,k),d.return=v,d):(d=i(d,m),d.return=v,d)}function f(v,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fl(""+d,v.mode,m),d.return=v,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oo:return m=ma(d.type,d.key,d.props,null,v.mode,m),m.ref=di(v,null,d),m.return=v,m;case mr:return d=Ll(d,v.mode,m),d.return=v,d;case hn:var b=d._init;return f(v,b(d._payload),m)}if(wi(d)||si(d))return d=Zn(d,v.mode,m,null),d.return=v,d;zo(v,d)}return null}function p(v,d,m,b){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(v,d,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return m.key===k?l(v,d,m,b):null;case mr:return m.key===k?u(v,d,m,b):null;case hn:return k=m._init,p(v,d,k(m._payload),b)}if(wi(m)||si(m))return k!==null?null:c(v,d,m,b,null);zo(v,m)}return null}function h(v,d,m,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(m)||null,s(d,v,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oo:return v=v.get(b.key===null?m:b.key)||null,l(d,v,b,k);case mr:return v=v.get(b.key===null?m:b.key)||null,u(d,v,b,k);case hn:var E=b._init;return h(v,d,m,E(b._payload),k)}if(wi(b)||si(b))return v=v.get(m)||null,c(d,v,b,k,null);zo(d,b)}return null}function g(v,d,m,b){for(var k=null,E=null,_=d,O=d=0,T=null;_!==null&&O<m.length;O++){_.index>O?(T=_,_=null):T=_.sibling;var L=p(v,_,m[O],b);if(L===null){_===null&&(_=T);break}e&&_&&L.alternate===null&&t(v,_),d=o(L,d,O),E===null?k=L:E.sibling=L,E=L,_=T}if(O===m.length)return n(v,_),ge&&Bn(v,O),k;if(_===null){for(;O<m.length;O++)_=f(v,m[O],b),_!==null&&(d=o(_,d,O),E===null?k=_:E.sibling=_,E=_);return ge&&Bn(v,O),k}for(_=r(v,_);O<m.length;O++)T=h(_,v,O,m[O],b),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?O:T.key),d=o(T,d,O),E===null?k=T:E.sibling=T,E=T);return e&&_.forEach(function(ne){return t(v,ne)}),ge&&Bn(v,O),k}function y(v,d,m,b){var k=si(m);if(typeof k!="function")throw Error(R(150));if(m=k.call(m),m==null)throw Error(R(151));for(var E=k=null,_=d,O=d=0,T=null,L=m.next();_!==null&&!L.done;O++,L=m.next()){_.index>O?(T=_,_=null):T=_.sibling;var ne=p(v,_,L.value,b);if(ne===null){_===null&&(_=T);break}e&&_&&ne.alternate===null&&t(v,_),d=o(ne,d,O),E===null?k=ne:E.sibling=ne,E=ne,_=T}if(L.done)return n(v,_),ge&&Bn(v,O),k;if(_===null){for(;!L.done;O++,L=m.next())L=f(v,L.value,b),L!==null&&(d=o(L,d,O),E===null?k=L:E.sibling=L,E=L);return ge&&Bn(v,O),k}for(_=r(v,_);!L.done;O++,L=m.next())L=h(_,v,O,L.value,b),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?O:L.key),d=o(L,d,O),E===null?k=L:E.sibling=L,E=L);return e&&_.forEach(function(ae){return t(v,ae)}),ge&&Bn(v,O),k}function S(v,d,m,b){if(typeof m=="object"&&m!==null&&m.type===vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:e:{for(var k=m.key,E=d;E!==null;){if(E.key===k){if(k=m.type,k===vr){if(E.tag===7){n(v,E.sibling),d=i(E,m.props.children),d.return=v,v=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hn&&tp(k)===E.type){n(v,E.sibling),d=i(E,m.props),d.ref=di(v,E,m),d.return=v,v=d;break e}n(v,E);break}else t(v,E);E=E.sibling}m.type===vr?(d=Zn(m.props.children,v.mode,b,m.key),d.return=v,v=d):(b=ma(m.type,m.key,m.props,null,v.mode,b),b.ref=di(v,d,m),b.return=v,v=b)}return a(v);case mr:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(v,d.sibling),d=i(d,m.children||[]),d.return=v,v=d;break e}else{n(v,d);break}else t(v,d);d=d.sibling}d=Ll(m,v.mode,b),d.return=v,v=d}return a(v);case hn:return E=m._init,S(v,d,E(m._payload),b)}if(wi(m))return g(v,d,m,b);if(si(m))return y(v,d,m,b);zo(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(v,d.sibling),d=i(d,m),d.return=v,v=d):(n(v,d),d=Fl(m,v.mode,b),d.return=v,v=d),a(v)):n(v,d)}return S}var Ur=av(!0),sv=av(!1),vo={},Ht=jn(vo),qi=jn(vo),Xi=jn(vo);function Kn(e){if(e===vo)throw Error(R(174));return e}function of(e,t){switch(fe(Xi,t),fe(qi,e),fe(Ht,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:au(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=au(t,e)}me(Ht),fe(Ht,t)}function Br(){me(Ht),me(qi),me(Xi)}function lv(e){Kn(Xi.current);var t=Kn(Ht.current),n=au(t,e.type);t!==n&&(fe(qi,e),fe(Ht,n))}function af(e){qi.current===e&&(me(Ht),me(qi))}var xe=jn(0);function Ba(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function sf(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var ca=an.ReactCurrentDispatcher,Al=an.ReactCurrentBatchConfig,rr=0,we=null,Te=null,Le=null,Ha=!1,Ai=!1,Ji=0,V1=0;function Ke(){throw Error(R(321))}function lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function uf(e,t,n,r,i,o){if(rr=o,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?q1:X1,e=n(r,i),Ai){o=0;do{if(Ai=!1,Ji=0,25<=o)throw Error(R(301));o+=1,Le=Te=null,t.updateQueue=null,ca.current=J1,e=n(r,i)}while(Ai)}if(ca.current=Wa,t=Te!==null&&Te.next!==null,rr=0,Le=Te=we=null,Ha=!1,t)throw Error(R(300));return e}function cf(){var e=Ji!==0;return Ji=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=e:Le=Le.next=e,Le}function Et(){if(Te===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Le===null?we.memoizedState:Le.next;if(t!==null)Le=t,Te=e;else{if(e===null)throw Error(R(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Le===null?we.memoizedState=Le=e:Le=Le.next=e}return Le}function Zi(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Et(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,we.lanes|=c,ir|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Ft(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,we.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Tl(e){var t=Et(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ft(o,t.memoizedState)||(ot=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uv(){}function cv(e,t){var n=we,r=Et(),i=t(),o=!Ft(r.memoizedState,i);if(o&&(r.memoizedState=i,ot=!0),r=r.queue,ff(pv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,eo(9,dv.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(R(349));(rr&30)!==0||fv(n,t,i)}return i}function fv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dv(e,t,n,r){t.value=n,t.getSnapshot=r,hv(t)&&mv(e)}function pv(e,t,n){return n(function(){hv(t)&&mv(e)})}function hv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function mv(e){var t=Zt(e,1);t!==null&&Mt(t,e,1,-1)}function np(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Y1.bind(null,we,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vv(){return Et().memoizedState}function fa(e,t,n,r){var i=zt();we.flags|=e,i.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function bs(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Te!==null){var a=Te.memoizedState;if(o=a.destroy,r!==null&&lf(r,a.deps)){i.memoizedState=eo(t,n,o,r);return}}we.flags|=e,i.memoizedState=eo(1|t,n,o,r)}function rp(e,t){return fa(8390656,8,e,t)}function ff(e,t){return bs(2048,8,e,t)}function gv(e,t){return bs(4,2,e,t)}function yv(e,t){return bs(4,4,e,t)}function xv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wv(e,t,n){return n=n!=null?n.concat([e]):null,bs(4,4,xv.bind(null,t,e),n)}function df(){}function bv(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kv(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sv(e,t,n){return(rr&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(Ft(n,t)||(n=$m(),we.lanes|=n,ir|=n,e.baseState=!0),t)}function G1(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{le=n,Al.transition=r}}function Cv(){return Et().memoizedState}function K1(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(e))$v(t,n);else if(n=nv(e,t,n,r),n!==null){var i=et();Mt(n,e,r,i),Pv(n,t,r)}}function Y1(e,t,n){var r=Rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(e))$v(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ft(s,a)){var l=t.interleaved;l===null?(i.next=i,nf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=nv(e,t,i,r),n!==null&&(i=et(),Mt(n,e,r,i),Pv(n,t,r))}}function Ev(e){var t=e.alternate;return e===we||t!==null&&t===we}function $v(e,t){Ai=Ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pv(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var Wa={readContext:Ct,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},q1={readContext:Ct,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:rp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fa(4194308,4,xv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return fa(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=K1.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:np,useDebugValue:df,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=np(!1),t=e[0];return e=G1.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=zt();if(ge){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ze===null)throw Error(R(349));(rr&30)!==0||fv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rp(pv.bind(null,r,o,e),[e]),r.flags|=2048,eo(9,dv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=ze.identifierPrefix;if(ge){var n=Kt,r=Gt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X1={readContext:Ct,useCallback:bv,useContext:Ct,useEffect:ff,useImperativeHandle:wv,useInsertionEffect:gv,useLayoutEffect:yv,useMemo:kv,useReducer:Nl,useRef:vv,useState:function(){return Nl(Zi)},useDebugValue:df,useDeferredValue:function(e){var t=Et();return Sv(t,Te.memoizedState,e)},useTransition:function(){var e=Nl(Zi)[0],t=Et().memoizedState;return[e,t]},useMutableSource:uv,useSyncExternalStore:cv,useId:Cv,unstable_isNewReconciler:!1},J1={readContext:Ct,useCallback:bv,useContext:Ct,useEffect:ff,useImperativeHandle:wv,useInsertionEffect:gv,useLayoutEffect:yv,useMemo:kv,useReducer:Tl,useRef:vv,useState:function(){return Tl(Zi)},useDebugValue:df,useDeferredValue:function(e){var t=Et();return Te===null?t.memoizedState=e:Sv(t,Te.memoizedState,e)},useTransition:function(){var e=Tl(Zi)[0],t=Et().memoizedState;return[e,t]},useMutableSource:uv,useSyncExternalStore:cv,useId:Cv,unstable_isNewReconciler:!1};function Hr(e,t){try{var n="",r=t;do n+=$y(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function _u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z1=typeof WeakMap=="function"?WeakMap:Map;function Ov(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Va||(Va=!0,zu=r),_u(e,t)},n}function _v(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){_u(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_u(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ip(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=px.bind(null,e,t,n),t.then(e,e))}function op(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ap(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,On(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ex=an.ReactCurrentOwner,ot=!1;function Ze(e,t,n,r){t.child=e===null?sv(t,null,n,r):Ur(t,e.child,n,r)}function sp(e,t,n,r,i){n=n.render;var o=t.ref;return Mr(t,i),r=uf(e,t,n,r,o,i),n=cf(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(ge&&n&&qc(t),t.flags|=1,Ze(e,t,r,i),t.child)}function lp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!wf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rv(e,t,o,r,i)):(e=ma(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(a,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,en(e,t,i)}return Ru(e,t,n,r,i)}function Av(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe($r,ct),ct|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe($r,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,fe($r,ct),ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,fe($r,ct),ct|=r;return Ze(e,t,i,n),t.child}function Nv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ru(e,t,n,r,i){var o=st(n)?tr:Je.current;return o=zr(t,o),Mr(t,i),n=uf(e,t,n,r,o,i),r=cf(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(ge&&r&&qc(t),t.flags|=1,Ze(e,t,n,i),t.child)}function up(e,t,n,r,i){if(st(n)){var o=!0;Fa(t)}else o=!1;if(Mr(t,i),t.stateNode===null)da(e,t),ov(t,n,r),Ou(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=st(n)?tr:Je.current,u=zr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ep(t,a,r,u),mn=!1;var p=t.memoizedState;a.state=p,Ua(t,r,a,i),l=t.memoizedState,s!==r||p!==l||at.current||mn?(typeof c=="function"&&(Pu(t,n,c,r),l=t.memoizedState),(s=mn||Zd(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,rv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:_t(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=st(n)?tr:Je.current,l=zr(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&ep(t,a,r,l),mn=!1,p=t.memoizedState,a.state=p,Ua(t,r,a,i);var g=t.memoizedState;s!==f||p!==g||at.current||mn?(typeof h=="function"&&(Pu(t,n,h,r),g=t.memoizedState),(u=mn||Zd(t,n,u,r,p,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Au(e,t,n,r,o,i)}function Au(e,t,n,r,i,o){Nv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Kd(t,n,!1),en(e,t,o);r=t.stateNode,ex.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,s,o)):Ze(e,t,s,o),t.memoizedState=r.state,i&&Kd(t,n,!0),t.child}function Tv(e){var t=e.stateNode;t.pendingContext?Gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gd(e,t.context,!1),of(e,t.containerInfo)}function cp(e,t,n,r,i){return jr(),Jc(i),t.flags|=256,Ze(e,t,n,r),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iv(e,t,n){var r=t.pendingProps,i=xe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(xe,i&1),e===null)return Eu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Cs(a,r,0,null),e=Zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tu(n),t.memoizedState=Nu,e):pf(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return tx(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=An(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=An(s,o):(o=Zn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Tu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Nu,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pf(e,t){return t=Cs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jo(e,t,n,r){return r!==null&&Jc(r),Ur(t,e.child,null,n),e=pf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tx(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(R(422))),jo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cs({mode:"visible",children:r.children},i,0,null),o=Zn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Ur(t,e.child,null,a),t.child.memoizedState=Tu(a),t.memoizedState=Nu,o);if((t.mode&1)===0)return jo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(R(419)),r=Il(o,r,void 0),jo(e,t,a,r)}if(s=(a&e.childLanes)!==0,ot||s){if(r=ze,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Zt(e,i),Mt(r,e,i,-1))}return xf(),r=Il(Error(R(421))),jo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=Pn(i.nextSibling),dt=t,ge=!0,At=null,e!==null&&(yt[xt++]=Gt,yt[xt++]=Kt,yt[xt++]=nr,Gt=e.id,Kt=e.overflow,nr=t),t=pf(t,r.children),t.flags|=4096,t)}function fp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$u(e.return,t,n)}function Ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,n,t);else if(e.tag===19)fp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ba(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ba(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ml(t,!0,n,null,o);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nx(e,t,n){switch(t.tag){case 3:Tv(t),jr();break;case 5:lv(t);break;case 1:st(t.type)&&Fa(t);break;case 4:of(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;fe(za,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Iv(e,t,n):(fe(xe,xe.current&1),e=en(e,t,n),e!==null?e.sibling:null);fe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Mv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Av(e,t,n)}return en(e,t,n)}var Fv,Iu,Lv,Dv;Fv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};Lv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(Ht.current);var o=null;switch(n){case"input":i=nu(e,i),r=nu(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=ou(e,i),r=ou(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ia)}su(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Dv=function(e,t,n,r){n!==r&&(t.flags|=4)};function pi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rx(e,t,n){var r=t.pendingProps;switch(Xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return st(t.type)&&Ma(),Ye(t),null;case 3:return r=t.stateNode,Br(),me(at),me(Je),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(Bu(At),At=null))),Iu(e,t),Ye(t),null;case 5:af(t);var i=Kn(Xi.current);if(n=t.type,e!==null&&t.stateNode!=null)Lv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ye(t),null}if(e=Kn(Ht.current),Do(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[jt]=t,r[Yi]=o,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)pe(ki[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":wd(r,o),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pe("invalid",r);break;case"textarea":kd(r,o),pe("invalid",r)}su(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),i=["children",""+s]):zi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&pe("scroll",r)}switch(n){case"input":_o(r),bd(r,o,!0);break;case"textarea":_o(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ia)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[jt]=t,e[Yi]=r,Fv(e,t,!1,!1),t.stateNode=e;e:{switch(a=lu(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)pe(ki[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":wd(e,r),i=nu(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),pe("invalid",e);break;case"textarea":kd(e,r),i=ou(e,r),pe("invalid",e);break;default:i=r}su(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?hm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(e,l):typeof l=="number"&&ji(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&pe("scroll",e):l!=null&&Fc(e,o,l,a))}switch(n){case"input":_o(e),bd(e,r,!1);break;case"textarea":_o(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ar(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Dv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Kn(Xi.current),Kn(Ht.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(o=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return Ye(t),null;case 13:if(me(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tv(),jr(),t.flags|=98560,o=!1;else if(o=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[jt]=t}else jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else At!==null&&(Bu(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Ie===0&&(Ie=3):xf())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Br(),Iu(e,t),e===null&&Gi(t.stateNode.containerInfo),Ye(t),null;case 10:return tf(t.type._context),Ye(t),null;case 17:return st(t.type)&&Ma(),Ye(t),null;case 19:if(me(xe),o=t.memoizedState,o===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)pi(o,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ba(e),a!==null){for(t.flags|=128,pi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>Wr&&(t.flags|=128,r=!0,pi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ba(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ge)return Ye(t),null}else 2*_e()-o.renderingStartTime>Wr&&n!==1073741824&&(t.flags|=128,r=!0,pi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=xe.current,fe(xe,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return yf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ct&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function ix(e,t){switch(Xc(t),t.tag){case 1:return st(t.type)&&Ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),me(at),me(Je),sf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return af(t),null;case 13:if(me(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(xe),null;case 4:return Br(),null;case 10:return tf(t.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Uo=!1,Xe=!1,ox=typeof WeakSet=="function"?WeakSet:Set,U=null;function Er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Mu(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var dp=!1;function ax(e,t){if(yu=Aa,e=Bm(),Yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=a),p===o&&++c===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xu={focusedElem:e,selectionRange:n},Aa=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,v=t.stateNode,d=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:_t(t.type,y),S);v.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){Ce(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=dp,dp=!1,g}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mu(t,n,o)}i=i.next}while(i!==r)}}function ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zv(e){var t=e.alternate;t!==null&&(e.alternate=null,zv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Yi],delete t[ku],delete t[B1],delete t[H1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jv(e){return e.tag===5||e.tag===3||e.tag===4}function pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ia));else if(r!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var We=null,Rt=!1;function fn(e,t,n){for(n=n.child;n!==null;)Uv(e,t,n),n=n.sibling}function Uv(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(hs,n)}catch{}switch(n.tag){case 5:Xe||Er(n,t);case 6:var r=We,i=Rt;We=null,fn(e,t,n),We=r,Rt=i,We!==null&&(Rt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Rt?(e=We,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),Wi(e)):Ol(We,n.stateNode));break;case 4:r=We,i=Rt,We=n.stateNode.containerInfo,Rt=!0,fn(e,t,n),We=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&Mu(n,t,a),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Xe&&(Er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ce(n,t,s)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,fn(e,t,n),Xe=r):fn(e,t,n);break;default:fn(e,t,n)}}function hp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ox),t.forEach(function(r){var i=mx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:We=s.stateNode,Rt=!1;break e;case 3:We=s.stateNode.containerInfo,Rt=!0;break e;case 4:We=s.stateNode.containerInfo,Rt=!0;break e}s=s.return}if(We===null)throw Error(R(160));Uv(o,a,i),We=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bv(t,e),t=t.sibling}function Bv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Dt(e),r&4){try{Ni(3,e,e.return),ks(3,e)}catch(y){Ce(e,e.return,y)}try{Ni(5,e,e.return)}catch(y){Ce(e,e.return,y)}}break;case 1:Ot(t,e),Dt(e),r&512&&n!==null&&Er(n,n.return);break;case 5:if(Ot(t,e),Dt(e),r&512&&n!==null&&Er(n,n.return),e.flags&32){var i=e.stateNode;try{ji(i,"")}catch(y){Ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&um(i,o),lu(s,a);var u=lu(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?hm(i,f):c==="dangerouslySetInnerHTML"?dm(i,f):c==="children"?ji(i,f):Fc(i,c,f,u)}switch(s){case"input":ru(i,o);break;case"textarea":cm(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Ar(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ar(i,!!o.multiple,o.defaultValue,!0):Ar(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yi]=o}catch(y){Ce(e,e.return,y)}}break;case 6:if(Ot(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ce(e,e.return,y)}}break;case 3:if(Ot(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(y){Ce(e,e.return,y)}break;case 4:Ot(t,e),Dt(e);break;case 13:Ot(t,e),Dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vf=_e())),r&4&&hp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||c,Ot(t,e),Xe=u):Ot(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(U=e,c=e.child;c!==null;){for(f=U=c;U!==null;){switch(p=U,h=p.child,p.tag){case 0:case 11:case 14:case 15:Ni(4,p,p.return);break;case 1:Er(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Ce(r,n,y)}}break;case 5:Er(p,p.return);break;case 22:if(p.memoizedState!==null){vp(f);continue}}h!==null?(h.return=p,U=h):vp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=pm("display",a))}catch(y){Ce(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Ce(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ot(t,e),Dt(e),r&4&&hp(e);break;case 21:break;default:Ot(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var o=pp(e);Du(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=pp(e);Lu(e,s,a);break;default:throw Error(R(161))}}catch(l){Ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sx(e,t,n){U=e,Hv(e)}function Hv(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Uo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Xe;s=Uo;var u=Xe;if(Uo=a,(Xe=l)&&!u)for(U=i;U!==null;)a=U,l=a.child,a.tag===22&&a.memoizedState!==null?gp(i):l!==null?(l.return=a,U=l):gp(i);for(;o!==null;)U=o,Hv(o),o=o.sibling;U=i,Uo=s,Xe=u}mp(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,U=o):mp(e)}}function mp(e){for(;U!==null;){var t=U;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Jd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Xe||t.flags&512&&Fu(t)}catch(p){Ce(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function vp(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function gp(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ks(4,t)}catch(l){Ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ce(t,i,l)}}var o=t.return;try{Fu(t)}catch(l){Ce(t,o,l)}break;case 5:var a=t.return;try{Fu(t)}catch(l){Ce(t,a,l)}}}catch(l){Ce(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var lx=Math.ceil,Qa=an.ReactCurrentDispatcher,hf=an.ReactCurrentOwner,kt=an.ReactCurrentBatchConfig,Z=0,ze=null,Ae=null,Qe=0,ct=0,$r=jn(0),Ie=0,to=null,ir=0,Ss=0,mf=0,Ti=null,it=null,vf=0,Wr=1/0,Wt=null,Va=!1,zu=null,_n=null,Bo=!1,wn=null,Ga=0,Ii=0,ju=null,pa=-1,ha=0;function et(){return(Z&6)!==0?_e():pa!==-1?pa:pa=_e()}function Rn(e){return(e.mode&1)===0?1:(Z&2)!==0&&Qe!==0?Qe&-Qe:Q1.transition!==null?(ha===0&&(ha=$m()),ha):(e=le,e!==0||(e=window.event,e=e===void 0?16:Tm(e.type)),e)}function Mt(e,t,n,r){if(50<Ii)throw Ii=0,ju=null,Error(R(185));po(e,n,r),((Z&2)===0||e!==ze)&&(e===ze&&((Z&2)===0&&(Ss|=n),Ie===4&&yn(e,Qe)),lt(e,r),n===1&&Z===0&&(t.mode&1)===0&&(Wr=_e()+500,xs&&Un()))}function lt(e,t){var n=e.callbackNode;Qy(e,t);var r=Ra(e,e===ze?Qe:0);if(r===0)n!==null&&$d(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$d(n),t===1)e.tag===0?W1(yp.bind(null,e)):Jm(yp.bind(null,e)),j1(function(){(Z&6)===0&&Un()}),n=null;else{switch(Pm(r)){case 1:n=Uc;break;case 4:n=Cm;break;case 16:n=_a;break;case 536870912:n=Em;break;default:n=_a}n=Xv(n,Wv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wv(e,t){if(pa=-1,ha=0,(Z&6)!==0)throw Error(R(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var r=Ra(e,e===ze?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ka(e,r);else{t=r;var i=Z;Z|=2;var o=Vv();(ze!==e||Qe!==t)&&(Wt=null,Wr=_e()+500,Jn(e,t));do try{fx();break}catch(s){Qv(e,s)}while(1);ef(),Qa.current=o,Z=i,Ae!==null?t=0:(ze=null,Qe=0,t=Ie)}if(t!==0){if(t===2&&(i=pu(e),i!==0&&(r=i,t=Uu(e,i))),t===1)throw n=to,Jn(e,0),yn(e,r),lt(e,_e()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!ux(i)&&(t=Ka(e,r),t===2&&(o=pu(e),o!==0&&(r=o,t=Uu(e,o))),t===1))throw n=to,Jn(e,0),yn(e,r),lt(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Hn(e,it,Wt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=vf+500-_e(),10<t)){if(Ra(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bu(Hn.bind(null,e,it,Wt),t);break}Hn(e,it,Wt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-It(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lx(r/1960))-r,10<r){e.timeoutHandle=bu(Hn.bind(null,e,it,Wt),r);break}Hn(e,it,Wt);break;case 5:Hn(e,it,Wt);break;default:throw Error(R(329))}}}return lt(e,_e()),e.callbackNode===n?Wv.bind(null,e):null}function Uu(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=it,it=n,t!==null&&Bu(t)),e}function Bu(e){it===null?it=e:it.push.apply(it,e)}function ux(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~mf,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function yp(e){if((Z&6)!==0)throw Error(R(327));Fr();var t=Ra(e,0);if((t&1)===0)return lt(e,_e()),null;var n=Ka(e,t);if(e.tag!==0&&n===2){var r=pu(e);r!==0&&(t=r,n=Uu(e,r))}if(n===1)throw n=to,Jn(e,0),yn(e,t),lt(e,_e()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,it,Wt),lt(e,_e()),null}function gf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Wr=_e()+500,xs&&Un())}}function or(e){wn!==null&&wn.tag===0&&(Z&6)===0&&Fr();var t=Z;Z|=1;var n=kt.transition,r=le;try{if(kt.transition=null,le=1,e)return e()}finally{le=r,kt.transition=n,Z=t,(Z&6)===0&&Un()}}function yf(){ct=$r.current,me($r)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,z1(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ma();break;case 3:Br(),me(at),me(Je),sf();break;case 5:af(r);break;case 4:Br();break;case 13:me(xe);break;case 19:me(xe);break;case 10:tf(r.type._context);break;case 22:case 23:yf()}n=n.return}if(ze=e,Ae=e=An(e.current,null),Qe=ct=t,Ie=0,to=null,mf=Ss=ir=0,it=Ti=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gn=null}return e}function Qv(e,t){do{var n=Ae;try{if(ef(),ca.current=Wa,Ha){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ha=!1}if(rr=0,Le=Te=we=null,Ai=!1,Ji=0,hf.current=null,n===null||n.return===null){Ie=1,to=t,Ae=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Qe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=op(a);if(h!==null){h.flags&=-257,ap(h,a,s,o,t),h.mode&1&&ip(o,u,t),t=h,l=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if((t&1)===0){ip(o,u,t),xf();break e}l=Error(R(426))}}else if(ge&&s.mode&1){var S=op(a);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),ap(S,a,s,o,t),Jc(Hr(l,s));break e}}o=l=Hr(l,s),Ie!==4&&(Ie=2),Ti===null?Ti=[o]:Ti.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ov(o,l,t);Xd(o,v);break e;case 1:s=l;var d=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_n===null||!_n.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=_v(o,s,t);Xd(o,b);break e}}o=o.return}while(o!==null)}Kv(n)}catch(k){t=k,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Vv(){var e=Qa.current;return Qa.current=Wa,e===null?Wa:e}function xf(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),ze===null||(ir&268435455)===0&&(Ss&268435455)===0||yn(ze,Qe)}function Ka(e,t){var n=Z;Z|=2;var r=Vv();(ze!==e||Qe!==t)&&(Wt=null,Jn(e,t));do try{cx();break}catch(i){Qv(e,i)}while(1);if(ef(),Z=n,Qa.current=r,Ae!==null)throw Error(R(261));return ze=null,Qe=0,Ie}function cx(){for(;Ae!==null;)Gv(Ae)}function fx(){for(;Ae!==null&&!Fy();)Gv(Ae)}function Gv(e){var t=qv(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Kv(e):Ae=t,hf.current=null}function Kv(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=rx(n,t,ct),n!==null){Ae=n;return}}else{if(n=ix(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ie===0&&(Ie=5)}function Hn(e,t,n){var r=le,i=kt.transition;try{kt.transition=null,le=1,dx(e,t,n,r)}finally{kt.transition=i,le=r}return null}function dx(e,t,n,r){do Fr();while(wn!==null);if((Z&6)!==0)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vy(e,o),e===ze&&(Ae=ze=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Bo||(Bo=!0,Xv(_a,function(){return Fr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=kt.transition,kt.transition=null;var a=le;le=1;var s=Z;Z|=4,hf.current=null,ax(e,n),Bv(n,e),N1(xu),Aa=!!yu,xu=yu=null,e.current=n,sx(n),Ly(),Z=s,le=a,kt.transition=o}else e.current=n;if(Bo&&(Bo=!1,wn=e,Ga=i),o=e.pendingLanes,o===0&&(_n=null),jy(n.stateNode),lt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Va)throw Va=!1,e=zu,zu=null,e;return(Ga&1)!==0&&e.tag!==0&&Fr(),o=e.pendingLanes,(o&1)!==0?e===ju?Ii++:(Ii=0,ju=e):Ii=0,Un(),null}function Fr(){if(wn!==null){var e=Pm(Ga),t=kt.transition,n=le;try{if(kt.transition=null,le=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Ga=0,(Z&6)!==0)throw Error(R(331));var i=Z;for(Z|=4,U=e.current;U!==null;){var o=U,a=o.child;if((U.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Ni(8,c,o)}var f=c.child;if(f!==null)f.return=c,U=f;else for(;U!==null;){c=U;var p=c.sibling,h=c.return;if(zv(c),c===u){U=null;break}if(p!==null){p.return=h,U=p;break}U=h}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}U=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,U=v;break e}U=o.return}}var d=e.current;for(U=d;U!==null;){a=U;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,U=m;else e:for(a=d;U!==null;){if(s=U,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ks(9,s)}}catch(k){Ce(s,s.return,k)}if(s===a){U=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,U=b;break e}U=s.return}}if(Z=i,Un(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(hs,e)}catch{}r=!0}return r}finally{le=n,kt.transition=t}}return!1}function xp(e,t,n){t=Hr(n,t),t=Ov(e,t,1),e=On(e,t,1),t=et(),e!==null&&(po(e,1,t),lt(e,t))}function Ce(e,t,n){if(e.tag===3)xp(e,e,n);else for(;t!==null;){if(t.tag===3){xp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=Hr(n,e),e=_v(t,e,1),t=On(t,e,1),e=et(),t!==null&&(po(t,1,e),lt(t,e));break}}t=t.return}}function px(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Qe&n)===n&&(Ie===4||Ie===3&&(Qe&130023424)===Qe&&500>_e()-vf?Jn(e,0):mf|=n),lt(e,t)}function Yv(e,t){t===0&&((e.mode&1)===0?t=1:(t=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=et();e=Zt(e,t),e!==null&&(po(e,t,n),lt(e,n))}function hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yv(e,n)}function mx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Yv(e,n)}var qv;qv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,nx(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,ge&&(t.flags&1048576)!==0&&Zm(t,Da,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;da(e,t),e=t.pendingProps;var i=zr(t,Je.current);Mr(t,n),i=uf(null,t,r,e,i,n);var o=cf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(o=!0,Fa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rf(t),i.updater=ws,t.stateNode=i,i._reactInternals=t,Ou(t,r,e,n),t=Au(null,t,r,!0,o,n)):(t.tag=0,ge&&o&&qc(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(da(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gx(r),e=_t(r,e),i){case 0:t=Ru(null,t,r,e,n);break e;case 1:t=up(null,t,r,e,n);break e;case 11:t=sp(null,t,r,e,n);break e;case 14:t=lp(null,t,r,_t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Ru(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),up(e,t,r,i,n);case 3:e:{if(Tv(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,rv(e,t),Ua(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Hr(Error(R(423)),t),t=cp(e,t,r,n,i);break e}else if(r!==i){i=Hr(Error(R(424)),t),t=cp(e,t,r,n,i);break e}else for(ft=Pn(t.stateNode.containerInfo.firstChild),dt=t,ge=!0,At=null,n=sv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=en(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return lv(t),e===null&&Eu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,wu(r,i)?a=null:o!==null&&wu(r,o)&&(t.flags|=32),Nv(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&Eu(t),null;case 13:return Iv(e,t,n);case 4:return of(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ur(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),sp(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,fe(za,r._currentValue),r._currentValue=a,o!==null)if(Ft(o.value,a)){if(o.children===i.children&&!at.current){t=en(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$u(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(R(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),$u(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=Ct(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=_t(r,t.pendingProps),i=_t(r.type,i),lp(e,t,r,i,n);case 15:return Rv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),da(e,t),t.tag=1,st(r)?(e=!0,Fa(t)):e=!1,Mr(t,n),ov(t,r,i),Ou(t,r,i,n),Au(null,t,r,!0,e,n);case 19:return Mv(e,t,n);case 22:return Av(e,t,n)}throw Error(R(156,t.tag))};function Xv(e,t){return Sm(e,t)}function vx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new vx(e,t,n,r)}function wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gx(e){if(typeof e=="function")return wf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dc)return 11;if(e===zc)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ma(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")wf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vr:return Zn(n.children,i,o,t);case Lc:a=8,i|=8;break;case Jl:return e=bt(12,n,t,i|2),e.elementType=Jl,e.lanes=o,e;case Zl:return e=bt(13,n,t,i),e.elementType=Zl,e.lanes=o,e;case eu:return e=bt(19,n,t,i),e.elementType=eu,e.lanes=o,e;case am:return Cs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case im:a=10;break e;case om:a=9;break e;case Dc:a=11;break e;case zc:a=14;break e;case hn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zn(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function Cs(e,t,n,r){return e=bt(22,e,r,t),e.elementType=am,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Ll(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bf(e,t,n,r,i,o,a,s,l){return e=new yx(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(o),e}function xx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jv(e){if(!e)return Mn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(st(n))return Xm(e,n,t)}return t}function Zv(e,t,n,r,i,o,a,s,l){return e=bf(n,r,!0,e,i,o,a,s,l),e.context=Jv(null),n=e.current,r=et(),i=Rn(n),o=Yt(r,i),o.callback=t!=null?t:null,On(n,o,i),e.current.lanes=i,po(e,i,r),lt(e,r),e}function Es(e,t,n,r){var i=t.current,o=et(),a=Rn(i);return n=Jv(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=On(i,t,a),e!==null&&(Mt(e,i,a,o),ua(e,i,a)),a}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kf(e,t){wp(e,t),(e=e.alternate)&&wp(e,t)}function wx(){return null}var e0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sf(e){this._internalRoot=e}$s.prototype.render=Sf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Es(e,t,null,null)};$s.prototype.unmount=Sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Es(null,e,null,null)}),t[Jt]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&Nm(e)}};function Cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bp(){}function bx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ya(a);o.call(u)}}var a=Zv(t,r,e,0,null,!1,!1,"",bp);return e._reactRootContainer=a,e[Jt]=a.current,Gi(e.nodeType===8?e.parentNode:e),or(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ya(l);s.call(u)}}var l=bf(e,0,!1,null,null,!1,!1,"",bp);return e._reactRootContainer=l,e[Jt]=l.current,Gi(e.nodeType===8?e.parentNode:e),or(function(){Es(t,l,n,r)}),l}function Os(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ya(a);s.call(l)}}Es(t,a,e,i)}else a=bx(n,t,e,i,r);return Ya(a)}Om=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bi(t.pendingLanes);n!==0&&(Bc(t,n|1),lt(t,_e()),(Z&6)===0&&(Wr=_e()+500,Un()))}break;case 13:or(function(){var r=Zt(e,1);if(r!==null){var i=et();Mt(r,e,1,i)}}),kf(e,1)}};Hc=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=et();Mt(t,e,134217728,n)}kf(e,134217728)}};_m=function(e){if(e.tag===13){var t=Rn(e),n=Zt(e,t);if(n!==null){var r=et();Mt(n,e,t,r)}kf(e,t)}};Rm=function(){return le};Am=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};cu=function(e,t,n){switch(t){case"input":if(ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ys(r);if(!i)throw Error(R(90));lm(r),ru(r,i)}}}break;case"textarea":cm(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};gm=gf;ym=or;var kx={usingClientEntryPoint:!1,Events:[mo,wr,ys,mm,vm,gf]},hi={findFiberByHostInstance:Vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sx={bundleType:hi.bundleType,version:hi.version,rendererPackageName:hi.rendererPackageName,rendererConfig:hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bm(e),e===null?null:e.stateNode},findFiberByHostInstance:hi.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{hs=Ho.inject(Sx),Bt=Ho}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(t))throw Error(R(200));return xx(e,t,null,n)};ht.createRoot=function(e,t){if(!Cf(e))throw Error(R(299));var n=!1,r="",i=e0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bf(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,Gi(e.nodeType===8?e.parentNode:e),new Sf(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=bm(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return or(e)};ht.hydrate=function(e,t,n){if(!Ps(t))throw Error(R(200));return Os(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Cf(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=e0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Zv(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Jt]=t.current,Gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $s(t)};ht.render=function(e,t,n){if(!Ps(t))throw Error(R(200));return Os(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(R(40));return e._reactRootContainer?(or(function(){Os(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ht.unstable_batchedUpdates=gf;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Os(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ht})(fo);const Cx=Vh(fo.exports);var kp=fo.exports;ql.createRoot=kp.createRoot,ql.hydrateRoot=kp.hydrateRoot;function Hu(e,t){return Hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Hu(e,t)}function go(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Hu(e,t)}var yo=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,o=r||function(){};return this.listeners.push(o),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(a){return a!==o}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}();function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}var qa=typeof window>"u";function qe(){}function Ex(e,t){return typeof e=="function"?e(t):e}function Wu(e){return typeof e=="number"&&e>=0&&e!==1/0}function Xa(e){return Array.isArray(e)?e:[e]}function t0(e,t){return Math.max(e+(t||0)-Date.now(),0)}function va(e,t,n){return _s(e)?typeof t=="function"?Q({},n,{queryKey:e,queryFn:t}):Q({},t,{queryKey:e}):e}function vn(e,t,n){return _s(e)?[Q({},t,{queryKey:e}),n]:[e||{},t]}function $x(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e!=null?e:!t;return n?"active":"inactive"}function Sp(e,t){var n=e.active,r=e.exact,i=e.fetching,o=e.inactive,a=e.predicate,s=e.queryKey,l=e.stale;if(_s(s)){if(r){if(t.queryHash!==Ef(s,t.options))return!1}else if(!Ja(t.queryKey,s))return!1}var u=$x(n,o);if(u==="none")return!1;if(u!=="all"){var c=t.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i=="boolean"&&t.isFetching()!==i||a&&!a(t))}function Cp(e,t){var n=e.exact,r=e.fetching,i=e.predicate,o=e.mutationKey;if(_s(o)){if(!t.options.mutationKey)return!1;if(n){if(Yn(t.options.mutationKey)!==Yn(o))return!1}else if(!Ja(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Ef(e,t){var n=(t==null?void 0:t.queryKeyHashFn)||Yn;return n(e)}function Yn(e){var t=Xa(e);return Px(t)}function Px(e){return JSON.stringify(e,function(t,n){return Qu(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Ja(e,t){return n0(Xa(e),Xa(t))}function n0(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!n0(e[n],t[n])}):!1}function Za(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||Qu(e)&&Qu(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{},s=0,l=0;l<o;l++){var u=n?l:i[l];a[u]=Za(e[u],t[u]),a[u]===e[u]&&s++}return r===o&&s===r?e:a}return t}function Ox(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function Qu(e){if(!Ep(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Ep(n)||!n.hasOwnProperty("isPrototypeOf"))}function Ep(e){return Object.prototype.toString.call(e)==="[object Object]"}function _s(e){return typeof e=="string"||Array.isArray(e)}function _x(e){return new Promise(function(t){setTimeout(t,e)})}function $p(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function r0(){if(typeof AbortController=="function")return new AbortController}var Rx=function(e){go(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!qa&&((o=window)==null?void 0:o.addEventListener)){var a=function(){return i()};return window.addEventListener("visibilitychange",a,!1),window.addEventListener("focus",a,!1),function(){window.removeEventListener("visibilitychange",a),window.removeEventListener("focus",a)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,a=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(s){typeof s=="boolean"?a.setFocused(s):a.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(yo),Mi=new Rx,Ax=function(e){go(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!qa&&((o=window)==null?void 0:o.addEventListener)){var a=function(){return i()};return window.addEventListener("online",a,!1),window.addEventListener("offline",a,!1),function(){window.removeEventListener("online",a),window.removeEventListener("offline",a)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,a=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(s){typeof s=="boolean"?a.setOnline(s):a.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(yo),ga=new Ax;function Nx(e){return Math.min(1e3*Math.pow(2,e),3e4)}function es(e){return typeof(e==null?void 0:e.cancel)=="function"}var i0=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function ya(e){return e instanceof i0}var o0=function(t){var n=this,r=!1,i,o,a,s;this.abort=t.abort,this.cancel=function(p){return i==null?void 0:i(p)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return o==null?void 0:o()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,h){a=p,s=h});var l=function(h){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(h),o==null||o(),a(h))},u=function(h){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(h),o==null||o(),s(h))},c=function(){return new Promise(function(h){o=h,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){o=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},f=function p(){if(!n.isResolved){var h;try{h=t.fn()}catch(g){h=Promise.reject(g)}i=function(y){if(!n.isResolved&&(u(new i0(y)),n.abort==null||n.abort(),es(h)))try{h.cancel()}catch{}},n.isTransportCancelable=es(h),Promise.resolve(h).then(l).catch(function(g){var y,S;if(!n.isResolved){var v=(y=t.retry)!=null?y:3,d=(S=t.retryDelay)!=null?S:Nx,m=typeof d=="function"?d(n.failureCount,g):d,b=v===!0||typeof v=="number"&&n.failureCount<v||typeof v=="function"&&v(n.failureCount,g);if(r||!b){u(g);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,g),_x(m).then(function(){if(!Mi.isFocused()||!ga.isOnline())return c()}).then(function(){r?u(g):p()})}})}};f()},Tx=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):$p(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];i.schedule(function(){r.apply(void 0,a)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&$p(function(){r.batchNotifyFn(function(){i.forEach(function(o){r.notifyFn(o)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),Ee=new Tx,a0=console;function ts(){return a0}function Ix(e){a0=e}var Mx=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Q({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Wu(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var o,a,s=this.state.data,l=Ex(r,s);return(o=(a=this.options).isDataEqual)!=null&&o.call(a,s,l)?l=s:this.options.structuralSharing!==!1&&(l=Za(s,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,o=this.promise;return(i=this.retryer)==null||i.cancel(r),o?o.then(qe).catch(qe):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!t0(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var o=this,a,s,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i==null?void 0:i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(d){return d.options.queryFn});c&&this.setOptions(c.options)}var f=Xa(this.queryKey),p=r0(),h={queryKey:f,pageParam:void 0,meta:this.meta};Object.defineProperty(h,"signal",{enumerable:!0,get:function(){if(p)return o.abortSignalConsumed=!0,p.signal}});var g=function(){return o.options.queryFn?(o.abortSignalConsumed=!1,o.options.queryFn(h)):Promise.reject("Missing queryFn")},y={fetchOptions:i,options:this.options,queryKey:f,state:this.state,fetchFn:g,meta:this.meta};if((a=this.options.behavior)!=null&&a.onFetch){var S;(S=this.options.behavior)==null||S.onFetch(y)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((s=y.fetchOptions)==null?void 0:s.meta)){var v;this.dispatch({type:"fetch",meta:(v=y.fetchOptions)==null?void 0:v.meta})}return this.retryer=new o0({fn:y.fetchFn,abort:p==null||(l=p.abort)==null?void 0:l.bind(p),onSuccess:function(m){o.setData(m),o.cache.config.onSuccess==null||o.cache.config.onSuccess(m,o),o.cacheTime===0&&o.optionalRemove()},onError:function(m){ya(m)&&m.silent||o.dispatch({type:"error",error:m}),ya(m)||(o.cache.config.onError==null||o.cache.config.onError(m,o),ts().error(m)),o.cacheTime===0&&o.optionalRemove()},onFail:function(){o.dispatch({type:"failed"})},onPause:function(){o.dispatch({type:"pause"})},onContinue:function(){o.dispatch({type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Ee.batch(function(){i.observers.forEach(function(o){o.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,o=typeof r.initialData<"u",a=o?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,s=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:s?a!=null?a:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:s?"success":"idle"}},t.reducer=function(r,i){var o,a;switch(i.type){case"failed":return Q({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Q({},r,{isPaused:!0});case"continue":return Q({},r,{isPaused:!1});case"fetch":return Q({},r,{fetchFailureCount:0,fetchMeta:(o=i.meta)!=null?o:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Q({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(a=i.dataUpdatedAt)!=null?a:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var s=i.error;return ya(s)&&s.revert&&this.revertState?Q({},this.revertState):Q({},r,{error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Q({},r,{isInvalidated:!0});case"setState":return Q({},r,i.state);default:return r}},e}(),Fx=function(e){go(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,o,a){var s,l=o.queryKey,u=(s=o.queryHash)!=null?s:Ef(l,o),c=this.get(u);return c||(c=new Mx({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(o),state:a,defaultOptions:i.getQueryDefaults(l),meta:o.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var o=this.queriesMap[i.queryHash];o&&(i.destroy(),this.queries=this.queries.filter(function(a){return a!==i}),o===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Ee.batch(function(){i.queries.forEach(function(o){i.remove(o)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,o){var a=vn(i,o),s=a[0];return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(function(l){return Sp(s,l)})},n.findAll=function(i,o){var a=vn(i,o),s=a[0];return Object.keys(s).length>0?this.queries.filter(function(l){return Sp(s,l)}):this.queries},n.notify=function(i){var o=this;Ee.batch(function(){o.listeners.forEach(function(a){a(i)})})},n.onFocus=function(){var i=this;Ee.batch(function(){i.queries.forEach(function(o){o.onFocus()})})},n.onOnline=function(){var i=this;Ee.batch(function(){i.queries.forEach(function(o){o.onOnline()})})},t}(yo),Lx=function(){function e(n){this.options=Q({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||Dx(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(qe).catch(qe)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,o=this.state.status==="loading",a=Promise.resolve();return o||(this.dispatch({type:"loading",variables:this.options.variables}),a=a.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(s){s!==r.state.context&&r.dispatch({type:"loading",context:s,variables:r.state.variables})})),a.then(function(){return r.executeMutation()}).then(function(s){i=s,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(s){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(s,r.state.variables,r.state.context,r),ts().error(s),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(s,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,s,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:s}),s})})},t.executeMutation=function(){var r=this,i;return this.retryer=new o0({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=zx(this.state,r),Ee.batch(function(){i.observers.forEach(function(o){o.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function Dx(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function zx(e,t){switch(t.type){case"failed":return Q({},e,{failureCount:e.failureCount+1});case"pause":return Q({},e,{isPaused:!0});case"continue":return Q({},e,{isPaused:!1});case"loading":return Q({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Q({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Q({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Q({},e,t.state);default:return e}}var jx=function(e){go(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,o,a){var s=new Lx({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(o),state:a,defaultOptions:o.mutationKey?i.getMutationDefaults(o.mutationKey):void 0,meta:o.meta});return this.add(s),s},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(o){return o!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Ee.batch(function(){i.mutations.forEach(function(o){i.remove(o)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(o){return Cp(i,o)})},n.findAll=function(i){return this.mutations.filter(function(o){return Cp(i,o)})},n.notify=function(i){var o=this;Ee.batch(function(){o.listeners.forEach(function(a){a(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(o){return o.state.isPaused});return Ee.batch(function(){return i.reduce(function(o,a){return o.then(function(){return a.continue().catch(qe)})},Promise.resolve())})},t}(yo);function Ux(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,o,a,s,l=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=t.fetchOptions)==null||(o=i.meta)==null?void 0:o.fetchMore,c=u==null?void 0:u.pageParam,f=(u==null?void 0:u.direction)==="forward",p=(u==null?void 0:u.direction)==="backward",h=((a=t.state.data)==null?void 0:a.pages)||[],g=((s=t.state.data)==null?void 0:s.pageParams)||[],y=r0(),S=y==null?void 0:y.signal,v=g,d=!1,m=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},b=function(ke,ye,Re,Pe){return v=Pe?[ye].concat(v):[].concat(v,[ye]),Pe?[Re].concat(ke):[].concat(ke,[Re])},k=function(ke,ye,Re,Pe){if(d)return Promise.reject("Cancelled");if(typeof Re>"u"&&!ye&&ke.length)return Promise.resolve(ke);var A={queryKey:t.queryKey,signal:S,pageParam:Re,meta:t.meta},H=m(A),W=Promise.resolve(H).then(function(I){return b(ke,Re,I,Pe)});if(es(H)){var re=W;re.cancel=H.cancel}return W},E;if(!h.length)E=k([]);else if(f){var _=typeof c<"u",O=_?c:Pp(t.options,h);E=k(h,_,O)}else if(p){var T=typeof c<"u",L=T?c:Bx(t.options,h);E=k(h,T,L,!0)}else(function(){v=[];var de=typeof t.options.getNextPageParam>"u",ke=l&&h[0]?l(h[0],0,h):!0;E=ke?k([],de,g[0]):Promise.resolve(b([],g[0],h[0]));for(var ye=function(A){E=E.then(function(H){var W=l&&h[A]?l(h[A],A,h):!0;if(W){var re=de?g[A]:Pp(t.options,H);return k(H,de,re)}return Promise.resolve(b(H,g[A],h[A]))})},Re=1;Re<h.length;Re++)ye(Re)})();var ne=E.then(function(de){return{pages:de,pageParams:v}}),ae=ne;return ae.cancel=function(){d=!0,y==null||y.abort(),es(E)&&E.cancel()},ne}}}}function Pp(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function Bx(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var Hx=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new Fx,this.mutationCache=n.mutationCache||new jx,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Mi.subscribe(function(){Mi.isFocused()&&ga.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=ga.subscribe(function(){Mi.isFocused()&&ga.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var o=vn(r,i),a=o[0];return a.fetching=!0,this.queryCache.findAll(a).length},t.isMutating=function(r){return this.mutationCache.findAll(Q({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var o=i.queryKey,a=i.state,s=a.data;return[o,s]})},t.setQueryData=function(r,i,o){var a=va(r),s=this.defaultQueryOptions(a);return this.queryCache.build(this,s).setData(i,o)},t.setQueriesData=function(r,i,o){var a=this;return Ee.batch(function(){return a.getQueryCache().findAll(r).map(function(s){var l=s.queryKey;return[l,a.setQueryData(l,i,o)]})})},t.getQueryState=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state},t.removeQueries=function(r,i){var o=vn(r,i),a=o[0],s=this.queryCache;Ee.batch(function(){s.findAll(a).forEach(function(l){s.remove(l)})})},t.resetQueries=function(r,i,o){var a=this,s=vn(r,i,o),l=s[0],u=s[1],c=this.queryCache,f=Q({},l,{active:!0});return Ee.batch(function(){return c.findAll(l).forEach(function(p){p.reset()}),a.refetchQueries(f,u)})},t.cancelQueries=function(r,i,o){var a=this,s=vn(r,i,o),l=s[0],u=s[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var f=Ee.batch(function(){return a.queryCache.findAll(l).map(function(p){return p.cancel(c)})});return Promise.all(f).then(qe).catch(qe)},t.invalidateQueries=function(r,i,o){var a,s,l,u=this,c=vn(r,i,o),f=c[0],p=c[1],h=Q({},f,{active:(a=(s=f.refetchActive)!=null?s:f.active)!=null?a:!0,inactive:(l=f.refetchInactive)!=null?l:!1});return Ee.batch(function(){return u.queryCache.findAll(f).forEach(function(g){g.invalidate()}),u.refetchQueries(h,p)})},t.refetchQueries=function(r,i,o){var a=this,s=vn(r,i,o),l=s[0],u=s[1],c=Ee.batch(function(){return a.queryCache.findAll(l).map(function(p){return p.fetch(void 0,Q({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),f=Promise.all(c).then(qe);return u!=null&&u.throwOnError||(f=f.catch(qe)),f},t.fetchQuery=function(r,i,o){var a=va(r,i,o),s=this.defaultQueryOptions(a);typeof s.retry>"u"&&(s.retry=!1);var l=this.queryCache.build(this,s);return l.isStaleByTime(s.staleTime)?l.fetch(s):Promise.resolve(l.state.data)},t.prefetchQuery=function(r,i,o){return this.fetchQuery(r,i,o).then(qe).catch(qe)},t.fetchInfiniteQuery=function(r,i,o){var a=va(r,i,o);return a.behavior=Ux(),this.fetchQuery(a)},t.prefetchInfiniteQuery=function(r,i,o){return this.fetchInfiniteQuery(r,i,o).then(qe).catch(qe)},t.cancelMutations=function(){var r=this,i=Ee.batch(function(){return r.mutationCache.getAll().map(function(o){return o.cancel()})});return Promise.all(i).then(qe).catch(qe)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var o=this.queryDefaults.find(function(a){return Yn(r)===Yn(a.queryKey)});o?o.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(o){return Ja(r,o.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var o=this.mutationDefaults.find(function(a){return Yn(r)===Yn(a.mutationKey)});o?o.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(o){return Ja(r,o.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=Q({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Ef(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:Q({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),Wx=function(e){go(t,e);function t(r,i){var o;return o=e.call(this)||this,o.client=r,o.options=i,o.trackedProps=[],o.selectError=null,o.bindMethods(),o.setOptions(i),o}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Op(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Vu(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Vu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,o){var a=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var l=this.hasListeners();l&&_p(this.currentQuery,s,this.options,a)&&this.executeFetch(),this.updateResult(o),l&&(this.currentQuery!==s||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==s||this.options.enabled!==a.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},n.getOptimisticResult=function(i){var o=this.client.defaultQueryObserverOptions(i),a=this.client.getQueryCache().build(this.client,o);return this.createResult(a,o)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,o){var a=this,s={},l=function(c){a.trackedProps.includes(c)||a.trackedProps.push(c)};return Object.keys(i).forEach(function(u){Object.defineProperty(s,u,{configurable:!1,enumerable:!0,get:function(){return l(u),i[u]}})}),(o.useErrorBoundary||o.suspense)&&l("error"),s},n.getNextResult=function(i){var o=this;return new Promise(function(a,s){var l=o.subscribe(function(u){u.isFetching||(l(),u.isError&&(i==null?void 0:i.throwOnError)?s(u.error):a(u))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Q({},i,{meta:{refetchPage:i==null?void 0:i.refetchPage}}))},n.fetchOptimistic=function(i){var o=this,a=this.client.defaultQueryObserverOptions(i),s=this.client.getQueryCache().build(this.client,a);return s.fetch().then(function(){return o.createResult(s,a)})},n.fetch=function(i){var o=this;return this.executeFetch(i).then(function(){return o.updateResult(),o.currentResult})},n.executeFetch=function(i){this.updateQuery();var o=this.currentQuery.fetch(this.options,i);return i!=null&&i.throwOnError||(o=o.catch(qe)),o},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(qa||this.currentResult.isStale||!Wu(this.options.staleTime))){var o=t0(this.currentResult.dataUpdatedAt,this.options.staleTime),a=o+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},a)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var o=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(qa||this.options.enabled===!1||!Wu(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(o.options.refetchIntervalInBackground||Mi.isFocused())&&o.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,o){var a=this.currentQuery,s=this.options,l=this.currentResult,u=this.currentResultState,c=this.currentResultOptions,f=i!==a,p=f?i.state:this.currentQueryInitialState,h=f?this.currentResult:this.previousQueryResult,g=i.state,y=g.dataUpdatedAt,S=g.error,v=g.errorUpdatedAt,d=g.isFetching,m=g.status,b=!1,k=!1,E;if(o.optimisticResults){var _=this.hasListeners(),O=!_&&Op(i,o),T=_&&_p(i,a,o,s);(O||T)&&(d=!0,y||(m="loading"))}if(o.keepPreviousData&&!g.dataUpdateCount&&(h==null?void 0:h.isSuccess)&&m!=="error")E=h.data,y=h.dataUpdatedAt,m=h.status,b=!0;else if(o.select&&typeof g.data<"u")if(l&&g.data===(u==null?void 0:u.data)&&o.select===this.selectFn)E=this.selectResult;else try{this.selectFn=o.select,E=o.select(g.data),o.structuralSharing!==!1&&(E=Za(l==null?void 0:l.data,E)),this.selectResult=E,this.selectError=null}catch(ae){ts().error(ae),this.selectError=ae}else E=g.data;if(typeof o.placeholderData<"u"&&typeof E>"u"&&(m==="loading"||m==="idle")){var L;if((l==null?void 0:l.isPlaceholderData)&&o.placeholderData===(c==null?void 0:c.placeholderData))L=l.data;else if(L=typeof o.placeholderData=="function"?o.placeholderData():o.placeholderData,o.select&&typeof L<"u")try{L=o.select(L),o.structuralSharing!==!1&&(L=Za(l==null?void 0:l.data,L)),this.selectError=null}catch(ae){ts().error(ae),this.selectError=ae}typeof L<"u"&&(m="success",E=L,k=!0)}this.selectError&&(S=this.selectError,E=this.selectResult,v=Date.now(),m="error");var ne={status:m,isLoading:m==="loading",isSuccess:m==="success",isError:m==="error",isIdle:m==="idle",data:E,dataUpdatedAt:y,error:S,errorUpdatedAt:v,failureCount:g.fetchFailureCount,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>p.dataUpdateCount||g.errorUpdateCount>p.errorUpdateCount,isFetching:d,isRefetching:d&&m!=="loading",isLoadingError:m==="error"&&g.dataUpdatedAt===0,isPlaceholderData:k,isPreviousData:b,isRefetchError:m==="error"&&g.dataUpdatedAt!==0,isStale:$f(i,o),refetch:this.refetch,remove:this.remove};return ne},n.shouldNotifyListeners=function(i,o){if(!o)return!0;var a=this.options,s=a.notifyOnChangeProps,l=a.notifyOnChangePropsExclusions;if(!s&&!l||s==="tracked"&&!this.trackedProps.length)return!0;var u=s==="tracked"?this.trackedProps:s;return Object.keys(i).some(function(c){var f=c,p=i[f]!==o[f],h=u==null?void 0:u.some(function(y){return y===c}),g=l==null?void 0:l.some(function(y){return y===c});return p&&!g&&(!u||h)})},n.updateResult=function(i){var o=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Ox(this.currentResult,o)){var a={cache:!0};(i==null?void 0:i.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,o)&&(a.listeners=!0),this.notify(Q({},a,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var o=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(o==null||o.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var o={};i.type==="success"?o.onSuccess=!0:i.type==="error"&&!ya(i.error)&&(o.onError=!0),this.updateResult(o),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var o=this;Ee.batch(function(){i.onSuccess?(o.options.onSuccess==null||o.options.onSuccess(o.currentResult.data),o.options.onSettled==null||o.options.onSettled(o.currentResult.data,null)):i.onError&&(o.options.onError==null||o.options.onError(o.currentResult.error),o.options.onSettled==null||o.options.onSettled(void 0,o.currentResult.error)),i.listeners&&o.listeners.forEach(function(a){a(o.currentResult)}),i.cache&&o.client.getQueryCache().notify({query:o.currentQuery,type:"observerResultsUpdated"})})},t}(yo);function Qx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Op(e,t){return Qx(e,t)||e.state.dataUpdatedAt>0&&Vu(e,t,t.refetchOnMount)}function Vu(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&$f(e,t)}return!1}function _p(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&$f(e,n)}function $f(e,t){return e.isStaleByTime(t.staleTime)}var Vx=Cx.unstable_batchedUpdates;Ee.setBatchNotifyFunction(Vx);var Gx=console;Ix(Gx);var Rs={exports:{}},As={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=x.exports,Yx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Xx=Object.prototype.hasOwnProperty,Jx=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zx={key:!0,ref:!0,__self:!0,__source:!0};function s0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Xx.call(t,r)&&!Zx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yx,type:e,key:o,ref:a,props:i,_owner:Jx.current}}As.Fragment=qx;As.jsx=s0;As.jsxs=s0;(function(e){e.exports=As})(Rs);const xo=Rs.exports.Fragment,w=Rs.exports.jsx,N=Rs.exports.jsxs;var Rp=J.createContext(void 0),l0=J.createContext(!1);function u0(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Rp),window.ReactQueryClientContext):Rp}var ew=function(){var t=J.useContext(u0(J.useContext(l0)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},tw=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,o=t.children;J.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var a=u0(i);return w(l0.Provider,{value:i,children:w(a.Provider,{value:n,children:o})})};function nw(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var rw=J.createContext(nw()),iw=function(){return J.useContext(rw)};function ow(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function aw(e,t){var n=J.useRef(!1),r=J.useState(0),i=r[1],o=ew(),a=iw(),s=o.defaultQueryObserverOptions(e);s.optimisticResults=!0,s.onError&&(s.onError=Ee.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=Ee.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=Ee.batchCalls(s.onSettled)),s.suspense&&(typeof s.staleTime!="number"&&(s.staleTime=1e3),s.cacheTime===0&&(s.cacheTime=1)),(s.suspense||s.useErrorBoundary)&&(a.isReset()||(s.retryOnMount=!1));var l=J.useState(function(){return new t(o,s)}),u=l[0],c=u.getOptimisticResult(s);if(J.useEffect(function(){n.current=!0,a.clearReset();var f=u.subscribe(Ee.batchCalls(function(){n.current&&i(function(p){return p+1})}));return u.updateResult(),function(){n.current=!1,f()}},[a,u]),J.useEffect(function(){u.setOptions(s,{listeners:!1})},[s,u]),s.suspense&&c.isLoading)throw u.fetchOptimistic(s).then(function(f){var p=f.data;s.onSuccess==null||s.onSuccess(p),s.onSettled==null||s.onSettled(p,null)}).catch(function(f){a.clearReset(),s.onError==null||s.onError(f),s.onSettled==null||s.onSettled(void 0,f)});if(c.isError&&!a.isReset()&&!c.isFetching&&ow(s.suspense,s.useErrorBoundary,[c.error,u.getCurrentQuery()]))throw c.error;return s.notifyOnChangeProps==="tracked"&&(c=u.trackResult(c,s)),c}function c0(e,t,n){var r=va(e,t,n);return aw(r,Wx)}/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ns.apply(this,arguments)}var bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bn||(bn={}));const Ap="popstate";function sw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Gu("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ku(i)}return uw(t,n,null,e)}function lw(){return Math.random().toString(36).substr(2,8)}function Np(e){return{usr:e.state,key:e.key}}function Gu(e,t,n,r){return n===void 0&&(n=null),ns({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zr(t):t,{state:n,key:t&&t.key||r||lw()})}function Ku(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=bn.Pop,l=null;function u(){s=bn.Pop,l&&l({action:s,location:p.location})}function c(h,g){s=bn.Push;let y=Gu(p.location,h,g);n&&n(y,h);let S=Np(y),v=p.createHref(y);try{a.pushState(S,"",v)}catch{i.location.assign(v)}o&&l&&l({action:s,location:y})}function f(h,g){s=bn.Replace;let y=Gu(p.location,h,g);n&&n(y,h);let S=Np(y),v=p.createHref(y);a.replaceState(S,"",v),o&&l&&l({action:s,location:y})}let p={get action(){return s},get location(){return e(i,a)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ap,u),l=h,()=>{i.removeEventListener(Ap,u),l=null}},createHref(h){return t(i,h)},push:c,replace:f,go(h){return a.go(h)}};return p}var Tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tp||(Tp={}));function cw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zr(t):t,i=d0(r.pathname||"/",n);if(i==null)return null;let o=f0(e);fw(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=ww(o[s],i);return a}function f0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(Me(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=Nn([r,a.relativePath]),l=n.concat(a);i.children&&i.children.length>0&&(Me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),f0(i.children,t,l,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:yw(s,i.index),routesMeta:l})}),t}function fw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dw=/^:\w+$/,pw=3,hw=2,mw=1,vw=10,gw=-2,Ip=e=>e==="*";function yw(e,t){let n=e.split("/"),r=n.length;return n.some(Ip)&&(r+=gw),t&&(r+=hw),n.filter(i=>!Ip(i)).reduce((i,o)=>i+(dw.test(o)?pw:o===""?mw:vw),r)}function xw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ww(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Pf({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:Nn([i,c.pathname]),pathnameBase:Ew(Nn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Nn([i,c.pathnameBase]))}return o}function Pf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=s[f]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=kw(s[f]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function bw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),p0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function kw(e,t){try{return decodeURIComponent(e)}catch(n){return p0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function d0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function p0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zr(e):e;return{pathname:n?n.startsWith("/")?n:Cw(n,t):t,search:$w(r),hash:Pw(i)}}function Cw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zr(e):(i=ns({},e),Me(!i.pathname||!i.pathname.includes("?"),Dl("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Dl("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Dl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=Sw(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),Ew=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$w=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ow{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function _w(e){return e instanceof Ow}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yu(){return Yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yu.apply(this,arguments)}function Rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Aw=typeof Object.is=="function"?Object.is:Rw,{useState:Nw,useEffect:Tw,useLayoutEffect:Iw,useDebugValue:Mw}=Ea;function Fw(e,t,n){const r=t(),[{inst:i},o]=Nw({inst:{value:r,getSnapshot:t}});return Iw(()=>{i.value=r,i.getSnapshot=t,zl(i)&&o({inst:i})},[e,r,t]),Tw(()=>(zl(i)&&o({inst:i}),e(()=>{zl(i)&&o({inst:i})})),[e]),Mw(r),r}function zl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Aw(n,r)}catch{return!0}}function Lw(e,t,n){return t()}const Dw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zw=!Dw,jw=zw?Lw:Fw;"useSyncExternalStore"in Ea&&(e=>e.useSyncExternalStore)(Ea);const Uw=x.exports.createContext(null),Bw=x.exports.createContext(null),Of=x.exports.createContext(null),_f=x.exports.createContext(null),Ns=x.exports.createContext(null),ei=x.exports.createContext({outlet:null,matches:[]}),m0=x.exports.createContext(null);function Hw(e,t){let{relative:n}=t===void 0?{}:t;ti()||Me(!1);let{basename:r,navigator:i}=x.exports.useContext(_f),{hash:o,pathname:a,search:s}=rs(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Nn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function ti(){return x.exports.useContext(Ns)!=null}function dr(){return ti()||Me(!1),x.exports.useContext(Ns).location}function Ww(e){ti()||Me(!1);let{pathname:t}=dr();return x.exports.useMemo(()=>Pf(e,t),[t,e])}function v0(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function Qw(){ti()||Me(!1);let{basename:e,navigator:t}=x.exports.useContext(_f),{matches:n}=x.exports.useContext(ei),{pathname:r}=dr(),i=JSON.stringify(v0(n).map(s=>s.pathnameBase)),o=x.exports.useRef(!1);return x.exports.useEffect(()=>{o.current=!0}),x.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=h0(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Nn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Rf(){let{matches:e}=x.exports.useContext(ei),t=e[e.length-1];return t?t.params:{}}function rs(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.exports.useContext(ei),{pathname:i}=dr(),o=JSON.stringify(v0(r).map(a=>a.pathnameBase));return x.exports.useMemo(()=>h0(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Vw(e,t){ti()||Me(!1);let n=x.exports.useContext(Of),{matches:r}=x.exports.useContext(ei),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=dr(),l;if(t){var u;let g=typeof t=="string"?Zr(t):t;a==="/"||((u=g.pathname)==null?void 0:u.startsWith(a))||Me(!1),l=g}else l=s;let c=l.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",p=cw(e,{pathname:f}),h=qw(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Nn([a,g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Nn([a,g.pathnameBase])})),r,n||void 0);return t?w(Ns.Provider,{value:{location:Yu({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:bn.Pop},children:h}):h}function Gw(){let e=Jw(),t=_w(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return N(xo,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:t}),n?w("pre",{style:i,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),N("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:o,children:"errorElement"})," props on\xA0",w("code",{style:o,children:"<Route>"})]})]})}class Kw extends x.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w(m0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Yw(e){let{routeContext:t,match:n,children:r}=e,i=x.exports.useContext(Uw);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),w(ei.Provider,{value:t,children:r})}function qw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Me(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||w(Gw,{}):null,c=()=>w(Yw,{match:a,routeContext:{outlet:o,matches:t.concat(r.slice(0,s+1))},children:l?u:a.route.element!==void 0?a.route.element:o});return n&&(a.route.errorElement||s===0)?w(Kw,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Mp;(function(e){e.UseRevalidator="useRevalidator"})(Mp||(Mp={}));var qu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(qu||(qu={}));function Xw(e){let t=x.exports.useContext(Of);return t||Me(!1),t}function Jw(){var e;let t=x.exports.useContext(m0),n=Xw(qu.UseRouteError),r=x.exports.useContext(ei),i=r.matches[r.matches.length-1];return t||(r||Me(!1),i.route.id||Me(!1),(e=n.errors)==null?void 0:e[i.route.id])}function Wn(e){Me(!1)}function Zw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:o,static:a=!1}=e;ti()&&Me(!1);let s=t.replace(/^\/*/,"/"),l=x.exports.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Zr(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:h="default"}=r,g=x.exports.useMemo(()=>{let y=d0(u,s);return y==null?null:{pathname:y,search:c,hash:f,state:p,key:h}},[s,u,c,f,p,h]);return g==null?null:w(_f.Provider,{value:l,children:w(Ns.Provider,{children:n,value:{location:g,navigationType:i}})})}function e2(e){let{children:t,location:n}=e,r=x.exports.useContext(Bw),i=r&&!t?r.router.routes:Xu(t);return Vw(i,n)}var Fp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fp||(Fp={}));new Promise(()=>{});function Xu(e,t){t===void 0&&(t=[]);let n=[];return x.exports.Children.forEach(e,(r,i)=>{if(!x.exports.isValidElement(r))return;if(r.type===x.exports.Fragment){n.push.apply(n,Xu(r.props.children,t));return}r.type!==Wn&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Xu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function g0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function t2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n2(e,t){return e.button===0&&(!t||t==="_self")&&!t2(e)}const r2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],i2=["aria-current","caseSensitive","className","end","style","to","children"];function o2(e){let{basename:t,children:n,window:r}=e,i=x.exports.useRef();i.current==null&&(i.current=sw({window:r,v5Compat:!0}));let o=i.current,[a,s]=x.exports.useState({action:o.action,location:o.location});return x.exports.useLayoutEffect(()=>o.listen(s),[o]),w(Zw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const kn=x.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=g0(t,r2),p=Hw(u,{relative:i}),h=a2(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function g(y){r&&r(y),y.defaultPrevented||h(y)}return w("a",{...f,href:p,onClick:o?r:g,ref:n,target:l})}),Vt=x.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=t,c=g0(t,i2),f=rs(l),p=Ww({path:f.pathname,end:a,caseSensitive:i}),h=x.exports.useContext(Of),g=h==null?void 0:h.navigation.location,y=rs(g||""),v=x.exports.useMemo(()=>g?Pf({path:f.pathname,end:a,caseSensitive:i},y.pathname):null,[g,f.pathname,i,a,y.pathname])!=null,d=p!=null,m=d?r:void 0,b;typeof o=="function"?b=o({isActive:d,isPending:v}):b=[o,d?"active":null,v?"pending":null].filter(Boolean).join(" ");let k=typeof s=="function"?s({isActive:d,isPending:v}):s;return w(kn,{...c,"aria-current":m,className:b,ref:n,style:k,to:l,children:typeof u=="function"?u({isActive:d,isPending:v}):u})});var Lp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Lp||(Lp={}));var Dp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dp||(Dp={}));function a2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=Qw(),l=dr(),u=rs(e,{relative:a});return x.exports.useCallback(c=>{if(n2(c,n)){c.preventDefault();let f=r!==void 0?r:Ku(l)===Ku(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}var Af={exports:{}},ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=Symbol.for("react.element"),Tf=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Is=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),Fs=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),s2=Symbol.for("react.server_context"),Ds=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),Bs=Symbol.for("react.lazy"),l2=Symbol.for("react.offscreen"),y0;y0=Symbol.for("react.module.reference");function $t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nf:switch(e=e.type,e){case Ts:case Ms:case Is:case zs:case js:return e;default:switch(e=e&&e.$$typeof,e){case s2:case Ls:case Ds:case Bs:case Us:case Fs:return e;default:return t}}case Tf:return t}}}ue.ContextConsumer=Ls;ue.ContextProvider=Fs;ue.Element=Nf;ue.ForwardRef=Ds;ue.Fragment=Ts;ue.Lazy=Bs;ue.Memo=Us;ue.Portal=Tf;ue.Profiler=Ms;ue.StrictMode=Is;ue.Suspense=zs;ue.SuspenseList=js;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(e){return $t(e)===Ls};ue.isContextProvider=function(e){return $t(e)===Fs};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nf};ue.isForwardRef=function(e){return $t(e)===Ds};ue.isFragment=function(e){return $t(e)===Ts};ue.isLazy=function(e){return $t(e)===Bs};ue.isMemo=function(e){return $t(e)===Us};ue.isPortal=function(e){return $t(e)===Tf};ue.isProfiler=function(e){return $t(e)===Ms};ue.isStrictMode=function(e){return $t(e)===Is};ue.isSuspense=function(e){return $t(e)===zs};ue.isSuspenseList=function(e){return $t(e)===js};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ts||e===Ms||e===Is||e===zs||e===js||e===l2||typeof e=="object"&&e!==null&&(e.$$typeof===Bs||e.$$typeof===Us||e.$$typeof===Fs||e.$$typeof===Ls||e.$$typeof===Ds||e.$$typeof===y0||e.getModuleId!==void 0)};ue.typeOf=$t;(function(e){e.exports=ue})(Af);function u2(e){function t(I,D,j,V,C){for(var X=0,M=0,Se=0,ie=0,se,K,Ue=0,rt=0,ee,Ge=ee=se=0,oe=0,Be=0,oi=0,He=0,$o=j.length,ai=$o-1,Pt,G="",Oe="",cl="",fl="",cn;oe<$o;){if(K=j.charCodeAt(oe),oe===ai&&M+ie+Se+X!==0&&(M!==0&&(K=M===47?10:47),ie=Se=X=0,$o++,ai++),M+ie+Se+X===0){if(oe===ai&&(0<Be&&(G=G.replace(p,"")),0<G.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:G+=j.charAt(oe)}K=59}switch(K){case 123:for(G=G.trim(),se=G.charCodeAt(0),ee=1,He=++oe;oe<$o;){switch(K=j.charCodeAt(oe)){case 123:ee++;break;case 125:ee--;break;case 47:switch(K=j.charCodeAt(oe+1)){case 42:case 47:e:{for(Ge=oe+1;Ge<ai;++Ge)switch(j.charCodeAt(Ge)){case 47:if(K===42&&j.charCodeAt(Ge-1)===42&&oe+2!==Ge){oe=Ge+1;break e}break;case 10:if(K===47){oe=Ge+1;break e}}oe=Ge}}break;case 91:K++;case 40:K++;case 34:case 39:for(;oe++<ai&&j.charCodeAt(oe)!==K;);}if(ee===0)break;oe++}switch(ee=j.substring(He,oe),se===0&&(se=(G=G.replace(f,"").trim()).charCodeAt(0)),se){case 64:switch(0<Be&&(G=G.replace(p,"")),K=G.charCodeAt(1),K){case 100:case 109:case 115:case 45:Be=D;break;default:Be=Re}if(ee=t(D,Be,ee,K,C+1),He=ee.length,0<A&&(Be=n(Re,G,oi),cn=s(3,ee,Be,D,de,ae,He,K,C,V),G=Be.join(""),cn!==void 0&&(He=(ee=cn.trim()).length)===0&&(K=0,ee="")),0<He)switch(K){case 115:G=G.replace(E,a);case 100:case 109:case 45:ee=G+"{"+ee+"}";break;case 107:G=G.replace(d,"$1 $2"),ee=G+"{"+ee+"}",ee=ye===1||ye===2&&o("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=G+ee,V===112&&(ee=(Oe+=ee,""))}else ee="";break;default:ee=t(D,n(D,G,oi),ee,V,C+1)}cl+=ee,ee=oi=Be=Ge=se=0,G="",K=j.charCodeAt(++oe);break;case 125:case 59:if(G=(0<Be?G.replace(p,""):G).trim(),1<(He=G.length))switch(Ge===0&&(se=G.charCodeAt(0),se===45||96<se&&123>se)&&(He=(G=G.replace(" ",":")).length),0<A&&(cn=s(1,G,D,I,de,ae,Oe.length,V,C,V))!==void 0&&(He=(G=cn.trim()).length)===0&&(G="\0\0"),se=G.charCodeAt(0),K=G.charCodeAt(1),se){case 0:break;case 64:if(K===105||K===99){fl+=G+j.charAt(oe);break}default:G.charCodeAt(He-1)!==58&&(Oe+=i(G,se,K,G.charCodeAt(2)))}oi=Be=Ge=se=0,G="",K=j.charCodeAt(++oe)}}switch(K){case 13:case 10:M===47?M=0:1+se===0&&V!==107&&0<G.length&&(Be=1,G+="\0"),0<A*W&&s(0,G,D,I,de,ae,Oe.length,V,C,V),ae=1,de++;break;case 59:case 125:if(M+ie+Se+X===0){ae++;break}default:switch(ae++,Pt=j.charAt(oe),K){case 9:case 32:if(ie+X+M===0)switch(Ue){case 44:case 58:case 9:case 32:Pt="";break;default:K!==32&&(Pt=" ")}break;case 0:Pt="\\0";break;case 12:Pt="\\f";break;case 11:Pt="\\v";break;case 38:ie+M+X===0&&(Be=oi=1,Pt="\f"+Pt);break;case 108:if(ie+M+X+ke===0&&0<Ge)switch(oe-Ge){case 2:Ue===112&&j.charCodeAt(oe-3)===58&&(ke=Ue);case 8:rt===111&&(ke=rt)}break;case 58:ie+M+X===0&&(Ge=oe);break;case 44:M+Se+ie+X===0&&(Be=1,Pt+="\r");break;case 34:case 39:M===0&&(ie=ie===K?0:ie===0?K:ie);break;case 91:ie+M+Se===0&&X++;break;case 93:ie+M+Se===0&&X--;break;case 41:ie+M+X===0&&Se--;break;case 40:if(ie+M+X===0){if(se===0)switch(2*Ue+3*rt){case 533:break;default:se=1}Se++}break;case 64:M+Se+ie+X+Ge+ee===0&&(ee=1);break;case 42:case 47:if(!(0<ie+X+Se))switch(M){case 0:switch(2*K+3*j.charCodeAt(oe+1)){case 235:M=47;break;case 220:He=oe,M=42}break;case 42:K===47&&Ue===42&&He+2!==oe&&(j.charCodeAt(He+2)===33&&(Oe+=j.substring(He,oe+1)),Pt="",M=0)}}M===0&&(G+=Pt)}rt=Ue,Ue=K,oe++}if(He=Oe.length,0<He){if(Be=D,0<A&&(cn=s(2,Oe,Be,I,de,ae,He,V,C,V),cn!==void 0&&(Oe=cn).length===0))return fl+Oe+cl;if(Oe=Be.join(",")+"{"+Oe+"}",ye*ke!==0){switch(ye!==2||o(Oe,2)||(ke=0),ke){case 111:Oe=Oe.replace(b,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(m,"::-webkit-input-$1")+Oe.replace(m,"::-moz-$1")+Oe.replace(m,":-ms-input-$1")+Oe}ke=0}}return fl+Oe+cl}function n(I,D,j){var V=D.trim().split(S);D=V;var C=V.length,X=I.length;switch(X){case 0:case 1:var M=0;for(I=X===0?"":I[0]+" ";M<C;++M)D[M]=r(I,D[M],j).trim();break;default:var Se=M=0;for(D=[];M<C;++M)for(var ie=0;ie<X;++ie)D[Se++]=r(I[ie]+" ",V[M],j).trim()}return D}function r(I,D,j){var V=D.charCodeAt(0);switch(33>V&&(V=(D=D.trim()).charCodeAt(0)),V){case 38:return D.replace(v,"$1"+I.trim());case 58:return I.trim()+D.replace(v,"$1"+I.trim());default:if(0<1*j&&0<D.indexOf("\f"))return D.replace(v,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+D}function i(I,D,j,V){var C=I+";",X=2*D+3*j+4*V;if(X===944){I=C.indexOf(":",9)+1;var M=C.substring(I,C.length-1).trim();return M=C.substring(0,I).trim()+M+";",ye===1||ye===2&&o(M,1)?"-webkit-"+M+M:M}if(ye===0||ye===2&&!o(C,1))return C;switch(X){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(ne,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return M=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+C+"-ms-flex-pack"+M+C;case 1005:return g.test(C)?C.replace(h,":-webkit-")+C.replace(h,":-moz-")+C:C;case 1e3:switch(M=C.substring(13).trim(),D=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(D)){case 226:M=C.replace(k,"tb");break;case 232:M=C.replace(k,"tb-rl");break;case 220:M=C.replace(k,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+M+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(D=(C=I).length-10,M=(C.charCodeAt(D)===33?C.substring(0,D):C).substring(I.indexOf(":",7)+1).trim(),X=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:C=C.replace(M,"-webkit-"+M)+";"+C;break;case 207:case 102:C=C.replace(M,"-webkit-"+(102<X?"inline-":"")+"box")+";"+C.replace(M,"-webkit-"+M)+";"+C.replace(M,"-ms-"+M+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return M=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+M+"-ms-flex-"+M+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(O,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(O,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(L.test(I)===!0)return(M=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),D,j,V).replace(":fill-available",":stretch"):C.replace(M,"-webkit-"+M)+C.replace(M,"-moz-"+M.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,j+V===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+C}return C}function o(I,D){var j=I.indexOf(D===1?":":"{"),V=I.substring(0,D!==3?j:10);return j=I.substring(j+1,I.length-1),H(D!==2?V:V.replace(T,"$1"),j,D)}function a(I,D){var j=i(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return j!==D+";"?j.replace(_," or ($1)").substring(4):"("+D+")"}function s(I,D,j,V,C,X,M,Se,ie,se){for(var K=0,Ue=D,rt;K<A;++K)switch(rt=Pe[K].call(c,I,Ue,j,V,C,X,M,Se,ie,se)){case void 0:case!1:case!0:case null:break;default:Ue=rt}if(Ue!==D)return Ue}function l(I){switch(I){case void 0:case null:A=Pe.length=0;break;default:if(typeof I=="function")Pe[A++]=I;else if(typeof I=="object")for(var D=0,j=I.length;D<j;++D)l(I[D]);else W=!!I|0}return l}function u(I){return I=I.prefix,I!==void 0&&(H=null,I?typeof I!="function"?ye=1:(ye=2,H=I):ye=0),u}function c(I,D){var j=I;if(33>j.charCodeAt(0)&&(j=j.trim()),re=j,j=[re],0<A){var V=s(-1,D,j,j,de,ae,0,0,0,0);V!==void 0&&typeof V=="string"&&(D=V)}var C=t(Re,j,D,0,0);return 0<A&&(V=s(-2,C,j,j,de,ae,C.length,0,0,0),V!==void 0&&(C=V)),re="",ke=0,ae=de=1,C}var f=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,S=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,O=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,ne=/([^-])(image-set\()/,ae=1,de=1,ke=0,ye=1,Re=[],Pe=[],A=0,H=null,W=0,re="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var c2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function f2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var d2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,zp=f2(function(e){return d2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),x0={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,If=je?Symbol.for("react.element"):60103,Mf=je?Symbol.for("react.portal"):60106,Hs=je?Symbol.for("react.fragment"):60107,Ws=je?Symbol.for("react.strict_mode"):60108,Qs=je?Symbol.for("react.profiler"):60114,Vs=je?Symbol.for("react.provider"):60109,Gs=je?Symbol.for("react.context"):60110,Ff=je?Symbol.for("react.async_mode"):60111,Ks=je?Symbol.for("react.concurrent_mode"):60111,Ys=je?Symbol.for("react.forward_ref"):60112,qs=je?Symbol.for("react.suspense"):60113,p2=je?Symbol.for("react.suspense_list"):60120,Xs=je?Symbol.for("react.memo"):60115,Js=je?Symbol.for("react.lazy"):60116,h2=je?Symbol.for("react.block"):60121,m2=je?Symbol.for("react.fundamental"):60117,v2=je?Symbol.for("react.responder"):60118,g2=je?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case If:switch(e=e.type,e){case Ff:case Ks:case Hs:case Qs:case Ws:case qs:return e;default:switch(e=e&&e.$$typeof,e){case Gs:case Ys:case Js:case Xs:case Vs:return e;default:return t}}case Mf:return t}}}function w0(e){return vt(e)===Ks}ce.AsyncMode=Ff;ce.ConcurrentMode=Ks;ce.ContextConsumer=Gs;ce.ContextProvider=Vs;ce.Element=If;ce.ForwardRef=Ys;ce.Fragment=Hs;ce.Lazy=Js;ce.Memo=Xs;ce.Portal=Mf;ce.Profiler=Qs;ce.StrictMode=Ws;ce.Suspense=qs;ce.isAsyncMode=function(e){return w0(e)||vt(e)===Ff};ce.isConcurrentMode=w0;ce.isContextConsumer=function(e){return vt(e)===Gs};ce.isContextProvider=function(e){return vt(e)===Vs};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===If};ce.isForwardRef=function(e){return vt(e)===Ys};ce.isFragment=function(e){return vt(e)===Hs};ce.isLazy=function(e){return vt(e)===Js};ce.isMemo=function(e){return vt(e)===Xs};ce.isPortal=function(e){return vt(e)===Mf};ce.isProfiler=function(e){return vt(e)===Qs};ce.isStrictMode=function(e){return vt(e)===Ws};ce.isSuspense=function(e){return vt(e)===qs};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hs||e===Ks||e===Qs||e===Ws||e===qs||e===p2||typeof e=="object"&&e!==null&&(e.$$typeof===Js||e.$$typeof===Xs||e.$$typeof===Vs||e.$$typeof===Gs||e.$$typeof===Ys||e.$$typeof===m2||e.$$typeof===v2||e.$$typeof===g2||e.$$typeof===h2)};ce.typeOf=vt;(function(e){e.exports=ce})(x0);var Lf=x0.exports,y2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Df={};Df[Lf.ForwardRef]=w2;Df[Lf.Memo]=b0;function jp(e){return Lf.isMemo(e)?b0:Df[e.$$typeof]||y2}var b2=Object.defineProperty,k2=Object.getOwnPropertyNames,Up=Object.getOwnPropertySymbols,S2=Object.getOwnPropertyDescriptor,C2=Object.getPrototypeOf,Bp=Object.prototype;function k0(e,t,n){if(typeof t!="string"){if(Bp){var r=C2(t);r&&r!==Bp&&k0(e,r,n)}var i=k2(t);Up&&(i=i.concat(Up(t)));for(var o=jp(e),a=jp(t),s=0;s<i.length;++s){var l=i[s];if(!x2[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=S2(t,l);try{b2(e,l,u)}catch{}}}}return e}var E2=k0;function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Hp=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ju=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Af.exports.typeOf(e)},is=Object.freeze([]),Tn=Object.freeze({});function Qr(e){return typeof e=="function"}function Wp(e){return e.displayName||e.name||"Component"}function zf(e){return e&&typeof e.styledComponentId=="string"}var Vr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",jf=typeof window<"u"&&"HTMLElement"in window,$2=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),P2={};function ar(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var O2=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&ar(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),xa=new Map,os=new Map,Fi=1,Wo=function(e){if(xa.has(e))return xa.get(e);for(;os.has(Fi);)Fi++;var t=Fi++;return xa.set(e,t),os.set(t,e),t},_2=function(e){return os.get(e)},R2=function(e,t){t>=Fi&&(Fi=t+1),xa.set(e,t),os.set(t,e)},A2="style["+Vr+'][data-styled-version="5.3.6"]',N2=new RegExp("^"+Vr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),T2=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},I2=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(N2);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(R2(u,l),T2(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},M2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},S0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Vr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=M2();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},F2=function(){function e(n){var r=this.element=S0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}ar(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),L2=function(){function e(n){var r=this.element=S0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),D2=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Qp=jf,z2={isServer:!jf,useCSSOMInjection:!$2},as=function(){function e(n,r,i){n===void 0&&(n=Tn),r===void 0&&(r={}),this.options=Nt({},z2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&jf&&Qp&&(Qp=!1,function(o){for(var a=document.querySelectorAll(A2),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Vr)!=="active"&&(I2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Wo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Nt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new D2(a):o?new F2(a):new L2(a),new O2(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Wo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Wo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Wo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=_2(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=Vr+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),o+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),j2=/(a)(d)/gi,Vp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vp(t%52)+n;return(Vp(t%52)+n).replace(j2,"$1-$2")}var Pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},C0=function(e){return Pr(5381,e)};function E0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qr(n)&&!zf(n))return!1}return!0}var U2=C0("5.3.6"),B2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&E0(t),this.componentId=n,this.baseHash=Pr(U2,n),this.baseStyle=r,as.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=sr(this.rules,t,n,r).join(""),s=Zu(Pr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=Pr(this.baseHash,r.hash),f="",p=0;p<u;p++){var h=this.rules[p];if(typeof h=="string")f+=h;else if(h){var g=sr(h,t,n,r),y=Array.isArray(g)?g.join(""):g;c=Pr(c,y+p),f+=y}}if(f){var S=Zu(c>>>0);if(!n.hasNameForId(i,S)){var v=r(f,"."+S,void 0,i);n.insertRules(i,S,v)}o.push(S)}}return o.join(" ")},e}(),H2=/^\s*\/\/.*$/gm,W2=[":","[",".","#"];function Q2(e){var t,n,r,i,o=e===void 0?Tn:e,a=o.options,s=a===void 0?Tn:a,l=o.plugins,u=l===void 0?is:l,c=new u2(s),f=[],p=function(y){function S(v){if(v)try{y(v+"}")}catch{}}return function(v,d,m,b,k,E,_,O,T,L){switch(v){case 1:if(T===0&&d.charCodeAt(0)===64)return y(d+";"),"";break;case 2:if(O===0)return d+"/*|*/";break;case 3:switch(O){case 102:case 112:return y(m[0]+d),"";default:return d+(L===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(S)}}}(function(y){f.push(y)}),h=function(y,S,v){return S===0&&W2.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function g(y,S,v,d){d===void 0&&(d="&");var m=y.replace(H2,""),b=S&&v?v+" "+S+" { "+m+" }":m;return t=d,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(v||!S?"":S,b)}return c.use([].concat(u,[function(y,S,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},p,function(y){if(y===-2){var S=f;return f=[],S}}])),g.hash=u.length?u.reduce(function(y,S){return S.name||ar(15),Pr(y,S.name)},5381).toString():"",g}var $0=J.createContext();$0.Consumer;var P0=J.createContext(),V2=(P0.Consumer,new as),ec=Q2();function O0(){return x.exports.useContext($0)||V2}function _0(){return x.exports.useContext(P0)||ec}var R0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ec);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return ar(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ec),this.name+t.hash},e}(),G2=/([A-Z])/,K2=/([A-Z])/g,Y2=/^ms-/,q2=function(e){return"-"+e.toLowerCase()};function Gp(e){return G2.test(e)?e.replace(K2,q2).replace(Y2,"-ms-"):e}var Kp=function(e){return e==null||e===!1||e===""};function sr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=sr(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Kp(e))return"";if(zf(e))return"."+e.styledComponentId;if(Qr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return sr(l,t,n,r)}var u;return e instanceof R0?n?(e.inject(n,r),e.getName(r)):e:Ju(e)?function c(f,p){var h,g,y=[];for(var S in f)f.hasOwnProperty(S)&&!Kp(f[S])&&(Array.isArray(f[S])&&f[S].isCss||Qr(f[S])?y.push(Gp(S)+":",f[S],";"):Ju(f[S])?y.push.apply(y,c(f[S],S)):y.push(Gp(S)+": "+(h=S,(g=f[S])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||h in c2?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(y,["}"]):y}(e):e.toString()}var Yp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Qr(e)||Ju(e)?Yp(sr(Hp(is,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Yp(sr(Hp(e,n)))}var A0=function(e,t,n){return n===void 0&&(n=Tn),e.theme!==n.theme&&e.theme||t||n.theme},X2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J2=/(^-|-$)/g;function jl(e){return e.replace(X2,"-").replace(J2,"")}var Uf=function(e){return Zu(C0(e)>>>0)};function Qo(e){return typeof e=="string"&&!0}var tc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Z2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function eb(e,t,n){var r=e[n];tc(t)&&tc(r)?N0(r,t):e[n]=t}function N0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(tc(a))for(var s in a)Z2(s)&&eb(e,a[s],s)}return e}var Gr=J.createContext();Gr.Consumer;function tb(e){var t=x.exports.useContext(Gr),n=x.exports.useMemo(function(){return function(r,i){if(!r)return ar(14);if(Qr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?ar(8):i?Nt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?J.createElement(Gr.Provider,{value:n},e.children):null}var Ul={};function T0(e,t,n){var r=zf(e),i=!Qo(e),o=t.attrs,a=o===void 0?is:o,s=t.componentId,l=s===void 0?function(d,m){var b=typeof d!="string"?"sc":jl(d);Ul[b]=(Ul[b]||0)+1;var k=b+"-"+Uf("5.3.6"+b+Ul[b]);return m?m+"-"+k:k}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(d){return Qo(d)?"styled."+d:"Styled("+Wp(d)+")"}(e):u,f=t.displayName&&t.componentId?jl(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(d,m,b){return e.shouldForwardProp(d,m,b)&&t.shouldForwardProp(d,m,b)}:e.shouldForwardProp);var g,y=new B2(n,f,r?e.componentStyle:void 0),S=y.isStatic&&a.length===0,v=function(d,m){return function(b,k,E,_){var O=b.attrs,T=b.componentStyle,L=b.defaultProps,ne=b.foldedComponentIds,ae=b.shouldForwardProp,de=b.styledComponentId,ke=b.target,ye=function(V,C,X){V===void 0&&(V=Tn);var M=Nt({},C,{theme:V}),Se={};return X.forEach(function(ie){var se,K,Ue,rt=ie;for(se in Qr(rt)&&(rt=rt(M)),rt)M[se]=Se[se]=se==="className"?(K=Se[se],Ue=rt[se],K&&Ue?K+" "+Ue:K||Ue):rt[se]}),[M,Se]}(A0(k,x.exports.useContext(Gr),L)||Tn,k,O),Re=ye[0],Pe=ye[1],A=function(V,C,X,M){var Se=O0(),ie=_0(),se=C?V.generateAndInjectStyles(Tn,Se,ie):V.generateAndInjectStyles(X,Se,ie);return se}(T,_,Re),H=E,W=Pe.$as||k.$as||Pe.as||k.as||ke,re=Qo(W),I=Pe!==k?Nt({},k,{},Pe):k,D={};for(var j in I)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?D.as=I[j]:(ae?ae(j,zp,W):!re||zp(j))&&(D[j]=I[j]));return k.style&&Pe.style!==k.style&&(D.style=Nt({},k.style,{},Pe.style)),D.className=Array.prototype.concat(ne,de,A!==de?A:null,k.className,Pe.className).filter(Boolean).join(" "),D.ref=H,x.exports.createElement(W,D)}(g,d,m,S)};return v.displayName=c,(g=J.forwardRef(v)).attrs=p,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):is,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(d){var m=t.componentId,b=function(E,_){if(E==null)return{};var O,T,L={},ne=Object.keys(E);for(T=0;T<ne.length;T++)O=ne[T],_.indexOf(O)>=0||(L[O]=E[O]);return L}(t,["componentId"]),k=m&&m+"-"+(Qo(d)?d:jl(Wp(d)));return T0(d,Nt({},b,{attrs:p,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?N0({},e.defaultProps,d):d}}),g.toString=function(){return"."+g.styledComponentId},i&&E2(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var nc=function(e){return function t(n,r,i){if(i===void 0&&(i=Tn),!Af.exports.isValidElementType(r))return ar(1,String(r));var o=function(){return n(r,i,F.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Nt({},i,{},a))},o.attrs=function(a){return t(n,r,Nt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(T0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){nc[e]=nc(e)});var nb=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=E0(n),as.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(sr(this.rules,r,i,o).join(""),""),s=this.componentId+n;i.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&as.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function rb(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=F.apply(void 0,[e].concat(n)),o="sc-global-"+Uf(JSON.stringify(i)),a=new nb(i,o);function s(u){var c=O0(),f=_0(),p=x.exports.useContext(Gr),h=x.exports.useRef(c.allocateGSInstance(o)).current;return c.server&&l(h,u,c,p,f),x.exports.useLayoutEffect(function(){if(!c.server)return l(h,u,c,p,f),function(){return a.removeStyles(h,c)}},[h,u,c,p,f]),null}function l(u,c,f,p,h){if(a.isStatic)a.renderStyles(u,P2,f,h);else{var g=Nt({},c,{theme:A0(c,p,s.defaultProps)});a.renderStyles(u,g,f,h)}}return J.memo(s)}function Zs(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=F.apply(void 0,[e].concat(n)).join(""),o=Uf(i);return new R0(o,i)}var pr=function(){return x.exports.useContext(Gr)};const $=nc;const I0=$.div`
  width: 100%;
  max-width: ${e=>e.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,M0="/pokedex/assets/pokeball.bf8b84a8.svg",ib="/pokedex/assets/pokemonLogo.aff162cf.svg";var F0={prefix:"fas",iconName:"user-ninja",icon:[448,512,[129399],"f504","M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 396 61.3 324.1 142.7 307.6l68.5 91.4c6.4 8.5 19.2 8.5 25.6 0l68.5-91.4C386.7 324.1 448 396 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"]},ob={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},rc={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},L0={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},Bf={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},D0={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ic={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qp(Object(n),!0).forEach(function(r){Fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ss(e){return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ss(e)}function ab(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sb(e,t,n){return t&&Xp(e.prototype,t),n&&Xp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hf(e,t){return ub(e)||fb(e,t)||z0(e,t)||pb()}function wo(e){return lb(e)||cb(e)||z0(e)||db()}function lb(e){if(Array.isArray(e))return oc(e)}function ub(e){if(Array.isArray(e))return e}function cb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function z0(e,t){if(!!e){if(typeof e=="string")return oc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oc(e,t)}}function oc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function db(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jp=function(){},Wf={},j0={},U0=null,B0={mark:Jp,measure:Jp};try{typeof window<"u"&&(Wf=window),typeof document<"u"&&(j0=document),typeof MutationObserver<"u"&&(U0=MutationObserver),typeof performance<"u"&&(B0=performance)}catch{}var hb=Wf.navigator||{},Zp=hb.userAgent,eh=Zp===void 0?"":Zp,Fn=Wf,ve=j0,th=U0,Vo=B0;Fn.document;var sn=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",H0=~eh.indexOf("MSIE")||~eh.indexOf("Trident/"),Go,Ko,Yo,qo,Xo,tn="___FONT_AWESOME___",ac=16,W0="fa",Q0="svg-inline--fa",lr="data-fa-i2svg",sc="data-fa-pseudo-element",mb="data-fa-pseudo-element-pending",Qf="data-prefix",Vf="data-icon",nh="fontawesome-i2svg",vb="async",gb=["HTML","HEAD","STYLE","SCRIPT"],V0=function(){try{return!0}catch{return!1}}(),he="classic",$e="sharp",Gf=[he,$e];function bo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[he]}})}var no=bo((Go={},Fe(Go,he,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Fe(Go,$e,{fa:"solid",fass:"solid","fa-solid":"solid"}),Go)),ro=bo((Ko={},Fe(Ko,he,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Fe(Ko,$e,{solid:"fass"}),Ko)),io=bo((Yo={},Fe(Yo,he,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Fe(Yo,$e,{fass:"fa-solid"}),Yo)),yb=bo((qo={},Fe(qo,he,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Fe(qo,$e,{"fa-solid":"fass"}),qo)),xb=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,G0="fa-layers-text",wb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bb=bo((Xo={},Fe(Xo,he,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Fe(Xo,$e,{900:"fass"}),Xo)),K0=[1,2,3,4,5,6,7,8,9,10],kb=K0.concat([11,12,13,14,15,16,17,18,19,20]),Sb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oo=new Set;Object.keys(ro[he]).map(oo.add.bind(oo));Object.keys(ro[$e]).map(oo.add.bind(oo));var Cb=[].concat(Gf,wo(oo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",qn.GROUP,qn.SWAP_OPACITY,qn.PRIMARY,qn.SECONDARY]).concat(K0.map(function(e){return"".concat(e,"x")})).concat(kb.map(function(e){return"w-".concat(e)})),Li=Fn.FontAwesomeConfig||{};function Eb(e){var t=ve.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $b(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ve&&typeof ve.querySelector=="function"){var Pb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pb.forEach(function(e){var t=Hf(e,2),n=t[0],r=t[1],i=$b(Eb(n));i!=null&&(Li[r]=i)})}var Y0={styleDefault:"solid",familyDefault:"classic",cssPrefix:W0,replacementClass:Q0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Li.familyPrefix&&(Li.cssPrefix=Li.familyPrefix);var Kr=z(z({},Y0),Li);Kr.autoReplaceSvg||(Kr.observeMutations=!1);var B={};Object.keys(Y0).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(n){Kr[e]=n,Di.forEach(function(r){return r(B)})},get:function(){return Kr[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){Kr.cssPrefix=t,Di.forEach(function(n){return n(B)})},get:function(){return Kr.cssPrefix}});Fn.FontAwesomeConfig=B;var Di=[];function Ob(e){return Di.push(e),function(){Di.splice(Di.indexOf(e),1)}}var dn=ac,Ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _b(e){if(!(!e||!sn)){var t=ve.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ve.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return ve.head.insertBefore(t,r),e}}var Rb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ao(){for(var e=12,t="";e-- >0;)t+=Rb[Math.random()*62|0];return t}function ni(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kf(e){return e.classList?ni(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function q0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ab(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(q0(e[n]),'" ')},"").trim()}function el(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Yf(e){return e.size!==Ut.size||e.x!==Ut.x||e.y!==Ut.y||e.rotate!==Ut.rotate||e.flipX||e.flipY}function Nb(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Tb(e){var t=e.transform,n=e.width,r=n===void 0?ac:n,i=e.height,o=i===void 0?ac:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&H0?l+="translate(".concat(t.x/dn-r/2,"em, ").concat(t.y/dn-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/dn,"em), calc(-50% + ").concat(t.y/dn,"em)) "):l+="translate(".concat(t.x/dn,"em, ").concat(t.y/dn,"em) "),l+="scale(".concat(t.size/dn*(t.flipX?-1:1),", ").concat(t.size/dn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ib=`:root, :host {
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
}`;function X0(){var e=W0,t=Q0,n=B.cssPrefix,r=B.replacementClass,i=Ib;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var rh=!1;function Bl(){B.autoAddCss&&!rh&&(_b(X0()),rh=!0)}var Mb={mixout:function(){return{dom:{css:X0,insertCss:Bl}}},hooks:function(){return{beforeDOMElementCreation:function(){Bl()},beforeI2svg:function(){Bl()}}}},nn=Fn||{};nn[tn]||(nn[tn]={});nn[tn].styles||(nn[tn].styles={});nn[tn].hooks||(nn[tn].hooks={});nn[tn].shims||(nn[tn].shims=[]);var Tt=nn[tn],J0=[],Fb=function e(){ve.removeEventListener("DOMContentLoaded",e),ls=1,J0.map(function(t){return t()})},ls=!1;sn&&(ls=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),ls||ve.addEventListener("DOMContentLoaded",Fb));function Lb(e){!sn||(ls?setTimeout(e,0):J0.push(e))}function ko(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?q0(e):"<".concat(t," ").concat(Ab(r),">").concat(o.map(ko).join(""),"</").concat(t,">")}function ih(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Db=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Hl=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?Db(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function zb(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function lc(e){var t=zb(e);return t.length===1?t[0].toString(16):null}function jb(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function oh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function uc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=oh(t);typeof Tt.hooks.addPack=="function"&&!i?Tt.hooks.addPack(e,oh(t)):Tt.styles[e]=z(z({},Tt.styles[e]||{}),o),e==="fas"&&uc("fa",t)}var Jo,Zo,ea,Or=Tt.styles,Ub=Tt.shims,Bb=(Jo={},Fe(Jo,he,Object.values(io[he])),Fe(Jo,$e,Object.values(io[$e])),Jo),qf=null,Z0={},eg={},tg={},ng={},rg={},Hb=(Zo={},Fe(Zo,he,Object.keys(no[he])),Fe(Zo,$e,Object.keys(no[$e])),Zo);function Wb(e){return~Cb.indexOf(e)}function Qb(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Wb(i)?i:null}var ig=function(){var t=function(o){return Hl(Or,function(a,s,l){return a[l]=Hl(s,o,{}),a},{})};Z0=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),eg=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),rg=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in Or||B.autoFetchSvg,r=Hl(Ub,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});tg=r.names,ng=r.unicodes,qf=tl(B.styleDefault,{family:B.familyDefault})};Ob(function(e){qf=tl(e.styleDefault,{family:B.familyDefault})});ig();function Xf(e,t){return(Z0[e]||{})[t]}function Vb(e,t){return(eg[e]||{})[t]}function Xn(e,t){return(rg[e]||{})[t]}function og(e){return tg[e]||{prefix:null,iconName:null}}function Gb(e){var t=ng[e],n=Xf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ln(){return qf}var Jf=function(){return{prefix:null,iconName:null,rest:[]}};function tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?he:n,i=no[r][e],o=ro[r][e]||ro[r][i],a=e in Tt.styles?e:null;return o||a||null}var ah=(ea={},Fe(ea,he,Object.keys(io[he])),Fe(ea,$e,Object.keys(io[$e])),ea);function nl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Fe(t,he,"".concat(B.cssPrefix,"-").concat(he)),Fe(t,$e,"".concat(B.cssPrefix,"-").concat($e)),t),a=null,s=he;(e.includes(o[he])||e.some(function(u){return ah[he].includes(u)}))&&(s=he),(e.includes(o[$e])||e.some(function(u){return ah[$e].includes(u)}))&&(s=$e);var l=e.reduce(function(u,c){var f=Qb(B.cssPrefix,c);if(Or[c]?(c=Bb[s].includes(c)?yb[s][c]:c,a=c,u.prefix=c):Hb[s].indexOf(c)>-1?(a=c,u.prefix=tl(c,{family:s})):f?u.iconName=f:c!==B.replacementClass&&c!==o[he]&&c!==o[$e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=a==="fa"?og(u.iconName):{},h=Xn(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||h||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Or.far&&Or.fas&&!B.autoFetchSvg&&(u.prefix="fas")}return u},Jf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===$e&&(Or.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=Xn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Ln()||"fas"),l}var Kb=function(){function e(){ab(this,e),this.definitions={}}return sb(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=z(z({},n.definitions[s]||{}),a[s]),uc(s,a[s]);var l=io[he][s];l&&uc(l,a[s]),ig()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),sh=[],_r={},Lr={},Yb=Object.keys(Lr);function qb(e,t){var n=t.mixoutsTo;return sh=e,_r={},Object.keys(Lr).forEach(function(r){Yb.indexOf(r)===-1&&delete Lr[r]}),sh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),ss(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){_r[a]||(_r[a]=[]),_r[a].push(o[a])})}r.provides&&r.provides(Lr)}),n}function cc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=_r[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function ur(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=_r[e]||[];i.forEach(function(o){o.apply(null,n)})}function rn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lr[e]?Lr[e].apply(null,t):void 0}function fc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ln();if(!!t)return t=Xn(n,t)||t,ih(ag.definitions,n,t)||ih(Tt.styles,n,t)}var ag=new Kb,Xb=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,ur("noAuto")},Jb={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sn?(ur("beforeI2svg",t),rn("pseudoElements2svg",t),rn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,Lb(function(){ek({autoReplaceSvgRoot:n}),ur("watch",t)})}},Zb={icon:function(t){if(t===null)return null;if(ss(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Xn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tl(t[0]);return{prefix:r,iconName:Xn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(xb))){var i=nl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ln(),iconName:Xn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Ln();return{prefix:o,iconName:Xn(o,t)||t}}}},gt={noAuto:Xb,config:B,dom:Jb,parse:Zb,library:ag,findIconDefinition:fc,toHtml:ko},ek=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ve:n;(Object.keys(Tt.styles).length>0||B.autoFetchSvg)&&sn&&B.autoReplaceSvg&&gt.dom.i2svg({node:r})};function rl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ko(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!sn){var r=ve.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function tk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Yf(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=el(z(z({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function nk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:a}),children:r}]}]}function Zf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,h=p===void 0?!1:p,g=r.found?r:n,y=g.width,S=g.height,v=i==="fak",d=[B.replacementClass,o?"".concat(B.cssPrefix,"-").concat(o):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),m={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},b=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};h&&(m.attributes[lr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ao())},children:[l]}),delete m.attributes.title);var k=z(z({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:z(z({},b),f.styles)}),E=r.found&&n.found?rn("generateAbstractMask",k)||{children:[],attributes:{}}:rn("generateAbstractIcon",k)||{children:[],attributes:{}},_=E.children,O=E.attributes;return k.children=_,k.attributes=O,s?nk(k):tk(k)}function lh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=z(z(z({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[lr]="");var c=z({},a.styles);Yf(i)&&(c.transform=Tb({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=el(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function rk(e){var t=e.content,n=e.title,r=e.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=el(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Wl=Tt.styles;function dc(e){var t=e[0],n=e[1],r=e.slice(4),i=Hf(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(qn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(qn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(qn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var ik={found:!1,width:512,height:512};function ok(e,t){!V0&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pc(e,t){var n=t;return t==="fa"&&B.styleDefault!==null&&(t=Ln()),new Promise(function(r,i){if(rn("missingIconAbstract"),n==="fa"){var o=og(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Wl[t]&&Wl[t][e]){var a=Wl[t][e];return r(dc(a))}ok(e,t),r(z(z({},ik),{},{icon:B.showMissingIcons&&e?rn("missingIconAbstract")||{}:{}}))})}var uh=function(){},hc=B.measurePerformance&&Vo&&Vo.mark&&Vo.measure?Vo:{mark:uh,measure:uh},Si='FA "6.2.0"',ak=function(t){return hc.mark("".concat(Si," ").concat(t," begins")),function(){return sg(t)}},sg=function(t){hc.mark("".concat(Si," ").concat(t," ends")),hc.measure("".concat(Si," ").concat(t),"".concat(Si," ").concat(t," begins"),"".concat(Si," ").concat(t," ends"))},ed={begin:ak,end:sg},wa=function(){};function ch(e){var t=e.getAttribute?e.getAttribute(lr):null;return typeof t=="string"}function sk(e){var t=e.getAttribute?e.getAttribute(Qf):null,n=e.getAttribute?e.getAttribute(Vf):null;return t&&n}function lk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function uk(){if(B.autoReplaceSvg===!0)return ba.replace;var e=ba[B.autoReplaceSvg];return e||ba.replace}function ck(e){return ve.createElementNS("http://www.w3.org/2000/svg",e)}function fk(e){return ve.createElement(e)}function lg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ck:fk:n;if(typeof e=="string")return ve.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(lg(a,{ceFn:r}))}),i}function dk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ba={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(lg(i),n)}),n.getAttribute(lr)===null&&B.keepOriginalSource){var r=ve.createComment(dk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Kf(n).indexOf(B.replacementClass))return ba.replace(t);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===B.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return ko(s)}).join(`
`);n.setAttribute(lr,""),n.innerHTML=a}};function fh(e){e()}function ug(e,t){var n=typeof t=="function"?t:wa;if(e.length===0)n();else{var r=fh;B.mutateApproach===vb&&(r=Fn.requestAnimationFrame||fh),r(function(){var i=uk(),o=ed.begin("mutate");e.map(i),o(),n()})}}var td=!1;function cg(){td=!0}function mc(){td=!1}var us=null;function dh(e){if(!!th&&!!B.observeMutations){var t=e.treeCallback,n=t===void 0?wa:t,r=e.nodeCallback,i=r===void 0?wa:r,o=e.pseudoElementsCallback,a=o===void 0?wa:o,s=e.observeMutationsRoot,l=s===void 0?ve:s;us=new th(function(u){if(!td){var c=Ln();ni(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!ch(f.addedNodes[0])&&(B.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&ch(f.target)&&~Sb.indexOf(f.attributeName))if(f.attributeName==="class"&&sk(f.target)){var p=nl(Kf(f.target)),h=p.prefix,g=p.iconName;f.target.setAttribute(Qf,h||c),g&&f.target.setAttribute(Vf,g)}else lk(f.target)&&i(f.target)})}}),sn&&us.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pk(){!us||us.disconnect()}function hk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function mk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=nl(Kf(e));return i.prefix||(i.prefix=Ln()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Vb(i.prefix,e.innerText)||Xf(i.prefix,lc(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function vk(e){var t=ni(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||ao()):(t["aria-hidden"]="true",t.focusable="false")),t}function gk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ph(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mk(e),r=n.iconName,i=n.prefix,o=n.rest,a=vk(e),s=cc("parseNodeAttributes",{},e),l=t.styleParser?hk(e):[];return z({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var yk=Tt.styles;function fg(e){var t=B.autoReplaceSvg==="nest"?ph(e,{styleParser:!1}):ph(e);return~t.extra.classes.indexOf(G0)?rn("generateLayersText",e,t):rn("generateSvgReplacementMutation",e,t)}var Dn=new Set;Gf.map(function(e){Dn.add("fa-".concat(e))});Object.keys(no[he]).map(Dn.add.bind(Dn));Object.keys(no[$e]).map(Dn.add.bind(Dn));Dn=wo(Dn);function hh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sn)return Promise.resolve();var n=ve.documentElement.classList,r=function(f){return n.add("".concat(nh,"-").concat(f))},i=function(f){return n.remove("".concat(nh,"-").concat(f))},o=B.autoFetchSvg?Dn:Gf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(yk));o.includes("fa")||o.push("fa");var a=[".".concat(G0,":not([").concat(lr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(lr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=ni(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ed.begin("onTree"),u=s.reduce(function(c,f){try{var p=fg(f);p&&c.push(p)}catch(h){V0||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){ug(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function xk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fg(e).then(function(n){n&&ug([n],t)})}function wk(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:fc(i||{})),e(r,z(z({},n),{},{mask:i}))}}var bk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ut:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,h=n.titleId,g=h===void 0?null:h,y=n.classes,S=y===void 0?[]:y,v=n.attributes,d=v===void 0?{}:v,m=n.styles,b=m===void 0?{}:m;if(!!t){var k=t.prefix,E=t.iconName,_=t.icon;return rl(z({type:"icon"},t),function(){return ur("beforeDOMElementCreation",{iconDefinition:t,params:n}),B.autoA11y&&(p?d["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(g||ao()):(d["aria-hidden"]="true",d.focusable="false")),Zf({icons:{main:dc(_),mask:l?dc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:z(z({},Ut),i),symbol:a,title:p,maskId:c,titleId:g,extra:{attributes:d,styles:b,classes:S}})})}},kk={mixout:function(){return{icon:wk(bk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hh,n.nodeCallback=xk,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ve:r,o=n.callback,a=o===void 0?function(){}:o;return hh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(h,g){Promise.all([pc(i,s),c.iconName?pc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=Hf(y,2),v=S[0],d=S[1];h([n,Zf({icons:{main:v,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:p,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=el(s);l.length>0&&(i.style=l);var u;return Yf(a)&&(u=rn("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Sk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return rl({type:"layer"},function(){ur("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(wo(o)).join(" ")},children:a}]})}}}},Ck={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return rl({type:"counter",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),rk({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(wo(s))}})})}}}},Ek={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Ut:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,h=p===void 0?{}:p;return rl({type:"text",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),lh({content:n,transform:z(z({},Ut),o),title:s,extra:{attributes:f,styles:h,classes:["".concat(B.cssPrefix,"-layers-text")].concat(wo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(H0){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return B.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,lh({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},$k=new RegExp('"',"ug"),mh=[1105920,1112319];function Pk(e){var t=e.replace($k,""),n=jb(t,0),r=n>=mh[0]&&n<=mh[1],i=t.length===2?t[0]===t[1]:!1;return{value:lc(i?t[0]:t),isSecondary:r||i}}function vh(e,t){var n="".concat(mb).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=ni(e.children),a=o.filter(function(_){return _.getAttribute(sc)===t})[0],s=Fn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(wb),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?$e:he,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ro[p][l[2].toLowerCase()]:bb[p][u],g=Pk(f),y=g.value,S=g.isSecondary,v=l[0].startsWith("FontAwesome"),d=Xf(h,y),m=d;if(v){var b=Gb(y);b.iconName&&b.prefix&&(d=b.iconName,h=b.prefix)}if(d&&!S&&(!a||a.getAttribute(Qf)!==h||a.getAttribute(Vf)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var k=gk(),E=k.extra;E.attributes[sc]=t,pc(d,h).then(function(_){var O=Zf(z(z({},k),{},{icons:{main:_,mask:Jf()},prefix:h,iconName:m,extra:E,watchable:!0})),T=ve.createElement("svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=O.map(function(L){return ko(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ok(e){return Promise.all([vh(e,"::before"),vh(e,"::after")])}function _k(e){return e.parentNode!==document.head&&!~gb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gh(e){if(!!sn)return new Promise(function(t,n){var r=ni(e.querySelectorAll("*")).filter(_k).map(Ok),i=ed.begin("searchPseudoElements");cg(),Promise.all(r).then(function(){i(),mc(),t()}).catch(function(){i(),mc(),n()})})}var Rk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ve:r;B.searchPseudoElements&&gh(i)}}},yh=!1,Ak={mixout:function(){return{dom:{unwatch:function(){cg(),yh=!0}}}},hooks:function(){return{bootstrap:function(){dh(cc("mutationObserverCallbacks",{}))},noAuto:function(){pk()},watch:function(n){var r=n.observeMutationsRoot;yh?mc():dh(cc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nk={mixout:function(){return{parse:{transform:function(n){return xh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},h={outer:s,inner:f,path:p};return{tag:"g",attributes:z({},h.outer),children:[{tag:"g",attributes:z({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),h.path)}]}]}}}},Ql={x:0,y:0,width:"100%",height:"100%"};function wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Tk(e){return e.tag==="g"?e.children:[e]}var Ik={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?nl(i.split(" ").map(function(a){return a.trim()})):Jf();return o.prefix||(o.prefix=Ln()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,p=a.icon,h=Nb({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:z(z({},Ql),{},{fill:"white"})},y=c.children?{children:c.children.map(wh)}:{},S={tag:"g",attributes:z({},h.inner),children:[wh(z({tag:c.tag,attributes:z(z({},c.attributes),h.path)},y))]},v={tag:"g",attributes:z({},h.outer),children:[S]},d="mask-".concat(s||ao()),m="clip-".concat(s||ao()),b={tag:"mask",attributes:z(z({},Ql),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Tk(p)},b]};return r.push(k,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Ql)}),{children:r,attributes:i}}}},Mk={provides:function(t){var n=!1;Fn.matchMedia&&(n=Fn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=z(z({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:z(z({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},Lk=[Mb,kk,Sk,Ck,Ek,Rk,Ak,Nk,Ik,Mk,Fk];qb(Lk,{mixoutsTo:gt});gt.noAuto;gt.config;gt.library;gt.dom;var vc=gt.parse;gt.findIconDefinition;gt.toHtml;var Dk=gt.icon;gt.layer;gt.text;gt.counter;var Y={exports:{}},zk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jk=zk,Uk=jk;function dg(){}function pg(){}pg.resetWarningCache=dg;var Bk=function(){function e(r,i,o,a,s,l){if(l!==Uk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:pg,resetWarningCache:dg};return n.PropTypes=n,n};Y.exports=Bk();function bh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bh(Object(n),!0).forEach(function(r){Rr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cs(e){return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}function Rr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Wk(e,t){if(e==null)return{};var n=Hk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function gc(e){return Qk(e)||Vk(e)||Gk(e)||Kk()}function Qk(e){if(Array.isArray(e))return yc(e)}function Vk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gk(e,t){if(!!e){if(typeof e=="string")return yc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yc(e,t)}}function yc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yk(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,h=e.inverse,g=e.border,y=e.listItem,S=e.flip,v=e.size,d=e.rotation,m=e.pull,b=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":h,"fa-border":g,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Rr(t,"fa-".concat(v),typeof v<"u"&&v!==null),Rr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Rr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Rr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map(function(k){return b[k]?k:null}).filter(function(k){return k})}function qk(e){return e=e-0,e===e}function hg(e){return qk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Xk=["style"];function Jk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Zk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=hg(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Jk(i)]=o:t[i]=o,t},{})}function mg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return mg(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Zk(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[hg(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=Wk(n,Xk);return i.attrs.style=Sn(Sn({},i.attrs.style),a),e.apply(void 0,[t.tag,Sn(Sn({},i.attrs),s)].concat(gc(r)))}var vg=!1;try{vg=!0}catch{}function eS(){if(!vg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kh(e){if(e&&cs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vc.icon)return vc.icon(e);if(e===null)return null;if(e&&cs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Vl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Rr({},e,t):{}}var Ne=J.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=kh(n),c=Vl("classes",[].concat(gc(Yk(e)),gc(o.split(" ")))),f=Vl("transform",typeof e.transform=="string"?vc.transform(e.transform):e.transform),p=Vl("mask",kh(r)),h=Dk(u,Sn(Sn(Sn(Sn({},c),f),p),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!h)return eS("Could not find icon",u),null;var g=h.abstract,y={ref:t};return Object.keys(e).forEach(function(S){Ne.defaultProps.hasOwnProperty(S)||(y[S]=e[S])}),tS(g[0],y)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:Y.exports.bool,border:Y.exports.bool,beatFade:Y.exports.bool,bounce:Y.exports.bool,className:Y.exports.string,fade:Y.exports.bool,flash:Y.exports.bool,mask:Y.exports.oneOfType([Y.exports.object,Y.exports.array,Y.exports.string]),maskId:Y.exports.string,fixedWidth:Y.exports.bool,inverse:Y.exports.bool,flip:Y.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.exports.oneOfType([Y.exports.object,Y.exports.array,Y.exports.string]),listItem:Y.exports.bool,pull:Y.exports.oneOf(["right","left"]),pulse:Y.exports.bool,rotation:Y.exports.oneOf([0,90,180,270]),shake:Y.exports.bool,size:Y.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.exports.bool,spinPulse:Y.exports.bool,spinReverse:Y.exports.bool,symbol:Y.exports.oneOfType([Y.exports.bool,Y.exports.string]),title:Y.exports.string,titleId:Y.exports.string,transform:Y.exports.oneOfType([Y.exports.string,Y.exports.object]),swapOpacity:Y.exports.bool};Ne.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var tS=mg.bind(null,J.createElement);function gg(e,t=[]){let n=[];function r(o,a){const s=x.exports.createContext(a),l=n.length;n=[...n,a];function u(f){const{scope:p,children:h,...g}=f,y=(p==null?void 0:p[e][l])||s,S=x.exports.useMemo(()=>g,Object.values(g));return x.exports.createElement(y.Provider,{value:S},h)}function c(f,p){const h=(p==null?void 0:p[e][l])||s,g=x.exports.useContext(h);if(g)return g;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,c]}const i=()=>{const o=n.map(a=>x.exports.createContext(a));return function(s){const l=(s==null?void 0:s[e])||o;return x.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return i.scopeName=e,[r,nS(i,...t)]}function nS(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const f=l(o)[`__scope${u}`];return{...s,...f}},{});return x.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function De(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function rS(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function nd(...e){return t=>e.forEach(n=>rS(n,t))}function on(...e){return x.exports.useCallback(nd(...e),e)}const fs=x.exports.forwardRef((e,t)=>{const{children:n,...r}=e,i=x.exports.Children.toArray(n),o=i.find(oS);if(o){const a=o.props.children,s=i.map(l=>l===o?x.exports.Children.count(a)>1?x.exports.Children.only(null):x.exports.isValidElement(a)?a.props.children:null:l);return x.exports.createElement(xc,Q({},r,{ref:t}),x.exports.isValidElement(a)?x.exports.cloneElement(a,void 0,s):null)}return x.exports.createElement(xc,Q({},r,{ref:t}),n)});fs.displayName="Slot";const xc=x.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return x.exports.isValidElement(n)?x.exports.cloneElement(n,{...aS(r,n.props),ref:nd(t,n.ref)}):x.exports.Children.count(n)>1?x.exports.Children.only(null):null});xc.displayName="SlotClone";const iS=({children:e})=>x.exports.createElement(x.exports.Fragment,null,e);function oS(e){return x.exports.isValidElement(e)&&e.type===iS}function aS(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}const sS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Lt=sS.reduce((e,t)=>{const n=x.exports.forwardRef((r,i)=>{const{asChild:o,...a}=r,s=o?fs:t;return x.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),x.exports.createElement(s,Q({},a,{ref:i}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function wc(e,t){e&&fo.exports.flushSync(()=>e.dispatchEvent(t))}function wt(e){const t=x.exports.useRef(e);return x.exports.useEffect(()=>{t.current=e}),x.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function lS({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=uS({defaultProp:t,onChange:n}),o=e!==void 0,a=o?e:r,s=wt(n),l=x.exports.useCallback(u=>{if(o){const f=typeof u=="function"?u(e):u;f!==e&&s(f)}else i(u)},[o,e,i,s]);return[a,l]}function uS({defaultProp:e,onChange:t}){const n=x.exports.useState(e),[r]=n,i=x.exports.useRef(r),o=wt(t);return x.exports.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}const cS=x.exports.createContext(void 0);function fS(e){const t=x.exports.useContext(cS);return e||t||"ltr"}const Yr=Boolean(globalThis==null?void 0:globalThis.document)?x.exports.useLayoutEffect:()=>{};function dS(e,t){return x.exports.useReducer((n,r)=>{const i=t[n][r];return i!=null?i:n},e)}const il=e=>{const{present:t,children:n}=e,r=pS(t),i=typeof n=="function"?n({present:r.isPresent}):x.exports.Children.only(n),o=on(r.ref,i.ref);return typeof n=="function"||r.isPresent?x.exports.cloneElement(i,{ref:o}):null};il.displayName="Presence";function pS(e){const[t,n]=x.exports.useState(),r=x.exports.useRef({}),i=x.exports.useRef(e),o=x.exports.useRef("none"),a=e?"mounted":"unmounted",[s,l]=dS(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.exports.useEffect(()=>{const u=ta(r.current);o.current=s==="mounted"?u:"none"},[s]),Yr(()=>{const u=r.current,c=i.current;if(c!==e){const p=o.current,h=ta(u);e?l("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&p!==h?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Yr(()=>{if(t){const u=f=>{const h=ta(r.current).includes(f.animationName);f.target===t&&h&&fo.exports.flushSync(()=>l("ANIMATION_END"))},c=f=>{f.target===t&&(o.current=ta(r.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:x.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function ta(e){return(e==null?void 0:e.animationName)||"none"}const hS=Ea["useId".toString()]||(()=>{});let mS=0;function yg(e){const[t,n]=x.exports.useState(hS());return Yr(()=>{e||n(r=>r!=null?r:String(mS++))},[e]),e||(t?`radix-${t}`:"")}function xg(e){const t=e+"CollectionProvider",[n,r]=gg(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=h=>{const{scope:g,children:y}=h,S=J.useRef(null),v=J.useRef(new Map).current;return J.createElement(i,{scope:g,itemMap:v,collectionRef:S},y)},s=e+"CollectionSlot",l=J.forwardRef((h,g)=>{const{scope:y,children:S}=h,v=o(s,y),d=on(g,v.collectionRef);return J.createElement(fs,{ref:d},S)}),u=e+"CollectionItemSlot",c="data-radix-collection-item",f=J.forwardRef((h,g)=>{const{scope:y,children:S,...v}=h,d=J.useRef(null),m=on(g,d),b=o(u,y);return J.useEffect(()=>(b.itemMap.set(d,{ref:d,...v}),()=>void b.itemMap.delete(d))),J.createElement(fs,{[c]:"",ref:m},S)});function p(h){const g=o(e+"CollectionConsumer",h);return J.useCallback(()=>{const S=g.collectionRef.current;if(!S)return[];const v=Array.from(S.querySelectorAll(`[${c}]`));return Array.from(g.itemMap.values()).sort((b,k)=>v.indexOf(b.ref.current)-v.indexOf(k.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},p,r]}function vS(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e);x.exports.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const bc="dismissableLayer.update",gS="dismissableLayer.pointerDownOutside",yS="dismissableLayer.focusOutside";let Sh;const xS=x.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),wS=x.exports.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:s,onDismiss:l,...u}=e,c=x.exports.useContext(xS),[f,p]=x.exports.useState(null),h=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,g]=x.exports.useState({}),y=on(t,O=>p(O)),S=Array.from(c.layers),[v]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=S.indexOf(v),m=f?S.indexOf(f):-1,b=c.layersWithOutsidePointerEventsDisabled.size>0,k=m>=d,E=bS(O=>{const T=O.target,L=[...c.branches].some(ne=>ne.contains(T));!k||L||(o==null||o(O),s==null||s(O),O.defaultPrevented||l==null||l())},h),_=kS(O=>{const T=O.target;[...c.branches].some(ne=>ne.contains(T))||(a==null||a(O),s==null||s(O),O.defaultPrevented||l==null||l())},h);return vS(O=>{m===c.layers.size-1&&(i==null||i(O),!O.defaultPrevented&&l&&(O.preventDefault(),l()))},h),x.exports.useEffect(()=>{if(!!f)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Sh=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Ch(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Sh)}},[f,h,r,c]),x.exports.useEffect(()=>()=>{!f||(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Ch())},[f,c]),x.exports.useEffect(()=>{const O=()=>g({});return document.addEventListener(bc,O),()=>document.removeEventListener(bc,O)},[]),x.exports.createElement(Lt.div,Q({},u,{ref:y,style:{pointerEvents:b?k?"auto":"none":void 0,...e.style},onFocusCapture:De(e.onFocusCapture,_.onFocusCapture),onBlurCapture:De(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:De(e.onPointerDownCapture,E.onPointerDownCapture)}))});function bS(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e),r=x.exports.useRef(!1),i=x.exports.useRef(()=>{});return x.exports.useEffect(()=>{const o=s=>{if(s.target&&!r.current){let c=function(){wg(gS,n,u,{discrete:!0})};var l=c;const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function kS(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e),r=x.exports.useRef(!1);return x.exports.useEffect(()=>{const i=o=>{o.target&&!r.current&&wg(yS,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ch(){const e=new CustomEvent(bc);document.dispatchEvent(e)}function wg(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?wc(i,o):i.dispatchEvent(o)}function SS(e){const t=x.exports.useRef({value:e,previous:e});return x.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const CS=x.exports.forwardRef((e,t)=>x.exports.createElement(Lt.span,Q({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),ES=CS,So="NavigationMenu",[rd,$S,PS]=xg(So),[kc,OS,_S]=xg(So),[id,l$]=gg(So,[PS,_S]),[RS,ln]=id(So),[AS,NS]=id(So),TS=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:i,defaultValue:o,delayDuration:a=200,skipDelayDuration:s=300,orientation:l="horizontal",dir:u,...c}=e,[f,p]=x.exports.useState(null),h=on(t,T=>p(T)),g=fS(u),y=x.exports.useRef(0),S=x.exports.useRef(0),v=x.exports.useRef(0),[d,m]=x.exports.useState(!0),[b="",k]=lS({prop:r,onChange:T=>{const L=T!=="",ne=s>0;L?(window.clearTimeout(v.current),ne&&m(!1)):(window.clearTimeout(v.current),v.current=window.setTimeout(()=>m(!0),s)),i==null||i(T)},defaultProp:o}),E=x.exports.useCallback(()=>{window.clearTimeout(S.current),S.current=window.setTimeout(()=>k(""),150)},[k]),_=x.exports.useCallback(T=>{window.clearTimeout(S.current),k(T)},[k]),O=x.exports.useCallback(T=>{b===T?window.clearTimeout(S.current):y.current=window.setTimeout(()=>{window.clearTimeout(S.current),k(T)},a)},[b,k,a]);return x.exports.useEffect(()=>()=>{window.clearTimeout(y.current),window.clearTimeout(S.current),window.clearTimeout(v.current)},[]),x.exports.createElement(IS,{scope:n,isRootMenu:!0,value:b,dir:g,orientation:l,rootNavigationMenu:f,onTriggerEnter:T=>{window.clearTimeout(y.current),d?O(T):_(T)},onTriggerLeave:()=>{window.clearTimeout(y.current),E()},onContentEnter:()=>window.clearTimeout(S.current),onContentLeave:E,onItemSelect:T=>{k(L=>L===T?"":T)},onItemDismiss:()=>k("")},x.exports.createElement(Lt.nav,Q({"aria-label":"Main","data-orientation":l,dir:g},c,{ref:h})))}),IS=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:i,orientation:o,children:a,value:s,onItemSelect:l,onItemDismiss:u,onTriggerEnter:c,onTriggerLeave:f,onContentEnter:p,onContentLeave:h}=e,[g,y]=x.exports.useState(null),[S,v]=x.exports.useState(new Map),[d,m]=x.exports.useState(null);return x.exports.createElement(RS,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:s,previousValue:SS(s),baseId:yg(),dir:i,orientation:o,viewport:g,onViewportChange:y,indicatorTrack:d,onIndicatorTrackChange:m,onTriggerEnter:wt(c),onTriggerLeave:wt(f),onContentEnter:wt(p),onContentLeave:wt(h),onItemSelect:wt(l),onItemDismiss:wt(u),onViewportContentChange:x.exports.useCallback((b,k)=>{v(E=>(E.set(b,k),new Map(E)))},[]),onViewportContentRemove:x.exports.useCallback(b=>{v(k=>k.has(b)?(k.delete(b),new Map(k)):k)},[])},x.exports.createElement(rd.Provider,{scope:t},x.exports.createElement(AS,{scope:t,items:S},a)))},MS="NavigationMenuList",FS=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,i=ln(MS,n),o=x.exports.createElement(Lt.ul,Q({"data-orientation":i.orientation},r,{ref:t}));return x.exports.createElement(Lt.div,{style:{position:"relative"},ref:i.onIndicatorTrackChange},x.exports.createElement(rd.Slot,{scope:n},i.isRootMenu?x.exports.createElement(Cg,{asChild:!0},o):o))}),LS="NavigationMenuItem",[DS,bg]=id(LS),zS=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...i}=e,o=yg(),a=r||o||"LEGACY_REACT_AUTO_VALUE",s=x.exports.useRef(null),l=x.exports.useRef(null),u=x.exports.useRef(null),c=x.exports.useRef(()=>{}),f=x.exports.useRef(!1),p=x.exports.useCallback((g="start")=>{if(s.current){c.current();const y=Sc(s.current);y.length&&od(g==="start"?y:y.reverse())}},[]),h=x.exports.useCallback(()=>{if(s.current){const g=Sc(s.current);g.length&&(c.current=KS(g))}},[]);return x.exports.createElement(DS,{scope:n,value:a,triggerRef:l,contentRef:s,focusProxyRef:u,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:h,onContentFocusOutside:h},x.exports.createElement(Lt.li,Q({},i,{ref:t})))}),Eh="NavigationMenuTrigger",jS=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...i}=e,o=ln(Eh,e.__scopeNavigationMenu),a=bg(Eh,e.__scopeNavigationMenu),s=x.exports.useRef(null),l=on(s,a.triggerRef,t),u=$g(o.baseId,a.value),c=Pg(o.baseId,a.value),f=x.exports.useRef(!1),p=x.exports.useRef(!1),h=a.value===o.value;return x.exports.createElement(x.exports.Fragment,null,x.exports.createElement(rd.ItemSlot,{scope:n,value:a.value},x.exports.createElement(Eg,{asChild:!0},x.exports.createElement(Lt.button,Q({id:u,disabled:r,"data-disabled":r?"":void 0,"data-state":ad(h),"aria-expanded":h,"aria-controls":c},i,{ref:l,onPointerEnter:De(e.onPointerEnter,()=>{p.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:De(e.onPointerMove,ds(()=>{r||p.current||a.wasEscapeCloseRef.current||f.current||(o.onTriggerEnter(a.value),f.current=!0)})),onPointerLeave:De(e.onPointerLeave,ds(()=>{r||(o.onTriggerLeave(),f.current=!1)})),onClick:De(e.onClick,()=>{o.onItemSelect(a.value),p.current=h}),onKeyDown:De(e.onKeyDown,g=>{const S={horizontal:"ArrowDown",vertical:o.dir==="rtl"?"ArrowLeft":"ArrowRight"}[o.orientation];h&&g.key===S&&(a.onEntryKeyDown(),g.preventDefault())})})))),h&&x.exports.createElement(x.exports.Fragment,null,x.exports.createElement(ES,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:g=>{const y=a.contentRef.current,S=g.relatedTarget,v=S===s.current,d=y==null?void 0:y.contains(S);(v||!d)&&a.onFocusProxyEnter(v?"start":"end")}}),o.viewport&&x.exports.createElement("span",{"aria-owns":c})))}),$h="navigationMenu.linkSelect",US=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:i,...o}=e;return x.exports.createElement(Eg,{asChild:!0},x.exports.createElement(Lt.a,Q({"data-active":r?"":void 0,"aria-current":r?"page":void 0},o,{ref:t,onClick:De(e.onClick,a=>{const s=a.target,l=new CustomEvent($h,{bubbles:!0,cancelable:!0});if(s.addEventListener($h,u=>i==null?void 0:i(u),{once:!0}),wc(s,l),!l.defaultPrevented){const u=new CustomEvent(ka,{bubbles:!0,cancelable:!0});wc(s,u)}},{checkForDefaultPrevented:!1})})))}),so="NavigationMenuContent",BS=x.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=ln(so,e.__scopeNavigationMenu),o=bg(so,e.__scopeNavigationMenu),a=on(o.contentRef,t),s=o.value===i.value,l={value:o.value,triggerRef:o.triggerRef,focusProxyRef:o.focusProxyRef,wasEscapeCloseRef:o.wasEscapeCloseRef,onContentFocusOutside:o.onContentFocusOutside,onRootContentClose:o.onRootContentClose,...r};return i.viewport?x.exports.createElement(HS,Q({forceMount:n},l,{ref:a})):x.exports.createElement(il,{present:n||s},x.exports.createElement(kg,Q({"data-state":ad(s)},l,{ref:a,onPointerEnter:De(e.onPointerEnter,i.onContentEnter),onPointerLeave:De(e.onPointerLeave,ds(i.onContentLeave)),style:{pointerEvents:!s&&i.isRootMenu?"none":void 0,...l.style}})))}),HS=x.exports.forwardRef((e,t)=>{const n=ln(so,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:i}=n;return Yr(()=>{r(e.value,{ref:t,...e})},[e,t,r]),Yr(()=>()=>i(e.value),[e.value,i]),null}),ka="navigationMenu.rootContentDismiss",kg=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:i,focusProxyRef:o,wasEscapeCloseRef:a,onRootContentClose:s,onContentFocusOutside:l,...u}=e,c=ln(so,n),f=x.exports.useRef(null),p=on(f,t),h=$g(c.baseId,r),g=Pg(c.baseId,r),y=$S(n),S=x.exports.useRef(null),{onItemDismiss:v}=c;x.exports.useEffect(()=>{const m=f.current;if(c.isRootMenu&&m){const b=()=>{var k;v(),s(),m.contains(document.activeElement)&&((k=i.current)===null||k===void 0||k.focus())};return m.addEventListener(ka,b),()=>m.removeEventListener(ka,b)}},[c.isRootMenu,e.value,i,v,s]);const d=x.exports.useMemo(()=>{const b=y().map(L=>L.value);c.dir==="rtl"&&b.reverse();const k=b.indexOf(c.value),E=b.indexOf(c.previousValue),_=r===c.value,O=E===b.indexOf(r);if(!_&&!O)return S.current;const T=(()=>{if(k!==E){if(_&&E!==-1)return k>E?"from-end":"from-start";if(O&&k!==-1)return k>E?"to-start":"to-end"}return null})();return S.current=T,T},[c.previousValue,c.value,c.dir,y,r]);return x.exports.createElement(Cg,{asChild:!0},x.exports.createElement(wS,Q({id:g,"aria-labelledby":h,"data-motion":d,"data-orientation":c.orientation},u,{ref:p,onDismiss:()=>{var m;const b=new Event(ka,{bubbles:!0,cancelable:!0});(m=f.current)===null||m===void 0||m.dispatchEvent(b)},onFocusOutside:De(e.onFocusOutside,m=>{var b;l();const k=m.target;(b=c.rootNavigationMenu)!==null&&b!==void 0&&b.contains(k)&&m.preventDefault()}),onPointerDownOutside:De(e.onPointerDownOutside,m=>{var b;const k=m.target,E=y().some(O=>{var T;return(T=O.ref.current)===null||T===void 0?void 0:T.contains(k)}),_=c.isRootMenu&&((b=c.viewport)===null||b===void 0?void 0:b.contains(k));(E||_||!c.isRootMenu)&&m.preventDefault()}),onKeyDown:De(e.onKeyDown,m=>{const b=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!b){const _=Sc(m.currentTarget),O=document.activeElement,T=_.findIndex(ae=>ae===O),ne=m.shiftKey?_.slice(0,T).reverse():_.slice(T+1,_.length);if(od(ne))m.preventDefault();else{var E;(E=o.current)===null||E===void 0||E.focus()}}}),onEscapeKeyDown:De(e.onEscapeKeyDown,m=>{a.current=!0})})))}),Sg="NavigationMenuViewport",WS=x.exports.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=ln(Sg,e.__scopeNavigationMenu),o=Boolean(i.value);return x.exports.createElement(il,{present:n||o},x.exports.createElement(QS,Q({},r,{ref:t})))}),QS=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...i}=e,o=ln(Sg,n),a=on(t,o.onViewportChange),s=NS(so,e.__scopeNavigationMenu),[l,u]=x.exports.useState(null),[c,f]=x.exports.useState(null),p=l?(l==null?void 0:l.width)+"px":void 0,h=l?(l==null?void 0:l.height)+"px":void 0,g=Boolean(o.value),y=g?o.value:o.previousValue;return YS(c,()=>{c&&u({width:c.offsetWidth,height:c.offsetHeight})}),x.exports.createElement(Lt.div,Q({"data-state":ad(g),"data-orientation":o.orientation},i,{ref:a,style:{pointerEvents:!g&&o.isRootMenu?"none":void 0,["--radix-navigation-menu-viewport-width"]:p,["--radix-navigation-menu-viewport-height"]:h,...i.style},onPointerEnter:De(e.onPointerEnter,o.onContentEnter),onPointerLeave:De(e.onPointerLeave,ds(o.onContentLeave))}),Array.from(s.items).map(([v,{ref:d,forceMount:m,...b}])=>{const k=y===v;return x.exports.createElement(il,{key:v,present:m||k},x.exports.createElement(kg,Q({},b,{ref:nd(d,E=>{k&&E&&f(E)})})))}))}),VS="FocusGroup",Cg=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,i=ln(VS,n);return x.exports.createElement(kc.Provider,{scope:n},x.exports.createElement(kc.Slot,{scope:n},x.exports.createElement(Lt.div,Q({dir:i.dir},r,{ref:t}))))}),Ph=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],GS="FocusGroupItem",Eg=x.exports.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,i=OS(n),o=ln(GS,n);return x.exports.createElement(kc.ItemSlot,{scope:n},x.exports.createElement(Lt.button,Q({},r,{ref:t,onKeyDown:De(e.onKeyDown,a=>{if(["Home","End",...Ph].includes(a.key)){let l=i().map(f=>f.ref.current);if([o.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&l.reverse(),Ph.includes(a.key)){const f=l.indexOf(a.currentTarget);l=l.slice(f+1)}setTimeout(()=>od(l)),a.preventDefault()}})})))});function Sc(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function od(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function KS(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function YS(e,t){const n=wt(t);Yr(()=>{let r=0;if(e){const i=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return i.observe(e),()=>{window.cancelAnimationFrame(r),i.unobserve(e)}}},[e,n])}function ad(e){return e?"open":"closed"}function $g(e,t){return`${e}-trigger-${t}`}function Pg(e,t){return`${e}-content-${t}`}function ds(e){return t=>t.pointerType==="mouse"?e(t):void 0}const qS=TS,XS=FS,JS=zS,ZS=jS,Ci=US,Og=BS,eC=WS,tC=Zs`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,nC=Zs`
 from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`,rC=$.div`
  ${({theme:{colors:e,spacing:t}})=>F`
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
`,iC=$.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
  }
`,oC=$.ul`
  display: flex;
  gap: 1rem;
`,na=$.li`
  ${({theme:{colors:e,spacing:t}})=>F`
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
`,aC=$.nav`
  ${({theme:{breakpoints:e}})=>F`
    @media (max-width: ${e.md}) {
      display: none;
    }
  `}
`;$.button`
  ${({theme:{colors:e,boxShadow:t}})=>F`
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
`;const sC=$(qS)`
  ${({theme:{breakpoints:e}})=>F`
    display: none;
    @media (max-width: ${e.md}) {
      display: flex;
      justify-content: center;
      z-index: 1;
    }
  `}
`,lC=$(XS)`
  justify-content: center;
  list-style: none;
  margin: 0;
`,uC=$(ZS)`
  ${({theme:{colors:e}})=>F`
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
`;$(Og)`
  border: 1px solid red;
  height: 100vh;
  opacity: 0.1;
`;$(Ci)`
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
`;const cC=$.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  padding: 2rem 0 2rem 1rem;
  gap: 1rem;
`,ra=$.li`
  ${({theme:{colors:e,boxShadow:t}})=>F`
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
`,fC=$(eC)`
  ${({theme:{colors:e,boxShadow:t}})=>F`
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
      animation: ${tC} 150ms ease;
    }
    &[data-state='closed'] {
      animation: ${nC} 150ms ease;
    }
  `}
`,dC=$.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,pC=()=>{const e=dr(),t=e.pathname.startsWith("/pokemon"),n=e.pathname.startsWith("/pokedex");return w(rC,{children:N(I0,{children:[w(iC,{children:N(Vt,{to:"/",children:[w("img",{src:ib,alt:"Pokem\xF3n logo",width:40}),w("span",{children:"React PokeDex"})]})}),w(aC,{children:N(oC,{children:[w(na,{children:N(Vt,{end:!0,to:"/",children:[w(Ne,{icon:D0,size:"2x"}),"Home"]})}),w(na,{children:N(Vt,{to:"/pokedex/1",className:n?"active":"inactive",children:[w("img",{src:M0,alt:"",width:28}),"PokeDex"]})}),w(na,{children:N(Vt,{to:"/pokemon/1",className:t?"active":"inactive",children:[w(Ne,{icon:Bf,size:"2x"}),"Pokemon Data"]})}),w(na,{children:N(Vt,{to:"/battle",children:[w(Ne,{icon:F0,size:"2x"}),"Battle"]})})]})}),w(hC,{})]})})},hC=()=>{const e=dr(),t=e.pathname.startsWith("/pokemon"),n=e.pathname.startsWith("/pokedex");return N(sC,{children:[w(lC,{children:N(JS,{children:[w(uC,{children:w(Ne,{icon:ob,size:"xl"})}),w(Og,{children:N(cC,{children:[w(ra,{children:w(Ci,{asChild:!0,children:N(Vt,{end:!0,to:"/",children:[w(Ne,{icon:D0,size:"2x"}),"Home"]})})}),w(ra,{children:w(Ci,{asChild:!0,children:N(Vt,{to:"/pokedex/1",className:n?"active":"inactive",children:[w("img",{src:M0,alt:"",width:28}),"PokeDex"]})})}),w(ra,{children:w(Ci,{asChild:!0,children:N(Vt,{to:"/pokemon/1",className:t?"active":"inactive",children:[w(Ne,{icon:Bf,size:"2x"}),"Pokemon Data"]})})}),w(ra,{children:w(Ci,{asChild:!0,children:N(Vt,{to:"/battle",children:[w(Ne,{icon:F0,size:"2x"}),"Battle"]})})})]})})]})}),w(dC,{children:w(fC,{})})]})},mC=$.div`
  ${({theme:{spacing:e}})=>F`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${e.headerSpacing};
  `}
`,vC=({children:e})=>N(xo,{children:[w(pC,{}),w(mC,{children:w(I0,{children:e})})]}),_g="/pokedex/assets/groundTop.5b5a4f62.svg",gC=$.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`,yC=$.div`
  text-align: end;
  padding-right: 0.2rem;
`,xC=$.div`
  margin-bottom: -3px;
`,wC=$.div`
  ${({isBattle:e=!1,theme:{colors:t}})=>F`
    width: ${e?"100%":"300px"};
    height: 20px;
    border-radius: 15px;
    overflow: hidden;
    ${e&&`border: 1px solid${t.mediumBlue};`}
  `}
`,bC=$.div`
  ${({value:e,maxValue:t=100,isBattle:n=!1,theme:{colors:r}})=>F`
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
`,sd=({name:e,maxValue:t,currentValue:n,isBattle:r=!1})=>N(gC,{children:[w(xC,{children:e.toUpperCase()}),w(wC,{isBattle:r,children:w(bC,{isBattle:r,value:n,maxValue:t,children:r?"":n})}),w(yC,{children:r&&`${n}/${t}`})]}),kC=Zs`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-100px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`,SC=$.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 25rem;
    @media (max-width: ${e.md}) {
      flex-direction: column;
    }
  `}
`,CC=$.span`
  ${({theme:{colors:e,boxShadow:t,breakpoints:n}})=>F`
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
`,EC=$.div`
  ${({theme:{breakpoints:e}})=>F`
    align-self: center;
    @media (max-width: ${e.md}) {
      align-self: flex-start;
    }
  `}
`,$C=$.div`
  animation: ${kC} 2s ease;
  margin-bottom: -150px;

  & > img {
    width: 80%;
    max-width: 350px;
  }
`,PC=$.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: relative;
  z-index: -1;
`,OC=({pokemon:e})=>N(SC,{children:[N(EC,{children:[w($C,{children:w("img",{src:e==null?void 0:e.sprites.back_default,alt:""})}),w(PC,{src:_g,alt:"",width:400})]}),N(CC,{children:[w("h2",{children:e.name.toUpperCase()}),w(sd,{isBattle:!0,name:e.stats[0].stat.name,maxValue:e.stats[0].base_stat,currentValue:e.stats[0].base_stat-30})]})]}),_C=Zs`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-100px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`,RC=$.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    height: 25rem;
    @media (max-width: ${e.md}) {
      flex-direction: column;
      margin-bottom: 5rem;
    }
  `}
`,AC=$.span`
  ${({theme:{colors:e,boxShadow:t,breakpoints:n}})=>F`
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
`,NC=$.div`
  ${({theme:{breakpoints:e}})=>F`
    align-self: center;
    @media (max-width: ${e.md}) {
      align-self: flex-end;
    }
  `}
`,TC=$.div`
  animation: ${_C} 2s ease;
  animation-delay: 1s;
  margin-bottom: -170px;
  z-index: 2;

  & > img {
    width: 80%;
    max-width: 350px;
  }
`,IC=$.img`
  position: relative;
  z-index: -1;
`,MC=({pokemon:e})=>N(RC,{children:[N(AC,{children:[w("h2",{children:e.name.toLocaleUpperCase()}),w(sd,{isBattle:!0,name:e.stats[0].stat.name,maxValue:e.stats[0].base_stat,currentValue:e.stats[0].base_stat})]}),N(NC,{children:[w(TC,{children:w("img",{src:e==null?void 0:e.sprites.front_default,alt:""})}),w(IC,{src:_g,alt:"",width:400})]})]});function Rg(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ag}=Object.prototype,{getPrototypeOf:ld}=Object,ud=(e=>t=>{const n=Ag.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),un=e=>(e=e.toLowerCase(),t=>ud(t)===e),ol=e=>t=>typeof t===e,{isArray:Co}=Array,Cc=ol("undefined");function FC(e){return e!==null&&!Cc(e)&&e.constructor!==null&&!Cc(e.constructor)&&ri(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ng=un("ArrayBuffer");function LC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ng(e.buffer),t}const DC=ol("string"),ri=ol("function"),Tg=ol("number"),Ig=e=>e!==null&&typeof e=="object",zC=e=>e===!0||e===!1,Sa=e=>{if(ud(e)!=="object")return!1;const t=ld(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},jC=un("Date"),UC=un("File"),BC=un("Blob"),HC=un("FileList"),WC=e=>Ig(e)&&ri(e.pipe),QC=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ag.call(e)===t||ri(e.toString)&&e.toString()===t)},VC=un("URLSearchParams"),GC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function al(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Co(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function Ec(){const e={},t=(n,r)=>{Sa(e[r])&&Sa(n)?e[r]=Ec(e[r],n):Sa(n)?e[r]=Ec({},n):Co(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&al(arguments[n],t);return e}const KC=(e,t,n,{allOwnKeys:r}={})=>(al(t,(i,o)=>{n&&ri(i)?e[o]=Rg(i,n):e[o]=i},{allOwnKeys:r}),e),YC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qC=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},XC=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&ld(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},JC=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ZC=e=>{if(!e)return null;if(Co(e))return e;let t=e.length;if(!Tg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},eE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ld(Uint8Array)),tE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},nE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rE=un("HTMLFormElement"),iE=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Oh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),oE=un("RegExp"),Mg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};al(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},aE=e=>{Mg(e,(t,n)=>{const r=e[n];if(!!ri(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},sE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Co(e)?r(e):r(String(e).split(t)),n},lE=()=>{},uE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),P={isArray:Co,isArrayBuffer:Ng,isBuffer:FC,isFormData:QC,isArrayBufferView:LC,isString:DC,isNumber:Tg,isBoolean:zC,isObject:Ig,isPlainObject:Sa,isUndefined:Cc,isDate:jC,isFile:UC,isBlob:BC,isRegExp:oE,isFunction:ri,isStream:WC,isURLSearchParams:VC,isTypedArray:eE,isFileList:HC,forEach:al,merge:Ec,extend:KC,trim:GC,stripBOM:YC,inherits:qC,toFlatObject:XC,kindOf:ud,kindOfTest:un,endsWith:JC,toArray:ZC,forEachEntry:tE,matchAll:nE,isHTMLForm:rE,hasOwnProperty:Oh,hasOwnProp:Oh,reduceDescriptors:Mg,freezeMethods:aE,toObjectSet:sE,toCamelCase:iE,noop:lE,toFiniteNumber:uE};function te(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fg=te.prototype,Lg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Lg[e]={value:e}});Object.defineProperties(te,Lg);Object.defineProperty(Fg,"isAxiosError",{value:!0});te.from=(e,t,n,r,i,o)=>{const a=Object.create(Fg);return P.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),te.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var cE=typeof self=="object"?self.FormData:window.FormData;function $c(e){return P.isPlainObject(e)||P.isArray(e)}function Dg(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function _h(e,t,n){return e?e.concat(t).map(function(i,o){return i=Dg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function fE(e){return P.isArray(e)&&!e.some($c)}const dE=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function pE(e){return e&&P.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function sl(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new(cE||FormData),n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!P.isUndefined(S[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&pE(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(P.isDate(g))return g.toISOString();if(!l&&P.isBlob(g))throw new te("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(g)||P.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,S){let v=g;if(g&&!S&&typeof g=="object"){if(P.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(P.isArray(g)&&fE(g)||P.isFileList(g)||P.endsWith(y,"[]")&&(v=P.toArray(g)))return y=Dg(y),v.forEach(function(m,b){!(P.isUndefined(m)||m===null)&&t.append(a===!0?_h([y],b,o):a===null?y:y+"[]",u(m))}),!1}return $c(g)?!0:(t.append(_h(S,y,o),u(g)),!1)}const f=[],p=Object.assign(dE,{defaultVisitor:c,convertValue:u,isVisitable:$c});function h(g,y){if(!P.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),P.forEach(g,function(v,d){(!(P.isUndefined(v)||v===null)&&i.call(t,v,P.isString(d)?d.trim():d,y,p))===!0&&h(v,y?y.concat(d):[d])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Rh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function cd(e,t){this._pairs=[],e&&sl(e,this,t)}const zg=cd.prototype;zg.append=function(t,n){this._pairs.push([t,n])};zg.toString=function(t){const n=t?function(r){return t.call(this,r,Rh)}:Rh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function hE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jg(e,t,n){if(!t)return e;const r=n&&n.encode||hE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new cd(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ah{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ug={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mE=typeof URLSearchParams<"u"?URLSearchParams:cd,vE=FormData,gE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qt={isBrowser:!0,classes:{URLSearchParams:mE,FormData:vE,Blob},isStandardBrowserEnv:gE,protocols:["http","https","file","blob","url","data"]};function yE(e,t){return sl(e,new qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return qt.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function xE(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Bg(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&P.isArray(i)?i.length:a,l?(P.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!P.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&P.isArray(i[a])&&(i[a]=wE(i[a])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(xE(r),i,n,0)}),n}return null}function bE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const kE=qt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),P.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),P.isString(o)&&l.push("path="+o),P.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function SE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function CE(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Hg(e,t){return e&&!SE(t)?CE(e,t):t}const EE=qt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=P.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Eo(e,t,n){te.call(this,e==null?"canceled":e,te.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Eo,te,{__CANCEL__:!0});function $E(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const PE=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),OE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&PE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Nh=Symbol("internals"),Wg=Symbol("defaults");function Ei(e){return e&&String(e).trim().toLowerCase()}function Ca(e){return e===!1||e==null?e:P.isArray(e)?e.map(Ca):String(e)}function _E(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Th(e,t,n,r){if(P.isFunction(r))return r.call(this,t,n);if(!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function RE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function AE(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}function mi(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function St(e,t){e&&this.set(e),this[Wg]=t||null}Object.assign(St.prototype,{set:function(e,t,n){const r=this;function i(o,a,s){const l=Ei(a);if(!l)throw new Error("header name must be a non-empty string");const u=mi(r,l);u&&s!==!0&&(r[u]===!1||s===!1)||(r[u||a]=Ca(o))}return P.isPlainObject(e)?P.forEach(e,(o,a)=>{i(o,a,t)}):i(t,e,n),this},get:function(e,t){if(e=Ei(e),!e)return;const n=mi(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return _E(r);if(P.isFunction(t))return t.call(this,r,n);if(P.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=Ei(e),e){const n=mi(this,e);return!!(n&&(!t||Th(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(o){if(o=Ei(o),o){const a=mi(n,o);a&&(!t||Th(n,n[a],a,t))&&(delete n[a],r=!0)}}return P.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return P.forEach(this,(r,i)=>{const o=mi(n,i);if(o){t[o]=Ca(r),delete t[i];return}const a=e?RE(i):String(i).trim();a!==i&&delete t[i],t[a]=Ca(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return P.forEach(Object.assign({},this[Wg]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&P.isArray(n)?n.join(", "):n)}),t}});Object.assign(St,{from:function(e){return P.isString(e)?new this(OE(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[Nh]=this[Nh]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=Ei(o);n[a]||(AE(r,o),n[a]=!0)}return P.isArray(e)?e.forEach(i):i(e),this}});St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);P.freezeMethods(St.prototype);P.freezeMethods(St);function NE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const h=c&&u-c;return h?Math.round(p*1e3/h):void 0}}function Ih(e,t){let n=0;const r=NE(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0};c[t?"download":"upload"]=!0,e(c)}}function Mh(e){return new Promise(function(n,r){let i=e.data;const o=St.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}P.isFormData(i)&&qt.isStandardBrowserEnv&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+g))}const c=Hg(e.baseURL,e.url);u.open(e.method.toUpperCase(),jg(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const h=St.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};bE(function(v){n(v),l()},function(v){r(v),l()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){!u||(r(new te("Request aborted",te.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Ug;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new te(g,y.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,e,u)),u=null},qt.isStandardBrowserEnv){const h=(e.withCredentials||EE(c))&&e.xsrfCookieName&&kE.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&P.forEach(o.toJSON(),function(g,y){u.setRequestHeader(y,g)}),P.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ih(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ih(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{!u||(r(!h||h.type?new Eo(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=$E(c);if(p&&qt.protocols.indexOf(p)===-1){r(new te("Unsupported protocol "+p+":",te.ERR_BAD_REQUEST,e));return}u.send(i||null)})}const Fh={http:Mh,xhr:Mh},Lh={getAdapter:e=>{if(P.isString(e)){const t=Fh[e];if(!e)throw Error(P.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!P.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Fh},TE={"Content-Type":"application/x-www-form-urlencoded"};function IE(){let e;return typeof XMLHttpRequest<"u"?e=Lh.getAdapter("xhr"):typeof process<"u"&&P.kindOf(process)==="process"&&(e=Lh.getAdapter("http")),e}function ME(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ii={transitional:Ug,adapter:IE(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i&&i?JSON.stringify(Bg(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yE(t,this.formSerializer).toString();if((s=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return sl(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),ME(t)):t}],transformResponse:[function(t){const n=this.transitional||ii.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?te.from(s,te.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],function(t){ii.headers[t]={}});P.forEach(["post","put","patch"],function(t){ii.headers[t]=P.merge(TE)});function Gl(e,t){const n=this||ii,r=t||n,i=St.from(r.headers);let o=r.data;return P.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Qg(e){return!!(e&&e.__CANCEL__)}function Kl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Eo}function Dh(e){return Kl(e),e.headers=St.from(e.headers),e.data=Gl.call(e,e.transformRequest),(e.adapter||ii.adapter)(e).then(function(r){return Kl(e),r.data=Gl.call(e,e.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return Qg(r)||(Kl(e),r&&r.response&&(r.response.data=Gl.call(e,e.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}function lo(e,t){t=t||{};const n={};function r(u,c){return P.isPlainObject(u)&&P.isPlainObject(c)?P.merge(u,c):P.isPlainObject(c)?P.merge({},c):P.isArray(c)?c.slice():c}function i(u){if(P.isUndefined(t[u])){if(!P.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function o(u){if(!P.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(P.isUndefined(t[u])){if(!P.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function s(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return P.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,p=f(c);P.isUndefined(p)&&f!==s||(n[c]=p)}),n}const Vg="1.1.3",fd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zh={};fd.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Vg+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new te(i(a," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!zh[a]&&(zh[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function FE(e,t,n){if(typeof e!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new te("option "+o+" must be "+l,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+o,te.ERR_BAD_OPTION)}}const Pc={assertOptions:FE,validators:fd},pn=Pc.validators;class er{constructor(t){this.defaults=t,this.interceptors={request:new Ah,response:new Ah}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=lo(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&Pc.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),i!==void 0&&Pc.assertOptions(i,{encode:pn.function,serialize:pn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const o=n.headers&&P.merge(n.headers.common,n.headers[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new St(n.headers,o);const a=[];let s=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(s=s&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let u,c=0,f;if(!s){const h=[Dh.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,l),f=h.length,u=Promise.resolve(n);c<f;)u=u.then(h[c++],h[c++]);return u}f=a.length;let p=n;for(c=0;c<f;){const h=a[c++],g=a[c++];try{p=h(p)}catch(y){g.call(this,y);break}}try{u=Dh.call(this,p)}catch(h){return Promise.reject(h)}for(c=0,f=l.length;c<f;)u=u.then(l[c++],l[c++]);return u}getUri(t){t=lo(this.defaults,t);const n=Hg(t.baseURL,t.url);return jg(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){er.prototype[t]=function(n,r){return this.request(lo(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(lo(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}er.prototype[t]=n(),er.prototype[t+"Form"]=n(!0)});class dd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new Eo(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new dd(function(i){t=i}),cancel:t}}}function LE(e){return function(n){return e.apply(null,n)}}function DE(e){return P.isObject(e)&&e.isAxiosError===!0}function Gg(e){const t=new er(e),n=Rg(er.prototype.request,t);return P.extend(n,er.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Gg(lo(e,i))},n}const ut=Gg(ii);ut.Axios=er;ut.CanceledError=Eo;ut.CancelToken=dd;ut.isCancel=Qg;ut.VERSION=Vg;ut.toFormData=sl;ut.AxiosError=te;ut.Cancel=ut.CanceledError;ut.all=function(t){return Promise.all(t)};ut.spread=LE;ut.isAxiosError=DE;ut.formToJSON=e=>Bg(P.isHTMLForm(e)?new FormData(e):e);const zE="https://pokeapi.co/api",ll=ut.create({baseURL:zE}),jE=async(e=0,t=20)=>(await ll.get(`/v2/pokemon/?offset=${e}&limit=${t}}`)).data,uo=async e=>(await ll.get(`/v2/pokemon/${e}`)).data,UE=async e=>(await ll.get(e)).data,BE=async e=>(await ll.get(`/v2/pokemon-species/${e}`)).data,HE=$.div`
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
`,WE=$.div`
  ${({theme:{colors:e,spacing:t,breakpoints:n}})=>F`
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
`,QE=$.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`,VE=$.span`
  ${({theme:{colors:e}})=>F`
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
`,GE=()=>{const[e,t]=x.exports.useState(),[n,r]=x.exports.useState();return x.exports.useEffect(()=>{(async o=>{const a=await uo(o[0]),s=await uo(o[1]);t(a),r(s)})(["3","59"])},[]),w(HE,{children:N(WE,{children:[w(VE,{children:"Coming soon"}),N(QE,{children:[e&&w(MC,{pokemon:e}),n&&w(OC,{pokemon:n})]})]})})},KE=$.div`
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
`,ul=({color:e})=>w(KE,{color:e}),YE=$.div`
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
`,pd=({typeName:e})=>w(YE,{typeName:e||"",children:e}),qE=J.createContext({}),Kg=!0;function XE({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:o,direction:a,duration:s,enableAnimation:l=Kg}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof s=="number"&&(u["--animation-duration"]=`${s}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof i=="string"||typeof i=="number")&&(u.borderRadius=i),o&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function Qn({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:i,circle:o=!1,style:a,...s}){var l,u,c;const f=J.useContext(qE),p={...s};for(const[m,b]of Object.entries(s))typeof b>"u"&&delete p[m];const h={...f,...p,circle:o},g={...a,...XE(h)};let y="react-loading-skeleton";n&&(y+=` ${n}`);const S=(l=h.inline)!==null&&l!==void 0?l:!1,v=[],d=Math.ceil(e);for(let m=0;m<d;m++){let b=g;if(d>e&&m===d-1){const E=(u=b.width)!==null&&u!==void 0?u:"100%",_=e%1,O=typeof E=="number"?E*_:`calc(${E} * ${_})`;b={...b,width:O}}const k=w("span",{className:y,style:b,children:"\u200C"},m);S?v.push(k):v.push(N(xo,{children:[k,w("br",{})]}))}return w("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":(c=h.enableAnimation)!==null&&c!==void 0?c:Kg,children:t?v.map((m,b)=>w(t,{children:m},b)):v})}const JE=$.div`
  ${({light:e,theme:{boxShadow:t,colors:n,breakpoints:r}})=>F`
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
`,ZE=$.div`
  ${({light:e,theme:{colors:t}})=>F`
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
`,e3=$.div`
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
`,t3=$.div`
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
`,n3=$.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`,jh=$(Qn)`
  border-radius: 6px 36px;
  width: 250px;
  height: 250px;
`,Oc=({pokemon:e,light:t=!1})=>{var a;const[n,r]=x.exports.useState();x.exports.useEffect(()=>{(async()=>{const l=await uo(e);r(l)})()},[e]);const{typesColors:i,colors:o}=pr();return w(JE,{light:t,children:n?w(kn,{to:`/pokemon/${n.id}`,children:N(ZE,{light:t,children:[N(e3,{secondary:(a=i[n.types[0].type.name])==null?void 0:a.secondaryColor,children:[N(t3,{children:["#",n.id]}),w("h3",{children:n.species.name})]}),w("img",{src:n.sprites.other.dream_world.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name}),w(n3,{children:n.types.map(s=>w(pd,{typeName:s.type.name},s.type.name))})]})}):w(ul,{color:t?o.black:""})})},r3=$.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 50px 0;
`,i3=({pokemonList:e})=>w(r3,{children:e.map((t,n)=>w(Oc,{pokemon:t.name},t.name+n))}),o3=$.div`
  ${({theme:{spacing:e}})=>F`
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
`,a3=$.div`
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
`,s3=$.div`
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
`,Uh=20;function l3(){const[e,t]=x.exports.useState(0),[n,r]=x.exports.useState([]),{isFetching:i,isFetchedAfterMount:o}=c0(["pokemonList",e],()=>jE(e,Uh),{onSuccess:l=>{r(u=>[...u,...l.results])}}),a=x.exports.useCallback(l=>{l[0].isIntersecting&&o&&t(c=>c+Uh)},[o]),s=x.exports.useRef(null);return x.exports.useEffect(()=>{const l={root:null,rootMargin:"20px",threshold:1},u=s.current,c=new IntersectionObserver(a,l);return u&&c.observe(u),()=>{u&&c.unobserve(u)}},[a]),x.exports.useEffect(()=>()=>{r([]),t(0)},[]),x.exports.useEffect(()=>{window.onbeforeunload=function(){window.scrollTo(0,0)}},[]),N(o3,{children:[w(s3,{children:w("p",{children:"Here's a list of Pokemon from every generation. Click on any of them to get information about their type, stats, and evolution chain!"})}),N(a3,{children:[!!(n!=null&&n.length)&&w(i3,{pokemonList:n}),w("div",{ref:s}),i&&w(ul,{})]})]})}const u3=$.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,vi=$.div`
  position: relative;
`,gi=$.div`
  ${({theme:{colors:e}})=>F`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${e.darkGray};
    z-index: 2;
  `}
`,yi=$.div`
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
`,c3=$.div`
  display: flex;
`,f3=()=>{const{id:e}=Rf(),t=Number(e),n=t>1?t-1:1,r=t+1;return N(u3,{children:[w(kn,{to:`/pokedex/${n}`,children:N(vi,{children:[w(gi,{}),w(yi,{})]})}),N(c3,{children:[w(kn,{to:`/pokedex/${n}`,children:N(vi,{children:[w(gi,{}),w(yi,{})]})}),N(vi,{children:[w(gi,{}),w(yi,{})]}),w(kn,{to:`/pokedex/${r}`,children:N(vi,{children:[w(gi,{}),w(yi,{})]})})]}),w(kn,{to:`/pokedex/${r}`,children:N(vi,{children:[w(gi,{}),w(yi,{})]})})]})},d3=$.div`
  position: relative;
`,p3=$.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`,h3=$.div`
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
`,m3=$.div`
  display: flex;
  gap: 8px;
`,Bh=$.div`
  ${({theme:{colors:e},color:t})=>F`
    background: ${t};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${e.black};
    border-left: 1px solid ${e.black};
  `}
`,v3=$.div`
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
`,g3=({types:e})=>{const{colors:t}=pr();return N(d3,{children:[N(p3,{children:[w(h3,{}),N(m3,{children:[w(Bh,{color:t.red}),w(Bh,{color:t.mediumBlue})]}),w(f3,{})]}),w(v3,{children:e.map(n=>w(pd,{typeName:n.type.name},n.type.name))})]})},y3=$.div`
  width: 370px;
  height: 460px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 0 15px 15px 0;
`,x3=$.div`
  ${({theme:{colors:e}})=>F`
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
`,w3=$.div`
  ${({theme:{colors:e}})=>F`
    background-color: ${e.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`,Yg=({className:e,children:t})=>N(y3,{className:e,children:[w(x3,{}),w(w3,{children:t})]}),b3=$.div`
  ${({theme:{colors:e}})=>F`
    border: 8px solid ${e.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`,k3=$.div`
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
`,S3=$.div`
  ${({theme:{colors:e}})=>F`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`,C3=({pokemon:e})=>w(b3,{children:w(k3,{children:e.stats.map(t=>N(S3,{children:[w("div",{children:t.stat.name},t.stat.name),w("div",{children:t.base_stat},`${t.stat.name}-${t.base_stat}`)]},t.stat.name))})}),E3=$.div`
  ${({theme:{colors:e}})=>F`
    position: relative;
  `}
`,$3=$(Yg)`
  ${({theme:{colors:e}})=>F`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`,P3=$.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Hh=$.div`
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
`,O3=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`,_3=$.span`
  ${({theme:{colors:e}})=>F`
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
`,R3=({pokemon:e})=>N(E3,{children:[w(Yg,{children:N(xo,{children:[w(C3,{pokemon:e}),N(O3,{children:[N(P3,{children:[N(Hh,{children:[" HEIGHT - ",e.height," dm"]}),N(Hh,{children:[" WEIGHT - ",e.weight," hg"]})]}),w(_3,{})]})]})}),w($3,{})]}),A3=$.div`
  ${({theme:{breakpoints:e}})=>F`
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
`,N3=$.div`
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
`,T3=$.div`
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
`,I3=$.span`
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
`,M3=$.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`,Yl=$.span`
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
`,F3=$.div`
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
`,L3=$.div`
  position: relative;
`,D3=$.div`
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
`,z3=$.div`
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
`,j3=$.div`
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
`,U3=({pokemon:e})=>{const{colors:t}=pr();return N(A3,{children:[N(N3,{children:[N(T3,{children:[w("div",{}),w(I3,{}),N(M3,{children:[w(Yl,{color:t.red}),w(Yl,{color:t.yellow}),w(Yl,{color:t.green})]})]}),w(F3,{children:w("div",{})}),N(L3,{children:[w(D3,{children:N(j3,{children:[N("p",{children:["#",e.id]}),w("img",{src:e.sprites.front_default,alt:e.name}),w("p",{children:e.name})]})}),w(z3,{})]}),w(g3,{types:e.types})]}),w(R3,{pokemon:e})]})},B3=$.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  border-radius: 8px;
  position: relative;
`,H3=$.div`
  ${({theme:{colors:e,spacing:t,breakpoints:n}})=>F`
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
`,W3=$.div`
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
`;$.div`
  ${({theme:{colors:e}})=>F`
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
`;const Q3=$.span`
  align-self: flex-end;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  font-size: 0.8rem;
  & > svg {
    margin-top: 0.4rem;
  }
`,V3=()=>{const[e,t]=x.exports.useState(!1),[n,r]=x.exports.useState(),i=Rf(),o=async()=>{t(!0);const a=await uo(Number(i.id));r(a),t(!1)};return x.exports.useEffect(()=>{o()},[i.id]),N(B3,{children:[w(W3,{children:w("p",{children:"Here's a classic way to view Pokemon stats. Move from one Pokemon to the next clicking the direction keys on the pokedex."})}),w(H3,{children:e?w(ul,{}):n?w(U3,{pokemon:n}):w("div",{})}),N(Q3,{children:[w(Ne,{icon:Bf,size:"1x"}),"This Pokedex was designed entirely using HTML and CSS code."]})]})},G3=$.div`
  padding: 32px;
`,K3=$.h2`
  ${({theme:{colors:e}})=>F`
    color: ${e.darkBlue};
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
  `}
`,_c=$.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,qg=$.div`
  ${({theme:{breakpoints:e}})=>F`
    display: flex;
    align-items: center;
    @media (max-width: ${e.lg}) {
      flex-direction: column;
    }
  `}
`,Xg=$.span`
  ${({theme:{breakpoints:e}})=>F`
    margin: 1rem;
    @media (max-width: ${e.lg}) {
      transform: rotate(90deg);
    }
  `}
`,Y3=$.div`
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
`,q3=({url:e})=>{const[t,n]=x.exports.useState(),r=t==null?void 0:t.filter(c=>c.canEvolve),i=t==null?void 0:t.filter(c=>!c.canEvolve),o=(c,f)=>c.includes("https://pokeapi.co/api/v2/pokemon-species/")?c.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/",""):f,a=x.exports.useMemo(()=>[],[]),s=x.exports.useCallback(c=>{if(!c.evolves_to.length){a.push({id:o(c.species.url,c.species.name),name:c.species.name,canEvolve:!1}),n(a);return}a.length||a.push({id:o(c.species.url,c.species.name),name:c.species.name,canEvolve:!0}),c.evolves_to.forEach(f=>{if(!f.evolves_to.length){a.push({id:o(f.species.url,f.species.name),name:f.species.name,canEvolve:!1}),n(a);return}a.push({id:o(f.species.url,f.species.name),name:f.species.name,canEvolve:!0}),n(a),s(f)})},[a]),{isFetching:l}=c0(["pokemonChain",e],()=>UE(e),{onSuccess:c=>s(c==null?void 0:c.chain)}),{colors:u}=pr();return w(G3,{children:l?w(ul,{}):N(xo,{children:[w(K3,{children:"EVOLUTION CHAIN:"}),N(_c,{children:[r!=null&&r.length?r.map(c=>N(qg,{children:[w(Oc,{pokemon:c.id,light:!0},c.name),c.canEvolve&&w(Xg,{children:w(Ne,{icon:L0,color:u.black,size:"xl"})})]},c.name)):null,i!=null&&i.length?w(Y3,{showShadow:i.length>1,hasManyEvolutions:i.length>3,children:i.map(c=>w("div",{children:w(Oc,{pokemon:c.id,light:!0},c.name)},c.name))}):null]})]})})},X3=()=>{const{colors:e}=pr();return w(_c,{children:N(_c,{children:[N(qg,{children:[w(jh,{baseColor:e.lightGray}),w(Xg,{children:w(Ne,{icon:L0,color:e.mediumGray,size:"xl"})})]}),w(jh,{baseColor:e.lightGray})]})})},J3=$.div`
  ${({theme:{boxShadow:e,colors:t}})=>F`
    box-shadow: ${e.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${t.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`,Z3=$.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;$.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`;$.div`
  margin-bottom: -3px;
`;$.div`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`;$.div`
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
`;const e$=({stats:e})=>N(J3,{children:[w("h3",{children:"Stats"}),w(Z3,{children:e.map(t=>w(sd,{name:t.stat.name,maxValue:t.base_stat,currentValue:t.base_stat},t.stat.name))})]}),Jg=$.div`
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
`,Zg=$.div`
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
`,ey=$.div`
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
`,ty=$.div`
  ${({theme:{breakpoints:e}})=>F`
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
`,ny=$.div`
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
`,t$=$.p`
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
`,ry=$.div`
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
`,ps=$.div`
  ${({theme:{colors:e,breakpoints:t}})=>F`
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
`,Wh=$.div`
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
`,iy=$.div`
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
`,oy=$.h1`
  font-family: 'Lato', sans-serif;
`,Qh=$(Qn)`
  border-radius: 99px;
`,n$=()=>{var u;const[e,t]=x.exports.useState(),[n,r]=x.exports.useState(),[i,o]=x.exports.useState(!1),a=Rf(),s=x.exports.useCallback(async()=>{if(a!=null&&a.id){o(!0);const c=await BE(a.id),f=await uo(a.id);t(c),r(f),o(!1)}},[a.id]),{colors:l}=pr();return x.exports.useEffect(()=>{s(),window.onbeforeunload=function(){window.scrollTo(0,0)}},[a.id,s]),N(Jg,{children:[i&&w(r$,{}),!i&&a.id&&n?N(Zg,{children:[N(ry,{type:n.types[0].type.name,children:[N(kn,{to:`/pokemon/${Number(n==null?void 0:n.id)>1?Number(n==null?void 0:n.id)-1:1}`,children:[N(ps,{children:[w(Ne,{icon:ic}),w("p",{children:"PREV POKEMON"})]}),w(Wh,{children:w(Ne,{icon:ic,size:"2x",color:l.white})})]}),w(iy,{type:n.types[0].type.name,children:w("img",{src:n.sprites.other["official-artwork"].front_default||n.sprites.front_default,alt:n.name})}),N(kn,{to:`/pokemon/${Number(n.id)+1}`,children:[N(ps,{children:[w("p",{children:"NEXT POKEMON"}),w(Ne,{icon:rc})]}),w(Wh,{isRight:!0,children:w(Ne,{icon:rc,size:"2x",color:l.white})})]})]}),N(oy,{children:["#",e==null?void 0:e.id," ",e==null?void 0:e.name.toUpperCase()]}),N(ey,{children:[N(ty,{children:[N(ny,{children:[w(t$,{children:(u=e==null?void 0:e.flavor_text_entries.find(c=>c.language.name==="en"))==null?void 0:u.flavor_text.replace(/\f/g," ")}),w("div",{children:n.types.map(c=>w(pd,{typeName:c.type.name},c.type.name))})]}),w(e$,{stats:n.stats})]}),e?w(q3,{url:e==null?void 0:e.evolution_chain.url}):null]})]}):null]})},r$=()=>{const{colors:e}=pr();return w(Jg,{children:N(Zg,{children:[N(ry,{type:"normal",children:[N(ps,{children:[w(Ne,{icon:ic}),w("p",{children:"PREV POKEMON"})]}),w(iy,{type:"normal",children:w(Qn,{width:200,height:200,circle:!0,baseColor:e.lightGray})}),N(ps,{children:[w("p",{children:"NEXT POKEMON"}),w(Ne,{icon:rc})]})]}),w(oy,{children:w(Qn,{width:180,baseColor:e.lightGray,height:45})}),N(ey,{children:[N(ty,{children:[N(ny,{children:[w("div",{children:w(Qn,{width:300,height:150,baseColor:e.lightGray})}),N("div",{children:[w(Qh,{width:300,height:35,baseColor:e.lightGray}),w(Qh,{width:300,height:35,baseColor:e.lightGray})]})]}),w(Qn,{width:330,height:330,baseColor:e.lightGray})]}),w(Qn,{width:250,height:35,baseColor:e.lightGray}),w(X3,{})]})]})})},i$=rb`
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
`,o$={colors:{white:"#F3F4F6",lightestGray:"#F3F4F6",lightGray:"#D1D5DB",mediumGray:"#6B7280",darkGray:"#1F2937",black:"#111827",lightBlue:"#7DD3FC",mediumBlue:"#0284C7",darkBlue:"#075985",green:"#55ab62",grassGreenLight:"#ADD46F",grassGreenDark:"#7DC67E",yellow:"#feee6d",yellowMedium:"#FACC15",mediumYellow:"#c7a400",darkYellow:"#9f8a0d",red:"#e5092e",pokedexGreen:"#bad8a8",pokedexLight:"#ce1131",pokedexMedium:"#bd0f33",pokedexDark:"#941828",pokedexDarkest:"#810a1e"},breakpoints:{xs:"390px",sm:"480px",md:"768px",lg:"1024px",xl:"1440px"},spacing:{headerSpacing:"75px"},boxShadow:{dark:"0 0 6px rgba(0, 0, 0, 0.3)",light:"0 0 4px rgba(0, 0, 0, 0.1)"},typesColors:{normal:{primaryColor:"#A8A878",secondaryColor:"#6D6D4E"},fighting:{primaryColor:"#C03028",secondaryColor:"#D67873"},flying:{primaryColor:"#A890F0",secondaryColor:"#6D5E9C"},poison:{primaryColor:"#A040A0",secondaryColor:"#682A68"},ground:{primaryColor:"#E0C068",secondaryColor:"#927D44"},rock:{primaryColor:"#B8A038",secondaryColor:"#786824"},bug:{primaryColor:"#A8B820",secondaryColor:"#6D7815"},ghost:{primaryColor:"#705898",secondaryColor:"#493963"},steel:{primaryColor:"#B8B8D0",secondaryColor:"#787887"},fire:{primaryColor:"#F08030",secondaryColor:"#9C531F"},water:{primaryColor:"#6890F0",secondaryColor:"#445E9C"},grass:{primaryColor:"#78C850",secondaryColor:"#4E8234"},electric:{primaryColor:"#F8D030",secondaryColor:"#A1871F"},psychic:{primaryColor:"#F85888",secondaryColor:"#A13959"},ice:{primaryColor:"#98D8D8",secondaryColor:"#638D8D"},dragon:{primaryColor:"#7038F8",secondaryColor:"#4924A1"},dark:{primaryColor:"#705848",secondaryColor:"#49392F"},fairy:{primaryColor:"#EE99AC",secondaryColor:"#9B6470"},unknown:{primaryColor:"#68A090",secondaryColor:"#44685E"},shadow:{primaryColor:"#705898",secondaryColor:"#493963"}}},a$="/pokedex/";function s$(){const e=new Hx;return w(tb,{theme:o$,children:N(tw,{client:e,children:[w(o2,{basename:a$,children:w(vC,{children:w(e2,{children:N(Wn,{path:"/",children:[w(Wn,{index:!0,element:w(l3,{})}),w(Wn,{path:"pokedex/:id",element:w(V3,{})}),w(Wn,{path:"pokemon/:id",element:w(n$,{})}),w(Wn,{path:"battle",element:w(GE,{})}),w(Wn,{path:"*",element:w("div",{children:"Not found"})})]})})})}),w(i$,{})]})})}ql.createRoot(document.getElementById("root")).render(w(J.StrictMode,{children:w(s$,{})}));
