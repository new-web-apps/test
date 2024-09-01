const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-DKmRIOzc.js","assets/AboutView-C6Dx7pxG.css","assets/LoginView-EkIqo-eS.js","assets/LoginView-DyJOYx0E.css","assets/RegisterView-CpgRxkNc.js","assets/RegisterView-CvowKOU-.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vs(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const ce={},rn=[],Le=()=>{},wl=()=>!1,Ar=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),js=t=>t.startsWith("onUpdate:"),ve=Object.assign,Bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},El=Object.prototype.hasOwnProperty,Y=(t,e)=>El.call(t,e),F=Array.isArray,sn=t=>Pr(t)==="[object Map]",Zo=t=>Pr(t)==="[object Set]",V=t=>typeof t=="function",ge=t=>typeof t=="string",Pt=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",ea=t=>(ue(t)||V(t))&&V(t.then)&&V(t.catch),ta=Object.prototype.toString,Pr=t=>ta.call(t),Il=t=>Pr(t).slice(8,-1),na=t=>Pr(t)==="[object Object]",zs=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tn=Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sl=/-(\w)/g,Fe=Or(t=>t.replace(Sl,(e,n)=>n?n.toUpperCase():"")),Tl=/\B([A-Z])/g,Gt=Or(t=>t.replace(Tl,"-$1").toLowerCase()),kr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),qr=Or(t=>t?`on${kr(t)}`:""),Rt=(t,e)=>!Object.is(t,e),ar=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ra=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Si;const sa=()=>Si||(Si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ws(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?Pl(r):Ws(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||ue(t))return t}const Cl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Al=/\/\*[^]*?\*\//g;function Pl(t){const e={};return t.replace(Al,"").split(Cl).forEach(n=>{if(n){const r=n.split(Rl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ks(t){let e="";if(ge(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ks(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kl=Vs(Ol);function ia(t){return!!t||t===""}const oa=t=>!!(t&&t.__v_isRef===!0),aa=t=>ge(t)?t:t==null?"":F(t)||ue(t)&&(t.toString===ta||!V(t.toString))?oa(t)?aa(t.value):JSON.stringify(t,ca,2):String(t),ca=(t,e)=>oa(e)?ca(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Gr(r,i)+" =>"]=s,n),{})}:Zo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gr(n))}:Pt(e)?Gr(e):ue(e)&&!F(e)&&!na(e)?String(e):e,Gr=(t,e="")=>{var n;return Pt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class la{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ua(t){return new la(t)}function Ml(t,e=Ae){e&&e.active&&e.effects.push(t)}function fa(){return Ae}function Nl(t){Ae&&Ae.cleanups.push(t)}let Vt;class qs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ml(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ot();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ll(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),kt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=It,n=Vt;try{return It=!0,Vt=this,this._runnings++,Ti(this),this.fn()}finally{Ci(this),this._runnings--,Vt=n,It=e}}stop(){this.active&&(Ti(this),Ci(this),this.onStop&&this.onStop(),this.active=!1)}}function Ll(t){return t.value}function Ti(t){t._trackId++,t._depsLength=0}function Ci(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)da(t.deps[e],t);t.deps.length=t._depsLength}}function da(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let It=!0,ms=0;const ha=[];function Ot(){ha.push(It),It=!1}function kt(){const t=ha.pop();It=t===void 0?!0:t}function Gs(){ms++}function Js(){for(ms--;!ms&&_s.length;)_s.shift()()}function pa(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&da(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const _s=[];function ga(t,e,n){Gs();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&_s.push(r.scheduler)))}Js()}const ma=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},mr=new WeakMap,jt=Symbol(""),vs=Symbol("");function Te(t,e,n){if(It&&Vt){let r=mr.get(t);r||mr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ma(()=>r.delete(n))),pa(Vt,s)}}function rt(t,e,n,r,s,i){const o=mr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||!Pt(f)&&f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?zs(n)&&c.push(o.get("length")):(c.push(o.get(jt)),sn(t)&&c.push(o.get(vs)));break;case"delete":F(t)||(c.push(o.get(jt)),sn(t)&&c.push(o.get(vs)));break;case"set":sn(t)&&c.push(o.get(jt));break}Gs();for(const a of c)a&&ga(a,4);Js()}function Dl(t,e){const n=mr.get(t);return n&&n.get(e)}const xl=Vs("__proto__,__v_isRef,__isVue"),_a=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pt)),Ri=Ul();function Ul(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ot(),Gs();const r=X(this)[e].apply(this,n);return Js(),kt(),r}}),t}function Fl(t){Pt(t)||(t=String(t));const e=X(this);return Te(e,"has",t),e.hasOwnProperty(t)}class va{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xl:Ea:i?wa:ba).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&Y(Ri,n))return Reflect.get(Ri,n,r);if(n==="hasOwnProperty")return Fl}const c=Reflect.get(e,n,r);return(Pt(n)?_a.has(n):xl(n))||(s||Te(e,"get",n),i)?c:fe(c)?o&&zs(n)?c:c.value:ue(c)?s?Sa(c):zn(c):c}}class ya extends va{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Wt(i);if(!fn(r)&&!Wt(r)&&(i=X(i),r=X(r)),!F(e)&&fe(i)&&!fe(r))return a?!1:(i.value=r,!0)}const o=F(e)&&zs(n)?Number(n)<e.length:Y(e,n),c=Reflect.set(e,n,r,s);return e===X(s)&&(o?Rt(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),c}deleteProperty(e,n){const r=Y(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pt(n)||!_a.has(n))&&Te(e,"has",n),r}ownKeys(e){return Te(e,"iterate",F(e)?"length":jt),Reflect.ownKeys(e)}}class $l extends va{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hl=new ya,Vl=new $l,jl=new ya(!0);const Ys=t=>t,Mr=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,r=!1){t=t.__v_raw;const s=X(t),i=X(e);n||(Rt(e,i)&&Te(s,"get",e),Te(s,"get",i));const{has:o}=Mr(s),c=r?Ys:n?ei:Ln;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,r=X(n),s=X(t);return e||(Rt(t,s)&&Te(r,"has",t),Te(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&Te(X(t),"iterate",jt),Reflect.get(t,"size",t)}function Ai(t,e=!1){!e&&!fn(t)&&!Wt(t)&&(t=X(t));const n=X(this);return Mr(n).has.call(n,t)||(n.add(t),rt(n,"add",t,t)),this}function Pi(t,e,n=!1){!n&&!fn(e)&&!Wt(e)&&(e=X(e));const r=X(this),{has:s,get:i}=Mr(r);let o=s.call(r,t);o||(t=X(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Rt(e,c)&&rt(r,"set",t,e):rt(r,"add",t,e),this}function Oi(t){const e=X(this),{has:n,get:r}=Mr(e);let s=n.call(e,t);s||(t=X(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function ki(){const t=X(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,c=X(o),a=e?Ys:t?ei:Ln;return!t&&Te(c,"iterate",jt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=sn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Ys:e?ei:Ln;return!e&&Te(i,"iterate",a?vs:jt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function ft(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bl(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:Ai,set:Pi,delete:Oi,clear:ki,forEach:rr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add(i){return Ai.call(this,i,!0)},set(i,o){return Pi.call(this,i,o,!0)},delete:Oi,clear:ki,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[zl,Wl,Kl,ql]=Bl();function Xs(t,e){const n=e?t?ql:Kl:t?Wl:zl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const Gl={get:Xs(!1,!1)},Jl={get:Xs(!1,!0)},Yl={get:Xs(!0,!1)};const ba=new WeakMap,wa=new WeakMap,Ea=new WeakMap,Xl=new WeakMap;function Ql(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(t){return t.__v_skip||!Object.isExtensible(t)?0:Ql(Il(t))}function zn(t){return Wt(t)?t:Qs(t,!1,Hl,Gl,ba)}function Ia(t){return Qs(t,!1,jl,Jl,wa)}function Sa(t){return Qs(t,!0,Vl,Yl,Ea)}function Qs(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Zl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Bt(t){return Wt(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function Ta(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Zs(t){return Object.isExtensible(t)&&ra(t,"__v_skip",!0),t}const Ln=t=>ue(t)?zn(t):t,ei=t=>ue(t)?Sa(t):t;class Ca{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qs(()=>e(this._value),()=>cr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=X(this);return(!e._cacheable||e.effect.dirty)&&Rt(e._value,e._value=e.effect.run())&&cr(e,4),Ra(e),e.effect._dirtyLevel>=2&&cr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function eu(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=Le):(r=t.get,s=t.set),new Ca(r,s,i||!s,n)}function Ra(t){var e;It&&Vt&&(t=X(t),pa(Vt,(e=t.dep)!=null?e:t.dep=ma(()=>t.dep=void 0,t instanceof Ca?t:void 0)))}function cr(t,e=4,n,r){t=X(t);const s=t.dep;s&&ga(s,e)}function fe(t){return!!(t&&t.__v_isRef===!0)}function Nr(t){return Aa(t,!1)}function tu(t){return Aa(t,!0)}function Aa(t,e){return fe(t)?t:new nu(t,e)}class nu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Ln(e)}get value(){return Ra(this),this._value}set value(e){const n=this.__v_isShallow||fn(e)||Wt(e);e=n?e:X(e),Rt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Ln(e),cr(this,4))}}function qe(t){return fe(t)?t.value:t}const ru={get:(t,e,n)=>qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pa(t){return Bt(t)?t:new Proxy(t,ru)}function su(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=ou(t,n);return e}class iu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dl(X(this._object),this._key)}}function ou(t,e,n){const r=t[e];return fe(r)?r:new iu(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function St(t,e,n,r){try{return r?t(...r):t()}catch(s){Lr(s,e,n)}}function Ue(t,e,n,r){if(V(t)){const s=St(t,e,n,r);return s&&ea(s)&&s.catch(i=>{Lr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ue(t[i],e,n,r));return s}}function Lr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Ot(),St(a,null,10,[t,o,c]),kt();return}}au(t,n,s,r)}function au(t,e,n,r=!0){console.error(t)}let Dn=!1,ys=!1;const _e=[];let Ke=0;const on=[];let gt=null,Ht=0;const Oa=Promise.resolve();let ti=null;function ni(t){const e=ti||Oa;return t?e.then(this?t.bind(this):t):e}function cu(t){let e=Ke+1,n=_e.length;for(;e<n;){const r=e+n>>>1,s=_e[r],i=xn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ri(t){(!_e.length||!_e.includes(t,Dn&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?_e.push(t):_e.splice(cu(t.id),0,t),ka())}function ka(){!Dn&&!ys&&(ys=!0,ti=Oa.then(Na))}function lu(t){const e=_e.indexOf(t);e>Ke&&_e.splice(e,1)}function uu(t){F(t)?on.push(...t):(!gt||!gt.includes(t,t.allowRecurse?Ht+1:Ht))&&on.push(t),ka()}function Mi(t,e,n=Dn?Ke+1:0){for(;n<_e.length;n++){const r=_e[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;_e.splice(n,1),n--,r()}}}function Ma(t){if(on.length){const e=[...new Set(on)].sort((n,r)=>xn(n)-xn(r));if(on.length=0,gt){gt.push(...e);return}for(gt=e,Ht=0;Ht<gt.length;Ht++){const n=gt[Ht];n.active!==!1&&n()}gt=null,Ht=0}}const xn=t=>t.id==null?1/0:t.id,fu=(t,e)=>{const n=xn(t)-xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Na(t){ys=!1,Dn=!0,_e.sort(fu);try{for(Ke=0;Ke<_e.length;Ke++){const e=_e[Ke];e&&e.active!==!1&&St(e,e.i,e.i?15:14)}}finally{Ke=0,_e.length=0,Ma(),Dn=!1,ti=null,(_e.length||on.length)&&Na()}}let pe=null,Dr=null;function _r(t){const e=pe;return pe=t,Dr=t&&t.type.__scopeId||null,e}function La(t){Dr=t}function Da(){Dr=null}function he(t,e=pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Vi(-1);const i=_r(e);let o;try{o=t(...s)}finally{_r(i),r._d&&Vi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function uv(t,e){if(pe===null)return t;const n=Hr(pe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=ce]=e[s];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&vt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Ut(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Ot(),Ue(a,n,8,[t.el,c,t,e]),kt())}}function xa(t,e){t.shapeFlag&6&&t.component?xa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function mn(t,e){return V(t)?ve({name:t.name},e,{setup:t}):t}const Cn=t=>!!t.type.__asyncLoader,Ua=t=>t.type.__isKeepAlive;function du(t,e){Fa(t,"a",e)}function hu(t,e){Fa(t,"da",e)}function Fa(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ua(s.parent.vnode)&&pu(r,e,n,s),s=s.parent}}function pu(t,e,n,r){const s=xr(e,t,r,!0);Ha(()=>{Bs(r[e],s)},n)}function xr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ot();const c=Wn(n),a=Ue(e,n,t,o);return c(),kt(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=me)=>{(!$r||t==="sp")&&xr(t,(...r)=>e(...r),n)},$a=at("bm"),gu=at("m"),mu=at("bu"),_u=at("u"),vu=at("bum"),Ha=at("um"),yu=at("sp"),bu=at("rtg"),wu=at("rtc");function Eu(t,e=me){xr("ec",t,e)}const Iu="components";function fv(t,e){return Tu(Iu,t,!0,e)||t}const Su=Symbol.for("v-ndc");function Tu(t,e,n=!0,r=!1){const s=pe||me;if(s){const i=s.type;{const c=_f(i,!1);if(c&&(c===e||c===Fe(e)||c===kr(Fe(e))))return i}const o=Ni(s[t]||i[t],e)||Ni(s.appContext[t],e);return!o&&r?i:o}}function Ni(t,e){return t&&(t[e]||t[Fe(e)]||t[kr(Fe(e))])}function Jr(t,e,n={},r,s){if(pe.isCE||pe.parent&&Cn(pe.parent)&&pe.parent.isCE)return e!=="default"&&(n.name=e),re("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),ke();const o=i&&Va(i(n)),c=ic(Pe,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Va(t){return t.some(e=>yr(e)?!(e.type===At||e.type===Pe&&!Va(e.children)):!0)?t:null}const bs=t=>t?ac(t)?Hr(t):bs(t.parent):null,Rn=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bs(t.parent),$root:t=>bs(t.root),$emit:t=>t.emit,$options:t=>si(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ri(t.update)}),$nextTick:t=>t.n||(t.n=ni.bind(t.proxy)),$watch:t=>Ju.bind(t)}),Yr=(t,e)=>t!==ce&&!t.__isScriptSetup&&Y(t,e),Cu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yr(r,e))return o[e]=1,r[e];if(s!==ce&&Y(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Y(l,e))return o[e]=3,i[e];if(n!==ce&&Y(n,e))return o[e]=4,n[e];ws&&(o[e]=0)}}const f=Rn[e];let h,p;if(f)return e==="$attrs"&&Te(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==ce&&Y(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,Y(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yr(s,e)?(s[e]=n,!0):r!==ce&&Y(r,e)?(r[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ce&&Y(t,o)||Yr(e,o)||(c=i[0])&&Y(c,o)||Y(r,o)||Y(Rn,o)||Y(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Li(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ws=!0;function Ru(t){const e=si(t),n=t.proxy,r=t.ctx;ws=!1,e.beforeCreate&&Di(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:C,activated:R,deactivated:U,beforeDestroy:D,beforeUnmount:M,destroyed:O,unmounted:q,render:G,renderTracked:$,renderTriggered:Q,errorCaptured:B,serverPrefetch:z,expose:ie,inheritAttrs:ye,components:Ce,directives:Ee,filters:xt}=e;if(l&&Au(l,r,null),o)for(const j in o){const Z=o[j];V(Z)&&(r[j]=Z.bind(n))}if(s){const j=s.call(n,n);ue(j)&&(t.data=zn(j))}if(ws=!0,i)for(const j in i){const Z=i[j],Xe=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):Le,ut=!V(Z)&&V(Z.set)?Z.set.bind(n):Le,je=Ne({get:Xe,set:ut});Object.defineProperty(r,j,{enumerable:!0,configurable:!0,get:()=>je.value,set:Ie=>je.value=Ie})}if(c)for(const j in c)ja(c[j],r,n,j);if(a){const j=V(a)?a.call(n):a;Reflect.ownKeys(j).forEach(Z=>{lr(Z,j[Z])})}f&&Di(f,t,"c");function ae(j,Z){F(Z)?Z.forEach(Xe=>j(Xe.bind(n))):Z&&j(Z.bind(n))}if(ae($a,h),ae(gu,p),ae(mu,m),ae(_u,C),ae(du,R),ae(hu,U),ae(Eu,B),ae(wu,$),ae(bu,Q),ae(vu,M),ae(Ha,q),ae(yu,z),F(ie))if(ie.length){const j=t.exposed||(t.exposed={});ie.forEach(Z=>{Object.defineProperty(j,Z,{get:()=>n[Z],set:Xe=>n[Z]=Xe})})}else t.exposed||(t.exposed={});G&&t.render===Le&&(t.render=G),ye!=null&&(t.inheritAttrs=ye),Ce&&(t.components=Ce),Ee&&(t.directives=Ee)}function Au(t,e,n=Le){F(t)&&(t=Es(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=De(s.from||r,s.default,!0):i=De(s.from||r):i=De(s),fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Di(t,e,n){Ue(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ja(t,e,n,r){const s=r.includes(".")?nc(n,r):()=>n[r];if(ge(t)){const i=e[t];V(i)&&An(s,i)}else if(V(t))An(s,t.bind(n));else if(ue(t))if(F(t))t.forEach(i=>ja(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&An(s,i,t)}}function si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>vr(a,l,o,!0)),vr(a,e,o)),ue(e)&&i.set(e,a),a}function vr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vr(t,i,n,!0),s&&s.forEach(o=>vr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Pu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Pu={data:xi,props:Ui,emits:Ui,methods:En,computed:En,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:En,directives:En,watch:ku,provide:xi,inject:Ou};function xi(t,e){return e?t?function(){return ve(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Ou(t,e){return En(Es(t),Es(e))}function Es(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ve(Object.create(null),t,e):e}function Ui(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ve(Object.create(null),Li(t),Li(e??{})):e}function ku(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=be(t[r],e[r]);return n}function Ba(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mu=0;function Nu(t,e){return function(r,s=null){V(r)||(r=ve({},r)),s!=null&&!ue(s)&&(s=null);const i=Ba(),o=new WeakSet;let c=!1;const a=i.app={_uid:Mu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(a,...f)):V(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const p=re(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,Hr(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){const f=zt;zt=a;try{return l()}finally{zt=f}}};return a}}let zt=null;function lr(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function De(t,e,n=!1){const r=me||pe;if(r||zt){const s=zt?zt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}function Lu(){return!!(me||pe||zt)}const za={},Wa=()=>Object.create(za),Ka=t=>Object.getPrototypeOf(t)===za;function Du(t,e,n,r=!1){const s={},i=Wa();t.propsDefaults=Object.create(null),qa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ia(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=X(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Ur(t.emitsOptions,p))continue;const m=e[p];if(a)if(Y(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const C=Fe(p);s[C]=Is(a,c,C,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{qa(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!Y(e,h)&&((f=Gt(h))===h||!Y(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Is(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!Y(e,h))&&(delete i[h],l=!0)}l&&rt(t.attrs,"set","")}function qa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Tn(a))continue;const l=e[a];let f;s&&Y(s,f=Fe(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Ur(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=X(n),l=c||ce;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Is(s,a,h,l[h],t,!Y(l,h))}}return o}function Is(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Y(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Wn(s);r=l[n]=a.call(null,e),f()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}const Uu=new WeakMap;function Ga(t,e,n=!1){const r=n?Uu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const f=h=>{a=!0;const[p,m]=Ga(h,e,!0);ve(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return ue(t)&&r.set(t,rn),rn;if(F(i))for(let f=0;f<i.length;f++){const h=Fe(i[f]);Fi(h)&&(o[h]=ce)}else if(i)for(const f in i){const h=Fe(f);if(Fi(h)){const p=i[f],m=o[h]=F(p)||V(p)?{type:p}:ve({},p),C=m.type;let R=!1,U=!0;if(F(C))for(let D=0;D<C.length;++D){const M=C[D],O=V(M)&&M.name;if(O==="Boolean"){R=!0;break}else O==="String"&&(U=!1)}else R=V(C)&&C.name==="Boolean";m[0]=R,m[1]=U,(R||Y(m,"default"))&&c.push(h)}}const l=[o,c];return ue(t)&&r.set(t,l),l}function Fi(t){return t[0]!=="$"&&!Tn(t)}const Ja=t=>t[0]==="_"||t==="$stable",ii=t=>F(t)?t.map(We):[We(t)],Fu=(t,e,n)=>{if(e._n)return e;const r=he((...s)=>ii(e(...s)),n);return r._c=!1,r},Ya=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ja(s))continue;const i=t[s];if(V(i))e[s]=Fu(s,i,r);else if(i!=null){const o=ii(i);e[s]=()=>o}}},Xa=(t,e)=>{const n=ii(e);t.slots.default=()=>n},Qa=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},$u=(t,e,n)=>{const r=t.slots=Wa();if(t.vnode.shapeFlag&32){const s=e._;s?(Qa(r,e,n),n&&ra(r,"_",s,!0)):Ya(e,r)}else e&&Xa(t,e)},Hu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Qa(s,e,n):(i=!e.$stable,Ya(e,s)),o=e}else e&&(Xa(t,e),o={default:1});if(i)for(const c in s)!Ja(c)&&o[c]==null&&delete s[c]};function Ss(t,e,n,r,s=!1){if(F(t)){t.forEach((p,m)=>Ss(p,e&&(F(e)?e[m]:e),n,r,s));return}if(Cn(r)&&!s)return;const i=r.shapeFlag&4?Hr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===ce?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ge(l)?(f[l]=null,Y(h,l)&&(h[l]=null)):fe(l)&&(l.value=null)),V(a))St(a,c,12,[o,f]);else{const p=ge(a),m=fe(a);if(p||m){const C=()=>{if(t.f){const R=p?Y(h,a)?h[a]:f[a]:a.value;s?F(R)&&Bs(R,i):F(R)?R.includes(i)||R.push(i):p?(f[a]=[i],Y(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else p?(f[a]=o,Y(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,Se(C,n)):C()}}}const Vu=Symbol("_vte"),ju=t=>t.__isTeleport,Se=rf;function Bu(t){return zu(t)}function zu(t,e){const n=sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=Le,insertStaticContent:C}=t,R=(u,d,g,y=null,_=null,w=null,S=void 0,E=null,I=!!d.dynamicChildren)=>{if(u===d)return;u&&!yn(u,d)&&(y=v(u),Ie(u,_,w,!0),u=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:P,shapeFlag:L}=d;switch(b){case Fr:U(u,d,g,y);break;case At:D(u,d,g,y);break;case Zr:u==null&&M(d,g,y,S);break;case Pe:Ce(u,d,g,y,_,w,S,E,I);break;default:L&1?G(u,d,g,y,_,w,S,E,I):L&6?Ee(u,d,g,y,_,w,S,E,I):(L&64||L&128)&&b.process(u,d,g,y,_,w,S,E,I,k)}P!=null&&_&&Ss(P,u&&u.ref,w,d||u,!d)},U=(u,d,g,y)=>{if(u==null)r(d.el=c(d.children),g,y);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},D=(u,d,g,y)=>{u==null?r(d.el=a(d.children||""),g,y):d.el=u.el},M=(u,d,g,y)=>{[u.el,u.anchor]=C(u.children,d,g,y,u.el,u.anchor)},O=({el:u,anchor:d},g,y)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,y),u=_;r(d,g,y)},q=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},G=(u,d,g,y,_,w,S,E,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?$(d,g,y,_,w,S,E,I):z(u,d,_,w,S,E,I)},$=(u,d,g,y,_,w,S,E)=>{let I,b;const{props:P,shapeFlag:L,transition:N,dirs:H}=u;if(I=u.el=o(u.type,w,P&&P.is,P),L&8?f(I,u.children):L&16&&B(u.children,I,null,y,_,Xr(u,w),S,E),H&&Ut(u,null,y,"created"),Q(I,u,u.scopeId,S,y),P){for(const oe in P)oe!=="value"&&!Tn(oe)&&i(I,oe,null,P[oe],w,y);"value"in P&&i(I,"value",null,P.value,w),(b=P.onVnodeBeforeMount)&&ze(b,y,u)}H&&Ut(u,null,y,"beforeMount");const W=Wu(_,N);W&&N.beforeEnter(I),r(I,d,g),((b=P&&P.onVnodeMounted)||W||H)&&Se(()=>{b&&ze(b,y,u),W&&N.enter(I),H&&Ut(u,null,y,"mounted")},_)},Q=(u,d,g,y,_)=>{if(g&&m(u,g),y)for(let w=0;w<y.length;w++)m(u,y[w]);if(_){let w=_.subTree;if(d===w){const S=_.vnode;Q(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},B=(u,d,g,y,_,w,S,E,I=0)=>{for(let b=I;b<u.length;b++){const P=u[b]=E?mt(u[b]):We(u[b]);R(null,P,d,g,y,_,w,S,E)}},z=(u,d,g,y,_,w,S)=>{const E=d.el=u.el;let{patchFlag:I,dynamicChildren:b,dirs:P}=d;I|=u.patchFlag&16;const L=u.props||ce,N=d.props||ce;let H;if(g&&Ft(g,!1),(H=N.onVnodeBeforeUpdate)&&ze(H,g,d,u),P&&Ut(d,u,g,"beforeUpdate"),g&&Ft(g,!0),(L.innerHTML&&N.innerHTML==null||L.textContent&&N.textContent==null)&&f(E,""),b?ie(u.dynamicChildren,b,E,g,y,Xr(d,_),w):S||Z(u,d,E,null,g,y,Xr(d,_),w,!1),I>0){if(I&16)ye(E,L,N,g,_);else if(I&2&&L.class!==N.class&&i(E,"class",null,N.class,_),I&4&&i(E,"style",L.style,N.style,_),I&8){const W=d.dynamicProps;for(let oe=0;oe<W.length;oe++){const ee=W[oe],de=L[ee],xe=N[ee];(xe!==de||ee==="value")&&i(E,ee,de,xe,_,g)}}I&1&&u.children!==d.children&&f(E,d.children)}else!S&&b==null&&ye(E,L,N,g,_);((H=N.onVnodeUpdated)||P)&&Se(()=>{H&&ze(H,g,d,u),P&&Ut(d,u,g,"updated")},y)},ie=(u,d,g,y,_,w,S)=>{for(let E=0;E<d.length;E++){const I=u[E],b=d[E],P=I.el&&(I.type===Pe||!yn(I,b)||I.shapeFlag&70)?h(I.el):g;R(I,b,P,null,y,_,w,S,!0)}},ye=(u,d,g,y,_)=>{if(d!==g){if(d!==ce)for(const w in d)!Tn(w)&&!(w in g)&&i(u,w,d[w],null,_,y);for(const w in g){if(Tn(w))continue;const S=g[w],E=d[w];S!==E&&w!=="value"&&i(u,w,E,S,_,y)}"value"in g&&i(u,"value",d.value,g.value,_)}},Ce=(u,d,g,y,_,w,S,E,I)=>{const b=d.el=u?u.el:c(""),P=d.anchor=u?u.anchor:c("");let{patchFlag:L,dynamicChildren:N,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(r(b,g,y),r(P,g,y),B(d.children||[],g,P,_,w,S,E,I)):L>0&&L&64&&N&&u.dynamicChildren?(ie(u.dynamicChildren,N,g,_,w,S,E),(d.key!=null||_&&d===_.subTree)&&Za(u,d,!0)):Z(u,d,g,P,_,w,S,E,I)},Ee=(u,d,g,y,_,w,S,E,I)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?_.ctx.activate(d,g,y,S,I):xt(d,g,y,_,w,S,I):lt(u,d,I)},xt=(u,d,g,y,_,w,S)=>{const E=u.component=df(u,y,_);if(Ua(u)&&(E.ctx.renderer=k),hf(E,!1,S),E.asyncDep){if(_&&_.registerDep(E,ae,S),!u.el){const I=E.subTree=re(At);D(null,I,d,g)}}else ae(E,u,d,g,_,w,S)},lt=(u,d,g)=>{const y=d.component=u.component;if(ef(u,d,g))if(y.asyncDep&&!y.asyncResolved){j(y,d,g);return}else y.next=d,lu(y.update),y.effect.dirty=!0,y.update();else d.el=u.el,y.vnode=d},ae=(u,d,g,y,_,w,S)=>{const E=()=>{if(u.isMounted){let{next:P,bu:L,u:N,parent:H,vnode:W}=u;{const Qt=ec(u);if(Qt){P&&(P.el=W.el,j(u,P,S)),Qt.asyncDep.then(()=>{u.isUnmounted||E()});return}}let oe=P,ee;Ft(u,!1),P?(P.el=W.el,j(u,P,S)):P=W,L&&ar(L),(ee=P.props&&P.props.onVnodeBeforeUpdate)&&ze(ee,H,P,W),Ft(u,!0);const de=Qr(u),xe=u.subTree;u.subTree=de,R(xe,de,h(xe.el),v(xe),u,_,w),P.el=de.el,oe===null&&tf(u,de.el),N&&Se(N,_),(ee=P.props&&P.props.onVnodeUpdated)&&Se(()=>ze(ee,H,P,W),_)}else{let P;const{el:L,props:N}=d,{bm:H,m:W,parent:oe}=u,ee=Cn(d);if(Ft(u,!1),H&&ar(H),!ee&&(P=N&&N.onVnodeBeforeMount)&&ze(P,oe,d),Ft(u,!0),L&&le){const de=()=>{u.subTree=Qr(u),le(L,u.subTree,u,_,null)};ee?d.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=Qr(u);R(null,de,g,y,u,_,w),d.el=de.el}if(W&&Se(W,_),!ee&&(P=N&&N.onVnodeMounted)){const de=d;Se(()=>ze(P,oe,de),_)}(d.shapeFlag&256||oe&&Cn(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Se(u.a,_),u.isMounted=!0,d=g=y=null}},I=u.effect=new qs(E,Le,()=>ri(b),u.scope),b=u.update=()=>{I.dirty&&I.run()};b.i=u,b.id=u.uid,Ft(u,!0),b()},j=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,xu(u,d.props,y,g),Hu(u,d.children,g),Ot(),Mi(u),kt()},Z=(u,d,g,y,_,w,S,E,I=!1)=>{const b=u&&u.children,P=u?u.shapeFlag:0,L=d.children,{patchFlag:N,shapeFlag:H}=d;if(N>0){if(N&128){ut(b,L,g,y,_,w,S,E,I);return}else if(N&256){Xe(b,L,g,y,_,w,S,E,I);return}}H&8?(P&16&&Me(b,_,w),L!==b&&f(g,L)):P&16?H&16?ut(b,L,g,y,_,w,S,E,I):Me(b,_,w,!0):(P&8&&f(g,""),H&16&&B(L,g,y,_,w,S,E,I))},Xe=(u,d,g,y,_,w,S,E,I)=>{u=u||rn,d=d||rn;const b=u.length,P=d.length,L=Math.min(b,P);let N;for(N=0;N<L;N++){const H=d[N]=I?mt(d[N]):We(d[N]);R(u[N],H,g,null,_,w,S,E,I)}b>P?Me(u,_,w,!0,!1,L):B(d,g,y,_,w,S,E,I,L)},ut=(u,d,g,y,_,w,S,E,I)=>{let b=0;const P=d.length;let L=u.length-1,N=P-1;for(;b<=L&&b<=N;){const H=u[b],W=d[b]=I?mt(d[b]):We(d[b]);if(yn(H,W))R(H,W,g,null,_,w,S,E,I);else break;b++}for(;b<=L&&b<=N;){const H=u[L],W=d[N]=I?mt(d[N]):We(d[N]);if(yn(H,W))R(H,W,g,null,_,w,S,E,I);else break;L--,N--}if(b>L){if(b<=N){const H=N+1,W=H<P?d[H].el:y;for(;b<=N;)R(null,d[b]=I?mt(d[b]):We(d[b]),g,W,_,w,S,E,I),b++}}else if(b>N)for(;b<=L;)Ie(u[b],_,w,!0),b++;else{const H=b,W=b,oe=new Map;for(b=W;b<=N;b++){const Re=d[b]=I?mt(d[b]):We(d[b]);Re.key!=null&&oe.set(Re.key,b)}let ee,de=0;const xe=N-W+1;let Qt=!1,wi=0;const vn=new Array(xe);for(b=0;b<xe;b++)vn[b]=0;for(b=H;b<=L;b++){const Re=u[b];if(de>=xe){Ie(Re,_,w,!0);continue}let Be;if(Re.key!=null)Be=oe.get(Re.key);else for(ee=W;ee<=N;ee++)if(vn[ee-W]===0&&yn(Re,d[ee])){Be=ee;break}Be===void 0?Ie(Re,_,w,!0):(vn[Be-W]=b+1,Be>=wi?wi=Be:Qt=!0,R(Re,d[Be],g,null,_,w,S,E,I),de++)}const Ei=Qt?Ku(vn):rn;for(ee=Ei.length-1,b=xe-1;b>=0;b--){const Re=W+b,Be=d[Re],Ii=Re+1<P?d[Re+1].el:y;vn[b]===0?R(null,Be,g,Ii,_,w,S,E,I):Qt&&(ee<0||b!==Ei[ee]?je(Be,g,Ii,2):ee--)}}},je=(u,d,g,y,_=null)=>{const{el:w,type:S,transition:E,children:I,shapeFlag:b}=u;if(b&6){je(u.component.subTree,d,g,y);return}if(b&128){u.suspense.move(d,g,y);return}if(b&64){S.move(u,d,g,k);return}if(S===Pe){r(w,d,g);for(let L=0;L<I.length;L++)je(I[L],d,g,y);r(u.anchor,d,g);return}if(S===Zr){O(u,d,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(w),r(w,d,g),Se(()=>E.enter(w),_);else{const{leave:L,delayLeave:N,afterLeave:H}=E,W=()=>r(w,d,g),oe=()=>{L(w,()=>{W(),H&&H()})};N?N(w,W,oe):oe()}else r(w,d,g)},Ie=(u,d,g,y=!1,_=!1)=>{const{type:w,props:S,ref:E,children:I,dynamicChildren:b,shapeFlag:P,patchFlag:L,dirs:N,cacheIndex:H}=u;if(L===-2&&(_=!1),E!=null&&Ss(E,null,g,u,!0),H!=null&&(d.renderCache[H]=void 0),P&256){d.ctx.deactivate(u);return}const W=P&1&&N,oe=!Cn(u);let ee;if(oe&&(ee=S&&S.onVnodeBeforeUnmount)&&ze(ee,d,u),P&6)Zn(u.component,g,y);else{if(P&128){u.suspense.unmount(g,y);return}W&&Ut(u,null,d,"beforeUnmount"),P&64?u.type.remove(u,d,g,k,y):b&&!b.hasOnce&&(w!==Pe||L>0&&L&64)?Me(b,d,g,!1,!0):(w===Pe&&L&384||!_&&P&16)&&Me(I,d,g),y&&Yt(u)}(oe&&(ee=S&&S.onVnodeUnmounted)||W)&&Se(()=>{ee&&ze(ee,d,u),W&&Ut(u,null,d,"unmounted")},g)},Yt=u=>{const{type:d,el:g,anchor:y,transition:_}=u;if(d===Pe){Xt(g,y);return}if(d===Zr){q(u);return}const w=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:E}=_,I=()=>S(g,w);E?E(u.el,w,I):I()}else w()},Xt=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},Zn=(u,d,g)=>{const{bum:y,scope:_,update:w,subTree:S,um:E,m:I,a:b}=u;$i(I),$i(b),y&&ar(y),_.stop(),w&&(w.active=!1,Ie(S,u,d,g)),E&&Se(E,d),Se(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Me=(u,d,g,y=!1,_=!1,w=0)=>{for(let S=w;S<u.length;S++)Ie(u[S],d,g,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=p(u.anchor||u.el),g=d&&d[Vu];return g?p(g):d};let A=!1;const T=(u,d,g)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,g),d._vnode=u,A||(A=!0,Mi(),Ma(),A=!1)},k={p:R,um:Ie,m:je,r:Yt,mt:xt,mc:B,pc:Z,pbc:ie,n:v,o:t};let te,le;return{render:T,hydrate:te,createApp:Nu(T,te)}}function Xr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Za(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Za(o,c)),c.type===Fr&&(c.el=o.el)}}function Ku(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ec(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ec(e)}function $i(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const qu=Symbol.for("v-scx"),Gu=()=>De(qu),ir={};function An(t,e,n){return tc(t,e,n)}function tc(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=ce){if(e&&i){const $=e;e=(...Q)=>{$(...Q),G()}}const a=me,l=$=>r===!0?$:vt($,r===!1?1:void 0);let f,h=!1,p=!1;if(fe(t)?(f=()=>t.value,h=fn(t)):Bt(t)?(f=()=>l(t),h=!0):F(t)?(p=!0,h=t.some($=>Bt($)||fn($)),f=()=>t.map($=>{if(fe($))return $.value;if(Bt($))return l($);if(V($))return St($,a,2)})):V(t)?e?f=()=>St(t,a,2):f=()=>(m&&m(),Ue(t,a,3,[C])):f=Le,e&&r){const $=f;f=()=>vt($())}let m,C=$=>{m=O.onStop=()=>{St($,a,4),m=O.onStop=void 0}},R;if($r)if(C=Le,e?n&&Ue(e,a,3,[f(),p?[]:void 0,C]):f(),s==="sync"){const $=Gu();R=$.__watcherHandles||($.__watcherHandles=[])}else return Le;let U=p?new Array(t.length).fill(ir):ir;const D=()=>{if(!(!O.active||!O.dirty))if(e){const $=O.run();(r||h||(p?$.some((Q,B)=>Rt(Q,U[B])):Rt($,U)))&&(m&&m(),Ue(e,a,3,[$,U===ir?void 0:p&&U[0]===ir?[]:U,C]),U=$)}else O.run()};D.allowRecurse=!!e;let M;s==="sync"?M=D:s==="post"?M=()=>Se(D,a&&a.suspense):(D.pre=!0,a&&(D.id=a.uid),M=()=>ri(D));const O=new qs(f,Le,M),q=fa(),G=()=>{O.stop(),q&&Bs(q.effects,O)};return e?n?D():U=O.run():s==="post"?Se(O.run.bind(O),a&&a.suspense):O.run(),R&&R.push(G),G}function Ju(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?nc(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=Wn(this),c=tc(s,i.bind(r),n);return o(),c}function nc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))vt(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)vt(t[r],e,n);else if(Zo(t)||sn(t))t.forEach(r=>{vt(r,e,n)});else if(na(t)){for(const r in t)vt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vt(t[r],e,n)}return t}const Yu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Fe(e)}Modifiers`]||t[`${Gt(e)}Modifiers`];function Xu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&Yu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ge(f)?f.trim():f)),o.number&&(s=n.map(gs)));let c,a=r[c=qr(e)]||r[c=qr(Fe(e))];!a&&i&&(a=r[c=qr(Gt(e))]),a&&Ue(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ue(l,t,6,s)}}function rc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!V(t)){const a=l=>{const f=rc(l,e,!0);f&&(c=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ue(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):ve(o,i),ue(t)&&r.set(t,o),o)}function Ur(t,e){return!t||!Ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Gt(e))||Y(t,e))}function Qr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:h,data:p,setupState:m,ctx:C,inheritAttrs:R}=t,U=_r(t);let D,M;try{if(n.shapeFlag&4){const q=s||r,G=q;D=We(l.call(G,q,f,h,m,p,C)),M=c}else{const q=e;D=We(q.length>1?q(h,{attrs:c,slots:o,emit:a}):q(h,null)),M=e.props?c:Qu(c)}}catch(q){Pn.length=0,Lr(q,t,1),D=re(At)}let O=D;if(M&&R!==!1){const q=Object.keys(M),{shapeFlag:G}=O;q.length&&G&7&&(i&&q.some(js)&&(M=Zu(M,i)),O=dn(O,M,!1,!0))}return n.dirs&&(O=dn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),D=O,_r(U),D}const Qu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ar(n))&&((e||(e={}))[n]=t[n]);return e},Zu=(t,e)=>{const n={};for(const r in t)(!js(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ef(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Hi(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Ur(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hi(r,o,l):!0:!!o;return!1}function Hi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ur(n,i))return!0}return!1}function tf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const nf=t=>t.__isSuspense;function rf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):uu(t)}const Pe=Symbol.for("v-fgt"),Fr=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Pn=[];let Oe=null;function ke(t=!1){Pn.push(Oe=t?null:[])}function sf(){Pn.pop(),Oe=Pn[Pn.length-1]||null}let Un=1;function Vi(t){Un+=t,t<0&&Oe&&(Oe.hasOnce=!0)}function sc(t){return t.dynamicChildren=Un>0?Oe||rn:null,sf(),Un>0&&Oe&&Oe.push(t),t}function $e(t,e,n,r,s,i){return sc(K(t,e,n,r,s,i,!0))}function ic(t,e,n,r,s){return sc(re(t,e,n,r,s,!0))}function yr(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const oc=({key:t})=>t??null,ur=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||fe(t)||V(t)?{i:pe,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===Pe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oc(e),ref:e&&ur(e),scopeId:Dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pe};return c?(oi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),Un>0&&!o&&Oe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Oe.push(a),a}const re=of;function of(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Su)&&(t=At),yr(t)){const c=dn(t,e,!0);return n&&oi(c,n),Un>0&&!i&&Oe&&(c.shapeFlag&6?Oe[Oe.indexOf(t)]=c:Oe.push(c)),c.patchFlag=-2,c}if(vf(t)&&(t=t.__vccOpts),e){e=af(e);let{class:c,style:a}=e;c&&!ge(c)&&(e.class=Ks(c)),ue(a)&&(Ta(a)&&!F(a)&&(a=ve({},a)),e.style=Ws(a))}const o=ge(t)?1:nf(t)?128:ju(t)?64:ue(t)?4:V(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function af(t){return t?Ta(t)||Ka(t)?ve({},t):t:null}function dn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?lf(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&oc(l),ref:e&&e.ref?n&&i?F(i)?i.concat(ur(e)):[i,ur(e)]:ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&xa(f,a.clone(f)),f}function J(t=" ",e=0){return re(Fr,null,t,e)}function cf(t="",e=!1){return e?(ke(),ic(At,null,t)):re(At,null,t)}function We(t){return t==null||typeof t=="boolean"?re(At):F(t)?re(Pe,null,t.slice()):typeof t=="object"?mt(t):re(Fr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function oi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),oi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ka(e)?e._ctx=pe:s===3&&pe&&(pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:pe},n=32):(e=String(e),r&64?(n=16,e=[J(e)]):n=8);t.children=e,t.shapeFlag|=n}function lf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ks([e.class,r.class]));else if(s==="style")e.style=Ws([e.style,r.style]);else if(Ar(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ze(t,e,n,r=null){Ue(t,e,7,[n,r])}const uf=Ba();let ff=0;function df(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uf,i={uid:ff++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new la(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ga(r,s),emitsOptions:rc(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xu.bind(null,i),t.ce&&t.ce(i),i}let me=null,br,Ts;{const t=sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};br=e("__VUE_INSTANCE_SETTERS__",n=>me=n),Ts=e("__VUE_SSR_SETTERS__",n=>$r=n)}const Wn=t=>{const e=me;return br(t),t.scope.on(),()=>{t.scope.off(),br(e)}},ji=()=>{me&&me.scope.off(),br(null)};function ac(t){return t.vnode.shapeFlag&4}let $r=!1;function hf(t,e=!1,n=!1){e&&Ts(e);const{props:r,children:s}=t.vnode,i=ac(t);Du(t,r,i,e),$u(t,s,n);const o=i?pf(t,e):void 0;return e&&Ts(!1),o}function pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?mf(t):null,i=Wn(t);Ot();const o=St(r,t,0,[t.props,s]);if(kt(),i(),ea(o)){if(o.then(ji,ji),e)return o.then(c=>{Bi(t,c,e)}).catch(c=>{Lr(c,t,0)});t.asyncDep=o}else Bi(t,o,e)}else cc(t,e)}function Bi(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Pa(e)),cc(t,n)}let zi;function cc(t,e,n){const r=t.type;if(!t.render){if(!e&&zi&&!r.render){const s=r.template||si(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ve(ve({isCustomElement:i,delimiters:c},o),a);r.render=zi(s,l)}}t.render=r.render||Le}{const s=Wn(t);Ot();try{Ru(t)}finally{kt(),s()}}}const gf={get(t,e){return Te(t,"get",""),t[e]}};function mf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gf),slots:t.slots,emit:t.emit,expose:e}}function Hr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pa(Zs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function _f(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function vf(t){return V(t)&&"__vccOpts"in t}const Ne=(t,e)=>eu(t,e,$r);function lc(t,e,n){const r=arguments.length;return r===2?ue(e)&&!F(e)?yr(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yr(n)&&(n=[n]),re(t,e,n))}const yf="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const bf="http://www.w3.org/2000/svg",wf="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Wi=Ze&&Ze.createElement("template"),Ef={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ze.createElementNS(bf,t):e==="mathml"?Ze.createElementNS(wf,t):n?Ze.createElement(t,{is:n}):Ze.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ze.createTextNode(t),createComment:t=>Ze.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ze.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Wi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},If=Symbol("_vtc");function Sf(t,e,n){const r=t[If];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ki=Symbol("_vod"),Tf=Symbol("_vsh"),Cf=Symbol(""),Rf=/(^|;)\s*display\s*:/;function Af(t,e,n){const r=t.style,s=ge(n);let i=!1;if(n&&!s){if(e)if(ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&fr(r,c,"")}else for(const o in e)n[o]==null&&fr(r,o,"");for(const o in n)o==="display"&&(i=!0),fr(r,o,n[o])}else if(s){if(e!==n){const o=r[Cf];o&&(n+=";"+o),r.cssText=n,i=Rf.test(n)}}else e&&t.removeAttribute("style");Ki in t&&(t[Ki]=i?r.display:"",t[Tf]&&(r.display="none"))}const qi=/\s*!important$/;function fr(t,e,n){if(F(n))n.forEach(r=>fr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pf(t,e);qi.test(n)?t.setProperty(Gt(r),n.replace(qi,""),"important"):t[r]=n}}const Gi=["Webkit","Moz","ms"],es={};function Pf(t,e){const n=es[e];if(n)return n;let r=Fe(e);if(r!=="filter"&&r in t)return es[e]=r;r=kr(r);for(let s=0;s<Gi.length;s++){const i=Gi[s]+r;if(i in t)return es[e]=i}return e}const Ji="http://www.w3.org/1999/xlink";function Yi(t,e,n,r,s,i=kl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ji,e.slice(6,e.length)):t.setAttributeNS(Ji,e,n):n==null||i&&!ia(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pt(n)?String(n):n)}function Of(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ia(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function en(t,e,n,r){t.addEventListener(e,n,r)}function kf(t,e,n,r){t.removeEventListener(e,n,r)}const Xi=Symbol("_vei");function Mf(t,e,n,r,s=null){const i=t[Xi]||(t[Xi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Nf(e);if(r){const l=i[e]=xf(r,s);en(t,c,l,a)}else o&&(kf(t,c,o,a),i[e]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function Nf(t){let e;if(Qi.test(t)){e={};let r;for(;r=t.match(Qi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gt(t.slice(2)),e]}let ts=0;const Lf=Promise.resolve(),Df=()=>ts||(Lf.then(()=>ts=0),ts=Date.now());function xf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(Uf(r,n.value),e,5,[r])};return n.value=t,n.attached=Df(),n}function Uf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Zi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ff=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Sf(t,r,o):e==="style"?Af(t,n,r):Ar(e)?js(e)||Mf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$f(t,e,r,o))?(Of(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yi(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yi(t,e,r,o))};function $f(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zi(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zi(e)&&ge(n)?!1:e in t}const eo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>ar(e,n):e};function Hf(t){t.target.composing=!0}function to(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ns=Symbol("_assign"),dv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ns]=eo(s);const i=r||s.props&&s.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=gs(c)),t[ns](c)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",Hf),en(t,"compositionend",to),en(t,"change",to))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ns]=eo(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?gs(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Vf=["ctrl","shift","alt","meta"],jf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vf.some(n=>t[`${n}Key`]&&!e.includes(n))},hv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=jf[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Bf=ve({patchProp:Ff},Ef);let no;function zf(){return no||(no=Bu(Bf))}const Wf=(...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Kf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qf(t){return ge(t)?document.querySelector(t):t}var Gf=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let uc;const Vr=t=>uc=t,fc=Symbol();function Cs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var On;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(On||(On={}));function Jf(){const t=ua(!0),e=t.run(()=>Nr({}));let n=[],r=[];const s=Zs({install(i){Vr(s),s._a=i,i.provide(fc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Gf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const dc=()=>{};function ro(t,e,n,r=dc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&fa()&&Nl(s),s}function Zt(t,...e){t.slice().forEach(n=>{n(...e)})}const Yf=t=>t(),so=Symbol(),rs=Symbol();function Rs(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Cs(s)&&Cs(r)&&t.hasOwnProperty(n)&&!fe(r)&&!Bt(r)?t[n]=Rs(s,r):t[n]=r}return t}const Xf=Symbol();function Qf(t){return!Cs(t)||!t.hasOwnProperty(Xf)}const{assign:pt}=Object;function Zf(t){return!!(fe(t)&&t.effect)}function ed(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const f=su(n.state.value[t]);return pt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Zs(Ne(()=>{Vr(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return a=hc(t,l,e,n,r,!0),a}function hc(t,e,n={},r,s,i){let o;const c=pt({actions:{}},n),a={deep:!0};let l,f,h=[],p=[],m;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),Nr({});let R;function U(B){let z;l=f=!1,typeof B=="function"?(B(r.state.value[t]),z={type:On.patchFunction,storeId:t,events:m}):(Rs(r.state.value[t],B),z={type:On.patchObject,payload:B,storeId:t,events:m});const ie=R=Symbol();ni().then(()=>{R===ie&&(l=!0)}),f=!0,Zt(h,z,r.state.value[t])}const D=i?function(){const{state:z}=n,ie=z?z():{};this.$patch(ye=>{pt(ye,ie)})}:dc;function M(){o.stop(),h=[],p=[],r._s.delete(t)}const O=(B,z="")=>{if(so in B)return B[rs]=z,B;const ie=function(){Vr(r);const ye=Array.from(arguments),Ce=[],Ee=[];function xt(j){Ce.push(j)}function lt(j){Ee.push(j)}Zt(p,{args:ye,name:ie[rs],store:G,after:xt,onError:lt});let ae;try{ae=B.apply(this&&this.$id===t?this:G,ye)}catch(j){throw Zt(Ee,j),j}return ae instanceof Promise?ae.then(j=>(Zt(Ce,j),j)).catch(j=>(Zt(Ee,j),Promise.reject(j))):(Zt(Ce,ae),ae)};return ie[so]=!0,ie[rs]=z,ie},q={_p:r,$id:t,$onAction:ro.bind(null,p),$patch:U,$reset:D,$subscribe(B,z={}){const ie=ro(h,B,z.detached,()=>ye()),ye=o.run(()=>An(()=>r.state.value[t],Ce=>{(z.flush==="sync"?f:l)&&B({storeId:t,type:On.direct,events:m},Ce)},pt({},a,z)));return ie},$dispose:M},G=zn(q);r._s.set(t,G);const Q=(r._a&&r._a.runWithContext||Yf)(()=>r._e.run(()=>(o=ua()).run(()=>e({action:O}))));for(const B in Q){const z=Q[B];if(fe(z)&&!Zf(z)||Bt(z))i||(C&&Qf(z)&&(fe(z)?z.value=C[B]:Rs(z,C[B])),r.state.value[t][B]=z);else if(typeof z=="function"){const ie=O(z,B);Q[B]=ie,c.actions[B]=z}}return pt(G,Q),pt(X(G),Q),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:B=>{U(z=>{pt(z,B)})}}),r._p.forEach(B=>{pt(G,o.run(()=>B({store:G,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(G.$state,C),l=!0,f=!0,G}function td(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,a){const l=Lu();return c=c||(l?De(fc,null):null),c&&Vr(c),c=uc,c._s.has(r)||(i?hc(r,e,s,c):ed(r,s,c)),c._s.get(r)}return o.$id=r,o}const nd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof document<"u";function rd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function ss(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const kn=()=>{},He=Array.isArray,pc=/#/g,sd=/&/g,id=/\//g,od=/=/g,ad=/\?/g,gc=/\+/g,cd=/%5B/g,ld=/%5D/g,mc=/%5E/g,ud=/%60/g,_c=/%7B/g,fd=/%7C/g,vc=/%7D/g,dd=/%20/g;function ai(t){return encodeURI(""+t).replace(fd,"|").replace(cd,"[").replace(ld,"]")}function hd(t){return ai(t).replace(_c,"{").replace(vc,"}").replace(mc,"^")}function As(t){return ai(t).replace(gc,"%2B").replace(dd,"+").replace(pc,"%23").replace(sd,"%26").replace(ud,"`").replace(_c,"{").replace(vc,"}").replace(mc,"^")}function pd(t){return As(t).replace(od,"%3D")}function gd(t){return ai(t).replace(pc,"%23").replace(ad,"%3F")}function md(t){return t==null?"":gd(t).replace(id,"%2F")}function Fn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _d=/\/$/,vd=t=>t.replace(_d,"");function is(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Ed(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fn(o)}}function yd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function io(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hn(e.matched[r],n.matched[s])&&yc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wd(t[n],e[n]))return!1;return!0}function wd(t,e){return He(t)?oo(t,e):He(e)?oo(e,t):t===e}function oo(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ed(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $n;(function(t){t.pop="pop",t.push="push"})($n||($n={}));var Mn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mn||(Mn={}));function Id(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vd(t)}const Sd=/^[^#]+#/;function Td(t,e){return t.replace(Sd,"#")+e}function Cd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jr=()=>({left:window.scrollX,top:window.scrollY});function Rd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Cd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ao(t,e){return(history.state?history.state.position-e:-1)+t}const Ps=new Map;function Ad(t,e){Ps.set(t,e)}function Pd(t){const e=Ps.get(t);return Ps.delete(t),e}let Od=()=>location.protocol+"//"+location.host;function bc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),io(a,"")}return io(n,t)+r+s}function kd(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=bc(t,location),C=n.value,R=e.value;let U=0;if(p){if(n.value=m,e.value=p,o&&o===C){o=null;return}U=R?p.position-R.position:0}else r(m);s.forEach(D=>{D(n.value,C,{delta:U,type:$n.pop,direction:U?U>0?Mn.forward:Mn.back:Mn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const m=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:jr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function co(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?jr():null}}function Md(t){const{history:e,location:n}=window,r={value:bc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Od()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(a,l){const f=ne({},e.state,co(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=ne({},s.value,e.state,{forward:a,scroll:jr()});i(f.current,f,!0);const h=ne({},co(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Nd(t){t=Id(t);const e=Md(t),n=kd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:Td.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ld(t){return typeof t=="string"||t&&typeof t=="object"}function wc(t){return typeof t=="string"||typeof t=="symbol"}const Ec=Symbol("");var lo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lo||(lo={}));function pn(t,e){return ne(new Error,{type:t,[Ec]:!0},e)}function Qe(t,e){return t instanceof Error&&Ec in t&&(e==null||!!(t.type&e))}const uo="[^/]+?",Dd={sensitive:!1,strict:!1,start:!0,end:!0},xd=/[.+*?^${}()[\]/\\]/g;function Ud(t,e){const n=ne({},Dd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(xd,"\\$&"),m+=40;else if(p.type===1){const{value:C,repeatable:R,optional:U,regexp:D}=p;i.push({name:C,repeatable:R,optional:U});const M=D||uo;if(M!==uo){m+=10;try{new RegExp(`(${M})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+q.message)}}let O=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(O=U&&l.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),s+=O,m+=20,U&&(m+=-8),R&&(m+=-20),M===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",C=i[p-1];h[C.name]=m&&C.repeatable?m.split("/"):m}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:C,repeatable:R,optional:U}=m,D=C in l?l[C]:"";if(He(D)&&!R)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=He(D)?D.join("/"):D;if(!M)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Fd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ic(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Fd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fo(r))return 1;if(fo(s))return-1}return s.length-r.length}function fo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $d={type:0,value:""},Hd=/[a-zA-Z0-9_]/;function Vd(t){if(!t)return[[]];if(t==="/")return[[$d]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Hd.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function jd(t,e,n){const r=Ud(Vd(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Bd(t,e){const n=[],r=new Map;e=go({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const C=!m,R=zd(h);R.aliasOf=m&&m.record;const U=go(e,h),D=[R];if("alias"in h){const q=typeof h.alias=="string"?[h.alias]:h.alias;for(const G of q)D.push(ne({},R,{components:m?m.record.components:R.components,path:G,aliasOf:m?m.record:R}))}let M,O;for(const q of D){const{path:G}=q;if(p&&G[0]!=="/"){const $=p.record.path,Q=$[$.length-1]==="/"?"":"/";q.path=p.record.path+(G&&Q+G)}if(M=jd(q,p,U),m?m.alias.push(M):(O=O||M,O!==M&&O.alias.push(M),C&&h.name&&!po(M)&&o(h.name)),Sc(M)&&a(M),R.children){const $=R.children;for(let Q=0;Q<$.length;Q++)i($[Q],M,m&&m.children[Q])}m=m||M}return O?()=>{o(O)}:kn}function o(h){if(wc(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=qd(h,n);n.splice(p,0,h),h.record.name&&!po(h)&&r.set(h.record.name,h)}function l(h,p){let m,C={},R,U;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw pn(1,{location:h});U=m.record.name,C=ne(ho(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&ho(h.params,m.keys.map(O=>O.name))),R=m.stringify(C)}else if(h.path!=null)R=h.path,m=n.find(O=>O.re.test(R)),m&&(C=m.parse(R),U=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw pn(1,{location:h,currentLocation:p});U=m.record.name,C=ne({},p.params,h.params),R=m.stringify(C)}const D=[];let M=m;for(;M;)D.unshift(M.record),M=M.parent;return{name:U,path:R,params:C,matched:D,meta:Kd(D)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ho(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function zd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Wd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function po(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kd(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function go(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qd(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ic(t,e[i])<0?r=i:n=i+1}const s=Gd(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Gd(t){let e=t;for(;e=e.parent;)if(Sc(e)&&Ic(t,e)===0)return e}function Sc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gc," "),o=i.indexOf("="),c=Fn(o<0?i:i.slice(0,o)),a=o<0?null:Fn(i.slice(o+1));if(c in e){let l=e[c];He(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function mo(t){let e="";for(let n in t){const r=t[n];if(n=pd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&As(i)):[r&&As(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Yd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Xd=Symbol(""),_o=Symbol(""),Br=Symbol(""),ci=Symbol(""),Os=Symbol("");function bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(pn(4,{from:n,to:e})):p instanceof Error?a(p):Ld(p)?a(pn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(f);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function os(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Qd(a)){const f=(a.__vccOpts||a)[e];f&&i.push(_t(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=rd(f)?f.default:f;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&_t(m,n,r,o,c,s)()}))}}return i}function Qd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vo(t){const e=De(Br),n=De(ci),r=Ne(()=>{const a=qe(t.to);return e.resolve(a)}),s=Ne(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(hn.bind(null,f));if(p>-1)return p;const m=yo(a[l-2]);return l>1&&yo(f)===m&&h[h.length-1].path!==m?h.findIndex(hn.bind(null,a[l-2])):p}),i=Ne(()=>s.value>-1&&th(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&yc(n.params,r.value.params));function c(a={}){return eh(a)?e[qe(t.replace)?"replace":"push"](qe(t.to)).catch(kn):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Zd=mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vo,setup(t,{slots:e}){const n=zn(vo(t)),{options:r}=De(Br),s=Ne(()=>({[bo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:lc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ks=Zd;function eh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function th(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bo=(t,e,n)=>t??e??n,nh=mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=De(Os),s=Ne(()=>t.route||r.value),i=De(_o,0),o=Ne(()=>{let l=qe(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=Ne(()=>s.value.matched[o.value]);lr(_o,Ne(()=>o.value+1)),lr(Xd,c),lr(Os,s);const a=Nr();return An(()=>[a.value,c.value,t.name],([l,f,h],[p,m,C])=>{f&&(f.instances[h]=l,m&&m!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!hn(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,p=h&&h.components[f];if(!p)return wo(n.default,{Component:p,route:l});const m=h.props[f],C=m?m===!0?l.params:typeof m=="function"?m(l):m:null,U=lc(p,ne({},C,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return wo(n.default,{Component:U,route:l})||U}}});function wo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tc=nh;function rh(t){const e=Bd(t.routes,t),n=t.parseQuery||Jd,r=t.stringifyQuery||mo,s=t.history,i=bn(),o=bn(),c=bn(),a=tu(dt);let l=dt;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ss.bind(null,v=>""+v),h=ss.bind(null,md),p=ss.bind(null,Fn);function m(v,A){let T,k;return wc(v)?(T=e.getRecordMatcher(v),k=A):k=v,e.addRoute(k,T)}function C(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function R(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function D(v,A){if(A=ne({},A||a.value),typeof v=="string"){const d=is(n,v,A.path),g=e.resolve({path:d.path},A),y=s.createHref(d.fullPath);return ne(d,g,{params:p(g.params),hash:Fn(d.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=ne({},v,{path:is(n,v.path,A.path).path});else{const d=ne({},v.params);for(const g in d)d[g]==null&&delete d[g];T=ne({},v,{params:h(d)}),A.params=h(A.params)}const k=e.resolve(T,A),te=v.hash||"";k.params=f(p(k.params));const le=yd(r,ne({},v,{hash:hd(te),path:k.path})),u=s.createHref(le);return ne({fullPath:le,hash:te,query:r===mo?Yd(v.query):v.query||{}},k,{redirectedFrom:void 0,href:u})}function M(v){return typeof v=="string"?is(n,v,a.value.path):ne({},v)}function O(v,A){if(l!==v)return pn(8,{from:A,to:v})}function q(v){return Q(v)}function G(v){return q(ne(M(v),{replace:!0}))}function $(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let k=typeof T=="function"?T(v):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),ne({query:v.query,hash:v.hash,params:k.path!=null?{}:v.params},k)}}function Q(v,A){const T=l=D(v),k=a.value,te=v.state,le=v.force,u=v.replace===!0,d=$(T);if(d)return Q(ne(M(d),{state:typeof d=="object"?ne({},te,d.state):te,force:le,replace:u}),A||T);const g=T;g.redirectedFrom=A;let y;return!le&&bd(r,k,T)&&(y=pn(16,{to:g,from:k}),je(k,k,!0,!1)),(y?Promise.resolve(y):ie(g,k)).catch(_=>Qe(_)?Qe(_,2)?_:ut(_):Z(_,g,k)).then(_=>{if(_){if(Qe(_,2))return Q(ne({replace:u},M(_.to),{state:typeof _.to=="object"?ne({},te,_.to.state):te,force:le}),A||g)}else _=Ce(g,k,!0,u,te);return ye(g,k,_),_})}function B(v,A){const T=O(v,A);return T?Promise.reject(T):Promise.resolve()}function z(v){const A=Xt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function ie(v,A){let T;const[k,te,le]=sh(v,A);T=os(k.reverse(),"beforeRouteLeave",v,A);for(const d of k)d.leaveGuards.forEach(g=>{T.push(_t(g,v,A))});const u=B.bind(null,v,A);return T.push(u),Me(T).then(()=>{T=[];for(const d of i.list())T.push(_t(d,v,A));return T.push(u),Me(T)}).then(()=>{T=os(te,"beforeRouteUpdate",v,A);for(const d of te)d.updateGuards.forEach(g=>{T.push(_t(g,v,A))});return T.push(u),Me(T)}).then(()=>{T=[];for(const d of le)if(d.beforeEnter)if(He(d.beforeEnter))for(const g of d.beforeEnter)T.push(_t(g,v,A));else T.push(_t(d.beforeEnter,v,A));return T.push(u),Me(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=os(le,"beforeRouteEnter",v,A,z),T.push(u),Me(T))).then(()=>{T=[];for(const d of o.list())T.push(_t(d,v,A));return T.push(u),Me(T)}).catch(d=>Qe(d,8)?d:Promise.reject(d))}function ye(v,A,T){c.list().forEach(k=>z(()=>k(v,A,T)))}function Ce(v,A,T,k,te){const le=O(v,A);if(le)return le;const u=A===dt,d=tn?history.state:{};T&&(k||u?s.replace(v.fullPath,ne({scroll:u&&d&&d.scroll},te)):s.push(v.fullPath,te)),a.value=v,je(v,A,T,u),ut()}let Ee;function xt(){Ee||(Ee=s.listen((v,A,T)=>{if(!Zn.listening)return;const k=D(v),te=$(k);if(te){Q(ne(te,{replace:!0}),k).catch(kn);return}l=k;const le=a.value;tn&&Ad(ao(le.fullPath,T.delta),jr()),ie(k,le).catch(u=>Qe(u,12)?u:Qe(u,2)?(Q(u.to,k).then(d=>{Qe(d,20)&&!T.delta&&T.type===$n.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(u,k,le))).then(u=>{u=u||Ce(k,le,!1),u&&(T.delta&&!Qe(u,8)?s.go(-T.delta,!1):T.type===$n.pop&&Qe(u,20)&&s.go(-1,!1)),ye(k,le,u)}).catch(kn)}))}let lt=bn(),ae=bn(),j;function Z(v,A,T){ut(v);const k=ae.list();return k.length?k.forEach(te=>te(v,A,T)):console.error(v),Promise.reject(v)}function Xe(){return j&&a.value!==dt?Promise.resolve():new Promise((v,A)=>{lt.add([v,A])})}function ut(v){return j||(j=!v,xt(),lt.list().forEach(([A,T])=>v?T(v):A()),lt.reset()),v}function je(v,A,T,k){const{scrollBehavior:te}=t;if(!tn||!te)return Promise.resolve();const le=!T&&Pd(ao(v.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return ni().then(()=>te(v,A,le)).then(u=>u&&Rd(u)).catch(u=>Z(u,v,A))}const Ie=v=>s.go(v);let Yt;const Xt=new Set,Zn={currentRoute:a,listening:!0,addRoute:m,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:R,resolve:D,options:t,push:q,replace:G,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ae.add,isReady:Xe,install(v){const A=this;v.component("RouterLink",ks),v.component("RouterView",Tc),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>qe(a)}),tn&&!Yt&&a.value===dt&&(Yt=!0,q(s.location).catch(te=>{}));const T={};for(const te in dt)Object.defineProperty(T,te,{get:()=>a.value[te],enumerable:!0});v.provide(Br,A),v.provide(ci,Ia(T)),v.provide(Os,a);const k=v.unmount;Xt.add(v),v.unmount=function(){Xt.delete(v),Xt.size<1&&(l=dt,Ee&&Ee(),Ee=null,a.value=dt,Yt=!1,j=!1),k()}}};function Me(v){return v.reduce((A,T)=>A.then(()=>z(T)),Promise.resolve())}return Zn}function sh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>hn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>hn(l,a))||s.push(a))}return[n,r,s]}function ih(){return De(Br)}function oh(t){return De(ci)}const ah=t=>(La("data-v-a47c673d"),t=t(),Da(),t),ch={class:"greetings"},lh={class:"green"},uh=ah(()=>K("h3",null,[J(" You’ve successfully created a project with "),K("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),J(" + "),K("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),J(". What's next? ")],-1)),fh=mn({__name:"HelloWorld",props:{msg:{}},setup(t){return(e,n)=>(ke(),$e("div",ch,[K("h1",lh,aa(e.msg),1),uh]))}}),Mt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},dh=Mt(fh,[["__scopeId","data-v-a47c673d"]]),Cc=td("user",()=>{const t=Nr(null);function e(n){t.value=n}return{user:t,setUser:e}});var Eo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new ph;const p=i<<2|c>>4;if(r.push(p),l!==64){const m=c<<4&240|l>>2;if(r.push(m),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(t){const e=Rc(t);return Ac.encodeByteArray(e,!0)},Pc=function(t){return gh(t).replace(/\./g,"")},Oc=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=()=>mh().__FIREBASE_DEFAULTS__,vh=()=>{if(typeof process>"u"||typeof Eo>"u")return;const t=Eo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oc(t[1]);return e&&JSON.parse(e)},li=()=>{try{return _h()||vh()||yh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bh=t=>{var e,n;return(n=(e=li())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kc=()=>{var t;return(t=li())===null||t===void 0?void 0:t.config},Mc=t=>{var e;return(e=li())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Ih(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Th(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ch(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ah,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ph(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,c,r)}}function Ph(t,e){return t.replace(Oh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Oh=/\{\$([^}]+)}/g;function kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Io(i)&&Io(o)){if(!wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Io(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mh(t,e){const n=new Nh(t,e);return n.subscribe.bind(n)}class Nh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=as),s.error===void 0&&(s.error=as),s.complete===void 0&&(s.complete=as);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function as(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uh(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xh(t){return t===$t?void 0:t}function Uh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const $h={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Hh=se.INFO,Vh={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},jh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=Hh,this._logHandler=jh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Bh=(t,e)=>e.some(n=>t instanceof n);let So,To;function zh(){return So||(So=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wh(){return To||(To=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lc=new WeakMap,Ms=new WeakMap,Dc=new WeakMap,cs=new WeakMap,ui=new WeakMap;function Kh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lc.set(n,t)}).catch(()=>{}),ui.set(e,t),e}function qh(t){if(Ms.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ms.set(t,e)}let Ns={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ms.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gh(t){Ns=t(Ns)}function Jh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ls(this),e,...n);return Dc.set(r,e.sort?e.sort():[e]),Tt(r)}:Wh().includes(t)?function(...e){return t.apply(ls(this),e),Tt(Lc.get(this))}:function(...e){return Tt(t.apply(ls(this),e))}}function Yh(t){return typeof t=="function"?Jh(t):(t instanceof IDBTransaction&&qh(t),Bh(t,zh())?new Proxy(t,Ns):t)}function Tt(t){if(t instanceof IDBRequest)return Kh(t);if(cs.has(t))return cs.get(t);const e=Yh(t);return e!==t&&(cs.set(t,e),ui.set(e,t)),e}const ls=t=>ui.get(t);function Xh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Tt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Qh=["get","getKey","getAll","getAllKeys","count"],Zh=["put","add","delete","clear"],us=new Map;function Co(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(us.get(e))return us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return us.set(e,i),i}Gh(t=>({...t,get:(e,n,r)=>Co(e,n)||t.get(e,n,r),has:(e,n)=>!!Co(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ls="@firebase/app",Ro="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Nc("@firebase/app"),np="@firebase/app-compat",rp="@firebase/analytics-compat",sp="@firebase/analytics",ip="@firebase/app-check-compat",op="@firebase/app-check",ap="@firebase/auth",cp="@firebase/auth-compat",lp="@firebase/database",up="@firebase/database-compat",fp="@firebase/functions",dp="@firebase/functions-compat",hp="@firebase/installations",pp="@firebase/installations-compat",gp="@firebase/messaging",mp="@firebase/messaging-compat",_p="@firebase/performance",vp="@firebase/performance-compat",yp="@firebase/remote-config",bp="@firebase/remote-config-compat",wp="@firebase/storage",Ep="@firebase/storage-compat",Ip="@firebase/firestore",Sp="@firebase/vertexai-preview",Tp="@firebase/firestore-compat",Cp="firebase",Rp="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="[DEFAULT]",Ap={[Ls]:"fire-core",[np]:"fire-core-compat",[sp]:"fire-analytics",[rp]:"fire-analytics-compat",[op]:"fire-app-check",[ip]:"fire-app-check-compat",[ap]:"fire-auth",[cp]:"fire-auth-compat",[lp]:"fire-rtdb",[up]:"fire-rtdb-compat",[fp]:"fire-fn",[dp]:"fire-fn-compat",[hp]:"fire-iid",[pp]:"fire-iid-compat",[gp]:"fire-fcm",[mp]:"fire-fcm-compat",[_p]:"fire-perf",[vp]:"fire-perf-compat",[yp]:"fire-rc",[bp]:"fire-rc-compat",[wp]:"fire-gcs",[Ep]:"fire-gcs-compat",[Ip]:"fire-fst",[Tp]:"fire-fst-compat",[Sp]:"fire-vertex","fire-js":"fire-js",[Cp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Pp=new Map,xs=new Map;function Ao(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(xs.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;xs.set(e,t);for(const n of Er.values())Ao(n,t);for(const n of Pp.values())Ao(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ge(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new Kn("app","Firebase",Op);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=Rp;function Uc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ds,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(n||(n=kc()),!n)throw Ct.create("no-options");const i=Er.get(s);if(i){if(wr(n,i.options)&&wr(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new Fh(s);for(const a of xs.values())o.addComponent(a);const c=new kp(n,r,o);return Er.set(s,c),c}function Mp(t=Ds){const e=Er.get(t);if(!e&&t===Ds&&kc())return Uc();if(!e)throw Ct.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=Ap[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(c.join(" "));return}Hn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="firebase-heartbeat-database",Lp=1,Vn="firebase-heartbeat-store";let fs=null;function Fc(){return fs||(fs=Xh(Np,Lp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),fs}async function Dp(t){try{const n=(await Fc()).transaction(Vn),r=await n.objectStore(Vn).get($c(t));return await n.done,r}catch(e){if(e instanceof Nt)it.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function Po(t,e){try{const r=(await Fc()).transaction(Vn,"readwrite");await r.objectStore(Vn).put(e,$c(t)),await r.done}catch(n){if(n instanceof Nt)it.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function $c(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1024,Up=30*24*60*60*1e3;class Fp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Up}),this._storage.overwrite(this._heartbeatsCache))}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oo(),{heartbeatsToSend:r,unsentEntries:s}=$p(this._heartbeatsCache.heartbeats),i=Pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function Oo(){return new Date().toISOString().substring(0,10)}function $p(t,e=xp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ko(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ko(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ch()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Po(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Po(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ko(t){return Pc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){Hn(new gn("platform-logger",e=>new ep(e),"PRIVATE")),Hn(new gn("heartbeat",e=>new Fp(e),"PRIVATE")),an(Ls,Ro,t),an(Ls,Ro,"esm2017"),an("fire-js","")}Vp("");function fi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jp=Hc,Vc=new Kn("auth","Firebase",Hc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Nc("@firebase/auth");function Bp(t,...e){Ir.logLevel<=se.WARN&&Ir.warn(`Auth (${Gn}): ${t}`,...e)}function dr(t,...e){Ir.logLevel<=se.ERROR&&Ir.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw di(t,...e)}function Je(t,...e){return di(t,...e)}function jc(t,e,n){const r=Object.assign(Object.assign({},jp()),{[e]:n});return new Kn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return jc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function di(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vc.create(t,...e)}function x(t,e,...n){if(!t)throw di(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dr(e),new Error(e)}function ot(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zp(){return Mo()==="http:"||Mo()==="https:"}function Mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zp()||Ih()||"connection"in navigator)?navigator.onLine:!0}function Kp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Eh()||Sh()}get(){return Wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Jn(3e4,6e4);function Lt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return zc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=qn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Bc.fetch()(Wc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function zc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qp),e);try{const s=new Yp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw or(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jc(t,f,l);Ve(t,f)}}catch(s){if(s instanceof Nt)throw s;Ve(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hi(t.config,s):`${t.config.apiScheme}://${s}`}function Jp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),Gp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Je(t,e,r);return s.customData._tokenResponse=n,s}function No(t){return t!==void 0&&t.enterprise!==void 0}class Xp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Qp(t,e){return Dt(t,"GET","/v2/recaptchaConfig",Lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function Kc(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eg(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=pi(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Nn(ds(s.auth_time)),issuedAtTime:Nn(ds(s.iat)),expirationTime:Nn(ds(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ds(t){return Number(t)*1e3}function pi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Oc(n);return s?JSON.parse(s):(dr("Failed to decode base64 JWT payload"),null)}catch(s){return dr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lo(t){const e=pi(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&tg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jn(t,Kc(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qc(i.providerUserInfo):[],c=sg(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Fs(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function rg(t){const e=ct(t);await Sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qc(t){return t.map(e=>{var{providerId:n}=e,r=fi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e){const n=await zc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Wc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Bc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function og(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",Lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Lo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ig(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new cn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eg(this,e)}reload(){return rg(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await jn(this,Zp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,U=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:q,isAnonymous:G,providerData:$,stsTokenManager:Q}=n;x(O&&Q,e,"internal-error");const B=cn.fromJSON(this.name,Q);x(typeof O=="string",e,"internal-error"),ht(h,e.name),ht(p,e.name),x(typeof q=="boolean",e,"internal-error"),x(typeof G=="boolean",e,"internal-error"),ht(m,e.name),ht(C,e.name),ht(R,e.name),ht(U,e.name),ht(D,e.name),ht(M,e.name);const z=new tt({uid:O,auth:e,email:p,emailVerified:q,displayName:h,isAnonymous:G,photoURL:C,phoneNumber:m,tenantId:R,stsTokenManager:B,createdAt:D,lastLoginAt:M});return $&&Array.isArray($)&&(z.providerData=$.map(ie=>Object.assign({},ie))),U&&(z._redirectEventId=U),z}static async _fromIdTokenResponse(e,n,r=!1){const s=new cn;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];x(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new cn;c.updateFromIdToken(r);const a=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map;function nt(t){ot(t instanceof Function,"Expected a class definition");let e=Do.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Do.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gc.type="NONE";const xo=Gc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e,n){return`firebase:${t}:${e}:${n}`}class ln{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hr(this.userKey,s.apiKey,i),this.fullPersistenceKey=hr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ln(nt(xo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||nt(xo);const o=hr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=tt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new ln(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ln(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(el(e))return"Blackberry";if(tl(e))return"Webos";if(Yc(e))return"Safari";if((e.includes("chrome/")||Xc(e))&&!e.includes("edge/"))return"Chrome";if(Zc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jc(t=we()){return/firefox\//i.test(t)}function Yc(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xc(t=we()){return/crios\//i.test(t)}function Qc(t=we()){return/iemobile/i.test(t)}function Zc(t=we()){return/android/i.test(t)}function el(t=we()){return/blackberry/i.test(t)}function tl(t=we()){return/webos/i.test(t)}function gi(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ag(t=we()){var e;return gi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cg(){return Th()&&document.documentMode===10}function nl(t=we()){return gi(t)||Zc(t)||tl(t)||el(t)||/windows phone/i.test(t)||Qc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e=[]){let n;switch(t){case"Browser":n=Uo(we());break;case"Worker":n=`${Uo(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",Lt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=6;class dg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fo(this),this.idTokenSubscription=new Fo(this),this.beforeStateQueue=new lg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(st(this));const n=e?ct(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ug(this),n=new dg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await og(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jt(t){return ct(t)}class Fo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mh(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pg(t){zr=t}function sl(t){return zr.loadJS(t)}function gg(){return zr.recaptchaEnterpriseScript}function mg(){return zr.gapiScript}function _g(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vg="recaptcha-enterprise",yg="NO_RECAPTCHA";class bg{constructor(e){this.type=vg,this.auth=Jt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Qp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Xp(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;No(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(yg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&No(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=gg();a.length!==0&&(a+=c),sl(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function $o(t,e,n,r=!1){const s=new bg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $s(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $o(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $o(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){const n=xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wr(i,e??{}))return s;Ve(s,"already-initialized")}return n.initialize({options:e})}function Eg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ig(t,e,n){const r=Jt(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=il(e),{host:o,port:c}=Sg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Tg()}function il(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sg(t){const e=il(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ho(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ho(o)}}}function Ho(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Cg(t,e){return Dt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Lt(t,e))}async function Pg(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends mi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $s(e,n,"signInWithPassword",Rg);case"emailLink":return Ag(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $s(e,r,"signUpPassword",Cg);case"emailLink":return Pg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="http://localhost";class Kt extends mi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}buildRequest(){const e={requestUri:Og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mg(t){const e=In(Sn(t)).link,n=e?In(Sn(e)).deep_link_id:null,r=In(Sn(t)).deep_link_id;return(r?In(Sn(r)).link:null)||r||n||e||t}class _i{constructor(e){var n,r,s,i,o,c;const a=In(Sn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=kg((s=a.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Mg(e);try{return new _i(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_i.parseLink(n);return x(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Xn{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Xn{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e){return Yn(t,"POST","/v1/accounts:signUp",Lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=Vo(r);return new qt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vo(r);return new qt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tr(e,n,r,s)}}function al(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,i,e,r):i})}async function Lg(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(t,e,n=!1){const{auth:r}=t;if(Ge(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await jn(t,al(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=pi(i.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(t.uid===c,r,"user-mismatch"),qt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t,e,n=!1){if(Ge(t.app))return Promise.reject(st(t));const r="signIn",s=await al(t,r,e),i=await qt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xg(t,e){return cl(Jt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t){const e=Jt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pv(t,e,n){if(Ge(t.app))return Promise.reject(st(t));const r=Jt(t),o=await $s(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ng).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ll(t),a}),c=await qt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function gv(t,e,n){return Ge(t.app)?Promise.reject(st(t)):xg(ct(t),_n.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ll(t),r})}function Ug(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function Fg(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function $g(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function Hg(t){return ct(t).signOut()}const Cr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cr,"1"),this.storage.removeItem(Cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1e3,jg=10;class fl extends ul{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fl.type="LOCAL";const Bg=fl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends ul{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dl.type="SESSION";const hl=dl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await zg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=vi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function Kg(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function qg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jg(){return pl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="firebaseLocalStorageDb",Yg=1,Rr="firebaseLocalStorage",ml="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function Xg(){const t=indexedDB.deleteDatabase(gl);return new Qn(t).toPromise()}function Hs(){const t=indexedDB.open(gl,Yg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rr,{keyPath:ml})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rr)?e(r):(r.close(),await Xg(),e(await Hs()))})})}async function jo(t,e,n){const r=Kr(t,!0).put({[ml]:e,value:n});return new Qn(r).toPromise()}async function Qg(t,e){const n=Kr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Bo(t,e){const n=Kr(t,!0).delete(e);return new Qn(n).toPromise()}const Zg=800,em=3;class _l{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>em)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wr._getInstance(Jg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qg(),!this.activeServiceWorker)return;this.sender=new Wg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hs();return await jo(e,Cr,"1"),await Bo(e,Cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Kr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_l.type="LOCAL";const tm=_l;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){return e?nt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends mi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rm(t){return cl(t.auth,new yi(t),t.bypassAuthState)}function sm(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Dg(n,new yi(t),t.bypassAuthState)}async function im(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Lg(n,new yi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rm;case"linkViaPopup":case"linkViaRedirect":return im;case"reauthViaPopup":case"reauthViaRedirect":return sm;default:Ve(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Jn(2e3,1e4);class nn extends vl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=vi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,om.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="pendingRedirect",pr=new Map;class cm extends vl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pr.get(this.auth._key());if(!e){try{const r=await lm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pr.set(this.auth._key(),e)}return this.bypassAuthState||pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lm(t,e){const n=dm(e),r=fm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function um(t,e){pr.set(t._key(),e)}function fm(t){return nt(t._redirectPersistence)}function dm(t){return hr(am,t.config.apiKey,t.name)}async function hm(t,e,n=!1){if(Ge(t.app))return Promise.reject(st(t));const r=Jt(t),s=nm(r,e),o=await new cm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=10*60*1e3;class gm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pm&&this.cachedEventUids.clear(),this.cachedEventUids.has(zo(e))}saveEventToCache(e){this.cachedEventUids.add(zo(e)),this.lastProcessedEventTime=Date.now()}}function zo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ym=/^https?/;async function bm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _m(t);for(const n of e)try{if(wm(n))return}catch{}Ve(t,"unauthorized-domain")}function wm(t){const e=Us(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ym.test(n))return!1;if(vm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Jn(3e4,6e4);function Wo(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Im(t){return new Promise((e,n)=>{var r,s,i;function o(){Wo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wo(),n(Je(t,"network-request-failed"))},timeout:Em.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const c=_g("iframefcb");return Ye()[c]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},sl(`${mg()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw gr=null,e})}let gr=null;function Sm(t){return gr=gr||Im(t),gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new Jn(5e3,15e3),Cm="__/auth/iframe",Rm="emulator/auth/iframe",Am={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Om(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hi(e,Rm):`https://${t.config.authDomain}/${Cm}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=Pm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function km(t){const e=await Sm(t),n=Ye().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Om(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Am,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),c=Ye().setTimeout(()=>{i(o)},Tm.get());function a(){Ye().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nm=500,Lm=600,Dm="_blank",xm="http://localhost";class Ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Um(t,e,n,r=Nm,s=Lm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Mm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=we().toLowerCase();n&&(c=Xc(l)?Dm:n),Jc(l)&&(e=e||xm,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[m,C])=>`${p}${m}=${C},`,"");if(ag(l)&&c!=="_self")return Fm(e||"",c),new Ko(null);const h=window.open(e||"",c,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new Ko(h)}function Fm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="__/auth/handler",Hm="emulator/auth/handler",Vm=encodeURIComponent("fac");async function qo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof ol){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Xn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${Vm}=${encodeURIComponent(a)}`:"";return`${jm(t)}?${qn(c).slice(1)}${l}`}function jm({config:t}){return t.emulator?hi(t,Hm):`https://${t.authDomain}/${$m}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="webStorageSupport";class Bm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hl,this._completeRedirectFn=hm,this._overrideRedirectResult=um}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qo(e,n,r,Us(),s);return Um(e,o,vi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qo(e,n,r,Us(),s);return Kg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await km(e),r=new gm(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hs,{type:hs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hs];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nl()||Yc()||gi()}}const zm=Bm;var Go="@firebase/auth",Jo="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qm(t){Hn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rl(t)},l=new hg(r,s,i,a);return Eg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hn(new gn("auth-internal",e=>{const n=Jt(e.getProvider("auth").getImmediate());return(r=>new Wm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Go,Jo,Km(t)),an(Go,Jo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=5*60,Jm=Mc("authIdTokenMaxAge")||Gm;let Yo=null;const Ym=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jm)return;const s=n==null?void 0:n.token;Yo!==s&&(Yo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Xm(t=Mp()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wg(t,{popupRedirectResolver:zm,persistence:[tm,Bg,hl]}),r=Mc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ym(i.toString());Fg(n,o,()=>o(n.currentUser)),Ug(n,c=>o(c))}}const s=bh("auth");return s&&Ig(n,`http://${s}`),n}function Qm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Qm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qm("Browser");const Zm=t=>(La("data-v-62c1710a"),t=t(),Da(),t),e_=Zm(()=>K("img",{alt:"Vue logo",class:"logo",src:nd,width:"125",height:"125"},null,-1)),t_={class:"wrapper"},n_=mn({__name:"App",setup(t){const e=oh(),n=ih(),r=Cc();$a(()=>{$g(Qo,i=>{console.log("onAuthStateChanged",i),r.setUser(i),i?(e.name==="login"||e.name==="register")&&n.push({name:"home"}):e.name!=="login"&&e.name!=="register"&&n.push({name:"login"})})});function s(){Hg(Qo).then(i=>{console.log("logout")}).catch(i=>{i.code,i.message})}return(i,o)=>(ke(),$e(Pe,null,[K("header",null,[qe(r).user?(ke(),$e("button",{key:0,onClick:s},"logout")):cf("",!0),e_,K("div",t_,[re(dh,{msg:"Auth!"}),K("nav",null,[re(qe(ks),{to:"/"},{default:he(()=>[J("Home")]),_:1}),re(qe(ks),{to:"/about"},{default:he(()=>[J("About")]),_:1})])])]),re(qe(Tc))],64))}}),r_=Mt(n_,[["__scopeId","data-v-62c1710a"]]),s_="modulepreload",i_=function(t){return"/test/"+t},Xo={},ps=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=i_(c),c in Xo)return;Xo[c]=!0;const a=c.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":s_,a||(f.as="script",f.crossOrigin=""),f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),a)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},o_={},a_={class:"item"},c_={class:"details"};function l_(t,e){return ke(),$e("div",a_,[K("i",null,[Jr(t.$slots,"icon",{},void 0)]),K("div",c_,[K("h3",null,[Jr(t.$slots,"heading",{},void 0)]),Jr(t.$slots,"default",{},void 0)])])}const wn=Mt(o_,[["render",l_],["__scopeId","data-v-fd0742eb"]]),u_={},f_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},d_=K("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),h_=[d_];function p_(t,e){return ke(),$e("svg",f_,h_)}const g_=Mt(u_,[["render",p_]]),m_={},__={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},v_=K("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),y_=[v_];function b_(t,e){return ke(),$e("svg",__,y_)}const w_=Mt(m_,[["render",b_]]),E_={},I_={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},S_=K("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),T_=[S_];function C_(t,e){return ke(),$e("svg",I_,T_)}const R_=Mt(E_,[["render",C_]]),A_={},P_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},O_=K("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),k_=[O_];function M_(t,e){return ke(),$e("svg",P_,k_)}const N_=Mt(A_,[["render",M_]]),L_={},D_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},x_=K("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),U_=[x_];function F_(t,e){return ke(),$e("svg",D_,U_)}const $_=Mt(L_,[["render",F_]]),H_=K("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),V_=K("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),j_=K("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),B_=K("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),z_=K("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),W_=K("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),K_=K("br",null,null,-1),q_=K("code",null,"README.md",-1),G_=K("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),J_=K("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Y_=K("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),X_=K("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),Q_=K("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),Z_=K("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),ev=K("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),tv=K("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),nv=K("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),rv=K("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),sv=mn({__name:"TheWelcome",setup(t){return(e,n)=>(ke(),$e(Pe,null,[re(wn,null,{icon:he(()=>[re(g_)]),heading:he(()=>[J("Documentation")]),default:he(()=>[J(" Vue’s "),H_,J(" provides you with all information you need to get started. ")]),_:1}),re(wn,null,{icon:he(()=>[re(w_)]),heading:he(()=>[J("Tooling")]),default:he(()=>[J(" This project is served and bundled with "),V_,J(". The recommended IDE setup is "),j_,J(" + "),B_,J(". If you need to test your components and web pages, check out "),z_,J(" and "),W_,J(". "),K_,J(" More instructions are available in "),q_,J(". ")]),_:1}),re(wn,null,{icon:he(()=>[re(R_)]),heading:he(()=>[J("Ecosystem")]),default:he(()=>[J(" Get official tools and libraries for your project: "),G_,J(", "),J_,J(", "),Y_,J(", and "),X_,J(". If you need more resources, we suggest paying "),Q_,J(" a visit. ")]),_:1}),re(wn,null,{icon:he(()=>[re(N_)]),heading:he(()=>[J("Community")]),default:he(()=>[J(" Got stuck? Ask your question on "),Z_,J(", our official Discord server, or "),ev,J(". You should also subscribe to "),tv,J(" and follow the official "),nv,J(" twitter account for latest news in the Vue world. ")]),_:1}),re(wn,null,{icon:he(()=>[re($_)]),heading:he(()=>[J("Support Vue")]),default:he(()=>[J(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),rv,J(". ")]),_:1})],64))}}),iv=mn({__name:"HomeView",setup(t){return(e,n)=>(ke(),$e("main",null,[re(sv)]))}}),bl=rh({history:Nd("test"),routes:[{path:"/",name:"home",component:iv,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>ps(()=>import("./AboutView-DKmRIOzc.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>ps(()=>import("./LoginView-EkIqo-eS.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!1}},{path:"/register",name:"register",component:()=>ps(()=>import("./RegisterView-CpgRxkNc.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!1}}]});bl.beforeEach(t=>{const e=Cc();if(e.user,console.log("beforeEach",e.user),t.meta.requiresAuth&&!e.user)return"/login"});var ov="firebase",av="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(ov,av,"app");const cv={apiKey:"AIzaSyD0PwqFVRBxyefTFw31dvdJ-lrFFtDjvFU",authDomain:"looks-b11a8.firebaseapp.com",databaseURL:"https://looks-b11a8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"looks-b11a8",storageBucket:"looks-b11a8.appspot.com",messagingSenderId:"529873039695",appId:"1:529873039695:web:401c380738ac548b17553a"},lv=Uc(cv),Qo=Xm(lv),bi=Wf(r_);bi.use(Jf());bi.use(bl);bi.mount("#app");export{Mt as _,K as a,re as b,$e as c,mn as d,he as e,hv as f,fv as g,J as h,Qo as i,pv as j,ke as o,Nr as r,gv as s,aa as t,Cc as u,dv as v,uv as w};
