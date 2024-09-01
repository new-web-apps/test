const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BrgnyzMm.js","assets/AboutView-C6Dx7pxG.css","assets/LoginView-CrtOu-ed.js","assets/LoginView-DyJOYx0E.css","assets/RegisterView-BXcClBuf.js","assets/user-x2NkDJov.js","assets/RegisterView-CvowKOU-.css","assets/UsersView-Bbr_jWjV.js","assets/UsersView-DMEi2fh8.css","assets/WardrobeView-Fom7uiWN.js","assets/WardrobeView-D1ZgI6iL.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const xe={},Gr=[],Lt=()=>{},ry=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zc=t=>t.startsWith("onUpdate:"),ft=Object.assign,el=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sy=Object.prototype.hasOwnProperty,Te=(t,e)=>sy.call(t,e),le=Array.isArray,Qr=t=>Go(t)==="[object Map]",bf=t=>Go(t)==="[object Set]",fe=t=>typeof t=="function",Qe=t=>typeof t=="string",tr=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Sf=t=>(Me(t)||fe(t))&&fe(t.then)&&fe(t.catch),Pf=Object.prototype.toString,Go=t=>Pf.call(t),iy=t=>Go(t).slice(8,-1),Cf=t=>Go(t)==="[object Object]",tl=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oy=/-(\w)/g,qt=Qo(t=>t.replace(oy,(e,n)=>n?n.toUpperCase():"")),ay=/\B([A-Z])/g,kr=Qo(t=>t.replace(ay,"-$1").toLowerCase()),Yo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=Qo(t=>t?`on${Yo(t)}`:""),Qn=(t,e)=>!Object.is(t,e),uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let oh;const Of=()=>oh||(oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?hy(r):nl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Me(t))return t}const cy=/;(?![^(]*\))/g,ly=/:([^]+)/,uy=/\/\*[^]*?\*\//g;function hy(t){const e={};return t.replace(uy,"").split(cy).forEach(n=>{if(n){const r=n.split(ly);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rl(t){let e="";if(Qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=rl(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fy=Xc(dy);function Nf(t){return!!t||t===""}const Df=t=>!!(t&&t.__v_isRef===!0),Vf=t=>Qe(t)?t:t==null?"":le(t)||Me(t)&&(t.toString===Pf||!fe(t.toString))?Df(t)?Vf(t.value):JSON.stringify(t,xf,2):String(t),xf=(t,e)=>Df(e)?xf(t,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ba(r,i)+" =>"]=s,n),{})}:bf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ba(n))}:tr(e)?Ba(e):Me(e)&&!le(e)&&!Cf(e)?String(e):e,Ba=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class Mf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lf(t){return new Mf(t)}function py(t,e=bt){e&&e.active&&e.effects.push(t)}function Uf(){return bt}function my(t){bt&&bt.cleanups.push(t)}let gr;class sl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,py(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(gy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zn,n=gr;try{return zn=!0,gr=this,this._runnings++,ah(this),this.fn()}finally{ch(this),this._runnings--,gr=n,zn=e}}stop(){this.active&&(ah(this),ch(this),this.onStop&&this.onStop(),this.active=!1)}}function gy(t){return t.value}function ah(t){t._trackId++,t._depsLength=0}function ch(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ff(t.deps[e],t);t.deps.length=t._depsLength}}function Ff(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let zn=!0,fc=0;const Bf=[];function nr(){Bf.push(zn),zn=!1}function rr(){const t=Bf.pop();zn=t===void 0?!0:t}function il(){fc++}function ol(){for(fc--;!fc&&pc.length;)pc.shift()()}function jf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ff(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const pc=[];function $f(t,e,n){il();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&pc.push(r.scheduler)))}ol()}const zf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},bo=new WeakMap,_r=Symbol(""),mc=Symbol("");function Tt(t,e,n){if(zn&&gr){let r=bo.get(t);r||bo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=zf(()=>r.delete(n))),jf(gr,s)}}function gn(t,e,n,r,s,i){const o=bo.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((h,f)=>{(f==="length"||!tr(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":le(t)?tl(n)&&c.push(o.get("length")):(c.push(o.get(_r)),Qr(t)&&c.push(o.get(mc)));break;case"delete":le(t)||(c.push(o.get(_r)),Qr(t)&&c.push(o.get(mc)));break;case"set":Qr(t)&&c.push(o.get(_r));break}il();for(const l of c)l&&$f(l,4);ol()}function _y(t,e){const n=bo.get(t);return n&&n.get(e)}const yy=Xc("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr)),lh=vy();function vy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Re(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr(),il();const r=Re(this)[e].apply(this,n);return ol(),rr(),r}}),t}function Ey(t){tr(t)||(t=String(t));const e=Re(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class Hf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Dy:Qf:i?Gf:Kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Te(lh,n))return Reflect.get(lh,n,r);if(n==="hasOwnProperty")return Ey}const c=Reflect.get(e,n,r);return(tr(n)?qf.has(n):yy(n))||(s||Tt(e,"get",n),i)?c:Ye(c)?o&&tl(n)?c:c.value:Me(c)?s?Jf(c):wi(c):c}}class Wf extends Hf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Tr(i);if(!ts(r)&&!Tr(r)&&(i=Re(i),r=Re(r)),!le(e)&&Ye(i)&&!Ye(r))return l?!1:(i.value=r,!0)}const o=le(e)&&tl(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,r,s);return e===Re(s)&&(o?Qn(r,i)&&gn(e,"set",n,r):gn(e,"add",n,r)),c}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!qf.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",le(e)?"length":_r),Reflect.ownKeys(e)}}class wy extends Hf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ty=new Wf,Iy=new wy,Ay=new Wf(!0);const al=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function Yi(t,e,n=!1,r=!1){t=t.__v_raw;const s=Re(t),i=Re(e);n||(Qn(e,i)&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=Jo(s),c=r?al:n?hl:ii;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Ji(t,e=!1){const n=this.__v_raw,r=Re(n),s=Re(t);return e||(Qn(t,s)&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Xi(t,e=!1){return t=t.__v_raw,!e&&Tt(Re(t),"iterate",_r),Reflect.get(t,"size",t)}function uh(t,e=!1){!e&&!ts(t)&&!Tr(t)&&(t=Re(t));const n=Re(this);return Jo(n).has.call(n,t)||(n.add(t),gn(n,"add",t,t)),this}function hh(t,e,n=!1){!n&&!ts(e)&&!Tr(e)&&(e=Re(e));const r=Re(this),{has:s,get:i}=Jo(r);let o=s.call(r,t);o||(t=Re(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Qn(e,c)&&gn(r,"set",t,e):gn(r,"add",t,e),this}function dh(t){const e=Re(this),{has:n,get:r}=Jo(e);let s=n.call(e,t);s||(t=Re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gn(e,"delete",t,void 0),i}function fh(){const t=Re(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function Zi(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Re(o),l=e?al:t?hl:ii;return!t&&Tt(c,"iterate",_r),o.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function eo(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=Qr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?al:e?hl:ii;return!e&&Tt(i,"iterate",l?mc:_r),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ry(){const t={get(i){return Yi(this,i)},get size(){return Xi(this)},has:Ji,add:uh,set:hh,delete:dh,clear:fh,forEach:Zi(!1,!1)},e={get(i){return Yi(this,i,!1,!0)},get size(){return Xi(this)},has:Ji,add(i){return uh.call(this,i,!0)},set(i,o){return hh.call(this,i,o,!0)},delete:dh,clear:fh,forEach:Zi(!1,!0)},n={get(i){return Yi(this,i,!0)},get size(){return Xi(this,!0)},has(i){return Ji.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:Zi(!0,!1)},r={get(i){return Yi(this,i,!0,!0)},get size(){return Xi(this,!0)},has(i){return Ji.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=eo(i,!1,!1),n[i]=eo(i,!0,!1),e[i]=eo(i,!1,!0),r[i]=eo(i,!0,!0)}),[t,n,e,r]}const[by,Sy,Py,Cy]=Ry();function cl(t,e){const n=e?t?Cy:Py:t?Sy:by;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const ky={get:cl(!1,!1)},Oy={get:cl(!1,!0)},Ny={get:cl(!0,!1)};const Kf=new WeakMap,Gf=new WeakMap,Qf=new WeakMap,Dy=new WeakMap;function Vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Vy(iy(t))}function wi(t){return Tr(t)?t:ll(t,!1,Ty,ky,Kf)}function Yf(t){return ll(t,!1,Ay,Oy,Gf)}function Jf(t){return ll(t,!0,Iy,Ny,Qf)}function ll(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=xy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function yr(t){return Tr(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function ts(t){return!!(t&&t.__v_isShallow)}function Xf(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function ul(t){return Object.isExtensible(t)&&kf(t,"__v_skip",!0),t}const ii=t=>Me(t)?wi(t):t,hl=t=>Me(t)?Jf(t):t;class Zf{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new sl(()=>e(this._value),()=>ho(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Re(this);return(!e._cacheable||e.effect.dirty)&&Qn(e._value,e._value=e.effect.run())&&ho(e,4),ep(e),e.effect._dirtyLevel>=2&&ho(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function My(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new Zf(r,s,i||!s,n)}function ep(t){var e;zn&&gr&&(t=Re(t),jf(gr,(e=t.dep)!=null?e:t.dep=zf(()=>t.dep=void 0,t instanceof Zf?t:void 0)))}function ho(t,e=4,n,r){t=Re(t);const s=t.dep;s&&$f(s,e)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function Xo(t){return tp(t,!1)}function Ly(t){return tp(t,!0)}function tp(t,e){return Ye(t)?t:new Uy(t,e)}class Uy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Re(e),this._value=n?e:ii(e)}get value(){return ep(this),this._value}set value(e){const n=this.__v_isShallow||ts(e)||Tr(e);e=n?e:Re(e),Qn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ii(e),ho(this,4))}}function jt(t){return Ye(t)?t.value:t}const Fy={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function np(t){return yr(t)?t:new Proxy(t,Fy)}function By(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=$y(t,n);return e}class jy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _y(Re(this._object),this._key)}}function $y(t,e,n){const r=t[e];return Ye(r)?r:new jy(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function zt(t,e,n,r){if(fe(t)){const s=qn(t,e,n,r);return s&&Sf(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){nr(),qn(l,null,10,[t,o,c]),rr();return}}zy(t,n,s,r)}function zy(t,e,n,r=!0){console.error(t)}let oi=!1,gc=!1;const dt=[];let Xt=0;const Yr=[];let Dn=null,pr=0;const rp=Promise.resolve();let dl=null;function fl(t){const e=dl||rp;return t?e.then(this?t.bind(this):t):e}function qy(t){let e=Xt+1,n=dt.length;for(;e<n;){const r=e+n>>>1,s=dt[r],i=ai(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function pl(t){(!dt.length||!dt.includes(t,oi&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?dt.push(t):dt.splice(qy(t.id),0,t),sp())}function sp(){!oi&&!gc&&(gc=!0,dl=rp.then(op))}function Hy(t){const e=dt.indexOf(t);e>Xt&&dt.splice(e,1)}function Wy(t){le(t)?Yr.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?pr+1:pr))&&Yr.push(t),sp()}function ph(t,e,n=oi?Xt+1:0){for(;n<dt.length;n++){const r=dt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;dt.splice(n,1),n--,r()}}}function ip(t){if(Yr.length){const e=[...new Set(Yr)].sort((n,r)=>ai(n)-ai(r));if(Yr.length=0,Dn){Dn.push(...e);return}for(Dn=e,pr=0;pr<Dn.length;pr++){const n=Dn[pr];n.active!==!1&&n()}Dn=null,pr=0}}const ai=t=>t.id==null?1/0:t.id,Ky=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function op(t){gc=!1,oi=!0,dt.sort(Ky);try{for(Xt=0;Xt<dt.length;Xt++){const e=dt[Xt];e&&e.active!==!1&&qn(e,e.i,e.i?15:14)}}finally{Xt=0,dt.length=0,ip(),oi=!1,dl=null,(dt.length||Yr.length)&&op()}}let Ze=null,ea=null;function So(t){const e=Ze;return Ze=t,ea=t&&t.type.__scopeId||null,e}function ap(t){ea=t}function cp(){ea=null}function Ke(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ih(-1);const i=So(e);let o;try{o=t(...s)}finally{So(i),r._d&&Ih(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hC(t,e){if(Ze===null)return t;const n=ia(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Mn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(nr(),zt(l,n,8,[t.el,c,t,e]),rr())}}function lp(t,e){t.shapeFlag&6&&t.component?lp(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ds(t,e){return fe(t)?ft({name:t.name},e,{setup:t}):t}const Ws=t=>!!t.type.__asyncLoader,up=t=>t.type.__isKeepAlive;function Gy(t,e){hp(t,"a",e)}function Qy(t,e){hp(t,"da",e)}function hp(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)up(s.parent.vnode)&&Yy(r,e,n,s),s=s.parent}}function Yy(t,e,n,r){const s=ta(e,t,r,!0);fp(()=>{el(r[e],s)},n)}function ta(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nr();const c=Ti(n),l=zt(e,n,t,o);return c(),rr(),l});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=rt)=>{(!sa||t==="sp")&&ta(t,(...r)=>e(...r),n)},dp=In("bm"),Jy=In("m"),Xy=In("bu"),Zy=In("u"),ev=In("bum"),fp=In("um"),tv=In("sp"),nv=In("rtg"),rv=In("rtc");function sv(t,e=rt){ta("ec",t,e)}const iv="components";function dC(t,e){return av(iv,t,!0,e)||t}const ov=Symbol.for("v-ndc");function av(t,e,n=!0,r=!1){const s=Ze||rt;if(s){const i=s.type;{const c=Xv(i,!1);if(c&&(c===e||c===qt(e)||c===Yo(qt(e))))return i}const o=mh(s[t]||i[t],e)||mh(s.appContext[t],e);return!o&&r?i:o}}function mh(t,e){return t&&(t[e]||t[qt(e)]||t[Yo(qt(e))])}function fC(t,e,n,r){let s;const i=n;if(le(t)||Qe(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function ja(t,e,n={},r,s){if(Ze.isCE||Ze.parent&&Ws(Ze.parent)&&Ze.parent.isCE)return e!=="default"&&(n.name=e),Se("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Ot();const o=i&&pp(i(n)),c=Np(St,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function pp(t){return t.some(e=>Co(e)?!(e.type===Yn||e.type===St&&!pp(e.children)):!0)?t:null}const _c=t=>t?Vp(t)?ia(t):_c(t.parent):null,Ks=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$emit:t=>t.emit,$options:t=>ml(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,pl(t.update)}),$nextTick:t=>t.n||(t.n=fl.bind(t.proxy)),$watch:t=>Ov.bind(t)}),$a=(t,e)=>t!==xe&&!t.__isScriptSetup&&Te(t,e),cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($a(r,e))return o[e]=1,r[e];if(s!==xe&&Te(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Te(h,e))return o[e]=3,i[e];if(n!==xe&&Te(n,e))return o[e]=4,n[e];yc&&(o[e]=0)}}const f=Ks[e];let p,g;if(f)return e==="$attrs"&&Tt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Te(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Te(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $a(s,e)?(s[e]=n,!0):r!==xe&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==xe&&Te(t,o)||$a(e,o)||(c=i[0])&&Te(c,o)||Te(r,o)||Te(Ks,o)||Te(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function lv(t){const e=ml(t),n=t.proxy,r=t.ctx;yc=!1,e.beforeCreate&&_h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:C,activated:N,deactivated:O,beforeDestroy:$,beforeUnmount:B,destroyed:L,unmounted:Q,render:oe,renderTracked:J,renderTriggered:A,errorCaptured:_,serverPrefetch:v,expose:I,inheritAttrs:R,components:b,directives:T,filters:et}=e;if(h&&uv(h,r,null),o)for(const ce in o){const pe=o[ce];fe(pe)&&(r[ce]=pe.bind(n))}if(s){const ce=s.call(n,n);Me(ce)&&(t.data=wi(ce))}if(yc=!0,i)for(const ce in i){const pe=i[ce],It=fe(pe)?pe.bind(n,n):fe(pe.get)?pe.get.bind(n,n):Lt,Ft=!fe(pe)&&fe(pe.set)?pe.set.bind(n):Lt,Nt=xt({get:It,set:Ft});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Le=>Nt.value=Le})}if(c)for(const ce in c)mp(c[ce],r,n,ce);if(l){const ce=fe(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(pe=>{fo(pe,ce[pe])})}f&&_h(f,t,"c");function Ne(ce,pe){le(pe)?pe.forEach(It=>ce(It.bind(n))):pe&&ce(pe.bind(n))}if(Ne(dp,p),Ne(Jy,g),Ne(Xy,E),Ne(Zy,C),Ne(Gy,N),Ne(Qy,O),Ne(sv,_),Ne(rv,J),Ne(nv,A),Ne(ev,B),Ne(fp,Q),Ne(tv,v),le(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(pe=>{Object.defineProperty(ce,pe,{get:()=>n[pe],set:It=>n[pe]=It})})}else t.exposed||(t.exposed={});oe&&t.render===Lt&&(t.render=oe),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),T&&(t.directives=T)}function uv(t,e,n=Lt){le(t)&&(t=vc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Ut(s.from||r,s.default,!0):i=Ut(s.from||r):i=Ut(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _h(t,e,n){zt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mp(t,e,n,r){const s=r.includes(".")?Cp(n,r):()=>n[r];if(Qe(t)){const i=e[t];fe(i)&&Gs(s,i)}else if(fe(t))Gs(s,t.bind(n));else if(Me(t))if(le(t))t.forEach(i=>mp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Gs(s,i,t)}}function ml(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,o,!0)),Po(l,e,o)),Me(e)&&i.set(e,l),l}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(o=>Po(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=hv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const hv={data:yh,props:vh,emits:vh,methods:Fs,computed:Fs,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Fs,directives:Fs,watch:fv,provide:yh,inject:dv};function yh(t,e){return e?t?function(){return ft(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function dv(t,e){return Fs(vc(t),vc(e))}function vc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?ft(Object.create(null),t,e):e}function vh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ft(Object.create(null),gh(t),gh(e??{})):e}function fv(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function gp(){return{app:null,config:{isNativeTag:ry,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pv=0;function mv(t,e){return function(r,s=null){fe(r)||(r=ft({},r)),s!=null&&!Me(s)&&(s=null);const i=gp(),o=new WeakSet;let c=!1;const l=i.app={_uid:pv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eE,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(l,...f)):fe(h)&&(o.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(!c){const g=Se(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,l._container=h,h.__vue_app__=l,ia(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=vr;vr=l;try{return h()}finally{vr=f}}};return l}}let vr=null;function fo(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=rt||Ze;if(r||vr){const s=vr?vr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function gv(){return!!(rt||Ze||vr)}const _p={},yp=()=>Object.create(_p),vp=t=>Object.getPrototypeOf(t)===_p;function _v(t,e,n,r=!1){const s={},i=yp();t.propsDefaults=Object.create(null),Ep(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(na(t.emitsOptions,g))continue;const E=e[g];if(l)if(Te(i,g))E!==i[g]&&(i[g]=E,h=!0);else{const C=qt(g);s[C]=Ec(l,c,C,E,t,!1)}else E!==i[g]&&(i[g]=E,h=!0)}}}else{Ep(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Te(e,p)&&((f=kr(p))===p||!Te(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Ec(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&gn(t.attrs,"set","")}function Ep(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Hs(l))continue;const h=e[l];let f;s&&Te(s,f=qt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:na(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Re(n),h=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Ec(s,l,p,h[p],t,!Te(h,p))}}return o}function Ec(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Te(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ti(s);r=h[n]=l.call(null,e),f()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===kr(n))&&(r=!0))}return r}const vv=new WeakMap;function wp(t,e,n=!1){const r=n?vv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[g,E]=wp(p,e,!0);ft(o,g),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Me(t)&&r.set(t,Gr),Gr;if(le(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);Eh(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=qt(f);if(Eh(p)){const g=i[f],E=o[p]=le(g)||fe(g)?{type:g}:ft({},g),C=E.type;let N=!1,O=!0;if(le(C))for(let $=0;$<C.length;++$){const B=C[$],L=fe(B)&&B.name;if(L==="Boolean"){N=!0;break}else L==="String"&&(O=!1)}else N=fe(C)&&C.name==="Boolean";E[0]=N,E[1]=O,(N||Te(E,"default"))&&c.push(p)}}const h=[o,c];return Me(t)&&r.set(t,h),h}function Eh(t){return t[0]!=="$"&&!Hs(t)}const Tp=t=>t[0]==="_"||t==="$stable",gl=t=>le(t)?t.map(Jt):[Jt(t)],Ev=(t,e,n)=>{if(e._n)return e;const r=Ke((...s)=>gl(e(...s)),n);return r._c=!1,r},Ip=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tp(s))continue;const i=t[s];if(fe(i))e[s]=Ev(s,i,r);else if(i!=null){const o=gl(i);e[s]=()=>o}}},Ap=(t,e)=>{const n=gl(e);t.slots.default=()=>n},Rp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},wv=(t,e,n)=>{const r=t.slots=yp();if(t.vnode.shapeFlag&32){const s=e._;s?(Rp(r,e,n),n&&kf(r,"_",s,!0)):Ip(e,r)}else e&&Ap(t,e)},Tv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Rp(s,e,n):(i=!e.$stable,Ip(e,s)),o=e}else e&&(Ap(t,e),o={default:1});if(i)for(const c in s)!Tp(c)&&o[c]==null&&delete s[c]};function wc(t,e,n,r,s=!1){if(le(t)){t.forEach((g,E)=>wc(g,e&&(le(e)?e[E]:e),n,r,s));return}if(Ws(r)&&!s)return;const i=r.shapeFlag&4?ia(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(Qe(h)?(f[h]=null,Te(p,h)&&(p[h]=null)):Ye(h)&&(h.value=null)),fe(l))qn(l,c,12,[o,f]);else{const g=Qe(l),E=Ye(l);if(g||E){const C=()=>{if(t.f){const N=g?Te(p,l)?p[l]:f[l]:l.value;s?le(N)&&el(N,i):le(N)?N.includes(i)||N.push(i):g?(f[l]=[i],Te(p,l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else g?(f[l]=o,Te(p,l)&&(p[l]=o)):E&&(l.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,wt(C,n)):C()}}}const Iv=Symbol("_vte"),Av=t=>t.__isTeleport,wt=Fv;function Rv(t){return bv(t)}function bv(t,e){const n=Of();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=Lt,insertStaticContent:C}=t,N=(y,w,P,M=null,D=null,j=null,W=void 0,z=null,H=!!w.dynamicChildren)=>{if(y===w)return;y&&!Ds(y,w)&&(M=V(y),Le(y,D,j,!0),y=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:F,ref:G,shapeFlag:re}=w;switch(F){case ra:O(y,w,P,M);break;case Yn:$(y,w,P,M);break;case Ha:y==null&&B(w,P,M,W);break;case St:b(y,w,P,M,D,j,W,z,H);break;default:re&1?oe(y,w,P,M,D,j,W,z,H):re&6?T(y,w,P,M,D,j,W,z,H):(re&64||re&128)&&F.process(y,w,P,M,D,j,W,z,H,Z)}G!=null&&D&&wc(G,y&&y.ref,j,w||y,!w)},O=(y,w,P,M)=>{if(y==null)r(w.el=c(w.children),P,M);else{const D=w.el=y.el;w.children!==y.children&&h(D,w.children)}},$=(y,w,P,M)=>{y==null?r(w.el=l(w.children||""),P,M):w.el=y.el},B=(y,w,P,M)=>{[y.el,y.anchor]=C(y.children,w,P,M,y.el,y.anchor)},L=({el:y,anchor:w},P,M)=>{let D;for(;y&&y!==w;)D=g(y),r(y,P,M),y=D;r(w,P,M)},Q=({el:y,anchor:w})=>{let P;for(;y&&y!==w;)P=g(y),s(y),y=P;s(w)},oe=(y,w,P,M,D,j,W,z,H)=>{w.type==="svg"?W="svg":w.type==="math"&&(W="mathml"),y==null?J(w,P,M,D,j,W,z,H):v(y,w,D,j,W,z,H)},J=(y,w,P,M,D,j,W,z)=>{let H,F;const{props:G,shapeFlag:re,transition:ne,dirs:te}=y;if(H=y.el=o(y.type,j,G&&G.is,G),re&8?f(H,y.children):re&16&&_(y.children,H,null,M,D,za(y,j),W,z),te&&hr(y,null,M,"created"),A(H,y,y.scopeId,W,M),G){for(const be in G)be!=="value"&&!Hs(be)&&i(H,be,null,G[be],j,M);"value"in G&&i(H,"value",null,G.value,j),(F=G.onVnodeBeforeMount)&&Yt(F,M,y)}te&&hr(y,null,M,"beforeMount");const ie=Sv(D,ne);ie&&ne.beforeEnter(H),r(H,w,P),((F=G&&G.onVnodeMounted)||ie||te)&&wt(()=>{F&&Yt(F,M,y),ie&&ne.enter(H),te&&hr(y,null,M,"mounted")},D)},A=(y,w,P,M,D)=>{if(P&&E(y,P),M)for(let j=0;j<M.length;j++)E(y,M[j]);if(D){let j=D.subTree;if(w===j){const W=D.vnode;A(y,W,W.scopeId,W.slotScopeIds,D.parent)}}},_=(y,w,P,M,D,j,W,z,H=0)=>{for(let F=H;F<y.length;F++){const G=y[F]=z?Vn(y[F]):Jt(y[F]);N(null,G,w,P,M,D,j,W,z)}},v=(y,w,P,M,D,j,W)=>{const z=w.el=y.el;let{patchFlag:H,dynamicChildren:F,dirs:G}=w;H|=y.patchFlag&16;const re=y.props||xe,ne=w.props||xe;let te;if(P&&dr(P,!1),(te=ne.onVnodeBeforeUpdate)&&Yt(te,P,w,y),G&&hr(w,y,P,"beforeUpdate"),P&&dr(P,!0),(re.innerHTML&&ne.innerHTML==null||re.textContent&&ne.textContent==null)&&f(z,""),F?I(y.dynamicChildren,F,z,P,M,za(w,D),j):W||pe(y,w,z,null,P,M,za(w,D),j,!1),H>0){if(H&16)R(z,re,ne,P,D);else if(H&2&&re.class!==ne.class&&i(z,"class",null,ne.class,D),H&4&&i(z,"style",re.style,ne.style,D),H&8){const ie=w.dynamicProps;for(let be=0;be<ie.length;be++){const we=ie[be],ze=re[we],At=ne[we];(At!==ze||we==="value")&&i(z,we,ze,At,D,P)}}H&1&&y.children!==w.children&&f(z,w.children)}else!W&&F==null&&R(z,re,ne,P,D);((te=ne.onVnodeUpdated)||G)&&wt(()=>{te&&Yt(te,P,w,y),G&&hr(w,y,P,"updated")},M)},I=(y,w,P,M,D,j,W)=>{for(let z=0;z<w.length;z++){const H=y[z],F=w[z],G=H.el&&(H.type===St||!Ds(H,F)||H.shapeFlag&70)?p(H.el):P;N(H,F,G,null,M,D,j,W,!0)}},R=(y,w,P,M,D)=>{if(w!==P){if(w!==xe)for(const j in w)!Hs(j)&&!(j in P)&&i(y,j,w[j],null,D,M);for(const j in P){if(Hs(j))continue;const W=P[j],z=w[j];W!==z&&j!=="value"&&i(y,j,z,W,D,M)}"value"in P&&i(y,"value",w.value,P.value,D)}},b=(y,w,P,M,D,j,W,z,H)=>{const F=w.el=y?y.el:c(""),G=w.anchor=y?y.anchor:c("");let{patchFlag:re,dynamicChildren:ne,slotScopeIds:te}=w;te&&(z=z?z.concat(te):te),y==null?(r(F,P,M),r(G,P,M),_(w.children||[],P,G,D,j,W,z,H)):re>0&&re&64&&ne&&y.dynamicChildren?(I(y.dynamicChildren,ne,P,D,j,W,z),(w.key!=null||D&&w===D.subTree)&&bp(y,w,!0)):pe(y,w,P,G,D,j,W,z,H)},T=(y,w,P,M,D,j,W,z,H)=>{w.slotScopeIds=z,y==null?w.shapeFlag&512?D.ctx.activate(w,P,M,W,H):et(w,P,M,D,j,W,H):vt(y,w,H)},et=(y,w,P,M,D,j,W)=>{const z=y.component=Kv(y,M,D);if(up(y)&&(z.ctx.renderer=Z),Gv(z,!1,W),z.asyncDep){if(D&&D.registerDep(z,Ne,W),!y.el){const H=z.subTree=Se(Yn);$(null,H,w,P)}}else Ne(z,y,w,P,D,j,W)},vt=(y,w,P)=>{const M=w.component=y.component;if(Mv(y,w,P))if(M.asyncDep&&!M.asyncResolved){ce(M,w,P);return}else M.next=w,Hy(M.update),M.effect.dirty=!0,M.update();else w.el=y.el,M.vnode=w},Ne=(y,w,P,M,D,j,W)=>{const z=()=>{if(y.isMounted){let{next:G,bu:re,u:ne,parent:te,vnode:ie}=y;{const Dt=Sp(y);if(Dt){G&&(G.el=ie.el,ce(y,G,W)),Dt.asyncDep.then(()=>{y.isUnmounted||z()});return}}let be=G,we;dr(y,!1),G?(G.el=ie.el,ce(y,G,W)):G=ie,re&&uo(re),(we=G.props&&G.props.onVnodeBeforeUpdate)&&Yt(we,te,G,ie),dr(y,!0);const ze=qa(y),At=y.subTree;y.subTree=ze,N(At,ze,p(At.el),V(At),y,D,j),G.el=ze.el,be===null&&Lv(y,ze.el),ne&&wt(ne,D),(we=G.props&&G.props.onVnodeUpdated)&&wt(()=>Yt(we,te,G,ie),D)}else{let G;const{el:re,props:ne}=w,{bm:te,m:ie,parent:be}=y,we=Ws(w);if(dr(y,!1),te&&uo(te),!we&&(G=ne&&ne.onVnodeBeforeMount)&&Yt(G,be,w),dr(y,!0),re&&Ce){const ze=()=>{y.subTree=qa(y),Ce(re,y.subTree,y,D,null)};we?w.type.__asyncLoader().then(()=>!y.isUnmounted&&ze()):ze()}else{const ze=y.subTree=qa(y);N(null,ze,P,M,y,D,j),w.el=ze.el}if(ie&&wt(ie,D),!we&&(G=ne&&ne.onVnodeMounted)){const ze=w;wt(()=>Yt(G,be,ze),D)}(w.shapeFlag&256||be&&Ws(be.vnode)&&be.vnode.shapeFlag&256)&&y.a&&wt(y.a,D),y.isMounted=!0,w=P=M=null}},H=y.effect=new sl(z,Lt,()=>pl(F),y.scope),F=y.update=()=>{H.dirty&&H.run()};F.i=y,F.id=y.uid,dr(y,!0),F()},ce=(y,w,P)=>{w.component=y;const M=y.vnode.props;y.vnode=w,y.next=null,yv(y,w.props,M,P),Tv(y,w.children,P),nr(),ph(y),rr()},pe=(y,w,P,M,D,j,W,z,H=!1)=>{const F=y&&y.children,G=y?y.shapeFlag:0,re=w.children,{patchFlag:ne,shapeFlag:te}=w;if(ne>0){if(ne&128){Ft(F,re,P,M,D,j,W,z,H);return}else if(ne&256){It(F,re,P,M,D,j,W,z,H);return}}te&8?(G&16&&Et(F,D,j),re!==F&&f(P,re)):G&16?te&16?Ft(F,re,P,M,D,j,W,z,H):Et(F,D,j,!0):(G&8&&f(P,""),te&16&&_(re,P,M,D,j,W,z,H))},It=(y,w,P,M,D,j,W,z,H)=>{y=y||Gr,w=w||Gr;const F=y.length,G=w.length,re=Math.min(F,G);let ne;for(ne=0;ne<re;ne++){const te=w[ne]=H?Vn(w[ne]):Jt(w[ne]);N(y[ne],te,P,null,D,j,W,z,H)}F>G?Et(y,D,j,!0,!1,re):_(w,P,M,D,j,W,z,H,re)},Ft=(y,w,P,M,D,j,W,z,H)=>{let F=0;const G=w.length;let re=y.length-1,ne=G-1;for(;F<=re&&F<=ne;){const te=y[F],ie=w[F]=H?Vn(w[F]):Jt(w[F]);if(Ds(te,ie))N(te,ie,P,null,D,j,W,z,H);else break;F++}for(;F<=re&&F<=ne;){const te=y[re],ie=w[ne]=H?Vn(w[ne]):Jt(w[ne]);if(Ds(te,ie))N(te,ie,P,null,D,j,W,z,H);else break;re--,ne--}if(F>re){if(F<=ne){const te=ne+1,ie=te<G?w[te].el:M;for(;F<=ne;)N(null,w[F]=H?Vn(w[F]):Jt(w[F]),P,ie,D,j,W,z,H),F++}}else if(F>ne)for(;F<=re;)Le(y[F],D,j,!0),F++;else{const te=F,ie=F,be=new Map;for(F=ie;F<=ne;F++){const mt=w[F]=H?Vn(w[F]):Jt(w[F]);mt.key!=null&&be.set(mt.key,F)}let we,ze=0;const At=ne-ie+1;let Dt=!1,vs=0;const Rn=new Array(At);for(F=0;F<At;F++)Rn[F]=0;for(F=te;F<=re;F++){const mt=y[F];if(ze>=At){Le(mt,D,j,!0);continue}let Vt;if(mt.key!=null)Vt=be.get(mt.key);else for(we=ie;we<=ne;we++)if(Rn[we-ie]===0&&Ds(mt,w[we])){Vt=we;break}Vt===void 0?Le(mt,D,j,!0):(Rn[Vt-ie]=F+1,Vt>=vs?vs=Vt:Dt=!0,N(mt,w[Vt],P,null,D,j,W,z,H),ze++)}const xr=Dt?Pv(Rn):Gr;for(we=xr.length-1,F=At-1;F>=0;F--){const mt=ie+F,Vt=w[mt],Mr=mt+1<G?w[mt+1].el:M;Rn[F]===0?N(null,Vt,P,Mr,D,j,W,z,H):Dt&&(we<0||F!==xr[we]?Nt(Vt,P,Mr,2):we--)}}},Nt=(y,w,P,M,D=null)=>{const{el:j,type:W,transition:z,children:H,shapeFlag:F}=y;if(F&6){Nt(y.component.subTree,w,P,M);return}if(F&128){y.suspense.move(w,P,M);return}if(F&64){W.move(y,w,P,Z);return}if(W===St){r(j,w,P);for(let re=0;re<H.length;re++)Nt(H[re],w,P,M);r(y.anchor,w,P);return}if(W===Ha){L(y,w,P);return}if(M!==2&&F&1&&z)if(M===0)z.beforeEnter(j),r(j,w,P),wt(()=>z.enter(j),D);else{const{leave:re,delayLeave:ne,afterLeave:te}=z,ie=()=>r(j,w,P),be=()=>{re(j,()=>{ie(),te&&te()})};ne?ne(j,ie,be):be()}else r(j,w,P)},Le=(y,w,P,M=!1,D=!1)=>{const{type:j,props:W,ref:z,children:H,dynamicChildren:F,shapeFlag:G,patchFlag:re,dirs:ne,cacheIndex:te}=y;if(re===-2&&(D=!1),z!=null&&wc(z,null,P,y,!0),te!=null&&(w.renderCache[te]=void 0),G&256){w.ctx.deactivate(y);return}const ie=G&1&&ne,be=!Ws(y);let we;if(be&&(we=W&&W.onVnodeBeforeUnmount)&&Yt(we,w,y),G&6)Qt(y.component,P,M);else{if(G&128){y.suspense.unmount(P,M);return}ie&&hr(y,null,w,"beforeUnmount"),G&64?y.type.remove(y,w,P,Z,M):F&&!F.hasOnce&&(j!==St||re>0&&re&64)?Et(F,w,P,!1,!0):(j===St&&re&384||!D&&G&16)&&Et(H,w,P),M&&Ue(y)}(be&&(we=W&&W.onVnodeUnmounted)||ie)&&wt(()=>{we&&Yt(we,w,y),ie&&hr(y,null,w,"unmounted")},P)},Ue=y=>{const{type:w,el:P,anchor:M,transition:D}=y;if(w===St){An(P,M);return}if(w===Ha){Q(y);return}const j=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:z}=D,H=()=>W(P,j);z?z(y.el,j,H):H()}else j()},An=(y,w)=>{let P;for(;y!==w;)P=g(y),s(y),y=P;s(w)},Qt=(y,w,P)=>{const{bum:M,scope:D,update:j,subTree:W,um:z,m:H,a:F}=y;wh(H),wh(F),M&&uo(M),D.stop(),j&&(j.active=!1,Le(W,y,w,P)),z&&wt(z,w),wt(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Et=(y,w,P,M=!1,D=!1,j=0)=>{for(let W=j;W<y.length;W++)Le(y[W],w,P,M,D)},V=y=>{if(y.shapeFlag&6)return V(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=g(y.anchor||y.el),P=w&&w[Iv];return P?g(P):w};let Y=!1;const K=(y,w,P)=>{y==null?w._vnode&&Le(w._vnode,null,null,!0):N(w._vnode||null,y,w,null,null,null,P),w._vnode=y,Y||(Y=!0,ph(),ip(),Y=!1)},Z={p:N,um:Le,m:Nt,r:Ue,mt:et,mc:_,pc:pe,pbc:I,n:V,o:t};let ve,Ce;return{render:K,hydrate:ve,createApp:mv(K,ve)}}function za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function dr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bp(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Vn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&bp(o,c)),c.type===ra&&(c.el=o.el)}}function Pv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Sp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sp(e)}function wh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Cv=Symbol.for("v-scx"),kv=()=>Ut(Cv),to={};function Gs(t,e,n){return Pp(t,e,n)}function Pp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=xe){if(e&&i){const J=e;e=(...A)=>{J(...A),oe()}}const l=rt,h=J=>r===!0?J:Mn(J,r===!1?1:void 0);let f,p=!1,g=!1;if(Ye(t)?(f=()=>t.value,p=ts(t)):yr(t)?(f=()=>h(t),p=!0):le(t)?(g=!0,p=t.some(J=>yr(J)||ts(J)),f=()=>t.map(J=>{if(Ye(J))return J.value;if(yr(J))return h(J);if(fe(J))return qn(J,l,2)})):fe(t)?e?f=()=>qn(t,l,2):f=()=>(E&&E(),zt(t,l,3,[C])):f=Lt,e&&r){const J=f;f=()=>Mn(J())}let E,C=J=>{E=L.onStop=()=>{qn(J,l,4),E=L.onStop=void 0}},N;if(sa)if(C=Lt,e?n&&zt(e,l,3,[f(),g?[]:void 0,C]):f(),s==="sync"){const J=kv();N=J.__watcherHandles||(J.__watcherHandles=[])}else return Lt;let O=g?new Array(t.length).fill(to):to;const $=()=>{if(!(!L.active||!L.dirty))if(e){const J=L.run();(r||p||(g?J.some((A,_)=>Qn(A,O[_])):Qn(J,O)))&&(E&&E(),zt(e,l,3,[J,O===to?void 0:g&&O[0]===to?[]:O,C]),O=J)}else L.run()};$.allowRecurse=!!e;let B;s==="sync"?B=$:s==="post"?B=()=>wt($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),B=()=>pl($));const L=new sl(f,Lt,B),Q=Uf(),oe=()=>{L.stop(),Q&&el(Q.effects,L)};return e?n?$():O=L.run():s==="post"?wt(L.run.bind(L),l&&l.suspense):L.run(),N&&N.push(oe),oe}function Ov(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?Cp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ti(this),c=Pp(s,i.bind(r),n);return o(),c}function Cp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Mn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))Mn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Mn(t[r],e,n);else if(bf(t)||Qr(t))t.forEach(r=>{Mn(r,e,n)});else if(Cf(t)){for(const r in t)Mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Mn(t[r],e,n)}return t}const Nv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${kr(e)}Modifiers`];function Dv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&Nv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Qe(f)?f.trim():f)),o.number&&(s=n.map(dc)));let c,l=r[c=Fa(e)]||r[c=Fa(qt(e))];!l&&i&&(l=r[c=Fa(kr(e))]),l&&zt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,zt(h,t,6,s)}}function kp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const f=kp(h,e,!0);f&&(c=!0,ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Me(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):ft(o,i),Me(t)&&r.set(t,o),o)}function na(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,kr(e))||Te(t,e))}function qa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:E,ctx:C,inheritAttrs:N}=t,O=So(t);let $,B;try{if(n.shapeFlag&4){const Q=s||r,oe=Q;$=Jt(h.call(oe,Q,f,p,E,g,C)),B=c}else{const Q=e;$=Jt(Q.length>1?Q(p,{attrs:c,slots:o,emit:l}):Q(p,null)),B=e.props?c:Vv(c)}}catch(Q){Qs.length=0,Zo(Q,t,1),$=Se(Yn)}let L=$;if(B&&N!==!1){const Q=Object.keys(B),{shapeFlag:oe}=L;Q.length&&oe&7&&(i&&Q.some(Zc)&&(B=xv(B,i)),L=ns(L,B,!1,!0))}return n.dirs&&(L=ns(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),$=L,So(O),$}const Vv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},xv=(t,e)=>{const n={};for(const r in t)(!Zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Mv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Th(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!na(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Th(r,o,h):!0:!!o;return!1}function Th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!na(n,i))return!0}return!1}function Lv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Uv=t=>t.__isSuspense;function Fv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Wy(t)}const St=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Qs=[];let Pt=null;function Ot(t=!1){Qs.push(Pt=t?null:[])}function Bv(){Qs.pop(),Pt=Qs[Qs.length-1]||null}let ci=1;function Ih(t){ci+=t,t<0&&Pt&&(Pt.hasOnce=!0)}function Op(t){return t.dynamicChildren=ci>0?Pt||Gr:null,Bv(),ci>0&&Pt&&Pt.push(t),t}function Ht(t,e,n,r,s,i){return Op(ge(t,e,n,r,s,i,!0))}function Np(t,e,n,r,s){return Op(Se(t,e,n,r,s,!0))}function Co(t){return t?t.__v_isVNode===!0:!1}function Ds(t,e){return t.type===e.type&&t.key===e.key}const Dp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Ye(t)||fe(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function ge(t,e=null,n=null,r=0,s=null,i=t===St?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dp(e),ref:e&&po(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return c?(_l(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),ci>0&&!o&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const Se=jv;function jv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ov)&&(t=Yn),Co(t)){const c=ns(t,e,!0);return n&&_l(c,n),ci>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(Zv(t)&&(t=t.__vccOpts),e){e=$v(e);let{class:c,style:l}=e;c&&!Qe(c)&&(e.class=rl(c)),Me(l)&&(Xf(l)&&!le(l)&&(l=ft({},l)),e.style=nl(l))}const o=Qe(t)?1:Uv(t)?128:Av(t)?64:Me(t)?4:fe(t)?2:0;return ge(t,e,n,r,s,o,i,!0)}function $v(t){return t?Xf(t)||vp(t)?ft({},t):t:null}function ns(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?qv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Dp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&lp(f,l.clone(f)),f}function _e(t=" ",e=0){return Se(ra,null,t,e)}function zv(t="",e=!1){return e?(Ot(),Np(Yn,null,t)):Se(Yn,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Se(Yn):le(t)?Se(St,null,t.slice()):typeof t=="object"?Vn(t):Se(ra,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function _l(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_l(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!vp(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[_e(e)]):n=8);t.children=e,t.shapeFlag|=n}function qv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rl([e.class,r.class]));else if(s==="style")e.style=nl([e.style,r.style]);else if(Ko(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){zt(t,e,7,[n,r])}const Hv=gp();let Wv=0;function Kv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Hv,i={uid:Wv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(r,s),emitsOptions:kp(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Dv.bind(null,i),t.ce&&t.ce(i),i}let rt=null,ko,Tc;{const t=Of(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),Tc=e("__VUE_SSR_SETTERS__",n=>sa=n)}const Ti=t=>{const e=rt;return ko(t),t.scope.on(),()=>{t.scope.off(),ko(e)}},Ah=()=>{rt&&rt.scope.off(),ko(null)};function Vp(t){return t.vnode.shapeFlag&4}let sa=!1;function Gv(t,e=!1,n=!1){e&&Tc(e);const{props:r,children:s}=t.vnode,i=Vp(t);_v(t,r,i,e),wv(t,s,n);const o=i?Qv(t,e):void 0;return e&&Tc(!1),o}function Qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Jv(t):null,i=Ti(t);nr();const o=qn(r,t,0,[t.props,s]);if(rr(),i(),Sf(o)){if(o.then(Ah,Ah),e)return o.then(c=>{Rh(t,c,e)}).catch(c=>{Zo(c,t,0)});t.asyncDep=o}else Rh(t,o,e)}else xp(t,e)}function Rh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=np(e)),xp(t,n)}let bh;function xp(t,e,n){const r=t.type;if(!t.render){if(!e&&bh&&!r.render){const s=r.template||ml(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=ft(ft({isCustomElement:i,delimiters:c},o),l);r.render=bh(s,h)}}t.render=r.render||Lt}{const s=Ti(t);nr();try{lv(t)}finally{rr(),s()}}}const Yv={get(t,e){return Tt(t,"get",""),t[e]}};function Jv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yv),slots:t.slots,emit:t.emit,expose:e}}function ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(np(ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}})):t.proxy}function Xv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Zv(t){return fe(t)&&"__vccOpts"in t}const xt=(t,e)=>My(t,e,sa);function Mp(t,e,n){const r=arguments.length;return r===2?Me(e)&&!le(e)?Co(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Co(n)&&(n=[n]),Se(t,e,n))}const eE="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const tE="http://www.w3.org/2000/svg",nE="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Sh=dn&&dn.createElement("template"),rE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dn.createElementNS(tE,t):e==="mathml"?dn.createElementNS(nE,t):n?dn.createElement(t,{is:n}):dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Sh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Sh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sE=Symbol("_vtc");function iE(t,e,n){const r=t[sE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ph=Symbol("_vod"),oE=Symbol("_vsh"),aE=Symbol(""),cE=/(^|;)\s*display\s*:/;function lE(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&mo(r,c,"")}else for(const o in e)n[o]==null&&mo(r,o,"");for(const o in n)o==="display"&&(i=!0),mo(r,o,n[o])}else if(s){if(e!==n){const o=r[aE];o&&(n+=";"+o),r.cssText=n,i=cE.test(n)}}else e&&t.removeAttribute("style");Ph in t&&(t[Ph]=i?r.display:"",t[oE]&&(r.display="none"))}const Ch=/\s*!important$/;function mo(t,e,n){if(le(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uE(t,e);Ch.test(n)?t.setProperty(kr(r),n.replace(Ch,""),"important"):t[r]=n}}const kh=["Webkit","Moz","ms"],Wa={};function uE(t,e){const n=Wa[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Wa[e]=r;r=Yo(r);for(let s=0;s<kh.length;s++){const i=kh[s]+r;if(i in t)return Wa[e]=i}return e}const Oh="http://www.w3.org/1999/xlink";function Nh(t,e,n,r,s,i=fy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Oh,e.slice(6,e.length)):t.setAttributeNS(Oh,e,n):n==null||i&&!Nf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tr(n)?String(n):n)}function hE(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Nf(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function $r(t,e,n,r){t.addEventListener(e,n,r)}function dE(t,e,n,r){t.removeEventListener(e,n,r)}const Dh=Symbol("_vei");function fE(t,e,n,r,s=null){const i=t[Dh]||(t[Dh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=pE(e);if(r){const h=i[e]=_E(r,s);$r(t,c,h,l)}else o&&(dE(t,c,o,l),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function pE(t){let e;if(Vh.test(t)){e={};let r;for(;r=t.match(Vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kr(t.slice(2)),e]}let Ka=0;const mE=Promise.resolve(),gE=()=>Ka||(mE.then(()=>Ka=0),Ka=Date.now());function _E(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(yE(r,n.value),e,5,[r])};return n.value=t,n.attached=gE(),n}function yE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?iE(t,r,o):e==="style"?lE(t,n,r):Ko(e)?Zc(e)||fE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):EE(t,e,r,o))?(hE(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nh(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nh(t,e,r,o))};function EE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(e)&&Qe(n)?!1:e in t}const Mh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>uo(e,n):e};function wE(t){t.target.composing=!0}function Lh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ga=Symbol("_assign"),pC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ga]=Mh(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=dc(c)),t[Ga](c)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",wE),$r(t,"compositionend",Lh),$r(t,"change",Lh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ga]=Mh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?dc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},TE=["ctrl","shift","alt","meta"],IE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TE.some(n=>t[`${n}Key`]&&!e.includes(n))},mC=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=IE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},AE=ft({patchProp:vE},rE);let Uh;function RE(){return Uh||(Uh=Rv(AE))}const bE=(...t)=>{const e=RE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=PE(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,SE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function SE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function PE(t){return Qe(t)?document.querySelector(t):t}var CE=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Lp;const oa=t=>Lp=t,Up=Symbol();function Ic(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ys;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ys||(Ys={}));function kE(){const t=Lf(!0),e=t.run(()=>Xo({}));let n=[],r=[];const s=ul({install(i){oa(s),s._a=i,i.provide(Up,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!CE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Fp=()=>{};function Fh(t,e,n,r=Fp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Uf()&&my(s),s}function jr(t,...e){t.slice().forEach(n=>{n(...e)})}const OE=t=>t(),Bh=Symbol(),Qa=Symbol();function Ac(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ic(s)&&Ic(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!yr(r)?t[n]=Ac(s,r):t[n]=r}return t}const NE=Symbol();function DE(t){return!Ic(t)||!t.hasOwnProperty(NE)}const{assign:Nn}=Object;function VE(t){return!!(Ye(t)&&t.effect)}function xE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=By(n.state.value[t]);return Nn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=ul(xt(()=>{oa(n);const E=n._s.get(t);return o[g].call(E,E)})),p),{}))}return l=Bp(t,h,e,n,r,!0),l}function Bp(t,e,n={},r,s,i){let o;const c=Nn({actions:{}},n),l={deep:!0};let h,f,p=[],g=[],E;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),Xo({});let N;function O(_){let v;h=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:Ys.patchFunction,storeId:t,events:E}):(Ac(r.state.value[t],_),v={type:Ys.patchObject,payload:_,storeId:t,events:E});const I=N=Symbol();fl().then(()=>{N===I&&(h=!0)}),f=!0,jr(p,v,r.state.value[t])}const $=i?function(){const{state:v}=n,I=v?v():{};this.$patch(R=>{Nn(R,I)})}:Fp;function B(){o.stop(),p=[],g=[],r._s.delete(t)}const L=(_,v="")=>{if(Bh in _)return _[Qa]=v,_;const I=function(){oa(r);const R=Array.from(arguments),b=[],T=[];function et(ce){b.push(ce)}function vt(ce){T.push(ce)}jr(g,{args:R,name:I[Qa],store:oe,after:et,onError:vt});let Ne;try{Ne=_.apply(this&&this.$id===t?this:oe,R)}catch(ce){throw jr(T,ce),ce}return Ne instanceof Promise?Ne.then(ce=>(jr(b,ce),ce)).catch(ce=>(jr(T,ce),Promise.reject(ce))):(jr(b,Ne),Ne)};return I[Bh]=!0,I[Qa]=v,I},Q={_p:r,$id:t,$onAction:Fh.bind(null,g),$patch:O,$reset:$,$subscribe(_,v={}){const I=Fh(p,_,v.detached,()=>R()),R=o.run(()=>Gs(()=>r.state.value[t],b=>{(v.flush==="sync"?f:h)&&_({storeId:t,type:Ys.direct,events:E},b)},Nn({},l,v)));return I},$dispose:B},oe=wi(Q);r._s.set(t,oe);const A=(r._a&&r._a.runWithContext||OE)(()=>r._e.run(()=>(o=Lf()).run(()=>e({action:L}))));for(const _ in A){const v=A[_];if(Ye(v)&&!VE(v)||yr(v))i||(C&&DE(v)&&(Ye(v)?v.value=C[_]:Ac(v,C[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const I=L(v,_);A[_]=I,c.actions[_]=v}}return Nn(oe,A),Nn(Re(oe),A),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:_=>{O(v=>{Nn(v,_)})}}),r._p.forEach(_=>{Nn(oe,o.run(()=>_({store:oe,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(oe.$state,C),h=!0,f=!0,oe}function ME(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,l){const h=gv();return c=c||(h?Ut(Up,null):null),c&&oa(c),c=Lp,c._s.has(r)||(i?Bp(r,e,s,c):xE(r,s,c)),c._s.get(r)}return o.$id=r,o}const LE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof document<"u";function UE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Ya(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const Js=()=>{},Wt=Array.isArray,jp=/#/g,FE=/&/g,BE=/\//g,jE=/=/g,$E=/\?/g,$p=/\+/g,zE=/%5B/g,qE=/%5D/g,zp=/%5E/g,HE=/%60/g,qp=/%7B/g,WE=/%7C/g,Hp=/%7D/g,KE=/%20/g;function yl(t){return encodeURI(""+t).replace(WE,"|").replace(zE,"[").replace(qE,"]")}function GE(t){return yl(t).replace(qp,"{").replace(Hp,"}").replace(zp,"^")}function Rc(t){return yl(t).replace($p,"%2B").replace(KE,"+").replace(jp,"%23").replace(FE,"%26").replace(HE,"`").replace(qp,"{").replace(Hp,"}").replace(zp,"^")}function QE(t){return Rc(t).replace(jE,"%3D")}function YE(t){return yl(t).replace(jp,"%23").replace($E,"%3F")}function JE(t){return t==null?"":YE(t).replace(BE,"%2F")}function li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const XE=/\/$/,ZE=t=>t.replace(XE,"");function Ja(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=rw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:li(o)}}function ew(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&rs(e.matched[r],n.matched[s])&&Wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nw(t[n],e[n]))return!1;return!0}function nw(t,e){return Wt(t)?$h(t,e):Wt(e)?$h(e,t):t===e}function $h(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function sw(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZE(t)}const iw=/^[^#]+#/;function ow(t,e){return t.replace(iw,"#")+e}function aw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const aa=()=>({left:window.scrollX,top:window.scrollY});function cw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zh(t,e){return(history.state?history.state.position-e:-1)+t}const bc=new Map;function lw(t,e){bc.set(t,e)}function uw(t){const e=bc.get(t);return bc.delete(t),e}let hw=()=>location.protocol+"//"+location.host;function Kp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),jh(l,"")}return jh(n,t)+r+s}function dw(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const E=Kp(t,location),C=n.value,N=e.value;let O=0;if(g){if(n.value=E,e.value=g,o&&o===C){o=null;return}O=N?g.position-N.position:0}else r(E);s.forEach($=>{$(n.value,C,{delta:O,type:ui.pop,direction:O?O>0?Xs.forward:Xs.back:Xs.unknown})})};function l(){o=n.value}function h(g){s.push(g);const E=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(E),E}function f(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:aa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function qh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?aa():null}}function fw(t){const{history:e,location:n}=window,r={value:Kp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:hw()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(E){console.error(E),n[f?"replace":"assign"](g)}}function o(l,h){const f=Pe({},e.state,qh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Pe({},s.value,e.state,{forward:l,scroll:aa()});i(f.current,f,!0);const p=Pe({},qh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function pw(t){t=sw(t);const e=fw(t),n=dw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:ow.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mw(t){return typeof t=="string"||t&&typeof t=="object"}function Gp(t){return typeof t=="string"||typeof t=="symbol"}const Qp=Symbol("");var Hh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hh||(Hh={}));function ss(t,e){return Pe(new Error,{type:t,[Qp]:!0},e)}function hn(t,e){return t instanceof Error&&Qp in t&&(e==null||!!(t.type&e))}const Wh="[^/]+?",gw={sensitive:!1,strict:!1,start:!0,end:!0},_w=/[.+*?^${}()[\]/\\]/g;function yw(t,e){const n=Pe({},gw,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(_w,"\\$&"),E+=40;else if(g.type===1){const{value:C,repeatable:N,optional:O,regexp:$}=g;i.push({name:C,repeatable:N,optional:O});const B=$||Wh;if(B!==Wh){E+=10;try{new RegExp(`(${B})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+Q.message)}}let L=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(L=O&&h.length<2?`(?:/${L})`:"/"+L),O&&(L+="?"),s+=L,E+=20,O&&(E+=-8),N&&(E+=-20),B===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const E=f[g]||"",C=i[g-1];p[C.name]=E&&C.repeatable?E.split("/"):E}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of g)if(E.type===0)f+=E.value;else if(E.type===1){const{value:C,repeatable:N,optional:O}=E,$=C in h?h[C]:"";if(Wt($)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=Wt($)?$.join("/"):$;if(!B)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function vw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Kh(r))return 1;if(Kh(s))return-1}return s.length-r.length}function Kh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ew={type:0,value:""},ww=/[a-zA-Z0-9_]/;function Tw(t){if(!t)return[[]];if(t==="/")return[[Ew]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:ww.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function Iw(t,e,n){const r=yw(Tw(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Aw(t,e){const n=[],r=new Map;e=Yh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const C=!E,N=Rw(p);N.aliasOf=E&&E.record;const O=Yh(e,p),$=[N];if("alias"in p){const Q=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of Q)$.push(Pe({},N,{components:E?E.record.components:N.components,path:oe,aliasOf:E?E.record:N}))}let B,L;for(const Q of $){const{path:oe}=Q;if(g&&oe[0]!=="/"){const J=g.record.path,A=J[J.length-1]==="/"?"":"/";Q.path=g.record.path+(oe&&A+oe)}if(B=Iw(Q,g,O),E?E.alias.push(B):(L=L||B,L!==B&&L.alias.push(B),C&&p.name&&!Qh(B)&&o(p.name)),Jp(B)&&l(B),N.children){const J=N.children;for(let A=0;A<J.length;A++)i(J[A],B,E&&E.children[A])}E=E||B}return L?()=>{o(L)}:Js}function o(p){if(Gp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=Pw(p,n);n.splice(g,0,p),p.record.name&&!Qh(p)&&r.set(p.record.name,p)}function h(p,g){let E,C={},N,O;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw ss(1,{location:p});O=E.record.name,C=Pe(Gh(g.params,E.keys.filter(L=>!L.optional).concat(E.parent?E.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Gh(p.params,E.keys.map(L=>L.name))),N=E.stringify(C)}else if(p.path!=null)N=p.path,E=n.find(L=>L.re.test(N)),E&&(C=E.parse(N),O=E.record.name);else{if(E=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!E)throw ss(1,{location:p,currentLocation:g});O=E.record.name,C=Pe({},g.params,p.params),N=E.stringify(C)}const $=[];let B=E;for(;B;)$.unshift(B.record),B=B.parent;return{name:O,path:N,params:C,matched:$,meta:Sw($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Gh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Qh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Sw(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Yh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Yp(t,e[i])<0?r=i:n=i+1}const s=Cw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Cw(t){let e=t;for(;e=e.parent;)if(Jp(e)&&Yp(t,e)===0)return e}function Jp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function kw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($p," "),o=i.indexOf("="),c=li(o<0?i:i.slice(0,o)),l=o<0?null:li(i.slice(o+1));if(c in e){let h=e[c];Wt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Jh(t){let e="";for(let n in t){const r=t[n];if(n=QE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&Rc(i)):[r&&Rc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ow(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Nw=Symbol(""),Xh=Symbol(""),ca=Symbol(""),vl=Symbol(""),Sc=Symbol("");function Vs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(ss(4,{from:n,to:e})):g instanceof Error?l(g):mw(g)?l(ss(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Xa(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Dw(l)){const f=(l.__vccOpts||l)[e];f&&i.push(xn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=UE(f)?f.default:f;o.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&xn(E,n,r,o,c,s)()}))}}return i}function Dw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zh(t){const e=Ut(ca),n=Ut(vl),r=xt(()=>{const l=jt(t.to);return e.resolve(l)}),s=xt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(rs.bind(null,f));if(g>-1)return g;const E=ed(l[h-2]);return h>1&&ed(f)===E&&p[p.length-1].path!==E?p.findIndex(rs.bind(null,l[h-2])):g}),i=xt(()=>s.value>-1&&Mw(n.params,r.value.params)),o=xt(()=>s.value>-1&&s.value===n.matched.length-1&&Wp(n.params,r.value.params));function c(l={}){return xw(l)?e[jt(t.replace)?"replace":"push"](jt(t.to)).catch(Js):Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Vw=ds({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zh,setup(t,{slots:e}){const n=wi(Zh(t)),{options:r}=Ut(ca),s=xt(()=>({[td(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[td(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),go=Vw;function xw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const td=(t,e,n)=>t??e??n,Lw=ds({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut(Sc),s=xt(()=>t.route||r.value),i=Ut(Xh,0),o=xt(()=>{let h=jt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=xt(()=>s.value.matched[o.value]);fo(Xh,xt(()=>o.value+1)),fo(Nw,c),fo(Sc,s);const l=Xo();return Gs(()=>[l.value,c.value,t.name],([h,f,p],[g,E,C])=>{f&&(f.instances[p]=h,E&&E!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),h&&f&&(!E||!rs(f,E)||!g)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return nd(n.default,{Component:g,route:h});const E=p.props[f],C=E?E===!0?h.params:typeof E=="function"?E(h):E:null,O=Mp(g,Pe({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return nd(n.default,{Component:O,route:h})||O}}});function nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xp=Lw;function Uw(t){const e=Aw(t.routes,t),n=t.parseQuery||kw,r=t.stringifyQuery||Jh,s=t.history,i=Vs(),o=Vs(),c=Vs(),l=Ly(kn);let h=kn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ya.bind(null,V=>""+V),p=Ya.bind(null,JE),g=Ya.bind(null,li);function E(V,Y){let K,Z;return Gp(V)?(K=e.getRecordMatcher(V),Z=Y):Z=V,e.addRoute(Z,K)}function C(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function $(V,Y){if(Y=Pe({},Y||l.value),typeof V=="string"){const w=Ja(n,V,Y.path),P=e.resolve({path:w.path},Y),M=s.createHref(w.fullPath);return Pe(w,P,{params:g(P.params),hash:li(w.hash),redirectedFrom:void 0,href:M})}let K;if(V.path!=null)K=Pe({},V,{path:Ja(n,V.path,Y.path).path});else{const w=Pe({},V.params);for(const P in w)w[P]==null&&delete w[P];K=Pe({},V,{params:p(w)}),Y.params=p(Y.params)}const Z=e.resolve(K,Y),ve=V.hash||"";Z.params=f(g(Z.params));const Ce=ew(r,Pe({},V,{hash:GE(ve),path:Z.path})),y=s.createHref(Ce);return Pe({fullPath:Ce,hash:ve,query:r===Jh?Ow(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:y})}function B(V){return typeof V=="string"?Ja(n,V,l.value.path):Pe({},V)}function L(V,Y){if(h!==V)return ss(8,{from:Y,to:V})}function Q(V){return A(V)}function oe(V){return Q(Pe(B(V),{replace:!0}))}function J(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:K}=Y;let Z=typeof K=="function"?K(V):K;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Pe({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function A(V,Y){const K=h=$(V),Z=l.value,ve=V.state,Ce=V.force,y=V.replace===!0,w=J(K);if(w)return A(Pe(B(w),{state:typeof w=="object"?Pe({},ve,w.state):ve,force:Ce,replace:y}),Y||K);const P=K;P.redirectedFrom=Y;let M;return!Ce&&tw(r,Z,K)&&(M=ss(16,{to:P,from:Z}),Nt(Z,Z,!0,!1)),(M?Promise.resolve(M):I(P,Z)).catch(D=>hn(D)?hn(D,2)?D:Ft(D):pe(D,P,Z)).then(D=>{if(D){if(hn(D,2))return A(Pe({replace:y},B(D.to),{state:typeof D.to=="object"?Pe({},ve,D.to.state):ve,force:Ce}),Y||P)}else D=b(P,Z,!0,y,ve);return R(P,Z,D),D})}function _(V,Y){const K=L(V,Y);return K?Promise.reject(K):Promise.resolve()}function v(V){const Y=An.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function I(V,Y){let K;const[Z,ve,Ce]=Fw(V,Y);K=Xa(Z.reverse(),"beforeRouteLeave",V,Y);for(const w of Z)w.leaveGuards.forEach(P=>{K.push(xn(P,V,Y))});const y=_.bind(null,V,Y);return K.push(y),Et(K).then(()=>{K=[];for(const w of i.list())K.push(xn(w,V,Y));return K.push(y),Et(K)}).then(()=>{K=Xa(ve,"beforeRouteUpdate",V,Y);for(const w of ve)w.updateGuards.forEach(P=>{K.push(xn(P,V,Y))});return K.push(y),Et(K)}).then(()=>{K=[];for(const w of Ce)if(w.beforeEnter)if(Wt(w.beforeEnter))for(const P of w.beforeEnter)K.push(xn(P,V,Y));else K.push(xn(w.beforeEnter,V,Y));return K.push(y),Et(K)}).then(()=>(V.matched.forEach(w=>w.enterCallbacks={}),K=Xa(Ce,"beforeRouteEnter",V,Y,v),K.push(y),Et(K))).then(()=>{K=[];for(const w of o.list())K.push(xn(w,V,Y));return K.push(y),Et(K)}).catch(w=>hn(w,8)?w:Promise.reject(w))}function R(V,Y,K){c.list().forEach(Z=>v(()=>Z(V,Y,K)))}function b(V,Y,K,Z,ve){const Ce=L(V,Y);if(Ce)return Ce;const y=Y===kn,w=zr?history.state:{};K&&(Z||y?s.replace(V.fullPath,Pe({scroll:y&&w&&w.scroll},ve)):s.push(V.fullPath,ve)),l.value=V,Nt(V,Y,K,y),Ft()}let T;function et(){T||(T=s.listen((V,Y,K)=>{if(!Qt.listening)return;const Z=$(V),ve=J(Z);if(ve){A(Pe(ve,{replace:!0}),Z).catch(Js);return}h=Z;const Ce=l.value;zr&&lw(zh(Ce.fullPath,K.delta),aa()),I(Z,Ce).catch(y=>hn(y,12)?y:hn(y,2)?(A(y.to,Z).then(w=>{hn(w,20)&&!K.delta&&K.type===ui.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(K.delta&&s.go(-K.delta,!1),pe(y,Z,Ce))).then(y=>{y=y||b(Z,Ce,!1),y&&(K.delta&&!hn(y,8)?s.go(-K.delta,!1):K.type===ui.pop&&hn(y,20)&&s.go(-1,!1)),R(Z,Ce,y)}).catch(Js)}))}let vt=Vs(),Ne=Vs(),ce;function pe(V,Y,K){Ft(V);const Z=Ne.list();return Z.length?Z.forEach(ve=>ve(V,Y,K)):console.error(V),Promise.reject(V)}function It(){return ce&&l.value!==kn?Promise.resolve():new Promise((V,Y)=>{vt.add([V,Y])})}function Ft(V){return ce||(ce=!V,et(),vt.list().forEach(([Y,K])=>V?K(V):Y()),vt.reset()),V}function Nt(V,Y,K,Z){const{scrollBehavior:ve}=t;if(!zr||!ve)return Promise.resolve();const Ce=!K&&uw(zh(V.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return fl().then(()=>ve(V,Y,Ce)).then(y=>y&&cw(y)).catch(y=>pe(y,V,Y))}const Le=V=>s.go(V);let Ue;const An=new Set,Qt={currentRoute:l,listening:!0,addRoute:E,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:N,resolve:$,options:t,push:Q,replace:oe,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ne.add,isReady:It,install(V){const Y=this;V.component("RouterLink",go),V.component("RouterView",Xp),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(l)}),zr&&!Ue&&l.value===kn&&(Ue=!0,Q(s.location).catch(ve=>{}));const K={};for(const ve in kn)Object.defineProperty(K,ve,{get:()=>l.value[ve],enumerable:!0});V.provide(ca,Y),V.provide(vl,Yf(K)),V.provide(Sc,l);const Z=V.unmount;An.add(V),V.unmount=function(){An.delete(V),An.size<1&&(h=kn,T&&T(),T=null,l.value=kn,Ue=!1,ce=!1),Z()}}};function Et(V){return V.reduce((Y,K)=>Y.then(()=>v(K)),Promise.resolve())}return Qt}function Fw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>rs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>rs(h,l))||s.push(l))}return[n,r,s]}function Bw(){return Ut(ca)}function jw(t){return Ut(vl)}const $w=t=>(ap("data-v-a47c673d"),t=t(),cp(),t),zw={class:"greetings"},qw={class:"green"},Hw=$w(()=>ge("h3",null,[_e(" You’ve successfully created a project with "),ge("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),_e(" + "),ge("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),_e(". What's next? ")],-1)),Ww=ds({__name:"HelloWorld",props:{msg:{}},setup(t){return(e,n)=>(Ot(),Ht("div",zw,[ge("h1",qw,Vf(e.msg),1),Hw]))}}),sr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Kw=sr(Ww,[["__scopeId","data-v-a47c673d"]]),Zp=ME("user",()=>{const t=Xo(null);function e(n){t.value=n}return{user:t,setUser:e}});var rd={};/**
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
 */const em=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(em(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Qw;const g=i<<2|c>>4;if(r.push(g),h!==64){const E=c<<4&240|h>>2;if(r.push(E),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yw=function(t){const e=em(t);return tm.encodeByteArray(e,!0)},Oo=function(t){return Yw(t).replace(/\./g,"")},nm=function(t){try{return tm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xw=()=>Jw().__FIREBASE_DEFAULTS__,Zw=()=>{if(typeof process>"u"||typeof rd>"u")return;const t=rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nm(t[1]);return e&&JSON.parse(e)},la=()=>{try{return Xw()||Zw()||eT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rm=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sm=t=>{const e=rm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},im=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},om=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function am(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oo(JSON.stringify(n)),Oo(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function rT(){var t;const e=(t=la())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oT(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aT(){return!rT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cT(){try{return typeof indexedDB=="object"}catch{return!1}}function lT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const uT="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uT,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new cn(s,c,r)}}function hT(t,e){return t.replace(dT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dT=/\{\$([^}]+)}/g;function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sd(i)&&sd(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pT(t,e){const n=new mT(t,e);return n.subscribe.bind(n)}class mT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Za(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class _T{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yT(t){return t===fr?void 0:t}function vT(t){return t.instantiationMode==="EAGER"}/**
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
 */class ET{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _T(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const wT={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},TT=ye.INFO,IT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},AT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=IT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=TT,this._logHandler=AT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const RT=(t,e)=>e.some(n=>t instanceof n);let id,od;function bT(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ST(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cm=new WeakMap,Pc=new WeakMap,lm=new WeakMap,ec=new WeakMap,wl=new WeakMap;function PT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cm.set(n,t)}).catch(()=>{}),wl.set(e,t),e}function CT(t){if(Pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pc.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kT(t){Cc=t(Cc)}function OT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tc(this),e,...n);return lm.set(r,e.sort?e.sort():[e]),Hn(r)}:ST().includes(t)?function(...e){return t.apply(tc(this),e),Hn(cm.get(this))}:function(...e){return Hn(t.apply(tc(this),e))}}function NT(t){return typeof t=="function"?OT(t):(t instanceof IDBTransaction&&CT(t),RT(t,bT())?new Proxy(t,Cc):t)}function Hn(t){if(t instanceof IDBRequest)return PT(t);if(ec.has(t))return ec.get(t);const e=NT(t);return e!==t&&(ec.set(t,e),wl.set(e,t)),e}const tc=t=>wl.get(t);function DT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const VT=["get","getKey","getAll","getAllKeys","count"],xT=["put","add","delete","clear"],nc=new Map;function ad(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||VT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return nc.set(e,i),i}kT(t=>({...t,get:(e,n,r)=>ad(e,n)||t.get(e,n,r),has:(e,n)=>!!ad(e,n)||t.has(e,n)}));/**
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
 */class MT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",cd="0.10.10";/**
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
 */const vn=new El("@firebase/app"),UT="@firebase/app-compat",FT="@firebase/analytics-compat",BT="@firebase/analytics",jT="@firebase/app-check-compat",$T="@firebase/app-check",zT="@firebase/auth",qT="@firebase/auth-compat",HT="@firebase/database",WT="@firebase/database-compat",KT="@firebase/functions",GT="@firebase/functions-compat",QT="@firebase/installations",YT="@firebase/installations-compat",JT="@firebase/messaging",XT="@firebase/messaging-compat",ZT="@firebase/performance",eI="@firebase/performance-compat",tI="@firebase/remote-config",nI="@firebase/remote-config-compat",rI="@firebase/storage",sI="@firebase/storage-compat",iI="@firebase/firestore",oI="@firebase/vertexai-preview",aI="@firebase/firestore-compat",cI="firebase",lI="10.13.1";/**
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
 */const Oc="[DEFAULT]",uI={[kc]:"fire-core",[UT]:"fire-core-compat",[BT]:"fire-analytics",[FT]:"fire-analytics-compat",[$T]:"fire-app-check",[jT]:"fire-app-check-compat",[zT]:"fire-auth",[qT]:"fire-auth-compat",[HT]:"fire-rtdb",[WT]:"fire-rtdb-compat",[KT]:"fire-fn",[GT]:"fire-fn-compat",[QT]:"fire-iid",[YT]:"fire-iid-compat",[JT]:"fire-fcm",[XT]:"fire-fcm-compat",[ZT]:"fire-perf",[eI]:"fire-perf-compat",[tI]:"fire-rc",[nI]:"fire-rc-compat",[rI]:"fire-gcs",[sI]:"fire-gcs-compat",[iI]:"fire-fst",[aI]:"fire-fst-compat",[oI]:"fire-vertex","fire-js":"fire-js",[cI]:"fire-js-all"};/**
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
 */const Do=new Map,hI=new Map,Nc=new Map;function ld(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(Nc.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of Do.values())ld(n,t);for(const n of hI.values())ld(n,t);return!0}function ua(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
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
 */const dI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Ii("app","Firebase",dI);/**
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
 */class fI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=lI;function um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=im()),!n)throw Wn.create("no-options");const i=Do.get(s);if(i){if(No(n,i.options)&&No(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const o=new ET(s);for(const l of Nc.values())o.addComponent(l);const c=new fI(n,r,o);return Do.set(s,c),c}function Tl(t=Oc){const e=Do.get(t);if(!e&&t===Oc&&im())return um();if(!e)throw Wn.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=uI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(c.join(" "));return}Ir(new Jn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pI="firebase-heartbeat-database",mI=1,hi="firebase-heartbeat-store";let rc=null;function hm(){return rc||(rc=DT(pI,mI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),rc}async function gI(t){try{const n=(await hm()).transaction(hi),r=await n.objectStore(hi).get(dm(t));return await n.done,r}catch(e){if(e instanceof cn)vn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function ud(t,e){try{const r=(await hm()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,dm(t)),await r.done}catch(n){if(n instanceof cn)vn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function dm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _I=1024,yI=30*24*60*60*1e3;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=yI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hd(),{heartbeatsToSend:r,unsentEntries:s}=EI(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vn.warn(n),""}}}function hd(){return new Date().toISOString().substring(0,10)}function EI(t,e=_I){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cT()?lT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dd(t){return Oo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TI(t){Ir(new Jn("platform-logger",e=>new MT(e),"PRIVATE")),Ir(new Jn("heartbeat",e=>new vI(e),"PRIVATE")),tn(kc,cd,t),tn(kc,cd,"esm2017"),tn("fire-js","")}TI("");function Il(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=fm,pm=new Ii("auth","Firebase",fm());/**
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
 */const Vo=new El("@firebase/auth");function AI(t,...e){Vo.logLevel<=ye.WARN&&Vo.warn(`Auth (${Or}): ${t}`,...e)}function _o(t,...e){Vo.logLevel<=ye.ERROR&&Vo.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw Al(t,...e)}function nn(t,...e){return Al(t,...e)}function mm(t,e,n){const r=Object.assign(Object.assign({},II()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function _n(t){return mm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Al(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pm.create(t,...e)}function ae(t,e,...n){if(!t)throw Al(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function En(t,e){t||fn(e)}/**
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
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RI(){return fd()==="http:"||fd()==="https:"}function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RI()||sT()||"connection"in navigator)?navigator.onLine:!0}function SI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=nT()||iT()}get(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rl(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CI=new Ri(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,s={}){return _m(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gm.fetch()(ym(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function _m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PI),e);try{const s=new OI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw no(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw mm(t,f,h);Kt(t,f)}}catch(s){if(s instanceof cn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function bi(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ym(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rl(t.config,s):`${t.config.apiScheme}://${s}`}function kI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),CI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}function pd(t){return t!==void 0&&t.enterprise!==void 0}class NI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function DI(t,e){return or(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
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
 */async function VI(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function vm(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xI(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=bl(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(sc(s.auth_time)),issuedAtTime:Zs(sc(s.iat)),expirationTime:Zs(sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function bl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=nm(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function md(t){const e=bl(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&MI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,vm(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Em(i.providerUserInfo):[],c=FI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function UI(t){const e=Je(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Em(t){return t.map(e=>{var{providerId:n}=e,r=Il(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BI(t,e){const n=await _m(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ym(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jI(t,e){return or(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=md(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function On(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xI(this,e)}reload(){return UI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await di(this,VI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:Q,isAnonymous:oe,providerData:J,stsTokenManager:A}=n;ae(L&&A,e,"internal-error");const _=Jr.fromJSON(this.name,A);ae(typeof L=="string",e,"internal-error"),On(p,e.name),On(g,e.name),ae(typeof Q=="boolean",e,"internal-error"),ae(typeof oe=="boolean",e,"internal-error"),On(E,e.name),On(C,e.name),On(N,e.name),On(O,e.name),On($,e.name),On(B,e.name);const v=new pn({uid:L,auth:e,email:g,emailVerified:Q,displayName:p,isAnonymous:oe,photoURL:C,phoneNumber:E,tenantId:N,stsTokenManager:_,createdAt:$,lastLoginAt:B});return J&&Array.isArray(J)&&(v.providerData=J.map(I=>Object.assign({},I))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Em(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new pn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const gd=new Map;function mn(t){En(t instanceof Function,"Expected a class definition");let e=gd.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gd.set(t,e),e)}/**
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
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const _d=wm;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(mn(_d),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(_d);const o=yo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=pn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Xr(i,e,r))}}/**
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
 */function yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Pm(e))return"Webos";if(Im(e))return"Safari";if((e.includes("chrome/")||Am(e))&&!e.includes("edge/"))return"Chrome";if(bm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tm(t=pt()){return/firefox\//i.test(t)}function Im(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Am(t=pt()){return/crios\//i.test(t)}function Rm(t=pt()){return/iemobile/i.test(t)}function bm(t=pt()){return/android/i.test(t)}function Sm(t=pt()){return/blackberry/i.test(t)}function Pm(t=pt()){return/webos/i.test(t)}function Sl(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $I(t=pt()){var e;return Sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zI(){return oT()&&document.documentMode===10}function Cm(t=pt()){return Sl(t)||bm(t)||Pm(t)||Sm(t)||/windows phone/i.test(t)||Rm(t)}/**
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
 */function km(t,e=[]){let n;switch(t){case"Browser":n=yd(pt());break;case"Worker":n=`${yd(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class qI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HI(t,e={}){return or(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
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
 */const WI=6;class KI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vd(this),this.idTokenSubscription=new vd(this),this.beforeStateQueue=new qI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vm(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(_n(this));const n=e?Je(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HI(this),n=new KI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nr(t){return Je(t)}class vd{constructor(e){this.auth=e,this.observer=null,this.addObserver=pT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QI(t){ha=t}function Om(t){return ha.loadJS(t)}function YI(){return ha.recaptchaEnterpriseScript}function JI(){return ha.gapiScript}function XI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZI="recaptcha-enterprise",e0="NO_RECAPTCHA";class t0{constructor(e){this.type=ZI,this.auth=Nr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{DI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new NI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;pd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(e0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&pd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=YI();l.length!==0&&(l+=c),Om(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Ed(t,e,n,r=!1){const s=new t0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ed(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ed(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function n0(t,e){const n=ua(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function r0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function s0(t,e,n){const r=Nr(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Nm(e),{host:o,port:c}=i0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),o0()}function Nm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function i0(t){const e=Nm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wd(o)}}}function wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function o0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function a0(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function c0(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
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
 */async function l0(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function u0(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
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
 */class fi extends Pl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,n,"signInWithPassword",c0);case"emailLink":return l0(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,r,"signUpPassword",a0);case"emailLink":return u0(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
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
 */const h0="http://localhost";class Ar extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Il(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:h0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */function d0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f0(t){const e=Bs(js(t)).link,n=e?Bs(js(e)).deep_link_id:null,r=Bs(js(t)).deep_link_id;return(r?Bs(js(r)).link:null)||r||n||e||t}class Cl{constructor(e){var n,r,s,i,o,c;const l=Bs(js(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=d0((s=l.mode)!==null&&s!==void 0?s:null);ae(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=f0(e);try{return new Cl(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cl.parseLink(n);return ae(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends Dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Si{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Un extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class Fn extends Si{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Bn extends Si{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */async function p0(t,e){return bi(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
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
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=Td(r);return new Rr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Td(r);return new Rr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mo extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mo(e,n,r,s)}}function Vm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,i,e,r):i})}async function m0(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",r)}/**
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
 */async function g0(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(_n(r));const s="reauthenticate";try{const i=await di(t,Vm(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=bl(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Rr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function xm(t,e,n=!1){if(Zt(t.app))return Promise.reject(_n(t));const r="signIn",s=await Vm(t,r,e),i=await Rr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _0(t,e){return xm(Nr(t),e)}/**
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
 */async function Mm(t){const e=Nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gC(t,e,n){if(Zt(t.app))return Promise.reject(_n(t));const r=Nr(t),o=await xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Mm(t),l}),c=await Rr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function _C(t,e,n){return Zt(t.app)?Promise.reject(_n(t)):_0(Je(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mm(t),r})}function y0(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function v0(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function E0(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function w0(t){return Je(t).signOut()}const Lo="__sak";/**
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
 */class Lm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const T0=1e3,I0=10;class Um extends Lm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,I0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Um.type="LOCAL";const A0=Um;/**
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
 */class Fm extends Lm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fm.type="SESSION";const Bm=Fm;/**
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
 */function R0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await R0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
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
 */function kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class b0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=kl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function S0(t){rn().location.href=t}/**
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
 */function jm(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function P0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k0(){return jm()?self:null}/**
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
 */const $m="firebaseLocalStorageDb",O0=1,Uo="firebaseLocalStorage",zm="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function N0(){const t=indexedDB.deleteDatabase($m);return new Pi(t).toPromise()}function Mc(){const t=indexedDB.open($m,O0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:zm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await N0(),e(await Mc()))})})}async function Id(t,e,n){const r=fa(t,!0).put({[zm]:e,value:n});return new Pi(r).toPromise()}async function D0(t,e){const n=fa(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function Ad(t,e){const n=fa(t,!0).delete(e);return new Pi(n).toPromise()}const V0=800,x0=3;class qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>x0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(k0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P0(),!this.activeServiceWorker)return;this.sender=new b0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Id(e,Lo,"1"),await Ad(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>D0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fa(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qm.type="LOCAL";const M0=qm;new Ri(3e4,6e4);/**
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
 */function L0(t,e){return e?mn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ol extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U0(t){return xm(t.auth,new Ol(t),t.bypassAuthState)}function F0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),g0(n,new Ol(t),t.bypassAuthState)}async function B0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),m0(n,new Ol(t),t.bypassAuthState)}/**
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
 */class Hm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U0;case"linkViaPopup":case"linkViaRedirect":return B0;case"reauthViaPopup":case"reauthViaRedirect":return F0;default:Kt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const j0=new Ri(2e3,1e4);class Kr extends Hm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j0.get())};e()}}Kr.currentPopupAction=null;/**
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
 */const $0="pendingRedirect",vo=new Map;class z0 extends Hm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q0(t,e){const n=K0(e),r=W0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function H0(t,e){vo.set(t._key(),e)}function W0(t){return mn(t._redirectPersistence)}function K0(t){return yo($0,t.config.apiKey,t.name)}async function G0(t,e,n=!1){if(Zt(t.app))return Promise.reject(_n(t));const r=Nr(t),s=L0(r,e),o=await new z0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Q0=10*60*1e3;class Y0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rd(e))}saveEventToCache(e){this.cachedEventUids.add(Rd(e)),this.lastProcessedEventTime=Date.now()}}function Rd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wm(t);default:return!1}}/**
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
 */async function X0(t,e={}){return or(t,"GET","/v1/projects",e)}/**
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
 */const Z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eA=/^https?/;async function tA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X0(t);for(const n of e)try{if(nA(n))return}catch{}Kt(t,"unauthorized-domain")}function nA(t){const e=Dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eA.test(n))return!1;if(Z0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rA=new Ri(3e4,6e4);function bd(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sA(t){return new Promise((e,n)=>{var r,s,i;function o(){bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(nn(t,"network-request-failed"))},timeout:rA.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const c=XI("iframefcb");return rn()[c]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Om(`${JI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function iA(t){return Eo=Eo||sA(t),Eo}/**
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
 */const oA=new Ri(5e3,15e3),aA="__/auth/iframe",cA="emulator/auth/iframe",lA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hA(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rl(e,cA):`https://${t.config.authDomain}/${aA}`,r={apiKey:e.apiKey,appName:t.name,v:Or},s=uA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function dA(t){const e=await iA(t),n=rn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:hA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),c=rn().setTimeout(()=>{i(o)},oA.get());function l(){rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const fA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pA=500,mA=600,gA="_blank",_A="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yA(t,e,n,r=pA,s=mA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},fA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=pt().toLowerCase();n&&(c=Am(h)?gA:n),Tm(h)&&(e=e||_A,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if($I(h)&&c!=="_self")return vA(e||"",c),new Sd(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Sd(p)}function vA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EA="__/auth/handler",wA="emulator/auth/handler",TA=encodeURIComponent("fac");async function Pd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:s};if(e instanceof Dm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Si){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${TA}=${encodeURIComponent(l)}`:"";return`${IA(t)}?${Ai(c).slice(1)}${h}`}function IA({config:t}){return t.emulator?Rl(t,wA):`https://${t.authDomain}/${EA}`}/**
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
 */const ic="webStorageSupport";class AA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bm,this._completeRedirectFn=G0,this._overrideRedirectResult=H0}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pd(e,n,r,Dc(),s);return yA(e,o,kl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Pd(e,n,r,Dc(),s);return S0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dA(e),r=new Y0(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ic];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cm()||Im()||Sl()}}const RA=AA;var Cd="@firebase/auth",kd="1.7.8";/**
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
 */class bA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PA(t){Ir(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(t)},h=new GI(r,s,i,l);return r0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new Jn("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new bA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Cd,kd,SA(t)),tn(Cd,kd,"esm2017")}/**
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
 */const CA=5*60,kA=om("authIdTokenMaxAge")||CA;let Od=null;const OA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kA)return;const s=n==null?void 0:n.token;Od!==s&&(Od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function NA(t=Tl()){const e=ua(t,"auth");if(e.isInitialized())return e.getImmediate();const n=n0(t,{popupRedirectResolver:RA,persistence:[M0,A0,Bm]}),r=om("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OA(i.toString());v0(n,o,()=>o(n.currentUser)),y0(n,c=>o(c))}}const s=rm("auth");return s&&s0(n,`http://${s}`),n}function DA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PA("Browser");const VA=t=>(ap("data-v-9d92147e"),t=t(),cp(),t),xA=VA(()=>ge("img",{alt:"Vue logo",class:"logo",src:LE,width:"125",height:"125"},null,-1)),MA={class:"wrapper"},LA=ds({__name:"App",setup(t){const e=jw(),n=Bw(),r=Zp();dp(()=>{E0(Rf,i=>{console.log("onAuthStateChanged",i),r.setUser(i),i?(e.name==="login"||e.name==="register")&&n.push({name:"home"}):e.name!=="login"&&e.name!=="register"&&n.push({name:"login"})})});function s(){w0(Rf).then(i=>{console.log("logout")}).catch(i=>{i.code,i.message})}return(i,o)=>(Ot(),Ht(St,null,[ge("header",null,[jt(r).user?(Ot(),Ht("button",{key:0,onClick:s},"logout")):zv("",!0),xA,ge("div",MA,[Se(Kw,{msg:"Auth!"}),ge("nav",null,[Se(jt(go),{to:"/"},{default:Ke(()=>[_e("Home")]),_:1}),Se(jt(go),{to:"/users"},{default:Ke(()=>[_e("Users")]),_:1}),Se(jt(go),{to:"/about"},{default:Ke(()=>[_e("About")]),_:1})])])]),Se(jt(Xp))],64))}}),UA=sr(LA,[["__scopeId","data-v-9d92147e"]]),FA="modulepreload",BA=function(t){return"/test/"+t},Nd={},xs=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=BA(c),c in Nd)return;Nd[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":FA,l||(f.as="script",f.crossOrigin=""),f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},jA={},$A={class:"item"},zA={class:"details"};function qA(t,e){return Ot(),Ht("div",$A,[ge("i",null,[ja(t.$slots,"icon",{},void 0)]),ge("div",zA,[ge("h3",null,[ja(t.$slots,"heading",{},void 0)]),ja(t.$slots,"default",{},void 0)])])}const Ms=sr(jA,[["render",qA],["__scopeId","data-v-fd0742eb"]]),HA={},WA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},KA=ge("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),GA=[KA];function QA(t,e){return Ot(),Ht("svg",WA,GA)}const YA=sr(HA,[["render",QA]]),JA={},XA={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ZA=ge("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),eR=[ZA];function tR(t,e){return Ot(),Ht("svg",XA,eR)}const nR=sr(JA,[["render",tR]]),rR={},sR={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},iR=ge("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),oR=[iR];function aR(t,e){return Ot(),Ht("svg",sR,oR)}const cR=sr(rR,[["render",aR]]),lR={},uR={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},hR=ge("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),dR=[hR];function fR(t,e){return Ot(),Ht("svg",uR,dR)}const pR=sr(lR,[["render",fR]]),mR={},gR={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},_R=ge("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),yR=[_R];function vR(t,e){return Ot(),Ht("svg",gR,yR)}const ER=sr(mR,[["render",vR]]),wR=ge("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),TR=ge("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),IR=ge("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),AR=ge("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),RR=ge("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),bR=ge("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),SR=ge("br",null,null,-1),PR=ge("code",null,"README.md",-1),CR=ge("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),kR=ge("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),OR=ge("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),NR=ge("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),DR=ge("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),VR=ge("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),xR=ge("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),MR=ge("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),LR=ge("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),UR=ge("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),FR=ds({__name:"TheWelcome",setup(t){return(e,n)=>(Ot(),Ht(St,null,[Se(Ms,null,{icon:Ke(()=>[Se(YA)]),heading:Ke(()=>[_e("Documentation")]),default:Ke(()=>[_e(" Vue’s "),wR,_e(" provides you with all information you need to get started. ")]),_:1}),Se(Ms,null,{icon:Ke(()=>[Se(nR)]),heading:Ke(()=>[_e("Tooling")]),default:Ke(()=>[_e(" This project is served and bundled with "),TR,_e(". The recommended IDE setup is "),IR,_e(" + "),AR,_e(". If you need to test your components and web pages, check out "),RR,_e(" and "),bR,_e(". "),SR,_e(" More instructions are available in "),PR,_e(". ")]),_:1}),Se(Ms,null,{icon:Ke(()=>[Se(cR)]),heading:Ke(()=>[_e("Ecosystem")]),default:Ke(()=>[_e(" Get official tools and libraries for your project: "),CR,_e(", "),kR,_e(", "),OR,_e(", and "),NR,_e(". If you need more resources, we suggest paying "),DR,_e(" a visit. ")]),_:1}),Se(Ms,null,{icon:Ke(()=>[Se(pR)]),heading:Ke(()=>[_e("Community")]),default:Ke(()=>[_e(" Got stuck? Ask your question on "),VR,_e(", our official Discord server, or "),xR,_e(". You should also subscribe to "),MR,_e(" and follow the official "),LR,_e(" twitter account for latest news in the Vue world. ")]),_:1}),Se(Ms,null,{icon:Ke(()=>[Se(ER)]),heading:Ke(()=>[_e("Support Vue")]),default:Ke(()=>[_e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),UR,_e(". ")]),_:1})],64))}}),BR=ds({__name:"HomeView",setup(t){return(e,n)=>(Ot(),Ht("main",null,[Se(FR)]))}}),Km=Uw({history:pw("test"),routes:[{path:"/",name:"home",component:BR,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>xs(()=>import("./AboutView-BrgnyzMm.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>xs(()=>import("./LoginView-CrtOu-ed.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!1}},{path:"/register",name:"register",component:()=>xs(()=>import("./RegisterView-BXcClBuf.js"),__vite__mapDeps([4,5,6])),meta:{requiresAuth:!1}},{path:"/users",name:"users",component:()=>xs(()=>import("./UsersView-Bbr_jWjV.js"),__vite__mapDeps([7,5,8])),meta:{requiresAuth:!1}},{path:"/wardrobe/:email",name:"wardrobe",component:()=>xs(()=>import("./WardrobeView-Fom7uiWN.js"),__vite__mapDeps([9,10])),meta:{requiresAuth:!1}}]});Km.beforeEach(t=>{const e=Zp();if(e.user,console.log("beforeEach",e.user),t.meta.requiresAuth&&!e.user)return"/login"});var jR="firebase",$R="10.13.1";/**
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
 */tn(jR,$R,"app");var Dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,Gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.D=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(I,R,b){for(var T=Array(arguments.length-2),et=2;et<arguments.length;et++)T[et-2]=arguments[et];return _.prototype[R].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,v){v||(v=0);var I=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)I[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],R=A.g[2];var b=A.g[3],T=_+(b^v&(R^b))+I[0]+3614090360&4294967295;_=v+(T<<7&4294967295|T>>>25),T=b+(R^_&(v^R))+I[1]+3905402710&4294967295,b=_+(T<<12&4294967295|T>>>20),T=R+(v^b&(_^v))+I[2]+606105819&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(_^R&(b^_))+I[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(b^v&(R^b))+I[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=b+(R^_&(v^R))+I[5]+1200080426&4294967295,b=_+(T<<12&4294967295|T>>>20),T=R+(v^b&(_^v))+I[6]+2821735955&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(_^R&(b^_))+I[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(b^v&(R^b))+I[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=b+(R^_&(v^R))+I[9]+2336552879&4294967295,b=_+(T<<12&4294967295|T>>>20),T=R+(v^b&(_^v))+I[10]+4294925233&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(_^R&(b^_))+I[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(b^v&(R^b))+I[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=b+(R^_&(v^R))+I[13]+4254626195&4294967295,b=_+(T<<12&4294967295|T>>>20),T=R+(v^b&(_^v))+I[14]+2792965006&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(_^R&(b^_))+I[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(R^b&(v^R))+I[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(_^v))+I[6]+3225465664&4294967295,b=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(b^_))+I[11]+643717713&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^_&(R^b))+I[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^b&(v^R))+I[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(_^v))+I[10]+38016083&4294967295,b=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(b^_))+I[15]+3634488961&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^_&(R^b))+I[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^b&(v^R))+I[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(_^v))+I[14]+3275163606&4294967295,b=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(b^_))+I[3]+4107603335&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^_&(R^b))+I[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^b&(v^R))+I[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(_^v))+I[2]+4243563512&4294967295,b=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(b^_))+I[7]+1735328473&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^_&(R^b))+I[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(v^R^b)+I[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=b+(_^v^R)+I[8]+2272392833&4294967295,b=_+(T<<11&4294967295|T>>>21),T=R+(b^_^v)+I[11]+1839030562&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^_)+I[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^b)+I[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=b+(_^v^R)+I[4]+1272893353&4294967295,b=_+(T<<11&4294967295|T>>>21),T=R+(b^_^v)+I[7]+4139469664&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^_)+I[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^b)+I[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=b+(_^v^R)+I[0]+3936430074&4294967295,b=_+(T<<11&4294967295|T>>>21),T=R+(b^_^v)+I[3]+3572445317&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^_)+I[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^b)+I[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=b+(_^v^R)+I[12]+3873151461&4294967295,b=_+(T<<11&4294967295|T>>>21),T=R+(b^_^v)+I[15]+530742520&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^_)+I[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(R^(v|~b))+I[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=b+(v^(_|~R))+I[7]+1126891415&4294967295,b=_+(T<<10&4294967295|T>>>22),T=R+(_^(b|~v))+I[14]+2878612391&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~_))+I[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~b))+I[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=b+(v^(_|~R))+I[3]+2399980690&4294967295,b=_+(T<<10&4294967295|T>>>22),T=R+(_^(b|~v))+I[10]+4293915773&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~_))+I[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~b))+I[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=b+(v^(_|~R))+I[15]+4264355552&4294967295,b=_+(T<<10&4294967295|T>>>22),T=R+(_^(b|~v))+I[6]+2734768916&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~_))+I[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~b))+I[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=b+(v^(_|~R))+I[11]+3174756917&4294967295,b=_+(T<<10&4294967295|T>>>22),T=R+(_^(b|~v))+I[2]+718787259&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var v=_-this.blockSize,I=this.B,R=this.h,b=0;b<_;){if(R==0)for(;b<=v;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<_;)if(I[R++]=A.charCodeAt(b++),R==this.blockSize){s(this,I),R=0;break}}else for(;b<_;)if(I[R++]=A[b++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var v=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.u(A),A=Array(16),_=v=0;4>_;++_)for(var I=0;32>I;I+=8)A[v++]=this.g[_]>>>I&255;return A};function i(A,_){var v=c;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function o(A,_){this.h=_;for(var v=[],I=!0,R=A.length-1;0<=R;R--){var b=A[R]|0;I&&b==_||(v[R]=b,I=!1)}this.g=v}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(h(-A));for(var _=[],v=1,I=0;A>=v;I++)_[I]=A/v|0,v*=4294967296;return new o(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return O(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),I=p,R=0;R<A.length;R+=8){var b=Math.min(8,A.length-R),T=parseInt(A.substring(R,R+b),_);8>b?(b=h(Math.pow(_,b)),I=I.j(b).add(h(T))):(I=I.j(v),I=I.add(h(T)))}return I}var p=l(0),g=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var A=0,_=1,v=0;v<this.g.length;v++){var I=this.i(v);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(N(this))return"-"+O(this).toString(A);for(var _=h(Math.pow(A,6)),v=this,I="";;){var R=Q(v,_).g;v=$(v,R.j(_));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,C(v))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=$(this,A),N(A)?-1:C(A)?0:1};function O(A){for(var _=A.g.length,v=[],I=0;I<_;I++)v[I]=~A.g[I];return new o(v,~A.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0,R=0;R<=_;R++){var b=I+(this.i(R)&65535)+(A.i(R)&65535),T=(b>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);I=T>>>16,b&=65535,T&=65535,v[R]=T<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(A,_){return A.add(O(_))}t.j=function(A){if(C(this)||C(A))return p;if(N(this))return N(A)?O(this).j(O(A)):O(O(this).j(A));if(N(A))return O(this.j(O(A)));if(0>this.l(E)&&0>A.l(E))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,v=[],I=0;I<2*_;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<A.g.length;R++){var b=this.i(I)>>>16,T=this.i(I)&65535,et=A.i(R)>>>16,vt=A.i(R)&65535;v[2*I+2*R]+=T*vt,B(v,2*I+2*R),v[2*I+2*R+1]+=b*vt,B(v,2*I+2*R+1),v[2*I+2*R+1]+=T*et,B(v,2*I+2*R+1),v[2*I+2*R+2]+=b*et,B(v,2*I+2*R+2)}for(I=0;I<_;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=_;I<2*_;I++)v[I]=0;return new o(v,0)};function B(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function L(A,_){this.g=A,this.h=_}function Q(A,_){if(C(_))throw Error("division by zero");if(C(A))return new L(p,p);if(N(A))return _=Q(O(A),_),new L(O(_.g),O(_.h));if(N(_))return _=Q(A,O(_)),new L(O(_.g),_.h);if(30<A.g.length){if(N(A)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,I=_;0>=I.l(A);)v=oe(v),I=oe(I);var R=J(v,1),b=J(I,1);for(I=J(I,2),v=J(v,2);!C(I);){var T=b.add(I);0>=T.l(A)&&(R=R.add(v),b=T),I=J(I,1),v=J(v,1)}return _=$(A,R.j(_)),new L(R,_)}for(R=p;0<=A.l(_);){for(v=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=h(v),T=b.j(_);N(T)||0<T.l(A);)v-=I,b=h(v),T=b.j(_);C(b)&&(b=g),R=R.add(b),A=$(A,T)}return new L(R,A)}t.A=function(A){return Q(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)&A.i(I);return new o(v,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)|A.i(I);return new o(v,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)^A.i(I);return new o(v,this.h^A.h)};function oe(A){for(var _=A.g.length+1,v=[],I=0;I<_;I++)v[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(v,A.h)}function J(A,_){var v=_>>5;_%=32;for(var I=A.g.length-v,R=[],b=0;b<I;b++)R[b]=0<_?A.i(b+v)>>>_|A.i(b+v+1)<<32-_:A.i(b+v);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Er=o}).apply(typeof Dd<"u"?Dd:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qm,Ym,$s,Jm,wo,Lc,Xm,Zm,eg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,S={next:function(){if(!m&&d<a.length){var k=d++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,S,k){for(var q=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)q[ke-2]=arguments[ke];return u.prototype[S].apply(m,q)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function O(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const S=a.length||0,k=m.length||0;a.length=S+k;for(let q=0;q<k;q++)a[S+q]=m[q]}else a.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var oe=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function A(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let k=0;k<v.length;k++)d=v[k],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function T(){var a=It;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,d){const m=vt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var vt=new $(()=>new Ne,a=>a.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,pe=!1,It=new et,Ft=()=>{const a=c.Promise.resolve(void 0);ce=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){b(d)}var u=vt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pe=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Qt(a,u){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(oe){e:{try{Q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qt.aa.h.call(this)}}C(Qt,Ue);var Et={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function K(a,u,d,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=S,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,u,d,m,S){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var q=y(a,u,m,S);return-1<q?(u=a[q],d||(u.fa=!1)):(u=new K(u,this.src,k,!!m,S),u.fa=d,a.push(u)),u};function Ce(a,u){var d=u.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(m,S,1),k&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function y(a,u,d,m){for(var S=0;S<a.length;++S){var k=a[S];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return S}return-1}var w="closure_lm_"+(1e6*Math.random()|0),P={};function M(a,u,d,m,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)M(a,u[k],d,m,S);return null}return d=ne(d),a&&a[V]?a.K(u,d,h(m)?!!m.capture:!!m,S):D(a,u,d,!1,m,S)}function D(a,u,d,m,S,k){if(!u)throw Error("Invalid event type");var q=h(S)?!!S.capture:!!S,ke=G(a);if(ke||(a[w]=ke=new ve(a)),d=ke.add(u,d,m,q,k),d.proxy)return d;if(m=j(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)An||(S=q),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(H(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function j(){function a(d){return u.call(a.src,a.listener,d)}const u=F;return a}function W(a,u,d,m,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)W(a,u[k],d,m,S);else m=h(m)?!!m.capture:!!m,d=ne(d),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],d=y(k,d,m,S),-1<d&&(Z(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=G(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,d,m,S)),(d=-1<a?u[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])Ce(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(H(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=G(u))?(Ce(d,a),d.h==0&&(d.src=null,u[w]=null)):Z(a)}}}function H(a){return a in P?P[a]:P[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new Qt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&z(a),a=d.call(m,u)}return a}function G(a){return a=a[w],a instanceof ve?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function te(){Le.call(this),this.i=new ve(this),this.M=this,this.F=null}C(te,Le),te.prototype[V]=!0,te.prototype.removeEventListener=function(a,u,d,m){W(this,a,u,d,m)};function ie(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ue(u,a);else if(u instanceof Ue)u.target=u.target||a;else{var S=u;u=new Ue(m,a),I(u,S)}if(S=!0,d)for(var k=d.length-1;0<=k;k--){var q=u.g=d[k];S=be(q,m,!0,u)&&S}if(q=u.g=a,S=be(q,m,!0,u)&&S,S=be(q,m,!1,u)&&S,d)for(k=0;k<d.length;k++)q=u.g=d[k],S=be(q,m,!1,u)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Z(d[m]);delete a.g[u],a.h--}}this.F=null},te.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},te.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function be(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var q=u[k];if(q&&!q.da&&q.capture==d){var ke=q.listener,tt=q.ha||q.src;q.fa&&Ce(a.i,q),S=ke.call(tt,m)!==!1&&S}}return S&&!m.defaultPrevented}function we(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function ze(a){a.g=we(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class At extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(a){Le.call(this),this.h=a,this.g={}}C(Dt,Le);var vs=[];function Rn(a){J(a.g,function(u,d){this.g.hasOwnProperty(d)&&z(u)},a),a.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),Rn(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xr=c.JSON.stringify,mt=c.JSON.parse,Vt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Mr(){}Mr.prototype.h=null;function mu(a){return a.h||(a.h=a.i())}function gu(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ra(){Ue.call(this,"d")}C(Ra,Ue);function ba(){Ue.call(this,"c")}C(ba,Ue);var ar={},_u=null;function Mi(){return _u=_u||new te}ar.La="serverreachability";function yu(a){Ue.call(this,ar.La,a)}C(yu,Ue);function ws(a){const u=Mi();ie(u,new yu(u))}ar.STAT_EVENT="statevent";function vu(a,u){Ue.call(this,ar.STAT_EVENT,a),this.stat=u}C(vu,Ue);function gt(a){const u=Mi();ie(u,new vu(u,a))}ar.Ma="timingevent";function Eu(a,u){Ue.call(this,ar.Ma,a),this.size=u}C(Eu,Ue);function Ts(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function V_(a,u,d,m,S,k){a.info(function(){if(a.g)if(k)for(var q="",ke=k.split("&"),tt=0;tt<ke.length;tt++){var Ie=ke[tt].split("=");if(1<Ie.length){var at=Ie[0];Ie=Ie[1];var ct=at.split("_");q=2<=ct.length&&ct[1]=="type"?q+(at+"="+Ie+"&"):q+(at+"=redacted&")}}else q=null;else q=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+d+`
`+q})}function x_(a,u,d,m,S,k,q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+d+`
`+k+" "+q})}function Lr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+L_(a,d)+(m?" "+m:"")})}function M_(a,u){a.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function L_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return xr(d)}catch{return u}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sa;function Ui(){}C(Ui,Mr),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},Sa=new Ui;function bn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var Iu={},Pa={};function Ca(a,u,d){a.L=1,a.v=$i(ln(u)),a.m=d,a.P=!0,Au(a,null)}function Au(a,u){a.F=Date.now(),Fi(a),a.A=ln(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Uu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Tu,a.g=nh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new At(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(vs[0]=S.toString()),S=vs);for(var k=0;k<S.length;k++){var q=M(d,S[k],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ws(),V_(a.i,a.u,a.A,a.l,a.R,a.m)}bn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=un(this.g);var u=this.g.Ba();const Br=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Hu(this.g)))){this.J||ct!=4||u==7||(u==8||0>=Br?ws(3):ws(2)),ka(this);var d=this.g.Z();this.X=d;t:if(Ru(this)){var m=Hu(this.g);a="";var S=m.length,k=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),As(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,x_(this.i,this.u,this.A,this.l,this.R,ct,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,tt=this.g;if((ke=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ke)){var Ie=ke;break t}}Ie=null}if(d=Ie)Lr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oa(this,d);else{this.o=!1,this.s=3,gt(12),cr(this),As(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<q.length;)if(Bt=U_(this,q),Bt==Pa){ct==4&&(this.s=4,gt(14),d=!1),Lr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Iu){this.s=4,gt(15),Lr(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else Lr(this.i,this.l,Bt,null),Oa(this,Bt);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||q.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Lr(this.i,this.l,q,"[Invalid Chunked Response]"),cr(this),As(this);else if(0<q.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),La(at),at.M=!0,gt(11))}}else Lr(this.i,this.l,q,null),Oa(this,q);ct==4&&cr(this),this.o&&!this.J&&(ct==4?Xu(this.j,this):(this.o=!1,Fi(this)))}else ty(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),cr(this),As(this)}}}catch{}finally{}};function Ru(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function U_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Pa:(d=Number(u.substring(d,m)),isNaN(d)?Iu:(m+=1,m+d>u.length?Pa:(u=u.slice(m,m+d),a.C=m+d,u)))}bn.prototype.cancel=function(){this.J=!0,cr(this)};function Fi(a){a.S=Date.now()+a.I,bu(a,a.I)}function bu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ts(g(a.ba,a),u)}function ka(a){a.B&&(c.clearTimeout(a.B),a.B=null)}bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(M_(this.i,this.A),this.L!=2&&(ws(),gt(17)),cr(this),this.s=2,As(this)):bu(this,this.S-a)};function As(a){a.j.G==0||a.J||Xu(a.j,a)}function cr(a){ka(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Rn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Oa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Na(d.h,a))){if(!a.K&&Na(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ki(d),Hi(d);else break e;Ma(d),gt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ts(g(d.Za,d),6e3));if(1>=Cu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ur(d,11)}else if((a.K||d.g==a)&&Ki(d),!B(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Ie=S[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const at=Ie[3];at!=null&&(d.la=at,d.j.info("VER="+d.la));const ct=Ie[4];ct!=null&&(d.Aa=ct,d.j.info("SVER="+d.Aa));const Br=Ie[5];Br!=null&&typeof Br=="number"&&0<Br&&(m=1.5*Br,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bt=a.g;if(Bt){const Qi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var k=m.h;k.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Da(k,k.h),k.h=null))}if(m.D){const Ua=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ua&&(m.ya=Ua,De(m.I,m.D,Ua))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var q=a;if(m.qa=th(m,m.J?m.ia:null,m.W),q.K){ku(m.h,q);var ke=q,tt=m.L;tt&&(ke.I=tt),ke.B&&(ka(ke),Fi(ke)),m.g=q}else Yu(m);0<d.i.length&&Wi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||ur(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?ur(d,7):xa(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}ws(4)}catch{}}var F_=class{constructor(a,u){this.g=a,this.map=u}};function Su(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cu(a){return a.h?1:a.g?a.g.size:0}function Na(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Da(a,u){a.g?a.g.add(u):a.h=u}function ku(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Su.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ou(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function B_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function j_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Nu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=j_(a),m=B_(a),S=m.length,k=0;k<S;k++)u.call(void 0,m[k],d&&d[k],a)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),S=null;if(0<=m){var k=a[d].substring(0,m);S=a[d].substring(m+1)}else k=a[d];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof lr){this.h=a.h,Bi(this,a.j),this.o=a.o,this.g=a.g,ji(this,a.s),this.l=a.l;var u=a.i,d=new Ss;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Vu(this,d),this.m=a.m}else a&&(u=String(a).match(Du))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),ji(this,u[4]),this.l=Rs(u[5]||"",!0),Vu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}lr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(bs(u,xu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(bs(u,xu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(bs(d,d.charAt(0)=="/"?H_:q_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",bs(d,K_)),a.join("")};function ln(a){return new lr(a)}function Bi(a,u,d){a.j=d?Rs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ji(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Vu(a,u,d){u instanceof Ss?(a.i=u,G_(a.i,a.h)):(d||(u=bs(u,W_)),a.i=new Ss(u,a.h))}function De(a,u,d){a.i.set(u,d)}function $i(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,z_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function z_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xu=/[#\/\?@]/g,q_=/[#\?:]/g,H_=/[#\?]/g,W_=/[#\?@]/g,K_=/#/g;function Ss(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Sn(a){a.g||(a.g=new Map,a.h=0,a.i&&$_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ss.prototype,t.add=function(a,u){Sn(this),this.i=null,a=Ur(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Mu(a,u){Sn(a),u=Ur(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Lu(a,u){return Sn(a),u=Ur(a,u),a.g.has(u)}t.forEach=function(a,u){Sn(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){Sn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const S=a[m];for(let k=0;k<S.length;k++)d.push(u[m])}return d},t.V=function(a){Sn(this);let u=[];if(typeof a=="string")Lu(this,a)&&(u=u.concat(this.g.get(Ur(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Sn(this),this.i=null,a=Ur(this,a),Lu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Uu(a,u,d){Mu(a,u),0<d.length&&(a.i=null,a.g.set(Ur(a,u),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var S=k;q[m]!==""&&(S+="="+encodeURIComponent(String(q[m]))),a.push(S)}}return this.i=a.join("&")};function Ur(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function G_(a,u){u&&!a.j&&(Sn(a),a.i=null,a.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(Mu(this,m),Uu(this,S,d))},a)),a.j=u}function Q_(a,u){const d=new Is;if(c.Image){const m=new Image;m.onload=E(Pn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=E(Pn,d,"TestLoadImage: error",!1,u,m),m.onabort=E(Pn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(Pn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Y_(a,u){const d=new Is,m=new AbortController,S=setTimeout(()=>{m.abort(),Pn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?Pn(d,"TestPingServer: ok",!0,u):Pn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Pn(d,"TestPingServer: error",!1,u)})}function Pn(a,u,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function J_(){this.g=new Vt}function X_(a,u,d){const m=d||"";try{Nu(a,function(S,k){let q=S;h(S)&&(q=xr(S)),u.push(m+k+"="+encodeURIComponent(q))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Ps(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ps,Mr),Ps.prototype.g=function(){return new zi(this.l,this.j)},Ps.prototype.i=function(a){return function(){return a}}({});function zi(a,u){te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zi,te),t=zi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cs(this):ks(this),this.readyState==3&&Fu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Qa=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ks(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bu(a){let u="";return J(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Va(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Bu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,u,d))}function Be(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Be,te);var Z_=/^https?$/i,ey=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sa.g(),this.v=this.o?mu(this.o):mu(Sa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){ju(this,k);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ey,u,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,q]of d)this.g.setRequestHeader(k,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qu(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){ju(this,k)}};function ju(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,$u(a),qi(a)}function $u(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zu(this):this.bb())},t.bb=function(){zu(this)};function zu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)we(a.Ea,0,a);else if(ie(a,"readystatechange"),un(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=q===0){var S=String(a.D).match(Du)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!Z_.test(S?S.toLowerCase():"")}d=m}if(d)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var k=2<un(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",$u(a)}}finally{qi(a)}}}}function qi(a,u){if(a.g){qu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{d.onreadystatechange=m}catch{}}}function qu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),mt(u)}};function Hu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ty(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=R(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[S]||[];u[S]=k,k.push(d)}A(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Wu(a){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Os("baseRetryDelayMs",5e3,a),this.cb=Os("retryDelaySeedMs",1e4,a),this.Wa=Os("forwardChannelMaxRetries",2,a),this.wa=Os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Su(a&&a.concurrentRequestLimit),this.Da=new J_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){gt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=th(this,null,this.W),Wi(this)};function xa(a){if(Ku(a),a.G==3){var u=a.U++,d=ln(a.I);if(De(d,"SID",a.K),De(d,"RID",u),De(d,"TYPE","terminate"),Ns(a,d),u=new bn(a,a.j,u),u.L=2,u.v=$i(ln(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Fi(u)}eh(a)}function Hi(a){a.g&&(La(a),a.g.cancel(),a.g=null)}function Ku(a){Hi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ki(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Wi(a){if(!Pu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ce||Ft(),pe||(ce(),pe=!0),It.add(u,a),a.B=0}}function ny(a,u){return Cu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ts(g(a.Ga,a,u),Zu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new bn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),I(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Qu(this,S,u),d=ln(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ns(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Bu(k)))+"&"+u:this.m&&Va(d,this.m,k)),Da(this.h,S),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),S.T=!0,Ca(S,d,null)):Ca(S,d,u),this.G=2}}else this.G==3&&(a?Gu(this,a):this.i.length==0||Pu(this.h)||Gu(this))};function Gu(a,u){var d;u?d=u.l:d=a.U++;const m=ln(a.I);De(m,"SID",a.K),De(m,"RID",d),De(m,"AID",a.T),Ns(a,m),a.m&&a.o&&Va(m,a.m,a.o),d=new bn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Qu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Da(a.h,d),Ca(d,m,u)}function Ns(a,u){a.H&&J(a.H,function(d,m){De(u,m,d)}),a.l&&Nu({},function(d,m){De(u,m,d)})}function Qu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let k=-1;for(;;){const q=["count="+d];k==-1?0<d?(k=S[0].g,q.push("ofs="+k)):k=0:q.push("ofs="+k);let ke=!0;for(let tt=0;tt<d;tt++){let Ie=S[tt].g;const at=S[tt].map;if(Ie-=k,0>Ie)k=Math.max(0,S[tt].g-100),ke=!1;else try{X_(at,q,"req"+Ie+"_")}catch{m&&m(at)}}if(ke){m=q.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Yu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ce||Ft(),pe||(ce(),pe=!0),It.add(u,a),a.v=0}}function Ma(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ts(g(a.Fa,a),Zu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ts(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Hi(this),Ju(this))};function La(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ju(a){a.g=new bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);De(u,"RID","rpc"),De(u,"SID",a.K),De(u,"AID",a.T),De(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(u,"TO",a.ja),De(u,"TYPE","xmlhttp"),Ns(a,u),a.m&&a.o&&Va(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=$i(ln(u)),d.m=null,d.P=!0,Au(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),Ma(this),gt(19))};function Ki(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Xu(a,u){var d=null;if(a.g==u){Ki(a),La(a),a.g=null;var m=2}else if(Na(a.h,u))d=u.D,ku(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=Mi(),ie(m,new Eu(m,d)),Wi(a)}else Yu(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&ny(a,u)||m==2&&Ma(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),S){case 1:ur(a,5);break;case 4:ur(a,10);break;case 3:ur(a,6);break;default:ur(a,2)}}}function Zu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function ur(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const S=!m;m=new lr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bi(m,"https"),$i(m),S?Q_(m.toString(),d):Y_(m.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(u),eh(a),Ku(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function eh(a){if(a.G=0,a.ka=[],a.l){const u=Ou(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function th(a,u,d){var m=d instanceof lr?ln(d):new lr(d);if(m.g!="")u&&(m.g=u+"."+m.g),ji(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new lr(null);m&&Bi(k,m),u&&(k.g=u),S&&ji(k,S),d&&(k.l=d),m=k}return d=a.D,u=a.ya,d&&u&&De(m,d,u),De(m,"VER",a.la),Ns(a,m),m}function nh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Be(new Ps({eb:d})):new Be(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}t=rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gi(){}Gi.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){te.call(this),this.g=new Wu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Fr(this)}C(Rt,te),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){xa(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xr(a),a=d);u.i.push(new F_(u.Ya++,a)),u.G==3&&Wi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,xa(this.g),delete this.g,Rt.aa.N.call(this)};function sh(a){Ra.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(sh,Ra);function ih(){ba.call(this),this.status=1}C(ih,ba);function Fr(a){this.g=a}C(Fr,rh),Fr.prototype.ua=function(){ie(this.g,"a")},Fr.prototype.ta=function(a){ie(this.g,new sh(a))},Fr.prototype.sa=function(a){ie(this.g,new ih)},Fr.prototype.ra=function(){ie(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,eg=function(){return new Gi},Zm=function(){return Mi()},Xm=ar,Lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,wo=Li,wu.COMPLETE="complete",Jm=wu,gu.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",te.prototype.listen=te.prototype.K,$s=gu,Ym=Ps,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Qm=Be}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const Vd="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let ps="10.13.1";/**
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
 */const br=new El("@firebase/firestore");function Ls(){return br.logLevel}function ee(t,...e){if(br.logLevel<=ye.DEBUG){const n=e.map(Nl);br.debug(`Firestore (${ps}): ${t}`,...n)}}function wn(t,...e){if(br.logLevel<=ye.ERROR){const n=e.map(Nl);br.error(`Firestore (${ps}): ${t}`,...n)}}function is(t,...e){if(br.logLevel<=ye.WARN){const n=e.map(Nl);br.warn(`Firestore (${ps}): ${t}`,...n)}}function Nl(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Oe(t,e){t||ue()}function de(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new tg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ut(e)}}class WR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new GR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function YR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ng{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=YR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Ge(0,0))}static max(){return new he(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends pi{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const JR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends pi{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return JR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ve.fromString(e))}static fromName(e){return new se(Ve.fromString(e).popFirst(5))}static empty(){return new se(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ve(e.slice()))}}function XR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Xn(s,se.empty(),e)}function ZR(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(he.min(),se.empty(),-1)}static max(){return new Xn(he.max(),se.empty(),-1)}}function e1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const t1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ci(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==t1)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function r1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ki(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dl.oe=-1;function pa(t){return t==null}function Fo(t){return t===0&&1/t==-1/0}function s1(t){return typeof t=="number"&&Number.isInteger(t)&&!Fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Md(this.data.getIterator())}getIteratorFrom(e){return new Md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class Md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new $t([])}unionWith(e){let n=new it(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sg("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const i1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=i1.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function Vl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xl(t){const e=t.mapValue.fields.__previous_value__;return Vl(e)?xl(e):e}function mi(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class o1{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vl(t)?4:c1(t)?9007199254740991:a1(t)?10:11:ue()}function an(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),c=Zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?Fo(o)===Fo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(xd(o)!==xd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!an(o[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function _i(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Ld(t.timestampValue,e.timestampValue);case 4:return Ld(mi(t),mi(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Sr(i),l=Sr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ae(c[h],l[h]);if(f!==0)return f}return Ae(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ae(qe(i.latitude),qe(o.latitude));return c!==0?c:Ae(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ud(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=Ae(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Ud(E,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Ae(l[p],f[p]);if(g!==0)return g;const E=as(c[l[p]],h[f[p]]);if(E!==0)return E}return Ae(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Zn(t),r=Zn(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Ud(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=as(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function cs(t){return Uc(t)}function Uc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Uc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Uc(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Fd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fc(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function Bd(t){return!!t&&"nullValue"in t}function jd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function To(t){return!!t&&"mapValue"in t}function a1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function c1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ei(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(ei(this.value))}}function ig(t){const e=[];return ms(t.fields,(n,r)=>{const s=new st([n]);if(To(r)){const i=ig(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,he.min(),he.min(),he.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,he.min(),he.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,he.min(),he.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bo{constructor(e,n){this.position=e,this.inclusive=n}}function $d(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=as(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function l1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class og{}class We extends og{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new h1(e,n,r):n==="array-contains"?new p1(e,r):n==="in"?new m1(e,r):n==="not-in"?new g1(e,r):n==="array-contains-any"?new _1(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new d1(e,r):new f1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends og{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Gt(e,n)}matches(e){return ag(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ag(t){return t.op==="and"}function cg(t){return u1(t)&&ag(t)}function u1(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function Bc(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(cg(t))return t.filters.map(e=>Bc(e)).join(",");{const e=t.filters.map(n=>Bc(n)).join(",");return`${t.op}(${e})`}}function lg(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&lg(o,s.filters[c]),!0):!1}(t,e):void ue()}function ug(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(ug).join(" ,")+"}"}(t):"Filter"}class h1 extends We{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class d1 extends We{constructor(e,n){super(e,"in",n),this.keys=hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class f1 extends We{constructor(e,n){super(e,"not-in",n),this.keys=hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class p1 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ml(n)&&_i(n.arrayValue,this.value)}}class m1 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class g1 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class _1 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class y1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new y1(t,e,n,r,s,i,o)}function Ll(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ue=n}return e.ue}function Ul(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!l1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zd(t.startAt,e.startAt)&&zd(t.endAt,e.endAt)}function jc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Oi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function v1(t,e,n,r,s,i,o,c){return new Oi(t,e,n,r,s,i,o,c)}function dg(t){return new Oi(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fg(t){return t.collectionGroup!==null}function ti(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new it(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new jo(i,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new jo(st.keyField(),r))}return e.ce}function sn(t){const e=de(t);return e.le||(e.le=E1(e,ti(t))),e.le}function E1(t,e){if(t.limitType==="F")return qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new jo(s.field,i)});const n=t.endAt?new Bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bo(t.startAt.position,t.startAt.inclusive):null;return qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $c(t,e){const n=t.filters.concat([e]);return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zc(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return Ul(sn(t),sn(e))&&t.limitType===e.limitType}function pg(t){return`${Ll(sn(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ug(s)).join(", ")}]`),pa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=$d(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ti(r),s)||r.endAt&&!function(o,c,l){const h=$d(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ti(r),s))}(t,e)}function w1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mg(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=T1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function T1(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?as(l,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
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
 */const I1=new Fe(se.comparator);function Tn(){return I1}const gg=new Fe(se.comparator);function zs(...t){let e=gg;for(const n of t)e=e.insert(n.key,n);return e}function _g(t){let e=gg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return ni()}function yg(){return ni()}function ni(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const A1=new Fe(se.comparator),R1=new it(se.comparator);function me(...t){let e=R1;for(const n of t)e=e.add(n);return e}const b1=new it(Ae);function S1(){return b1}/**
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
 */function Fl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fo(e)?"-0":e}}function vg(t){return{integerValue:""+t}}function P1(t,e){return s1(e)?vg(e):Fl(t,e)}/**
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
 */class _a{constructor(){this._=void 0}}function C1(t,e,n){return t instanceof $o?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vl(i)&&(i=xl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof yi?wg(t,e):t instanceof vi?Tg(t,e):function(s,i){const o=Eg(s,i),c=Wd(o)+Wd(s.Pe);return Fc(o)&&Fc(s.Pe)?vg(c):Fl(s.serializer,c)}(t,e)}function k1(t,e,n){return t instanceof yi?wg(t,e):t instanceof vi?Tg(t,e):n}function Eg(t,e){return t instanceof zo?function(r){return Fc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $o extends _a{}class yi extends _a{constructor(e){super(),this.elements=e}}function wg(t,e){const n=Ig(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends _a{constructor(e){super(),this.elements=e}}function Tg(t,e){let n=Ig(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class zo extends _a{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Wd(t){return qe(t.integerValue||t.doubleValue)}function Ig(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function O1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?os(r.elements,s.elements,an):r instanceof zo&&s instanceof zo?an(r.Pe,s.Pe):r instanceof $o&&s instanceof $o}(t.transform,e.transform)}class N1{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ya{}function Ag(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,yn.none()):new Ni(t.key,t.data,yn.none());{const n=t.data,r=Mt.empty();let s=new it(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new $t(s.toArray()),yn.none())}}function D1(t,e,n){t instanceof Ni?function(s,i,o){const c=s.value.clone(),l=Gd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(s,i,o){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Gd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Rg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Ni?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=i.value.clone(),f=Qd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=Qd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Rg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function V1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Eg(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function Kd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&os(r,s,(i,o)=>O1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends ya{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends ya{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gd(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,k1(o,c,n[s]))}return r}function Qd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,C1(i,o,e))}return r}class bg extends ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x1 extends ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class M1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&D1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Ag(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Kd(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Kd(n,r))}}class Bl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return A1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bl(e,n,r,s)}}/**
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
 */class L1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Ee;function F1(t){switch(t){default:return ue();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Sg(t){if(t===void 0)return wn("GRPC error has no .code"),x.UNKNOWN;switch(t){case He.OK:return x.OK;case He.CANCELLED:return x.CANCELLED;case He.UNKNOWN:return x.UNKNOWN;case He.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case He.INTERNAL:return x.INTERNAL;case He.UNAVAILABLE:return x.UNAVAILABLE;case He.UNAUTHENTICATED:return x.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case He.NOT_FOUND:return x.NOT_FOUND;case He.ALREADY_EXISTS:return x.ALREADY_EXISTS;case He.PERMISSION_DENIED:return x.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case He.ABORTED:return x.ABORTED;case He.OUT_OF_RANGE:return x.OUT_OF_RANGE;case He.UNIMPLEMENTED:return x.UNIMPLEMENTED;case He.DATA_LOSS:return x.DATA_LOSS;default:return ue()}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B1(){return new TextEncoder}/**
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
 */const j1=new Er([4294967295,4294967295],0);function Yd(t){const e=B1().encode(t),n=new Gm;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,r],0),new Er([s,i],0)]}class jl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Er.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Er.fromNumber(r)));return s.compare(j1)===1&&(s=new Er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Yd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Yd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class va{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new va(he.min(),s,new Fe(Ae),Tn(),me())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,me(),me(),me())}}/**
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
 */class Ao{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Pg{constructor(e,n){this.targetId=e,this.me=n}}class Cg{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xd{constructor(){this.fe=0,this.ge=ef(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Di(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ef()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=Zd(),this.Qe=new Fe(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(jc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,ht.newNoDocument(o,he.min()))}else Oe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Sr(r).toUint8Array()}catch(l){if(l instanceof sg)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new jl(o,s,i)}catch(l){return is(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&jc(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ht.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new va(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=Zd(),this.Qe=new Fe(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Xd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Zd(){return new Fe(se.comparator)}function ef(){return new Fe(se.comparator)}const z1={asc:"ASCENDING",desc:"DESCENDING"},q1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H1={and:"AND",or:"OR"};class W1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qc(t,e){return t.useProto3Json||pa(e)?e:{value:e}}function qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function K1(t,e){return qo(t,e.toTimestamp())}function on(t){return Oe(!!t),he.fromTimestamp(function(n){const r=Zn(n);return new Ge(r.seconds,r.nanos)}(t))}function $l(t,e){return Hc(t,e).canonicalString()}function Hc(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Og(t){const e=Ve.fromString(t);return Oe(Mg(e)),e}function Wc(t,e){return $l(t.databaseId,e.path)}function oc(t,e){const n=Og(e);if(n.get(1)!==t.databaseId.projectId)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Dg(n))}function Ng(t,e){return $l(t.databaseId,e)}function G1(t){const e=Og(t);return e.length===4?Ve.emptyPath():Dg(e)}function Kc(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dg(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tf(t,e,n){return{name:Wc(t,e),fields:n.value.mapValue.fields}}function Q1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Oe(f===void 0||typeof f=="string"),ot.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?x.UNKNOWN:Sg(h.code);return new X(f,h.message||"")}(o);n=new Cg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oc(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):he.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ao(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oc(t,r.document),i=r.readTime?on(r.readTime):he.min(),o=ht.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oc(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new U1(s,i),c=r.targetId;n=new Pg(c,o)}}return n}function Y1(t,e){let n;if(e instanceof Ni)n={update:tf(t,e.key,e.value)};else if(e instanceof bg)n={delete:Wc(t,e.key)};else if(e instanceof Dr)n={update:tf(t,e.key,e.data),updateMask:ib(e.fieldMask)};else{if(!(e instanceof x1))return ue();n={verify:Wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:K1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function J1(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(he.min())&&(o=on(i)),new N1(o,s.transformResults||[])}(n,e))):[]}function X1(t,e){return{documents:[Ng(t,e.path)]}}function Z1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ng(t,s);const i=function(h){if(h.length!==0)return xg(Gt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Hr(g.field),direction:nb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=qc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function eb(t){let e=G1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Vg(p);return g instanceof Gt&&cg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new jo(Wr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,pa(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,E=p.values||[];return new Bo(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,E=p.values||[];return new Bo(E,g)}(n.endAt)),v1(e,s,o,i,c,"F",l,h)}function tb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>Vg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function nb(t){return z1[t]}function rb(t){return q1[t]}function sb(t){return H1[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return st.fromServerFormat(t.fieldPath)}function xg(t){return t instanceof We?function(n){if(n.op==="=="){if(jd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(Bd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(Bd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:rb(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(s=>xg(s));return r.length===1?r[0]:{compositeFilter:{op:sb(n.op),filters:r}}}(t):ue()}function ib(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Mg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ob{constructor(e){this.ct=e}}function ab(t){const e=eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zc(e,e.limit,"L"):e}/**
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
 */class cb{constructor(){this.un=new lb}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class lb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ve.comparator)).toArray()}}/**
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
 */class ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ls(0)}static kn(){return new ls(-1)}}/**
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
 */class ub{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class db{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ri(r.mutation,s,$t.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Tn();const o=ni(),c=function(){return ni()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Dr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ri(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):o.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new hb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new Fe((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||$t.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=yg();f.forEach(g=>{if(!i.has(g)){const E=Ag(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(mr());let c=-1,l=i;return o.next(h=>U.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(f=>({batchId:c,changes:_g(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zs();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(p,g){return new Oi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))});let c=zs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ri(f.mutation,h,$t.empty(),Ge.now()),ga(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class fb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:ab(s.bundledQuery),readTime:on(s.readTime)}}(n)),U.resolve()}}/**
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
 */class pb{constructor(){this.overlays=new Fe(se.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=mr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new L1(n,r));let i=this.Ir.get(n);i===void 0&&(i=me(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class mb{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class zl{constructor(){this.Tr=new it(Xe.Er),this.dr=new it(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Ve([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Ve([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=me();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(Xe.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M1(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ae);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new se(i),0);let c=new it(Ae);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),U.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _b{constructor(e){this.Mr=e,this.docs=function(){return new Fe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||e1(ZR(f),r)<=0||(s.has(f.key)||ga(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yb(this)}getSize(e){return U.resolve(this.size)}}class yb extends ub{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class vb{constructor(e){this.persistence=e,this.Nr=new gs(n=>Ll(n),Ul),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zl,this.targetCount=0,this.kr=ls.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class Eb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Dl(0),this.Kr=!1,this.Kr=!0,this.$r=new mb,this.referenceDelegate=e(this),this.Ur=new vb(this),this.indexManager=new cb,this.remoteDocumentCache=function(s){return new _b(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ob(n),this.Gr=new fb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new gb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new wb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class wb extends n1{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.Jr=new zl,this.Yr=null}static Zr(e){return new ql(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Hl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(e,n.fromCache,r,s)}}/**
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
 */class Tb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ib{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return aT()?8:r1(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Tb;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ls()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ls()<=ye.DEBUG&&ee("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ls()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):U.resolve())}Yi(e,n){if(Hd(n))return U.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zc(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,zc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Hd(n)||s.isEqual(he.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Ls()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.rs(e,o,n,XR(s,-1)).next(c=>c))})}ts(e,n){let r=new it(mg(e));return n.forEach((s,i)=>{ga(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ls()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",qr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ab{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Fe(Ae),this._s=new gs(i=>Ll(i),Ul),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new db(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Rb(t,e,n,r){return new Ab(t,e,n,r)}async function Lg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function bb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let E=U.resolve();return g.forEach(C=>{E=E.next(()=>f.getEntry(l,C)).next(N=>{const O=h.docVersions.get(C);Oe(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ug(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Sb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ot.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),function(N,O,$){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,E,f)&&c.push(n.Ur.updateTargetData(i,E))});let l=Tn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Pb(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function Pb(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Cb(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kb(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Gc(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ki(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function nf(t,e,n){const r=de(t);let s=he.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=de(l),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,sn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:me())).next(c=>(Ob(r,w1(e),c),{documents:c,Ts:i})))}function Ob(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class rf{constructor(){this.activeTargetIds=S1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nb{constructor(){this.so=new rf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Db{_o(e){}shutdown(){}}/**
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
 */class sf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oo=null;function ac(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
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
 */const Vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const lt="WebChannelConnection";class Mb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=ac(),l=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(f=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw is("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Vb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ac();return new Promise((o,c)=>{const l=new Qm;l.setWithCredentials(!0),l.listenOnce(Jm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wo.NO_ERROR:const f=l.getResponseJson();ee(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case wo.TIMEOUT:ee(lt,`RPC '${e}' ${i} timed out`),c(new X(x.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const p=l.getStatus();if(ee(lt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const C=function(O){const $=O.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf($)>=0?$:x.UNKNOWN}(E.status);c(new X(C,E.message))}else c(new X(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X(x.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{ee(lt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(lt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=ac(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eg(),c=Zm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Ym({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(lt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,E=!1;const C=new xb({Io:O=>{E?ee(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(ee(lt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(lt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,$,B)=>{O.listen($,L=>{try{B(L)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(p,$s.EventType.OPEN,()=>{E||(ee(lt,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(p,$s.EventType.CLOSE,()=>{E||(E=!0,ee(lt,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(p,$s.EventType.ERROR,O=>{E||(E=!0,is(lt,`RPC '${e}' stream ${s} transport errored:`,O),C.So(new X(x.UNAVAILABLE,"The operation could not be completed")))}),N(p,$s.EventType.MESSAGE,O=>{var $;if(!E){const B=O.data[0];Oe(!!B);const L=B,Q=L.error||(($=L[0])===null||$===void 0?void 0:$.error);if(Q){ee(lt,`RPC '${e}' stream ${s} received error:`,Q);const oe=Q.status;let J=function(v){const I=He[v];if(I!==void 0)return Sg(I)}(oe),A=Q.message;J===void 0&&(J=x.INTERNAL,A="Unknown error status: "+oe+" with message "+Q.message),E=!0,C.So(new X(J,A)),p.close()}else ee(lt,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),N(c,Xm.STAT_EVENT,O=>{O.stat===Lc.PROXY?ee(lt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Lc.NOPROXY&&ee(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function cc(){return typeof document<"u"?document:null}/**
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
 */function Ea(t){return new W1(t,!0)}/**
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
 */class Fg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Bg{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lb extends Bg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Q1(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?on(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Kc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=jc(l)?{documents:X1(i,l)}:{query:Z1(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=kg(i,o.resumeToken);const h=qc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=qo(i,o.snapshotVersion.toTimestamp());const h=qc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=tb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Kc(this.serializer),n.removeTarget=e,this.a_(n)}}class Ub extends Bg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=J1(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Kc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Y1(this.serializer,r))};this.a_(n)}}/**
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
 */class Fb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Hc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(x.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Hc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Bb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class jb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Vr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.L_.add(4),await Vi(h),h.q_.set("Unknown"),h.L_.delete(4),await wa(h)}(this))})}),this.q_=new Bb(r,s)}}async function wa(t){if(Vr(t))for(const e of t.B_)await e(!0)}async function Vi(t){for(const e of t.B_)await e(!1)}function jg(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ql(n)?Gl(n):_s(n).r_()&&Kl(n,e))}function Wl(t,e){const n=de(t),r=_s(n);n.N_.delete(e),r.r_()&&$g(n,e),n.N_.size===0&&(r.r_()?r.o_():Vr(n)&&n.q_.set("Unknown"))}function Kl(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).A_(e)}function $g(t,e){t.Q_.xe(e),_s(t).R_(e)}function Gl(t){t.Q_=new $1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.q_.v_()}function Ql(t){return Vr(t)&&!_s(t).n_()&&t.N_.size>0}function Vr(t){return de(t).L_.size===0}function zg(t){t.Q_=void 0}async function $b(t){t.q_.set("Online")}async function zb(t){t.N_.forEach((e,n)=>{Kl(t,e)})}async function qb(t,e){zg(t),Ql(t)?(t.q_.M_(e),Gl(t)):t.q_.set("Unknown")}async function Hb(t,e,n){if(t.q_.set("Online"),e instanceof Cg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(t,r)}else if(e instanceof Ao?t.Q_.Ke(e):e instanceof Pg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await Ug(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),$g(i,l);const p=new $n(f.target,l,h,f.sequenceNumber);Kl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Ho(t,r)}}async function Ho(t,e,n){if(!ki(e))throw e;t.L_.add(1),await Vi(t),t.q_.set("Offline"),n||(n=()=>Ug(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await wa(t)})}function qg(t,e){return e().catch(n=>Ho(t,n,e))}async function Ta(t){const e=de(t),n=er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Wb(e);)try{const s=await Cb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Kb(e,s)}catch(s){await Ho(e,s)}Hg(e)&&Wg(e)}function Wb(t){return Vr(t)&&t.O_.length<10}function Kb(t,e){t.O_.push(e);const n=er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Hg(t){return Vr(t)&&!er(t).n_()&&t.O_.length>0}function Wg(t){er(t).start()}async function Gb(t){er(t).p_()}async function Qb(t){const e=er(t);for(const n of t.O_)e.m_(n.mutations)}async function Yb(t,e,n){const r=t.O_.shift(),s=Bl.from(r,e,n);await qg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function Jb(t,e){e&&er(t).V_&&await async function(r,s){if(function(o){return F1(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();er(r).s_(),await qg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(r)}}(t,e),Hg(t)&&Wg(t)}async function of(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Vr(n);n.L_.add(3),await Vi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await wa(n)}async function Xb(t,e){const n=de(t);e?(n.L_.delete(2),await wa(n)):e||(n.L_.add(2),await Vi(n),n.q_.set("Unknown"))}function _s(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new Lb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:$b.bind(null,t),Ro:zb.bind(null,t),mo:qb.bind(null,t),d_:Hb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ql(t)?Gl(t):t.q_.set("Unknown")):(await t.K_.stop(),zg(t))})),t.K_}function er(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new Ub(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Gb.bind(null,t),mo:Jb.bind(null,t),f_:Qb.bind(null,t),g_:Yb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ta(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Yl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Yl(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(t,e){if(wn("AsyncQueue",`${e}: ${t}`),ki(t))return new X(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class af{constructor(){this.W_=new Fe(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new us(e,n,es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Zb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class eS{constructor(){this.queries=cf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=cf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new X(x.ABORTED,"Firestore shutting down"))}}function cf(){return new gs(t=>pg(t),ma)}async function tS(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Zb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Jl(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xl(n)}async function nS(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Xl(n)}function sS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xl(t){t.Y_.forEach(e=>{e.next()})}var Qc,lf;(lf=Qc||(Qc={})).ea="default",lf.Cache="cache";class iS{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qc.Cache}}/**
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
 */class Kg{constructor(e){this.key=e}}class Gg{constructor(e){this.key=e}}class oS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=mg(e),this.Ra=new es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new af,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),E=ga(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;g&&E?g.data.isEqual(E.data)?C!==N&&(r.track({type:3,doc:E}),O=!0):this.ga(g,E)||(r.track({type:2,doc:E}),O=!0,(l&&this.Aa(E,l)>0||h&&this.Aa(E,h)<0)&&(c=!0)):!g&&E?(r.track({type:0,doc:E}),O=!0):g&&!E&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(E?(o=o.add(E),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(E,C){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return N(E)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new us(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new af,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Gg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Kg(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return us.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class aS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cS{constructor(e){this.key=e,this.va=!1}}class lS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new gs(c=>pg(c),ma),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(se.comparator),this.Na=new Map,this.La=new zl,this.Ba={},this.ka=new Map,this.qa=ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uS(t,e,n=!0){const r=e_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Qg(r,e,n,!0),s}async function hS(t,e){const n=e_(t);await Qg(n,e,!0,!1)}async function Qg(t,e,n,r){const s=await kb(t.localStore,sn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await dS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&jg(t.remoteStore,s),c}async function dS(t,e,n,r,s){t.Ka=(p,g,E)=>async function(N,O,$,B){let L=O.view.ma($);L.ns&&(L=await nf(N.localStore,O.query,!1).then(({documents:A})=>O.view.ma(A,L)));const Q=B&&B.targetChanges.get(O.targetId),oe=B&&B.targetMismatches.get(O.targetId)!=null,J=O.view.applyChanges(L,N.isPrimaryClient,Q,oe);return hf(N,O.targetId,J.wa),J.snapshot}(t,p,g,E);const i=await nf(t.localStore,e,!0),o=new oS(e,i.Ts),c=o.ma(i.documents),l=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);hf(t,n,h.wa);const f=new aS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function fS(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ma(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wl(r.remoteStore,s.targetId),Yc(r,s.targetId)}).catch(Ci)):(Yc(r,s.targetId),await Gc(r.localStore,s.targetId,!0))}async function pS(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wl(n.remoteStore,r.targetId))}async function mS(t,e,n){const r=TS(t);try{const s=await function(o,c){const l=de(o),h=Ge.now(),f=c.reduce((E,C)=>E.add(C.key),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=Tn(),N=me();return l.cs.getEntries(E,f).next(O=>{C=O,C.forEach(($,B)=>{B.isValidDocument()||(N=N.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,C)).next(O=>{p=O;const $=[];for(const B of c){const L=V1(B,p.get(B.key).overlayedDocument);L!=null&&$.push(new Dr(B.key,L,ig(L.value.mapValue),yn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,$,c)}).next(O=>{g=O;const $=O.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(E,O.batchId,$)})}).then(()=>({batchId:g.batchId,changes:_g(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Fe(Ae)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await xi(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=Jl(s,"Failed to persist write");n.reject(i)}}async function Yg(t,e){const n=de(t);try{const r=await Sb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Oe(o.va):s.removedDocuments.size>0&&(Oe(o.va),o.va=!1))}),await xi(n,r,e)}catch(r){await Ci(r)}}function uf(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Xl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gS(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Fe(se.comparator);o=o.insert(i,ht.newNoDocument(i,he.min()));const c=me().add(i),l=new va(he.min(),new Map,new Fe(Ae),o,c);await Yg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Zl(r)}else await Gc(r.localStore,e,!1).then(()=>Yc(r,e,n)).catch(Ci)}async function _S(t,e){const n=de(t),r=e.batch.batchId;try{const s=await bb(n.localStore,e);Xg(n,r,null),Jg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xi(n,s)}catch(s){await Ci(s)}}async function yS(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Oe(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Xg(r,e,n),Jg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xi(r,s)}catch(s){await Ci(s)}}function Jg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Xg(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Zg(t,r)})}function Zg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Wl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Zl(t))}function hf(t,e,n){for(const r of n)r instanceof Kg?(t.La.addReference(r.key,e),vS(t,r)):r instanceof Gg?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Zg(t,r.key)):ue()}function vS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Zl(t))}function Zl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new cS(n)),t.Oa=t.Oa.insert(n,r),jg(t.remoteStore,new $n(sn(dg(n.path)),r,"TargetPurposeLimboResolution",Dl.oe))}}async function xi(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hl.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>U.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!ki(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const E=f.os.get(g),C=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function ES(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Lg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new X(x.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xi(n,r.hs)}}function wS(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function e_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gS.bind(null,e),e.Ca.d_=rS.bind(null,e.eventManager),e.Ca.$a=sS.bind(null,e.eventManager),e}function TS(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yS.bind(null,e),e}class df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ea(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Rb(this.persistence,new Ib,e.initialUser,this.serializer)}createPersistence(e){return new Eb(ql.Zr,this.serializer)}createSharedClientState(e){return new Nb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ES.bind(null,this.syncEngine),await Xb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eS}()}createDatastore(e){const n=Ea(e.databaseInfo.databaseId),r=function(i){return new Mb(i)}(e.databaseInfo);return function(i,o,c,l){return new Fb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new jb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>uf(this.syncEngine,n,0),function(){return sf.D()?new sf:new Db}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new lS(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Vi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class AS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class RS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ee("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ee("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Lg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ff(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SS(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>of(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>of(e.remoteStore,s)),t._onlineComponents=e}function bS(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function SS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!bS(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await lc(t,new df)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await lc(t,new df);return t._offlineComponents}async function t_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await ff(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await ff(t,new IS))),t._onlineComponents}function PS(t){return t_(t).then(e=>e.syncEngine)}async function CS(t){const e=await t_(t),n=e.eventManager;return n.onListen=uS.bind(null,e.syncEngine),n.onUnlisten=fS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pS.bind(null,e.syncEngine),n}function kS(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new AS({next:g=>{o.enqueueAndForget(()=>nS(i,p)),g.fromCache&&l.source==="server"?h.reject(new X(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new iS(c,f,{includeMetadataChanges:!0,_a:!0});return tS(i,p)}(await CS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function n_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pf=new Map;/**
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
 */function r_(t,e,n){if(!n)throw new X(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OS(t,e,n,r){if(e===!0&&r===!0)throw new X(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!se.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gf(t){if(se.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new X(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _f{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _f({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _f(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zR;switch(r.type){case"firstParty":return new KR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pf.get(n);r&&(ee("ComponentProvider","Removing Datastore"),pf.delete(n),r.terminate())}(this),Promise.resolve()}}function NS(t,e,n,r={}){var s;const i=(t=Ei(t,Aa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ut.MOCK_USER;else{c=am(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(h)}t._authCredentials=new qR(new tg(c,l))}}/**
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
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Gn extends ys{constructor(e,n,r){super(e,n,dg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new se(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function wC(t,e,...n){if(t=Je(t),r_("collection","path",e),t instanceof Aa){const r=Ve.fromString(e,...n);return gf(r),new Gn(t,null,r)}{if(!(t instanceof kt||t instanceof Gn))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return gf(r),new Gn(t.firestore,null,r)}}function TC(t,e,...n){if(t=Je(t),arguments.length===1&&(e=ng.newId()),r_("doc","path",e),t instanceof Aa){const r=Ve.fromString(e,...n);return mf(r),new kt(t,null,new se(r))}{if(!(t instanceof kt||t instanceof Gn))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return mf(r),new kt(t.firestore,t instanceof Gn?t.converter:null,new se(r))}}/**
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
 */class DS{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Fg(this,"async_queue_retry"),this.Eu=()=>{const n=cc();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Kn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ki(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Yl.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ue()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class eu extends Aa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new DS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i_(this),this._firestoreClient.terminate()}}function VS(t,e){const n=typeof t=="object"?t:Tl(),r=typeof t=="string"?t:"(default)",s=ua(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sm("firestore");i&&NS(s,...i)}return s}function s_(t){return t._firestoreClient||i_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function i_(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new o1(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,n_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new RS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(ot.fromBase64String(e))}catch(n){throw new X(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class o_{constructor(e){this._methodName=e}}/**
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
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */class ru{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const xS=/^__.*__$/;class MS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}function a_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class su{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Wo(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(a_(this.wu)&&xS.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class LS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ea(e)}Nu(e,n,r,s=!1){return new su({wu:e,methodName:n,Ou:r,path:st.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function c_(t){const e=t._freezeSettings(),n=Ea(t._databaseId);return new LS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function US(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);h_("Data must be an object, but it was:",o,r);const c=l_(r,o);let l,h;if(i.merge)l=new $t(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=BS(e,p,n);if(!o.contains(g))throw new X(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$S(f,g)||f.push(g)}l=new $t(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new MS(new Mt(c),l,h)}function FS(t,e,n,r=!1){return iu(n,t.Nu(r?4:3,e))}function iu(t,e){if(u_(t=Je(t)))return h_("Unsupported field value:",e,t),l_(t,e);if(t instanceof o_)return function(r,s){if(!a_(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=iu(c,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:qo(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qo(s.serializer,i)}}if(r instanceof nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:kg(s.serializer,r._byteString)};if(r instanceof kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$l(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ru)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return Fl(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ia(r)}`)}(t,e)}function l_(t,e){const n={};return rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=iu(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function u_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof nu||t instanceof hs||t instanceof kt||t instanceof o_||t instanceof ru)}function h_(t,e,n){if(!u_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ia(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function BS(t,e,n){if((e=Je(e))instanceof tu)return e._internalPath;if(typeof e=="string")return d_(t,e);throw Wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function d_(t,e,n){if(e.search(jS)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tu(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(x.INVALID_ARGUMENT,c+t+l)}function $S(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class f_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(p_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zS extends f_{data(){return super.data()}}function p_(t,e){return typeof e=="string"?d_(t,e):e instanceof tu?e._internalPath:e._delegate._internalPath}/**
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
 */function qS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ou{}class HS extends ou{}function IC(t,e,...n){let r=[];e instanceof ou&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof cu).length,c=i.filter(l=>l instanceof au).length;if(o>1||o>0&&c>0)throw new X(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class au extends HS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new au(e,n,r)}_apply(e){const n=this._parse(e);return m_(e._query,n),new ys(e.firestore,e.converter,$c(e._query,n))}_parse(e){const n=c_(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vf(p,f);const E=[];for(const C of p)E.push(yf(l,i,C));g={arrayValue:{values:E}}}else g=yf(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vf(p,f),g=FS(c,o,p,f==="in"||f==="not-in");return We.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class cu extends ou{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)m_(o,l),o=$c(o,l)}(e._query,n),new ys(e.firestore,e.converter,$c(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yf(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new X(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fg(e)&&n.indexOf("/")!==-1)throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!se.isDocumentKey(r))throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fd(t,new se(r))}if(n instanceof kt)return Fd(t,n._key);throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function vf(t,e){if(!Array.isArray(t)||t.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function m_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WS{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new ru(i)}convertGeoPoint(e){return new nu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mi(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Oe(Mg(r));const s=new gi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function KS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GS extends f_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(p_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends GS{data(e={}){return super.data(e)}}class QS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ao(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ao(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:YS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}class JS extends WS{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function AC(t){t=Ei(t,ys);const e=Ei(t.firestore,eu),n=s_(e),r=new JS(e);return qS(t._query),kS(n,t._query).then(s=>new QS(e,r,t,s))}function RC(t,e,n){t=Ei(t,kt);const r=Ei(t.firestore,eu),s=KS(t.converter,e);return XS(r,[US(c_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yn.none())])}function XS(t,e){return function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget(async()=>mS(await PS(r),s,i)),i.promise}(s_(t),e)}(function(e,n=!0){(function(s){ps=s})(Or),Ir(new Jn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new eu(new HR(r.getProvider("auth-internal")),new QR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tn(Vd,"4.7.1",e),tn(Vd,"4.7.1","esm2017")})();/**
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
 */const g_="firebasestorage.googleapis.com",__="storageBucket",ZS=2*60*1e3,eP=10*60*1e3;/**
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
 */class $e extends cn{constructor(e,n,r=0){super(uc(e),`Firebase Storage: ${n} (${uc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function uc(t){return"storage/"+t}function lu(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(je.UNKNOWN,t)}function tP(t){return new $e(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nP(t){return new $e(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(je.UNAUTHENTICATED,t)}function sP(){return new $e(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function iP(t){return new $e(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oP(){return new $e(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aP(){return new $e(je.CANCELED,"User canceled the upload/download.")}function cP(t){return new $e(je.INVALID_URL,"Invalid URL '"+t+"'.")}function lP(t){return new $e(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function uP(){return new $e(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+__+"' property when initializing the app?")}function hP(){return new $e(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dP(){return new $e(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fP(t){return new $e(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jc(t){return new $e(je.INVALID_ARGUMENT,t)}function y_(){return new $e(je.APP_DELETED,"The Firebase app was deleted.")}function pP(t){return new $e(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function si(t,e){return new $e(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Us(t){throw new $e(je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw lP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(Q){Q.path_=decodeURIComponent(Q.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},N=n===g_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",$=new RegExp(`^https?://${N}/${s}/${O}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:E,indices:C,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let Q=0;Q<L.length;Q++){const oe=L[Q],J=oe.regex.exec(e);if(J){const A=J[oe.indices.bucket];let _=J[oe.indices.path];_||(_=""),r=new Ct(A,_),oe.postModify(r);break}}if(r==null)throw cP(e);return r}}class mP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(E,l())},O)}function g(){i&&clearTimeout(i)}function E(O,...$){if(h){g();return}if(O){g(),f.call(null,O,...$);return}if(l()||o){g(),f.call(null,O,...$);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,p(L)}let C=!1;function N(O){C||(C=!0,g(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function _P(t){t(!1)}/**
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
 */function yP(t){return t!==void 0}function vP(t){return typeof t=="object"&&!Array.isArray(t)}function uu(t){return typeof t=="string"||t instanceof String}function Ef(t){return hu()&&t instanceof Blob}function hu(){return typeof Blob<"u"}function wf(t,e,n,r){if(r<e)throw Jc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function du(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function v_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var wr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wr||(wr={}));/**
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
 */function EP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class wP{constructor(e,n,r,s,i,o,c,l,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,C)=>{this.resolve_=E,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===wr.NO_ERROR,l=i.getStatus();if(!c||EP(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===wr.ABORT;r(!1,new co(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new co(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());yP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=lu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?y_():aP();o(l)}else{const l=oP();o(l)}};this.canceled_?n(!1,new co(!1,null,!0)):this.backoffId_=gP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_P(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bP(t,e,n,r,s,i,o=!0){const c=v_(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return AP(h,e),TP(h,n),IP(h,i),RP(h,r),new wP(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function SP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function PP(...t){const e=SP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(hu())return new Blob(t);throw new $e(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function CP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function kP(t){if(typeof atob>"u")throw fP("base-64");return atob(t)}/**
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
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hc{constructor(e,n){this.data=e,this.contentType=n||null}}function OP(t,e){switch(t){case en.RAW:return new hc(E_(e));case en.BASE64:case en.BASE64URL:return new hc(w_(t,e));case en.DATA_URL:return new hc(DP(e),VP(e))}throw lu()}function E_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NP(t){let e;try{e=decodeURIComponent(t)}catch{throw si(en.DATA_URL,"Malformed data URL.")}return E_(e)}function w_(t,e){switch(t){case en.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw si(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw si(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kP(e)}catch(s){throw s.message.includes("polyfill")?s:si(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class T_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw si(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DP(t){const e=new T_(t);return e.base64?w_(en.BASE64,e.rest):NP(e.rest)}function VP(t){return new T_(t).contentType}function xP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class jn{constructor(e,n){let r=0,s="";Ef(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ef(this.data_)){const r=this.data_,s=CP(r,e,n);return s===null?null:new jn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jn(r,!0)}}static getBlob(...e){if(hu()){const n=e.map(r=>r instanceof jn?r.data_:r);return new jn(PP.apply(null,n))}else{const n=e.map(o=>uu(o)?OP(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new jn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function I_(t){let e;try{e=JSON.parse(t)}catch{return null}return vP(e)?e:null}/**
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
 */function MP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function A_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function UP(t,e){return e}class _t{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||UP}}let lo=null;function FP(t){return!uu(t)||t.length<2?t:A_(t)}function R_(){if(lo)return lo;const t=[];t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));function e(i,o){return FP(o)}const n=new _t("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new _t("size");return s.xform=r,t.push(s),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),lo=t,lo}function BP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ct(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function jP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return BP(r,t),r}function b_(t,e,n){const r=I_(e);return r===null?null:jP(t,r,n)}function $P(t,e,n,r){const s=I_(e);if(s===null||!uu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),E=du(g,n,r),C=v_({alt:"media",token:h});return E+C})[0]}function zP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class S_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function P_(t){if(!t)throw lu()}function qP(t,e){function n(r,s){const i=b_(t,s,e);return P_(i!==null),i}return n}function HP(t,e){function n(r,s){const i=b_(t,s,e);return P_(i!==null),$P(i,s,t.host,t._protocol)}return n}function C_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=sP():s=rP():n.getStatus()===402?s=nP(t.bucket):n.getStatus()===403?s=iP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function WP(t){const e=C_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=tP(t.path)),i.serverResponse=s.serverResponse,i}return n}function KP(t,e,n){const r=e.fullServerUrl(),s=du(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new S_(s,i,HP(t,n),o);return c.errorHandler=WP(e),c}function GP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=GP(null,e)),r}function YP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let L="";for(let Q=0;Q<2;Q++)L=L+Math.random().toString().slice(2);return L}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=QP(e,r,s),f=zP(h,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+l+"--",E=jn.getBlob(p,r,g);if(E===null)throw hP();const C={name:h.fullPath},N=du(i,t.host,t._protocol),O="POST",$=t.maxUploadRetryTime,B=new S_(N,O,qP(t,n),$);return B.urlParams=C,B.headers=o,B.body=E.uploadData(),B.errorHandler=C_(e),B}class JP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Us("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Us("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Us("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Us("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Us("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XP extends JP{initXhr(){this.xhr_.responseType="text"}}function k_(){return new XP}/**
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
 */class Cr{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cr(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A_(this._location.path)}get storage(){return this._service}get parent(){const e=MP(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new Cr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pP(e)}}function ZP(t,e,n){t._throwIfRoot("uploadBytes");const r=YP(t.storage,t._location,R_(),new jn(e,!0),n);return t.storage.makeRequestWithTokens(r,k_).then(s=>({metadata:s,ref:t}))}function eC(t){t._throwIfRoot("getDownloadURL");const e=KP(t.storage,t._location,R_());return t.storage.makeRequestWithTokens(e,k_).then(n=>{if(n===null)throw dP();return n})}function tC(t,e){const n=LP(t._location.path,e),r=new Ct(t._location.bucket,n);return new Cr(t.storage,r)}/**
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
 */function nC(t){return/^[A-Za-z]+:\/\//.test(t)}function rC(t,e){return new Cr(t,e)}function O_(t,e){if(t instanceof fu){const n=t;if(n._bucket==null)throw uP();const r=new Cr(n,n._bucket);return e!=null?O_(r,e):r}else return e!==void 0?tC(t,e):t}function sC(t,e){if(e&&nC(e)){if(t instanceof fu)return rC(t,e);throw Jc("To use ref(service, url), the first argument must be a Storage instance.")}else return O_(t,e)}function Tf(t,e){const n=e==null?void 0:e[__];return n==null?null:Ct.makeFromBucketSpec(n,t)}function iC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:am(s,t.app.options.projectId))}class fu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=g_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZS,this._maxUploadRetryTime=eP,this._requests=new Set,s!=null?this._bucket=Ct.makeFromBucketSpec(s,this._host):this._bucket=Tf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=Tf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new mP(y_());{const o=bP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const If="@firebase/storage",Af="0.13.1";/**
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
 */const N_="storage";function bC(t,e,n){return t=Je(t),ZP(t,e,n)}function SC(t){return t=Je(t),eC(t)}function PC(t,e){return t=Je(t),sC(t,e)}function oC(t=Tl(),e){t=Je(t);const r=ua(t,N_).getImmediate({identifier:e}),s=sm("storage");return s&&aC(r,...s),r}function aC(t,e,n,r={}){iC(t,e,n,r)}function cC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new fu(n,r,s,e,Or)}function lC(){Ir(new Jn(N_,cC,"PUBLIC").setMultipleInstances(!0)),tn(If,Af,""),tn(If,Af,"esm2017")}lC();const uC={apiKey:"AIzaSyD0PwqFVRBxyefTFw31dvdJ-lrFFtDjvFU",authDomain:"looks-b11a8.firebaseapp.com",databaseURL:"https://looks-b11a8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"looks-b11a8",storageBucket:"looks-b11a8.appspot.com",messagingSenderId:"529873039695",appId:"1:529873039695:web:401c380738ac548b17553a"},D_=um(uC),Rf=NA(D_),CC=VS(D_),kC=oC(),pu=bE(UA);pu.use(kE());pu.use(Km);pu.mount("#app");export{AC as A,RC as B,TC as C,PC as D,bC as E,St as F,SC as G,kC as H,xt as I,jw as J,sr as _,ge as a,Se as b,Ht as c,ds as d,Ke as e,mC as f,Bw as g,dC as h,_e as i,Rf as j,gC as k,Jy as l,zv as m,fC as n,Ot as o,ap as p,cp as q,Xo as r,_C as s,Vf as t,Zp as u,pC as v,hC as w,wC as x,CC as y,IC as z};
