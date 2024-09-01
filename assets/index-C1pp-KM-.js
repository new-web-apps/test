const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-BuPjrx6b.js","assets/LoginView-CYGyYmks.css","assets/RegisterView-CvJ7lh_h.js","assets/user-D93ooqc4.js","assets/RegisterView-D1_H6Ktq.css","assets/UsersView-BWBxTbLh.js","assets/UsersView-CzAEsxZp.css","assets/WardrobeView-CyHo8Sdt.js","assets/WardrobeView-CPGXPJmR.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ne={},qr=[],Nt=()=>{},X_=()=>!1,$o=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qc=t=>t.startsWith("onUpdate:"),lt=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Y_=Object.prototype.hasOwnProperty,Ee=(t,e)=>Y_.call(t,e),le=Array.isArray,Hr=t=>qo(t)==="[object Map]",Id=t=>qo(t)==="[object Set]",de=t=>typeof t=="function",We=t=>typeof t=="string",Qn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Ad=t=>(De(t)||de(t))&&de(t.then)&&de(t.catch),Rd=Object.prototype.toString,qo=t=>Rd.call(t),Z_=t=>qo(t).slice(8,-1),bd=t=>qo(t)==="[object Object]",Xc=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Us=Gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ey=/-(\w)/g,Ft=Ho(t=>t.replace(ey,(e,n)=>n?n.toUpperCase():"")),ty=/\B([A-Z])/g,Rr=Ho(t=>t.replace(ty,"-$1").toLowerCase()),Wo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Va=Ho(t=>t?`on${Wo(t)}`:""),Hn=(t,e)=>!Object.is(t,e),no=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rh;const Pd=()=>rh||(rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?iy(r):Yc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||De(t))return t}const ny=/;(?![^(]*\))/g,ry=/:([^]+)/,sy=/\/\*[^]*?\*\//g;function iy(t){const e={};return t.replace(sy,"").split(ny).forEach(n=>{if(n){const r=n.split(ry);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zc(t){let e="";if(We(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Zc(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const oy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ay=Gc(oy);function Cd(t){return!!t||t===""}const kd=t=>!!(t&&t.__v_isRef===!0),cy=t=>We(t)?t:t==null?"":le(t)||De(t)&&(t.toString===Rd||!de(t.toString))?kd(t)?cy(t.value):JSON.stringify(t,Od,2):String(t),Od=(t,e)=>kd(e)?Od(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xa(r,i)+" =>"]=s,n),{})}:Id(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xa(n))}:Qn(e)?xa(e):De(e)&&!le(e)&&!bd(e)?String(e):e,xa=(t,e="")=>{var n;return Qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Nd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Dd(t){return new Nd(t)}function ly(t,e=It){e&&e.active&&e.effects.push(t)}function Vd(){return It}function uy(t){It&&It.cleanups.push(t)}let lr;class el{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ly(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Jn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(hy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Xn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Un,n=lr;try{return Un=!0,lr=this,this._runnings++,sh(this),this.fn()}finally{ih(this),this._runnings--,lr=n,Un=e}}stop(){this.active&&(sh(this),ih(this),this.onStop&&this.onStop(),this.active=!1)}}function hy(t){return t.value}function sh(t){t._trackId++,t._depsLength=0}function ih(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)xd(t.deps[e],t);t.deps.length=t._depsLength}}function xd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Un=!0,ac=0;const Ld=[];function Jn(){Ld.push(Un),Un=!1}function Xn(){const t=Ld.pop();Un=t===void 0?!0:t}function tl(){ac++}function nl(){for(ac--;!ac&&cc.length;)cc.shift()()}function Md(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&xd(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const cc=[];function Ud(t,e,n){tl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&cc.push(r.scheduler)))}nl()}const Fd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},To=new WeakMap,ur=Symbol(""),lc=Symbol("");function vt(t,e,n){if(Un&&lr){let r=To.get(t);r||To.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fd(()=>r.delete(n))),Md(lr,s)}}function hn(t,e,n,r,s,i){const o=To.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((h,d)=>{(d==="length"||!Qn(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":le(t)?Xc(n)&&c.push(o.get("length")):(c.push(o.get(ur)),Hr(t)&&c.push(o.get(lc)));break;case"delete":le(t)||(c.push(o.get(ur)),Hr(t)&&c.push(o.get(lc)));break;case"set":Hr(t)&&c.push(o.get(ur));break}tl();for(const l of c)l&&Ud(l,4);nl()}function fy(t,e){const n=To.get(t);return n&&n.get(e)}const dy=Gc("__proto__,__v_isRef,__isVue"),Bd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qn)),oh=py();function py(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)vt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jn(),tl();const r=Ie(this)[e].apply(this,n);return nl(),Xn(),r}}),t}function gy(t){Qn(t)||(t=String(t));const e=Ie(this);return vt(e,"has",t),e.hasOwnProperty(t)}class jd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Py:Wd:i?Hd:qd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Ee(oh,n))return Reflect.get(oh,n,r);if(n==="hasOwnProperty")return gy}const c=Reflect.get(e,n,r);return(Qn(n)?Bd.has(n):dy(n))||(s||vt(e,"get",n),i)?c:Ke(c)?o&&Xc(n)?c:c.value:De(c)?s?zd(c):di(c):c}}class $d extends jd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=mr(i);if(!Jr(r)&&!mr(r)&&(i=Ie(i),r=Ie(r)),!le(e)&&Ke(i)&&!Ke(r))return l?!1:(i.value=r,!0)}const o=le(e)&&Xc(n)?Number(n)<e.length:Ee(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?Hn(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Qn(n)||!Bd.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",le(e)?"length":ur),Reflect.ownKeys(e)}}class my extends jd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _y=new $d,yy=new my,vy=new $d(!0);const rl=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(Hn(e,i)&&vt(s,"get",e),vt(s,"get",i));const{has:o}=Ko(s),c=r?rl:n?al:Xs;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function qi(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(Hn(t,s)&&vt(r,"has",t),vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Hi(t,e=!1){return t=t.__v_raw,!e&&vt(Ie(t),"iterate",ur),Reflect.get(t,"size",t)}function ah(t,e=!1){!e&&!Jr(t)&&!mr(t)&&(t=Ie(t));const n=Ie(this);return Ko(n).has.call(n,t)||(n.add(t),hn(n,"add",t,t)),this}function ch(t,e,n=!1){!n&&!Jr(e)&&!mr(e)&&(e=Ie(e));const r=Ie(this),{has:s,get:i}=Ko(r);let o=s.call(r,t);o||(t=Ie(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Hn(e,c)&&hn(r,"set",t,e):hn(r,"add",t,e),this}function lh(t){const e=Ie(this),{has:n,get:r}=Ko(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&hn(e,"delete",t,void 0),i}function uh(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&hn(t,"clear",void 0,void 0),n}function Wi(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?rl:t?al:Xs;return!t&&vt(c,"iterate",ur),o.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function Ki(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Hr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?rl:e?al:Xs;return!e&&vt(i,"iterate",l?lc:ur),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ey(){const t={get(i){return $i(this,i)},get size(){return Hi(this)},has:qi,add:ah,set:ch,delete:lh,clear:uh,forEach:Wi(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return Hi(this)},has:qi,add(i){return ah.call(this,i,!0)},set(i,o){return ch.call(this,i,o,!0)},delete:lh,clear:uh,forEach:Wi(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Wi(!0,!1)},r={get(i){return $i(this,i,!0,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ki(i,!1,!1),n[i]=Ki(i,!0,!1),e[i]=Ki(i,!1,!0),r[i]=Ki(i,!0,!0)}),[t,n,e,r]}const[Ty,wy,Iy,Ay]=Ey();function sl(t,e){const n=e?t?Ay:Iy:t?wy:Ty;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const Ry={get:sl(!1,!1)},by={get:sl(!1,!0)},Sy={get:sl(!0,!1)};const qd=new WeakMap,Hd=new WeakMap,Wd=new WeakMap,Py=new WeakMap;function Cy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Cy(Z_(t))}function di(t){return mr(t)?t:il(t,!1,_y,Ry,qd)}function Kd(t){return il(t,!1,vy,by,Hd)}function zd(t){return il(t,!0,yy,Sy,Wd)}function il(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ky(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function hr(t){return mr(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function Jr(t){return!!(t&&t.__v_isShallow)}function Gd(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ol(t){return Object.isExtensible(t)&&Sd(t,"__v_skip",!0),t}const Xs=t=>De(t)?di(t):t,al=t=>De(t)?zd(t):t;class Qd{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new el(()=>e(this._value),()=>ro(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&Hn(e._value,e._value=e.effect.run())&&ro(e,4),Jd(e),e.effect._dirtyLevel>=2&&ro(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Oy(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Nt):(r=t.get,s=t.set),new Qd(r,s,i||!s,n)}function Jd(t){var e;Un&&lr&&(t=Ie(t),Md(lr,(e=t.dep)!=null?e:t.dep=Fd(()=>t.dep=void 0,t instanceof Qd?t:void 0)))}function ro(t,e=4,n,r){t=Ie(t);const s=t.dep;s&&Ud(s,e)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function zo(t){return Xd(t,!1)}function Ny(t){return Xd(t,!0)}function Xd(t,e){return Ke(t)?t:new Dy(t,e)}class Dy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Xs(e)}get value(){return Jd(this),this._value}set value(e){const n=this.__v_isShallow||Jr(e)||mr(e);e=n?e:Ie(e),Hn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Xs(e),ro(this,4))}}function Lt(t){return Ke(t)?t.value:t}const Vy={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yd(t){return hr(t)?t:new Proxy(t,Vy)}function xy(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=My(t,n);return e}class Ly{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fy(Ie(this._object),this._key)}}function My(t,e,n){const r=t[e];return Ke(r)?r:new Ly(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(t,e,n,r){try{return r?t(...r):t()}catch(s){Go(s,e,n)}}function Ut(t,e,n,r){if(de(t)){const s=Fn(t,e,n,r);return s&&Ad(s)&&s.catch(i=>{Go(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ut(t[i],e,n,r));return s}}function Go(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Jn(),Fn(l,null,10,[t,o,c]),Xn();return}}Uy(t,n,s,r)}function Uy(t,e,n,r=!0){console.error(t)}let Ys=!1,uc=!1;const ct=[];let zt=0;const Wr=[];let Pn=null,ar=0;const Zd=Promise.resolve();let cl=null;function ll(t){const e=cl||Zd;return t?e.then(this?t.bind(this):t):e}function Fy(t){let e=zt+1,n=ct.length;for(;e<n;){const r=e+n>>>1,s=ct[r],i=Zs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ul(t){(!ct.length||!ct.includes(t,Ys&&t.allowRecurse?zt+1:zt))&&(t.id==null?ct.push(t):ct.splice(Fy(t.id),0,t),ep())}function ep(){!Ys&&!uc&&(uc=!0,cl=Zd.then(np))}function By(t){const e=ct.indexOf(t);e>zt&&ct.splice(e,1)}function jy(t){le(t)?Wr.push(...t):(!Pn||!Pn.includes(t,t.allowRecurse?ar+1:ar))&&Wr.push(t),ep()}function hh(t,e,n=Ys?zt+1:0){for(;n<ct.length;n++){const r=ct[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ct.splice(n,1),n--,r()}}}function tp(t){if(Wr.length){const e=[...new Set(Wr)].sort((n,r)=>Zs(n)-Zs(r));if(Wr.length=0,Pn){Pn.push(...e);return}for(Pn=e,ar=0;ar<Pn.length;ar++){const n=Pn[ar];n.active!==!1&&n()}Pn=null,ar=0}}const Zs=t=>t.id==null?1/0:t.id,$y=(t,e)=>{const n=Zs(t)-Zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function np(t){uc=!1,Ys=!0,ct.sort($y);try{for(zt=0;zt<ct.length;zt++){const e=ct[zt];e&&e.active!==!1&&Fn(e,e.i,e.i?15:14)}}finally{zt=0,ct.length=0,tp(),Ys=!1,cl=null,(ct.length||Wr.length)&&np()}}let yt=null,Qo=null;function wo(t){const e=yt;return yt=t,Qo=t&&t.type.__scopeId||null,e}function qy(t){Qo=t}function Hy(){Qo=null}function so(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Eh(-1);const i=wo(e);let o;try{o=t(...s)}finally{wo(i),r._d&&Eh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function oC(t,e){if(yt===null)return t;const n=ea(yt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&On(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Jn(),Ut(l,n,8,[t.el,c,t,e]),Xn())}}function rp(t,e){t.shapeFlag&6&&t.component?rp(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function hl(t,e){return de(t)?lt({name:t.name},e,{setup:t}):t}const io=t=>!!t.type.__asyncLoader,sp=t=>t.type.__isKeepAlive;function Wy(t,e){ip(t,"a",e)}function Ky(t,e){ip(t,"da",e)}function ip(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)sp(s.parent.vnode)&&zy(r,e,n,s),s=s.parent}}function zy(t,e,n,r){const s=Jo(e,t,r,!0);ap(()=>{Jc(r[e],s)},n)}function Jo(t,e,n=Ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const c=pi(n),l=Ut(e,n,t,o);return c(),Xn(),l});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=Ye)=>{(!Zo||t==="sp")&&Jo(t,(...r)=>e(...r),n)},op=yn("bm"),Gy=yn("m"),Qy=yn("bu"),Jy=yn("u"),Xy=yn("bum"),ap=yn("um"),Yy=yn("sp"),Zy=yn("rtg"),ev=yn("rtc");function tv(t,e=Ye){Jo("ec",t,e)}const nv="components";function aC(t,e){return sv(nv,t,!0,e)||t}const rv=Symbol.for("v-ndc");function sv(t,e,n=!0,r=!1){const s=yt||Ye;if(s){const i=s.type;{const c=Jv(i,!1);if(c&&(c===e||c===Ft(e)||c===Wo(Ft(e))))return i}const o=fh(s[t]||i[t],e)||fh(s.appContext[t],e);return!o&&r?i:o}}function fh(t,e){return t&&(t[e]||t[Ft(e)]||t[Wo(Ft(e))])}function cC(t,e,n,r){let s;const i=n;if(le(t)||We(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const hc=t=>t?bp(t)?ea(t):hc(t.parent):null,Fs=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$emit:t=>t.emit,$options:t=>fl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ul(t.update)}),$nextTick:t=>t.n||(t.n=ll.bind(t.proxy)),$watch:t=>Pv.bind(t)}),La=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ee(t,e),iv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(La(r,e))return o[e]=1,r[e];if(s!==Ne&&Ee(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ee(h,e))return o[e]=3,i[e];if(n!==Ne&&Ee(n,e))return o[e]=4,n[e];fc&&(o[e]=0)}}const d=Fs[e];let p,m;if(d)return e==="$attrs"&&vt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ee(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ee(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return La(s,e)?(s[e]=n,!0):r!==Ne&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ne&&Ee(t,o)||La(e,o)||(c=i[0])&&Ee(c,o)||Ee(r,o)||Ee(Fs,o)||Ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fc=!0;function ov(t){const e=fl(t),n=t.proxy,r=t.ctx;fc=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:E,updated:C,activated:N,deactivated:O,beforeDestroy:$,beforeUnmount:B,destroyed:M,unmounted:Q,render:oe,renderTracked:X,renderTriggered:A,errorCaptured:_,serverPrefetch:v,expose:I,inheritAttrs:R,components:b,directives:w,filters:Qe}=e;if(h&&av(h,r,null),o)for(const ce in o){const pe=o[ce];de(pe)&&(r[ce]=pe.bind(n))}if(s){const ce=s.call(n,n);De(ce)&&(t.data=di(ce))}if(fc=!0,i)for(const ce in i){const pe=i[ce],Et=de(pe)?pe.bind(n,n):de(pe.get)?pe.get.bind(n,n):Nt,Vt=!de(pe)&&de(pe.set)?pe.set.bind(n):Nt,St=kt({get:Et,set:Vt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>St.value,set:Ve=>St.value=Ve})}if(c)for(const ce in c)cp(c[ce],r,n,ce);if(l){const ce=de(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(pe=>{oo(pe,ce[pe])})}d&&ph(d,t,"c");function Ce(ce,pe){le(pe)?pe.forEach(Et=>ce(Et.bind(n))):pe&&ce(pe.bind(n))}if(Ce(op,p),Ce(Gy,m),Ce(Qy,E),Ce(Jy,C),Ce(Wy,N),Ce(Ky,O),Ce(tv,_),Ce(ev,X),Ce(Zy,A),Ce(Xy,B),Ce(ap,Q),Ce(Yy,v),le(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(pe=>{Object.defineProperty(ce,pe,{get:()=>n[pe],set:Et=>n[pe]=Et})})}else t.exposed||(t.exposed={});oe&&t.render===Nt&&(t.render=oe),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),w&&(t.directives=w)}function av(t,e,n=Nt){le(t)&&(t=dc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Dt(s.from||r,s.default,!0):i=Dt(s.from||r):i=Dt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ph(t,e,n){Ut(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cp(t,e,n,r){const s=r.includes(".")?wp(n,r):()=>n[r];if(We(t)){const i=e[t];de(i)&&Bs(s,i)}else if(de(t))Bs(s,t.bind(n));else if(De(t))if(le(t))t.forEach(i=>cp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Bs(s,i,t)}}function fl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Io(l,h,o,!0)),Io(l,e,o)),De(e)&&i.set(e,l),l}function Io(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Io(t,i,n,!0),s&&s.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=cv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const cv={data:gh,props:mh,emits:mh,methods:Ns,computed:Ns,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Ns,directives:Ns,watch:uv,provide:gh,inject:lv};function gh(t,e){return e?t?function(){return lt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function lv(t,e){return Ns(dc(t),dc(e))}function dc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ns(t,e){return t?lt(Object.create(null),t,e):e}function mh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:lt(Object.create(null),dh(t),dh(e??{})):e}function uv(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function lp(){return{app:null,config:{isNativeTag:X_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hv=0;function fv(t,e){return function(r,s=null){de(r)||(r=lt({},r)),s!=null&&!De(s)&&(s=null);const i=lp(),o=new WeakSet;let c=!1;const l=i.app={_uid:hv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yv,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(l,...d)):de(h)&&(o.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const m=et(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),c=!0,l._container=h,h.__vue_app__=l,ea(m.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=fr;fr=l;try{return h()}finally{fr=d}}};return l}}let fr=null;function oo(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=Ye||yt;if(r||fr){const s=fr?fr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function dv(){return!!(Ye||yt||fr)}const up={},hp=()=>Object.create(up),fp=t=>Object.getPrototypeOf(t)===up;function pv(t,e,n,r=!1){const s={},i=hp();t.propsDefaults=Object.create(null),dp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Xo(t.emitsOptions,m))continue;const E=e[m];if(l)if(Ee(i,m))E!==i[m]&&(i[m]=E,h=!0);else{const C=Ft(m);s[C]=pc(l,c,C,E,t,!1)}else E!==i[m]&&(i[m]=E,h=!0)}}}else{dp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=Rr(p))===p||!Ee(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=pc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&hn(t.attrs,"set","")}function dp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Us(l))continue;const h=e[l];let d;s&&Ee(s,d=Ft(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:Xo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ie(n),h=c||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=pc(s,l,p,h[p],t,!Ee(h,p))}}return o}function pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ee(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=pi(s);r=h[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const mv=new WeakMap;function pp(t,e,n=!1){const r=n?mv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const d=p=>{l=!0;const[m,E]=pp(p,e,!0);lt(o,m),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return De(t)&&r.set(t,qr),qr;if(le(i))for(let d=0;d<i.length;d++){const p=Ft(i[d]);_h(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=Ft(d);if(_h(p)){const m=i[d],E=o[p]=le(m)||de(m)?{type:m}:lt({},m),C=E.type;let N=!1,O=!0;if(le(C))for(let $=0;$<C.length;++$){const B=C[$],M=de(B)&&B.name;if(M==="Boolean"){N=!0;break}else M==="String"&&(O=!1)}else N=de(C)&&C.name==="Boolean";E[0]=N,E[1]=O,(N||Ee(E,"default"))&&c.push(p)}}const h=[o,c];return De(t)&&r.set(t,h),h}function _h(t){return t[0]!=="$"&&!Us(t)}const gp=t=>t[0]==="_"||t==="$stable",dl=t=>le(t)?t.map(Kt):[Kt(t)],_v=(t,e,n)=>{if(e._n)return e;const r=so((...s)=>dl(e(...s)),n);return r._c=!1,r},mp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gp(s))continue;const i=t[s];if(de(i))e[s]=_v(s,i,r);else if(i!=null){const o=dl(i);e[s]=()=>o}}},_p=(t,e)=>{const n=dl(e);t.slots.default=()=>n},yp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},yv=(t,e,n)=>{const r=t.slots=hp();if(t.vnode.shapeFlag&32){const s=e._;s?(yp(r,e,n),n&&Sd(r,"_",s,!0)):mp(e,r)}else e&&_p(t,e)},vv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:yp(s,e,n):(i=!e.$stable,mp(e,s)),o=e}else e&&(_p(t,e),o={default:1});if(i)for(const c in s)!gp(c)&&o[c]==null&&delete s[c]};function gc(t,e,n,r,s=!1){if(le(t)){t.forEach((m,E)=>gc(m,e&&(le(e)?e[E]:e),n,r,s));return}if(io(r)&&!s)return;const i=r.shapeFlag&4?ea(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ne?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(We(h)?(d[h]=null,Ee(p,h)&&(p[h]=null)):Ke(h)&&(h.value=null)),de(l))Fn(l,c,12,[o,d]);else{const m=We(l),E=Ke(l);if(m||E){const C=()=>{if(t.f){const N=m?Ee(p,l)?p[l]:d[l]:l.value;s?le(N)&&Jc(N,i):le(N)?N.includes(i)||N.push(i):m?(d[l]=[i],Ee(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else m?(d[l]=o,Ee(p,l)&&(p[l]=o)):E&&(l.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,_t(C,n)):C()}}}const Ev=Symbol("_vte"),Tv=t=>t.__isTeleport,_t=Lv;function wv(t){return Iv(t)}function Iv(t,e){const n=Pd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:E=Nt,insertStaticContent:C}=t,N=(y,T,P,L=null,D=null,j=null,K=void 0,q=null,W=!!T.dynamicChildren)=>{if(y===T)return;y&&!Ss(y,T)&&(L=V(y),Ve(y,D,j,!0),y=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:F,ref:G,shapeFlag:re}=T;switch(F){case Yo:O(y,T,P,L);break;case _r:$(y,T,P,L);break;case Fa:y==null&&B(T,P,L,K);break;case Wt:b(y,T,P,L,D,j,K,q,W);break;default:re&1?oe(y,T,P,L,D,j,K,q,W):re&6?w(y,T,P,L,D,j,K,q,W):(re&64||re&128)&&F.process(y,T,P,L,D,j,K,q,W,Z)}G!=null&&D&&gc(G,y&&y.ref,j,T||y,!T)},O=(y,T,P,L)=>{if(y==null)r(T.el=c(T.children),P,L);else{const D=T.el=y.el;T.children!==y.children&&h(D,T.children)}},$=(y,T,P,L)=>{y==null?r(T.el=l(T.children||""),P,L):T.el=y.el},B=(y,T,P,L)=>{[y.el,y.anchor]=C(y.children,T,P,L,y.el,y.anchor)},M=({el:y,anchor:T},P,L)=>{let D;for(;y&&y!==T;)D=m(y),r(y,P,L),y=D;r(T,P,L)},Q=({el:y,anchor:T})=>{let P;for(;y&&y!==T;)P=m(y),s(y),y=P;s(T)},oe=(y,T,P,L,D,j,K,q,W)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),y==null?X(T,P,L,D,j,K,q,W):v(y,T,D,j,K,q,W)},X=(y,T,P,L,D,j,K,q)=>{let W,F;const{props:G,shapeFlag:re,transition:ne,dirs:te}=y;if(W=y.el=o(y.type,j,G&&G.is,G),re&8?d(W,y.children):re&16&&_(y.children,W,null,L,D,Ma(y,j),K,q),te&&sr(y,null,L,"created"),A(W,y,y.scopeId,K,L),G){for(const Ae in G)Ae!=="value"&&!Us(Ae)&&i(W,Ae,null,G[Ae],j,L);"value"in G&&i(W,"value",null,G.value,j),(F=G.onVnodeBeforeMount)&&Ht(F,L,y)}te&&sr(y,null,L,"beforeMount");const ie=Av(D,ne);ie&&ne.beforeEnter(W),r(W,T,P),((F=G&&G.onVnodeMounted)||ie||te)&&_t(()=>{F&&Ht(F,L,y),ie&&ne.enter(W),te&&sr(y,null,L,"mounted")},D)},A=(y,T,P,L,D)=>{if(P&&E(y,P),L)for(let j=0;j<L.length;j++)E(y,L[j]);if(D){let j=D.subTree;if(T===j){const K=D.vnode;A(y,K,K.scopeId,K.slotScopeIds,D.parent)}}},_=(y,T,P,L,D,j,K,q,W=0)=>{for(let F=W;F<y.length;F++){const G=y[F]=q?Cn(y[F]):Kt(y[F]);N(null,G,T,P,L,D,j,K,q)}},v=(y,T,P,L,D,j,K)=>{const q=T.el=y.el;let{patchFlag:W,dynamicChildren:F,dirs:G}=T;W|=y.patchFlag&16;const re=y.props||Ne,ne=T.props||Ne;let te;if(P&&ir(P,!1),(te=ne.onVnodeBeforeUpdate)&&Ht(te,P,T,y),G&&sr(T,y,P,"beforeUpdate"),P&&ir(P,!0),(re.innerHTML&&ne.innerHTML==null||re.textContent&&ne.textContent==null)&&d(q,""),F?I(y.dynamicChildren,F,q,P,L,Ma(T,D),j):K||pe(y,T,q,null,P,L,Ma(T,D),j,!1),W>0){if(W&16)R(q,re,ne,P,D);else if(W&2&&re.class!==ne.class&&i(q,"class",null,ne.class,D),W&4&&i(q,"style",re.style,ne.style,D),W&8){const ie=T.dynamicProps;for(let Ae=0;Ae<ie.length;Ae++){const ve=ie[Ae],Be=re[ve],Tt=ne[ve];(Tt!==Be||ve==="value")&&i(q,ve,Be,Tt,D,P)}}W&1&&y.children!==T.children&&d(q,T.children)}else!K&&F==null&&R(q,re,ne,P,D);((te=ne.onVnodeUpdated)||G)&&_t(()=>{te&&Ht(te,P,T,y),G&&sr(T,y,P,"updated")},L)},I=(y,T,P,L,D,j,K)=>{for(let q=0;q<T.length;q++){const W=y[q],F=T[q],G=W.el&&(W.type===Wt||!Ss(W,F)||W.shapeFlag&70)?p(W.el):P;N(W,F,G,null,L,D,j,K,!0)}},R=(y,T,P,L,D)=>{if(T!==P){if(T!==Ne)for(const j in T)!Us(j)&&!(j in P)&&i(y,j,T[j],null,D,L);for(const j in P){if(Us(j))continue;const K=P[j],q=T[j];K!==q&&j!=="value"&&i(y,j,q,K,D,L)}"value"in P&&i(y,"value",T.value,P.value,D)}},b=(y,T,P,L,D,j,K,q,W)=>{const F=T.el=y?y.el:c(""),G=T.anchor=y?y.anchor:c("");let{patchFlag:re,dynamicChildren:ne,slotScopeIds:te}=T;te&&(q=q?q.concat(te):te),y==null?(r(F,P,L),r(G,P,L),_(T.children||[],P,G,D,j,K,q,W)):re>0&&re&64&&ne&&y.dynamicChildren?(I(y.dynamicChildren,ne,P,D,j,K,q),(T.key!=null||D&&T===D.subTree)&&vp(y,T,!0)):pe(y,T,P,G,D,j,K,q,W)},w=(y,T,P,L,D,j,K,q,W)=>{T.slotScopeIds=q,y==null?T.shapeFlag&512?D.ctx.activate(T,P,L,K,W):Qe(T,P,L,D,j,K,W):gt(y,T,W)},Qe=(y,T,P,L,D,j,K)=>{const q=y.component=Wv(y,L,D);if(sp(y)&&(q.ctx.renderer=Z),Kv(q,!1,K),q.asyncDep){if(D&&D.registerDep(q,Ce,K),!y.el){const W=q.subTree=et(_r);$(null,W,T,P)}}else Ce(q,y,T,P,D,j,K)},gt=(y,T,P)=>{const L=T.component=y.component;if(Dv(y,T,P))if(L.asyncDep&&!L.asyncResolved){ce(L,T,P);return}else L.next=T,By(L.update),L.effect.dirty=!0,L.update();else T.el=y.el,L.vnode=T},Ce=(y,T,P,L,D,j,K)=>{const q=()=>{if(y.isMounted){let{next:G,bu:re,u:ne,parent:te,vnode:ie}=y;{const Pt=Ep(y);if(Pt){G&&(G.el=ie.el,ce(y,G,K)),Pt.asyncDep.then(()=>{y.isUnmounted||q()});return}}let Ae=G,ve;ir(y,!1),G?(G.el=ie.el,ce(y,G,K)):G=ie,re&&no(re),(ve=G.props&&G.props.onVnodeBeforeUpdate)&&Ht(ve,te,G,ie),ir(y,!0);const Be=Ua(y),Tt=y.subTree;y.subTree=Be,N(Tt,Be,p(Tt.el),V(Tt),y,D,j),G.el=Be.el,Ae===null&&Vv(y,Be.el),ne&&_t(ne,D),(ve=G.props&&G.props.onVnodeUpdated)&&_t(()=>Ht(ve,te,G,ie),D)}else{let G;const{el:re,props:ne}=T,{bm:te,m:ie,parent:Ae}=y,ve=io(T);if(ir(y,!1),te&&no(te),!ve&&(G=ne&&ne.onVnodeBeforeMount)&&Ht(G,Ae,T),ir(y,!0),re&&be){const Be=()=>{y.subTree=Ua(y),be(re,y.subTree,y,D,null)};ve?T.type.__asyncLoader().then(()=>!y.isUnmounted&&Be()):Be()}else{const Be=y.subTree=Ua(y);N(null,Be,P,L,y,D,j),T.el=Be.el}if(ie&&_t(ie,D),!ve&&(G=ne&&ne.onVnodeMounted)){const Be=T;_t(()=>Ht(G,Ae,Be),D)}(T.shapeFlag&256||Ae&&io(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&_t(y.a,D),y.isMounted=!0,T=P=L=null}},W=y.effect=new el(q,Nt,()=>ul(F),y.scope),F=y.update=()=>{W.dirty&&W.run()};F.i=y,F.id=y.uid,ir(y,!0),F()},ce=(y,T,P)=>{T.component=y;const L=y.vnode.props;y.vnode=T,y.next=null,gv(y,T.props,L,P),vv(y,T.children,P),Jn(),hh(y),Xn()},pe=(y,T,P,L,D,j,K,q,W=!1)=>{const F=y&&y.children,G=y?y.shapeFlag:0,re=T.children,{patchFlag:ne,shapeFlag:te}=T;if(ne>0){if(ne&128){Vt(F,re,P,L,D,j,K,q,W);return}else if(ne&256){Et(F,re,P,L,D,j,K,q,W);return}}te&8?(G&16&&mt(F,D,j),re!==F&&d(P,re)):G&16?te&16?Vt(F,re,P,L,D,j,K,q,W):mt(F,D,j,!0):(G&8&&d(P,""),te&16&&_(re,P,L,D,j,K,q,W))},Et=(y,T,P,L,D,j,K,q,W)=>{y=y||qr,T=T||qr;const F=y.length,G=T.length,re=Math.min(F,G);let ne;for(ne=0;ne<re;ne++){const te=T[ne]=W?Cn(T[ne]):Kt(T[ne]);N(y[ne],te,P,null,D,j,K,q,W)}F>G?mt(y,D,j,!0,!1,re):_(T,P,L,D,j,K,q,W,re)},Vt=(y,T,P,L,D,j,K,q,W)=>{let F=0;const G=T.length;let re=y.length-1,ne=G-1;for(;F<=re&&F<=ne;){const te=y[F],ie=T[F]=W?Cn(T[F]):Kt(T[F]);if(Ss(te,ie))N(te,ie,P,null,D,j,K,q,W);else break;F++}for(;F<=re&&F<=ne;){const te=y[re],ie=T[ne]=W?Cn(T[ne]):Kt(T[ne]);if(Ss(te,ie))N(te,ie,P,null,D,j,K,q,W);else break;re--,ne--}if(F>re){if(F<=ne){const te=ne+1,ie=te<G?T[te].el:L;for(;F<=ne;)N(null,T[F]=W?Cn(T[F]):Kt(T[F]),P,ie,D,j,K,q,W),F++}}else if(F>ne)for(;F<=re;)Ve(y[F],D,j,!0),F++;else{const te=F,ie=F,Ae=new Map;for(F=ie;F<=ne;F++){const ht=T[F]=W?Cn(T[F]):Kt(T[F]);ht.key!=null&&Ae.set(ht.key,F)}let ve,Be=0;const Tt=ne-ie+1;let Pt=!1,ds=0;const En=new Array(Tt);for(F=0;F<Tt;F++)En[F]=0;for(F=te;F<=re;F++){const ht=y[F];if(Be>=Tt){Ve(ht,D,j,!0);continue}let Ct;if(ht.key!=null)Ct=Ae.get(ht.key);else for(ve=ie;ve<=ne;ve++)if(En[ve-ie]===0&&Ss(ht,T[ve])){Ct=ve;break}Ct===void 0?Ve(ht,D,j,!0):(En[Ct-ie]=F+1,Ct>=ds?ds=Ct:Pt=!0,N(ht,T[Ct],P,null,D,j,K,q,W),Be++)}const kr=Pt?Rv(En):qr;for(ve=kr.length-1,F=Tt-1;F>=0;F--){const ht=ie+F,Ct=T[ht],Or=ht+1<G?T[ht+1].el:L;En[F]===0?N(null,Ct,P,Or,D,j,K,q,W):Pt&&(ve<0||F!==kr[ve]?St(Ct,P,Or,2):ve--)}}},St=(y,T,P,L,D=null)=>{const{el:j,type:K,transition:q,children:W,shapeFlag:F}=y;if(F&6){St(y.component.subTree,T,P,L);return}if(F&128){y.suspense.move(T,P,L);return}if(F&64){K.move(y,T,P,Z);return}if(K===Wt){r(j,T,P);for(let re=0;re<W.length;re++)St(W[re],T,P,L);r(y.anchor,T,P);return}if(K===Fa){M(y,T,P);return}if(L!==2&&F&1&&q)if(L===0)q.beforeEnter(j),r(j,T,P),_t(()=>q.enter(j),D);else{const{leave:re,delayLeave:ne,afterLeave:te}=q,ie=()=>r(j,T,P),Ae=()=>{re(j,()=>{ie(),te&&te()})};ne?ne(j,ie,Ae):Ae()}else r(j,T,P)},Ve=(y,T,P,L=!1,D=!1)=>{const{type:j,props:K,ref:q,children:W,dynamicChildren:F,shapeFlag:G,patchFlag:re,dirs:ne,cacheIndex:te}=y;if(re===-2&&(D=!1),q!=null&&gc(q,null,P,y,!0),te!=null&&(T.renderCache[te]=void 0),G&256){T.ctx.deactivate(y);return}const ie=G&1&&ne,Ae=!io(y);let ve;if(Ae&&(ve=K&&K.onVnodeBeforeUnmount)&&Ht(ve,T,y),G&6)qt(y.component,P,L);else{if(G&128){y.suspense.unmount(P,L);return}ie&&sr(y,null,T,"beforeUnmount"),G&64?y.type.remove(y,T,P,Z,L):F&&!F.hasOnce&&(j!==Wt||re>0&&re&64)?mt(F,T,P,!1,!0):(j===Wt&&re&384||!D&&G&16)&&mt(W,T,P),L&&xe(y)}(Ae&&(ve=K&&K.onVnodeUnmounted)||ie)&&_t(()=>{ve&&Ht(ve,T,y),ie&&sr(y,null,T,"unmounted")},P)},xe=y=>{const{type:T,el:P,anchor:L,transition:D}=y;if(T===Wt){vn(P,L);return}if(T===Fa){Q(y);return}const j=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:q}=D,W=()=>K(P,j);q?q(y.el,j,W):W()}else j()},vn=(y,T)=>{let P;for(;y!==T;)P=m(y),s(y),y=P;s(T)},qt=(y,T,P)=>{const{bum:L,scope:D,update:j,subTree:K,um:q,m:W,a:F}=y;yh(W),yh(F),L&&no(L),D.stop(),j&&(j.active=!1,Ve(K,y,T,P)),q&&_t(q,T),_t(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},mt=(y,T,P,L=!1,D=!1,j=0)=>{for(let K=j;K<y.length;K++)Ve(y[K],T,P,L,D)},V=y=>{if(y.shapeFlag&6)return V(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=m(y.anchor||y.el),P=T&&T[Ev];return P?m(P):T};let J=!1;const z=(y,T,P)=>{y==null?T._vnode&&Ve(T._vnode,null,null,!0):N(T._vnode||null,y,T,null,null,null,P),T._vnode=y,J||(J=!0,hh(),tp(),J=!1)},Z={p:N,um:Ve,m:St,r:xe,mt:Qe,mc:_,pc:pe,pbc:I,n:V,o:t};let _e,be;return{render:z,hydrate:_e,createApp:fv(z,_e)}}function Ma({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ir({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Av(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vp(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Cn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&vp(o,c)),c.type===Yo&&(c.el=o.el)}}function Rv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ep(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ep(e)}function yh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const bv=Symbol.for("v-scx"),Sv=()=>Dt(bv),zi={};function Bs(t,e,n){return Tp(t,e,n)}function Tp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ne){if(e&&i){const X=e;e=(...A)=>{X(...A),oe()}}const l=Ye,h=X=>r===!0?X:On(X,r===!1?1:void 0);let d,p=!1,m=!1;if(Ke(t)?(d=()=>t.value,p=Jr(t)):hr(t)?(d=()=>h(t),p=!0):le(t)?(m=!0,p=t.some(X=>hr(X)||Jr(X)),d=()=>t.map(X=>{if(Ke(X))return X.value;if(hr(X))return h(X);if(de(X))return Fn(X,l,2)})):de(t)?e?d=()=>Fn(t,l,2):d=()=>(E&&E(),Ut(t,l,3,[C])):d=Nt,e&&r){const X=d;d=()=>On(X())}let E,C=X=>{E=M.onStop=()=>{Fn(X,l,4),E=M.onStop=void 0}},N;if(Zo)if(C=Nt,e?n&&Ut(e,l,3,[d(),m?[]:void 0,C]):d(),s==="sync"){const X=Sv();N=X.__watcherHandles||(X.__watcherHandles=[])}else return Nt;let O=m?new Array(t.length).fill(zi):zi;const $=()=>{if(!(!M.active||!M.dirty))if(e){const X=M.run();(r||p||(m?X.some((A,_)=>Hn(A,O[_])):Hn(X,O)))&&(E&&E(),Ut(e,l,3,[X,O===zi?void 0:m&&O[0]===zi?[]:O,C]),O=X)}else M.run()};$.allowRecurse=!!e;let B;s==="sync"?B=$:s==="post"?B=()=>_t($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),B=()=>ul($));const M=new el(d,Nt,B),Q=Vd(),oe=()=>{M.stop(),Q&&Jc(Q.effects,M)};return e?n?$():O=M.run():s==="post"?_t(M.run.bind(M),l&&l.suspense):M.run(),N&&N.push(oe),oe}function Pv(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?wp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=pi(this),c=Tp(s,i.bind(r),n);return o(),c}function wp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function On(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))On(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)On(t[r],e,n);else if(Id(t)||Hr(t))t.forEach(r=>{On(r,e,n)});else if(bd(t)){for(const r in t)On(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&On(t[r],e,n)}return t}const Cv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function kv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Cv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>We(d)?d.trim():d)),o.number&&(s=n.map(oc)));let c,l=r[c=Va(e)]||r[c=Va(Ft(e))];!l&&i&&(l=r[c=Va(Rr(e))]),l&&Ut(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ut(h,t,6,s)}}function Ip(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const d=Ip(h,e,!0);d&&(c=!0,lt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):lt(o,i),De(t)&&r.set(t,o),o)}function Xo(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Rr(e))||Ee(t,e))}function Ua(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:E,ctx:C,inheritAttrs:N}=t,O=wo(t);let $,B;try{if(n.shapeFlag&4){const Q=s||r,oe=Q;$=Kt(h.call(oe,Q,d,p,E,m,C)),B=c}else{const Q=e;$=Kt(Q.length>1?Q(p,{attrs:c,slots:o,emit:l}):Q(p,null)),B=e.props?c:Ov(c)}}catch(Q){js.length=0,Go(Q,t,1),$=et(_r)}let M=$;if(B&&N!==!1){const Q=Object.keys(B),{shapeFlag:oe}=M;Q.length&&oe&7&&(i&&Q.some(Qc)&&(B=Nv(B,i)),M=Xr(M,B,!1,!0))}return n.dirs&&(M=Xr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),$=M,wo(O),$}const Ov=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},Nv=(t,e)=>{const n={};for(const r in t)(!Qc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Dv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Xo(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?vh(r,o,h):!0:!!o;return!1}function vh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xo(n,i))return!0}return!1}function Vv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const xv=t=>t.__isSuspense;function Lv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):jy(t)}const Wt=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),js=[];let At=null;function Ao(t=!1){js.push(At=t?null:[])}function Mv(){js.pop(),At=js[js.length-1]||null}let ei=1;function Eh(t){ei+=t,t<0&&At&&(At.hasOnce=!0)}function Ap(t){return t.dynamicChildren=ei>0?At||qr:null,Mv(),ei>0&&At&&At.push(t),t}function mc(t,e,n,r,s,i){return Ap(dr(t,e,n,r,s,i,!0))}function Uv(t,e,n,r,s){return Ap(et(t,e,n,r,s,!0))}function _c(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const Rp=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Ke(t)||de(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function dr(t,e=null,n=null,r=0,s=null,i=t===Wt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rp(e),ref:e&&ao(e),scopeId:Qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return c?(pl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),ei>0&&!o&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const et=Fv;function Fv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===rv)&&(t=_r),_c(t)){const c=Xr(t,e,!0);return n&&pl(c,n),ei>0&&!i&&At&&(c.shapeFlag&6?At[At.indexOf(t)]=c:At.push(c)),c.patchFlag=-2,c}if(Xv(t)&&(t=t.__vccOpts),e){e=Bv(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=Zc(c)),De(l)&&(Gd(l)&&!le(l)&&(l=lt({},l)),e.style=Yc(l))}const o=We(t)?1:xv(t)?128:Tv(t)?64:De(t)?4:de(t)?2:0;return dr(t,e,n,r,s,o,i,!0)}function Bv(t){return t?Gd(t)||fp(t)?lt({},t):t:null}function Xr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?$v(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Rp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&rp(d,l.clone(d)),d}function co(t=" ",e=0){return et(Yo,null,t,e)}function jv(t="",e=!1){return e?(Ao(),Uv(_r,null,t)):et(_r,null,t)}function Kt(t){return t==null||typeof t=="boolean"?et(_r):le(t)?et(Wt,null,t.slice()):typeof t=="object"?Cn(t):et(Yo,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!fp(e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[co(e)]):n=8);t.children=e,t.shapeFlag|=n}function $v(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zc([e.class,r.class]));else if(s==="style")e.style=Yc([e.style,r.style]);else if($o(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){Ut(t,e,7,[n,r])}const qv=lp();let Hv=0;function Wv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qv,i={uid:Hv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pp(r,s),emitsOptions:Ip(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kv.bind(null,i),t.ce&&t.ce(i),i}let Ye=null,Ro,yc;{const t=Pd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ro=e("__VUE_INSTANCE_SETTERS__",n=>Ye=n),yc=e("__VUE_SSR_SETTERS__",n=>Zo=n)}const pi=t=>{const e=Ye;return Ro(t),t.scope.on(),()=>{t.scope.off(),Ro(e)}},Th=()=>{Ye&&Ye.scope.off(),Ro(null)};function bp(t){return t.vnode.shapeFlag&4}let Zo=!1;function Kv(t,e=!1,n=!1){e&&yc(e);const{props:r,children:s}=t.vnode,i=bp(t);pv(t,r,i,e),yv(t,s,n);const o=i?zv(t,e):void 0;return e&&yc(!1),o}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,iv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Qv(t):null,i=pi(t);Jn();const o=Fn(r,t,0,[t.props,s]);if(Xn(),i(),Ad(o)){if(o.then(Th,Th),e)return o.then(c=>{wh(t,c,e)}).catch(c=>{Go(c,t,0)});t.asyncDep=o}else wh(t,o,e)}else Sp(t,e)}function wh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Yd(e)),Sp(t,n)}let Ih;function Sp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ih&&!r.render){const s=r.template||fl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=lt(lt({isCustomElement:i,delimiters:c},o),l);r.render=Ih(s,h)}}t.render=r.render||Nt}{const s=pi(t);Jn();try{ov(t)}finally{Xn(),s()}}}const Gv={get(t,e){return vt(t,"get",""),t[e]}};function Qv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gv),slots:t.slots,emit:t.emit,expose:e}}function ea(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Yd(ol(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}})):t.proxy}function Jv(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Xv(t){return de(t)&&"__vccOpts"in t}const kt=(t,e)=>Oy(t,e,Zo);function Pp(t,e,n){const r=arguments.length;return r===2?De(e)&&!le(e)?_c(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_c(n)&&(n=[n]),et(t,e,n))}const Yv="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Zv="http://www.w3.org/2000/svg",eE="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,Ah=an&&an.createElement("template"),tE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?an.createElementNS(Zv,t):e==="mathml"?an.createElementNS(eE,t):n?an.createElement(t,{is:n}):an.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>an.createTextNode(t),createComment:t=>an.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>an.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ah.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Ah.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nE=Symbol("_vtc");function rE(t,e,n){const r=t[nE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rh=Symbol("_vod"),sE=Symbol("_vsh"),iE=Symbol(""),oE=/(^|;)\s*display\s*:/;function aE(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&lo(r,c,"")}else for(const o in e)n[o]==null&&lo(r,o,"");for(const o in n)o==="display"&&(i=!0),lo(r,o,n[o])}else if(s){if(e!==n){const o=r[iE];o&&(n+=";"+o),r.cssText=n,i=oE.test(n)}}else e&&t.removeAttribute("style");Rh in t&&(t[Rh]=i?r.display:"",t[sE]&&(r.display="none"))}const bh=/\s*!important$/;function lo(t,e,n){if(le(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cE(t,e);bh.test(n)?t.setProperty(Rr(r),n.replace(bh,""),"important"):t[r]=n}}const Sh=["Webkit","Moz","ms"],Ba={};function cE(t,e){const n=Ba[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return Ba[e]=r;r=Wo(r);for(let s=0;s<Sh.length;s++){const i=Sh[s]+r;if(i in t)return Ba[e]=i}return e}const Ph="http://www.w3.org/1999/xlink";function Ch(t,e,n,r,s,i=ay(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ph,e.slice(6,e.length)):t.setAttributeNS(Ph,e,n):n==null||i&&!Cd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Qn(n)?String(n):n)}function lE(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Cd(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Mr(t,e,n,r){t.addEventListener(e,n,r)}function uE(t,e,n,r){t.removeEventListener(e,n,r)}const kh=Symbol("_vei");function hE(t,e,n,r,s=null){const i=t[kh]||(t[kh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=fE(e);if(r){const h=i[e]=gE(r,s);Mr(t,c,h,l)}else o&&(uE(t,c,o,l),i[e]=void 0)}}const Oh=/(?:Once|Passive|Capture)$/;function fE(t){let e;if(Oh.test(t)){e={};let r;for(;r=t.match(Oh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let ja=0;const dE=Promise.resolve(),pE=()=>ja||(dE.then(()=>ja=0),ja=Date.now());function gE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ut(mE(r,n.value),e,5,[r])};return n.value=t,n.attached=pE(),n}function mE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_E=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?rE(t,r,o):e==="style"?aE(t,n,r):$o(e)?Qc(e)||hE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yE(t,e,r,o))?(lE(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ch(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ch(t,e,r,o))};function yE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nh(e)&&We(n)?!1:e in t}const Dh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>no(e,n):e};function vE(t){t.target.composing=!0}function Vh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $a=Symbol("_assign"),lC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$a]=Dh(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=oc(c)),t[$a](c)}),n&&Mr(t,"change",()=>{t.value=t.value.trim()}),e||(Mr(t,"compositionstart",vE),Mr(t,"compositionend",Vh),Mr(t,"change",Vh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[$a]=Dh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?oc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},EE=["ctrl","shift","alt","meta"],TE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>EE.some(n=>t[`${n}Key`]&&!e.includes(n))},uC=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=TE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},wE=lt({patchProp:_E},tE);let xh;function IE(){return xh||(xh=wv(wE))}const AE=(...t)=>{const e=IE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,RE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function RE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bE(t){return We(t)?document.querySelector(t):t}var SE=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Cp;const ta=t=>Cp=t,kp=Symbol();function vc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $s;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($s||($s={}));function PE(){const t=Dd(!0),e=t.run(()=>zo({}));let n=[],r=[];const s=ol({install(i){ta(s),s._a=i,i.provide(kp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!SE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Op=()=>{};function Lh(t,e,n,r=Op){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Vd()&&uy(s),s}function Lr(t,...e){t.slice().forEach(n=>{n(...e)})}const CE=t=>t(),Mh=Symbol(),qa=Symbol();function Ec(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];vc(s)&&vc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!hr(r)?t[n]=Ec(s,r):t[n]=r}return t}const kE=Symbol();function OE(t){return!vc(t)||!t.hasOwnProperty(kE)}const{assign:Sn}=Object;function NE(t){return!!(Ke(t)&&t.effect)}function DE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=xy(n.state.value[t]);return Sn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=ol(kt(()=>{ta(n);const E=n._s.get(t);return o[m].call(E,E)})),p),{}))}return l=Np(t,h,e,n,r,!0),l}function Np(t,e,n={},r,s,i){let o;const c=Sn({actions:{}},n),l={deep:!0};let h,d,p=[],m=[],E;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),zo({});let N;function O(_){let v;h=d=!1,typeof _=="function"?(_(r.state.value[t]),v={type:$s.patchFunction,storeId:t,events:E}):(Ec(r.state.value[t],_),v={type:$s.patchObject,payload:_,storeId:t,events:E});const I=N=Symbol();ll().then(()=>{N===I&&(h=!0)}),d=!0,Lr(p,v,r.state.value[t])}const $=i?function(){const{state:v}=n,I=v?v():{};this.$patch(R=>{Sn(R,I)})}:Op;function B(){o.stop(),p=[],m=[],r._s.delete(t)}const M=(_,v="")=>{if(Mh in _)return _[qa]=v,_;const I=function(){ta(r);const R=Array.from(arguments),b=[],w=[];function Qe(ce){b.push(ce)}function gt(ce){w.push(ce)}Lr(m,{args:R,name:I[qa],store:oe,after:Qe,onError:gt});let Ce;try{Ce=_.apply(this&&this.$id===t?this:oe,R)}catch(ce){throw Lr(w,ce),ce}return Ce instanceof Promise?Ce.then(ce=>(Lr(b,ce),ce)).catch(ce=>(Lr(w,ce),Promise.reject(ce))):(Lr(b,Ce),Ce)};return I[Mh]=!0,I[qa]=v,I},Q={_p:r,$id:t,$onAction:Lh.bind(null,m),$patch:O,$reset:$,$subscribe(_,v={}){const I=Lh(p,_,v.detached,()=>R()),R=o.run(()=>Bs(()=>r.state.value[t],b=>{(v.flush==="sync"?d:h)&&_({storeId:t,type:$s.direct,events:E},b)},Sn({},l,v)));return I},$dispose:B},oe=di(Q);r._s.set(t,oe);const A=(r._a&&r._a.runWithContext||CE)(()=>r._e.run(()=>(o=Dd()).run(()=>e({action:M}))));for(const _ in A){const v=A[_];if(Ke(v)&&!NE(v)||hr(v))i||(C&&OE(v)&&(Ke(v)?v.value=C[_]:Ec(v,C[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const I=M(v,_);A[_]=I,c.actions[_]=v}}return Sn(oe,A),Sn(Ie(oe),A),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:_=>{O(v=>{Sn(v,_)})}}),r._p.forEach(_=>{Sn(oe,o.run(()=>_({store:oe,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(oe.$state,C),h=!0,d=!0,oe}function VE(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,l){const h=dv();return c=c||(h?Dt(kp,null):null),c&&ta(c),c=Cp,c._s.has(r)||(i?Np(r,e,s,c):DE(r,s,c)),c._s.get(r)}return o.$id=r,o}const xE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof document<"u";function LE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function Ha(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const qs=()=>{},Bt=Array.isArray,Dp=/#/g,ME=/&/g,UE=/\//g,FE=/=/g,BE=/\?/g,Vp=/\+/g,jE=/%5B/g,$E=/%5D/g,xp=/%5E/g,qE=/%60/g,Lp=/%7B/g,HE=/%7C/g,Mp=/%7D/g,WE=/%20/g;function gl(t){return encodeURI(""+t).replace(HE,"|").replace(jE,"[").replace($E,"]")}function KE(t){return gl(t).replace(Lp,"{").replace(Mp,"}").replace(xp,"^")}function Tc(t){return gl(t).replace(Vp,"%2B").replace(WE,"+").replace(Dp,"%23").replace(ME,"%26").replace(qE,"`").replace(Lp,"{").replace(Mp,"}").replace(xp,"^")}function zE(t){return Tc(t).replace(FE,"%3D")}function GE(t){return gl(t).replace(Dp,"%23").replace(BE,"%3F")}function QE(t){return t==null?"":GE(t).replace(UE,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JE=/\/$/,XE=t=>t.replace(JE,"");function Wa(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=tT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ti(o)}}function YE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ZE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yr(e.matched[r],n.matched[s])&&Up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!eT(t[n],e[n]))return!1;return!0}function eT(t,e){return Bt(t)?Fh(t,e):Bt(e)?Fh(e,t):t===e}function Fh(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function nT(t){if(!t)if(Ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XE(t)}const rT=/^[^#]+#/;function sT(t,e){return t.replace(rT,"#")+e}function iT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const na=()=>({left:window.scrollX,top:window.scrollY});function oT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=iT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bh(t,e){return(history.state?history.state.position-e:-1)+t}const wc=new Map;function aT(t,e){wc.set(t,e)}function cT(t){const e=wc.get(t);return wc.delete(t),e}let lT=()=>location.protocol+"//"+location.host;function Fp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Uh(l,"")}return Uh(n,t)+r+s}function uT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const E=Fp(t,location),C=n.value,N=e.value;let O=0;if(m){if(n.value=E,e.value=m,o&&o===C){o=null;return}O=N?m.position-N.position:0}else r(E);s.forEach($=>{$(n.value,C,{delta:O,type:ni.pop,direction:O?O>0?Hs.forward:Hs.back:Hs.unknown})})};function l(){o=n.value}function h(m){s.push(m);const E=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(E),E}function d(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:na()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function jh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?na():null}}function hT(t){const{history:e,location:n}=window,r={value:Fp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:lT()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(E){console.error(E),n[d?"replace":"assign"](m)}}function o(l,h){const d=Re({},e.state,jh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Re({},s.value,e.state,{forward:l,scroll:na()});i(d.current,d,!0);const p=Re({},jh(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function fT(t){t=nT(t);const e=hT(t),n=uT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:sT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function dT(t){return typeof t=="string"||t&&typeof t=="object"}function Bp(t){return typeof t=="string"||typeof t=="symbol"}const jp=Symbol("");var $h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($h||($h={}));function Zr(t,e){return Re(new Error,{type:t,[jp]:!0},e)}function on(t,e){return t instanceof Error&&jp in t&&(e==null||!!(t.type&e))}const qh="[^/]+?",pT={sensitive:!1,strict:!1,start:!0,end:!0},gT=/[.+*?^${}()[\]/\\]/g;function mT(t,e){const n=Re({},pT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let E=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(gT,"\\$&"),E+=40;else if(m.type===1){const{value:C,repeatable:N,optional:O,regexp:$}=m;i.push({name:C,repeatable:N,optional:O});const B=$||qh;if(B!==qh){E+=10;try{new RegExp(`(${B})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+Q.message)}}let M=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(M=O&&h.length<2?`(?:/${M})`:"/"+M),O&&(M+="?"),s+=M,E+=20,O&&(E+=-8),N&&(E+=-20),B===".*"&&(E+=-50)}d.push(E)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const E=d[m]||"",C=i[m-1];p[C.name]=E&&C.repeatable?E.split("/"):E}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of m)if(E.type===0)d+=E.value;else if(E.type===1){const{value:C,repeatable:N,optional:O}=E,$=C in h?h[C]:"";if(Bt($)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=Bt($)?$.join("/"):$;if(!B)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function _T(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $p(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=_T(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Hh(r))return 1;if(Hh(s))return-1}return s.length-r.length}function Hh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yT={type:0,value:""},vT=/[a-zA-Z0-9_]/;function ET(t){if(!t)return[[]];if(t==="/")return[[yT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:vT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function TT(t,e,n){const r=mT(ET(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wT(t,e){const n=[],r=new Map;e=zh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,E){const C=!E,N=IT(p);N.aliasOf=E&&E.record;const O=zh(e,p),$=[N];if("alias"in p){const Q=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of Q)$.push(Re({},N,{components:E?E.record.components:N.components,path:oe,aliasOf:E?E.record:N}))}let B,M;for(const Q of $){const{path:oe}=Q;if(m&&oe[0]!=="/"){const X=m.record.path,A=X[X.length-1]==="/"?"":"/";Q.path=m.record.path+(oe&&A+oe)}if(B=TT(Q,m,O),E?E.alias.push(B):(M=M||B,M!==B&&M.alias.push(B),C&&p.name&&!Kh(B)&&o(p.name)),qp(B)&&l(B),N.children){const X=N.children;for(let A=0;A<X.length;A++)i(X[A],B,E&&E.children[A])}E=E||B}return M?()=>{o(M)}:qs}function o(p){if(Bp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=bT(p,n);n.splice(m,0,p),p.record.name&&!Kh(p)&&r.set(p.record.name,p)}function h(p,m){let E,C={},N,O;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Zr(1,{location:p});O=E.record.name,C=Re(Wh(m.params,E.keys.filter(M=>!M.optional).concat(E.parent?E.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&Wh(p.params,E.keys.map(M=>M.name))),N=E.stringify(C)}else if(p.path!=null)N=p.path,E=n.find(M=>M.re.test(N)),E&&(C=E.parse(N),O=E.record.name);else{if(E=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!E)throw Zr(1,{location:p,currentLocation:m});O=E.record.name,C=Re({},m.params,p.params),N=E.stringify(C)}const $=[];let B=E;for(;B;)$.unshift(B.record),B=B.parent;return{name:O,path:N,params:C,matched:$,meta:RT($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Wh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function IT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:AT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function AT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Kh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RT(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function zh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$p(t,e[i])<0?r=i:n=i+1}const s=ST(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ST(t){let e=t;for(;e=e.parent;)if(qp(e)&&$p(t,e)===0)return e}function qp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function PT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Vp," "),o=i.indexOf("="),c=ti(o<0?i:i.slice(0,o)),l=o<0?null:ti(i.slice(o+1));if(c in e){let h=e[c];Bt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Gh(t){let e="";for(let n in t){const r=t[n];if(n=zE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(i=>i&&Tc(i)):[r&&Tc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function CT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const kT=Symbol(""),Qh=Symbol(""),ra=Symbol(""),ml=Symbol(""),Ic=Symbol("");function Ps(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Zr(4,{from:n,to:e})):m instanceof Error?l(m):dT(m)?l(Zr(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Ka(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(OT(l)){const d=(l.__vccOpts||l)[e];d&&i.push(kn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=LE(d)?d.default:d;o.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&kn(E,n,r,o,c,s)()}))}}return i}function OT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jh(t){const e=Dt(ra),n=Dt(ml),r=kt(()=>{const l=Lt(t.to);return e.resolve(l)}),s=kt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Yr.bind(null,d));if(m>-1)return m;const E=Xh(l[h-2]);return h>1&&Xh(d)===E&&p[p.length-1].path!==E?p.findIndex(Yr.bind(null,l[h-2])):m}),i=kt(()=>s.value>-1&&VT(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&Up(n.params,r.value.params));function c(l={}){return DT(l)?e[Lt(t.replace)?"replace":"push"](Lt(t.to)).catch(qs):Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const NT=hl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jh,setup(t,{slots:e}){const n=di(Jh(t)),{options:r}=Dt(ra),s=kt(()=>({[Yh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uo=NT;function DT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yh=(t,e,n)=>t??e??n,xT=hl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(Ic),s=kt(()=>t.route||r.value),i=Dt(Qh,0),o=kt(()=>{let h=Lt(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=kt(()=>s.value.matched[o.value]);oo(Qh,kt(()=>o.value+1)),oo(kT,c),oo(Ic,s);const l=zo();return Bs(()=>[l.value,c.value,t.name],([h,d,p],[m,E,C])=>{d&&(d.instances[p]=h,E&&E!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),h&&d&&(!E||!Yr(d,E)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return Zh(n.default,{Component:m,route:h});const E=p.props[d],C=E?E===!0?h.params:typeof E=="function"?E(h):E:null,O=Pp(m,Re({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Zh(n.default,{Component:O,route:h})||O}}});function Zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hp=xT;function LT(t){const e=wT(t.routes,t),n=t.parseQuery||PT,r=t.stringifyQuery||Gh,s=t.history,i=Ps(),o=Ps(),c=Ps(),l=Ny(Rn);let h=Rn;Ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ha.bind(null,V=>""+V),p=Ha.bind(null,QE),m=Ha.bind(null,ti);function E(V,J){let z,Z;return Bp(V)?(z=e.getRecordMatcher(V),Z=J):Z=V,e.addRoute(Z,z)}function C(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function N(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function $(V,J){if(J=Re({},J||l.value),typeof V=="string"){const T=Wa(n,V,J.path),P=e.resolve({path:T.path},J),L=s.createHref(T.fullPath);return Re(T,P,{params:m(P.params),hash:ti(T.hash),redirectedFrom:void 0,href:L})}let z;if(V.path!=null)z=Re({},V,{path:Wa(n,V.path,J.path).path});else{const T=Re({},V.params);for(const P in T)T[P]==null&&delete T[P];z=Re({},V,{params:p(T)}),J.params=p(J.params)}const Z=e.resolve(z,J),_e=V.hash||"";Z.params=d(m(Z.params));const be=YE(r,Re({},V,{hash:KE(_e),path:Z.path})),y=s.createHref(be);return Re({fullPath:be,hash:_e,query:r===Gh?CT(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:y})}function B(V){return typeof V=="string"?Wa(n,V,l.value.path):Re({},V)}function M(V,J){if(h!==V)return Zr(8,{from:J,to:V})}function Q(V){return A(V)}function oe(V){return Q(Re(B(V),{replace:!0}))}function X(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:z}=J;let Z=typeof z=="function"?z(V):z;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Re({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function A(V,J){const z=h=$(V),Z=l.value,_e=V.state,be=V.force,y=V.replace===!0,T=X(z);if(T)return A(Re(B(T),{state:typeof T=="object"?Re({},_e,T.state):_e,force:be,replace:y}),J||z);const P=z;P.redirectedFrom=J;let L;return!be&&ZE(r,Z,z)&&(L=Zr(16,{to:P,from:Z}),St(Z,Z,!0,!1)),(L?Promise.resolve(L):I(P,Z)).catch(D=>on(D)?on(D,2)?D:Vt(D):pe(D,P,Z)).then(D=>{if(D){if(on(D,2))return A(Re({replace:y},B(D.to),{state:typeof D.to=="object"?Re({},_e,D.to.state):_e,force:be}),J||P)}else D=b(P,Z,!0,y,_e);return R(P,Z,D),D})}function _(V,J){const z=M(V,J);return z?Promise.reject(z):Promise.resolve()}function v(V){const J=vn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function I(V,J){let z;const[Z,_e,be]=MT(V,J);z=Ka(Z.reverse(),"beforeRouteLeave",V,J);for(const T of Z)T.leaveGuards.forEach(P=>{z.push(kn(P,V,J))});const y=_.bind(null,V,J);return z.push(y),mt(z).then(()=>{z=[];for(const T of i.list())z.push(kn(T,V,J));return z.push(y),mt(z)}).then(()=>{z=Ka(_e,"beforeRouteUpdate",V,J);for(const T of _e)T.updateGuards.forEach(P=>{z.push(kn(P,V,J))});return z.push(y),mt(z)}).then(()=>{z=[];for(const T of be)if(T.beforeEnter)if(Bt(T.beforeEnter))for(const P of T.beforeEnter)z.push(kn(P,V,J));else z.push(kn(T.beforeEnter,V,J));return z.push(y),mt(z)}).then(()=>(V.matched.forEach(T=>T.enterCallbacks={}),z=Ka(be,"beforeRouteEnter",V,J,v),z.push(y),mt(z))).then(()=>{z=[];for(const T of o.list())z.push(kn(T,V,J));return z.push(y),mt(z)}).catch(T=>on(T,8)?T:Promise.reject(T))}function R(V,J,z){c.list().forEach(Z=>v(()=>Z(V,J,z)))}function b(V,J,z,Z,_e){const be=M(V,J);if(be)return be;const y=J===Rn,T=Ur?history.state:{};z&&(Z||y?s.replace(V.fullPath,Re({scroll:y&&T&&T.scroll},_e)):s.push(V.fullPath,_e)),l.value=V,St(V,J,z,y),Vt()}let w;function Qe(){w||(w=s.listen((V,J,z)=>{if(!qt.listening)return;const Z=$(V),_e=X(Z);if(_e){A(Re(_e,{replace:!0}),Z).catch(qs);return}h=Z;const be=l.value;Ur&&aT(Bh(be.fullPath,z.delta),na()),I(Z,be).catch(y=>on(y,12)?y:on(y,2)?(A(y.to,Z).then(T=>{on(T,20)&&!z.delta&&z.type===ni.pop&&s.go(-1,!1)}).catch(qs),Promise.reject()):(z.delta&&s.go(-z.delta,!1),pe(y,Z,be))).then(y=>{y=y||b(Z,be,!1),y&&(z.delta&&!on(y,8)?s.go(-z.delta,!1):z.type===ni.pop&&on(y,20)&&s.go(-1,!1)),R(Z,be,y)}).catch(qs)}))}let gt=Ps(),Ce=Ps(),ce;function pe(V,J,z){Vt(V);const Z=Ce.list();return Z.length?Z.forEach(_e=>_e(V,J,z)):console.error(V),Promise.reject(V)}function Et(){return ce&&l.value!==Rn?Promise.resolve():new Promise((V,J)=>{gt.add([V,J])})}function Vt(V){return ce||(ce=!V,Qe(),gt.list().forEach(([J,z])=>V?z(V):J()),gt.reset()),V}function St(V,J,z,Z){const{scrollBehavior:_e}=t;if(!Ur||!_e)return Promise.resolve();const be=!z&&cT(Bh(V.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return ll().then(()=>_e(V,J,be)).then(y=>y&&oT(y)).catch(y=>pe(y,V,J))}const Ve=V=>s.go(V);let xe;const vn=new Set,qt={currentRoute:l,listening:!0,addRoute:E,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:N,resolve:$,options:t,push:Q,replace:oe,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ce.add,isReady:Et,install(V){const J=this;V.component("RouterLink",uo),V.component("RouterView",Hp),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(l)}),Ur&&!xe&&l.value===Rn&&(xe=!0,Q(s.location).catch(_e=>{}));const z={};for(const _e in Rn)Object.defineProperty(z,_e,{get:()=>l.value[_e],enumerable:!0});V.provide(ra,J),V.provide(ml,Kd(z)),V.provide(Ic,l);const Z=V.unmount;vn.add(V),V.unmount=function(){vn.delete(V),vn.size<1&&(h=Rn,w&&w(),w=null,l.value=Rn,xe=!1,ce=!1),Z()}}};function mt(V){return V.reduce((J,z)=>J.then(()=>v(z)),Promise.resolve())}return qt}function MT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Yr(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Yr(h,l))||s.push(l))}return[n,r,s]}function UT(){return Dt(ra)}function FT(t){return Dt(ml)}const Wp=VE("user",()=>{const t=zo(null);function e(n){t.value=n}return{user:t,setUser:e}});var ef={};/**
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
 */const Kp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new jT;const m=i<<2|c>>4;if(r.push(m),h!==64){const E=c<<4&240|h>>2;if(r.push(E),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(t){const e=Kp(t);return zp.encodeByteArray(e,!0)},bo=function(t){return $T(t).replace(/\./g,"")},Gp=function(t){try{return zp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HT=()=>qT().__FIREBASE_DEFAULTS__,WT=()=>{if(typeof process>"u"||typeof ef>"u")return;const t=ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gp(t[1]);return e&&JSON.parse(e)},sa=()=>{try{return HT()||WT()||KT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qp=t=>{var e,n;return(n=(e=sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jp=t=>{const e=Qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xp=()=>{var t;return(t=sa())===null||t===void 0?void 0:t.config},Yp=t=>{var e;return(e=sa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function QT(){var t;const e=(t=sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YT(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZT(){return!QT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ew(){try{return typeof indexedDB=="object"}catch{return!1}}function tw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const nw="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nw,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new nn(s,c,r)}}function rw(t,e){return t.replace(sw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sw=/\{\$([^}]+)}/g;function iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function So(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tf(i)&&tf(o)){if(!So(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tf(t){return t!==null&&typeof t=="object"}/**
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
 */function mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ow(t,e){const n=new aw(t,e);return n.subscribe.bind(n)}class aw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=za),s.error===void 0&&(s.error=za),s.complete===void 0&&(s.complete=za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function za(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const or="[DEFAULT]";/**
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
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hw(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uw(t){return t===or?void 0:t}function hw(t){return t.instantiationMode==="EAGER"}/**
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
 */class fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const dw={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},pw=me.INFO,gw={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},mw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=pw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const _w=(t,e)=>e.some(n=>t instanceof n);let nf,rf;function yw(){return nf||(nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return rf||(rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Ac=new WeakMap,tg=new WeakMap,Ga=new WeakMap,yl=new WeakMap;function Ew(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eg.set(n,t)}).catch(()=>{}),yl.set(e,t),e}function Tw(t){if(Ac.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ac.set(t,e)}let Rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ww(t){Rc=t(Rc)}function Iw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qa(this),e,...n);return tg.set(r,e.sort?e.sort():[e]),Bn(r)}:vw().includes(t)?function(...e){return t.apply(Qa(this),e),Bn(eg.get(this))}:function(...e){return Bn(t.apply(Qa(this),e))}}function Aw(t){return typeof t=="function"?Iw(t):(t instanceof IDBTransaction&&Tw(t),_w(t,yw())?new Proxy(t,Rc):t)}function Bn(t){if(t instanceof IDBRequest)return Ew(t);if(Ga.has(t))return Ga.get(t);const e=Aw(t);return e!==t&&(Ga.set(t,e),yl.set(e,t)),e}const Qa=t=>yl.get(t);function Rw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bn(o.result),l.oldVersion,l.newVersion,Bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const bw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],Ja=new Map;function sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ja.set(e,i),i}ww(t=>({...t,get:(e,n,r)=>sf(e,n)||t.get(e,n,r),has:(e,n)=>!!sf(e,n)||t.has(e,n)}));/**
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
 */class Pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",of="0.10.10";/**
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
 */const pn=new _l("@firebase/app"),kw="@firebase/app-compat",Ow="@firebase/analytics-compat",Nw="@firebase/analytics",Dw="@firebase/app-check-compat",Vw="@firebase/app-check",xw="@firebase/auth",Lw="@firebase/auth-compat",Mw="@firebase/database",Uw="@firebase/database-compat",Fw="@firebase/functions",Bw="@firebase/functions-compat",jw="@firebase/installations",$w="@firebase/installations-compat",qw="@firebase/messaging",Hw="@firebase/messaging-compat",Ww="@firebase/performance",Kw="@firebase/performance-compat",zw="@firebase/remote-config",Gw="@firebase/remote-config-compat",Qw="@firebase/storage",Jw="@firebase/storage-compat",Xw="@firebase/firestore",Yw="@firebase/vertexai-preview",Zw="@firebase/firestore-compat",eI="firebase",tI="10.13.1";/**
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
 */const Sc="[DEFAULT]",nI={[bc]:"fire-core",[kw]:"fire-core-compat",[Nw]:"fire-analytics",[Ow]:"fire-analytics-compat",[Vw]:"fire-app-check",[Dw]:"fire-app-check-compat",[xw]:"fire-auth",[Lw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Uw]:"fire-rtdb-compat",[Fw]:"fire-fn",[Bw]:"fire-fn-compat",[jw]:"fire-iid",[$w]:"fire-iid-compat",[qw]:"fire-fcm",[Hw]:"fire-fcm-compat",[Ww]:"fire-perf",[Kw]:"fire-perf-compat",[zw]:"fire-rc",[Gw]:"fire-rc-compat",[Qw]:"fire-gcs",[Jw]:"fire-gcs-compat",[Xw]:"fire-fst",[Zw]:"fire-fst-compat",[Yw]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
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
 */const Po=new Map,rI=new Map,Pc=new Map;function af(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yr(t){const e=t.name;if(Pc.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of Po.values())af(n,t);for(const n of rI.values())af(n,t);return!0}function ia(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new gi("app","Firebase",sI);/**
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
 */class iI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const br=tI;function ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=Xp()),!n)throw jn.create("no-options");const i=Po.get(s);if(i){if(So(n,i.options)&&So(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new fw(s);for(const l of Pc.values())o.addComponent(l);const c=new iI(n,r,o);return Po.set(s,c),c}function vl(t=Sc){const e=Po.get(t);if(!e&&t===Sc&&Xp())return ng();if(!e)throw jn.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=nI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(c.join(" "));return}yr(new Wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oI="firebase-heartbeat-database",aI=1,ri="firebase-heartbeat-store";let Xa=null;function rg(){return Xa||(Xa=Rw(oI,aI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Xa}async function cI(t){try{const n=(await rg()).transaction(ri),r=await n.objectStore(ri).get(sg(t));return await n.done,r}catch(e){if(e instanceof nn)pn.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function cf(t,e){try{const r=(await rg()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,sg(t)),await r.done}catch(n){if(n instanceof nn)pn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function sg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lI=1024,uI=30*24*60*60*1e3;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=uI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lf(),{heartbeatsToSend:r,unsentEntries:s}=fI(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pn.warn(n),""}}}function lf(){return new Date().toISOString().substring(0,10)}function fI(t,e=lI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ew()?tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uf(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pI(t){yr(new Wn("platform-logger",e=>new Pw(e),"PRIVATE")),yr(new Wn("heartbeat",e=>new hI(e),"PRIVATE")),Jt(bc,of,t),Jt(bc,of,"esm2017"),Jt("fire-js","")}pI("");function El(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=ig,og=new gi("auth","Firebase",ig());/**
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
 */const Co=new _l("@firebase/auth");function mI(t,...e){Co.logLevel<=me.WARN&&Co.warn(`Auth (${br}): ${t}`,...e)}function ho(t,...e){Co.logLevel<=me.ERROR&&Co.error(`Auth (${br}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Tl(t,...e)}function Xt(t,...e){return Tl(t,...e)}function ag(t,e,n){const r=Object.assign(Object.assign({},gI()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function fn(t){return ag(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return og.create(t,...e)}function ae(t,e,...n){if(!t)throw Tl(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function gn(t,e){t||cn(e)}/**
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
 */function Cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _I(){return hf()==="http:"||hf()==="https:"}function hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_I()||JT()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=GT()||XT()}get(){return yI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wl(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TI=new _i(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,s={}){return lg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cg.fetch()(ug(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function lg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EI),e);try{const s=new II(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ag(t,d,h);jt(t,d)}}catch(s){if(s instanceof nn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function yi(t,e,n,r,s={}){const i=await Zn(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ug(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wl(t.config,s):`${t.config.apiScheme}://${s}`}function wI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class II{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),TI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}function ff(t){return t!==void 0&&t.enterprise!==void 0}class AI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RI(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Yn(t,e))}/**
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
 */async function bI(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function hg(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SI(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=Il(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(Ya(s.auth_time)),issuedAtTime:Ws(Ya(s.iat)),expirationTime:Ws(Ya(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function Il(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gp(n);return s?JSON.parse(s):(ho("Failed to decode base64 JWT payload"),null)}catch(s){return ho("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(t){const e=Il(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&PI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await si(t,hg(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fg(i.providerUserInfo):[],c=OI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function kI(t){const e=ze(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fg(t){return t.map(e=>{var{providerId:n}=e,r=El(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NI(t,e){const n=await lg(t,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ug(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DI(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Yn(t,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function bn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=El(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SI(this,e)}reload(){return kI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await si(this,bI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:Q,isAnonymous:oe,providerData:X,stsTokenManager:A}=n;ae(M&&A,e,"internal-error");const _=Kr.fromJSON(this.name,A);ae(typeof M=="string",e,"internal-error"),bn(p,e.name),bn(m,e.name),ae(typeof Q=="boolean",e,"internal-error"),ae(typeof oe=="boolean",e,"internal-error"),bn(E,e.name),bn(C,e.name),bn(N,e.name),bn(O,e.name),bn($,e.name),bn(B,e.name);const v=new ln({uid:M,auth:e,email:m,emailVerified:Q,displayName:p,isAnonymous:oe,photoURL:C,phoneNumber:E,tenantId:N,stsTokenManager:_,createdAt:$,lastLoginAt:B});return X&&Array.isArray(X)&&(v.providerData=X.map(I=>Object.assign({},I))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const l=new ln({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const pf=new Map;function un(t){gn(t instanceof Function,"Expected a class definition");let e=pf.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pf.set(t,e),e)}/**
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
 */class dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dg.type="NONE";const gf=dg;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(un(gf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||un(gf);const o=fo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=ln._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zr(i,e,r))}}/**
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
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_g(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vg(e))return"Blackberry";if(Eg(e))return"Webos";if(gg(e))return"Safari";if((e.includes("chrome/")||mg(e))&&!e.includes("edge/"))return"Chrome";if(yg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pg(t=ut()){return/firefox\//i.test(t)}function gg(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mg(t=ut()){return/crios\//i.test(t)}function _g(t=ut()){return/iemobile/i.test(t)}function yg(t=ut()){return/android/i.test(t)}function vg(t=ut()){return/blackberry/i.test(t)}function Eg(t=ut()){return/webos/i.test(t)}function Al(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VI(t=ut()){var e;return Al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xI(){return YT()&&document.documentMode===10}function Tg(t=ut()){return Al(t)||yg(t)||Eg(t)||vg(t)||/windows phone/i.test(t)||_g(t)}/**
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
 */function wg(t,e=[]){let n;switch(t){case"Browser":n=mf(ut());break;case"Worker":n=`${mf(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${r}`}/**
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
 */class LI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MI(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Yn(t,e))}/**
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
 */const UI=6;class FI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class BI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _f(this),this.idTokenSubscription=new _f(this),this.beforeStateQueue=new LI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hg(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(fn(this));const n=e?ze(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MI(this),n=new FI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sr(t){return ze(t)}class _f{constructor(e){this.auth=e,this.observer=null,this.addObserver=ow(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jI(t){oa=t}function Ig(t){return oa.loadJS(t)}function $I(){return oa.recaptchaEnterpriseScript}function qI(){return oa.gapiScript}function HI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WI="recaptcha-enterprise",KI="NO_RECAPTCHA";class zI{constructor(e){this.type=WI,this.auth=Sr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{RI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new AI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;ff(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(KI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&ff(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$I();l.length!==0&&(l+=c),Ig(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function yf(t,e,n,r=!1){const s=new zI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await yf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function GI(t,e){const n=ia(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(So(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function QI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JI(t,e,n){const r=Sr(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ag(e),{host:o,port:c}=XI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),YI()}function Ag(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XI(t){const e=Ag(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vf(o)}}}function vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function ZI(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function eA(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",Yn(t,e))}/**
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
 */async function tA(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}async function nA(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}/**
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
 */class ii extends Rl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oc(e,n,"signInWithPassword",eA);case"emailLink":return tA(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oc(e,r,"signUpPassword",ZI);case"emailLink":return nA(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
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
 */const rA="http://localhost";class vr extends Rl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=El(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:rA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
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
 */function sA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iA(t){const e=Ds(Vs(t)).link,n=e?Ds(Vs(e)).deep_link_id:null,r=Ds(Vs(t)).deep_link_id;return(r?Ds(Vs(r)).link:null)||r||n||e||t}class bl{constructor(e){var n,r,s,i,o,c;const l=Ds(Vs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=sA((s=l.mode)!==null&&s!==void 0?s:null);ae(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=iA(e);try{return new bl(n)}catch{return null}}}/**
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
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bl.parseLink(n);return ae(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vi extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends vi{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Dn extends vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
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
 */class Vn extends vi{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class xn extends vi{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function oA(t,e){return yi(t,"POST","/v1/accounts:signUp",Yn(t,e))}/**
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
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=Ef(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ef(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oo extends nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oo(e,n,r,s)}}function bg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,r):i})}async function aA(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
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
 */async function cA(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(fn(r));const s="reauthenticate";try{const i=await si(t,bg(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Il(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Er._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function Sg(t,e,n=!1){if(Gt(t.app))return Promise.reject(fn(t));const r="signIn",s=await bg(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function lA(t,e){return Sg(Sr(t),e)}/**
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
 */async function Pg(t){const e=Sr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hC(t,e,n){if(Gt(t.app))return Promise.reject(fn(t));const r=Sr(t),o=await Oc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Pg(t),l}),c=await Er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function fC(t,e,n){return Gt(t.app)?Promise.reject(fn(t)):lA(ze(t),as.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pg(t),r})}function uA(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function hA(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function fA(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function dA(t){return ze(t).signOut()}const No="__sak";/**
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
 */class Cg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pA=1e3,gA=10;class kg extends Cg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kg.type="LOCAL";const mA=kg;/**
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
 */class Og extends Cg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Og.type="SESSION";const Ng=Og;/**
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
 */function _A(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await _A(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
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
 */function Sl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Sl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yt(){return window}function vA(t){Yt().location.href=t}/**
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
 */function Dg(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function EA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wA(){return Dg()?self:null}/**
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
 */const Vg="firebaseLocalStorageDb",IA=1,Do="firebaseLocalStorage",xg="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ca(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function AA(){const t=indexedDB.deleteDatabase(Vg);return new Ei(t).toPromise()}function Nc(){const t=indexedDB.open(Vg,IA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:xg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await AA(),e(await Nc()))})})}async function Tf(t,e,n){const r=ca(t,!0).put({[xg]:e,value:n});return new Ei(r).toPromise()}async function RA(t,e){const n=ca(t,!1).get(e),r=await new Ei(n).toPromise();return r===void 0?null:r.value}function wf(t,e){const n=ca(t,!0).delete(e);return new Ei(n).toPromise()}const bA=800,SA=3;class Lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(wA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EA(),!this.activeServiceWorker)return;this.sender=new yA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nc();return await Tf(e,No,"1"),await wf(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ca(s,!1).getAll();return new Ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lg.type="LOCAL";const PA=Lg;new _i(3e4,6e4);/**
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
 */function CA(t,e){return e?un(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pl extends Rl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kA(t){return Sg(t.auth,new Pl(t),t.bypassAuthState)}function OA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),cA(n,new Pl(t),t.bypassAuthState)}async function NA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),aA(n,new Pl(t),t.bypassAuthState)}/**
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
 */class Mg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kA;case"linkViaPopup":case"linkViaRedirect":return NA;case"reauthViaPopup":case"reauthViaRedirect":return OA;default:jt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DA=new _i(2e3,1e4);class $r extends Mg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DA.get())};e()}}$r.currentPopupAction=null;/**
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
 */const VA="pendingRedirect",po=new Map;class xA extends Mg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await LA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LA(t,e){const n=FA(e),r=UA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function MA(t,e){po.set(t._key(),e)}function UA(t){return un(t._redirectPersistence)}function FA(t){return fo(VA,t.config.apiKey,t.name)}async function BA(t,e,n=!1){if(Gt(t.app))return Promise.reject(fn(t));const r=Sr(t),s=CA(r,e),o=await new xA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jA=10*60*1e3;class $A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ug(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jA&&this.cachedEventUids.clear(),this.cachedEventUids.has(If(e))}saveEventToCache(e){this.cachedEventUids.add(If(e)),this.lastProcessedEventTime=Date.now()}}function If(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ug({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ug(t);default:return!1}}/**
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
 */async function HA(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
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
 */const WA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KA=/^https?/;async function zA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HA(t);for(const n of e)try{if(GA(n))return}catch{}jt(t,"unauthorized-domain")}function GA(t){const e=Cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KA.test(n))return!1;if(WA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const QA=new _i(3e4,6e4);function Af(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JA(t){return new Promise((e,n)=>{var r,s,i;function o(){Af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Af(),n(Xt(t,"network-request-failed"))},timeout:QA.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const c=HI("iframefcb");return Yt()[c]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Ig(`${qI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function XA(t){return go=go||JA(t),go}/**
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
 */const YA=new _i(5e3,15e3),ZA="__/auth/iframe",e0="emulator/auth/iframe",t0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r0(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wl(e,e0):`https://${t.config.authDomain}/${ZA}`,r={apiKey:e.apiKey,appName:t.name,v:br},s=n0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mi(r).slice(1)}`}async function s0(t){const e=await XA(t),n=Yt().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:r0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),c=Yt().setTimeout(()=>{i(o)},YA.get());function l(){Yt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const i0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o0=500,a0=600,c0="_blank",l0="http://localhost";class Rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u0(t,e,n,r=o0,s=a0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},i0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ut().toLowerCase();n&&(c=mg(h)?c0:n),pg(h)&&(e=e||l0,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[E,C])=>`${m}${E}=${C},`,"");if(VI(h)&&c!=="_self")return h0(e||"",c),new Rf(null);const p=window.open(e||"",c,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Rf(p)}function h0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const f0="__/auth/handler",d0="emulator/auth/handler",p0=encodeURIComponent("fac");async function bf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:br,eventId:s};if(e instanceof Rg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof vi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${p0}=${encodeURIComponent(l)}`:"";return`${g0(t)}?${mi(c).slice(1)}${h}`}function g0({config:t}){return t.emulator?wl(t,d0):`https://${t.authDomain}/${f0}`}/**
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
 */const Za="webStorageSupport";class m0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ng,this._completeRedirectFn=BA,this._overrideRedirectResult=MA}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bf(e,n,r,Cc(),s);return u0(e,o,Sl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bf(e,n,r,Cc(),s);return vA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await s0(e),r=new $A(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Za,{type:Za},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Za];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tg()||gg()||Al()}}const _0=m0;var Sf="@firebase/auth",Pf="1.7.8";/**
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
 */class y0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function v0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E0(t){yr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wg(t)},h=new BI(r,s,i,l);return QI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Wn("auth-internal",e=>{const n=Sr(e.getProvider("auth").getImmediate());return(r=>new y0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Sf,Pf,v0(t)),Jt(Sf,Pf,"esm2017")}/**
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
 */const T0=5*60,w0=Yp("authIdTokenMaxAge")||T0;let Cf=null;const I0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w0)return;const s=n==null?void 0:n.token;Cf!==s&&(Cf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function A0(t=vl()){const e=ia(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GI(t,{popupRedirectResolver:_0,persistence:[PA,mA,Ng]}),r=Yp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=I0(i.toString());hA(n,o,()=>o(n.currentUser)),uA(n,c=>o(c))}}const s=Qp("auth");return s&&JI(n,`http://${s}`),n}function R0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",R0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E0("Browser");const Fg=t=>(qy("data-v-439eb95d"),t=t(),Hy(),t),b0=Fg(()=>dr("img",{alt:"Vue logo",class:"logo",src:xE,width:"125",height:"125"},null,-1)),S0={class:"wrapper"},P0=Fg(()=>dr("h3",null,"Looks app v1",-1)),C0=hl({__name:"App",setup(t){const e=FT(),n=UT(),r=Wp();op(()=>{fA(wd,i=>{console.log("onAuthStateChanged",i),r.setUser(i),i?(e.name==="login"||e.name==="register")&&n.push({name:"home"}):e.name!=="login"&&e.name!=="register"&&n.push({name:"login"})})});function s(){dA(wd).then(i=>{console.log("logout")}).catch(i=>{i.code,i.message})}return(i,o)=>(Ao(),mc(Wt,null,[dr("header",null,[b0,dr("div",S0,[P0,dr("nav",null,[et(Lt(uo),{to:"/"},{default:so(()=>[co("Home")]),_:1}),et(Lt(uo),{to:"/users"},{default:so(()=>[co("Users")]),_:1}),et(Lt(uo),{to:"/about"},{default:so(()=>[co("About")]),_:1})])]),Lt(r).user?(Ao(),mc("button",{key:0,onClick:s},"logout")):jv("",!0)]),et(Lt(Hp))],64))}}),Bg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},k0=Bg(C0,[["__scopeId","data-v-439eb95d"]]),O0="modulepreload",N0=function(t){return"/test/"+t},kf={},Cs=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=N0(c),c in kf)return;kf[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":O0,l||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},D0={};function V0(t,e){return Ao(),mc("main",null," Home page ")}const x0=Bg(D0,[["render",V0]]),jg=LT({history:fT("test"),routes:[{path:"/",name:"home",component:x0,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>Cs(()=>import("./AboutView-C-lEAkA4.js"),[]),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>Cs(()=>import("./LoginView-BuPjrx6b.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!1}},{path:"/register",name:"register",component:()=>Cs(()=>import("./RegisterView-CvJ7lh_h.js"),__vite__mapDeps([2,3,4])),meta:{requiresAuth:!1}},{path:"/users",name:"users",component:()=>Cs(()=>import("./UsersView-BWBxTbLh.js"),__vite__mapDeps([5,3,6])),meta:{requiresAuth:!1}},{path:"/wardrobe/:email",name:"wardrobe",component:()=>Cs(()=>import("./WardrobeView-CyHo8Sdt.js"),__vite__mapDeps([7,8])),meta:{requiresAuth:!1}}]});jg.beforeEach(t=>{const e=Wp();if(e.user,console.log("beforeEach",e.user),t.meta.requiresAuth&&!e.user)return"/login"});var L0="firebase",M0="10.13.1";/**
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
 */Jt(L0,M0,"app");var Of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,$g;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.D=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(I,R,b){for(var w=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)w[Qe-2]=arguments[Qe];return _.prototype[R].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,v){v||(v=0);var I=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)I[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],R=A.g[2];var b=A.g[3],w=_+(b^v&(R^b))+I[0]+3614090360&4294967295;_=v+(w<<7&4294967295|w>>>25),w=b+(R^_&(v^R))+I[1]+3905402710&4294967295,b=_+(w<<12&4294967295|w>>>20),w=R+(v^b&(_^v))+I[2]+606105819&4294967295,R=b+(w<<17&4294967295|w>>>15),w=v+(_^R&(b^_))+I[3]+3250441966&4294967295,v=R+(w<<22&4294967295|w>>>10),w=_+(b^v&(R^b))+I[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=b+(R^_&(v^R))+I[5]+1200080426&4294967295,b=_+(w<<12&4294967295|w>>>20),w=R+(v^b&(_^v))+I[6]+2821735955&4294967295,R=b+(w<<17&4294967295|w>>>15),w=v+(_^R&(b^_))+I[7]+4249261313&4294967295,v=R+(w<<22&4294967295|w>>>10),w=_+(b^v&(R^b))+I[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=b+(R^_&(v^R))+I[9]+2336552879&4294967295,b=_+(w<<12&4294967295|w>>>20),w=R+(v^b&(_^v))+I[10]+4294925233&4294967295,R=b+(w<<17&4294967295|w>>>15),w=v+(_^R&(b^_))+I[11]+2304563134&4294967295,v=R+(w<<22&4294967295|w>>>10),w=_+(b^v&(R^b))+I[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=b+(R^_&(v^R))+I[13]+4254626195&4294967295,b=_+(w<<12&4294967295|w>>>20),w=R+(v^b&(_^v))+I[14]+2792965006&4294967295,R=b+(w<<17&4294967295|w>>>15),w=v+(_^R&(b^_))+I[15]+1236535329&4294967295,v=R+(w<<22&4294967295|w>>>10),w=_+(R^b&(v^R))+I[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=b+(v^R&(_^v))+I[6]+3225465664&4294967295,b=_+(w<<9&4294967295|w>>>23),w=R+(_^v&(b^_))+I[11]+643717713&4294967295,R=b+(w<<14&4294967295|w>>>18),w=v+(b^_&(R^b))+I[0]+3921069994&4294967295,v=R+(w<<20&4294967295|w>>>12),w=_+(R^b&(v^R))+I[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=b+(v^R&(_^v))+I[10]+38016083&4294967295,b=_+(w<<9&4294967295|w>>>23),w=R+(_^v&(b^_))+I[15]+3634488961&4294967295,R=b+(w<<14&4294967295|w>>>18),w=v+(b^_&(R^b))+I[4]+3889429448&4294967295,v=R+(w<<20&4294967295|w>>>12),w=_+(R^b&(v^R))+I[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=b+(v^R&(_^v))+I[14]+3275163606&4294967295,b=_+(w<<9&4294967295|w>>>23),w=R+(_^v&(b^_))+I[3]+4107603335&4294967295,R=b+(w<<14&4294967295|w>>>18),w=v+(b^_&(R^b))+I[8]+1163531501&4294967295,v=R+(w<<20&4294967295|w>>>12),w=_+(R^b&(v^R))+I[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=b+(v^R&(_^v))+I[2]+4243563512&4294967295,b=_+(w<<9&4294967295|w>>>23),w=R+(_^v&(b^_))+I[7]+1735328473&4294967295,R=b+(w<<14&4294967295|w>>>18),w=v+(b^_&(R^b))+I[12]+2368359562&4294967295,v=R+(w<<20&4294967295|w>>>12),w=_+(v^R^b)+I[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=b+(_^v^R)+I[8]+2272392833&4294967295,b=_+(w<<11&4294967295|w>>>21),w=R+(b^_^v)+I[11]+1839030562&4294967295,R=b+(w<<16&4294967295|w>>>16),w=v+(R^b^_)+I[14]+4259657740&4294967295,v=R+(w<<23&4294967295|w>>>9),w=_+(v^R^b)+I[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=b+(_^v^R)+I[4]+1272893353&4294967295,b=_+(w<<11&4294967295|w>>>21),w=R+(b^_^v)+I[7]+4139469664&4294967295,R=b+(w<<16&4294967295|w>>>16),w=v+(R^b^_)+I[10]+3200236656&4294967295,v=R+(w<<23&4294967295|w>>>9),w=_+(v^R^b)+I[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=b+(_^v^R)+I[0]+3936430074&4294967295,b=_+(w<<11&4294967295|w>>>21),w=R+(b^_^v)+I[3]+3572445317&4294967295,R=b+(w<<16&4294967295|w>>>16),w=v+(R^b^_)+I[6]+76029189&4294967295,v=R+(w<<23&4294967295|w>>>9),w=_+(v^R^b)+I[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=b+(_^v^R)+I[12]+3873151461&4294967295,b=_+(w<<11&4294967295|w>>>21),w=R+(b^_^v)+I[15]+530742520&4294967295,R=b+(w<<16&4294967295|w>>>16),w=v+(R^b^_)+I[2]+3299628645&4294967295,v=R+(w<<23&4294967295|w>>>9),w=_+(R^(v|~b))+I[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=b+(v^(_|~R))+I[7]+1126891415&4294967295,b=_+(w<<10&4294967295|w>>>22),w=R+(_^(b|~v))+I[14]+2878612391&4294967295,R=b+(w<<15&4294967295|w>>>17),w=v+(b^(R|~_))+I[5]+4237533241&4294967295,v=R+(w<<21&4294967295|w>>>11),w=_+(R^(v|~b))+I[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=b+(v^(_|~R))+I[3]+2399980690&4294967295,b=_+(w<<10&4294967295|w>>>22),w=R+(_^(b|~v))+I[10]+4293915773&4294967295,R=b+(w<<15&4294967295|w>>>17),w=v+(b^(R|~_))+I[1]+2240044497&4294967295,v=R+(w<<21&4294967295|w>>>11),w=_+(R^(v|~b))+I[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=b+(v^(_|~R))+I[15]+4264355552&4294967295,b=_+(w<<10&4294967295|w>>>22),w=R+(_^(b|~v))+I[6]+2734768916&4294967295,R=b+(w<<15&4294967295|w>>>17),w=v+(b^(R|~_))+I[13]+1309151649&4294967295,v=R+(w<<21&4294967295|w>>>11),w=_+(R^(v|~b))+I[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=b+(v^(_|~R))+I[11]+3174756917&4294967295,b=_+(w<<10&4294967295|w>>>22),w=R+(_^(b|~v))+I[2]+718787259&4294967295,R=b+(w<<15&4294967295|w>>>17),w=v+(b^(R|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var v=_-this.blockSize,I=this.B,R=this.h,b=0;b<_;){if(R==0)for(;b<=v;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<_;)if(I[R++]=A.charCodeAt(b++),R==this.blockSize){s(this,I),R=0;break}}else for(;b<_;)if(I[R++]=A[b++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var v=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.u(A),A=Array(16),_=v=0;4>_;++_)for(var I=0;32>I;I+=8)A[v++]=this.g[_]>>>I&255;return A};function i(A,_){var v=c;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function o(A,_){this.h=_;for(var v=[],I=!0,R=A.length-1;0<=R;R--){var b=A[R]|0;I&&b==_||(v[R]=b,I=!1)}this.g=v}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(h(-A));for(var _=[],v=1,I=0;A>=v;I++)_[I]=A/v|0,v*=4294967296;return new o(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return O(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),I=p,R=0;R<A.length;R+=8){var b=Math.min(8,A.length-R),w=parseInt(A.substring(R,R+b),_);8>b?(b=h(Math.pow(_,b)),I=I.j(b).add(h(w))):(I=I.j(v),I=I.add(h(w)))}return I}var p=l(0),m=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var A=0,_=1,v=0;v<this.g.length;v++){var I=this.i(v);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(N(this))return"-"+O(this).toString(A);for(var _=h(Math.pow(A,6)),v=this,I="";;){var R=Q(v,_).g;v=$(v,R.j(_));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,C(v))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=$(this,A),N(A)?-1:C(A)?0:1};function O(A){for(var _=A.g.length,v=[],I=0;I<_;I++)v[I]=~A.g[I];return new o(v,~A.h).add(m)}t.abs=function(){return N(this)?O(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0,R=0;R<=_;R++){var b=I+(this.i(R)&65535)+(A.i(R)&65535),w=(b>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);I=w>>>16,b&=65535,w&=65535,v[R]=w<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(A,_){return A.add(O(_))}t.j=function(A){if(C(this)||C(A))return p;if(N(this))return N(A)?O(this).j(O(A)):O(O(this).j(A));if(N(A))return O(this.j(O(A)));if(0>this.l(E)&&0>A.l(E))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,v=[],I=0;I<2*_;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<A.g.length;R++){var b=this.i(I)>>>16,w=this.i(I)&65535,Qe=A.i(R)>>>16,gt=A.i(R)&65535;v[2*I+2*R]+=w*gt,B(v,2*I+2*R),v[2*I+2*R+1]+=b*gt,B(v,2*I+2*R+1),v[2*I+2*R+1]+=w*Qe,B(v,2*I+2*R+1),v[2*I+2*R+2]+=b*Qe,B(v,2*I+2*R+2)}for(I=0;I<_;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=_;I<2*_;I++)v[I]=0;return new o(v,0)};function B(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function M(A,_){this.g=A,this.h=_}function Q(A,_){if(C(_))throw Error("division by zero");if(C(A))return new M(p,p);if(N(A))return _=Q(O(A),_),new M(O(_.g),O(_.h));if(N(_))return _=Q(A,O(_)),new M(O(_.g),_.h);if(30<A.g.length){if(N(A)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=_;0>=I.l(A);)v=oe(v),I=oe(I);var R=X(v,1),b=X(I,1);for(I=X(I,2),v=X(v,2);!C(I);){var w=b.add(I);0>=w.l(A)&&(R=R.add(v),b=w),I=X(I,1),v=X(v,1)}return _=$(A,R.j(_)),new M(R,_)}for(R=p;0<=A.l(_);){for(v=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=h(v),w=b.j(_);N(w)||0<w.l(A);)v-=I,b=h(v),w=b.j(_);C(b)&&(b=m),R=R.add(b),A=$(A,w)}return new M(R,A)}t.A=function(A){return Q(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)&A.i(I);return new o(v,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)|A.i(I);return new o(v,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)^A.i(I);return new o(v,this.h^A.h)};function oe(A){for(var _=A.g.length+1,v=[],I=0;I<_;I++)v[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(v,A.h)}function X(A,_){var v=_>>5;_%=32;for(var I=A.g.length-v,R=[],b=0;b<I;b++)R[b]=0<_?A.i(b+v)>>>_|A.i(b+v+1)<<32-_:A.i(b+v);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$g=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,pr=o}).apply(typeof Of<"u"?Of:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qg,Hg,xs,Wg,mo,Dc,Kg,zg,Gg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function E(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,k){for(var H=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)H[Se-2]=arguments[Se];return u.prototype[S].apply(g,H)}}function N(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,k=g.length||0;a.length=S+k;for(let H=0;H<k;H++)a[S+H]=g[H]}else a.push(g)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var oe=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function X(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let k=0;k<v.length;k++)f=v[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function b(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Et;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Qe{constructor(){this.h=this.g=null}add(u,f){const g=gt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var gt=new $(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,pe=!1,Et=new Qe,Vt=()=>{const a=c.Promise.resolve(void 0);ce=()=>{a.then(St)}};var St=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){b(f)}var u=gt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pe=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function qt(a,u){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(oe){e:{try{Q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&qt.aa.h.call(this)}}C(qt,xe);var mt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _e(a){this.src=a,this.g={},this.h=0}_e.prototype.add=function(a,u,f,g,S){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var H=y(a,u,g,S);return-1<H?(u=a[H],f||(u.fa=!1)):(u=new z(u,this.src,k,!!g,S),u.fa=f,a.push(u)),u};function be(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(g,S,1),k&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,g){for(var S=0;S<a.length;++S){var k=a[S];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return S}return-1}var T="closure_lm_"+(1e6*Math.random()|0),P={};function L(a,u,f,g,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(a,u[k],f,g,S);return null}return f=ne(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!!g,S):D(a,u,f,!1,g,S)}function D(a,u,f,g,S,k){if(!u)throw Error("Invalid event type");var H=h(S)?!!S.capture:!!S,Se=G(a);if(Se||(a[T]=Se=new _e(a)),f=Se.add(u,f,g,H,k),f.proxy)return f;if(g=j(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)vn||(S=H),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(W(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function j(){function a(f){return u.call(a.src,a.listener,f)}const u=F;return a}function K(a,u,f,g,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)K(a,u[k],f,g,S);else g=h(g)?!!g.capture:!!g,f=ne(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=y(k,f,g,S),-1<f&&(Z(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=G(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,g,S)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])be(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(W(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=G(u))?(be(f,a),f.h==0&&(f.src=null,u[T]=null)):Z(a)}}}function W(a){return a in P?P[a]:P[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new qt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&q(a),a=f.call(g,u)}return a}function G(a){return a=a[T],a instanceof _e?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function te(){Ve.call(this),this.i=new _e(this),this.M=this,this.F=null}C(te,Ve),te.prototype[V]=!0,te.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function ie(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new xe(u,a);else if(u instanceof xe)u.target=u.target||a;else{var S=u;u=new xe(g,a),I(u,S)}if(S=!0,f)for(var k=f.length-1;0<=k;k--){var H=u.g=f[k];S=Ae(H,g,!0,u)&&S}if(H=u.g=a,S=Ae(H,g,!0,u)&&S,S=Ae(H,g,!1,u)&&S,f)for(k=0;k<f.length;k++)H=u.g=f[k],S=Ae(H,g,!1,u)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},te.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},te.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ae(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var H=u[k];if(H&&!H.da&&H.capture==f){var Se=H.listener,Je=H.ha||H.src;H.fa&&be(a.i,H),S=Se.call(Je,g)!==!1&&S}}return S&&!g.defaultPrevented}function ve(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Be(a){a.g=ve(()=>{a.g=null,a.i&&(a.i=!1,Be(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Tt extends Ve{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(a){Ve.call(this),this.h=a,this.g={}}C(Pt,Ve);var ds=[];function En(a){X(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),En(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kr=c.JSON.stringify,ht=c.JSON.parse,Ct=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Or(){}Or.prototype.h=null;function fu(a){return a.h||(a.h=a.i())}function du(){}var ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ea(){xe.call(this,"d")}C(Ea,xe);function Ta(){xe.call(this,"c")}C(Ta,xe);var er={},pu=null;function Pi(){return pu=pu||new te}er.La="serverreachability";function gu(a){xe.call(this,er.La,a)}C(gu,xe);function gs(a){const u=Pi();ie(u,new gu(u))}er.STAT_EVENT="statevent";function mu(a,u){xe.call(this,er.STAT_EVENT,a),this.stat=u}C(mu,xe);function ft(a){const u=Pi();ie(u,new mu(u,a))}er.Ma="timingevent";function _u(a,u){xe.call(this,er.Ma,a),this.size=u}C(_u,xe);function ms(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function P_(a,u,f,g,S,k){a.info(function(){if(a.g)if(k)for(var H="",Se=k.split("&"),Je=0;Je<Se.length;Je++){var Te=Se[Je].split("=");if(1<Te.length){var rt=Te[0];Te=Te[1];var st=rt.split("_");H=2<=st.length&&st[1]=="type"?H+(rt+"="+Te+"&"):H+(rt+"=redacted&")}}else H=null;else H=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+H})}function C_(a,u,f,g,S,k,H){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+k+" "+H})}function Nr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+O_(a,f)+(g?" "+g:"")})}function k_(a,u){a.info(function(){return"TIMEOUT: "+u})}_s.prototype.info=function(){};function O_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var H=1;H<S.length;H++)S[H]=""}}}}return kr(f)}catch{return u}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wa;function ki(){}C(ki,Or),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},wa=new ki;function Tn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vu}function vu(){this.i=null,this.g="",this.h=!1}var Eu={},Ia={};function Aa(a,u,f){a.L=1,a.v=Vi(rn(u)),a.m=f,a.P=!0,Tu(a,null)}function Tu(a,u){a.F=Date.now(),Oi(a),a.A=rn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),xu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new vu,a.g=Zu(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Tt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(ds[0]=S.toString()),S=ds);for(var k=0;k<S.length;k++){var H=L(f,S[k],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),gs(),P_(a.i,a.u,a.A,a.l,a.R,a.m)}Tn.prototype.ca=function(a){a=a.target;const u=this.M;u&&sn(a)==3?u.j():this.Y(a)},Tn.prototype.Y=function(a){try{if(a==this.g)e:{const st=sn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||$u(this.g)))){this.J||st!=4||u==7||(u==8||0>=xr?gs(3):gs(2)),Ra(this);var f=this.g.Z();this.X=f;t:if(wu(this)){var g=$u(this.g);a="";var S=g.length,k=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),ys(this);var H="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,C_(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Je=this.g;if((Se=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Se)){var Te=Se;break t}}Te=null}if(f=Te)Nr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,f);else{this.o=!1,this.s=3,ft(12),tr(this),ys(this);break e}}if(this.P){f=!0;let xt;for(;!this.J&&this.C<H.length;)if(xt=N_(this,H),xt==Ia){st==4&&(this.s=4,ft(14),f=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Eu){this.s=4,ft(15),Nr(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else Nr(this.i,this.l,xt,null),ba(this,xt);if(wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||H.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Nr(this.i,this.l,H,"[Invalid Chunked Response]"),tr(this),ys(this);else if(0<H.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Na(rt),rt.M=!0,ft(11))}}else Nr(this.i,this.l,H,null),ba(this,H);st==4&&tr(this),this.o&&!this.J&&(st==4?Qu(this.j,this):(this.o=!1,Oi(this)))}else Q_(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),tr(this),ys(this)}}}catch{}finally{}};function wu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function N_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Ia:(f=Number(u.substring(f,g)),isNaN(f)?Eu:(g+=1,g+f>u.length?Ia:(u=u.slice(g,g+f),a.C=g+f,u)))}Tn.prototype.cancel=function(){this.J=!0,tr(this)};function Oi(a){a.S=Date.now()+a.I,Iu(a,a.I)}function Iu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ms(m(a.ba,a),u)}function Ra(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Tn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(k_(this.i,this.A),this.L!=2&&(gs(),ft(17)),tr(this),this.s=2,ys(this)):Iu(this,this.S-a)};function ys(a){a.j.G==0||a.J||Qu(a.j,a)}function tr(a){Ra(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,En(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ba(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Sa(f.h,a))){if(!a.K&&Sa(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Fi(f),Mi(f);else break e;Oa(f),ft(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=ms(m(f.Za,f),6e3));if(1>=bu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else rr(f,11)}else if((a.K||f.g==a)&&Fi(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Te=S[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const rt=Te[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const st=Te[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const xr=Te[5];xr!=null&&typeof xr=="number"&&0<xr&&(g=1.5*xr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const xt=a.g;if(xt){const ji=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var k=g.h;k.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Pa(k,k.h),k.h=null))}if(g.D){const Da=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(g.ya=Da,ke(g.I,g.D,Da))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var H=a;if(g.qa=Yu(g,g.J?g.ia:null,g.W),H.K){Su(g.h,H);var Se=H,Je=g.L;Je&&(Se.I=Je),Se.B&&(Ra(Se),Oi(Se)),g.g=H}else zu(g);0<f.i.length&&Ui(f)}else Te[0]!="stop"&&Te[0]!="close"||rr(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?rr(f,7):ka(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}gs(4)}catch{}}var D_=class{constructor(a,u){this.g=a,this.map=u}};function Au(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ru(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bu(a){return a.h?1:a.g?a.g.size:0}function Sa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Pa(a,u){a.g?a.g.add(u):a.h=u}function Su(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Au.prototype.cancel=function(){if(this.i=Pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return N(a.i)}function V_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function x_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Cu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=x_(a),g=V_(a),S=g.length,k=0;k<S;k++)u.call(void 0,g[k],f&&f[k],a)}var ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function L_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var k=a[f].substring(0,g);S=a[f].substring(g+1)}else k=a[f];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof nr){this.h=a.h,Ni(this,a.j),this.o=a.o,this.g=a.g,Di(this,a.s),this.l=a.l;var u=a.i,f=new Ts;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ou(this,f),this.m=a.m}else a&&(u=String(a).match(ku))?(this.h=!1,Ni(this,u[1]||"",!0),this.o=vs(u[2]||""),this.g=vs(u[3]||"",!0),Di(this,u[4]),this.l=vs(u[5]||"",!0),Ou(this,u[6]||"",!0),this.m=vs(u[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}nr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Es(u,Nu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Es(u,Nu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Es(f,f.charAt(0)=="/"?F_:U_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Es(f,j_)),a.join("")};function rn(a){return new nr(a)}function Ni(a,u,f){a.j=f?vs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Di(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ou(a,u,f){u instanceof Ts?(a.i=u,$_(a.i,a.h)):(f||(u=Es(u,B_)),a.i=new Ts(u,a.h))}function ke(a,u,f){a.i.set(u,f)}function Vi(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function vs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Es(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,M_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function M_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nu=/[#\/\?@]/g,U_=/[#\?:]/g,F_=/[#\?]/g,B_=/[#\?@]/g,j_=/#/g;function Ts(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function wn(a){a.g||(a.g=new Map,a.h=0,a.i&&L_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ts.prototype,t.add=function(a,u){wn(this),this.i=null,a=Dr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Du(a,u){wn(a),u=Dr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Vu(a,u){return wn(a),u=Dr(a,u),a.g.has(u)}t.forEach=function(a,u){wn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){wn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let k=0;k<S.length;k++)f.push(u[g])}return f},t.V=function(a){wn(this);let u=[];if(typeof a=="string")Vu(this,a)&&(u=u.concat(this.g.get(Dr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return wn(this),this.i=null,a=Dr(this,a),Vu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function xu(a,u,f){Du(a,u),0<f.length&&(a.i=null,a.g.set(Dr(a,u),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var S=k;H[g]!==""&&(S+="="+encodeURIComponent(String(H[g]))),a.push(S)}}return this.i=a.join("&")};function Dr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function $_(a,u){u&&!a.j&&(wn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Du(this,g),xu(this,S,f))},a)),a.j=u}function q_(a,u){const f=new _s;if(c.Image){const g=new Image;g.onload=E(In,f,"TestLoadImage: loaded",!0,u,g),g.onerror=E(In,f,"TestLoadImage: error",!1,u,g),g.onabort=E(In,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=E(In,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function H_(a,u){const f=new _s,g=new AbortController,S=setTimeout(()=>{g.abort(),In(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?In(f,"TestPingServer: ok",!0,u):In(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),In(f,"TestPingServer: error",!1,u)})}function In(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function W_(){this.g=new Ct}function K_(a,u,f){const g=f||"";try{Cu(a,function(S,k){let H=S;h(S)&&(H=kr(S)),u.push(g+k+"="+encodeURIComponent(H))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function ws(a){this.l=a.Ub||null,this.j=a.eb||!1}C(ws,Or),ws.prototype.g=function(){return new xi(this.l,this.j)},ws.prototype.i=function(a){return function(){return a}}({});function xi(a,u){te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(xi,te),t=xi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,As(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Is(this):As(this),this.readyState==3&&Lu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Is(this))},t.Qa=function(a){this.g&&(this.response=a,Is(this))},t.ga=function(){this.g&&Is(this)};function Is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,As(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function As(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mu(a){let u="";return X(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ca(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Mu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ke(a,u,f))}function Me(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Me,te);var z_=/^https?$/i,G_=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wa.g(),this.v=this.o?fu(this.o):fu(wa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Uu(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(G_,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,H]of f)this.g.setRequestHeader(k,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ju(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Uu(this,k)}};function Uu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Fu(a),Li(a)}function Fu(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bu(this):this.bb())},t.bb=function(){Bu(this)};function Bu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)ve(a.Ea,0,a);else if(ie(a,"readystatechange"),sn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=H===0){var S=String(a.D).match(ku)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!z_.test(S?S.toLowerCase():"")}f=g}if(f)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var k=2<sn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Fu(a)}}finally{Li(a)}}}}function Li(a,u){if(a.g){ju(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{f.onreadystatechange=g}catch{}}}function ju(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ht(u)}};function $u(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Q_(a){const u={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=R(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[S]||[];u[S]=k,k.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function qu(a){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,a),this.cb=Rs("retryDelaySeedMs",1e4,a),this.Wa=Rs("forwardChannelMaxRetries",2,a),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Au(a&&a.concurrentRequestLimit),this.Da=new W_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qu.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){ft(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Yu(this,null,this.W),Ui(this)};function ka(a){if(Hu(a),a.G==3){var u=a.U++,f=rn(a.I);if(ke(f,"SID",a.K),ke(f,"RID",u),ke(f,"TYPE","terminate"),bs(a,f),u=new Tn(a,a.j,u),u.L=2,u.v=Vi(rn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Zu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Oi(u)}Xu(a)}function Mi(a){a.g&&(Na(a),a.g.cancel(),a.g=null)}function Hu(a){Mi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Fi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ui(a){if(!Ru(a.h)&&!a.s){a.s=!0;var u=a.Ga;ce||Vt(),pe||(ce(),pe=!0),Et.add(u,a),a.B=0}}function J_(a,u){return bu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ms(m(a.Ga,a,u),Ju(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Tn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),I(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ku(this,S,u),f=rn(this.I),ke(f,"RID",a),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),bs(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(Mu(k)))+"&"+u:this.m&&Ca(f,this.m,k)),Pa(this.h,S),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",u),ke(f,"SID","null"),S.T=!0,Aa(S,f,null)):Aa(S,f,u),this.G=2}}else this.G==3&&(a?Wu(this,a):this.i.length==0||Ru(this.h)||Wu(this))};function Wu(a,u){var f;u?f=u.l:f=a.U++;const g=rn(a.I);ke(g,"SID",a.K),ke(g,"RID",f),ke(g,"AID",a.T),bs(a,g),a.m&&a.o&&Ca(g,a.m,a.o),f=new Tn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Ku(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pa(a.h,f),Aa(f,g,u)}function bs(a,u){a.H&&X(a.H,function(f,g){ke(u,g,f)}),a.l&&Cu({},function(f,g){ke(u,g,f)})}function Ku(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let k=-1;for(;;){const H=["count="+f];k==-1?0<f?(k=S[0].g,H.push("ofs="+k)):k=0:H.push("ofs="+k);let Se=!0;for(let Je=0;Je<f;Je++){let Te=S[Je].g;const rt=S[Je].map;if(Te-=k,0>Te)k=Math.max(0,S[Je].g-100),Se=!1;else try{K_(rt,H,"req"+Te+"_")}catch{g&&g(rt)}}if(Se){g=H.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function zu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ce||Vt(),pe||(ce(),pe=!0),Et.add(u,a),a.v=0}}function Oa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ms(m(a.Fa,a),Ju(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Mi(this),Gu(this))};function Na(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Gu(a){a.g=new Tn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=rn(a.qa);ke(u,"RID","rpc"),ke(u,"SID",a.K),ke(u,"AID",a.T),ke(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(u,"TO",a.ja),ke(u,"TYPE","xmlhttp"),bs(a,u),a.m&&a.o&&Ca(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Vi(rn(u)),f.m=null,f.P=!0,Tu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Mi(this),Oa(this),ft(19))};function Fi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Qu(a,u){var f=null;if(a.g==u){Fi(a),Na(a),a.g=null;var g=2}else if(Sa(a.h,u))f=u.D,Su(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=Pi(),ie(g,new _u(g,f)),Ui(a)}else zu(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&J_(a,u)||g==2&&Oa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:rr(a,5);break;case 4:rr(a,10);break;case 3:rr(a,6);break;default:rr(a,2)}}}function Ju(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function rr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new nr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ni(g,"https"),Vi(g),S?q_(g.toString(),f):H_(g.toString(),f)}else ft(2);a.G=0,a.l&&a.l.sa(u),Xu(a),Hu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Xu(a){if(a.G=0,a.ka=[],a.l){const u=Pu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Yu(a,u,f){var g=f instanceof nr?rn(f):new nr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Di(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new nr(null);g&&Ni(k,g),u&&(k.g=u),S&&Di(k,S),f&&(k.l=f),g=k}return f=a.D,u=a.ya,f&&u&&ke(g,f,u),ke(g,"VER",a.la),bs(a,g),g}function Zu(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Me(new ws({eb:f})):new Me(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function eh(){}t=eh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bi(){}Bi.prototype.g=function(a,u){return new wt(a,u)};function wt(a,u){te.call(this),this.g=new qu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Vr(this)}C(wt,te),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ka(this.g)},wt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=kr(a),a=f);u.i.push(new D_(u.Ya++,a)),u.G==3&&Ui(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,ka(this.g),delete this.g,wt.aa.N.call(this)};function th(a){Ea.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(th,Ea);function nh(){Ta.call(this),this.status=1}C(nh,Ta);function Vr(a){this.g=a}C(Vr,eh),Vr.prototype.ua=function(){ie(this.g,"a")},Vr.prototype.ta=function(a){ie(this.g,new th(a))},Vr.prototype.sa=function(a){ie(this.g,new nh)},Vr.prototype.ra=function(){ie(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Gg=function(){return new Bi},zg=function(){return Pi()},Kg=er,Dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,mo=Ci,yu.COMPLETE="complete",Wg=yu,du.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",te.prototype.listen=te.prototype.K,xs=du,Hg=ws,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,qg=Me}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const Nf="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let cs="10.13.1";/**
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
 */const Tr=new _l("@firebase/firestore");function ks(){return Tr.logLevel}function ee(t,...e){if(Tr.logLevel<=me.DEBUG){const n=e.map(Cl);Tr.debug(`Firestore (${cs}): ${t}`,...n)}}function mn(t,...e){if(Tr.logLevel<=me.ERROR){const n=e.map(Cl);Tr.error(`Firestore (${cs}): ${t}`,...n)}}function es(t,...e){if(Tr.logLevel<=me.WARN){const n=e.map(Cl);Tr.warn(`Firestore (${cs}): ${t}`,...n)}}function Cl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Pe(t,e){t||ue()}function fe(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class F0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class B0{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new Qg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new ot(e)}}class j0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new j0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new q0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function W0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=W0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new He(0,0))}static max(){return new he(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends oi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const K0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends oi{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return K0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Oe.fromString(e))}static fromName(e){return new se(Oe.fromString(e).popFirst(5))}static empty(){return new se(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Oe(e.slice()))}}function z0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Kn(s,se.empty(),e)}function G0(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(he.min(),se.empty(),-1)}static max(){return new Kn(he.max(),se.empty(),-1)}}function Q0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const J0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ti(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==J0)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Y0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class kl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kl.oe=-1;function la(t){return t==null}function Vo(t){return t===0&&1/t==-1/0}function Z0(t){return typeof t=="number"&&Number.isInteger(t)&&!Vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vf(this.data.getIterator())}getIteratorFrom(e){return new Vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new tt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Yg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yg("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const eR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=eR.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */function Ol(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nl(t){const e=t.mapValue.fields.__previous_value__;return Ol(e)?Nl(e):e}function ai(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class tR{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ol(t)?4:rR(t)?9007199254740991:nR(t)?10:11:ue()}function tn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ai(t).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zn(s.timestampValue),c=zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),c=je(i.doubleValue);return o===c?Vo(o)===Vo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Df(o)!==Df(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!tn(o[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function li(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=je(i.integerValue||i.doubleValue),l=je(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(ai(t),ai(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const c=wr(i),l=wr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=we(c[h],l[h]);if(d!==0)return d}return we(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=we(je(i.latitude),je(o.latitude));return c!==0?c:we(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},m=o.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=m.value)===null||l===void 0?void 0:l.arrayValue,N=we(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Lf(E,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xi.mapValue&&o===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(o===Xi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=we(l[p],d[p]);if(m!==0)return m;const E=ns(c[l[p]],h[d[p]]);if(E!==0)return E}return we(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=zn(t),r=zn(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function Lf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ns(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function rs(t){return Vc(t)}function Vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vc(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Mf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xc(t){return!!t&&"integerValue"in t}function Dl(t){return!!t&&"arrayValue"in t}function Uf(t){return!!t&&"nullValue"in t}function Ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _o(t){return!!t&&"mapValue"in t}function nR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ks(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Ks(this.value))}}function Zg(t){const e=[];return ls(t.fields,(n,r)=>{const s=new Ze([n]);if(_o(r)){const i=Zg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new at(e,0,he.min(),he.min(),he.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,he.min(),he.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,he.min(),he.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function Bf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function sR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class em{}class qe extends em{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oR(e,n,r):n==="array-contains"?new lR(e,r):n==="in"?new uR(e,r):n==="not-in"?new hR(e,r):n==="array-contains-any"?new fR(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aR(e,r):new cR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends em{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $t(e,n)}matches(e){return tm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tm(t){return t.op==="and"}function nm(t){return iR(t)&&tm(t)}function iR(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function Lc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(nm(t))return t.filters.map(e=>Lc(e)).join(",");{const e=t.filters.map(n=>Lc(n)).join(",");return`${t.op}(${e})`}}function rm(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&rm(o,s.filters[c]),!0):!1}(t,e):void ue()}function sm(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(sm).join(" ,")+"}"}(t):"Filter"}class oR extends qe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class aR extends qe{constructor(e,n){super(e,"in",n),this.keys=im("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cR extends qe{constructor(e,n){super(e,"not-in",n),this.keys=im("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class lR extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dl(n)&&li(n.arrayValue,this.value)}}class uR extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class hR extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!li(this.value.arrayValue,n)}}class fR extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
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
 */class dR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function $f(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dR(t,e,n,r,s,i,o)}function Vl(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),la(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ue=n}return e.ue}function xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jf(t.startAt,e.startAt)&&jf(t.endAt,e.endAt)}function Mc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ii{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pR(t,e,n,r,s,i,o,c){return new Ii(t,e,n,r,s,i,o,c)}function om(t){return new Ii(t)}function qf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function am(t){return t.collectionGroup!==null}function zs(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new tt(Ze.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Lo(i,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new Lo(Ze.keyField(),r))}return e.ce}function Zt(t){const e=fe(t);return e.le||(e.le=gR(e,zs(t))),e.le}function gR(t,e){if(t.limitType==="F")return $f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return $f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uc(t,e){const n=t.filters.concat([e]);return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fc(t,e,n){return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ua(t,e){return xl(Zt(t),Zt(e))&&t.limitType===e.limitType}function cm(t){return`${Vl(Zt(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>sm(s)).join(", ")}]`),la(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function ha(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Bf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,zs(r),s)||r.endAt&&!function(o,c,l){const h=Bf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,zs(r),s))}(t,e)}function mR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lm(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=_R(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _R(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ns(l,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Xg(this.inner)}size(){return this.innerSize}}/**
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
 */const yR=new Le(se.comparator);function _n(){return yR}const um=new Le(se.comparator);function Ls(...t){let e=um;for(const n of t)e=e.insert(n.key,n);return e}function hm(t){let e=um;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Gs()}function fm(){return Gs()}function Gs(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const vR=new Le(se.comparator),ER=new tt(se.comparator);function ge(...t){let e=ER;for(const n of t)e=e.add(n);return e}const TR=new tt(we);function wR(){return TR}/**
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
 */function Ll(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function dm(t){return{integerValue:""+t}}function IR(t,e){return Z0(e)?dm(e):Ll(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fa{constructor(){this._=void 0}}function AR(t,e,n){return t instanceof Mo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ol(i)&&(i=Nl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ui?gm(t,e):t instanceof hi?mm(t,e):function(s,i){const o=pm(s,i),c=Hf(o)+Hf(s.Pe);return xc(o)&&xc(s.Pe)?dm(c):Ll(s.serializer,c)}(t,e)}function RR(t,e,n){return t instanceof ui?gm(t,e):t instanceof hi?mm(t,e):n}function pm(t,e){return t instanceof Uo?function(r){return xc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Mo extends fa{}class ui extends fa{constructor(e){super(),this.elements=e}}function gm(t,e){const n=_m(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class hi extends fa{constructor(e){super(),this.elements=e}}function mm(t,e){let n=_m(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Uo extends fa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Hf(t){return je(t.integerValue||t.doubleValue)}function _m(t){return Dl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ui&&s instanceof ui||r instanceof hi&&s instanceof hi?ts(r.elements,s.elements,tn):r instanceof Uo&&s instanceof Uo?tn(r.Pe,s.Pe):r instanceof Mo&&s instanceof Mo}(t.transform,e.transform)}class SR{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class da{}function ym(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Em(t.key,dn.none()):new Ai(t.key,t.data,dn.none());{const n=t.data,r=Ot.empty();let s=new tt(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pr(t.key,r,new Mt(s.toArray()),dn.none())}}function PR(t,e,n){t instanceof Ai?function(s,i,o){const c=s.value.clone(),l=Kf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(s,i,o){if(!yo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Kf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(vm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Ai?function(i,o,c,l){if(!yo(i.precondition,o))return c;const h=i.value.clone(),d=zf(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,o,c,l){if(!yo(i.precondition,o))return c;const h=zf(i.fieldTransforms,l,o),d=o.data;return d.setAll(vm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function CR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pm(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,(i,o)=>bR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends da{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends da{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kf(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,RR(o,c,n[s]))}return r}function zf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AR(i,o,e))}return r}class Em extends da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kR extends da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ym(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Wf(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Wf(n,r))}}class Ml{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return vR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ml(e,n,r,s)}}/**
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
 */class NR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class DR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ye;function VR(t){switch(t){default:return ue();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Tm(t){if(t===void 0)return mn("GRPC error has no .code"),x.UNKNOWN;switch(t){case $e.OK:return x.OK;case $e.CANCELLED:return x.CANCELLED;case $e.UNKNOWN:return x.UNKNOWN;case $e.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case $e.INTERNAL:return x.INTERNAL;case $e.UNAVAILABLE:return x.UNAVAILABLE;case $e.UNAUTHENTICATED:return x.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case $e.NOT_FOUND:return x.NOT_FOUND;case $e.ALREADY_EXISTS:return x.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return x.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case $e.ABORTED:return x.ABORTED;case $e.OUT_OF_RANGE:return x.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return x.UNIMPLEMENTED;case $e.DATA_LOSS:return x.DATA_LOSS;default:return ue()}}(ye=$e||($e={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xR(){return new TextEncoder}/**
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
 */const LR=new pr([4294967295,4294967295],0);function Gf(t){const e=xR().encode(t),n=new $g;return n.update(e),new Uint8Array(n.digest())}function Qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class Ul{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=pr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(LR)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Gf(e),[r,s]=Qf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ul(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Gf(e),[r,s]=Qf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pa(he.min(),s,new Le(we),_n(),ge())}}class Ri{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ri(r,n,ge(),ge(),ge())}}/**
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
 */class vo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class wm{constructor(e,n){this.targetId=e,this.me=n}}class Im{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jf{constructor(){this.fe=0,this.ge=Yf(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Ri(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Yf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class MR{constructor(e){this.Le=e,this.Be=new Map,this.ke=_n(),this.qe=Xf(),this.Qe=new Le(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Mc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,at.newNoDocument(o,he.min()))}else Pe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=wr(r).toUint8Array()}catch(l){if(l instanceof Yg)return es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ul(o,s,i)}catch(l){return es(l instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Mc(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,at.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new pa(e,n,this.Qe,this.ke,r);return this.ke=_n(),this.qe=Xf(),this.Qe=new Le(we),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Jf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Jf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Xf(){return new Le(se.comparator)}function Yf(){return new Le(se.comparator)}const UR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BR={and:"AND",or:"OR"};class jR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bc(t,e){return t.useProto3Json||la(e)?e:{value:e}}function Fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Am(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $R(t,e){return Fo(t,e.toTimestamp())}function en(t){return Pe(!!t),he.fromTimestamp(function(n){const r=zn(n);return new He(r.seconds,r.nanos)}(t))}function Fl(t,e){return jc(t,e).canonicalString()}function jc(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Rm(t){const e=Oe.fromString(t);return Pe(km(e)),e}function $c(t,e){return Fl(t.databaseId,e.path)}function ec(t,e){const n=Rm(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Sm(n))}function bm(t,e){return Fl(t.databaseId,e)}function qR(t){const e=Rm(t);return e.length===4?Oe.emptyPath():Sm(e)}function qc(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sm(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zf(t,e,n){return{name:$c(t,e),fields:n.value.mapValue.fields}}function HR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Pe(d===void 0||typeof d=="string"),nt.fromBase64String(d||"")):(Pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?x.UNKNOWN:Tm(h.code);return new Y(d,h.message||"")}(o);n=new Im(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ec(t,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):he.min(),c=new Ot({mapValue:{fields:r.document.fields}}),l=at.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new vo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ec(t,r.document),i=r.readTime?en(r.readTime):he.min(),o=at.newNoDocument(s,i),c=r.removedTargetIds||[];n=new vo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ec(t,r.document),i=r.removedTargetIds||[];n=new vo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DR(s,i),c=r.targetId;n=new wm(c,o)}}return n}function WR(t,e){let n;if(e instanceof Ai)n={update:Zf(t,e.key,e.value)};else if(e instanceof Em)n={delete:$c(t,e.key)};else if(e instanceof Pr)n={update:Zf(t,e.key,e.data),updateMask:eb(e.fieldMask)};else{if(!(e instanceof kR))return ue();n={verify:$c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Uo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$R(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function KR(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?en(s.updateTime):en(i);return o.isEqual(he.min())&&(o=en(i)),new SR(o,s.transformResults||[])}(n,e))):[]}function zR(t,e){return{documents:[bm(t,e.path)]}}function GR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bm(t,s);const i=function(h){if(h.length!==0)return Cm($t.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Br(m.field),direction:XR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Bc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function QR(t){let e=qR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Pm(p);return m instanceof $t&&nm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Lo(jr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,la(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,E=p.values||[];return new xo(E,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,E=p.values||[];return new xo(E,m)}(n.endAt)),pR(e,s,o,i,c,"F",l,h)}function JR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>Pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function XR(t){return UR[t]}function YR(t){return FR[t]}function ZR(t){return BR[t]}function Br(t){return{fieldPath:t.canonicalString()}}function jr(t){return Ze.fromServerFormat(t.fieldPath)}function Cm(t){return t instanceof qe?function(n){if(n.op==="=="){if(Ff(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NAN"}};if(Uf(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ff(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NAN"}};if(Uf(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(n.field),op:YR(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(s=>Cm(s));return r.length===1?r[0]:{compositeFilter:{op:ZR(n.op),filters:r}}}(t):ue()}function eb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function km(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mn{constructor(e,n,r,s,i=he.min(),o=he.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tb{constructor(e){this.ct=e}}function nb(t){const e=QR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
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
 */class rb{constructor(){this.un=new sb}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Kn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class sb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Oe.comparator)).toArray()}}/**
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
 */class ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ss(0)}static kn(){return new ss(-1)}}/**
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
 */class ib{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ab{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Mt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ls();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=_n();const o=Gs(),c=function(){return Gs()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Pr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Qs(d.mutation,h,d.mutation.getFieldMask(),He.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new ob(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Le((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Mt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=fm();d.forEach(m=>{if(!i.has(m)){const E=ym(n.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):am(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(cr());let c=-1,l=i;return o.next(h=>U.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(d=>({batchId:c,changes:hm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(p,m){return new Ii(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,at.newInvalidDocument(d)))});let c=Ls();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Qs(d.mutation,h,Mt.empty(),He.now()),ha(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class cb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:nb(s.bundledQuery),readTime:en(s.readTime)}}(n)),U.resolve()}}/**
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
 */class lb{constructor(){this.overlays=new Le(se.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=cr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NR(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ub{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Bl{constructor(){this.Tr=new tt(Ge.Er),this.dr=new tt(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Oe([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Oe([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class hb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(Ge.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(we);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new se(i),0);let c=new tt(we);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),U.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fb{constructor(e){this.Mr=e,this.docs=function(){return new Le(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_n();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Q0(G0(d),r)<=0||(s.has(d.key)||ha(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new db(this)}getSize(e){return U.resolve(this.size)}}class db extends ib{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class pb{constructor(e){this.persistence=e,this.Nr=new us(n=>Vl(n),xl),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Bl,this.targetCount=0,this.kr=ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class gb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kl(0),this.Kr=!1,this.Kr=!0,this.$r=new ub,this.referenceDelegate=e(this),this.Ur=new pb(this),this.indexManager=new rb,this.remoteDocumentCache=function(s){return new fb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new tb(n),this.Gr=new cb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new hb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new mb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class mb extends X0{constructor(e){super(),this.currentSequenceNumber=e}}class jl{constructor(e){this.persistence=e,this.Jr=new Bl,this.Yr=null}static Zr(e){return new jl(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class $l{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $l(e,n.fromCache,r,s)}}/**
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
 */class _b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ZT()?8:Y0(ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _b;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ks()<=me.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(ks()<=me.DEBUG&&ee("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ks()<=me.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):U.resolve())}Yi(e,n){if(qf(n))return U.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fc(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,Fc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return qf(n)||s.isEqual(he.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(ks()<=me.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.rs(e,o,n,z0(s,-1)).next(c=>c))})}ts(e,n){let r=new tt(lm(e));return n.forEach((s,i)=>{ha(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ks()<=me.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class vb{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Le(we),this._s=new us(i=>Vl(i),xl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ab(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Eb(t,e,n,r){return new vb(t,e,n,r)}async function Om(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function Tb(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let E=U.resolve();return m.forEach(C=>{E=E.next(()=>d.getEntry(l,C)).next(N=>{const O=h.docVersions.get(C);Pe(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Nm(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function wb(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(nt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),function(N,O,$){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(m,E,d)&&c.push(n.Ur.updateTargetData(i,E))});let l=_n(),h=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Ib(i,o,e.documentUpdates).next(d=>{l=d.Ps,h=d.Is})),!r.isEqual(he.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function Ib(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_n();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Ab(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Rb(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hc(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ed(t,e,n){const r=fe(t);let s=he.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=fe(l),m=p._s.get(d);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,o,Zt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ge())).next(c=>(bb(r,mR(e),c),{documents:c,Ts:i})))}function bb(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class td{constructor(){this.activeTargetIds=wR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sb{constructor(){this.so=new td,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new td,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Pb{_o(e){}shutdown(){}}/**
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
 */class nd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yi=null;function tc(){return Yi===null?Yi=function(){return 268435456+Math.round(2147483648*Math.random())}():Yi++,"0x"+Yi.toString(16)}/**
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
 */const Cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const it="WebChannelConnection";class Ob extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=tc(),l=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(d=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw es("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Cb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=tc();return new Promise((o,c)=>{const l=new qg;l.setWithCredentials(!0),l.listenOnce(Wg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mo.NO_ERROR:const d=l.getResponseJson();ee(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case mo.TIMEOUT:ee(it,`RPC '${e}' ${i} timed out`),c(new Y(x.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const p=l.getStatus();if(ee(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const C=function(O){const $=O.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf($)>=0?$:x.UNKNOWN}(E.status);c(new Y(C,E.message))}else c(new Y(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(x.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{ee(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(it,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=tc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gg(),c=zg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Hg({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ee(it,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,E=!1;const C=new kb({Io:O=>{E?ee(it,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(ee(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(it,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,$,B)=>{O.listen($,M=>{try{B(M)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(p,xs.EventType.OPEN,()=>{E||(ee(it,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(p,xs.EventType.CLOSE,()=>{E||(E=!0,ee(it,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(p,xs.EventType.ERROR,O=>{E||(E=!0,es(it,`RPC '${e}' stream ${s} transport errored:`,O),C.So(new Y(x.UNAVAILABLE,"The operation could not be completed")))}),N(p,xs.EventType.MESSAGE,O=>{var $;if(!E){const B=O.data[0];Pe(!!B);const M=B,Q=M.error||(($=M[0])===null||$===void 0?void 0:$.error);if(Q){ee(it,`RPC '${e}' stream ${s} received error:`,Q);const oe=Q.status;let X=function(v){const I=$e[v];if(I!==void 0)return Tm(I)}(oe),A=Q.message;X===void 0&&(X=x.INTERNAL,A="Unknown error status: "+oe+" with message "+Q.message),E=!0,C.So(new Y(X,A)),p.close()}else ee(it,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),N(c,Kg.STAT_EVENT,O=>{O.stat===Dc.PROXY?ee(it,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Dc.NOPROXY&&ee(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function nc(){return typeof document<"u"?document:null}/**
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
 */function ga(t){return new jR(t,!0)}/**
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
 */class Dm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Vm{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Dm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nb extends Vm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=HR(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?en(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=qc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Mc(l)?{documents:zR(i,l)}:{query:GR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Am(i,o.resumeToken);const h=Bc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Fo(i,o.snapshotVersion.toTimestamp());const h=Bc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=JR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=qc(this.serializer),n.removeTarget=e,this.a_(n)}}class Db extends Vm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=KR(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=qc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WR(this.serializer,r))};this.a_(n)}}/**
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
 */class Vb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,jc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(x.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,jc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Lb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=fe(l);h.L_.add(4),await bi(h),h.q_.set("Unknown"),h.L_.delete(4),await ma(h)}(this))})}),this.q_=new xb(r,s)}}async function ma(t){if(Cr(t))for(const e of t.B_)await e(!0)}async function bi(t){for(const e of t.B_)await e(!1)}function xm(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Kl(n)?Wl(n):hs(n).r_()&&Hl(n,e))}function ql(t,e){const n=fe(t),r=hs(n);n.N_.delete(e),r.r_()&&Lm(n,e),n.N_.size===0&&(r.r_()?r.o_():Cr(n)&&n.q_.set("Unknown"))}function Hl(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).A_(e)}function Lm(t,e){t.Q_.xe(e),hs(t).R_(e)}function Wl(t){t.Q_=new MR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.q_.v_()}function Kl(t){return Cr(t)&&!hs(t).n_()&&t.N_.size>0}function Cr(t){return fe(t).L_.size===0}function Mm(t){t.Q_=void 0}async function Mb(t){t.q_.set("Online")}async function Ub(t){t.N_.forEach((e,n)=>{Hl(t,e)})}async function Fb(t,e){Mm(t),Kl(t)?(t.q_.M_(e),Wl(t)):t.q_.set("Unknown")}async function Bb(t,e,n){if(t.q_.set("Online"),e instanceof Im&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(t,r)}else if(e instanceof vo?t.Q_.Ke(e):e instanceof wm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await Nm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),Lm(i,l);const p=new Mn(d.target,l,h,d.sequenceNumber);Hl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Bo(t,r)}}async function Bo(t,e,n){if(!wi(e))throw e;t.L_.add(1),await bi(t),t.q_.set("Offline"),n||(n=()=>Nm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ma(t)})}function Um(t,e){return e().catch(n=>Bo(t,n,e))}async function _a(t){const e=fe(t),n=Gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;jb(e);)try{const s=await Ab(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,$b(e,s)}catch(s){await Bo(e,s)}Fm(e)&&Bm(e)}function jb(t){return Cr(t)&&t.O_.length<10}function $b(t,e){t.O_.push(e);const n=Gn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Fm(t){return Cr(t)&&!Gn(t).n_()&&t.O_.length>0}function Bm(t){Gn(t).start()}async function qb(t){Gn(t).p_()}async function Hb(t){const e=Gn(t);for(const n of t.O_)e.m_(n.mutations)}async function Wb(t,e,n){const r=t.O_.shift(),s=Ml.from(r,e,n);await Um(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _a(t)}async function Kb(t,e){e&&Gn(t).V_&&await async function(r,s){if(function(o){return VR(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();Gn(r).s_(),await Um(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _a(r)}}(t,e),Fm(t)&&Bm(t)}async function rd(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.L_.add(3),await bi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ma(n)}async function zb(t,e){const n=fe(t);e?(n.L_.delete(2),await ma(n)):e||(n.L_.add(2),await bi(n),n.q_.set("Unknown"))}function hs(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new Nb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Mb.bind(null,t),Ro:Ub.bind(null,t),mo:Fb.bind(null,t),d_:Bb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Kl(t)?Wl(t):t.q_.set("Unknown")):(await t.K_.stop(),Mm(t))})),t.K_}function Gn(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new Db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qb.bind(null,t),mo:Kb.bind(null,t),f_:Hb.bind(null,t),g_:Wb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await _a(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class zl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new zl(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gl(t,e){if(mn("AsyncQueue",`${e}: ${t}`),wi(t))return new Y(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class sd{constructor(){this.W_=new Le(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new is(e,n,Qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Gb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Qb{constructor(){this.queries=id(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=id(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Y(x.ABORTED,"Firestore shutting down"))}}function id(){return new us(t=>cm(t),ua)}async function Jb(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Gb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Gl(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Ql(n)}async function Xb(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yb(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Ql(n)}function Zb(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Ql(t){t.Y_.forEach(e=>{e.next()})}var Wc,od;(od=Wc||(Wc={})).ea="default",od.Cache="cache";class eS{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wc.Cache}}/**
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
 */class jm{constructor(e){this.key=e}}class $m{constructor(e){this.key=e}}class tS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=lm(e),this.Ra=new Qr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new sd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),E=ha(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;m&&E?m.data.isEqual(E.data)?C!==N&&(r.track({type:3,doc:E}),O=!0):this.ga(m,E)||(r.track({type:2,doc:E}),O=!0,(l&&this.Aa(E,l)>0||h&&this.Aa(E,h)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),O=!0):m&&!E&&(r.track({type:1,doc:m}),O=!0,(l||h)&&(c=!0)),O&&(E?(o=o.add(E),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(E,C){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return N(E)-N(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new is(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new sd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new $m(r))}),this.da.forEach(r=>{e.has(r)||n.push(new jm(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rS{constructor(e){this.key=e,this.va=!1}}class sS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new us(c=>cm(c),ua),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(se.comparator),this.Na=new Map,this.La=new Bl,this.Ba={},this.ka=new Map,this.qa=ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function iS(t,e,n=!0){const r=Gm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await qm(r,e,n,!0),s}async function oS(t,e){const n=Gm(t);await qm(n,e,!0,!1)}async function qm(t,e,n,r){const s=await Rb(t.localStore,Zt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await aS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&xm(t.remoteStore,s),c}async function aS(t,e,n,r,s){t.Ka=(p,m,E)=>async function(N,O,$,B){let M=O.view.ma($);M.ns&&(M=await ed(N.localStore,O.query,!1).then(({documents:A})=>O.view.ma(A,M)));const Q=B&&B.targetChanges.get(O.targetId),oe=B&&B.targetMismatches.get(O.targetId)!=null,X=O.view.applyChanges(M,N.isPrimaryClient,Q,oe);return cd(N,O.targetId,X.wa),X.snapshot}(t,p,m,E);const i=await ed(t.localStore,e,!0),o=new tS(e,i.Ts),c=o.ma(i.documents),l=Ri.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);cd(t,n,h.wa);const d=new nS(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function cS(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ua(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ql(r.remoteStore,s.targetId),Kc(r,s.targetId)}).catch(Ti)):(Kc(r,s.targetId),await Hc(r.localStore,s.targetId,!0))}async function lS(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ql(n.remoteStore,r.targetId))}async function uS(t,e,n){const r=_S(t);try{const s=await function(o,c){const l=fe(o),h=He.now(),d=c.reduce((E,C)=>E.add(C.key),ge());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=_n(),N=ge();return l.cs.getEntries(E,d).next(O=>{C=O,C.forEach(($,B)=>{B.isValidDocument()||(N=N.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,C)).next(O=>{p=O;const $=[];for(const B of c){const M=CR(B,p.get(B.key).overlayedDocument);M!=null&&$.push(new Pr(B.key,M,Zg(M.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,$,c)}).next(O=>{m=O;const $=O.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(E,O.batchId,$)})}).then(()=>({batchId:m.batchId,changes:hm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Le(we)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Si(r,s.changes),await _a(r.remoteStore)}catch(s){const i=Gl(s,"Failed to persist write");n.reject(i)}}async function Hm(t,e){const n=fe(t);try{const r=await wb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Pe(o.va):s.removedDocuments.size>0&&(Pe(o.va),o.va=!1))}),await Si(n,r,e)}catch(r){await Ti(r)}}function ad(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=fe(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(h=!0)}),h&&Ql(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hS(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Le(se.comparator);o=o.insert(i,at.newNoDocument(i,he.min()));const c=ge().add(i),l=new pa(he.min(),new Map,new Le(we),o,c);await Hm(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Jl(r)}else await Hc(r.localStore,e,!1).then(()=>Kc(r,e,n)).catch(Ti)}async function fS(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await Tb(n.localStore,e);Km(n,r,null),Wm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Si(n,s)}catch(s){await Ti(s)}}async function dS(t,e,n){const r=fe(t);try{const s=await function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Pe(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);Km(r,e,n),Wm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Si(r,s)}catch(s){await Ti(s)}}function Wm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Km(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||zm(t,r)})}function zm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ql(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jl(t))}function cd(t,e,n){for(const r of n)r instanceof jm?(t.La.addReference(r.key,e),pS(t,r)):r instanceof $m?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||zm(t,r.key)):ue()}function pS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jl(t))}function Jl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new rS(n)),t.Oa=t.Oa.insert(n,r),xm(t.remoteStore,new Mn(Zt(om(n.path)),r,"TargetPurposeLimboResolution",kl.oe))}}async function Si(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=$l.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const d=fe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,m=>U.forEach(m.$i,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>U.forEach(m.Ui,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!wi(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const E=d.os.get(m),C=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,N)}}}(r.localStore,i))}async function gS(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Om(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Y(x.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Si(n,r.hs)}}function mS(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function Gm(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hS.bind(null,e),e.Ca.d_=Yb.bind(null,e.eventManager),e.Ca.$a=Zb.bind(null,e.eventManager),e}function _S(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dS.bind(null,e),e}class ld{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Eb(this.persistence,new yb,e.initialUser,this.serializer)}createPersistence(e){return new gb(jl.Zr,this.serializer)}createSharedClientState(e){return new Sb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ad(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gS.bind(null,this.syncEngine),await zb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qb}()}createDatastore(e){const n=ga(e.databaseInfo.databaseId),r=function(i){return new Ob(i)}(e.databaseInfo);return function(i,o,c,l){return new Vb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Lb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ad(this.syncEngine,n,0),function(){return nd.D()?new nd:new Pb}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new sS(s,i,o,c,l,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await bi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 *//**
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
 */class vS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ES{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Jg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ee("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ee("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ud(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wS(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>rd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>rd(e.remoteStore,s)),t._onlineComponents=e}function TS(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!TS(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new ld)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await rc(t,new ld);return t._offlineComponents}async function Qm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await ud(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await ud(t,new yS))),t._onlineComponents}function IS(t){return Qm(t).then(e=>e.syncEngine)}async function AS(t){const e=await Qm(t),n=e.eventManager;return n.onListen=iS.bind(null,e.syncEngine),n.onUnlisten=cS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lS.bind(null,e.syncEngine),n}function RS(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new vS({next:m=>{o.enqueueAndForget(()=>Xb(i,p)),m.fromCache&&l.source==="server"?h.reject(new Y(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new eS(c,d,{includeMetadataChanges:!0,_a:!0});return Jb(i,p)}(await AS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Jm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hd=new Map;/**
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
 */function Xm(t,e,n){if(!n)throw new Y(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bS(t,e,n,r){if(e===!0&&r===!0)throw new Y(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fd(t){if(!se.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dd(t){if(se.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ya(t);throw new Y(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class pd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class va{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new U0;switch(r.type){case"firstParty":return new $0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hd.get(n);r&&(ee("ComponentProvider","Removing Datastore"),hd.delete(n),r.terminate())}(this),Promise.resolve()}}function SS(t,e,n,r={}){var s;const i=(t=fi(t,va))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ot.MOCK_USER;else{c=Zp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(h)}t._authCredentials=new F0(new Qg(c,l))}}/**
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
 */class fs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class qn extends fs{constructor(e,n,r){super(e,n,om(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new se(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function mC(t,e,...n){if(t=ze(t),Xm("collection","path",e),t instanceof va){const r=Oe.fromString(e,...n);return dd(r),new qn(t,null,r)}{if(!(t instanceof bt||t instanceof qn))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return dd(r),new qn(t.firestore,null,r)}}function _C(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Jg.newId()),Xm("doc","path",e),t instanceof va){const r=Oe.fromString(e,...n);return fd(r),new bt(t,null,new se(r))}{if(!(t instanceof bt||t instanceof qn))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return fd(r),new bt(t.firestore,t instanceof qn?t.converter:null,new se(r))}}/**
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
 */class PS{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Dm(this,"async_queue_retry"),this.Eu=()=>{const n=nc();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new $n;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!wi(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=zl.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ue()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Xl extends va{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new PS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zm(this),this._firestoreClient.terminate()}}function CS(t,e){const n=typeof t=="object"?t:vl(),r=typeof t=="string"?t:"(default)",s=ia(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jp("firestore");i&&SS(s,...i)}return s}function Ym(t){return t._firestoreClient||Zm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zm(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new tR(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Jm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ES(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(nt.fromBase64String(e))}catch(n){throw new Y(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class e_{constructor(e){this._methodName=e}}/**
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
 */class Zl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const kS=/^__.*__$/;class OS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function t_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class tu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return jo(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(t_(this.wu)&&kS.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class NS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ga(e)}Nu(e,n,r,s=!1){return new tu({wu:e,methodName:n,Ou:r,path:Ze.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function n_(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new NS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DS(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);i_("Data must be an object, but it was:",o,r);const c=r_(r,o);let l,h;if(i.merge)l=new Mt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=xS(e,p,n);if(!o.contains(m))throw new Y(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);MS(d,m)||d.push(m)}l=new Mt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new OS(new Ot(c),l,h)}function VS(t,e,n,r=!1){return nu(n,t.Nu(r?4:3,e))}function nu(t,e){if(s_(t=ze(t)))return i_("Unsupported field value:",e,t),r_(t,e);if(t instanceof e_)return function(r,s){if(!t_(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=nu(c,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Fo(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(s.serializer,i)}}if(r instanceof Zl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:Am(s.serializer,r._byteString)};if(r instanceof bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return Ll(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${ya(r)}`)}(t,e)}function r_(t,e){const n={};return Xg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,s)=>{const i=nu(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function s_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Zl||t instanceof os||t instanceof bt||t instanceof e_||t instanceof eu)}function i_(t,e,n){if(!s_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ya(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function xS(t,e,n){if((e=ze(e))instanceof Yl)return e._internalPath;if(typeof e=="string")return o_(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const LS=new RegExp("[~\\*/\\[\\]]");function o_(t,e,n){if(e.search(LS)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yl(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(x.INVALID_ARGUMENT,c+t+l)}function MS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class a_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new US(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(c_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class US extends a_{data(){return super.data()}}function c_(t,e){return typeof e=="string"?o_(t,e):e instanceof Yl?e._internalPath:e._delegate._internalPath}/**
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
 */function FS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ru{}class BS extends ru{}function yC(t,e,...n){let r=[];e instanceof ru&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof iu).length,c=i.filter(l=>l instanceof su).length;if(o>1||o>0&&c>0)throw new Y(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class su extends BS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new su(e,n,r)}_apply(e){const n=this._parse(e);return l_(e._query,n),new fs(e.firestore,e.converter,Uc(e._query,n))}_parse(e){const n=n_(e.firestore);return function(i,o,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){md(p,d);const E=[];for(const C of p)E.push(gd(l,i,C));m={arrayValue:{values:E}}}else m=gd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||md(p,d),m=VS(c,o,p,d==="in"||d==="not-in");return qe.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class iu extends ru{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new iu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)l_(o,l),o=Uc(o,l)}(e._query,n),new fs(e.firestore,e.converter,Uc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gd(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new Y(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!am(e)&&n.indexOf("/")!==-1)throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!se.isDocumentKey(r))throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mf(t,new se(r))}if(n instanceof bt)return Mf(t,n._key);throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ya(n)}.`)}function md(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jS{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ls(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new eu(i)}convertGeoPoint(e){return new Zl(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const n=zn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Pe(km(r));const s=new ci(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $S(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qS extends a_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(c_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends qS{data(e={}){return super.data(e)}}class HS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Zi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Zi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:WS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}class KS extends jS{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function vC(t){t=fi(t,fs);const e=fi(t.firestore,Xl),n=Ym(e),r=new KS(e);return FS(t._query),RS(n,t._query).then(s=>new HS(e,r,t,s))}function EC(t,e,n){t=fi(t,bt);const r=fi(t.firestore,Xl),s=$S(t.converter,e);return zS(r,[DS(n_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function zS(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>uS(await IS(r),s,i)),i.promise}(Ym(t),e)}(function(e,n=!0){(function(s){cs=s})(br),yr(new Wn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Xl(new B0(r.getProvider("auth-internal")),new H0(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Jt(Nf,"4.7.1",e),Jt(Nf,"4.7.1","esm2017")})();/**
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
 */const u_="firebasestorage.googleapis.com",h_="storageBucket",GS=2*60*1e3,QS=10*60*1e3;/**
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
 */class Fe extends nn{constructor(e,n,r=0){super(sc(e),`Firebase Storage: ${n} (${sc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function sc(t){return"storage/"+t}function ou(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Ue.UNKNOWN,t)}function JS(t){return new Fe(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function XS(t){return new Fe(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ue.UNAUTHENTICATED,t)}function ZS(){return new Fe(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eP(t){return new Fe(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function tP(){return new Fe(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nP(){return new Fe(Ue.CANCELED,"User canceled the upload/download.")}function rP(t){return new Fe(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function sP(t){return new Fe(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iP(){return new Fe(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h_+"' property when initializing the app?")}function oP(){return new Fe(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aP(){return new Fe(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cP(t){return new Fe(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zc(t){return new Fe(Ue.INVALID_ARGUMENT,t)}function f_(){return new Fe(Ue.APP_DELETED,"The Firebase app was deleted.")}function lP(t){return new Fe(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Js(t,e){return new Fe(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Os(t){throw new Fe(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw sP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(Q){Q.path_=decodeURIComponent(Q.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},N=n===u_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",$=new RegExp(`^https?://${N}/${s}/${O}`,"i"),M=[{regex:c,indices:l,postModify:i},{regex:E,indices:C,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let Q=0;Q<M.length;Q++){const oe=M[Q],X=oe.regex.exec(e);if(X){const A=X[oe.indices.bucket];let _=X[oe.indices.path];_||(_=""),r=new Rt(A,_),oe.postModify(r);break}}if(r==null)throw rP(e);return r}}class uP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function hP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(E,l())},O)}function m(){i&&clearTimeout(i)}function E(O,...$){if(h){m();return}if(O){m(),d.call(null,O,...$);return}if(l()||o){m(),d.call(null,O,...$);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,p(M)}let C=!1;function N(O){C||(C=!0,m(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function fP(t){t(!1)}/**
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
 */function dP(t){return t!==void 0}function pP(t){return typeof t=="object"&&!Array.isArray(t)}function au(t){return typeof t=="string"||t instanceof String}function _d(t){return cu()&&t instanceof Blob}function cu(){return typeof Blob<"u"}function yd(t,e,n,r){if(r<e)throw zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function lu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function d_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gr||(gr={}));/**
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
 */function gP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class mP{constructor(e,n,r,s,i,o,c,l,h,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,C)=>{this.resolve_=E,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new eo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===gr.NO_ERROR,l=i.getStatus();if(!c||gP(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===gr.ABORT;r(!1,new eo(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new eo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());dP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=ou();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?f_():nP();o(l)}else{const l=tP();o(l)}};this.canceled_?n(!1,new eo(!1,null,!0)):this.backoffId_=hP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _P(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function EP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TP(t,e,n,r,s,i,o=!0){const c=d_(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return vP(h,e),_P(h,n),yP(h,i),EP(h,r),new mP(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function wP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IP(...t){const e=wP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cu())return new Blob(t);throw new Fe(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function RP(t){if(typeof atob>"u")throw cP("base-64");return atob(t)}/**
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
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ic{constructor(e,n){this.data=e,this.contentType=n||null}}function bP(t,e){switch(t){case Qt.RAW:return new ic(p_(e));case Qt.BASE64:case Qt.BASE64URL:return new ic(g_(t,e));case Qt.DATA_URL:return new ic(PP(e),CP(e))}throw ou()}function p_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function SP(t){let e;try{e=decodeURIComponent(t)}catch{throw Js(Qt.DATA_URL,"Malformed data URL.")}return p_(e)}function g_(t,e){switch(t){case Qt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Js(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Js(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=RP(e)}catch(s){throw s.message.includes("polyfill")?s:Js(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class m_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Js(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PP(t){const e=new m_(t);return e.base64?g_(Qt.BASE64,e.rest):SP(e.rest)}function CP(t){return new m_(t).contentType}function kP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ln{constructor(e,n){let r=0,s="";_d(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(_d(this.data_)){const r=this.data_,s=AP(r,e,n);return s===null?null:new Ln(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(cu()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(IP.apply(null,n))}else{const n=e.map(o=>au(o)?bP(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function __(t){let e;try{e=JSON.parse(t)}catch{return null}return pP(e)?e:null}/**
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
 */function OP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function y_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function DP(t,e){return e}class dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||DP}}let to=null;function VP(t){return!au(t)||t.length<2?t:y_(t)}function v_(){if(to)return to;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(i,o){return VP(o)}const n=new dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new dt("size");return s.xform=r,t.push(s),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),to=t,to}function xP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function LP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return xP(r,t),r}function E_(t,e,n){const r=__(e);return r===null?null:LP(t,r,n)}function MP(t,e,n,r){const s=__(e);if(s===null||!au(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),E=lu(m,n,r),C=d_({alt:"media",token:h});return E+C})[0]}function UP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class T_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function w_(t){if(!t)throw ou()}function FP(t,e){function n(r,s){const i=E_(t,s,e);return w_(i!==null),i}return n}function BP(t,e){function n(r,s){const i=E_(t,s,e);return w_(i!==null),MP(i,s,t.host,t._protocol)}return n}function I_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ZS():s=YS():n.getStatus()===402?s=XS(t.bucket):n.getStatus()===403?s=eP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function jP(t){const e=I_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=JS(t.path)),i.serverResponse=s.serverResponse,i}return n}function $P(t,e,n){const r=e.fullServerUrl(),s=lu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new T_(s,i,BP(t,n),o);return c.errorHandler=jP(e),c}function qP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function HP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qP(null,e)),r}function WP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let Q=0;Q<2;Q++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=HP(e,r,s),d=UP(h,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+l+"--",E=Ln.getBlob(p,r,m);if(E===null)throw oP();const C={name:h.fullPath},N=lu(i,t.host,t._protocol),O="POST",$=t.maxUploadRetryTime,B=new T_(N,O,FP(t,n),$);return B.urlParams=C,B.headers=o,B.body=E.uploadData(),B.errorHandler=I_(e),B}class KP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Os("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Os("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zP extends KP{initXhr(){this.xhr_.responseType="text"}}function A_(){return new zP}/**
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
 */class Ar{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ar(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return y_(this._location.path)}get storage(){return this._service}get parent(){const e=OP(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new Ar(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lP(e)}}function GP(t,e,n){t._throwIfRoot("uploadBytes");const r=WP(t.storage,t._location,v_(),new Ln(e,!0),n);return t.storage.makeRequestWithTokens(r,A_).then(s=>({metadata:s,ref:t}))}function QP(t){t._throwIfRoot("getDownloadURL");const e=$P(t.storage,t._location,v_());return t.storage.makeRequestWithTokens(e,A_).then(n=>{if(n===null)throw aP();return n})}function JP(t,e){const n=NP(t._location.path,e),r=new Rt(t._location.bucket,n);return new Ar(t.storage,r)}/**
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
 */function XP(t){return/^[A-Za-z]+:\/\//.test(t)}function YP(t,e){return new Ar(t,e)}function R_(t,e){if(t instanceof uu){const n=t;if(n._bucket==null)throw iP();const r=new Ar(n,n._bucket);return e!=null?R_(r,e):r}else return e!==void 0?JP(t,e):t}function ZP(t,e){if(e&&XP(e)){if(t instanceof uu)return YP(t,e);throw zc("To use ref(service, url), the first argument must be a Storage instance.")}else return R_(t,e)}function vd(t,e){const n=e==null?void 0:e[h_];return n==null?null:Rt.makeFromBucketSpec(n,t)}function eC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Zp(s,t.app.options.projectId))}class uu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=u_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GS,this._maxUploadRetryTime=QS,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=vd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=vd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ar(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new uP(f_());{const o=TP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ed="@firebase/storage",Td="0.13.1";/**
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
 */const b_="storage";function TC(t,e,n){return t=ze(t),GP(t,e,n)}function wC(t){return t=ze(t),QP(t)}function IC(t,e){return t=ze(t),ZP(t,e)}function tC(t=vl(),e){t=ze(t);const r=ia(t,b_).getImmediate({identifier:e}),s=Jp("storage");return s&&nC(r,...s),r}function nC(t,e,n,r={}){eC(t,e,n,r)}function rC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new uu(n,r,s,e,br)}function sC(){yr(new Wn(b_,rC,"PUBLIC").setMultipleInstances(!0)),Jt(Ed,Td,""),Jt(Ed,Td,"esm2017")}sC();const iC={apiKey:"AIzaSyD0PwqFVRBxyefTFw31dvdJ-lrFFtDjvFU",authDomain:"looks-b11a8.firebaseapp.com",databaseURL:"https://looks-b11a8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"looks-b11a8",storageBucket:"looks-b11a8.appspot.com",messagingSenderId:"529873039695",appId:"1:529873039695:web:401c380738ac548b17553a"},S_=ng(iC),wd=A0(S_),AC=CS(S_),RC=tC(),hu=AE(k0);hu.use(PE());hu.use(jg);hu.mount("#app");export{vC as A,EC as B,_C as C,IC as D,TC as E,Wt as F,wC as G,RC as H,kt as I,FT as J,Bg as _,dr as a,et as b,mc as c,hl as d,so as e,uC as f,UT as g,aC as h,co as i,wd as j,hC as k,Gy as l,jv as m,cC as n,Ao as o,qy as p,Hy as q,zo as r,fC as s,cy as t,Wp as u,lC as v,oC as w,mC as x,AC as y,yC as z};
