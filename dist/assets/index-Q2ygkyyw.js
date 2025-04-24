(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},Jr=[],sn=()=>{},gy=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gl=t=>t.startsWith("onUpdate:"),Qe=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},my=Object.prototype.hasOwnProperty,Re=(t,e)=>my.call(t,e),ae=Array.isArray,Xr=t=>Ti(t)==="[object Map]",sa=t=>Ti(t)==="[object Set]",yh=t=>Ti(t)==="[object Date]",_e=t=>typeof t=="function",Ue=t=>typeof t=="string",un=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",$d=t=>(Oe(t)||_e(t))&&_e(t.then)&&_e(t.catch),jd=Object.prototype.toString,Ti=t=>jd.call(t),_y=t=>Ti(t).slice(8,-1),Bd=t=>Ti(t)==="[object Object]",_l=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yy=/-(\w)/g,Gn=ia(t=>t.replace(yy,(e,n)=>n?n.toUpperCase():"")),vy=/\B([A-Z])/g,rr=ia(t=>t.replace(vy,"-$1").toLowerCase()),Hd=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=ia(t=>t?`on${Hd(t)}`:""),Bn=(t,e)=>!Object.is(t,e),oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ao=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ty=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let vh;const oa=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?Ay(r):yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Oe(t))return t}const Ey=/;(?![^(]*\))/g,Iy=/:([^]+)/,wy=/\/\*[^]*?\*\//g;function Ay(t){const e={};return t.replace(wy,"").split(Ey).forEach(n=>{if(n){const r=n.split(Iy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function aa(t){let e="";if(Ue(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=aa(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const by="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sy=pl(by);function Wd(t){return!!t||t===""}function Ry(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ca(t[r],e[r]);return n}function ca(t,e){if(t===e)return!0;let n=yh(t),r=yh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=un(t),r=un(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?Ry(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ca(t[o],e[o]))return!1}}return String(t)===String(e)}function Cy(t,e){return t.findIndex(n=>ca(n,e))}const Kd=t=>!!(t&&t.__v_isRef===!0),Zr=t=>Ue(t)?t:t==null?"":ae(t)||Oe(t)&&(t.toString===jd||!_e(t.toString))?Kd(t)?Zr(t.value):JSON.stringify(t,zd,2):String(t),zd=(t,e)=>Kd(e)?zd(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nc(r,i)+" =>"]=s,n),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:un(e)?nc(e):Oe(e)&&!ae(e)&&!Bd(e)?String(e):e,nc=(t,e="")=>{var n;return un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Py{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ky(){return Ct}let De;const rc=new WeakSet;class Gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Th(this),Jd(this);const e=De,n=zt;De=this,zt=!0;try{return this.fn()}finally{Xd(this),De=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)El(e);this.deps=this.depsTail=void 0,Th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sc(this)&&this.run()}get dirty(){return Sc(this)}}let Qd=0,zs,Gs;function Yd(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=zs,zs=t}function vl(){Qd++}function Tl(){if(--Qd>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Jd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),El(r),Dy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ii))return;t.globalVersion=ii;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sc(t)){t.flags&=-3;return}const n=De,r=zt;De=t,zt=!0;try{Jd(t);const s=t.fn(t._value);(e.version===0||Bn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,zt=r,Xd(t),t.flags&=-3}}function El(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)El(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const ep=[];function sr(){ep.push(zt),zt=!1}function ir(){const t=ep.pop();zt=t===void 0?!0:t}function Th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let ii=0;class Oy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Il{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!zt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Oy(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,tp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,ii++,this.notify(e)}notify(e){vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tl()}}}function tp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rc=new WeakMap,Ir=Symbol(""),Cc=Symbol(""),oi=Symbol("");function ut(t,e,n){if(zt&&De){let r=Rc.get(t);r||Rc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Il),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const o=Rc.get(t);if(!o){ii++;return}const c=l=>{l&&l.trigger()};if(vl(),e==="clear")o.forEach(c);else{const l=ae(t),h=l&&_l(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,v)=>{(v==="length"||v===oi||!un(v)&&v>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(oi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Ir)),Xr(t)&&c(o.get(Cc)));break;case"delete":l||(c(o.get(Ir)),Xr(t)&&c(o.get(Cc)));break;case"set":Xr(t)&&c(o.get(Ir));break}}Tl()}function Br(t){const e=Se(t);return e===t?e:(ut(e,"iterate",oi),jt(t)?e:e.map(ht))}function la(t){return ut(t=Se(t),"iterate",oi),t}const Ny={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,ht)},concat(...t){return Br(this).concat(...t.map(e=>ae(e)?Br(e):e))},entries(){return sc(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return mn(this,"find",t,e,ht,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return Br(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return Eh(this,"reduce",t,e)},reduceRight(t,...e){return Eh(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Br(this).toReversed()},toSorted(t){return Br(this).toSorted(t)},toSpliced(...t){return Br(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return sc(this,"values",ht)}};function sc(t,e,n){const r=la(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Vy=Array.prototype;function mn(t,e,n,r,s,i){const o=la(t),c=o!==t&&!jt(t),l=o[e];if(l!==Vy[e]){const p=l.apply(t,i);return c?ht(p):p}let h=n;o!==t&&(c?h=function(p,v){return n.call(this,ht(p),v,t)}:n.length>2&&(h=function(p,v){return n.call(this,p,v,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Eh(t,e,n,r){const s=la(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ht(c),l,t)}),s[e](i,...r)}function ic(t,e,n){const r=Se(t);ut(r,"iterate",oi);const s=r[e](...n);return(s===-1||s===!1)&&Sl(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Ls(t,e,n=[]){sr(),vl();const r=Se(t)[e].apply(t,n);return Tl(),ir(),r}const My=pl("__proto__,__v_isRef,__isVue"),np=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(un));function xy(t){un(t)||(t=String(t));const e=Se(this);return ut(e,"has",t),e.hasOwnProperty(t)}class rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ky:ap:i?op:ip).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=Ny[n]))return l;if(n==="hasOwnProperty")return xy}const c=Reflect.get(e,n,pt(e)?e:r);return(un(n)?np.has(n):My(n))||(s||ut(e,"get",n),i)?c:pt(c)?o&&_l(n)?c:c.value:Oe(c)?s?cp(c):Al(c):c}}class sp extends rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=br(i);if(!jt(r)&&!br(r)&&(i=Se(i),r=Se(r)),!ae(e)&&pt(i)&&!pt(r))return l?!1:(i.value=r,!0)}const o=ae(e)&&_l(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,pt(e)?e:s);return e===Se(s)&&(o?Bn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!un(n)||!np.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",ae(e)?"length":Ir),Reflect.ownKeys(e)}}class Ly extends rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fy=new sp,Uy=new Ly,$y=new sp(!0);const Pc=t=>t,Gi=t=>Reflect.getPrototypeOf(t);function jy(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Xr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Pc:e?kc:ht;return!e&&ut(i,"iterate",l?Cc:Ir),{next(){const{value:p,done:v}=h.next();return v?{value:p,done:v}:{value:c?[d(p[0]),d(p[1])]:d(p),done:v}},[Symbol.iterator](){return this}}}}function Qi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function By(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),c=Se(s);t||(Bn(s,c)&&ut(o,"get",s),ut(o,"get",c));const{has:l}=Gi(o),h=e?Pc:t?kc:ht;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ut(Se(s),"iterate",Ir),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),c=Se(s);return t||(Bn(s,c)&&ut(o,"has",s),ut(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Se(c),h=e?Pc:t?kc:ht;return!t&&ut(l,"iterate",Ir),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Qe(n,t?{add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear")}:{add(s){!e&&!jt(s)&&!br(s)&&(s=Se(s));const i=Se(this);return Gi(i).has.call(i,s)||(i.add(s),yn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!br(i)&&(i=Se(i));const o=Se(this),{has:c,get:l}=Gi(o);let h=c.call(o,s);h||(s=Se(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Bn(i,d)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:c}=Gi(i);let l=o.call(i,s);l||(s=Se(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&yn(i,"delete",s,void 0),h},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jy(s,t,e)}),n}function wl(t,e){const n=By(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Hy={get:wl(!1,!1)},qy={get:wl(!1,!0)},Wy={get:wl(!0,!1)};const ip=new WeakMap,op=new WeakMap,ap=new WeakMap,Ky=new WeakMap;function zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gy(t){return t.__v_skip||!Object.isExtensible(t)?0:zy(_y(t))}function Al(t){return br(t)?t:bl(t,!1,Fy,Hy,ip)}function Qy(t){return bl(t,!1,$y,qy,op)}function cp(t){return bl(t,!0,Uy,Wy,ap)}function bl(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function es(t){return br(t)?es(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function Sl(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Yy(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&qd(t,"__v_skip",!0),t}const ht=t=>Oe(t)?Al(t):t,kc=t=>Oe(t)?cp(t):t;function pt(t){return t?t.__v_isRef===!0:!1}function At(t){return Jy(t,!1)}function Jy(t,e){return pt(t)?t:new Xy(t,e)}class Xy{constructor(e,n){this.dep=new Il,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||br(e);e=r?e:Se(e),Bn(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function lp(t){return pt(t)?t.value:t}const Zy={get:(t,e,n)=>e==="__v_raw"?t:lp(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pt(s)&&!pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function up(t){return es(t)?t:new Proxy(t,Zy)}class ev{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Il(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Yd(this,!0),!0}get value(){const e=this.dep.track();return Zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tv(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new ev(r,s,n)}const Yi={},bo=new WeakMap;let _r;function nv(t,e=!1,n=_r){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function rv(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=G=>s?G:jt(G)||s===!1||s===0?vn(G,1):vn(G);let d,p,v,b,C=!1,k=!1;if(pt(t)?(p=()=>t.value,C=jt(t)):es(t)?(p=()=>h(t),C=!0):ae(t)?(k=!0,C=t.some(G=>es(G)||jt(G)),p=()=>t.map(G=>{if(pt(G))return G.value;if(es(G))return h(G);if(_e(G))return l?l(G,2):G()})):_e(t)?e?p=l?()=>l(t,2):t:p=()=>{if(v){sr();try{v()}finally{ir()}}const G=_r;_r=d;try{return l?l(t,3,[b]):t(b)}finally{_r=G}}:p=sn,e&&s){const G=p,ue=s===!0?1/0:s;p=()=>vn(G(),ue)}const D=ky(),x=()=>{d.stop(),D&&D.active&&ml(D.effects,d)};if(i&&e){const G=e;e=(...ue)=>{G(...ue),x()}}let Z=k?new Array(t.length).fill(Yi):Yi;const Q=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(e){const ue=d.run();if(s||C||(k?ue.some((J,I)=>Bn(J,Z[I])):Bn(ue,Z))){v&&v();const J=_r;_r=d;try{const I=[ue,Z===Yi?void 0:k&&Z[0]===Yi?[]:Z,b];l?l(e,3,I):e(...I),Z=ue}finally{_r=J}}}else d.run()};return c&&c(Q),d=new Gd(p),d.scheduler=o?()=>o(Q,!1):Q,b=G=>nv(G,!1,d),v=d.onStop=()=>{const G=bo.get(d);if(G){if(l)l(G,4);else for(const ue of G)ue();bo.delete(d)}},e?r?Q(!0):Z=d.run():o?o(Q.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function vn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))vn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(sa(t)||Xr(t))t.forEach(r=>{vn(r,e,n)});else if(Bd(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(t,e,n,r){try{return r?t(...r):t()}catch(s){ua(s,e,n)}}function Qt(t,e,n,r){if(_e(t)){const s=Ei(t,e,n,r);return s&&$d(s)&&s.catch(i=>{ua(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function ua(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){sr(),Ei(i,null,10,[t,l,h]),ir();return}}sv(t,n,s,r,o)}function sv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let tn=-1;const ts=[];let Mn=null,qr=0;const hp=Promise.resolve();let So=null;function fp(t){const e=So||hp;return t?e.then(this?t.bind(this):t):e}function iv(t){let e=tn+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Rl(t){if(!(t.flags&1)){const e=ai(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=ai(n)?yt.push(t):yt.splice(iv(e),0,t),t.flags|=1,dp()}}function dp(){So||(So=hp.then(gp))}function ov(t){ae(t)?ts.push(...t):Mn&&t.id===-1?Mn.splice(qr+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),dp()}function Ih(t,e,n=tn+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pp(t){if(ts.length){const e=[...new Set(ts)].sort((n,r)=>ai(n)-ai(r));if(ts.length=0,Mn){Mn.push(...e);return}for(Mn=e,qr=0;qr<Mn.length;qr++){const n=Mn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,qr=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gp(t){try{for(tn=0;tn<yt.length;tn++){const e=yt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<yt.length;tn++){const e=yt[tn];e&&(e.flags&=-2)}tn=-1,yt.length=0,pp(),So=null,(yt.length||ts.length)&&gp()}}let kt=null,mp=null;function Ro(t){const e=kt;return kt=t,mp=t&&t.type.__scopeId||null,e}function _p(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Dh(-1);const i=Ro(e);let o;try{o=t(...s)}finally{Ro(i),r._d&&Dh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(t,e){if(kt===null)return t;const n=ga(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(sr(),Qt(l,n,8,[t.el,c,t,e]),ir())}}const av=Symbol("_vte"),cv=t=>t.__isTeleport,Hr=Symbol("_leaveCb"),Ji=Symbol("_enterCb");function lv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fa(()=>{t.isMounted=!0}),wp(()=>{t.isUnmounting=!0}),t}const Ut=[Function,Array],uv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut};function hv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Dc(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:v,onLeave:b,onAfterLeave:C,onLeaveCancelled:k,onBeforeAppear:D,onAppear:x,onAfterAppear:Z,onAppearCancelled:Q}=e,G=String(t.key),ue=hv(n,t),J=(_,T)=>{_&&Qt(_,r,9,T)},I=(_,T)=>{const E=T[1];J(_,T),ae(_)?_.every(w=>w.length<=1)&&E():_.length<=1&&E()},m={mode:o,persisted:c,beforeEnter(_){let T=l;if(!n.isMounted)if(i)T=D||l;else return;_[Hr]&&_[Hr](!0);const E=ue[G];E&&Wr(t,E)&&E.el[Hr]&&E.el[Hr](),J(T,[_])},enter(_){let T=h,E=d,w=p;if(!n.isMounted)if(i)T=x||h,E=Z||d,w=Q||p;else return;let y=!1;const W=_[Ji]=H=>{y||(y=!0,H?J(w,[_]):J(E,[_]),m.delayedLeave&&m.delayedLeave(),_[Ji]=void 0)};T?I(T,[_,W]):W()},leave(_,T){const E=String(t.key);if(_[Ji]&&_[Ji](!0),n.isUnmounting)return T();J(v,[_]);let w=!1;const y=_[Hr]=W=>{w||(w=!0,T(),W?J(k,[_]):J(C,[_]),_[Hr]=void 0,ue[E]===t&&delete ue[E])};ue[E]=t,b?I(b,[_,y]):y()},clone(_){return Dc(_,e,n,r)}};return m}function ci(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ci(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Pt?(o.patchFlag&128&&s++,r=r.concat(yp(o.children,e,c))):(e||o.type!==Qn)&&r.push(c!=null?Sr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Co(t,e,n,r,s=!1){if(ae(t)){t.forEach((C,k)=>Co(C,e&&(ae(e)?e[k]:e),n,r,s));return}if(Qs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Co(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ga(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===ke?c.refs={}:c.refs,p=c.setupState,v=Se(p),b=p===ke?()=>!1:C=>Re(v,C);if(h!=null&&h!==l&&(Ue(h)?(d[h]=null,b(h)&&(p[h]=null)):pt(h)&&(h.value=null)),_e(l))Ei(l,c,12,[o,d]);else{const C=Ue(l),k=pt(l);if(C||k){const D=()=>{if(t.f){const x=C?b(l)?p[l]:d[l]:l.value;s?ae(x)&&ml(x,i):ae(x)?x.includes(i)||x.push(i):C?(d[l]=[i],b(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else C?(d[l]=o,b(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Rt(D,n)):D()}}}oa().requestIdleCallback;oa().cancelIdleCallback;const Qs=t=>!!t.type.__asyncLoader,Tp=t=>t.type.__isKeepAlive;function fv(t,e){Ep(t,"a",e)}function dv(t,e){Ep(t,"da",e)}function Ep(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tp(s.parent.vnode)&&pv(r,e,n,s),s=s.parent}}function pv(t,e,n,r){const s=ha(e,t,r,!0);Cl(()=>{ml(r[e],s)},n)}function ha(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const c=Ii(n),l=Qt(e,n,t,o);return c(),ir(),l});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=dt)=>{(!ui||t==="sp")&&ha(t,(...r)=>e(...r),n)},gv=Rn("bm"),fa=Rn("m"),mv=Rn("bu"),Ip=Rn("u"),wp=Rn("bum"),Cl=Rn("um"),_v=Rn("sp"),yv=Rn("rtg"),vv=Rn("rtc");function Tv(t,e=dt){ha("ec",t,e)}const Ev=Symbol.for("v-ndc");function Ap(t,e,n,r){let s;const i=n,o=ae(t);if(o||Ue(t)){const c=o&&es(t);let l=!1;c&&(l=!jt(t),t=la(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?ht(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Oc=t=>t?zp(t)?ga(t):Oc(t.parent):null,Ys=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oc(t.parent),$root:t=>Oc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sp(t),$forceUpdate:t=>t.f||(t.f=()=>{Rl(t.update)}),$nextTick:t=>t.n||(t.n=fp.bind(t.proxy)),$watch:t=>Hv.bind(t)}),oc=(t,e)=>t!==ke&&!t.__isScriptSetup&&Re(t,e),Iv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(oc(r,e))return o[e]=1,r[e];if(s!==ke&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==ke&&Re(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const d=Ys[e];let p,v;if(d)return e==="$attrs"&&ut(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&Re(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,Re(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return oc(s,e)?(s[e]=n,!0):r!==ke&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ke&&Re(t,o)||oc(e,o)||(c=i[0])&&Re(c,o)||Re(r,o)||Re(Ys,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function wv(t){const e=Sp(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&Ah(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:v,beforeUpdate:b,updated:C,activated:k,deactivated:D,beforeDestroy:x,beforeUnmount:Z,destroyed:Q,unmounted:G,render:ue,renderTracked:J,renderTriggered:I,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:E,components:w,directives:y,filters:W}=e;if(h&&Av(h,r,null),o)for(const B in o){const V=o[B];_e(V)&&(r[B]=V.bind(n))}if(s){const B=s.call(n,n);Oe(B)&&(t.data=Al(B))}if(Nc=!0,i)for(const B in i){const V=i[B],re=_e(V)?V.bind(n,n):_e(V.get)?V.get.bind(n,n):sn,ce=!_e(V)&&_e(V.set)?V.set.bind(n):sn,Te=Do({get:re,set:ce});Object.defineProperty(r,B,{enumerable:!0,configurable:!0,get:()=>Te.value,set:me=>Te.value=me})}if(c)for(const B in c)bp(c[B],r,n,B);if(l){const B=_e(l)?l.call(n):l;Reflect.ownKeys(B).forEach(V=>{kv(V,B[V])})}d&&Ah(d,t,"c");function j(B,V){ae(V)?V.forEach(re=>B(re.bind(n))):V&&B(V.bind(n))}if(j(gv,p),j(fa,v),j(mv,b),j(Ip,C),j(fv,k),j(dv,D),j(Tv,m),j(vv,J),j(yv,I),j(wp,Z),j(Cl,G),j(_v,_),ae(T))if(T.length){const B=t.exposed||(t.exposed={});T.forEach(V=>{Object.defineProperty(B,V,{get:()=>n[V],set:re=>n[V]=re})})}else t.exposed||(t.exposed={});ue&&t.render===sn&&(t.render=ue),E!=null&&(t.inheritAttrs=E),w&&(t.components=w),y&&(t.directives=y),_&&vp(t)}function Av(t,e,n=sn){ae(t)&&(t=Vc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=ao(s.from||r,s.default,!0):i=ao(s.from||r):i=ao(s),pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ah(t,e,n){Qt(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bp(t,e,n,r){let s=r.includes(".")?$p(n,r):()=>n[r];if(Ue(t)){const i=e[t];_e(i)&&co(s,i)}else if(_e(t))co(s,t.bind(n));else if(Oe(t))if(ae(t))t.forEach(i=>bp(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&co(s,i,t)}}function Sp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,o,!0)),Po(l,e,o)),Oe(e)&&i.set(e,l),l}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(o=>Po(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=bv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const bv={data:bh,props:Sh,emits:Sh,methods:Us,computed:Us,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Us,directives:Us,watch:Rv,provide:bh,inject:Sv};function bh(t,e){return e?t?function(){return Qe(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function Sv(t,e){return Us(Vc(t),Vc(e))}function Vc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Qe(Object.create(null),t,e):e}function Sh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:Qe(Object.create(null),wh(t),wh(e??{})):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function Rp(){return{app:null,config:{isNativeTag:gy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Pv(t,e){return function(r,s=null){_e(r)||(r=Qe({},r)),s!=null&&!Oe(s)&&(s=null);const i=Rp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Cv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(h,...p)):_e(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,v){if(!l){const b=h._ceVNode||Nt(r,s);return b.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),t(b,d,v),l=!0,h._container=d,d.__vue_app__=h,ga(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Qt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ns;ns=h;try{return d()}finally{ns=p}}};return h}}let ns=null;function kv(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function ao(t,e,n=!1){const r=dt||kt;if(r||ns){const s=ns?ns._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const Cp={},Pp=()=>Object.create(Cp),kp=t=>Object.getPrototypeOf(t)===Cp;function Dv(t,e,n,r=!1){const s={},i=Pp();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ov(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let v=d[p];if(da(t.emitsOptions,v))continue;const b=e[v];if(l)if(Re(i,v))b!==i[v]&&(i[v]=b,h=!0);else{const C=Gn(v);s[C]=Mc(l,c,C,b,t,!1)}else b!==i[v]&&(i[v]=b,h=!0)}}}else{Dp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Re(e,p)&&((d=rr(p))===p||!Re(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Mc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&yn(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ks(l))continue;const h=e[l];let d;s&&Re(s,d=Gn(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:da(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Se(n),h=c||ke;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Mc(s,l,p,h[p],t,!Re(h,p))}}return o}function Mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&_e(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ii(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===rr(n))&&(r=!0))}return r}const Nv=new WeakMap;function Op(t,e,n=!1){const r=n?Nv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!_e(t)){const d=p=>{l=!0;const[v,b]=Op(p,e,!0);Qe(o,v),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Oe(t)&&r.set(t,Jr),Jr;if(ae(i))for(let d=0;d<i.length;d++){const p=Gn(i[d]);Rh(p)&&(o[p]=ke)}else if(i)for(const d in i){const p=Gn(d);if(Rh(p)){const v=i[d],b=o[p]=ae(v)||_e(v)?{type:v}:Qe({},v),C=b.type;let k=!1,D=!0;if(ae(C))for(let x=0;x<C.length;++x){const Z=C[x],Q=_e(Z)&&Z.name;if(Q==="Boolean"){k=!0;break}else Q==="String"&&(D=!1)}else k=_e(C)&&C.name==="Boolean";b[0]=k,b[1]=D,(k||Re(b,"default"))&&c.push(p)}}const h=[o,c];return Oe(t)&&r.set(t,h),h}function Rh(t){return t[0]!=="$"&&!Ks(t)}const Np=t=>t[0]==="_"||t==="$stable",Pl=t=>ae(t)?t.map(rn):[rn(t)],Vv=(t,e,n)=>{if(e._n)return e;const r=_p((...s)=>Pl(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Np(s))continue;const i=t[s];if(_e(i))e[s]=Vv(s,i,r);else if(i!=null){const o=Pl(i);e[s]=()=>o}}},Mp=(t,e)=>{const n=Pl(e);t.slots.default=()=>n},xp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Mv=(t,e,n)=>{const r=t.slots=Pp();if(t.vnode.shapeFlag&32){const s=e._;s?(xp(r,e,n),n&&qd(r,"_",s,!0)):Vp(e,r)}else e&&Mp(t,e)},xv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:xp(s,e,n):(i=!e.$stable,Vp(e,s)),o=e}else e&&(Mp(t,e),o={default:1});if(i)for(const c in s)!Np(c)&&o[c]==null&&delete s[c]},Rt=Yv;function Lv(t){return Fv(t)}function Fv(t,e){const n=oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:v,setScopeId:b=sn,insertStaticContent:C}=t,k=(A,S,O,F=null,M=null,U=null,Y=void 0,K=null,q=!!S.dynamicChildren)=>{if(A===S)return;A&&!Wr(A,S)&&(F=Ye(A),me(A,M,U,!0),A=null),S.patchFlag===-2&&(q=!1,S.dynamicChildren=null);const{type:$,ref:ie,shapeFlag:X}=S;switch($){case pa:D(A,S,O,F);break;case Qn:x(A,S,O,F);break;case cc:A==null&&Z(S,O,F,Y);break;case Pt:w(A,S,O,F,M,U,Y,K,q);break;default:X&1?ue(A,S,O,F,M,U,Y,K,q):X&6?y(A,S,O,F,M,U,Y,K,q):(X&64||X&128)&&$.process(A,S,O,F,M,U,Y,K,q,Ne)}ie!=null&&M&&Co(ie,A&&A.ref,U,S||A,!S)},D=(A,S,O,F)=>{if(A==null)r(S.el=c(S.children),O,F);else{const M=S.el=A.el;S.children!==A.children&&h(M,S.children)}},x=(A,S,O,F)=>{A==null?r(S.el=l(S.children||""),O,F):S.el=A.el},Z=(A,S,O,F)=>{[A.el,A.anchor]=C(A.children,S,O,F,A.el,A.anchor)},Q=({el:A,anchor:S},O,F)=>{let M;for(;A&&A!==S;)M=v(A),r(A,O,F),A=M;r(S,O,F)},G=({el:A,anchor:S})=>{let O;for(;A&&A!==S;)O=v(A),s(A),A=O;s(S)},ue=(A,S,O,F,M,U,Y,K,q)=>{S.type==="svg"?Y="svg":S.type==="math"&&(Y="mathml"),A==null?J(S,O,F,M,U,Y,K,q):_(A,S,M,U,Y,K,q)},J=(A,S,O,F,M,U,Y,K)=>{let q,$;const{props:ie,shapeFlag:X,transition:te,dirs:he}=A;if(q=A.el=o(A.type,U,ie&&ie.is,ie),X&8?d(q,A.children):X&16&&m(A.children,q,null,F,M,ac(A,U),Y,K),he&&pr(A,null,F,"created"),I(q,A,A.scopeId,Y,F),ie){for(const ge in ie)ge!=="value"&&!Ks(ge)&&i(q,ge,null,ie[ge],U,F);"value"in ie&&i(q,"value",null,ie.value,U),($=ie.onVnodeBeforeMount)&&Zt($,F,A)}he&&pr(A,null,F,"beforeMount");const oe=Uv(M,te);oe&&te.beforeEnter(q),r(q,S,O),(($=ie&&ie.onVnodeMounted)||oe||he)&&Rt(()=>{$&&Zt($,F,A),oe&&te.enter(q),he&&pr(A,null,F,"mounted")},M)},I=(A,S,O,F,M)=>{if(O&&b(A,O),F)for(let U=0;U<F.length;U++)b(A,F[U]);if(M){let U=M.subTree;if(S===U||Bp(U.type)&&(U.ssContent===S||U.ssFallback===S)){const Y=M.vnode;I(A,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},m=(A,S,O,F,M,U,Y,K,q=0)=>{for(let $=q;$<A.length;$++){const ie=A[$]=K?xn(A[$]):rn(A[$]);k(null,ie,S,O,F,M,U,Y,K)}},_=(A,S,O,F,M,U,Y)=>{const K=S.el=A.el;let{patchFlag:q,dynamicChildren:$,dirs:ie}=S;q|=A.patchFlag&16;const X=A.props||ke,te=S.props||ke;let he;if(O&&gr(O,!1),(he=te.onVnodeBeforeUpdate)&&Zt(he,O,S,A),ie&&pr(S,A,O,"beforeUpdate"),O&&gr(O,!0),(X.innerHTML&&te.innerHTML==null||X.textContent&&te.textContent==null)&&d(K,""),$?T(A.dynamicChildren,$,K,O,F,ac(S,M),U):Y||V(A,S,K,null,O,F,ac(S,M),U,!1),q>0){if(q&16)E(K,X,te,O,M);else if(q&2&&X.class!==te.class&&i(K,"class",null,te.class,M),q&4&&i(K,"style",X.style,te.style,M),q&8){const oe=S.dynamicProps;for(let ge=0;ge<oe.length;ge++){const we=oe[ge],st=X[we],Je=te[we];(Je!==st||we==="value")&&i(K,we,st,Je,M,O)}}q&1&&A.children!==S.children&&d(K,S.children)}else!Y&&$==null&&E(K,X,te,O,M);((he=te.onVnodeUpdated)||ie)&&Rt(()=>{he&&Zt(he,O,S,A),ie&&pr(S,A,O,"updated")},F)},T=(A,S,O,F,M,U,Y)=>{for(let K=0;K<S.length;K++){const q=A[K],$=S[K],ie=q.el&&(q.type===Pt||!Wr(q,$)||q.shapeFlag&70)?p(q.el):O;k(q,$,ie,null,F,M,U,Y,!0)}},E=(A,S,O,F,M)=>{if(S!==O){if(S!==ke)for(const U in S)!Ks(U)&&!(U in O)&&i(A,U,S[U],null,M,F);for(const U in O){if(Ks(U))continue;const Y=O[U],K=S[U];Y!==K&&U!=="value"&&i(A,U,K,Y,M,F)}"value"in O&&i(A,"value",S.value,O.value,M)}},w=(A,S,O,F,M,U,Y,K,q)=>{const $=S.el=A?A.el:c(""),ie=S.anchor=A?A.anchor:c("");let{patchFlag:X,dynamicChildren:te,slotScopeIds:he}=S;he&&(K=K?K.concat(he):he),A==null?(r($,O,F),r(ie,O,F),m(S.children||[],O,ie,M,U,Y,K,q)):X>0&&X&64&&te&&A.dynamicChildren?(T(A.dynamicChildren,te,O,M,U,Y,K),(S.key!=null||M&&S===M.subTree)&&Lp(A,S,!0)):V(A,S,O,ie,M,U,Y,K,q)},y=(A,S,O,F,M,U,Y,K,q)=>{S.slotScopeIds=K,A==null?S.shapeFlag&512?M.ctx.activate(S,O,F,Y,q):W(S,O,F,M,U,Y,q):H(A,S,q)},W=(A,S,O,F,M,U,Y)=>{const K=A.component=rT(A,F,M);if(Tp(A)&&(K.ctx.renderer=Ne),iT(K,!1,Y),K.asyncDep){if(M&&M.registerDep(K,j,Y),!A.el){const q=K.subTree=Nt(Qn);x(null,q,S,O)}}else j(K,A,S,O,M,U,Y)},H=(A,S,O)=>{const F=S.component=A.component;if(Gv(A,S,O))if(F.asyncDep&&!F.asyncResolved){B(F,S,O);return}else F.next=S,F.update();else S.el=A.el,F.vnode=S},j=(A,S,O,F,M,U,Y)=>{const K=()=>{if(A.isMounted){let{next:X,bu:te,u:he,parent:oe,vnode:ge}=A;{const it=Fp(A);if(it){X&&(X.el=ge.el,B(A,X,Y)),it.asyncDep.then(()=>{A.isUnmounted||K()});return}}let we=X,st;gr(A,!1),X?(X.el=ge.el,B(A,X,Y)):X=ge,te&&oo(te),(st=X.props&&X.props.onVnodeBeforeUpdate)&&Zt(st,oe,X,ge),gr(A,!0);const Je=Ph(A),Lt=A.subTree;A.subTree=Je,k(Lt,Je,p(Lt.el),Ye(Lt),A,M,U),X.el=Je.el,we===null&&Qv(A,Je.el),he&&Rt(he,M),(st=X.props&&X.props.onVnodeUpdated)&&Rt(()=>Zt(st,oe,X,ge),M)}else{let X;const{el:te,props:he}=S,{bm:oe,m:ge,parent:we,root:st,type:Je}=A,Lt=Qs(S);gr(A,!1),oe&&oo(oe),!Lt&&(X=he&&he.onVnodeBeforeMount)&&Zt(X,we,S),gr(A,!0);{st.ce&&st.ce._injectChildStyle(Je);const it=A.subTree=Ph(A);k(null,it,O,F,A,M,U),S.el=it.el}if(ge&&Rt(ge,M),!Lt&&(X=he&&he.onVnodeMounted)){const it=S;Rt(()=>Zt(X,we,it),M)}(S.shapeFlag&256||we&&Qs(we.vnode)&&we.vnode.shapeFlag&256)&&A.a&&Rt(A.a,M),A.isMounted=!0,S=O=F=null}};A.scope.on();const q=A.effect=new Gd(K);A.scope.off();const $=A.update=q.run.bind(q),ie=A.job=q.runIfDirty.bind(q);ie.i=A,ie.id=A.uid,q.scheduler=()=>Rl(ie),gr(A,!0),$()},B=(A,S,O)=>{S.component=A;const F=A.vnode.props;A.vnode=S,A.next=null,Ov(A,S.props,F,O),xv(A,S.children,O),sr(),Ih(A),ir()},V=(A,S,O,F,M,U,Y,K,q=!1)=>{const $=A&&A.children,ie=A?A.shapeFlag:0,X=S.children,{patchFlag:te,shapeFlag:he}=S;if(te>0){if(te&128){ce($,X,O,F,M,U,Y,K,q);return}else if(te&256){re($,X,O,F,M,U,Y,K,q);return}}he&8?(ie&16&&vt($,M,U),X!==$&&d(O,X)):ie&16?he&16?ce($,X,O,F,M,U,Y,K,q):vt($,M,U,!0):(ie&8&&d(O,""),he&16&&m(X,O,F,M,U,Y,K,q))},re=(A,S,O,F,M,U,Y,K,q)=>{A=A||Jr,S=S||Jr;const $=A.length,ie=S.length,X=Math.min($,ie);let te;for(te=0;te<X;te++){const he=S[te]=q?xn(S[te]):rn(S[te]);k(A[te],he,O,null,M,U,Y,K,q)}$>ie?vt(A,M,U,!0,!1,X):m(S,O,F,M,U,Y,K,q,X)},ce=(A,S,O,F,M,U,Y,K,q)=>{let $=0;const ie=S.length;let X=A.length-1,te=ie-1;for(;$<=X&&$<=te;){const he=A[$],oe=S[$]=q?xn(S[$]):rn(S[$]);if(Wr(he,oe))k(he,oe,O,null,M,U,Y,K,q);else break;$++}for(;$<=X&&$<=te;){const he=A[X],oe=S[te]=q?xn(S[te]):rn(S[te]);if(Wr(he,oe))k(he,oe,O,null,M,U,Y,K,q);else break;X--,te--}if($>X){if($<=te){const he=te+1,oe=he<ie?S[he].el:F;for(;$<=te;)k(null,S[$]=q?xn(S[$]):rn(S[$]),O,oe,M,U,Y,K,q),$++}}else if($>te)for(;$<=X;)me(A[$],M,U,!0),$++;else{const he=$,oe=$,ge=new Map;for($=oe;$<=te;$++){const Xe=S[$]=q?xn(S[$]):rn(S[$]);Xe.key!=null&&ge.set(Xe.key,$)}let we,st=0;const Je=te-oe+1;let Lt=!1,it=0;const Cn=new Array(Je);for($=0;$<Je;$++)Cn[$]=0;for($=he;$<=X;$++){const Xe=A[$];if(st>=Je){me(Xe,M,U,!0);continue}let Ft;if(Xe.key!=null)Ft=ge.get(Xe.key);else for(we=oe;we<=te;we++)if(Cn[we-oe]===0&&Wr(Xe,S[we])){Ft=we;break}Ft===void 0?me(Xe,M,U,!0):(Cn[Ft-oe]=$+1,Ft>=it?it=Ft:Lt=!0,k(Xe,S[Ft],O,null,M,U,Y,K,q),st++)}const As=Lt?$v(Cn):Jr;for(we=As.length-1,$=Je-1;$>=0;$--){const Xe=oe+$,Ft=S[Xe],Oi=Xe+1<ie?S[Xe+1].el:F;Cn[$]===0?k(null,Ft,O,Oi,M,U,Y,K,q):Lt&&(we<0||$!==As[we]?Te(Ft,O,Oi,2):we--)}}},Te=(A,S,O,F,M=null)=>{const{el:U,type:Y,transition:K,children:q,shapeFlag:$}=A;if($&6){Te(A.component.subTree,S,O,F);return}if($&128){A.suspense.move(S,O,F);return}if($&64){Y.move(A,S,O,Ne);return}if(Y===Pt){r(U,S,O);for(let X=0;X<q.length;X++)Te(q[X],S,O,F);r(A.anchor,S,O);return}if(Y===cc){Q(A,S,O);return}if(F!==2&&$&1&&K)if(F===0)K.beforeEnter(U),r(U,S,O),Rt(()=>K.enter(U),M);else{const{leave:X,delayLeave:te,afterLeave:he}=K,oe=()=>r(U,S,O),ge=()=>{X(U,()=>{oe(),he&&he()})};te?te(U,oe,ge):ge()}else r(U,S,O)},me=(A,S,O,F=!1,M=!1)=>{const{type:U,props:Y,ref:K,children:q,dynamicChildren:$,shapeFlag:ie,patchFlag:X,dirs:te,cacheIndex:he}=A;if(X===-2&&(M=!1),K!=null&&Co(K,null,O,A,!0),he!=null&&(S.renderCache[he]=void 0),ie&256){S.ctx.deactivate(A);return}const oe=ie&1&&te,ge=!Qs(A);let we;if(ge&&(we=Y&&Y.onVnodeBeforeUnmount)&&Zt(we,S,A),ie&6)je(A.component,O,F);else{if(ie&128){A.suspense.unmount(O,F);return}oe&&pr(A,null,S,"beforeUnmount"),ie&64?A.type.remove(A,S,O,Ne,F):$&&!$.hasOnce&&(U!==Pt||X>0&&X&64)?vt($,S,O,!1,!0):(U===Pt&&X&384||!M&&ie&16)&&vt(q,S,O),F&&ve(A)}(ge&&(we=Y&&Y.onVnodeUnmounted)||oe)&&Rt(()=>{we&&Zt(we,S,A),oe&&pr(A,null,S,"unmounted")},O)},ve=A=>{const{type:S,el:O,anchor:F,transition:M}=A;if(S===Pt){$e(O,F);return}if(S===cc){G(A);return}const U=()=>{s(O),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(A.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:K}=M,q=()=>Y(O,U);K?K(A.el,U,q):q()}else U()},$e=(A,S)=>{let O;for(;A!==S;)O=v(A),s(A),A=O;s(S)},je=(A,S,O)=>{const{bum:F,scope:M,job:U,subTree:Y,um:K,m:q,a:$}=A;Ch(q),Ch($),F&&oo(F),M.stop(),U&&(U.flags|=8,me(Y,A,S,O)),K&&Rt(K,S),Rt(()=>{A.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},vt=(A,S,O,F=!1,M=!1,U=0)=>{for(let Y=U;Y<A.length;Y++)me(A[Y],S,O,F,M)},Ye=A=>{if(A.shapeFlag&6)return Ye(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const S=v(A.anchor||A.el),O=S&&S[av];return O?v(O):S};let Ht=!1;const xt=(A,S,O)=>{A==null?S._vnode&&me(S._vnode,null,null,!0):k(S._vnode||null,A,S,null,null,null,O),S._vnode=A,Ht||(Ht=!0,Ih(),pp(),Ht=!1)},Ne={p:k,um:me,m:Te,r:ve,mt:W,mc:m,pc:V,pbc:T,n:Ye,o:t};return{render:xt,hydrate:void 0,createApp:Pv(xt)}}function ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Uv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lp(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Lp(o,c)),c.type===pa&&(c.el=o.el)}}function $v(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fp(e)}function Ch(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jv=Symbol.for("v-scx"),Bv=()=>ao(jv);function co(t,e,n){return Up(t,e,n)}function Up(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=Qe({},n),l=e&&r||!e&&i!=="post";let h;if(ui){if(i==="sync"){const b=Bv();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=sn,b.resume=sn,b.pause=sn,b}}const d=dt;c.call=(b,C,k)=>Qt(b,d,C,k);let p=!1;i==="post"?c.scheduler=b=>{Rt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,C)=>{C?b():Rl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const v=rv(t,e,c);return ui&&(h?h.push(v):l&&v()),v}function Hv(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?$p(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=Ii(this),c=Up(s,i.bind(r),n);return o(),c}function $p(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gn(e)}Modifiers`]||t[`${rr(e)}Modifiers`];function Wv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&qv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ue(d)?d.trim():d)),o.number&&(s=n.map(Ao)));let c,l=r[c=tc(e)]||r[c=tc(Gn(e))];!l&&i&&(l=r[c=tc(rr(e))]),l&&Qt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(h,t,6,s)}}function jp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!_e(t)){const l=h=>{const d=jp(h,e,!0);d&&(c=!0,Qe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):Qe(o,i),Oe(t)&&r.set(t,o),o)}function da(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,rr(e))||Re(t,e))}function Ph(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:v,setupState:b,ctx:C,inheritAttrs:k}=t,D=Ro(t);let x,Z;try{if(n.shapeFlag&4){const G=s||r,ue=G;x=rn(h.call(ue,G,d,p,b,v,C)),Z=c}else{const G=e;x=rn(G.length>1?G(p,{attrs:c,slots:o,emit:l}):G(p,null)),Z=e.props?c:Kv(c)}}catch(G){Js.length=0,ua(G,t,1),x=Nt(Qn)}let Q=x;if(Z&&k!==!1){const G=Object.keys(Z),{shapeFlag:ue}=Q;G.length&&ue&7&&(i&&G.some(gl)&&(Z=zv(Z,i)),Q=Sr(Q,Z,!1,!0))}return n.dirs&&(Q=Sr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&ci(Q,n.transition),x=Q,Ro(D),x}const Kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},zv=(t,e)=>{const n={};for(const r in t)(!gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Gv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?kh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const v=d[p];if(o[v]!==r[v]&&!da(h,v))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?kh(r,o,h):!0:!!o;return!1}function kh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function Qv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bp=t=>t.__isSuspense;function Yv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):ov(t)}const Pt=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),Js=[];let Dt=null;function tt(t=!1){Js.push(Dt=t?null:[])}function Jv(){Js.pop(),Dt=Js[Js.length-1]||null}let li=1;function Dh(t,e=!1){li+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function Hp(t){return t.dynamicChildren=li>0?Dt||Jr:null,Jv(),li>0&&Dt&&Dt.push(t),t}function It(t,e,n,r,s,i){return Hp(He(t,e,n,r,s,i,!0))}function xc(t,e,n,r,s){return Hp(Nt(t,e,n,r,s,!0))}function qp(t){return t?t.__v_isVNode===!0:!1}function Wr(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||pt(t)||_e(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===Pt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&lo(e),scopeId:mp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return c?(kl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),li>0&&!o&&Dt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Dt.push(l),l}const Nt=Xv;function Xv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ev)&&(t=Qn),qp(t)){const c=Sr(t,e,!0);return n&&kl(c,n),li>0&&!i&&Dt&&(c.shapeFlag&6?Dt[Dt.indexOf(t)]=c:Dt.push(c)),c.patchFlag=-2,c}if(lT(t)&&(t=t.__vccOpts),e){e=Zv(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=aa(c)),Oe(l)&&(Sl(l)&&!ae(l)&&(l=Qe({},l)),e.style=yl(l))}const o=Ue(t)?1:Bp(t)?128:cv(t)?64:Oe(t)?4:_e(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function Zv(t){return t?Sl(t)||kp(t)?Qe({},t):t:null}function Sr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?eT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wp(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ci(d,l.clone(d)),d}function Kp(t=" ",e=0){return Nt(pa,null,t,e)}function Xi(t="",e=!1){return e?(tt(),xc(Qn,null,t)):Nt(Qn,null,t)}function rn(t){return t==null||typeof t=="boolean"?Nt(Qn):ae(t)?Nt(Pt,null,t.slice()):qp(t)?xn(t):Nt(pa,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function kl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!kp(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Kp(e)]):n=8);t.children=e,t.shapeFlag|=n}function eT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=aa([e.class,r.class]));else if(s==="style")e.style=yl([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){Qt(t,e,7,[n,r])}const tT=Rp();let nT=0;function rT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||tT,i={uid:nT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Py(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Op(r,s),emitsOptions:jp(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Wv.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const sT=()=>dt||kt;let ko,Lc;{const t=oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Lc=e("__VUE_SSR_SETTERS__",n=>ui=n)}const Ii=t=>{const e=dt;return ko(t),t.scope.on(),()=>{t.scope.off(),ko(e)}},Oh=()=>{dt&&dt.scope.off(),ko(null)};function zp(t){return t.vnode.shapeFlag&4}let ui=!1;function iT(t,e=!1,n=!1){e&&Lc(e);const{props:r,children:s}=t.vnode,i=zp(t);Dv(t,r,i,e),Mv(t,s,n);const o=i?oT(t,e):void 0;return e&&Lc(!1),o}function oT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Iv);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?cT(t):null,i=Ii(t),o=Ei(r,t,0,[t.props,s]),c=$d(o);if(ir(),i(),(c||t.sp)&&!Qs(t)&&vp(t),c){if(o.then(Oh,Oh),e)return o.then(l=>{Nh(t,l)}).catch(l=>{ua(l,t,0)});t.asyncDep=o}else Nh(t,o)}else Gp(t)}function Nh(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=up(e)),Gp(t)}function Gp(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=Ii(t);sr();try{wv(t)}finally{ir(),s()}}}const aT={get(t,e){return ut(t,"get",""),t[e]}};function cT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aT),slots:t.slots,emit:t.emit,expose:e}}function ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(up(Yy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ys)return Ys[n](t)},has(e,n){return n in e||n in Ys}})):t.proxy}function lT(t){return _e(t)&&"__vccOpts"in t}const Do=(t,e)=>tv(t,e,ui),uT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fc;const Vh=typeof window<"u"&&window.trustedTypes;if(Vh)try{Fc=Vh.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=Fc?t=>Fc.createHTML(t):t=>t,hT="http://www.w3.org/2000/svg",fT="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,Mh=_n&&_n.createElement("template"),dT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_n.createElementNS(hT,t):e==="mathml"?_n.createElementNS(fT,t):n?_n.createElement(t,{is:n}):_n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mh.innerHTML=Qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Mh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},On="transition",Fs="animation",ls=Symbol("_vtc"),Yp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pT=Qe({},uv,Yp),mr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},xh=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function gT(t){const e={};for(const w in t)w in Yp||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=t,C=mT(s),k=C&&C[0],D=C&&C[1],{onBeforeEnter:x,onEnter:Z,onEnterCancelled:Q,onLeave:G,onLeaveCancelled:ue,onBeforeAppear:J=x,onAppear:I=Z,onAppearCancelled:m=Q}=e,_=(w,y,W,H)=>{w._enterCancelled=H,Vn(w,y?d:c),Vn(w,y?h:o),W&&W()},T=(w,y)=>{w._isLeaving=!1,Vn(w,p),Vn(w,b),Vn(w,v),y&&y()},E=w=>(y,W)=>{const H=w?I:Z,j=()=>_(y,w,W);mr(H,[y,j]),Lh(()=>{Vn(y,w?l:i),en(y,w?d:c),xh(H)||Fh(y,r,k,j)})};return Qe(e,{onBeforeEnter(w){mr(x,[w]),en(w,i),en(w,o)},onBeforeAppear(w){mr(J,[w]),en(w,l),en(w,h)},onEnter:E(!1),onAppear:E(!0),onLeave(w,y){w._isLeaving=!0;const W=()=>T(w,y);en(w,p),w._enterCancelled?(en(w,v),Uc()):(Uc(),en(w,v)),Lh(()=>{w._isLeaving&&(Vn(w,p),en(w,b),xh(G)||Fh(w,r,D,W))}),mr(G,[w,W])},onEnterCancelled(w){_(w,!1,void 0,!0),mr(Q,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),mr(m,[w])},onLeaveCancelled(w){T(w),mr(ue,[w])}})}function mT(t){if(t==null)return null;if(Oe(t))return[lc(t.enter),lc(t.leave)];{const e=lc(t);return[e,e]}}function lc(t){return Ty(t)}function en(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ls]||(t[ls]=new Set)).add(e)}function Vn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ls];n&&(n.delete(e),n.size||(t[ls]=void 0))}function Lh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _T=0;function Fh(t,e,n,r){const s=t._endId=++_T,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Jp(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,v),i()},v=b=>{b.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(h,v)}function Jp(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${On}Delay`),i=r(`${On}Duration`),o=Uh(s,i),c=r(`${Fs}Delay`),l=r(`${Fs}Duration`),h=Uh(c,l);let d=null,p=0,v=0;e===On?o>0&&(d=On,p=o,v=i.length):e===Fs?h>0&&(d=Fs,p=h,v=l.length):(p=Math.max(o,h),d=p>0?o>h?On:Fs:null,v=d?d===On?i.length:l.length:0);const b=d===On&&/\b(transform|all)(,|$)/.test(r(`${On}Property`).toString());return{type:d,timeout:p,propCount:v,hasTransform:b}}function Uh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$h(n)+$h(t[r])))}function $h(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Uc(){return document.body.offsetHeight}function yT(t,e,n){const r=t[ls];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jh=Symbol("_vod"),vT=Symbol("_vsh"),TT=Symbol(""),ET=/(^|;)\s*display\s*:/;function IT(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&uo(r,c,"")}else for(const o in e)n[o]==null&&uo(r,o,"");for(const o in n)o==="display"&&(i=!0),uo(r,o,n[o])}else if(s){if(e!==n){const o=r[TT];o&&(n+=";"+o),r.cssText=n,i=ET.test(n)}}else e&&t.removeAttribute("style");jh in t&&(t[jh]=i?r.display:"",t[vT]&&(r.display="none"))}const Bh=/\s*!important$/;function uo(t,e,n){if(ae(n))n.forEach(r=>uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wT(t,e);Bh.test(n)?t.setProperty(rr(r),n.replace(Bh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],uc={};function wT(t,e){const n=uc[e];if(n)return n;let r=Gn(e);if(r!=="filter"&&r in t)return uc[e]=r;r=Hd(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return uc[e]=i}return e}const qh="http://www.w3.org/1999/xlink";function Wh(t,e,n,r,s,i=Sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qh,e.slice(6,e.length)):t.setAttributeNS(qh,e,n):n==null||i&&!Wd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":un(n)?String(n):n)}function Kh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wd(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function vr(t,e,n,r){t.addEventListener(e,n,r)}function AT(t,e,n,r){t.removeEventListener(e,n,r)}const zh=Symbol("_vei");function bT(t,e,n,r,s=null){const i=t[zh]||(t[zh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=ST(e);if(r){const h=i[e]=PT(r,s);vr(t,c,h,l)}else o&&(AT(t,c,o,l),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function ST(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rr(t.slice(2)),e]}let hc=0;const RT=Promise.resolve(),CT=()=>hc||(RT.then(()=>hc=0),hc=Date.now());function PT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(kT(r,n.value),e,5,[r])};return n.value=t,n.attached=CT(),n}function kT(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yT(t,r,o):e==="style"?IT(t,n,r):ra(e)?gl(e)||bT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OT(t,e,r,o))?(Kh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?Kh(t,Gn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wh(t,e,r,o))};function OT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qh(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&Ue(n)?!1:e in t}const Xp=new WeakMap,Zp=new WeakMap,Oo=Symbol("_moveCb"),Yh=Symbol("_enterCb"),NT=t=>(delete t.props.mode,t),VT=NT({name:"TransitionGroup",props:Qe({},pT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=sT(),r=lv();let s,i;return Ip(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!UT(s[0].el,n.vnode.el,o))return;s.forEach(xT),s.forEach(LT);const c=s.filter(FT);Uc(),c.forEach(l=>{const h=l.el,d=h.style;en(h,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=h[Oo]=v=>{v&&v.target!==h||(!v||/transform$/.test(v.propertyName))&&(h.removeEventListener("transitionend",p),h[Oo]=null,Vn(h,o))};h.addEventListener("transitionend",p)})}),()=>{const o=Se(t),c=gT(o);let l=o.tag||Pt;if(s=[],i)for(let h=0;h<i.length;h++){const d=i[h];d.el&&d.el instanceof Element&&(s.push(d),ci(d,Dc(d,c,r,n)),Xp.set(d,d.el.getBoundingClientRect()))}i=e.default?yp(e.default()):[];for(let h=0;h<i.length;h++){const d=i[h];d.key!=null&&ci(d,Dc(d,c,r,n))}return Nt(l,null,i)}}}),MT=VT;function xT(t){const e=t.el;e[Oo]&&e[Oo](),e[Yh]&&e[Yh]()}function LT(t){Zp.set(t,t.el.getBoundingClientRect())}function FT(t){const e=Xp.get(t),n=Zp.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function UT(t,e,n){const r=t.cloneNode(),s=t[ls];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Jp(r);return i.removeChild(r),o}const No=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>oo(e,n):e};function $T(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs=Symbol("_assign"),ss={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rs]=No(s);const i=r||s.props&&s.props.type==="number";vr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ao(c)),t[rs](c)}),n&&vr(t,"change",()=>{t.value=t.value.trim()}),e||(vr(t,"compositionstart",$T),vr(t,"compositionend",Jh),vr(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rs]=No(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ao(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=sa(e);vr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ao(Vo(o)):Vo(o));t[rs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,fp(()=>{t._assigning=!1})}),t[rs]=No(r)},mounted(t,{value:e}){Xh(t,e)},beforeUpdate(t,e,n){t[rs]=No(n)},updated(t,{value:e}){t._assigning||Xh(t,e)}};function Xh(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!sa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Vo(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Cy(e,c)>-1}else o.selected=e.has(c);else if(ca(Vo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vo(t){return"_value"in t?t._value:t.value}const BT=["ctrl","shift","alt","meta"],HT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BT.some(n=>t[`${n}Key`]&&!e.includes(n))},qT=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=HT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},WT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},KT=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=rr(s.key);if(e.some(o=>o===i||WT[o]===i))return t(s)})},zT=Qe({patchProp:DT},dT);let Zh;function GT(){return Zh||(Zh=Lv(zT))}const QT=(...t)=>{const e=GT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=JT(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,YT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function YT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function JT(t){return Ue(t)?document.querySelector(t):t}const XT=()=>{};var ef={};/**
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
 */const eg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ZT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let v=(c&15)<<2|h>>6,b=h&63;l||(b=64,o||(v=64)),r.push(n[d],n[p],n[v],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new eE;const v=i<<2|c>>4;if(r.push(v),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tE=function(t){const e=eg(t);return tg.encodeByteArray(e,!0)},Mo=function(t){return tE(t).replace(/\./g,"")},ng=function(t){try{return tg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rE=()=>nE().__FIREBASE_DEFAULTS__,sE=()=>{if(typeof process>"u"||typeof ef>"u")return;const t=ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ng(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return XT()||rE()||sE()||iE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rg=t=>{var e,n;return(n=(e=ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oE=t=>{const e=rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sg=()=>{var t;return(t=ma())===null||t===void 0?void 0:t.config},ig=t=>{var e;return(e=ma())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class aE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mo(JSON.stringify(n)),Mo(JSON.stringify(o)),""].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function uE(){var t;const e=(t=ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function og(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dE(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pE(){return!uE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ag(){try{return typeof indexedDB=="object"}catch{return!1}}function cg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function gE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mE="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mE,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_E(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Xt(s,c,r)}}function _E(t,e){return t.replace(yE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yE=/\{\$([^}]+)}/g;function vE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tf(i)&&tf(o)){if(!Yn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tf(t){return t!==null&&typeof t=="object"}/**
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
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TE(t,e){const n=new EE(t,e);return n.subscribe.bind(n)}class EE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=fc),s.error===void 0&&(s.error=fc),s.complete===void 0&&(s.complete=fc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
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
 */const wE=1e3,AE=2,bE=4*60*60*1e3,SE=.5;function nf(t,e=wE,n=AE){const r=e*Math.pow(n,t),s=Math.round(SE*r*(Math.random()-.5)*2);return Math.min(bE,r+s)}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class RE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PE(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CE(t){return t===yr?void 0:t}function PE(t){return t.instantiationMode==="EAGER"}/**
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
 */class kE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const DE={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},OE=Ee.INFO,NE={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},VE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _a{constructor(e){this.name=e,this._logLevel=OE,this._logHandler=VE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const ME=(t,e)=>e.some(n=>t instanceof n);let rf,sf;function xE(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return sf||(sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lg=new WeakMap,$c=new WeakMap,ug=new WeakMap,dc=new WeakMap,Dl=new WeakMap;function FE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lg.set(n,t)}).catch(()=>{}),Dl.set(e,t),e}function UE(t){if($c.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$c.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $E(t){jc=t(jc)}function jE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pc(this),e,...n);return ug.set(r,e.sort?e.sort():[e]),Hn(r)}:LE().includes(t)?function(...e){return t.apply(pc(this),e),Hn(lg.get(this))}:function(...e){return Hn(t.apply(pc(this),e))}}function BE(t){return typeof t=="function"?jE(t):(t instanceof IDBTransaction&&UE(t),ME(t,xE())?new Proxy(t,jc):t)}function Hn(t){if(t instanceof IDBRequest)return FE(t);if(dc.has(t))return dc.get(t);const e=BE(t);return e!==t&&(dc.set(t,e),Dl.set(e,t)),e}const pc=t=>Dl.get(t);function hg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const HE=["get","getKey","getAll","getAllKeys","count"],qE=["put","add","delete","clear"],gc=new Map;function of(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||HE.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return gc.set(e,i),i}$E(t=>({...t,get:(e,n,r)=>of(e,n)||t.get(e,n,r),has:(e,n)=>!!of(e,n)||t.has(e,n)}));/**
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
 */class WE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",af="0.11.4";/**
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
 */const wn=new _a("@firebase/app"),zE="@firebase/app-compat",GE="@firebase/analytics-compat",QE="@firebase/analytics",YE="@firebase/app-check-compat",JE="@firebase/app-check",XE="@firebase/auth",ZE="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/data-connect",nI="@firebase/database-compat",rI="@firebase/functions",sI="@firebase/functions-compat",iI="@firebase/installations",oI="@firebase/installations-compat",aI="@firebase/messaging",cI="@firebase/messaging-compat",lI="@firebase/performance",uI="@firebase/performance-compat",hI="@firebase/remote-config",fI="@firebase/remote-config-compat",dI="@firebase/storage",pI="@firebase/storage-compat",gI="@firebase/firestore",mI="@firebase/vertexai",_I="@firebase/firestore-compat",yI="firebase",vI="11.6.0";/**
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
 */const Hc="[DEFAULT]",TI={[Bc]:"fire-core",[zE]:"fire-core-compat",[QE]:"fire-analytics",[GE]:"fire-analytics-compat",[JE]:"fire-app-check",[YE]:"fire-app-check-compat",[XE]:"fire-auth",[ZE]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-data-connect",[nI]:"fire-rtdb-compat",[rI]:"fire-fn",[sI]:"fire-fn-compat",[iI]:"fire-iid",[oI]:"fire-iid-compat",[aI]:"fire-fcm",[cI]:"fire-fcm-compat",[lI]:"fire-perf",[uI]:"fire-perf-compat",[hI]:"fire-rc",[fI]:"fire-rc-compat",[dI]:"fire-gcs",[pI]:"fire-gcs-compat",[gI]:"fire-fst",[_I]:"fire-fst-compat",[mI]:"fire-vertex","fire-js":"fire-js",[yI]:"fire-js-all"};/**
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
 */const xo=new Map,EI=new Map,qc=new Map;function cf(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(qc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of xo.values())cf(n,t);for(const n of EI.values())cf(n,t);return!0}function Vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const II={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Nr("app","Firebase",II);/**
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
 */class wI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=vI;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=sg()),!n)throw qn.create("no-options");const i=xo.get(s);if(i){if(Yn(n,i.options)&&Yn(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new kE(s);for(const l of qc.values())o.addComponent(l);const c=new wI(n,r,o);return xo.set(s,c),c}function Ol(t=Hc){const e=xo.get(t);if(!e&&t===Hc&&sg())return fg();if(!e)throw qn.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=TI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(c.join(" "));return}hn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const AI="firebase-heartbeat-database",bI=1,hi="firebase-heartbeat-store";let mc=null;function dg(){return mc||(mc=hg(AI,bI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),mc}async function SI(t){try{const n=(await dg()).transaction(hi),r=await n.objectStore(hi).get(pg(t));return await n.done,r}catch(e){if(e instanceof Xt)wn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function lf(t,e){try{const r=(await dg()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,pg(t)),await r.done}catch(n){if(n instanceof Xt)wn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function pg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RI=1024,CI=30;class PI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>CI){const o=OI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uf(),{heartbeatsToSend:r,unsentEntries:s}=kI(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wn.warn(n),""}}}function uf(){return new Date().toISOString().substring(0,10)}function kI(t,e=RI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ag()?cg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hf(t){return Mo(JSON.stringify({version:2,heartbeats:t})).length}function OI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function NI(t){hn(new Yt("platform-logger",e=>new WE(e),"PRIVATE")),hn(new Yt("heartbeat",e=>new PI(e),"PRIVATE")),Bt(Bc,af,t),Bt(Bc,af,"esm2017"),Bt("fire-js","")}NI("");var VI="firebase",MI="11.6.0";/**
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
 */Bt(VI,MI,"app");function Nl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xI=gg,mg=new Nr("auth","Firebase",gg());/**
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
 */const Lo=new _a("@firebase/auth");function LI(t,...e){Lo.logLevel<=Ee.WARN&&Lo.warn(`Auth (${ys}): ${t}`,...e)}function ho(t,...e){Lo.logLevel<=Ee.ERROR&&Lo.error(`Auth (${ys}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Vl(t,...e)}function on(t,...e){return Vl(t,...e)}function _g(t,e,n){const r=Object.assign(Object.assign({},xI()),{[e]:n});return new Nr("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return _g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mg.create(t,...e)}function le(t,e,...n){if(!t)throw Vl(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function An(t,e){t||Tn(e)}/**
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
 */function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FI(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||og()||"connection"in navigator)?navigator.onLine:!0}function $I(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=lE()||fE()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ml(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HI=new Ai(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ar(t,e,n,r,s={}){return vg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=wi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return hE()||(h.referrerPolicy="no-referrer"),yg.fetch()(await Tg(t,t.config.apiHost,n,c),h)})}async function vg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jI),e);try{const s=new WI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _g(t,d,h);Jt(t,d)}}catch(s){if(s instanceof Xt)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function bi(t,e,n,r,s={}){const i=await ar(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Tg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ml(t.config,s):`${t.config.apiScheme}://${s}`;return BI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function qI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),HI.get())})}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function df(t){return t!==void 0&&t.enterprise!==void 0}class KI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zI(t,e){return ar(t,"GET","/v2/recaptchaConfig",or(t,e))}/**
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
 */async function GI(t,e){return ar(t,"POST","/v1/accounts:delete",e)}async function Fo(t,e){return ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QI(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=xl(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(_c(s.auth_time)),issuedAtTime:Xs(_c(s.iat)),expirationTime:Xs(_c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function xl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=ng(n);return s?JSON.parse(s):(ho("Failed to decode base64 JWT payload"),null)}catch(s){return ho("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pf(t){const e=xl(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&YI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fi(t,Fo(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Eg(i.providerUserInfo):[],c=ZI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function XI(t){const e=ze(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Eg(t){return t.map(e=>{var{providerId:n}=e,r=Nl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ew(t,e){const n=await vg(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Tg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",yg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tw(t,e){return ar(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ew(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new is;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Nn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Nl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QI(this,e)}reload(){return XI(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await fi(this,GI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Z=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:G,isAnonymous:ue,providerData:J,stsTokenManager:I}=n;le(Q&&I,e,"internal-error");const m=is.fromJSON(this.name,I);le(typeof Q=="string",e,"internal-error"),Nn(p,e.name),Nn(v,e.name),le(typeof G=="boolean",e,"internal-error"),le(typeof ue=="boolean",e,"internal-error"),Nn(b,e.name),Nn(C,e.name),Nn(k,e.name),Nn(D,e.name),Nn(x,e.name),Nn(Z,e.name);const _=new Kt({uid:Q,auth:e,email:v,emailVerified:G,displayName:p,isAnonymous:ue,photoURL:C,phoneNumber:b,tenantId:k,stsTokenManager:m,createdAt:x,lastLoginAt:Z});return J&&Array.isArray(J)&&(_.providerData=J.map(T=>Object.assign({},T))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Uo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Eg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new is;c.updateFromIdToken(r);const l=new Kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const gf=new Map;function En(t){An(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
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
 */class Ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ig.type="NONE";const mf=Ig;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fo(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(En(mf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(mf);const o=fo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const v=await Fo(e,{idToken:d}).catch(()=>{});if(!v)break;p=await Kt._fromGetAccountInfoResponse(e,v,d)}else p=Kt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new os(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new os(i,e,r))}}/**
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
 */function _f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cg(e))return"Blackberry";if(Pg(e))return"Webos";if(Ag(e))return"Safari";if((e.includes("chrome/")||bg(e))&&!e.includes("edge/"))return"Chrome";if(Rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wg(t=gt()){return/firefox\//i.test(t)}function Ag(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bg(t=gt()){return/crios\//i.test(t)}function Sg(t=gt()){return/iemobile/i.test(t)}function Rg(t=gt()){return/android/i.test(t)}function Cg(t=gt()){return/blackberry/i.test(t)}function Pg(t=gt()){return/webos/i.test(t)}function Ll(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nw(t=gt()){var e;return Ll(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rw(){return dE()&&document.documentMode===10}function kg(t=gt()){return Ll(t)||Rg(t)||Pg(t)||Cg(t)||/windows phone/i.test(t)||Sg(t)}/**
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
 */function Dg(t,e=[]){let n;switch(t){case"Browser":n=_f(gt());break;case"Worker":n=`${_f(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
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
 */class sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iw(t,e={}){return ar(t,"GET","/v2/passwordPolicy",or(t,e))}/**
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
 */const ow=6;class aw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ow,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yf(this),this.idTokenSubscription=new yf(this),this.beforeStateQueue=new sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fo(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(In(this));const n=e?ze(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iw(this),n=new aw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(t){return ze(t)}class yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TE(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lw(t){ya=t}function Og(t){return ya.loadJS(t)}function uw(){return ya.recaptchaEnterpriseScript}function hw(){return ya.gapiScript}function fw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dw{constructor(){this.enterprise=new pw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gw="recaptcha-enterprise",Ng="NO_RECAPTCHA";class mw{constructor(e){this.type=gw,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{zI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new KI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;df(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ng)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&df(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uw();l.length!==0&&(l+=c),Og(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function vf(t,e,n,r=!1,s=!1){const i=new mw(t);let o;if(s)o=Ng;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await vf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await vf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function _w(t,e){const n=Vr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yn(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function yw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vw(t,e,n){const r=Mr(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vg(e),{host:o,port:c}=Tw(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Yn(h,r.config.emulator)&&Yn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ew()}function Vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tw(t){const e=Vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Tf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Tf(o)}}}function Tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ew(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function Iw(t,e){return ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ww(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}/**
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
 */async function Aw(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function bw(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
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
 */class di extends Fl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,n,"signInWithPassword",ww);case"emailLink":return Aw(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,r,"signUpPassword",Iw);case"emailLink":return bw(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function as(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
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
 */const Sw="http://localhost";class Rr extends Fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Nl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */function Rw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cw(t){const e=$s(js(t)).link,n=e?$s(js(e)).deep_link_id:null,r=$s(js(t)).deep_link_id;return(r?$s(js(r)).link:null)||r||n||e||t}class Ul{constructor(e){var n,r,s,i,o,c;const l=$s(js(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Rw((s=l.mode)!==null&&s!==void 0?s:null);le(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Cw(e);try{return new Ul(n)}catch{return null}}}/**
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
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ul.parseLink(n);return le(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends Mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Si{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Fn extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
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
 */class Un extends Si{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class $n extends Si{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */async function Pw(t,e){return bi(t,"POST","/v1/accounts:signUp",or(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Ef(r);return new Cr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ef(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $o extends Xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $o(e,n,r,s)}}function xg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(t,i,e,r):i})}async function kw(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function Dw(t,e,n=!1){const{auth:r}=t;if($t(r.app))return Promise.reject(In(r));const s="reauthenticate";try{const i=await fi(t,xg(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=xl(i.idToken);le(o,r,"internal-error");const{sub:c}=o;return le(t.uid===c,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function Lg(t,e,n=!1){if($t(t.app))return Promise.reject(In(t));const r="signIn",s=await xg(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ow(t,e){return Lg(Mr(t),e)}/**
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
 */async function Fg(t){const e=Mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Nw(t,e,n){if($t(t.app))return Promise.reject(In(t));const r=Mr(t),o=await zc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Fg(t),l}),c=await Cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Vw(t,e,n){return $t(t.app)?Promise.reject(In(t)):Ow(ze(t),vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fg(t),r})}function Mw(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function xw(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function Lw(t){return ze(t).signOut()}const jo="__sak";/**
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
 */class Ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fw=1e3,Uw=10;class $g extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Uw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$g.type="LOCAL";const $w=$g;/**
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
 */class jg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jg.type="SESSION";const Bg=jg;/**
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
 */function jw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await jw(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
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
 */function $l(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=$l("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function Hw(t){an().location.href=t}/**
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
 */function Hg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function qw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ww(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kw(){return Hg()?self:null}/**
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
 */const qg="firebaseLocalStorageDb",zw=1,Bo="firebaseLocalStorage",Wg="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function Gw(){const t=indexedDB.deleteDatabase(qg);return new Ri(t).toPromise()}function Gc(){const t=indexedDB.open(qg,zw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:Wg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await Gw(),e(await Gc()))})})}async function If(t,e,n){const r=Ta(t,!0).put({[Wg]:e,value:n});return new Ri(r).toPromise()}async function Qw(t,e){const n=Ta(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function wf(t,e){const n=Ta(t,!0).delete(e);return new Ri(n).toPromise()}const Yw=800,Jw=3;class Kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(Kw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qw(),!this.activeServiceWorker)return;this.sender=new Bw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ww()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await If(e,jo,"1"),await wf(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>If(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ta(s,!1).getAll();return new Ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kg.type="LOCAL";const Xw=Kg;new Ai(3e4,6e4);/**
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
 */function Zw(t,e){return e?En(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jl extends Fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eA(t){return Lg(t.auth,new jl(t),t.bypassAuthState)}function tA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Dw(n,new jl(t),t.bypassAuthState)}async function nA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),kw(n,new jl(t),t.bypassAuthState)}/**
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
 */class zg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eA;case"linkViaPopup":case"linkViaRedirect":return nA;case"reauthViaPopup":case"reauthViaRedirect":return tA;default:Jt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rA=new Ai(2e3,1e4);class Yr extends zg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=$l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rA.get())};e()}}Yr.currentPopupAction=null;/**
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
 */const sA="pendingRedirect",po=new Map;class iA extends zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await oA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oA(t,e){const n=lA(e),r=cA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aA(t,e){po.set(t._key(),e)}function cA(t){return En(t._redirectPersistence)}function lA(t){return fo(sA,t.config.apiKey,t.name)}async function uA(t,e,n=!1){if($t(t.app))return Promise.reject(In(t));const r=Mr(t),s=Zw(r,e),o=await new iA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gg(t);default:return!1}}/**
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
 */async function pA(t,e={}){return ar(t,"GET","/v1/projects",e)}/**
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
 */const gA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pA(t);for(const n of e)try{if(yA(n))return}catch{}Jt(t,"unauthorized-domain")}function yA(t){const e=Wc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mA.test(n))return!1;if(gA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vA=new Ai(3e4,6e4);function bf(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TA(t){return new Promise((e,n)=>{var r,s,i;function o(){bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bf(),n(on(t,"network-request-failed"))},timeout:vA.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const c=fw("iframefcb");return an()[c]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},Og(`${hw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function EA(t){return go=go||TA(t),go}/**
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
 */const IA=new Ai(5e3,15e3),wA="__/auth/iframe",AA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RA(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ml(e,AA):`https://${t.config.authDomain}/${wA}`,r={apiKey:e.apiKey,appName:t.name,v:ys},s=SA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function CA(t){const e=await EA(t),n=an().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:RA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},IA.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const PA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,DA=600,OA="_blank",NA="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VA(t,e,n,r=kA,s=DA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},PA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=gt().toLowerCase();n&&(c=bg(h)?OA:n),wg(h)&&(e=e||NA,l.scrollbars="yes");const d=Object.entries(l).reduce((v,[b,C])=>`${v}${b}=${C},`,"");if(nw(h)&&c!=="_self")return MA(e||"",c),new Sf(null);const p=window.open(e||"",c,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Sf(p)}function MA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xA="__/auth/handler",LA="emulator/auth/handler",FA=encodeURIComponent("fac");async function Rf(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:s};if(e instanceof Mg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Si){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${FA}=${encodeURIComponent(l)}`:"";return`${UA(t)}?${wi(c).slice(1)}${h}`}function UA({config:t}){return t.emulator?Ml(t,LA):`https://${t.authDomain}/${xA}`}/**
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
 */const yc="webStorageSupport";class $A{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=uA,this._overrideRedirectResult=aA}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rf(e,n,r,Wc(),s);return VA(e,o,$l())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rf(e,n,r,Wc(),s);return Hw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CA(e),r=new fA(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yc,{type:yc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kg()||Ag()||Ll()}}const jA=$A;var Cf="@firebase/auth",Pf="1.10.0";/**
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
 */class BA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qA(t){hn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dg(t)},h=new cw(r,s,i,l);return yw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Yt("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new BA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Cf,Pf,HA(t)),Bt(Cf,Pf,"esm2017")}/**
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
 */const WA=5*60,KA=ig("authIdTokenMaxAge")||WA;let kf=null;const zA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KA)return;const s=n==null?void 0:n.token;kf!==s&&(kf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GA(t=Ol()){const e=Vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_w(t,{popupRedirectResolver:jA,persistence:[Xw,$w,Bg]}),r=ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zA(i.toString());xw(n,o,()=>o(n.currentUser)),Mw(n,c=>o(c))}}const s=rg("auth");return s&&vw(n,`http://${s}`),n}function QA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qA("Browser");var Df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,Qg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,E,w){for(var y=Array(arguments.length-2),W=2;W<arguments.length;W++)y[W-2]=arguments[W];return m.prototype[E].apply(T,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)T[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)T[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],E=I.g[2];var w=I.g[3],y=m+(w^_&(E^w))+T[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=w+(E^m&(_^E))+T[1]+3905402710&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(_^w&(m^_))+T[2]+606105819&4294967295,E=w+(y<<17&4294967295|y>>>15),y=_+(m^E&(w^m))+T[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(w^_&(E^w))+T[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(E^m&(_^E))+T[5]+1200080426&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(_^w&(m^_))+T[6]+2821735955&4294967295,E=w+(y<<17&4294967295|y>>>15),y=_+(m^E&(w^m))+T[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(w^_&(E^w))+T[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(E^m&(_^E))+T[9]+2336552879&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(_^w&(m^_))+T[10]+4294925233&4294967295,E=w+(y<<17&4294967295|y>>>15),y=_+(m^E&(w^m))+T[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(w^_&(E^w))+T[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(E^m&(_^E))+T[13]+4254626195&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(_^w&(m^_))+T[14]+2792965006&4294967295,E=w+(y<<17&4294967295|y>>>15),y=_+(m^E&(w^m))+T[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(E^w&(_^E))+T[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^E&(m^_))+T[6]+3225465664&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(w^m))+T[11]+643717713&4294967295,E=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(E^w))+T[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(E^w&(_^E))+T[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^E&(m^_))+T[10]+38016083&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(w^m))+T[15]+3634488961&4294967295,E=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(E^w))+T[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(E^w&(_^E))+T[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^E&(m^_))+T[14]+3275163606&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(w^m))+T[3]+4107603335&4294967295,E=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(E^w))+T[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(E^w&(_^E))+T[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^E&(m^_))+T[2]+4243563512&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(w^m))+T[7]+1735328473&4294967295,E=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(E^w))+T[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(_^E^w)+T[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^E)+T[8]+2272392833&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^_)+T[11]+1839030562&4294967295,E=w+(y<<16&4294967295|y>>>16),y=_+(E^w^m)+T[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(_^E^w)+T[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^E)+T[4]+1272893353&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^_)+T[7]+4139469664&4294967295,E=w+(y<<16&4294967295|y>>>16),y=_+(E^w^m)+T[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(_^E^w)+T[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^E)+T[0]+3936430074&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^_)+T[3]+3572445317&4294967295,E=w+(y<<16&4294967295|y>>>16),y=_+(E^w^m)+T[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(_^E^w)+T[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^E)+T[12]+3873151461&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^_)+T[15]+530742520&4294967295,E=w+(y<<16&4294967295|y>>>16),y=_+(E^w^m)+T[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(E^(_|~w))+T[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~E))+T[7]+1126891415&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~_))+T[14]+2878612391&4294967295,E=w+(y<<15&4294967295|y>>>17),y=_+(w^(E|~m))+T[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=m+(E^(_|~w))+T[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~E))+T[3]+2399980690&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~_))+T[10]+4293915773&4294967295,E=w+(y<<15&4294967295|y>>>17),y=_+(w^(E|~m))+T[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=m+(E^(_|~w))+T[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~E))+T[15]+4264355552&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~_))+T[6]+2734768916&4294967295,E=w+(y<<15&4294967295|y>>>17),y=_+(w^(E|~m))+T[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=m+(E^(_|~w))+T[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~E))+T[11]+3174756917&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~_))+T[2]+718787259&4294967295,E=w+(y<<15&4294967295|y>>>17),y=_+(w^(E|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,T=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)s(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<m;)if(T[E++]=I.charCodeAt(w++),E==this.blockSize){s(this,T),E=0;break}}else for(;w<m;)if(T[E++]=I[w++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)I[_++]=this.g[m]>>>T&255;return I};function i(I,m){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function o(I,m){this.h=m;for(var _=[],T=!0,E=I.length-1;0<=E;E--){var w=I[E]|0;T&&w==m||(_[E]=w,T=!1)}this.g=_}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new o([m|0],0>m?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(h(-I));for(var m=[],_=1,T=0;I>=_;T++)m[T]=I/_|0,_*=4294967296;return new o(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return D(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=p,E=0;E<I.length;E+=8){var w=Math.min(8,I.length-E),y=parseInt(I.substring(E,E+w),m);8>w?(w=h(Math.pow(m,w)),T=T.j(w).add(h(y))):(T=T.j(_),T=T.add(h(y)))}return T}var p=l(0),v=l(1),b=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(k(this))return"-"+D(this).toString(I);for(var m=h(Math.pow(I,6)),_=this,T="";;){var E=G(_,m).g;_=x(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=E,C(_))return w+T;for(;6>w.length;)w="0"+w;T=w+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=x(this,I),k(I)?-1:C(I)?0:1};function D(I){for(var m=I.g.length,_=[],T=0;T<m;T++)_[T]=~I.g[T];return new o(_,~I.h).add(v)}t.abs=function(){return k(this)?D(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0,E=0;E<=m;E++){var w=T+(this.i(E)&65535)+(I.i(E)&65535),y=(w>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);T=y>>>16,w&=65535,y&=65535,_[E]=y<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(I,m){return I.add(D(m))}t.j=function(I){if(C(this)||C(I))return p;if(k(this))return k(I)?D(this).j(D(I)):D(D(this).j(I));if(k(I))return D(this.j(D(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<I.g.length;E++){var w=this.i(T)>>>16,y=this.i(T)&65535,W=I.i(E)>>>16,H=I.i(E)&65535;_[2*T+2*E]+=y*H,Z(_,2*T+2*E),_[2*T+2*E+1]+=w*H,Z(_,2*T+2*E+1),_[2*T+2*E+1]+=y*W,Z(_,2*T+2*E+1),_[2*T+2*E+2]+=w*W,Z(_,2*T+2*E+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new o(_,0)};function Z(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Q(I,m){this.g=I,this.h=m}function G(I,m){if(C(m))throw Error("division by zero");if(C(I))return new Q(p,p);if(k(I))return m=G(D(I),m),new Q(D(m.g),D(m.h));if(k(m))return m=G(I,D(m)),new Q(D(m.g),m.h);if(30<I.g.length){if(k(I)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=m;0>=T.l(I);)_=ue(_),T=ue(T);var E=J(_,1),w=J(T,1);for(T=J(T,2),_=J(_,2);!C(T);){var y=w.add(T);0>=y.l(I)&&(E=E.add(_),w=y),T=J(T,1),_=J(_,1)}return m=x(I,E.j(m)),new Q(E,m)}for(E=p;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),w=h(_),y=w.j(m);k(y)||0<y.l(I);)_-=T,w=h(_),y=w.j(m);C(w)&&(w=v),E=E.add(w),I=x(I,y)}return new Q(E,I)}t.A=function(I){return G(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&I.i(T);return new o(_,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|I.i(T);return new o(_,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^I.i(T);return new o(_,this.h^I.h)};function ue(I){for(var m=I.g.length+1,_=[],T=0;T<m;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(_,I.h)}function J(I,m){var _=m>>5;m%=32;for(var T=I.g.length-_,E=[],w=0;w<T;w++)E[w]=0<m?I.i(w+_)>>>m|I.i(w+_+1)<<32-m:I.i(w+_);return new o(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Wn=o}).apply(typeof Df<"u"?Df:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yg,Bs,Jg,mo,Qc,Xg,Zg,em;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var P=f++;return{value:u(P,a[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(u,R)}}return function(){return a.apply(u,arguments)}}function v(a,u,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,v.apply(null,arguments)}function b(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,P){for(var z=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)z[Pe-2]=arguments[Pe];return u.prototype[R].apply(g,z)}}function k(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=a.length||0,P=g.length||0;a.length=R+P;for(let z=0;z<P;z++)a[R+z]=g[z]}else a.push(g)}}class x{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Z(a){return/^[\s\xa0]*$/.test(a)}function Q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function G(a){return G[" "](a),a}G[" "]=function(){};var ue=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function J(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function m(a){const u={};for(const f in a)u[f]=a[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let P=0;P<_.length;P++)f=_[P],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function E(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function w(a){c.setTimeout(()=>{throw a},0)}function y(){var a=re;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,f){const g=H.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var H=new x(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let B,V=!1,re=new W,ce=()=>{const a=c.Promise.resolve(void 0);B=()=>{a.then(Te)}};var Te=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(f){w(f)}var u=H;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}V=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var $e=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function je(a,u){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ue){e:{try{G(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&je.aa.h.call(this)}}C(je,ve);var vt={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ye="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function xt(a,u,f,g,R){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Ht,this.da=this.fa=!1}function Ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,u,f,g,R){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var z=S(a,u,g,R);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new xt(u,this.src,P,!!g,R),u.fa=f,a.push(u)),u};function A(a,u){var f=u.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&(Ne(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,u,f,g){for(var R=0;R<a.length;++R){var P=a[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var O="closure_lm_"+(1e6*Math.random()|0),F={};function M(a,u,f,g,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)M(a,u[P],f,g,R);return null}return f=he(f),a&&a[Ye]?a.K(u,f,h(g)?!!g.capture:!1,R):U(a,u,f,!1,g,R)}function U(a,u,f,g,R,P){if(!u)throw Error("Invalid event type");var z=h(R)?!!R.capture:!!R,Pe=X(a);if(Pe||(a[O]=Pe=new Tt(a)),f=Pe.add(u,f,g,z,P),f.proxy)return f;if(g=Y(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)$e||(R=z),R===void 0&&(R=!1),a.addEventListener(u.toString(),g,R);else if(a.attachEvent)a.attachEvent($(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return u.call(a.src,a.listener,f)}const u=ie;return a}function K(a,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(a,u[P],f,g,R);else g=h(g)?!!g.capture:!!g,f=he(f),a&&a[Ye]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],f=S(P,f,g,R),-1<f&&(Ne(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=X(a))&&(u=a.g[u.toString()],a=-1,u&&(a=S(u,f,g,R)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ye])A(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent($(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=X(u))?(A(f,a),f.h==0&&(f.src=null,u[O]=null)):Ne(a)}}}function $(a){return a in F?F[a]:F[a]="on"+a}function ie(a,u){if(a.da)a=!0;else{u=new je(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&q(a),a=f.call(g,u)}return a}function X(a){return a=a[O],a instanceof Tt?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[te]||(a[te]=function(u){return a.handleEvent(u)}),a[te])}function oe(){me.call(this),this.i=new Tt(this),this.M=this,this.F=null}C(oe,me),oe.prototype[Ye]=!0,oe.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function ge(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new ve(u,a);else if(u instanceof ve)u.target=u.target||a;else{var R=u;u=new ve(g,a),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var z=u.g=f[P];R=we(z,g,!0,u)&&R}if(z=u.g=a,R=we(z,g,!0,u)&&R,R=we(z,g,!1,u)&&R,f)for(P=0;P<f.length;P++)z=u.g=f[P],R=we(z,g,!1,u)&&R}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Ne(f[g]);delete a.g[u],a.h--}}this.F=null},oe.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},oe.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function we(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var z=u[P];if(z&&!z.da&&z.capture==f){var Pe=z.listener,Ze=z.ha||z.src;z.fa&&A(a.i,z),R=Pe.call(Ze,g)!==!1&&R}}return R&&!g.defaultPrevented}function st(a,u,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Je(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Lt extends me{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(a){me.call(this),this.h=a,this.g={}}C(it,me);var Cn=[];function As(a){J(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}it.prototype.N=function(){it.aa.N.call(this),As(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=c.JSON.stringify,Ft=c.JSON.parse,Oi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function $a(){}$a.prototype.h=null;function Ru(a){return a.h||(a.h=a.i())}function Cu(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ja(){ve.call(this,"d")}C(ja,ve);function Ba(){ve.call(this,"c")}C(Ba,ve);var ur={},Pu=null;function Ni(){return Pu=Pu||new oe}ur.La="serverreachability";function ku(a){ve.call(this,ur.La,a)}C(ku,ve);function Ss(a){const u=Ni();ge(u,new ku(u))}ur.STAT_EVENT="statevent";function Du(a,u){ve.call(this,ur.STAT_EVENT,a),this.stat=u}C(Du,ve);function mt(a){const u=Ni();ge(u,new Du(u,a))}ur.Ma="timingevent";function Ou(a,u){ve.call(this,ur.Ma,a),this.size=u}C(Ou,ve);function Rs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function K_(a,u,f,g,R,P){a.info(function(){if(a.g)if(P)for(var z="",Pe=P.split("&"),Ze=0;Ze<Pe.length;Ze++){var be=Pe[Ze].split("=");if(1<be.length){var ot=be[0];be=be[1];var at=ot.split("_");z=2<=at.length&&at[1]=="type"?z+(ot+"="+be+"&"):z+(ot+"=redacted&")}}else z=null;else z=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+z})}function z_(a,u,f,g,R,P,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+z})}function Fr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Q_(a,f)+(g?" "+g:"")})}function G_(a,u){a.info(function(){return"TIMEOUT: "+u})}Cs.prototype.info=function(){};function Q_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var z=1;z<R.length;z++)R[z]=""}}}}return Xe(f)}catch{return u}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ha;function Mi(){}C(Mi,$a),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Ha=new Mi;function Pn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var Mu={},qa={};function Wa(a,u,f){a.L=1,a.v=Ui(pn(u)),a.m=f,a.P=!0,xu(a,null)}function xu(a,u){a.F=Date.now(),xi(a),a.A=pn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Yu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Vu,a.g=ph(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Lt(v(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Cn[0]=R.toString()),R=Cn);for(var P=0;P<R.length;P++){var z=M(f,R[P],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ss(),K_(a.i,a.u,a.A,a.l,a.R,a.m)}Pn.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const at=gn(this.g);var u=this.g.Ba();const jr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||rh(this.g)))){this.J||at!=4||u==7||(u==8||0>=jr?Ss(3):Ss(2)),Ka(this);var f=this.g.Z();this.X=f;t:if(Lu(this)){var g=rh(this.g);a="";var R=g.length,P=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),Ps(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(P&&u==R-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,z_(this.i,this.u,this.A,this.l,this.R,at,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ze=this.g;if((Pe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Pe)){var be=Pe;break t}}be=null}if(f=be)Fr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,za(this,f);else{this.o=!1,this.s=3,mt(12),hr(this),Ps(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<z.length;)if(qt=Y_(this,z),qt==qa){at==4&&(this.s=4,mt(14),f=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Mu){this.s=4,mt(15),Fr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Fr(this.i,this.l,qt,null),za(this,qt);if(Lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||z.length!=0||this.h.h||(this.s=1,mt(16),f=!1),this.o=this.o&&f,!f)Fr(this.i,this.l,z,"[Invalid Chunked Response]"),hr(this),Ps(this);else if(0<z.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Za(ot),ot.M=!0,mt(11))}}else Fr(this.i,this.l,z,null),za(this,z);at==4&&hr(this),this.o&&!this.J&&(at==4?uh(this.j,this):(this.o=!1,xi(this)))}else dy(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),hr(this),Ps(this)}}}catch{}finally{}};function Lu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Y_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?qa:(f=Number(u.substring(f,g)),isNaN(f)?Mu:(g+=1,g+f>u.length?qa:(u=u.slice(g,g+f),a.C=g+f,u)))}Pn.prototype.cancel=function(){this.J=!0,hr(this)};function xi(a){a.S=Date.now()+a.I,Fu(a,a.I)}function Fu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rs(v(a.ba,a),u)}function Ka(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Pn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(G_(this.i,this.A),this.L!=2&&(Ss(),mt(17)),hr(this),this.s=2,Ps(this)):Fu(this,this.S-a)};function Ps(a){a.j.G==0||a.J||uh(a.j,a)}function hr(a){Ka(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,As(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function za(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ga(f.h,a))){if(!a.K&&Ga(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Wi(f),Hi(f);else break e;Xa(f),mt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Rs(v(f.Za,f),6e3));if(1>=ju(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else dr(f,11)}else if((a.K||f.g==a)&&Wi(f),!Z(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let be=R[u];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const ot=be[3];ot!=null&&(f.la=ot,f.j.info("VER="+f.la));const at=be[4];at!=null&&(f.Aa=at,f.j.info("SVER="+f.Aa));const jr=be[5];jr!=null&&typeof jr=="number"&&0<jr&&(g=1.5*jr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const qt=a.g;if(qt){const zi=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var P=g.h;P.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Qa(P,P.h),P.h=null))}if(g.D){const ec=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(g.ya=ec,Ve(g.I,g.D,ec))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=dh(g,g.J?g.ia:null,g.W),z.K){Bu(g.h,z);var Pe=z,Ze=g.L;Ze&&(Pe.I=Ze),Pe.B&&(Ka(Pe),xi(Pe)),g.g=z}else ch(g);0<f.i.length&&qi(f)}else be[0]!="stop"&&be[0]!="close"||dr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?dr(f,7):Ja(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Ss(4)}catch{}}var J_=class{constructor(a,u){this.g=a,this.map=u}};function Uu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ju(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Qa(a,u){a.g?a.g.add(u):a.h=u}function Bu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Uu.prototype.cancel=function(){if(this.i=Hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return k(a.i)}function X_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function Z_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function qu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Z_(a),g=X_(a),R=g.length,P=0;P<R;P++)u.call(void 0,g[P],f&&f[P],a)}var Wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ey(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var P=a[f].substring(0,g);R=a[f].substring(g+1)}else P=a[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fr){this.h=a.h,Li(this,a.j),this.o=a.o,this.g=a.g,Fi(this,a.s),this.l=a.l;var u=a.i,f=new Os;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ku(this,f),this.m=a.m}else a&&(u=String(a).match(Wu))?(this.h=!1,Li(this,u[1]||"",!0),this.o=ks(u[2]||""),this.g=ks(u[3]||"",!0),Fi(this,u[4]),this.l=ks(u[5]||"",!0),Ku(this,u[6]||"",!0),this.m=ks(u[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}fr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ds(u,zu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ds(u,zu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ds(f,f.charAt(0)=="/"?ry:ny,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ds(f,iy)),a.join("")};function pn(a){return new fr(a)}function Li(a,u,f){a.j=f?ks(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Fi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ku(a,u,f){u instanceof Os?(a.i=u,oy(a.i,a.h)):(f||(u=Ds(u,sy)),a.i=new Os(u,a.h))}function Ve(a,u,f){a.i.set(u,f)}function Ui(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ks(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ds(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,ty),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ty(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zu=/[#\/\?@]/g,ny=/[#\?:]/g,ry=/[#\?]/g,sy=/[#\?@]/g,iy=/#/g;function Os(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&ey(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Os.prototype,t.add=function(a,u){kn(this),this.i=null,a=Ur(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Gu(a,u){kn(a),u=Ur(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Qu(a,u){return kn(a),u=Ur(a,u),a.g.has(u)}t.forEach=function(a,u){kn(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(u,R,g,this)},this)},this)},t.na=function(){kn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=a[g];for(let P=0;P<R.length;P++)f.push(u[g])}return f},t.V=function(a){kn(this);let u=[];if(typeof a=="string")Qu(this,a)&&(u=u.concat(this.g.get(Ur(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return kn(this),this.i=null,a=Ur(this,a),Qu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Yu(a,u,f){Gu(a,u),0<f.length&&(a.i=null,a.g.set(Ur(a,u),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var R=P;z[g]!==""&&(R+="="+encodeURIComponent(String(z[g]))),a.push(R)}}return this.i=a.join("&")};function Ur(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function oy(a,u){u&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Gu(this,g),Yu(this,R,f))},a)),a.j=u}function ay(a,u){const f=new Cs;if(c.Image){const g=new Image;g.onload=b(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Dn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function cy(a,u){const f=new Cs,g=new AbortController,R=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Dn(f,"TestPingServer: error",!1,u)})}function Dn(a,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function ly(){this.g=new Oi}function uy(a,u,f){const g=f||"";try{qu(a,function(R,P){let z=R;h(R)&&(z=Xe(R)),u.push(g+P+"="+encodeURIComponent(z))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function $i(a){this.l=a.Ub||null,this.j=a.eb||!1}C($i,$a),$i.prototype.g=function(){return new ji(this.l,this.j)},$i.prototype.i=function(a){return function(){return a}}({});function ji(a,u){oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ji,oe),t=ji.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Vs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ju(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ju(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ns(this):Vs(this),this.readyState==3&&Ju(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ns(this))},t.Qa=function(a){this.g&&(this.response=a,Ns(this))},t.ga=function(){this.g&&Ns(this)};function Ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xu(a){let u="";return J(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ya(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Xu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ve(a,u,f))}function Le(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Le,oe);var hy=/^https?$/i,fy=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?Ru(this.o):Ru(Ha),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){Zu(this,P);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(fy,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,z]of f)this.g.setRequestHeader(P,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nh(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Zu(this,P)}};function Zu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,eh(a),Bi(a)}function eh(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Bi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?th(this):this.bb())},t.bb=function(){th(this)};function th(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)st(a.Ea,0,a);else if(ge(a,"readystatechange"),gn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var R=String(a.D).match(Wu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!hy.test(R?R.toLowerCase():"")}f=g}if(f)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var P=2<gn(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",eh(a)}}finally{Bi(a)}}}}function Bi(a,u){if(a.g){nh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ge(a,"ready");try{f.onreadystatechange=g}catch{}}}function nh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ft(u)}};function rh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dy(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(Z(a[g]))continue;var f=E(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function sh(a){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,a),this.cb=Ms("retryDelaySeedMs",1e4,a),this.Wa=Ms("forwardChannelMaxRetries",2,a),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Uu(a&&a.concurrentRequestLimit),this.Da=new ly,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){mt(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=dh(this,null,this.W),qi(this)};function Ja(a){if(ih(a),a.G==3){var u=a.U++,f=pn(a.I);if(Ve(f,"SID",a.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),xs(a,f),u=new Pn(a,a.j,u),u.L=2,u.v=Ui(pn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=ph(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}fh(a)}function Hi(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function ih(a){Hi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Wi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function qi(a){if(!$u(a.h)&&!a.s){a.s=!0;var u=a.Ga;B||ce(),V||(B(),V=!0),re.add(u,a),a.B=0}}function py(a,u){return ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rs(v(a.Ga,a,u),hh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Pn(this,this.j,a);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=ah(this,R,u),f=pn(this.I),Ve(f,"RID",a),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),xs(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Xu(P)))+"&"+u:this.m&&Ya(f,this.m,P)),Qa(this.h,R),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),R.T=!0,Wa(R,f,null)):Wa(R,f,u),this.G=2}}else this.G==3&&(a?oh(this,a):this.i.length==0||$u(this.h)||oh(this))};function oh(a,u){var f;u?f=u.l:f=a.U++;const g=pn(a.I);Ve(g,"SID",a.K),Ve(g,"RID",f),Ve(g,"AID",a.T),xs(a,g),a.m&&a.o&&Ya(g,a.m,a.o),f=new Pn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ah(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qa(a.h,f),Wa(f,g,u)}function xs(a,u){a.H&&J(a.H,function(f,g){Ve(u,g,f)}),a.l&&qu({},function(f,g){Ve(u,g,f)})}function ah(a,u,f){f=Math.min(a.i.length,f);var g=a.l?v(a.l.Na,a.l,a):null;e:{var R=a.i;let P=-1;for(;;){const z=["count="+f];P==-1?0<f?(P=R[0].g,z.push("ofs="+P)):P=0:z.push("ofs="+P);let Pe=!0;for(let Ze=0;Ze<f;Ze++){let be=R[Ze].g;const ot=R[Ze].map;if(be-=P,0>be)P=Math.max(0,R[Ze].g-100),Pe=!1;else try{uy(ot,z,"req"+be+"_")}catch{g&&g(ot)}}if(Pe){g=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function ch(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;B||ce(),V||(B(),V=!0),re.add(u,a),a.v=0}}function Xa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rs(v(a.Fa,a),hh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rs(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Hi(this),lh(this))};function Za(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function lh(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pn(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),xs(a,u),a.m&&a.o&&Ya(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ui(pn(u)),f.m=null,f.P=!0,xu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),Xa(this),mt(19))};function Wi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function uh(a,u){var f=null;if(a.g==u){Wi(a),Za(a),a.g=null;var g=2}else if(Ga(a.h,u))f=u.D,Bu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=a.B;g=Ni(),ge(g,new Ou(g,f)),qi(a)}else ch(a);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&py(a,u)||g==2&&Xa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),R){case 1:dr(a,5);break;case 4:dr(a,10);break;case 3:dr(a,6);break;default:dr(a,2)}}}function hh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function dr(a,u){if(a.j.info("Error code "+u),u==2){var f=v(a.fb,a),g=a.Xa;const R=!g;g=new fr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Li(g,"https"),Ui(g),R?ay(g.toString(),f):cy(g.toString(),f)}else mt(2);a.G=0,a.l&&a.l.sa(u),fh(a),ih(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function fh(a){if(a.G=0,a.ka=[],a.l){const u=Hu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function dh(a,u,f){var g=f instanceof fr?pn(f):new fr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Fi(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new fr(null);g&&Li(P,g),u&&(P.g=u),R&&Fi(P,R),f&&(P.l=f),g=P}return f=a.D,u=a.ya,f&&u&&Ve(g,f,u),Ve(g,"VER",a.la),xs(a,g),g}function ph(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Le(new $i({eb:f})):new Le(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gh(){}t=gh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ki(){}Ki.prototype.g=function(a,u){return new St(a,u)};function St(a,u){oe.call(this),this.g=new sh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!Z(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Z(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $r(this)}C(St,oe),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ja(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xe(a),a=f);u.i.push(new J_(u.Ya++,a)),u.G==3&&qi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,St.aa.N.call(this)};function mh(a){ja.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(mh,ja);function _h(){Ba.call(this),this.status=1}C(_h,Ba);function $r(a){this.g=a}C($r,gh),$r.prototype.ua=function(){ge(this.g,"a")},$r.prototype.ta=function(a){ge(this.g,new mh(a))},$r.prototype.sa=function(a){ge(this.g,new _h)},$r.prototype.ra=function(){ge(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,em=function(){return new Ki},Zg=function(){return Ni()},Xg=ur,Qc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,mo=Vi,Nu.COMPLETE="complete",Jg=Nu,Cu.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Bs=Cu,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,Yg=Le}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const Of="@firebase/firestore",Nf="4.7.10";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Ts="11.5.0";/**
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
 */const Pr=new _a("@firebase/firestore");function Kr(){return Pr.logLevel}function ee(t,...e){if(Pr.logLevel<=Ee.DEBUG){const n=e.map(Bl);Pr.debug(`Firestore (${Ts}): ${t}`,...n)}}function bn(t,...e){if(Pr.logLevel<=Ee.ERROR){const n=e.map(Bl);Pr.error(`Firestore (${Ts}): ${t}`,...n)}}function us(t,...e){if(Pr.logLevel<=Ee.WARN){const n=e.map(Bl);Pr.warn(`Firestore (${Ts}): ${t}`,...n)}}function Bl(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function Ce(t,e){t||fe()}function pe(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class JA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XA{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ar,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new tm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new lt(e)}}class ZA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tb{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,$t(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Vf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Vf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function nm(){return new TextEncoder}/**
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
 */class rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Yc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=nm(),o=rb(i.encode(Mf(t,n)),i.encode(Mf(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function Mf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function rb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const xf=-62135596800,Lf=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Lf);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xf)throw new ne(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lf}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-xf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new We(0,0))}static max(){return new de(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ff="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),s=nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(n)):Yc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wn.fromString(e.substring(4,e.length-2))}}class Me extends nn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const sb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends nn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return sb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ff}static keyField(){return new nt([Ff])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Me.fromString(e))}static fromName(e){return new se(Me.fromString(e).popFirst(5))}static empty(){return new se(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Me(e.slice()))}}/**
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
 */const pi=-1;function ib(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Jn(s,se.empty(),e)}function ob(t){return new Jn(t.readTime,t.key,pi)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(de.min(),se.empty(),pi)}static max(){return new Jn(de.max(),se.empty(),pi)}}function ab(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const cb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Es(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==cb)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ub(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Is(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ea{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ea.ae=-1;/**
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
 */const Hl=-1;function Ia(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function hb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const sm="";function fb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Uf(e)),e=db(t.get(n),e);return Uf(e)}function db(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case sm:n+="";break;default:n+=i}}return n}function Uf(t){return t+sm+""}/**
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
 */function $f(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function im(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Ke(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class om extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new om("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=pb.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zn(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */const am="server_timestamp",cm="__type__",lm="__previous_value__",um="__local_write_time__";function ql(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[cm])===null||n===void 0?void 0:n.stringValue)===am}function wa(t){const e=t.mapValue.fields[lm];return ql(e)?wa(e):e}function gi(t){const e=Xn(t.mapValue.fields[um].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class gb{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const qo="(default)";class mi{constructor(e,n){this.projectId=e,this.database=n||qo}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database===qo}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hm="__type__",mb="__max__",no={mapValue:{}},fm="__vector__",Wo="value";function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ql(t)?4:yb(t)?9007199254740991:_b(t)?10:11:fe()}function fn(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),c=Xn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?Ho(o)===Ho(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($f(o)!==$f(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!fn(o[l],c[l])))return!1;return!0}(t,e);default:return fe()}}function _i(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=er(t),r=er(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Bf(t.timestampValue,e.timestampValue);case 4:return Bf(gi(t),gi(e));case 5:return Yc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Zn(i),l=Zn(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ye(c[h],l[h]);if(d!==0)return d}return ye(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ye(Fe(i.latitude),Fe(o.latitude));return c!==0?c:ye(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},v=o.fields||{},b=(c=p[Wo])===null||c===void 0?void 0:c.arrayValue,C=(l=v[Wo])===null||l===void 0?void 0:l.arrayValue,k=ye(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Hf(b,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===no.mapValue&&o===no.mapValue)return 0;if(i===no.mapValue)return 1;if(o===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const v=Yc(l[p],d[p]);if(v!==0)return v;const b=fs(c[l[p]],h[d[p]]);if(b!==0)return b}return ye(l.length,d.length)}(t.mapValue,e.mapValue);default:throw fe()}}function Bf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Xn(t),r=Xn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Hf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fs(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function ds(t){return Jc(t)}function Jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jc(n.fields[o])}`;return s+"}"}(t.mapValue):fe()}function _o(t){switch(er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wa(t);return e?16+_o(e):16;case 5:return 2*t.stringValue.length;case 6:return Zn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_o(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return cr(r.fields,(i,o)=>{s+=i.length+_o(o)}),s}(t.mapValue);default:throw fe()}}function Xc(t){return!!t&&"integerValue"in t}function Wl(t){return!!t&&"arrayValue"in t}function qf(t){return!!t&&"nullValue"in t}function Wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function _b(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[hm])===null||n===void 0?void 0:n.stringValue)===fm}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===mb}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Zs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Zs(this.value))}}function dm(t){const e=[];return cr(t.fields,(n,r)=>{const s=new nt([n]);if(yo(r)){const i=dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
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
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,de.min(),de.min(),de.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,de.min(),de.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,de.min(),de.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function Kf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function vb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pm{}class qe extends pm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Eb(e,n,r):n==="array-contains"?new Ab(e,r):n==="in"?new bb(e,r):n==="not-in"?new Sb(e,r):n==="array-contains-any"?new Rb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ib(e,r):new wb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new dn(e,n)}matches(e){return gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function gm(t){return t.op==="and"}function mm(t){return Tb(t)&&gm(t)}function Tb(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Zc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(mm(t))return t.filters.map(e=>Zc(e)).join(",");{const e=t.filters.map(n=>Zc(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&_m(o,s.filters[c]),!0):!1}(t,e):void fe()}function ym(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class Eb extends qe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ib extends qe{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wb extends qe{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class Ab extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wl(n)&&_i(n.arrayValue,this.value)}}class bb extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class Sb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class Rb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class Cb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function Gf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Cb(t,e,n,r,s,i,o)}function Kl(t){const e=pe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ia(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.le=n}return e.le}function zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zf(t.startAt,e.startAt)&&zf(t.endAt,e.endAt)}function el(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Aa{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Pb(t,e,n,r,s,i,o,c){return new Aa(t,e,n,r,s,i,o,c)}function Gl(t){return new Aa(t)}function Qf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kb(t){return t.collectionGroup!==null}function ei(t){const e=pe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ke(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new zo(i,r))}),n.has(nt.keyField().canonicalString())||e.he.push(new zo(nt.keyField(),r))}return e.he}function cn(t){const e=pe(t);return e.Pe||(e.Pe=Db(e,ei(t))),e.Pe}function Db(t,e){if(t.limitType==="F")return Gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zo(s.field,i)});const n=t.endAt?new Ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ko(t.startAt.position,t.startAt.inclusive):null;return Gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tl(t,e,n){return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ba(t,e){return zl(cn(t),cn(e))&&t.limitType===e.limitType}function Tm(t){return`${Kl(cn(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ym(s)).join(", ")}]`),Ia(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ds(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Kf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ei(r),s)||r.endAt&&!function(o,c,l){const h=Kf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ei(r),s))}(t,e)}function Ob(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Em(t){return(e,n)=>{let r=!1;for(const s of ei(t)){const i=Nb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Nb(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?fs(l,h):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return im(this.inner)}size(){return this.innerSize}}/**
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
 */const Vb=new xe(se.comparator);function Sn(){return Vb}const Im=new xe(se.comparator);function Hs(...t){let e=Im;for(const n of t)e=e.insert(n.key,n);return e}function wm(t){let e=Im;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return ti()}function Am(){return ti()}function ti(){return new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mb=new xe(se.comparator),xb=new Ke(se.comparator);function Ie(...t){let e=xb;for(const n of t)e=e.add(n);return e}const Lb=new Ke(ye);function Fb(){return Lb}/**
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
 */function Ql(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function bm(t){return{integerValue:""+t}}function Ub(t,e){return hb(e)?bm(e):Ql(t,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function $b(t,e,n){return t instanceof Go?function(s,i){const o={fields:{[cm]:{stringValue:am},[um]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ql(i)&&(i=wa(i)),i&&(o.fields[lm]=i),{mapValue:o}}(n,e):t instanceof yi?Rm(t,e):t instanceof vi?Cm(t,e):function(s,i){const o=Sm(s,i),c=Yf(o)+Yf(s.Ie);return Xc(o)&&Xc(s.Ie)?bm(c):Ql(s.serializer,c)}(t,e)}function jb(t,e,n){return t instanceof yi?Rm(t,e):t instanceof vi?Cm(t,e):n}function Sm(t,e){return t instanceof Qo?function(r){return Xc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Go extends Ra{}class yi extends Ra{constructor(e){super(),this.elements=e}}function Rm(t,e){const n=Pm(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends Ra{constructor(e){super(),this.elements=e}}function Cm(t,e){let n=Pm(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class Qo extends Ra{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Yf(t){return Fe(t.integerValue||t.doubleValue)}function Pm(t){return Wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Bb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?hs(r.elements,s.elements,fn):r instanceof Qo&&s instanceof Qo?fn(r.Ie,s.Ie):r instanceof Go&&s instanceof Go}(t.transform,e.transform)}class Hb{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function km(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yl(t.key,Gt.none()):new Ci(t.key,t.data,Gt.none());{const n=t.data,r=wt.empty();let s=new Ke(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new lr(t.key,r,new Ot(s.toArray()),Gt.none())}}function qb(t,e,n){t instanceof Ci?function(s,i,o){const c=s.value.clone(),l=Xf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(s,i,o){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Dm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof Ci?function(i,o,c,l){if(!vo(i.precondition,o))return c;const h=i.value.clone(),d=Zf(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,o,c,l){if(!vo(i.precondition,o))return c;const h=Zf(i.fieldTransforms,l,o),d=o.data;return d.setAll(Dm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Wb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sm(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Jf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hs(r,s,(i,o)=>Bb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ci extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xf(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,jb(o,c,n[s]))}return r}function Zf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$b(i,o,e))}return r}class Yl extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kb extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Am();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=km(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>Jf(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>Jf(n,r))}}class Jl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return Mb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jl(e,n,r,s)}}/**
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
 */class Gb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,Ae;function Yb(t){switch(t){case L.OK:return fe();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return fe()}}function Om(t){if(t===void 0)return bn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Be.OK:return L.OK;case Be.CANCELLED:return L.CANCELLED;case Be.UNKNOWN:return L.UNKNOWN;case Be.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Be.INTERNAL:return L.INTERNAL;case Be.UNAVAILABLE:return L.UNAVAILABLE;case Be.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Be.NOT_FOUND:return L.NOT_FOUND;case Be.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Be.ABORTED:return L.ABORTED;case Be.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Be.DATA_LOSS:return L.DATA_LOSS;default:return fe()}}(Ae=Be||(Be={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Jb=new Wn([4294967295,4294967295],0);function ed(t){const e=nm().encode(t),n=new Qg;return n.update(e),new Uint8Array(n.digest())}function td(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wn([n,r],0),new Wn([s,i],0)]}class Xl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Wn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Wn.fromNumber(r)));return s.compare(Jb)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=ed(e),[r,s]=td(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const n=ed(e),[r,s]=td(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pa(de.min(),s,new xe(ye),Sn(),Ie())}}class Pi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pi(r,n,Ie(),Ie(),Ie())}}/**
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
 */class To{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class Nm{constructor(e,n){this.targetId=e,this.ge=n}}class Vm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class nd{constructor(){this.pe=0,this.ye=rd(),this.we=rt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ie(),n=Ie(),r=Ie();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new Pi(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=rd()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ce(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Xb{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Sn(),this.$e=ro(),this.Ue=ro(),this.Ke=new xe(ye)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(el(i))if(r===0){const o=new se(i.path);this.ze(n,o,ft.newNoDocument(o,de.min()))}else Ce(r===1);else{const o=this.et(n);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Zn(r).toUint8Array()}catch(l){if(l instanceof om)return us("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Xl(o,s,i)}catch(l){return us(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&el(c.target)){const l=new se(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,ft.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Ie();this.Ue.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Pa(e,n,this.Ke,this.Qe,r);return this.Qe=Sn(),this.$e=ro(),this.Ue=ro(),this.Ke=new xe(ye),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new nd,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ke(ye),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ke(ye),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new nd),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function ro(){return new xe(se.comparator)}function rd(){return new xe(se.comparator)}const Zb={asc:"ASCENDING",desc:"DESCENDING"},e0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t0={and:"AND",or:"OR"};class n0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nl(t,e){return t.useProto3Json||Ia(e)?e:{value:e}}function Yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function r0(t,e){return Yo(t,e.toTimestamp())}function ln(t){return Ce(!!t),de.fromTimestamp(function(n){const r=Xn(n);return new We(r.seconds,r.nanos)}(t))}function Zl(t,e){return rl(t,e).canonicalString()}function rl(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xm(t){const e=Me.fromString(t);return Ce(jm(e)),e}function sl(t,e){return Zl(t.databaseId,e.path)}function vc(t,e){const n=xm(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Fm(n))}function Lm(t,e){return Zl(t.databaseId,e)}function s0(t){const e=xm(t);return e.length===4?Me.emptyPath():Fm(e)}function il(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fm(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sd(t,e,n){return{name:sl(t,e),fields:n.value.mapValue.fields}}function i0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ce(d===void 0||typeof d=="string"),rt.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?L.UNKNOWN:Om(h.code);return new ne(d,h.message||"")}(o);n=new Vm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vc(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):de.min(),c=new wt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new To(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vc(t,r.document),i=r.readTime?ln(r.readTime):de.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new To([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vc(t,r.document),i=r.removedTargetIds||[];n=new To([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Qb(s,i),c=r.targetId;n=new Nm(c,o)}}return n}function o0(t,e){let n;if(e instanceof Ci)n={update:sd(t,e.key,e.value)};else if(e instanceof Yl)n={delete:sl(t,e.key)};else if(e instanceof lr)n={update:sd(t,e.key,e.data),updateMask:g0(e.fieldMask)};else{if(!(e instanceof Kb))return fe();n={verify:sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Qo)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:r0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function a0(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(de.min())&&(o=ln(i)),new Hb(o,s.transformResults||[])}(n,e))):[]}function c0(t,e){return{documents:[Lm(t,e.path)]}}function l0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lm(t,s);const i=function(h){if(h.length!==0)return $m(dn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(v){return{field:Gr(v.field),direction:f0(v.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=nl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function u0(t){let e=s0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const v=Um(p);return v instanceof dn&&mm(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(C){return new zo(Qr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(n.orderBy));let c=null;n.limit&&(c=function(p){let v;return v=typeof p=="object"?p.value:p,Ia(v)?null:v}(n.limit));let l=null;n.startAt&&(l=function(p){const v=!!p.before,b=p.values||[];return new Ko(b,v)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const v=!p.before,b=p.values||[];return new Ko(b,v)}(n.endAt)),Pb(e,s,o,i,c,"F",l,h)}function h0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Um(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>Um(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function f0(t){return Zb[t]}function d0(t){return e0[t]}function p0(t){return t0[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return nt.fromServerFormat(t.fieldPath)}function $m(t){return t instanceof qe?function(n){if(n.op==="=="){if(Wf(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(qf(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wf(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(qf(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:d0(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>$m(s));return r.length===1?r[0]:{compositeFilter:{op:p0(n.op),filters:r}}}(t):fe()}function g0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jn{constructor(e,n,r,s,i=de.min(),o=de.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class m0{constructor(e){this.Tt=e}}function _0(t){const e=u0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tl(e,e.limit,"L"):e}/**
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
 */class y0{constructor(){this.Tn=new v0}addToCollectionParentIndex(e,n){return this.Tn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Jn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class v0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Me.comparator)).toArray()}}/**
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
 */const id={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bm=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Bm,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class ps{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ps(0)}static Kn(){return new ps(-1)}}/**
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
 */const od="LruGarbageCollector",T0=1048576;function ad([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class E0{constructor(e){this.Hn=e,this.buffer=new Ke(ad),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ad(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class I0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ee(od,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Is(n)?ee(od,"Ignoring IndexedDB error during garbage collection: ",n):await Es(n)}await this.er(3e5)})}}class w0{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Ea.ae);const r=new E0(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(id)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),id):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Kr()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function A0(t,e){return new w0(t,e)}/**
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
 */class b0{constructor(){this.changes=new xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class S0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class R0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ni(r.mutation,s,Ot.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Sn();const o=ti(),c=function(){return ti()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof lr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ni(d.mutation,h,d.mutation.getFieldMask(),We.now())):o.set(h.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new S0(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new xe((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ot.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Am();d.forEach(v=>{if(!i.has(v)){const b=km(n.get(v),r.get(v));b!==null&&p.set(v,b),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(Tr());let c=pi,l=i;return o.next(h=>N.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(v=>{l=l.insert(d,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ie())).next(d=>({batchId:c,changes:wm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const h=function(p,v){return new Aa(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,ft.newInvalidDocument(d)))});let c=Hs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ni(d.mutation,h,Ot.empty(),We.now()),Sa(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class C0{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return N.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:_0(s.bundledQuery),readTime:ln(s.readTime)}}(n)),N.resolve()}}/**
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
 */class P0{constructor(){this.overlays=new xe(se.comparator),this.Rr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Tr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Tr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return N.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gb(n,r));let i=this.Rr.get(n);i===void 0&&(i=Ie(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class k0{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
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
 */class eu{constructor(){this.Vr=new Ke(Ge.mr),this.gr=new Ke(Ge.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ge(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new se(new Me([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new se(new Me([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=Ie();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return se.comparator(e.key,n.key)||ye(e.Cr,n.Cr)}static pr(e,n){return ye(e.Cr,n.Cr)||se.comparator(e.key,n.key)}}/**
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
 */class D0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ke(Ge.mr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Hl:this.Fr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ye);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),N.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new se(i),0);let c=new Ke(ye);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Cr)),!0)},o),N.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return N.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Mr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class O0{constructor(e){this.kr=e,this.docs=function(){return new xe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ab(ob(d),r)<=0||(s.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}qr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new N0(this)}getSize(e){return N.resolve(this.size)}}class N0 extends b0{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class V0{constructor(e){this.persistence=e,this.Qr=new xr(n=>Kl(n),zl),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.$r=0,this.Ur=new eu,this.targetCount=0,this.Kr=ps.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),N.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.zn(n),N.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Ur.containsKey(n))}}/**
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
 */class Hm{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ea(0),this.zr=!1,this.zr=!0,this.jr=new k0,this.referenceDelegate=e(this),this.Hr=new V0(this),this.indexManager=new y0,this.remoteDocumentCache=function(s){return new O0(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new m0(n),this.Yr=new C0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new P0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new D0(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new M0(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return N.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class M0 extends lb{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.ti=new eu,this.ni=null}static ri(e){return new tu(e)}get ii(){if(this.ni)return this.ni;throw fe()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),N.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ii,r=>{const s=se.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return N.or([()=>N.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Jo{constructor(e,n){this.persistence=e,this.oi=new xr(r=>fb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=A0(this,n)}static ri(e,n){return new Jo(e,n)}Zr(){}Xr(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return N.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?N.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(c=>{c||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),N.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_o(e.data.value)),n}ar(e,n,r){return N.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(e,n.fromCache,r,s)}}/**
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
 */class x0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class L0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pE()?8:ub(gt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new x0;return this._s(e,n,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,o,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Kr()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),N.resolve()):(Kr()<=Ee.DEBUG&&ee("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Kr()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):N.resolve())}rs(e,n){if(Qf(n))return N.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,o,l.readTime)?this.rs(e,tl(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,s){return Qf(n)||s.isEqual(de.min())?N.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?N.resolve(null):(Kr()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zr(n)),this.hs(e,o,n,ib(s,pi)).next(c=>c))})}cs(e,n){let r=new Ke(Em(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Kr()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",zr(n)),this.ns.getDocumentsMatchingQuery(e,n,Jn.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const ru="LocalStore",F0=3e8;class U0{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new xe(ye),this.Is=new xr(i=>Kl(i),zl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new R0(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function $0(t,e,n,r){return new U0(t,e,n,r)}async function qm(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:c}))})})}function j0(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,v=p.keys();let b=N.resolve();return v.forEach(C=>{b=b.next(()=>d.getEntry(l,C)).next(k=>{const D=h.docVersions.get(C);Ce(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ie();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Wm(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function B0(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((d,p)=>{const v=s.get(p);if(!v)return;c.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let b=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(rt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),function(k,D,x){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=F0?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(v,b,d)&&c.push(n.Hr.updateTargetData(i,b))});let l=Sn(),h=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(H0(i,o,e.documentUpdates).next(d=>{l=d.Vs,h=d.fs})),!r.isEqual(de.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return N.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ts=s,i))}function H0(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Sn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(ru,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function q0(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function W0(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function ol(t,e,n){const r=pe(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Is(o))throw o;ee(ru,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function cd(t,e,n){const r=pe(t);let s=de.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=pe(l),v=p.Is.get(d);return v!==void 0?N.resolve(p.Ts.get(v)):p.Hr.getTargetData(h,d)}(r,o,cn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ie())).next(c=>(K0(r,Ob(e),c),{documents:c,gs:i})))}function K0(t,e,n){let r=t.Es.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class ld{constructor(){this.activeTargetIds=Fb()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z0{constructor(){this.ho=new ld,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ld,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class G0{To(e){}shutdown(){}}/**
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
 */const ud="ConnectivityMonitor";class hd{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ee(ud,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ee(ud,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let so=null;function al(){return so===null?so=function(){return 268435456+Math.round(2147483648*Math.random())}():so++,"0x"+so.toString(16)}/**
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
 */const Tc="RestConnection",Q0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Y0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===qo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=al(),c=this.bo(e,n.toUriEncodedString());ee(Tc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(h=>(ee(Tc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw us(Tc,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=Q0[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class J0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const ct="WebChannelConnection";class X0 extends Y0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=al();return new Promise((o,c)=>{const l=new Yg;l.setWithCredentials(!0),l.listenOnce(Jg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mo.NO_ERROR:const d=l.getResponseJson();ee(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case mo.TIMEOUT:ee(ct,`RPC '${e}' ${i} timed out`),c(new ne(L.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const p=l.getStatus();if(ee(ct,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let v=l.getResponseJson();Array.isArray(v)&&(v=v[0]);const b=v==null?void 0:v.error;if(b&&b.status&&b.message){const C=function(D){const x=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN}(b.status);c(new ne(C,b.message))}else c(new ne(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne(L.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ee(ct,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(ct,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=al(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=em(),c=Zg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ee(ct,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let v=!1,b=!1;const C=new J0({Fo:D=>{b?ee(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(v||(ee(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),ee(ct,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Mo:()=>p.close()}),k=(D,x,Z)=>{D.listen(x,Q=>{try{Z(Q)}catch(G){setTimeout(()=>{throw G},0)}})};return k(p,Bs.EventType.OPEN,()=>{b||(ee(ct,`RPC '${e}' stream ${s} transport opened.`),C.Qo())}),k(p,Bs.EventType.CLOSE,()=>{b||(b=!0,ee(ct,`RPC '${e}' stream ${s} transport closed`),C.Uo())}),k(p,Bs.EventType.ERROR,D=>{b||(b=!0,us(ct,`RPC '${e}' stream ${s} transport errored:`,D),C.Uo(new ne(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,Bs.EventType.MESSAGE,D=>{var x;if(!b){const Z=D.data[0];Ce(!!Z);const Q=Z,G=(Q==null?void 0:Q.error)||((x=Q[0])===null||x===void 0?void 0:x.error);if(G){ee(ct,`RPC '${e}' stream ${s} received error:`,G);const ue=G.status;let J=function(_){const T=Be[_];if(T!==void 0)return Om(T)}(ue),I=G.message;J===void 0&&(J=L.INTERNAL,I="Unknown error status: "+ue+" with message "+G.message),b=!0,C.Uo(new ne(J,I)),p.close()}else ee(ct,`RPC '${e}' stream ${s} received:`,Z),C.Ko(Z)}}),k(c,Xg.STAT_EVENT,D=>{D.stat===Qc.PROXY?ee(ct,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Qc.NOPROXY&&ee(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function Ec(){return typeof document<"u"?document:null}/**
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
 */function ka(t){return new n0(t,!0)}/**
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
 */class Km{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const fd="PersistentStream";class zm{constructor(e,n,r,s,i,o,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Km(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ne(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ee(fd,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ee(fd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z0 extends zm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=i0(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?ln(o.readTime):de.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=il(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=el(l)?{documents:c0(i,l)}:{query:l0(i,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Mm(i,o.resumeToken);const h=nl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=Yo(i,o.snapshotVersion.toTimestamp());const h=nl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=h0(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=il(this.serializer),n.removeTarget=e,this.I_(n)}}class eS extends zm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=a0(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=il(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>o0(this.serializer,r))};this.I_(n)}}/**
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
 */class tS{}class nS extends tS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ne(L.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,rl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(L.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,rl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(L.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class rS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(bn(n),this.N_=!1):ee("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const kr="RemoteStore";class sS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(ee(kr,"Restarting streams for network reachability change."),await async function(l){const h=pe(l);h.W_.add(4),await ki(h),h.j_.set("Unknown"),h.W_.delete(4),await Da(h)}(this))})}),this.j_=new rS(r,s)}}async function Da(t){if(Lr(t))for(const e of t.G_)await e(!0)}async function ki(t){for(const e of t.G_)await e(!1)}function Gm(t,e){const n=pe(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),au(n)?ou(n):ws(n).c_()&&iu(n,e))}function su(t,e){const n=pe(t),r=ws(n);n.K_.delete(e),r.c_()&&Qm(n,e),n.K_.size===0&&(r.c_()?r.P_():Lr(n)&&n.j_.set("Unknown"))}function iu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).y_(e)}function Qm(t,e){t.H_.Ne(e),ws(t).w_(e)}function ou(t){t.H_=new Xb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.j_.B_()}function au(t){return Lr(t)&&!ws(t).u_()&&t.K_.size>0}function Lr(t){return pe(t).W_.size===0}function Ym(t){t.H_=void 0}async function iS(t){t.j_.set("Online")}async function oS(t){t.K_.forEach((e,n)=>{iu(t,e)})}async function aS(t,e){Ym(t),au(t)?(t.j_.q_(e),ou(t)):t.j_.set("Unknown")}async function cS(t,e,n){if(t.j_.set("Online"),e instanceof Vm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.K_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){ee(kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xo(t,r)}else if(e instanceof To?t.H_.We(e):e instanceof Nm?t.H_.Ze(e):t.H_.je(e),!n.isEqual(de.min()))try{const r=await Wm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.K_.get(h);d&&i.K_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.K_.get(l);if(!d)return;i.K_.set(l,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),Qm(i,l);const p=new jn(d.target,l,h,d.sequenceNumber);iu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(kr,"Failed to raise snapshot:",r),await Xo(t,r)}}async function Xo(t,e,n){if(!Is(e))throw e;t.W_.add(1),await ki(t),t.j_.set("Offline"),n||(n=()=>Wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(kr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Da(t)})}function Jm(t,e){return e().catch(n=>Xo(t,n,e))}async function Oa(t){const e=pe(t),n=tr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Hl;for(;lS(e);)try{const s=await q0(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,uS(e,s)}catch(s){await Xo(e,s)}Xm(e)&&Zm(e)}function lS(t){return Lr(t)&&t.U_.length<10}function uS(t,e){t.U_.push(e);const n=tr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function Xm(t){return Lr(t)&&!tr(t).u_()&&t.U_.length>0}function Zm(t){tr(t).start()}async function hS(t){tr(t).C_()}async function fS(t){const e=tr(t);for(const n of t.U_)e.b_(n.mutations)}async function dS(t,e,n){const r=t.U_.shift(),s=Jl.from(r,e,n);await Jm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Oa(t)}async function pS(t,e){e&&tr(t).S_&&await async function(r,s){if(function(o){return Yb(o)&&o!==L.ABORTED}(s.code)){const i=r.U_.shift();tr(r).h_(),await Jm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oa(r)}}(t,e),Xm(t)&&Zm(t)}async function dd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee(kr,"RemoteStore received new credentials");const r=Lr(n);n.W_.add(3),await ki(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Da(n)}async function gS(t,e){const n=pe(t);e?(n.W_.delete(2),await Da(n)):e||(n.W_.add(2),await ki(n),n.j_.set("Unknown"))}function ws(t){return t.J_||(t.J_=function(n,r,s){const i=pe(n);return i.M_(),new Z0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:iS.bind(null,t),No:oS.bind(null,t),Lo:aS.bind(null,t),p_:cS.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),au(t)?ou(t):t.j_.set("Unknown")):(await t.J_.stop(),Ym(t))})),t.J_}function tr(t){return t.Y_||(t.Y_=function(n,r,s){const i=pe(n);return i.M_(),new eS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:hS.bind(null,t),Lo:pS.bind(null,t),D_:fS.bind(null,t),v_:dS.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Oa(t)):(await t.Y_.stop(),t.U_.length>0&&(ee(kr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class cu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new cu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Is(t))return new ne(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class pd{constructor(){this.Z_=new xe(se.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):fe():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new gs(e,n,cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mS{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class _S{constructor(){this.queries=gd(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=gd(),i.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new ne(L.ABORTED,"Firestore shutting down"))}}function gd(){return new xr(t=>Tm(t),ba)}async function yS(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new mS,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=lu(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&uu(n)}async function vS(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TS(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&uu(n)}function ES(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function uu(t){t.ia.forEach(e=>{e.next()})}var cl,md;(md=cl||(cl={}))._a="default",md.Cache="cache";class IS{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==cl.Cache}}/**
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
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class wS{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ie(),this.mutatedKeys=Ie(),this.ya=Em(e),this.wa=new cs(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new pd,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const v=s.get(d),b=Sa(this.query,p)?p:null,C=!!v&&this.mutatedKeys.has(v.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;v&&b?v.data.isEqual(b.data)?C!==k&&(r.track({type:3,doc:b}),D=!0):this.va(v,b)||(r.track({type:2,doc:b}),D=!0,(l&&this.ya(b,l)>0||h&&this.ya(b,h)<0)&&(c=!0)):!v&&b?(r.track({type:0,doc:b}),D=!0):v&&!b&&(r.track({type:1,doc:v}),D=!0,(l||h)&&(c=!0)),D&&(b?(o=o.add(b),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(b,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return k(b)-k(C)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,h=l!==this.ga;return this.ga=l,o.length!==0||h?{snapshot:new gs(this.query,e.wa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pd,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ie(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new t_(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new e_(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ie();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return gs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const hu="SyncEngine";class AS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bS{constructor(e){this.key=e,this.Ba=!1}}class SS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new xr(c=>Tm(c),ba),this.qa=new Map,this.Qa=new Set,this.$a=new xe(se.comparator),this.Ua=new Map,this.Ka=new eu,this.Wa={},this.Ga=new Map,this.za=ps.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function RS(t,e,n=!0){const r=a_(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await n_(r,e,n,!0),s}async function CS(t,e){const n=a_(t);await n_(n,e,!0,!1)}async function n_(t,e,n,r){const s=await W0(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await PS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Gm(t.remoteStore,s),c}async function PS(t,e,n,r,s){t.Ha=(p,v,b)=>async function(k,D,x,Z){let Q=D.view.ba(x);Q.ls&&(Q=await cd(k.localStore,D.query,!1).then(({documents:I})=>D.view.ba(I,Q)));const G=Z&&Z.targetChanges.get(D.targetId),ue=Z&&Z.targetMismatches.get(D.targetId)!=null,J=D.view.applyChanges(Q,k.isPrimaryClient,G,ue);return yd(k,D.targetId,J.Ma),J.snapshot}(t,p,v,b);const i=await cd(t.localStore,e,!0),o=new wS(e,i.gs),c=o.ba(i.documents),l=Pi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);yd(t,n,h.Ma);const d=new AS(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function kS(t,e,n){const r=pe(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!ba(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ol(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&su(r.remoteStore,s.targetId),ll(r,s.targetId)}).catch(Es)):(ll(r,s.targetId),await ol(r.localStore,s.targetId,!0))}async function DS(t,e){const n=pe(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),su(n.remoteStore,r.targetId))}async function OS(t,e,n){const r=US(t);try{const s=await function(o,c){const l=pe(o),h=We.now(),d=c.reduce((b,C)=>b.add(C.key),Ie());let p,v;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=Sn(),k=Ie();return l.ds.getEntries(b,d).next(D=>{C=D,C.forEach((x,Z)=>{Z.isValidDocument()||(k=k.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,C)).next(D=>{p=D;const x=[];for(const Z of c){const Q=Wb(Z,p.get(Z.key).overlayedDocument);Q!=null&&x.push(new lr(Z.key,Q,dm(Q.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,x,c)}).next(D=>{v=D;const x=D.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(b,D.batchId,x)})}).then(()=>({batchId:v.batchId,changes:wm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Wa[o.currentUser.toKey()];h||(h=new xe(ye)),h=h.insert(c,l),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Di(r,s.changes),await Oa(r.remoteStore)}catch(s){const i=lu(s,"Failed to persist write");n.reject(i)}}async function r_(t,e){const n=pe(t);try{const r=await B0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ce(o.Ba):s.removedDocuments.size>0&&(Ce(o.Ba),o.Ba=!1))}),await Di(n,r,e)}catch(r){await Es(r)}}function _d(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=pe(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const v of p.ta)v.sa(c)&&(h=!0)}),h&&uu(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NS(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new xe(se.comparator);o=o.insert(i,ft.newNoDocument(i,de.min()));const c=Ie().add(i),l=new Pa(de.min(),new Map,new xe(ye),o,c);await r_(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),fu(r)}else await ol(r.localStore,e,!1).then(()=>ll(r,e,n)).catch(Es)}async function VS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await j0(n.localStore,e);i_(n,r,null),s_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Di(n,s)}catch(s){await Es(s)}}async function MS(t,e,n){const r=pe(t);try{const s=await function(o,c){const l=pe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ce(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);i_(r,e,n),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Di(r,s)}catch(s){await Es(s)}}function s_(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function i_(t,e,n){const r=pe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||o_(t,r)})}function o_(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(su(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),fu(t))}function yd(t,e,n){for(const r of n)r instanceof e_?(t.Ka.addReference(r.key,e),xS(t,r)):r instanceof t_?(ee(hu,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||o_(t,r.key)):fe()}function xS(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(ee(hu,"New document in limbo: "+n),t.Qa.add(r),fu(t))}function fu(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new se(Me.fromString(e)),r=t.za.next();t.Ua.set(r,new bS(n)),t.$a=t.$a.insert(n,r),Gm(t.remoteStore,new jn(cn(Gl(n.path)),r,"TargetPurposeLimboResolution",Ea.ae))}}async function Di(t,e,n){const r=pe(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=nu.Yi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,h){const d=pe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,v=>N.forEach(v.Hi,b=>d.persistence.referenceDelegate.addReference(p,v.targetId,b)).next(()=>N.forEach(v.Ji,b=>d.persistence.referenceDelegate.removeReference(p,v.targetId,b)))))}catch(p){if(!Is(p))throw p;ee(ru,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const b=d.Ts.get(v),C=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(C);d.Ts=d.Ts.insert(v,k)}}}(r.localStore,i))}async function LS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee(hu,"User change. New user:",e.toKey());const r=await qm(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new ne(L.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Di(n,r.Rs)}}function FS(t,e){const n=pe(t),r=n.Ua.get(e);if(r&&r.Ba)return Ie().add(r.key);{let s=Ie();const i=n.qa.get(e);if(!i)return s;for(const o of i){const c=n.ka.get(o);s=s.unionWith(c.view.Sa)}return s}}function a_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=r_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NS.bind(null,e),e.La.p_=TS.bind(null,e.eventManager),e.La.Ja=ES.bind(null,e.eventManager),e}function US(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MS.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ka(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return $0(this.persistence,new L0,e.initialUser,this.serializer)}Xa(e){return new Hm(tu.ri,this.serializer)}Za(e){return new z0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class $S extends Zo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ce(this.persistence.referenceDelegate instanceof Jo);const r=this.persistence.referenceDelegate.garbageCollector;return new I0(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Hm(r=>Jo.ri(r,n),this.serializer)}}class ul{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LS.bind(null,this.syncEngine),await gS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _S}()}createDatastore(e){const n=ka(e.databaseInfo.databaseId),r=function(i){return new X0(i)}(e.databaseInfo);return function(i,o,c,l){return new nS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new sS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>_d(this.syncEngine,n,0),function(){return hd.D()?new hd:new G0}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new SS(s,i,o,c,l,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);ee(kr,"RemoteStore shutting down."),i.W_.add(5),await ki(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ul.provider={build:()=>new ul};/**
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
 */class jS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const nr="FirestoreClient";class BS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ic(t,e){t.asyncQueue.verifyOperationInProgress(),ee(nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HS(t);ee(nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>dd(e.remoteStore,s)),t._onlineComponents=e}async function HS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(nr,"Using user provided OfflineComponentProvider");try{await Ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;us("Error using user provided cache. Falling back to memory cache: "+n),await Ic(t,new Zo)}}else ee(nr,"Using default OfflineComponentProvider"),await Ic(t,new $S(void 0));return t._offlineComponents}async function c_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(nr,"Using user provided OnlineComponentProvider"),await vd(t,t._uninitializedComponentsProvider._online)):(ee(nr,"Using default OnlineComponentProvider"),await vd(t,new ul))),t._onlineComponents}function qS(t){return c_(t).then(e=>e.syncEngine)}async function Td(t){const e=await c_(t),n=e.eventManager;return n.onListen=RS.bind(null,e.syncEngine),n.onUnlisten=kS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DS.bind(null,e.syncEngine),n}/**
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
 */function l_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ed=new Map;/**
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
 */function u_(t,e,n){if(!n)throw new ne(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WS(t,e,n,r){if(e===!0&&r===!0)throw new ne(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Id(t){if(!se.isDocumentKey(t))throw new ne(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wd(t){if(se.isDocumentKey(t))throw new ne(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=du(t);throw new ne(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const h_="firestore.googleapis.com",Ad=!0;class bd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h_,this.ssl=Ad}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ad;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T0)throw new ne(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Na{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YA;switch(r.type){case"firstParty":return new eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ed.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Ed.delete(n),r.terminate())}(this),Promise.resolve()}}function KS(t,e,n,r={}){var s;const i=(t=Kn(t,Na))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==h_&&i.host!==c&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Yn(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=lt.MOCK_USER;else{h=cE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new lt(p)}t._authCredentials=new JA(new tm(h,d))}}/**
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
 */class Va{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Va(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class zn extends Va{constructor(e,n,r){super(e,n,Gl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new se(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function Sd(t,e,...n){if(t=ze(t),u_("collection","path",e),t instanceof Na){const r=Me.fromString(e,...n);return wd(r),new zn(t,null,r)}{if(!(t instanceof Vt||t instanceof zn))throw new ne(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return wd(r),new zn(t.firestore,null,r)}}function hl(t,e,...n){if(t=ze(t),arguments.length===1&&(e=rm.newId()),u_("doc","path",e),t instanceof Na){const r=Me.fromString(e,...n);return Id(r),new Vt(t,null,new se(r))}{if(!(t instanceof Vt||t instanceof zn))throw new ne(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Id(r),new Vt(t.firestore,t instanceof zn?t.converter:null,new se(r))}}/**
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
 */const Rd="AsyncQueue";class Cd{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Km(this,"async_queue_retry"),this.Su=()=>{const r=Ec();r&&ee(Rd,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Ar;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Is(e))throw e;ee(Rd,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=cu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&fe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function Pd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ms extends Na{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Cd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cd(e),this._firestoreClient=void 0,await e}}}function zS(t,e){const n=typeof t=="object"?t:Ol(),r=typeof t=="string"?t:qo,s=Vr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oE("firestore");i&&KS(s,...i)}return s}function f_(t){if(t._terminated)throw new ne(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GS(t),t._firestoreClient}function GS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new gb(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,l_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(rt.fromBase64String(e))}catch(n){throw new ne(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pu{constructor(e){this._methodName=e}}/**
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
 */class gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class mu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const QS=/^__.*__$/;class YS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ci(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function p_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class _u{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new _u(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ea(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(p_(this.Lu)&&QS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class JS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ka(e)}ju(e,n,r,s=!1){return new _u({Lu:e,methodName:n,zu:r,path:nt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function g_(t){const e=t._freezeSettings(),n=ka(t._databaseId);return new JS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XS(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);yu("Data must be an object, but it was:",o,r);const c=m_(r,o);let l,h;if(i.merge)l=new Ot(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const v=fl(e,p,n);if(!o.contains(v))throw new ne(L.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);y_(d,v)||d.push(v)}l=new Ot(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new YS(new wt(c),l,h)}class xa extends pu{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xa}}function ZS(t,e,n,r){const s=t.ju(1,e,n);yu("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();cr(r,(l,h)=>{const d=vu(e,l,n);h=ze(h);const p=s.Uu(d);if(h instanceof xa)i.push(d);else{const v=La(h,p);v!=null&&(i.push(d),o.set(d,v))}});const c=new Ot(i);return new d_(o,c,s.fieldTransforms)}function eR(t,e,n,r,s,i){const o=t.ju(1,e,n),c=[fl(e,r,n)],l=[s];if(i.length%2!=0)throw new ne(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(fl(e,i[v])),l.push(i[v+1]);const h=[],d=wt.empty();for(let v=c.length-1;v>=0;--v)if(!y_(h,c[v])){const b=c[v];let C=l[v];C=ze(C);const k=o.Uu(b);if(C instanceof xa)h.push(b);else{const D=La(C,k);D!=null&&(h.push(b),d.set(b,D))}}const p=new Ot(h);return new d_(d,p,o.fieldTransforms)}function La(t,e){if(__(t=ze(t)))return yu("Unsupported field value:",e,t),m_(t,e);if(t instanceof pu)return function(r,s){if(!p_(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=La(c,s.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ub(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Yo(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yo(s.serializer,i)}}if(r instanceof gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _s)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof Vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mu)return function(o,c){return{mapValue:{fields:{[hm]:{stringValue:fm},[Wo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return Ql(c.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${du(r)}`)}(t,e)}function m_(t,e){const n={};return im(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cr(t,(r,s)=>{const i=La(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function __(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof gu||t instanceof _s||t instanceof Vt||t instanceof pu||t instanceof mu)}function yu(t,e,n){if(!__(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=du(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function fl(t,e,n){if((e=ze(e))instanceof Ma)return e._internalPath;if(typeof e=="string")return vu(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const tR=new RegExp("[~\\*/\\[\\]]");function vu(t,e,n){if(e.search(tR)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ma(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne(L.INVALID_ARGUMENT,c+t+l)}function y_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class v_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(T_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nR extends v_{data(){return super.data()}}function T_(t,e){return typeof e=="string"?vu(t,e):e instanceof Ma?e._internalPath:e._delegate._internalPath}/**
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
 */function rR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sR{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Wo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new mu(i)}convertGeoPoint(e){return new gu(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Ce(jm(r));const s=new mi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function iR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class E_ extends v_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(T_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends E_{data(e={}){return super.data(e)}}class oR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:aR(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class I_ extends sR{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function cR(t,e,n,...r){t=Kn(t,Vt);const s=Kn(t.firestore,ms),i=g_(s);let o;return o=typeof(e=ze(e))=="string"||e instanceof Ma?eR(i,"updateDoc",t._key,e,n,r):ZS(i,"updateDoc",t._key,e),Tu(s,[o.toMutation(t._key,Gt.exists(!0))])}function lR(t){return Tu(Kn(t.firestore,ms),[new Yl(t._key,Gt.none())])}function uR(t,e){const n=Kn(t.firestore,ms),r=hl(t),s=iR(t.converter,e);return Tu(n,[XS(g_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function hR(t,...e){var n,r,s;t=ze(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Pd(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Pd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof Vt)h=Kn(t.firestore,ms),d=Gl(t._key.path),l={next:p=>{e[o]&&e[o](fR(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Kn(t,Va);h=Kn(p.firestore,ms),d=p._query;const v=new I_(h);l={next:b=>{e[o]&&e[o](new oR(h,v,p,b))},error:e[o+1],complete:e[o+2]},rR(t._query)}return function(v,b,C,k){const D=new jS(k),x=new IS(b,D,C);return v.asyncQueue.enqueueAndForget(async()=>yS(await Td(v),x)),()=>{D.su(),v.asyncQueue.enqueueAndForget(async()=>vS(await Td(v),x))}}(f_(h),d,c,l)}function Tu(t,e){return function(r,s){const i=new Ar;return r.asyncQueue.enqueueAndForget(async()=>OS(await qS(r),s,i)),i.promise}(f_(t),e)}function fR(t,e,n){const r=n.docs.get(e._key),s=new I_(t);return new E_(t,s,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ts=s})(ys),hn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ms(new XA(r.getProvider("auth-internal")),new tb(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Bt(Of,Nf,e),Bt(Of,Nf,"esm2017")})();const w_="@firebase/installations",Eu="0.6.13";/**
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
 */const A_=1e4,b_=`w:${Eu}`,S_="FIS_v2",dR="https://firebaseinstallations.googleapis.com/v1",pR=60*60*1e3,gR="installations",mR="Installations";/**
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
 */const _R={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dr=new Nr(gR,mR,_R);function R_(t){return t instanceof Xt&&t.code.includes("request-failed")}/**
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
 */function C_({projectId:t}){return`${dR}/projects/${t}/installations`}function P_(t){return{token:t.token,requestStatus:2,expiresIn:vR(t.expiresIn),creationTime:Date.now()}}async function k_(t,e){const r=(await e.json()).error;return Dr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function D_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function yR(t,{refreshToken:e}){const n=D_(t);return n.append("Authorization",TR(e)),n}async function O_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vR(t){return Number(t.replace("s","000"))}function TR(t){return`${S_} ${t}`}/**
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
 */async function ER({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=C_(t),s=D_(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:S_,appId:t.appId,sdkVersion:b_},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await O_(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:P_(h.authToken)}}else throw await k_("Create Installation",l)}/**
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
 */function N_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function IR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wR=/^[cdef][\w-]{21}$/,dl="";function AR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=bR(t);return wR.test(n)?n:dl}catch{return dl}}function bR(t){return IR(t).substr(0,22)}/**
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
 */function Fa(t){return`${t.appName}!${t.appId}`}/**
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
 */const V_=new Map;function M_(t,e){const n=Fa(t);x_(n,e),SR(n,e)}function x_(t,e){const n=V_.get(t);if(n)for(const r of n)r(e)}function SR(t,e){const n=RR();n&&n.postMessage({key:t,fid:e}),CR()}let Er=null;function RR(){return!Er&&"BroadcastChannel"in self&&(Er=new BroadcastChannel("[Firebase] FID Change"),Er.onmessage=t=>{x_(t.data.key,t.data.fid)}),Er}function CR(){V_.size===0&&Er&&(Er.close(),Er=null)}/**
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
 */const PR="firebase-installations-database",kR=1,Or="firebase-installations-store";let wc=null;function Iu(){return wc||(wc=hg(PR,kR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}})),wc}async function ta(t,e){const n=Fa(t),s=(await Iu()).transaction(Or,"readwrite"),i=s.objectStore(Or),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&M_(t,e.fid),e}async function L_(t){const e=Fa(t),r=(await Iu()).transaction(Or,"readwrite");await r.objectStore(Or).delete(e),await r.done}async function Ua(t,e){const n=Fa(t),s=(await Iu()).transaction(Or,"readwrite"),i=s.objectStore(Or),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&M_(t,c.fid),c}/**
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
 */async function wu(t){let e;const n=await Ua(t.appConfig,r=>{const s=DR(r),i=OR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===dl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DR(t){const e=t||{fid:AR(),registrationStatus:0};return F_(e)}function OR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Dr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VR(t)}:{installationEntry:e}}async function NR(t,e){try{const n=await ER(t,e);return ta(t.appConfig,n)}catch(n){throw R_(n)&&n.customData.serverCode===409?await L_(t.appConfig):await ta(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function VR(t){let e=await kd(t.appConfig);for(;e.registrationStatus===1;)await N_(100),e=await kd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await wu(t);return r||n}return e}function kd(t){return Ua(t,e=>{if(!e)throw Dr.create("installation-not-found");return F_(e)})}function F_(t){return MR(t)?{fid:t.fid,registrationStatus:0}:t}function MR(t){return t.registrationStatus===1&&t.registrationTime+A_<Date.now()}/**
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
 */async function xR({appConfig:t,heartbeatServiceProvider:e},n){const r=LR(t,n),s=yR(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:b_,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await O_(()=>fetch(r,c));if(l.ok){const h=await l.json();return P_(h)}else throw await k_("Generate Auth Token",l)}function LR(t,{fid:e}){return`${C_(t)}/${e}/authTokens:generate`}/**
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
 */async function Au(t,e=!1){let n;const r=await Ua(t.appConfig,i=>{if(!U_(i))throw Dr.create("not-registered");const o=i.authToken;if(!e&&$R(o))return i;if(o.requestStatus===1)return n=FR(t,e),i;{if(!navigator.onLine)throw Dr.create("app-offline");const c=BR(i);return n=UR(t,c),c}});return n?await n:r.authToken}async function FR(t,e){let n=await Dd(t.appConfig);for(;n.authToken.requestStatus===1;)await N_(100),n=await Dd(t.appConfig);const r=n.authToken;return r.requestStatus===0?Au(t,e):r}function Dd(t){return Ua(t,e=>{if(!U_(e))throw Dr.create("not-registered");const n=e.authToken;return HR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function UR(t,e){try{const n=await xR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ta(t.appConfig,r),n}catch(n){if(R_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await L_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ta(t.appConfig,r)}throw n}}function U_(t){return t!==void 0&&t.registrationStatus===2}function $R(t){return t.requestStatus===2&&!jR(t)}function jR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pR}function BR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function HR(t){return t.requestStatus===1&&t.requestTime+A_<Date.now()}/**
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
 */async function qR(t){const e=t,{installationEntry:n,registrationPromise:r}=await wu(e);return r?r.catch(console.error):Au(e).catch(console.error),n.fid}/**
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
 */async function WR(t,e=!1){const n=t;return await KR(n),(await Au(n,e)).token}async function KR(t){const{registrationPromise:e}=await wu(t);e&&await e}/**
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
 */function zR(t){if(!t||!t.options)throw Ac("App Configuration");if(!t.name)throw Ac("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ac(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ac(t){return Dr.create("missing-app-config-values",{valueName:t})}/**
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
 */const $_="installations",GR="installations-internal",QR=t=>{const e=t.getProvider("app").getImmediate(),n=zR(e),r=Vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YR=t=>{const e=t.getProvider("app").getImmediate(),n=Vr(e,$_).getImmediate();return{getId:()=>qR(n),getToken:s=>WR(n,s)}};function JR(){hn(new Yt($_,QR,"PUBLIC")),hn(new Yt(GR,YR,"PRIVATE"))}JR();Bt(w_,Eu);Bt(w_,Eu,"esm2017");/**
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
 */const na="analytics",XR="firebase_id",ZR="origin",eC=60*1e3,tC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bu="https://www.googletagmanager.com/gtag/js";/**
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
 */const bt=new _a("@firebase/analytics");/**
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
 */const nC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new Nr("analytics","Analytics",nC);/**
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
 */function rC(t){if(!t.startsWith(bu)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return bt.warn(e.message),""}return t}function j_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function iC(t,e){const n=sC("firebase-js-sdk-policy",{createScriptURL:rC}),r=document.createElement("script"),s=`${bu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function oC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aC(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await j_(n)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){bt.error(c)}t("config",s,i)}async function cC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await j_(n);for(const l of o){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){bt.error(i)}}function lC(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await cC(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await aC(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,h]=o;t("get",c,l,h)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){bt.error(c)}}return s}function uC(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=lC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function hC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bu)&&n.src.includes(t))return n;return null}/**
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
 */const fC=30,dC=1e3;class pC{constructor(e={},n=dC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B_=new pC;function gC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function mC(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:gC(r)},i=tC.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function _C(t,e=B_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Mt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new TC;return setTimeout(async()=>{c.abort()},eC),H_({appId:r,apiKey:s,measurementId:i},o,c,e)}async function H_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=B_){var i;const{appId:o,measurementId:c}=t;try{await yC(r,e)}catch(l){if(c)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await mC(t);return s.deleteThrottleMetadata(o),l}catch(l){const h=l;if(!vC(h)){if(s.deleteThrottleMetadata(o),c)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?nf(n,s.intervalMillis,fC):nf(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),bt.debug(`Calling attemptFetch again in ${d} millis`),H_(t,p,r,s)}}function yC(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vC(t){if(!(t instanceof Xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class TC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function EC(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function IC(){if(ag())try{await cg()}catch(t){return bt.warn(Mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return bt.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wC(t,e,n,r,s,i,o){var c;const l=_C(t);l.then(b=>{n[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>bt.error(b)),e.push(l);const h=IC().then(b=>{if(b)return r.getId()}),[d,p]=await Promise.all([l,h]);hC(i)||iC(i,d.measurementId),s("js",new Date);const v=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return v[ZR]="firebase",v.update=!0,p!=null&&(v[XR]=p),s("config",d.measurementId,v),d.measurementId}/**
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
 */class AC{constructor(e){this.app=e}_delete(){return delete ri[this.app.options.appId],Promise.resolve()}}let ri={},Od=[];const Nd={};let bc="dataLayer",bC="gtag",Vd,q_,Md=!1;function SC(){const t=[];if(og()&&t.push("This is a browser extension environment."),gE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});bt.warn(n.message)}}function RC(t,e,n){SC();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if(ri[r]!=null)throw Mt.create("already-exists",{id:r});if(!Md){oC(bc);const{wrappedGtag:i,gtagCore:o}=uC(ri,Od,Nd,bc,bC);q_=i,Vd=o,Md=!0}return ri[r]=wC(t,Od,Nd,e,Vd,bc,n),new AC(t)}function CC(t=Ol()){t=ze(t);const e=Vr(t,na);return e.isInitialized()?e.getImmediate():PC(t)}function PC(t,e={}){const n=Vr(t,na);if(n.isInitialized()){const s=n.getImmediate();if(Yn(e,n.getOptions()))return s;throw Mt.create("already-initialized")}return n.initialize({options:e})}function kC(t,e,n,r){t=ze(t),EC(q_,ri[t.app.options.appId],e,n,r).catch(s=>bt.error(s))}const xd="@firebase/analytics",Ld="0.10.12";function DC(){hn(new Yt(na,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return RC(r,s,n)},"PUBLIC")),hn(new Yt("analytics-internal",t,"PRIVATE")),Bt(xd,Ld),Bt(xd,Ld,"esm2017");function t(e){try{const n=e.getProvider(na).getImmediate();return{logEvent:(r,s,i)=>kC(n,r,s,i)}}catch(n){throw Mt.create("interop-component-reg-failed",{reason:n})}}}DC();const OC={apiKey:"AIzaSyBpVkxMb7lpgl_9pw9QOTJkcCtCyPVM2sY",authDomain:"task-timer-app-fb8bd.firebaseapp.com",projectId:"task-timer-app-fb8bd",storageBucket:"task-timer-app-fb8bd.firebasestorage.app",messagingSenderId:"372540581603",appId:"1:372540581603:web:e6bad23cee7858969b87d6",measurementId:"G-YMBYWHPWQ4"},Su=fg(OC);CC(Su);const si=GA(Su),io=zS(Su);function W_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Io={exports:{}},NC=Io.exports,Fd;function VC(){return Fd||(Fd=1,function(t,e){(function(n,r){t.exports=r()})(NC,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",o="second",c="minute",l="hour",h="day",d="week",p="month",v="quarter",b="year",C="date",k="Invalid Date",D=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var H=["th","st","nd","rd"],j=W%100;return"["+W+(H[(j-20)%10]||H[j]||H[0])+"]"}},Q=function(W,H,j){var B=String(W);return!B||B.length>=H?W:""+Array(H+1-B.length).join(j)+W},G={s:Q,z:function(W){var H=-W.utcOffset(),j=Math.abs(H),B=Math.floor(j/60),V=j%60;return(H<=0?"+":"-")+Q(B,2,"0")+":"+Q(V,2,"0")},m:function W(H,j){if(H.date()<j.date())return-W(j,H);var B=12*(j.year()-H.year())+(j.month()-H.month()),V=H.clone().add(B,p),re=j-V<0,ce=H.clone().add(B+(re?-1:1),p);return+(-(B+(j-V)/(re?V-ce:ce-V))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:p,y:b,w:d,d:h,D:C,h:l,m:c,s:o,ms:i,Q:v}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},ue="en",J={};J[ue]=Z;var I="$isDayjsObject",m=function(W){return W instanceof w||!(!W||!W[I])},_=function W(H,j,B){var V;if(!H)return ue;if(typeof H=="string"){var re=H.toLowerCase();J[re]&&(V=re),j&&(J[re]=j,V=re);var ce=H.split("-");if(!V&&ce.length>1)return W(ce[0])}else{var Te=H.name;J[Te]=H,V=Te}return!B&&V&&(ue=V),V||!B&&ue},T=function(W,H){if(m(W))return W.clone();var j=typeof H=="object"?H:{};return j.date=W,j.args=arguments,new w(j)},E=G;E.l=_,E.i=m,E.w=function(W,H){return T(W,{locale:H.$L,utc:H.$u,x:H.$x,$offset:H.$offset})};var w=function(){function W(j){this.$L=_(j.locale,null,!0),this.parse(j),this.$x=this.$x||j.x||{},this[I]=!0}var H=W.prototype;return H.parse=function(j){this.$d=function(B){var V=B.date,re=B.utc;if(V===null)return new Date(NaN);if(E.u(V))return new Date;if(V instanceof Date)return new Date(V);if(typeof V=="string"&&!/Z$/i.test(V)){var ce=V.match(D);if(ce){var Te=ce[2]-1||0,me=(ce[7]||"0").substring(0,3);return re?new Date(Date.UTC(ce[1],Te,ce[3]||1,ce[4]||0,ce[5]||0,ce[6]||0,me)):new Date(ce[1],Te,ce[3]||1,ce[4]||0,ce[5]||0,ce[6]||0,me)}}return new Date(V)}(j),this.init()},H.init=function(){var j=this.$d;this.$y=j.getFullYear(),this.$M=j.getMonth(),this.$D=j.getDate(),this.$W=j.getDay(),this.$H=j.getHours(),this.$m=j.getMinutes(),this.$s=j.getSeconds(),this.$ms=j.getMilliseconds()},H.$utils=function(){return E},H.isValid=function(){return this.$d.toString()!==k},H.isSame=function(j,B){var V=T(j);return this.startOf(B)<=V&&V<=this.endOf(B)},H.isAfter=function(j,B){return T(j)<this.startOf(B)},H.isBefore=function(j,B){return this.endOf(B)<T(j)},H.$g=function(j,B,V){return E.u(j)?this[B]:this.set(V,j)},H.unix=function(){return Math.floor(this.valueOf()/1e3)},H.valueOf=function(){return this.$d.getTime()},H.startOf=function(j,B){var V=this,re=!!E.u(B)||B,ce=E.p(j),Te=function(xt,Ne){var Tt=E.w(V.$u?Date.UTC(V.$y,Ne,xt):new Date(V.$y,Ne,xt),V);return re?Tt:Tt.endOf(h)},me=function(xt,Ne){return E.w(V.toDate()[xt].apply(V.toDate("s"),(re?[0,0,0,0]:[23,59,59,999]).slice(Ne)),V)},ve=this.$W,$e=this.$M,je=this.$D,vt="set"+(this.$u?"UTC":"");switch(ce){case b:return re?Te(1,0):Te(31,11);case p:return re?Te(1,$e):Te(0,$e+1);case d:var Ye=this.$locale().weekStart||0,Ht=(ve<Ye?ve+7:ve)-Ye;return Te(re?je-Ht:je+(6-Ht),$e);case h:case C:return me(vt+"Hours",0);case l:return me(vt+"Minutes",1);case c:return me(vt+"Seconds",2);case o:return me(vt+"Milliseconds",3);default:return this.clone()}},H.endOf=function(j){return this.startOf(j,!1)},H.$set=function(j,B){var V,re=E.p(j),ce="set"+(this.$u?"UTC":""),Te=(V={},V[h]=ce+"Date",V[C]=ce+"Date",V[p]=ce+"Month",V[b]=ce+"FullYear",V[l]=ce+"Hours",V[c]=ce+"Minutes",V[o]=ce+"Seconds",V[i]=ce+"Milliseconds",V)[re],me=re===h?this.$D+(B-this.$W):B;if(re===p||re===b){var ve=this.clone().set(C,1);ve.$d[Te](me),ve.init(),this.$d=ve.set(C,Math.min(this.$D,ve.daysInMonth())).$d}else Te&&this.$d[Te](me);return this.init(),this},H.set=function(j,B){return this.clone().$set(j,B)},H.get=function(j){return this[E.p(j)]()},H.add=function(j,B){var V,re=this;j=Number(j);var ce=E.p(B),Te=function($e){var je=T(re);return E.w(je.date(je.date()+Math.round($e*j)),re)};if(ce===p)return this.set(p,this.$M+j);if(ce===b)return this.set(b,this.$y+j);if(ce===h)return Te(1);if(ce===d)return Te(7);var me=(V={},V[c]=r,V[l]=s,V[o]=n,V)[ce]||1,ve=this.$d.getTime()+j*me;return E.w(ve,this)},H.subtract=function(j,B){return this.add(-1*j,B)},H.format=function(j){var B=this,V=this.$locale();if(!this.isValid())return V.invalidDate||k;var re=j||"YYYY-MM-DDTHH:mm:ssZ",ce=E.z(this),Te=this.$H,me=this.$m,ve=this.$M,$e=V.weekdays,je=V.months,vt=V.meridiem,Ye=function(Ne,Tt,A,S){return Ne&&(Ne[Tt]||Ne(B,re))||A[Tt].slice(0,S)},Ht=function(Ne){return E.s(Te%12||12,Ne,"0")},xt=vt||function(Ne,Tt,A){var S=Ne<12?"AM":"PM";return A?S.toLowerCase():S};return re.replace(x,function(Ne,Tt){return Tt||function(A){switch(A){case"YY":return String(B.$y).slice(-2);case"YYYY":return E.s(B.$y,4,"0");case"M":return ve+1;case"MM":return E.s(ve+1,2,"0");case"MMM":return Ye(V.monthsShort,ve,je,3);case"MMMM":return Ye(je,ve);case"D":return B.$D;case"DD":return E.s(B.$D,2,"0");case"d":return String(B.$W);case"dd":return Ye(V.weekdaysMin,B.$W,$e,2);case"ddd":return Ye(V.weekdaysShort,B.$W,$e,3);case"dddd":return $e[B.$W];case"H":return String(Te);case"HH":return E.s(Te,2,"0");case"h":return Ht(1);case"hh":return Ht(2);case"a":return xt(Te,me,!0);case"A":return xt(Te,me,!1);case"m":return String(me);case"mm":return E.s(me,2,"0");case"s":return String(B.$s);case"ss":return E.s(B.$s,2,"0");case"SSS":return E.s(B.$ms,3,"0");case"Z":return ce}return null}(Ne)||ce.replace(":","")})},H.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},H.diff=function(j,B,V){var re,ce=this,Te=E.p(B),me=T(j),ve=(me.utcOffset()-this.utcOffset())*r,$e=this-me,je=function(){return E.m(ce,me)};switch(Te){case b:re=je()/12;break;case p:re=je();break;case v:re=je()/3;break;case d:re=($e-ve)/6048e5;break;case h:re=($e-ve)/864e5;break;case l:re=$e/s;break;case c:re=$e/r;break;case o:re=$e/n;break;default:re=$e}return V?re:E.a(re)},H.daysInMonth=function(){return this.endOf(p).$D},H.$locale=function(){return J[this.$L]},H.locale=function(j,B){if(!j)return this.$L;var V=this.clone(),re=_(j,B,!0);return re&&(V.$L=re),V},H.clone=function(){return E.w(this.$d,this)},H.toDate=function(){return new Date(this.valueOf())},H.toJSON=function(){return this.isValid()?this.toISOString():null},H.toISOString=function(){return this.$d.toISOString()},H.toString=function(){return this.$d.toUTCString()},W}(),y=w.prototype;return T.prototype=y,[["$ms",i],["$s",o],["$m",c],["$H",l],["$W",h],["$M",p],["$y",b],["$D",C]].forEach(function(W){y[W[1]]=function(H){return this.$g(H,W[0],W[1])}}),T.extend=function(W,H){return W.$i||(W(H,w,T),W.$i=!0),T},T.locale=_,T.isDayjs=m,T.unix=function(W){return T(1e3*W)},T.en=J[ue],T.Ls=J,T.p={},T})}(Io)),Io.exports}var MC=VC();const Wt=W_(MC),xC={__name:"TaskForm",emits:["add-task"],setup(t,{emit:e}){const n=e,r=At(""),s=At(""),i=At("");function o(){r.value&&s.value&&(n("add-task",{name:r.value,dueDate:s.value,subject:i.value}),r.value="",s.value="",i.value="")}return(c,l)=>(tt(),It("form",{onSubmit:qT(o,["prevent"])},[wr(He("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>r.value=h),placeholder:"Enter a task",required:""},null,512),[[ss,r.value]]),wr(He("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>s.value=h),type:"datetime-local",required:""},null,512),[[ss,s.value]]),wr(He("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=h=>i.value=h),placeholder:"Subject (e.g. Work)"},null,512),[[ss,i.value]]),l[3]||(l[3]=He("button",{type:"submit"},"Add Task",-1))],32))}};var wo={exports:{}},LC=wo.exports,Ud;function FC(){return Ud||(Ud=1,function(t,e){(function(n,r){t.exports=r()})(LC,function(){var n,r,s=1e3,i=6e4,o=36e5,c=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=31536e6,d=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:h,months:d,days:c,hours:o,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},b=function(J){return J instanceof G},C=function(J,I,m){return new G(J,m,I.$l)},k=function(J){return r.p(J)+"s"},D=function(J){return J<0},x=function(J){return D(J)?Math.ceil(J):Math.floor(J)},Z=function(J){return Math.abs(J)},Q=function(J,I){return J?D(J)?{negative:!0,format:""+Z(J)+I}:{negative:!1,format:""+J+I}:{negative:!1,format:""}},G=function(){function J(m,_,T){var E=this;if(this.$d={},this.$l=T,m===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return C(m*v[k(_)],this);if(typeof m=="number")return this.$ms=m,this.parseFromMilliseconds(),this;if(typeof m=="object")return Object.keys(m).forEach(function(W){E.$d[k(W)]=m[W]}),this.calMilliseconds(),this;if(typeof m=="string"){var w=m.match(p);if(w){var y=w.slice(2).map(function(W){return W!=null?Number(W):0});return this.$d.years=y[0],this.$d.months=y[1],this.$d.weeks=y[2],this.$d.days=y[3],this.$d.hours=y[4],this.$d.minutes=y[5],this.$d.seconds=y[6],this.calMilliseconds(),this}}return this}var I=J.prototype;return I.calMilliseconds=function(){var m=this;this.$ms=Object.keys(this.$d).reduce(function(_,T){return _+(m.$d[T]||0)*v[T]},0)},I.parseFromMilliseconds=function(){var m=this.$ms;this.$d.years=x(m/h),m%=h,this.$d.months=x(m/d),m%=d,this.$d.days=x(m/c),m%=c,this.$d.hours=x(m/o),m%=o,this.$d.minutes=x(m/i),m%=i,this.$d.seconds=x(m/s),m%=s,this.$d.milliseconds=m},I.toISOString=function(){var m=Q(this.$d.years,"Y"),_=Q(this.$d.months,"M"),T=+this.$d.days||0;this.$d.weeks&&(T+=7*this.$d.weeks);var E=Q(T,"D"),w=Q(this.$d.hours,"H"),y=Q(this.$d.minutes,"M"),W=this.$d.seconds||0;this.$d.milliseconds&&(W+=this.$d.milliseconds/1e3,W=Math.round(1e3*W)/1e3);var H=Q(W,"S"),j=m.negative||_.negative||E.negative||w.negative||y.negative||H.negative,B=w.format||y.format||H.format?"T":"",V=(j?"-":"")+"P"+m.format+_.format+E.format+B+w.format+y.format+H.format;return V==="P"||V==="-P"?"P0D":V},I.toJSON=function(){return this.toISOString()},I.format=function(m){var _=m||"YYYY-MM-DDTHH:mm:ss",T={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return _.replace(l,function(E,w){return w||String(T[E])})},I.as=function(m){return this.$ms/v[k(m)]},I.get=function(m){var _=this.$ms,T=k(m);return T==="milliseconds"?_%=1e3:_=T==="weeks"?x(_/v[T]):this.$d[T],_||0},I.add=function(m,_,T){var E;return E=_?m*v[k(_)]:b(m)?m.$ms:C(m,this).$ms,C(this.$ms+E*(T?-1:1),this)},I.subtract=function(m,_){return this.add(m,_,!0)},I.locale=function(m){var _=this.clone();return _.$l=m,_},I.clone=function(){return C(this.$ms,this)},I.humanize=function(m){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!m)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},J}(),ue=function(J,I,m){return J.add(I.years()*m,"y").add(I.months()*m,"M").add(I.days()*m,"d").add(I.hours()*m,"h").add(I.minutes()*m,"m").add(I.seconds()*m,"s").add(I.milliseconds()*m,"ms")};return function(J,I,m){n=m,r=m().$utils(),m.duration=function(E,w){var y=m.locale();return C(E,{$l:y},w)},m.isDuration=b;var _=I.prototype.add,T=I.prototype.subtract;I.prototype.add=function(E,w){return b(E)?ue(this,E,1):_.bind(this)(E,w)},I.prototype.subtract=function(E,w){return b(E)?ue(this,E,-1):T.bind(this)(E,w)}}})}(wo)),wo.exports}var UC=FC();const $C=W_(UC),jC=["id"],BC={__name:"TaskItem",props:["task","useFlip"],emits:["edit","remove"],setup(t,{emit:e}){Wt.extend($C);const n=t,r=e,s=At(!1),i=At(n.task.name),o=At("");let c;const l=Do(()=>{const v=Wt(),C=Wt(n.task.dueDate).diff(v,"hour");return C<0?"overdue":C<=24?"soon":"safe"}),h=()=>{const v=Wt(),C=Wt(n.task.dueDate).diff(v);if(C<=0)o.value="⏰ Time's up!";else{const k=Wt.duration(C),D=Math.floor(k.asDays()),x=k.hours(),Z=k.minutes(),Q=k.seconds();D==0?x==0?o.value=`${Z}m ${Q}s`:o.value=`${x}h ${Z}m ${Q}s`:x==0?o.value=`${D}d ${Z}m ${Q}s`:o.value=`${D}d ${x}h ${Z}m ${Q}s`}};fa(()=>{if(h(),c=setInterval(h,1e3),n.useFlip){const v=Wt(),b=Wt(n.task.dueDate),C=Math.max(0,b.diff(v,"second"));new FlipClock(document.getElementById("flip-"+n.task.id),C,{countdown:!0,autoStart:!0})}}),Cl(()=>clearInterval(c));const d=Wt(n.task.dueDate).format("MMMM D, YYYY h:mm A"),p=()=>{s.value=!1,i.value!==n.task.name&&r("edit",i.value)};return co(()=>n.task.name,v=>i.value=v),(v,b)=>(tt(),It("li",null,[s.value?Xi("",!0):(tt(),It("span",{key:0,onClick:b[0]||(b[0]=C=>s.value=!0)},Zr(t.task.name),1)),s.value?wr((tt(),It("input",{key:1,"onUpdate:modelValue":b[1]||(b[1]=C=>i.value=C),onBlur:p,onKeyup:KT(p,["enter"])},null,544)),[[ss,i.value]]):Xi("",!0),t.useFlip?Xi("",!0):(tt(),It("div",{key:2,class:aa(["countdown-box",l.value])},[Kp(" Due: "+Zr(lp(d)),1),b[3]||(b[3]=He("br",null,null,-1)),He("strong",null,Zr(o.value),1)],2)),t.useFlip?(tt(),It("div",{key:3,id:"flip-"+t.task.id},null,8,jC)):Xi("",!0),He("button",{onClick:b[2]||(b[2]=C=>v.$emit("remove"))},"❌")]))}},HC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qC={__name:"TaskList",props:["tasks","useFlip"],emits:["remove-task","edit-task"],setup(t){return(e,n)=>(tt(),xc(MT,{name:"fade-slide",tag:"ul"},{default:_p(()=>[(tt(!0),It(Pt,null,Ap(t.tasks,r=>(tt(),xc(BC,{key:r.id,task:r,useFlip:t.useFlip,onRemove:()=>e.$emit("remove-task",r.id),onEdit:s=>e.$emit("edit-task",r.id,s)},null,8,["task","useFlip","onRemove","onEdit"]))),128))]),_:1}))}},WC=HC(qC,[["__scopeId","data-v-4775b212"]]),KC={key:0},zC={key:1},GC={key:0},QC={key:1},YC={__name:"login",setup(t){const e=At(""),n=At(""),r=At(null),s=At(!1),i=async()=>{await Vw(si,e.value,n.value)},o=async()=>{await Nw(si,e.value,n.value)},c=()=>{Lw(si)};return(l,h)=>s.value?(tt(),It("div",zC,[r.value?(tt(),It("div",QC,[He("p",null,"Logged in as "+Zr(r.value.email),1),He("button",{onClick:c},"Logout")])):(tt(),It("div",GC,[wr(He("input",{"onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),placeholder:"Email"},null,512),[[ss,e.value]]),wr(He("input",{"onUpdate:modelValue":h[1]||(h[1]=d=>n.value=d),type:"password",placeholder:"Password"},null,512),[[ss,n.value]]),He("button",{onClick:i},"Login"),He("button",{onClick:o},"Sign Up")]))])):(tt(),It("div",KC,h[2]||(h[2]=[He("p",null,"Loading...",-1)])))}},JC=["value"],XC={__name:"App",setup(t){const e=At([]),n=At(si.currentUser),r=At(!1);fa(()=>{onAuthStateChanged(si,k=>{n.value=k,r.value=!0,k&&s()}),v(),b()});function s(){if(!n.value)return;const k=Sd(io,"users",n.value.uid,"tasks");hR(k,D=>{console.log("Loaded tasks for:",n.value.email),console.log("Snapshot size:",D.size),e.value=D.docs.map(x=>({id:x.id,...x.data()}))})}async function i(k){var x;if(!r.value||!n.value)return;console.log("Adding task for user:",(x=n.value)==null?void 0:x.email,k);const D=Sd(io,"users",n.value.uid,"tasks");await uR(D,k)}async function o(k){if(!r.value||!n.value)return;const D=hl(io,"users",n.value.uid,"tasks",k);await lR(D)}async function c(k,D){if(!r.value||!n.value)return;const x=hl(io,"users",n.value.uid,"tasks",k);await cR(x,D)}const l=At(""),h=Do(()=>{const k=e.value.map(D=>D.subject||"General");return[...new Set(k)]}),d=Do(()=>l.value?e.value.filter(k=>k.subject===l.value):e.value),p=new Set,v=()=>{"Notification"in window&&Notification.requestPermission()},b=()=>{setInterval(()=>{const k=Wt();e.value.forEach(D=>{const x=Wt(D.dueDate),Z=x.diff(k,"minute");Z<=10&&Z>=0&&!p.has(D.id)&&(p.add(D.id),C(D.name,x))})},1e3)},C=(k,D)=>{Notification.permission==="granted"&&new Notification("⏰ Task Due Soon",{body:`${k} is due at ${D.format("h:mm A")}`})};return(k,D)=>(tt(),It("main",null,[D[2]||(D[2]=He("h1",null,"📝 My Tasks",-1)),Nt(xC,{onAddTask:i}),Nt(YC),wr(He("select",{"onUpdate:modelValue":D[0]||(D[0]=x=>l.value=x)},[D[1]||(D[1]=He("option",{value:""},"All Subjects",-1)),(tt(!0),It(Pt,null,Ap(h.value,x=>(tt(),It("option",{key:x,value:x},Zr(x),9,JC))),128))],512),[[jT,l.value]]),Nt(WC,{tasks:d.value,useFlip:k.useFlip,onRemoveTask:o,onEditTask:c},null,8,["tasks","useFlip"])]))}},ZC=QT(XC);ZC.mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});
