(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function il(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Pt={},br=[],Qe=()=>{},Ym=()=>!1,ro=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ol=e=>e.startsWith("onUpdate:"),Kt=Object.assign,al=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xm=Object.prototype.hasOwnProperty,St=(e,t)=>Xm.call(e,t),at=Array.isArray,Sr=e=>Ls(e)==="[object Map]",so=e=>Ls(e)==="[object Set]",ec=e=>Ls(e)==="[object Date]",gt=e=>typeof e=="function",Ft=e=>typeof e=="string",Ze=e=>typeof e=="symbol",Dt=e=>e!==null&&typeof e=="object",sf=e=>(Dt(e)||gt(e))&&gt(e.then)&&gt(e.catch),of=Object.prototype.toString,Ls=e=>of.call(e),Jm=e=>Ls(e).slice(8,-1),af=e=>Ls(e)==="[object Object]",ll=e=>Ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cs=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zm=/-(\w)/g,Pn=io(e=>e.replace(Zm,(t,n)=>n?n.toUpperCase():"")),tg=/\B([A-Z])/g,Fn=io(e=>e.replace(tg,"-$1").toLowerCase()),lf=io(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jo=io(e=>e?`on${lf(e)}`:""),An=(e,t)=>!Object.is(e,t),_i=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},uf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Di=e=>{const t=parseFloat(e);return isNaN(t)?e:t},eg=e=>{const t=Ft(e)?Number(e):NaN;return isNaN(t)?e:t};let nc;const oo=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ul(e){if(at(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ft(r)?ig(r):ul(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ft(e)||Dt(e))return e}const ng=/;(?![^(]*\))/g,rg=/:([^]+)/,sg=/\/\*[^]*?\*\//g;function ig(e){const t={};return e.replace(sg,"").split(ng).forEach(n=>{if(n){const r=n.split(rg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ao(e){let t="";if(Ft(e))t=e;else if(at(e))for(let n=0;n<e.length;n++){const r=ao(e[n]);r&&(t+=r+" ")}else if(Dt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ag=il(og);function cf(e){return!!e||e===""}function lg(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=lo(e[r],t[r]);return n}function lo(e,t){if(e===t)return!0;let n=ec(e),r=ec(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ze(e),r=Ze(t),n||r)return e===t;if(n=at(e),r=at(t),n||r)return n&&r?lg(e,t):!1;if(n=Dt(e),r=Dt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!lo(e[a],t[a]))return!1}}return String(e)===String(t)}function ug(e,t){return e.findIndex(n=>lo(n,t))}const hf=e=>!!(e&&e.__v_isRef===!0),hs=e=>Ft(e)?e:e==null?"":at(e)||Dt(e)&&(e.toString===of||!gt(e.toString))?hf(e)?hs(e.value):JSON.stringify(e,ff,2):String(e),ff=(e,t)=>hf(t)?ff(e,t.value):Sr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Zo(r,i)+" =>"]=s,n),{})}:so(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zo(n))}:Ze(t)?Zo(t):Dt(t)&&!at(t)&&!af(t)?String(t):t,Zo=(e,t="")=>{var n;return Ze(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class cg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hg(){return Ee}let Vt;const ta=new WeakSet;class df{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ta.has(this)&&(ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rc(this),gf(this);const t=Vt,n=$e;Vt=this,$e=!0;try{return this.fn()}finally{_f(this),Vt=t,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)fl(t);this.deps=this.depsTail=void 0,rc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ta(this)&&this.run()}get dirty(){return Ta(this)}}let pf=0,fs,ds;function mf(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function cl(){pf++}function hl(){if(--pf>0)return;if(ds){let t=ds;for(ds=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function gf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _f(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fl(r),fg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ta(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(yf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function yf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Is))return;e.globalVersion=Is;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ta(e)){e.flags&=-3;return}const n=Vt,r=$e;Vt=e,$e=!0;try{gf(e);const s=e.fn(e._value);(t.version===0||An(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Vt=n,$e=r,_f(e),e.flags&=-3}}function fl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function fg(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $e=!0;const vf=[];function $n(){vf.push($e),$e=!1}function Un(){const e=vf.pop();$e=e===void 0?!0:e}function rc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Vt;Vt=void 0;try{t()}finally{Vt=n}}}let Is=0;class dg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Vt||!$e||Vt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Vt)n=this.activeLink=new dg(Vt,this),Vt.deps?(n.prevDep=Vt.depsTail,Vt.depsTail.nextDep=n,Vt.depsTail=n):Vt.deps=Vt.depsTail=n,Tf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Vt.depsTail,n.nextDep=void 0,Vt.depsTail.nextDep=n,Vt.depsTail=n,Vt.deps===n&&(Vt.deps=r)}return n}trigger(t){this.version++,Is++,this.notify(t)}notify(t){cl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hl()}}}function Tf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Tf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ea=new WeakMap,nr=Symbol(""),wa=Symbol(""),As=Symbol("");function ie(e,t,n){if($e&&Vt){let r=Ea.get(e);r||Ea.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new dl),s.map=r,s.key=n),s.track()}}function an(e,t,n,r,s,i){const a=Ea.get(e);if(!a){Is++;return}const l=u=>{u&&u.trigger()};if(cl(),t==="clear")a.forEach(l);else{const u=at(e),h=u&&ll(n);if(u&&n==="length"){const d=Number(r);a.forEach((g,w)=>{(w==="length"||w===As||!Ze(w)&&w>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(As)),t){case"add":u?h&&l(a.get("length")):(l(a.get(nr)),Sr(e)&&l(a.get(wa)));break;case"delete":u||(l(a.get(nr)),Sr(e)&&l(a.get(wa)));break;case"set":Sr(e)&&l(a.get(nr));break}}hl()}function _r(e){const t=bt(e);return t===e?t:(ie(t,"iterate",As),ke(e)?t:t.map(oe))}function uo(e){return ie(e=bt(e),"iterate",As),e}const pg={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,oe)},concat(...e){return _r(this).concat(...e.map(t=>at(t)?_r(t):t))},entries(){return ea(this,"entries",e=>(e[1]=oe(e[1]),e))},every(e,t){return sn(this,"every",e,t,void 0,arguments)},filter(e,t){return sn(this,"filter",e,t,n=>n.map(oe),arguments)},find(e,t){return sn(this,"find",e,t,oe,arguments)},findIndex(e,t){return sn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return sn(this,"findLast",e,t,oe,arguments)},findLastIndex(e,t){return sn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return sn(this,"forEach",e,t,void 0,arguments)},includes(...e){return na(this,"includes",e)},indexOf(...e){return na(this,"indexOf",e)},join(e){return _r(this).join(e)},lastIndexOf(...e){return na(this,"lastIndexOf",e)},map(e,t){return sn(this,"map",e,t,void 0,arguments)},pop(){return rs(this,"pop")},push(...e){return rs(this,"push",e)},reduce(e,...t){return sc(this,"reduce",e,t)},reduceRight(e,...t){return sc(this,"reduceRight",e,t)},shift(){return rs(this,"shift")},some(e,t){return sn(this,"some",e,t,void 0,arguments)},splice(...e){return rs(this,"splice",e)},toReversed(){return _r(this).toReversed()},toSorted(e){return _r(this).toSorted(e)},toSpliced(...e){return _r(this).toSpliced(...e)},unshift(...e){return rs(this,"unshift",e)},values(){return ea(this,"values",oe)}};function ea(e,t,n){const r=uo(e),s=r[t]();return r!==e&&!ke(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const mg=Array.prototype;function sn(e,t,n,r,s,i){const a=uo(e),l=a!==e&&!ke(e),u=a[t];if(u!==mg[t]){const g=u.apply(e,i);return l?oe(g):g}let h=n;a!==e&&(l?h=function(g,w){return n.call(this,oe(g),w,e)}:n.length>2&&(h=function(g,w){return n.call(this,g,w,e)}));const d=u.call(a,h,r);return l&&s?s(d):d}function sc(e,t,n,r){const s=uo(e);let i=n;return s!==e&&(ke(e)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,e)}):i=function(a,l,u){return n.call(this,a,oe(l),u,e)}),s[t](i,...r)}function na(e,t,n){const r=bt(e);ie(r,"iterate",As);const s=r[t](...n);return(s===-1||s===!1)&&_l(n[0])?(n[0]=bt(n[0]),r[t](...n)):s}function rs(e,t,n=[]){$n(),cl();const r=bt(e)[t].apply(e,n);return hl(),Un(),r}const gg=il("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ze));function _g(e){Ze(e)||(e=String(e));const t=bt(this);return ie(t,"has",e),t.hasOwnProperty(e)}class wf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Rg:Sf:i?bf:Af).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=at(t);if(!s){let u;if(a&&(u=pg[n]))return u;if(n==="hasOwnProperty")return _g}const l=Reflect.get(t,n,ue(t)?t:r);return(Ze(n)?Ef.has(n):gg(n))||(s||ie(t,"get",n),i)?l:ue(l)?a&&ll(n)?l:l.value:Dt(l)?s?Rf(l):ml(l):l}}class If extends wf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=ir(i);if(!ke(r)&&!ir(r)&&(i=bt(i),r=bt(r)),!at(t)&&ue(i)&&!ue(r))return u?!1:(i.value=r,!0)}const a=at(t)&&ll(n)?Number(n)<t.length:St(t,n),l=Reflect.set(t,n,r,ue(t)?t:s);return t===bt(s)&&(a?An(r,i)&&an(t,"set",n,r):an(t,"add",n,r)),l}deleteProperty(t,n){const r=St(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&an(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ze(n)||!Ef.has(n))&&ie(t,"has",n),r}ownKeys(t){return ie(t,"iterate",at(t)?"length":nr),Reflect.ownKeys(t)}}class yg extends wf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const vg=new If,Tg=new yg,Eg=new If(!0);const Ia=e=>e,oi=e=>Reflect.getPrototypeOf(e);function wg(e,t,n){return function(...r){const s=this.__v_raw,i=bt(s),a=Sr(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,h=s[e](...r),d=n?Ia:t?Aa:oe;return!t&&ie(i,"iterate",u?wa:nr),{next(){const{value:g,done:w}=h.next();return w?{value:g,done:w}:{value:l?[d(g[0]),d(g[1])]:d(g),done:w}},[Symbol.iterator](){return this}}}}function ai(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ig(e,t){const n={get(s){const i=this.__v_raw,a=bt(i),l=bt(s);e||(An(s,l)&&ie(a,"get",s),ie(a,"get",l));const{has:u}=oi(a),h=t?Ia:e?Aa:oe;if(u.call(a,s))return h(i.get(s));if(u.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ie(bt(s),"iterate",nr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=bt(i),l=bt(s);return e||(An(s,l)&&ie(a,"has",s),ie(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=bt(l),h=t?Ia:e?Aa:oe;return!e&&ie(u,"iterate",nr),l.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return Kt(n,e?{add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear")}:{add(s){!t&&!ke(s)&&!ir(s)&&(s=bt(s));const i=bt(this);return oi(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!t&&!ke(i)&&!ir(i)&&(i=bt(i));const a=bt(this),{has:l,get:u}=oi(a);let h=l.call(a,s);h||(s=bt(s),h=l.call(a,s));const d=u.call(a,s);return a.set(s,i),h?An(i,d)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=bt(this),{has:a,get:l}=oi(i);let u=a.call(i,s);u||(s=bt(s),u=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return u&&an(i,"delete",s,void 0),h},clear(){const s=bt(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wg(s,e,t)}),n}function pl(e,t){const n=Ig(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(St(n,s)&&s in r?n:r,s,i)}const Ag={get:pl(!1,!1)},bg={get:pl(!1,!0)},Sg={get:pl(!0,!1)};const Af=new WeakMap,bf=new WeakMap,Sf=new WeakMap,Rg=new WeakMap;function Cg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pg(e){return e.__v_skip||!Object.isExtensible(e)?0:Cg(Jm(e))}function ml(e){return ir(e)?e:gl(e,!1,vg,Ag,Af)}function Vg(e){return gl(e,!1,Eg,bg,bf)}function Rf(e){return gl(e,!0,Tg,Sg,Sf)}function gl(e,t,n,r,s){if(!Dt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Pg(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function Rr(e){return ir(e)?Rr(e.__v_raw):!!(e&&e.__v_isReactive)}function ir(e){return!!(e&&e.__v_isReadonly)}function ke(e){return!!(e&&e.__v_isShallow)}function _l(e){return e?!!e.__v_raw:!1}function bt(e){const t=e&&e.__v_raw;return t?bt(t):e}function Dg(e){return!St(e,"__v_skip")&&Object.isExtensible(e)&&uf(e,"__v_skip",!0),e}const oe=e=>Dt(e)?ml(e):e,Aa=e=>Dt(e)?Rf(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function un(e){return xg(e,!1)}function xg(e,t){return ue(e)?e:new Mg(e,t)}class Mg{constructor(t,n){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:bt(t),this._value=n?t:oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ke(t)||ir(t);t=r?t:bt(t),An(t,n)&&(this._rawValue=t,this._value=r?t:oe(t),this.dep.trigger())}}function Cf(e){return ue(e)?e.value:e}const kg={get:(e,t,n)=>t==="__v_raw"?e:Cf(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Pf(e){return Rr(e)?e:new Proxy(e,kg)}class Ng{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Vt!==this)return mf(this,!0),!0}get value(){const t=this.dep.track();return yf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Og(e,t,n=!1){let r,s;return gt(e)?r=e:(r=e.get,s=e.set),new Ng(r,s,n)}const li={},xi=new WeakMap;let Xn;function Lg(e,t=!1,n=Xn){if(n){let r=xi.get(n);r||xi.set(n,r=[]),r.push(e)}}function Fg(e,t,n=Pt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,h=Q=>s?Q:ke(Q)||s===!1||s===0?ln(Q,1):ln(Q);let d,g,w,b,C=!1,V=!1;if(ue(e)?(g=()=>e.value,C=ke(e)):Rr(e)?(g=()=>h(e),C=!0):at(e)?(V=!0,C=e.some(Q=>Rr(Q)||ke(Q)),g=()=>e.map(Q=>{if(ue(Q))return Q.value;if(Rr(Q))return h(Q);if(gt(Q))return u?u(Q,2):Q()})):gt(e)?t?g=u?()=>u(e,2):e:g=()=>{if(w){$n();try{w()}finally{Un()}}const Q=Xn;Xn=d;try{return u?u(e,3,[b]):e(b)}finally{Xn=Q}}:g=Qe,t&&s){const Q=g,ht=s===!0?1/0:s;g=()=>ln(Q(),ht)}const x=hg(),B=()=>{d.stop(),x&&x.active&&al(x.effects,d)};if(i&&t){const Q=t;t=(...ht)=>{Q(...ht),B()}}let J=V?new Array(e.length).fill(li):li;const X=Q=>{if(!(!(d.flags&1)||!d.dirty&&!Q))if(t){const ht=d.run();if(s||C||(V?ht.some((Z,E)=>An(Z,J[E])):An(ht,J))){w&&w();const Z=Xn;Xn=d;try{const E=[ht,J===li?void 0:V&&J[0]===li?[]:J,b];u?u(t,3,E):t(...E),J=ht}finally{Xn=Z}}}else d.run()};return l&&l(X),d=new df(g),d.scheduler=a?()=>a(X,!1):X,b=Q=>Lg(Q,!1,d),w=d.onStop=()=>{const Q=xi.get(d);if(Q){if(u)u(Q,4);else for(const ht of Q)ht();xi.delete(d)}},t?r?X(!0):J=d.run():a?a(X.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function ln(e,t=1/0,n){if(t<=0||!Dt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ue(e))ln(e.value,t,n);else if(at(e))for(let r=0;r<e.length;r++)ln(e[r],t,n);else if(so(e)||Sr(e))e.forEach(r=>{ln(r,t,n)});else if(af(e)){for(const r in e)ln(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ln(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(e,t,n,r){try{return r?e(...r):e()}catch(s){co(s,t,n)}}function Be(e,t,n,r){if(gt(e)){const s=Fs(e,t,n,r);return s&&sf(s)&&s.catch(i=>{co(i,t,n)}),s}if(at(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Be(e[i],t,n,r));return s}}function co(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Pt;if(t){let l=t.parent;const u=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,u,h)===!1)return}l=l.parent}if(i){$n(),Fs(i,null,10,[e,u,h]),Un();return}}$g(e,n,s,r,a)}function $g(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const fe=[];let ze=-1;const Cr=[];let En=null,vr=0;const Vf=Promise.resolve();let Mi=null;function Df(e){const t=Mi||Vf;return e?t.then(this?e.bind(this):e):t}function Ug(e){let t=ze+1,n=fe.length;for(;t<n;){const r=t+n>>>1,s=fe[r],i=bs(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function yl(e){if(!(e.flags&1)){const t=bs(e),n=fe[fe.length-1];!n||!(e.flags&2)&&t>=bs(n)?fe.push(e):fe.splice(Ug(t),0,e),e.flags|=1,xf()}}function xf(){Mi||(Mi=Vf.then(kf))}function Bg(e){at(e)?Cr.push(...e):En&&e.id===-1?En.splice(vr+1,0,e):e.flags&1||(Cr.push(e),e.flags|=1),xf()}function ic(e,t,n=ze+1){for(;n<fe.length;n++){const r=fe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;fe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mf(e){if(Cr.length){const t=[...new Set(Cr)].sort((n,r)=>bs(n)-bs(r));if(Cr.length=0,En){En.push(...t);return}for(En=t,vr=0;vr<En.length;vr++){const n=En[vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}En=null,vr=0}}const bs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kf(e){try{for(ze=0;ze<fe.length;ze++){const t=fe[ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ze<fe.length;ze++){const t=fe[ze];t&&(t.flags&=-2)}ze=-1,fe.length=0,Mf(),Mi=null,(fe.length||Cr.length)&&kf()}}let Ae=null,Nf=null;function ki(e){const t=Ae;return Ae=e,Nf=e&&e.type.__scopeId||null,t}function Of(e,t=Ae,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&pc(-1);const i=ki(t);let a;try{a=e(...s)}finally{ki(i),r._d&&pc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ps(e,t){if(Ae===null)return e;const n=go(Ae),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=Pt]=t[s];i&&(gt(i)&&(i={mounted:i,updated:i}),i.deep&&ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function Gn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&($n(),Be(u,n,8,[e.el,l,e,t]),Un())}}const jg=Symbol("_vte"),qg=e=>e.__isTeleport,yr=Symbol("_leaveCb"),ui=Symbol("_enterCb");function Hg(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{e.isMounted=!0}),jf(()=>{e.isUnmounting=!0}),e}const xe=[Function,Array],zg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xe,onEnter:xe,onAfterEnter:xe,onEnterCancelled:xe,onBeforeLeave:xe,onLeave:xe,onAfterLeave:xe,onLeaveCancelled:xe,onBeforeAppear:xe,onAppear:xe,onAfterAppear:xe,onAppearCancelled:xe};function Kg(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ba(e,t,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:w,onLeave:b,onAfterLeave:C,onLeaveCancelled:V,onBeforeAppear:x,onAppear:B,onAfterAppear:J,onAppearCancelled:X}=t,Q=String(e.key),ht=Kg(n,e),Z=(_,v)=>{_&&Be(_,r,9,v)},E=(_,v)=>{const T=v[1];Z(_,v),at(_)?_.every(I=>I.length<=1)&&T():_.length<=1&&T()},m={mode:a,persisted:l,beforeEnter(_){let v=u;if(!n.isMounted)if(i)v=x||u;else return;_[yr]&&_[yr](!0);const T=ht[Q];T&&Tr(e,T)&&T.el[yr]&&T.el[yr](),Z(v,[_])},enter(_){let v=h,T=d,I=g;if(!n.isMounted)if(i)v=B||h,T=J||d,I=X||g;else return;let y=!1;const z=_[ui]=q=>{y||(y=!0,q?Z(I,[_]):Z(T,[_]),m.delayedLeave&&m.delayedLeave(),_[ui]=void 0)};v?E(v,[_,z]):z()},leave(_,v){const T=String(e.key);if(_[ui]&&_[ui](!0),n.isUnmounting)return v();Z(w,[_]);let I=!1;const y=_[yr]=z=>{I||(I=!0,v(),z?Z(V,[_]):Z(C,[_]),_[yr]=void 0,ht[T]===e&&delete ht[T])};ht[T]=e,b?E(b,[_,y]):y()},clone(_){return ba(_,t,n,r)}};return m}function Ss(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ss(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Lf(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===we?(a.patchFlag&128&&s++,r=r.concat(Lf(a.children,t,l))):(t||a.type!==Vn)&&r.push(l!=null?or(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ff(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ni(e,t,n,r,s=!1){if(at(e)){e.forEach((C,V)=>Ni(C,t&&(at(t)?t[V]:t),n,r,s));return}if(ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ni(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?go(r.component):r.el,a=s?null:i,{i:l,r:u}=e,h=t&&t.r,d=l.refs===Pt?l.refs={}:l.refs,g=l.setupState,w=bt(g),b=g===Pt?()=>!1:C=>St(w,C);if(h!=null&&h!==u&&(Ft(h)?(d[h]=null,b(h)&&(g[h]=null)):ue(h)&&(h.value=null)),gt(u))Fs(u,l,12,[a,d]);else{const C=Ft(u),V=ue(u);if(C||V){const x=()=>{if(e.f){const B=C?b(u)?g[u]:d[u]:u.value;s?at(B)&&al(B,i):at(B)?B.includes(i)||B.push(i):C?(d[u]=[i],b(u)&&(g[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else C?(d[u]=a,b(u)&&(g[u]=a)):V&&(u.value=a,e.k&&(d[e.k]=a))};a?(x.id=-1,Te(x,n)):x()}}}oo().requestIdleCallback;oo().cancelIdleCallback;const ms=e=>!!e.type.__asyncLoader,$f=e=>e.type.__isKeepAlive;function Wg(e,t){Uf(e,"a",t)}function Gg(e,t){Uf(e,"da",t)}function Uf(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ho(t,r,n),n){let s=n.parent;for(;s&&s.parent;)$f(s.parent.vnode)&&Qg(r,t,n,s),s=s.parent}}function Qg(e,t,n,r){const s=ho(t,e,r,!0);vl(()=>{al(r[t],s)},n)}function ho(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{$n();const l=$s(n),u=Be(t,n,e,a);return l(),Un(),u});return r?s.unshift(i):s.push(i),i}}const pn=e=>(t,n=le)=>{(!Cs||e==="sp")&&ho(e,(...r)=>t(...r),n)},Yg=pn("bm"),fo=pn("m"),Xg=pn("bu"),Bf=pn("u"),jf=pn("bum"),vl=pn("um"),Jg=pn("sp"),Zg=pn("rtg"),t_=pn("rtc");function e_(e,t=le){ho("ec",e,t)}const n_=Symbol.for("v-ndc");function qf(e,t,n,r){let s;const i=n,a=at(e);if(a||Ft(e)){const l=a&&Rr(e);let u=!1;l&&(u=!ke(e),e=uo(e)),s=new Array(e.length);for(let h=0,d=e.length;h<d;h++)s[h]=t(u?oe(e[h]):e[h],h,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Dt(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,h=l.length;u<h;u++){const d=l[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}const Sa=e=>e?fd(e)?go(e):Sa(e.parent):null,gs=Kt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sa(e.parent),$root:e=>Sa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zf(e),$forceUpdate:e=>e.f||(e.f=()=>{yl(e.update)}),$nextTick:e=>e.n||(e.n=Df.bind(e.proxy)),$watch:e=>A_.bind(e)}),ra=(e,t)=>e!==Pt&&!e.__isScriptSetup&&St(e,t),r_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let h;if(t[0]!=="$"){const b=a[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ra(r,t))return a[t]=1,r[t];if(s!==Pt&&St(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&St(h,t))return a[t]=3,i[t];if(n!==Pt&&St(n,t))return a[t]=4,n[t];Ra&&(a[t]=0)}}const d=gs[t];let g,w;if(d)return t==="$attrs"&&ie(e.attrs,"get",""),d(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(n!==Pt&&St(n,t))return a[t]=4,n[t];if(w=u.config.globalProperties,St(w,t))return w[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ra(s,t)?(s[t]=n,!0):r!==Pt&&St(r,t)?(r[t]=n,!0):St(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==Pt&&St(e,a)||ra(t,a)||(l=i[0])&&St(l,a)||St(r,a)||St(gs,a)||St(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:St(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function oc(e){return at(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ra=!0;function s_(e){const t=zf(e),n=e.proxy,r=e.ctx;Ra=!1,t.beforeCreate&&ac(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:h,created:d,beforeMount:g,mounted:w,beforeUpdate:b,updated:C,activated:V,deactivated:x,beforeDestroy:B,beforeUnmount:J,destroyed:X,unmounted:Q,render:ht,renderTracked:Z,renderTriggered:E,errorCaptured:m,serverPrefetch:_,expose:v,inheritAttrs:T,components:I,directives:y,filters:z}=t;if(h&&i_(h,r,null),a)for(const j in a){const k=a[j];gt(k)&&(r[j]=k.bind(n))}if(s){const j=s.call(n,n);Dt(j)&&(e.data=ml(j))}if(Ra=!0,i)for(const j in i){const k=i[j],nt=gt(k)?k.bind(n,n):gt(k.get)?k.get.bind(n,n):Qe,lt=!gt(k)&&gt(k.set)?k.set.bind(n):Qe,vt=Fi({get:nt,set:lt});Object.defineProperty(r,j,{enumerable:!0,configurable:!0,get:()=>vt.value,set:mt=>vt.value=mt})}if(l)for(const j in l)Hf(l[j],r,n,j);if(u){const j=gt(u)?u.call(n):u;Reflect.ownKeys(j).forEach(k=>{h_(k,j[k])})}d&&ac(d,e,"c");function U(j,k){at(k)?k.forEach(nt=>j(nt.bind(n))):k&&j(k.bind(n))}if(U(Yg,g),U(fo,w),U(Xg,b),U(Bf,C),U(Wg,V),U(Gg,x),U(e_,m),U(t_,Z),U(Zg,E),U(jf,J),U(vl,Q),U(Jg,_),at(v))if(v.length){const j=e.exposed||(e.exposed={});v.forEach(k=>{Object.defineProperty(j,k,{get:()=>n[k],set:nt=>n[k]=nt})})}else e.exposed||(e.exposed={});ht&&e.render===Qe&&(e.render=ht),T!=null&&(e.inheritAttrs=T),I&&(e.components=I),y&&(e.directives=y),_&&Ff(e)}function i_(e,t,n=Qe){at(e)&&(e=Ca(e));for(const r in e){const s=e[r];let i;Dt(s)?"default"in s?i=yi(s.from||r,s.default,!0):i=yi(s.from||r):i=yi(s),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function ac(e,t,n){Be(at(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hf(e,t,n,r){let s=r.includes(".")?id(n,r):()=>n[r];if(Ft(e)){const i=t[e];gt(i)&&vi(s,i)}else if(gt(e))vi(s,e.bind(n));else if(Dt(e))if(at(e))e.forEach(i=>Hf(i,t,n,r));else{const i=gt(e.handler)?e.handler.bind(n):t[e.handler];gt(i)&&vi(s,i,e)}}function zf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(h=>Oi(u,h,a,!0)),Oi(u,t,a)),Dt(t)&&i.set(t,u),u}function Oi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Oi(e,i,n,!0),s&&s.forEach(a=>Oi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=o_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const o_={data:lc,props:uc,emits:uc,methods:is,computed:is,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:is,directives:is,watch:l_,provide:lc,inject:a_};function lc(e,t){return t?e?function(){return Kt(gt(e)?e.call(this,this):e,gt(t)?t.call(this,this):t)}:t:e}function a_(e,t){return is(Ca(e),Ca(t))}function Ca(e){if(at(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function is(e,t){return e?Kt(Object.create(null),e,t):t}function uc(e,t){return e?at(e)&&at(t)?[...new Set([...e,...t])]:Kt(Object.create(null),oc(e),oc(t??{})):t}function l_(e,t){if(!e)return t;if(!t)return e;const n=Kt(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Kf(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u_=0;function c_(e,t){return function(r,s=null){gt(r)||(r=Kt({},r)),s!=null&&!Dt(s)&&(s=null);const i=Kf(),a=new WeakSet,l=[];let u=!1;const h=i.app={_uid:u_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:z_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&gt(d.install)?(a.add(d),d.install(h,...g)):gt(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,w){if(!u){const b=h._ceVNode||Ne(r,s);return b.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),e(b,d,w),u=!0,h._container=d,d.__vue_app__=h,go(b.component)}},onUnmount(d){l.push(d)},unmount(){u&&(Be(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=Pr;Pr=h;try{return d()}finally{Pr=g}}};return h}}let Pr=null;function h_(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function yi(e,t,n=!1){const r=le||Ae;if(r||Pr){const s=Pr?Pr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&gt(t)?t.call(r&&r.proxy):t}}const Wf={},Gf=()=>Object.create(Wf),Qf=e=>Object.getPrototypeOf(e)===Wf;function f_(e,t,n,r=!1){const s={},i=Gf();e.propsDefaults=Object.create(null),Yf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Vg(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function d_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=bt(s),[u]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let w=d[g];if(po(e.emitsOptions,w))continue;const b=t[w];if(u)if(St(i,w))b!==i[w]&&(i[w]=b,h=!0);else{const C=Pn(w);s[C]=Pa(u,l,C,b,e,!1)}else b!==i[w]&&(i[w]=b,h=!0)}}}else{Yf(e,t,s,i)&&(h=!0);let d;for(const g in l)(!t||!St(t,g)&&((d=Fn(g))===g||!St(t,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Pa(u,l,g,void 0,e,!0)):delete s[g]);if(i!==l)for(const g in i)(!t||!St(t,g))&&(delete i[g],h=!0)}h&&an(e.attrs,"set","")}function Yf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(cs(u))continue;const h=t[u];let d;s&&St(s,d=Pn(u))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:po(e.emitsOptions,u)||(!(u in r)||h!==r[u])&&(r[u]=h,a=!0)}if(i){const u=bt(n),h=l||Pt;for(let d=0;d<i.length;d++){const g=i[d];n[g]=Pa(s,u,g,h[g],e,!St(h,g))}}return a}function Pa(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=St(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&gt(u)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=$s(s);r=h[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Fn(n))&&(r=!0))}return r}const p_=new WeakMap;function Xf(e,t,n=!1){const r=n?p_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!gt(e)){const d=g=>{u=!0;const[w,b]=Xf(g,t,!0);Kt(a,w),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Dt(e)&&r.set(e,br),br;if(at(i))for(let d=0;d<i.length;d++){const g=Pn(i[d]);cc(g)&&(a[g]=Pt)}else if(i)for(const d in i){const g=Pn(d);if(cc(g)){const w=i[d],b=a[g]=at(w)||gt(w)?{type:w}:Kt({},w),C=b.type;let V=!1,x=!0;if(at(C))for(let B=0;B<C.length;++B){const J=C[B],X=gt(J)&&J.name;if(X==="Boolean"){V=!0;break}else X==="String"&&(x=!1)}else V=gt(C)&&C.name==="Boolean";b[0]=V,b[1]=x,(V||St(b,"default"))&&l.push(g)}}const h=[a,l];return Dt(e)&&r.set(e,h),h}function cc(e){return e[0]!=="$"&&!cs(e)}const Jf=e=>e[0]==="_"||e==="$stable",Tl=e=>at(e)?e.map(We):[We(e)],m_=(e,t,n)=>{if(t._n)return t;const r=Of((...s)=>Tl(t(...s)),n);return r._c=!1,r},Zf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Jf(s))continue;const i=e[s];if(gt(i))t[s]=m_(s,i,r);else if(i!=null){const a=Tl(i);t[s]=()=>a}}},td=(e,t)=>{const n=Tl(t);e.slots.default=()=>n},ed=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},g_=(e,t,n)=>{const r=e.slots=Gf();if(e.vnode.shapeFlag&32){const s=t._;s?(ed(r,t,n),n&&uf(r,"_",s,!0)):Zf(t,r)}else t&&td(e,t)},__=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Pt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:ed(s,t,n):(i=!t.$stable,Zf(t,s)),a=t}else t&&(td(e,t),a={default:1});if(i)for(const l in s)!Jf(l)&&a[l]==null&&delete s[l]},Te=D_;function y_(e){return v_(e)}function v_(e,t){const n=oo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:h,setElementText:d,parentNode:g,nextSibling:w,setScopeId:b=Qe,insertStaticContent:C}=e,V=(A,S,D,L=null,N=null,F=null,G=void 0,K=null,H=!!S.dynamicChildren)=>{if(A===S)return;A&&!Tr(A,S)&&(L=Wt(A),mt(A,N,F,!0),A=null),S.patchFlag===-2&&(H=!1,S.dynamicChildren=null);const{type:$,ref:it,shapeFlag:Y}=S;switch($){case mo:x(A,S,D,L);break;case Vn:B(A,S,D,L);break;case ia:A==null&&J(S,D,L,G);break;case we:I(A,S,D,L,N,F,G,K,H);break;default:Y&1?ht(A,S,D,L,N,F,G,K,H):Y&6?y(A,S,D,L,N,F,G,K,H):(Y&64||Y&128)&&$.process(A,S,D,L,N,F,G,K,H,xt)}it!=null&&N&&Ni(it,A&&A.ref,F,S||A,!S)},x=(A,S,D,L)=>{if(A==null)r(S.el=l(S.children),D,L);else{const N=S.el=A.el;S.children!==A.children&&h(N,S.children)}},B=(A,S,D,L)=>{A==null?r(S.el=u(S.children||""),D,L):S.el=A.el},J=(A,S,D,L)=>{[A.el,A.anchor]=C(A.children,S,D,L,A.el,A.anchor)},X=({el:A,anchor:S},D,L)=>{let N;for(;A&&A!==S;)N=w(A),r(A,D,L),A=N;r(S,D,L)},Q=({el:A,anchor:S})=>{let D;for(;A&&A!==S;)D=w(A),s(A),A=D;s(S)},ht=(A,S,D,L,N,F,G,K,H)=>{S.type==="svg"?G="svg":S.type==="math"&&(G="mathml"),A==null?Z(S,D,L,N,F,G,K,H):_(A,S,N,F,G,K,H)},Z=(A,S,D,L,N,F,G,K)=>{let H,$;const{props:it,shapeFlag:Y,transition:et,dirs:ut}=A;if(H=A.el=a(A.type,F,it&&it.is,it),Y&8?d(H,A.children):Y&16&&m(A.children,H,null,L,N,sa(A,F),G,K),ut&&Gn(A,null,L,"created"),E(H,A,A.scopeId,G,L),it){for(const pt in it)pt!=="value"&&!cs(pt)&&i(H,pt,null,it[pt],F,L);"value"in it&&i(H,"value",null,it.value,F),($=it.onVnodeBeforeMount)&&qe($,L,A)}ut&&Gn(A,null,L,"beforeMount");const ot=T_(N,et);ot&&et.beforeEnter(H),r(H,S,D),(($=it&&it.onVnodeMounted)||ot||ut)&&Te(()=>{$&&qe($,L,A),ot&&et.enter(H),ut&&Gn(A,null,L,"mounted")},N)},E=(A,S,D,L,N)=>{if(D&&b(A,D),L)for(let F=0;F<L.length;F++)b(A,L[F]);if(N){let F=N.subTree;if(S===F||ad(F.type)&&(F.ssContent===S||F.ssFallback===S)){const G=N.vnode;E(A,G,G.scopeId,G.slotScopeIds,N.parent)}}},m=(A,S,D,L,N,F,G,K,H=0)=>{for(let $=H;$<A.length;$++){const it=A[$]=K?wn(A[$]):We(A[$]);V(null,it,S,D,L,N,F,G,K)}},_=(A,S,D,L,N,F,G)=>{const K=S.el=A.el;let{patchFlag:H,dynamicChildren:$,dirs:it}=S;H|=A.patchFlag&16;const Y=A.props||Pt,et=S.props||Pt;let ut;if(D&&Qn(D,!1),(ut=et.onVnodeBeforeUpdate)&&qe(ut,D,S,A),it&&Gn(S,A,D,"beforeUpdate"),D&&Qn(D,!0),(Y.innerHTML&&et.innerHTML==null||Y.textContent&&et.textContent==null)&&d(K,""),$?v(A.dynamicChildren,$,K,D,L,sa(S,N),F):G||k(A,S,K,null,D,L,sa(S,N),F,!1),H>0){if(H&16)T(K,Y,et,D,N);else if(H&2&&Y.class!==et.class&&i(K,"class",null,et.class,N),H&4&&i(K,"style",Y.style,et.style,N),H&8){const ot=S.dynamicProps;for(let pt=0;pt<ot.length;pt++){const Et=ot[pt],te=Y[Et],Gt=et[Et];(Gt!==te||Et==="value")&&i(K,Et,te,Gt,N,D)}}H&1&&A.children!==S.children&&d(K,S.children)}else!G&&$==null&&T(K,Y,et,D,N);((ut=et.onVnodeUpdated)||it)&&Te(()=>{ut&&qe(ut,D,S,A),it&&Gn(S,A,D,"updated")},L)},v=(A,S,D,L,N,F,G)=>{for(let K=0;K<S.length;K++){const H=A[K],$=S[K],it=H.el&&(H.type===we||!Tr(H,$)||H.shapeFlag&70)?g(H.el):D;V(H,$,it,null,L,N,F,G,!0)}},T=(A,S,D,L,N)=>{if(S!==D){if(S!==Pt)for(const F in S)!cs(F)&&!(F in D)&&i(A,F,S[F],null,N,L);for(const F in D){if(cs(F))continue;const G=D[F],K=S[F];G!==K&&F!=="value"&&i(A,F,K,G,N,L)}"value"in D&&i(A,"value",S.value,D.value,N)}},I=(A,S,D,L,N,F,G,K,H)=>{const $=S.el=A?A.el:l(""),it=S.anchor=A?A.anchor:l("");let{patchFlag:Y,dynamicChildren:et,slotScopeIds:ut}=S;ut&&(K=K?K.concat(ut):ut),A==null?(r($,D,L),r(it,D,L),m(S.children||[],D,it,N,F,G,K,H)):Y>0&&Y&64&&et&&A.dynamicChildren?(v(A.dynamicChildren,et,D,N,F,G,K),(S.key!=null||N&&S===N.subTree)&&nd(A,S,!0)):k(A,S,D,it,N,F,G,K,H)},y=(A,S,D,L,N,F,G,K,H)=>{S.slotScopeIds=K,A==null?S.shapeFlag&512?N.ctx.activate(S,D,L,G,H):z(S,D,L,N,F,G,H):q(A,S,H)},z=(A,S,D,L,N,F,G)=>{const K=A.component=F_(A,L,N);if($f(A)&&(K.ctx.renderer=xt),U_(K,!1,G),K.asyncDep){if(N&&N.registerDep(K,U,G),!A.el){const H=K.subTree=Ne(Vn);B(null,H,S,D)}}else U(K,A,S,D,N,F,G)},q=(A,S,D)=>{const L=S.component=A.component;if(P_(A,S,D))if(L.asyncDep&&!L.asyncResolved){j(L,S,D);return}else L.next=S,L.update();else S.el=A.el,L.vnode=S},U=(A,S,D,L,N,F,G)=>{const K=()=>{if(A.isMounted){let{next:Y,bu:et,u:ut,parent:ot,vnode:pt}=A;{const ee=rd(A);if(ee){Y&&(Y.el=pt.el,j(A,Y,G)),ee.asyncDep.then(()=>{A.isUnmounted||K()});return}}let Et=Y,te;Qn(A,!1),Y?(Y.el=pt.el,j(A,Y,G)):Y=pt,et&&_i(et),(te=Y.props&&Y.props.onVnodeBeforeUpdate)&&qe(te,ot,Y,pt),Qn(A,!0);const Gt=fc(A),Ve=A.subTree;A.subTree=Gt,V(Ve,Gt,g(Ve.el),Wt(Ve),A,N,F),Y.el=Gt.el,Et===null&&V_(A,Gt.el),ut&&Te(ut,N),(te=Y.props&&Y.props.onVnodeUpdated)&&Te(()=>qe(te,ot,Y,pt),N)}else{let Y;const{el:et,props:ut}=S,{bm:ot,m:pt,parent:Et,root:te,type:Gt}=A,Ve=ms(S);Qn(A,!1),ot&&_i(ot),!Ve&&(Y=ut&&ut.onVnodeBeforeMount)&&qe(Y,Et,S),Qn(A,!0);{te.ce&&te.ce._injectChildStyle(Gt);const ee=A.subTree=fc(A);V(null,ee,D,L,A,N,F),S.el=ee.el}if(pt&&Te(pt,N),!Ve&&(Y=ut&&ut.onVnodeMounted)){const ee=S;Te(()=>qe(Y,Et,ee),N)}(S.shapeFlag&256||Et&&ms(Et.vnode)&&Et.vnode.shapeFlag&256)&&A.a&&Te(A.a,N),A.isMounted=!0,S=D=L=null}};A.scope.on();const H=A.effect=new df(K);A.scope.off();const $=A.update=H.run.bind(H),it=A.job=H.runIfDirty.bind(H);it.i=A,it.id=A.uid,H.scheduler=()=>yl(it),Qn(A,!0),$()},j=(A,S,D)=>{S.component=A;const L=A.vnode.props;A.vnode=S,A.next=null,d_(A,S.props,L,D),__(A,S.children,D),$n(),ic(A),Un()},k=(A,S,D,L,N,F,G,K,H=!1)=>{const $=A&&A.children,it=A?A.shapeFlag:0,Y=S.children,{patchFlag:et,shapeFlag:ut}=S;if(et>0){if(et&128){lt($,Y,D,L,N,F,G,K,H);return}else if(et&256){nt($,Y,D,L,N,F,G,K,H);return}}ut&8?(it&16&&de($,N,F),Y!==$&&d(D,Y)):it&16?ut&16?lt($,Y,D,L,N,F,G,K,H):de($,N,F,!0):(it&8&&d(D,""),ut&16&&m(Y,D,L,N,F,G,K,H))},nt=(A,S,D,L,N,F,G,K,H)=>{A=A||br,S=S||br;const $=A.length,it=S.length,Y=Math.min($,it);let et;for(et=0;et<Y;et++){const ut=S[et]=H?wn(S[et]):We(S[et]);V(A[et],ut,D,null,N,F,G,K,H)}$>it?de(A,N,F,!0,!1,Y):m(S,D,L,N,F,G,K,H,Y)},lt=(A,S,D,L,N,F,G,K,H)=>{let $=0;const it=S.length;let Y=A.length-1,et=it-1;for(;$<=Y&&$<=et;){const ut=A[$],ot=S[$]=H?wn(S[$]):We(S[$]);if(Tr(ut,ot))V(ut,ot,D,null,N,F,G,K,H);else break;$++}for(;$<=Y&&$<=et;){const ut=A[Y],ot=S[et]=H?wn(S[et]):We(S[et]);if(Tr(ut,ot))V(ut,ot,D,null,N,F,G,K,H);else break;Y--,et--}if($>Y){if($<=et){const ut=et+1,ot=ut<it?S[ut].el:L;for(;$<=et;)V(null,S[$]=H?wn(S[$]):We(S[$]),D,ot,N,F,G,K,H),$++}}else if($>et)for(;$<=Y;)mt(A[$],N,F,!0),$++;else{const ut=$,ot=$,pt=new Map;for($=ot;$<=et;$++){const Qt=S[$]=H?wn(S[$]):We(S[$]);Qt.key!=null&&pt.set(Qt.key,$)}let Et,te=0;const Gt=et-ot+1;let Ve=!1,ee=0;const mn=new Array(Gt);for($=0;$<Gt;$++)mn[$]=0;for($=ut;$<=Y;$++){const Qt=A[$];if(te>=Gt){mt(Qt,N,F,!0);continue}let De;if(Qt.key!=null)De=pt.get(Qt.key);else for(Et=ot;Et<=et;Et++)if(mn[Et-ot]===0&&Tr(Qt,S[Et])){De=Et;break}De===void 0?mt(Qt,N,F,!0):(mn[De-ot]=$+1,De>=ee?ee=De:Ve=!0,V(Qt,S[De],D,null,N,F,G,K,H),te++)}const Hr=Ve?E_(mn):br;for(Et=Hr.length-1,$=Gt-1;$>=0;$--){const Qt=ot+$,De=S[Qt],Hs=Qt+1<it?S[Qt+1].el:L;mn[$]===0?V(null,De,D,Hs,N,F,G,K,H):Ve&&(Et<0||$!==Hr[Et]?vt(De,D,Hs,2):Et--)}}},vt=(A,S,D,L,N=null)=>{const{el:F,type:G,transition:K,children:H,shapeFlag:$}=A;if($&6){vt(A.component.subTree,S,D,L);return}if($&128){A.suspense.move(S,D,L);return}if($&64){G.move(A,S,D,xt);return}if(G===we){r(F,S,D);for(let Y=0;Y<H.length;Y++)vt(H[Y],S,D,L);r(A.anchor,S,D);return}if(G===ia){X(A,S,D);return}if(L!==2&&$&1&&K)if(L===0)K.beforeEnter(F),r(F,S,D),Te(()=>K.enter(F),N);else{const{leave:Y,delayLeave:et,afterLeave:ut}=K,ot=()=>r(F,S,D),pt=()=>{Y(F,()=>{ot(),ut&&ut()})};et?et(F,ot,pt):pt()}else r(F,S,D)},mt=(A,S,D,L=!1,N=!1)=>{const{type:F,props:G,ref:K,children:H,dynamicChildren:$,shapeFlag:it,patchFlag:Y,dirs:et,cacheIndex:ut}=A;if(Y===-2&&(N=!1),K!=null&&Ni(K,null,D,A,!0),ut!=null&&(S.renderCache[ut]=void 0),it&256){S.ctx.deactivate(A);return}const ot=it&1&&et,pt=!ms(A);let Et;if(pt&&(Et=G&&G.onVnodeBeforeUnmount)&&qe(Et,S,A),it&6)Ut(A.component,D,L);else{if(it&128){A.suspense.unmount(D,L);return}ot&&Gn(A,null,S,"beforeUnmount"),it&64?A.type.remove(A,S,D,xt,L):$&&!$.hasOnce&&(F!==we||Y>0&&Y&64)?de($,S,D,!1,!0):(F===we&&Y&384||!N&&it&16)&&de(H,S,D),L&&yt(A)}(pt&&(Et=G&&G.onVnodeUnmounted)||ot)&&Te(()=>{Et&&qe(Et,S,A),ot&&Gn(A,null,S,"unmounted")},D)},yt=A=>{const{type:S,el:D,anchor:L,transition:N}=A;if(S===we){$t(D,L);return}if(S===ia){Q(A);return}const F=()=>{s(D),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(A.shapeFlag&1&&N&&!N.persisted){const{leave:G,delayLeave:K}=N,H=()=>G(D,F);K?K(A.el,F,H):H()}else F()},$t=(A,S)=>{let D;for(;A!==S;)D=w(A),s(A),A=D;s(S)},Ut=(A,S,D)=>{const{bum:L,scope:N,job:F,subTree:G,um:K,m:H,a:$}=A;hc(H),hc($),L&&_i(L),N.stop(),F&&(F.flags|=8,mt(G,A,S,D)),K&&Te(K,S),Te(()=>{A.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},de=(A,S,D,L=!1,N=!1,F=0)=>{for(let G=F;G<A.length;G++)mt(A[G],S,D,L,N)},Wt=A=>{if(A.shapeFlag&6)return Wt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const S=w(A.anchor||A.el),D=S&&S[jg];return D?w(D):S};let Oe=!1;const Pe=(A,S,D)=>{A==null?S._vnode&&mt(S._vnode,null,null,!0):V(S._vnode||null,A,S,null,null,null,D),S._vnode=A,Oe||(Oe=!0,ic(),Mf(),Oe=!1)},xt={p:V,um:mt,m:vt,r:yt,mt:z,mc:m,pc:k,pbc:v,n:Wt,o:e};return{render:Pe,hydrate:void 0,createApp:c_(Pe)}}function sa({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Qn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function T_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function nd(e,t,n=!1){const r=e.children,s=t.children;if(at(r)&&at(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=wn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&nd(a,l)),l.type===mo&&(l.el=a.el)}}function E_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function rd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rd(t)}function hc(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const w_=Symbol.for("v-scx"),I_=()=>yi(w_);function vi(e,t,n){return sd(e,t,n)}function sd(e,t,n=Pt){const{immediate:r,deep:s,flush:i,once:a}=n,l=Kt({},n),u=t&&r||!t&&i!=="post";let h;if(Cs){if(i==="sync"){const b=I_();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!u){const b=()=>{};return b.stop=Qe,b.resume=Qe,b.pause=Qe,b}}const d=le;l.call=(b,C,V)=>Be(b,d,C,V);let g=!1;i==="post"?l.scheduler=b=>{Te(b,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(b,C)=>{C?b():yl(b)}),l.augmentJob=b=>{t&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const w=Fg(e,t,l);return Cs&&(h?h.push(w):u&&w()),w}function A_(e,t,n){const r=this.proxy,s=Ft(e)?e.includes(".")?id(r,e):()=>r[e]:e.bind(r,r);let i;gt(t)?i=t:(i=t.handler,n=t);const a=$s(this),l=sd(s,i.bind(r),n);return a(),l}function id(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const b_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Pn(t)}Modifiers`]||e[`${Fn(t)}Modifiers`];function S_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Pt;let s=n;const i=t.startsWith("update:"),a=i&&b_(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ft(d)?d.trim():d)),a.number&&(s=n.map(Di)));let l,u=r[l=Jo(t)]||r[l=Jo(Pn(t))];!u&&i&&(u=r[l=Jo(Fn(t))]),u&&Be(u,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Be(h,e,6,s)}}function od(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!gt(e)){const u=h=>{const d=od(h,t,!0);d&&(l=!0,Kt(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(Dt(e)&&r.set(e,null),null):(at(i)?i.forEach(u=>a[u]=null):Kt(a,i),Dt(e)&&r.set(e,a),a)}function po(e,t){return!e||!ro(t)?!1:(t=t.slice(2).replace(/Once$/,""),St(e,t[0].toLowerCase()+t.slice(1))||St(e,Fn(t))||St(e,t))}function fc(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:h,renderCache:d,props:g,data:w,setupState:b,ctx:C,inheritAttrs:V}=e,x=ki(e);let B,J;try{if(n.shapeFlag&4){const Q=s||r,ht=Q;B=We(h.call(ht,Q,d,g,b,w,C)),J=l}else{const Q=t;B=We(Q.length>1?Q(g,{attrs:l,slots:a,emit:u}):Q(g,null)),J=t.props?l:R_(l)}}catch(Q){_s.length=0,co(Q,e,1),B=Ne(Vn)}let X=B;if(J&&V!==!1){const Q=Object.keys(J),{shapeFlag:ht}=X;Q.length&&ht&7&&(i&&Q.some(ol)&&(J=C_(J,i)),X=or(X,J,!1,!0))}return n.dirs&&(X=or(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&Ss(X,n.transition),B=X,ki(x),B}const R_=e=>{let t;for(const n in e)(n==="class"||n==="style"||ro(n))&&((t||(t={}))[n]=e[n]);return t},C_=(e,t)=>{const n={};for(const r in e)(!ol(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function P_(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?dc(r,a,h):!!a;if(u&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const w=d[g];if(a[w]!==r[w]&&!po(h,w))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?dc(r,a,h):!0:!!a;return!1}function dc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!po(n,i))return!0}return!1}function V_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const ad=e=>e.__isSuspense;function D_(e,t){t&&t.pendingBranch?at(e)?t.effects.push(...e):t.effects.push(e):Bg(e)}const we=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),Vn=Symbol.for("v-cmt"),ia=Symbol.for("v-stc"),_s=[];let be=null;function Ie(e=!1){_s.push(be=e?null:[])}function x_(){_s.pop(),be=_s[_s.length-1]||null}let Rs=1;function pc(e,t=!1){Rs+=e,e<0&&be&&t&&(be.hasOnce=!0)}function ld(e){return e.dynamicChildren=Rs>0?be||br:null,x_(),Rs>0&&be&&be.push(e),e}function Ge(e,t,n,r,s,i){return ld(Me(e,t,n,r,s,i,!0))}function Va(e,t,n,r,s){return ld(Ne(e,t,n,r,s,!0))}function ud(e){return e?e.__v_isVNode===!0:!1}function Tr(e,t){return e.type===t.type&&e.key===t.key}const cd=({key:e})=>e??null,Ti=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ft(e)||ue(e)||gt(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function Me(e,t=null,n=null,r=0,s=null,i=e===we?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cd(t),ref:t&&Ti(t),scopeId:Nf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return l?(El(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Ft(n)?8:16),Rs>0&&!a&&be&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&be.push(u),u}const Ne=M_;function M_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===n_)&&(e=Vn),ud(e)){const l=or(e,t,!0);return n&&El(l,n),Rs>0&&!i&&be&&(l.shapeFlag&6?be[be.indexOf(e)]=l:be.push(l)),l.patchFlag=-2,l}if(H_(e)&&(e=e.__vccOpts),t){t=k_(t);let{class:l,style:u}=t;l&&!Ft(l)&&(t.class=ao(l)),Dt(u)&&(_l(u)&&!at(u)&&(u=Kt({},u)),t.style=ul(u))}const a=Ft(e)?1:ad(e)?128:qg(e)?64:Dt(e)?4:gt(e)?2:0;return Me(e,t,n,r,s,a,i,!0)}function k_(e){return e?_l(e)||Qf(e)?Kt({},e):e:null}function or(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,h=t?N_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&cd(h),ref:t&&t.ref?n&&i?at(i)?i.concat(Ti(t)):[i,Ti(t)]:Ti(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&or(e.ssContent),ssFallback:e.ssFallback&&or(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Ss(d,u.clone(d)),d}function hd(e=" ",t=0){return Ne(mo,null,e,t)}function ci(e="",t=!1){return t?(Ie(),Va(Vn,null,e)):Ne(Vn,null,e)}function We(e){return e==null||typeof e=="boolean"?Ne(Vn):at(e)?Ne(we,null,e.slice()):ud(e)?wn(e):Ne(mo,null,String(e))}function wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:or(e)}function El(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(at(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),El(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Qf(t)?t._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else gt(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[hd(t)]):n=8);e.children=t,e.shapeFlag|=n}function N_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ao([t.class,r.class]));else if(s==="style")t.style=ul([t.style,r.style]);else if(ro(s)){const i=t[s],a=r[s];a&&i!==a&&!(at(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function qe(e,t,n,r=null){Be(e,t,7,[n,r])}const O_=Kf();let L_=0;function F_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||O_,i={uid:L_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(r,s),emitsOptions:od(r,s),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:r.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=S_.bind(null,i),e.ce&&e.ce(i),i}let le=null;const $_=()=>le||Ae;let Li,Da;{const e=oo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Li=t("__VUE_INSTANCE_SETTERS__",n=>le=n),Da=t("__VUE_SSR_SETTERS__",n=>Cs=n)}const $s=e=>{const t=le;return Li(e),e.scope.on(),()=>{e.scope.off(),Li(t)}},mc=()=>{le&&le.scope.off(),Li(null)};function fd(e){return e.vnode.shapeFlag&4}let Cs=!1;function U_(e,t=!1,n=!1){t&&Da(t);const{props:r,children:s}=e.vnode,i=fd(e);f_(e,r,i,t),g_(e,s,n);const a=i?B_(e,t):void 0;return t&&Da(!1),a}function B_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,r_);const{setup:r}=n;if(r){$n();const s=e.setupContext=r.length>1?q_(e):null,i=$s(e),a=Fs(r,e,0,[e.props,s]),l=sf(a);if(Un(),i(),(l||e.sp)&&!ms(e)&&Ff(e),l){if(a.then(mc,mc),t)return a.then(u=>{gc(e,u)}).catch(u=>{co(u,e,0)});e.asyncDep=a}else gc(e,a)}else dd(e)}function gc(e,t,n){gt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Dt(t)&&(e.setupState=Pf(t)),dd(e)}function dd(e,t,n){const r=e.type;e.render||(e.render=r.render||Qe);{const s=$s(e);$n();try{s_(e)}finally{Un(),s()}}}const j_={get(e,t){return ie(e,"get",""),e[t]}};function q_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,j_),slots:e.slots,emit:e.emit,expose:t}}function go(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Pf(Dg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)},has(t,n){return n in t||n in gs}})):e.proxy}function H_(e){return gt(e)&&"__vccOpts"in e}const Fi=(e,t)=>Og(e,t,Cs),z_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xa;const _c=typeof window<"u"&&window.trustedTypes;if(_c)try{xa=_c.createPolicy("vue",{createHTML:e=>e})}catch{}const pd=xa?e=>xa.createHTML(e):e=>e,K_="http://www.w3.org/2000/svg",W_="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,yc=on&&on.createElement("template"),G_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?on.createElementNS(K_,e):t==="mathml"?on.createElementNS(W_,e):n?on.createElement(e,{is:n}):on.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>on.createTextNode(e),createComment:e=>on.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>on.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yc.innerHTML=pd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=yc.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vn="transition",ss="animation",xr=Symbol("_vtc"),md={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Q_=Kt({},zg,md),Yn=(e,t=[])=>{at(e)?e.forEach(n=>n(...t)):e&&e(...t)},vc=e=>e?at(e)?e.some(t=>t.length>1):e.length>1:!1;function Y_(e){const t={};for(const I in e)I in md||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:w=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,C=X_(s),V=C&&C[0],x=C&&C[1],{onBeforeEnter:B,onEnter:J,onEnterCancelled:X,onLeave:Q,onLeaveCancelled:ht,onBeforeAppear:Z=B,onAppear:E=J,onAppearCancelled:m=X}=t,_=(I,y,z,q)=>{I._enterCancelled=q,Tn(I,y?d:l),Tn(I,y?h:a),z&&z()},v=(I,y)=>{I._isLeaving=!1,Tn(I,g),Tn(I,b),Tn(I,w),y&&y()},T=I=>(y,z)=>{const q=I?E:J,U=()=>_(y,I,z);Yn(q,[y,U]),Tc(()=>{Tn(y,I?u:i),He(y,I?d:l),vc(q)||Ec(y,r,V,U)})};return Kt(t,{onBeforeEnter(I){Yn(B,[I]),He(I,i),He(I,a)},onBeforeAppear(I){Yn(Z,[I]),He(I,u),He(I,h)},onEnter:T(!1),onAppear:T(!0),onLeave(I,y){I._isLeaving=!0;const z=()=>v(I,y);He(I,g),I._enterCancelled?(He(I,w),Ma()):(Ma(),He(I,w)),Tc(()=>{I._isLeaving&&(Tn(I,g),He(I,b),vc(Q)||Ec(I,r,x,z))}),Yn(Q,[I,z])},onEnterCancelled(I){_(I,!1,void 0,!0),Yn(X,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),Yn(m,[I])},onLeaveCancelled(I){v(I),Yn(ht,[I])}})}function X_(e){if(e==null)return null;if(Dt(e))return[oa(e.enter),oa(e.leave)];{const t=oa(e);return[t,t]}}function oa(e){return eg(e)}function He(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[xr]||(e[xr]=new Set)).add(t)}function Tn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[xr];n&&(n.delete(t),n.size||(e[xr]=void 0))}function Tc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let J_=0;function Ec(e,t,n,r){const s=e._endId=++J_,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:u}=gd(e,t);if(!a)return r();const h=a+"end";let d=0;const g=()=>{e.removeEventListener(h,w),i()},w=b=>{b.target===e&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},l+1),e.addEventListener(h,w)}function gd(e,t){const n=window.getComputedStyle(e),r=C=>(n[C]||"").split(", "),s=r(`${vn}Delay`),i=r(`${vn}Duration`),a=wc(s,i),l=r(`${ss}Delay`),u=r(`${ss}Duration`),h=wc(l,u);let d=null,g=0,w=0;t===vn?a>0&&(d=vn,g=a,w=i.length):t===ss?h>0&&(d=ss,g=h,w=u.length):(g=Math.max(a,h),d=g>0?a>h?vn:ss:null,w=d?d===vn?i.length:u.length:0);const b=d===vn&&/\b(transform|all)(,|$)/.test(r(`${vn}Property`).toString());return{type:d,timeout:g,propCount:w,hasTransform:b}}function wc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ic(n)+Ic(e[r])))}function Ic(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ma(){return document.body.offsetHeight}function Z_(e,t,n){const r=e[xr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ac=Symbol("_vod"),ty=Symbol("_vsh"),ey=Symbol(""),ny=/(^|;)\s*display\s*:/;function ry(e,t,n){const r=e.style,s=Ft(n);let i=!1;if(n&&!s){if(t)if(Ft(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ei(r,l,"")}else for(const a in t)n[a]==null&&Ei(r,a,"");for(const a in n)a==="display"&&(i=!0),Ei(r,a,n[a])}else if(s){if(t!==n){const a=r[ey];a&&(n+=";"+a),r.cssText=n,i=ny.test(n)}}else t&&e.removeAttribute("style");Ac in e&&(e[Ac]=i?r.display:"",e[ty]&&(r.display="none"))}const bc=/\s*!important$/;function Ei(e,t,n){if(at(n))n.forEach(r=>Ei(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=sy(e,t);bc.test(n)?e.setProperty(Fn(r),n.replace(bc,""),"important"):e[r]=n}}const Sc=["Webkit","Moz","ms"],aa={};function sy(e,t){const n=aa[t];if(n)return n;let r=Pn(t);if(r!=="filter"&&r in e)return aa[t]=r;r=lf(r);for(let s=0;s<Sc.length;s++){const i=Sc[s]+r;if(i in e)return aa[t]=i}return t}const Rc="http://www.w3.org/1999/xlink";function Cc(e,t,n,r,s,i=ag(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Rc,t.slice(6,t.length)):e.setAttributeNS(Rc,t,n):n==null||i&&!cf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ze(n)?String(n):n)}function Pc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?pd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=cf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Zn(e,t,n,r){e.addEventListener(t,n,r)}function iy(e,t,n,r){e.removeEventListener(t,n,r)}const Vc=Symbol("_vei");function oy(e,t,n,r,s=null){const i=e[Vc]||(e[Vc]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=ay(t);if(r){const h=i[t]=cy(r,s);Zn(e,l,h,u)}else a&&(iy(e,l,a,u),i[t]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function ay(e){let t;if(Dc.test(e)){t={};let r;for(;r=e.match(Dc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fn(e.slice(2)),t]}let la=0;const ly=Promise.resolve(),uy=()=>la||(ly.then(()=>la=0),la=Date.now());function cy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(hy(r,n.value),t,5,[r])};return n.value=e,n.attached=uy(),n}function hy(e,t){if(at(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const xc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fy=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Z_(e,r,a):t==="style"?ry(e,n,r):ro(t)?ol(t)||oy(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dy(e,t,r,a))?(Pc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Cc(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ft(r))?Pc(e,Pn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Cc(e,t,r,a))};function dy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&xc(t)&&gt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xc(t)&&Ft(n)?!1:t in e}const _d=new WeakMap,yd=new WeakMap,$i=Symbol("_moveCb"),Mc=Symbol("_enterCb"),py=e=>(delete e.props.mode,e),my=py({name:"TransitionGroup",props:Kt({},Q_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=$_(),r=Hg();let s,i;return Bf(()=>{if(!s.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Ty(s[0].el,n.vnode.el,a))return;s.forEach(_y),s.forEach(yy);const l=s.filter(vy);Ma(),l.forEach(u=>{const h=u.el,d=h.style;He(h,a),d.transform=d.webkitTransform=d.transitionDuration="";const g=h[$i]=w=>{w&&w.target!==h||(!w||/transform$/.test(w.propertyName))&&(h.removeEventListener("transitionend",g),h[$i]=null,Tn(h,a))};h.addEventListener("transitionend",g)})}),()=>{const a=bt(e),l=Y_(a);let u=a.tag||we;if(s=[],i)for(let h=0;h<i.length;h++){const d=i[h];d.el&&d.el instanceof Element&&(s.push(d),Ss(d,ba(d,l,r,n)),_d.set(d,d.el.getBoundingClientRect()))}i=t.default?Lf(t.default()):[];for(let h=0;h<i.length;h++){const d=i[h];d.key!=null&&Ss(d,ba(d,l,r,n))}return Ne(u,null,i)}}}),gy=my;function _y(e){const t=e.el;t[$i]&&t[$i](),t[Mc]&&t[Mc]()}function yy(e){yd.set(e,e.el.getBoundingClientRect())}function vy(e){const t=_d.get(e),n=yd.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function Ty(e,t,n){const r=e.cloneNode(),s=e[xr];s&&s.forEach(l=>{l.split(/\s+/).forEach(u=>u&&r.classList.remove(u))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:a}=gd(r);return i.removeChild(r),a}const Ui=e=>{const t=e.props["onUpdate:modelValue"]||!1;return at(t)?n=>_i(t,n):t};function Ey(e){e.target.composing=!0}function kc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Vr=Symbol("_assign"),wi={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Vr]=Ui(s);const i=r||s.props&&s.props.type==="number";Zn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Di(l)),e[Vr](l)}),n&&Zn(e,"change",()=>{e.value=e.value.trim()}),t||(Zn(e,"compositionstart",Ey),Zn(e,"compositionend",kc),Zn(e,"change",kc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[Vr]=Ui(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Di(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===u)||(e.value=u))}},wy={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=so(t);Zn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Di(Bi(a)):Bi(a));e[Vr](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,Df(()=>{e._assigning=!1})}),e[Vr]=Ui(r)},mounted(e,{value:t}){Nc(e,t)},beforeUpdate(e,t,n){e[Vr]=Ui(n)},updated(e,{value:t}){e._assigning||Nc(e,t)}};function Nc(e,t){const n=e.multiple,r=at(t);if(!(n&&!r&&!so(t))){for(let s=0,i=e.options.length;s<i;s++){const a=e.options[s],l=Bi(a);if(n)if(r){const u=typeof l;u==="string"||u==="number"?a.selected=t.some(h=>String(h)===String(l)):a.selected=ug(t,l)>-1}else a.selected=t.has(l);else if(lo(Bi(a),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Bi(e){return"_value"in e?e._value:e.value}const Iy=["ctrl","shift","alt","meta"],Ay={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Iy.some(n=>e[`${n}Key`]&&!t.includes(n))},by=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<t.length;a++){const l=Ay[t[a]];if(l&&l(s,t))return}return e(s,...i)})},Sy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ry=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Fn(s.key);if(t.some(a=>a===i||Sy[a]===i))return e(s)})},Cy=Kt({patchProp:fy},G_);let Oc;function Py(){return Oc||(Oc=y_(Cy))}const Vy=(...e)=>{const t=Py().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=xy(r);if(!s)return;const i=t._component;!gt(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Dy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Dy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xy(e){return Ft(e)?document.querySelector(e):e}const My=()=>{};var Lc={};/**
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
 */const vd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ky=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,b=h&63;u||(b=64,a||(w=64)),r.push(n[d],n[g],n[w],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ky(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Ny;const w=i<<2|l>>4;if(r.push(w),h!==64){const b=l<<4&240|h>>2;if(r.push(b),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ny extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oy=function(e){const t=vd(e);return Td.encodeByteArray(t,!0)},Ed=function(e){return Oy(e).replace(/\./g,"")},Ly=function(e){try{return Td.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $y=()=>Fy().__FIREBASE_DEFAULTS__,Uy=()=>{if(typeof process>"u"||typeof Lc>"u")return;const e=Lc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},By=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ly(e[1]);return t&&JSON.parse(t)},wd=()=>{try{return My()||$y()||Uy()||By()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Id=()=>{var e;return(e=wd())===null||e===void 0?void 0:e.config};/**
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
 */class jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function qy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hy(){var e;const t=(e=wd())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ky(){return!Hy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Wy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Gy="FirebaseError";class Bn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Gy,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Qy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Bn(s,l,r)}}function Qy(e,t){return e.replace(Yy,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Yy=/\{\$([^}]+)}/g;function ji(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Fc(i)&&Fc(a)){if(!ji(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fc(e){return e!==null&&typeof e=="object"}/**
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
 */const Xy=1e3,Jy=2,Zy=4*60*60*1e3,tv=.5;function $c(e,t=Xy,n=Jy){const r=t*Math.pow(n,e),s=Math.round(tv*r*(Math.random()-.5)*2);return Math.min(Zy,r+s)}/**
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
 */function je(e){return e&&e._delegate?e._delegate:e}class cn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class ev{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rv(t))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jn){return this.instances.has(t)}getOptions(t=Jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jn){return this.component?this.component.multipleInstances?t:Jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(e){return e===Jn?void 0:e}function rv(e){return e.instantiationMode==="EAGER"}/**
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
 */class sv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ev(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var It;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(It||(It={}));const iv={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},ov=It.INFO,av={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},lv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=av[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wl{constructor(t){this.name=t,this._logLevel=ov,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in It))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...t),this._logHandler(this,It.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...t),this._logHandler(this,It.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,It.INFO,...t),this._logHandler(this,It.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,It.WARN,...t),this._logHandler(this,It.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...t),this._logHandler(this,It.ERROR,...t)}}const uv=(e,t)=>t.some(n=>e instanceof n);let Uc,Bc;function cv(){return Uc||(Uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hv(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,ka=new WeakMap,Rd=new WeakMap,ua=new WeakMap,Il=new WeakMap;function fv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(bn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Sd.set(n,e)}).catch(()=>{}),Il.set(t,e),t}function dv(e){if(ka.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});ka.set(e,t)}let Na={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ka.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Rd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pv(e){Na=e(Na)}function mv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ca(this),t,...n);return Rd.set(r,t.sort?t.sort():[t]),bn(r)}:hv().includes(e)?function(...t){return e.apply(ca(this),t),bn(Sd.get(this))}:function(...t){return bn(e.apply(ca(this),t))}}function gv(e){return typeof e=="function"?mv(e):(e instanceof IDBTransaction&&dv(e),uv(e,cv())?new Proxy(e,Na):e)}function bn(e){if(e instanceof IDBRequest)return fv(e);if(ua.has(e))return ua.get(e);const t=gv(e);return t!==e&&(ua.set(e,t),Il.set(t,e)),t}const ca=e=>Il.get(e);function Cd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=bn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(bn(a.result),u.oldVersion,u.newVersion,bn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const _v=["get","getKey","getAll","getAllKeys","count"],yv=["put","add","delete","clear"],ha=new Map;function jc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ha.get(t))return ha.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_v.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return ha.set(t,i),i}pv(e=>({...e,get:(t,n,r)=>jc(t,n)||e.get(t,n,r),has:(t,n)=>!!jc(t,n)||e.has(t,n)}));/**
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
 */class vv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Oa="@firebase/app",qc="0.11.4";/**
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
 */const hn=new wl("@firebase/app"),Ev="@firebase/app-compat",wv="@firebase/analytics-compat",Iv="@firebase/analytics",Av="@firebase/app-check-compat",bv="@firebase/app-check",Sv="@firebase/auth",Rv="@firebase/auth-compat",Cv="@firebase/database",Pv="@firebase/data-connect",Vv="@firebase/database-compat",Dv="@firebase/functions",xv="@firebase/functions-compat",Mv="@firebase/installations",kv="@firebase/installations-compat",Nv="@firebase/messaging",Ov="@firebase/messaging-compat",Lv="@firebase/performance",Fv="@firebase/performance-compat",$v="@firebase/remote-config",Uv="@firebase/remote-config-compat",Bv="@firebase/storage",jv="@firebase/storage-compat",qv="@firebase/firestore",Hv="@firebase/vertexai",zv="@firebase/firestore-compat",Kv="firebase",Wv="11.6.0";/**
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
 */const La="[DEFAULT]",Gv={[Oa]:"fire-core",[Ev]:"fire-core-compat",[Iv]:"fire-analytics",[wv]:"fire-analytics-compat",[bv]:"fire-app-check",[Av]:"fire-app-check-compat",[Sv]:"fire-auth",[Rv]:"fire-auth-compat",[Cv]:"fire-rtdb",[Pv]:"fire-data-connect",[Vv]:"fire-rtdb-compat",[Dv]:"fire-fn",[xv]:"fire-fn-compat",[Mv]:"fire-iid",[kv]:"fire-iid-compat",[Nv]:"fire-fcm",[Ov]:"fire-fcm-compat",[Lv]:"fire-perf",[Fv]:"fire-perf-compat",[$v]:"fire-rc",[Uv]:"fire-rc-compat",[Bv]:"fire-gcs",[jv]:"fire-gcs-compat",[qv]:"fire-fst",[zv]:"fire-fst-compat",[Hv]:"fire-vertex","fire-js":"fire-js",[Kv]:"fire-js-all"};/**
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
 */const qi=new Map,Qv=new Map,Fa=new Map;function Hc(e,t){try{e.container.addComponent(t)}catch(n){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dn(e){const t=e.name;if(Fa.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;Fa.set(t,e);for(const n of qi.values())Hc(n,e);for(const n of Qv.values())Hc(n,e);return!0}function yo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Yv(e){return e==null?!1:e.settings!==void 0}/**
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
 */const Xv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new _o("app","Firebase",Xv);/**
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
 */class Jv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zv=Wv;function Pd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(n||(n=Id()),!n)throw Sn.create("no-options");const i=qi.get(s);if(i){if(ji(n,i.options)&&ji(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const a=new sv(s);for(const u of Fa.values())a.addComponent(u);const l=new Jv(n,r,a);return qi.set(s,l),l}function tT(e=La){const t=qi.get(e);if(!t&&e===La&&Id())return Pd();if(!t)throw Sn.create("no-app",{appName:e});return t}function Ye(e,t,n){var r;let s=(r=Gv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hn.warn(l.join(" "));return}Dn(new cn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",nT=1,Ps="firebase-heartbeat-store";let fa=null;function Vd(){return fa||(fa=Cd(eT,nT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(e=>{throw Sn.create("idb-open",{originalErrorMessage:e.message})})),fa}async function rT(e){try{const n=(await Vd()).transaction(Ps),r=await n.objectStore(Ps).get(Dd(e));return await n.done,r}catch(t){if(t instanceof Bn)hn.warn(t.message);else{const n=Sn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});hn.warn(n.message)}}}async function zc(e,t){try{const r=(await Vd()).transaction(Ps,"readwrite");await r.objectStore(Ps).put(t,Dd(e)),await r.done}catch(n){if(n instanceof Bn)hn.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function Dd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const sT=1024,iT=30;class oT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kc();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>iT){const a=uT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kc(),{heartbeatsToSend:r,unsentEntries:s}=aT(this._heartbeatsCache.heartbeats),i=Ed(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hn.warn(n),""}}}function Kc(){return new Date().toISOString().substring(0,10)}function aT(e,t=sT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?bd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Wc(e){return Ed(JSON.stringify({version:2,heartbeats:e})).length}function uT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function cT(e){Dn(new cn("platform-logger",t=>new vv(t),"PRIVATE")),Dn(new cn("heartbeat",t=>new oT(t),"PRIVATE")),Ye(Oa,qc,e),Ye(Oa,qc,"esm2017"),Ye("fire-js","")}cT("");var hT="firebase",fT="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(hT,fT,"app");const xd="@firebase/installations",Al="0.6.13";/**
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
 */const Md=1e4,kd=`w:${Al}`,Nd="FIS_v2",dT="https://firebaseinstallations.googleapis.com/v1",pT=60*60*1e3,mT="installations",gT="Installations";/**
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
 */const _T={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ar=new _o(mT,gT,_T);function Od(e){return e instanceof Bn&&e.code.includes("request-failed")}/**
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
 */function Ld({projectId:e}){return`${dT}/projects/${e}/installations`}function Fd(e){return{token:e.token,requestStatus:2,expiresIn:vT(e.expiresIn),creationTime:Date.now()}}async function $d(e,t){const r=(await t.json()).error;return ar.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ud({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function yT(e,{refreshToken:t}){const n=Ud(e);return n.append("Authorization",TT(t)),n}async function Bd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function vT(e){return Number(e.replace("s","000"))}function TT(e){return`${Nd} ${e}`}/**
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
 */async function ET({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ld(e),s=Ud(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Nd,appId:e.appId,sdkVersion:kd},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Bd(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Fd(h.authToken)}}else throw await $d("Create Installation",u)}/**
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
 */function jd(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function wT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IT=/^[cdef][\w-]{21}$/,$a="";function AT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=bT(e);return IT.test(n)?n:$a}catch{return $a}}function bT(e){return wT(e).substr(0,22)}/**
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
 */function vo(e){return`${e.appName}!${e.appId}`}/**
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
 */const qd=new Map;function Hd(e,t){const n=vo(e);zd(n,t),ST(n,t)}function zd(e,t){const n=qd.get(e);if(n)for(const r of n)r(t)}function ST(e,t){const n=RT();n&&n.postMessage({key:e,fid:t}),CT()}let tr=null;function RT(){return!tr&&"BroadcastChannel"in self&&(tr=new BroadcastChannel("[Firebase] FID Change"),tr.onmessage=e=>{zd(e.data.key,e.data.fid)}),tr}function CT(){qd.size===0&&tr&&(tr.close(),tr=null)}/**
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
 */const PT="firebase-installations-database",VT=1,lr="firebase-installations-store";let da=null;function bl(){return da||(da=Cd(PT,VT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(lr)}}})),da}async function Hi(e,t){const n=vo(e),s=(await bl()).transaction(lr,"readwrite"),i=s.objectStore(lr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Hd(e,t.fid),t}async function Kd(e){const t=vo(e),r=(await bl()).transaction(lr,"readwrite");await r.objectStore(lr).delete(t),await r.done}async function To(e,t){const n=vo(e),s=(await bl()).transaction(lr,"readwrite"),i=s.objectStore(lr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Hd(e,l.fid),l}/**
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
 */async function Sl(e){let t;const n=await To(e.appConfig,r=>{const s=DT(r),i=xT(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===$a?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function DT(e){const t=e||{fid:AT(),registrationStatus:0};return Wd(t)}function xT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ar.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=MT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:kT(e)}:{installationEntry:t}}async function MT(e,t){try{const n=await ET(e,t);return Hi(e.appConfig,n)}catch(n){throw Od(n)&&n.customData.serverCode===409?await Kd(e.appConfig):await Hi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function kT(e){let t=await Gc(e.appConfig);for(;t.registrationStatus===1;)await jd(100),t=await Gc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sl(e);return r||n}return t}function Gc(e){return To(e,t=>{if(!t)throw ar.create("installation-not-found");return Wd(t)})}function Wd(e){return NT(e)?{fid:e.fid,registrationStatus:0}:e}function NT(e){return e.registrationStatus===1&&e.registrationTime+Md<Date.now()}/**
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
 */async function OT({appConfig:e,heartbeatServiceProvider:t},n){const r=LT(e,n),s=yT(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:kd,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Bd(()=>fetch(r,l));if(u.ok){const h=await u.json();return Fd(h)}else throw await $d("Generate Auth Token",u)}function LT(e,{fid:t}){return`${Ld(e)}/${t}/authTokens:generate`}/**
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
 */async function Rl(e,t=!1){let n;const r=await To(e.appConfig,i=>{if(!Gd(i))throw ar.create("not-registered");const a=i.authToken;if(!t&&UT(a))return i;if(a.requestStatus===1)return n=FT(e,t),i;{if(!navigator.onLine)throw ar.create("app-offline");const l=jT(i);return n=$T(e,l),l}});return n?await n:r.authToken}async function FT(e,t){let n=await Qc(e.appConfig);for(;n.authToken.requestStatus===1;)await jd(100),n=await Qc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Rl(e,t):r}function Qc(e){return To(e,t=>{if(!Gd(t))throw ar.create("not-registered");const n=t.authToken;return qT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function $T(e,t){try{const n=await OT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Hi(e.appConfig,r),n}catch(n){if(Od(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Hi(e.appConfig,r)}throw n}}function Gd(e){return e!==void 0&&e.registrationStatus===2}function UT(e){return e.requestStatus===2&&!BT(e)}function BT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+pT}function jT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function qT(e){return e.requestStatus===1&&e.requestTime+Md<Date.now()}/**
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
 */async function HT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Sl(t);return r?r.catch(console.error):Rl(t).catch(console.error),n.fid}/**
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
 */async function zT(e,t=!1){const n=e;return await KT(n),(await Rl(n,t)).token}async function KT(e){const{registrationPromise:t}=await Sl(e);t&&await t}/**
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
 */function WT(e){if(!e||!e.options)throw pa("App Configuration");if(!e.name)throw pa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pa(e){return ar.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="installations",GT="installations-internal",QT=e=>{const t=e.getProvider("app").getImmediate(),n=WT(t),r=yo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YT=e=>{const t=e.getProvider("app").getImmediate(),n=yo(t,Qd).getImmediate();return{getId:()=>HT(n),getToken:s=>zT(n,s)}};function XT(){Dn(new cn(Qd,QT,"PUBLIC")),Dn(new cn(GT,YT,"PRIVATE"))}XT();Ye(xd,Al);Ye(xd,Al,"esm2017");/**
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
 */const zi="analytics",JT="firebase_id",ZT="origin",tE=60*1e3,eE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cl="https://www.googletagmanager.com/gtag/js";/**
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
 */const ye=new wl("@firebase/analytics");/**
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
 */const nE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new _o("analytics","Analytics",nE);/**
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
 */function rE(e){if(!e.startsWith(Cl)){const t=Re.create("invalid-gtag-resource",{gtagURL:e});return ye.warn(t.message),""}return e}function Yd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function sE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function iE(e,t){const n=sE("firebase-js-sdk-policy",{createScriptURL:rE}),r=document.createElement("script"),s=`${Cl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function oE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function aE(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const u=(await Yd(n)).find(h=>h.measurementId===s);u&&await t[u.appId]}}catch(l){ye.error(l)}e("config",s,i)}async function lE(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Yd(n);for(const u of a){const h=l.find(g=>g.measurementId===u),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ye.error(i)}}function uE(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await lE(e,t,n,l,u)}else if(i==="config"){const[l,u]=a;await aE(e,t,n,r,l,u)}else if(i==="consent"){const[l,u]=a;e("consent",l,u)}else if(i==="get"){const[l,u,h]=a;e("get",l,u,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){ye.error(l)}}return s}function cE(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=uE(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function hE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Cl)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=30,dE=1e3;class pE{constructor(t={},n=dE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Xd=new pE;function mE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function gE(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:mE(r)},i=eE.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((t=u.error)===null||t===void 0)&&t.message&&(l=u.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function _E(e,t=Xd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Re.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Re.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new TE;return setTimeout(async()=>{l.abort()},tE),Jd({appId:r,apiKey:s,measurementId:i},a,l,t)}async function Jd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Xd){var i;const{appId:a,measurementId:l}=e;try{await yE(r,t)}catch(u){if(l)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await gE(e);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!vE(h)){if(s.deleteThrottleMetadata(a),l)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?$c(n,s.intervalMillis,fE):$c(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,g),ye.debug(`Calling attemptFetch again in ${d} millis`),Jd(e,g,r,s)}}function yE(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Re.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function vE(e){if(!(e instanceof Bn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class TE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function EE(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(){if(Ad())try{await bd()}catch(e){return ye.warn(Re.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ye.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IE(e,t,n,r,s,i,a){var l;const u=_E(e);u.then(b=>{n[b.measurementId]=b.appId,e.options.measurementId&&b.measurementId!==e.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>ye.error(b)),t.push(u);const h=wE().then(b=>{if(b)return r.getId()}),[d,g]=await Promise.all([u,h]);hE(i)||iE(i,d.measurementId),s("js",new Date);const w=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return w[ZT]="firebase",w.update=!0,g!=null&&(w[JT]=g),s("config",d.measurementId,w),d.measurementId}/**
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
 */class AE{constructor(t){this.app=t}_delete(){return delete ys[this.app.options.appId],Promise.resolve()}}let ys={},Yc=[];const Xc={};let ma="dataLayer",bE="gtag",Jc,Zd,Zc=!1;function SE(){const e=[];if(zy()&&e.push("This is a browser extension environment."),Wy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Re.create("invalid-analytics-context",{errorInfo:t});ye.warn(n.message)}}function RE(e,t,n){SE();const r=e.options.appId;if(!r)throw Re.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(ys[r]!=null)throw Re.create("already-exists",{id:r});if(!Zc){oE(ma);const{wrappedGtag:i,gtagCore:a}=cE(ys,Yc,Xc,ma,bE);Zd=i,Jc=a,Zc=!0}return ys[r]=IE(e,Yc,Xc,t,Jc,ma,n),new AE(e)}function CE(e=tT()){e=je(e);const t=yo(e,zi);return t.isInitialized()?t.getImmediate():PE(e)}function PE(e,t={}){const n=yo(e,zi);if(n.isInitialized()){const s=n.getImmediate();if(ji(t,n.getOptions()))return s;throw Re.create("already-initialized")}return n.initialize({options:t})}function VE(e,t,n,r){e=je(e),EE(Zd,ys[e.app.options.appId],t,n,r).catch(s=>ye.error(s))}const th="@firebase/analytics",eh="0.10.12";function DE(){Dn(new cn(zi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return RE(r,s,n)},"PUBLIC")),Dn(new cn("analytics-internal",e,"PRIVATE")),Ye(th,eh),Ye(th,eh,"esm2017");function e(t){try{const n=t.getProvider(zi).getImmediate();return{logEvent:(r,s,i)=>VE(n,r,s,i)}}catch(n){throw Re.create("interop-component-reg-failed",{reason:n})}}}DE();const xE={apiKey:"AIzaSyBpVkxMb7lpgl_9pw9QOTJkcCtCyPVM2sY",authDomain:"task-timer-app-fb8bd.firebaseapp.com",projectId:"task-timer-app-fb8bd",storageBucket:"task-timer-app-fb8bd.firebasestorage.app",messagingSenderId:"372540581603",appId:"1:372540581603:web:e6bad23cee7858969b87d6",measurementId:"G-YMBYWHPWQ4"},Pl=Pd(xE);CE(Pl);const nh=getAuth(Pl),hi=getFirestore(Pl);var rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rn,tp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,T,I){for(var y=Array(arguments.length-2),z=2;z<arguments.length;z++)y[z-2]=arguments[z];return m.prototype[T].apply(v,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)v[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)v[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],T=E.g[2];var I=E.g[3],y=m+(I^_&(T^I))+v[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=I+(T^m&(_^T))+v[1]+3905402710&4294967295,I=m+(y<<12&4294967295|y>>>20),y=T+(_^I&(m^_))+v[2]+606105819&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(m^T&(I^m))+v[3]+3250441966&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(I^_&(T^I))+v[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=I+(T^m&(_^T))+v[5]+1200080426&4294967295,I=m+(y<<12&4294967295|y>>>20),y=T+(_^I&(m^_))+v[6]+2821735955&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(m^T&(I^m))+v[7]+4249261313&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(I^_&(T^I))+v[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=I+(T^m&(_^T))+v[9]+2336552879&4294967295,I=m+(y<<12&4294967295|y>>>20),y=T+(_^I&(m^_))+v[10]+4294925233&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(m^T&(I^m))+v[11]+2304563134&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(I^_&(T^I))+v[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=I+(T^m&(_^T))+v[13]+4254626195&4294967295,I=m+(y<<12&4294967295|y>>>20),y=T+(_^I&(m^_))+v[14]+2792965006&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(m^T&(I^m))+v[15]+1236535329&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(T^I&(_^T))+v[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(m^_))+v[6]+3225465664&4294967295,I=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(I^m))+v[11]+643717713&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^m&(T^I))+v[0]+3921069994&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(T^I&(_^T))+v[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(m^_))+v[10]+38016083&4294967295,I=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(I^m))+v[15]+3634488961&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^m&(T^I))+v[4]+3889429448&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(T^I&(_^T))+v[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(m^_))+v[14]+3275163606&4294967295,I=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(I^m))+v[3]+4107603335&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^m&(T^I))+v[8]+1163531501&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(T^I&(_^T))+v[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(m^_))+v[2]+4243563512&4294967295,I=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(I^m))+v[7]+1735328473&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^m&(T^I))+v[12]+2368359562&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(_^T^I)+v[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=I+(m^_^T)+v[8]+2272392833&4294967295,I=m+(y<<11&4294967295|y>>>21),y=T+(I^m^_)+v[11]+1839030562&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^m)+v[14]+4259657740&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(_^T^I)+v[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=I+(m^_^T)+v[4]+1272893353&4294967295,I=m+(y<<11&4294967295|y>>>21),y=T+(I^m^_)+v[7]+4139469664&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^m)+v[10]+3200236656&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(_^T^I)+v[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=I+(m^_^T)+v[0]+3936430074&4294967295,I=m+(y<<11&4294967295|y>>>21),y=T+(I^m^_)+v[3]+3572445317&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^m)+v[6]+76029189&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(_^T^I)+v[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=I+(m^_^T)+v[12]+3873151461&4294967295,I=m+(y<<11&4294967295|y>>>21),y=T+(I^m^_)+v[15]+530742520&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^m)+v[2]+3299628645&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(T^(_|~I))+v[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=I+(_^(m|~T))+v[7]+1126891415&4294967295,I=m+(y<<10&4294967295|y>>>22),y=T+(m^(I|~_))+v[14]+2878612391&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~m))+v[5]+4237533241&4294967295,_=T+(y<<21&4294967295|y>>>11),y=m+(T^(_|~I))+v[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=I+(_^(m|~T))+v[3]+2399980690&4294967295,I=m+(y<<10&4294967295|y>>>22),y=T+(m^(I|~_))+v[10]+4293915773&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~m))+v[1]+2240044497&4294967295,_=T+(y<<21&4294967295|y>>>11),y=m+(T^(_|~I))+v[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=I+(_^(m|~T))+v[15]+4264355552&4294967295,I=m+(y<<10&4294967295|y>>>22),y=T+(m^(I|~_))+v[6]+2734768916&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~m))+v[13]+1309151649&4294967295,_=T+(y<<21&4294967295|y>>>11),y=m+(T^(_|~I))+v[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=I+(_^(m|~T))+v[11]+3174756917&4294967295,I=m+(y<<10&4294967295|y>>>22),y=T+(m^(I|~_))+v[2]+718787259&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,v=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=_;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(v[T++]=E.charCodeAt(I++),T==this.blockSize){s(this,v),T=0;break}}else for(;I<m;)if(v[T++]=E[I++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)E[_++]=this.g[m]>>>v&255;return E};function i(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],v=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;v&&I==m||(_[T]=I,v=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return x(h(-E));for(var m=[],_=1,v=0;E>=_;v++)m[v]=E/_|0,_*=4294967296;return new a(m,0)}function d(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return x(d(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),v=g,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),y=parseInt(E.substring(T,T+I),m);8>I?(I=h(Math.pow(m,I)),v=v.j(I).add(h(y))):(v=v.j(_),v=v.add(h(y)))}return v}var g=u(0),w=u(1),b=u(16777216);e=a.prototype,e.m=function(){if(V(this))return-x(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},e.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(V(this))return"-"+x(this).toString(E);for(var m=h(Math.pow(E,6)),_=this,v="";;){var T=Q(_,m).g;_=B(_,T.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,C(_))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},e.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function V(E){return E.h==-1}e.l=function(E){return E=B(this,E),V(E)?-1:C(E)?0:1};function x(E){for(var m=E.g.length,_=[],v=0;v<m;v++)_[v]=~E.g[v];return new a(_,~E.h).add(w)}e.abs=function(){return V(this)?x(this):this},e.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0,T=0;T<=m;T++){var I=v+(this.i(T)&65535)+(E.i(T)&65535),y=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=y>>>16,I&=65535,y&=65535,_[T]=y<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(E,m){return E.add(x(m))}e.j=function(E){if(C(this)||C(E))return g;if(V(this))return V(E)?x(this).j(x(E)):x(x(this).j(E));if(V(E))return x(this.j(x(E)));if(0>this.l(b)&&0>E.l(b))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<E.g.length;T++){var I=this.i(v)>>>16,y=this.i(v)&65535,z=E.i(T)>>>16,q=E.i(T)&65535;_[2*v+2*T]+=y*q,J(_,2*v+2*T),_[2*v+2*T+1]+=I*q,J(_,2*v+2*T+1),_[2*v+2*T+1]+=y*z,J(_,2*v+2*T+1),_[2*v+2*T+2]+=I*z,J(_,2*v+2*T+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function J(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function X(E,m){this.g=E,this.h=m}function Q(E,m){if(C(m))throw Error("division by zero");if(C(E))return new X(g,g);if(V(E))return m=Q(x(E),m),new X(x(m.g),x(m.h));if(V(m))return m=Q(E,x(m)),new X(x(m.g),m.h);if(30<E.g.length){if(V(E)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=m;0>=v.l(E);)_=ht(_),v=ht(v);var T=Z(_,1),I=Z(v,1);for(v=Z(v,2),_=Z(_,2);!C(v);){var y=I.add(v);0>=y.l(E)&&(T=T.add(_),I=y),v=Z(v,1),_=Z(_,1)}return m=B(E,T.j(m)),new X(T,m)}for(T=g;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=h(_),y=I.j(m);V(y)||0<y.l(E);)_-=v,I=h(_),y=I.j(m);C(I)&&(I=w),T=T.add(I),E=B(E,y)}return new X(T,E)}e.A=function(E){return Q(this,E).h},e.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},e.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},e.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function ht(E){for(var m=E.g.length+1,_=[],v=0;v<m;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function Z(E,m){var _=m>>5;m%=32;for(var v=E.g.length-_,T=[],I=0;I<v;I++)T[I]=0<m?E.i(I+_)>>>m|E.i(I+_+1)<<32-m:E.i(I+_);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Rn=a}).apply(typeof rh<"u"?rh:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ep,os,np,Ii,Ua,rp,sp,ip;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,f){return o==Array.prototype||o==Object.prototype||(o[c]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break t;f=f[R]}o=o[o.length-1],p=f[o],c=c(p),c!=p&&c!=null&&t(f,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var P=f++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,f){return o.call.apply(o.bind,arguments)}function g(o,c,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function w(o,c,f){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,w.apply(null,arguments)}function b(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,c){function f(){}f.prototype=c.prototype,o.aa=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var W=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)W[Ct-2]=arguments[Ct];return c.prototype[R].apply(p,W)}}function V(o){const c=o.length;if(0<c){const f=Array(c);for(let p=0;p<c;p++)f[p]=o[p];return f}return[]}function x(o,c){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let W=0;W<P;W++)o[R+W]=p[W]}else o.push(p)}}class B{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function J(o){return/^[\s\xa0]*$/.test(o)}function X(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var ht=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function Z(o,c,f){for(const p in o)c.call(f,o[p],p,o)}function E(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function m(o){const c={};for(const f in o)c[f]=o[f];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let P=0;P<_.length;P++)f=_[P],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function T(o){var c=1;o=o.split(":");const f=[];for(;0<c&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function I(o){l.setTimeout(()=>{throw o},0)}function y(){var o=nt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class z{constructor(){this.h=this.g=null}add(c,f){const p=q.get();p.set(c,f),this.h?this.h.next=p:this.g=p,this.h=p}}var q=new B(()=>new U,o=>o.reset());class U{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,k=!1,nt=new z,lt=()=>{const o=l.Promise.resolve(void 0);j=()=>{o.then(vt)}};var vt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(f){I(f)}var c=q;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}k=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return o}();function Ut(o,c){if(yt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(ht){t:{try{Q(c.nodeName);var R=!0;break t}catch{}R=!1}R||(c=null)}}else f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:de[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ut.aa.h.call(this)}}C(Ut,yt);var de={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),Oe=0;function Pe(o,c,f,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!p,this.ha=R,this.key=++Oe,this.da=this.fa=!1}function xt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function pe(o){this.src=o,this.g={},this.h=0}pe.prototype.add=function(o,c,f,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var W=S(o,c,p,R);return-1<W?(c=o[W],f||(c.fa=!1)):(c=new Pe(c,this.src,P,!!p,R),c.fa=f,o.push(c)),c};function A(o,c){var f=c.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(xt(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function S(o,c,f,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==c&&P.capture==!!f&&P.ha==p)return R}return-1}var D="closure_lm_"+(1e6*Math.random()|0),L={};function N(o,c,f,p,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)N(o,c[P],f,p,R);return null}return f=ut(f),o&&o[Wt]?o.K(c,f,h(p)?!!p.capture:!1,R):F(o,c,f,!1,p,R)}function F(o,c,f,p,R,P){if(!c)throw Error("Invalid event type");var W=h(R)?!!R.capture:!!R,Ct=Y(o);if(Ct||(o[D]=Ct=new pe(o)),f=Ct.add(c,f,p,W,P),f.proxy)return f;if(p=G(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)$t||(R=W),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent($(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function o(f){return c.call(o.src,o.listener,f)}const c=it;return o}function K(o,c,f,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)K(o,c[P],f,p,R);else p=h(p)?!!p.capture:!!p,f=ut(f),o&&o[Wt]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],f=S(P,f,p,R),-1<f&&(xt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Y(o))&&(c=o.g[c.toString()],o=-1,c&&(o=S(c,f,p,R)),(f=-1<o?c[o]:null)&&H(f))}function H(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Wt])A(c.i,o);else{var f=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(f,p,o.capture):c.detachEvent?c.detachEvent($(f),p):c.addListener&&c.removeListener&&c.removeListener(p),(f=Y(c))?(A(f,o),f.h==0&&(f.src=null,c[D]=null)):xt(o)}}}function $(o){return o in L?L[o]:L[o]="on"+o}function it(o,c){if(o.da)o=!0;else{c=new Ut(c,this);var f=o.listener,p=o.ha||o.src;o.fa&&H(o),o=f.call(p,c)}return o}function Y(o){return o=o[D],o instanceof pe?o:null}var et="__closure_events_fn_"+(1e9*Math.random()>>>0);function ut(o){return typeof o=="function"?o:(o[et]||(o[et]=function(c){return o.handleEvent(c)}),o[et])}function ot(){mt.call(this),this.i=new pe(this),this.M=this,this.F=null}C(ot,mt),ot.prototype[Wt]=!0,ot.prototype.removeEventListener=function(o,c,f,p){K(this,o,c,f,p)};function pt(o,c){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new yt(c,o);else if(c instanceof yt)c.target=c.target||o;else{var R=c;c=new yt(p,o),v(c,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var W=c.g=f[P];R=Et(W,p,!0,c)&&R}if(W=c.g=o,R=Et(W,p,!0,c)&&R,R=Et(W,p,!1,c)&&R,f)for(P=0;P<f.length;P++)W=c.g=f[P],R=Et(W,p,!1,c)&&R}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var f=o.g[c],p=0;p<f.length;p++)xt(f[p]);delete o.g[c],o.h--}}this.F=null},ot.prototype.K=function(o,c,f,p){return this.i.add(String(o),c,!1,f,p)},ot.prototype.L=function(o,c,f,p){return this.i.add(String(o),c,!0,f,p)};function Et(o,c,f,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var W=c[P];if(W&&!W.da&&W.capture==f){var Ct=W.listener,Yt=W.ha||W.src;W.fa&&A(o.i,W),R=Ct.call(Yt,p)!==!1&&R}}return R&&!p.defaultPrevented}function te(o,c,f){if(typeof o=="function")f&&(o=w(o,f));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Gt(o){o.g=te(()=>{o.g=null,o.i&&(o.i=!1,Gt(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ve extends mt{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(o){mt.call(this),this.h=o,this.g={}}C(ee,mt);var mn=[];function Hr(o){Z(o.g,function(c,f){this.g.hasOwnProperty(f)&&H(c)},o),o.g={}}ee.prototype.N=function(){ee.aa.N.call(this),Hr(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qt=l.JSON.stringify,De=l.JSON.parse,Hs=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Lo(){}Lo.prototype.h=null;function cu(o){return o.h||(o.h=o.i())}function hu(){}var zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fo(){yt.call(this,"d")}C(Fo,yt);function $o(){yt.call(this,"c")}C($o,yt);var Hn={},fu=null;function zs(){return fu=fu||new ot}Hn.La="serverreachability";function du(o){yt.call(this,Hn.La,o)}C(du,yt);function Kr(o){const c=zs();pt(c,new du(c))}Hn.STAT_EVENT="statevent";function pu(o,c){yt.call(this,Hn.STAT_EVENT,o),this.stat=c}C(pu,yt);function ce(o){const c=zs();pt(c,new pu(c,o))}Hn.Ma="timingevent";function mu(o,c){yt.call(this,Hn.Ma,o),this.size=c}C(mu,yt);function Wr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function Rm(o,c,f,p,R,P){o.info(function(){if(o.g)if(P)for(var W="",Ct=P.split("&"),Yt=0;Yt<Ct.length;Yt++){var At=Ct[Yt].split("=");if(1<At.length){var ne=At[0];At=At[1];var re=ne.split("_");W=2<=re.length&&re[1]=="type"?W+(ne+"="+At+"&"):W+(ne+"=redacted&")}}else W=null;else W=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+f+`
`+W})}function Cm(o,c,f,p,R,P,W){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+f+`
`+P+" "+W})}function dr(o,c,f,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Vm(o,f)+(p?" "+p:"")})}function Pm(o,c){o.info(function(){return"TIMEOUT: "+c})}Gr.prototype.info=function(){};function Vm(o,c){if(!o.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var W=1;W<R.length;W++)R[W]=""}}}}return Qt(f)}catch{return c}}var Ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uo;function Ws(){}C(Ws,Lo),Ws.prototype.g=function(){return new XMLHttpRequest},Ws.prototype.i=function(){return{}},Uo=new Ws;function gn(o,c,f,p){this.j=o,this.i=c,this.l=f,this.R=p||1,this.U=new ee(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var yu={},Bo={};function jo(o,c,f){o.L=1,o.v=Xs(nn(c)),o.m=f,o.P=!0,vu(o,null)}function vu(o,c){o.F=Date.now(),Gs(o),o.A=nn(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Mu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new _u,o.g=Xu(o.j,f?c:null,!o.m),0<o.O&&(o.M=new Ve(w(o.Y,o,o.g),o.O)),c=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(mn[0]=R.toString()),R=mn);for(var P=0;P<R.length;P++){var W=N(f,R[P],p||c.handleEvent,!1,c.h||c);if(!W)break;c.g[W.key]=W}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Kr(),Rm(o.i,o.u,o.A,o.l,o.R,o.m)}gn.prototype.ca=function(o){o=o.target;const c=this.M;c&&rn(o)==3?c.j():this.Y(o)},gn.prototype.Y=function(o){try{if(o==this.g)t:{const re=rn(this.g);var c=this.g.Ba();const gr=this.g.Z();if(!(3>re)&&(re!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||re!=4||c==7||(c==8||0>=gr?Kr(3):Kr(2)),qo(this);var f=this.g.Z();this.X=f;e:if(Tu(this)){var p=Uu(this.g);o="";var R=p.length,P=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),Qr(this);var W="";break e}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Cm(this.i,this.u,this.A,this.l,this.R,re,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,Yt=this.g;if((Ct=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ct)){var At=Ct;break e}}At=null}if(f=At)dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,f);else{this.o=!1,this.s=3,ce(12),zn(this),Qr(this);break t}}if(this.P){f=!0;let Le;for(;!this.J&&this.C<W.length;)if(Le=Dm(this,W),Le==Bo){re==4&&(this.s=4,ce(14),f=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==yu){this.s=4,ce(15),dr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else dr(this.i,this.l,Le,null),Ho(this,Le);if(Tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||W.length!=0||this.h.h||(this.s=1,ce(16),f=!1),this.o=this.o&&f,!f)dr(this.i,this.l,W,"[Invalid Chunked Response]"),zn(this),Qr(this);else if(0<W.length&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.ba&&!ne.M&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Yo(ne),ne.M=!0,ce(11))}}else dr(this.i,this.l,W,null),Ho(this,W);re==4&&zn(this),this.o&&!this.J&&(re==4?Wu(this.j,this):(this.o=!1,Gs(this)))}else Gm(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),zn(this),Qr(this)}}}catch{}finally{}};function Tu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Dm(o,c){var f=o.C,p=c.indexOf(`
`,f);return p==-1?Bo:(f=Number(c.substring(f,p)),isNaN(f)?yu:(p+=1,p+f>c.length?Bo:(c=c.slice(p,p+f),o.C=p+f,c)))}gn.prototype.cancel=function(){this.J=!0,zn(this)};function Gs(o){o.S=Date.now()+o.I,Eu(o,o.I)}function Eu(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wr(w(o.ba,o),c)}function qo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}gn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Pm(this.i,this.A),this.L!=2&&(Kr(),ce(17)),zn(this),this.s=2,Qr(this)):Eu(this,this.S-o)};function Qr(o){o.j.G==0||o.J||Wu(o.j,o)}function zn(o){qo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Hr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ho(o,c){try{var f=o.j;if(f.G!=0&&(f.g==o||zo(f.h,o))){if(!o.K&&zo(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ri(f),ei(f);else break t;Qo(f),ce(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Wr(w(f.Za,f),6e3));if(1>=Au(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Wn(f,11)}else if((o.K||f.g==o)&&ri(f),!J(c))for(R=f.Da.g.parse(c),c=0;c<R.length;c++){let At=R[c];if(f.T=At[0],At=At[1],f.G==2)if(At[0]=="c"){f.K=At[1],f.ia=At[2];const ne=At[3];ne!=null&&(f.la=ne,f.j.info("VER="+f.la));const re=At[4];re!=null&&(f.Aa=re,f.j.info("SVER="+f.Aa));const gr=At[5];gr!=null&&typeof gr=="number"&&0<gr&&(p=1.5*gr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Le=o.g;if(Le){const ii=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var P=p.h;P.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ko(P,P.h),P.h=null))}if(p.D){const Xo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(p.ya=Xo,Mt(p.I,p.D,Xo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var W=o;if(p.qa=Yu(p,p.J?p.ia:null,p.W),W.K){bu(p.h,W);var Ct=W,Yt=p.L;Yt&&(Ct.I=Yt),Ct.B&&(qo(Ct),Gs(Ct)),p.g=W}else zu(p);0<f.i.length&&ni(f)}else At[0]!="stop"&&At[0]!="close"||Wn(f,7);else f.G==3&&(At[0]=="stop"||At[0]=="close"?At[0]=="stop"?Wn(f,7):Go(f):At[0]!="noop"&&f.l&&f.l.ta(At),f.v=0)}}Kr(4)}catch{}}var xm=class{constructor(o,c){this.g=o,this.map=c}};function wu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Au(o){return o.h?1:o.g?o.g.size:0}function zo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ko(o,c){o.g?o.g.add(c):o.h=c}function bu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}wu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Su(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.D);return c}return V(o.i)}function Mm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],f=o.length,p=0;p<f;p++)c.push(o[p]);return c}c=[],f=0;for(p in o)c[f++]=o[p];return c}function km(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var f=0;f<o;f++)c.push(f);return c}c=[],f=0;for(const p in o)c[f++]=p;return c}}}function Ru(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var f=km(o),p=Mm(o),R=p.length,P=0;P<R;P++)c.call(void 0,p[P],f&&f[P],o)}var Cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nm(o,c){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var P=o[f].substring(0,p);R=o[f].substring(p+1)}else P=o[f];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Kn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Kn){this.h=o.h,Qs(this,o.j),this.o=o.o,this.g=o.g,Ys(this,o.s),this.l=o.l;var c=o.i,f=new Jr;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Pu(this,f),this.m=o.m}else o&&(c=String(o).match(Cu))?(this.h=!1,Qs(this,c[1]||"",!0),this.o=Yr(c[2]||""),this.g=Yr(c[3]||"",!0),Ys(this,c[4]),this.l=Yr(c[5]||"",!0),Pu(this,c[6]||"",!0),this.m=Yr(c[7]||"")):(this.h=!1,this.i=new Jr(null,this.h))}Kn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Xr(c,Vu,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Xr(c,Vu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Xr(f,f.charAt(0)=="/"?Fm:Lm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Xr(f,Um)),o.join("")};function nn(o){return new Kn(o)}function Qs(o,c,f){o.j=f?Yr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ys(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Pu(o,c,f){c instanceof Jr?(o.i=c,Bm(o.i,o.h)):(f||(c=Xr(c,$m)),o.i=new Jr(c,o.h))}function Mt(o,c,f){o.i.set(c,f)}function Xs(o){return Mt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xr(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,Om),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Om(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Vu=/[#\/\?@]/g,Lm=/[#\?:]/g,Fm=/[#\?]/g,$m=/[#\?@]/g,Um=/#/g;function Jr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function _n(o){o.g||(o.g=new Map,o.h=0,o.i&&Nm(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}e=Jr.prototype,e.add=function(o,c){_n(this),this.i=null,o=pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function Du(o,c){_n(o),c=pr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function xu(o,c){return _n(o),c=pr(o,c),o.g.has(c)}e.forEach=function(o,c){_n(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(c,R,p,this)},this)},this)},e.na=function(){_n(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let p=0;p<c.length;p++){const R=o[p];for(let P=0;P<R.length;P++)f.push(c[p])}return f},e.V=function(o){_n(this);let c=[];if(typeof o=="string")xu(this,o)&&(c=c.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)c=c.concat(o[f])}return c},e.set=function(o,c){return _n(this),this.i=null,o=pr(this,o),xu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Mu(o,c,f){Du(o,c),0<f.length&&(o.i=null,o.g.set(pr(o,c),V(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var p=c[f];const P=encodeURIComponent(String(p)),W=this.V(p);for(p=0;p<W.length;p++){var R=P;W[p]!==""&&(R+="="+encodeURIComponent(String(W[p]))),o.push(R)}}return this.i=o.join("&")};function pr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Bm(o,c){c&&!o.j&&(_n(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(Du(this,p),Mu(this,R,f))},o)),o.j=c}function jm(o,c){const f=new Gr;if(l.Image){const p=new Image;p.onload=b(yn,f,"TestLoadImage: loaded",!0,c,p),p.onerror=b(yn,f,"TestLoadImage: error",!1,c,p),p.onabort=b(yn,f,"TestLoadImage: abort",!1,c,p),p.ontimeout=b(yn,f,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function qm(o,c){const f=new Gr,p=new AbortController,R=setTimeout(()=>{p.abort(),yn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?yn(f,"TestPingServer: ok",!0,c):yn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),yn(f,"TestPingServer: error",!1,c)})}function yn(o,c,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function Hm(){this.g=new Hs}function zm(o,c,f){const p=f||"";try{Ru(o,function(R,P){let W=R;h(R)&&(W=Qt(R)),c.push(p+P+"="+encodeURIComponent(W))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Js(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Js,Lo),Js.prototype.g=function(){return new Zs(this.l,this.j)},Js.prototype.i=function(o){return function(){return o}}({});function Zs(o,c){ot.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zs,ot),e=Zs.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ts(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ku(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ku(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Zr(this):ts(this),this.readyState==3&&ku(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Zr(this))},e.Qa=function(o){this.g&&(this.response=o,Zr(this))},e.ga=function(){this.g&&Zr(this)};function Zr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ts(o)}e.setRequestHeader=function(o,c){this.u.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nu(o){let c="";return Z(o,function(f,p){c+=p,c+=":",c+=f,c+=`\r
`}),c}function Wo(o,c,f){t:{for(p in f){var p=!1;break t}p=!0}p||(f=Nu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Mt(o,c,f))}function Ot(o){ot.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ot,ot);var Km=/^https?$/i,Wm=["POST","PUT"];e=Ot.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,c,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uo.g(),this.v=this.o?cu(this.o):cu(Uo),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Ou(this,P);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())f.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Wm,c,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,W]of f)this.g.setRequestHeader(P,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$u(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ou(this,P)}};function Ou(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Lu(o),ti(o)}function Lu(o){o.A||(o.A=!0,pt(o,"complete"),pt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,pt(this,"complete"),pt(this,"abort"),ti(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),Ot.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Fu(this):this.bb())},e.bb=function(){Fu(this)};function Fu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rn(o)!=4||o.Z()!=2)){if(o.u&&rn(o)==4)te(o.Ea,0,o);else if(pt(o,"readystatechange"),rn(o)==4){o.h=!1;try{const W=o.Z();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var p;if(p=W===0){var R=String(o.D).match(Cu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Km.test(R?R.toLowerCase():"")}f=p}if(f)pt(o,"complete"),pt(o,"success");else{o.m=6;try{var P=2<rn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Lu(o)}}finally{ti(o)}}}}function ti(o,c){if(o.g){$u(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||pt(o,"ready");try{f.onreadystatechange=p}catch{}}}function $u(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function rn(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),De(c)}};function Uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Gm(o){const c={};o=(o.g&&2<=rn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(J(o[p]))continue;var f=T(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=c[R]||[];c[R]=P,P.push(f)}E(c,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function Bu(o){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,o),this.cb=es("retryDelaySeedMs",1e4,o),this.Wa=es("forwardChannelMaxRetries",2,o),this.wa=es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new wu(o&&o.concurrentRequestLimit),this.Da=new Hm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Bu.prototype,e.la=8,e.G=1,e.connect=function(o,c,f,p){ce(0),this.W=o,this.H=c||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Yu(this,null,this.W),ni(this)};function Go(o){if(ju(o),o.G==3){var c=o.U++,f=nn(o.I);if(Mt(f,"SID",o.K),Mt(f,"RID",c),Mt(f,"TYPE","terminate"),ns(o,f),c=new gn(o,o.j,c),c.L=2,c.v=Xs(nn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Xu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Gs(c)}Qu(o)}function ei(o){o.g&&(Yo(o),o.g.cancel(),o.g=null)}function ju(o){ei(o),o.u&&(l.clearTimeout(o.u),o.u=null),ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ni(o){if(!Iu(o.h)&&!o.s){o.s=!0;var c=o.Ga;j||lt(),k||(j(),k=!0),nt.add(c,o),o.B=0}}function Qm(o,c){return Au(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wr(w(o.Ga,o,c),Gu(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new gn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),v(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=Hu(this,R,c),f=nn(this.I),Mt(f,"RID",o),Mt(f,"CVER",22),this.D&&Mt(f,"X-HTTP-Session-Id",this.D),ns(this,f),P&&(this.O?c="headers="+encodeURIComponent(String(Nu(P)))+"&"+c:this.m&&Wo(f,this.m,P)),Ko(this.h,R),this.Ua&&Mt(f,"TYPE","init"),this.P?(Mt(f,"$req",c),Mt(f,"SID","null"),R.T=!0,jo(R,f,null)):jo(R,f,c),this.G=2}}else this.G==3&&(o?qu(this,o):this.i.length==0||Iu(this.h)||qu(this))};function qu(o,c){var f;c?f=c.l:f=o.U++;const p=nn(o.I);Mt(p,"SID",o.K),Mt(p,"RID",f),Mt(p,"AID",o.T),ns(o,p),o.m&&o.o&&Wo(p,o.m,o.o),f=new gn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Hu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ko(o.h,f),jo(f,p,c)}function ns(o,c){o.H&&Z(o.H,function(f,p){Mt(c,p,f)}),o.l&&Ru({},function(f,p){Mt(c,p,f)})}function Hu(o,c,f){f=Math.min(o.i.length,f);var p=o.l?w(o.l.Na,o.l,o):null;t:{var R=o.i;let P=-1;for(;;){const W=["count="+f];P==-1?0<f?(P=R[0].g,W.push("ofs="+P)):P=0:W.push("ofs="+P);let Ct=!0;for(let Yt=0;Yt<f;Yt++){let At=R[Yt].g;const ne=R[Yt].map;if(At-=P,0>At)P=Math.max(0,R[Yt].g-100),Ct=!1;else try{zm(ne,W,"req"+At+"_")}catch{p&&p(ne)}}if(Ct){p=W.join("&");break t}}}return o=o.i.splice(0,f),c.D=o,p}function zu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;j||lt(),k||(j(),k=!0),nt.add(c,o),o.v=0}}function Qo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wr(w(o.Fa,o),Gu(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wr(w(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),ei(this),Ku(this))};function Yo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ku(o){o.g=new gn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=nn(o.qa);Mt(c,"RID","rpc"),Mt(c,"SID",o.K),Mt(c,"AID",o.T),Mt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Mt(c,"TO",o.ja),Mt(c,"TYPE","xmlhttp"),ns(o,c),o.m&&o.o&&Wo(c,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Xs(nn(c)),f.m=null,f.P=!0,vu(f,o)}e.Za=function(){this.C!=null&&(this.C=null,ei(this),Qo(this),ce(19))};function ri(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Wu(o,c){var f=null;if(o.g==c){ri(o),Yo(o),o.g=null;var p=2}else if(zo(o.h,c))f=c.D,bu(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=zs(),pt(p,new mu(p,f)),ni(o)}else zu(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&Qm(o,c)||p==2&&Qo(o)))switch(f&&0<f.length&&(c=o.h,c.i=c.i.concat(f)),R){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function Gu(o,c){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*c}function Wn(o,c){if(o.j.info("Error code "+c),c==2){var f=w(o.fb,o),p=o.Xa;const R=!p;p=new Kn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qs(p,"https"),Xs(p),R?jm(p.toString(),f):qm(p.toString(),f)}else ce(2);o.G=0,o.l&&o.l.sa(c),Qu(o),ju(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Qu(o){if(o.G=0,o.ka=[],o.l){const c=Su(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ka,c),x(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Yu(o,c,f){var p=f instanceof Kn?nn(f):new Kn(f);if(p.g!="")c&&(p.g=c+"."+p.g),Ys(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new Kn(null);p&&Qs(P,p),c&&(P.g=c),R&&Ys(P,R),f&&(P.l=f),p=P}return f=o.D,c=o.ya,f&&c&&Mt(p,f,c),Mt(p,"VER",o.la),ns(o,p),p}function Xu(o,c,f){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Ot(new Js({eb:f})):new Ot(o.pa),c.Ha(o.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ju(){}e=Ju.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function si(){}si.prototype.g=function(o,c){return new ve(o,c)};function ve(o,c){ot.call(this),this.g=new Bu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!J(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!J(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new mr(this)}C(ve,ot),ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ve.prototype.close=function(){Go(this.g)},ve.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qt(o),o=f);c.i.push(new xm(c.Ya++,o)),c.G==3&&ni(c)},ve.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,ve.aa.N.call(this)};function Zu(o){Fo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const f in c){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Zu,Fo);function tc(){$o.call(this),this.status=1}C(tc,$o);function mr(o){this.g=o}C(mr,Ju),mr.prototype.ua=function(){pt(this.g,"a")},mr.prototype.ta=function(o){pt(this.g,new Zu(o))},mr.prototype.sa=function(o){pt(this.g,new tc)},mr.prototype.ra=function(){pt(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,ve.prototype.send=ve.prototype.o,ve.prototype.open=ve.prototype.m,ve.prototype.close=ve.prototype.close,ip=function(){return new si},sp=function(){return zs()},rp=Hn,Ua={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,Ii=Ks,gu.COMPLETE="complete",np=gu,hu.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",ot.prototype.listen=ot.prototype.K,os=hu,Ot.prototype.listenOnce=Ot.prototype.L,Ot.prototype.getLastError=Ot.prototype.Ka,Ot.prototype.getLastErrorCode=Ot.prototype.Ba,Ot.prototype.getStatus=Ot.prototype.Z,Ot.prototype.getResponseJson=Ot.prototype.Oa,Ot.prototype.getResponseText=Ot.prototype.oa,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Ha,ep=Ot}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const sh="@firebase/firestore",ih="4.7.10";/**
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
 */class me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let Ur="11.5.0";/**
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
 */const ur=new wl("@firebase/firestore");function Er(){return ur.logLevel}function tt(e,...t){if(ur.logLevel<=It.DEBUG){const n=t.map(Vl);ur.debug(`Firestore (${Ur}): ${e}`,...n)}}function fn(e,...t){if(ur.logLevel<=It.ERROR){const n=t.map(Vl);ur.error(`Firestore (${Ur}): ${e}`,...n)}}function Vs(e,...t){if(ur.logLevel<=It.WARN){const n=t.map(Vl);ur.warn(`Firestore (${Ur}): ${e}`,...n)}}function Vl(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function ct(e="Unexpected state"){const t=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: `+e;throw fn(t),new Error(t)}function Rt(e,t){e||ct()}function dt(e,t){return e}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends Bn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ME{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class NE{constructor(t){this.t=t,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Rt(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string"),new ME(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Rt(t===null||typeof t=="string"),new me(t)}}class OE{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class LE{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new OE(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FE{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Yv(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){Rt(this.o===void 0);const r=i=>{i.error!=null&&tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,tt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new oh(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Rt(typeof n.token=="string"),this.R=n.token,new oh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function op(){return new TextEncoder}/**
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
 */class ap{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$E(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function _t(e,t){return e<t?-1:e>t?1:0}function Ba(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return _t(r,s);{const i=op(),a=UE(i.encode(ah(e,n)),i.encode(ah(t,n)));return a!==0?a:_t(r,s)}}n+=r>65535?2:1}return _t(e.length,t.length)}function ah(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function UE(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return _t(e[n],t[n]);return _t(e.length,t.length)}function Mr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const lh=-62135596800,uh=1e6;class qt{static now(){return qt.fromMillis(Date.now())}static fromDate(t){return qt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*uh);return new qt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<lh)throw new rt(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uh}_compareTo(t){return this.seconds===t.seconds?_t(this.nanoseconds,t.nanoseconds):_t(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-lh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ft{static fromTimestamp(t){return new ft(t)}static min(){return new ft(new qt(0,0))}static max(){return new ft(new qt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ch="__name__";class Ke{constructor(t,n,r){n===void 0?n=0:n>t.length&&ct(),r===void 0?r=t.length-n:r>t.length-n&&ct(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Ke.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return _t(t.length,n.length)}static compareSegments(t,n){const r=Ke.isNumericId(t),s=Ke.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ke.extractNumericId(t).compare(Ke.extractNumericId(n)):Ba(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Rn.fromString(t.substring(4,t.length-2))}}class kt extends Ke{construct(t,n,r){return new kt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new rt(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new kt(n)}static emptyPath(){return new kt([])}}const BE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends Ke{construct(t,n,r){return new Jt(t,n,r)}static isValidIdentifier(t){return BE.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ch}static keyField(){return new Jt([ch])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new rt(O.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new rt(O.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new rt(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new rt(O.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Jt(n)}static emptyPath(){return new Jt([])}}/**
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
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(kt.fromString(t))}static fromName(t){return new st(kt.fromString(t).popFirst(5))}static empty(){return new st(kt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&kt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return kt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new kt(t.slice()))}}/**
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
 */const Ds=-1;function jE(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ft.fromTimestamp(r===1e9?new qt(n+1,0):new qt(n,r));return new xn(s,st.empty(),t)}function qE(e){return new xn(e.readTime,e.key,Ds)}class xn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(ft.min(),st.empty(),Ds)}static max(){return new xn(ft.max(),st.empty(),Ds)}}function HE(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=st.comparator(e.documentKey,t.documentKey),n!==0?n:_t(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Br(e){if(e.code!==O.FAILED_PRECONDITION||e.message!==zE)throw e;tt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ct(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):M.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):M.reject(n)}static resolve(t){return new M((n,r)=>{n(t)})}static reject(t){return new M((n,r)=>{r(t)})}static waitFor(t){return new M((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(t){let n=M.resolve(!1);for(const r of t)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new M((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new M((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function WE(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Eo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Eo.ae=-1;/**
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
 */const Dl=-1;function wo(e){return e==null}function Ki(e){return e===0&&1/e==-1/0}function GE(e){return typeof e=="number"&&Number.isInteger(e)&&!Ki(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const lp="";function QE(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=hh(t)),t=YE(e.get(n),t);return hh(t)}function YE(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case lp:n+="";break;default:n+=i}}return n}function hh(e){return e+lp+""}/**
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
 */function fh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function jn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function up(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Nt{constructor(t,n){this.comparator=t,this.root=n||Xt.EMPTY}insert(t,n){return new Nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(t){return new Nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new di(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new di(this.root,t,this.comparator,!1)}getReverseIterator(){return new di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new di(this.root,t,this.comparator,!0)}}class di{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Xt.RED,this.left=s??Xt.EMPTY,this.right=i??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Xt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ct();const t=this.left.check();if(t!==this.right.check())throw ct();return t+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ct()}get value(){throw ct()}get color(){throw ct()}get left(){throw ct()}get right(){throw ct()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Xt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ht{constructor(t){this.comparator=t,this.data=new Nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new dh(this.data.getIterator())}getIteratorFrom(t){return new dh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ht)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ht(this.comparator);return n.data=t,n}}class dh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.fields=t,t.sort(Jt.comparator)}static empty(){return new Se([])}unionWith(t){let n=new Ht(Jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Se(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Mr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cp("Invalid base64 string: "+i):i}}(t);return new Zt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Zt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _t(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const XE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(e){if(Rt(!!e),typeof e=="string"){let t=0;const n=XE.exec(e);if(Rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Lt(e.seconds),nanos:Lt(e.nanos)}}function Lt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function kn(e){return typeof e=="string"?Zt.fromBase64String(e):Zt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="server_timestamp",fp="__type__",dp="__previous_value__",pp="__local_write_time__";function xl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[fp])===null||n===void 0?void 0:n.stringValue)===hp}function Io(e){const t=e.mapValue.fields[dp];return xl(t)?Io(t):t}function xs(e){const t=Mn(e.mapValue.fields[pp].timestampValue);return new qt(t.seconds,t.nanos)}/**
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
 */class JE{constructor(t,n,r,s,i,a,l,u,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}const ja="(default)";class Ms{constructor(t,n){this.projectId=t,this.database=n||ja}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===ja}isEqual(t){return t instanceof Ms&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="__type__",ZE="__max__",pi={mapValue:{}},gp="__vector__",Wi="value";function Nn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xl(e)?4:ew(e)?9007199254740991:tw(e)?10:11:ct()}function tn(e,t){if(e===t)return!0;const n=Nn(e);if(n!==Nn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Mn(s.timestampValue),l=Mn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return kn(s.bytesValue).isEqual(kn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Lt(s.geoPointValue.latitude)===Lt(i.geoPointValue.latitude)&&Lt(s.geoPointValue.longitude)===Lt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Lt(s.integerValue)===Lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Lt(s.doubleValue),l=Lt(i.doubleValue);return a===l?Ki(a)===Ki(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Mr(e.arrayValue.values||[],t.arrayValue.values||[],tn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fh(a)!==fh(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!tn(a[u],l[u])))return!1;return!0}(e,t);default:return ct()}}function ks(e,t){return(e.values||[]).find(n=>tn(n,t))!==void 0}function kr(e,t){if(e===t)return 0;const n=Nn(e),r=Nn(t);if(n!==r)return _t(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _t(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Lt(i.integerValue||i.doubleValue),u=Lt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return ph(e.timestampValue,t.timestampValue);case 4:return ph(xs(e),xs(t));case 5:return Ba(e.stringValue,t.stringValue);case 6:return function(i,a){const l=kn(i),u=kn(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=_t(l[h],u[h]);if(d!==0)return d}return _t(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=_t(Lt(i.latitude),Lt(a.latitude));return l!==0?l:_t(Lt(i.longitude),Lt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return mh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,u,h,d;const g=i.fields||{},w=a.fields||{},b=(l=g[Wi])===null||l===void 0?void 0:l.arrayValue,C=(u=w[Wi])===null||u===void 0?void 0:u.arrayValue,V=_t(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:mh(b,C)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===pi.mapValue&&a===pi.mapValue)return 0;if(i===pi.mapValue)return 1;if(a===pi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const w=Ba(u[g],d[g]);if(w!==0)return w;const b=kr(l[u[g]],h[d[g]]);if(b!==0)return b}return _t(u.length,d.length)}(e.mapValue,t.mapValue);default:throw ct()}}function ph(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _t(e,t);const n=Mn(e),r=Mn(t),s=_t(n.seconds,r.seconds);return s!==0?s:_t(n.nanos,r.nanos)}function mh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=kr(n[s],r[s]);if(i)return i}return _t(n.length,r.length)}function Nr(e){return qa(e)}function qa(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Mn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return kn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return st.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qa(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${qa(n.fields[a])}`;return s+"}"}(e.mapValue):ct()}function Ai(e){switch(Nn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Io(e);return t?16+Ai(t):16;case 5:return 2*e.stringValue.length;case 6:return kn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ai(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return jn(r.fields,(i,a)=>{s+=i.length+Ai(a)}),s}(e.mapValue);default:throw ct()}}function Ha(e){return!!e&&"integerValue"in e}function Ml(e){return!!e&&"arrayValue"in e}function gh(e){return!!e&&"nullValue"in e}function _h(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bi(e){return!!e&&"mapValue"in e}function tw(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[mp])===null||n===void 0?void 0:n.stringValue)===gp}function vs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return jn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=vs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ew(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ZE}/**
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
 */class _e{constructor(t){this.value=t}static empty(){return new _e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!bi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=vs(n)}setAll(t){let n=Jt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=vs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return tn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){jn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new _e(vs(this.value))}}function _p(e){const t=[];return jn(e.fields,(n,r)=>{const s=new Jt([n]);if(bi(r)){const i=_p(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Se(t)}/**
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
 */class ae{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ae(t,0,ft.min(),ft.min(),ft.min(),_e.empty(),0)}static newFoundDocument(t,n,r,s){return new ae(t,1,n,ft.min(),r,s,0)}static newNoDocument(t,n){return new ae(t,2,n,ft.min(),ft.min(),_e.empty(),0)}static newUnknownDocument(t,n){return new ae(t,3,n,ft.min(),ft.min(),_e.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ft.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ft.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gi{constructor(t,n){this.position=t,this.inclusive=n}}function yh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=st.comparator(st.fromName(a.referenceValue),n.key):r=kr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Qi{constructor(t,n="asc"){this.field=t,this.dir=n}}function nw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class yp{}class jt extends yp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new sw(t,n,r):n==="array-contains"?new aw(t,r):n==="in"?new lw(t,r):n==="not-in"?new uw(t,r):n==="array-contains-any"?new cw(t,r):new jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new iw(t,r):new ow(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kr(n,this.value)):n!==null&&Nn(this.value)===Nn(n)&&this.matchesComparison(kr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ct()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends yp{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new en(t,n)}matches(t){return vp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vp(e){return e.op==="and"}function Tp(e){return rw(e)&&vp(e)}function rw(e){for(const t of e.filters)if(t instanceof en)return!1;return!0}function za(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+Nr(e.value);if(Tp(e))return e.filters.map(t=>za(t)).join(",");{const t=e.filters.map(n=>za(n)).join(",");return`${e.op}(${t})`}}function Ep(e,t){return e instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(e,t):e instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Ep(a,s.filters[l]),!0):!1}(e,t):void ct()}function wp(e){return e instanceof jt?function(n){return`${n.field.canonicalString()} ${n.op} ${Nr(n.value)}`}(e):e instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(wp).join(" ,")+"}"}(e):"Filter"}class sw extends jt{constructor(t,n,r){super(t,n,r),this.key=st.fromName(r.referenceValue)}matches(t){const n=st.comparator(t.key,this.key);return this.matchesComparison(n)}}class iw extends jt{constructor(t,n){super(t,"in",n),this.keys=Ip("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ow extends jt{constructor(t,n){super(t,"not-in",n),this.keys=Ip("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ip(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>st.fromName(r.referenceValue))}class aw extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ml(n)&&ks(n.arrayValue,this.value)}}class lw extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class uw extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class cw extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ks(this.value.arrayValue,r))}}/**
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
 */class hw{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Th(e,t=null,n=[],r=[],s=null,i=null,a=null){return new hw(e,t,n,r,s,i,a)}function kl(e){const t=dt(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>za(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Nr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Nr(r)).join(",")),t.le=n}return t.le}function Nl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!nw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ep(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!vh(e.startAt,t.startAt)&&vh(e.endAt,t.endAt)}function Ka(e){return st.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Ao{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function fw(e,t,n,r,s,i,a,l){return new Ao(e,t,n,r,s,i,a,l)}function Ol(e){return new Ao(e)}function Eh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function dw(e){return e.collectionGroup!==null}function Ts(e){const t=dt(e);if(t.he===null){t.he=[];const n=new Set;for(const i of t.explicitOrderBy)t.he.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ht(Jt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.he.push(new Qi(i,r))}),n.has(Jt.keyField().canonicalString())||t.he.push(new Qi(Jt.keyField(),r))}return t.he}function Xe(e){const t=dt(e);return t.Pe||(t.Pe=pw(t,Ts(e))),t.Pe}function pw(e,t){if(e.limitType==="F")return Th(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qi(s.field,i)});const n=e.endAt?new Gi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gi(e.startAt.position,e.startAt.inclusive):null;return Th(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Wa(e,t,n){return new Ao(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bo(e,t){return Nl(Xe(e),Xe(t))&&e.limitType===t.limitType}function Ap(e){return`${kl(Xe(e))}|lt:${e.limitType}`}function wr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>wp(s)).join(", ")}]`),wo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Nr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Nr(s)).join(",")),`Target(${r})`}(Xe(e))}; limitType=${e.limitType})`}function So(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):st.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=yh(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Ts(r),s)||r.endAt&&!function(a,l,u){const h=yh(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Ts(r),s))}(e,t)}function mw(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bp(e){return(t,n)=>{let r=!1;for(const s of Ts(e)){const i=gw(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gw(e,t,n){const r=e.field.isKeyField()?st.comparator(t.key,n.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?kr(u,h):ct()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ct()}}/**
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
 */class hr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){jn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return up(this.inner)}size(){return this.innerSize}}/**
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
 */const _w=new Nt(st.comparator);function dn(){return _w}const Sp=new Nt(st.comparator);function as(...e){let t=Sp;for(const n of e)t=t.insert(n.key,n);return t}function Rp(e){let t=Sp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function er(){return Es()}function Cp(){return Es()}function Es(){return new hr(e=>e.toString(),(e,t)=>e.isEqual(t))}const yw=new Nt(st.comparator),vw=new Ht(st.comparator);function Tt(...e){let t=vw;for(const n of e)t=t.add(n);return t}const Tw=new Ht(_t);function Ew(){return Tw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ki(t)?"-0":t}}function Pp(e){return{integerValue:""+e}}function ww(e,t){return GE(t)?Pp(t):Ll(e,t)}/**
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
 */class Ro{constructor(){this._=void 0}}function Iw(e,t,n){return e instanceof Yi?function(s,i){const a={fields:{[fp]:{stringValue:hp},[pp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xl(i)&&(i=Io(i)),i&&(a.fields[dp]=i),{mapValue:a}}(n,t):e instanceof Ns?Dp(e,t):e instanceof Os?xp(e,t):function(s,i){const a=Vp(s,i),l=wh(a)+wh(s.Ie);return Ha(a)&&Ha(s.Ie)?Pp(l):Ll(s.serializer,l)}(e,t)}function Aw(e,t,n){return e instanceof Ns?Dp(e,t):e instanceof Os?xp(e,t):n}function Vp(e,t){return e instanceof Xi?function(r){return Ha(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Yi extends Ro{}class Ns extends Ro{constructor(t){super(),this.elements=t}}function Dp(e,t){const n=Mp(t);for(const r of e.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Os extends Ro{constructor(t){super(),this.elements=t}}function xp(e,t){let n=Mp(t);for(const r of e.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Xi extends Ro{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function wh(e){return Lt(e.integerValue||e.doubleValue)}function Mp(e){return Ml(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function bw(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ns&&s instanceof Ns||r instanceof Os&&s instanceof Os?Mr(r.elements,s.elements,tn):r instanceof Xi&&s instanceof Xi?tn(r.Ie,s.Ie):r instanceof Yi&&s instanceof Yi}(e.transform,t.transform)}class Sw{constructor(t,n){this.version=t,this.transformResults=n}}class Ue{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ue}static exists(t){return new Ue(void 0,t)}static updateTime(t){return new Ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Si(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Co{}function kp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Fl(e.key,Ue.none()):new Us(e.key,e.data,Ue.none());{const n=e.data,r=_e.empty();let s=new Ht(Jt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qn(e.key,r,new Se(s.toArray()),Ue.none())}}function Rw(e,t,n){e instanceof Us?function(s,i,a){const l=s.value.clone(),u=Ah(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof qn?function(s,i,a){if(!Si(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ah(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Np(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function ws(e,t,n,r){return e instanceof Us?function(i,a,l,u){if(!Si(i.precondition,a))return l;const h=i.value.clone(),d=bh(i.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof qn?function(i,a,l,u){if(!Si(i.precondition,a))return l;const h=bh(i.fieldTransforms,u,a),d=a.data;return d.setAll(Np(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(e,t,n,r):function(i,a,l){return Si(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function Cw(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Vp(r.transform,s||null);i!=null&&(n===null&&(n=_e.empty()),n.set(r.field,i))}return n||null}function Ih(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mr(r,s,(i,a)=>bw(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Us extends Co{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends Co{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Np(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ah(e,t,n){const r=new Map;Rt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Aw(a,l,n[s]))}return r}function bh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Iw(i,a,t))}return r}class Fl extends Co{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pw extends Co{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vw{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Rw(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ws(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ws(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Cp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=kp(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ft.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Tt())}isEqual(t){return this.batchId===t.batchId&&Mr(this.mutations,t.mutations,(n,r)=>Ih(n,r))&&Mr(this.baseMutations,t.baseMutations,(n,r)=>Ih(n,r))}}class $l{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Rt(t.mutations.length===r.length);let s=function(){return yw}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new $l(t,n,r,s)}}/**
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
 */class Dw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class xw{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Bt,wt;function Mw(e){switch(e){case O.OK:return ct();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ct()}}function Op(e){if(e===void 0)return fn("GRPC error has no .code"),O.UNKNOWN;switch(e){case Bt.OK:return O.OK;case Bt.CANCELLED:return O.CANCELLED;case Bt.UNKNOWN:return O.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return O.INTERNAL;case Bt.UNAVAILABLE:return O.UNAVAILABLE;case Bt.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Bt.NOT_FOUND:return O.NOT_FOUND;case Bt.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Bt.ABORTED:return O.ABORTED;case Bt.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Bt.DATA_LOSS:return O.DATA_LOSS;default:return ct()}}(wt=Bt||(Bt={}))[wt.OK=0]="OK",wt[wt.CANCELLED=1]="CANCELLED",wt[wt.UNKNOWN=2]="UNKNOWN",wt[wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wt[wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wt[wt.NOT_FOUND=5]="NOT_FOUND",wt[wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",wt[wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",wt[wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",wt[wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wt[wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wt[wt.ABORTED=10]="ABORTED",wt[wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",wt[wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",wt[wt.INTERNAL=13]="INTERNAL",wt[wt.UNAVAILABLE=14]="UNAVAILABLE",wt[wt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const kw=new Rn([4294967295,4294967295],0);function Sh(e){const t=op().encode(e),n=new tp;return n.update(t),new Uint8Array(n.digest())}function Rh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Rn([n,r],0),new Rn([s,i],0)]}class Ul{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ls(`Invalid padding: ${n}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ls(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=Rn.fromNumber(this.Ee)}Ae(t,n,r){let s=t.add(n.multiply(Rn.fromNumber(r)));return s.compare(kw)===1&&(s=new Rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=Sh(t),[r,s]=Rh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ul(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const n=Sh(t),[r,s]=Rh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Po{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Bs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Po(ft.min(),s,new Nt(_t),dn(),Tt())}}class Bs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Bs(r,n,Tt(),Tt(),Tt())}}/**
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
 */class Ri{constructor(t,n,r,s){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=s}}class Lp{constructor(t,n){this.targetId=t,this.ge=n}}class Fp{constructor(t,n,r=Zt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ch{constructor(){this.pe=0,this.ye=Ph(),this.we=Zt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Tt(),n=Tt(),r=Tt();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ct()}}),new Bs(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=Ph()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Rt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Nw{constructor(t){this.ke=t,this.qe=new Map,this.Qe=dn(),this.$e=mi(),this.Ue=mi(),this.Ke=new Nt(_t)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:ct()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){const n=t.targetId,r=t.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Ka(i))if(r===0){const a=new st(i.path);this.ze(n,a,ae.newNoDocument(a,ft.min()))}else Rt(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(t),u=l?this.nt(l,t,a):1;if(u!==0){this.Ye(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=kn(r).toUint8Array()}catch(u){if(u instanceof cp)return Vs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ul(a,s,i)}catch(u){return Vs(u instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(t,n,r){return n.ge.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(t){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&Ka(l.target)){const u=new st(l.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,ae.newNoDocument(u,t))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=Tt();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Xe(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new Po(t,n,this.Ke,this.Qe,r);return this.Qe=dn(),this.$e=mi(),this.Ue=mi(),this.Ke=new Nt(_t),s}Ge(t,n){if(!this.Je(t))return;const r=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new Ch,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Ht(_t),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ht(_t),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||tt("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Ch),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function mi(){return new Nt(st.comparator)}function Ph(){return new Nt(st.comparator)}const Ow={asc:"ASCENDING",desc:"DESCENDING"},Lw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fw={and:"AND",or:"OR"};class $w{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ga(e,t){return e.useProto3Json||wo(t)?t:{value:t}}function Ji(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $p(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Uw(e,t){return Ji(e,t.toTimestamp())}function Je(e){return Rt(!!e),ft.fromTimestamp(function(n){const r=Mn(n);return new qt(r.seconds,r.nanos)}(e))}function Bl(e,t){return Qa(e,t).canonicalString()}function Qa(e,t){const n=function(s){return new kt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Up(e){const t=kt.fromString(e);return Rt(zp(t)),t}function Ya(e,t){return Bl(e.databaseId,t.path)}function ga(e,t){const n=Up(t);if(n.get(1)!==e.databaseId.projectId)throw new rt(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rt(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new st(jp(n))}function Bp(e,t){return Bl(e.databaseId,t)}function Bw(e){const t=Up(e);return t.length===4?kt.emptyPath():jp(t)}function Xa(e){return new kt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function jp(e){return Rt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Vh(e,t,n){return{name:Ya(e,t),fields:n.value.mapValue.fields}}function jw(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ct()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Rt(d===void 0||typeof d=="string"),Zt.fromBase64String(d||"")):(Rt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Zt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?O.UNKNOWN:Op(h.code);return new rt(d,h.message||"")}(a);n=new Fp(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ga(e,r.document.name),i=Je(r.document.updateTime),a=r.document.createTime?Je(r.document.createTime):ft.min(),l=new _e({mapValue:{fields:r.document.fields}}),u=ae.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ri(h,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ga(e,r.document),i=r.readTime?Je(r.readTime):ft.min(),a=ae.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ri([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ga(e,r.document),i=r.removedTargetIds||[];n=new Ri([],i,s,null)}else{if(!("filter"in t))return ct();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new xw(s,i),l=r.targetId;n=new Lp(l,a)}}return n}function qw(e,t){let n;if(t instanceof Us)n={update:Vh(e,t.key,t.value)};else if(t instanceof Fl)n={delete:Ya(e,t.key)};else if(t instanceof qn)n={update:Vh(e,t.key,t.data),updateMask:Jw(t.fieldMask)};else{if(!(t instanceof Pw))return ct();n={verify:Ya(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Yi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ns)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Os)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xi)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw ct()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Uw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ct()}(e,t.precondition)),n}function Hw(e,t){return e&&e.length>0?(Rt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?Je(s.updateTime):Je(i);return a.isEqual(ft.min())&&(a=Je(i)),new Sw(a,s.transformResults||[])}(n,t))):[]}function zw(e,t){return{documents:[Bp(e,t.path)]}}function Kw(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bp(e,s);const i=function(h){if(h.length!==0)return Hp(en.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(w){return{field:Ir(w.field),direction:Qw(w.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ga(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ht:n,parent:s}}function Ww(e){let t=Bw(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Rt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(g){const w=qp(g);return w instanceof en&&Tp(w)?w.getFilters():[w]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(w=>function(C){return new Qi(Ar(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(g){let w;return w=typeof g=="object"?g.value:g,wo(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(g){const w=!!g.before,b=g.values||[];return new Gi(b,w)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const w=!g.before,b=g.values||[];return new Gi(b,w)}(n.endAt)),fw(t,s,a,i,l,"F",u,h)}function Gw(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ct()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function qp(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ar(n.unaryFilter.field);return jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(n.unaryFilter.field);return jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ar(n.unaryFilter.field);return jt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ct()}}(e):e.fieldFilter!==void 0?function(n){return jt.create(Ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ct()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>qp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ct()}}(n.compositeFilter.op))}(e):ct()}function Qw(e){return Ow[e]}function Yw(e){return Lw[e]}function Xw(e){return Fw[e]}function Ir(e){return{fieldPath:e.canonicalString()}}function Ar(e){return Jt.fromServerFormat(e.fieldPath)}function Hp(e){return e instanceof jt?function(n){if(n.op==="=="){if(_h(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(gh(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_h(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(gh(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:Yw(n.op),value:n.value}}}(e):e instanceof en?function(n){const r=n.getFilters().map(s=>Hp(s));return r.length===1?r[0]:{compositeFilter:{op:Xw(n.op),filters:r}}}(e):ct()}function Jw(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function zp(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class In{constructor(t,n,r,s,i=ft.min(),a=ft.min(),l=Zt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new In(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Zw{constructor(t){this.Tt=t}}function tI(e){const t=Ww({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Wa(t,t.limit,"L"):t}/**
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
 */class eI{constructor(){this.Tn=new nI}addToCollectionParentIndex(t,n){return this.Tn.add(n),M.resolve()}getCollectionParents(t,n){return M.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return M.resolve()}deleteFieldIndex(t,n){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,n){return M.resolve()}getDocumentsMatchingTarget(t,n){return M.resolve(null)}getIndexType(t,n){return M.resolve(0)}getFieldIndexes(t,n){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,n){return M.resolve(xn.min())}getMinOffsetFromCollectionGroup(t,n){return M.resolve(xn.min())}updateCollectionGroup(t,n,r){return M.resolve()}updateIndexEntries(t,n){return M.resolve()}}class nI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ht(kt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ht(kt.comparator)).toArray()}}/**
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
 */const Dh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kp=41943040;class ge{static withCacheSize(t){return new ge(t,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ge.DEFAULT_COLLECTION_PERCENTILE=10,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ge.DEFAULT=new ge(Kp,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ge.DISABLED=new ge(-1,0,0);/**
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
 */class Or{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Or(0)}static Kn(){return new Or(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="LruGarbageCollector",rI=1048576;function Mh([e,t],[n,r]){const s=_t(e,n);return s===0?_t(t,r):s}class sI{constructor(t){this.Hn=t,this.buffer=new Ht(Mh),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Mh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){tt(xh,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jr(n)?tt(xh,"Ignoring IndexedDB error during garbage collection: ",n):await Br(n)}await this.er(3e5)})}}class oI{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return M.resolve(Eo.ae);const r=new sI(n);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(tt("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Dh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(tt("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dh):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,s,i,a,l,u,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(tt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(t,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(h=Date.now(),Er()<=It.DEBUG&&tt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function aI(e,t){return new oI(e,t)}/**
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
 */class lI{constructor(){this.changes=new hr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class uI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class cI{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ws(r.mutation,s,Se.empty(),qt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Tt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Tt()){const s=er();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=as();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=er();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Tt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=dn();const a=Es(),l=function(){return Es()}();return n.forEach((u,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof qn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ws(d.mutation,h,d.mutation.getFieldMask(),qt.now())):a.set(h.key,Se.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var g;return l.set(h,new uI(d,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Es();let s=new Nt((a,l)=>a-l),i=Tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||Se.empty();d=l.applyToLocalView(h,d),r.set(u,d);const g=(s.get(l.batchId)||Tt()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,g=Cp();d.forEach(w=>{if(!i.has(w)){const b=kp(n.get(w),r.get(w));b!==null&&g.set(w,b),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return st.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):dw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):M.resolve(er());let l=Ds,u=i;return a.next(h=>M.forEach(h,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(t,d).next(w=>{u=u.insert(d,w)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,Tt())).next(d=>({batchId:l,changes:Rp(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new st(n)).next(r=>{let s=as();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=as();return this.indexManager.getCollectionParents(t,i).next(l=>M.forEach(l,u=>{const h=function(g,w){return new Ao(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((g,w)=>{a=a.insert(g,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ae.newInvalidDocument(d)))});let l=as();return a.forEach((u,h)=>{const d=i.get(u);d!==void 0&&ws(d.mutation,h,Se.empty(),qt.now()),So(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return M.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(n)),M.resolve()}getNamedQuery(t,n){return M.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:tI(s.bundledQuery),readTime:Je(s.readTime)}}(n)),M.resolve()}}/**
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
 */class fI{constructor(){this.overlays=new Nt(st.comparator),this.Rr=new Map}getOverlay(t,n){return M.resolve(this.overlays.get(n))}getOverlays(t,n){const r=er();return M.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Et(t,n,i)}),M.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),M.resolve()}getOverlaysForCollection(t,n,r){const s=er(),i=n.length+1,a=new st(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Nt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=er(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=er(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}Et(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Dw(n,r));let i=this.Rr.get(n);i===void 0&&(i=Tt(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class dI{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(t){return M.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class jl{constructor(){this.Vr=new Ht(zt.mr),this.gr=new Ht(zt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const r=new zt(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.wr(new zt(t,n))}Sr(t,n){t.forEach(r=>this.removeReference(r,n))}br(t){const n=new st(new kt([])),r=new zt(n,t),s=new zt(n,t+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new st(new kt([])),r=new zt(n,t),s=new zt(n,t+1);let i=Tt();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new zt(t,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class zt{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return st.comparator(t.key,n.key)||_t(t.Cr,n.Cr)}static pr(t,n){return _t(t.Cr,n.Cr)||st.comparator(t.key,n.key)}}/**
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
 */class pI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ht(zt.mr)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vw(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new zt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,n){return M.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Dl:this.Fr-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new zt(n,0),s=new zt(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ht(_t);return n.forEach(s=>{const i=new zt(s,0),a=new zt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),M.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;st.isDocumentKey(i)||(i=i.child(""));const a=new zt(new st(i),0);let l=new Ht(_t);return this.Mr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Cr)),!0)},a),M.resolve(this.Br(l))}Br(t){const n=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Rt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return M.forEach(n.mutations,s=>{const i=new zt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){const r=new zt(n,0),s=this.Mr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mI{constructor(t){this.kr=t,this.docs=function(){return new Nt(st.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(t,n){let r=dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ae.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=dn();const a=n.path,l=new st(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||HE(qE(d),r)<=0||(s.has(d.key)||So(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(t,n,r,s){ct()}qr(t,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new gI(this)}getSize(t){return M.resolve(this.size)}}class gI extends lI{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),M.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class _I{constructor(t){this.persistence=t,this.Qr=new hr(n=>kl(n),Nl),this.lastRemoteSnapshotVersion=ft.min(),this.highestTargetId=0,this.$r=0,this.Ur=new jl,this.targetCount=0,this.Kr=Or.Un()}forEachTarget(t,n){return this.Qr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),M.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new Or(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,M.resolve()}updateTargetData(t,n){return this.zn(n),M.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,n){const r=this.Qr.get(n)||null;return M.resolve(r)}addMatchingKeys(t,n,r){return this.Ur.yr(n,r),M.resolve()}removeMatchingKeys(t,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),M.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ur.vr(n);return M.resolve(r)}containsKey(t,n){return M.resolve(this.Ur.containsKey(n))}}/**
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
 */class Wp{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Eo(0),this.zr=!1,this.zr=!0,this.jr=new dI,this.referenceDelegate=t(this),this.Hr=new _I(this),this.indexManager=new eI,this.remoteDocumentCache=function(s){return new mI(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Zw(n),this.Yr=new hI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new pI(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){tt("MemoryPersistence","Starting transaction:",t);const s=new yI(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,n){return M.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class yI extends KE{constructor(t){super(),this.currentSequenceNumber=t}}class ql{constructor(t){this.persistence=t,this.ti=new jl,this.ni=null}static ri(t){return new ql(t)}get ii(){if(this.ni)return this.ni;throw ct()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),M.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),M.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),M.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ii,r=>{const s=st.fromPath(r);return this.si(t,s).next(i=>{i||n.removeEntry(s,ft.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return M.or([()=>M.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Zi{constructor(t,n){this.persistence=t,this.oi=new hr(r=>QE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=aI(this,n)}static ri(t,n){return new Zi(t,n)}Zr(){}Xr(t){return M.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}sr(t){let n=0;return this.rr(t,r=>{n++}).next(()=>n)}rr(t,n){return M.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ft.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),M.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),M.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),M.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),M.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ai(t.data.value)),n}ar(t,n,r){return M.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.oi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Hl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(t,n){let r=Tt(),s=Tt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(t,n.fromCache,r,s)}}/**
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
 */class vI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class TI{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ky()?8:WE(qy())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.rs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new vI;return this._s(t,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(t,n,a,l.size)})}).next(()=>i.result)}us(t,n,r,s){return r.documentReadCount<this.es?(Er()<=It.DEBUG&&tt("QueryEngine","SDK will not create cache indexes for query:",wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),M.resolve()):(Er()<=It.DEBUG&&tt("QueryEngine","Query:",wr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Er()<=It.DEBUG&&tt("QueryEngine","The SDK decides to create cache indexes for query:",wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xe(n))):M.resolve())}rs(t,n){if(Eh(n))return M.resolve(null);let r=Xe(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Wa(n,null,"F"),r=Xe(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=Tt(...i);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.cs(n,l);return this.ls(n,h,a,u.readTime)?this.rs(t,Wa(n,null,"F")):this.hs(t,h,n,u)}))})))}ss(t,n,r,s){return Eh(n)||s.isEqual(ft.min())?M.resolve(null):this.ns.getDocuments(t,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?M.resolve(null):(Er()<=It.DEBUG&&tt("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wr(n)),this.hs(t,a,n,jE(s,Ds)).next(l=>l))})}cs(t,n){let r=new Ht(bp(t));return n.forEach((s,i)=>{So(t,i)&&(r=r.add(i))}),r}ls(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,n,r){return Er()<=It.DEBUG&&tt("QueryEngine","Using full collection scan to execute query:",wr(n)),this.ns.getDocumentsMatchingQuery(t,n,xn.min(),r)}hs(t,n,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="LocalStore",EI=3e8;class wI{constructor(t,n,r,s){this.persistence=t,this.Ps=n,this.serializer=s,this.Ts=new Nt(_t),this.Is=new hr(i=>kl(i),Nl),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cI(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function II(e,t,n,r){return new wI(e,t,n,r)}async function Gp(e,t){const n=dt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=Tt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function AI(e,t){const n=dt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const g=h.batch,w=g.keys();let b=M.resolve();return w.forEach(C=>{b=b.next(()=>d.getEntry(u,C)).next(V=>{const x=h.docVersions.get(C);Rt(x!==null),V.version.compareTo(x)<0&&(g.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Tt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Qp(e){const t=dt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function bI(e,t){const n=dt(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];t.targetChanges.forEach((d,g)=>{const w=s.get(g);if(!w)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,g)));let b=w.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?b=b.withResumeToken(Zt.EMPTY_BYTE_STRING,ft.min()).withLastLimboFreeSnapshotVersion(ft.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),function(V,x,B){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=EI?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(w,b,d)&&l.push(n.Hr.updateTargetData(i,b))});let u=dn(),h=Tt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(SI(i,a,t.documentUpdates).next(d=>{u=d.Vs,h=d.fs})),!r.isEqual(ft.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(g=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ts=s,i))}function SI(e,t,n){let r=Tt(),s=Tt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=dn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ft.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):tt(zl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function RI(e,t){const n=dt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Dl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function CI(e,t){const n=dt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,t).next(i=>i?(s=i,M.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new In(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(t,r.targetId)),r})}async function Ja(e,t,n){const r=dt(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!jr(a))throw a;tt(zl,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function kh(e,t,n){const r=dt(e);let s=ft.min(),i=Tt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const g=dt(u),w=g.Is.get(d);return w!==void 0?M.resolve(g.Ts.get(w)):g.Hr.getTargetData(h,d)}(r,a,Xe(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,n?s:ft.min(),n?i:Tt())).next(l=>(PI(r,mw(t),l),{documents:l,gs:i})))}function PI(e,t,n){let r=e.Es.get(t)||ft.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Es.set(t,r)}class Nh{constructor(){this.activeTargetIds=Ew()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class VI{constructor(){this.ho=new Nh,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Nh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class DI{To(t){}shutdown(){}}/**
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
 */const Oh="ConnectivityMonitor";class Lh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){tt(Oh,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){tt(Oh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gi=null;function Za(){return gi===null?gi=function(){return 268435456+Math.round(2147483648*Math.random())}():gi++,"0x"+gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="RestConnection",xI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MI{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===ja?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,n,r,s,i){const a=Za(),l=this.bo(t,n.toUriEncodedString());tt(_a,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(t,l,u,r).then(h=>(tt(_a,`Received RPC '${t}' ${a}: `,h),h),h=>{throw Vs(_a,`RPC '${t}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Co(t,n,r,s,i,a){return this.So(t,n,r,s,i)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ur}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}bo(t,n){const r=xI[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class kI{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const se="WebChannelConnection";class NI extends MI{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=Za();return new Promise((a,l)=>{const u=new ep;u.setWithCredentials(!0),u.listenOnce(np.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ii.NO_ERROR:const d=u.getResponseJson();tt(se,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Ii.TIMEOUT:tt(se,`RPC '${t}' ${i} timed out`),l(new rt(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const g=u.getStatus();if(tt(se,`RPC '${t}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w==null?void 0:w.error;if(b&&b.status&&b.message){const C=function(x){const B=x.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(B)>=0?B:O.UNKNOWN}(b.status);l(new rt(C,b.message))}else l(new rt(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new rt(O.UNAVAILABLE,"Connection failed."));break;default:ct()}}finally{tt(se,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);tt(se,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Wo(t,n,r){const s=Za(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ip(),l=sp(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");tt(se,`Creating RPC '${t}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);let w=!1,b=!1;const C=new kI({Fo:x=>{b?tt(se,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(w||(tt(se,`Opening RPC '${t}' stream ${s} transport.`),g.open(),w=!0),tt(se,`RPC '${t}' stream ${s} sending:`,x),g.send(x))},Mo:()=>g.close()}),V=(x,B,J)=>{x.listen(B,X=>{try{J(X)}catch(Q){setTimeout(()=>{throw Q},0)}})};return V(g,os.EventType.OPEN,()=>{b||(tt(se,`RPC '${t}' stream ${s} transport opened.`),C.Qo())}),V(g,os.EventType.CLOSE,()=>{b||(b=!0,tt(se,`RPC '${t}' stream ${s} transport closed`),C.Uo())}),V(g,os.EventType.ERROR,x=>{b||(b=!0,Vs(se,`RPC '${t}' stream ${s} transport errored:`,x),C.Uo(new rt(O.UNAVAILABLE,"The operation could not be completed")))}),V(g,os.EventType.MESSAGE,x=>{var B;if(!b){const J=x.data[0];Rt(!!J);const X=J,Q=(X==null?void 0:X.error)||((B=X[0])===null||B===void 0?void 0:B.error);if(Q){tt(se,`RPC '${t}' stream ${s} received error:`,Q);const ht=Q.status;let Z=function(_){const v=Bt[_];if(v!==void 0)return Op(v)}(ht),E=Q.message;Z===void 0&&(Z=O.INTERNAL,E="Unknown error status: "+ht+" with message "+Q.message),b=!0,C.Uo(new rt(Z,E)),g.close()}else tt(se,`RPC '${t}' stream ${s} received:`,J),C.Ko(J)}}),V(l,rp.STAT_EVENT,x=>{x.stat===Ua.PROXY?tt(se,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===Ua.NOPROXY&&tt(se,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function ya(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e){return new $w(e,!0)}/**
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
 */class Yp{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&tt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Fh="PersistentStream";class Xp{constructor(t,n,r,s,i,a,l,u){this.Ti=t,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Yp(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{t(()=>{const s=new rt(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,n){const r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return tt(Fh,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(tt(Fh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OI extends Xp{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=jw(this.serializer,t),r=function(i){if(!("targetChange"in i))return ft.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ft.min():a.readTime?Je(a.readTime):ft.min()}(t);return this.listener.p_(n,r)}y_(t){const n={};n.database=Xa(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=Ka(u)?{documents:zw(i,u)}:{query:Kw(i,u).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=$p(i,a.resumeToken);const h=Ga(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ft.min())>0){l.readTime=Ji(i,a.snapshotVersion.toTimestamp());const h=Ga(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=Gw(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){const n={};n.database=Xa(this.serializer),n.removeTarget=t,this.I_(n)}}class LI extends Xp{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return Rt(!!t.streamToken),this.lastStreamToken=t.streamToken,Rt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=Hw(t.writeResults,t.commitTime),r=Je(t.commitTime);return this.listener.v_(r,n)}C_(){const t={};t.database=Xa(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>qw(this.serializer,r))};this.I_(n)}}/**
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
 */class FI{}class $I extends FI{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new rt(O.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(t,Qa(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new rt(O.UNKNOWN,i.toString())})}Co(t,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,Qa(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new rt(O.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class UI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(fn(n),this.N_=!1):tt("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const cr="RemoteStore";class BI{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{fr(this)&&(tt(cr,"Restarting streams for network reachability change."),await async function(u){const h=dt(u);h.W_.add(4),await js(h),h.j_.set("Unknown"),h.W_.delete(4),await Do(h)}(this))})}),this.j_=new UI(r,s)}}async function Do(e){if(fr(e))for(const t of e.G_)await t(!0)}async function js(e){for(const t of e.G_)await t(!1)}function Jp(e,t){const n=dt(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),Ql(n)?Gl(n):qr(n).c_()&&Wl(n,t))}function Kl(e,t){const n=dt(e),r=qr(n);n.K_.delete(t),r.c_()&&Zp(n,t),n.K_.size===0&&(r.c_()?r.P_():fr(n)&&n.j_.set("Unknown"))}function Wl(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ft.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}qr(e).y_(t)}function Zp(e,t){e.H_.Ne(t),qr(e).w_(t)}function Gl(e){e.H_=new Nw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),qr(e).start(),e.j_.B_()}function Ql(e){return fr(e)&&!qr(e).u_()&&e.K_.size>0}function fr(e){return dt(e).W_.size===0}function tm(e){e.H_=void 0}async function jI(e){e.j_.set("Online")}async function qI(e){e.K_.forEach((t,n)=>{Wl(e,t)})}async function HI(e,t){tm(e),Ql(e)?(e.j_.q_(t),Gl(e)):e.j_.set("Unknown")}async function zI(e,t,n){if(e.j_.set("Online"),t instanceof Fp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(e,t)}catch(r){tt(cr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await to(e,r)}else if(t instanceof Ri?e.H_.We(t):t instanceof Lp?e.H_.Ze(t):e.H_.je(t),!n.isEqual(ft.min()))try{const r=await Qp(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.K_.get(h);d&&i.K_.set(h,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const d=i.K_.get(u);if(!d)return;i.K_.set(u,d.withResumeToken(Zt.EMPTY_BYTE_STRING,d.snapshotVersion)),Zp(i,u);const g=new In(d.target,u,h,d.sequenceNumber);Wl(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){tt(cr,"Failed to raise snapshot:",r),await to(e,r)}}async function to(e,t,n){if(!jr(t))throw t;e.W_.add(1),await js(e),e.j_.set("Offline"),n||(n=()=>Qp(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{tt(cr,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Do(e)})}function em(e,t){return t().catch(n=>to(e,n,t))}async function xo(e){const t=dt(e),n=On(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Dl;for(;KI(t);)try{const s=await RI(t.localStore,r);if(s===null){t.U_.length===0&&n.P_();break}r=s.batchId,WI(t,s)}catch(s){await to(t,s)}nm(t)&&rm(t)}function KI(e){return fr(e)&&e.U_.length<10}function WI(e,t){e.U_.push(t);const n=On(e);n.c_()&&n.S_&&n.b_(t.mutations)}function nm(e){return fr(e)&&!On(e).u_()&&e.U_.length>0}function rm(e){On(e).start()}async function GI(e){On(e).C_()}async function QI(e){const t=On(e);for(const n of e.U_)t.b_(n.mutations)}async function YI(e,t,n){const r=e.U_.shift(),s=$l.from(r,t,n);await em(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await xo(e)}async function XI(e,t){t&&On(e).S_&&await async function(r,s){if(function(a){return Mw(a)&&a!==O.ABORTED}(s.code)){const i=r.U_.shift();On(r).h_(),await em(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xo(r)}}(e,t),nm(e)&&rm(e)}async function $h(e,t){const n=dt(e);n.asyncQueue.verifyOperationInProgress(),tt(cr,"RemoteStore received new credentials");const r=fr(n);n.W_.add(3),await js(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Do(n)}async function JI(e,t){const n=dt(e);t?(n.W_.delete(2),await Do(n)):t||(n.W_.add(2),await js(n),n.j_.set("Unknown"))}function qr(e){return e.J_||(e.J_=function(n,r,s){const i=dt(n);return i.M_(),new OI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:jI.bind(null,e),No:qI.bind(null,e),Lo:HI.bind(null,e),p_:zI.bind(null,e)}),e.G_.push(async t=>{t?(e.J_.h_(),Ql(e)?Gl(e):e.j_.set("Unknown")):(await e.J_.stop(),tm(e))})),e.J_}function On(e){return e.Y_||(e.Y_=function(n,r,s){const i=dt(n);return i.M_(),new LI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:GI.bind(null,e),Lo:XI.bind(null,e),D_:QI.bind(null,e),v_:YI.bind(null,e)}),e.G_.push(async t=>{t?(e.Y_.h_(),await xo(e)):(await e.Y_.stop(),e.U_.length>0&&(tt(cr,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))})),e.Y_}/**
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
 */class Yl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Yl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(O.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(e,t){if(fn("AsyncQueue",`${t}: ${e}`),jr(e))return new rt(O.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Dr{static emptySet(t){return new Dr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||st.comparator(n.key,r.key):(n,r)=>st.comparator(n.key,r.key),this.keyedMap=as(),this.sortedSet=new Nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Dr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Dr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Uh{constructor(){this.Z_=new Nt(st.comparator)}track(t){const n=t.doc.key,r=this.Z_.get(n);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(n):t.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):ct():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Lr{constructor(t,n,r,s,i,a,l,u,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Lr(t,n,Dr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ZI{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class tA{constructor(){this.queries=Bh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=dt(n),i=s.queries;s.queries=Bh(),i.forEach((a,l)=>{for(const u of l.ta)u.onError(r)})})(this,new rt(O.ABORTED,"Firestore shutting down"))}}function Bh(){return new hr(e=>Ap(e),bo)}async function eA(e,t){const n=dt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new ZI,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Xl(a,`Initialization of query '${wr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&Jl(n)}async function nA(e,t){const n=dt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rA(e,t){const n=dt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Jl(n)}function sA(e,t,n){const r=dt(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function Jl(e){e.ia.forEach(t=>{t.next()})}var tl,jh;(jh=tl||(tl={}))._a="default",jh.Cache="cache";class iA{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Lr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Lr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==tl.Cache}}/**
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
 */class sm{constructor(t){this.key=t}}class im{constructor(t){this.key=t}}class oA{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Tt(),this.mutatedKeys=Tt(),this.ya=bp(t),this.wa=new Dr(this.ya)}get Sa(){return this.fa}ba(t,n){const r=n?n.Da:new Uh,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const w=s.get(d),b=So(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),V=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;w&&b?w.data.isEqual(b.data)?C!==V&&(r.track({type:3,doc:b}),x=!0):this.va(w,b)||(r.track({type:2,doc:b}),x=!0,(u&&this.ya(b,u)>0||h&&this.ya(b,h)<0)&&(l=!0)):!w&&b?(r.track({type:0,doc:b}),x=!0):w&&!b&&(r.track({type:1,doc:w}),x=!0,(u||h)&&(l=!0)),x&&(b?(a=a.add(b),i=V?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((d,g)=>function(b,C){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ct()}};return V(b)-V(C)}(d.type,g.type)||this.ya(d.doc,g.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,h=u!==this.ga;return this.ga=u,a.length!==0||h?{snapshot:new Lr(this.query,t.wa,i,a,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Uh,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Tt(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return t.forEach(r=>{this.pa.has(r)||n.push(new im(r))}),this.pa.forEach(r=>{t.has(r)||n.push(new sm(r))}),n}Oa(t){this.fa=t.gs,this.pa=Tt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Lr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Zl="SyncEngine";class aA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class lA{constructor(t){this.key=t,this.Ba=!1}}class uA{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new hr(l=>Ap(l),bo),this.qa=new Map,this.Qa=new Set,this.$a=new Nt(st.comparator),this.Ua=new Map,this.Ka=new jl,this.Wa={},this.Ga=new Map,this.za=Or.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function cA(e,t,n=!0){const r=hm(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await om(r,t,n,!0),s}async function hA(e,t){const n=hm(e);await om(n,t,!0,!1)}async function om(e,t,n,r){const s=await CI(e.localStore,Xe(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await fA(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Jp(e.remoteStore,s),l}async function fA(e,t,n,r,s){e.Ha=(g,w,b)=>async function(V,x,B,J){let X=x.view.ba(B);X.ls&&(X=await kh(V.localStore,x.query,!1).then(({documents:E})=>x.view.ba(E,X)));const Q=J&&J.targetChanges.get(x.targetId),ht=J&&J.targetMismatches.get(x.targetId)!=null,Z=x.view.applyChanges(X,V.isPrimaryClient,Q,ht);return Hh(V,x.targetId,Z.Ma),Z.snapshot}(e,g,w,b);const i=await kh(e.localStore,t,!0),a=new oA(t,i.gs),l=a.ba(i.documents),u=Bs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,u);Hh(e,n,h.Ma);const d=new aA(t,n,a);return e.ka.set(t,d),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),h.snapshot}async function dA(e,t,n){const r=dt(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!bo(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ja(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Kl(r.remoteStore,s.targetId),el(r,s.targetId)}).catch(Br)):(el(r,s.targetId),await Ja(r.localStore,s.targetId,!0))}async function pA(e,t){const n=dt(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kl(n.remoteStore,r.targetId))}async function mA(e,t,n){const r=wA(e);try{const s=await function(a,l){const u=dt(a),h=qt.now(),d=l.reduce((b,C)=>b.add(C.key),Tt());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=dn(),V=Tt();return u.ds.getEntries(b,d).next(x=>{C=x,C.forEach((B,J)=>{J.isValidDocument()||(V=V.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,C)).next(x=>{g=x;const B=[];for(const J of l){const X=Cw(J,g.get(J.key).overlayedDocument);X!=null&&B.push(new qn(J.key,X,_p(X.value.mapValue),Ue.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,B,l)}).next(x=>{w=x;const B=x.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(b,x.batchId,B)})}).then(()=>({batchId:w.batchId,changes:Rp(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.Wa[a.currentUser.toKey()];h||(h=new Nt(_t)),h=h.insert(l,u),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await qs(r,s.changes),await xo(r.remoteStore)}catch(s){const i=Xl(s,"Failed to persist write");n.reject(i)}}async function am(e,t){const n=dt(e);try{const r=await bI(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(Rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Rt(a.Ba):s.removedDocuments.size>0&&(Rt(a.Ba),a.Ba=!1))}),await qs(n,r,t)}catch(r){await Br(r)}}function qh(e,t,n){const r=dt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=dt(a);u.onlineState=l;let h=!1;u.queries.forEach((d,g)=>{for(const w of g.ta)w.sa(l)&&(h=!0)}),h&&Jl(u)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function gA(e,t,n){const r=dt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ua.get(t),i=s&&s.key;if(i){let a=new Nt(st.comparator);a=a.insert(i,ae.newNoDocument(i,ft.min()));const l=Tt().add(i),u=new Po(ft.min(),new Map,new Nt(_t),a,l);await am(r,u),r.$a=r.$a.remove(i),r.Ua.delete(t),tu(r)}else await Ja(r.localStore,t,!1).then(()=>el(r,t,n)).catch(Br)}async function _A(e,t){const n=dt(e),r=t.batch.batchId;try{const s=await AI(n.localStore,t);um(n,r,null),lm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qs(n,s)}catch(s){await Br(s)}}async function yA(e,t,n){const r=dt(e);try{const s=await function(a,l){const u=dt(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(Rt(g!==null),d=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(r.localStore,t);um(r,t,n),lm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qs(r,s)}catch(s){await Br(s)}}function lm(e,t){(e.Ga.get(t)||[]).forEach(n=>{n.resolve()}),e.Ga.delete(t)}function um(e,t,n){const r=dt(e);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function el(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach(r=>{e.Ka.containsKey(r)||cm(e,r)})}function cm(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);n!==null&&(Kl(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),tu(e))}function Hh(e,t,n){for(const r of n)r instanceof sm?(e.Ka.addReference(r.key,t),vA(e,r)):r instanceof im?(tt(Zl,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||cm(e,r.key)):ct()}function vA(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(tt(Zl,"New document in limbo: "+n),e.Qa.add(r),tu(e))}function tu(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new st(kt.fromString(t)),r=e.za.next();e.Ua.set(r,new lA(n)),e.$a=e.$a.insert(n,r),Jp(e.remoteStore,new In(Xe(Ol(n.path)),r,"TargetPurposeLimboResolution",Eo.ae))}}async function qs(e,t,n){const r=dt(e),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{a.push(r.Ha(u,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Hl.Yi(u.targetId,h);i.push(g)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,h){const d=dt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,w=>M.forEach(w.Hi,b=>d.persistence.referenceDelegate.addReference(g,w.targetId,b)).next(()=>M.forEach(w.Ji,b=>d.persistence.referenceDelegate.removeReference(g,w.targetId,b)))))}catch(g){if(!jr(g))throw g;tt(zl,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const b=d.Ts.get(w),C=b.snapshotVersion,V=b.withLastLimboFreeSnapshotVersion(C);d.Ts=d.Ts.insert(w,V)}}}(r.localStore,i))}async function TA(e,t){const n=dt(e);if(!n.currentUser.isEqual(t)){tt(Zl,"User change. New user:",t.toKey());const r=await Gp(n.localStore,t);n.currentUser=t,function(i,a){i.Ga.forEach(l=>{l.forEach(u=>{u.reject(new rt(O.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qs(n,r.Rs)}}function EA(e,t){const n=dt(e),r=n.Ua.get(t);if(r&&r.Ba)return Tt().add(r.key);{let s=Tt();const i=n.qa.get(t);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function hm(e){const t=dt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=EA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gA.bind(null,t),t.La.p_=rA.bind(null,t.eventManager),t.La.Ja=sA.bind(null,t.eventManager),t}function wA(e){const t=dt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_A.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yA.bind(null,t),t}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Vo(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return II(this.persistence,new TI,t.initialUser,this.serializer)}Xa(t){return new Wp(ql.ri,this.serializer)}Za(t){return new VI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class IA extends eo{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){Rt(this.persistence.referenceDelegate instanceof Zi);const r=this.persistence.referenceDelegate.garbageCollector;return new iI(r,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?ge.withCacheSize(this.cacheSizeBytes):ge.DEFAULT;return new Wp(r=>Zi.ri(r,n),this.serializer)}}class nl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TA.bind(null,this.syncEngine),await JI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tA}()}createDatastore(t){const n=Vo(t.databaseInfo.databaseId),r=function(i){return new NI(i)}(t.databaseInfo);return function(i,a,l,u){return new $I(i,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new BI(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>qh(this.syncEngine,n,0),function(){return Lh.D()?new Lh:new DI}())}createSyncEngine(t,n){return function(s,i,a,l,u,h,d){const g=new uA(s,i,a,l,u,h);return d&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=dt(s);tt(cr,"RemoteStore shutting down."),i.W_.add(5),await js(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nl.provider={build:()=>new nl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):fn("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Ln="FirestoreClient";class bA{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=me.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{tt(Ln,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(tt(Ln,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Xl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function va(e,t){e.asyncQueue.verifyOperationInProgress(),tt(Ln,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function zh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await SA(e);tt(Ln,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>$h(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>$h(t.remoteStore,s)),e._onlineComponents=t}async function SA(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){tt(Ln,"Using user provided OfflineComponentProvider");try{await va(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await va(e,new eo)}}else tt(Ln,"Using default OfflineComponentProvider"),await va(e,new IA(void 0));return e._offlineComponents}async function fm(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(tt(Ln,"Using user provided OnlineComponentProvider"),await zh(e,e._uninitializedComponentsProvider._online)):(tt(Ln,"Using default OnlineComponentProvider"),await zh(e,new nl))),e._onlineComponents}function RA(e){return fm(e).then(t=>t.syncEngine)}async function Kh(e){const t=await fm(e),n=t.eventManager;return n.onListen=cA.bind(null,t.syncEngine),n.onUnlisten=dA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=hA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=pA.bind(null,t.syncEngine),n}/**
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
 */function dm(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Map;/**
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
 */function pm(e,t,n){if(!n)throw new rt(O.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function CA(e,t,n,r){if(t===!0&&r===!0)throw new rt(O.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gh(e){if(!st.isDocumentKey(e))throw new rt(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qh(e){if(st.isDocumentKey(e))throw new rt(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function eu(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ct()}function sr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eu(e);throw new rt(O.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firestore.googleapis.com",Yh=!0;class Xh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PA,this.ssl=Yh}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Yh;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Kp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rI)throw new rt(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}CA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new rt(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new rt(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new rt(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class nu{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new rt(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new rt(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kE;switch(r.type){case"firstParty":return new LE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new rt(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wh.get(n);r&&(tt("ComponentProvider","Removing Datastore"),Wh.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Mo(this.firestore,t,this._query)}}class Ce{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ce(this.firestore,t,this._key)}}class Cn extends Mo{constructor(t,n,r){super(t,n,Ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ce(this.firestore,null,new st(t))}withConverter(t){return new Cn(this.firestore,t,this._path)}}function Jh(e,t,...n){if(e=je(e),pm("collection","path",t),e instanceof nu){const r=kt.fromString(t,...n);return Qh(r),new Cn(e,null,r)}{if(!(e instanceof Ce||e instanceof Cn))throw new rt(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Qh(r),new Cn(e.firestore,null,r)}}function rl(e,t,...n){if(e=je(e),arguments.length===1&&(t=ap.newId()),pm("doc","path",t),e instanceof nu){const r=kt.fromString(t,...n);return Gh(r),new Ce(e,null,new st(r))}{if(!(e instanceof Ce||e instanceof Cn))throw new rt(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Gh(r),new Ce(e.firestore,e instanceof Cn?e.converter:null,new st(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="AsyncQueue";class tf{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Yp(this,"async_queue_retry"),this.Su=()=>{const r=ya();r&&tt(Zh,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const n=ya();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new rr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!jr(t))throw t;tt(Zh,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const s=Yl.createAndSchedule(this,t,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ct()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}function ef(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Fr extends nu{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new tf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tf(t),this._firestoreClient=void 0,await t}}}function mm(e){if(e._terminated)throw new rt(O.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||VA(e),e._firestoreClient}function VA(e){var t,n,r;const s=e._freezeSettings(),i=function(l,u,h,d){return new JE(l,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dm(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new bA(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $r(Zt.fromBase64String(t))}catch(n){throw new rt(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $r(Zt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this._methodName=t}}/**
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
 */class su{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _t(this._lat,t._lat)||_t(this._long,t._long)}}/**
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
 */class iu{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const DA=/^__.*__$/;class xA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new qn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Us(t,this.data,n,this.fieldTransforms)}}class gm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new qn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function _m(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ct()}}class ou{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ou(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return no(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(_m(this.Lu)&&DA.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class MA{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Vo(t)}ju(t,n,r,s=!1){return new ou({Lu:t,methodName:n,zu:r,path:Jt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ym(e){const t=e._freezeSettings(),n=Vo(e._databaseId);return new MA(e._databaseId,!!t.ignoreUndefinedProperties,n)}function kA(e,t,n,r,s,i={}){const a=e.ju(i.merge||i.mergeFields?2:0,t,n,s);au("Data must be an object, but it was:",a,r);const l=vm(r,a);let u,h;if(i.merge)u=new Se(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const w=sl(t,g,n);if(!a.contains(w))throw new rt(O.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Em(d,w)||d.push(w)}u=new Se(d),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new xA(new _e(l),u,h)}class No extends ru{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof No}}function NA(e,t,n,r){const s=e.ju(1,t,n);au("Data must be an object, but it was:",s,r);const i=[],a=_e.empty();jn(r,(u,h)=>{const d=lu(t,u,n);h=je(h);const g=s.Uu(d);if(h instanceof No)i.push(d);else{const w=Oo(h,g);w!=null&&(i.push(d),a.set(d,w))}});const l=new Se(i);return new gm(a,l,s.fieldTransforms)}function OA(e,t,n,r,s,i){const a=e.ju(1,t,n),l=[sl(t,r,n)],u=[s];if(i.length%2!=0)throw new rt(O.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(sl(t,i[w])),u.push(i[w+1]);const h=[],d=_e.empty();for(let w=l.length-1;w>=0;--w)if(!Em(h,l[w])){const b=l[w];let C=u[w];C=je(C);const V=a.Uu(b);if(C instanceof No)h.push(b);else{const x=Oo(C,V);x!=null&&(h.push(b),d.set(b,x))}}const g=new Se(h);return new gm(d,g,a.fieldTransforms)}function Oo(e,t){if(Tm(e=je(e)))return au("Unsupported field value:",t,e),vm(e,t);if(e instanceof ru)return function(r,s){if(!_m(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Oo(l,s.Ku(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ww(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qt.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof qt){const i=new qt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof su)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $r)return{bytesValue:$p(s.serializer,r._byteString)};if(r instanceof Ce){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof iu)return function(a,l){return{mapValue:{fields:{[mp]:{stringValue:gp},[Wi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return Ll(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${eu(r)}`)}(e,t)}function vm(e,t){const n={};return up(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jn(e,(r,s)=>{const i=Oo(s,t.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tm(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof qt||e instanceof su||e instanceof $r||e instanceof Ce||e instanceof ru||e instanceof iu)}function au(e,t,n){if(!Tm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=eu(n);throw r==="an object"?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function sl(e,t,n){if((t=je(t))instanceof ko)return t._internalPath;if(typeof t=="string")return lu(e,t);throw no("Field path arguments must be of type string or ",e,!1,void 0,n)}const LA=new RegExp("[~\\*/\\[\\]]");function lu(e,t,n){if(t.search(LA)>=0)throw no(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ko(...t.split("."))._internalPath}catch{throw no(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function no(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new rt(O.INVALID_ARGUMENT,l+e+u)}function Em(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new FA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Im("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FA extends wm{data(){return super.data()}}function Im(e,t){return typeof t=="string"?lu(e,t):t instanceof ko?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new rt(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UA{convertValue(t,n="none"){switch(Nn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(kn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw ct()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return jn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[Wi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Lt(a.doubleValue));return new iu(i)}convertGeoPoint(t){return new su(Lt(t.latitude),Lt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Io(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const n=Mn(t);return new qt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=kt.fromString(t);Rt(zp(r));const s=new Ms(r.get(1),r.get(3)),i=new st(r.popFirst(5));return s.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Am extends wm{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Im("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ci extends Am{data(t={}){return super.data(t)}}class jA{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ci(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Ci(s._firestore,s._userDataWriter,l.doc.key,l.doc,new us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ci(s._firestore,s._userDataWriter,l.doc.key,l.doc,new us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:qA(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qA(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ct()}}class bm extends UA{constructor(t){super(),this.firestore=t}convertBytes(t){return new $r(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ce(this.firestore,null,n)}}function HA(e,t,n,...r){e=sr(e,Ce);const s=sr(e.firestore,Fr),i=ym(s);let a;return a=typeof(t=je(t))=="string"||t instanceof ko?OA(i,"updateDoc",e._key,t,n,r):NA(i,"updateDoc",e._key,t),uu(s,[a.toMutation(e._key,Ue.exists(!0))])}function zA(e){return uu(sr(e.firestore,Fr),[new Fl(e._key,Ue.none())])}function KA(e,t){const n=sr(e.firestore,Fr),r=rl(e),s=BA(e.converter,t);return uu(n,[kA(ym(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function WA(e,...t){var n,r,s;e=je(e);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ef(t[a])||(i=t[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ef(t[a])){const g=t[a];t[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),t[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,h,d;if(e instanceof Ce)h=sr(e.firestore,Fr),d=Ol(e._key.path),u={next:g=>{t[a]&&t[a](GA(h,e,g))},error:t[a+1],complete:t[a+2]};else{const g=sr(e,Mo);h=sr(g.firestore,Fr),d=g._query;const w=new bm(h);u={next:b=>{t[a]&&t[a](new jA(h,w,g,b))},error:t[a+1],complete:t[a+2]},$A(e._query)}return function(w,b,C,V){const x=new AA(V),B=new iA(b,x,C);return w.asyncQueue.enqueueAndForget(async()=>eA(await Kh(w),B)),()=>{x.su(),w.asyncQueue.enqueueAndForget(async()=>nA(await Kh(w),B))}}(mm(h),d,l,u)}function uu(e,t){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>mA(await RA(r),s,i)),i.promise}(mm(e),t)}function GA(e,t,n){const r=n.docs.get(t._key),s=new bm(e);return new Am(e,s,t._key,r,new us(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ur=s})(Zv),Dn(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Fr(new NE(r.getProvider("auth-internal")),new FE(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new rt(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ye(sh,ih,t),Ye(sh,ih,"esm2017")})();function Sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pi={exports:{}},QA=Pi.exports,nf;function YA(){return nf||(nf=1,function(e,t){(function(n,r){e.exports=r()})(QA,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",a="second",l="minute",u="hour",h="day",d="week",g="month",w="quarter",b="year",C="date",V="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(z){var q=["th","st","nd","rd"],U=z%100;return"["+z+(q[(U-20)%10]||q[U]||q[0])+"]"}},X=function(z,q,U){var j=String(z);return!j||j.length>=q?z:""+Array(q+1-j.length).join(U)+z},Q={s:X,z:function(z){var q=-z.utcOffset(),U=Math.abs(q),j=Math.floor(U/60),k=U%60;return(q<=0?"+":"-")+X(j,2,"0")+":"+X(k,2,"0")},m:function z(q,U){if(q.date()<U.date())return-z(U,q);var j=12*(U.year()-q.year())+(U.month()-q.month()),k=q.clone().add(j,g),nt=U-k<0,lt=q.clone().add(j+(nt?-1:1),g);return+(-(j+(U-k)/(nt?k-lt:lt-k))||0)},a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:g,y:b,w:d,d:h,D:C,h:u,m:l,s:a,ms:i,Q:w}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},ht="en",Z={};Z[ht]=J;var E="$isDayjsObject",m=function(z){return z instanceof I||!(!z||!z[E])},_=function z(q,U,j){var k;if(!q)return ht;if(typeof q=="string"){var nt=q.toLowerCase();Z[nt]&&(k=nt),U&&(Z[nt]=U,k=nt);var lt=q.split("-");if(!k&&lt.length>1)return z(lt[0])}else{var vt=q.name;Z[vt]=q,k=vt}return!j&&k&&(ht=k),k||!j&&ht},v=function(z,q){if(m(z))return z.clone();var U=typeof q=="object"?q:{};return U.date=z,U.args=arguments,new I(U)},T=Q;T.l=_,T.i=m,T.w=function(z,q){return v(z,{locale:q.$L,utc:q.$u,x:q.$x,$offset:q.$offset})};var I=function(){function z(U){this.$L=_(U.locale,null,!0),this.parse(U),this.$x=this.$x||U.x||{},this[E]=!0}var q=z.prototype;return q.parse=function(U){this.$d=function(j){var k=j.date,nt=j.utc;if(k===null)return new Date(NaN);if(T.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var lt=k.match(x);if(lt){var vt=lt[2]-1||0,mt=(lt[7]||"0").substring(0,3);return nt?new Date(Date.UTC(lt[1],vt,lt[3]||1,lt[4]||0,lt[5]||0,lt[6]||0,mt)):new Date(lt[1],vt,lt[3]||1,lt[4]||0,lt[5]||0,lt[6]||0,mt)}}return new Date(k)}(U),this.init()},q.init=function(){var U=this.$d;this.$y=U.getFullYear(),this.$M=U.getMonth(),this.$D=U.getDate(),this.$W=U.getDay(),this.$H=U.getHours(),this.$m=U.getMinutes(),this.$s=U.getSeconds(),this.$ms=U.getMilliseconds()},q.$utils=function(){return T},q.isValid=function(){return this.$d.toString()!==V},q.isSame=function(U,j){var k=v(U);return this.startOf(j)<=k&&k<=this.endOf(j)},q.isAfter=function(U,j){return v(U)<this.startOf(j)},q.isBefore=function(U,j){return this.endOf(j)<v(U)},q.$g=function(U,j,k){return T.u(U)?this[j]:this.set(k,U)},q.unix=function(){return Math.floor(this.valueOf()/1e3)},q.valueOf=function(){return this.$d.getTime()},q.startOf=function(U,j){var k=this,nt=!!T.u(j)||j,lt=T.p(U),vt=function(Pe,xt){var pe=T.w(k.$u?Date.UTC(k.$y,xt,Pe):new Date(k.$y,xt,Pe),k);return nt?pe:pe.endOf(h)},mt=function(Pe,xt){return T.w(k.toDate()[Pe].apply(k.toDate("s"),(nt?[0,0,0,0]:[23,59,59,999]).slice(xt)),k)},yt=this.$W,$t=this.$M,Ut=this.$D,de="set"+(this.$u?"UTC":"");switch(lt){case b:return nt?vt(1,0):vt(31,11);case g:return nt?vt(1,$t):vt(0,$t+1);case d:var Wt=this.$locale().weekStart||0,Oe=(yt<Wt?yt+7:yt)-Wt;return vt(nt?Ut-Oe:Ut+(6-Oe),$t);case h:case C:return mt(de+"Hours",0);case u:return mt(de+"Minutes",1);case l:return mt(de+"Seconds",2);case a:return mt(de+"Milliseconds",3);default:return this.clone()}},q.endOf=function(U){return this.startOf(U,!1)},q.$set=function(U,j){var k,nt=T.p(U),lt="set"+(this.$u?"UTC":""),vt=(k={},k[h]=lt+"Date",k[C]=lt+"Date",k[g]=lt+"Month",k[b]=lt+"FullYear",k[u]=lt+"Hours",k[l]=lt+"Minutes",k[a]=lt+"Seconds",k[i]=lt+"Milliseconds",k)[nt],mt=nt===h?this.$D+(j-this.$W):j;if(nt===g||nt===b){var yt=this.clone().set(C,1);yt.$d[vt](mt),yt.init(),this.$d=yt.set(C,Math.min(this.$D,yt.daysInMonth())).$d}else vt&&this.$d[vt](mt);return this.init(),this},q.set=function(U,j){return this.clone().$set(U,j)},q.get=function(U){return this[T.p(U)]()},q.add=function(U,j){var k,nt=this;U=Number(U);var lt=T.p(j),vt=function($t){var Ut=v(nt);return T.w(Ut.date(Ut.date()+Math.round($t*U)),nt)};if(lt===g)return this.set(g,this.$M+U);if(lt===b)return this.set(b,this.$y+U);if(lt===h)return vt(1);if(lt===d)return vt(7);var mt=(k={},k[l]=r,k[u]=s,k[a]=n,k)[lt]||1,yt=this.$d.getTime()+U*mt;return T.w(yt,this)},q.subtract=function(U,j){return this.add(-1*U,j)},q.format=function(U){var j=this,k=this.$locale();if(!this.isValid())return k.invalidDate||V;var nt=U||"YYYY-MM-DDTHH:mm:ssZ",lt=T.z(this),vt=this.$H,mt=this.$m,yt=this.$M,$t=k.weekdays,Ut=k.months,de=k.meridiem,Wt=function(xt,pe,A,S){return xt&&(xt[pe]||xt(j,nt))||A[pe].slice(0,S)},Oe=function(xt){return T.s(vt%12||12,xt,"0")},Pe=de||function(xt,pe,A){var S=xt<12?"AM":"PM";return A?S.toLowerCase():S};return nt.replace(B,function(xt,pe){return pe||function(A){switch(A){case"YY":return String(j.$y).slice(-2);case"YYYY":return T.s(j.$y,4,"0");case"M":return yt+1;case"MM":return T.s(yt+1,2,"0");case"MMM":return Wt(k.monthsShort,yt,Ut,3);case"MMMM":return Wt(Ut,yt);case"D":return j.$D;case"DD":return T.s(j.$D,2,"0");case"d":return String(j.$W);case"dd":return Wt(k.weekdaysMin,j.$W,$t,2);case"ddd":return Wt(k.weekdaysShort,j.$W,$t,3);case"dddd":return $t[j.$W];case"H":return String(vt);case"HH":return T.s(vt,2,"0");case"h":return Oe(1);case"hh":return Oe(2);case"a":return Pe(vt,mt,!0);case"A":return Pe(vt,mt,!1);case"m":return String(mt);case"mm":return T.s(mt,2,"0");case"s":return String(j.$s);case"ss":return T.s(j.$s,2,"0");case"SSS":return T.s(j.$ms,3,"0");case"Z":return lt}return null}(xt)||lt.replace(":","")})},q.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},q.diff=function(U,j,k){var nt,lt=this,vt=T.p(j),mt=v(U),yt=(mt.utcOffset()-this.utcOffset())*r,$t=this-mt,Ut=function(){return T.m(lt,mt)};switch(vt){case b:nt=Ut()/12;break;case g:nt=Ut();break;case w:nt=Ut()/3;break;case d:nt=($t-yt)/6048e5;break;case h:nt=($t-yt)/864e5;break;case u:nt=$t/s;break;case l:nt=$t/r;break;case a:nt=$t/n;break;default:nt=$t}return k?nt:T.a(nt)},q.daysInMonth=function(){return this.endOf(g).$D},q.$locale=function(){return Z[this.$L]},q.locale=function(U,j){if(!U)return this.$L;var k=this.clone(),nt=_(U,j,!0);return nt&&(k.$L=nt),k},q.clone=function(){return T.w(this.$d,this)},q.toDate=function(){return new Date(this.valueOf())},q.toJSON=function(){return this.isValid()?this.toISOString():null},q.toISOString=function(){return this.$d.toISOString()},q.toString=function(){return this.$d.toUTCString()},z}(),y=I.prototype;return v.prototype=y,[["$ms",i],["$s",a],["$m",l],["$H",u],["$W",h],["$M",g],["$y",b],["$D",C]].forEach(function(z){y[z[1]]=function(q){return this.$g(q,z[0],z[1])}}),v.extend=function(z,q){return z.$i||(z(q,I,v),z.$i=!0),v},v.locale=_,v.isDayjs=m,v.unix=function(z){return v(1e3*z)},v.en=Z[ht],v.Ls=Z,v.p={},v})}(Pi)),Pi.exports}var XA=YA();const Fe=Sm(XA),JA={__name:"TaskForm",emits:["add-task"],setup(e,{emit:t}){const n=t,r=un(""),s=un(""),i=un("");function a(){r.value&&s.value&&(n("add-task",{name:r.value,dueDate:s.value,subject:i.value}),r.value="",s.value="",i.value="")}return(l,u)=>(Ie(),Ge("form",{onSubmit:by(a,["prevent"])},[ps(Me("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>r.value=h),placeholder:"Enter a task",required:""},null,512),[[wi,r.value]]),ps(Me("input",{"onUpdate:modelValue":u[1]||(u[1]=h=>s.value=h),type:"datetime-local",required:""},null,512),[[wi,s.value]]),ps(Me("input",{type:"text","onUpdate:modelValue":u[2]||(u[2]=h=>i.value=h),placeholder:"Subject (e.g. Work)"},null,512),[[wi,i.value]]),u[3]||(u[3]=Me("button",{type:"submit"},"Add Task",-1))],32))}};var Vi={exports:{}},ZA=Vi.exports,rf;function t0(){return rf||(rf=1,function(e,t){(function(n,r){e.exports=r()})(ZA,function(){var n,r,s=1e3,i=6e4,a=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=31536e6,d=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,w={years:h,months:d,days:l,hours:a,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},b=function(Z){return Z instanceof Q},C=function(Z,E,m){return new Q(Z,m,E.$l)},V=function(Z){return r.p(Z)+"s"},x=function(Z){return Z<0},B=function(Z){return x(Z)?Math.ceil(Z):Math.floor(Z)},J=function(Z){return Math.abs(Z)},X=function(Z,E){return Z?x(Z)?{negative:!0,format:""+J(Z)+E}:{negative:!1,format:""+Z+E}:{negative:!1,format:""}},Q=function(){function Z(m,_,v){var T=this;if(this.$d={},this.$l=v,m===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return C(m*w[V(_)],this);if(typeof m=="number")return this.$ms=m,this.parseFromMilliseconds(),this;if(typeof m=="object")return Object.keys(m).forEach(function(z){T.$d[V(z)]=m[z]}),this.calMilliseconds(),this;if(typeof m=="string"){var I=m.match(g);if(I){var y=I.slice(2).map(function(z){return z!=null?Number(z):0});return this.$d.years=y[0],this.$d.months=y[1],this.$d.weeks=y[2],this.$d.days=y[3],this.$d.hours=y[4],this.$d.minutes=y[5],this.$d.seconds=y[6],this.calMilliseconds(),this}}return this}var E=Z.prototype;return E.calMilliseconds=function(){var m=this;this.$ms=Object.keys(this.$d).reduce(function(_,v){return _+(m.$d[v]||0)*w[v]},0)},E.parseFromMilliseconds=function(){var m=this.$ms;this.$d.years=B(m/h),m%=h,this.$d.months=B(m/d),m%=d,this.$d.days=B(m/l),m%=l,this.$d.hours=B(m/a),m%=a,this.$d.minutes=B(m/i),m%=i,this.$d.seconds=B(m/s),m%=s,this.$d.milliseconds=m},E.toISOString=function(){var m=X(this.$d.years,"Y"),_=X(this.$d.months,"M"),v=+this.$d.days||0;this.$d.weeks&&(v+=7*this.$d.weeks);var T=X(v,"D"),I=X(this.$d.hours,"H"),y=X(this.$d.minutes,"M"),z=this.$d.seconds||0;this.$d.milliseconds&&(z+=this.$d.milliseconds/1e3,z=Math.round(1e3*z)/1e3);var q=X(z,"S"),U=m.negative||_.negative||T.negative||I.negative||y.negative||q.negative,j=I.format||y.format||q.format?"T":"",k=(U?"-":"")+"P"+m.format+_.format+T.format+j+I.format+y.format+q.format;return k==="P"||k==="-P"?"P0D":k},E.toJSON=function(){return this.toISOString()},E.format=function(m){var _=m||"YYYY-MM-DDTHH:mm:ss",v={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return _.replace(u,function(T,I){return I||String(v[T])})},E.as=function(m){return this.$ms/w[V(m)]},E.get=function(m){var _=this.$ms,v=V(m);return v==="milliseconds"?_%=1e3:_=v==="weeks"?B(_/w[v]):this.$d[v],_||0},E.add=function(m,_,v){var T;return T=_?m*w[V(_)]:b(m)?m.$ms:C(m,this).$ms,C(this.$ms+T*(v?-1:1),this)},E.subtract=function(m,_){return this.add(m,_,!0)},E.locale=function(m){var _=this.clone();return _.$l=m,_},E.clone=function(){return C(this.$ms,this)},E.humanize=function(m){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!m)},E.valueOf=function(){return this.asMilliseconds()},E.milliseconds=function(){return this.get("milliseconds")},E.asMilliseconds=function(){return this.as("milliseconds")},E.seconds=function(){return this.get("seconds")},E.asSeconds=function(){return this.as("seconds")},E.minutes=function(){return this.get("minutes")},E.asMinutes=function(){return this.as("minutes")},E.hours=function(){return this.get("hours")},E.asHours=function(){return this.as("hours")},E.days=function(){return this.get("days")},E.asDays=function(){return this.as("days")},E.weeks=function(){return this.get("weeks")},E.asWeeks=function(){return this.as("weeks")},E.months=function(){return this.get("months")},E.asMonths=function(){return this.as("months")},E.years=function(){return this.get("years")},E.asYears=function(){return this.as("years")},Z}(),ht=function(Z,E,m){return Z.add(E.years()*m,"y").add(E.months()*m,"M").add(E.days()*m,"d").add(E.hours()*m,"h").add(E.minutes()*m,"m").add(E.seconds()*m,"s").add(E.milliseconds()*m,"ms")};return function(Z,E,m){n=m,r=m().$utils(),m.duration=function(T,I){var y=m.locale();return C(T,{$l:y},I)},m.isDuration=b;var _=E.prototype.add,v=E.prototype.subtract;E.prototype.add=function(T,I){return b(T)?ht(this,T,1):_.bind(this)(T,I)},E.prototype.subtract=function(T,I){return b(T)?ht(this,T,-1):v.bind(this)(T,I)}}})}(Vi)),Vi.exports}var e0=t0();const n0=Sm(e0),r0=["id"],s0={__name:"TaskItem",props:["task","useFlip"],emits:["edit","remove"],setup(e,{emit:t}){Fe.extend(n0);const n=e,r=t,s=un(!1),i=un(n.task.name),a=un("");let l;const u=Fi(()=>{const w=Fe(),C=Fe(n.task.dueDate).diff(w,"hour");return C<0?"overdue":C<=24?"soon":"safe"}),h=()=>{const w=Fe(),C=Fe(n.task.dueDate).diff(w);if(C<=0)a.value="⏰ Time's up!";else{const V=Fe.duration(C),x=Math.floor(V.asDays()),B=V.hours(),J=V.minutes(),X=V.seconds();x==0?B==0?a.value=`${J}m ${X}s`:a.value=`${B}h ${J}m ${X}s`:B==0?a.value=`${x}d ${J}m ${X}s`:a.value=`${x}d ${B}h ${J}m ${X}s`}};fo(()=>{if(h(),l=setInterval(h,1e3),n.useFlip){const w=Fe(),b=Fe(n.task.dueDate),C=Math.max(0,b.diff(w,"second"));new FlipClock(document.getElementById("flip-"+n.task.id),C,{countdown:!0,autoStart:!0})}}),vl(()=>clearInterval(l));const d=Fe(n.task.dueDate).format("MMMM D, YYYY h:mm A"),g=()=>{s.value=!1,i.value!==n.task.name&&r("edit",i.value)};return vi(()=>n.task.name,w=>i.value=w),(w,b)=>(Ie(),Ge("li",null,[s.value?ci("",!0):(Ie(),Ge("span",{key:0,onClick:b[0]||(b[0]=C=>s.value=!0)},hs(e.task.name),1)),s.value?ps((Ie(),Ge("input",{key:1,"onUpdate:modelValue":b[1]||(b[1]=C=>i.value=C),onBlur:g,onKeyup:Ry(g,["enter"])},null,544)),[[wi,i.value]]):ci("",!0),e.useFlip?ci("",!0):(Ie(),Ge("div",{key:2,class:ao(["countdown-box",u.value])},[hd(" Due: "+hs(Cf(d)),1),b[3]||(b[3]=Me("br",null,null,-1)),Me("strong",null,hs(a.value),1)],2)),e.useFlip?(Ie(),Ge("div",{key:3,id:"flip-"+e.task.id},null,8,r0)):ci("",!0),Me("button",{onClick:b[2]||(b[2]=C=>w.$emit("remove"))},"❌")]))}},i0=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},o0={__name:"TaskList",props:["tasks","useFlip"],emits:["remove-task","edit-task"],setup(e){return(t,n)=>(Ie(),Va(gy,{name:"fade-slide",tag:"ul"},{default:Of(()=>[(Ie(!0),Ge(we,null,qf(e.tasks,r=>(Ie(),Va(s0,{key:r.id,task:r,useFlip:e.useFlip,onRemove:()=>t.$emit("remove-task",r.id),onEdit:s=>t.$emit("edit-task",r.id,s)},null,8,["task","useFlip","onRemove","onEdit"]))),128))]),_:1}))}},a0=i0(o0,[["__scopeId","data-v-4775b212"]]),l0=["value"],u0={__name:"App",setup(e){const t=un([]),n=un(nh.currentUser);nh.onAuthStateChanged(V=>{n.value=V,V&&s()});let r=null;function s(){r&&r();const V=Jh(hi,"users",n.value.uid,"tasks");r=WA(V,x=>{t.value=x.docs.map(B=>({id:B.id,...B.data()}))})}async function i(V){const x=Jh(hi,"users",n.value.uid,"tasks");await KA(x,V)}async function a(V){const x=rl(hi,"users",n.value.uid,"tasks",V);await zA(x)}async function l(V,x){const B=rl(hi,"users",n.value.uid,"tasks",V);await HA(B,x)}const u=un(""),h=Fi(()=>{const V=t.value.map(x=>x.subject||"General");return[...new Set(V)]}),d=Fi(()=>u.value?t.value.filter(V=>V.subject===u.value):t.value);fo(()=>{s(),w(),b()});const g=new Set,w=()=>{"Notification"in window&&Notification.requestPermission()},b=()=>{setInterval(()=>{const V=Fe();t.value.forEach(x=>{const B=Fe(x.dueDate),J=B.diff(V,"minute");J<=10&&J>=0&&!g.has(x.id)&&(g.add(x.id),C(x.name,B))})},1e3)},C=(V,x)=>{Notification.permission==="granted"&&new Notification("⏰ Task Due Soon",{body:`${V} is due at ${x.format("h:mm A")}`})};return(V,x)=>(Ie(),Ge("main",null,[x[2]||(x[2]=Me("h1",null,"📝 My Tasks",-1)),Ne(JA,{onAddTask:i}),ps(Me("select",{"onUpdate:modelValue":x[0]||(x[0]=B=>u.value=B)},[x[1]||(x[1]=Me("option",{value:""},"All Subjects",-1)),(Ie(!0),Ge(we,null,qf(h.value,B=>(Ie(),Ge("option",{key:B,value:B},hs(B),9,l0))),128))],512),[[wy,u.value]]),Ne(a0,{tasks:d.value,useFlip:V.useFlip,onRemoveTask:a,onEditTask:l},null,8,["tasks","useFlip"])]))}},c0=Vy(u0);c0.mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});
