import{_ as i}from"../chunks/preload-helper.a4192956.js";import{H as c}from"../chunks/control.f5b05b5f.js";import{s as _,n as s}from"../chunks/scheduler.4f32addc.js";import{S as u,i as m,g as d,m as p,h as f,j as v,n as h,f as l,a as x,x as y,o as E}from"../chunks/index.12f171ce.js";const P=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function b(e,t){return new c(e,t)}new TextEncoder;const g=async({params:e})=>{try{return console.log(e),{content:(await P(Object.assign({"../../../tales/buddha.txt":()=>i(()=>import("../chunks/buddha.b2ccf9bd.js"),[],import.meta.url),"../../../tales/hello.txt":()=>i(()=>import("../chunks/hello.71dd74ef.js"),[],import.meta.url),"../../../tales/raja.txt":()=>i(()=>import("../chunks/raja.04cc622d.js"),[],import.meta.url)}),`../../../tales/${e.tales}.txt`)).default}}catch{throw b(404,`Could not find ${e.tales}`)}},R=Object.freeze(Object.defineProperty({__proto__:null,load:g},Symbol.toStringTag,{value:"Module"}));function w(e){let t,o=e[0].content+"",a;return{c(){t=d("p"),a=p(o)},l(n){t=f(n,"P",{});var r=v(t);a=h(r,o),r.forEach(l)},m(n,r){x(n,t,r),y(t,a)},p(n,[r]){r&1&&o!==(o=n[0].content+"")&&E(a,o)},i:s,o:s,d(n){n&&l(t)}}}function O(e,t,o){let{data:a}=t;return e.$$set=n=>{"data"in n&&o(0,a=n.data)},[a]}class S extends u{constructor(t){super(),m(this,t,O,w,_,{data:0})}}export{S as component,R as universal};